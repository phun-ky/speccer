/* eslint no-console:0 */
'use strict';

import { AttributesMapInterface } from 'interfaces/attributes';

export const set = (el: HTMLElement, attrs?: AttributesMapInterface) => {
  if (!el) return;

  if (!attrs) return;

  Object.keys(attrs).forEach((key) => el.setAttribute(key, attrs[key]));
};

export const remove = (el: HTMLElement, attrs?: AttributesMapInterface) => {
  if (!el) return;

  if (!attrs) return;

  Object.keys(attrs).forEach((key) => el.removeAttribute(key));
};
