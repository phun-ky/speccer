'use strict';

import { uniqueID } from '../id';
import * as cardinal from '../cardinal';

export const DrawLine = function (this: typeof DrawLine) {
  this._init();
};

DrawLine.prototype._clear_lines = function () {
  document.querySelectorAll('path.ph.path:not(.original)').forEach((el) => el.remove());
};

DrawLine.prototype._init = function () {
  this._original_path_el = document.getElementById('ph-speccer-path');

  if (!this._original_path_el) {
    throw 'Missing target SVG. Are you sure you have added it in the DOM?';
  }
};

DrawLine.prototype.connect = function (startEl: HTMLElement, stopEl: HTMLElement) {
  this._line(this._original_path_el, startEl, stopEl);
};

DrawLine.prototype._get_positions_for_path = function (direction: string) {
  let _pos1: string;
  let _pos2: string;

  switch (direction) {
    case 'north': {
      _pos1 = 'bottom';
      _pos2 = 'top';
      break;
    }
    case 'north-east': {
      _pos1 = 'left';
      _pos2 = 'right';
      break;
    }
    case 'east': {
      _pos1 = 'left';
      _pos2 = 'right';
      break;
    }
    case 'south-east': {
      _pos1 = 'left';
      _pos2 = 'right';
      break;
    }
    case 'south': {
      _pos1 = 'top';
      _pos2 = 'bottom';
      break;
    }
    case 'south-west':
    case 'west':
    case 'north-west':
    default: {
      _pos1 = 'right';
      _pos2 = 'left';
      break;
    }
  }

  return {
    pos1: _pos1,
    pos2: _pos2
  };
};

DrawLine.prototype._get_path = function (startEl: HTMLElement, stopEl: HTMLElement) {
  const _direction = cardinal.direction_of_element({ stop: stopEl, start: startEl });

  console.log(_direction);

  const { pos1, pos2 } = this._get_positions_for_path(_direction);
  const { x1, y1, x2, y2 } = cardinal.get_coords_pair_from_objects(startEl, stopEl, pos1, pos2);
  const _p0 = { x: x1, y: y1 }; // The first point of line
  const _c0 = { x: x1 + (x2 - x1) / 2, y: y1 }; // Controller for p0
  const _c1 = { x: x1 + (x2 - x1) / 2, y: y2 }; // Controller for p1
  const _p1 = { x: x2, y: y2 }; // The last point of line

  return (
    'M ' + _p0.x + ' ' + _p0.y + 'C ' + _c0.x + ' ' + _c0.y + ', ' + _c1.x + ' ' + _c1.y + ', ' + _p1.x + ' ' + _p1.y
  );
};

DrawLine.prototype._line = function (path: SVGPathElement, startEl: HTMLElement, stopEl: HTMLElement) {
  if (!startEl || !stopEl) return;

  const _id = uniqueID();
  const _path_el_id = `ph_draw_path-path-${_id}`;
  const _new_path = path.cloneNode(false) as SVGPathElement;

  _new_path.setAttribute('id', _path_el_id);

  _new_path.classList.remove('original');

  if (path.parentNode) {
    path.parentNode.insertBefore(_new_path, path.nextSibling);
  }

  const _d = this._get_path(startEl, stopEl);

  _new_path.setAttribute('d', _d); //svg attributes
};
