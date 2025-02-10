/* node:coverage disable */
/* eslint no-console:0 */
/**
 * Converts a number to a string with a specified number of decimal places.
 *
 * @param {string | number} number - The number to convert.
 * @param {number} decimals - The number of decimal places (default is 3).
 * @returns {string} - The formatted number as a string.
 *
 * @example
 * ```ts
 * // Convert a number to a string with 2 decimal places
 * const formattedNumber = decimal(12.3456, 2); // "12.34"
 * ```
 */
/* node:coverage enable */
export const decimal = (number: string | number, decimals = 3): string =>
  parseFloat(String(number)).toFixed(decimals);
