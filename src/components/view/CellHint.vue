<script lang="ts" setup>
import axios from 'axios';
import { ref, toRefs } from 'vue';
import numeral from '../../utils/numeral';
import type { ColumnDetailsFormat } from '../../utils/type/component/container/table';
import Header from '../label/Header.vue';
import Info from '../label/Info.vue';
import LoaderLineScale from '../image/LoaderLineScale.vue';
import Popover from '../container/Popover.vue';

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

const left = ref(0);
const lines = ref<Line[] | undefined>();
const top = ref(0);
const visible = ref(false);
const root = ref<HTMLElement | undefined>();

const onPopoverBlur = (event?: MouseEvent) => {
  if (event) {
    if (!event.target || root.value?.contains(event.target as HTMLElement)) {
      return;
    }
  }

  visible.value = false;

  window.removeEventListener('mouseup', onPopoverBlur);
};

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
  window.addEventListener('mouseup', onPopoverBlur);

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
  ref="root",
  @mouseover="() => showData()",
  @mouseout="() => onPopoverBlur()",
  :class="{ visible }",
)
  span.label(
    @click.stop="() => showData()",
  ) {{ label }}
  Popover(
    :visible="visible",
    parentClass="cell",
    popoverClass="cell-hint-popover",
  )
    .popover-header(v-if="title") {{ title }}
    template(v-if="lines")
      .popover-body
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
    LoaderLineScale(v-else)
</template>

<style lang="scss">
.cell-hint-popover {
  max-width: 15rem;
}
</style>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

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
