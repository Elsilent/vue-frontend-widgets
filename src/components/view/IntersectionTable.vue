<script lang="ts" setup>
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { onMounted, ref, toRefs, watch } from 'vue';
import numeral from '../../utils/numeral';
import type {
  Column,
  ColumnType,
  IntersectionResponse,
} from '../../utils/type/component/container/table';
import Info from '../label/Info.vue';
import Loader from '../image/Loader.vue';
import Table from '../container/Table.vue';

/**
 * Advanced table component which provides pagination, scrolling,
 * automated row fetching, fixed columns, etc.
 *
 * Use SimpleTable component instead if you wish to have base features only
 *
 * Use Table component instead if you wish to have fixed columns
 * but wish to fulfill table contents by yourself
 *
 * Reference: see the article 'Vue+tables' in your Wiki or Confluence
 */

const getRowsFromRequestInfo = async (
  request: AxiosRequestConfig,
): Promise<IntersectionResponse> => {
  return (await axios(request)).data;
};

const props = withDefaults(
  defineProps<{
    /**
     * Additional cell classes with className as a key
     * E.g.: { 'align-left': true, 'height-100': true }
     */
    cellClasses?: Record<string, boolean>;
    /**
     * Number of digits in currency fractional part
     */
    clientCurrencyDecimal?: number;
    /**
     * Currency symbol for money related columns
     */
    clientCurrencySymbol?: string;
    /**
     * Place currency symbol before the value
     */
    clientCurrencySymbolPrefix?: boolean;
    /**
     * Enables possibility to color metrics
     */
    colorMetrics?: boolean;
    colorizeLabel: string;
    /**
     * Provides the list of columns to display on the table.
     */
    columns?: Record<string, Column>;
    /**
     * Determines how many columns should be fixed
     */
    fixedColumnNumber?: number;
    /**
     * Intersection column key
     */
    intersectionColumn: string;
    /**
     * Labels for intersection column
     */
    intersectionColumnLabels: [string, string];
    /**
     * Primary column which is used for detailed rows
     */
    primaryColumn?: string;
    /**
     * The Axios config or async function which to call to fetch the rows.
     *
     * Don't use with static rows being provided
     */
    request?: AxiosRequestConfig;
    /**
     * Static rows to display
     *
     * Don't use with request URL being provided
     */
    rows?: Record<string, Record<string, any>>;
    /**
     * Label to display on the trend chart
     */
    trendChartTitle?: string;
    uncolorizeLabel: string;
    noDataMessage?: string;
  }>(),
  {
    cellClasses: () => ({}),
    clientCurrencyDecimal: 0,
    clientCurrencySymbol: '',
    clientCurrencySymbolPrefix: true,
    colorMetrics: false,
    fixedColumnNumber: 1,
    primaryColumn: 'id',
  },
);

const {
  cellClasses,
  clientCurrencyDecimal,
  clientCurrencySymbol,
  clientCurrencySymbolPrefix,
  columns,
  fixedColumnNumber,
  intersectionColumn,
  intersectionColumnLabels,
  primaryColumn,
  request,
  rows,
  noDataMessage,
} = toRefs(props);

const allRows = ref<Record<string, any>[]>([]);
const currentColumns = ref<Record<string, Column>>({});
const loading = ref(true);

const table = ref<typeof Table | undefined>();

const emit = defineEmits<{
  (e: 'move:column', _: { from: number; to: number }): void;
  (e: 'update:loading', value: boolean): void;
  (e: 'update:currentColumns', value: Record<string, Column>): void;
  (e: 'update:allRows', value: Record<string, any>[]): void;
}>();

/**
 * Formats a value based on its column type
 */
const formatValue = (value: any, type: ColumnType, format?: 'difference'): string => {
  if (value === null) {
    return '';
  }

  let rawValue = getRawValue(value, type);

  switch (type) {
    case 'float':
      return numeral(parseFloat(rawValue)).format('0,0.00');
    case 'int':
      return numeral(parseInt(rawValue)).format('0,0');
    case 'money': {
      let formatString = '0,0';

      if (clientCurrencyDecimal.value > 0) {
        formatString += '.' + '0'.repeat(clientCurrencyDecimal.value);
      }

      const formattedValue = numeral(parseFloat(rawValue)).format(formatString);

      if (clientCurrencySymbolPrefix.value) {
        return clientCurrencySymbol.value + ' ' + formattedValue;
      } else {
        return formattedValue + ' ' + clientCurrencySymbol.value;
      }
    }
    case 'money_capped': {
      const willBeRoundedToZero = parseFloat(rawValue.toFixed(clientCurrencyDecimal.value)) == 0;

      if (rawValue > 0 && rawValue < 1 && willBeRoundedToZero) {
        const formattedValue =
          clientCurrencyDecimal.value === 0
            ? 1
            : numeral(parseFloat('0.' + '0'.repeat(clientCurrencyDecimal.value - 1) + '1')).format(
                '0.0' + clientCurrencyDecimal.value,
              );

        return clientCurrencySymbolPrefix.value
          ? `< ${clientCurrencySymbol.value} ${formattedValue}`
          : `< ${formattedValue} ${clientCurrencySymbol.value}`;
      } else {
        return formatValue(value, 'money', format);
      }
    }
    case 'percent': {
      let percent = numeral(parseFloat(rawValue)).format('0,0.00') + '%';

      if (format === 'difference') {
        if (rawValue > 0) {
          percent = `+${percent}`;
        }
      }

      return percent;
    }
    case 'time':
      return `${formatValue(Math.floor(parseInt(rawValue) / 60), 'int')}mn${formatValue(
        parseInt(rawValue) % 60,
        'int',
      )}s`;
    default:
      return rawValue?.toString();
  }
};

