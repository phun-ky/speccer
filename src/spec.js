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

export const element = async (el) => {
  const _speccer_el = {};
  const _el_style = await styles.get(el);

  if (_el_style.display === 'none' || _el_style.visibility === 'hidden') {
    return;
  }

  el.classList.add('is-specced');

  const _parent_el_style = styles.get(el.parentElement);

  if (_parent_el_style.position === 'static') {
    window.requestAnimationFrame(() => {
      el.parentElement.style.position = 'relative';
    });
  }

  _speccer_el.styles = css.getSpacing(_el_style);
  _speccer_el.rect = el.getBoundingClientRect();

  if (_speccer_el.styles['marginTop'] !== '0px') {
    const _speccer_margin_top_el = create(css.getNumberValue(_speccer_el.styles.marginTop));

    classnames.set(_speccer_margin_top_el, 'margin top');
    styles.add(_speccer_margin_top_el, {
      height: _speccer_el.styles.marginTop,
      width: _speccer_el.rect.width + 'px',
      left: css.normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
      top:
        css.normalizeNumberValue(
          _speccer_el.rect.y - el.parentElement.getBoundingClientRect().y - parseInt(_speccer_el.styles.marginTop, 10)
        ) + 'px'
    });

    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_margin_top_el);
    } else {
      node.after(el, _speccer_margin_top_el);
    }
  }

  if (_speccer_el.styles['marginRight'] !== '0px') {
    const _speccer_margin_right_el = create(css.getNumberValue(_speccer_el.styles.marginRight));

    classnames.set(_speccer_margin_right_el, 'margin right');

    styles.add(_speccer_margin_right_el, {
      height: _speccer_el.rect.height + 'px',
      width: _speccer_el.styles.marginRight,
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

  if (_speccer_el.styles['marginBottom'] !== '0px') {
    const _speccer_margin_bottom_el = create(css.getNumberValue(_speccer_el.styles.marginBottom));

    classnames.set(_speccer_margin_bottom_el, 'margin bottom');

    styles.add(_speccer_margin_bottom_el, {
      height: _speccer_el.styles.marginBottom,
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

  if (_speccer_el.styles['marginLeft'] !== '0px') {
    const _speccer_margin_left_el = create(css.getNumberValue(_speccer_el.styles.marginLeft));

    classnames.set(_speccer_margin_left_el, 'margin left');

    styles.add(_speccer_margin_left_el, {
      height: _speccer_el.rect.height + 'px',
      width: _speccer_el.styles.marginLeft,
      left:
        css.normalizeNumberValue(
          _speccer_el.rect.x - el.parentElement.getBoundingClientRect().x - parseInt(_speccer_el.styles.marginLeft, 10)
        ) + 'px',
      top: css.normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
    });

    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_margin_left_el);
    } else {
      node.after(el, _speccer_margin_left_el);
    }
  }

  if (_speccer_el.styles['paddingTop'] !== '0px') {
    const _speccer_padding_top_el = create(css.getNumberValue(_speccer_el.styles.paddingTop));

    classnames.set(_speccer_padding_top_el, 'padding top');

    styles.add(_speccer_padding_top_el, {
      height: _speccer_el.styles.paddingTop,
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

  if (_speccer_el.styles['paddingBottom'] !== '0px') {
    const _speccer_padding_bottom_el = create(css.getNumberValue(_speccer_el.styles.paddingBottom));

    classnames.set(_speccer_padding_bottom_el, 'padding bottom');

    styles.add(_speccer_padding_bottom_el, {
      height: _speccer_el.styles.paddingBottom,
      width: _speccer_el.rect.width + 'px',
      left: css.normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
      top:
        css.normalizeNumberValue(
          _speccer_el.rect.y -
            el.parentElement.getBoundingClientRect().y +
            (parseInt(_speccer_el.rect.height, 10) - parseInt(_speccer_el.styles.paddingBottom, 10))
        ) + 'px'
    });

    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_padding_bottom_el);
    } else {
      node.after(el, _speccer_padding_bottom_el);
    }
  }

  if (_speccer_el.styles['paddingRight'] !== '0px') {
    const _speccer_padding_right_el = create(css.getNumberValue(_speccer_el.styles.paddingRight));

    classnames.set(_speccer_padding_right_el, 'padding right');

    styles.add(_speccer_padding_right_el, {
      height: _speccer_el.rect.height + 'px',
      width: _speccer_el.styles.paddingRight,
      left:
        css.normalizeNumberValue(
          _speccer_el.rect.x -
            el.parentElement.getBoundingClientRect().x +
            (parseInt(_speccer_el.rect.width, 10) - parseInt(_speccer_el.styles.paddingRight, 10))
        ) + 'px',
      top: css.normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
    });

    if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
      node.after(el.closest('table'), _speccer_padding_right_el);
    } else {
      node.after(el, _speccer_padding_right_el);
    }
  }

  if (_speccer_el.styles['paddingLeft'] !== '0px') {
    const _speccer_padding_left_el = create(css.getNumberValue(_speccer_el.styles.paddingLeft));

    classnames.set(_speccer_padding_left_el, 'padding left');

    styles.add(_speccer_padding_left_el, {
      height: _speccer_el.rect.height + 'px',
      width: _speccer_el.styles.paddingLeft,
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
