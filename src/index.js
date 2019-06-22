import './index.css'
import numeral from 'numeral';

/* eslint-disable no-console */

const numeralValue = numeral(1000).format('$,00.0');
console.log(`Parsed Numerals ${numeralValue}`);
