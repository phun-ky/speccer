/* eslint no-console:0 */
import {
  ClassNamesFirstArgType,
  ClassNamesSecondArgType
} from '../types/interfaces/classnames';

import { isNotString } from './typeof';

/**
 * Add CSS classes to an HTML element.
 *
 * @param {HTMLElement} el - The HTML element to which classes should be added.
 * @param {string} cls - The CSS classes to add, separated by spaces.
 * @param {string} [avoid='noop'] - Classes to avoid adding.
 * @returns {void}
 * @example
 * ```ts
 * // Add classes to an HTML element
 * const element = document.getElementById('example');
 * set(element, 'class1 class2');
 * ```
 */
export const set = (
  el: HTMLElement,
  cls: string,
  avoid: string = 'noop'
): void => {
  if (!el) return;

  if (!cls || (cls && !cls.length)) return;

  const preparedClassNames = cls
    .trim()
    .split(' ')
    .filter((cl) => cl !== avoid)
    .filter((cl) => cl !== '')
    .map((cl) => cl.trim());

  el.classList.add(...preparedClassNames);
};

/**
 * Toggle CSS classes on an HTML element.
 *
 * @param {HTMLElement} el - The HTML element on which classes should be toggled.
 * @param {string} cls - The CSS classes to toggle, separated by spaces.
 * @param {string} [avoid='noop'] - Classes to avoid toggling.
 * @returns {void}
 * @example
 * ```ts
 * // Toggle classes on an HTML element
 * const element = document.getElementById('example');
 * toggle(element, 'class1 class2');
 * ```
 */
export const toggle = (
  el: HTMLElement,
  cls: string,
  avoid: string = 'noop'
): void => {
  if (!el) return;

  if (!cls || (cls && !cls.length)) return;

  cls
    .trim()
    .split(' ')
    .filter((cl) => cl !== avoid)
    .filter((cl) => cl !== '')
    .forEach((cl) => el.classList.toggle(cl.trim()));
};

/**
 * Remove CSS classes from an HTML element.
 *
 * @param {HTMLElement} el - The HTML element from which classes should be removed.
 * @param {string} cls - The CSS classes to remove, separated by spaces.
 * @param {string} [avoid='noop'] - Classes to avoid removing.
 * @returns {void}
 * @example
 * ```ts
 * // Remove classes from an HTML element
 * const element = document.getElementById('example');
 * remove(element, 'class1 class2');
 * ```
 */
export const remove = (
  el: HTMLElement,
  cls: string,
  avoid: string = 'noop'
): void => {
  if (!el) return;

  if (!cls || (cls && !cls.length)) return;

  const preparedClassNames = cls
    .trim()
    .split(' ')
    .filter((cl) => cl !== avoid)
    .filter((cl) => cl !== '')
    .map((cl) => cl.trim());

  el.classList.remove(...preparedClassNames);
};

/**
 * Combines class names and optional properties object into a single string of class names.
 *
 * The `cx` function takes two parameters: `cls` and `cls_obj`.
 * The `cls` parameter can be either a string representing class names or an object with
 * properties set to `true` or `false`. The `cls_obj` parameter is an optional object with
 *  properties set to `true` or `false`, allowing for conditional inclusion of class names.
 *
 * @param {ClassNamesFirstArgType} cls - The class names as a string or an object with properties set to true or false.
 * @param {ClassNamesObjectMapInterface} cls_obj - An optional object with properties set to true or false to conditionally include class names.
 * @returns {string} - Returns a single string containing the combined class names.
 * @example
 * ```ts
 * // Generate CSS classes from a string and an object
 * const classNames = cx('class1', { class2: true, class3: false });
 * console.log(classNames); // Example output: 'class1 class2'
 * ```
 */
export const cx = (
  cls: ClassNamesFirstArgType,
  cls_obj?: ClassNamesSecondArgType
): string => {
  if (!cls) return '';

  if (!cls_obj && isNotString(cls))
    return Object.keys(cls)
      .filter((classname) => cls[classname])
      .join(' ')
      .trim();

  return `${(cls as string).trim()} ${
    cls_obj
      ? Object.keys(cls_obj)
          .filter((classname) => cls_obj[classname])
          .join(' ')
      : ''
  }`.trim();
};
