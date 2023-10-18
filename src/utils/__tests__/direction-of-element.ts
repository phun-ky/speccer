import { describe, it, expect } from '@jest/globals';

import { direction_of_element } from '../direction-of-element';

// Mock the required dependencies
jest.mock('./angle', () => ({
  angle: jest.fn(() => 45)
}));

jest.mock('./cardinal', () => ({
  cardinal_direction: jest.fn(() => 'north-west'),
  cardinal_direction_crude: jest.fn(() => 'east')
}));

jest.mock('./get-coords-pair-from-objects', () => ({
  getCoordsPairFromObjects: jest.fn(() => ({
    x1: 0,
    y1: 0,
    x2: 100,
    y2: 100
  }))
}));

describe('direction-of-element', () => {
  it('should calculate the direction of an element with cardinal directions', async () => {
    const startElement = document.createElement('div');
    const stopElement = document.createElement('div');
    const direction = await direction_of_element({
      start: startElement,
      stop: stopElement
    });

    expect(direction).toBe('east');
  });

  it('should calculate the direction of an element crudely', async () => {
    const startElement = document.createElement('div');
    const stopElement = document.createElement('div');
    const direction = await direction_of_element({
      start: startElement,
      stop: stopElement,
      crude: true
    });

    expect(direction).toBe('east');
  });
});
