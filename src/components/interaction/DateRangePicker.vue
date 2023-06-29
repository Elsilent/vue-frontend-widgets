<script lang="ts" setup>
import { DateTime } from 'luxon';
import { ref, toRefs, watch } from 'vue';
import Align from '../container/Align.vue';
import Button from './Button.vue';
import type { CalendarMode } from './Calendar.vue';
import Calendar from './Calendar.vue';
import Info from '../label/Info.vue';
import Input from './Input.vue';
import Popover from '../container/Popover.vue';
import type { DateRangePreset } from '../../utils/date';
import { dateFormat, rangeFromPreset, rangeToDisplayFormat, tryRangeFromDisplayFormat } from '../../utils/date';

const props = withDefaults(
  defineProps<{
    dateRangePresets: Record<string, DateRangePreset>,
    disabled?: boolean;
    modelValue: [string, string],
    monthLabels: string[];
    translator: (code: string) => string,
  }>(),
  {
    disabled: false,
  },
);

const {
  dateRangePresets,
  disabled,
  modelValue,
} = toRefs(props);

const active = ref(false);
const dateRangePicker = ref<typeof Align|null>();
const dateRangePickerInput = ref<typeof Input|null>();

const getRangeMonths = (range: [string, string]) => {
  const dateFrom = DateTime.fromFormat(range[0], dateFormat.yearMonthDay);
  const dateTo = DateTime.fromFormat(range[1], dateFormat.yearMonthDay);
  const monthFrom = dateFrom.toFormat(dateFormat.yearMonth);
  const monthTo = dateFrom.hasSame(dateTo, 'month') && dateTo.endOf('month') < DateTime.now()
    ? dateTo.plus({ month: 1 }).toFormat(dateFormat.yearMonth)
    : dateTo.toFormat(dateFormat.yearMonth);

  return [
    monthFrom,
    monthTo,
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
  (event: 'update:modelValue', dateRange: [string, string]): void,
}>();

const isPresetActive = (preset: DateRangePreset) => {
  const [dateFrom, dateTo] = rangeFromPreset(preset);

  return dateFrom === modelValue.value[0] && dateTo === modelValue.value[1];
};

const calendarMode = ref<CalendarMode>('start');

const updateModelValue = (modelValue: [string, string]) => {
  emit('update:modelValue', modelValue);

  if (calendarMode.value === 'start') {
    calendarMode.value = 'end';
  } else {
    whenBlurred();
  }
};

watch(modelValue, () => {
  textValue.value = getTextValue();
});

const whenBlurred = (event?: FocusEvent) => {
  if (!event || !dateRangePicker.value?.$el.contains(event.relatedTarget)) {
    active.value = false;

    calendarMode.value = 'start';

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
  @click='() => activate()',
  ref='dateRangePicker',
  tabindex='-1',
)
  Input(
    ref='dateRangePickerInput',
    v-model='textValue',
    @blur='(event) => whenBlurred(event)',
    :disabled='disabled',
  )
  Button.no-spacing(
    :disabled='disabled',
    icon='calendar',
    mood='inactive',
  )
  Popover.date-range-picker-body.no-spacing(:visible='active')
    Align.sections
      Align.presets(column)
        Info.preset(
          v-for='(preset, presetCode) in dateRangePresets',
          @click.stop="() => whenPresetSelected(presetCode)",
          :class='{ active: isPresetActive(preset) }',
          size='small',
        ) {{ translator(preset.label) }}
      Align.calendars
        Calendar(
          @update:range="(range) => updateModelValue(range)",
          :range='modelValue',
          v-model:yearMonth='leftCalendarYearMonth',
          :mode='calendarMode',
          :monthLabels='monthLabels',
        )
        Calendar(
          @update:range="(range) => updateModelValue(range)",
          :range='modelValue',
          v-model:yearMonth='rightCalendarYearMonth',
          :mode='calendarMode',
          :monthLabels='monthLabels',
        )
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/radius.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.date-range-picker {
  position: relative;

  > .button {
    border-bottom-left-radius: 0;
    border-left-width: 0;
    border-top-left-radius: 0;
  }

  > .input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    width: 12rem;
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

    > .sections {
      > .presets {
        width: 15rem;

        > .preset {
          cursor: pointer;
          padding: $padding-size-normal;
          transition-property: background-color, color;

          &.active {
            @include apply-color(background-color, background-accent);
            @include apply-color(color, white);
          }

          &:hover:not(.active) {
            @include apply-color(background-color, background-lowered);

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
