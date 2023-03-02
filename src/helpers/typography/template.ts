import * as css from '../../lib/css';
import * as styles from '../../lib/styles';

export const template = async (targetEl: HTMLElement): Promise<string> => {
  const _target_styles = await styles.get(targetEl);
  const _styles = css.getTypography(_target_styles);
  const _line_height =
    _styles['lineHeight'] !== 'normal'
      ? parseInt(_styles['lineHeight'], 10) / 16 + 'rem'
      : 'normal';

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
    `  <li><span class="property">line-height:</span> ${_styles['lineHeight']} / ${_line_height};</li>` +
    `  <li><span class="property">letter-spacing:</span> ${_styles['letterSpacing']};</li>` +
    `  <li><span class="property">font-style:</span> ${_styles['fontStyle']};</li>` +
    '</ul>' +
    '}'
  );
};
