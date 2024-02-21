<script lang="ts" setup>
import axios from 'axios';
import { computed, nextTick, onMounted, ref, toRefs, watch } from 'vue';
import numeral from '../../utils/numeral';
import { cloneObject } from '../../utils/clone';
import type { Mood } from '../../utils/enum/mood';
import type {
  Column,
  ColumnDetails,
  ColumnType,
  ComparisonColumn,
  DetailsRequestInfo,
  DetailsRequestOptions,
  DetailsResponse,
  InlineFilter,
  GlobalRequestInfo,
  GlobalRequestOptions,
  GlobalResponse,
} from '../../utils/type/component/container/table';
import {
  mergeComparisonData,
  mergeComparisonRow,
} from '../../utils/type/component/container/table';
import CellHint from './CellHint.vue';
import ColumnHint from './ColumnHint.vue';
import DetailsSelector from './DetailsSelector.vue';
import Dropdown from '../interaction/Dropdown.vue';
import Info from '../label/Info.vue';
import Input from '../interaction/Input.vue';
import Loader from '../image/Loader.vue';
import Pagination from './Pagination.vue';
import Separator from '../marker/Separator.vue';
import Table from '../container/Table.vue';
import TrendChart from './TrendChart.vue';

const SHORTEN_THRESHOLD = 50;

/**
 * Advanced table component which provides pagination, scrolling,
 * automated row fetching, fixed columns, etc.
 *
 * Use SimpleTable component instead if you wish to have base features only
 *
 * Use Table component instead if you wish to have fixed columns
 * but wish to fulfill table contents by yourself
 *
 * Reference: https://trackad.atlassian.net/wiki/spaces/TRACKADPRO/pages/239829034/Vue+tables
 */

interface ColumnLinkInfo {
  url: string;
  /** List of columns values of which to push to the URL */
  columns: string[] | Record<string, string>;
  /** List of primary key values for which to disable links */
  disable_for: (number | string)[];
}

const getDetailsRowsFromRequestInfo = async (
  request: DetailsRequestInfo,
  options: DetailsRequestOptions,
): Promise<DetailsResponse> => {
  if (typeof request === 'function') {
    return await request(options);
  }

  return (
    await axios({
      ...request,
      params: {
        ...request.params,
        ...options,
      },
    })
  ).data;
};

const getGlobalRowsFromRequestInfo = async (
  request: GlobalRequestInfo,
  options: GlobalRequestOptions,
): Promise<GlobalResponse> => {
  if (typeof request === 'function') {
    return await request(options);
  }

  return (
    await axios({
      ...request,
      params: {
        ...(request.params ?? {}),
        filter: options.inlineFilters.value,
        page_number: options.pageNumber,
        page_size: options.pageSize,
        order: options.orderBy,
        reversed: options.reversed,
      },
    })
  ).data;
};

interface DetailsRequestMetadata {
  label: string;
  request: DetailsRequestInfo;
}

interface InlineFilterOperator {
  label: string;
  callback: <T>(rowValue: T, filterValue: T) => boolean;
  size?: 'small' | 'normal';
}

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
    columns: Record<string, Column>;
    /**
     * Fetches detailed data by a KPI
     */
    columnDetails?: Record<string, ColumnDetails>;
    /**
     * Enables URL redirections for certain columns
     *
     * Format:
     * - { column_name: ColumnLinkInfo, ... }
     * - ColumnLinkInfo:
     */
    columnLinks?: Record<string, ColumnLinkInfo>;
    /**
     * Provides the list of subcolumn info
     */
    comparisonColumns?: Record<string, ComparisonColumn>;
    /**
     * The Axios config or async function which to call to fetch the comparison rows.
     *
     * Don't use with static rows being provided or
     * if original request already provides comparison data
     */
    comparisonRequest?: Record<string, GlobalRequestInfo>;
    /**
     * Default ordering. Example: [name, false]
     * will order by name in ascending direction
     */
    defaultOrderBy?: [string[], boolean];
    /**
     * Column on which to show the details dropdown
     */
    detailsColumn?: string;
    /**
     * Mapping of details kind to the axios config which to call
     */
    detailsRequests?: Record<string, DetailsRequestMetadata>;
    /**
     * Label to display in the details selector
     */
    detailsSelectorTitle?: string;
    /**
     * Allows to drag columns inside the table.
     * If enabled will emit 'move:column' event when column is moved to a new place
     */
    dragColumns?: boolean;
    /**
     * Determines how many columns should be fixed
     */
    fixedColumnNumber?: number;
    /**
     * Mapping between a column type and its operators.
     */
    inlineFilterOperators?: Record<string, Record<string, InlineFilterOperator>>;
    /**
     * Provides the list of negative KPIs. This list is used for coloring metrics
     */
    inversedKpis?: string[];
    /**
     * Label to display in the pagination
     */
    pageSizeLabel: string;
    /**
     * Primary column which is used for detailed rows
     */
    primaryColumn?: string;
    /**
     * Primary column alias. By default the same as primaryColumn
     */
    primaryColumnAlias?: string;
    /**
     * The Axios config or async function which to call to fetch the rows.
     *
     * Don't use with static rows being provided
     */
    request?: GlobalRequestInfo;
    /**
     * Static rows to display
     *
     * Don't use with request URL being provided
     */
    rows?: Record<string, Record<string, any>>;
    /**
     * Provides the list of columns which contents can be shortened
     */
    shortenColumns: string[];
    /**
     * Enables the display of the inline filters
     *
     * When data is static the filters are provided directly in the table.
     * When data is fetched the filters are passed to the backend
     * in the format of inline_filter[columnKey]=value
     */
    showInlineFilters?: boolean;
    /**
     * Enables the display of row number
     */
    showRowNumber?: boolean;
    /**
     * Enables the display of pagination
     */
    showPagination?: boolean;
    /**
     * Enables the display of top total
     */
    showTopTotal?: boolean;
    /**
     * Total row info
     */
    total?: Record<string, any>;
    /**
     * Label to display in the total
     */
    totalTitle?: (rowCount: number) => string;
    /**
     * Column where to show Total
     */
    totalColumnKey?: string;
    /**
     * Label to display on the trend chart
     */
    trendChartTitle?: string;
    /**
     * The URL which to call to get the trend chart data
     */
    trendUrl?: string | Record<string, string>;
    uncolorizeLabel: string;
  }>(),
  {
    cellClasses: () => ({}),
    clientCurrencyDecimal: 0,
    clientCurrencySymbol: '',
    clientCurrencySymbolPrefix: true,
    colorMetrics: false,
    columnDetails: () => ({}),
    columnLinks: () => ({}),
    dragColumns: false,
    fixedColumnNumber: 1,
    inlineFilterOperators: () => ({}),
    primaryColumn: 'id',
    showInlineFilters: false,
    showRowNumber: true,
    showPagination: true,
    showTopTotal: false,
  },
);

