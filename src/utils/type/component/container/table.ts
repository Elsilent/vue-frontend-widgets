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
  label: string;
  rowspan?: number;
  tooltipTitle?: string;
  tooltipDescription?: string;
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

export interface GlobalRequestOptions {
  inlineFilters: Record<string, InlineFilter>;
  pageNumber: number;
  pageSize: number;
  orderBy: string[];
  reversed: boolean;
}

export interface DetailsRequestOptions {
  primaryColumn: string;
  primaryColumnValue: string;
  row: Record<string, any>;
}

export interface DetailsResponse {
  rows: Record<string, Record<string, any>> | Record<string, any>[];
}

export interface GlobalResponse {
  detailedRows: Record<string, Record<string, any>>;
  paginated?: boolean;
  rowCount: number;
  rows: Record<string, Record<string, any>> | Record<string, any>[];
  total: Record<string, any>;
}
