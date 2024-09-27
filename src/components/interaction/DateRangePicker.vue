<script lang="ts" setup>
import { DateTime } from 'luxon';
import { ref, toRefs, watch } from 'vue';
import Align from '../container/Align.vue';
import Button from './Button.vue';
import Calendar from './Calendar.vue';
import Info from '../label/Info.vue';
import Input from './Input.vue';
import Popover from '../container/Popover.vue';
import type { DateRangePreset } from '../../utils/date';
import {
  dateFormat,
  rangeFromPreset,
  rangeToDisplayFormat,
  tryRangeFromDisplayFormat,
} from '../../utils/date';

const props = withDefaults(
  defineProps<{
    dateRangePresets: Record<string, DateRangePreset>;
    disabled?: boolean;
    modelValue: [string, string];
    monthLabels: string[];
    weekLabels: string[];
    minDate?: string;
  }>(),
  {
    minDate: undefined,
    disabled: false,
  },
);

const { dateRangePresets, disabled, modelValue } = toRefs(props);

const active = ref(false);
const dateRangePicker = ref<typeof Align | null>();
const dateRangePickerInput = ref<typeof Input | null>();

const leftCalendar = ref<InstanceType<typeof Calendar> | null>(null);
const rightCalendar = ref<InstanceType<typeof Calendar> | null>(null);

const getRangeMonths = (range: [string, string]) => {
  const dateFrom = DateTime.fromFormat(range[0], dateFormat.yearMonthDay);
  const dateTo = DateTime.fromFormat(range[1], dateFormat.yearMonthDay);

  const isSameMonths = dateFrom.hasSame(dateTo, 'month');
  const isTodayMonths = dateTo.endOf('month') >= DateTime.now();

  if (!isSameMonths) {
    return [dateFrom.toFormat(dateFormat.yearMonth), dateTo.toFormat(dateFormat.yearMonth)];
  }

  if (isTodayMonths) {
    return [
      dateFrom.minus({ month: 1 }).toFormat(dateFormat.yearMonth),
      dateTo.toFormat(dateFormat.yearMonth),
    ];
  }

  return [
    dateFrom.toFormat(dateFormat.yearMonth),
    dateTo.plus({ month: 1 }).toFormat(dateFormat.yearMonth),
  ];
};

const getTextValue = () => rangeToDisplayFormat(modelValue.value);

const textValue = ref(getTextValue());

const resetCalendars = (range: [string, string]) => {
  const currentValueMonths = getRangeMonths(range);

  leftCalendarYearMonth.value = currentValueMonths[0];
  rightCalendarYearMonth.value = currentValueMonths[1];
};

const activate = () => {
  if (active.value || disabled.value) {
    return;
  }

  active.value = true;

  resetCalendars(modelValue.value);

  dateRangePickerInput.value?.$el.focus();
};

const emit = defineEmits<{
  (event: 'update:modelValue', dateRange: [string, string]): void;
}>();

const isPresetActive = (preset: DateRangePreset) => {
  const [dateFrom, dateTo] = rangeFromPreset(preset);

  return dateFrom === modelValue.value[0] && dateTo === modelValue.value[1];
};

const updateModelValue = (modelValue: [string, string]) => {
  emit('update:modelValue', modelValue);
  whenBlurred();
};

watch(modelValue, () => {
  textValue.value = getTextValue();
});

const whenBlurred = (event?: FocusEvent) => {
  if (!event || !dateRangePicker.value?.$el.contains(event.relatedTarget)) {
    active.value = false;

    leftCalendar.value?.resetSelectedDay();
    rightCalendar.value?.resetSelectedDay();
    dateRangePickerInput.value?.$el.blur();

    return;
  }

  dateRangePickerInput.value?.$el.focus();
};

const whenPresetSelected = (presetCode: string) => {
  const range = rangeFromPreset(dateRangePresets.value[presetCode]);

  emit('update:modelValue', range);

  resetCalendars(range);

  whenBlurred();
};

const currentValueMonths = getRangeMonths(modelValue.value);

const leftCalendarYearMonth = ref(currentValueMonths[0]);
const rightCalendarYearMonth = ref(currentValueMonths[1]);

watch(textValue, (textValue) => {
  const range = tryRangeFromDisplayFormat(textValue);

  if (range) {
    emit('update:modelValue', range);
  }
});
</script>

<template lang="pug">
Align.date-range-picker(
  @click='activate()',
  ref='dateRangePicker',
  tabindex='-1',
)
  Input(
    ref='dateRangePickerInput',
    v-model='textValue',
    @focus='activate()',
    @blur='(event) => whenBlurred(event)',
    :disabled='disabled',
  )
  Button.no-spacing(
    :disabled='disabled',
    icon='calendar-days',
    mood='inactive',
    tabindex="-1",
  )
  Popover.date-range-picker-body.no-spacing(:visible='active')
    Align.sections
      Align.presets(column)
        Info.preset(
          v-for='(preset, presetCode) in dateRangePresets',
          @click.stop="() => whenPresetSelected(presetCode)",
          :class='{ active: isPresetActive(preset) }',
          size='small',
        ) {{ preset.label }}
      Align.calendars
        Calendar(
          ref="leftCalendar",
          @update:range="(range) => updateModelValue(range)",
          v-model:yearMonth='leftCalendarYearMonth',
          @selectDay="rightCalendar?.setSelectedDay($event)",
          @hoverDay="rightCalendar?.setHoveredDay($event)",
          :monthLabels='monthLabels',
          :range='modelValue',
          :weekLabels='weekLabels',
          :relatedMaxDate="DateTime.fromFormat(rightCalendarYearMonth, dateFormat.yearMonth).endOf('month').toFormat(dateFormat.yearMonthDay)"
          :minDate="minDate"
        )
        Calendar(
          ref="rightCalendar",
          @update:range="(range) => updateModelValue(range)",
          v-model:yearMonth='rightCalendarYearMonth',
          @selectDay="leftCalendar?.setSelectedDay($event)",
          @hoverDay="leftCalendar?.setHoveredDay($event)",
          :monthLabels='monthLabels',
          :range='modelValue',
          :weekLabels='weekLabels',
          :relatedMinDate="DateTime.fromFormat(leftCalendarYearMonth, dateFormat.yearMonth).startOf('month').toFormat(dateFormat.yearMonthDay)"
          :minDate="minDate"
        )
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/radius.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.date-range-picker {
  outline: none;
  position: relative;

  > .button {
    border-bottom-left-radius: 0;
    border-left-width: 0;
    border-top-left-radius: 0;
  }

  > .input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    width: 14rem;
  }

  > .date-range-picker-body.popover {
    @include apply-color(border-color, border-inactive);
    @include apply-color(box-shadow, white, $value-prefix: 0 0 0);

    border-radius: $border-radius-normal;
    border-style: solid;
    border-width: 1px;
    left: 0;
    padding: 0;
    top: calc(100% + $padding-size-small-2);
    max-width: none;

    > .sections {
      > .presets {
        width: 15rem;

        > .preset {
          cursor: pointer;
          padding: $padding-size-normal;
          transition-property: background-color, color;

          &.active {
            @include apply-color(background-color, background-list-accent);
            @include apply-color(color, white);
          }

          &:hover:not(.active) {
            @include apply-color(background-color, background-normal);

            transition-duration: $transition-duration-fast;
          }
        }
      }

      > .calendars {
        @include apply-color(border-color, border-inactive);

        border-left-style: solid;
        border-left-width: 1px;

        > .calendar {
          margin: $padding-size-small;
        }
      }
    }
  }
}
</style>
