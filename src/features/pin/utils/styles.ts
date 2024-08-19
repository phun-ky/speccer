import { PinStylesOptionsType } from '../../../types/bezier';
import { SpeccerStylesReturnType } from '../../../types/styles';
import {
  isBottomArea,
  isEncloseArea,
  isBracketArea,
  isLeftArea,
  isParentArea,
  isRightArea,
  isSubtle
} from '../../../utils/area';
import { pinSpace, measureSize } from '../../../utils/css';
import { getRec } from '../../../utils/position';
import { waitForFrame } from '../../../utils/wait';

/**
 * Get styles for pin elements based on the specified area and options.
 *
 * @param {string} area - The area description.
 * @param {HTMLElement} targetElement - The target element.
 * @param {HTMLElement} pinElement - The pin element.
 * @param {HTMLElement} parentElement - The parent element.
 * @param {PinStylesOptionsType} options - Optional styles options.
 * @returns {Promise<SpeccerStylesReturnType>} - The computed styles.
 *
 * @example
 * ```ts
 * const area = 'top-left';
 * const targetElement = document.getElementById('target');
 * const parentElement = document.getElementById('parent');
 * const pinElement = document.getElementById('pin');
 * const options = { isCurly: true };
 * const styles = await styles(area, targetElement, pinElement, parentElement, options);
 * console.log(styles);
 * ```
 */
export const styles = async (
  area: string,
  targetElement: HTMLElement,
  pinElement: HTMLElement,
  parentElement: HTMLElement,
  options?: PinStylesOptionsType
): Promise<SpeccerStylesReturnType> => {
  await waitForFrame();

  const { isCurly = false } = options || {};
  const SPECCER_PIN_SPACE = pinSpace(pinElement);
  const SPECCER_MEASURE_SIZE = measureSize(pinElement);
  const _positional_styles = await getRec(pinElement, targetElement);

  if (isEncloseArea(area)) {
    const { left, top, height, width } = _positional_styles.absolute();

    return {
      left: `${left}px`,
      top: `${top}px`,
      height: `${height}px`,
      width: `${width}px`
    };
  }

  if (
    isParentArea(area) &&
    !isBracketArea(area) &&
    !isCurly &&
    !isSubtle(area)
  ) {
    if (isRightArea(area)) {
      const { top } = _positional_styles.fromRight({
        center: true
      });

      await waitForFrame();

      const { left, width } = parentElement.getBoundingClientRect();

      return {
        left: `${left + width + SPECCER_PIN_SPACE}px`,
        top: `${top}px`
      };
    }

    if (isBottomArea(area)) {
      const { left } = _positional_styles.toBottom({
        center: true
      });

      await waitForFrame();

      const { top, height } = parentElement.getBoundingClientRect();

      return {
        left: `${left}px`,
        top: `${top + height + SPECCER_PIN_SPACE}px`
      };
    }

    if (isLeftArea(area)) {
      const { top } = _positional_styles.fromLeft({
        center: true
      });

      await waitForFrame();

      const { left } = parentElement.getBoundingClientRect();

      return {
        left: `${left - SPECCER_PIN_SPACE * 1.5}px`,
        top: `${top}px`
      };
    }

    const { left } = _positional_styles.fromTop({
      center: true
    });

    await waitForFrame();

    const { top } = parentElement.getBoundingClientRect();

    return {
      left: `${left}px`,
      top: `${top - SPECCER_PIN_SPACE * 1.5}px`
    };
  }

  if (isLeftArea(area)) {
    if (isBracketArea(area) && !isCurly) {
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
    if (isBracketArea(area) && !isCurly) {
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
    if (isBracketArea(area) && !isCurly) {
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

  if (isBracketArea(area) && !isCurly) {
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
