import { SpeccerOptionsInterface } from '../../types/speccer';
import { getPositionsForSVGPath, getSVGPath } from '../bezier';
import { direction_of_element } from '../direction-of-element';
import { uniqueID } from '../id';
import { add as addStyle } from '../styles';

/**
 * Class representing a DrawSVGLine instance.
 */
export class DrawSVGLine {
  #canvas: HTMLElement | SVGElement | null;
  #originalPathElement: HTMLElement | SVGPathElement | null;
  startElement: HTMLElement;
  stopElement: HTMLElement;
  options: SpeccerOptionsInterface;
  line: SVGPathElement;

  /**
   * Creates a new DrawSVGLine instance.
   * @param {HTMLElement} startElement - The starting element for the line.
   * @param {HTMLElement} stopElement - The ending element for the line.
   * @param {SpeccerOptionsInterface} [options] - The ending element for the line.
   */
  constructor(
    startElement: HTMLElement,
    stopElement: HTMLElement,
    options: SpeccerOptionsInterface = {} as SpeccerOptionsInterface
  ) {
    this.#init(startElement, stopElement, options);
  }

  /**
   * Initializes the DrawSVGLine instance.
   * @param {HTMLElement} startElement - The starting element for the line.
   * @param {HTMLElement} stopElement - The ending element for the line.
   * @param {SpeccerOptionsInterface} [options] - The ending element for the line.
   * @throws Will throw an error if required elements are missing or not in the DOM.
   */
  #init(
    startElement: HTMLElement,
    stopElement: HTMLElement,
    options: SpeccerOptionsInterface = {} as SpeccerOptionsInterface
  ) {
    if (!startElement || !stopElement) {
      throw Error('Missing inputs startElement and stopElement');
    }

    if (!document.body.contains(stopElement)) {
      throw Error('stopElement is not in the DOM');
    }

    if (!document.body.contains(startElement)) {
      throw Error('startElement is not in the DOM');
    }

    this.startElement = startElement;
    this.stopElement = stopElement;
    this.options = options;

    this.#canvas = document.getElementById('ph-speccer-svg');
    this.#originalPathElement = document.getElementById('ph-speccer-path');

    if (!this.#originalPathElement || !this.#canvas) {
      throw Error(
        'Missing required SVG element to draw lines. Please see the documentation'
      );
    }

    const { body, documentElement: html } = document;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    addStyle(this.#canvas, {
      height: `${height}px`
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
      throw Error('No path given to draw!');
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

    const { pin } = this.options;

    if (pin?.text) {
      _new_path.classList.add('text');
    }

    if (path.parentNode) {
      this.line = path.parentNode.insertBefore(_new_path, path.nextSibling);
    } else {
      throw Error('No parentNode found for path');
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