const {
  cellClasses,
  clientCurrencyDecimal,
  clientCurrencySymbol,
  clientCurrencySymbolPrefix,
  colorMetrics,
  columns,
  columnDetails,
  columnLinks,
  comparisonColumns,
  comparisonRequest,
  defaultOrderBy,
  detailsColumn,
  detailsRequests,
  dragColumns,
  fixedColumnNumber,
  inlineFilterOperators,
  inversedKpis,
  primaryColumn,
  primaryColumnAlias,
  request,
  rows,
  shortenColumns,
  showInlineFilters,
  showRowNumber,
  showPagination,
  showTopTotal,
  total,
  totalColumnKey,
  trendUrl,
} = toRefs(props);

const makeInlineFilters = () => {
  const inlineFilters: Record<string, InlineFilter> = {};

  for (const columnKey of Object.keys(columns.value)) {
    if (!(columnKey in inlineFilterOperators.value)) {
      continue;
    }

    inlineFilters[columnKey] = {
      operator: Object.keys(inlineFilterOperators.value[columnKey])[0],
      value: '',
    };
  }

  return inlineFilters;
};

const allRows = ref<Record<string, any>[]>([]);
const cachedDetailsRows = ref<Record<string, Record<string, any>>>({});
const coloredMetrics = ref<string[]>([]);
const columnHintsVisible = ref<Record<string, boolean>>({});
const currentColumnKeys = ref<string[]>([]);
const detailsRows = ref<Record<string, Record<string, any>>>({});
const displayActionButtons = ref(false);
const displayInlineFilters = ref(false);
const expandedColumns = ref<string[]>([]);
const fetchedAllRows = ref(false);
const inlineFilters = ref(makeInlineFilters());
const loading = ref(true);
const orderBy = ref<[string[], boolean] | undefined>();
const pageNumber = ref(0);
const pageSize = ref(20);
const rowCount = ref(0);
const totalRow = ref<Record<string, any> | undefined>();

const table = ref<typeof Table | undefined>();

const additionalHeaders = computed(() => {
  const additionalHeaders: Record<string, { icon: string }> = {};

  if (displayInlineFilters.value) {
    additionalHeaders.inline_filters = {
      icon: 'filter',
    };
  }

  return additionalHeaders;
});

const comparisonColumnKeys = computed(() =>
  comparisonColumns?.value ? Object.keys(comparisonColumns.value) : undefined,
);

/**
 * Retrieves the list of columns in current column (may differ from columns prop in drag mode)
 */
const currentColumns = computed(() =>
  currentColumnKeys.value.reduce((currentColumns, columnKey) => {
    currentColumns[columnKey] = cloneObject(columns.value[columnKey]);

    return currentColumns;
  }, {} as Record<string, Column>),
);

/**
 * Retrieves the list of available details modes (ex. daily, weekly, monthly)
 */
const detailsLabels = computed(() => {
  if (!detailsRequests?.value) {
    return undefined;
  }

  return Object.entries(detailsRequests.value).reduce((labels, [kind, { label }]) => {
    labels[kind] = label;

    return labels;
  }, {} as Record<string, string>);
});

/**
 * Orders rows
 */
const orderedRows = computed(() => {
  return [...allRows.value].sort((leftRow, rightRow) => {
    const comparison = (() => {
      const leftValue = getRawValue(
        orderBy.value![0].reduce((value, key) => value[key], leftRow),
        columns.value[orderBy.value![0][0]].type,
      );
      const rightValue = getRawValue(
        orderBy.value![0].reduce((value, key) => value[key], rightRow),
        columns.value[orderBy.value![0][0]].type,
      );

      if (leftValue > rightValue) {
        return 1;
      }

      if (leftValue < rightValue) {
        return -1;
      }

      return 0;
    })();

    return orderBy.value![1] ? -comparison : comparison;
  });
});

