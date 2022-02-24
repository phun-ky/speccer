/* eslint no-console:0 */
'use strict';

import * as classnames from '../lib/classnames';
import * as css from '../lib/css';
import * as styles from '../lib/styles';
import { offset } from '../lib/position';
import { SpeccerElType } from '../types/speccer';

export const create = (text: string | number = '', tag = 'span') => {
  const _el = document.createElement(tag);
  const _text_content = document.createTextNode(text + '');

  _el.appendChild(_text_content);
  _el.setAttribute('title', text + 'px');
  classnames.set(_el, 'ph speccer spacing');

  return _el;
};

export const element = async (targetEl: HTMLElement) => {
  const _speccer_el: SpeccerElType = {};
  const _el_style = await styles.get(targetEl);

  if (_el_style.display === 'none' || _el_style.visibility === 'hidden' || !targetEl.parentElement) {
    return;
  }

  targetEl.classList.add('is-specced');

  _speccer_el.styles = css.getSpacing(_el_style);

  const _target_rect = targetEl.getBoundingClientRect();
  const _el_offset = await offset(targetEl);

  if (_speccer_el.styles['marginTop'] !== '0px') {
    const _speccer_margin_top_el = create(css.getNumberValue(_speccer_el.styles.marginTop));

    document.body.appendChild(_speccer_margin_top_el);

    classnames.set(_speccer_margin_top_el, 'margin top');
    styles.add(_speccer_margin_top_el, {
      height: _speccer_el.styles.marginTop,
      width: _target_rect.width + 'px',
      left: _el_offset.left + 'px',
      top: _el_offset.top - parseInt(_speccer_el.styles.marginTop, 10) + 'px'
    });
  }

  if (_speccer_el.styles['marginRight'] !== '0px') {
    const _speccer_margin_right_el = create(css.getNumberValue(_speccer_el.styles.marginRight));

    classnames.set(_speccer_margin_right_el, 'margin right');

    styles.add(_speccer_margin_right_el, {
      height: _target_rect.height + 'px',
      width: _speccer_el.styles.marginRight,
      left: _el_offset.left + parseInt(_target_rect.width + '', 10) + 'px',
      top: _el_offset.top + 'px'
    });

    document.body.appendChild(_speccer_margin_right_el);
  }

  if (_speccer_el.styles['marginBottom'] !== '0px') {
    const _speccer_margin_bottom_el = create(css.getNumberValue(_speccer_el.styles.marginBottom));

    classnames.set(_speccer_margin_bottom_el, 'margin bottom');

    styles.add(_speccer_margin_bottom_el, {
      height: _speccer_el.styles.marginBottom,
      width: _target_rect.width + 'px',
      left: _el_offset.left + 'px',
      top: _el_offset.top + parseInt(_target_rect.height + '', 10) + 'px'
    });

    document.body.appendChild(_speccer_margin_bottom_el);
  }

  if (_speccer_el.styles['marginLeft'] !== '0px') {
    const _speccer_margin_left_el = create(css.getNumberValue(_speccer_el.styles.marginLeft));

    classnames.set(_speccer_margin_left_el, 'margin left');

    styles.add(_speccer_margin_left_el, {
      height: _target_rect.height + 'px',
      width: _speccer_el.styles.marginLeft,
      left: _el_offset.left - parseInt(_speccer_el.styles.marginLeft, 10) + 'px',
      top: _el_offset.top + 'px'
    });

    document.body.appendChild(_speccer_margin_left_el);
  }

  if (_speccer_el.styles['paddingTop'] !== '0px') {
    const _speccer_padding_top_el = create(css.getNumberValue(_speccer_el.styles.paddingTop));

    classnames.set(_speccer_padding_top_el, 'padding top');

    styles.add(_speccer_padding_top_el, {
      height: _speccer_el.styles.paddingTop,
      width: _target_rect.width + 'px',
      left: _el_offset.left + 'px',
      top: _el_offset.top + 'px'
    });

    document.body.appendChild(_speccer_padding_top_el);
  }

  if (_speccer_el.styles['paddingBottom'] !== '0px') {
    const _speccer_padding_bottom_el = create(css.getNumberValue(_speccer_el.styles.paddingBottom));

    classnames.set(_speccer_padding_bottom_el, 'padding bottom');

    styles.add(_speccer_padding_bottom_el, {
      height: _speccer_el.styles.paddingBottom,
      width: _target_rect.width + 'px',
      left: _el_offset.left + 'px',
      top:
        _el_offset.top +
        (parseInt(_target_rect.height + '', 10) - parseInt(_speccer_el.styles.paddingBottom, 10)) +
        'px'
    });

    document.body.appendChild(_speccer_padding_bottom_el);
  }

  if (_speccer_el.styles['paddingRight'] !== '0px') {
    const _speccer_padding_right_el = create(css.getNumberValue(_speccer_el.styles.paddingRight));

    classnames.set(_speccer_padding_right_el, 'padding right');

    styles.add(_speccer_padding_right_el, {
      height: _target_rect.height + 'px',
      width: _speccer_el.styles.paddingRight,
      left:
        _el_offset.left +
        (parseInt(_target_rect.width + '', 10) - parseInt(_speccer_el.styles.paddingRight, 10)) +
        'px',
      top: _el_offset.top + 'px'
    });

    document.body.appendChild(_speccer_padding_right_el);
  }

  if (_speccer_el.styles['paddingLeft'] !== '0px') {
    const _speccer_padding_left_el = create(css.getNumberValue(_speccer_el.styles.paddingLeft));

    classnames.set(_speccer_padding_left_el, 'padding left');

    styles.add(_speccer_padding_left_el, {
      height: _target_rect.height + 'px',
      width: _speccer_el.styles.paddingLeft,
      left: _el_offset.left + 'px',
      top: _el_offset.top + 'px'
    });

    document.body.appendChild(_speccer_padding_left_el);
  }
};
