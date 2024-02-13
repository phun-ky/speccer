/* eslint-disable import/no-unused-modules */
/**
 * Checks if the given variable is a string.
 *
 * @param {unknown} variable - The variable to check.
 * @returns {boolean} True if the variable is a string, false otherwise.
 */
export const isString = (variable: unknown): boolean => typeof variable === 'string';

/**
 * Checks if the given variable is not a string.
 *
 * @param {unknown} variable - The variable to check.
 * @returns {boolean} True if the variable is not a string, false otherwise.
 */
export const isNotString = (variable: unknown): boolean => !isString(variable);

/**
 * Checks if the given variable is a number.
 *
 * @param {unknown} variable - The variable to check.
 * @returns {boolean} True if the variable is a number, false otherwise.
 */
export const isNumber = (variable: unknown): boolean => typeof variable === 'number';

/**
 * Checks if the given variable is not a number.
 *
 * @param {unknown} variable - The variable to check.
 * @returns {boolean} True if the variable is not a number, false otherwise.
 */
export const isNotNumber = (variable: unknown): boolean => !isNumber(variable);

/**
 * Checks if the given variable is a boolean.
 *
 * @param {unknown} variable - The variable to check.
 * @returns {boolean} True if the variable is a boolean, false otherwise.
 */
export const isBoolean = (variable: unknown): boolean => typeof variable === 'boolean';

/**
 * Checks if the given variable is not a boolean.
 *
 * @param {unknown} variable - The variable to check.
 * @returns {boolean} True if the variable is not a boolean, false otherwise.
 */
export const isNotBoolean = (variable: unknown): boolean => !isBoolean(variable);

/**
 * Checks if the given variable is undefined.
 *
 * @param {unknown} variable - The variable to check.
 * @returns {boolean} True if the variable is undefined, false otherwise.
 */
export const isUndefined = (variable: unknown): boolean => typeof variable === 'undefined';

/**
 * Checks if the given variable is not undefined.
 *
 * @param {unknown} variable - The variable to check.
 * @returns {boolean} True if the variable is not undefined, false otherwise.
 */
export const isNotUndefined = (variable: unknown): boolean => !isUndefined(variable);
