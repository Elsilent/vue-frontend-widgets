export type FieldType = 'dropdown' | 'info' | 'input';

export interface Field {
  label?: string;
  options?: any;
  type: FieldType;
}
