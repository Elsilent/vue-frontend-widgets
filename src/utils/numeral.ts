import numeral from 'numeral';

// Set defaults for numeral
numeral.localeData().delimiters.thousands = ' ';
numeral.localeData().delimiters.decimal = ',';

export default numeral;
