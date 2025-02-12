/**
 * This feature presents typography
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-typography-light.png?raw=true)
 *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="typography [top|right|bottom|left] [syntax]"
 *   class="..."
 * >
 *   …
 * </div>
 * ```
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * const options = {
 *   position: 'right',
 *   type: 'typography',
 *   typography: {
 *     useSyntaxHighlighting: false
 *   }
 * };
 *
 * typography(targetElement, options);
 * ```
 *
 * @packageDocumentation
 */

/* eslint no-console:0 */
import { SpeccerOptionsInterface } from '../../types/speccer';
import { set as setClassNames, cx } from '../../utils/classnames';
import { getOptions } from '../../utils/get-options';
import { uniqueID } from '../../utils/id';
import { isElementHidden } from '../../utils/node';
import { add as addStyles } from '../../utils/styles';
import { waitForFrame } from '../../utils/wait';

import { position } from './utils/position';
import { template } from './utils/template';

/**
 * Create a DOM element with provided HTML and optional CSS class names.
 *
 * @param {string} html - The HTML content to be set in the created element.
 * @param {SpeccerOptionsInterface} options - Options.
 * @param {string} id - The id.
 * @returns {HTMLElement} - The created DOM element.
 *
 * @example
 * ```ts
 * const htmlContent = '<p>This is some HTML content.</p>';
 * const cssClass = 'custom-class';
 * const createdElement = create(htmlContent, cssClass);
 * document.body.appendChild(createdElement);
 * ```
 */
export const create = (
  html: string,
  options: SpeccerOptionsInterface,
  id: string
): HTMLElement => {
  const _el = document.createElement('div');
  const { typography, position } = options;
  const _class_names = cx('ph-speccer speccer typography', {
    syntax: typography?.useSyntaxHighlighting || false,
    [position]: true
  });

  _el.setAttribute('id', id);
  _el.setAttribute('data-speccer-id', id);

  _el.innerHTML = html;

  setClassNames(_el, _class_names);

  return _el;
};

/**
 * Create a specced typography element for a given target element.
 *
 * ![typography](https://github.com/phun-ky/speccer/blob/main/public/speccer-typography-light.png?raw=true)
 *
 * @param {HTMLElement} targetElement - The target element to specc typography for.
 * @param {SpeccerOptionsInterface|undefined} [options] - Custom options
 * @returns {Promise<void>} - A promise that resolves once typography element is created and positioned.
 *
 * @example
 *
 * ##### Default
 *
 * ```ts
 * const targetElement = document.querySelector('.target');
 * if (targetElement) {
 *   element(targetElement);
 * }
 * ```
 *
 * ##### With syntax higlight feature
 *
 * ![typography](https://github.com/phun-ky/speccer/blob/main/public/speccer-typography-syntax-light.png?raw=true)
 *
 * ```ts
 * const targetElement = document.querySelector('.target');
 * const options = {
 *   typography : {
 *     useSyntaxHighlighting: true
 *   }
 * };
 *
 * if (targetElement) {
 *   element(targetElement, options);
 * }
 * ```
 */
export const typography = async (
  targetElement: HTMLElement,
  options?: SpeccerOptionsInterface | undefined
): Promise<void> => {
  if (!targetElement) return;

  if (isElementHidden(targetElement)) return;

  const _areas_string: string =
    targetElement.getAttribute('data-speccer') || '';

  await waitForFrame();

  const _options = getOptions(
    _areas_string,
    getComputedStyle(targetElement),
    options
  );

  if (_options.type !== 'typography' || !_options.typography) return;

  targetElement.classList.add('is-specced');

  const _html = await template(
    targetElement,
    _options.typography.useSyntaxHighlighting
  );
  const _pin_element_id = `speccer-${_options.slug}-${targetElement.getAttribute('id') || uniqueID()}`;

  targetElement.setAttribute('data-speccer-element-id', _pin_element_id);

  const _speccer_el = create(_html, _options, _pin_element_id);

  document.body.appendChild(_speccer_el);

  const _position = await position(_options, targetElement, _speccer_el);

  addStyles(_speccer_el, _position);
};
