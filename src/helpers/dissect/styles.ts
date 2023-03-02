import * as css from '../../lib/css';
import * as number from '../../lib/number';
import * as position from '../../lib/position';
import {
  get_horizontal_center_of_els,
  get_vertical_center_of_els,
  offset
} from '../../lib/position';
import { DissectAreaEnum } from '../../enums/area';

/**
  @todo Finalize converstion to position.get()!
*/
export const styles = async (
  area: string,
  targetEl: HTMLElement,
  dissectionEl: HTMLElement
) => {
  const SPECCER_PIN_SPACE = css.pinSpace(dissectionEl);
  const SPECCER_MEASURE_SIZE = css.measureSize(dissectionEl);
  const SPECCER_MEASURE_SIZE_NEG = SPECCER_MEASURE_SIZE * -1;
  const _target_rect = targetEl.getBoundingClientRect();
  const _dissection_el_rect = dissectionEl.getBoundingClientRect();
  const _el_offset = await offset(targetEl);
  const _left_layout_position_left =
    _el_offset.left - _dissection_el_rect.width - SPECCER_PIN_SPACE + 'px';
  const _left_layout_position_top =
    number.decimal(
      get_vertical_center_of_els(
        _el_offset.top,
        _dissection_el_rect,
        _target_rect
      )
    ) + 'px';
  const _right_layout_position_left =
    _el_offset.left + _target_rect.width + SPECCER_PIN_SPACE + 'px';
  const _right_layout_position_top =
    number.decimal(
      get_vertical_center_of_els(
        _el_offset.top,
        _dissection_el_rect,
        _target_rect
      )
    ) + 'px';
  const _top_layout_position_left =
    number.decimal(
      get_horizontal_center_of_els(
        _el_offset.left,
        _dissection_el_rect,
        _target_rect
      )
    ) + 'px';
  const _top_layout_position_top =
    _el_offset.top - _dissection_el_rect.height - SPECCER_PIN_SPACE + 'px';
  const _bottom_layout_position_left =
    number.decimal(
      get_horizontal_center_of_els(
        _el_offset.left,
        _dissection_el_rect,
        _target_rect
      )
    ) + 'px';
  const _bottom_layout_position_top =
    _el_offset.top + _target_rect.height + SPECCER_PIN_SPACE + 'px';
  const _positional_styles = await position.getRec(dissectionEl, targetEl);

  let _dissection_styles = {};

  if (area.indexOf(DissectAreaEnum.Left) !== -1) {
    if (area.indexOf(DissectAreaEnum.Full) !== -1) {
      const { left, top, height } = _positional_styles.toLeft({
        sourceWidth: SPECCER_MEASURE_SIZE
      });

      _dissection_styles = {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`
      };
    } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
      const { left, top, height, width } = _positional_styles.fromTop();

      _dissection_styles = {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`,
        width: `${width}px`
      };
    } else {
      const { left, top } = _positional_styles.toLeft({
        center: true,
        modifier: SPECCER_PIN_SPACE
      });

      _dissection_styles = {
        left: `${left}px`,
        top: `${top}px`
      };
    }
  } else if (area.indexOf(DissectAreaEnum.Right) !== -1) {
    if (area.indexOf(DissectAreaEnum.Full) !== -1) {
      _dissection_styles = {
        left: _el_offset.left + _target_rect.width + 'px',
        top: _el_offset.top + 'px',
        height: _target_rect.height + 'px'
      };
    } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
      _dissection_styles = {
        left: _el_offset.left + 'px',
        top: _el_offset.top + 'px',
        height: _target_rect.height + 'px',
        width: _target_rect.width + 'px'
      };
    } else {
      const { left, top } = _positional_styles.fromRight({
        center: true,
        modifier: SPECCER_PIN_SPACE
      });

      _dissection_styles = {
        left: `${left}px`,
        top: `${top}px`
      };
    }
  } else if (area.indexOf(DissectAreaEnum.Top) !== -1) {
    if (area.indexOf(DissectAreaEnum.Full) !== -1) {
      _dissection_styles = {
        top: _el_offset.top + SPECCER_MEASURE_SIZE_NEG + 'px',
        left: _el_offset.left + 'px',
        width: _target_rect.width + 'px'
      };
    } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
      _dissection_styles = {
        top: _el_offset.top + 'px',
        left: _el_offset.left + 'px',
        height: _target_rect.height + 'px',
        width: _target_rect.width + 'px'
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
        top: _el_offset.top + _target_rect.height + 'px',
        left: _el_offset.left + 'px',
        width: _target_rect.width + 'px'
      };
    } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
      _dissection_styles = {
        top: _el_offset.top + 'px',
        left: _el_offset.left + 'px',
        height: _target_rect.height + 'px',
        width: _target_rect.width + 'px'
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
        left: _el_offset.left + _target_rect.width + 'px',
        top: _el_offset.top + 'px',
        height: _target_rect.height + 'px'
      };
    } else if (area.indexOf(DissectAreaEnum.Enclose) !== -1) {
      _dissection_styles = {
        left: _el_offset.left + _target_rect.width + 'px',
        top: _el_offset.top + 'px',
        height: _target_rect.height + 'px',
        width: _target_rect.width + 'px'
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
