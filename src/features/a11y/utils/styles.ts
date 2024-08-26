import { SpeccerStylesReturnType } from '../../../types/styles';
import { pinSpace } from '../../../utils/css';
import { getRec } from '../../../utils/position';
import { waitForFrame } from '../../../utils/wait';

/**
 * Calculates and returns the styles for an accessibility element based on its type.
 *
 * @param {string} type - Type of the accessibility element ('tabstops', 'landmark', 'region', 'shortcut', or default).
 * @param {HTMLElement} targetElement - Target HTML element.
 * @param {HTMLElement} a11yElement - Accessibility HTML element to be styled.
 * @returns {Promise<SpeccerStylesReturnType>} A Promise resolving with the calculated styles.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('targetElement');
 * const a11yElement = document.createElement('div');
 *
 * // Example for tab order element styles
 * const tabstopsStyles = await styles('tabstops', targetElement, a11yElement);
 *
 * // Example for landmark element styles
 * const landmarkStyles = await styles('landmark', targetElement, a11yElement);
 *
 * // Example for region element styles
 * const regionStyles = await styles('region', targetElement, a11yElement);
 *
 * // Example for shortcut element styles
 * const shortcutStyles = await styles('shortcut', targetElement, a11yElement);
 *
 * // Example for default styles
 * const defaultStyles = await styles('default', targetElement, a11yElement);
 * ```
 */
export const styles = async (
  type: string,
  targetElement: HTMLElement,
  a11yElement: HTMLElement
): Promise<SpeccerStylesReturnType> => {
  await waitForFrame();

  const SPECCER_PIN_SPACE = pinSpace(a11yElement);
  const _positional_styles = await getRec(a11yElement, targetElement);

  if (type === 'tabstops') {
    let { left, top } = _positional_styles.fromTop();

    left -= 32;
    top += 32;

    if (left <= 0) left = 32;

    if (top <= 0) top = 32;

    return {
      left: `${left}px`,
      top: `${top}px`
    };
  }

  if (type === 'landmark') {
    let { left, top } = _positional_styles.fromTop();

    left -= 16;
    top -= 16;

    if (left <= 0) left = 32;

    if (top <= 0) top = 32;

    return {
      left: `${left}px`,
      top: `${top}px`
    };
  }

  if (type === 'region') {
    const { left, top, height, width } = _positional_styles.fromTop();

    return {
      height: `${height}px`,
      width: `${width}px`,
      left: `${left}px`,
      top: `${top}px`
    };
  }

  if (type === 'shortcut') {
    const { left, top } = _positional_styles.fromBottom();

    return {
      left: `${left}px`,
      top: `${top}px`
    };
  }

  const { left, top } = _positional_styles.fromTop({
    center: true,
    modifier: SPECCER_PIN_SPACE
  });

  return {
    left: `${left - 32}px`,
    top: `${top - 32}px`
  };
};