/**
 * Slices rows to current page
 */
const visibleRows = computed(() => {
  if (!request?.value || fetchedAllRows.value) {
    return orderedRows.value;
  }

  return orderedRows.value.slice(
    pageNumber.value * pageSize.value,
    (pageNumber.value + 1) * pageSize.value,
  );
});

const emit = defineEmits<{
  (e: 'move:column', _: { from: number; to: number }): void;
}>();

const addColoredMetric = (columnKey: string) => {
  if (coloredMetrics.value.includes(columnKey)) {
    return;
  }

  coloredMetrics.value.push(columnKey);
};

/**
 * Checks if a value can be shortened/expanded
 */
const canShorten = (columnKey: string, value: string) => {
  if (!shortenColumns.value) {
    return false;
  }

  if (!shortenColumns.value.includes(columnKey)) {
    return false;
  }

  return value.length > SHORTEN_THRESHOLD;
};

const columnHasTooltip = (column: Column) => !!column.tooltipTitle && !!column.tooltipDescription;

const differenceMood = (
  value: number,
  columnKey: string,
  subcolumnKey?: string,
): Mood | undefined => {
  if (
    !subcolumnKey ||
    !comparisonColumns?.value ||
    !(subcolumnKey in comparisonColumns.value) ||
    comparisonColumns.value[subcolumnKey].format !== 'difference'
  ) {
    return undefined;
  }

  const inversed = inversedKpis?.value?.includes(columnKey) ?? false;

  if (value > 0) {
    return inversed ? 'negative' : 'positive';
  } else if (value < 0) {
    return inversed ? 'positive' : 'negative';
  } else {
    return 'neutral';
  }
};

/**
 * Formats a value based on its column type
 */
const formatValue = (value: any, type: ColumnType, format?: 'difference'): string => {
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
            : parseFloat('0.' + '0'.repeat(clientCurrencyDecimal.value - 1) + '1');

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
      return rawValue.toString();
  }
};

/**
 * Retrieves details rows either from memory or by fetching them
 * and then storing them in memory
 */
const getCachedDetails = async (kind: string, row: Record<string, any>) => {
  if (cachedDetailsRows.value[kind] && cachedDetailsRows.value[kind][row[primaryColumn.value]]) {
    return cachedDetailsRows.value[kind][row[primaryColumn.value]];
  }

  const { rows } = await getDetailsRowsFromRequestInfo(detailsRequests!.value![kind].request, {
    row,
    primaryColumn: primaryColumnAlias?.value ?? primaryColumn.value,
    primaryColumnValue: row[primaryColumn.value],
  });

  if (!cachedDetailsRows.value[kind]) {
    cachedDetailsRows.value[kind] = {};
  }

  cachedDetailsRows.value[kind][row[primaryColumn.value]] = Object.values(rows);

  return cachedDetailsRows.value[kind][row[primaryColumn.value]];
};

/**
 * Retrieves the URL to redirect the user based on row data
 */
const getColumnLinkUrl = (columnLinkInfo: ColumnLinkInfo, row: Record<string, any>) => {
  const url = new URL(columnLinkInfo.url, location.origin);

  if (Array.isArray(columnLinkInfo.columns)) {
    for (const columnKey of columnLinkInfo.columns) {
      url.searchParams.set(columnKey, row[columnKey]);
    }
  } else {
    for (const [columnKey, aliasColumnKey] of Object.entries(columnLinkInfo.columns)) {
      url.searchParams.set(aliasColumnKey, row[columnKey]);
    }
  }

  return url;
};

/**
 * Retrieves the URL to fetch row hint data
 */
const getColumnDetailsUrl = (columnKey: string, row: Record<string, any>) => {
  const url = new URL(columnDetails.value[columnKey].baseUrl, location.origin);

  if (Array.isArray(columnDetails.value[columnKey].columns)) {
    for (const column of columnDetails.value[columnKey].columns as string[]) {
      url.searchParams.set(column, row[column]);
    }
  } else {
    for (const [column, alias] of Object.entries(columnDetails.value[columnKey].columns)) {
      url.searchParams.set(alias, row[column]);
    }
  }

  return url.toString();
};

/**
 * Returns the URL with "total" parameter.
 */
const getColumnDetailsTotalUrl = (columnDetails: ColumnDetails) => {
  if (columnDetails.totalUrl) {
    return new URL(columnDetails.totalUrl).toString();
  }

  const url = new URL(columnDetails.baseUrl);

  url.searchParams.set('total', 'true');

  return url.toString();
};

/**
 * Gets the index of a column in the list of currently expanded columns
 */
const getExpandedColumnIndex = (columnKey: string) => {
  if (!shortenColumns.value) {
    return -1;
  }

  if (!shortenColumns.value.includes(columnKey)) {
    return -1;
  }

  return expandedColumns.value.indexOf(columnKey);
};

const getInlineFilterCurrentOperatorItem = (columnKey: string) => {
  if (!(columnKey in inlineFilters.value)) {
    return undefined;
  }

  return inlineFilters.value[columnKey].operator;
};

