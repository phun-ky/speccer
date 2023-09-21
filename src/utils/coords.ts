/**
 * Coordinates object containing functions to retrieve specific coordinates from a DOMRect.
 */
export const coords = {
  top: (rect: DOMRect) => rect.top,
  right: (rect: DOMRect) => rect.left + rect.width,
  bottom: (rect: DOMRect) => rect.top + rect.height,
  left: (rect: DOMRect) => rect.left,
  center_x: (rect: DOMRect) => rect.left + rect.width / 2,
  center_y: (rect: DOMRect) => rect.top + rect.height / 2
};
