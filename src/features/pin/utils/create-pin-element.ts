import {
  isCurly,
  isEncloseArea,
  isBracketArea,
  isParentArea,
  isSubtle
} from '../../../utils/area';
import { set as setClassNames, cx } from '../../../utils/classnames';

/**
 * Create a pin element with optional text content, area description, and element type.
 *
 * @param {string} textContent - The text content to add to the element.
 * @param {string} area - The area description for styling.
 * @param {string} id - The id of the pinned element
 * @param {string} n - The element type.
 * @returns {HTMLElement} - The created pin element.
 *
 * @example
 * ```ts
 * const pinElement = createPinElement('A', 'outline top', 'div');
 * document.body.appendChild(pinElement);
 * ```
 */
export const createPinElement = (
  textContent = '',
  area: string,
  id = '',
  n = 'span'
): HTMLElement => {
  const _el = document.createElement(n);
  const _text_node = document.createTextNode(textContent);
  const _extra_class_names: Record<string, boolean> = {};

  if (area !== null && area !== '') _extra_class_names[area] = true;

  if (
    isParentArea(area) &&
    !isBracketArea(area) &&
    !isCurly(area) &&
    !isSubtle(area)
  )
    _extra_class_names.svg = true;

  if (
    (!isBracketArea(area) && !isEncloseArea(area)) ||
    (isBracketArea(area) && isCurly(area))
  )
    _el.appendChild(_text_node);
  else if (isBracketArea(area) || isEncloseArea(area))
    _el.setAttribute('data-pin-counter', textContent);

  const _class_names = cx('ph-speccer speccer pin', _extra_class_names);

  setClassNames(_el, _class_names);

  _el.setAttribute('id', id);

  return _el;
};
