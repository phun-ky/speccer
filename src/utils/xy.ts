import { coords } from './coords';

/**
 * Coordinates object containing functions to retrieve specific x and y coordinates from a DOMRect.
 */
export const xy = {
  center: (rect: DOMRect) => ({
    x: coords.center_x(rect),
    y: coords.center_y(rect)
  }),
  top: (rect: DOMRect) => ({ x: coords.center_x(rect), y: coords.top(rect) }),
  right: (rect: DOMRect) => ({
    x: coords.right(rect),
    y: coords.center_y(rect)
  }),
  bottom: (rect: DOMRect) => ({
    x: coords.center_x(rect),
    y: coords.bottom(rect)
  }),
  left: (rect: DOMRect) => ({ x: coords.left(rect), y: coords.center_y(rect) }),
  'right-top': (rect: DOMRect) => ({
    x: coords.right(rect),
    y: coords.top(rect)
  }),
  'right-bottom': (rect: DOMRect) => ({
    x: coords.right(rect),
    y: coords.bottom(rect)
  }),
  'left-top': (rect: DOMRect) => ({
    x: coords.left(rect),
    y: coords.top(rect)
  }),
  'left-bottom': (rect: DOMRect) => ({
    x: coords.left(rect),
    y: coords.bottom(rect)
  }),
  'top-left': (rect: DOMRect) => ({
    x: coords.left(rect),
    y: coords.top(rect)
  }),
  'top-right': (rect: DOMRect) => ({
    x: coords.right(rect),
    y: coords.top(rect)
  }),
  'bottom-left': (rect: DOMRect) => ({
    x: coords.left(rect),
    y: coords.bottom(rect)
  }),
  'bottom-right': (rect: DOMRect) => ({
    x: coords.right(rect),
    y: coords.bottom(rect)
  }),
  'top-center': (rect: DOMRect) => ({
    x: coords.center_x(rect),
    y: coords.top(rect)
  }),
  'right-center': (rect: DOMRect) => ({
    x: coords.right(rect),
    y: coords.center_y(rect)
  }),
  'bottom-center': (rect: DOMRect) => ({
    x: coords.center_x(rect),
    y: coords.bottom(rect)
  }),
  'left-center': (rect: DOMRect) => ({
    x: coords.left(rect),
    y: coords.center_y(rect)
  })
};
