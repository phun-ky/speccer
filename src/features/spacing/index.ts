/* eslint no-console:0 */
import { set as setClassNames } from '../../utils/classnames';
import {
  getSpacing,
  getClassNameFromCSSProperty,
  getNumberValue
} from '../../utils/css';
import { get as getStyles } from '../../utils/styles';

import { position } from './utils/position';

/**
 * Create a spacing element with optional text content.
 *
 * @param {string | number} text - The optional text content for the spacing element.
 * @param {string} tag - The HTML tag for the element (default is 'span').
 * @returns {HTMLElement} - The created spacing element.
 *
 * @example
 * ```ts
 * const spacingElement = create(20, 'div');
 * document.body.appendChild(spacingElement);
 * ```
 */
export const create = (
  text: string | number = '',
  tag = 'span'
): HTMLElement => {
  const _el = document.createElement(tag);
  const _text_content = document.createTextNode(text + '');

  _el.appendChild(_text_content);
  _el.setAttribute('title', `${text}px`);
  setClassNames(_el, 'ph-speccer speccer spacing');

  return _el;
};

/**
 * Create and position spacing elements based on the target element's computed spacing styles.
 *
 * ![spacing](https://github.com/phun-ky/speccer/blob/main/public/spacing.png?raw=true)
 *
 * @param {HTMLElement} targetEl - The target element to create spacing elements for.
 * @returns {Promise<void>} - A promise that resolves after creating and positioning the spacing elements.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * element(targetElement);
 * ```
 */
export const element = async (targetEl: HTMLElement): Promise<void> => {
  if (!targetEl) return;

  const _target_styles = await getStyles(targetEl);

  if (
    _target_styles.display === 'none' ||
    _target_styles.opacity === '0' ||
    _target_styles.visibility === 'hidden'
  )
    return;

  const _target_spacing_styles = getSpacing(_target_styles);
  const _target_pruned_spacing_styles = Object.keys(
    _target_spacing_styles
  ).filter((property) => {
    const _value = _target_spacing_styles[property];

    return _value !== '0px';
  });

  if (!_target_pruned_spacing_styles.length) return;

  for (const property of _target_pruned_spacing_styles) {
    const _value = getNumberValue(_target_spacing_styles[property]);
    const _speccer_el = create(_value);
    const _class_name = getClassNameFromCSSProperty(property);

    setClassNames(_speccer_el, _class_name);
    document.body.appendChild(_speccer_el);

    targetEl.classList.add('is-specced');
    await position(property, _value, _speccer_el, targetEl);
  }
};
