<script lang="ts" setup>
import axios from 'axios';
import { computed, ref, toRefs } from 'vue';
import Header from './Header.vue';
import LineBarChart from './LineBarChart.vue';
import Loader from './Loader.vue';
import Tooltip from './Tooltip.vue';

const props = defineProps<{
  formatter: (value: number) => string;
  title?: string;
  url: string;
}>();

const { formatter, title, url } = toRefs(props);

const iconRef = ref<HTMLElement | undefined>();
const valueKeys = ref<string[]>([]);
const values = ref<number[] | undefined>();

const chartValues = computed(() => {
  if (!values.value) {
    return {};
  }

  return Object.assign({}, values.value);
});

const endValue = computed(() => {
  switch (values.value?.length) {
    case 0:
    case undefined:
      return 0;
    case 1:
      return values.value[0];
    default:
      return (
        values.value!.slice(values.value!.length / 2).reduce((sum, value) => sum + value, 0) /
        Math.ceil(values.value!.length / 2)
      );
  }
});

const startValue = computed(() => {
  switch (values.value?.length) {
    case 0:
    case undefined:
      return 0;
    case 1:
      return values.value[0];
    default:
      return (
        values.value!.slice(0, values.value!.length / 2).reduce((sum, value) => sum + value, 0) /
        Math.floor(values.value!.length / 2)
      );
  }
});

const trendMood = computed(() => {
  if (startValue.value > endValue.value) {
    return 'negative';
  } else if (startValue.value < endValue.value) {
    return 'positive';
  } else {
    return 'neutral';
  }
});

const trendValues = computed(() => {
  if (!values.value) {
    return {};
  }

  const trendValues = new Array(values.value.length)
    .fill(0)
    .map(
      (_, index) =>
        startValue.value +
        ((endValue.value - startValue.value) * index) / (values.value!.length - 1),
    );

  return Object.assign({}, trendValues);
});

const fetchValues = async () => {
  if (values.value) {
    return;
  }

  const fetchedValues = (await axios({ url: url.value })).data;

  valueKeys.value = Object.keys(fetchedValues);
  values.value = Object.values(fetchedValues);
};

const onShow = async () => {
  await fetchValues();
};
</script>

<template lang="pug">
.trend-chart-container
  i.la.la-eye.secondary(ref="iconRef")
  Tooltip(
    width="500"
    trigger="click"
    :persistent="false"
    :show-arrow="false"
    popper-class="trend-chart-popover"
    :virtual-ref="iconRef"
    virtual-triggering
    append-to=".app-container"
    :popper-options="{ modifiers: [{ name: 'eventListeners', options: { scroll: false } }], 'strategy': 'fixed' }"
    @show="onShow"
  )
    Header(v-if="title", size="large-2") {{ title }}
    .trend-chart-content
      LineBarChart(
        v-if="values",
        :activeLines="['values']",
        :formatters="{ trend: formatter, values: formatter }",
        :moods="{ trend: { mood: trendMood }, values: { mood: 'important' } }",
        :styles="{ trend: 'line', values: 'line' }",
        :values="{ trend: trendValues, values: chartValues }",
        :no-x-axis-labels="true",
      )
      Loader(v-else)
</template>

<style lang="scss">
.el-popover.trend-chart-popover {
  flex-direction: column;
  padding: 1rem 3rem;
  width: 500px;
  > .trend-chart-content {
    min-height: 300px;
    display: flex;

    > .line-chart {
      margin: 0 -1rem;
    }

    > .loader {
      margin: auto;
    }
  }

  > .header {
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }
}
</style>

<style lang="scss" scoped>
.trend-chart-container {
  align-items: center;
  display: flex;
  font-size: inherit;
  justify-content: center;
  padding: 0;
  text-decoration: none;

  > i {
    cursor: pointer;
    position: absolute;
  }
}
</style>
