'use strict';

import { uniqueID } from '../id';
import * as cardinal from '../cardinal';
import { SPECCER_DEFAULT_PIN_SPACE } from 'lib/constants';

export class DrawLine {
  #canvas: HTMLElement | SVGElement | null;
  #originalPathElement: HTMLElement | SVGPathElement | null;
  startElement: HTMLElement;
  stopElement: HTMLElement;
  line: SVGPathElement;

  constructor(startElement: HTMLElement, stopElement: HTMLElement) {
    this.#init(startElement, stopElement);
  }

  #init(startElement: HTMLElement, stopElement: HTMLElement) {
    if (!startElement || !stopElement) {
      throw 'Missing inputs startElement and stopElement';
    }

    this.startElement = startElement;
    this.stopElement = stopElement;

    this.#canvas = document.getElementById('ph-speccer-svg');
    this.#originalPathElement = document.getElementById('ph-speccer-path');

    if (!this.#originalPathElement || !this.#canvas) {
      throw 'Missing required SVG element to draw lines. Please see the documentation';
    }

    this.connect();
  }
  static clearLines() {
    document
      .querySelectorAll('path.ph.path:not(.original)')
      .forEach((el) => el.remove());
  }

  connect() {
    this.draw(this.#originalPathElement as SVGPathElement);
  }

  #getPositionsForPath(direction: string) {
    let _pos1: string;
    let _pos2: string;

    switch (direction) {
      case 'north': {
        _pos1 = 'bottom';
        _pos2 = 'right';
        break;
      }
      case 'north-east':
      case 'east':
      case 'south-east': {
        _pos1 = 'left';
        _pos2 = 'right';
        break;
      }
      case 'south': {
        _pos1 = 'top';
        _pos2 = 'right';
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
  }

  getPath(startEl: HTMLElement, stopEl: HTMLElement) {
    const _direction = cardinal.direction_of_element({
      stop: stopEl,
      start: startEl
    });
    const { pos1, pos2 } = this.#getPositionsForPath(_direction);

    console.log(_direction, startEl, pos1, stopEl, pos2);

    const { x1, y1, x2, y2 } = cardinal.get_coords_pair_from_objects(
      startEl,
      stopEl,
      pos1,
      pos2
    );
    const _p0 = { x: x1, y: y1 }; // The first point of line
    const _c0 = { x: x1 + (x2 - x1) / 2, y: y1 }; // Controller for p0
    const _c1 = { x: x1 + (x2 - x1) / 2, y: y2 }; // Controller for p1
    const _p1 = { x: x2, y: y2 }; // The last point of line

    return (
      'M ' +
      _p0.x +
      ' ' +
      _p0.y +
      'C ' +
      _c0.x +
      ' ' +
      _c0.y +
      ', ' +
      _c1.x +
      ' ' +
      _c1.y +
      ', ' +
      _p1.x +
      ' ' +
      _p1.y
    );
  }

  async draw(path: SVGPathElement) {
    if (!path) {
      throw 'No path given to draw!';
    }

    const _id = uniqueID();
    const _path_el_id = `ph_draw_path-path-${_id}`;
    const _new_path = path.cloneNode(false) as SVGPathElement;

    _new_path.setAttribute('id', _path_el_id);
    _new_path.classList.remove('original');
    _new_path.classList.add('speccer');

    if (path.parentNode) {
      this.line = path.parentNode.insertBefore(_new_path, path.nextSibling);
    } else {
      throw 'No parentNode found for path';
    }

    const _d = this.getPath(this.startElement, this.stopElement);

    this.line.setAttribute('d', _d); //svg attributes
  }
}

window.DrawLine = DrawLine;