const getInlineFilterCurrentValue = (columnKey: string) => {
  if (!(columnKey in inlineFilters.value)) {
    return undefined;
  }

  return inlineFilters.value[columnKey].value;
};

const getInlineFilterOperators = (columnKey: string) => inlineFilterOperators.value[columnKey];

const getInlineFilterOperatorClasses = (columnKey: string) => {
  const operators = getInlineFilterOperators(columnKey);

  if (!operators) {
    return undefined;
  }

  const sizes = ['normal', 'small'];

  let maxSizeIndex = 0;

  for (const operatorInfo of Object.values(operators)) {
    const sizeIndex = sizes.indexOf(operatorInfo.size ?? 'normal');

    if (sizeIndex > maxSizeIndex) {
      maxSizeIndex = sizeIndex;
    }
  }

  return {
    [`size-${sizes[maxSizeIndex]}`]: true,
  };
};

const getInlineFilterOperatorItems = (columnKey: string): Record<string, string> => {
  const operators = getInlineFilterOperators(columnKey);

  if (!operators) {
    return {};
  }

  return Object.entries(operators).reduce((operators, [operatorKey, operator]) => {
    operators[operatorKey] = operator.label;

    return operators;
  }, {} as Record<string, string>);
};

const getInlineFilterValueType = (columnKey: string) => {
  if (columns.value[columnKey].type === 'string') {
    return 'text';
  }

  return 'number';
};

/**
 * Retrieves local storage item key to store order info
 */
const getOrderByKey = () => `Table_OrderBy_${location.pathname}`;

/**
 * Retrieves local storage item key to store pagination info
 */
const getPageSizeKey = () => `Table_PageSize_${location.pathname}`;

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

const getRowFormattedValue = (
  value: any,
  columnKey: string,
  subcolumnKey?: string,
  shorten: boolean = false,
) => {
  const [columnType, format] = (() => {
    if (!subcolumnKey || !comparisonColumns?.value || !(subcolumnKey in comparisonColumns.value)) {
      return [columns.value[columnKey].type, undefined];
    }

    return [
      comparisonColumns.value[subcolumnKey].type ?? columns.value[columnKey].type,
      comparisonColumns.value[subcolumnKey].format,
    ];
  })();

  let formattedValue = formatValue(value, columnType);

  if (format === 'difference') {
    formattedValue = value > 0 ? `+${formattedValue}` : formattedValue;
  }

  if (shorten) {
    return shortenValue(formattedValue, columnKey);
  }

  return formattedValue;
};

/**
 * Retrieves URL to fetch trend chart data
 */
const getRowTrendUrl = (row: Record<string, any>, urlKey?: string) => {
  if (!trendUrl) {
    return '';
  }

  const url = new URL(
    urlKey ? (trendUrl.value! as Record<string, string>)[urlKey] : (trendUrl.value! as string),
    location.origin,
  );

  url.searchParams.set(primaryColumnAlias?.value ?? primaryColumn.value, row[primaryColumn.value]);

  return url.toString();
};

/**
 * Gets classes for a row value
 */
const getValueClass = (columnKey: string, value: string, detailable: boolean) => {
  if (canShorten(columnKey, value)) {
    return [];
  }

  if (!detailable) {
    return ['flew-grow-1'];
  }

  if (detailsColumn?.value === columnKey) {
    return ['flex-grow-1', 'text-left'];
  }

  if (
    shortenColumns.value &&
    shortenColumns.value.includes(columnKey) &&
    visibleRows.value.some((row) => canShorten(columnKey, row[columnKey]))
  ) {
    return ['flex-grow-1', 'text-left'];
  }

  return ['flex-grow-1'];
};

const hasInlineFilters = (columnKey: string) => {
  return columnKey in inlineFilterOperators.value;
};

const hideActionButtons = () => {
  if (!showInlineFilters.value) {
    return;
  }

  displayActionButtons.value = false;
};

const isColumnLinkable = (row: Record<string, any>, columnKey: string) => {
  if (!columnLinks?.value) {
    return false;
  }

  if (!(columnKey in columnLinks.value)) {
    return false;
  }

  if ('disable_for' in columnLinks.value[columnKey]) {
    if (columnLinks.value[columnKey].disable_for.includes(row[primaryColumn.value])) {
      return false;
    }
  }

  return true;
};

const onColumnMove = (from: number, to: number) => {
  const [column] = currentColumnKeys.value.splice(from, 1);

  currentColumnKeys.value.splice(to, 0, column);

  emit('move:column', { from, to });
};

const removeColoredMetric = (columnKey: string) => {
  const index = coloredMetrics.value.indexOf(columnKey);

  if (index < 0) {
    return;
  }

  coloredMetrics.value.splice(index, 1);
};

const setColumnHintVisible = (columnKey: string, visible: boolean) => {
  columnHintsVisible.value[columnKey] = visible;
};

/**
 * Shortens value if it is enabled to be shortened
 */
const shortenValue = (value: string, columnKey: string) => {
  if (!shortenColumns.value) {
    return value;
  }

  if (!shortenColumns.value.includes(columnKey)) {
    return value;
  }

  if (value.length <= SHORTEN_THRESHOLD) {
    return value;
  }

  return `${value.substring(0, SHORTEN_THRESHOLD - 3)}...`;
};

