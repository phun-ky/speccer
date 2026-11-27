import { uniqueID } from '../../../utils/id';
import { add } from '../../../utils/styles';

import { createA11yElement } from './create-a11y-element';
import { getContrast } from './get-contrast';
import { getRole } from './get-role';
import { styles } from './styles';

/**
 * Adds an accessibility element to the document body based on the target element and type.
 *
 * Values read from the target element (its role, autocomplete attribute and
 * text contrast) are inserted as text, never as HTML.
 *
 * ![Screenshot of speccer a11y tab stops in use](/speccer-a11y-tabstops-light.png?raw=true)
 * ![Screenshot of speccer a11y landmark in use](/speccer-a11y-landmarks-light.png?raw=true)
 *
 * @param {HTMLElement} targetElement - Target HTML element.
 * @param {unknown} [content] - Content to be added to the accessibility element.
 * @param {string} type - Type of accessibility element ('tabstops' or 'landmark').
 * @returns {Promise<HTMLElement | undefined>} The styled annotation, or `undefined` when the target isn't visible.
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
  targetElement: HTMLElement,
  content: unknown,
  type: string
): Promise<HTMLElement | undefined> => {
  if (!targetElement || !targetElement.checkVisibility()) return;

  const _a11y_el = createA11yElement(type, content);

  if (type === 'landmark') {
    const _role = getRole(targetElement);
    const _node_name = targetElement.nodeName.toLowerCase();

    _a11y_el.textContent = `<${_node_name} role="${_role}">`;
  }

  if (type === 'autocomplete') {
    const _autocomplete = targetElement.getAttribute('autocomplete') || '';

    _a11y_el.textContent = `autocomplete="${_autocomplete}"`;
  }

  if (type === 'headings') {
    _a11y_el.textContent = targetElement.nodeName;
    _a11y_el.classList.add(targetElement.nodeName.toLowerCase());
  }

  if (type === 'tabstops') {
    _a11y_el.setAttribute('data-speccer-a11y-tabstops', content as string);
  }

  if (type === 'contrast') {
    const _contrast = getContrast(targetElement);

    // Truncated, not rounded, so 4.499 doesn't show as passing 4.5
    _a11y_el.textContent = _contrast
      ? `${Math.floor(_contrast.ratio * 100) / 100}:1 ${_contrast.level}`
      : '?';
    _a11y_el.classList.add(_contrast?.level.toLowerCase() ?? 'unknown');
  }

  const _pin_element_id = `speccer-a11y-${targetElement.getAttribute('id') || uniqueID()}`;

  _a11y_el.setAttribute('data-speccer-id', _pin_element_id);

  document.body.appendChild(_a11y_el);

  const _a11y_styles = await styles(
    type,
    targetElement as HTMLElement,
    _a11y_el
  );

  await add(_a11y_el, _a11y_styles);

  return _a11y_el;
};
