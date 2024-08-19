import {
  isCurly,
  isEncloseArea,
  isBracketArea,
  isParentArea,
  isSubtle,
  isValidPinElement,
  useSVG
} from '../../../utils/area';
import { camelCase } from '../../../utils/camel-case';
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
 * @param {string} symbol - The symbol to use.
 * @param {HTMLElement} parentElement - The parent element
 * @param {string} [areas] - Optional areas to use if not [data-speccer] is set as an attribute on the element
 * @returns {Promise<string|void>} A promise that resolves to the id of the pin element when the process is completed, or `void` if required input is invalid.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * const symbol = 0;
 * pinElement(targetElement, symbol).then(() => {
 *   console.log('process completed');
 * });
 * ```
 */
export const pinElement = async (
  targetElement: HTMLElement,
  symbol: string,
  parentElement: HTMLElement,
  areas = ''
): Promise<string | void> => {
  if (!targetElement) return;

  const _areas_string: string = targetElement.getAttribute('data-speccer') || areas;

  if (
    !isValidPinElement(_areas_string)
  )
    return;

  const _pin_element_id = `speccer-${camelCase(_areas_string)}-${targetElement.getAttribute('id') || uniqueID()}`;
  const _pin_element = createPinElement(symbol, _areas_string, _pin_element_id);

  targetElement.setAttribute('data-speccer-element-id', _pin_element_id);

  document.body.appendChild(_pin_element);

  const _pin_styles = await styles(
    _areas_string,
    targetElement as HTMLElement,
    _pin_element,
    parentElement,
    {
      isCurly: isCurly(_areas_string)
    }
  );

  await add(_pin_element, _pin_styles);

  const isParent =
    isParentArea(_areas_string) &&
    !isEncloseArea(_areas_string) &&
    !isBracketArea(_areas_string) &&
    !isSubtle(_areas_string);
  const isSVGLine =
    isParent || (useSVG(_areas_string) && !isCurly(_areas_string));

  if (isSVGLine) {
    new DrawSVGLine(targetElement as HTMLElement, _pin_element);

    if (isParent) new DrawCircle(targetElement, 5, _areas_string);
  } else if (isCurly(_areas_string)) {
    new DrawSVGCurlyBracket(targetElement as HTMLElement, _pin_element);
  }

  return _pin_element_id;
};
