import { getTypography } from '../../../utils/css';
import { get as getStyles } from '../../../utils/styles';

/**
 * Generate a HTML string for typography styles of a target element.
 *
 * @param {HTMLElement} targetEl - The target element for which to generate typography styles.
 * @returns {Promise<string>} - A promise that resolves with the HTML string.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * const typographyStyles = await template(targetElement);
 * console.log(typographyStyles);
 * ```
 */
export const template = async (targetEl: HTMLElement): Promise<string> => {
  const _target_styles = await getStyles(targetEl);
  const _styles = getTypography(_target_styles);
  const _line_height =
    _styles.lineHeight !== 'normal'
      ? parseInt(_styles.lineHeight, 10) / 16 + 'rem'
      : 'normal';

  return (
    `
` +
    'font-styles: {' +
    '<ul class="speccer-styles">' +
    `  <li><span class="property">font-family:</span> ${_styles.fontFamily};</li>` +
    `  <li><span class="property">font-size:</span> ${_styles.fontSize} / ${
      parseInt(_styles.fontSize, 10) / 16
    }rem;</li>` +
    `  <li><span class="property">font-weight:</span> ${_styles.fontWeight};</li>` +
    `  <li><span class="property">font-variation-settings:</span> ${_styles.fontVariationSettings};</li>` +
    `  <li><span class="property">line-height:</span> ${_styles.lineHeight} / ${_line_height};</li>` +
    `  <li><span class="property">letter-spacing:</span> ${_styles.letterSpacing};</li>` +
    `  <li><span class="property">font-style:</span> ${_styles.fontStyle};</li>` +
    '</ul>' +
    '}'
  );
};
