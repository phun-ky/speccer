import { SpeccerOptionsInterface } from '../../types/speccer';
import { uniqueID } from '../id';
import { intrinsic_coords } from '../intrinsic-coords';
import { add as addStyle } from '../styles';

/**
 * Class representing a DrawCircle instance.
 */
export class DrawCircle {
  #canvas: HTMLElement | SVGElement | null;
  el: HTMLElement;
  circle: SVGCircleElement;
  radius: number;
  options: SpeccerOptionsInterface;

  /**
   * Creates a new DrawCircle instance.
   * @param {HTMLElement} el - The element used to position the circle.
   * @param {number} radius - The radius of the circle
   * @param {SpeccerOptionsInterface} options - The options used to identify position
   */
  constructor(
    el: HTMLElement,
    radius: number,
    options: SpeccerOptionsInterface
  ) {
    this.#init(el, radius, options);
  }

  /**
   * Initializes the DrawCircle instance.
   * @param {HTMLElement} el - The element used to position the circle.
   * @param {number} radius - The radius of the circle
   * @param {SpeccerOptionsInterface} options - The options used to identify position
   * @throws Will throw an error if required elements are missing or not in the DOM.
   */
  #init(el: HTMLElement, radius: number, options: SpeccerOptionsInterface) {
    if (!el || !radius || !options) {
      throw Error('Missing inputs el or radius or options');
    }

    if (!document.body.contains(el)) {
      throw Error('el is not in the DOM');
    }

    this.el = el;
    this.radius = radius;
    this.options = options;

    this.#canvas = document.getElementById('ph-speccer-svg');

    if (!this.#canvas) {
      throw Error(
        'Missing required SVG element to draw circles. Please see the documentation'
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

    this.draw();
  }

  /**
   * Draws the circle based on the provided el and radius.
   */
  async draw() {
    const _id = uniqueID();
    const _circle_el_id = `ph_draw-circle-${_id}`;

    this.circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    ) as unknown as SVGCircleElement;

    const _el_ID = this.el.getAttribute('id') || uniqueID();

    this.el.setAttribute('id', _el_ID);

    this.circle.setAttribute('id', _circle_el_id);
    this.circle.setAttribute('data-el', _el_ID);
    this.circle.classList.add('ph-speccer');
    this.circle.classList.add('speccer');
    this.circle.classList.add('circle');

    if (this.#canvas) {
      this.#canvas.appendChild(this.circle);
    } else {
      throw Error('No parentNode found for circle');
    }

    const { x, y } = await intrinsic_coords(this.el, this.options.position);

    this.circle.setAttribute('r', this.radius + ''); // SVG attributes
    this.circle.setAttribute('cx', Math.round(x) + ''); // SVG attributes
    this.circle.setAttribute(
      'cy',
      Math.round(y + document.documentElement.scrollTop) + ''
    ); // SVG attributes
    this.circle.setAttribute('fill', 'currentColor'); // SVG attributes
  }
}

// Exporting the class as a global object (if needed)
window.DrawCircle = DrawCircle;
