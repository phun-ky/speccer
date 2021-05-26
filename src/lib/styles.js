/* eslint no-console:0 */
'use strict';
import { waitForFrame } from './debounce';

export const add = async (el, styles) => {
  if (!el) return;
  if (
    !styles ||
    (styles && styles.length === 0 && styles.constructor === String) ||
    (styles && styles.length === 0 && styles.constructor === Array) ||
    (styles && Object.keys(styles).length === 0 && styles.constructor === Object)
  ) {
    return;
  }

  await waitForFrame();
  if (typeof styles === 'string' || Array.isArray(styles)) {
    styles.forEach(style => (el.style[style.key] = style.value));
  } else {
    Object.keys(styles).forEach(key => (el.style[key] = styles[key]));
  }
};

export const get = async el => {
  await waitForFrame();
  return window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
};
