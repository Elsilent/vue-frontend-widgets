<script lang="ts" setup>
import { computed, nextTick, onUnmounted, ref, toRefs } from 'vue';
import type {
  Column,
  ColumnType,
  ComparisonColumn,
} from '../../utils/type/component/container/table';
import Scrollable from './Scrollable.vue';
import SimpleTable from './SimpleTable.vue';

interface AdditionalHeader {
  icon: string;
}

const props = withDefaults(
  defineProps<{
    additionalHeaders?: Record<string, AdditionalHeader>;
    cellClasses?: Record<string, boolean>;
    colorMetrics?: boolean;
    coloredMetrics?: string[];
    columns: Record<string, Column>;
    comparisonColumns?: Record<string, ComparisonColumn>;
    detailsRows: Record<string, Record<string, any>>;
    dragColumns?: boolean;
    fixedColumnNumber?: number;
    inversedKpis?: string[];
    /**
     * No data message that should be displayed.
     */
    noDataMessage?: string;
    orderBy: [string[], boolean];
    primaryColumn?: string;
    rows: Record<string, any>[] | Record<string, Record<string, any>>;
    scrollPosition?: { left: number; top: number };
    showRowNumber?: boolean;
    showTopTotal?: boolean;
    showTotal?: boolean;
  }>(),
  {
    additionalHeaders: () => ({}),
    cellClasses: () => ({}),
    colorMetrics: false,
    coloredMetrics: () => [],
    comparisonColumns: () => ({}),
    dragColumns: false,
    fixedColumnNumber: 1,
    inversedKpis: () => [],
    primaryColumn: 'id',
    scrollPosition: () => ({ left: 0, top: 0 }),
    showRowNumber: true,
    showTopTotal: false,
    showTotal: true,
  },
);

const {
  additionalHeaders,
  cellClasses,
  colorMetrics,
  coloredMetrics,
  columns,
  comparisonColumns,
  detailsRows,
  dragColumns,
  fixedColumnNumber,
  inversedKpis,
  orderBy,
  primaryColumn,
  rows,
  scrollPosition,
  showRowNumber,
  showTopTotal,
  showTotal,
} = toRefs(props);

const fixedWidth = ref(0);
const headerHeights = ref<
  | {
      main: number;
      secondary?: number;
      total: number;
    }
  | undefined
>();
const totalHeight = ref(0);

onUnmounted(() => resizeObserver.disconnect());

/**
 * Retrieves keys of secondary columns
 */
const comparisonColumnKeys = computed(() =>
  comparisonColumns.value ? Object.keys(comparisonColumns.value) : [],
);

const fixedColumns = computed(() =>
  Object.keys(columns.value)
    .slice(0, fixedColumnNumber.value)
    .reduce((fixedColumns, key) => {
      fixedColumns[key] = columns.value[key];

      return fixedColumns;
    }, {} as Record<string, Column>),
);

const scrollableColumns = computed(() =>
  Object.keys(columns.value)
    .slice(fixedColumnNumber.value)
    .reduce((scrollableColumns, key) => {
      scrollableColumns[key] = columns.value[key];

      return scrollableColumns;
    }, {} as Record<string, Column>),
);

const totalRowCount = computed(() =>
  Object.keys(detailsRows.value).reduce(
    (totalRowCount, rows) => totalRowCount + rows.length,
    Object.values(rows.value).length,
  ),
);

/**
 * Retrieves the style of the table related to
 * the sizing of header, total and fixed table
 */
const tableStyle = computed(() => {
  const style: Record<string, string> = {};

  if (headerHeights.value?.main) {
    style['--header-main-height'] = `${headerHeights.value.main}px`;
  }

  if (headerHeights.value?.secondary) {
    style['--header-secondary-height'] = `${headerHeights.value.secondary}px`;
  }

  if (fixedWidth.value) {
    style['--fixed-width'] = `${fixedWidth.value}px`;
  }

  if (headerHeights.value?.total) {
    style['--header-total-height'] = `${headerHeights.value.total}px`;
  }

  if (totalHeight.value) {
    style['--total-height'] = `${totalHeight.value}px`;
    style['--bottom-height'] = style['--total-height'];
  } else {
    if (totalRowCount.value === 1) {
      style['--total-scrollbar-display'] = 'none';
    } else {
      style['--total-height'] = '20px';
    }
    style['--bottom-height'] = '0px';
  }

  return style;
});

