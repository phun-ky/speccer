/* eslint no-console:0 */
'use strict';
import { waitForFrame } from './debounce';

export const add = async (el: HTMLElement, styles: [] | object) => {
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
    styles.forEach((style: { key: string; value: string }) => (el.style[style.key] = style.value));
  } else {
    Object.keys(styles).forEach((key) => (el.style[key] = styles[key]));
  }
};

export const get = async (el: HTMLElement): Promise<CSSStyleDeclaration> => {
  await waitForFrame();

  return getComputedStyle(el, null);
};
