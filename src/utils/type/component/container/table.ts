import type { AxiosRequestConfig } from 'axios';

export type ColumnType =
  | 'string'
  | 'int'
  | 'float'
  | 'date'
  | 'money'
  | 'money_capped'
  | 'percent'
  | 'time';

export interface Column {
  baseUrl?: string;
  colspan?: number;
  fixed?: boolean;
  group?: string;
  label: string;
  rowspan?: number;
  tooltipTitle?: string;
  tooltipContent?: string;
  totalUrl?: string;
  type: ColumnType;
  visible: boolean;
}

export interface ComparisonColumn {
  label: string;
  format?: 'difference';
  type?: ColumnType;
}

export type ColumnDetailsFormat = 'distribution' | 'rated_distribution';

/**
 * Details for a cell with a hint
 * 
 * Base URL will be called with some ID when detailed data is requested
 * by a data in the table rows. ID will not be sent when requested for
   the total row.
 *
 * Columns is a list or a mapping of columns to give when building a URL for a row.
 *
 * Format is the strategy in which to read and display the fetched data.
 *
 * - Title will be shown in the header of the popover
 */
export interface ColumnDetails {
  baseUrl: string;
  columns: Record<string, string> | string[];
  format: ColumnDetailsFormat;
  title?: string;
  totalUrl?: string;
}

export interface InlineFilter {
  operator: string;
  value: string;
}

export type DetailsRequestInfo =
  | AxiosRequestConfig
  | ((options: DetailsRequestOptions) => Promise<DetailsResponse>);

export interface DetailsRequestOptions {
  primaryColumn: string;
  primaryColumnValue: string;
  row: Record<string, any>;
}

export interface DetailsResponse {
  rows: Record<string, Record<string, any>> | Record<string, any>[];
}

export type GlobalRequestInfo =
  | AxiosRequestConfig
  | ((options: GlobalRequestOptions) => Promise<GlobalResponse>);

export interface GlobalRequestOptions {
  inlineFilters: Record<string, InlineFilter>;
  pageNumber: number;
  pageSize: number;
  orderBy: string[];
  reversed: boolean;
}

export interface GlobalResponse {
  detailedRows: Record<string, Record<string, any>>;
  paginated?: boolean;
  row_count: number;
  rows: Record<string, Record<string, any>> | Record<string, any>[];
  total: Record<string, any>;
}

export interface IntersectionResponse {
  columns: Record<string, Column>;
  rows: Record<string, Record<string, any>> | Record<string, any>[];
}

export function mergeComparisonRow(
  originalRow: Record<string, any>,
  comparisonRow: Record<string, any> | undefined,
  columns: Record<string, Column>,
) {
  const mergedRow: Record<string, any> = {};

  for (const [columnKey, originalValue] of Object.entries(originalRow)) {
    if (!(columnKey in columns)) {
      continue;
    }

    if ((columns[columnKey].colspan ?? 0) > 1) {
      const comparisonValue = comparisonRow ? comparisonRow[columnKey] : undefined;
      let differenceValue;
      if (comparisonValue === undefined) {
        differenceValue = 100;
      } else if (originalValue === 0) {
        differenceValue = -100;
      } else {
        differenceValue = ((originalValue - comparisonValue) / originalValue) * 100;
      }

      mergedRow[columnKey] = {
        original: originalValue,
        comparison: comparisonValue ?? 0,
        difference: differenceValue,
      };
    } else {
      mergedRow[columnKey] = originalValue;
    }
  }

  return mergedRow;
}

export function mergeComparisonData(
  original: Record<string, Record<string, any>> | Record<string, any>[],
  comparison: Record<string, Record<string, any>> | Record<string, any>[],
  columns: Record<string, Column>,
  primaryColumn: string,
) {
  const mergedData: Record<string, Record<string, any>> = {};

  for (const originalRow of Object.values(original)) {
    const primaryValue = originalRow[primaryColumn];

    const comparisonRow = Object.values(comparison).find(
      (comparisonRow) => comparisonRow[primaryColumn] === primaryValue,
    );

    mergedData[primaryValue] = mergeComparisonRow(originalRow, comparisonRow, columns);
  }

  return mergedData;
}
