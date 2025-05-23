import { isNotString } from './typeof';
import { waitForFrame } from './wait';
import { xy } from './xy';

/* node:coverage disable */
/**
 * Get the intrinsic coordinates of an element based on a specified position.
 *
 * @param {HTMLElement} el - The HTML element.
 * @param {string} [pos='center'] - The position to use.
 * @throws {Error} No position given.
 * @throws {Error} The position given is not the required type.
 * @returns {Promise<{ x: number, y: number }>} - An object containing the coordinates.
 * @example
 * ```ts
 * // Get intrinsic coordinates for an element
 * const element = document.getElementById('example');
 * const coordinates = await intrinsic_coords(element, 'top-left');
 * ```
 */
/* node:coverage enable */
export const intrinsic_coords = async (
  el: HTMLElement,
  pos = 'center'
): Promise<{ x: number; y: number }> => {
  if (!pos) throw Error('No position given');

  if (isNotString(pos))
    throw Error(
      `The position given is not the required type: pos: ${typeof pos}`
    );

  const _allowed_positions = [
    'center',
    'left',
    'right',
    'top',
    'bottom',
    'right-top',
    'right-bottom',
    'left-top',
    'left-bottom',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'top-center',
    'right-center',
    'bottom-center',
    'left-center'
  ];

  if (!_allowed_positions.includes(pos))
    throw Error(
      `The position given does not match allowed positions to use! Valid positions are: ${_allowed_positions.join(
        ', '
      )}`
    );

  await waitForFrame();

  const _el_rect = el.getBoundingClientRect();

  return xy[pos](_el_rect);
};
