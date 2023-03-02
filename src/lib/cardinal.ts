/* eslint no-console:0 */
'use strict';

// https://stackoverflow.com/a/9614122/460422
export const angle = (cx: number, cy: number, ex: number, ey: number) => {
  const dy = ey - cy;
  const dx = ex - cx;

  let theta = Math.atan2(dy, dx); // range (-PI, PI]

  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]

  //if (theta < 0) theta = 360 + theta; // range [0, 360)
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
  left: (rect: DOMRect) => ({ x: coords.left(rect), y: coords.center_y(rect) })
};

export const get_coords_pair_from_objects = (
  el1: HTMLElement,
  el2: HTMLElement,
  pos1 = 'center',
  pos2 = 'center'
) => {
  if (!el1 || !el2) {
    throw 'No element given';
  }

  const { x: x1, y: y1 } = intrinsic_coords(el1, pos1);
  const { x: x2, y: y2 } = intrinsic_coords(el2, pos2);

  return {
    x1,
    y1,
    x2,
    y2
  };
};

export const intrinsic_coords = (el: HTMLElement, pos = 'center') => {
  if (!pos) {
    throw 'No position given';
  }

  if (typeof pos !== 'string') {
    throw `The position given is not the required type: pos: ${typeof pos}`;
  }

  const _allowed_positions = ['center', 'left', 'right', 'top', 'bottom'];

  if (!_allowed_positions.includes(pos)) {
    throw 'The position given does not match allowed positions to use! Valid positions are: center, left, right, top or bottom';
  }

  const _el1_rect = el.getBoundingClientRect();

  return xy[pos](_el1_rect);
};

export const direction_of_element = ({ start, stop }) => {
  const { x1, y1, x2, y2 } = get_coords_pair_from_objects(start, stop);
  const _angle = angle(x1, y1, x2, y2);
  const _direction = cardinal_direction(_angle);

  // console.log(`\`${start.id}\` is ${_direction} of \`${stop.id}\` with angle: \`${_angle}\``);
  return _direction;
};

export const cardinal_direction = (degrees: number): string => {
  if (degrees >= 22.5 && degrees <= 67.5) {
    return 'north-west';
  } else if (degrees >= 67.5 && degrees <= 112.5) {
    return 'north';
  } else if (degrees >= 112.5 && degrees <= 157.5) {
    return 'north-east';
  } else if (degrees >= 157.5 && degrees <= 202.5) {
    return 'east';
  } else if (degrees >= 202.5 && degrees <= 247.5) {
    return 'south-east';
  } else if (degrees >= 247.5 && degrees <= 292.5) {
    return 'south';
  } else if (degrees >= 292.5 && degrees <= 337.5) {
    return 'south-west';
  } else if (degrees >= 337.5) {
    return 'west';
  } else if (degrees <= 22.5 && degrees >= -22.5) {
    return 'west';
  } else if (degrees <= -22.5 && degrees >= -67.5) {
    return 'south-west';
  } else if (degrees <= -67.5 && degrees >= -112.5) {
    return 'south';
  } else if (degrees <= -112.5 && degrees >= -157.5) {
    return 'south-east';
  } else if (degrees <= -157.5 && degrees >= -202.5) {
    return 'east';
  } else if (degrees <= -202.5 && degrees >= -247.5) {
    return 'north-east';
  } else if (degrees <= -247.5 && degrees >= -292.5) {
    return 'north';
  } else if (degrees <= -292.5 && degrees >= -337.5) {
    return 'north-west';
  } else if (degrees <= -337.5) {
    return 'west';
  } else {
    return 'south';
  }
};
