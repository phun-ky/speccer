/* eslint no-console:0 */
'use strict';

import { ClassNamesObjectMapInterface } from 'types/interfaces/classnames';

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
export const set = (el: HTMLElement, cls: string, avoid = 'noop') => {
  if (!el) return;

  if (!cls || (cls && cls.length === 0)) return;

  cls
    .trim()
    .split(' ')
    .filter((cl) => cl !== avoid)
    .forEach((cl) => el.classList.add(cl));
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
export const toggle = (el: HTMLElement, cls: string, avoid = 'noop') => {
  if (!el) return;

  if (!cls || (cls && cls.length === 0)) return;

  cls
    .trim()
    .split(' ')
    .filter((cl) => cl !== avoid)
    .forEach((cl) => el.classList.toggle(cl));
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
export const remove = (el: HTMLElement, cls: string, avoid = 'noop') => {
  if (!el) return;

  if (!cls || (cls && cls.length === 0)) return;

  cls
    .trim()
    .split(' ')
    .filter((cl) => cl !== avoid)
    .forEach((cl) => el.classList.remove(cl));
};

/**
 * Generate CSS classes from a string and an object.
 *
 * @param {string} cls - Additional CSS classes as a string.
 * @param {ClassNamesObjectMapInterface} cls_obj - A mapping of class names to boolean values.
 * @returns {string} - A space-separated string of CSS class names.
 * @example
 * ```ts
 * // Generate CSS classes from a string and an object
 * const classNames = cx('class1', { class2: true, class3: false });
 * console.log(classNames); // Example output: 'class1 class2'
 * ```
 */
export const cx = (
  cls: string,
  cls_obj?: ClassNamesObjectMapInterface
): string => {
  if (!cls) return '';

  if (!cls_obj && typeof cls !== 'string') {
    return `${Object.keys(cls)
      .filter((classname) => cls[classname])
      .join(' ')}`.trim();
  }

  return `${cls} ${
    cls_obj
      ? Object.keys(cls_obj)
        .filter((classname) => cls_obj[classname])
        .join(' ')
      : ''
  }`.trim();
};
