import { intrinsic_coords } from './intrinsic-coords';

/**
 * Get the x and y coordinates of two elements and return them as an object.
 *
 * @param {HTMLElement} el1 - The first HTML element.
 * @param {HTMLElement} el2 - The second HTML element.
 * @param {string} [pos1='center'] - The position to use for the first element.
 * @param {string} [pos2='center'] - The position to use for the second element.
 * @throws {Error} No element given.
 * @returns {Promise<{ x1: number, y1: number, x2: number, y2: number }>} - An object containing the coordinates.
 * @example
 * // Get coordinates for two elements
 * const element1 = document.getElementById('element1');
 * const element2 = document.getElementById('element2');
 * const coordinates = await get_coords_pair_from_objects(element1, element2);
 */
export const getCoordsPairFromObjects = async (
  el1: HTMLElement,
  el2: HTMLElement,
  pos1 = 'center',
  pos2 = 'center'
): Promise<{ x1: number; y1: number; x2: number; y2: number }> => {
  if (!el1 || !el2) {
    throw new Error('No element given');
  }

  const { x: x1, y: y1 } = await intrinsic_coords(el1, pos1);
  const { x: x2, y: y2 } = await intrinsic_coords(el2, pos2);

  return {
    x1,
    y1,
    x2,
    y2
  };
};
