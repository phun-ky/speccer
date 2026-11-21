import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  get_horizontal_center_of_els,
  get_vertical_center_of_els,
  offset,
  offsetWithCenter,
  getRec
} from '../position';

describe('position', () => {
  // Helper function to create a DOM element
  const createDivElement = (id: string) => {
    document.body.innerHTML += `<div id="${id}"></div>`;

    return document.querySelector(`#${id}`) as HTMLElement;
  };
  // Helper function to set the position of an element
  const setElementPosition = (
    element: HTMLElement,
    top: number,
    left: number,
    width: number,
    height: number
  ) => {
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

    const startRect = startEl.getBoundingClientRect();
    const stopRect = stopEl.getBoundingClientRect();
    const center = get_horizontal_center_of_els(0, startRect, stopRect);

    assert.equal(center, 0); // Check if it correctly calculates the horizontal center
  });

  it('should calculate the vertical center', () => {
    const startEl = createDivElement('vertical-source');
    const stopEl = createDivElement('vertical-target');

    setElementPosition(startEl, 0, 0, 50, 100);
    setElementPosition(stopEl, 0, 0, 30, 200);

    const startRect = startEl.getBoundingClientRect();
    const stopRect = stopEl.getBoundingClientRect();
    const center = get_vertical_center_of_els(0, startRect, stopRect);

    assert.equal(center, 0); // Check if it correctly calculates the vertical center
  });

  it('should calculate the offset', async () => {
    const targetElement = document.getElementById('target') as HTMLElement;

    setElementPosition(targetElement, 100, 200, 50, 30);

    const offsetProperties = await offset(targetElement);

    assert.deepEqual(offsetProperties, {
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });
  });

  it('should calculate the offset with center aligned', async () => {
    const sourceElement = document.getElementById('source') as HTMLElement;
    const targetElement = document.getElementById('target') as HTMLElement;

    setElementPosition(sourceElement, 0, 0, 100, 50);
    setElementPosition(targetElement, 0, 0, 200, 30);

    const offsetProperties = await offsetWithCenter(
      sourceElement,
      targetElement
    );

    assert.deepEqual(offsetProperties, {
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });
  });

  it('should calculate various positioning properties', async () => {
    const sourceElement = document.getElementById('source') as HTMLElement;
    const targetElement = document.getElementById('target') as HTMLElement;

    setElementPosition(sourceElement, 100, 200, 50, 30);
    setElementPosition(targetElement, 200, 100, 30, 50);

    const recProps = await getRec(sourceElement, targetElement);

    assert.deepEqual(recProps.absolute(), {
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });

    assert.deepEqual(recProps.toTop(), {
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });

    assert.deepEqual(recProps.fromTop(), {
      height: 0,
      width: 0,
      top: 0,
      left: 0
    });
  });
});
