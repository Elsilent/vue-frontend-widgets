export interface Currency {
  code: string;
  fractionSize: number;
  symbol: string;
  symbolBeforeValue?: boolean;
}

export interface LabeledCurrency extends Currency {
  label: string;
}
