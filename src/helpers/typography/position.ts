import * as css from '../../lib/css';
import * as number from '../../lib/number';
import { get_body_correction } from '../../lib/position';
import { get_horizontal_center_of_els, get_vertical_center_of_els } from '../../lib/position';
import { SpeccerAreaEnum } from '../../enums/area';

export const position = (
  area: string | null,
  el: HTMLElement,
  speccerEl: HTMLElement
): { left: string; top: string } => {
  const _el_rect = el.getBoundingClientRect();
  const SPECCER_PIN_SPACE = css.pinSpace(speccerEl);
  const _speccer_el_rect = speccerEl.getBoundingClientRect();
  const _body_correction = get_body_correction();
  const _el_offset_top = el.offsetTop + _body_correction.top;
  const _el_offset_left = el.offsetLeft + _body_correction.left;
  const _left_layout_position_left = _el_offset_left - _speccer_el_rect.width - SPECCER_PIN_SPACE + 'px';
  const _left_layout_position_top =
    number.decimal(get_vertical_center_of_els(_el_offset_top, _speccer_el_rect, _el_rect)) + 'px';
  const _right_layout_position_left = _el_offset_left + _el_rect.width + SPECCER_PIN_SPACE + 'px';
  const _right_layout_position_top =
    number.decimal(get_vertical_center_of_els(_el_offset_top, _speccer_el_rect, _el_rect)) + 'px';
  const _top_layout_position_left =
    number.decimal(get_horizontal_center_of_els(_el_offset_left, _speccer_el_rect, _el_rect)) + 'px';
  const _top_layout_position_top = _el_offset_top - _speccer_el_rect.height - SPECCER_PIN_SPACE + 'px';
  const _bottom_layout_position_left =
    number.decimal(get_horizontal_center_of_els(_el_offset_left, _speccer_el_rect, _el_rect)) + 'px';
  const _bottom_layout_position_top = _el_offset_top + _el_rect.height + SPECCER_PIN_SPACE + 'px';

  let _position = {
    left: _left_layout_position_left,
    top: _left_layout_position_top
  };

  if (area && area.indexOf(SpeccerAreaEnum.Right) !== -1) {
    _position = {
      left: _right_layout_position_left,
      top: _right_layout_position_top
    };
  } else if (area && area.indexOf(SpeccerAreaEnum.Top) !== -1) {
    _position = {
      left: _top_layout_position_left,
      top: _top_layout_position_top
    };
  } else if (area && area.indexOf(SpeccerAreaEnum.Bottom) !== -1) {
    _position = {
      left: _bottom_layout_position_left,
      top: _bottom_layout_position_top
    };
  }

  return _position;
};
