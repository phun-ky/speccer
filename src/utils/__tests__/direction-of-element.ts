import quibble from 'quibble';

import assert from 'node:assert/strict';
import { describe, it, mock, before } from 'node:test';

import { direction_of_element } from '../direction-of-element';

before(async () => {
  await quibble.esm('./angle', { angle: mock.fn(() => 45) });
  await quibble.esm('./cardinal', {
    cardinal_direction: mock.fn(() => 'north-west'),
    cardinal_direction_crude: mock.fn(() => 'east')
  });
  await quibble.esm('./get-coords-pair-from-objects', {
    getCoordsPairFromObjects: mock.fn(() => ({
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 100
    }))
  });
});

describe('direction-of-element', () => {
  it('should calculate the direction of an element with cardinal directions', async () => {
    const startElement = document.createElement('div');
    const stopElement = document.createElement('div');
    const direction = await direction_of_element({
      start: startElement,
      stop: stopElement
    });

    assert.equal(direction, 'east');
  });

  it('should calculate the direction of an element crudely', async () => {
    const startElement = document.createElement('div');
    const stopElement = document.createElement('div');
    const direction = await direction_of_element({
      start: startElement,
      stop: stopElement,
      crude: true
    });

    assert.equal(direction, 'east');
  });
});
