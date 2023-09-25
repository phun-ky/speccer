/* eslint no-console:0 */
'use strict';

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
 * // Get the cardinal direction for an angle in degrees
 * const direction = cardinal_direction(45);
 */
export const cardinal_direction = (degrees: number): string => {
  if (degrees > 360) throw new RangeError('Parameter cannot exceed 360');

  if (degrees < 0) throw new RangeError('Parameter cannot be lower than 0');

  if (degrees >= 0 && degrees <= 22.5) {
    return 'east';
  } else if (degrees >= 22.5 && degrees <= 67.5) {
    return 'south-east';
  } else if (degrees >= 67.5 && degrees <= 112.5) {
    return 'south';
  } else if (degrees >= 112.5 && degrees <= 157.5) {
    return 'south-west';
  } else if (degrees >= 157.5 && degrees <= 202.5) {
    return 'west';
  } else if (degrees >= 202.5 && degrees <= 247.5) {
    return 'north-west';
  } else if (degrees >= 247.5 && degrees <= 292.5) {
    return 'north';
  } else if (degrees >= 292.5 && degrees <= 337.5) {
    return 'north-east';
  } else {
    return 'east';
  }
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
 * // Get the cardinal direction (crude) for an angle in degrees
 * const direction = cardinal_direction_crude(45);
 */
export const cardinal_direction_crude = (degrees: number): string => {
  if (degrees > 360) throw new RangeError('Parameter cannot exceed 360');

  if (degrees < 0) throw new RangeError('Parameter cannot be lower than 0');

  if (degrees >= 45 && degrees <= 135) {
    return 'south';
  } else if (degrees > 135 && degrees <= 225) {
    return 'west';
  } else if (degrees > 225 && degrees <= 315) {
    return 'north';
  } else if (degrees > 315) {
    return 'east';
  } else {
    return 'east';
  }
};