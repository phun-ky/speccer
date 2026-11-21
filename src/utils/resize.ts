import { SpeccerFunctionType } from '../types/speccer';

/**
 * The currently attached resize listener, kept so it can be removed again.
 */
let _on_resize: (() => void) | undefined;
/**
 * The redraw waiting for resizing to stop, kept so it can be cancelled.
 */
let _timeout: ReturnType<typeof setTimeout> | undefined;

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
  deactivate();

  _on_resize = () => {
    clearTimeout(_timeout);
    _timeout = setTimeout(() => speccer(), 300);
  };

  window.addEventListener('resize', _on_resize);
};

/* node:coverage disable */
/**
 * Removes the resize listener added by `activate()`, and cancels a redraw that
 * is waiting for resizing to stop.
 *
 * @example
 * ```ts
 * deactivate();
 * ```
 */
/* node:coverage enable */
export const deactivate = (): void => {
  if (_on_resize) window.removeEventListener('resize', _on_resize);

  clearTimeout(_timeout);
  _on_resize = undefined;
  _timeout = undefined;
};
