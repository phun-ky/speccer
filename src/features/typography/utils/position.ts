import { TypographyAreaEnum } from '../../../types/enums/area';
import { SpeccerOptionsInterface } from '../../../types/speccer';
import { pinSpace } from '../../../utils/css';
import { decimal } from '../../../utils/number';
import {
  get_horizontal_center_of_els,
  get_vertical_center_of_els,
  offset
} from '../../../utils/position';

/**
 * Calculate the position for the speccer element relative to the target element.
 *
 * @param {SpeccerOptionsInterface} options - Options.
 * @param {HTMLElement} targetElement - The target element.
 * @param {HTMLElement} speccerElement - The speccer element to position.
 * @returns {Promise<{ left: string, top: string }>} - A promise that resolves with the calculated position.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * const speccerElement = document.getElementById('speccer');
 * const options = {…};
 * const position = await position(options, targetElement, speccerElement);
 * console.log(position); // { left: '10px', top: '20px' }
 * ```
 */
export const position = async (
  options: SpeccerOptionsInterface,
  targetElement: HTMLElement,
  speccerElement: HTMLElement
): Promise<{ left: string; top: string }> => {
  const _target_rect = targetElement.getBoundingClientRect();
  const SPECCER_PIN_SPACE = pinSpace(speccerElement);
  const _speccer_el_rect = speccerElement.getBoundingClientRect();
  const _el_offset = await offset(targetElement);
  const { typography, position } = options;

  if (typography && position === TypographyAreaEnum.Right) {
    const _right_layout_position_left =
      _el_offset.left + _target_rect.width + SPECCER_PIN_SPACE + 'px';
    const _right_layout_position_top =
      decimal(
        get_vertical_center_of_els(
          _el_offset.top,
          _speccer_el_rect,
          _target_rect
        )
      ) + 'px';

    return {
      left: _right_layout_position_left,
      top: _right_layout_position_top
    };
  }

  if (typography && position === TypographyAreaEnum.Top) {
    const _top_layout_position_left =
      decimal(
        get_horizontal_center_of_els(
          _el_offset.left,
          _speccer_el_rect,
          _target_rect
        )
      ) + 'px';
    const _top_layout_position_top =
      _el_offset.top - _speccer_el_rect.height - SPECCER_PIN_SPACE + 'px';

    return {
      left: _top_layout_position_left,
      top: _top_layout_position_top
    };
  }

  if (typography && position === TypographyAreaEnum.Bottom) {
    const _bottom_layout_position_left =
      decimal(
        get_horizontal_center_of_els(
          _el_offset.left,
          _speccer_el_rect,
          _target_rect
        )
      ) + 'px';
    const _bottom_layout_position_top =
      _el_offset.top + _target_rect.height + SPECCER_PIN_SPACE + 'px';

    return {
      left: _bottom_layout_position_left,
      top: _bottom_layout_position_top
    };
  }

  const _left_layout_position_left =
    _el_offset.left - _speccer_el_rect.width - SPECCER_PIN_SPACE + 'px';
  const _left_layout_position_top =
    decimal(
      get_vertical_center_of_els(_el_offset.top, _speccer_el_rect, _target_rect)
    ) + 'px';

  return {
    left: _left_layout_position_left,
    top: _left_layout_position_top
  };
};
