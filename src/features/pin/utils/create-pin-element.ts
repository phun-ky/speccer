import { SpeccerOptionsInterface } from '../../../types/speccer';
import { set as setClassNames, cx } from '../../../utils/classnames';

/**
 * Create a pin element with optional content, area description, and element type.
 *
 * @param {string} content - The content to add to the element.
 * @param {SpeccerOptionsInterface} options - The option for styling.
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
  content = '',
  options: SpeccerOptionsInterface,
  id = '',
  n = 'span'
): HTMLElement => {
  const _el = document.createElement(n);
  const _extra_class_names: Record<string, boolean> = {};
  const { position, pin = {} as Record<string, boolean> } = options;
  const {
    useSVGLine,
    useCurlyBrackets,
    text,
    parent,
    bracket,
    enclose,
    subtle
  } = pin;

  _extra_class_names['text'] = text;
  _extra_class_names['parent'] = parent;
  _extra_class_names['bracket'] = bracket;
  _extra_class_names['enclose'] = enclose;
  _extra_class_names['subtle'] = subtle;
  _extra_class_names['svg'] = useSVGLine;
  _extra_class_names['curly'] = useCurlyBrackets;
  _extra_class_names[position] = true;

  if (parent && !bracket && !useCurlyBrackets && !subtle)
    _extra_class_names.svg = true;

  if ((!bracket && !enclose) || (bracket && useCurlyBrackets))
    _el.innerHTML = content;
  else if (bracket || enclose) _el.setAttribute('data-pin-counter', content);

  const _class_names = cx('ph-speccer speccer pin', _extra_class_names);

  setClassNames(_el, _class_names);

  _el.setAttribute('id', id);

  return _el;
};
