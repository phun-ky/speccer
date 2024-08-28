import { set as setClassNames, cx } from '../../../utils/classnames';

/**
 * Creates an HTML element based on the specified type.
 * *
 * @param {string} [type='tabstops'] - Type of element ('tabstops', 'landmark', 'region').
 * @param {unknown} [content] - Content to be added to the element.
 * @param {string} [n='span'] - HTML tag name (default is 'span').
 * @returns {HTMLElement} The created HTML element.
 *
 * @example
 * ```ts
 * const tabElement = create('tabstops', null, 'div');
 * const landmarkElement = create('landmark', 1, 'div');
 * const regionElement = create('region', null, 'div');
 * ```
 */
export const createA11yElement = (
  type = 'tabstops',
  content: unknown,
  n = 'span'
): HTMLElement => {
  const _el = document.createElement(n);
  const _class_names = cx('ph-speccer speccer a11y', {
    tabstops: type === 'tabstops',
    landmark: type === 'landmark',
    region: type === 'region'
  });

  if (type === 'landmark' && content) {
    const _text_node = document.createTextNode(String(content));

    _el.appendChild(_text_node);
  }

  setClassNames(_el, _class_names);

  return _el;
};
