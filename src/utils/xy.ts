import { coords } from './coords';

/**
 * Object containing functions to retrieve specific x and y coordinates from a DOMRect.
 */
export const xy = {
  /**
   * Get the x and y coordinates of the center of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the coordinates from.
   * @returns {{ x: number, y: number }} The x and y coordinates of the center.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const centerCoordinates = xy.center(rect);
   * // centerCoordinates.x and centerCoordinates.y will contain the coordinates
   * ```
   */
  center: (rect: DOMRect): { x: number; y: number } => ({
    x: coords.center_x(rect),
    y: coords.center_y(rect)
  }),

  /**
   * Get the x and y coordinates of the top center of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the coordinates from.
   * @returns {{ x: number, y: number }} The x and y coordinates of the top center.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const topCenterCoordinates = xy.top(rect);
   * // topCenterCoordinates.x and topCenterCoordinates.y will contain the coordinates
   * ```
   */
  top: (rect: DOMRect): { x: number; y: number } => ({
    x: coords.center_x(rect),
    y: coords.top(rect)
  }),

  /**
   * Get the x and y coordinates of the right center of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the coordinates from.
   * @returns {{ x: number, y: number }} The x and y coordinates of the right center.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const rightCenterCoordinates = xy.right(rect);
   * // rightCenterCoordinates.x and rightCenterCoordinates.y will contain the coordinates
   * ```
   */
  right: (rect: DOMRect): { x: number; y: number } => ({
    x: coords.right(rect),
    y: coords.center_y(rect)
  }),

  /**
   * Get the x and y coordinates of the bottom center of a DOMRect.
   * @param {DOMRect} rect - The DOMRect to retrieve the coordinates from.
   * @returns {{ x: number, y: number }} The x and y coordinates of the bottom center.
   * @example
   * ```ts
   * const rect = element.getBoundingClientRect();
   * const bottomCenterCoordinates = xy.bottom(rect);
   * // bottomCenterCoordinates.x and bottomCenterCoordinates.y will contain the coordinates
   * ```
   */
  bottom: (rect: DOMRect): { x: number; y: number } => ({
    x: coords.center_x(rect),
    y: coords.bottom(rect)
  })

  // Additional functions with x and y coordinates can be added here...
};
