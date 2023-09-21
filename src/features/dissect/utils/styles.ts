import * as css from '../../../utils/css';
import * as position from '../../../utils/position';
import {
  isBottomArea,
  isEncloseArea,
  isFullArea,
  isLeftArea,
  isRightArea
} from '../../../utils/area';
import { DissectStylesOptionsType } from 'types/bezier';

export const styles = async (
  area: string,
  targetEl: HTMLElement,
  dissectionEl: HTMLElement,
  options?: DissectStylesOptionsType
) => {
  const { isCurly = false } = options || {};
  const SPECCER_PIN_SPACE = css.pinSpace(dissectionEl);
  const SPECCER_MEASURE_SIZE = css.measureSize(dissectionEl);
  const _positional_styles = await position.getRec(dissectionEl, targetEl);

  if (isEncloseArea(area)) {
    const { left, top, height, width } = _positional_styles.absolute();

    return {
      left: `${left}px`,
      top: `${top}px`,
      height: `${height}px`,
      width: `${width}px`
    };
  }

  if (isLeftArea(area)) {
    if (isFullArea(area) && !isCurly) {
      const { left, top, height } = _positional_styles.fromLeft({
        sourceWidth: SPECCER_MEASURE_SIZE
      });

      return {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`
      };
    } else {
      const { left, top } = _positional_styles.fromLeft({
        center: true,
        modifier: isCurly ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
      });

      return {
        left: `${left}px`,
        top: `${top}px`
      };
    }
  } else if (isRightArea(area)) {
    if (isFullArea(area) && !isCurly) {
      const { left, top, height } = _positional_styles.fromRight({
        center: false
      });

      return {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`
      };
    } else {
      const { left, top } = _positional_styles.fromRight({
        center: true,
        modifier: isCurly ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
      });

      return {
        left: `${left}px`,
        top: `${top}px`
      };
    }
  } else if (isBottomArea(area)) {
    if (isFullArea(area) && !isCurly) {
      const { left, top, width } = _positional_styles.fromBottom({
        center: false
      });

      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`
      };
    } else {
      const { left, top } = _positional_styles.fromBottom({
        center: true,
        modifier: isCurly ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
      });

      return {
        left: `${left}px`,
        top: `${top}px`
      };
    }
  } else {
    if (isFullArea(area) && !isCurly) {
      const { left, top, width } = _positional_styles.fromTop({
        center: false
      });

      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`
      };
    } else {
      const { left, top } = _positional_styles.fromTop({
        center: true,
        modifier: isCurly ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
      });

      return {
        left: `${left}px`,
        top: `${top}px`
      };
    }
  }
};
