import { SpeccerOptionsInterface } from '../../../types/speccer';
import { escapeHTML } from '../../../utils/escape-html';

/**
 * Generates the content for a pin element based on the provided symbol, target element, and options.
 *
 * The symbol, `data-speccer-title` and `data-speccer-description` are escaped,
 * so markup in them is shown as text. A `\n` in the description becomes a
 * line break.
 *
 * @param {string} symbol - The default symbol to use if no text or description is provided.
 * @param {HTMLElement} targetElement - The HTML element for which the content is being generated.
 * @param {SpeccerOptionsInterface} options - The options that define how the content should be generated.
 * @returns {string} The generated content for the pin element.
 *
 * @example
 * ```ts
 * const symbol = '★';
 * const targetElement = document.getElementById('myElement');
 * const options = { pin: { text: true } };
 * const content = getContentForPin(symbol, targetElement, options);
 * console.log(content);
 * // Output: '<span class="ph-speccer title">Title Text</span>'
 * ```
 */
export const getContentForPin = (
  symbol: string,
  targetElement: HTMLElement,
  options: SpeccerOptionsInterface
): string => {
  const { pin } = options;
  const _symbol = escapeHTML(symbol);

  if (!pin) return _symbol;

  const { text } = pin;
  const _is_text =
    text && targetElement.getAttribute('data-speccer-title') !== null;

  if (!_is_text) return _symbol;

  const _title = escapeHTML(
    targetElement.getAttribute('data-speccer-title') || ''
  );
  const _description = escapeHTML(
    targetElement.getAttribute('data-speccer-description') || ''
  );
  const _heading =
    targetElement.nodeName.indexOf('H') === 0
      ? `<span class="ph-speccer heading">${targetElement.nodeName}</span>`
      : '';

  if (!_description && _title)
    return `${_heading}<span class="ph-speccer title">${_title}</span>`;

  if (_description && _title)
    return `${_heading}<span class="ph-speccer title">${_title}</span><span class="ph-speccer description">${_description.replaceAll('\\n', '<br/>')}</span>`;

  return _symbol;
};
