import * as css from '../../lib/css';
import * as position from '../../lib/position';
import {
  isBottomArea,
  isEncloseArea,
  isFullArea,
  isLeftArea,
  isRightArea
} from 'lib/area';
import { SPECCER_DEFAULT_PIN_SPACE } from 'lib/constants';

export const styles = async (
  area: string,
  targetEl: HTMLElement,
  dissectionEl: HTMLElement,
  useSVG = false
) => {
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
    if (isFullArea(area)) {
      const { left, top, height } = _positional_styles.toLeft({
        sourceWidth: SPECCER_MEASURE_SIZE
      });

      return {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`
      };
    } else {
      const { left, top } = _positional_styles.toLeft({
        center: !useSVG,
        modifier: SPECCER_PIN_SPACE
      });

      return {
        left: `${left}px`,
        top: `${top}px`
      };
    }
  } else if (isRightArea(area)) {
    if (isFullArea(area)) {
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
        center: !useSVG,
        modifier: SPECCER_PIN_SPACE
      });

      return {
        left: `${left}px`,
        top: `${top}px`
      };
    }
  } else if (isBottomArea(area)) {
    if (isFullArea(area)) {
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
        center: !useSVG,
        modifier: SPECCER_PIN_SPACE
      });

      return {
        left: `${useSVG ? left + SPECCER_PIN_SPACE / 2 : left}px`,
        top: `${top}px`
      };
    }
  } else {
    if (isFullArea(area)) {
      const { left, top, width } = _positional_styles.toTop({
        center: false
      });

      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`
      };
    } else {
      const { left, top } = _positional_styles.toTop({
        center: !useSVG,
        modifier: SPECCER_PIN_SPACE
      });

      return {
        left: `${useSVG ? left + SPECCER_PIN_SPACE / 2 : left}px`,
        top: `${top}px`
      };
    }
  }
};
