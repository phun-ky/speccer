/* eslint no-console:0 */

/**
 * Gives you the cardinal direction based on degrees.
 * Note: The degrees start at 0, which is EAST (originally, north should be 0, but here, north is 270),
 * and we travel clockwise.
 *
 * @param {number} degrees - The angle in degrees.
 * @throws {RangeError} Parameter cannot exceed 360.
 * @throws {RangeError} Parameter cannot be lower than 0.
 * @returns {string} - The cardinal direction.
 * @example
 * ```ts
 * // Get the cardinal direction for an angle in degrees
 * const direction = cardinal_direction(45);
 * ```
 */
export const cardinal_direction = (degrees: number): string => {
  if (degrees > 360) throw new RangeError('Parameter cannot exceed 360');

  if (degrees < 0) throw new RangeError('Parameter cannot be lower than 0');

  if (degrees >= 0 && degrees <= 22.5) return 'east';

  if (degrees >= 22.5 && degrees <= 67.5) return 'south-east';

  if (degrees >= 67.5 && degrees <= 112.5) return 'south';

  if (degrees >= 112.5 && degrees <= 157.5) return 'south-west';

  if (degrees >= 157.5 && degrees <= 202.5) return 'west';

  if (degrees >= 202.5 && degrees <= 247.5) return 'north-west';

  if (degrees >= 247.5 && degrees <= 292.5) return 'north';

  if (degrees >= 292.5 && degrees <= 337.5) return 'north-east';

  return 'east';
};

/**
 * Gives you the cardinal direction based on degrees (crude version).
 * Note: The degrees start at 0, which is EAST (originally, north should be 0, but here, north is 270),
 * and we travel clockwise.
 *
 * @param {number} degrees - The angle in degrees.
 * @throws {RangeError} Parameter cannot exceed 360.
 * @throws {RangeError} Parameter cannot be lower than 0.
 * @returns {string} - The cardinal direction (NSEW).
 * @example
 * ```ts
 * // Get the cardinal direction (crude) for an angle in degrees
 * const direction = cardinal_direction_crude(45);
 * ```
 */
export const cardinal_direction_crude = (degrees: number): string => {
  if (degrees > 360) throw new RangeError('Parameter cannot exceed 360');

  if (degrees < 0) throw new RangeError('Parameter cannot be lower than 0');

  if (degrees >= 45 && degrees <= 135) return 'south';

  if (degrees > 135 && degrees <= 225) return 'west';

  if (degrees > 225 && degrees <= 315) return 'north';

  return 'east';
};
