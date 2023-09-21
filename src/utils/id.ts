/* eslint no-console:0 */
'use strict';

/**
 * Generates a unique ID consisting of an underscore followed by a random alphanumeric string.
 *
 * @returns {string} - A unique ID.
 *
 * @example
 * // Generate a unique ID
 * const id = uniqueID();
 * console.log(id); // Example output: "_abc123def"
 */
export const uniqueID = (): string =>
  '_' + Math.random().toString(36).substring(2, 11);
