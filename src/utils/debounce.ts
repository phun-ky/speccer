/* eslint @typescript-eslint/no-explicit-any: ["error", { "fixToUnknown": true }] */
'use strict';

import { DebounceAnyFunctionType } from '../types/debounce';

/**
 * Creates a debounced version of a function that delays its execution until after a specified waiting time has elapsed since the last time the debounced function was invoked.
 *
 * @param {DebounceAnyFunctionType} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to wait before invoking the function after the last call.
 * @param {boolean} [immediate=false] - If `true`, the function is invoked immediately after the first call.
 * @returns {DebounceAnyFunctionType} - The debounced function.
 *
 * @example
 * ```ts
 * // Create a debounced function
 * const debouncedFn = debounce((value) => {
 *   console.log(value);
 * }, 500);
 *
 * // Call the debounced function
 * debouncedFn('Hello'); // This will not trigger immediate execution
 * debouncedFn('World'); // This will trigger immediate execution
 * ```
 */
const debounce = (
  func: DebounceAnyFunctionType,
  wait: number,
  immediate = false
): DebounceAnyFunctionType => {
  let timeout: null | ReturnType<typeof setTimeout>;

  return function (context: unknown, ...args: unknown[]): void {
    const later = function (): void {
      timeout = null;

      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

export default debounce;
