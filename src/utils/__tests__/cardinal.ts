import { describe, it, expect } from '@jest/globals';

import { cardinal_direction, cardinal_direction_crude } from '../cardinal';

describe('Cardinal Direction Functions', () => {
  it('cardinal_direction should return the cardinal direction based on degrees', () => {
    // Test cases for cardinal_direction
    const direction1 = cardinal_direction(45);
    const direction2 = cardinal_direction(135);
    const direction3 = cardinal_direction(225);
    const direction4 = cardinal_direction(315);

    expect(direction1).toEqual('south-east');
    expect(direction2).toEqual('south-west');
    expect(direction3).toEqual('north-west');
    expect(direction4).toEqual('north-east');
  });

  it('cardinal_direction_crude should return the cardinal direction based on degrees (crude)', () => {
    // Test cases for cardinal_direction_crude
    const direction1 = cardinal_direction_crude(45);
    const direction2 = cardinal_direction_crude(135);
    const direction3 = cardinal_direction_crude(225);
    const direction4 = cardinal_direction_crude(315);

    expect(direction1).toEqual('south');
    expect(direction2).toEqual('south');
    expect(direction3).toEqual('west');
    expect(direction4).toEqual('north');
  });

  it('should throw a RangeError when degrees exceed 360', () => {
    // Test if it throws an error when degrees exceed 360
    expect(() => cardinal_direction(361)).toThrow(RangeError);
    expect(() => cardinal_direction_crude(361)).toThrow(RangeError);
  });

  it('should throw a RangeError when degrees are lower than 0', () => {
    // Test if it throws an error when degrees are lower than 0
    expect(() => cardinal_direction(-1)).toThrow(RangeError);
    expect(() => cardinal_direction_crude(-1)).toThrow(RangeError);
  });
});
