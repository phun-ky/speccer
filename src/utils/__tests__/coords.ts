import { describe, it, expect, beforeEach } from 'vitest';

import { coords } from '../coords';

describe('coords', () => {
  // Create a dummy DOMRect for testing
  let dummyRect;

  beforeEach(() => {
    // Create a dummy DOMRect with specified values for testing
    dummyRect = {
      top: 10,
      left: 20,
      width: 50,
      height: 30
    };
  });

  it('top should return the top coordinate of a DOMRect', () => {
    const topCoordinate = coords.top(dummyRect);

    expect(topCoordinate).toBe(10);
  });

  it('right should return the right coordinate of a DOMRect', () => {
    const rightCoordinate = coords.right(dummyRect);

    expect(rightCoordinate).toBe(70); // left (20) + width (50)
  });

  it('bottom should return the bottom coordinate of a DOMRect', () => {
    const bottomCoordinate = coords.bottom(dummyRect);

    expect(bottomCoordinate).toBe(40); // top (10) + height (30)
  });

  it('left should return the left coordinate of a DOMRect', () => {
    const leftCoordinate = coords.left(dummyRect);

    expect(leftCoordinate).toBe(20);
  });

  it('center_x should return the x-coordinate of the center of a DOMRect', () => {
    const centerXCoordinate = coords.center_x(dummyRect);

    expect(centerXCoordinate).toBe(45); // left (20) + width / 2 (50 / 2)
  });

  it('center_y should return the y-coordinate of the center of a DOMRect', () => {
    const centerYCoordinate = coords.center_y(dummyRect);

    expect(centerYCoordinate).toBe(25); // top (10) + height / 2 (30 / 2)
  });
});
