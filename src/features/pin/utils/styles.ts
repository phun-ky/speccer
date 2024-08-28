import { PinAreaEnum } from '../../../types/enums/area';
import { SpeccerOptionsInterface } from '../../../types/speccer';
import { SpeccerStylesReturnType } from '../../../types/styles';
import { pinSpace, measureSize } from '../../../utils/css';
import { getRec } from '../../../utils/position';
import { waitForFrame } from '../../../utils/wait';

/**
 * Get styles for pin elements based on the specified area and options.
 *
 * @param {HTMLElement} targetElement - The target element.
 * @param {HTMLElement} pinElement - The pin element.
 * @param {HTMLElement} parentElement - The parent element.
 * @param {SpeccerOptionsInterface} options - The options.
 * @returns {Promise<SpeccerStylesReturnType>} - The computed styles.
 *
 * @example
 * ```ts
 * const area = 'top-left';
 * const targetElement = document.getElementById('target');
 * const parentElement = document.getElementById('parent');
 * const pinElement = document.getElementById('pin');
 * const options = { useCurlyBrackets: true };
 * const styles = await styles(area, targetElement, pinElement, parentElement, options);
 * console.log(styles);
 * ```
 */
export const styles = async (
  targetElement: HTMLElement,
  pinElement: HTMLElement,
  parentElement: HTMLElement,
  options: SpeccerOptionsInterface
): Promise<SpeccerStylesReturnType> => {
  await waitForFrame();

  const { pin = {} as Record<string, boolean>, position } = options;
  const { useCurlyBrackets, subtle, bracket, text, parent, enclose } = pin;
  const SPECCER_PIN_SPACE = pinSpace(pinElement);
  const SPECCER_MEASURE_SIZE = measureSize(pinElement);
  const _positional_styles = await getRec(pinElement, targetElement);

  if (enclose) {
    const { left, top, height, width } = _positional_styles.absolute();

    return {
      left: `${left}px`,
      top: `${top}px`,
      height: `${height}px`,
      width: `${width}px`
    };
  }

  if ((parent || text) && !bracket && !useCurlyBrackets && !subtle) {
    if (position === PinAreaEnum.Right) {
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

    if (position === PinAreaEnum.Bottom) {
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

    if (position === PinAreaEnum.Left) {
      const { top } = _positional_styles.fromLeft({
        center: true
      });

      await waitForFrame();

      const { left } = parentElement.getBoundingClientRect();

      return {
        // If we're pinning with text only, we need to move the element a bit further to the left
        left: `${left - SPECCER_PIN_SPACE * 1.5 - (text ? 170 : 0)}px`,
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

  if (position === PinAreaEnum.Left) {
    if (bracket && !useCurlyBrackets) {
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
      modifier: useCurlyBrackets ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
    });

    return {
      left: `${left}px`,
      top: `${top}px`
    };
  }

  if (position === PinAreaEnum.Right) {
    if (bracket && !useCurlyBrackets) {
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
      modifier: useCurlyBrackets ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
    });

    return {
      left: `${left}px`,
      top: `${top}px`
    };
  }

  if (position === PinAreaEnum.Bottom) {
    if (bracket && !useCurlyBrackets) {
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
      modifier: useCurlyBrackets ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
    });

    return {
      left: `${left}px`,
      top: `${top}px`
    };
  }

  if (bracket && !useCurlyBrackets) {
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
    modifier: useCurlyBrackets ? SPECCER_PIN_SPACE / 1.5 : SPECCER_PIN_SPACE
  });

  return {
    left: `${left}px`,
    top: `${top}px`
  };
};