/**
 * Removes detailed rows (keeps them in memory)
 */
const onHideDetails = (row: Record<string, any>) => {
  if (!table.value) {
    return;
  }

  const scroll = {
    left: table.value!.$el.scrollLeft,
    top: table.value!.$el.scrollTop,
  };

  delete detailsRows.value[row[primaryColumn.value]];

  nextTick(() => {
    table.value!.$el.scrollTo(scroll);
  });
};

const onInlineFilterBlur = (event: FocusEvent, columnKey: string) => {
  const value = (event.target! as HTMLInputElement).value;

  setInlineFilter(columnKey, { value });
};

const onInlineFilterKeyUp = (event: KeyboardEvent, columnKey: string) => {
  if (event.key === 'Enter') {
    (event.target! as HTMLElement).blur();
  }
};

const onShowDetails = async (kind: string, row: Record<string, any>) => {
  if (!table.value) {
    return;
  }

  const scroll = {
    left: table.value.$el.scrollLeft,
    top: table.value.$el.scrollTop,
  };

  loading.value = true;

  detailsRows.value[row[primaryColumn.value]] = await getCachedDetails(kind, row);

  nextTick(() => {
    table.value!.$el.scrollTo(scroll);

    loading.value = false;
  });
};

/**
 * Retrieves initial ordering information
 */
const setOrderBy = async (fetchRows: boolean = false) => {
  (await setOrderByFromLocalStorage(fetchRows)) ||
    (await setOrderByFromDataTables(fetchRows)) ||
    (await setOrderByFromDefault(fetchRows));
};

const setPageNumber = async (newPageNumber: number) => {
  await setRows(newPageNumber);

  pageNumber.value = newPageNumber;
};

const setPageSize = async (newPageSize?: number) => {
  const pageSizeKey = getPageSizeKey();

  if (newPageSize === undefined) {
    const savedPageSize = localStorage.getItem(pageSizeKey);

    if (savedPageSize) {
      pageSize.value = parseInt(savedPageSize);
    }
  } else {
    localStorage.setItem(pageSizeKey, newPageSize.toString());

    await setRows(0, newPageSize);

    pageNumber.value = 0;
    pageSize.value = newPageSize;
  }
};

const setInlineFilter = (
  columnKey: string,
  { operator, value }: { operator?: string; value?: string },
) => {
  if (!operator) {
    operator = Object.keys(getInlineFilterOperators(columnKey))[0];
  }

  if (!operator) {
    // Inline filters are deactivated for the column
    return;
  }

  const filter = {
    ...inlineFilters.value[columnKey],
    operator,
  };

  if (value !== undefined) {
    filter.value = value;
  }

  inlineFilters.value[columnKey] = filter;

  setPageNumber(0);
};

/**
 * Tries to retrieve ordering information
 * from DataTables local storage info
 */
const setOrderByFromDataTables = async (fetchRows: boolean) => {
  const datatablesConfiguration = (() => {
    for (const key in localStorage) {
      if (!key.startsWith('DataTables_')) {
        continue;
      }

      const path = key.substring(key.indexOf('/'));

      if (location.pathname !== path) {
        return undefined;
      }

      const datatablesConfiguration = localStorage.getItem(key);

      return datatablesConfiguration ? JSON.parse(datatablesConfiguration) : undefined;
    }
  })();

  if (!datatablesConfiguration) {
    return false;
  }

  if (!datatablesConfiguration.order) {
    return false;
  }

  if (!datatablesConfiguration.order[0]) {
    return false;
  }

  if (typeof datatablesConfiguration.order[0][0] === 'number') {
    return false;
  }

  const lastDelimiter = datatablesConfiguration.order[0][0].lastIndexOf('-');

  const orderBy =
    lastDelimiter === -1
      ? ([
          [datatablesConfiguration.order[0][0]] as string[],
          datatablesConfiguration.order[0][1] === 'desc',
        ] as [string[], boolean])
      : ([
          [
            datatablesConfiguration.order[0][0].substring(0, lastDelimiter),
            datatablesConfiguration.order[0][0].substring(lastDelimiter + 1),
          ] as string[],
          datatablesConfiguration.order[0][1] === 'desc',
        ] as [string[], boolean]);

  await updateOrderBy(orderBy, false, fetchRows);

  return true;
};

/**
 * Retrieves default ordering information
 */
const setOrderByFromDefault = async (fetchRows: boolean) => {
  if (defaultOrderBy?.value) {
    await updateOrderBy(defaultOrderBy.value, false, fetchRows);

    return;
  }

  const [firstColumnKey, { colspan }] = Object.entries(columns.value).find(
    ([_, { visible }]) => visible,
  ) as [string, Column];

  if (colspan === -1) {
    await updateOrderBy([[firstColumnKey], false], false, fetchRows);

    return;
  }

  await updateOrderBy(
    [
      [
        firstColumnKey,
        (comparisonColumns?.value ? Object.keys(comparisonColumns.value)[0] : 0).toString(),
      ],
      false,
    ],
    false,
    fetchRows,
  );
};

/**
 * Tries to retrieve ordering information from local storage
 */
