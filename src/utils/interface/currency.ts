export interface Currency {
  code: string;
  decimal: number;
  prefix: boolean;
  symbol: string;
}

export interface LabeledCurrency extends Currency {
  label: string;
}
