/**
 * This feature highlights the anatomy of an element.
 *
 * ![dissect](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)
 *
 * In your component examples, use the following attribute. Remember to use the `data-anatomy-section` as an attribute on a parent element to scope the marking.
 *
 * @example
 * ```html
 * <div data-anatomy-section>
 *   <div
 *     data-anatomy="outline [full|enclose][curly] [left|right|top|bottom]"
 *     class="..."
 *   ></div>
 * </div>
 * ```
 *
 * @packageDocumentation
 */
// eslint-disable-next-line import/no-unused-modules
export { create } from './utils/create';

// eslint-disable-next-line import/no-unused-modules
export { dissect } from './utils/dissect';

import { dissect as dissectionIterator } from './utils/dissect';
import { getCharacterToUse } from './utils/get-character-to-use';

/**
 * Create dissected elements based on the section element and its data-anatomy attributes.
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

  if (!_dissection_els || _dissection_els.length === 0) return;

  _dissection_els.forEach(
    async (targetEl: HTMLElement, targetIndex: number): Promise<void> => {
      const _character_to_use = getCharacterToUse(targetIndex);

      await dissectionIterator(targetEl, _character_to_use, sectionEl);
    }
  );
};
