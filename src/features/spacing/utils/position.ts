import { SpeccerOptionsInterface } from '../../../types/speccer';
import { offset } from '../../../utils/position';
import { add as addStyles } from '../../../utils/styles';
import { waitForFrame } from '../../../utils/wait';

/**
 * Set the position and dimensions of a spacing element relative to a target element.
 *
 * @param {string} property - The CSS property to set (e.g., 'marginTop', 'marginLeft', etc.).
 * @param {number} value - The value of the CSS property.
 * @param {HTMLElement} spacingElement - The spacing element.
 * @param {HTMLElement} targetElement - The target element.
 * @param {SpeccerOptionsInterface|undefined} [options] - Options.
 * @returns {Promise<void>} - A promise that resolves after setting the position and dimensions.
 *
 * @example
 * ```ts
 * const spacingElement = document.getElementById('spacing');
 * const targetElement = document.getElementById('target');
 * position('marginTop', 20, spacingElement, targetElement);
 * ```
 */
export const position = async (
  property: string,
  value: number,
  spacingElement: HTMLElement,
  targetElement: HTMLElement,
  options?: SpeccerOptionsInterface | undefined
): Promise<void> => {
  await waitForFrame();

  const _target_rect = targetElement.getBoundingClientRect();
  const _target_offset = await offset(targetElement);
  const _width_modifier = options?.spacing?.bound ? 0 : 96;
  const _height_modifier = options?.spacing?.bound ? 0 : 48;

  if (property === 'marginTop')
    addStyles(spacingElement, {
      height: `${value}px`,
      width: _target_rect.width + _width_modifier + 'px',
      left: _target_offset.left - _width_modifier + 'px',
      top: _target_offset.top - value + 'px'
    });

  if (property === 'marginRight')
    addStyles(spacingElement, {
      height: _target_rect.height + _height_modifier + 'px',
      width: `${value}px`,
      left: _target_offset.left + parseInt(_target_rect.width + '', 10) + 'px',
      top: _target_offset.top + 'px'
    });

  if (property === 'marginBottom')
    addStyles(spacingElement, {
      height: `${value}px`,
      width: _target_rect.width + _width_modifier + 'px',
      left: _target_offset.left - _width_modifier + 'px',
      top: _target_offset.top + parseInt(_target_rect.height + '', 10) + 'px'
    });

  if (property === 'marginLeft')
    addStyles(spacingElement, {
      height: _target_rect.height + _height_modifier + 'px',
      width: `${value}px`,
      left: _target_offset.left - value + 'px',
      top: _target_offset.top + 'px'
    });

  if (property === 'paddingTop')
    addStyles(spacingElement, {
      height: `${value}px`,
      width: _target_rect.width + _width_modifier + 'px',
      left: _target_offset.left - _width_modifier + 'px',
      top: _target_offset.top + 'px'
    });

  if (property === 'paddingBottom')
    addStyles(spacingElement, {
      height: `${value}px`,
      width: _target_rect.width + _width_modifier + 'px',
      left: _target_offset.left - _width_modifier + 'px',
      top:
        _target_offset.top +
        (parseInt(_target_rect.height + '', 10) - value) +
        'px'
    });

  if (property === 'paddingRight')
    addStyles(spacingElement, {
      height: _target_rect.height + _height_modifier + 'px',
      width: `${value}px`,
      left:
        _target_offset.left +
        (parseInt(_target_rect.width + '', 10) - value) +
        'px',
      top: _target_offset.top + 'px'
    });

  if (property === 'paddingLeft')
    addStyles(spacingElement, {
      height: _target_rect.height + _height_modifier + 'px',
      width: `${value}px`,
      left: _target_offset.left + 'px',
      top: _target_offset.top + 'px'
    });
};
