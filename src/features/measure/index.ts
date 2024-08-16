/* eslint no-console:0 */
import {
  isBottomArea,
  isHeightArea,
  isRightArea,
  isWidthArea
} from '../../utils/area';
import { set as setClassNames } from '../../utils/classnames';
import { getRec } from '../../utils/position';
import { get as getStyles, add as addStyles } from '../../utils/styles';
import { waitForFrame } from '../../utils/wait';

/**
 * Create a measurement element with optional text, area, and element type.
 *
 * @param {string | number} text - The text to display on the element.
 * @param {string | null} area - The area to specify with CSS class.
 * @param {string} tag - The element type.
 * @returns {HTMLElement} - The created measurement element.
 *
 * @example
 * ```ts
 * const measurement = create(100, 'width bottom', 'div');
 * document.body.appendChild(measurement);
 * ```
 */
export const create = (
  text: string | number = '',
  area: string | null = '',
  tag = 'span'
): HTMLElement => {
  const _el = document.createElement(tag);

  _el.setAttribute('title', `${text}px`);
  _el.setAttribute('data-measure', `${parseInt(String(text), 10)}px`);

  setClassNames(_el, `ph-speccer speccer measure ${area}`);

  return _el;
};

/**
 * Create a measurement element and add it to the body with styles matching a specified target element.
 *
 * ![measure](https://github.com/phun-ky/speccer/blob/main/public/measure.png?raw=true)
 *
 * @param {HTMLElement} targetEl - The target element to match styles with.
 * @returns {Promise<void>} - A promise that resolves after creating and styling the measurement element.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * element(targetElement);
 * ```
 */
export const element = async (targetEl: HTMLElement): Promise<void> => {
  if (!targetEl) return;

  const _areas_string: string | null = targetEl.getAttribute(
    'data-speccer-measure'
  );

  if (_areas_string === '' || !_areas_string) return;

  const _target_styles = await getStyles(targetEl);

  if (
    _target_styles.display === 'none' ||
    _target_styles.opacity === '0' ||
    _target_styles.visibility === 'hidden'
  )
    return;

  await waitForFrame();

  const _target_rect = targetEl.getBoundingClientRect();

  if (isWidthArea(_areas_string)) {
    if (isBottomArea(_areas_string)) {
      const _measure_el = create(_target_rect.width, _areas_string);

      document.body.appendChild(_measure_el);

      const _positional_styles = await getRec(_measure_el, targetEl);
      const { left, top, width } = _positional_styles.fromBottom({
        center: false
      });

      await addStyles(_measure_el, {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`
      });
    } else {
      const _measure_el = create(_target_rect.width, _areas_string);

      document.body.appendChild(_measure_el);

      const _positional_styles = await getRec(_measure_el, targetEl);
      const { left, top, width } = _positional_styles.fromTop({
        center: false
      });

      await addStyles(_measure_el, {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`
      });
    }
  } else if (isHeightArea(_areas_string)) {
    if (isRightArea(_areas_string)) {
      const _measure_el = create(_target_rect.height, _areas_string);

      document.body.appendChild(_measure_el);

      const _positional_styles = await getRec(_measure_el, targetEl);
      const { left, top, height } = _positional_styles.fromRight({
        center: false
      });

      await addStyles(_measure_el, {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`
      });
    } else {
      const _measure_el = create(_target_rect.height, _areas_string);

      document.body.appendChild(_measure_el);

      const _positional_styles = await getRec(_measure_el, targetEl);
      const { left, top, height } = _positional_styles.fromLeft({
        center: false
      });

      await addStyles(_measure_el, {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`
      });
    }
  }
};
