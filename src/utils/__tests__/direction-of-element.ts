import { describe, it, expect, vi } from 'vitest';

import { direction_of_element } from '../direction-of-element';

// Mock the required dependencies
vi.mock('./angle', () => ({
  angle: vi.fn(() => 45)
}));

vi.mock('./cardinal', () => ({
  cardinal_direction: vi.fn(() => 'north-west'),
  cardinal_direction_crude: vi.fn(() => 'east')
}));

vi.mock('./get-coords-pair-from-objects', () => ({
  getCoordsPairFromObjects: vi.fn(() => ({
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
