/* eslint no-console:0 */
'use strict';

import { waitForFrame } from './wait';

/**
 * Returns the angle between two sets of coordinates
 *
 * See {@link https://stackoverflow.com/a/9614122/460422}
 * @param cx {number}
 * @param cy {number}
 * @param ex {number}
 * @param ey {number}
 * @param [normalize=true] {bool} If the angle output should be normalized to return value between 0° and 360°
 * @returns {number} The angle of the given coordinates
 */
export const angle = (
  cx: number,
  cy: number,
  ex: number,
  ey: number,
  normalize = true
) => {
  if (!cx || !cy || !ex || !ey) {
    throw new SyntaxError('Missing input for `angle`');
  }

  if (
    typeof cx !== 'number' ||
    typeof cy !== 'number' ||
    typeof ex !== 'number' ||
    typeof ey !== 'number'
  ) {
    throw new TypeError(
      `Parameters for \`angle\` does not have required type. Requires number! Got: ${typeof cx} ${typeof cy} ${typeof ex} ${typeof ey}`
    );
  }

  const dy = ey - cy;
  const dx = ex - cx;

  let theta = Math.atan2(dy, dx); // range (-PI, PI]

  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]

  if (normalize && theta < 0) theta = 360 + theta; // range [0, 360)

  return theta;
};

export const coords = {
  top: (rect: DOMRect) => rect.top,
  right: (rect: DOMRect) => rect.left + rect.width,
  bottom: (rect: DOMRect) => rect.top + rect.height,
  left: (rect: DOMRect) => rect.left,
  center_x: (rect: DOMRect) => rect.left + rect.width / 2,
  center_y: (rect: DOMRect) => rect.top + rect.height / 2
};

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

export const get_coords_pair_from_objects = async (
  el1: HTMLElement,
  el2: HTMLElement,
  pos1 = 'center',
  pos2 = 'center'
) => {
  if (!el1 || !el2) {
    throw 'No element given';
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

export const intrinsic_coords = async (el: HTMLElement, pos = 'center') => {
  if (!pos) {
    throw 'No position given';
  }

  if (typeof pos !== 'string') {
    throw `The position given is not the required type: pos: ${typeof pos}`;
  }

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

  if (!_allowed_positions.includes(pos)) {
    throw `The position given does not match allowed positions to use! Valid positions are: ${_allowed_positions.join(
      ', '
    )}`;
  }

  await waitForFrame();

  const _el_rect = el.getBoundingClientRect();

  return xy[pos](_el_rect);
};

export const direction_of_element = async ({ start, stop, crude = false }) => {
  const { x1, y1, x2, y2 } = await get_coords_pair_from_objects(start, stop);
  const _angle = angle(x1, y1, x2, y2);
  const _direction = crude
    ? cardinal_direction_crude(_angle)
    : cardinal_direction(_angle);

  return _direction;
};

/**
 * Gives you the cardinal direction based on degrees
 * Note! The degrees start at 0, which is EAST (orignally, north should be 0, but here, north is 270),
 * and we travel clockwise
 */
export const cardinal_direction = (degrees: number): string => {
  if (degrees > 360) throw RangeError('parameter cannot exceed 360');

  if (degrees < 0) throw RangeError('parameter cannot be lower than 0');

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
 * Note! The degrees start at 0, which is EAST (orignally, north should be 0, but here, north is 270),
 * and we travel clockwise
 */
export const cardinal_direction_crude = (degrees: number): string => {
  if (degrees > 360) throw RangeError('parameter cannot exceed 360');

  if (degrees < 0) throw RangeError('parameter cannot be lower than 0');

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
