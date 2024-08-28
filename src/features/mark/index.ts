/* eslint no-console:0 */
import { cx, set } from '../../utils/classnames';
import { SPECCER_DATA_ATTRIBUTE } from '../../utils/constants';
import { getOptions } from '../../utils/get-options';
import { isElementHidden } from '../../utils/node';
import { getRec } from '../../utils/position';
import { add as addStyles } from '../../utils/styles';
import { waitForFrame } from '../../utils/wait';

/**
 * Create a marker element with an optional element type.
 *
 * @param {string} n - The element type.
 * @returns {HTMLElement} - The created marker element.
 *
 * @example
 * ```typescript
 * const marker = create('div');
 * document.body.appendChild(marker);
 * ```
 */
export const create = (n = 'span'): HTMLElement => {
  const markElement = document.createElement(n);
  const classNames = cx('ph-speccer speccer mark');

  set(markElement, classNames);

  return markElement;
};

/**
 * Create a marker element and add it to the body with styles matching a specified element.
 *
 * ![mark](https://github.com/phun-ky/speccer/blob/main/public/mark.png?raw=true)
 *
 * @param {HTMLElement} targetElement - The target element to match styles with.
 * @returns {Promise<void>} - A promise that resolves after creating and styling the marker element.
 *
 * @example
 * ```typescript
 * const targetElement = document.getElementById('target');
 * element(targetElement);
 * ```
 */
export const element = async (targetElement: HTMLElement): Promise<void> => {
  if (!targetElement) return;

  const _areas_string: string =
    targetElement.getAttribute(SPECCER_DATA_ATTRIBUTE) || '';

  await waitForFrame();

  const _options = getOptions(_areas_string, getComputedStyle(targetElement));

  if (_options.type !== 'mark') return;

  if (isElementHidden(targetElement)) return;

  const markElement = create();

  document.body.appendChild(markElement);

  const positionalStyles = await getRec(markElement, targetElement);
  const { left, top, height, width } = positionalStyles.absolute();
  const markStyles = {
    left: `${left}px`,
    top: `${top}px`,
    height: `${height}px`,
    width: `${width}px`
  };

  await addStyles(markElement, markStyles);
};
