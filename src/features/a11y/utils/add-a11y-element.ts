import { add } from '../../../utils/styles';

import { createA11yElement } from './create-a11y-element';
import { getRole } from './get-role';
import { styles } from './styles';


/**
 * Adds an accessibility element to the document body based on the target element and type.
 *
 * ![Screenshot of speccer a11y tab stops in use](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-tabstops-light.png?raw=true)
 * ![Screenshot of speccer a11y landmark in use](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-landmarks-light.png?raw=true)
 *
 * @param {HTMLElement} targetEl - Target HTML element.
 * @param {unknown} [content] - Content to be added to the accessibility element.
 * @param {string} type - Type of accessibility element ('tabstops' or 'landmark').
 * @returns {Promise<void>} A Promise resolving when the operation is complete.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('myElement');
 * if (targetElement) {
 *   await addA11yElement(targetElement, 1, 'landmark');
 *   await addA11yElement(targetElement, null, 'tabstops');
 * }
 * ```
 */
export const addA11yElement = async (
  targetEl: HTMLElement,
  content: unknown,
  type: string
): Promise<void> => {
  if (!targetEl || !targetEl.checkVisibility()) return;

  const _a11y_el = createA11yElement(type, content);

  if (type === 'landmark') {
    const _role = getRole(targetEl);
    const _node_name = targetEl.nodeName.toLowerCase();

    _a11y_el.innerHTML = `&lt;${_node_name} role="${_role}"&gt;`;
  }

  if (type === 'autocomplete') {
    const _autocomplete = targetEl.getAttribute('autocomplete') || '';

    _a11y_el.innerHTML = `autocomplete="${_autocomplete}"`;
  }

  if (type === 'headings') {
    _a11y_el.innerHTML = targetEl.nodeName;
  }

  document.body.appendChild(_a11y_el);

  const _a11y_styles = await styles(type, targetEl as HTMLElement, _a11y_el);

  await add(_a11y_el, _a11y_styles);
};
