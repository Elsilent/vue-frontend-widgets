<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import { ElDatePicker } from 'element-plus';
import { dayjs } from 'element-plus';
import dayjsLocale from 'dayjs/locale/en';

const props = defineProps(['monthsShort', 'months']);

// localisation for months in input
const monthsLabels = {
  ...dayjsLocale,
  months: props.months,
  // Without this dayjs derives the short names by slicing `months` to 3 chars,
  // which collides in French ("Juin" and "Juillet" both give "jui").
  monthsShort: props.monthsShort,
};
dayjs.locale(monthsLabels);

// localisation for short months in popoup
const monthsShortLabels: Record<string, string> = {};

props.monthsShort.forEach((monthLabel: string) => {
  const key = monthLabel.toLowerCase();
  monthsShortLabels[key] = monthLabel;
});

const locale = {
  name: 'el',
  el: {
    datepicker: {
      year: '',
      months: monthsShortLabels,
    },
  },
};
</script>

<template lang="pug">
ElConfigProvider(:locale="locale")
  ElDatePicker(type="month" size="large" :clearable="false" prefix-icon="undefined"  v-bind="$attrs")
</template>

<style lang="scss">
.el-date-editor--month .el-input__prefix {
  display: none;
}
</style>
