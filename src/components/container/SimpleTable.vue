<script lang="ts" setup>
import { DateTime } from 'luxon';
import { computed, ref, toRefs, watch, type ComponentPublicInstance } from 'vue';
import { type Column, type ColumnType } from '../../utils/type/component/container/table';
import Icon from '../image/Icon.vue';

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

const props = withDefaults(
  defineProps<{
    /** List of additional header rows to show */
    additionalHeaders?: Record<
      string,
      {
        icon: string;
      }
    >;
    /** Additional cell classes with className as a key */
    cellClasses?: Record<string, boolean>;
    /** Enables possibility to color metrics */
    colorMetrics?: boolean;
    /** Provides the list of metrics which can be colored */
    coloredMetrics?: string[];
    /** Provides the list of columns to display on the table */
    columns: Record<string, Column>;
    /**
     * Provides the list of keys for subcolumns
     * (ex. default, comparison, difference)
     */
    comparisonColumnKeys?: string[];
    /**
     * Provides the list of detail rows mapped to a parent row primary column.
     *
     * Example:
     * - Primary column: id
     * - detailsRows: { 3: { ... }, 4: { ... } }
     */
    detailsRows: Record<string, Record<string, any>>;
    /**
     * Allows to drag columns inside the table.
     * If enabled will emit 'dragged' event when column is moved to a new place
     */
    dragColumns?: boolean;
    /** Provides the list of negative KPIs. This list is used for coloring metrics */
    inversedKpis?: string[];
    /**
     * No data message that should be displayed.
     */
    noDataMessage?: string;
    /**
     * Provides a tuple for ordering. Example: [name, false]
     * will order by name in ascending direction
     */
    orderBy: [string[], boolean];
    /**
     * Type of column currently used to order the table.
     *
     * This column can be outside of table column list
     * (ex. when we have fixed and scrollable tables)
     */
    orderColumnType: ColumnType;
    /**
     * Primary column which is used for detailed rows
     */
    primaryColumn?: string;
    /**
     * List of rows to display.
     *
     * Displays all rows, slice the array and use Pagination component
     * if you wish to show data by pages
     */
    rows: Record<string, any>[] | Record<string, Record<string, any>>;
    /**
     * Enables the display of no data row.
     */
    showNoDataMessage?: boolean;
    /**
     * Enables the display of row number
     */
    showRowNumber?: boolean;
    /**
     * Enables the display of the total row
     */
    showTotal?: boolean;
    /**
     * Enables the display of the total row ot top
     */
    showTopTotal?: boolean;
  }>(),
  {
    additionalHeaders: () => ({}),
    cellClasses: () => ({}),
    colorMetrics: false,
    coloredMetrics: () => [],
    dragColumns: false,
    noDataMessage: '&nbsp;',
    primaryColumn: 'id',
    showNoDataMessage: false,
    showRowNumber: true,
    showTotal: true,
    showTopTotal: false,
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
  inversedKpis,
  noDataMessage,
  orderBy,
  orderColumnType,
  primaryColumn,
  rows,
  showNoDataMessage,
  showRowNumber,
  showTotal,
  showTopTotal,
} = toRefs(props);

const dragColumnFromIndex = ref<number | undefined>();
const dragColumnToIndex = ref<number | undefined>();
const dragMoves = ref(0);
const dragMouseStartX = ref(0);
const dragMouseX = ref(0);

const columnSizingInfo = ref<
  Record<
    string,
    {
      height: number;
      left: number;
      width: number;
    }
  >
>({});

const visibleColumnKeys = computed(() =>
  Object.entries(columns.value)
    .filter(([_, { visible }]) => visible)
    .map(([key, _]) => key),
);

const columnCountDisplayed = computed(
  () => visibleColumnKeys.value.length + (showRowNumber.value ? 1 : 0),
);

const dragModeEnabled = computed(() => {
  // Prevent drag mode from being triggered
  // if user didn't make enough mouse moves
  return dragMoves.value > 3;
});

/**
 * Calculates minimum values which are used to color metrics
 */
const minValues = computed(() =>
  Object.values(rows.value).reduce((minValues, row) => {
    for (const [columnKey, column] of Object.entries(columns.value)) {
      if (column.type === 'string') {
        continue;
      }

      if (comparisonColumnKeys?.value && (column.colspan ?? 0) > 1) {
        if (!(columnKey in minValues)) {
          minValues[columnKey] = Object.entries(row[columnKey]).reduce((values, [key, value]) => {
            values[key] = parseFloat(value as string);

            return values;
          }, {} as Record<string, number>);
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
  }, {}),
);

/**
 * Calculates maximum values which are used to color metrics
 */
const maxValues = computed(() =>
  Object.values(rows.value).reduce((maxValues, row) => {
    for (const [columnKey, column] of Object.entries(columns.value)) {
      if (column.type === 'string') {
        continue;
      }

      if (comparisonColumnKeys?.value && (column.colspan ?? 0) > 1) {
        if (!(columnKey in maxValues)) {
          maxValues[columnKey] = Object.entries(row[columnKey]).reduce((values, [key, value]) => {
            values[key] = parseFloat(value as string);

            return values;
          }, {} as Record<string, number>);
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
  }, {}),
);

/**
 * Calculates maximum rowspan of the columns which is used to correctly
 * display row number column
 */
const maxRowspan = computed(() => {
  if (comparisonColumnKeys?.value) {
    return visibleColumnKeys.value
      .map((key) => columns.value[key].rowspan ?? 1)
      .reduce((a, b) => (a > b ? a : b));
  } else {
    return 1;
  }
});

const orderedRowValues = computed<Record<string, any>[]>(
  () =>
    Object.values(rows.value)
      .sort((leftRow, rightRow) => {
        const comparison = (() => {
          const leftValue = getRawValue(
            orderBy.value[0].reduce((value, key) => value[key], leftRow) as unknown as string,
            orderColumnType.value,
          );
          const rightValue = getRawValue(
            orderBy.value[0].reduce((value, key) => value[key], rightRow) as unknown as string,
            orderColumnType.value,
          );

          if (leftValue > rightValue) {
            return 1;
          }
          if (leftValue < rightValue) {
            return -1;
          }
          return 0;
        })();

        return orderBy.value[1] ? -comparison : comparison;
      })
      .reduce((rows, row, index) => {
        rows.push({
          ...row,
          rowInfo: {
            index,
            detailable: true,
          },
        });

        if (detailsRows.value[row[primaryColumn.value]]) {
          rows.push(
            ...Object.entries(detailsRows.value[row[primaryColumn.value]]).map(
              ([subindex, detailRow]) => ({
                ...detailRow,
                rowInfo: {
                  index,
                  subindex: +subindex,
                  detailable: false,
                },
              }),
            ),
          );
        }

        return rows;
      }, [] as Record<string, any>[]) as Record<string, any>[],
);

/**
 * Retrieves style of table which allows display: grid to show correct table
 */
const tableStyle = computed(() => {
  let columnCount = 0;

  for (const columnKey of visibleColumnKeys.value) {
    const column = columns.value[columnKey];

    if (column.colspan && comparisonColumnKeys?.value) {
      columnCount += column.colspan;
    } else {
      columnCount++;
    }
  }

  let gridTemplateColumns = `repeat(${columnCount}, auto)`;

  if (showRowNumber.value) {
    gridTemplateColumns = `min-content ${gridTemplateColumns}`;
  }

  return {
    'grid-template-columns': gridTemplateColumns,
  };
});

/**
 * Get top offset for colorized button
 */
const getColorizedButtonTopOffset = (columnKey: string) => {
  if (!columnSizingInfo.value[columnKey]) {
    return 0;
  }

  return columnSizingInfo.value[columnKey].height;
};

/**
 * Gets cell classes to color even rows and make colored metrics
 */
const getCellClasses = (
  row: Record<string, any>,
  rowIndex: number,
  columnKey: string,
  subcolumnIndex?: number,
) => {
  const classes: Record<string, boolean> = {
    ...cellClasses.value,
    ...{ even: rowIndex % 2 === 0 },
  };

  if (colorMetrics.value) {
    const colorMood = (() => {
      if (!inversedKpis || !inversedKpis.value) {
        return 'positive';
      }

      return inversedKpis.value.includes(columnKey) ? 'negative' : 'positive';
    })();

    classes[`color-intensity-${getColorIntensity(row[columnKey], columnKey, subcolumnIndex)}`] =
      true;
    classes[`color-${colorMood}`] = true;

    if (
      subcolumnIndex !== undefined &&
      comparisonColumnKeys &&
      comparisonColumnKeys.value &&
      comparisonColumnKeys.value[subcolumnIndex] === 'difference'
    ) {
      classes.colored = false;
    } else {
      classes.colored = indexOfColored(columnKey) >= 0;
    }
  }

  return classes;
};

/**
 * Retrieves colored metric color intensity from 0 to 10
 */
const getColorIntensity = (value: any, columnKey: string, subcolumnIndex?: number) => {
  if (columns.value[columnKey].type === 'string') {
    return undefined;
  }

  let currentValue = value;
  let maxValue = maxValues.value[columnKey];
  let minValue = minValues.value[columnKey];

  if (comparisonColumnKeys && comparisonColumnKeys.value && subcolumnIndex !== undefined) {
    currentValue = currentValue[comparisonColumnKeys.value[subcolumnIndex]];
    maxValue = maxValue[comparisonColumnKeys.value[subcolumnIndex]];
    minValue = minValue[comparisonColumnKeys.value[subcolumnIndex]];
  }

  if (maxValue === minValue) {
    return 0;
  }

  return Math.round(((currentValue - minValue) * 10) / (maxValue - minValue));
};

/**
 * Gets column classes which are used to display order related elements
 */
const getColumnClassList = (columnKey: string, subcolumnIndex?: number) => {
  const column = columns.value[columnKey];

  const orderByKey = [columnKey];

  if (subcolumnIndex !== undefined) {
    if (comparisonColumnKeys && comparisonColumnKeys.value) {
      orderByKey.push(comparisonColumnKeys.value[subcolumnIndex]);
    } else {
      orderByKey.push(subcolumnIndex.toString());
    }
  }

  const ordered = orderBy.value[0]
    ? orderBy.value[0].every(
        (orderBySegment, segmentIndex) => orderBySegment === orderByKey[segmentIndex],
      )
    : false;

  return {
    'column-main-extended': subcolumnIndex === undefined && (column.rowspan ?? 0) > 1,
    dragged: dragColumnFromIndex.value
      ? visibleColumnKeys.value[dragColumnFromIndex.value] === columnKey
      : false,
    'drag-mode': dragModeEnabled.value,
    orderable:
      !(comparisonColumnKeys && comparisonColumnKeys.value) ||
      (column.colspan ?? 1) === 1 ||
      subcolumnIndex !== undefined,
    'ordered-by': ordered,
    [`order-direction-${orderBy.value[1] ? 'desc' : 'asc'}`]: ordered,
  };
};

/**
 * Gets style of the column ghost which is moved instead of the real column
 * when dragging columns
 */
const getColumnGhostStyle = (columnKey: string) => {
  const style: Record<string, string> = {};

  if (columnSizingInfo.value[columnKey]) {
    if (
      dragColumnFromIndex.value !== undefined &&
      visibleColumnKeys.value[dragColumnFromIndex.value] === columnKey
    ) {
      // Apply style for the column that is being currently dragged
      const { height, left, width } = columnSizingInfo.value[columnKey];

      style.left = `${Math.floor(left + dragMouseX.value - dragMouseStartX.value)}px`;
      style.height = `${height + 1}px`;
      style.width = `${Math.round(width)}px`;
    } else {
      // Apply style for the column that is not being dragged
      // We calculate left position here taking into account that
      // the column currently being dragged could be moved before or after
      // the current one
      const columnIndex = visibleColumnKeys.value.indexOf(columnKey);

      let leftOffset = (() => {
        if (dragColumnFromIndex.value === undefined || dragColumnToIndex.value === undefined) {
          return 0;
        }

        if (dragColumnFromIndex.value < columnIndex) {
          if (dragColumnToIndex.value >= columnIndex) {
            return -columnSizingInfo.value[visibleColumnKeys.value[dragColumnFromIndex.value]]
              .width;
          }
        } else if (dragColumnToIndex.value <= columnIndex) {
          return columnSizingInfo.value[visibleColumnKeys.value[dragColumnFromIndex.value]].width;
        }

        return 0;
      })();

      const { height, left, width } = columnSizingInfo.value[columnKey];

      style.left = `${Math.floor(left + leftOffset)}px`;
      style.height = `${height + 1}px`;
      style.width = `${Math.floor(width)}px`;
    }
  }

  return style;
};

/**
 * Gets column span styles
 */
const getColumnStyle = (columnKey: string) => {
  const column = columns.value[columnKey];

  const style: Record<string, string> = {};

  if (comparisonColumnKeys && comparisonColumnKeys.value) {
    if (column.colspan) {
      style['grid-column-end'] = `span ${column.colspan}`;
    }

    if (column.rowspan) {
      style['grid-row-end'] = `span ${column.rowspan}`;
    }
  }

  return style;
};

/**
 * For comparison-like pages we need to convert two values,
 * the column and the subcolumn to a single string
 */
const getSubcolumnKey = (subcolumnIndex: number) => {
  return comparisonColumnKeys && comparisonColumnKeys.value
    ? comparisonColumnKeys.value[subcolumnIndex]
    : undefined;
};

/**
 * Numeric data can come as strings or nulls from backend.
 * This method converts such data to the correct format
 */
const getRawValue = (value: string, type: ColumnType) => {
  switch (type) {
    case 'float':
    case 'int':
    case 'money':
    case 'money_capped':
    case 'percent':
    case 'time':
      return parseFloat(value ?? 0);
    case 'date':
      // Converts value from YYYY-MM-DD to timestamp
      return DateTime.fromISO(value).toUnixInteger();
    default:
      return value;
  }
};

/**
 * Retrieves row number cell contents
 */
const getRowNumberValue = (rowInfo: { index: number; subindex?: number }) =>
  rowInfo.subindex === undefined
    ? rowInfo.index + 1
    : `${rowInfo.index + 1}.${rowInfo.subindex + 1}`;

/**
 * Finds index of colored metric in the list of colorized metrics
 */
const indexOfColored = (columnKey: string) =>
  coloredMetrics.value.findIndex((kpi) => kpi === columnKey);

/**
 * Checks if a column can be colored
 */
const isColorable = (columnKey: string) =>
  colorMetrics.value && !['date', 'string'].includes(columns.value[columnKey].type);

const emit = defineEmits<{
  (e: 'update:orderBy', value: [string[], boolean]): void;
  (e: 'addColoredMetric', columnKey: string): void;
  (e: 'removeColoredMetric', columnKey: string): void;
  (e: 'move:column', args: { from: number; to: number }): void;
}>();

/**
 * Orders data by a clicked column
 */
const onColumnClick = (columnKey: string, subcolumnIndex?: number) => {
  if (
    comparisonColumnKeys &&
    comparisonColumnKeys.value &&
    columns.value[columnKey].colspan &&
    subcolumnIndex === undefined
  ) {
    return;
  }

  if (
    dragColumnFromIndex.value !== undefined &&
    dragModeEnabled.value &&
    visibleColumnKeys.value[dragColumnFromIndex.value] === columnKey
  ) {
    return;
  }

  const newOrderBy = [columnKey];

  if (subcolumnIndex !== undefined) {
    if (comparisonColumnKeys && comparisonColumnKeys.value) {
      newOrderBy.push(comparisonColumnKeys.value[subcolumnIndex]);
    } else {
      newOrderBy.push(subcolumnIndex.toString());
    }
  }

  const alreadyOrderedBy = newOrderBy.every(
    (orderBySegment, segmentIndex) => orderBySegment === orderBy.value[0][segmentIndex],
  );

  const reversed = (() => {
    if (alreadyOrderedBy) {
      return !orderBy.value[1];
    }

    return columns.value[columnKey].type !== 'string';
  })();

  emit('update:orderBy', [newOrderBy, reversed]);
};

/**
 * Initializes drag mode for a given column
 *
 * This adds mousemove and mouseup events to window
 * to correctly process further column move
 */
const onColumnDragStart = (columnKey: string, event: MouseEvent) => {
  if (!dragColumns.value) {
    return;
  }

  dragColumnFromIndex.value = visibleColumnKeys.value.indexOf(columnKey);
  dragColumnToIndex.value = dragColumnFromIndex.value;
  dragMoves.value = 0;
  dragMouseStartX.value = event.clientX;
  dragMouseX.value = event.clientX;

  window.addEventListener('mousemove', onColumnDragMove);
  window.addEventListener('mouseup', onColumnDragStop);
};

/**
 * Processes dragged column move
 *
 * Columns are swapped when the dragging column reaches
 * the edge of the neighboring column with its center
 */
const onColumnDragMove = (event: MouseEvent) => {
  if (dragColumnFromIndex.value === undefined) {
    return;
  }

  dragMoves.value++;
  dragMouseX.value = event.clientX;

  const sizingInfo = Object.entries(columns.value)
    .filter(([_, column]) => column.visible)
    .map(([key]) => key)
    .map((columnKey, columnIndex) => ({
      columnIndex: parseInt(columnIndex.toString()),
      sizing: columnSizingInfo.value[columnKey],
    }));

  const draggedColumnSizingInfo = sizingInfo[dragColumnFromIndex.value].sizing;

  const draggedColumnHalfWidth = draggedColumnSizingInfo.width / 2;

  const draggedColumnBaseLeft = draggedColumnSizingInfo.left;

  const draggedColumnLeft = draggedColumnBaseLeft + dragMouseX.value - dragMouseStartX.value;

  // Here we calculate the new index of the dragged column
  // based on the position and width of columns. A column is moved
  // when it reaches other columns space with its center
  dragColumnToIndex.value = (() => {
    for (const { columnIndex, sizing } of sizingInfo) {
      if (draggedColumnLeft + draggedColumnHalfWidth - sizing.left - sizing.width < 0) {
        return columnIndex;
      }
    }
    return sizingInfo.length;
  })();
};

/**
 * Handles dragged column being dropped
 */
const onColumnDragStop = (event: MouseEvent) => {
  if (dragColumnFromIndex.value === undefined || dragColumnToIndex.value === undefined) {
    return;
  }

  const shouldUpdate =
    dragModeEnabled.value && dragColumnToIndex.value !== dragColumnFromIndex.value;

  if (shouldUpdate) {
    emit('move:column', {
      from: dragColumnFromIndex.value,
      to: dragColumnToIndex.value,
    });
  }

  dragColumnToIndex.value = undefined;
  dragMoves.value = 0;
  dragColumnFromIndex.value = undefined;

  window.removeEventListener('mousemove', onColumnDragMove);
  window.removeEventListener('mouseup', onColumnDragStop);
};

/**
 * Toggles column colored state
 */
const toggleColored = (columnKey: string) => {
  const coloredIndex = indexOfColored(columnKey);

  if (coloredIndex >= 0) {
    emit('removeColoredMetric', columnKey);
  } else {
    emit('addColoredMetric', columnKey);
  }
};

const columnRefs = ref<Record<string, HTMLElement>>({});

const setColumnRef = (columnKey: string, element: Element | ComponentPublicInstance | null) => {
  if (element) {
    columnRefs.value[columnKey] = element as HTMLElement;
  }
};

const table = ref<HTMLElement | undefined>();

const updateColumnSizingInfo = () => {
  if (!table.value) {
    return;
  }

  const tableRect = table.value.getBoundingClientRect();

  columnSizingInfo.value = Object.entries(columns.value).reduce(
    (columnSizingInfo, [columnKey, column]) => {
      if (column.visible && columnRefs.value[columnKey]) {
        const columnRect = columnRefs.value[columnKey].getBoundingClientRect();

        columnSizingInfo[columnKey] = {
          height: columnRect.height,
          left: columnRect.left - tableRect.left,
          width: columnRect.width,
        };
      }

      return columnSizingInfo;
    },
    {} as Record<
      string,
      {
        height: number;
        left: number;
        width: number;
      }
    >,
  );
};

const columnsResizeObserver = new ResizeObserver(() => {
  updateColumnSizingInfo();
});

watch(
  columnRefs,
  () => {
    columnsResizeObserver.disconnect();

    for (const element of Object.values(columnRefs.value)) {
      columnsResizeObserver.observe(element);
    }

    updateColumnSizingInfo();
  },
  {
    deep: true,
    immediate: true,
  },
);

updateColumnSizingInfo();

defineSlots<{
  columnRowNumber: (props: any) => any;
  colorizeLabel: (props: { enabled: boolean }) => any;
  column: (props: { columnKey: string; isGhost: boolean }) => any;
  additionalHeader: (props: { additionalHeader: string; columnKey: string }) => any;
  topTotal: (props: { columnKey: string; subcolumnKey?: string; values: any[] }) => any;
  topTotalRowNumber: (props: any) => any;
  secondaryColumn: (props: { columnKey: string; subcolumnKey?: string }) => any;
  rowNumber: (props: { value: number | string }) => any;
  row: (props: {
    columnKey: string;
    index: number;
    row: Record<string, any>;
    spanIndex?: number | string;
    subcolumnKey?: string;
    subindex: number;
    value: any;
  }) => any;
  totalRowNumber: (props: any) => any;
  total: (props: { columnKey: string; subcolumnKey?: string; values: any[] }) => any;
}>();
</script>

<template lang="pug">
.table(
  ref="table",
  :class=`{
    'with-secondary': !!comparisonColumnKeys &&
      visibleColumnKeys.some((key) => (columns[key].colspan || 1) !== 1)
  }`,
  :style="tableStyle",
)
  .cell.column.column-main.row-number(
    v-if="showRowNumber",
    :style="maxRowspan > 1 ? { 'grid-row-end': `span ${maxRowspan}` } : undefined",
  )
    slot(name="columnRowNumber") #
  template(v-for="columnKey in visibleColumnKeys")
    .cell.column.column-main(
      :ref="(el) => setColumnRef(columnKey, el)",
      v-if="columns[columnKey].visible",
      @click.stop="() => onColumnClick(columnKey)",
      @mousedown="(event) => onColumnDragStart(columnKey, event)",
      :class="getColumnClassList(columnKey)",
      :style="getColumnStyle(columnKey)",
      :data-column="columnKey",
    )
      slot(name="column", :columnKey="columnKey", :isGhost="false")
      .toggle-colored.no-spacing(
        v-if='isColorable(columnKey)',
        @click.stop='() => toggleColored(columnKey)',
        :style="{ top: `${getColorizedButtonTopOffset(columnKey)}px` }"
      )
        slot(
          name="colorizeLabel",
          :enabled="indexOfColored(columnKey) >= 0",
        )
  //- Renders "ghost" cells
  //- These cells are visually moved while the originals are visible in background
  template(v-if="dragColumns")
    template(v-for="columnKey in visibleColumnKeys")
      .cell.column.column-main.column-ghost(
        v-if="columns[columnKey].visible",
        :class="getColumnClassList(columnKey)",
        :style="getColumnGhostStyle(columnKey)",
        :data-column="columnKey",
      )
        slot(name="column", :columnKey="columnKey", :isGhost="true")
  template(v-for='(additionalHeaderInfo, additionalHeader) in additionalHeaders')
    .cell.column.cell-additional-header.row-number(v-if='showRowNumber')
      Icon(:value="additionalHeaderInfo.icon")
    template(v-for="columnKey in visibleColumnKeys")
      .cell.column.cell-additional-header(
        :class="[`cell-additional-header-${columnKey}`]",
        :data-additionalHeader="additionalHeader",
        :data-column="columnKey",
      )
        slot(
          name="additionalHeader",
          :additionalHeader="additionalHeader",
          :columnKey="columnKey",
        )
  template(v-if='showTopTotal && showTotal')
    .cell.total.top-total.row-number(v-if="showRowNumber")
      slot(name="topTotalRowNumber")
    template(v-for="columnKey in visibleColumnKeys")
      template(v-if="columns[columnKey].visible")
        template(v-if="!!comparisonColumnKeys && (columns[columnKey].colspan || 1) !== 1")
          .cell.total.top-total(
            v-for="index in columns[columnKey].colspan",
            :data-column="columnKey",
            :data-subcolumn-index="index - 1",
          )
            slot(
              name="topTotal",
              :columnKey="columnKey",
              :subcolumnKey="getSubcolumnKey(index - 1)",
              :values="orderedRowValues.map((row) => row[columnKey])",
            )
        template(v-else)
          .cell.total.top-total(
            :data-column="columnKey",
          )
            slot(
              name="topTotal",
              :columnKey="columnKey",
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
      )
        slot(
          name="secondaryColumn",
          :columnKey="columnKey",
          :subcolumnKey="getSubcolumnKey(index - 1)",
        )
  template(v-for="(row, rowIndex) in orderedRowValues")
    .cell.row-number(
      v-if="showRowNumber",
      :class="{ even: rowIndex % 2 === 0 }",
    )
      slot(name="rowNumber", :value="getRowNumberValue(row.rowInfo)")
        | {{ getRowNumberValue(row.rowInfo) }}
    template(v-for="columnKey in visibleColumnKeys")
      template(v-if="!comparisonColumnKeys || (columns[columnKey].colspan || 1) === 1")
        .cell(
          :class="getCellClasses(row, rowIndex, columnKey)",
          :data-column="columnKey",
          :data-primary-key="row[primaryColumn]",
        )
          slot(
            name="row",
            :columnKey="columnKey",
            :index="rowIndex",
            :row="row",
            :subindex="row.rowInfo.subindex",
            :value="row[columnKey]",
          )
      template(v-else, v-for="index in columns[columnKey].colspan")
        .cell(
          :class="getCellClasses(row, rowIndex, columnKey, index - 1)",
          :data-column="columnKey",
          :data-primary-key="row[primaryColumn]",
          :data-subcolumn-index="index - 1",
        )
          slot(
            name="row",
            :columnKey="columnKey",
            :index="rowIndex",
            :row="row",
            :spanIndex="comparisonColumnKeys ? comparisonColumnKeys[index - 1] : index - 1",
            :subcolumnKey="getSubcolumnKey(index - 1)",
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
    .cell.total.row-number(v-if="showRowNumber")
      slot(name="totalRowNumber") #
    template(v-for="columnKey in visibleColumnKeys")
      template(v-if="columns[columnKey].visible")
        template(v-if="!!comparisonColumnKeys && (columns[columnKey].colspan || 1) !== 1")
          .cell.total(
            v-for="index in columns[columnKey].colspan",
            :data-column="columnKey",
            :data-subcolumn-index="index - 1",
          )
            slot(
              name="total",
              :columnKey="columnKey",
              :subcolumnKey="getSubcolumnKey(index - 1)",
              :values="orderedRowValues.map((row) => row[columnKey])",
            )
        template(v-else)
          .cell.total(
            :data-column="columnKey",
          )
            slot(
              name="total",
              :columnKey="columnKey",
              :values="orderedRowValues.map((row) => row[columnKey])",
            )
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.table {
  @include apply-color(background-color, background-elevated-3);
  @include apply-color(box-shadow, border-table, $value-prefix: inset 0 0 0 1px);

  display: grid;
  gap: 1px;
  margin-bottom: 0;
  position: relative;
  transition: background-color 0.3s;

  > .cell {
    align-items: center;
    box-sizing: border-box;
    color: black;
    display: flex;
    font-size: 12px;
    justify-content: center;
    padding: 7px 14px;
    position: relative;
    text-align: center;
    transition: background-color 0.3s;

    &.column {
      @include apply-color(box-shadow, border-table, $value-prefix: 0 0 0 1px);

      font-weight: 700;
      position: sticky;
      top: 0;
      transition: background-color 0.3s, box-shadow 0.3s, color 0.3s, opacity 0.3s;
      user-select: none;

      &:hover {
        > .toggle-colored:not(.drag-mode) {
          pointer-events: initial;
          opacity: 1;
          transition-duration: 0.1s;
        }
      }

      &.column-main {
        z-index: 21;

        &.column-ghost {
          opacity: 0;
          pointer-events: none;
          position: absolute;
          z-index: 22;

          &.drag-mode {
            opacity: 1;

            &.dragged {
              @include apply-color(
                box-shadow,
                border-table,
                $value-prefix: 0 0 0 1px,
                $value-postfix: 0 0.25 0.5rem rgba(black, 0.25)
              );

              transition: background-color 0.3s, box-shadow 0.3s;
              z-index: 23;
            }

            &:not(.dragged) {
              transition: background-color 0.3s, box-shadow 0.3s, left 0.3s;
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
          @include apply-color(color, text-contrast);

          content: '\2191';
          position: absolute;
          right: 0.6rem;
          top: 0.1rem;
          transition: color 0.3s;
          z-index: 1;
        }

        &::after {
          @include apply-color(color, text-contrast);

          content: '\2193';
          position: absolute;
          right: 0.3rem;
          top: 0.1rem;
          transition: color 0.3s;
          z-index: 1;
        }
      }

      > .toggle-colored {
        @include apply-color(background-color, background-important-alt);

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
        transition: opacity 0.3s;
        transform-origin: top center;
        width: calc(min(100% - 16px, fit-content));
        z-index: 2;
      }
    }

    &.total {
      @include apply-color(box-shadow, border-table, $value-prefix: 0 0 0 1px);

      bottom: 0;
      font-weight: 700;
      padding: 1rem;
      position: sticky;
      transition: background-color 0.3s, box-shadow 0.3s;
      z-index: 20;
    }

    &:not(.column) {
      white-space: nowrap;

      &:not(.colored) {
        @include apply-color(box-shadow, border-table, $value-prefix: 0 0 0 1px);

        transition: background-color 0.3s, box-shadow 0.3s;
      }

      &:not(.total) {
        transition: background-color 0.3s, box-shadow 0.3s;

        &.colored {
          position: relative;

          $-negative-base-intensity-color: mix(#ff4961, transparent, 60%);
          $-positive-base-intensity-color: mix(#28d094, transparent, 60%);

          @for $-index from 0 through 10 {
            &.color-intensity-#{$-index} {
              z-index: $-index + 1;

              &.color-negative {
                $-color: mix($-negative-base-intensity-color, transparent, $-index * 10%);
                $-border-color: darken($-color, 15%);
                $-border-color: mix($-border-color, #7f999999, $-index * 10%);

                background-color: $-color;
                box-shadow: 0 0 0 1px $-border-color;
              }

              &.color-positive {
                $-color: mix($-positive-base-intensity-color, transparent, $-index * 10%);
                $-border-color: darken($-color, 15%);
                $-border-color: mix($-border-color, #7f999999, $-index * 10%);

                background-color: $-color;
                box-shadow: 0 0 0 1px $-border-color;
              }
            }
          }
        }

        &:not(.colored) {
          &.even {
            @include apply-color(background-color, background-normal);
          }

          &:not(.even) {
            @include apply-color(background-color, background-elevated-2);
          }
        }
      }
    }

    &:not(.colored) {
      @include apply-color(background-color, background-elevated-3);
    }
  }
}
</style>
