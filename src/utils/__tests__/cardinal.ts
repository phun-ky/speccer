import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { cardinal_direction, cardinal_direction_crude } from '../cardinal';

describe('Cardinal Direction Functions', () => {
  it('cardinal_direction should return the cardinal direction based on degrees', () => {
    // Test cases for cardinal_direction
    const direction1 = cardinal_direction(45);
    const direction2 = cardinal_direction(135);
    const direction3 = cardinal_direction(225);
    const direction4 = cardinal_direction(315);

    assert.equal(direction1, 'south-east');
    assert.equal(direction2, 'south-west');
    assert.equal(direction3, 'north-west');
    assert.equal(direction4, 'north-east');
  });

  it('cardinal_direction_crude should return the cardinal direction based on degrees (crude)', () => {
    // Test cases for cardinal_direction_crude
    const direction1 = cardinal_direction_crude(45);
    const direction2 = cardinal_direction_crude(135);
    const direction3 = cardinal_direction_crude(225);
    const direction4 = cardinal_direction_crude(315);

    assert.equal(direction1, 'south');
    assert.equal(direction2, 'south');
    assert.equal(direction3, 'west');
    assert.equal(direction4, 'north');
  });

  it('should throw a RangeError when degrees exceed 360', () => {
    // Test if it throws an error when degrees exceed 360
    assert.throws(() => cardinal_direction(361), RangeError);
    assert.throws(() => cardinal_direction_crude(361), RangeError);
  });

  it('should throw a RangeError when degrees are lower than 0', () => {
    // Test if it throws an error when degrees are lower than 0
    assert.throws(() => cardinal_direction(-1), RangeError);
    assert.throws(() => cardinal_direction_crude(-1), RangeError);
  });
});
