<script lang="ts" setup>
import axios from 'axios';
import { ref, toRefs } from 'vue';
import numeral from '../utils/numeral';
import type { ColumnDetailsFormat } from '../utils/type/component/container/table';
import Loader from './Loader.vue';
import Tooltip from './Tooltip.vue';

interface DistributionData {
  name: string;
  valueFormatted: string;
}

interface RatedDistributionData {
  name: string;
  rate: number;
  value: number;
}

type RawData = DistributionData | RatedDistributionData;

const props = defineProps<{
  format: ColumnDetailsFormat;
  label?: string;
  title?: string;
  url: string;
}>();

const { format, label, title, url } = toRefs(props);

interface Line {
  label: string;
  value: string;
}

const lines = ref<Line[] | undefined>();
const visible = ref(false);
const root = ref<HTMLElement | undefined>();

const getLinesFromDistributionData = (data: DistributionData[]): Line[] =>
  data.map(({ name, valueFormatted }) => ({
    label: name,
    value: valueFormatted,
  }));

const getLinesFromRatedDistributionData = (data: RatedDistributionData[]): Line[] =>
  data.map(({ name, rate, value }) => ({
    label: name,
    value: `${numeral(value).format('0,0')} (${numeral(rate).format('0,0.00')}%)`,
  }));

const getLinesFromData = (data: RawData[]): Line[] => {
  switch (format.value) {
    case 'distribution':
      return getLinesFromDistributionData(data as DistributionData[]);
    case 'rated_distribution':
      return getLinesFromRatedDistributionData(data as RatedDistributionData[]);
    default:
      throw new Error(`Unsupported format: ${format.value}`);
  }
};

const fetchLines = async () => {
  if (lines.value) {
    return;
  }

  const data = (await axios(url.value)).data;

  lines.value = getLinesFromData(data);
};

const showData = async () => {
  visible.value = true;

  await fetchLines();
};
</script>

<template lang="pug">
.cell-hint(
  ref="root"
  @mouseover="showData",
  @mouseleave="visible = false",
  :class="{ visible }",
)
  span.label {{ label }}
  Tooltip(
    :title="title"
    :show-arrow="false"
    :persistent="false"
    :offset="0"
    virtual-triggering
    :visible="visible"
    :virtual-ref="root?.closest('.cell')"
    width="15rem"
    popper-class="cell-hint-popover"
  )
    template(v-if="lines")
      div(
        v-for='({ label, value }, lineIndex) in lines',
        :key='`line-${lineIndex}`',
      )
        b(
          important,
          size='small',
        ) {{ label }}:&nbsp;
        span(
          size='small',
        ) {{ value }}
    Loader(v-else)
</template>

<style lang="scss">
.cell-hint-popover {
  display: flex;
  flex-direction: column;
  > .loader {
    align-self: center;
  }
}
</style>

<style lang="scss" scoped>
.cell-hint {
  display: flex;
  font-size: inherit;
  padding: 0;
  text-decoration: none;

  &:not(.visible) {
    cursor: pointer;

    > .label {
      text-decoration: underline dashed;
    }
  }
}
</style>
