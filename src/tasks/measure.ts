/* eslint no-console:0 */
'use strict';

import * as classnames from '../lib/classnames';
import * as styles from '../lib/styles';
import { get_body_correction } from '../lib/position';

const create = (text: string | number = '', area: string | null = '', tag = 'span') => {
  const _el = document.createElement(tag);

  _el.setAttribute('title', text + 'px');
  _el.setAttribute('data-measure', parseInt(text + '', 10) + 'px');

  classnames.set(_el, `ph speccer measure ${area}`);

  return _el;
};

export const element = (el: HTMLElement) => {
  if (!el) return;

  const _el_rect = el.getBoundingClientRect();
  const _area: string | null = el.getAttribute('data-speccer-measure');

  if (_area === '' || !_area) {
    return;
  }

  const _body_correction = get_body_correction();
  const _el_offset_top = el.offsetTop + _body_correction.top;
  const _el_offset_left = el.offsetLeft + _body_correction.left;

  if (_area.indexOf('width') !== -1) {
    if (_area.indexOf('bottom') !== -1) {
      const _measure_el = create(_el_rect.width, 'width bottom');

      document.body.appendChild(_measure_el);

      styles.add(_measure_el, {
        left: _el_offset_left + 'px',
        top: _el_offset_top + _el_rect.height + 1 + 'px',
        width: _el_rect.width + 'px'
      });
    } else {
      const _measure_el = create(_el_rect.width, 'width top');

      document.body.appendChild(_measure_el);

      const _measure_rect = _measure_el.getBoundingClientRect();

      styles.add(_measure_el, {
        left: _el_offset_left + 'px',
        top: _el_offset_top - _measure_rect.height + 1 + 'px',
        width: _el_rect.width + 'px'
      });
    }
  } else if (_area.indexOf('height') !== -1) {
    if (_area.indexOf('right') !== -1) {
      const _measure_el = create(_el_rect.height, 'height right');

      document.body.appendChild(_measure_el);

      styles.add(_measure_el, {
        left: _el_offset_left + _el_rect.width + 'px',
        top: _el_offset_top + 'px',
        height: _el_rect.height + 'px'
      });
    } else {
      const _measure_el = create(_el_rect.height, 'height left');

      document.body.appendChild(_measure_el);

      const _measure_rect = _measure_el.getBoundingClientRect();

      styles.add(_measure_el, {
        left: _el_offset_left - _measure_rect.width + 'px',
        top: _el_offset_top + 'px',
        height: _el_rect.height + 'px'
      });
    }
  }
};
