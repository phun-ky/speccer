/* eslint no-console:0 */
import { MeasureAreaEnum } from '../../types/enums/area';
import { SpeccerOptionsInterface } from '../../types/speccer';
import { cx, set as setClassNames } from '../../utils/classnames';
import { getOptions } from '../../utils/get-options';
import { uniqueID } from '../../utils/id';
import { isElementHidden } from '../../utils/node';
import { getRec } from '../../utils/position';
import { add as addStyles } from '../../utils/styles';
import { waitForFrame } from '../../utils/wait';

/**
 * Create a measurement element with optional text, area, and element type.
 *
 * @param {string | number} text - The text to display on the element.
 * @param {SpeccerOptionsInterface} options - The options.
 * @param {string} id - The element id.
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
  options: SpeccerOptionsInterface,
  id: string,
  tag = 'span'
): HTMLElement => {
  const _el = document.createElement(tag);

  _el.setAttribute('title', `${text}px`);
  _el.setAttribute('id', id);
  _el.setAttribute('data-measure', `${parseInt(String(text), 10)}px`);

  const { measure, position } = options;
  const _class_names = cx('ph-speccer speccer measure', {
    height: measure?.height || false,
    width: measure?.width || false,
    slim: measure?.slim || false,
    [position]: true
  });

  setClassNames(_el, _class_names);

  return _el;
};

/**
 * Create a measurement element and add it to the body with styles matching a specified target element based on the attribute values from `data-speccer`.
 *
 * ![measure](https://github.com/phun-ky/speccer/blob/main/public/measure.png?raw=true)
 *
 * @param {HTMLElement} targetElement - The target element to match styles with.
 * @returns {Promise<void>} - A promise that resolves after creating and styling the measurement element.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * element(targetElement);
 * ```
 */
export const element = async (targetElement: HTMLElement): Promise<void> => {
  if (!targetElement) return;

  if (isElementHidden(targetElement)) return;

  const _areas_string: string =
    targetElement.getAttribute('data-speccer') || '';

  await waitForFrame();

  const _options = getOptions(_areas_string, getComputedStyle(targetElement));

  if (_options.type !== 'measure' || !_options.measure) return;

  const { measure, position } = _options;

  await waitForFrame();

  const _target_rect = targetElement.getBoundingClientRect();
  const _width_modifier = !measure.slim ? 48 : 0;
  const _height_modifier = !measure.slim ? 96 : 0;
  const _pin_element_id = `speccer-${_options.slug}-${targetElement.getAttribute('id') || uniqueID()}`;

  targetElement.setAttribute('data-speccer-element-id', _pin_element_id);

  if (measure.width) {
    if (position === MeasureAreaEnum.Bottom) {
      const _measure_el = create(_target_rect.width, _options, _pin_element_id);

      document.body.appendChild(_measure_el);

      const _positional_styles = await getRec(_measure_el, targetElement);

      if (measure.slim) {
        const { left, top, width } = _positional_styles.fromBottom({
          center: false
        });

        await addStyles(_measure_el, {
          left: `${left}px`,
          top: `${top}px`,
          width: `${width}px`
        });
      } else {
        const { left, top, width, height } = _positional_styles.absolute({
          center: false
        });

        await addStyles(_measure_el, {
          left: `${left}px`,
          top: `${top}px`,
          width: `${width}px`,
          height: `${height + _width_modifier}px`
        });
      }
    } else {
      const _measure_el = create(_target_rect.width, _options, _pin_element_id);

      document.body.appendChild(_measure_el);

      const _positional_styles = await getRec(_measure_el, targetElement);

      if (measure.slim) {
        const { left, top, width } = _positional_styles.fromTop({
          center: false
        });

        await addStyles(_measure_el, {
          left: `${left}px`,
          top: `${top}px`,
          width: `${width}px`
        });
      } else {
        const { left, top, width, height } = _positional_styles.absolute({
          center: false
        });

        await addStyles(_measure_el, {
          left: `${left}px`,
          top: `${top - _width_modifier}px`,
          width: `${width}px`,
          height: `${height + _width_modifier}px`
        });
      }
    }
  } else if (measure.height) {
    if (position === MeasureAreaEnum.Right) {
      const _measure_el = create(
        _target_rect.height,
        _options,
        _pin_element_id
      );

      document.body.appendChild(_measure_el);

      const _positional_styles = await getRec(_measure_el, targetElement);

      if (measure.slim) {
        const { left, top, height } = _positional_styles.fromRight({
          center: false
        });

        await addStyles(_measure_el, {
          left: `${left}px`,
          top: `${top}px`,
          height: `${height}px`
        });
      } else {
        const { left, top, height, width } = _positional_styles.absolute({
          center: false
        });

        await addStyles(_measure_el, {
          left: `${left}px`,
          top: `${top}px`,
          height: `${height}px`,
          width: `${width + _height_modifier}px`
        });
      }
    } else {
      const _measure_el = create(
        _target_rect.height,
        _options,
        _pin_element_id
      );

      document.body.appendChild(_measure_el);

      const _positional_styles = await getRec(_measure_el, targetElement);

      if (measure.slim) {
        const { left, top, height } = _positional_styles.fromLeft({
          center: false
        });

        await addStyles(_measure_el, {
          left: `${left}px`,
          top: `${top}px`,
          height: `${height}px`
        });
      } else {
        const { left, top, height, width } = _positional_styles.absolute({
          center: false
        });

        await addStyles(_measure_el, {
          left: `${left - _height_modifier}px`,
          top: `${top}px`,
          height: `${height}px`,
          width: `${width + _height_modifier}px`
        });
      }
    }
  }
};
