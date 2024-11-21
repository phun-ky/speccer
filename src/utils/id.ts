/* node:coverage disable */
/* eslint no-console:0 */
/**
 * Generates a unique ID consisting of an underscore followed by a random alphanumeric string.
 *
 * @returns {string} - A unique ID.
 *
 * @example
 * ```ts
 * // Generate a unique ID
 * const id = uniqueID();
 * console.log(id); // Example output: "_abc123def"
 * ```
 */
/* node:coverage enable */
export const uniqueID = (): string =>
  '_' + Math.random().toString(36).substring(2, 11);
