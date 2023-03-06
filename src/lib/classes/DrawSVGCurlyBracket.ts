'use strict';

import { uniqueID } from '../id';
import * as cardinal from '../cardinal';
import { getCurlySVGPath, getPositionsForCurlySVGPath } from 'lib/bezier';

export class DrawSVGCurlyBracket {
  #canvas: HTMLElement | SVGElement | null;
  #originalPathElement: HTMLElement | SVGPathElement | null;
  startElement: HTMLElement;
  stopElement: HTMLElement;
  firstPathElement: SVGPathElement;
  secondPathElement: SVGPathElement;

  constructor(startElement: HTMLElement, stopElement: HTMLElement) {
    this.#init(startElement, stopElement);
  }

  #init(startElement: HTMLElement, stopElement: HTMLElement) {
    if (!startElement || !stopElement) {
      throw 'Missing inputs startElement and stopElement';
    }

    if (!document.body.contains(stopElement)) {
      throw 'stopElement is not in the DOM';
    }

    if (!document.body.contains(startElement)) {
      throw 'startElement is not in the DOM';
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

  connect() {
    this.draw(this.#originalPathElement as SVGPathElement);
  }

  #getPathElement(path: SVGPathElement) {
    if (!path) {
      throw 'No path given to #getPathElement!';
    }

    const _id = uniqueID();
    const _path_el_id = `ph_draw_path-path-${_id}`;
    const _new_path = path.cloneNode(false) as SVGPathElement;

    _new_path.setAttribute(
      'data-start-el',
      this.startElement.getAttribute('id') || 'no-id-found'
    );
    _new_path.setAttribute('id', _path_el_id);
    _new_path.classList.remove('original');
    _new_path.classList.add('speccer');

    return _new_path;
  }

  async draw(path: SVGPathElement) {
    if (!path) {
      throw 'No path given to draw!';
    }

    const _first_path_element = this.#getPathElement(path);
    const _second_path_element = this.#getPathElement(path);

    if (path.parentNode) {
      this.firstPathElement = path.parentNode.insertBefore(
        _first_path_element,
        path.nextSibling
      );
      this.secondPathElement = path.parentNode.insertBefore(
        _second_path_element,
        path.nextSibling
      );
    } else {
      throw 'No parentNode found for path';
    }

    const _direction = await cardinal.direction_of_element({
      stop: this.stopElement,
      start: this.startElement,
      crude: true
    });
    const { path1pos1, path1pos2, path2pos1, path2pos2 } =
      getPositionsForCurlySVGPath(_direction);
    const _first_path_d = await getCurlySVGPath(
      this.startElement,
      this.stopElement,
      {
        pos1: path1pos1,
        pos2: path1pos2,
        firstSet: true,
        direction: _direction
      }
    );
    const _second_path_d = await getCurlySVGPath(
      this.startElement,
      this.stopElement,
      {
        pos1: path2pos1,
        pos2: path2pos2,
        direction: _direction
      }
    );

    this.firstPathElement.setAttribute('data-direction', _direction);
    this.firstPathElement.setAttribute('data-pos1', path1pos1);
    this.firstPathElement.setAttribute('data-pos2', path1pos2);
    this.firstPathElement.setAttribute('d', _first_path_d); //svg attributes
    this.secondPathElement.setAttribute('data-direction', _direction);
    this.secondPathElement.setAttribute('data-pos1', path2pos1);
    this.secondPathElement.setAttribute('data-pos2', path2pos2);
    this.secondPathElement.setAttribute('d', _second_path_d); //svg attributes
  }
}

window.DrawSVGCurlyBracket = DrawSVGCurlyBracket;
