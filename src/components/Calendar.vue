<script lang="ts" setup>
import { DateTime, Duration } from 'luxon';
import { computed, toRefs, watch, ref } from 'vue';
import Align from './Align.vue';
import Button from './Button.vue';
import Dropdown from './Dropdown.vue';
import Grid from './Grid.vue';
import Info from './Info.vue';
import { dateFormat, normalizeRange } from '../utils/date';
import type { Mood } from '../utils/enum/mood';
import type { CalendarMode } from '../utils/type/component/interaction/calendar';

const props = withDefaults(
  defineProps<{
    minDate?: string;
    maxDate?: string;
    monthLabels: string[];
    range: [string, string];
    weekLabels?: string[];
    yearMonth: string;
    relatedMaxDate?: string;
    relatedMinDate?: string;
    isSingleSelect?: boolean;
  }>(),
  {
    minDate: '2020-01-01',
    isSingleSelect: false,
  },
);

const {
  minDate,
  maxDate,
  monthLabels,
  range,
  weekLabels,
  yearMonth,
  relatedMinDate,
  relatedMaxDate,
  isSingleSelect,
} = toRefs(props);

const now = DateTime.now();
const mode = ref<CalendarMode>('start');

const maxDateTimestamp = computed(() =>
  maxDate?.value ? DateTime.fromFormat(maxDate.value, dateFormat.yearMonthDay) : now,
);
const maxYear = maxDateTimestamp.value.year;

const minDateTimestamp = computed(() =>
  DateTime.fromFormat(minDate.value, dateFormat.yearMonthDay),
);
const relatedMinDateTimestamp = computed(() =>
  relatedMinDate?.value
    ? DateTime.fromFormat(relatedMinDate?.value, dateFormat.yearMonthDay)
    : undefined,
);
const relatedMaxDateTimestamp = computed(() =>
  relatedMaxDate?.value
    ? DateTime.fromFormat(relatedMaxDate?.value, dateFormat.yearMonthDay)
    : undefined,
);

const currentMonthIndex = computed(
  () => DateTime.fromFormat(yearMonth.value, dateFormat.yearMonth).month - 1,
);
const currentYear = computed(() => DateTime.fromFormat(yearMonth.value, dateFormat.yearMonth).year);

const monthItems = computed(() =>
  monthLabels.value.reduce(
    (monthItems, month, index) => {
      monthItems[index] = month;

      return monthItems;
    },
    {} as Record<number, string>,
  ),
);

const rangeEnd = computed(() => DateTime.fromFormat(range.value[1], dateFormat.yearMonthDay));
const rangeStart = computed(() => DateTime.fromFormat(range.value[0], dateFormat.yearMonthDay));

// Creates exactly 7 labels even if passed labels are shorter or longer
const strictWeekLabels = computed(() =>
  weekLabels?.value
    ? Array.apply(null, Array(7)).map((_, index) => weekLabels.value![index] ?? '')
    : undefined,
);

const yearItems = computed(() => {
  const minYear = minDateTimestamp.value.year;

  return new Array(maxYear - minYear + 1).fill(0).reduce(
    (yearItems, _, index) => {
      const year = minYear + index;

      yearItems[year] = year.toString();

      return yearItems;
    },
    {} as Record<number, string>,
  );
});

const yearMonthStart = computed(() =>
  DateTime.fromFormat(yearMonth.value, dateFormat.yearMonth).startOf('month'),
);

const calendarStart = computed(() => {
  const yearMonthWeekStart = yearMonthStart.value.startOf('week');

  if (yearMonthStart.value.hasSame(yearMonthWeekStart, 'day')) {
    return yearMonthStart.value.minus(
      Duration.fromObject({
        weeks: 1,
      }),
    );
  } else {
    return yearMonthWeekStart;
  }
});

// 7 days with 6 rows
const visibleDaysInCalendar = 7 * 6;

const calendarGridDayNumbers = computed(() =>
  new Array(visibleDaysInCalendar).fill(0).map((_, index) =>
    calendarStart.value.plus({
      days: index,
    }),
  ),
);

const emit = defineEmits<{
  (event: 'update:range', value: [string, string]): void;
  (event: 'update:yearMonth', value: string): void;
  (event: 'selectDay', value: DateTime): void;
  (event: 'hoverDay', value: DateTime): void;
}>();

const belongsToCurrentMonth = (date: DateTime) => date.hasSame(yearMonthStart.value, 'month');

