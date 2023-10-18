'use strict';

import { uniqueID } from '../id';
import { getPositionsForSVGPath, getSVGPath } from '../bezier';
import { direction_of_element } from '../direction-of-element';
import { add as addStyle } from '../styles';

/**
 * Class representing a DrawSVGLine instance.
 */
export class DrawSVGLine {
  #canvas: HTMLElement | SVGElement | null;
  #originalPathElement: HTMLElement | SVGPathElement | null;
  startElement: HTMLElement;
  stopElement: HTMLElement;
  line: SVGPathElement;

  /**
   * Creates a new DrawSVGLine instance.
   * @param startElement - The starting element for the line.
   * @param stopElement - The ending element for the line.
   */
  constructor(startElement: HTMLElement, stopElement: HTMLElement) {
    this.#init(startElement, stopElement);
  }

  /**
   * Initializes the DrawSVGLine instance.
   * @param startElement - The starting element for the line.
   * @param stopElement - The ending element for the line.
   * @throws Will throw an error if required elements are missing or not in the DOM.
   */
  #init(startElement: HTMLElement, stopElement: HTMLElement) {
    if (!startElement || !stopElement) {
      throw new Error('Missing inputs startElement and stopElement');
    }

    if (!document.body.contains(stopElement)) {
      throw new Error('stopElement is not in the DOM');
    }

    if (!document.body.contains(startElement)) {
      throw new Error('startElement is not in the DOM');
    }

    this.startElement = startElement;
    this.stopElement = stopElement;

    this.#canvas = document.getElementById('ph-speccer-svg');
    this.#originalPathElement = document.getElementById('ph-speccer-path');

    if (!this.#originalPathElement || !this.#canvas) {
      throw new Error(
        'Missing required SVG element to draw lines. Please see the documentation'
      );
    }

    addStyle(this.#canvas, {
      height: `${document.body.scrollHeight}px`
    });

    this.connect();
  }

  /**
   * Connects and draws the line.
   */
  connect() {
    this.draw(this.#originalPathElement as SVGPathElement);
  }

  /**
   * Draws the line based on the provided path.
   * @param path - The SVGPathElement to be used as the base path.
   * @throws Will throw an error if no path is provided.
   */
  async draw(path: SVGPathElement) {
    if (!path) {
      throw new Error('No path given to draw!');
    }

    const _id = uniqueID();
    const _path_el_id = `ph_draw_path-path-${_id}`;
    const _new_path = path.cloneNode(false) as SVGPathElement;
    const dataStartElID = this.startElement.getAttribute('id') || uniqueID();

    this.startElement.setAttribute('id', dataStartElID);

    _new_path.setAttribute('id', _path_el_id);
    _new_path.setAttribute('data-start-el', dataStartElID);
    _new_path.classList.remove('original');
    _new_path.classList.add('speccer');

    if (path.parentNode) {
      this.line = path.parentNode.insertBefore(_new_path, path.nextSibling);
    } else {
      throw new Error('No parentNode found for path');
    }

    const _direction = await direction_of_element({
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

    this.line.setAttribute('d', _d); // SVG attributes
  }
}

// Exporting the class as a global object (if needed)
window.DrawSVGLine = DrawSVGLine;
