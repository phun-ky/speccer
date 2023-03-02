/* eslint no-console:0 */
'use strict';

import { ClassNamesObjectMapInterface } from 'interfaces/classnames';

export const set = (el: HTMLElement, cls: string, avoid = 'noop') => {
  if (!el) return;

  if (!cls || (cls && cls.length === 0)) return;

  cls
    .trim()
    .split(' ')
    .filter((cl) => cl !== avoid)
    .forEach((cl) => el.classList.add(cl));
};

export const toggle = (el: HTMLElement, cls: string, avoid = 'noop') => {
  if (!el) return;

  if (!cls || (cls && cls.length === 0)) return;

  cls
    .trim()
    .split(' ')
    .filter((cl) => cl !== avoid)
    .forEach((cl) => el.classList.toggle(cl));
};

export const remove = (el: HTMLElement, cls: string, avoid = 'noop') => {
  if (!el) return;

  if (!cls || (cls && cls.length === 0)) return;

  cls
    .trim()
    .split(' ')
    .filter((cl) => cl !== avoid)
    .forEach((cl) => el.classList.remove(cl));
};

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
