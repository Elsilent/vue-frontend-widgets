<template lang="pug">
.common-table
  .controls.d-flex.justify-content-end.mb-1(v-if='showPagination')
    Pagination(
      @update:pageNumber="(pageNumber) => setPageNumber(pageNumber)",
      @update:currentPageSize="(pageSize) => setPageSize(pageSize)",
      :currentPageSize="pageSize",
      :pageNumber="pageNumber",
      :rowCount="rowCount",
    )
  Table(
    v-if='orderBy',
    ref="table",
    @addColoredMetric="(columnKey) => addColoredMetric(columnKey)",
    @move:column="({ from, to }) => onColumnMove(from, to)",
    @removeColoredMetric="(columnKey) => removeColoredMetric(columnKey)",
    @update:orderBy="(newOrderBy) => updateOrderBy(newOrderBy)",
    :cellClasses="cellClasses"
    :colorMetrics="colorMetrics",
    :coloredMetrics="coloredMetrics",
    :columns="currentColumns",
    :comparisonColumns="comparisonColumns",
    :detailsRows="detailsRows",
    :dragColumns="dragColumns",
    :fixedColumnNumber="fixedColumnNumber",
    :inversedKpis="inversedKpis",
    :key="tableKey",
    :orderBy="orderBy",
    :primaryColumn="primaryColumn",
    :rows="visibleRows",
    :showRowNumber="showRowNumber",
    :showTotal="!!totalRow",
    :showTopTotal="showTopTotal",
  )
    template(
      v-for="(column, columnKey) in currentColumns",
      #[`column(${columnKey})`]="{ isGhost }",
    )
      .d-flex.align-items-center(
        @mouseover="() => setColumnHintVisible(columnKey, true)",
        @mouseout="() => setColumnHintVisible(columnKey, false)",
      )
        | {{ column.label }}
        ColumnHint(
          v-if="!isGhost && columnHasTooltip(column)",
          :description="getColumnTooltipContent(column)",
          :title="getColumnTooltipTitle(column)",
          :visible="columnHintsVisible[columnKey]",
        )
    template(
      v-for="{ comparisonKey, key } in valueColumns",
      #[`column(${key})`],
    ) {{ comparisonColumn(comparisonKey) }}
    template(
      v-for="(column, columnKey) in currentColumns",
      #[`row(${columnKey})`]=`{
        index,
        name,
        reloadRow,
        row,
        spanIndex,
        subindex,
        value,
        reloadTable: simpleReloadTable,
      }`,
    )
      slot(
        v-bind=`{
          index,
          name,
          reloadRow,
          row,
          spanIndex,
          subindex,
          value,
          reloadTable: (forceFetch) => reloadTable(simpleReloadTable, forceFetch),
        }`,
        :name="`row(${columnKey})`",
      )
        TrendChart(
          v-if="subindex === undefined && trendUrl && columnKey === 'trend'"
          :class="getValueClass(columnKey, value, row.rowInfo.detailable)",
          :formatter="(value) => formatValue(value, 'int')",
          :url="getRowTrendUrl(row)",
        )
        template(v-else-if="row.rowInfo.detailable && columnKey === detailsColumn")
          span(
            v-if="isColumnLinkable(row, columnKey) && row.rowInfo.detailable",
            class='ws-pre'
            :class="getValueClass(columnKey, value, row.rowInfo.detailable)",
          )
            a.column-link(:href='getColumnLinkUrl(columnLinks[columnKey], row)')
              | {{ shortenValue(formatValue(value, column.type), columnKey) }}
          template(v-else) {{ formatValue(value, column.type) }}
        span(
          v-else-if="isColumnLinkable(row, columnKey) && row.rowInfo.detailable",
          class='ws-pre',
          :class="getValueClass(columnKey, value, row.rowInfo.detailable)",
        )
          a.column-link(:href='getColumnLinkUrl(columnLinks[columnKey], row)')
            | {{ shortenValue(formatValue(value, column.type), columnKey) }}
        CellHint(
          v-else-if="subindex === undefined && value >= 0.01 && columnKey in columnDetails",
          :format="columnDetails[columnKey].format",
          :label="shortenValue(formatValue(value, column.type), columnKey)",
          :title="columnDetails[columnKey].title",
          :url="getColumnDetailsUrl(columnKey, row)",
        )
        span(
          v-else,
          :class="getValueClass(columnKey, value, row.rowInfo.detailable)",
        ) {{ shortenValue(formatValue(value, column.type), columnKey) }}
        i.flex-grow-1.expand-column.fa(
          v-if='canShorten(columnKey, value)',
          @click='() => toggleExpandColumn(columnKey)',
          :class="expandedColumns.includes(columnKey) ? 'fa-compress-alt' : 'fa-expand-alt'",
        )
        DetailsSelector(
          v-if="row.rowInfo.detailable && columnKey === detailsColumn",
          @hideDetails="() => onHideDetails(row)",
          @showDetails="(kind) => onShowDetails(kind, row)",
          :class="{ 'flex-grow-1 text-right': !canShorten(columnKey, value) }",
          :kinds="detailsKinds",
          :open="detailsRows[row[primaryColumn]] !== undefined",
        )
    template(
      v-for="{ column, columnKey, format, key, type } in valueColumns",
      #[`row(${key})`]=`{
        index,
        name,
        reloadRow,
        row,
        spanIndex,
        subindex,
        value,
        reloadTable: simpleReloadTable,
      }`,
    )
      slot(
        v-bind=`{
          index,
          name,
          reloadRow,
          row,
          spanIndex,
          subindex,
          value,
          reloadTable: (forceFetch) => reloadTable(simpleReloadTable, forceFetch),
        }`,
        :name="`row(${key})`",
      )
        TrendChart(
          v-if="subindex === undefined && trendUrl && columnKey === 'trend'",
          :formatter="(value) => formatValue(value, 'int')",
          :url="getRowTrendUrl(row, spanIndex)",
        )
        span(
          v-else-if="format === 'difference'",
          :class="differenceClass(value, columnKey)",
        ) {{ shortenValue(formatValue(value, type || currentColumns[columnKey].type, format), columnKey) }}
        template(v-else-if="columnKey !== 'trend'")
          | {{ shortenValue(formatValue(value, type || currentColumns[columnKey].type, format), columnKey) }}
        CellHint(
          v-else-if="subindex === undefined && value >= 0.01 && columnKey in columnDetails",
          :format="columnDetails[columnKey].format",
          :label="shortenValue(formatValue(value, type || currentColumns[columnKey].type, format), columnKey)",
          :title="columnDetails[columnKey].title",
          :url="getColumnDetailsUrl(columnKey, row)",
        )
        template(v-else-if="columnKey !== 'trend'")
          | {{ shortenValue(formatValue(value, type || currentColumns[columnKey].type, format), columnKey) }}
        i.expand-column.fa(
          v-if='canShorten(columnKey, value)',
          @click='() => toggleExpandColumn(columnKey)',
          :class="expandedColumns.includes(columnKey) ? 'fa-compress-alt' : 'fa-expand-alt'",
        )
    template(
      v-if="!!totalRow",
      v-for="(column, columnKey) in currentColumns",
      #[`total(${columnKey})`]="values",
    )
      slot(
        v-bind="{ ...values, row: totalRow, value: totalRow ? [columnKey] : undefined }",
        :name="`total(${columnKey})`"
      )
        template(v-if="columnKey === totalColumnKey") {{ $t('common.label.totalNumber', { total: rowCount ? rowCount : allRows.length }) }}
        CellHint(
          v-else-if="totalRow[columnKey] >= 0.01 && columnKey in columnDetails",
          :format="columnDetails[columnKey].format",
          :label="formatValue(totalRow[columnKey], column.type)",
          :title="columnDetails[columnKey].title",
          :url="getColumnDetailsTotalUrl(columnDetails[columnKey].base_url)",
        )
        template(v-else-if="column.type !== 'string'") {{ formatValue(totalRow[columnKey], column.type) }}
    template(
      v-for="{ column, columnKey, comparisonKey, format, key } in valueColumns",
      #[`total(${key})`]="values",
    )
      slot(
        v-bind="{ ...values, row: totalRow, value: totalRow ? [columnKey] : undefined }",
        :name="`total(${key})`",
      )
        span(
          v-if="format === 'difference'",
          :class="differenceClass(totalComparisonValue(columnKey, comparisonKey), columnKey)",
        ) {{ formattedTotalComparisonValue(columnKey, comparisonKey, format) }}
        CellHint(
          v-else-if="totalRow[columnKey] >= 0.01 && columnKey in columnDetails",
          :format="columnDetails[columnKey].format",
          :label="shortenValue(formatValue(totalRow[columnKey], type || currentColumns[columnKey].type, format), columnKey)",
          :title="columnDetails[columnKey].title",
          :url="columnDetails[columnKey].base_url",
        )
        template(v-else-if="columnKey !== 'trend'") {{ formattedTotalComparisonValue(columnKey, comparisonKey, format) }}
  .loading-overlay(:class="{ visible: loading }")
    LoaderLineScale
</template>

<script>
import axios from 'axios';
import numeral from '../../utils/numeral';
import { cloneObject } from '../../utils/clone';
import CellHint from './CellHint.vue';
import ColumnHint from './ColumnHint.vue';
import DetailsSelector from './DetailsSelector.vue';
import LoaderLineScale from '../image/LoaderLineScale.vue';
import Pagination from './Pagination.vue';
import Table from '../container/Table.vue';
import TrendChart from './TrendChart.vue';

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
export default {
  components: {
    CellHint,
    ColumnHint,
    DetailsSelector,
    LoaderLineScale,
    Pagination,
    Table,
    TrendChart,
  },
  computed: {
    /**
     * Retrieves the list of columns in current column (may differ from columns prop in drag mode)
     */
    currentColumns() {
      return this.currentColumnKeys.reduce(
        (columns, columnKey) => {
          columns[columnKey] = cloneObject(this.columns[columnKey]);

          return columns;
        },
        {},
      );
    },
    /**
     * Retrieves the list of available details modes (ex. daily, weekly, monthly)
     */
    detailsKinds() {
      return this.detailsRequests
        ? Object.keys(this.detailsRequests)
        : undefined;
    },
    /**
     * Retrieves local storage item key to store order info
     */
    orderByKey() {
      return `Table_OrderBy_${location.pathname}`;
    },
    /**
     * Orders rows
     */
    orderedRows() {
      return [...this.allRows]
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
        });
    },
    /**
     * Retrieves local storage item key to store pagination info
     */
    pageSizeKey() {
      return `Table_PageSize_${location.pathname}`;
    },
    /**
     * Retrieves column information used to render rows
     * when subcolumns are enabled
     */
    valueColumns() {
      return Object.entries(this.currentColumns)
        .filter(([_, { colspan, visible }]) => (colspan ?? 1) !== 1 && visible)
        .reduce((valueColumns, [key, column]) => {
          if (this.comparisonColumns) {
            for (let i = 0; i < column.colspan; i++) {
              const comparisonKey = Object.keys(this.comparisonColumns)[i];

              valueColumns.push({
                comparisonKey,
                columnKey: key,
                format: this.comparisonColumns[comparisonKey].format,
                key: `${key}-${comparisonKey}`,
                type: this.comparisonColumns[comparisonKey].type,
              });
            }
          }

          return valueColumns;
        }, []);
    },
    /**
     * Slices rows to current page
     */
    visibleRows() {
      return this.request && !this.fetchedAllRows
        ? this.orderedRows
        : this.orderedRows.slice(
          this.pageNumber * this.pageSize,
          (this.pageNumber + 1) * this.pageSize,
        );
    },
  },
  data() {
    return {
      allRows: [],
      cachedDetailsRows: {},
      coloredMetrics: [],
      columnHintsVisible: {},
      currentColumnKeys: [],
      detailsRows: {},
      expandedColumns: [],
      fetchedAllRows: false,
      loading: true,
      orderBy: undefined,
      pageNumber: 0,
      pageSize: 20,
      rowCount: 0,
      shortenThreshold: 50,
      tableKey: '',
      totalRow: undefined,
    };
  },
  methods: {
    /**
     * Enables metric to be colored
     */
    addColoredMetric(columnKey) {
      if (this.coloredMetrics.includes(columnKey)) {
        return;
      }

      this.coloredMetrics.push(columnKey);
    },
    /**
     * Checks if a value can be shortened/expanded
     */
    canShorten(columnKey, value) {
      if (!this.shortenColumns) {
        return false;
      }

      if (value === null) {
          return false;
      }

      if (!this.shortenColumns.includes(columnKey)) {
        return false;
      }

      return value.length > this.shortenThreshold;
    },
    /**
     * Checks if column has a tooltip
     */
    columnHasTooltip(column) {
      return column.tooltipTitle && column.tooltipContent;
    },
    /**
     * Translates subcolumn label
     */
    comparisonColumn(key) {
      return this.$t(this.comparisonColumns[key].label);
    },
    /**
     * Retrieves difference class used to color difference rows
     */
    differenceClass(value, columnKey) {
      const inversed = this.inversedKpis.includes(columnKey);

      if (value > 0) {
        return inversed ? 'difference-negative' : 'difference-positive';
      } else if (value < 0) {
        return inversed ? 'difference-positive' : 'difference-negative';
      } else {
        return 'difference-neutral';
      }
    },
    /**
     * Retrieves the URL to redirect the user based on row data
     */
    getColumnLinkUrl(columnLinkInfo, row) {
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
    },
    /**
     * Retrieves the URL to fetch row hint data
     */
    getColumnDetailsUrl(columnKey, row) {
      const url = new URL(this.columnDetails[columnKey].base_url, location.origin);

      if (Array.isArray(this.columnDetails[columnKey].columns)) {
        for (const column of this.columnDetails[columnKey].columns) {
          url.searchParams.set(column, row[column]);
        }
      } else {
        for (const [column, alias] of Object.entries(this.columnDetails[columnKey].columns)) {
          url.searchParams.set(alias, row[column]);
        }
      }

      return url.toString();
    },
    /**
     * Returns the URL with "total" parameter.
     */
    getColumnDetailsTotalUrl(base_url) {
        const url = new URL(base_url);
        url.searchParams.set('total', 'true');

        return url.toString();
    },
    /**
     * Formats total value based on subcolumn
     */
    formattedTotalComparisonValue(columnKey, comparisonKey) {
      return this.formatValue(
        this.totalComparisonValue(columnKey, comparisonKey),
        this.comparisonColumns[comparisonKey].type ?? this.columns[columnKey].type,
      );
    },
    /**
     * Retrieves details rows either from memory or by fetching them
     * and then storing them in memory
     */
    async getCachedDetails(kind, row) {
      if (!this.cachedDetailsRows[kind] || !this.cachedDetailsRows[kind][row[this.primaryColumn]]) {
        const { rows } = (await axios({
          ...this.detailsRequests[kind],
          params: {
            [this.primaryColumnAlias ?? this.primaryColumn]: row[this.primaryColumn],
          },
        })).data;

        if (!this.cachedDetailsRows[kind]) {
          this.cachedDetailsRows[kind] = {};
        }

        this.cachedDetailsRows[kind][row[this.primaryColumn]] = Object.values(rows);
      }

      return this.cachedDetailsRows[kind][row[this.primaryColumn]];
    },
    /**
     * Tries to retrieve column tooltip title
     */
    getColumnTooltipTitle(column) {
      return column.tooltipTitle;
    },
    /**
     * Tries to retrieve column tooltip contents
     */
    getColumnTooltipContent(column) {
      return column.tooltipContent;
    },
    /**
     * Gets the index of a column in the list of currently expanded columns
     */
    getExpandedColumnIndex(columnKey) {
      if (!this.shortenColumns) {
        return -1;
      }

      if (!this.shortenColumns.includes(columnKey)) {
        return -1;
      }

      return this.expandedColumns.indexOf(columnKey);
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
        default:
          return value;
      }
    },
    /**
     * Retrieves URL to fetch trend chart data
     */
    getRowTrendUrl(row, urlKey) {
      const url = new URL(
        urlKey
          ? this.trendUrl[urlKey]
          : this.trendUrl,
        location.origin,
      );

      url.searchParams.set(
        this.primaryColumnAlias ?? this.primaryColumn,
        row[this.primaryColumn],
      );

      return url.toString();
    },
    /**
     * Gets classes for a row value
     */
    getValueClass(columnKey, value, detailable) {
      if (this.canShorten(columnKey, value)) {
        return [];
      } else if (
        detailable &&
        (
          this.detailsColumn === columnKey ||
          (
            this.shortenColumns &&
            this.shortenColumns.includes(columnKey) &&
            this.visibleRows.some((row) => this.canShorten(columnKey, row[columnKey]))
          )
        )
      ) {
        return ['flex-grow-1', 'text-left'];
      } else {
        return ['flex-grow-1'];
      }
    },
    /**
     * Formats a value based on its column type
     */
    formatValue(value, type, format) {
      let rawValue = this.getRawValue(value, type);

      switch (type) {
        case 'float':
          return numeral(parseFloat(rawValue)).format('0,0.00');
        case 'int':
          return numeral(parseInt(rawValue)).format('0,0');
        case 'money':
          let formatString = '0,0';

          if (this.clientCurrencyDecimal > 0) {
            formatString += '.' + '0'.repeat(this.clientCurrencyDecimal);
          }

          const formattedValue = numeral(parseFloat(rawValue)).format(formatString);

          if (this.clientCurrencySymbolPrefix) {
            return this.clientCurrencySymbol + ' ' + formattedValue;
          } else {
            return formattedValue + ' ' + this.clientCurrencySymbol;
          }
        case 'money_capped':
          const willBeRoundedToZero = (parseFloat(rawValue.toFixed(this.clientCurrencyDecimal)) == 0);

          if (rawValue > 0 && rawValue < 1 && willBeRoundedToZero) {
            const formattedValue = (this.clientCurrencyDecimal === 0) ?
                1 :
                parseFloat('0.' + '0'.repeat(this.clientCurrencyDecimal - 1) + '1');

            return this.clientCurrencySymbolPrefix ?
                `< ${this.clientCurrencySymbol} ${formattedValue}` :
                `< ${formattedValue} ${this.clientCurrencySymbol}`;
          } else {
            return this.formatValue(value, 'money', format);
          }
        case 'percent':
          let percent = numeral(parseFloat(rawValue)).format('0,0.00') + '%';

          if (format === 'difference') {
            if (rawValue > 0) {
              percent = `+${percent}`;
            }
          }

          return percent;
        case 'time':
          return `${this.formatValue(Math.floor(parseInt(rawValue) / 60), 'int')}mn${this.formatValue(parseInt(rawValue) % 60, 'int')}s`;
        default:
          return rawValue;
      }
    },
    isColumnLinkable(row, columnKey) {
      if (!this.columnLinks) {
        return false;
      }
      if (!(columnKey in this.columnLinks)) {
        return false;
      }
      if ('disable_for' in this.columnLinks[columnKey]) {
        if (this.columnLinks[columnKey].disable_for.includes(row[this.primaryColumn])) {
          return false;
        }
      }
      return true;
    },
    onColumnMove(from, to) {
      const [column] = this.currentColumnKeys.splice(from, 1);

      this.currentColumnKeys.splice(to, 0, column);

      this.$emit('move:column', { from, to });
    },
    /**
     * Reloads table with the possibility to both keep current rows or force to fetch them
     */
    reloadTable(simpleReload, forceFetch = false) {
      if (forceFetch) {
        this.previousRequest = undefined;

        this.setRows();
      } else {
        simpleReload();
      }
    },
    /**
     * Disables metric from being colored
     */
    removeColoredMetric(columnKey) {
      const index = this.coloredMetrics.indexOf(columnKey);

      if (index < 0) {
        return;
      }

      this.coloredMetrics.splice(index, 1);
    },
    setColumnHintVisible(columnKey, visible) {
      this.$set(this.columnHintsVisible, columnKey, visible);
    },
    /**
     * Shortens value if it is enabled to be shortened
     */
    shortenValue(value, columnKey) {
      if (!this.shortenColumns) {
        return value;
      }

      if (value === null) {
          return value;
      }

      if (!this.shortenColumns.includes(columnKey)) {
        return value;
      }

      if (this.expandedColumns.includes(columnKey)) {
        return value;
      }

      if (value.length <= this.shortenThreshold) {
        return value;
      }

      return `${value.substring(0, this.shortenThreshold - 3)}...`;
    },
    /**
     * Removes detailed rows (keeps them in memory)
     */
    onHideDetails(row) {
      const scroll = {
        left: this.$refs['table'].$el.scrollLeft,
        top: this.$refs['table'].$el.scrollTop,
      };

      delete this.detailsRows[row[this.primaryColumn]];

      this.reloadTable();

      this.$nextTick(() => {
        this.$refs['table'].$el.scrollTo(scroll);
      });
    },
    /**
     * Shows detailed rows
     */
    async onShowDetails(kind, row) {
      const scroll = {
        left: this.$refs['table'].$el.scrollLeft,
        top: this.$refs['table'].$el.scrollTop,
      };

      this.loading = true;

      this.detailsRows[row[this.primaryColumn]] = await this.getCachedDetails(kind, row);

      this.reloadTable();

      this.$nextTick(() => {
        this.$refs['table'].$el.scrollTo(scroll);

        this.loading = false;
      });
    },
    /**
     * Reloads the table by updating its unique key
     */
    reloadTable() {
      this.tableKey = Math.random() * Number.MAX_VALUE;
    },
    /**
     * Retrieves initial ordering information
     */
    async setOrderBy(fetchRows = false) {
      await this.setOrderByFromLocalStorage(fetchRows)
        || await this.setOrderByFromDataTables(fetchRows)
        || await this.setOrderByFromDefault(fetchRows);
    },
    /**
     * Tries to retrieve ordering information
     * from DataTables local storage info
     */
    async setOrderByFromDataTables(fetchRows) {
      const datatablesConfiguration = (() => {
        for (const key in localStorage) {
          if (!key.startsWith('DataTables_')) {
            continue;
          }

          const path = key.substring(key.indexOf('/'));

          if (location.pathname === path) {
            return JSON.parse(localStorage.getItem(key));
          }
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

      const orderBy = lastDelimiter === -1
        ? [
          [datatablesConfiguration.order[0][0]],
          datatablesConfiguration.order[0][1] === 'desc',
        ]
        : [
          [
            datatablesConfiguration.order[0][0].substring(0, lastDelimiter),
            datatablesConfiguration.order[0][0].substring(lastDelimiter + 1),
          ],
          datatablesConfiguration.order[0][1] === 'desc',
        ];

      await this.updateOrderBy(orderBy, false, fetchRows);

      return true;
    },
    /**
     * Retrieves default ordering information
     */
    async setOrderByFromDefault(fetchRows) {
      if (this.defaultOrderBy) {
        await this.updateOrderBy(this.defaultOrderBy, false, fetchRows);
      } else {
        const [firstColumnKey, { colspan }] = Object.entries(this.columns)
          .find(([_, { visible }]) => visible);

        if (colspan !== -1) {
          await this.updateOrderBy([
            [
              firstColumnKey,
              this.comparisonColumns
                ? Object.keys(this.comparisonColumns)[0]
                : 0,
            ],
            false,
            fetchRows,
          ]);
        } else {
          await this.updateOrderBy([[firstColumnKey], false], false, fetchRows);
        }
      }
    },
    /**
     * Tries to retrieve ordering information from local storage
     */
    async setOrderByFromLocalStorage(fetchRows) {
      const orderBy = localStorage.getItem(this.orderByKey);

      if (orderBy) {
        await this.updateOrderBy(JSON.parse(orderBy), false, fetchRows);

        return true;
      } else {
        return false;
      }
    },
    /**
     * Sets page number
     */
    async setPageNumber(pageNumber) {
      await this.setRows(pageNumber);

      this.pageNumber = pageNumber;
    },
    /**
     * Sets page size
     */
    async setPageSize(pageSize) {
      if (pageSize === undefined) {
        const savedPageSize = localStorage.getItem(this.pageSizeKey);

        if (savedPageSize) {
          this.pageSize = parseInt(savedPageSize);
        }
      } else {
        localStorage.setItem(this.pageSizeKey, pageSize.toString());

        await this.setRows(0, pageSize);

        this.pageNumber = 0;
        this.pageSize = pageSize;
      }
    },
    /**
     * Updates rows to be displayed
     * 
     * Use this method when either page number, page size
     * or ordering is updated
     */
    async setRows(pageNumber, pageSize, orderBy) {
      if (pageNumber === undefined) {
        pageNumber = this.pageNumber;
      }
      if (pageSize === undefined) {
        pageSize = this.pageSize;
      }
      if (orderBy === undefined) {
        orderBy = this.orderBy;
      }

      this.loading = true;

      if (!this.setRowsFromStatic()) {
        await this.setRowsFromRequest(pageNumber, pageSize, orderBy);
      }

      this.loading = false;
    },
    /**
     * Fetches rows by API
     */
    async setRowsFromRequest(pageNumber, pageSize, orderBy) {
      if (!this.request) {
        return false;
      }

      if (
        this.previousRequest
        && JSON.stringify(this.request) === JSON.stringify(this.previousRequest)
        && this.fetchedAllRows
      ) {
        return true;
      }

      const url = new URL(this.request.url, window.location.origin);
      const params = {
        ...(this.request.params ?? {}),
        page_number: pageNumber,
        page_size: pageSize,
        order: orderBy[0],
        reversed: orderBy[1],
      };

      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          url.searchParams.append(`${key}[]`, value);
        } else {
          url.searchParams.set(key, value);
        }
      });

      const {
        detailed_rows: detailedRows,
        paginated,
        row_count: rowCount,
        rows,
        total,
      } = (await axios({
        ...this.request,
        url: url.toString(),
      })).data;

      this.allRows = Object.values(rows);
      this.fetchedAllRows = paginated === false;
      this.rowCount = rowCount;

      if (detailedRows) {
        this.detailsRows = detailedRows;
      } else {
        this.detailsRows = {};
      }

      if (total) {
        this.totalRow = total;
      }

      this.previousRequest = JSON.parse(JSON.stringify(this.request));

      return true;
    },
    /**
     * Fetches static rows
     */
    setRowsFromStatic() {
      if (this.rows) {
        this.allRows = Object.values(this.rows);
        this.rowCount = this.allRows.length;

        return true;
      }

      return false;
    },
    /**
     * Tries to translate a key, returns undefined on fail
     */
    strictTranslate(key) {
      const value = this.$t(key);

      return value === key
        ? undefined
        : value;
    },
    /**
     * Enables/disables values of a column to be shortened
     */
    toggleExpandColumn(columnKey) {
      if (!this.shortenColumns) {
        return;
      }

      if (!this.shortenColumns.includes(columnKey)) {
        return;
      }

      const index = this.getExpandedColumnIndex(columnKey);

      if (index >= 0) {
        this.expandedColumns.splice(index, 1);
      } else {
        this.expandedColumns.push(columnKey);
      }
    },
    /**
     * Gets total value for a subcolumn
     */
    totalComparisonValue(columnKey, comparisonKey) {
      return this.totalRow[columnKey][comparisonKey];
    },
    /**
     * Updates order by
     */
    async updateOrderBy(orderBy, save = true, fetchRows = true) {
      // Always set to first page when changing ordering
      this.pageNumber = 0;

      if (fetchRows) {
        await this.setRows(undefined, undefined, orderBy);
      }

      this.orderBy = orderBy;

      if (save) {
        localStorage.setItem(this.orderByKey, JSON.stringify(orderBy));
      }
    }
  },
  mounted() {
    this.currentColumnKeys = Object.keys(this.columns);

    this.totalRow = this.total;
    Promise.all([
      this.setOrderByFromDefault(false),
      this.setPageSize(),
    ])
      .then(() => this.setOrderBy(true));
  },
  props: {
    /**
     * Additional cell classes with className as a key
     * E.g.: { 'align-left': true, 'height-100': true }
     */
    cellClasses: {
      type: Object,
      default: () => ({}),
    },
    /**
     * Number of digits in currency fractional part
     */
    clientCurrencyDecimal: {
      type: Number,
      default: 0,
    },
    /**
     * Currency symbol for money related columns
     */
    clientCurrencySymbol: {
      type: String,
      default: '',
    },
    /**
     * Place currency symbol before the value
     */
    clientCurrencySymbolPrefix: {
      type: Boolean,
      default: true,
    },
    /**
     * Are canceled orders displayed, used for the tooltip.
     */
    clientShowCancel: {
      type: Boolean,
      default: false
    },
    /**
     * Enables possibility to color metrics
     */
    colorMetrics: {
      type: Boolean,
      default: false,
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
     * Fetches detailed data by a KPI
     *
     * Format:
     * - {
     *     base_url: string,
     *     columns: array|object,
     *     format: 'distribution'|'rated_distribution',
     *     title?: string,
     *   }
     * - Base URL will be called with some ID when detailed data is requested
     *   by a data in the table rows. ID will not be sent when requested for
     *   the total row
     * - Columns is a list or a mapping of columns to give when building a URL for a row
     * - Format is the strategy in which to read and display the fetched data
     * - Title will be shown in the header of the popover
     */
    columnDetails: {
      type: Object,
      default: () => ({}),
    },
    /**
     * Enables URL redirections for certain columns
     * 
     * Format:
     * - { column_name: ColumnLinkInfo, ... }
     * - ColumnLinkInfo:
     *   - url: string
     *   - columns: string[] // List of columns values of which to push to the URL
     *   - disable_for: (int|string)[] // List of primary key values for which to disable links
     */
    columnLinks: {
      type: Object,
      required: false,
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
     * Default ordering. Example: [name, false]
     * will order by name in ascending direction
     */
    defaultOrderBy: {
      type: Array,
      required: false,
    },
    /**
     * Column on which to show the details dropdown
     */
    detailsColumn: {
      type: String,
      required: false,
    },
    /**
     * Mapping of details kind to the URL which to call
     * Example: { daily: '/api/data/daily', ... }
     */
    detailsRequests: {
      type: Object,
      required: false,
    },
    /**
     * Allows to drag columns inside the table.
     * If enabled will emit 'move:column' event when column is moved to a new place
     */
    dragColumns: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines how many columns should be fixed
     */
    fixedColumnNumber: {
      type: Number,
      default: 1,
    },
    /**
     * Provides the list of negative KPIs. This list is used for coloring metrics
     */
    inversedKpis: {
      type: Array,
      required: false,
    },
    /**
     * Primary column which is used for detailed rows
     */
    primaryColumn: {
      type: [Number, String],
      default: 'id',
    },
    /**
     * Primary column alias. By default the same as primaryColumn
     */
    primaryColumnAlias: {
      type: [Number, String],
      required: false,
    },
    /**
     * The URL which to call to fetch the rows.
     * 
     * Don't use with static rows being provided
     */
    request: {
      type: Object,
      required: false,
    },
    /**
     * Static rows to display
     * 
     * Don't use with request URL being provided
     */
    rows: {
      type: [Array, Object],
      required: false,
    },
    /**
     * Provides the list of columns which contents can be shortened
     */
    shortenColumns: {
      type: Array,
      required: false,
    },
    /**
     * Enables the display of row number
     */
    showRowNumber: {
      type: Boolean,
      default: true,
    },
    /**
     * Enables the display of pagination
     */
    showPagination: {
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
     * Total row info
     */
    total: {
      type: Object,
      required: false,
    },
    /**
     * Column where to show Total
     */
    totalColumnKey: {
      type: String,
      default: undefined,
    },
    /**
     * The URL which to call to get the trend chart data
     */
    trendUrl: {
      type: [String, Object],
      required: false,
    },
    /**
     * Type of column currently used to order the table.
     *
     * This column can be outside of table column list
     * (ex. when we have fixed and scrollable tables)
     */
    orderColumnType: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.common-table {
  position: relative;
}

.table {
  overflow-y: scroll;
}

.column-link {
  color: $color-active;
}

.details-selector {
  margin-left: 1rem;
}

.difference-negative {
  color: $color-negative;
}

.difference-positive {
  color: $color-positive;
}

.expand-column {
  color: $color-active;
  cursor: pointer;
  margin-left: 0.5rem;
}

.loading-overlay {
  align-items: center;
  background: rgba(white, 0.5);
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
