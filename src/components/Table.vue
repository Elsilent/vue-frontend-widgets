<script lang="ts" setup>
import { computed, nextTick, onUnmounted, ref, toRefs, watch } from 'vue';
import { type Column } from '../utils/type/component/container/table';
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
    comparisonColumnKeys?: string[];
    detailsRows: Record<string, Record<string, any>>;
    dragColumns?: boolean;
    fixedColumnNumber?: number;
    globalColoredMetrics?: boolean;
    inversedKpis?: string[];
    neutralColoredMetrics?: boolean | string[];
    /**
     * No data message that should be displayed.
     */
    noDataMessage?: string;
    orderBy: [string[], boolean];
    primaryColumn?: string;
    rows: Record<string, any>[] | Record<string, Record<string, any>>;
    scrollPosition?: { left: number; top: number };
    showRowNumber?: boolean;
    showToggleColored?: boolean;
    showTopTotal?: boolean;
    showTotal?: boolean;
    useOrderBy?: boolean;
    dynamicRowsHeight?: boolean;
  }>(),
  {
    additionalHeaders: () => ({}),
    cellClasses: () => ({}),
    colorMetrics: false,
    coloredMetrics: () => [],
    comparisonColumnKeys: undefined,
    dragColumns: false,
    fixedColumnNumber: 1,
    globalColoredMetrics: false,
    inversedKpis: () => [],
    neutralColoredMetrics: false,
    primaryColumn: 'id',
    scrollPosition: () => ({ left: 0, top: 0 }),
    showRowNumber: true,
    showToggleColored: true,
    showTopTotal: false,
    showTotal: true,
    useOrderBy: true,
    dynamicRowsHeight: false,
  },
);

