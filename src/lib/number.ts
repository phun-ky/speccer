/* eslint no-console:0 */
'use strict';

export const decimal = (number: string | number, decimals = 3): string =>
  parseFloat(number + '').toFixed(decimals);
