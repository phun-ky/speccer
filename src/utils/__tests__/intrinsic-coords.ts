import { describe, it, expect } from 'vitest';

import { intrinsic_coords } from '../intrinsic-coords';

describe('intrinsic-coords', () => {
  it('should return coordinates for center position', async () => {
    const element = document.createElement('div');

    element.style.width = '100px';
    element.style.height = '100px';
    document.body.appendChild(element);

    const coordinates = await intrinsic_coords(element, 'center');

    expect(coordinates.x).toBe(0);
    expect(coordinates.y).toBe(0);

    document.body.removeChild(element);
  });

  it('should return coordinates for top-left position', async () => {
    const element = document.createElement('div');

    element.style.width = '100px';
    element.style.height = '100px';
    document.body.appendChild(element);

    const coordinates = await intrinsic_coords(element, 'top-left');

    expect(coordinates.x).toBe(0);
    expect(coordinates.y).toBe(0);

    document.body.removeChild(element);
  });

  // Add more test cases for other positions

  it('should throw an error for an invalid position', async () => {
    const element = document.createElement('div');

    element.style.width = '100px';
    element.style.height = '100px';
    document.body.appendChild(element);

    try {
      await intrinsic_coords(element, 'invalid-position');
    } catch (error) {
      expect(error.message).toBe(
        'The position given does not match allowed positions to use! Valid positions are: center, left, right, top, bottom, right-top, right-bottom, left-top, left-bottom, top-left, top-right, bottom-left, bottom-right, top-center, right-center, bottom-center, left-center'
      );
    }

    document.body.removeChild(element);
  });
});
