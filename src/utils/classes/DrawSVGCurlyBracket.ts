'use strict';

import { uniqueID } from '../id';
import { getCurlySVGPath, getPositionsForCurlySVGPath } from '../bezier';
import { direction_of_element } from '../direction-of-element';

/**
 * Class representing a DrawSVGCurlyBracket instance.
 */
export class DrawSVGCurlyBracket {
  #canvas: HTMLElement | SVGElement | null;
  #originalPathElement: HTMLElement | SVGPathElement | null;
  startElement: HTMLElement;
  stopElement: HTMLElement;
  firstPathElement: SVGPathElement;
  secondPathElement: SVGPathElement;

  /**
   * Creates a new DrawSVGCurlyBracket instance.
   * @param startElement - The starting element for the bracket.
   * @param stopElement - The ending element for the bracket.
   */
  constructor(startElement: HTMLElement, stopElement: HTMLElement) {
    this.#init(startElement, stopElement);
  }

  /**
   * Initializes the DrawSVGCurlyBracket instance.
   * @param startElement - The starting element for the bracket.
   * @param stopElement - The ending element for the bracket.
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

    this.connect();
  }

  /**
   * Connects and draws the curly bracket.
   */
  connect() {
    this.draw(this.#originalPathElement as SVGPathElement);
  }

  /**
   * Creates a new path element based on the provided path.
   * @param path - The SVGPathElement to be used as the base path.
   * @throws Will throw an error if no path is provided.
   * @returns A new SVGPathElement.
   */
  #getPathElement(path: SVGPathElement) {
    if (!path) {
      throw new Error('No path given to #getPathElement!');
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

  /**
   * Draws the curly bracket based on the provided path.
   * @param path - The SVGPathElement to be used as the base path.
   * @throws Will throw an error if no path is provided.
   */
  async draw(path: SVGPathElement) {
    if (!path) {
      throw new Error('No path given to draw!');
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
      throw new Error('No parentNode found for path');
    }

    const _direction = await direction_of_element({
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
    this.firstPathElement.setAttribute('d', _first_path_d); // SVG attributes
    this.secondPathElement.setAttribute('data-direction', _direction);
    this.secondPathElement.setAttribute('data-pos1', path2pos1);
    this.secondPathElement.setAttribute('data-pos2', path2pos2);
    this.secondPathElement.setAttribute('d', _second_path_d); // SVG attributes
  }
}

// Exporting the class as a global object (if needed)
window.DrawSVGCurlyBracket = DrawSVGCurlyBracket;
