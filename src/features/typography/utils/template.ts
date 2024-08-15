import { getTypography } from '../../../utils/css';
import { get as getStyles } from '../../../utils/styles';

/**
 * Generate a HTML string for typography styles of a target element.
 *
 * @param {HTMLElement} targetEl - The target element for which to generate typography styles.
 * @param {boolean} [useHighlighting=false] - If we should use highlighting markup
 * @returns {Promise<string>} - A promise that resolves with the HTML string.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * const typographyStyles = await template(targetElement, true);
 * console.log(typographyStyles);
 * ```
 */
export const template = async (
  targetEl: HTMLElement,
  useHighlighting = false
): Promise<string> => {
  const _target_styles = await getStyles(targetEl);
  const _styles = getTypography(_target_styles);

  if (useHighlighting) {
    const _fontFamily = _styles.fontFamily
      .split(',')
      .map((font) => {
        if (font.indexOf('\'') !== -1) {
          return `<span class="token string">${font}</span>`;
        }

        return font;
      })
      .join('<span class="token punctuation">, </span>');
    const _fontSize = `<span class="token number">${parseInt(_styles.fontSize, 10)}</span><span class="token unit">px</span> <span class="token operator">/</span> <span class="token number">${
      parseInt(_styles.fontSize, 10) / 16
    }</span><span class="token unit">rem</span>`;
    const _letterSpacing =
      _styles.letterSpacing.indexOf('px') !== -1
        ? `<span class="token number">${parseInt(_styles.letterSpacing, 10)}</span><span class="token unit">px</span>`
        : _styles.letterSpacing;
    const _lineHeight =
      _styles.lineHeight !== 'normal'
        ? `<span class="token number">${parseInt(_styles.lineHeight, 10)}</span><span class="token unit">px</span> <span class="token operator">/</span> <span class="token number">${
          parseInt(_styles.lineHeight, 10) / 16
        }</span><span class="token unit">rem</span>`
        : 'normal';

    return `
<pre class="language-css" tabindex="-1"><code class="language-css"><span class="token selector"><span class="token class">.typography</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> ${_fontFamily}<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> ${_fontSize}<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> <span class="token number">${_styles.fontWeight}</span><span class="token punctuation">;</span>
  <span class="token property">font-variation-settings</span><span class="token punctuation">:</span> ${_styles.fontVariationSettings}<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> ${_lineHeight}<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> ${_letterSpacing}<span class="token punctuation">;</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> ${_styles.fontStyle}<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>`;
  }

  return (
    `
` +
    'typography: {' +
    '<ul class="speccer-styles">' +
    `  <li><span class="property">font-family:</span> ${_styles.fontFamily};</li>` +
    `  <li><span class="property">font-size:</span> ${_styles.fontSize} / ${
      parseInt(_styles.fontSize, 10) / 16
    }rem;</li>` +
    `  <li><span class="property">font-weight:</span> ${_styles.fontWeight};</li>` +
    `  <li><span class="property">font-variation-settings:</span> ${_styles.fontVariationSettings};</li>` +
    `  <li><span class="property">line-height:</span> ${
      _styles.lineHeight !== 'normal'
        ? `${parseInt(_styles.lineHeight, 10)}px / ${parseInt(_styles.lineHeight, 10) / 16}rem`
        : 'normal'
    };</li>` +
    `  <li><span class="property">letter-spacing:</span> ${_styles.letterSpacing};</li>` +
    `  <li><span class="property">font-style:</span> ${_styles.fontStyle};</li>` +
    '</ul>' +
    '}'
  );
};
