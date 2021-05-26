/* eslint no-console:0 */
'use strict';

import * as ClassNames from './lib/classnames';
import * as Number from './lib/number';
import * as Styles from './lib/style';
import * as Css from './lib/css';
import { SPECCER_TAGS_TO_AVOID } from './lib/constants';

export const create = (html, area) => {
  const newTag = document.createElement('div');
  newTag.innerHTML = html;
  ClassNames.set('speccer typography');
  if (area !== '') {
    if (area.indexOf(' ') !== -1) {
      var ts = area.split(' ');
      ts.forEach(v => {
        newTag.classList.add(v);
      });
    } else {
      newTag.classList.add(area);
    }
  }
  return newTag;
};

export const element = elementToBeSpecced => {
  const typographySpecArea = elementToBeSpecced.getAttribute('data-speccer-typography');
  const elementCSSStyle = Styles.get(elementToBeSpecced);
  if (elementCSSStyle.display === 'none' || elementCSSStyle.visibility === 'hidden') {
    return;
  }
  elementToBeSpecced.classList.add('speccer-isSpecced');
  const parentElementCSSStyle = Styles.get(elementToBeSpecced.parentElement);
  if (parentElementCSSStyle.position === 'static') {
    elementToBeSpecced.parentElement.style.position = 'relative';
  }
  const desiredStyles = Css.getTypography(elementCSSStyle);
  const rectOfSpeccedElement = elementToBeSpecced.getBoundingClientRect();

  const html =
    `
    ` +
    'font-styles: {' +
    '<ul class="speccer-styles">' +
    `  <li><span class="property">font-family:</span> ${desiredStyles['fontFamily']};</li>` +
    `  <li><span class="property">font-size:</span> ${desiredStyles['fontSize']} / ${
      parseInt(desiredStyles['fontSize'], 10) / 16
    }rem;</li>` +
    `  <li><span class="property">font-weight:</span> ${desiredStyles['fontWeight']};</li>` +
    `  <li><span class="property">font-variation-settings:</span> ${desiredStyles['fontVariationSettings']};</li>` +
    `  <li><span class="property">line-height:</span> ${desiredStyles['lineHeight']} / ${
      parseInt(desiredStyles['lineHeight'], 10) / 16
    }rem;</li>` +
    `  <li><span class="property">letter-spacing:</span> ${desiredStyles['letterSpacing']};</li>` +
    `  <li><span class="property">font-style:</span> ${desiredStyles['fontStyle']};</li>` +
    '</ul>' +
    '}';
  const speccerNode = create(html, typographySpecArea);

  let tableCorrectionTop = 0;
  let tableCorrectionLeft = 0;
  const tableCorrection = SPECCER_TAGS_TO_AVOID.indexOf(elementToBeSpecced.nodeName) >= 0;
  if (tableCorrection) {
    const table = elementToBeSpecced.parentElement;
    const tableStyle = window.getComputedStyle(table.parentElement);
    Node.after(table, speccerNode);
    tableCorrectionTop = table.getBoundingClientRect().top - parseInt(tableStyle.getPropertyValue('padding-top'), 10);
    tableCorrectionLeft =
      table.getBoundingClientRect().left - parseInt(tableStyle.getPropertyValue('padding-left'), 10);
  } else {
    Node.after(elementToBeSpecced, speccerNode);
  }

  const rectOfSpeccerNode = speccerNode.getBoundingClientRect();

  let outlineLeftLeft =
    (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : elementToBeSpecced.offsetLeft) -
    rectOfSpeccerNode.width -
    48 +
    'px';

  let outlineLeftTop =
    Number.to3Decimals(
      (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : elementToBeSpecced.offsetTop) -
        rectOfSpeccerNode.height / 2 +
        rectOfSpeccedElement.height / 2
    ) + 'px';
  let outlineRightLeft =
    (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : elementToBeSpecced.offsetLeft) +
    rectOfSpeccedElement.width +
    48 +
    'px';

  let outlineRightTop =
    Number.to3Decimals(
      (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : elementToBeSpecced.offsetTop) -
        rectOfSpeccerNode.height / 2 +
        rectOfSpeccedElement.height / 2
    ) + 'px';
  let outlineTopLeft =
    Number.to3Decimals(
      (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : elementToBeSpecced.offsetLeft) -
        rectOfSpeccerNode.width / 2 +
        rectOfSpeccedElement.width / 2
    ) + 'px';
  let outlineTopTop =
    (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : elementToBeSpecced.offsetTop) -
    rectOfSpeccerNode.height -
    48 +
    'px';
  let outlineBottomleft =
    Number.to3Decimals(
      (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : elementToBeSpecced.offsetLeft) -
        rectOfSpeccerNode.width / 2 +
        rectOfSpeccedElement.width / 2
    ) + 'px';
  let outlineBottomTop =
    (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : elementToBeSpecced.offsetTop) +
    rectOfSpeccedElement.height +
    48 +
    'px';

  let position = {
    left: outlineLeftLeft,
    top: outlineLeftTop
  };
  if (typographySpecArea.indexOf('right') !== -1) {
    position = {
      left: outlineRightLeft,
      top: outlineRightTop
    };
  } else if (typographySpecArea.indexOf('top') !== -1) {
    position = {
      left: outlineTopLeft,
      top: outlineTopTop
    };
  } else if (typographySpecArea.indexOf('bottom') !== -1) {
    position = {
      left: outlineBottomleft,
      top: outlineBottomTop
    };
  }

  Styles.add(speccerNode, position);
};
