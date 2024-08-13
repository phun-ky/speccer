// eslint-disable-next-line import/no-unused-modules
export { create } from './utils/create';

import { dissectionIterator } from './utils/dissection-iterator';

/**
 * Create dissected elements based on the section element and its data-anatomy attributes.
 *
 * ![dissect](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)
 *
 * @param {HTMLElement} sectionEl - The section element containing dissected elements.
 * @returns {Promise<void>} - A promise that resolves after creating dissected elements.
 *
 * @example
 * ```ts
 * const sectionElement = document.getElementById('section');
 * element(sectionElement);
 * ```
 */
export const element = async (sectionEl: HTMLElement): Promise<void> => {
  if (!sectionEl) return;

  const _dissection_els = sectionEl.querySelectorAll('[data-anatomy]');

  if(!_dissection_els || _dissection_els.length === 0) return;

  _dissection_els.forEach(dissectionIterator);
};
