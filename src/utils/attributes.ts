/* eslint no-console:0 */
import { AttributesMapInterface } from '../types/interfaces/attributes';

/**
 * Sets attributes on an HTML element.
 *
 * @param el - The HTML element to set attributes on.
 * @param attrs - The attributes to set as a key-value mapping.
 *
 * @example
 * ```ts
 * const element = document.getElementById('myElement');
 * setAttributes(element, {
 *   'class': 'active',
 *   'data-value': '123',
 * });
 * ```
 */
export const setAttributes = (
  el: HTMLElement,
  attrs?: AttributesMapInterface
) => {
  if (!el) return;

  if (!attrs) return;

  for (const key of Object.keys(attrs)) {
    el.setAttribute(key, attrs[key]);
  }
};

/**
 * Removes attributes from an HTML element.
 *
 * @param el - The HTML element to remove attributes from.
 * @param attrs - The attributes to remove as a key-value mapping.
 *
 * @example
 * ```ts
 * const element = document.getElementById('myElement');
 * removeAttributes(element, ['class', 'data-value']);
 * ```
 */
export const removeAttributes = (el: HTMLElement, attrs?: string[]) => {
  if (!el) return;

  if (!attrs) return;

  for (const key of attrs) {
    el.removeAttribute(key);
  }
};
