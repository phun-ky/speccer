import * as css from '../../lib/css';
import * as styles from '../../lib/styles';

export const template = async (el: HTMLElement): Promise<string> => {
  const _el_styles = await styles.get(el);
  const _styles = css.getTypography(_el_styles);

  return (
    `
` +
    'font-styles: {' +
    '<ul class="speccer-styles">' +
    `  <li><span class="property">font-family:</span> ${_styles['fontFamily']};</li>` +
    `  <li><span class="property">font-size:</span> ${_styles['fontSize']} / ${
      parseInt(_styles['fontSize'], 10) / 16
    }rem;</li>` +
    `  <li><span class="property">font-weight:</span> ${_styles['fontWeight']};</li>` +
    `  <li><span class="property">font-variation-settings:</span> ${_styles['fontVariationSettings']};</li>` +
    `  <li><span class="property">line-height:</span> ${_styles['lineHeight']} / ${
      parseInt(_styles['lineHeight'], 10) / 16
    }rem;</li>` +
    `  <li><span class="property">letter-spacing:</span> ${_styles['letterSpacing']};</li>` +
    `  <li><span class="property">font-style:</span> ${_styles['fontStyle']};</li>` +
    '</ul>' +
    '}'
  );
};
