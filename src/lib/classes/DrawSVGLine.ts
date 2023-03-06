'use strict';

import { uniqueID } from '../id';
import * as cardinal from '../cardinal';
import { getPositionsForSVGPath, getSVGPath } from 'lib/bezier';

export class DrawSVGLine {
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

  async draw(path: SVGPathElement) {
    if (!path) {
      throw 'No path given to draw!';
    }

    const _id = uniqueID();
    const _path_el_id = `ph_draw_path-path-${_id}`;
    const _new_path = path.cloneNode(false) as SVGPathElement;

    _new_path.setAttribute('id', _path_el_id);
    _new_path.setAttribute(
      'data-start-el',
      this.startElement.getAttribute('id') || 'no-id-found'
    );
    _new_path.classList.remove('original');
    _new_path.classList.add('speccer');

    if (path.parentNode) {
      this.line = path.parentNode.insertBefore(_new_path, path.nextSibling);
    } else {
      throw 'No parentNode found for path';
    }

    const _direction = await cardinal.direction_of_element({
      start: this.startElement,
      stop: this.stopElement,
      crude: true
    });
    const { pos1, pos2 } = getPositionsForSVGPath(_direction);
    const _d = await getSVGPath(this.startElement, this.stopElement, {
      pos1,
      pos2
    });

    this.line.setAttribute('data-direction', _direction);
    this.line.setAttribute('data-pos1', pos1);
    this.line.setAttribute('data-pos2', pos2);

    this.line.setAttribute('d', _d); //svg attributes
  }
}

window.DrawSVGLine = DrawSVGLine;
