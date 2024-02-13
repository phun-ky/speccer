import { SpeccerFunctionType } from '../types/speccer';

import debounce from './debounce';

/**
 * Attaches a debounced event listener to the window's resize event that triggers the provided function.
 *
 * @param {SpeccerFunctionType} speccer - The function to trigger when the window is resized.
 *
 * @example
 * ```ts
 * // Define a function to be triggered on window resize
 * const mySpeccer = () => {
 *   // Your logic here
 *   console.log('Window resized');
 * };
 *
 * // Activate the debounced event listener
 * activate(mySpeccer);
 * ```
 */
export const activate = (speccer: SpeccerFunctionType): void => {
  /**
   * The debounced event listener function.
   * @type {Function}
   */
  const speccerEventFunc = () =>
    debounce(() => {
      speccer();
    }, 300);

  // Remove any existing resize event listeners to prevent duplicates
  window.removeEventListener('resize', speccerEventFunc);

  // Add the debounced resize event listener
  window.addEventListener('resize', speccerEventFunc);
};
