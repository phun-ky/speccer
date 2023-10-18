import { describe, it, expect } from '@jest/globals';

import {
  get_horizontal_center_of_els,
  get_vertical_center_of_els,
  offset,
  offsetWithCenter,
  getRec
} from '../position';

describe('position', () => {
  // Helper function to create a DOM element
  const createDivElement = (id) => {
    document.body.innerHTML += `<div id="${id}"></div>`;

    const el = document.querySelector(`#${id}`);

    return el;
  };
  // Helper function to set the position of an element
  const setElementPosition = (element, top, left, width, height) => {
    element.style.position = 'fixed';
    element.style.top = `${top}px`;
    element.style.left = `${left}px`;
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
  };

  it('should calculate the horizontal center', () => {
    const startEl = createDivElement('source');
    const stopEl = createDivElement('target');

    setElementPosition(startEl, 0, 0, 100, 50);
    setElementPosition(stopEl, 0, 0, 200, 30);

    // @ts-expect-error object-possibly-null
    const startRect = startEl.getBoundingClientRect();
    // @ts-expect-error object-possibly-null
    const stopRect = stopEl.getBoundingClientRect();
    const center = get_horizontal_center_of_els(0, startRect, stopRect);

    expect(center).toBe(0); // Check if it correctly calculates the horizontal center
  });

  it('should calculate the vertical center', () => {
    const startEl = createDivElement('vertical-source');
    const stopEl = createDivElement('vertical-target');

    setElementPosition(startEl, 0, 0, 50, 100);
    setElementPosition(stopEl, 0, 0, 30, 200);

    // @ts-expect-error object-possibly-null
    const startRect = startEl.getBoundingClientRect();
    // @ts-expect-error object-possibly-null
    const stopRect = stopEl.getBoundingClientRect();
    const center = get_vertical_center_of_els(0, startRect, stopRect);

    expect(center).toBe(0); // Check if it correctly calculates the vertical center
  });

  it('should calculate the offset', async () => {
    const targetElement = document.getElementById('target');

    setElementPosition(targetElement, 100, 200, 50, 30);

    // @ts-expect-error object-possibly-null
    const offsetProperties = await offset(targetElement);

    expect(offsetProperties).toEqual({
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });
  });

  it('should calculate the offset with center aligned', async () => {
    const sourceElement = document.getElementById('source');
    const targetElement = document.getElementById('target');

    setElementPosition(sourceElement, 0, 0, 100, 50);
    setElementPosition(targetElement, 0, 0, 200, 30);

    const offsetProperties = await offsetWithCenter(
      // @ts-expect-error object-possibly-null
      sourceElement,
      targetElement
    );

    expect(offsetProperties).toEqual({
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });
  });

  it('should calculate various positioning properties', async () => {
    const sourceElement = document.getElementById('source');
    const targetElement = document.getElementById('target');

    setElementPosition(sourceElement, 100, 200, 50, 30);
    setElementPosition(targetElement, 200, 100, 30, 50);

    // @ts-expect-error object-possibly-null
    const recProps = await getRec(sourceElement, targetElement);

    expect(recProps.absolute()).toEqual({
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });

    expect(recProps.toTop()).toEqual({
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });

    expect(recProps.fromTop()).toEqual({
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });
  });
});