const setOrderByFromLocalStorage = async (fetchRows: boolean) => {
  const orderBy = localStorage.getItem(getOrderByKey());

  if (orderBy) {
    await updateOrderBy(JSON.parse(orderBy), false, fetchRows);

    return true;
  } else {
    return false;
  }
};

/**
 * Fetches rows by API
 */
const setRowsFromRequest = async (
  pageNumber: number,
  pageSize: number,
  orderBy: [string[], boolean],
) => {
  if (!request?.value) {
    return false;
  }

  if (fetchedAllRows.value) {
    return true;
  }

  const [response, comparisonResponse] = await (async () => {
    const requestPromises = [
      getGlobalRowsFromRequestInfo(request!.value!, {
        inlineFilters: inlineFilters.value,
        pageNumber: pageNumber,
        pageSize: pageSize,
        orderBy: orderBy[0],
        reversed: orderBy[1],
      }),
    ];

    if (comparisonRequest?.value) {
      requestPromises.push(
        getGlobalRowsFromRequestInfo(comparisonRequest.value, {
          inlineFilters: inlineFilters.value,
          pageNumber: pageNumber,
          pageSize: pageSize,
          orderBy: orderBy[0],
          reversed: orderBy[1],
        }),
      );
    }

    const responses = await Promise.all(requestPromises);

    if (responses.length > 1 && responses.some((response) => response.paginated === true)) {
      throw new Error('Paginated fetching is not supported for separate comparison requests.');
    }

    return responses;
  })();

  allRows.value = Object.values(
    comparisonResponse
      ? mergeComparisonData(
          response.rows,
          comparisonResponse.rows,
          columns.value,
          primaryColumn.value,
        )
      : response.rows,
  );
  fetchedAllRows.value = response.paginated !== true;
  rowCount.value = response.rowCount;

  if (response.detailedRows) {
    detailsRows.value = response.detailedRows;
  } else {
    detailsRows.value = {};
  }

  if (response.total) {
    totalRow.value = comparisonResponse
      ? mergeComparisonRow(response.total, comparisonResponse.total, columns.value)
      : response.total;
  }

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

  for (const [columnKey, filter] of Object.entries(inlineFilters.value)) {
    if (!filter.value) {
      continue;
    }

    staticRows = staticRows.filter((row) =>
      inlineFilterOperators.value[columnKey][filter.operator].callback(
        row[columnKey],
        filter.value,
      ),
    );
  }

  allRows.value = staticRows;
  rowCount.value = staticRows.length;

  return true;
};

/**
 * Updates rows to be displayed
 *
 * Use this method when either page number, page size
 * or ordering is updated
 */
const setRows = async (
  newPageNumber?: number,
  newPageSize?: number,
  newOrderBy?: [string[], boolean],
) => {
  if (newPageNumber === undefined) {
    newPageNumber = pageNumber.value;
  }
  if (newPageSize === undefined) {
    newPageSize = pageSize.value;
  }
  if (newOrderBy === undefined) {
    newOrderBy = orderBy.value;
  }

  loading.value = true;

  if (!setRowsFromStatic()) {
    await setRowsFromRequest(pageNumber.value, pageSize.value, orderBy.value!);
  }

  loading.value = false;
};

const showActionButtons = () => {
  if (!showInlineFilters.value) {
    return;
  }

  displayActionButtons.value = true;
};

/**
 * Enables/disables values of a column to be shortened
 */
const toggleExpandColumn = (columnKey: string) => {
  if (!shortenColumns.value) {
    return;
  }

  if (!shortenColumns.value.includes(columnKey)) {
    return;
  }

  const index = getExpandedColumnIndex(columnKey);

  if (index >= 0) {
    expandedColumns.value.splice(index, 1);
  } else {
    expandedColumns.value.push(columnKey);
  }
};

const toggleInlineFilters = () => {
  displayInlineFilters.value = !displayInlineFilters.value;

  if (displayInlineFilters.value) {
    inlineFilters.value = makeInlineFilters();
  }
};

const updateOrderBy = async (
  newOrderBy: [string[], boolean],
  save: boolean = true,
  fetchRows: boolean = true,
) => {
  // Always set to first page when changing ordering
  pageNumber.value = 0;

  orderBy.value = newOrderBy;

  if (fetchRows) {
    await setRows(undefined, undefined, newOrderBy);
  }

  if (save) {
    localStorage.setItem(getOrderByKey(), JSON.stringify(newOrderBy));
  }
};

onMounted(() => {
  currentColumnKeys.value = Object.keys(columns.value);

  totalRow.value = total?.value;

  Promise.all([setOrderByFromDefault(false), setPageSize()]).then(() => setOrderBy(true));
});

watch(columns, () => {
  inlineFilters.value = makeInlineFilters();
});

if (request) {
  watch(
    request,
    () => {
      fetchedAllRows.value = false;
      // Reload the table on the request change
      setPageNumber(0);
    },
    { deep: true },
  );
}
</script>

