import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { angle } from '../angle';

describe('angle', () => {
  it('should calculate the angle between two points', () => {
    const angleValue = angle(0, 0, 3, 4);

    // The angle between (0,0) and (3,4) is 53.13 degrees.
    assert.strictEqual(Math.abs(angleValue - 53.13) < Math.pow(10, -2), true); // Allowing for small floating-point imprecision
  });

  it('should normalize negative angles', () => {
    const angleValue = angle(0, 0, -3, -4);

    // The angle between (0,0) and (-3,-4) is -126.87 degrees, normalized to 233.13 degrees.
    assert.strictEqual(Math.abs(angleValue - 233.13) < Math.pow(10, -2), true);
  });

  it('should throw a SyntaxError when missing input', () => {
    assert.throws(() => {
      // @ts-expect-error testing wrong argument type
      angle();
    }, SyntaxError);
  });
});
