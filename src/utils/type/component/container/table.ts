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
  colspan?: number;
  label: string;
  rowspan?: number;
  type: ColumnType;
  visible: boolean;
}
