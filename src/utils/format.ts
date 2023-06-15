import numeral from 'numeral';

const localeOptions = {
  ...numeral.localeData(),
  delimiters: {
    decimal: ',',
    thousands: ' ',
  },
};

if ('fr' in numeral.locales) {
  numeral.locales.fr = localeOptions;
} else {
  numeral.register('locale', 'fr', localeOptions);
}

numeral.locale('fr');

export default {
  float: (value: number) => numeral(value).format('0,0.00'),
  integer: (value: number) => numeral(value).format('0,0'),
  money: (value: number, symbol: string, fractionSize: number, prefix: boolean) => {
    let format = '0,0';

    if (fractionSize > 0) {
      format += `.${'0'.repeat(fractionSize)}`;
    }

    return numeral(value).format(prefix ? `${symbol} ${format}` : `${format} ${symbol}`);
  },
  proportion: (value: number) => numeral(value).format('0,0.00%'),
};