<template lang="pug">
.common-table
  .controls.d-flex.justify-content-end.mb-1(v-if='showPagination')
    Pagination(
      @update:pageNumber="(pageNumber) => setPageNumber(pageNumber)",
      @update:currentPageSize="(pageSize) => setPageSize(pageSize)",
      :currentPageSize="pageSize",
      :pageNumber="pageNumber",
      :pageSizeLabel="pageSizeLabel",
      :rowCount="rowCount",
    )
  .table-container(
    @mouseover="() => showActionButtons()",
    @mouseout="() => hideActionButtons()",
  )
    .action-buttons(:class="{ active: displayActionButtons }")
      button.btn.btn-small.btn-success(
        v-if="showInlineFilters",
        @click="() => toggleInlineFilters()",
      )
        .las(:class="displayInlineFilters ? 'la-trash' : 'la-filter'")
    Table(
      v-if='orderBy',
      ref="table",
      @addColoredMetric="(columnKey) => addColoredMetric(columnKey)",
      @move:column="({ from, to }) => onColumnMove(from, to)",
      @removeColoredMetric="(columnKey) => removeColoredMetric(columnKey)",
      @update:orderBy="(newOrderBy) => updateOrderBy(newOrderBy)",
      :additionalHeaders="additionalHeaders",
      :cellClasses="cellClasses"
      :colorMetrics="colorMetrics",
      :coloredMetrics="coloredMetrics",
      :columns="currentColumns",
      :comparisonColumnKeys="comparisonColumnKeys",
      :detailsRows="detailsRows",
      :dragColumns="dragColumns",
      :fixedColumnNumber="fixedColumnNumber",
      :inversedKpis="inversedKpis",
      :orderBy="orderBy",
      :primaryColumn="primaryColumn",
      :rows="visibleRows",
      :showRowNumber="showRowNumber",
      :showTotal="!!totalRow",
      :showTopTotal="showTopTotal",
    )
      template(#colorizeLabel="{ enabled }")
        Info(mood="white", size="small")
          template(v-if="enabled") {{ uncolorizeLabel }}
          template(v-else) {{ colorizeLabel }}
      template(#columnRowNumber)
        Info(contrast, size="small") #
      template(#rowNumber="{ value }")
        Info(contrast, size="small") {{ value }}
      template(#totalRowNumber)
        Info(contrast, size="small") #
      template(#column="{ columnKey, isGhost }")
        .d-flex.align-items-center(
          @mouseover="() => setColumnHintVisible(columnKey, true)",
          @mouseout="() => setColumnHintVisible(columnKey, false)",
        )
          Info(contrast, size="small") {{ columns[columnKey].label }}
          ColumnHint(
            v-if="!isGhost && columnHasTooltip(columns[columnKey])",
            :description="columns[columnKey].tooltipDescription",
            :title="columns[columnKey].tooltipTitle",
            :visible="columnHintsVisible[columnKey]",
          )
      template(v-if="comparisonColumns", #secondaryColumn="{ subcolumnKey }")
        Info(
          v-if="subcolumnKey",
          contrast,
          size="small",
        ) {{ comparisonColumns[subcolumnKey].label }}
      template(#row="{ columnKey, index, row, spanIndex, subcolumnKey, subindex, value }")
        slot(
          v-bind=`{
            columnKey,
            index,
            row,
            spanIndex,
            subcolumnKey,
            subindex,
            value,
          }`,
          name="row",
        )
          TrendChart(
            v-if="subindex === undefined && columnKey === 'trend'",
            :class="getValueClass(columnKey, value, row.rowInfo.detailable)",
            :formatter="(value) => formatValue(value, 'int')",
            :title="trendChartTitle",
            :url="getRowTrendUrl(row, subcolumnKey)",
          )
          template(v-else-if="row.rowInfo.detailable && columnKey === detailsColumn")
            Info(
              v-if="isColumnLinkable(row, columnKey) && row.rowInfo.detailable",
              :class="getValueClass(columnKey, value, row.rowInfo.detailable)",
              :mood="differenceMood(value, columnKey, subcolumnKey)",
              contrast,
              size="small",
            )
              a.column-link(:href="getColumnLinkUrl(columnLinks[columnKey], row).toString()")
                | {{ getRowFormattedValue(value, columnKey, subcolumnKey, true) }}
            Info(
              v-else
              :mood="differenceMood(value, columnKey, subcolumnKey)",
              contrast,
              size="small",
            ) {{ getRowFormattedValue(value, columnKey, subcolumnKey) }}
          Info(
            v-else-if="isColumnLinkable(row, columnKey) && row.rowInfo.detailable",
            :class="getValueClass(columnKey, value, row.rowInfo.detailable)",
            :mood="differenceMood(value, columnKey, subcolumnKey)",
            contrast,
            size="small",
          )
            a.column-link(:href="getColumnLinkUrl(columnLinks[columnKey], row).toString()")
              | {{ getRowFormattedValue(value, columnKey, subcolumnKey, true) }}
          CellHint(
            v-else-if="subindex === undefined && value >= 0.01 && columnKey in columnDetails",
            :format="columnDetails[columnKey].format",
            :label="getRowFormattedValue(value, columnKey, subcolumnKey, true)",
            :title="columnDetails[columnKey].title",
            :url="getColumnDetailsUrl(columnKey, row)",
          )
          Info(
            v-else,
            :class="getValueClass(columnKey, value, row.rowInfo.detailable)",
            :mood="differenceMood(value, columnKey, subcolumnKey)",
            contrast,
            size="small",
          ) {{ getRowFormattedValue(value, columnKey, subcolumnKey, true) }}
          i.flex-grow-1.expand-column.fa(
            v-if='canShorten(columnKey, value)',
            @click='() => toggleExpandColumn(columnKey)',
            :class="expandedColumns.includes(columnKey) ? 'fa-compress-alt' : 'fa-expand-alt'",
          )
          template(v-if="detailsLabels && row.rowInfo.detailable && columnKey === detailsColumn")
            Separator(v-if='!canShorten(columnKey, value)')
            DetailsSelector(
              @hideDetails="() => onHideDetails(row)",
              @showDetails="(kind) => onShowDetails(kind, row)",
              :labels="detailsLabels",
              :open="detailsRows[row[primaryColumn]] !== undefined",
              :title="detailsSelectorTitle",
            )
      template(#additionalHeader="{ additionalHeader, columnKey }")
        .d-flex.inline-filter(
          v-if="additionalHeader === 'inline_filters' && hasInlineFilters(columnKey)",
          :class="getInlineFilterOperatorClasses(columnKey)",
        )
          Dropdown.inline-filter-dropdown(
            @update:modelValue="(operator) => setInlineFilter(columnKey, { operator: operator.toString() })",
            :id="`additional_header_${columnKey}`",
            :items="getInlineFilterOperatorItems(columnKey)",
            :modelValue="getInlineFilterCurrentOperatorItem(columnKey)",
          )
            template(#item="{ item }")
              Info(contrast, size="small") {{ item }}
          Input.flex-grow-1.inline-filter-input(
            @blur="(event) => onInlineFilterBlur(event, columnKey)",
            @keyup="(event) => onInlineFilterKeyUp(event, columnKey)"
            :modelValue="getInlineFilterCurrentValue(columnKey)",
            :type="getInlineFilterValueType(columnKey)",
          )
      template(#total="{ columnKey, subcolumnKey, values }")
        slot(
          :name="total",
          :columnKey="columnKey",
          :subcolumnKey="subcolumnKey",
          :values="values",
        )
          template(v-if="totalTitle && columnKey === totalColumnKey")
            Info(
              contrast,
              size="small",
            ) {{ totalTitle(rowCount ?? allRows.length) }}
          template(v-else-if="totalRow")
            CellHint(
              v-if="totalRow && totalRow[columnKey] >= 0.01 && columnKey in columnDetails",
              :format="columnDetails[columnKey].format",
              :label="shortenValue(formatValue(totalRow[columnKey], columns[columnKey].type, comparisonColumns && subcolumnKey ? comparisonColumns[subcolumnKey].format : undefined), columnKey)",
              :title="columnDetails[columnKey].title",
              :url="getColumnDetailsTotalUrl(columnDetails[columnKey])",
            )
            Info(
              v-else-if="subcolumnKey",
              :mood="differenceMood(totalRow[columnKey][subcolumnKey], columnKey, subcolumnKey)",
              contrast,
              size="small",
            ) {{ getRowFormattedValue(totalRow[columnKey][subcolumnKey], columnKey, subcolumnKey) }}
            Info(
              v-else,
              :mood="differenceMood(totalRow[columnKey], columnKey, subcolumnKey)",
              contrast,
              size="small",
            ) {{ getRowFormattedValue(totalRow[columnKey], columnKey) }}
  .loading-overlay(:class="{ visible: loading }")
    Loader
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.table-container {
  position: relative;
}

.action-buttons {
  position: absolute;
  left: 0;
  opacity: 0;
  pointer-events: none;
  top: 0;
  transition: opacity 0.3s;
  transform: translateX(-100%);

  &.active {
    opacity: 1;
    pointer-events: all;

    transition-duration: 0.1s;
  }

  > button {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
}

.common-table {
  position: relative;
}

.table {
  overflow-y: scroll;
}

.column-link {
  @include apply-color(color, text-important-alt);
}

.details-selector-container {
  margin-left: 1rem;
}

.difference-negative {
  @include apply-color(color, text-negative);
}

.difference-positive {
  @include apply-color(color, text-positive);
}

.expand-column {
  @include apply-color(color, text-important-alt);

  cursor: pointer;
  margin-left: 0.5rem;
}

.inline-filter {
  &.size-small:deep(.inline-filter-dropdown + .select2) {
    min-width: 40px;
  }
  &.size-normal:deep(.inline-filter-dropdown + .select2) {
    min-width: 100px;
  }

  &:deep(.inline-filter-dropdown + .select2) {
    .select2-selection.select2-selection--single {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      height: 30px !important;
      position: relative;

      .select2-selection__rendered {
        line-height: initial;
      }

      .select2-selection__arrow {
        right: 4px !important;
        top: 1px !important;
      }
    }
  }

  .inline-filter-input {
    border-bottom-left-radius: 0;
    border-color: #d9d9d9;
    border-left-width: 0;
    border-top-left-radius: 0;
    height: 30px;
    min-width: 50px;
    padding: 0 0.25rem;
  }
}

.loading-overlay {
  @include apply-color(background-color, background-elevated-3, $opacity: 0.5);

  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.3s;
  z-index: 40;

  &.visible {
    pointer-events: all;
    opacity: 1;
  }
}

.ws-pre {
  white-space: pre;
}
</style>