const {
  additionalHeaders,
  cellClasses,
  colorMetrics,
  coloredMetrics,
  columns,
  comparisonColumnKeys,
  detailsRows,
  dragColumns,
  fixedColumnNumber,
  globalColoredMetrics,
  inversedKpis,
  neutralColoredMetrics,
  orderBy,
  primaryColumn,
  rows,
  scrollPosition,
  showRowNumber,
  showToggleColored,
  showTopTotal,
  showTotal,
  useOrderBy,
  dynamicRowsHeight,
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
const updateKey = ref(0);

onUnmounted(() => resizeObserver.disconnect());

const fixedColumns = computed(() =>
  Object.keys(columns.value)
    .slice(0, fixedColumnNumber.value)
    .reduce(
      (fixedColumns, key) => {
        fixedColumns[key] = columns.value[key];

        return fixedColumns;
      },
      {} as Record<string, Column>,
    ),
);

const scrollableColumns = computed(() =>
  Object.keys(columns.value)
    .slice(fixedColumnNumber.value)
    .reduce(
      (scrollableColumns, key) => {
        scrollableColumns[key] = columns.value[key];

        return scrollableColumns;
      },
      {} as Record<string, Column>,
    ),
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

const fixedTable = ref<typeof SimpleTable | undefined>();
const scrollableTable = ref<typeof SimpleTable | undefined>();

const resizing = ref(false);

/**
 * Updates table size. Used on init and on resize
 */
const updateTableSize = () => {
  if (resizing.value) {
    return;
  }

  resizing.value = true;

  fixedWidth.value = 0;
  headerHeights.value = undefined;
  totalHeight.value = 0;

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

    const mainColumns = [
      ...table.querySelectorAll('.cell.column-main:not(.column-main-extended)'),
    ] as HTMLElement[];
    const mainExtendedColumns = [
      ...table.querySelectorAll('.cell.column-main.column-main-extended'),
    ] as HTMLElement[];
    const secondaryColumn = table.querySelector('.cell.column-secondary') as HTMLElement;
    const totalColumn = table.querySelector('.cell.total') as HTMLElement;

    const totalColumnHeights = [];

    if (mainColumns.length > 0) {
      info.mainColumnHeight = mainColumns[0].offsetHeight;
      info.width = mainColumns.reduce((sum, { offsetWidth }) => sum + offsetWidth, 0);
      totalColumnHeights.push(info.mainColumnHeight);
    }

    if (secondaryColumn) {
      info.hasSecondary = true;
      info.secondaryColumnHeight = secondaryColumn.offsetHeight;
      totalColumnHeights.push(info.secondaryColumnHeight);
    }

    if (mainExtendedColumns.length > 0) {
      const extendedColumnsWidth = mainExtendedColumns.reduce(
        (sum, { offsetWidth }) => sum + offsetWidth,
        0,
      );

      if (mainColumns.length === 0) {
        info.width = extendedColumnsWidth;
        info.mainColumnHeight = mainExtendedColumns[0].offsetHeight;
        totalColumnHeights.push(info.mainColumnHeight);
      } else {
        info.width += extendedColumnsWidth;
      }
    }

    // We get a total column height for columns without colspan.
    // 1 is added as a gap size between the column cells
    info.totalColumnHeight = totalColumnHeights.reduce((sum, height) => sum + height + 1, -1);

    if (totalColumn) {
      info.totalHeight = totalColumn.offsetHeight;
    }

    return info;
  };
  nextTick(() => {
    const fixedHeightInfo = getTableSizeInfo(fixedTable.value?.$el);
    const scrollableHeightInfo = getTableSizeInfo(scrollableTable.value?.$el);

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
    resizing.value = false;
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

watch(rows, (_newRows, oldRows) => {
  updateKey.value = Math.random();
  if (!oldRows.length) {
    updateTableSize();
  }
});
watch(additionalHeaders, () => {
  updateKey.value = Math.random();
});
watch(columns, () => {
  updateKey.value = Math.random();
  updateTableSize();
});

const dynamicRowsHeights = ref<string | undefined>(undefined);

const getDynamicRowsHeights = () => {
  if (!dynamicRowsHeight.value) {
    return;
  }

  let resultRowsHeights = '';
  // We will detect rows heights of second table only by first visible column
  const firstColumnId = Object.keys(scrollableColumns.value)[0];
  const firstColumnRows = scrollableTable.value?.$el.querySelectorAll(
    `:not(.column)[data-column="${firstColumnId}"]`,
  );
  firstColumnRows.forEach(
    (node: HTMLElement) =>
      (resultRowsHeights = resultRowsHeights.concat(
        node.getBoundingClientRect().height.toFixed(1),
        '|',
      )),
  );

  if (dynamicRowsHeights.value !== resultRowsHeights) {
    dynamicRowsHeights.value = resultRowsHeights;
    updateKey.value += 1;
  }
};
</script>

<template lang="pug">
.table-container(ref='tableContainer')
  Scrollable(
    @update:scrollPosition="(scrollPosition) => $emit('update:scrollPosition', scrollPosition)",
    :scrollHeightDelta="(headerHeights ? headerHeights.total : 0) + totalHeight - 40",
    :scrollPosition="scrollPosition",
    :scrollWidthDelta="fixedWidth",
    :style="tableStyle",
    :updateKey="updateKey",
    mode="both-top",
    optimized,
  )
    SimpleTable.fixed(
      ref="fixedTable",
      @addColoredMetric="(columnKey) => $emit('addColoredMetric', columnKey)",
      @removeColoredMetric="(columnKey) => $emit('removeColoredMetric', columnKey)",
      @update:orderBy="(orderBy) => $emit('update:orderBy', orderBy)",
      :additionalHeaders="additionalHeaders",
      :cellClasses="cellClasses"
      :columns="fixedColumns",
      :comparisonColumnKeys="comparisonColumnKeys",
      :detailsRows="detailsRows",
      :dragColumns="false",
      :inversedKpis="inversedKpis",
      :orderBy="orderBy",
      :orderColumnType="useOrderBy ? columns[orderBy[0][0]].type : undefined",
      :primaryColumn="primaryColumn",
      :rows="rows",
      :showNoDataMessage="true"
      :showRowNumber="showRowNumber",
      :showTopTotal="showTopTotal",
      :showTotal="showTotal",
      :useOrderBy="useOrderBy",
      :dynamicRowsHeights="dynamicRowsHeights ? dynamicRowsHeights.split('|') : undefined"
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
      template(#rowNumber="{ value }")
        slot(name="rowNumber", :value="value")
      //- use "_" before variable name because vue doesn't provide correct binding for v-for in templates
      template(v-for="_columnId in Object.keys(fixedColumns)"
        :key="_columnId"
        v-slot:[`row-${_columnId}`]="{ columnKey, index, row, spanIndex, subcolumnKey, subindex, value }"
      )
        slot(
          :name="'row-' + columnKey",
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
      @mounted="getDynamicRowsHeights"
      :additionalHeaders="additionalHeaders",
      :cellClasses="cellClasses",
      :colorMetrics="colorMetrics",
      :coloredMetrics="coloredMetrics",
      :columns="scrollableColumns",
      :comparisonColumnKeys="comparisonColumnKeys",
      :detailsRows="detailsRows",
      :dragColumns="dragColumns",
      :globalColoredMetrics="globalColoredMetrics",
      :inversedKpis="inversedKpis",
      :neutralColoredMetrics="neutralColoredMetrics",
      :noDataMessage="noDataMessage",
      :orderBy="orderBy",
      :orderColumnType="useOrderBy ? columns[orderBy[0][0]].type : undefined",
      :primaryColumn="primaryColumn",
      :rows="rows",
      :showRowNumber="false",
      :showToggleColored="showToggleColored",
      :showTopTotal="showTopTotal",
      :showTotal="showTotal",
      :showNoDataMessage="true",
      :style="tableStyle"
      :useOrderBy="useOrderBy",
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
      //- use "_" before variable name because vue doesn't provide correct binding for v-for in templates
      template(
        v-for="_columnId in Object.keys(scrollableColumns)"
        :key="_columnId"
        v-slot:[`row-${_columnId}`]="{ columnKey, index, row, spanIndex, subcolumnKey, subindex, value }"
      )
        slot(
          :name="'row-' + columnKey",
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
@use '../styles/colors' as colors;
@use '../styles/transition' as transition;

.table-container {
  @include colors.apply-color(box-shadow, border-table, $value-prefix: 0 0 0 1px);

  display: flex;
  max-height: 80vh;
  position: relative;
  transition-duration: transition.$transition-duration-normal;
  transition-property: box-shadow;

  > .scrollable {
    &:deep(.scrollable-content) {
      flex-direction: row;
    }

    &:deep(.scrollable-area) {
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
      @include colors.apply-color(box-shadow, border-table, $value-prefix: 1px 0 0);

      flex: 0;
      left: 0;
      position: sticky;
      z-index: 30;
    }

    &:not(.fixed) {
      flex: 1;
    }

    &.with-secondary:deep(.cell.column-main) {
      &.column-main-extended {
        height: var(--header-total-height);
      }

      &:not(.column-main-extended) {
        height: var(--header-main-height);
      }
    }

    &.with-secondary:deep(.cell.column-secondary) {
      height: var(--header-secondary-height);
      top: calc(var(--header-main-height) + 1px);
    }

    &:not(.with-secondary):deep(.cell.column-main) {
      height: var(--header-total-height);
    }
  }
}
</style>
