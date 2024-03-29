import assert from 'node:assert/strict';
import { describe, it, beforeEach } from 'node:test';

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

    assert.equal(topCoordinate, 10);
  });

  it('right should return the right coordinate of a DOMRect', () => {
    const rightCoordinate = coords.right(dummyRect);

    assert.equal(rightCoordinate, 70); // left (20) + width (50)
  });

  it('bottom should return the bottom coordinate of a DOMRect', () => {
    const bottomCoordinate = coords.bottom(dummyRect);

    assert.equal(bottomCoordinate, 40); // top (10) + height (30)
  });

  it('left should return the left coordinate of a DOMRect', () => {
    const leftCoordinate = coords.left(dummyRect);

    assert.equal(leftCoordinate, 20);
  });

  it('center_x should return the x-coordinate of the center of a DOMRect', () => {
    const centerXCoordinate = coords.center_x(dummyRect);

    assert.equal(centerXCoordinate, 45); // left (20) + width / 2 (50 / 2)
  });

  it('center_y should return the y-coordinate of the center of a DOMRect', () => {
    const centerYCoordinate = coords.center_y(dummyRect);

    assert.equal(centerYCoordinate, 25); // top (10) + height / 2 (30 / 2)
  });
});
