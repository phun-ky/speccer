/* eslint no-console:0 */
'use strict';

import * as ClassNames from './lib/classnames';
import * as Css from './lib/css';
import * as Node from './lib/node';
import * as Styles from './lib/style';
import { SPECCER_TAGS_TO_AVOID } from './lib/constants';

export const create = (text = '', tag = 'span') => {
  const newTag = document.createElement(tag);
  const textContent = document.createTextNode(text);
  newTag.appendChild(textContent);
  newTag.setAttribute('title', text + 'px');
  newTag.classList.add('speccer');
  return newTag;
};

export const element = elementToBeSpecced => {
  const speccerElement = {};
  const elementCSSStyle = Styles.get(elementToBeSpecced);
  if (elementCSSStyle.display === 'none' || elementCSSStyle.visibility === 'hidden') {
    return;
  }
  elementToBeSpecced.classList.add('speccer-isSpecced');
  const parentElementCSSStyle = Styles.get(elementToBeSpecced.parentElement);
  if (parentElementCSSStyle.position === 'static') {
    elementToBeSpecced.parentElement.style.position = 'relative';
  }
  speccerElement.style = Css.getSpacing(elementCSSStyle);
  speccerElement.rect = elementToBeSpecced.getBoundingClientRect();
  if (speccerElement.style['marginTop'] !== '0px') {
    const speccerMarginTopElement = create(Css.getNumberValue(speccerElement.style.marginTop));
    ClassNames.set(speccerMarginTopElement, 'margin marginTop');
    Styles.add(speccerMarginTopElement, {
      height: speccerElement.style.marginTop,
      width: speccerElement.rect.width + 'px',
      left:
        Css.normalizeNumberValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) +
        'px',
      top:
        Css.normalizeNumberValue(
          speccerElement.rect.y -
            elementToBeSpecced.parentElement.getBoundingClientRect().y -
            parseInt(speccerElement.style.marginTop, 10)
        ) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeSpecced.nodeName) >= 0) {
      Node.after(elementToBeSpecced.closest('table'), speccerMarginTopElement);
    } else {
      Node.after(elementToBeSpecced, speccerMarginTopElement);
    }
  }
  if (speccerElement.style['marginRight'] !== '0px') {
    const speccerMarginRightElement = create(Css.getNumberValue(speccerElement.style.marginRight));
    ClassNames.set(speccerMarginRightElement, 'margin marginRight');

    Styles.add(speccerMarginRightElement, {
      height: speccerElement.rect.height + 'px',
      width: speccerElement.style.marginRight,
      left:
        Css.normalizeNumberValue(
          speccerElement.rect.x -
            elementToBeSpecced.parentElement.getBoundingClientRect().x +
            parseInt(speccerElement.rect.width, 10)
        ) + 'px',
      top:
        Css.normalizeNumberValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) +
        'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeSpecced.nodeName) >= 0) {
      Node.after(elementToBeSpecced.closest('table'), speccerMarginRightElement);
    } else {
      Node.after(elementToBeSpecced, speccerMarginRightElement);
    }
  }
  if (speccerElement.style['marginBottom'] !== '0px') {
    const speccerMarginBottomElement = create(Css.getNumberValue(speccerElement.style.marginBottom));
    ClassNames.set(speccerMarginBottomElement, 'margin marginBottom');

    Styles.add(speccerMarginBottomElement, {
      height: speccerElement.style.marginBottom,
      width: speccerElement.rect.width + 'px',
      left:
        Css.normalizeNumberValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) +
        'px',
      top:
        Css.normalizeNumberValue(
          speccerElement.rect.y -
            elementToBeSpecced.parentElement.getBoundingClientRect().y +
            parseInt(speccerElement.rect.height, 10)
        ) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeSpecced.nodeName) >= 0) {
      Node.after(elementToBeSpecced.closest('table'), speccerMarginBottomElement);
    } else {
      Node.after(elementToBeSpecced, speccerMarginBottomElement);
    }
  }
  if (speccerElement.style['marginLeft'] !== '0px') {
    const speccerMarginLeftElement = create(Css.getNumberValue(speccerElement.style.marginLeft));
    ClassNames.set(speccerMarginLeftElement, 'margin marginLeft');

    Styles.add(speccerMarginLeftElement, {
      height: speccerElement.rect.height + 'px',
      width: speccerElement.style.marginLeft,
      left:
        Css.normalizeNumberValue(
          speccerElement.rect.x -
            elementToBeSpecced.parentElement.getBoundingClientRect().x -
            parseInt(speccerElement.style.marginLeft, 10)
        ) + 'px',
      top:
        Css.normalizeNumberValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) +
        'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeSpecced.nodeName) >= 0) {
      Node.after(elementToBeSpecced.closest('table'), speccerMarginLeftElement);
    } else {
      Node.after(elementToBeSpecced, speccerMarginLeftElement);
    }
  }
  if (speccerElement.style['paddingTop'] !== '0px') {
    const speccerPaddingBottomElement = create(Css.getNumberValue(speccerElement.style.paddingTop));
    ClassNames.set(speccerPaddingBottomElement, 'padding paddingTop');

    Styles.add(speccerPaddingBottomElement, {
      height: speccerElement.style.paddingTop,
      width: speccerElement.rect.width + 'px',
      left:
        Css.normalizeNumberValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) +
        'px',
      top:
        Css.normalizeNumberValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) +
        'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeSpecced.nodeName) >= 0) {
      Node.after(elementToBeSpecced.closest('table'), speccerPaddingBottomElement);
    } else {
      Node.after(elementToBeSpecced, speccerPaddingBottomElement);
    }
  }
  if (speccerElement.style['paddingBottom'] !== '0px') {
    const speccerPaddingBottomElement = create(Css.getNumberValue(speccerElement.style.paddingBottom));
    ClassNames.set(speccerPaddingBottomElement, 'padding paddingBottom');

    Styles.add(speccerPaddingBottomElement, {
      height: speccerElement.style.paddingBottom,
      width: speccerElement.rect.width + 'px',
      left:
        Css.normalizeNumberValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) +
        'px',
      top:
        Css.normalizeNumberValue(
          speccerElement.rect.y -
            elementToBeSpecced.parentElement.getBoundingClientRect().y +
            (parseInt(speccerElement.rect.height, 10) - parseInt(speccerElement.style.paddingBottom, 10))
        ) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeSpecced.nodeName) >= 0) {
      Node.after(elementToBeSpecced.closest('table'), speccerPaddingBottomElement);
    } else {
      Node.after(elementToBeSpecced, speccerPaddingBottomElement);
    }
  }
  if (speccerElement.style['paddingRight'] !== '0px') {
    const speccerPaddingRightElement = create(Css.getNumberValue(speccerElement.style.paddingRight));
    ClassNames.set(speccerPaddingRightElement, 'padding paddingRight');

    Styles.add(speccerPaddingRightElement, {
      height: speccerElement.rect.height + 'px',
      width: speccerElement.style.paddingRight,
      left:
        Css.normalizeNumberValue(
          speccerElement.rect.x -
            elementToBeSpecced.parentElement.getBoundingClientRect().x +
            (parseInt(speccerElement.rect.width, 10) - parseInt(speccerElement.style.paddingRight, 10))
        ) + 'px',
      top:
        Css.normalizeNumberValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) +
        'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeSpecced.nodeName) >= 0) {
      Node.after(elementToBeSpecced.closest('table'), speccerPaddingRightElement);
    } else {
      Node.after(elementToBeSpecced, speccerPaddingRightElement);
    }
  }
  if (speccerElement.style['paddingLeft'] !== '0px') {
    const speccerPaddingLeftElement = create(Css.getNumberValue(speccerElement.style.paddingLeft));
    ClassNames.set(speccerPaddingLeftElement, 'padding paddingLeft');

    Styles.add(speccerPaddingLeftElement, {
      height: speccerElement.rect.height + 'px',
      width: speccerElement.style.paddingLeft,
      left:
        Css.normalizeNumberValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) +
        'px',
      top:
        Css.normalizeNumberValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) +
        'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeSpecced.nodeName) >= 0) {
      Node.after(elementToBeSpecced.closest('table'), speccerPaddingLeftElement);
    } else {
      Node.after(elementToBeSpecced, speccerPaddingLeftElement);
    }
  }
};
