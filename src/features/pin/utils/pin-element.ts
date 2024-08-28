import { SpeccerOptionsInterface } from '../../../types/speccer';
import { DrawCircle } from '../../../utils/classes/DrawCircle';
import { DrawSVGCurlyBracket } from '../../../utils/classes/DrawSVGCurlyBracket';
import { DrawSVGLine } from '../../../utils/classes/DrawSVGLine';
import { uniqueID } from '../../../utils/id';
import { add } from '../../../utils/styles';

import { createPinElement } from './create-pin-element';
import { styles } from './styles';

/**
 * Create and style the pin element as needed.
 *
 * This function appends a new pin element to the document body based on the `data-speccer="pin"` attribute
 * of the target element. It handles different styles, such as curly brackets or lines, based on the pin type.
 *
 * @param {HTMLElement} targetElement - The target element that contains the pin data.
 * @param {HTMLElement} parentElement - The parent element
 * @param {string} content - The content to use.
 * @param {SpeccerOptionsInterface} options - options
 * @returns {Promise<string|void>} A promise that resolves to the id of the pin element when the process is completed, or `void` if required input is invalid.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * const parentElement = document.getElementById('parent');
 * const content = 0;
 * const options = { … };
 * pinElement(targetElement, parentElement, content, options).then(() => {
 *   console.log('process completed');
 * });
 * ```
 */
export const pinElement = async (
  targetElement: HTMLElement,
  parentElement: HTMLElement,
  content: string,
  options: SpeccerOptionsInterface
): Promise<string | void> => {
  if (!targetElement) return;

  if (options.type !== 'pin' || !options.pin) return;

  const _pin_element_id = `speccer-${options.slug}-${targetElement.getAttribute('id') || uniqueID()}`;
  const _pin_element = createPinElement(content, options, _pin_element_id);

  targetElement.setAttribute('data-speccer-element-id', _pin_element_id);

  document.body.appendChild(_pin_element);

  const _pin_styles = await styles(
    targetElement as HTMLElement,
    _pin_element,
    parentElement,
    options
  );

  await add(_pin_element, _pin_styles);

  const isText =
    options.pin.text &&
    targetElement.getAttribute('data-speccer-title') !== null;
  const _should_draw_circle =
    options.pin.parent &&
    !options.pin.enclose &&
    !options.pin.bracket &&
    !isText;

  if (options.pin.useSVGLine) {
    new DrawSVGLine(targetElement as HTMLElement, _pin_element, options);

    if (_should_draw_circle) new DrawCircle(targetElement, 5, options);
  } else if (options.pin.useCurlyBrackets) {
    new DrawSVGCurlyBracket(targetElement as HTMLElement, _pin_element);
  }

  return _pin_element_id;
};
