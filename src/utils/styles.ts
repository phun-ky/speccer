/* eslint no-console:0 */
'use strict';
import { waitForFrame } from './wait';

/**
 * Adds CSS styles to an HTMLElement.
 *
 * @param {HTMLElement} el - The HTMLElement to apply styles to.
 * @param {object | Array<{ key: string; value: string }>} styles - An object or an array of objects containing CSS styles to apply.
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
export const add = async (
  el: HTMLElement,
  styles: object | Array<{ key: string; value: string }>
): Promise<void> => {
  if (
    !el ||
    !styles ||
    typeof styles === 'string' ||
    typeof styles === 'number' ||
    typeof styles === 'boolean' ||
    (Array.isArray(styles) && styles.length === 0) ||
    (Object.keys(styles).length === 0 && styles.constructor === Object)
  ) {
    return;
  }

  await waitForFrame();

  if (Array.isArray(styles)) {
    styles.forEach(
      (style: { key: string; value: string }) =>
        (el.style[style.key] = style.value)
    );
  } else {
    Object.keys(styles).forEach((key) => (el.style[key] = styles[key]));
  }
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
export const get = async (el: HTMLElement): Promise<CSSStyleDeclaration> => {
  await waitForFrame();

  return getComputedStyle(el, null);
};
