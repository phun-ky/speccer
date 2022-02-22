/* eslint no-console:0 */
'use strict';

import * as classnames from './lib/classnames';
import * as css from './lib/css';
import * as node from './lib/node';
import * as styles from './lib/styles';
import { SPECCER_TAGS_TO_AVOID } from './lib/constants';

export const create = (text = '', tag = 'span') => {
  const _el = document.createElement(tag);
  const textContent = document.createTextNode(text);
  _el.appendChild(textContent);
  _el.setAttribute('title', text + 'px');
  classnames.set(_el, 'ph speccer spacing');
  return _el;
};

export const element = el => {
  const _speccer_el = {};
  const _el_style = styles.get(el);
  if (_el_style.display === 'none' || _el_style.visibility === 'hidden') {
    return;
  }
  el.classList.add('speccer-isSpecced');
  const _parent_el_style = styles.get(el.parentElement);
  if (_parent_el_style.position === 'static') {
    window.requestAnimationFrame(() => {
      el.parentElement.style.position = 'relative';
    });
  }
  _speccer_el.style = css.getSpacing(_el_style);
  _speccer_el.rect = el.getBoundingClientRect();
  if (_speccer_el.style['marginTop'] !== '0px') {
    const _speccer_margin_top_el = create(css.getNumberValue(_speccer_el.style.marginTop));
    classnames.set(_speccer_margin_top_el, 'margin marginTop');
    styles.add(_speccer_margin_top_el, {
      height: _speccer_el.style.marginTop,
      width: _speccer_el.rect.width + 'px',
      left: css.normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
      top:
        css.normalizeNumberValue(
          _speccer_el.rect.y - el.parentElement.getBoundingClientRect().y - parseInt(_speccer_el.style.marginTop, 10)
        ) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_margin_top_el);
    } else {
      node.after(el, _speccer_margin_top_el);
    }
  }
  if (_speccer_el.style['marginRight'] !== '0px') {
    const _speccer_margin_right_el = create(css.getNumberValue(_speccer_el.style.marginRight));
    classnames.set(_speccer_margin_right_el, 'margin marginRight');

    styles.add(_speccer_margin_right_el, {
      height: _speccer_el.rect.height + 'px',
      width: _speccer_el.style.marginRight,
      left:
        css.normalizeNumberValue(
          _speccer_el.rect.x - el.parentElement.getBoundingClientRect().x + parseInt(_speccer_el.rect.width, 10)
        ) + 'px',
      top: css.normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_margin_right_el);
    } else {
      node.after(el, _speccer_margin_right_el);
    }
  }
  if (_speccer_el.style['marginBottom'] !== '0px') {
    const _speccer_margin_bottom_el = create(css.getNumberValue(_speccer_el.style.marginBottom));
    classnames.set(_speccer_margin_bottom_el, 'margin marginBottom');

    styles.add(_speccer_margin_bottom_el, {
      height: _speccer_el.style.marginBottom,
      width: _speccer_el.rect.width + 'px',
      left: css.normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
      top:
        css.normalizeNumberValue(
          _speccer_el.rect.y - el.parentElement.getBoundingClientRect().y + parseInt(_speccer_el.rect.height, 10)
        ) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_margin_bottom_el);
    } else {
      node.after(el, _speccer_margin_bottom_el);
    }
  }
  if (_speccer_el.style['marginLeft'] !== '0px') {
    const _speccer_margin_left_el = create(css.getNumberValue(_speccer_el.style.marginLeft));
    classnames.set(_speccer_margin_left_el, 'margin marginLeft');

    styles.add(_speccer_margin_left_el, {
      height: _speccer_el.rect.height + 'px',
      width: _speccer_el.style.marginLeft,
      left:
        css.normalizeNumberValue(
          _speccer_el.rect.x - el.parentElement.getBoundingClientRect().x - parseInt(_speccer_el.style.marginLeft, 10)
        ) + 'px',
      top: css.normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_margin_left_el);
    } else {
      node.after(el, _speccer_margin_left_el);
    }
  }
  if (_speccer_el.style['paddingTop'] !== '0px') {
    const _speccer_padding_top_el = create(css.getNumberValue(_speccer_el.style.paddingTop));
    classnames.set(_speccer_padding_top_el, 'padding paddingTop');

    styles.add(_speccer_padding_top_el, {
      height: _speccer_el.style.paddingTop,
      width: _speccer_el.rect.width + 'px',
      left: css.normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
      top: css.normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_padding_top_el);
    } else {
      node.after(el, _speccer_padding_top_el);
    }
  }
  if (_speccer_el.style['paddingBottom'] !== '0px') {
    const _speccer_padding_bottom_el = create(css.getNumberValue(_speccer_el.style.paddingBottom));
    classnames.set(_speccer_padding_bottom_el, 'padding paddingBottom');

    styles.add(_speccer_padding_bottom_el, {
      height: _speccer_el.style.paddingBottom,
      width: _speccer_el.rect.width + 'px',
      left: css.normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
      top:
        css.normalizeNumberValue(
          _speccer_el.rect.y -
            el.parentElement.getBoundingClientRect().y +
            (parseInt(_speccer_el.rect.height, 10) - parseInt(_speccer_el.style.paddingBottom, 10))
        ) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_padding_bottom_el);
    } else {
      node.after(el, _speccer_padding_bottom_el);
    }
  }
  if (_speccer_el.style['paddingRight'] !== '0px') {
    const _speccer_padding_right_el = create(css.getNumberValue(_speccer_el.style.paddingRight));
    classnames.set(_speccer_padding_right_el, 'padding paddingRight');

    styles.add(_speccer_padding_right_el, {
      height: _speccer_el.rect.height + 'px',
      width: _speccer_el.style.paddingRight,
      left:
        css.normalizeNumberValue(
          _speccer_el.rect.x -
            el.parentElement.getBoundingClientRect().x +
            (parseInt(_speccer_el.rect.width, 10) - parseInt(_speccer_el.style.paddingRight, 10))
        ) + 'px',
      top: css.normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_padding_right_el);
    } else {
      node.after(el, _speccer_padding_right_el);
    }
  }
  if (_speccer_el.style['paddingLeft'] !== '0px') {
    const _speccer_padding_left_el = create(css.getNumberValue(_speccer_el.style.paddingLeft));
    classnames.set(_speccer_padding_left_el, 'padding paddingLeft');

    styles.add(_speccer_padding_left_el, {
      height: _speccer_el.rect.height + 'px',
      width: _speccer_el.style.paddingLeft,
      left: css.normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
      top: css.normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_padding_left_el);
    } else {
      node.after(el, _speccer_padding_left_el);
    }
  }
};
