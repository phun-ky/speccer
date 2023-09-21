import { angle } from './angle';
import { cardinal_direction, cardinal_direction_crude } from './cardinal';
import { getCoordsPairFromObjects } from './get-coords-pair-from-objects';

/**
 * Get the direction of an element based on its position relative to another element.
 *
 * @param {Object} options - Options for direction calculation.
 * @param {HTMLElement} options.start - The starting HTML element.
 * @param {HTMLElement} options.stop - The stopping HTML element.
 * @param {boolean} [options.crude=false] - If the direction should be calculated crudely (NSEW).
 * @returns {Promise<string>} - The calculated direction.
 * @example
 * // Get the direction of one element relative to another
 * const startElement = document.getElementById('startElement');
 * const stopElement = document.getElementById('stopElement');
 * const direction = await direction_of_element({ start: startElement, stop: stopElement });
 */
export const direction_of_element = async ({
  start,
  stop,
  crude = false
}: {
  start: HTMLElement;
  stop: HTMLElement;
  crude?: boolean;
}): Promise<string> => {
  const { x1, y1, x2, y2 } = await getCoordsPairFromObjects(start, stop);
  const _angle = angle(x1, y1, x2, y2);
  const _direction = crude
    ? cardinal_direction_crude(_angle)
    : cardinal_direction(_angle);

  return _direction;
};