const getRawValue = (value: any, type: ColumnType) => {
  switch (type) {
    case 'float':
    case 'int':
    case 'money':
    case 'money_capped':
    case 'percent':
    case 'time':
      return parseFloat(value ?? 0);
    default:
      return value;
  }
};

const getRowFormattedValue = (value: any, columnKey: string, subcolumnKey?: string) => {
  const columnType = currentColumns.value[columnKey].type;

  let formattedValue = formatValue(value, columnType);

  return formattedValue;
};

/**
 * Gets classes for a row value
 */
const getValueClass = (columnKey: string, value: string) => {
  return ['flex-grow-1'];
};

/**
 * Fetches rows by API
 */
const setRowsFromRequest = async () => {
  if (!request?.value) {
    return false;
  }

  const response = await getRowsFromRequestInfo(request!.value!);

  allRows.value = Object.values(response.rows);
  currentColumns.value = response.columns;

  return true;
};

/**
 * Fetches static rows
 */
const setRowsFromStatic = () => {
  if (!rows?.value) {
    return false;
  }

  let staticRows = Object.values(rows.value);

  allRows.value = staticRows;

  return true;
};

/**
 * Updates rows to be displayed
 *
 * Use this method when either page number, page size
 * or ordering is updated
 */
const setRows = async () => {
  loading.value = true;

  if (!setRowsFromStatic()) {
    await setRowsFromRequest();
  }

  loading.value = false;
};

onMounted(() => {
  if (columns?.value !== undefined) {
    currentColumns.value = columns.value;
  }

  setRows();
});

watch(loading, () => {
  emit('update:loading', loading.value);
});

//> Rows + columns
// Emit the event whenever currentColumns and allRows are updated
watch(currentColumns, (newColumns) => {
  emit('update:currentColumns', newColumns);
});

watch(allRows, (newRows) => {
  emit('update:allRows', newRows);
});
//< Rows + columns

if (request) {
  watch(
    request,
    () => {
      setRows();
    },
    { deep: true },
  );
}
</script>

<template lang="pug">
Table.intersection-table(
  v-if="!loading",
  ref="table",
  :cellClasses="cellClasses"
  :colorMetrics="true",
  :coloredMetrics="Object.keys(currentColumns)",
  :columns="currentColumns",
  :detailsRows="{}",
  :dragColumns="false",
  :fixedColumnNumber="fixedColumnNumber",
  :neutralColoredMetrics="true",
  :noDataMessage="noDataMessage",
  :orderBy="[[], false]",
  :primaryColumn="primaryColumn",
  :rows="allRows",
  :showRowNumber="false",
  :showToggleColored="false",
  :showTotal="false",
  :useOrderBy="false",
  globalColoredMetrics,
)
  template(#column="{ columnKey }")
    .intersection(v-if="columnKey === intersectionColumn")
      Info.column-label(contrast, size="small") {{ intersectionColumnLabels[0] }}
      .line
      Info.column-label(contrast, size="small") {{ intersectionColumnLabels[1] }}
    Info.column-label(contrast, size="small") {{ currentColumns[columnKey].label }}
  //- use "_" before variable name because vue doesn't provide correct binding for v-for in templates
  template(
    v-for="_columnId in Object.keys(currentColumns)"
    :key="_columnId"
    v-slot:[`row-${_columnId}`]="{ columnKey, index, row, spanIndex, subcolumnKey, value }"
  )
    slot(
      v-bind=`{
        columnKey,
        index,
        row,
        spanIndex,
        subcolumnKey,
        value,
      }`,
      :name="'row-' + columnKey",
    )
      Info(
        :class="getValueClass(columnKey, value)",
        contrast,
        size="small",
      ) {{ getRowFormattedValue(value, columnKey, subcolumnKey) }}
.loading-overlay(
  v-else
  :class="{ visible: loading }"
)
  Loader
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/spacing.scss';

.column-label {
  font-weight: 700;
}

.intersection-table {
  position: relative;

  &:deep(.table.fixed .cell) {
    &:not(.column):not(.total):not(.colored) {
      @include apply-color(background-color, background-elevated-3);

      font-weight: 700;
    }

    &.column {
      > .intersection {
        display: flex;
        flex-direction: column;
        margin: -7px -14px;
        position: relative;
        overflow: hidden;
        width: calc(100% + 28px);
        height: calc(100% + 14px);

        > .line {
          @include apply-color(border-bottom-color, border-table);

          border-bottom: 1px solid;
          position: absolute;
          height: 100%;
          transform: translate(-25%, -50%) rotate(15deg);
          width: 200%;
        }

        > .info-text:first-child {
          flex: 1;
          text-align: right;
          padding: 7px 14px 0;
        }

        > .info-text:last-child {
          text-align: left;
          padding: 0 14px 7px;
        }
      }
    }
  }
}

.table {
  overflow-y: scroll;
}

.loading-overlay {
  @include apply-color(background-color, background-elevated-3, $opacity: 0.5);

  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