/**
 * Retrieves all column keys merged with secondary keys
 */
const valueColumnKeys = computed(() =>
  Object.entries(columns.value)
    .filter(([_, { colspan, visible }]) => (colspan ?? 1) !== 1 && visible)
    .reduce((valueColumnKeys, [key, column]) => {
      if (comparisonColumnKeys.value) {
        for (let i = 0; i < (column.colspan ?? 0); i++) {
          valueColumnKeys.push(`${key}-${comparisonColumnKeys.value[i]}`);
        }
      }

      return valueColumnKeys;
    }, [] as string[]),
);

/**
 * Retrieves all possible pairs of additional headers and column keys
 *
 * @param {'fixed'|'scrollable'} columnKeysFilter
 */
const getAdditionalHeaderColumns = (columnKeysFilter: 'fixed' | 'scrollable') => {
  const columns = (() => {
    switch (columnKeysFilter) {
      case 'fixed':
        return fixedColumns.value;
      case 'scrollable':
        return scrollableColumns.value;
    }
  })();

  const columnKeys = Object.keys(columns);
  const additionalHeaderKeys = Object.keys(additionalHeaders.value);

  const additionalHeaderColumns = new Array(columnKeys.length * additionalHeaderKeys.length);

  for (
    let additionalHeaderIndex = 0;
    additionalHeaderIndex < additionalHeaderKeys.length;
    additionalHeaderIndex++
  ) {
    for (let columnIndex = 0; columnIndex < columnKeys.length; columnIndex++) {
      const index = additionalHeaderIndex * additionalHeaderKeys.length + columnIndex;

      additionalHeaderColumns[index] = [
        additionalHeaderKeys[additionalHeaderIndex],
        columnKeys[columnIndex],
      ];
    }
  }

  return additionalHeaderColumns;
};

const fixedTable = ref<HTMLElement | undefined>();
const scrollableTable = ref<HTMLElement | undefined>();

/**
 * Updates table size. Used on init and on resize
 */
const updateTableSize = () => {
  fixedWidth.value = 0;
  headerHeights.value = undefined;
  totalHeight.value = 0;

  nextTick(() => {
    const getTableSizeInfo = (table: HTMLElement | undefined) => {
      const info = {
        hasSecondary: false,
        mainColumnHeight: 0,
        secondaryColumnHeight: 0,
        totalColumnHeight: 0,
        totalHeight: 0,
        width: 0,
      };

      if (!table) {
        return info;
      }

      const mainColumns = [...table.querySelectorAll('.cell.column-main')];
      const secondaryColumn = table.querySelector('.cell.column-secondary');
      const totalColumn = table.querySelector('.cell.total');

      if (mainColumns.length > 0) {
        info.mainColumnHeight = mainColumns[0].clientHeight;
        info.width = mainColumns.reduce((sum, { clientWidth }) => sum + clientWidth, 0);
        info.totalColumnHeight += info.mainColumnHeight;
      }

      if (secondaryColumn) {
        info.hasSecondary = true;
        info.secondaryColumnHeight = secondaryColumn.clientHeight;
        info.totalColumnHeight += info.secondaryColumnHeight;
      }

      if (totalColumn) {
        info.totalHeight = totalColumn.clientHeight;
      }

      return info;
    };

    const fixedHeightInfo = getTableSizeInfo(fixedTable.value);
    const scrollableHeightInfo = getTableSizeInfo(scrollableTable.value);

    if (scrollableHeightInfo.hasSecondary) {
      fixedWidth.value = fixedHeightInfo.width;
      headerHeights.value = {
        main: scrollableHeightInfo.mainColumnHeight,
        secondary: scrollableHeightInfo.secondaryColumnHeight,
        total: Math.max(fixedHeightInfo.totalColumnHeight, scrollableHeightInfo.totalColumnHeight),
      };
      totalHeight.value = fixedHeightInfo.totalHeight;
    } else {
      const total = Math.max(
        fixedHeightInfo.totalColumnHeight,
        scrollableHeightInfo.totalColumnHeight,
      );

      fixedWidth.value = fixedHeightInfo.width;
      headerHeights.value = {
        main: total,
        total,
      };
      totalHeight.value = fixedHeightInfo.totalHeight;
    }
  });
};

