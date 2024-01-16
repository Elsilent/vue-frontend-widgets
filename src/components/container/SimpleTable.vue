<template lang="pug">
.table(
  ref="table",
  :class=`{
    'with-secondary': !!comparisonColumnKeys &&
      visibleColumnKeys.some((key) => (columns[key].colspan || 1) !== 1)
  }`,
  :key="`table-${tableKey}-${orderedRowValues.length}`",
  :style="tableStyle",
)
  .cell.column.column-main.row-number(
    v-if="showRowNumber",
    :style="maxRowspan > 1 ? { 'grid-row-end': `span ${maxRowspan}` } : undefined",
  ) #
  template(v-for="columnKey in visibleColumnKeys")
    .cell.column.column-main(
      :ref="`column(${columnKey})`",
      v-if="columns[columnKey].visible",
      @click.stop="() => onColumnClick(columnKey)",
      @mousedown="(event) => onColumnDragStart(columnKey, event)",
      :class="getColumnClassList(columnKey)",
      :key="`column-${columnKey}`",
      :style="getColumnStyle(columnKey)",
      :data-column="columnKey",
    )
      slot(:name="`column(${columnKey})`")
      .toggle-colored(
        v-if='isColorable(columnKey)',
        @click.stop='() => toggleColored(columnKey)',
        :style="{ top: `${getColorizedButtonTopOffset(columnKey)}px` }"
      ) {{ $t(`common.button.${indexOfColored(columnKey) >= 0 ? 'uncolorize' : 'colorize'}`) }}
  //- Renders "ghost" cells
  //- These cells are visually moved while the originals are visible in background
  template(v-if="dragColumns")
    template(v-for="columnKey in visibleColumnKeys")
      .cell.column.column-main.column-ghost(
        v-if="columns[columnKey].visible",
        :class="getColumnClassList(columnKey)",
        :key="`column-ghost-${columnKey}`",
        :style="getColumnGhostStyle(columnKey)",
        :data-column="columnKey",
      )
        slot(:name="`column(${columnKey})`", :isGhost="true")
  template(v-for='(additionalHeaderInfo, additionalHeader) in additionalHeaders')
    .cell.column.cell-additional-header.row-number(v-if='showRowNumber')
      i.las(:class="[`la-${additionalHeaderInfo.icon}`]")
    template(v-for="columnKey in visibleColumnKeys")
      .cell.column.cell-additional-header(
        :class="[`cell-additional-header-${columnKey}`]",
        :key="`additional-header-${additionalHeader}-${columnKey}`",
        :data-additionalHeader="additionalHeader",
        :data-column="columnKey",
      )
        slot(:name="`additionalHeader(${additionalHeader})(${columnKey})`")
  template(v-if='showTopTotal && showTotal')
    .cell.total.top-total.row-number(v-if="showRowNumber")
    template(v-for="columnKey in visibleColumnKeys")
      template(v-if="columns[columnKey].visible")
        template(v-if="!!comparisonColumnKeys && (columns[columnKey].colspan || 1) !== 1")
          .cell.total.top-total(
            v-for="index in columns[columnKey].colspan",
            :key="`top-total-${getOrderByKey(columnKey, index - 1)}`",
            :data-column="columnKey",
            :data-subcolumn-index="index - 1",
          )
            slot(
              :name="`total(${getOrderByKey(columnKey, index - 1)})`",
              :values="orderedRowValues.map((row) => row[columnKey])",
            )
        template(v-else)
          .cell.total.top-total(
            :key="`top-total-${columnKey}`",
            :data-column="columnKey",
          )
            slot(
              :name="`total(${columnKey})`",
              :values="orderedRowValues.map((row) => row[columnKey])",
            )
  template(
    v-if="!!comparisonColumnKeys",
    v-for="columnKey in visibleColumnKeys",
  )
    template(v-if="columns[columnKey].visible && columns[columnKey].colspan")
      .cell.column.column-secondary(
        v-for="index in columns[columnKey].colspan",
        @click.stop="() => onColumnClick(columnKey, index - 1)",
        :class="getColumnClassList(columnKey, index - 1)",
        :data-column="columnKey",
        :data-subcolumn-index="index - 1",
        :key="`column-${getOrderByKey(columnKey, index - 1)}`",
      )
        slot(:name="`column(${getOrderByKey(columnKey, index - 1)})`")
  template(v-for="(row, rowIndex) in orderedRowValues")
    .cell.row-number(
      v-if="showRowNumber",
      :class="{ even: rowIndex % 2 === 0 }",
      :key="`row-${rowIndex}-${row._row_key}`",
    ) {{ getRowNumberValue(row.rowInfo) }}
    template(v-for="columnKey in visibleColumnKeys")
      template(v-if="!comparisonColumnKeys || (columns[columnKey].colspan || 1) === 1")
        .cell(
          :class="getCellClasses(row, rowIndex, columnKey)",
          :key="`row-${rowIndex}-${row._row_key}-column-${columnKey}`",
          :data-column="columnKey",
          :data-primary-key="row[primaryColumn]",
        )
          slot(
            :index="rowIndex",
            :name="`row(${columnKey})`",
            :reloadRow="() => reloadRow(row)",
            :reloadTable="() => reloadTable()",
            :row="row",
            :subindex="row.rowInfo.subindex",
            :value="row[columnKey]",
          )
      template(v-else, v-for="index in columns[columnKey].colspan")
        .cell(
          :class="getCellClasses(row, rowIndex, columnKey, index - 1)",
          :key="`row-${rowIndex}-${row._row_key}-column-${columnKey}-span-${index}`",
          :data-column="columnKey",
          :data-primary-key="row[primaryColumn]",
          :data-subcolumn-index="index - 1",
        )
          slot(
            :index="rowIndex",
            :name="`row(${getOrderByKey(columnKey, index - 1)})`",
            :reloadRow="() => reloadRow(row)",
            :reloadTable="() => reloadTable()",
            :row="row",
            :spanIndex="comparisonColumnKeys ? comparisonColumnKeys[index - 1] : index - 1",
            :subindex="row.rowInfo.subindex",
            :value=`row[columnKey]
              ? row[columnKey][comparisonColumnKeys ? comparisonColumnKeys[index - 1] : index - 1]
              : undefined`,
          )
  template(v-if="orderedRowValues.length === 0 && showNoDataMessage")
    .cell.odd.no-data(
      key="row-no-data",
      :style="{ 'grid-column': `1 / span ${columnCountDisplayed}` }"
      v-html="noDataMessage"
    )
  template(v-if='showTotal')
    .cell.total.row-number(v-if="showRowNumber") #
    template(v-for="columnKey in visibleColumnKeys")
      template(v-if="columns[columnKey].visible")
        template(v-if="!!comparisonColumnKeys && (columns[columnKey].colspan || 1) !== 1")
          .cell.total(
            v-for="index in columns[columnKey].colspan",
            :key="`total-${getOrderByKey(columnKey, index - 1)}`",
            :data-column="columnKey",
            :data-subcolumn-index="index - 1",
          )
            slot(
              :name="`total(${getOrderByKey(columnKey, index - 1)})`",
              :values="orderedRowValues.map((row) => row[columnKey])",
            )
        template(v-else)
          .cell.total(
            :key="`total-${columnKey}`",
            :data-column="columnKey",
          )
            slot(
              :name="`total(${columnKey})`",
              :values="orderedRowValues.map((row) => row[columnKey])",
            )
