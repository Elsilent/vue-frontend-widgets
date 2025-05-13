<script lang="ts" setup>
import { DateTime } from 'luxon';
import { ref, toRefs, watch } from 'vue';
import Align from './Align.vue';
import Button from './Button.vue';
import Calendar from './Calendar.vue';
import Input from './Input.vue';
import BodyPopover from './BodyPopover.vue';
import { dateFormat, dateToDisplayFormat } from '@/utils/date';

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    modelValue: string;
    monthLabels: string[];
    weekLabels: string[];
    minDate?: string;
    maxDate?: string;
  }>(),
  {
    disabled: false,
  },
);

const { disabled, modelValue } = toRefs(props);

const emit = defineEmits<{
  (event: 'update:modelValue', date: string): void;
}>();

const datePicker = ref<typeof Align | null>();
const datePickerInput = ref<typeof Input | null>();
const calendarRef = ref<InstanceType<typeof Calendar> | null>(null);

const active = ref(false);

const getTextValue = () => {
  if (DateTime.fromFormat(modelValue.value, dateFormat.yearMonthDay).isValid) {
    return dateToDisplayFormat(modelValue.value);
  }
  return '';
};

const textValue = ref(getTextValue());

const getYearMonth = (date: string) => {
  return date
    ? DateTime.fromFormat(date, dateFormat.yearMonthDay).toFormat(dateFormat.yearMonth)
    : DateTime.now().toFormat(dateFormat.yearMonth);
};

const yearMonth = ref(getYearMonth(modelValue.value));

const activate = () => {
  if (active.value || disabled.value) {
    return;
  }
  active.value = true;
  yearMonth.value = getYearMonth(modelValue.value);
  datePickerInput.value?.$el.focus();
};

const whenBlurred = (event?: FocusEvent) => {
  if (
    !event ||
    (!datePicker.value?.$el.contains(event.relatedTarget) &&
      !calendarRef.value?.$el.contains(event.relatedTarget))
  ) {
    active.value = false;
    datePickerInput.value?.$el.blur();
    return;
  }
  datePickerInput.value?.$el.focus();
};

const updateModelValue = ([modelValue]: [string, string]) => {
  emit('update:modelValue', modelValue);
  active.value = false;
  datePickerInput.value?.$el.blur();
};

watch(modelValue, () => {
  textValue.value = getTextValue();
});

watch(textValue, (textValue) => {
  const date = DateTime.fromFormat(textValue, dateFormat.yearMonthDayDisplay);
  if (date.isValid) {
    emit('update:modelValue', date.toFormat(dateFormat.yearMonthDay));
  } else {
    emit('update:modelValue', '');
  }
});
</script>

<template lang="pug">

Align.date-picker(
  @click.stop ='activate()',
  ref='datePicker',
  tabindex='-1',
)
  Input(
    ref='datePickerInput',
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
    @click.stop='active ? active = false : activate()',
  )
  BodyPopover(
    :visible="active",
    autoPosition,
    :parentNode="datePicker?.$el",
    popoverClass="date-range-picker-body",
    placementY="bottom"
    placementX="left"
    containerSelector="#app > .app-container > .app > .view "
  )
    Calendar(
      ref="calendarRef",
      :isSingleSelect="true",
      :monthLabels='monthLabels',
      :weekLabels='weekLabels',
      :range="[modelValue, '']",
      @update:range="(range) => updateModelValue(range)",
      v-model:yearMonth="yearMonth"
      :minDate="minDate"
      :maxDate="maxDate"
    )
</template>

<style lang="scss" scoped>
@use '../styles/transition' as transition;

.date-picker {
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
}
</style>

<style lang="scss">
@use '../styles/colors' as colors;
@use '../styles/spacing' as spacing;
@use '../styles/radius' as radius;

.date-range-picker-body {
  @include colors.apply-color(border-color, border-inactive);
  @include colors.apply-color(box-shadow, white, $value-prefix: 0 0 0);

  box-sizing: content-box;
  border-radius: radius.$border-radius-normal;
  border-style: solid;
  border-width: 1px;
  left: 0;
  top: calc(100% + spacing.$padding-size-small-2);
}
</style>
