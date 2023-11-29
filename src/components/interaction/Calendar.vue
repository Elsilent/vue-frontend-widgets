<script lang="ts" setup>
import { DateTime, Duration } from 'luxon';
import { computed, toRefs } from 'vue';
import Align from '../container/Align.vue';
import Button from './Button.vue';
import Dropdown from './Dropdown.vue';
import Grid from '../container/Grid.vue';
import Info from '../label/Info.vue';
import { dateFormat, normalizeRange } from '../../utils/date';
import match from '../../utils/match';
import type { Mood } from '../../utils/enum/mood';
import type { CalendarMode } from '../../utils/type/component/interaction/calendar';

const props = withDefaults(
  defineProps<{
    minDate?: string;
    mode: CalendarMode;
    monthLabels: string[];
    range: [string, string];
    weekLabels?: string[];
    yearMonth: string;
  }>(),
  {
    minDate: '2020-01-01',
  },
);

const now = DateTime.now();
const maxYear = now.year;

const { minDate, mode, monthLabels, range, weekLabels, yearMonth } = toRefs(props);

const currentMonthIndex = computed(
  () => DateTime.fromFormat(yearMonth.value, dateFormat.yearMonth).month - 1,
);
const currentYear = computed(() => DateTime.fromFormat(yearMonth.value, dateFormat.yearMonth).year);

const monthItems = computed(() =>
  monthLabels.value.reduce((monthItems, month, index) => {
    monthItems[index] = month;

    return monthItems;
  }, {} as Record<number, string>),
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
  const minYear = DateTime.fromFormat(minDate.value, dateFormat.yearMonthDay).year;

  return new Array(maxYear - minYear + 1).fill(0).reduce((yearItems, _, index) => {
    const year = minYear + index;

    yearItems[year] = year.toString();

    return yearItems;
  }, {} as Record<number, string>);
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
}>();

const belongsToCurrentMonth = (date: DateTime) => date.hasSame(yearMonthStart.value, 'month');

const dayClasses = (day: DateTime) => {
  return {
    'in-range': day >= rangeStart.value && day <= rangeEnd.value,
    now: now.hasSame(day, 'day'),
    'range-end': day.hasSame(rangeEnd.value, 'day'),
    'range-start': day.hasSame(rangeStart.value, 'day'),
    'this-month': belongsToCurrentMonth(day),
  };
};
const dayMood = (day: DateTime): Mood => {
  if (now.hasSame(day, 'day')) {
    return 'important';
  }
  if (belongsToCurrentMonth(day) && day >= rangeStart.value && day <= rangeEnd.value) {
    return 'accent';
  }
  return 'neutral';
};
const hasNextMonth = computed(() => yearMonthStart.value.endOf('month') < now);
const hasPreviousMonth = computed(
  () =>
    DateTime.fromFormat(minDate.value, dateFormat.yearMonthDay).startOf('month') <
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
  const newRange = match<'end' | 'start', [string, string]>(mode.value)
    .when('end', () => [range.value[0], day.toFormat(dateFormat.yearMonthDay)])
    .when('start', () => [day.toFormat(dateFormat.yearMonthDay), range.value[1]]).done!;

  emit('update:range', normalizeRange(newRange));
};
const updateYear = (year: number | string | symbol) => {
  const newYearMonth = yearMonthStart.value
    .set({
      year: parseInt(year as string),
    })
    .toFormat(dateFormat.yearMonth);

  emit('update:yearMonth', newYearMonth);
};
</script>

<template lang="pug">
Align.calendar(column)
  Align.header
    Button.month-picker(
      @click.stop='() => previousMonth()',
      :disabled='!hasPreviousMonth',
      icon='chevron-left',
      mood='neutral',
      outline,
      size='large-4',
    )
    Dropdown.flex-max.spacing-small(
      @update:modelValue='(index) => updateMonth(index)',
      :items='monthItems',
      :modelValue='currentMonthIndex',
      size='small',
    )
    Dropdown.spacing-small(
      @update:modelValue='(year) => updateYear(year)',
      :items='yearItems',
      :modelValue='currentYear',
      size='small',
    )
    Button.month-picker.spacing-small(
      @click.stop='() => nextMonth()',
      :disabled='!hasNextMonth',
      icon='chevron-right',
      mood='neutral',
      outline,
      size='large-4',
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
        :class="dayClasses(day)",
        :disabled='day > now',
        :label='day.day.toString()',
        :mood='dayMood(day)',
        :outline="dayMood(day) === 'neutral'",
      )
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/spacing.scss';

@include default-spacing;

.calendar {
  width: 20rem;

  > .header {
    > .button {
      border-width: 0;
      padding: 0;

      &:hover:not(:active):not(.disabled) {
        &.mood-border-neutral {
          @include apply-color(background-color, background-lowered);
        }
      }
    }
  }

  > .calendar-grid-container {
    > .calendar-grid {
      gap: 0;
      margin-bottom: $padding-size-small;

      > .week-label {
        padding: $padding-size-small-2;
        text-align: center;
      }

      > .day {
        border-width: 0;
        padding: $padding-size-small-2;

        &.in-range {
          &:not(.range-end) {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;

            &.this-month:not(.now):not(.range-start) {
              @include apply-color(background-color, background-hover-accent);
            }
          }

          &:not(.range-start) {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
          }
        }

        &.now {
          @include apply-color(color, white);
        }

        &:not(.now) {
          &.in-range.this-month {
            &:deep(.info) {
              @include apply-color(color, white);
            }
          }
        }

        &:not(.this-month) {
          &:deep(.info) {
            @include apply-color(color, background-lowered-3);
          }
        }

        &:hover:not(:active):not(.disabled) {
          &.mood-border-neutral {
            @include apply-color(background-color, background-lowered);

            &:deep(.info) {
              @include apply-color(color, text-normal);
            }
          }
        }
      }
    }
  }
}
</style>
