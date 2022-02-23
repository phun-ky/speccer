import * as css from '../../lib/css';
import * as number from '../../lib/number';
import { get_body_correction } from '../../lib/position';
import { get_horizontal_center_of_els, get_vertical_center_of_els } from '../../lib/position';
import { DissectAreaEnum } from '../../enums/area';

export const styles = (area: string, el: HTMLElement, dissectionEl: HTMLElement) => {
  const _el_rect = el.getBoundingClientRect();
  const SPECCER_PIN_SPACE = css.pinSpace(dissectionEl);
  const _dissection_el_rect = dissectionEl.getBoundingClientRect();
  const _body_correction = get_body_correction();
  const _el_offset_top = el.offsetTop + _body_correction.top;
  const _el_offset_left = el.offsetLeft + _body_correction.left;
  const _left_layout_position_left = _el_offset_left - _dissection_el_rect.width - SPECCER_PIN_SPACE + 'px';
  const _left_layout_position_top =
    number.decimal(get_vertical_center_of_els(_el_offset_top, _dissection_el_rect, _el_rect)) + 'px';
  const _right_layout_position_left = _el_offset_left + _el_rect.width + SPECCER_PIN_SPACE + 'px';
  const _right_layout_position_top =
    number.decimal(get_vertical_center_of_els(_el_offset_top, _dissection_el_rect, _el_rect)) + 'px';
  const _top_layout_position_left =
    number.decimal(get_horizontal_center_of_els(_el_offset_left, _dissection_el_rect, _el_rect)) + 'px';
  const _top_layout_position_top = _el_offset_top - _dissection_el_rect.height - SPECCER_PIN_SPACE + 'px';
  const _bottom_layout_position_left =
    number.decimal(get_horizontal_center_of_els(_el_offset_left, _dissection_el_rect, _el_rect)) + 'px';
  const _bottom_layout_position_top = _el_offset_top + _el_rect.height + SPECCER_PIN_SPACE + 'px';

  let _dissection_styles = {};

  if (area.indexOf(DissectAreaEnum.Outline) !== -1) {
    if (area.indexOf(DissectAreaEnum.Left) !== -1) {
      if (area.indexOf(DissectAreaEnum.Full) !== -1) {
        _dissection_styles = {
          left: _el_offset_left - 8 + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px'
        };
      } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
        _dissection_styles = {
          left: _el_offset_left - 1 + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_styles = {
          left: _left_layout_position_left,
          top: _left_layout_position_top
        };
      }
    } else if (area.indexOf(DissectAreaEnum.Right) !== -1) {
      if (area.indexOf(DissectAreaEnum.Full) !== -1) {
        _dissection_styles = {
          left: _el_offset_left + _el_rect.width + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px'
        };
      } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
        _dissection_styles = {
          left: _el_offset_left + -1 + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_styles = {
          left: _right_layout_position_left,
          top: _right_layout_position_top
        };
      }
    } else if (area.indexOf(DissectAreaEnum.Top) !== -1) {
      if (area.indexOf(DissectAreaEnum.Full) !== -1) {
        _dissection_styles = {
          top: _el_offset_top + -8 + 'px',
          left: _el_offset_left + -1 + 'px',
          width: _el_rect.width + 'px'
        };
      } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
        _dissection_styles = {
          top: _el_offset_top + -1 + 'px',
          left: _el_offset_left + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_styles = {
          left: _top_layout_position_left,
          top: _top_layout_position_top
        };
      }
    } else if (area.indexOf(DissectAreaEnum.Bottom) !== -1) {
      if (area.indexOf(DissectAreaEnum.Full) !== -1) {
        _dissection_styles = {
          top: _el_offset_top + _el_rect.height + 'px',
          left: _el_offset_left + -1 + 'px',
          width: _el_rect.width + 'px'
        };
      } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
        _dissection_styles = {
          top: _el_offset_top + -1 + 'px',
          left: _el_offset_left + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_styles = {
          left: _bottom_layout_position_left,
          top: _bottom_layout_position_top
        };
      }
    } else {
      if (area.indexOf(DissectAreaEnum.Full) !== -1) {
        _dissection_styles = {
          left: _el_offset_left + _el_rect.width + 'px',
          top: _el_offset_top + 'px',
          height: _el_rect.height + 'px'
        };
      } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
        _dissection_styles = {
          left: _el_offset_left + _el_rect.width + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_styles = {
          left: _left_layout_position_left,
          top: _left_layout_position_top
        };
      }
    }
  } else {
    if (area.indexOf(DissectAreaEnum.Full) !== -1) {
      _dissection_styles = {
        left: _el_offset_left - 8 + 'px',
        top: _el_offset_top + -1 + 'px',
        height: _el_rect.height + 'px'
      };
    } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
      _dissection_styles = {
        left: _el_offset_left - 1 + 'px',
        top: _el_offset_top + -1 + 'px',
        height: _el_rect.height + 'px',
        width: _el_rect.width + 'px'
      };
    } else {
      _dissection_styles = {
        left: _left_layout_position_left,
        top: _left_layout_position_top
      };
    }
  }

  return _dissection_styles;
};
