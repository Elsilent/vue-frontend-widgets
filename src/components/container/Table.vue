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
      template(
        v-for="[additionalHeader, columnKey] in getAdditionalHeaderColumns('fixed')",
        #[`additionalHeader(${additionalHeader})(${columnKey})`],
      )
        slot(:name="`additionalHeader(${additionalHeader})(${columnKey})`")
      template(v-for="(_, columnKey) in fixedColumns", #[`column(${columnKey})`]="{isGhost}")
        slot(:name="`column(${columnKey})`", :isGhost="isGhost ? isGhost : false")
      template(v-for="(_, columnKey) in fixedColumns", #[`row(${columnKey})`]="values")
        slot(v-bind="values", :name="`row(${columnKey})`")
      template(v-for="(_, columnKey) in fixedColumns", #[`total(${columnKey})`]="values")
        slot(v-bind="values", :name="`total(${columnKey})`")
      template(v-for="key in valueColumnKeys", #[`column(${key})`])
        slot(:name="`column(${key})`")
      template(v-for="key in valueColumnKeys", #[`row(${key})`]="values")
        slot(v-bind="values", :name="`row(${key})`")
      template(v-for="key in valueColumnKeys", #[`total(${key})`]="values")
        slot(v-bind="values", :name="`total(${key})`")
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
      :noDataMessage="$t('common.label.noData')",
      :style="tableStyle"
    )
      template(
        v-for="[additionalHeader, columnKey] in getAdditionalHeaderColumns('scrollable')",
        #[`additionalHeader(${additionalHeader})(${columnKey})`],
      )
        slot(:name="`additionalHeader(${additionalHeader})(${columnKey})`")
      template(v-for="(_, columnKey) in scrollableColumns", #[`column(${columnKey})`]="{isGhost}")
        slot(:name="`column(${columnKey})`", :isGhost="isGhost ? isGhost : false")
      template(v-for="(_, columnKey) in scrollableColumns", #[`row(${columnKey})`]="values")
        slot(v-bind="values", :name="`row(${columnKey})`")
      template(v-for="(_, columnKey) in scrollableColumns", #[`total(${columnKey})`]="values")
        slot(v-bind="values", :name="`total(${columnKey})`")
      template(v-for="key in valueColumnKeys", #[`column(${key})`])
        slot(:name="`column(${key})`")
      template(v-for="key in valueColumnKeys", #[`row(${key})`]="values")
        slot(v-bind="values", :name="`row(${key})`")
      template(v-for="key in valueColumnKeys", #[`total(${key})`]="values")
        slot(v-bind="values", :name="`total(${key})`")
</template>

<script>
import Scrollable from './Scrollable.vue';
import SimpleTable from './SimpleTable.vue';

/**
 * Table component which provides fixed column functionality
 * as well as scrollability of the table
 * 
 * Use SimpleTable component instead if you wish to have less features
 * 
 * Use CommonTable component instead if you wish table contents to be fetched
 * and formatted automatically
 * 
 * Reference: https://trackad.atlassian.net/wiki/spaces/TRACKADPRO/pages/239829034/Vue+tables
 */
export default {
  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }
  },
  components: {
    Scrollable,
    SimpleTable,
  },
  computed: {
    /**
     * Retrieves keys of secondary columns
     */
    comparisonColumnKeys() {
      return this.comparisonColumns
        ? Object.keys(this.comparisonColumns)
        : undefined;
    },
    /**
     * Retrieves the list of columns for the fixed table
     */
    fixedColumns() {
      return Object.keys(this.columns).slice(0, this.fixedColumnNumber)
        .reduce((columns, key) => {
          columns[key] = this.columns[key];

          return columns;
        }, {});
    },
    /**
     * Retrieves the list of columns for the scrollable table
     */
    scrollableColumns() {
      return Object.keys(this.columns).slice(this.fixedColumnNumber)
        .reduce((columns, key) => {
          columns[key] = this.columns[key];

          return columns;
        }, {});
    },
    /**
     * Retrieves the style of the table related to
     * the sizing of header, total and fixed table
     */
    tableStyle() {
      const style = {};

      if (this.headerHeights?.main) {
        style['--header-main-height'] = `${this.headerHeights.main}px`;
      }

      if (this.headerHeights?.secondary) {
        style['--header-secondary-height'] = `${this.headerHeights.secondary}px`;
      }

      if (this.fixedWidth) {
        style['--fixed-width'] = `${this.fixedWidth}px`;
      }

      if (this.headerHeights?.total) {
        style['--header-total-height'] = `${this.headerHeights.total}px`;
      }

      if (this.totalHeight) {
        style['--total-height'] = `${this.totalHeight}px`;
        style['--bottom-height'] = style['--total-height'];
      } else {
        if (this.totalRowCount === 1) {
          style['--total-scrollbar-display'] = 'none';
        } else {
          style['--total-height'] = '20px';
        }
        style['--bottom-height'] = `0px`;
      }

      return style;
    },
    totalRowCount() {
      return Object.keys(this.detailsRows)
        .reduce(
          (totalRowCount, rows) => totalRowCount + rows.length,
          Object.values(this.rows).length,
        );
    },
    /**
     * Retrieves all column keys merged with secondary keys
     */
    valueColumnKeys() {
      return Object.entries(this.columns)
        .filter(([_, { colspan, visible }]) => (colspan ?? 1) !== 1 && visible)
        .reduce((valueColumnKeys, [key, column]) => {
          if (this.comparisonColumns) {
            for (let i = 0; i < column.colspan; i++) {
              valueColumnKeys.push(`${key}-${this.comparisonColumnKeys[i]}`);
            }
          }

          return valueColumnKeys;
        }, []);
    },
  },
  data() {
    return {
      fixedWidth: 0,
      headerHeights: undefined,
      resizeObserver: undefined,
      totalHeight: 0,
    };
  },
  methods: {
    /**
     * Retrieves all possible pairs of additional headers and column keys
     *
     * @param {'fixed'|'scrollable'} columnKeysFilter
     */
    getAdditionalHeaderColumns(columnKeysFilter) {
      const columns = (() => {
        switch (columnKeysFilter) {
          case 'fixed':
            return this.fixedColumns;
          case 'scrollable':
            return this.scrollableColumns;
        }
      })();

      const columnKeys = Object.keys(columns);
      const additionalHeaders = Object.keys(this.additionalHeaders);

      const additionalHeaderColumns = new Array(columnKeys.length * additionalHeaders.length);

      for (
        let additionalHeaderIndex = 0;
        additionalHeaderIndex < additionalHeaders.length;
        additionalHeaderIndex++
      ) {
        for (let columnIndex = 0; columnIndex < columnKeys.length; columnIndex++) {
          const index = additionalHeaderIndex * additionalHeaders.length + columnIndex;

          additionalHeaderColumns[index] = [
            additionalHeaders[additionalHeaderIndex],
            columnKeys[columnIndex],
          ];
        }
      }

      return additionalHeaderColumns;
    },
    /**
     * Updates table size. Used on init and on resize
     */
    updateTableSize() {
      this.fixedWidth = 0;
      this.headerHeights = undefined;
      this.totalHeight = 0;

      this.$nextTick(() => {
        const getTableSizeInfo = (table) => {
          if (!table) {
            return 0;
          }

          let info = {
            hasSecondary: false,
            mainColumnHeight: 0,
            secondaryColumnHeight: 0,
            totalColumnHeight: 0,
            totalHeight: 0,
            width: 0,
          };

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
        }

        const fixedHeightInfo = getTableSizeInfo(this.$refs.fixedTable.$el);
        const scrollableHeightInfo = getTableSizeInfo(this.$refs.scrollableTable.$el);

        if (scrollableHeightInfo.hasSecondary) {
          this.fixedWidth = fixedHeightInfo.width;
          this.headerHeights = {
            main: scrollableHeightInfo.mainColumnHeight,
            secondary: scrollableHeightInfo.secondaryColumnHeight,
            total: Math.max(fixedHeightInfo.totalColumnHeight, scrollableHeightInfo.totalColumnHeight),
          };
          this.totalHeight = fixedHeightInfo.totalHeight;
        } else {
          const total = Math.max(fixedHeightInfo.totalColumnHeight, scrollableHeightInfo.totalColumnHeight);

          this.fixedWidth = fixedHeightInfo.width;
          this.headerHeights = {
            main: total,
            total,
          };
          this.totalHeight = fixedHeightInfo.totalHeight;
        }
      });
    },
  },
  mounted() {
    if (this.fixedColumnNumber > 0 || this.showRowNumber) {
      this.resizeObserver = new ResizeObserver(() => this.updateTableSize());

      this.$nextTick(() => {
        this.resizeObserver.observe(this.$refs.tableContainer);
      });
    }
  },
  props: {
    /**
     * List of additional header rows to show.
     * E.g.: {
     *   inline_filters: {
     *     icon: 'filter-alt',
     *   }
     * }
     */
    additionalHeaders: {
      type: Object,
      default: () => {},
    },
    /**
     * Additional cell classes with className as a key
     * E.g.: { 'align-left': true, 'height-100': true }
     */
    cellClasses: {
      type: Object,
      default: {}
    },
    /**
     * Enables possibility to color metrics
     */
    colorMetrics: {
      type: Boolean,
      default: false,
    },
    /**
     * Provides the list of metrics which can be colored
     */
    coloredMetrics: {
      type: Array,
      default: () => [],
    },
    /**
     * Provides the list of columns to display on the table.
     * 
     * Format:
     * - { column_name: ColumnInfo, ... }
     * - ColumnInfo:
     *   - label: string
     *   - type: 'string'|'int'|'float'|'money'|'money_capped'|'percent'|'time'
     *   - visible: boolean
     *   - colspan?: int
     */
    columns: {
      type: Object,
      required: true,
    },
    /**
     * Provides the list of subcolumn info
     * 
     * Format:
     * - { subcolumn_key: SubcolumnInfo }
     * - SubcolumnInfo:
     *   - label: string
     *   - format?: 'difference' // used to color difference values text with green/red
     *   - type: 'string'|'int'|'float'|'money'|'money_capped'|'percent'|'time' // overrides column type
     */
    comparisonColumns: {
      type: Object,
      required: false,
    },
    /**
     * Provides the list of detail rows mapped to a parent row primary column.
     * 
     * Example:
     * - Primary column: id
     * - detailsRows: { 3: [...], 4: [...] }
     */
    detailsRows: {
      type: Object,
      required: true,
    },
    /**
     * Allows to drag columns inside the table.
     * If enabled will emit 'dragged' event when column is moved to a new place
     */
    dragColumns: {
      type: Boolean,
      default: false,
    },
    /**
     * Amount of fixed columns
     */
    fixedColumnNumber: {
      type: Number,
      default: 0,
    },
    /**
     * Provides the list of negative KPIs. This list is used for coloring metrics
     */
    inversedKpis: {
      type: Array,
      required: false,
    },
    /**
     * Provides the list of negative KPIs. This list is used for coloring metrics
     */
    orderBy: {
      type: Array,
      required: true,
    },
    /**
     * Primary column which is used for detailed rows
     */
    primaryColumn: {
      type: [Number, String],
      default: 'id',
    },
    /**
     * List of rows to display.
     * 
     * Displays all rows, slice the array and use Pagination component
     * if you wish to show data by pages
     */
    rows: {
      type: [Array, Object],
      required: true,
    },
    /**
     * Position of the scrollable table. If not provided any change
     * to table contents will reset the scroll position to { left: 0, top: 0 }
     */
    scrollPosition: {
      type: Object,
      default: () => ({ left: 0, top: 0 }),
    },
    /**
     * Enables the display of row number
     */
    showRowNumber: {
      type: Boolean,
      default: true,
    },
    /**
     * Enables the display of top total
     */
    showTopTotal: {
      type: Boolean,
      default: false,
    },
    /**
     * Enables the display of the total row
     */
    showTotal: {
      type: Boolean,
      default: true,
    }
  },
}
</script>

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
