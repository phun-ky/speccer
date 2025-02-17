/* eslint no-console:0 */
import { isBoolean, isNumber, isString } from './typeof';
import { waitForFrame } from './wait';

/* node:coverage disable */
/**
 * Adds CSS styles to an HTMLElement.
 *
 * @param {HTMLElement} el - The HTMLElement to apply styles to.
 * @param {object | { key: string; value: string }[]} styles - An object or an array of objects containing CSS styles to apply.
 * @returns {Promise<void>} - A Promise that resolves after styles are applied.
 *
 * @example
 * ```ts
 * // Apply styles as an object
 * const element = document.getElementById('my-element');
 * await add(element, { color: 'red', fontSize: '16px' });
 *
 * // Apply styles as an array of objects
 * const styles = [
 *   { key: 'color', value: 'blue' },
 *   { key: 'backgroundColor', value: 'yellow' }
 * ];
 * await add(element, styles);
 * ```
 */
/* node:coverage enable */
export const add = async (
  el: HTMLElement,
  styles: object | { key: string; value: string }[]
): Promise<void> => {
  if (
    !el ||
    !styles ||
    isString(styles) ||
    isNumber(styles) ||
    isBoolean(styles) ||
    (Array.isArray(styles) && !styles.length) ||
    (!Object.keys(styles).length && styles.constructor === Object)
  )
    return;

  await waitForFrame();

  if (Array.isArray(styles)) {
    styles = styles.reduce((acc, st) => {
      acc[st.key] = st.value;

      return acc;
    }, {});
  }

  Object.assign(el.style, styles);
};

/**
 * Gets the computed CSS styles of an HTMLElement.
 *
 * @param {HTMLElement} el - The HTMLElement to get computed styles from.
 * @returns {Promise<CSSStyleDeclaration>} - A Promise that resolves with the computed CSS styles.
 *
 * @example
 * ```ts
 * // Get computed styles of an element
 * const element = document.getElementById('my-element');
 * const computedStyles = await get(element);
 * console.log(computedStyles.color); // Logs the color property value
 * ```
 */
/* node:coverage enable */
export const get = async (
  el: HTMLElement
): Promise<Partial<CSSStyleDeclaration>> => {
  await waitForFrame();

  return getComputedStyle(el, null);
};
