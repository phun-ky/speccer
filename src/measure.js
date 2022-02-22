/* eslint no-console:0 */
'use strict';

import * as classnames from './lib/classnames';
import * as styles from './lib/styles';
import * as node from './lib/node';

import { SPECCER_TAGS_TO_AVOID } from './lib/constants';

const create = (text = '', area = '', tag = 'span') => {
  const _el = document.createElement(tag);

  _el.setAttribute('title', text + 'px');
  _el.setAttribute('data-measure', parseInt(text, 10) + 'px');

  classnames.set(_el, `ph speccer measure ${area}`);

  return _el;
};

export const element = (el) => {
  if (!el) return;

  const _el_rect = el.getBoundingClientRect();
  const _area = el.getAttribute('data-speccer-measure');

  if (_area === '') {
    return;
  }

  const _el_offset_top = el.offsetTop;
  const _el_offset_left = el.offsetLeft;

  if (_area.indexOf('width') !== -1) {
    if (_area.indexOf('bottom') !== -1) {
      const _measure_node = create(_el_rect.width, 'width bottom');

      if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
        node.after(el.closest('table'), _measure_node);
      } else {
        node.after(el, _measure_node);
      }

      styles.add(_measure_node, {
        left: _el_offset_left + 'px',
        top: _el_offset_top + _el_rect.height + 1 + 'px',
        width: _el_rect.width + 'px'
      });
    } else {
      const _measure_node = create(_el_rect.width, 'width top');

      if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
        node.after(el.closest('table'), _measure_node);
      } else {
        node.after(el, _measure_node);
      }

      const _measure_node_rect = _measure_node.getBoundingClientRect();

      styles.add(_measure_node, {
        left: _el_offset_left + 'px',
        top: _el_offset_top - _measure_node_rect.height + 1 + 'px',
        width: _el_rect.width + 'px'
      });
    }
  } else if (_area.indexOf('height') !== -1) {
    if (_area.indexOf('right') !== -1) {
      const _measure_node = create(_el_rect.height, 'height right');

      if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
        node.after(el.closest('table'), _measure_node);
      } else {
        node.after(el, _measure_node);
      }

      styles.add(_measure_node, {
        left: _el_offset_left + _el_rect.width + 'px',
        top: _el_offset_top + 'px',
        height: _el_rect.height + 'px'
      });
    } else {
      const _measure_node = create(_el_rect.height, 'height left');

      if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
        node.after(el.closest('table'), _measure_node);
      } else {
        node.after(el, _measure_node);
      }

      const _measure_node_rect = _measure_node.getBoundingClientRect();

      styles.add(_measure_node, {
        left: _el_offset_left - _measure_node_rect.width + 'px',
        top: _el_offset_top + 'px',
        height: _el_rect.height + 'px'
      });
    }
  }
};
