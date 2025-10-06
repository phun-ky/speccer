/* node:coverage disable */
/**
 * This feature annotate or highlight the anatomy of an element.
 *
 * ![pin](/anatomy.png?raw=true)
 *
 * In your component examples, use the following attribute. Remember to use the `data-speccer="pin-area"`-attribute on a parent element to scope the marking.
 *
 * @example
 * ```html
 * <div data-speccer="pin-area">
 *   <div
 *     data-speccer="pin [bracket [curly] |enclose] [left|right|top|bottom]"
 *     class="..."
 *   ></div>
 * </div>
 * ```
 *
 * @packageDocumentation
 */

/* node:coverage enable */
export { createPinElement } from './utils/create-pin-element';

export { pinElement } from './utils/pin-element';

import { SpeccerOptionsInterface } from '../../types/speccer';
import { SPECCER_LITERALS } from '../../utils/constants';
import { getOptions } from '../../utils/get-options';
import { isElementHidden } from '../../utils/node';
import { waitForFrame } from '../../utils/wait';

import { getCharacterToUse } from './utils/get-character-to-use';
import { getContentForPin } from './utils/get-content-for-pin';
import { pinElement } from './utils/pin-element';

/* node:coverage disable */
/**
 * Create pinned elements based on the section element and its data-speccer attributes.
 *
 * @param {HTMLElement} sectionElement - The section element containing pinned elements.
 * @param {SpeccerOptionsInterface|undefined} [options] - Options.
 * @returns {Promise<void>} - A promise that resolves after creating pinned elements.
 *
 * @example
 * ```ts
 * const sectionElement = document.getElementById('section');
 * pinElements(sectionElement);
 * ```
 */
/* node:coverage enable */
export const pinElements = async (
  sectionElement: HTMLElement,
  options?: SpeccerOptionsInterface | undefined
): Promise<void> => {
  if (!sectionElement) return;

  const _els_to_be_pinned = sectionElement.querySelectorAll(
    '[data-speccer^="pin"]'
  );

  if (!_els_to_be_pinned || _els_to_be_pinned.length === 0) return;

  const _literals_to_use =
    (sectionElement.getAttribute('data-speccer-literals') as string | null) ||
    window.SPECCER_LITERALS ||
    SPECCER_LITERALS;

  [..._els_to_be_pinned]
    .filter(
      async (targetElement: HTMLElement) => !isElementHidden(targetElement)
    )
    .forEach(
      async (
        targetElement: HTMLElement,
        targetIndex: number
      ): Promise<void> => {
        const _symbol = getCharacterToUse(targetIndex, _literals_to_use);
        const _areas_string = targetElement.getAttribute('data-speccer') || '';

        await waitForFrame();

        const _target_style = getComputedStyle(targetElement);
        const _options = getOptions(_areas_string, _target_style, options);
        const _content = getContentForPin(_symbol, targetElement, _options);

        await pinElement(targetElement, sectionElement, _content, _options);
      }
    );
};
