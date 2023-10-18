/**
 * Returns the angle between two sets of coordinates.
 *
 * @param {number} cx - The x-coordinate of the first point.
 * @param {number} cy - The y-coordinate of the first point.
 * @param {number} ex - The x-coordinate of the second point.
 * @param {number} ey - The y-coordinate of the second point.
 * @param {boolean} [normalize=true] - If the angle output should be normalized to a value between 0° and 360°.
 * @throws {SyntaxError} Missing input for `angle`.
 * @throws {TypeError} Parameters for `angle` do not have the required type.
 * @returns {number} The angle between the given coordinates.
 * @example
 * ```ts
 * // Calculate the angle between two points
 * const angleValue = angle(0, 0, 3, 4);
 * ```
 */
export const angle = (
  cx: number,
  cy: number,
  ex: number,
  ey: number,
  normalize = true
): number => {
  if (
    typeof cx == 'undefined' ||
    typeof cy == 'undefined' ||
    typeof ex == 'undefined' ||
    typeof ey == 'undefined'
  ) {
    throw new SyntaxError('Missing input for `angle`');
  }

  if (
    typeof cx !== 'number' ||
    typeof cy !== 'number' ||
    typeof ex !== 'number' ||
    typeof ey !== 'number'
  ) {
    throw new TypeError(
      `Parameters for \`angle\` do not have the required type. Requires number! Got: ${typeof cx} ${typeof cy} ${typeof ex} ${typeof ey}`
    );
  }

  const dy = ey - cy;
  const dx = ex - cx;

  let theta = Math.atan2(dy, dx); // range (-PI, PI]

  theta *= 180 / Math.PI; // radians to degrees, range (-180, 180]

  if (normalize && theta < 0) theta = 360 + theta; // range [0, 360)

  return theta;
};
