import { DebounceAnyFunctionType } from '../types/debounce';
import { SpeccerFunctionType } from '../types/speccer';

import debounce from './debounce';

/**
 * The currently attached resize listener, kept so it can be removed again.
 */
let speccerEventFunc: DebounceAnyFunctionType | undefined;

/* node:coverage disable */
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
/* node:coverage enable */
export const activate = (speccer: SpeccerFunctionType): void => {
  // Remove the previous resize event listener to prevent duplicates
  if (speccerEventFunc) window.removeEventListener('resize', speccerEventFunc);

  speccerEventFunc = debounce(() => {
    speccer();
  }, 300);

  // Add the debounced resize event listener
  window.addEventListener('resize', speccerEventFunc);
};