const dayClasses = (day: DateTime) => {
  return {
    'in-range': !currentSelected.value && day >= rangeStart.value && day <= rangeEnd.value,
    now: now.hasSame(day, 'day') && belongsToCurrentMonth(day),
    hovered:
      (day >= currentHovered.value! && day <= currentSelected.value!) ||
      (day <= currentHovered.value! && day >= currentSelected.value!),
    'selected-day': currentSelected.value?.hasSame(day, 'day'),
    'single-selected-day': isSingleSelect.value && rangeStart.value.hasSame(day, 'day'),
    'first-day': !currentSelected.value && day.hasSame(rangeStart.value, 'day'),
    'first-selected-day':
      currentSelected.value &&
      ((day.hasSame(currentSelected.value, 'day') &&
        currentSelected.value <= currentHovered.value!) ||
        (day.hasSame(currentHovered.value!, 'day') &&
          currentSelected.value >= currentHovered.value!)),
    'last-day': !currentSelected.value && day.hasSame(rangeEnd.value, 'day'),
    'last-selected-day':
      currentSelected.value &&
      ((day.hasSame(currentSelected.value, 'day') &&
        currentSelected.value >= currentHovered.value!) ||
        (day.hasSame(currentHovered.value!, 'day') &&
          currentSelected.value <= currentHovered.value!)),
    'this-month': belongsToCurrentMonth(day),
  };
};
const dayMood = (day: DateTime): Mood => {
  if (now.hasSame(day, 'day') && belongsToCurrentMonth(day)) {
    return 'important';
  }
  return 'neutral';
};
const hasNextMonth = computed(
  () =>
    yearMonthStart.value.endOf('month') <
    (relatedMaxDateTimestamp.value?.minus({ month: 1 }) ?? maxDateTimestamp.value).endOf('month'),
);
const hasPreviousMonth = computed(
  () =>
    (relatedMinDateTimestamp.value?.plus({ month: 1 }) ?? minDateTimestamp.value).startOf('month') <
    yearMonthStart.value,
);
const nextMonth = () => {
  const month = yearMonthStart.value.month;

  updateMonth(month < 12 ? month : 0, month < 12 ? undefined : yearMonthStart.value.year + 1);
};
const previousMonth = () => {
  const month = yearMonthStart.value.month - 2;

  updateMonth(month >= 0 ? month : 11, month >= 0 ? undefined : yearMonthStart.value.year - 1);
};
const updateMonth = (monthIndex: number | string | symbol, year?: number) => {
  const newYearMonth = yearMonthStart.value
    .set({
      year,
      month: parseInt(monthIndex as string) + 1,
    })
    .toFormat(dateFormat.yearMonth);

  emit('update:yearMonth', newYearMonth);
};
const updateRange = (day: DateTime) => {
  if (isSingleSelect.value) {
    emit('update:range', [day.toFormat(dateFormat.yearMonthDay), '']);
  } else if (mode.value === 'start') {
    currentSelected.value = day;
    mode.value = 'end';
    emit('selectDay', currentSelected.value);
  } else if (currentSelected.value) {
    emit(
      'update:range',
      normalizeRange([
        day.toFormat(dateFormat.yearMonthDay),
        currentSelected.value.toFormat(dateFormat.yearMonthDay),
      ]),
    );
  }
};
const updateYear = (year: number | string | symbol) => {
  const newYearMonth = yearMonthStart.value
    .set({
      year: parseInt(year as string),
    })
    .toFormat(dateFormat.yearMonth);

  emit('update:yearMonth', newYearMonth);
};

const currentSelected = ref<DateTime>();
const currentHovered = ref<DateTime>();

const setSelectedDay = (day: DateTime) => {
  currentSelected.value = day;
  mode.value = 'end';
};
const setHoveredDay = (day: DateTime) => {
  currentHovered.value = day;
};
const resetSelectedDay = () => {
  mode.value = 'start';
  currentSelected.value = undefined;
  currentHovered.value = undefined;
};
defineExpose({
  setSelectedDay,
  setHoveredDay,
  resetSelectedDay,
});

watch(relatedMinDateTimestamp, (newRelatedMin) => {
  if (newRelatedMin) {
    const isNeedChanges = yearMonthStart.value <= newRelatedMin.startOf('month');
    if (isNeedChanges) {
      const isMax = newRelatedMin.startOf('month') >= now.minus({ month: 1 });
      if (isMax) {
        updateMonth(now.month - 1, now.year);
      } else {
        const newDate = newRelatedMin.plus({ month: 1 });
        updateMonth(newDate.month - 1, newDate.year);
      }
    }
  }
});

