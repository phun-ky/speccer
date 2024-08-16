/**
 * This feature highlights the anatomy of an element.
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)
 *
 * In your component examples, use the following attribute. Remember to use the `data-speccer="pin-area"`-attribute on a parent element to scope the marking.
 *
 * @example
 * ```html
 * <div data-speccer="pin-area">
 *   <div
 *     data-speccer="pin [bracket|enclose][curly] [left|right|top|bottom]"
 *     class="..."
 *   ></div>
 * </div>
 * ```
 *
 * @packageDocumentation
 */
// eslint-disable-next-line import/no-unused-modules
export { createPinElement } from './utils/create-pin-element';

// eslint-disable-next-line import/no-unused-modules
export { pinElement } from './utils/pin-element';

import { isElementHidden } from '../../utils/node';

import { getCharacterToUse } from './utils/get-character-to-use';
import { pinElement } from './utils/pin-element';

/**
 * Create pinned elements based on the section element and its data-speccer attributes.
 *
 * @param {HTMLElement} sectionElement - The section element containing pinned elements.
 * @returns {Promise<void>} - A promise that resolves after creating pinned elements.
 *
 * @example
 * ```ts
 * const sectionElement = document.getElementById('section');
 * pinElements(sectionElement);
 * ```
 */
export const pinElements = async (sectionElement: HTMLElement): Promise<void> => {
  if (!sectionElement) return;

  const _els_to_be_pinned = sectionElement.querySelectorAll('[data-speccer*="pin"]');

  if (!_els_to_be_pinned || _els_to_be_pinned.length === 0) return;

  [..._els_to_be_pinned].filter(async (targetElement: HTMLElement) => !isElementHidden(targetElement)).forEach(
    async (targetElement: HTMLElement, targetIndex: number): Promise<void> => {
      const _character_to_use = getCharacterToUse(targetIndex);

      await pinElement(targetElement, _character_to_use, sectionElement);
    }
  );
};
