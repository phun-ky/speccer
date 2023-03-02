import * as css from '../../lib/css';
import * as number from '../../lib/number';
import {
  get_horizontal_center_of_els,
  get_vertical_center_of_els,
  offset
} from '../../lib/position';
import { SpeccerAreaEnum } from '../../enums/area';

export const position = async (
  area: string | null,
  targetEl: HTMLElement,
  speccerEl: HTMLElement
) => {
  const _target_rect = targetEl.getBoundingClientRect();
  const SPECCER_PIN_SPACE = css.pinSpace(speccerEl);
  const _speccer_el_rect = speccerEl.getBoundingClientRect();
  const _el_offset = await offset(targetEl);
  const _left_layout_position_left =
    _el_offset.left - _speccer_el_rect.width - SPECCER_PIN_SPACE + 'px';
  const _left_layout_position_top =
    number.decimal(
      get_vertical_center_of_els(_el_offset.top, _speccer_el_rect, _target_rect)
    ) + 'px';
  const _right_layout_position_left =
    _el_offset.left + _target_rect.width + SPECCER_PIN_SPACE + 'px';
  const _right_layout_position_top =
    number.decimal(
      get_vertical_center_of_els(_el_offset.top, _speccer_el_rect, _target_rect)
    ) + 'px';
  const _top_layout_position_left =
    number.decimal(
      get_horizontal_center_of_els(
        _el_offset.left,
        _speccer_el_rect,
        _target_rect
      )
    ) + 'px';
  const _top_layout_position_top =
    _el_offset.top - _speccer_el_rect.height - SPECCER_PIN_SPACE + 'px';
  const _bottom_layout_position_left =
    number.decimal(
      get_horizontal_center_of_els(
        _el_offset.left,
        _speccer_el_rect,
        _target_rect
      )
    ) + 'px';
  const _bottom_layout_position_top =
    _el_offset.top + _target_rect.height + SPECCER_PIN_SPACE + 'px';

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
