/* eslint no-console:0 */
'use strict';
import * as styles from './lib/styles';
import * as node from './lib/node';
import * as classnames from './lib/classnames';
import { SPECCER_LITERALS, SPECCER_TAGS_TO_AVOID } from './lib/constants';

export const create = (e = '', t, n = 'span') => {
  const _el = document.createElement(n);
  const o = document.createTextNode(e);
  if (t.indexOf('full') === -1 && t.indexOf('enclose') === -1) {
    _el.appendChild(o);
  } else if (t.indexOf('full') !== -1 || t.indexOf('enclose') !== -1) {
    _el.setAttribute('data-dissection-counter', e);
  }
  classnames.set(_el, `dissection ${t}`);
  return _el;
};

export const element = (el, dissectIndex) => {
  const _el_rect = el.getBoundingClientRect();
  const _area = el.getAttribute('data-anatomy');
  const _dissection_node = create(SPECCER_LITERALS[dissectIndex], _area);
  const _is_table_correction_needed = SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0;

  let _table_top = 0;
  let _table_left = 0;

  if (_is_table_correction_needed) {
    const table = el.closest('table');
    const tableStyle = styles.get(table.parentElement);
    node.after(table, _dissection_node);
    const _table_rect = table.getBoundingClientRect();
    _table_top = _table_rect.top - parseInt(tableStyle.getPropertyValue('padding-top'), 10);
    _table_left = _table_rect.left - parseInt(tableStyle.getPropertyValue('padding-left'), 10);
  } else {
    node.after(el, _dissection_node);
  }

  const _el_offset_left = el.offsetLeft;
  const _el_offset_top = el.offsetTop;

  const _dissection_node_rect = _dissection_node.getBoundingClientRect();
  let _outline_left_position_left =
    (_is_table_correction_needed ? _el_rect.left - _table_left : _el_offset_left) -
    _dissection_node_rect.width -
    48 +
    'px';
  let _outline_left_position_top =
    (_is_table_correction_needed ? _el_rect.top - _table_top : _el_offset_top) +
    _el_rect.height / 2 -
    _dissection_node_rect.height / 2 +
    'px';
  let _outline_right_position_left =
    (_is_table_correction_needed ? _el_rect.left - _table_left : _el_offset_left) + _el_rect.width + 48 + 'px';
  let _outline_right_position_top =
    (_is_table_correction_needed ? _el_rect.top - _table_top : _el_offset_top) +
    _el_rect.height / 2 -
    _dissection_node_rect.height / 2 +
    'px';
  let _outline_top_position_left =
    (_is_table_correction_needed ? _el_rect.left - _table_left : _el_offset_left) +
    _el_rect.width / 2 -
    _dissection_node_rect.width / 2 +
    'px';
  let _outline_top_position_top =
    (_is_table_correction_needed ? _el_rect.top - _table_top : _el_offset_top) -
    _dissection_node_rect.height -
    48 +
    'px';
  let _outline_bottom_position_left =
    (_is_table_correction_needed ? _el_rect.left - _table_left : _el_offset_left) +
    _el_rect.width / 2 -
    _dissection_node_rect.width / 2 +
    'px';
  let _outline_bottom_position_top =
    (_is_table_correction_needed ? _el_rect.top - _table_top : _el_offset_top) + _el_rect.height + 48 + 'px';

  let _dissection_node_styles = {};
  if (_area.indexOf('outline') !== -1) {
    if (_area.indexOf('left') !== -1) {
      if (_area.indexOf('full') !== -1) {
        _dissection_node_styles = {
          left: _el_offset_left - 8 + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px'
        };
      } else if (_area.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          left: _el_offset_left - 1 + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: _outline_left_position_left,
          top: _outline_left_position_top
        };
      }
    } else if (_area.indexOf('right') !== -1) {
      if (_area.indexOf('full') !== -1) {
        _dissection_node_styles = {
          left: _el_offset_left + _el_rect.width + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px'
        };
      } else if (_area.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          left: _el_offset_left + -1 + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: _outline_right_position_left,
          top: _outline_right_position_top
        };
      }
    } else if (_area.indexOf('top') !== -1) {
      if (_area.indexOf('full') !== -1) {
        _dissection_node_styles = {
          bottom: _el_offset_top + _el_rect.height + 'px',
          left: _el_offset_left + -1 + 'px',
          width: _el_rect.width + 'px'
        };
      } else if (_area.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          top: _el_offset_top + -1 + 'px',
          left: _el_offset_left + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: _outline_top_position_left,
          top: _outline_top_position_top
        };
      }
    } else if (_area.indexOf('bottom') !== -1) {
      if (_area.indexOf('full') !== -1) {
        _dissection_node_styles = {
          top: _el_offset_top + _el_rect.height + 'px',
          left: _el_offset_left + -1 + 'px',
          width: _el_rect.width + 'px'
        };
      } else if (_area.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          top: _el_offset_top + -1 + 'px',
          left: _el_offset_left + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: _outline_bottom_position_left,
          top: _outline_bottom_position_top
        };
      }
    } else {
      if (_area.indexOf('full') !== -1) {
        _dissection_node_styles = {
          left: _el_offset_left + _el_rect.width + 'px',
          top: _el_offset_top + 'px',
          height: _el_rect.height + 'px'
        };
      } else if (_area.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          left: _el_offset_left + _el_rect.width + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: _outline_left_position_left,
          top: _outline_left_position_top
        };
      }
    }
  } else {
    if (_area.indexOf('full') !== -1) {
      _dissection_node_styles = {
        left: _el_offset_left - 8 + 'px',
        top: _el_offset_top + -1 + 'px',
        height: _el_rect.height + 'px'
      };
    } else if (_area.indexOf('enclose') !== -1) {
      _dissection_node_styles = {
        left: _el_offset_left - 1 + 'px',
        top: _el_offset_top + -1 + 'px',
        height: _el_rect.height + 'px',
        width: _el_rect.width + 'px'
      };
    } else {
      _dissection_node_styles = {
        left: _outline_left_position_left,
        top: _outline_left_position_top
      };
    }
  }
  styles.add(_dissection_node, _dissection_node_styles);
};
