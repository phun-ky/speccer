/* eslint no-console:0 */
import { set as setClassNames, cx } from '../../utils/classnames';
import { add as addStyles, get as getStyles } from '../../utils/styles';

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

  if (area !== null && area !== '') _extra_class_names[area] = true;

  const _class_names = cx('ph-speccer speccer typography', _extra_class_names);

  _el.innerHTML = html;

  setClassNames(_el, _class_names);

  return _el;
};

/**
 * Create a specced typography element for a given target element.
 *
 * @param {HTMLElement} targetEl - The target element to specc typography for.
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
export const element = async (targetEl: HTMLElement): Promise<void> => {
  if (!targetEl) return;

  const _area: string | null = targetEl.getAttribute('data-speccer-typography');
  const _target_styles = await getStyles(targetEl);

  if (
    _target_styles.display === 'none' ||
    _target_styles.opacity === '0' ||
    _target_styles.visibility === 'hidden'
  )
    return;

  targetEl.classList.add('is-specced');

  const _html = await template(targetEl);
  const _speccer_el = create(_html, _area);

  document.body.appendChild(_speccer_el);

  const _position = await position(_area, targetEl, _speccer_el);

  addStyles(_speccer_el, _position);
};
