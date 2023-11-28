export interface Currency {
  code: string;
  fractionSize: number;
  prefix: boolean;
  symbol: string;
}

export interface LabeledCurrency extends Currency {
  label: string;
}
