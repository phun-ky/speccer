import assert from 'node:assert/strict';
import { mock, describe, it, beforeEach, afterEach } from 'node:test';

import { coords } from '../coords';
import { xy } from '../xy';

describe('xy', () => {
  const mockRect: DOMRect = {
    top: 0,
    right: 100,
    bottom: 100,
    left: 0,
    width: 100,
    height: 100,
    x: 0,
    y: 0,
    toJSON: () => null
  };

  beforeEach(() => {
    // Mocking the coords module functions
    mock.method(coords, 'center_x', () => 50);
    mock.method(coords, 'center_y', () => 50);
    mock.method(coords, 'top', () => 0);
    mock.method(coords, 'right', () => 100);
    mock.method(coords, 'bottom', () => 100);
    mock.method(coords, 'left', () => 0);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('center', () => {
    it('should return the center coordinates', () => {
      const result = xy.center(mockRect);

      assert.deepEqual(result,{ x: 50, y: 50 });
      // @ts-expect-error mock
      assert.deepEqual(coords.center_x.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.center_y.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('top', () => {
    it('should return the top center coordinates', () => {
      const result = xy.top(mockRect);

      assert.deepEqual(result,{ x: 50, y: 0 });
      // @ts-expect-error mock
      assert.deepEqual(coords.center_x.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.top.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('right', () => {
    it('should return the right center coordinates', () => {
      const result = xy.right(mockRect);

      assert.deepEqual(result,{ x: 100, y: 50 });
      // @ts-expect-error mock
      assert.deepEqual(coords.right.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.center_y.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('bottom', () => {
    it('should return the bottom center coordinates', () => {
      const result = xy.bottom(mockRect);

      assert.deepEqual(result,{ x: 50, y: 100 });
      // @ts-expect-error mock
      assert.deepEqual(coords.bottom.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.center_x.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('right-bottom', () => {
    it('should return the right bottom coordinates', () => {
      const result = xy['right-bottom'](mockRect);

      assert.deepEqual(result,{ x: 100, y: 100 });
      // @ts-expect-error mock
      assert.deepEqual(coords.bottom.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.right.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('left-top', () => {
    it('should return the left top coordinates', () => {
      const result = xy['left-top'](mockRect);

      assert.deepEqual(result,{ x: 0, y: 0 });
      // @ts-expect-error mock
      assert.deepEqual(coords.top.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.left.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('left-bottom', () => {
    it('should return the left bottom coordinates', () => {
      const result = xy['left-bottom'](mockRect);

      assert.deepEqual(result,{ x: 0, y: 100 });
      // @ts-expect-error mock
      assert.deepEqual(coords.bottom.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.left.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('top-left', () => {
    it('should return the top left coordinates', () => {
      const result = xy['top-left'](mockRect);

      assert.deepEqual(result,{ x: 0, y: 0 });
      // @ts-expect-error mock
      assert.deepEqual(coords.left.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.top.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('top-right', () => {
    it('should return the top right coordinates', () => {
      const result = xy['top-right'](mockRect);

      assert.deepEqual(result,{ x: 100, y: 0 });
      // @ts-expect-error mock
      assert.deepEqual(coords.right.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.top.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('bottom-left', () => {
    it('should return the bottom left coordinates', () => {
      const result = xy['bottom-left'](mockRect);

      assert.deepEqual(result,{ x: 0, y: 100 });
      // @ts-expect-error mock
      assert.deepEqual(coords.left.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.bottom.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('bottom-right', () => {
    it('should return the bottom right coordinates', () => {
      const result = xy['bottom-right'](mockRect);

      assert.deepEqual(result,{ x: 100, y: 100 });
      // @ts-expect-error mock
      assert.deepEqual(coords.right.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.bottom.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('top-center', () => {
    it('should return the top center coordinates', () => {
      const result = xy['top-center'](mockRect);

      assert.deepEqual(result,{ x: 50, y: 0 });
      // @ts-expect-error mock
      assert.deepEqual(coords.center_x.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.top.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('right-center', () => {
    it('should return the right center coordinates', () => {
      const result = xy['right-center'](mockRect);

      assert.deepEqual(result,{ x: 100, y: 50 });
      // @ts-expect-error mock
      assert.deepEqual(coords.center_y.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.right.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('bottom-center', () => {
    it('should return the bottom center coordinates', () => {
      const result = xy['bottom-center'](mockRect);

      assert.deepEqual(result,{ x: 50, y: 100 });
      // @ts-expect-error mock
      assert.deepEqual(coords.center_x.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.bottom.mock.calls[0].arguments, [mockRect]);
    });
  });

  describe('left-center', () => {
    it('should return the left center coordinates', () => {
      const result = xy['left-center'](mockRect);

      assert.deepEqual(result,{ x: 0, y: 50 });
      // @ts-expect-error mock
      assert.deepEqual(coords.center_y.mock.calls[0].arguments, [mockRect]);
      // @ts-expect-error mock
      assert.deepEqual(coords.left.mock.calls[0].arguments, [mockRect]);
    });
  });
});
