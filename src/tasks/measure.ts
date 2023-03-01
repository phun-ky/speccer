/* eslint no-console:0 */
'use strict';

import * as classnames from '../lib/classnames';
import * as styles from '../lib/styles';
import { waitForFrame } from '../lib/debounce';

const create = (
  text: string | number = '',
  area: string | null = '',
  tag = 'span'
) => {
  const _el = document.createElement(tag);

  _el.setAttribute('title', text + 'px');
  _el.setAttribute('data-measure', parseInt(text + '', 10) + 'px');

  classnames.set(_el, `ph speccer measure ${area}`);

  return _el;
};

export const element = async (targetEl: HTMLElement) => {
  if (!targetEl) return;

  const _area: string | null = targetEl.getAttribute('data-speccer-measure');

  if (_area === '' || !_area) {
    return;
  }

  const _target_styles = await styles.get(targetEl);

  if (
    _target_styles.display === 'none' ||
    _target_styles.opacity === '0' ||
    _target_styles.visibility === 'hidden'
  ) {
    return;
  }

  await waitForFrame();

  const _target_rect = targetEl.getBoundingClientRect();
  const _el_offset_top = _target_rect.top + window.pageYOffset;
  const _el_offset_left = _target_rect.left + window.pageXOffset;

  if (_area.indexOf('width') !== -1) {
    if (_area.indexOf('bottom') !== -1) {
      const _measure_el = create(_target_rect.width, _area);

      document.body.appendChild(_measure_el);

      styles.add(_measure_el, {
        left: _el_offset_left + 'px',
        top: _el_offset_top + _target_rect.height + 1 + 'px',
        width: _target_rect.width + 'px'
      });
    } else {
      const _measure_el = create(_target_rect.width, _area);

      document.body.appendChild(_measure_el);

      const _measure_rect = _measure_el.getBoundingClientRect();

      styles.add(_measure_el, {
        left: _el_offset_left + 'px',
        top: _el_offset_top - _measure_rect.height + 1 + 'px',
        width: _target_rect.width + 'px'
      });
    }
  } else if (_area.indexOf('height') !== -1) {
    if (_area.indexOf('right') !== -1) {
      const _measure_el = create(_target_rect.height, _area);

      document.body.appendChild(_measure_el);

      styles.add(_measure_el, {
        left: _el_offset_left + _target_rect.width + 'px',
        top: _el_offset_top + 'px',
        height: _target_rect.height + 'px'
      });
    } else {
      const _measure_el = create(_target_rect.height, _area);

      document.body.appendChild(_measure_el);

      const _measure_rect = _measure_el.getBoundingClientRect();

      styles.add(_measure_el, {
        left: _el_offset_left - _measure_rect.width + 'px',
        top: _el_offset_top + 'px',
        height: _target_rect.height + 'px'
      });
    }
  }
};