watch(relatedMaxDateTimestamp, (newRelatedMax) => {
  if (newRelatedMax) {
    const isNeedChanges = yearMonthStart.value.endOf('month') >= newRelatedMax.endOf('month');
    if (isNeedChanges) {
      const isMin = newRelatedMax.endOf('month') <= minDateTimestamp.value.plus({ month: 1 });
      if (isMin) {
        updateMonth(minDateTimestamp.value.month - 1, minDateTimestamp.value.year);
      } else {
        const newDate = newRelatedMax.minus({ month: 1 });
        updateMonth(newDate.month - 1, newDate.year);
      }
    }
  }
});
</script>

<template lang="pug">
Align.calendar(column)
  Align.header
    Button.month-picker(
      @click.stop='() => previousMonth()',
      :disabled='!hasPreviousMonth',
      :tabindex="-1",
      icon='chevron-left',
      mood='neutral',
      outline,
      size="small-2",
    )
    Dropdown.flex-max.spacing-small(
      @update:modelValue='(index) => updateMonth(index)',
      :items='monthItems',
      :modelValue='currentMonthIndex',
      :tabindex="-1",
      size='small',
    )
    Dropdown.spacing-small(
      @update:modelValue='(year) => updateYear(year)',
      :items='yearItems',
      :modelValue='currentYear',
      :tabindex="-1",
      size='small',
    )
    Button.month-picker.spacing-small(
      @click.stop='() => nextMonth()',
      :disabled='!hasNextMonth',
      :tabindex="-1",
      icon='chevron-right',
      mood='neutral',
      outline,
      size="small-2",
    )
  Align.calendar-grid-container.flex-max(horizontal='center', vertical='center')
    Grid.calendar-grid.no-spacing(:columns='7')
      template(v-if='strictWeekLabels')
        Info.week-label(
          v-for='weekLabel in strictWeekLabels',
          important,
        ) {{ weekLabel }}
      Button.day(
        v-for='day in calendarGridDayNumbers',
        @click.stop='() => updateRange(day)',
        @mouseover='() => { currentHovered = day; emit("hoverDay", day) }',
        :class="dayClasses(day)",
        :disabled='day < minDateTimestamp || day > maxDateTimestamp',
        :label='day.day.toString()',
        :mood='dayMood(day)',
        :outline="dayMood(day) === 'neutral'",
        tabindex="-1",
      )
</template>

<style lang="scss" scoped>
@use '../styles/colors' as colors;
@use '../styles/spacing' as spacing;
@use '../styles/radius' as radius;

@include colors.default-spacing;

.calendar {
  width: 20rem;
  .button {
    background-color: transparent;
  }

  > .header {
    > .button {
      border-width: 0;
      padding: 0;

      &:hover:not(:active):not(.disabled) {
        &.mood-border-neutral {
          @include colors.apply-color(background-color, background-lowered);
        }
      }
      &.month-picker {
        padding: spacing.$padding-size-menu-small-2;
      }
    }
  }

  > .calendar-grid-container {
    > .calendar-grid {
      gap: 0;
      margin-bottom: spacing.$padding-size-small;

      > .week-label {
        padding: spacing.$padding-size-small-2;
        text-align: center;
      }

      > .day {
        border-width: 0;
        border-radius: 0;
        padding: spacing.$padding-size-small-2;
        &:deep(.info-text) {
          @include colors.apply-color(color, text-normal);
        }

        &:not(.now):not(.disabled) {
          &.in-range,
          &.single-selected-day,
          &.hovered,
          &.hovered:hover {
            @include colors.apply-color(background-color, background-normal);
            &.this-month {
              @include colors.apply-color(background-color, background-accent-lowered);
              &:deep(.info-text) {
                @include colors.apply-color(color, white);
              }
            }
          }

          &:not(.hovered):hover {
            @include colors.apply-color(background-color, background-normal);
            &.this-month:deep(.info-text) {
              @include colors.apply-color(color, text-normal);
            }
          }
          &:not(.hovered):not(.in-range):hover {
            border-radius: radius.$border-radius-normal;
          }
        }

        &.first-day,
        &.first-selected-day,
        &.single-selected-day {
          border-bottom-left-radius: radius.$border-radius-normal;
          border-top-left-radius: radius.$border-radius-normal;
        }
        &.last-day,
        &.last-selected-day,
        &.single-selected-day {
          border-bottom-right-radius: radius.$border-radius-normal;
          border-top-right-radius: radius.$border-radius-normal;
        }

        &.now {
          &:deep(.info-text) {
            @include colors.apply-color(color, white);
          }
        }
        &.now:not(.in-range):not(.hovered) {
          border-radius: radius.$border-radius-normal;
        }

        &:not(.this-month) {
          &:deep(.info-text) {
            @include colors.apply-color(color, background-hover-inactive);
          }
        }
      }
    }
  }
}
</style>
