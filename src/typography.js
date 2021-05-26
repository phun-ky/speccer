/* eslint no-console:0 */
'use strict';

import * as classnames from './lib/classnames';
import * as number from './lib/number';
import * as styles from './lib/styles';
import * as node from './lib/node';
import * as css from './lib/css';
import { SPECCER_TAGS_TO_AVOID } from './lib/constants';

export const create = (html, area) => {
  const _el = document.createElement('div');
  _el.innerHTML = html;

  classnames.set(_el, `speccer typography ${area}`);
  return _el;
};

export const element = async el => {
  const _area = el.getAttribute('data-speccer-typography');
  const _el_style = await styles.get(el);

  if (_el_style.display === 'none' || _el_style.visibility === 'hidden') {
    return;
  }

  el.classList.add('speccer-isSpecced');
  const _parent_style = styles.get(el.parentElement);

  if (_parent_style.position === 'static') {
    window.requestAnimationFrame(() => {
      el.parentElement.style.position = 'relative';
    });
  }

  const _styles = css.getTypography(_el_style);
  const _el_rect = el.getBoundingClientRect();

  const html =
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
    '}';
  const speccerNode = create(html, _area);

  let tableCorrectionTop = 0;
  let tableCorrectionLeft = 0;
  const tableCorrection = SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0;
  if (tableCorrection) {
    const table = el.parentElement;
    const tableStyle = window.getComputedStyle(table.parentElement);
    node.after(table, speccerNode);
    tableCorrectionTop = table.getBoundingClientRect().top - parseInt(tableStyle.getPropertyValue('padding-top'), 10);
    tableCorrectionLeft =
      table.getBoundingClientRect().left - parseInt(tableStyle.getPropertyValue('padding-left'), 10);
  } else {
    node.after(el, speccerNode);
  }

  const rectOfSpeccerNode = speccerNode.getBoundingClientRect();

  let outlineLeftLeft =
    (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : el.offsetLeft) -
    rectOfSpeccerNode.width -
    48 +
    'px';

  let outlineLeftTop =
    number.to3Decimals(
      (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : el.offsetTop) -
        rectOfSpeccerNode.height / 2 +
        _el_rect.height / 2
    ) + 'px';
  let outlineRightLeft =
    (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : el.offsetLeft) + _el_rect.width + 48 + 'px';

  let outlineRightTop =
    number.to3Decimals(
      (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : el.offsetTop) -
        rectOfSpeccerNode.height / 2 +
        _el_rect.height / 2
    ) + 'px';
  let outlineTopLeft =
    number.to3Decimals(
      (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : el.offsetLeft) -
        rectOfSpeccerNode.width / 2 +
        _el_rect.width / 2
    ) + 'px';
  let outlineTopTop =
    (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : el.offsetTop) -
    rectOfSpeccerNode.height -
    48 +
    'px';
  let outlineBottomleft =
    number.to3Decimals(
      (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : el.offsetLeft) -
        rectOfSpeccerNode.width / 2 +
        _el_rect.width / 2
    ) + 'px';
  let outlineBottomTop =
    (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : el.offsetTop) + _el_rect.height + 48 + 'px';

  let position = {
    left: outlineLeftLeft,
    top: outlineLeftTop
  };
  if (_area.indexOf('right') !== -1) {
    position = {
      left: outlineRightLeft,
      top: outlineRightTop
    };
  } else if (_area.indexOf('top') !== -1) {
    position = {
      left: outlineTopLeft,
      top: outlineTopTop
    };
  } else if (_area.indexOf('bottom') !== -1) {
    position = {
      left: outlineBottomleft,
      top: outlineBottomTop
    };
  }

  styles.add(speccerNode, position);
};
