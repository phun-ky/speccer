/**
 * This feature highlights the spacing of an element.
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-spacing-dark.png?raw=true)
 * *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="spacing [padding|margin][bound]"
 *   class="…"
 * >
 * …
 * </div>
 * ```
 * ```ts
 * const targetElement = document.getElementById('target');
 * element(targetElement);
 * ```
 * @packageDocumentation
 */
/* eslint no-console:0 */
import { SpeccerOptionsInterface } from '../../types/speccer';
import { cx, set as setClassNames } from '../../utils/classnames';
import {
  getSpacing,
  getClassNameFromCSSProperty,
  getNumberValue
} from '../../utils/css';
import { getOptions } from '../../utils/get-options';
import { uniqueID } from '../../utils/id';
import { isElementHidden } from '../../utils/node';
import { get as getStyles, add as addStyles } from '../../utils/styles';

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
  const _text_content = document.createTextNode(`${text}px`);

  _el.appendChild(_text_content);
  _el.setAttribute('title', `${text}px`);
  setClassNames(_el, 'ph-speccer speccer spacing');

  return _el;
};

/**
 * Create and position spacing elements based on the target element's computed spacing styles.
 *
 * ![spacing](https://github.com/phun-ky/speccer/blob/main/public/speccer-spacing-light.png?raw=true)
 *
 * @param {HTMLElement} targetElement - The target element to create spacing elements for.
 * @param {SpeccerOptionsInterface|undefined} [options] - Options
 * @returns {Promise<void>} - A promise that resolves after creating and positioning the spacing elements.
 *
 * @example
 *
 * ##### Default, padding and margin
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * element(targetElement);
 * ```
 *
 * ##### Only padding
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * const options = {
 *   spacing: {
 *     padding: true
 *   }
 * };
 *
 * element(targetElement, options);
 *
 * ##### Bound style, like the old feature
 *
 * ![spacing](https://github.com/phun-ky/speccer/blob/main/public/speccer-spacing-bound.png?raw=true)
 *
 * This option binds the speccer elements to the bounds of the element container.
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * const options = {
 *   spacing: {
 *     bound: true,
 *   }
 * };
 *
 * element(targetElement, options);
 * ```
 */
export const spacing = async (
  targetElement: HTMLElement,
  options?: SpeccerOptionsInterface | undefined
): Promise<void> => {
  if (!targetElement) return;

  if (isElementHidden(targetElement)) return;

  const _areas_string: string =
    targetElement.getAttribute('data-speccer') || '';
  const _target_styles = await getStyles(targetElement);
  const _options = getOptions(_areas_string, _target_styles, options);

  if (_options.type !== 'spacing' || !_options.spacing) return;

  const _target_spacing_styles = getSpacing(_target_styles, _options);
  const _target_pruned_spacing_styles = Object.keys(
    _target_spacing_styles
  ).filter((property) => {
    const _value = _target_spacing_styles[property];

    return _value !== '0px';
  });

  if (!_target_pruned_spacing_styles.length) return;

  targetElement.classList.add('is-specced');

  const _pin_element_id = `speccer-spacing-${targetElement.getAttribute('id') || uniqueID()}`;

  targetElement.setAttribute('data-speccer-element-id', _pin_element_id);

  _target_pruned_spacing_styles.forEach(async (property) => {
    const _value = getNumberValue(_target_spacing_styles[property]);
    const _speccer_el = create(_value);

    _speccer_el.setAttribute('data-speccer-id', _pin_element_id);

    const _class_name = getClassNameFromCSSProperty(property);

    setClassNames(
      _speccer_el,
      cx(_class_name, {
        bound: _options?.spacing?.bound ? true : false
      })
    );
    document.body.appendChild(_speccer_el);

    const _styles = await position(property, _value, targetElement, _options);

    await addStyles(_speccer_el, _styles as object);
  });
};
