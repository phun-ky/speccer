import { DissectStylesOptionsType } from '../../../types/bezier';
import { SpeccerStylesReturnType } from '../../../types/styles';
import {
  isBottomArea,
  isEncloseArea,
  isFullArea,
  isLeftArea,
  isRightArea
} from '../../../utils/area';
import { pinSpace, measureSize } from '../../../utils/css';
import { getRec } from '../../../utils/position';
import { waitForFrame } from '../../../utils/wait';

/**
 * Get styles for dissected elements based on the specified area and options.
 *
 * @param {string} area - The area description.
 * @param {HTMLElement} targetEl - The target element.
 * @param {HTMLElement} dissectionEl - The dissection element.
 * @param {DissectStylesOptionsType} options - Optional styles options.
 * @returns {Promise<SpeccerStylesReturnType>} - The computed styles.
 *
 * @example
 * ```ts
 * const area = 'top-left';
 * const targetElement = document.getElementById('target');
 * const dissectionElement = document.getElementById('dissection');
 * const options = { isCurly: true };
 * const styles = await styles(area, targetElement, dissectionElement, options);
 * console.log(styles);
 * ```
 */
export const styles = async (
  area: string,
  targetEl: HTMLElement,
  dissectionEl: HTMLElement,
  options?: DissectStylesOptionsType
): Promise<SpeccerStylesReturnType> => {
  await waitForFrame();

  const { isCurly = false } = options || {};
  const SPECCER_PIN_SPACE = pinSpace(dissectionEl);
  const SPECCER_MEASURE_SIZE = measureSize(dissectionEl);
  const _positional_styles = await getRec(dissectionEl, targetEl);

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
    }

    const { left, top } = _positional_styles.fromLeft({
      center: true,
      modifier: isCurly ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
    });

    return {
      left: `${left}px`,
      top: `${top}px`
    };
  }

  if (isRightArea(area)) {
    if (isFullArea(area) && !isCurly) {
      const { left, top, height } = _positional_styles.fromRight({
        center: false
      });

      return {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`
      };
    }

    const { left, top } = _positional_styles.fromRight({
      center: true,
      modifier: isCurly ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
    });

    return {
      left: `${left}px`,
      top: `${top}px`
    };
  }

  if (isBottomArea(area)) {
    if (isFullArea(area) && !isCurly) {
      const { left, top, width } = _positional_styles.fromBottom({
        center: false
      });

      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`
      };
    }

    const { left, top } = _positional_styles.fromBottom({
      center: true,
      modifier: isCurly ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
    });

    return {
      left: `${left}px`,
      top: `${top}px`
    };
  }

  if (isFullArea(area) && !isCurly) {
    const { left, top, width } = _positional_styles.fromTop({
      center: false
    });

    return {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`
    };
  }

  const { left, top } = _positional_styles.fromTop({
    center: true,
    modifier: isCurly ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
  });

  return {
    left: `${left}px`,
    top: `${top}px`
  };
};
