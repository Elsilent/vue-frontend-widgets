<script lang="ts" setup>
import { computed, ref, toRefs, watch } from 'vue';
import Align from '../container/Align.vue';
import Badge from '../container/Badge.vue';
import Info from '../label/Info.vue';
import Link from '../interaction/Link.vue';
import ProgressBar from './ProgressBar.vue';
import type { Mood } from '@/utils/enum/mood';
import type {
  DistributionRow,
  DistributionRows,
} from '@/utils/type/component/image/kpiDistributionTable';
import format from '../../utils/format';

const props = defineProps<{
  dimensionLabel: string;
  metrics: Record<
    string,
    {
      align?: 'left' | 'center' | 'right';
      formatter: (value: number) => string;
      label: string;
      mood: Mood;
    }
  >;
  rows: DistributionRows;
}>();

const { metrics, rows } = toRefs(props);

const lastMetricCode = computed(() => {
  const metricCodes = Object.keys(metrics.value);

  return metricCodes[metricCodes.length - 1];
});

const getMetricDistribution = (zeroed = false) => {
  const metricSums: Record<string, number> = {};

  for (const row of Object.values(rows.value)) {
    for (const [metric, value] of Object.entries(row)) {
      if (!(metric in metricSums)) {
        metricSums[metric] = 0;
      }

      if (!zeroed) {
        metricSums[metric] += +value;
      }
    }
  }

  return Object.keys(rows.value).reduce((distribution, dimensionCode) => {
    distribution[dimensionCode] = Object.keys(metrics.value).reduce(
      (metricDistribution, metricCode) => {
        metricDistribution[metricCode] =
          metricSums[metricCode] === 0
            ? 0
            : rows.value[dimensionCode][metricCode] / metricSums[metricCode];

        return metricDistribution;
      },
      {} as DistributionRow,
    );

    return distribution;
  }, {} as DistributionRows);
};

const metricDistribution = ref(getMetricDistribution(true));

setTimeout(() => {
  metricDistribution.value = getMetricDistribution();
}, 10);

watch(metrics, () => {
  metricDistribution.value = getMetricDistribution();
});

watch(rows, () => {
  metricDistribution.value = getMetricDistribution();
});

const metricsAlignment = computed(() =>
  Object.values(metrics.value)
    .map((metric) => {
      switch (metric.align) {
        case 'left':
          return 'min-content 1fr';
        case 'center':
        default:
          return 'max-content 1fr';
      }
    })
    .join(' '),
);

const style = computed(() => ({
  '--alignment': `max-content ${metricsAlignment.value}`,
}));
</script>

<template lang="pug">
.kpi-distribution-table(:style='style')
  Align.cell.header-cell.row-first(vertical='center')
    Info {{ dimensionLabel }}
  template(v-for='(metric, metricCode) in metrics')
    Align.cell.header-cell(
      horizontal='center',
      vertical='center',
    )
    Align.cell.header-cell(
      :class="{ 'row-last': metricCode === lastMetricCode }",
      horizontal='left',
      vertical='center',
    )
      Info {{ metric.label }}
  template(v-for='(row, dimension) in rows')
    Align.cell.row-first(vertical='center')
      slot(name='cell(dimension)', :value='{name: dimension, link: row.link}')
        Link(:to="row.link") {{ dimension }}
    template(v-for='(metric, metricCode) in metrics')
      Align.cell(
        :horizontal="metric.align ?? 'center'",
        vertical='center',
      )
        Info {{ metric.formatter(row[metricCode]) }}
      Align.cell(
        :class="{ 'row-last': metricCode === lastMetricCode }",
        horizontal='left',
        vertical='center',
      )
        ProgressBar(
          :mood='metric.mood',
          :value='metricDistribution[dimension][metricCode]',
        )
        Badge(
          :mood='metric.mood',
          outline,
        ) {{ format.proportion(metricDistribution[dimension][metricCode]) }}
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.kpi-distribution-table {
  --progressBarWidth: 140px;
  display: grid;
  grid-template-columns: var(--alignment);

  > .cell {
    padding: $padding-size-small-2;
    white-space: nowrap;
    position: relative;

    &.row-first {
      padding-left: $padding-size-large;
    }

    &.row-last {
      padding-right: $padding-size-large;
    }

    &:not(.header-cell) {
      @include apply-color(border-top-color, border-inactive);

      border-top-style: solid;
      border-top-width: 1px;
      transition-duration: $transition-duration-normal;
      transition-property: border-top-color;
    }

    > .progress-bar {
      width: var(--progressBarWidth);
    }

    > .badge {
      @include apply-color(background-color, background-elevated-2);

      position: absolute;
      left: calc(var(--progressBarWidth) / 2 + $padding-size-small-2);
      box-sizing: border-box;
      padding: $padding-size-small-4 $padding-size-normal;
      transform: translateX(-50%);
    }
  }
}
</style>