const resizeObserver = new ResizeObserver(() => updateTableSize());

const tableContainer = ref<HTMLElement | undefined>();

nextTick(() => {
  resizeObserver.disconnect();

  if (tableContainer.value) {
    resizeObserver.observe(tableContainer.value);
  }
});
</script>

<template lang="pug">
.table-container(ref='tableContainer')
  Scrollable(
    @update:scrollPosition="(scrollPosition) => $emit('update:scrollPosition', scrollPosition)",
    :scrollHeightDelta="(headerHeights ? headerHeights.total : 0) + totalHeight - 40",
    :scrollPosition="scrollPosition",
    :scrollWidthDelta="fixedWidth",
    :style="tableStyle",
    mode="both-top",
  )
    SimpleTable.fixed(
      ref="fixedTable",
      @addColoredMetric="(columnKey) => $emit('addColoredMetric', columnKey)",
      @removeColoredMetric="(columnKey) => $emit('removeColoredMetric', columnKey)",
      @update:orderBy="(orderBy) => $emit('update:orderBy', orderBy)",
      :additionalHeaders="additionalHeaders",
      :cellClasses="cellClasses"
      :colorMetrics="colorMetrics",
      :coloredMetrics="coloredMetrics",
      :columns="fixedColumns",
      :comparisonColumnKeys="comparisonColumnKeys",
      :detailsRows="detailsRows",
      :dragColumns="false",
      :inversedKpis="inversedKpis",
      :orderBy="orderBy",
      :orderColumnType="columns[orderBy[0][0]].type",
      :primaryColumn="primaryColumn",
      :rows="rows",
      :showNoDataMessage="true"
      :showRowNumber="showRowNumber",
      :showTopTotal="showTopTotal",
      :showTotal="showTotal",
    )
      template(#columnRowNumber)
        slot(name="columnRowNumber") #
      template(#colorizeLabel="{ enabled }")
        slot(name="colorizeLabel", :enabled="enabled")
      template(#column="{ columnKey, isGhost }")
        slot(
          v-if="columnKey in fixedColumns",
          name="column",
          :columnKey="columnKey",
          :isGhost="isGhost",
        )
      template(#additionalHeader="{ additionalHeader, columnKey }")
        slot(
          name="additionalHeader",
          :additionalHeader="additionalHeader",
          :columnKey="columnKey",
        )
      template(#topTotal="{ columnKey, subcolumnKey, values }")
        slot(
          v-if="columnKey in fixedColumns",
          name="topTotal",
          :columnKey="columnKey",
          :subcolumnKey="subcolumnKey",
          :values="values",
        )
      template(#topTotalRowNumber)
        slot(name="topTotalRowNumber")
      template(#secondaryColumn="{ columnKey, subcolumnKey }")
        slot(
          v-if="columnKey in fixedColumns",
          name="secondaryColumn",
          :columnKey="columnKey",
          :subcolumnKey="subcolumnKey",
        )
      template(#rowNumber="{ value }") {{ value }}
      template(#row="{ columnKey, index, row, spanIndex, subcolumnKey, subindex, value }")
        slot(
          v-if="columnKey in fixedColumns",
          name="row",
          :columnKey="columnKey",
          :index="index",
          :row="row",
          :spanIndex="spanIndex",
          :subcolumnKey="subcolumnKey",
          :subindex="subindex",
          :value="value",
        )
      template(#totalRowNumber)
        slot(name="totalRowNumber") #
      template(#total="{ columnKey, subcolumnKey, values }")
        slot(
          v-if="columnKey in fixedColumns",
          name="total",
          :columnKey="columnKey",
          :subcolumnKey="subcolumnKey",
          :values="values",
        )
    SimpleTable(
      ref="scrollableTable",
      @addColoredMetric="(columnKey) => $emit('addColoredMetric', columnKey)",
      @move:column="({ from, to }) => $emit('move:column', { from: from + fixedColumnNumber, to: to + fixedColumnNumber })",
      @removeColoredMetric="(columnKey) => $emit('removeColoredMetric', columnKey)",
      @update:orderBy="(orderBy) => $emit('update:orderBy', orderBy)",
      :additionalHeaders="additionalHeaders",
      :cellClasses="cellClasses",
      :colorMetrics="colorMetrics",
      :coloredMetrics="coloredMetrics",
      :columns="scrollableColumns",
      :comparisonColumnKeys="comparisonColumnKeys",
      :detailsRows="detailsRows",
      :inversedKpis="inversedKpis",
      :dragColumns="dragColumns",
      :orderBy="orderBy",
      :orderColumnType="columns[orderBy[0][0]].type",
      :primaryColumn="primaryColumn",
      :rows="rows",
      :showRowNumber="false",
      :showTopTotal="showTopTotal",
      :showTotal="showTotal",
      :showNoDataMessage="true",
      :noDataMessage="noDataMessage",
      :style="tableStyle"
    )
      template(#colorizeLabel="{ enabled }")
        slot(name="colorizeLabel", :enabled="enabled")
      template(#column="{ columnKey, isGhost }")
        slot(
          v-if="columnKey in scrollableColumns",
          name="column",
          :columnKey="columnKey",
          :isGhost="isGhost",
        )
      template(#additionalHeader="{ additionalHeader, columnKey }")
        slot(
          name="additionalHeader",
          :additionalHeader="additionalHeader",
          :columnKey="columnKey",
        )
      template(#topTotal="{ columnKey, subcolumnKey, values }")
        slot(
          v-if="columnKey in scrollableColumns",
          name="topTotal",
          :columnKey="columnKey",
          :subcolumnKey="subcolumnKey",
          :values="values",
        )
      template(#secondaryColumn="{ columnKey, subcolumnKey }")
        slot(
          v-if="columnKey in scrollableColumns",
          name="secondaryColumn",
          :columnKey="columnKey",
          :subcolumnKey="subcolumnKey",
        )
      template(#row="{ columnKey, index, row, spanIndex, subcolumnKey, subindex, value }")
        slot(
          v-if="columnKey in scrollableColumns",
          name="row",
          :columnKey="columnKey",
          :index="index",
          :row="row",
          :spanIndex="spanIndex",
          :subcolumnKey="subcolumnKey",
          :subindex="subindex",
          :value="value",
        )
      template(#total="{ columnKey, subcolumnKey, values }")
        slot(
          v-if="columnKey in scrollableColumns",
          name="total",
          :columnKey="columnKey",
          :subcolumnKey="subcolumnKey",
          :values="values",
        )
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.table-container {
  box-shadow: 0 0 0 1px $color-border;
  display: flex;
  max-height: 80vh;
  position: relative;

  > .scrollable {
    &::v-deep .scrollable-content {
      flex-direction: row;
    }

    &::v-deep .scrollable-area {
      &.horizontal {
        bottom: calc(var(--total-height) - 20px);
        display: var(--total-scrollbar-display);
        left: var(--fixed-width);
      }

      &.horizontal-top {
        left: var(--fixed-width);
        top: calc(var(--header-total-height) - 20px);
      }

      &.vertical {
        bottom: calc(var(--bottom-height) + 2px);
        top: var(--header-total-height);
      }
    }
  }

  .table {
    height: fit-content;

    &.fixed {
      box-shadow: 1px 0 0 $color-border;
      flex: 0;
      left: 0;
      position: sticky;
      z-index: 30;
    }

    &:not(.fixed) {
      flex: 1;
    }

    &.with-secondary::v-deep .cell.column-main {
      &.column-main-extended {
        height: calc(var(--header-total-height) + 1px);
      }

      &:not(.column-main-extended) {
        height: var(--header-main-height);
      }
    }

    &.with-secondary::v-deep .cell.column-secondary {
      height: var(--header-secondary-height);
      top: calc(var(--header-main-height) + 1px);
    }

    &:not(.with-secondary)::v-deep .cell.column-main {
      height: calc(var(--header-total-height) + 1px);
    }
  }
}
</style>