</template>

<script>
/**
 * Simple table component which provides base functionality
 * and some minor features
 * 
 * Use Table component instead if you wish to have fixed columns
 * but wish to fulfill table contents by yourself
 * 
 * Use CommonTable component instead if you wish table contents to be fetched
 * and formatted automatically
 * 
 * Reference: https://trackad.atlassian.net/wiki/spaces/TRACKADPRO/pages/239829034/Vue+tables
 */
export default {
  computed: {
    columnCountDisplayed() {
      return this.visibleColumnKeys.length + (this.showRowNumber ? 1 : 0);
    },
    dragModeEnabled() {
      // Prevent drag mode from being triggered
      // if user didn't make enough mouse moves
      return this.dragMoves > 3;
    },
    /**
     * Calculates minimum values which are used to color metrics
     */
    minValues() {
      const a = Object.values(this.rows)
        .reduce((minValues, row) => {
          for (const [columnKey, column] of Object.entries(this.columns)) {
            if (column.type === 'string') {
              continue;
            }

            if (this.comparisonColumnKeys && column.colspan > 1) {
              if (!(columnKey in minValues)) {
                minValues[columnKey] = Object.entries(row[columnKey])
                  .reduce((values, [key, value]) => {
                    values[key] = parseFloat(value);

                    return values;
                  }, {});
              }

              for (const subcolumnKey in minValues[columnKey]) {
                if (minValues[columnKey][subcolumnKey] > row[columnKey][subcolumnKey]) {
                  minValues[columnKey][subcolumnKey] = parseFloat(row[columnKey][subcolumnKey]);
                }
              }
            } else {
              if (!(columnKey in minValues) || minValues[columnKey] > row[columnKey]) {
                minValues[columnKey] = parseFloat(row[columnKey]);
              }
            }
          }

          return minValues;
        }, {});

      return a;
    },
    /**
     * Calculates maximum values which are used to color metrics
     */
    maxValues() {
      return Object.values(this.rows)
        .reduce((maxValues, row) => {
          for (const [columnKey, column] of Object.entries(this.columns)) {
            if (column.type === 'string') {
              continue;
            }

            if (this.comparisonColumnKeys && column.colspan > 1) {
              if (!(columnKey in maxValues)) {
                maxValues[columnKey] = Object.entries(row[columnKey])
                  .reduce((values, [key, value]) => {
                    values[key] = parseFloat(value);

                    return values;
                  }, {});
              }

              for (const subcolumnKey in maxValues[columnKey]) {
                if (maxValues[columnKey][subcolumnKey] < row[columnKey][subcolumnKey]) {
                  maxValues[columnKey][subcolumnKey] = parseFloat(row[columnKey][subcolumnKey]);
                }
              }
            } else {
              if (!(columnKey in maxValues) || maxValues[columnKey] < row[columnKey]) {
                maxValues[columnKey] = parseFloat(row[columnKey]);
              }
            }
          }

          return maxValues;
        }, {});
    },
    /**
     * Calculates maximum rowspan of the columns which is used to correctly
     * display row number column
     */
    maxRowspan() {
      if (this.comparisonColumnKeys) {
        return this.visibleColumnKeys
          .map((key) => this.columns[key].rowspan ?? 1)
          .reduce((a, b) => a > b ? a : b);
      } else {
        return 1;
      }
    },
    /**
     * Converts rows to array
     */
    rowValues() {
      return Object.values(this.rows);
    },
    /**
     * Retrieves style of table which allows display: grid to show correct table
     */
    tableStyle() {
      let columnCount = 0;

      for (const columnKey of this.visibleColumnKeys) {
        const column = this.columns[columnKey];

        if (column.colspan && this.comparisonColumnKeys) {
          columnCount += column.colspan;
        } else {
          columnCount++;
        }
      }

      let gridTemplateColumns = `repeat(${columnCount}, auto)`;

      if (this.showRowNumber) {
        gridTemplateColumns = `min-content ${gridTemplateColumns}`;
      }

      return {
        'grid-template-columns': gridTemplateColumns,
      };
    },
    visibleColumnKeys() {
      return Object.entries(this.columns)
        .filter(([_, { visible }]) => visible)
        .map(([key, _]) => key);
    },
  },
  data() {
    return {
      columnSizingInfo: {},
      dragColumnFromIndex: undefined,
      dragColumnToIndex: undefined,
      dragElementTarget: undefined,
      dragMoves: 0,
      dragMouseStartX: 0,
      dragMouseX: 0,
      orderedRowValues: [],
      tableKey: 0,
    };
  },
  methods: {
    /**
     * Get top offset for colorized button
     * @param columnKey
     * @returns {*}
     */
    getColorizedButtonTopOffset(columnKey) {
      if (!this.columnSizingInfo[columnKey]) {
        return 0;
      }

      const { height } = this.columnSizingInfo[columnKey];

      return height;
    },
    /**
     * Gets cell classes to color even rows and make colored metrics
     */
    getCellClasses(row, rowIndex, columnKey, subcolumnIndex = undefined) {
      const classes = {
        ...this.cellClasses,
        ...{ even: rowIndex % 2 === 0 },
      };

      if (this.colorMetrics) {
        const colorMood = this.inversedKpis.includes(columnKey)
          ? 'negative'
          : 'positive';

        classes[`color-intensity-${this.getColorIntensity(row[columnKey], columnKey, subcolumnIndex)}`] = true;
        classes[`color-${colorMood}`] = true;

        if (subcolumnIndex !== undefined && this.comparisonColumnKeys[subcolumnIndex] === 'difference') {
          classes.colored = false;
        } else {
          classes.colored = this.indexOfColored(columnKey) >= 0;
        }
      }

      return classes;
    },
    /**
     * Retrieves colored metric color intensity from 0 to 10
     */
    getColorIntensity(value, columnKey, subcolumnIndex = undefined) {
      if (this.columns[columnKey].type === 'string') {
        return undefined;
      }

      let currentValue = value;
      let maxValue = this.maxValues[columnKey];
      let minValue = this.minValues[columnKey];

      if (subcolumnIndex !== undefined) {
        currentValue = currentValue[this.comparisonColumnKeys[subcolumnIndex]];
        maxValue = maxValue[this.comparisonColumnKeys[subcolumnIndex]];
        minValue = minValue[this.comparisonColumnKeys[subcolumnIndex]];
      }

      if (maxValue === minValue) {
        return 0;
      }

      return Math.round((currentValue - minValue) * 10 / (maxValue - minValue));
    },
    /**
     * Gets column classes which are used to display order related elements
     */
    getColumnClassList(columnKey, subcolumnIndex = undefined) {
      const column = this.columns[columnKey];

      const orderByKey = [columnKey];

      if (subcolumnIndex !== undefined) {
        orderByKey.push(
          this.comparisonColumnKeys
            ? this.comparisonColumnKeys[subcolumnIndex]
            : subcolumnIndex
        );
      }

      const ordered = this.orderBy[0]
        ? this.orderBy[0].every((orderBySegment, segmentIndex) => orderBySegment === orderByKey[segmentIndex])
        : false;

      return {
        'column-main-extended': this.subcolumnIndex === undefined && column.rowspan > 1,
        dragged: this.visibleColumnKeys[this.dragColumnFromIndex] === columnKey,
        'drag-mode': this.dragModeEnabled,
        orderable: !this.comparisonColumnKeys || (column.colspan ?? 1) === 1 || subcolumnIndex !== undefined,
        'ordered-by': ordered,
        [`order-direction-${this.orderBy[1] ? 'desc' : 'asc'}`]: ordered,
      };
    },
    /**
     * Gets style of the column ghost which is moved instead of the real column
     * when dragging columns
     */
    getColumnGhostStyle(columnKey) {
      const style = {};

      if (columnKey in this.columnSizingInfo) {
        if (this.dragColumnFromIndex !== undefined && this.visibleColumnKeys[this.dragColumnFromIndex] === columnKey) {
          // Apply style for the column that is being currently dragged
          const { height, left, width } = this.columnSizingInfo[columnKey];

          style.left = `${Math.floor(left + this.dragMouseX - this.dragMouseStartX)}px`;
          style.height = `${height + 1}px`;
          style.width = `${Math.round(width)}px`;
        } else {
          // Apply style for the column that is not being dragged
          // We calculate left position here taking into account that
          // the column currently being dragged could be moved before or after
          // the current one
          const columnIndex = this.visibleColumnKeys.indexOf(columnKey);

          let leftOffset = (() => {
            if (this.dragColumnFromIndex === undefined) {
              return 0;
            }

            if (this.dragColumnFromIndex < columnIndex) {
              if (this.dragColumnToIndex >= columnIndex) {
                return -this.columnSizingInfo[this.visibleColumnKeys[this.dragColumnFromIndex]].width;
              }
            } else if (this.dragColumnToIndex <= columnIndex) {
              return this.columnSizingInfo[this.visibleColumnKeys[this.dragColumnFromIndex]].width;
            }

            return 0;
          })();

          const { height, left, width } = this.columnSizingInfo[columnKey];

          style.left = `${Math.floor(left + leftOffset)}px`;
          style.height = `${height + 1}px`;
          style.width = `${Math.floor(width)}px`;
        }
      }

      return style;
    },
    /**
     * Gets column span styles
     */
    getColumnStyle(columnKey) {
      const column = this.columns[columnKey];

      const style = {};

      if (this.comparisonColumnKeys) {
        if (column.colspan) {
          style['grid-column-end'] = `span ${column.colspan}`;
        }

        if (column.rowspan) {
          style['grid-row-end'] = `span ${column.rowspan}`;
        }
      }

      return style;
    },
    /**
     * For comparison-like pages we need to convert two values,
     * the column and the subcolumn to a single string
     */
    getOrderByKey(columnKey, subcolumnIndex = undefined) {
        if (subcolumnIndex === undefined) {
          return columnKey;
        } else {
          return this.comparisonColumnKeys
            ? `${columnKey}-${this.comparisonColumnKeys[subcolumnIndex]}`
            : `${columnKey}-${subcolumnIndex}`;
        }
    },
    /**
     * Numeric data can come as strings or nulls from backend.
     * This method converts such data to the correct format
     */
    getRawValue(value, type) {
      switch (type) {
        case 'float':
        case 'int':
        case 'money':
        case 'money_capped':
        case 'percent':
        case 'time':
          return parseFloat(value ?? 0);
        case 'date':
          return this.convertDate(value);
        case 'average':
          const TotalAverage = new RegExp('([A-z]+): ([0-9]+)');

          if (TotalAverage.test(value)) {
            return value;
          }

          return this.getRawValue(value, 'int');
        default:
          return value;
      }
    },
    /**
     * Retrieves row number cell contents
     */
    getRowNumberValue(rowInfo) {
      return rowInfo.subindex === undefined
        ? rowInfo.index + 1
        : `${rowInfo.index + 1}.${rowInfo.subindex + 1}`;
    },
    /**
     * Finds index of colored metric in the list of colorized metrics
     */
    indexOfColored(columnKey) {
      return this.coloredMetrics.findIndex((kpi) => kpi === columnKey);
    },
    /**
     * Checks if a column can be colored
     */
    isColorable(columnKey) {
      return this.colorMetrics && !['date', 'string'].includes(this.columns[columnKey].type);
    },
    /**
     * Orders data by a clicked column
     */
    onColumnClick(columnKey, subcolumnIndex = undefined) {
      if (this.comparisonColumnKeys && this.columns[columnKey].colspan && subcolumnIndex === undefined) {
        return;
      }

      if (this.dragModeEnabled && this.visibleColumnKeys[this.dragColumnFromIndex] === columnKey) {
        return;
      }

      const newOrderBy = [columnKey];

      if (subcolumnIndex !== undefined) {
        if (this.comparisonColumnKeys) {
          newOrderBy.push(this.comparisonColumnKeys[subcolumnIndex]);
        } else {
          newOrderBy.push(subcolumnIndex);
        }
      }

      const alreadyOrderedBy = newOrderBy
        .every((orderBySegment, segmentIndex) => orderBySegment === this.orderBy[0][segmentIndex]);

      const reversed = (() => {
        if (alreadyOrderedBy) {
          return !this.orderBy[1];
        }

        return this.columns[columnKey].type !== 'string';
      })();

      this.$emit(
        'update:orderBy',
        [
          newOrderBy,
          reversed,
        ],
      );
    },
    /**
     * Initializes drag mode for a given column
     *
     * This adds mousemove and mouseup events to window
     * to correctly process further column move
     */
    onColumnDragStart(columnKey, event) {
      if (!this.dragColumns) {
        return;
      }

      this.updateColumnSizingInfo();

      this.dragColumnFromIndex = this.visibleColumnKeys.indexOf(columnKey);
      this.dragElementTarget = event.target;
      this.dragColumnToIndex = this.dragColumnFromIndex;
      this.dragMoves = 0;
      this.dragMouseStartX = event.clientX;
      this.dragMouseX = event.clientX;

      window.addEventListener('mousemove', this.onColumnDragMove);
      window.addEventListener('mouseup', this.onColumnDragStop);
    },
    /**
     * Processes dragged column move
     *
     * Columns are swapped when the dragging column reaches
     * the edge of the neighboring column with its center
     */
    onColumnDragMove(event) {
      if (this.dragColumnFromIndex === undefined) {
        return;
      }

      this.dragMoves++;
      this.dragMouseX = event.clientX;

      const sizingInfo = Object.entries(this.columns)
        .filter(([_, column]) => column.visible)
        .map(([key]) => key)
        .map((columnKey, columnIndex) => ({
          columnIndex: parseInt(columnIndex),
          columnKey,
          sizing: this.columnSizingInfo[columnKey],
        }));

      const draggedColumnSizingInfo = sizingInfo[this.dragColumnFromIndex].sizing;

      const draggedColumnHalfWidth = draggedColumnSizingInfo.width / 2;

      const draggedColumnBaseLeft = draggedColumnSizingInfo.left;

      const draggedColumnLeft = draggedColumnBaseLeft + this.dragMouseX - this.dragMouseStartX;

      // Here we calculate the new index of the dragged column
      // based on the position and width of columns. A column is moved
      // when it reaches other columns space with its center
      this.dragColumnToIndex = (() => {
        for (const { columnIndex, columnKey, sizing } of sizingInfo) {
          if (draggedColumnLeft + draggedColumnHalfWidth - sizing.left - sizing.width < 0) {
            return columnIndex;
          }
        }
        return sizingInfo.length;
      })();
    },
    /**
     * Handles dragged column being dropped
     */
    onColumnDragStop(event) {
      if (this.dragColumnFromIndex === undefined) {
        return;
      }

      const shouldUpdate = this.dragModeEnabled && this.dragColumnToIndex !== this.draggedColumn;

      if (shouldUpdate) {
        this.$emit(
          'move:column',
          {
            from: this.dragColumnFromIndex,
            to: this.dragColumnToIndex,
          },
        );
      }

      this.dragElementTarget = undefined;
      this.dragColumnToIndex = undefined;
      this.dragMoves = 0;
      this.dragColumnFromIndex = undefined;

      this.$nextTick(() => {
        this.updateColumnSizingInfo();
      });

      window.removeEventListener('mousemove', this.onColumnDragMove);
      window.removeEventListener('mouseup', this.onColumnDragStop);
    },
    /**
     * Reloads a single row
     */
    reloadRow(row) {
      // eslint-disable-next-line
      row._row_key += 1;
    },
    /**
     * Reloads the whole table
     */
    reloadTable() {
      this.orderedRowValues = Object.values(this.rows)
        .map(row => ({
          ...row,
          _row_key: 0,
        }))
        .sort((leftRow, rightRow) => {
          const comparison = (() => {
            const leftValue = this.getRawValue(
              this.orderBy[0].reduce(
                (value, key) => value[key],
                leftRow,
              ),
              this.orderColumnType,
            );
            const rightValue = this.getRawValue(
              this.orderBy[0].reduce(
                (value, key) => value[key],
                rightRow,
              ),
              this.orderColumnType,
            );

            if (leftValue > rightValue) {
              return 1;
            } if (leftValue < rightValue) {
              return -1;
            }
            return 0;
          })();

          return this.orderBy[1]
            ? -comparison
            : comparison;
        })
        .reduce((rows, row, index) => {
          rows.push({
            ...row,
            rowInfo: {
              index,
              detailable: true,
            },
          });

          if (this.detailsRows[row[this.primaryColumn]]) {
            rows.push(...this.detailsRows[row[this.primaryColumn]].map((detailRow, subindex) => ({
              ...detailRow,
              rowInfo: {
                index,
                subindex,
                detailable: false,
              },
            })));
          }

          return rows;
        }, []);
      this.tableKey = Math.random() * Number.MAX_VALUE;
    },
    /**
     * Toggles column colored state
     */
    toggleColored(columnKey) {
      const coloredIndex = this.indexOfColored(columnKey);

      if (coloredIndex >= 0) {
        this.$emit('removeColoredMetric', columnKey);
      } else {
        this.$emit('addColoredMetric', columnKey);
      }
    },
    /**
     * Updates sizings of each column
     */
    updateColumnSizingInfo() {
      let table = this.$refs.table;

      if (Array.isArray(table)) {
        table = table[0];
      }

      for (const [columnKey, column] of Object.entries(this.columns)) {
        if (!column.visible || !(`column(${columnKey})` in this.$refs)) {
          this.$delete(this.columnSizingInfo, columnKey);

          continue;
        }

        let element = this.$refs[`column(${columnKey})`];

        if (Array.isArray(element)) {
          element = element[0];
        }

        const clientRect = element.getBoundingClientRect();

        this.$set(this.columnSizingInfo, columnKey, {
          height: clientRect.height,
          left: clientRect.left - table.getBoundingClientRect().left,
          width: clientRect.width,
        });
      }
    }
  },
  mounted() {
    this.reloadTable();
    // In order to position colorize button properly
    this.updateColumnSizingInfo();
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
     * Provides the list of keys for subcolumns
     * (ex. default, comparison, difference)
     */
    comparisonColumnKeys: {
      type: Array,
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
     * Provides the list of negative KPIs. This list is used for coloring metrics
     */
    inversedKpis: {
      type: Array,
      required: false,
    },
    /**
     * Provides a tuple for ordering. Example: [name, false]
     * will order by name in ascending direction
     */
    orderBy: {
      type: Array,
      required: true,
    },
    /**
     * Type of column currently used to order the table.
     * 
     * This column can be outside of table column list
     * (ex. when we have fixed and scrollable tables)
     */
    orderColumnType: {
      type: String,
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
     * Enables the display of row number
     */
    showRowNumber: {
      type: Boolean,
      default: true,
    },
    /**
     * Enables the display of the total row
     */
    showTotal: {
      type: Boolean,
      default: true,
    },
    /**
     * Enables the display of the total row ot top
     */
    showTopTotal: {
      type: Boolean,
      default: false,
    },
    /**
     * Enables the display of no data row.
     */
    showNoDataMessage: {
      type: Boolean,
      default: false,
    },
    /**
     * No data message that should be displayed.
     */
    noDataMessage: {
      type: String,
      default: '&nbsp;',
    },
    /**
     * Additional cell classes with className as a key
     * E.g.: { "align-left": true, "height-100": true }
     */
    cellClasses: {
      type: Object,
      default: {}
    }
  },
  watch: {
    columns() {
      this.updateColumnSizingInfo();
    },
    rows() {
      this.reloadTable();
      this.updateColumnSizingInfo();
    },
    additionalHeaders() {
        this.$nextTick(() => {
            this.updateColumnSizingInfo();
        });
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.table {
  background: $color-border;
  display: grid;
  gap: 1px;
  margin-bottom: 0;
  position: relative;

  > .cell {
    align-items: center;
    background: white;
    color: black;
    display: flex;
    font-size: 12px;
    justify-content: center;
    padding: 7px 14px;
    position: relative;
    text-align: center;

    &.column {
      box-shadow: 0 0 0 1px $color-border;
      font-weight: 700;
      position: sticky;
      top: 0;
      transition: background 0.2s, box-shadow 0.2s, color 0.2s, opacity 0.2s;
      user-select: none;

      &:hover {
        > .toggle-colored:not(.drag-mode) {
          pointer-events: initial;
          opacity: 1;
          transition-duration: 0.1s;
        }
      }

      &.column-main {
        transition: none;
        z-index: 21;

        &.column-ghost {
          opacity: 0;
          pointer-events: none;
          position: absolute;
          z-index: 22;

          &.drag-mode {
            opacity: 1;

            &.dragged {
              box-shadow: 0 0 0 1px $color-border,
                0 0.25rem 0.5rem rgba(black, 0.25);
              transition: box-shadow 0.2s;
              z-index: 23;
            }

            &:not(.dragged) {
              transition: box-shadow 0.2s, left 0.2s;
            }
          }
        }

        &:not(.column-ghost) {
          &.drag-mode {
            background: rgba(black, 0.0625);
            color: rgba(black, 0.25);
            cursor: grabbing;
          }
        }
      }

      &.column-secondary {
        z-index: 20;
      }

      &.orderable {
        cursor: pointer;

        &.ordered-by {
          &.order-direction-asc {
            &::after {
              opacity: 0.5;
            }
          }

          &.order-direction-desc {
            &::before {
              opacity: 0.5;
            }
          }
        }

        &:not(.ordered-by) {
          &::before {
            opacity: 0.5;
          }

          &::after {
            opacity: 0.5;
          }
        }

        &::before {
          content: '\2191';
          position: absolute;
          right: 0.6rem;
          top: 0.1rem;
          z-index: 1;
        }

        &::after {
          content: '\2193';
          position: absolute;
          right: 0.3rem;
          top: 0.1rem;
          z-index: 1;
        }
      }

      > .toggle-colored {
        background-color: $color-active;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        box-shadow: 0 2px 4px rgba(black, 0.25);
        color: white;
        cursor: pointer;
        font-weight: 500;
        opacity: 0;
        padding: 2px 4px;
        position: absolute;
        text-align: center;
        top: 0px;
        transition: opacity 0.2s;
        transform-origin: top center;
        width: calc(min(100% - 16px, fit-content));
        z-index: 2;
      }
    }

    &.total {
      bottom: 0;
      box-shadow: 0 0 0 1px $color-border;
      font-weight: 700;
      padding: 1rem;
      position: sticky;
      z-index: 20;
    }

    &:not(.column) {
      white-space: nowrap;

      &:not(.colored) {
        box-shadow: 0 0 0 1px $color-border;
      }

      &:not(.total) {
        transition: background-color 0.2s, box-shadow 0.2s;

        &.colored {
          position: relative;

          $-negative-base-intensity-color: mix($color-negative, white, 60%);
          $-positive-base-intensity-color: mix($color-positive, white, 60%);

          @for $-index from 0 through 10 {
            &.color-intensity-#{$-index} {
              z-index: $-index + 1;

              &.color-negative {
                $-color: mix($-negative-base-intensity-color, white, $-index * 10%);
                $-border-color: darken($-color, 15%);
                $-border-color: mix($-border-color, $color-border, $-index * 10%);

                background: $-color;
                box-shadow: 0 0 0 1px $-border-color;
              }

              &.color-positive {
                $-color: mix($-positive-base-intensity-color, white, $-index * 10%);
                $-border-color: darken($-color, 15%);
                $-border-color: mix($-border-color, $color-border, $-index * 10%);

                background: $-color;
                box-shadow: 0 0 0 1px $-border-color;
              }
            }
          }
        }

        &:not(.colored) {
          &.even {
            background: $color-table-even-row;
          }

          &:not(.even) {
            background: $color-table-odd-row;
          }
        }
      }
    }
  }
}
</style>
