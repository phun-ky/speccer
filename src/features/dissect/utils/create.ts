import { isCurly, isEncloseArea, isFullArea } from '../../../utils/area';
import { set as setClassNames, cx } from '../../../utils/classnames';

/**
 * Create a dissected element with optional text content, area description, and element type.
 *
 * @param {string} textContent - The text content to add to the element.
 * @param {string} area - The area description for styling.
 * @param {string} n - The element type.
 * @returns {HTMLElement} - The created dissected element.
 *
 * @example
 * ```ts
 * const dissectedElement = create('A', 'outline top', 'div');
 * document.body.appendChild(dissectedElement);
 * ```
 */
export const create = (
  textContent = '',
  area: string,
  n = 'span'
): HTMLElement => {
  const _el = document.createElement(n);
  const _text_node = document.createTextNode(textContent);
  const _extra_class_names = {};

  if (area !== null && area !== '') _extra_class_names[area] = true;

  if (
    (!isFullArea(area) && !isEncloseArea(area)) ||
    (isFullArea(area) && isCurly(area))
  )
    _el.appendChild(_text_node);
  else if (isFullArea(area) || isEncloseArea(area))
    _el.setAttribute('data-dissection-counter', textContent);

  const _class_names = cx('ph-speccer speccer dissection', _extra_class_names);

  setClassNames(_el, _class_names);

  return _el;
};
