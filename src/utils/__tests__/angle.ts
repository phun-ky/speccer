import { describe, it, expect } from 'vitest';

import { angle } from '../angle';

describe('angle', () => {
  it('should calculate the angle between two points', () => {
    const angleValue = angle(0, 0, 3, 4);

    // The angle between (0,0) and (3,4) is 53.13 degrees.
    expect(angleValue).toBeCloseTo(53.13, 2); // Allowing for small floating-point imprecision
  });

  it('should normalize negative angles', () => {
    const angleValue = angle(0, 0, -3, -4);

    // The angle between (0,0) and (-3,-4) is -126.87 degrees, normalized to 233.13 degrees.
    expect(angleValue).toBeCloseTo(233.13, 2);
  });

  it('should throw a SyntaxError when missing input', () => {
    expect(() => {
      // @ts-expect-error testing wrong argument type
      angle();
    }).toThrow(SyntaxError);
  });
});
