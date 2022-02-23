/* eslint no-console:0 */
'use strict';

export const set = (el: HTMLElement, attrs: {}) => {
  if (!el) return;

  if (!attrs) return;

  Object.keys(attrs).forEach((key) => el.setAttribute(key, attrs[key]));
};

export const remove = (el: HTMLElement, attrs: {}) => {
  if (!el) return;

  if (!attrs) return;

  Object.keys(attrs).forEach((key) => el.removeAttribute(key));
};
