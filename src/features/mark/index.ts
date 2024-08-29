/* eslint no-console:0 */
import { cx, set } from '../../utils/classnames';
import { SPECCER_DATA_ATTRIBUTE } from '../../utils/constants';
import { getOptions } from '../../utils/get-options';
import { uniqueID } from '../../utils/id';
import { isElementHidden } from '../../utils/node';
import { getRec } from '../../utils/position';
import { add as addStyles } from '../../utils/styles';
import { waitForFrame } from '../../utils/wait';

/**
 * Create a marker element with an optional element type.
 *
 * @param {string} id - The id.
 * @param {string} n - The element type.
 * @returns {HTMLElement} - The created marker element.
 *
 * @example
 * ```typescript
 * const marker = create('div');
 * document.body.appendChild(marker);
 * ```
 */
export const create = (id: string, n = 'span'): HTMLElement => {
  const _mark_element = document.createElement(n);

  _mark_element.setAttribute('id', id);

  const _class_names = cx('ph-speccer speccer mark');

  set(_mark_element, _class_names);

  return _mark_element;
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

  const _pin_element_id = `speccer-${_options.slug}-${targetElement.getAttribute('id') || uniqueID()}`;

  targetElement.setAttribute('data-speccer-element-id', _pin_element_id);

  const _mark_element = create(_pin_element_id);

  document.body.appendChild(_mark_element);

  const _positional_styles = await getRec(_mark_element, targetElement);
  const { left, top, height, width } = _positional_styles.absolute();
  const _mark_styles = {
    left: `${left}px`,
    top: `${top}px`,
    height: `${height}px`,
    width: `${width}px`
  };

  await addStyles(_mark_element, _mark_styles);
};
