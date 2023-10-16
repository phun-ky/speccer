/**
 * A set of functions to retrieve specific coordinates from a DOMRect.
 */
export const coords = {
  /**
   * Get the top coordinate of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the top coordinate from.
   * @returns {number} The top coordinate.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const topCoordinate = coords.top(rect);
   * ```
   */
  top: (rect: DOMRect): number => rect.top,

  /**
   * Get the right coordinate of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the right coordinate from.
   * @returns {number} The right coordinate.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const rightCoordinate = coords.right(rect);
   * ```
   */
  right: (rect: DOMRect): number => rect.left + rect.width,

  /**
   * Get the bottom coordinate of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the bottom coordinate from.
   * @returns {number} The bottom coordinate.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const bottomCoordinate = coords.bottom(rect);
   * ```
   */
  bottom: (rect: DOMRect): number => rect.top + rect.height,

  /**
   * Get the left coordinate of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the left coordinate from.
   * @returns {number} The left coordinate.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const leftCoordinate = coords.left(rect);
   * ```
   */
  left: (rect: DOMRect): number => rect.left,

  /**
   * Get the x-coordinate of the center of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the x-coordinate of the center from.
   * @returns {number} The x-coordinate of the center.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const centerXCoordinate = coords.center_x(rect);
   * ```
   */
  center_x: (rect: DOMRect): number => rect.left + rect.width / 2,

  /**
   * Get the y-coordinate of the center of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the y-coordinate of the center from.
   * @returns {number} The y-coordinate of the center.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const centerYCoordinate = coords.center_y(rect);
   * ```
   */
  center_y: (rect: DOMRect): number => rect.top + rect.height / 2
};
