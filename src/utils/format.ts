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
  money: (value: number, symbol: string, decimal: number, prefix: boolean) => {
    let format = '0,0';

    if (decimal > 0) {
      format += `.${'0'.repeat(decimal)}`;
    }

    const formattedValue = numeral(value).format(format);

    return prefix ? `${symbol} ${formattedValue}` : `${formattedValue} ${symbol}`;
  },
  proportion: (value: number) => numeral(value).format('0,0.00%'),
  percent: (value: number) => numeral(value / 100).format('0,0.00%'),
};
