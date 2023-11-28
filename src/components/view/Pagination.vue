<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import Dropdown from '../interaction/Dropdown.vue';
import Info from '../label/Info.vue';

const props = withDefaults(
  defineProps<{
    currentPageSize: number;
    id?: string;
    pageNumber: number;
    /**
     * Max amount of pages on left and right to the current page including current page
     *
     * Example of display for pageRadius = 3 with currentPageSize = 5:
     *
     * 1 .. 3 4 5 6 7 .. <nth>
     */
    pageRadius?: number;
    pageSizeLabel: string;
    pageSizes?: number[];
    rowCount: number;
  }>(),
  {
    id: 'pagination',
    pageRadius: 3,
    pageSizes: () => [20, 50, 100, 500],
  },
);

const { currentPageSize, id, pageNumber, pageRadius, pageSizeLabel, pageSizes, rowCount } =
  toRefs(props);

const minPageSize = computed(() => Math.min(...pageSizes.value));

const pageCount = computed(() => Math.ceil(rowCount.value / currentPageSize.value));

const pageSizeItems = computed(() =>
  pageSizes.value.reduce((pageSizeLabels, pageSize) => {
    pageSizeLabels[pageSize] = pageSize.toString();

    return pageSizeLabels;
  }, {} as Record<number, string>),
);

const visiblePageIndexes = computed(() => {
  const visiblePageIndexes = [];

  for (let i = pageRadius.value - 1; i > 0; i--) {
    if (pageNumber.value > i) {
      visiblePageIndexes.push(pageNumber.value - i);
    }
  }

  visiblePageIndexes.push(pageNumber.value);

  for (let i = 1; i < pageRadius.value; i++) {
    if (pageNumber.value < pageCount.value - i - 1) {
      visiblePageIndexes.push(pageNumber.value + i);
    }
  }

  return visiblePageIndexes;
});

const emit = defineEmits<{
  (e: 'update:currentPageSize', newPageSize: number): void;
  (e: 'update:pageNumber', pageNumber: number): void;
}>();

const updatePageSize = (newPageSize: number) => {
  if (currentPageSize.value === newPageSize) {
    return;
  }

  emit('update:currentPageSize', newPageSize);
};
</script>

<template lang="pug">
.pagination
  template(v-if="rowCount > currentPageSize")
    Info.page(
      v-if="pageNumber > 0"
      @click="() => emit('update:pageNumber', 0)",
      mood="important-alt",
    ) 1
    Info.page-separator(v-if="pageNumber > pageRadius") …
    .page(
      v-for="pageIndex in visiblePageIndexes",
      @click="() => emit('update:pageNumber', pageIndex)",
      :class="{ current: pageIndex === pageNumber }",
      :key="pageIndex",
    ) {{ pageIndex + 1 }}
    Info.page-separator(v-if='pageNumber < pageCount - pageRadius - 1') …
    Info.page(
      v-if="pageNumber < pageCount - 1",
      @click="() => emit('update:pageNumber', pageCount - 1)",
      mood="important-alt",
    ) {{ pageCount }}
    Info.page-size-label {{ pageSizeLabel }}
  Dropdown.page-size-selector(
    v-if="rowCount > minPageSize",
    @update:modelValue="(value) => updatePageSize(parseInt(value.toString()))",
    :id="id",
    :items="pageSizeItems",
    :modelValue="currentPageSize",
  )
    template(#item="{ item }") {{ item }}
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.pagination {
  align-items: center;
  display: flex;

  > .page {
    align-items: center;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    height: 100%;
    padding: 0.5rem 0.75rem;

    &.current {
      @include apply-color(border-color, text-important-alt);

      cursor: default;
    }
  }

  > .page-separator {
    align-items: center;
    cursor: default;
    display: flex;
    padding: 0.5rem 0.75rem;
  }

  > .page-size-label {
    margin: 0 0.75rem;
  }
}
</style>
