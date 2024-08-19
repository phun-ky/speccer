/* eslint no-console:0 */
import {
  isValidTypographyElement,
  useSyntaxHighlighting
} from '../../utils/area';
import { set as setClassNames, cx } from '../../utils/classnames';
import { isElementHidden } from '../../utils/node';
import { add as addStyles } from '../../utils/styles';

import { position } from './utils/position';
import { template } from './utils/template';

/**
 * Create a DOM element with provided HTML and optional CSS class names.
 *
 * @param {string} html - The HTML content to be set in the created element.
 * @param {string | null} area - The optional CSS class names to add.
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
export const create = (html: string, area: string | null): HTMLElement => {
  const _el = document.createElement('div');
  const _extra_class_names = {};

  if (area !== null && area !== '') {
    for (const a of area.split(' ')) {
      _extra_class_names[a] = true;
    }
  }

  const _class_names = cx('ph-speccer speccer typography', _extra_class_names);

  _el.innerHTML = html;

  setClassNames(_el, _class_names);

  return _el;
};

/**
 * Create a specced typography element for a given target element.
 *
 * ![typography](https://github.com/phun-ky/speccer/blob/main/public/typography.png?raw=true)
 *
 * @param {HTMLElement} targetElement - The target element to specc typography for.
 * @returns {Promise<void>} - A promise that resolves once typography element is created and positioned.
 *
 * @example
 * ```ts
 * const targetElement = document.querySelector('.target');
 * if (targetElement) {
 *   element(targetElement);
 * }
 * ```
 */
export const element = async (targetElement: HTMLElement): Promise<void> => {
  if (!targetElement) return;

  const _areas_string: string | null =
    targetElement.getAttribute('data-speccer');

  if (!isValidTypographyElement(_areas_string)) return;

  if (isElementHidden(targetElement)) return;

  const _use_highlighting = useSyntaxHighlighting(_areas_string);

  targetElement.classList.add('is-specced');

  const _html = await template(targetElement, _use_highlighting);
  const _speccer_el = create(_html, _areas_string);

  document.body.appendChild(_speccer_el);

  const _position = await position(_areas_string, targetElement, _speccer_el);

  addStyles(_speccer_el, _position);
};
