import fc from 'fast-check';

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { angle } from '../angle';
import { cardinal_direction, cardinal_direction_crude } from '../cardinal';

const DIRECTIONS = [
  'east',
  'south-east',
  'south',
  'south-west',
  'west',
  'north-west',
  'north',
  'north-east'
];
const degrees = fc.double({ min: 0, max: 360, noNaN: true });
const coordinate = fc.integer({ min: -1_000_000, max: 1_000_000 });

describe('cardinal_direction properties', () => {
  it('names one of the eight directions for any angle between two points', () => {
    fc.assert(
      fc.property(coordinate, coordinate, coordinate, coordinate, (...c) => {
        const direction = cardinal_direction(angle(c[0], c[1], c[2], c[3]));

        assert.ok(DIRECTIONS.includes(direction), `got ${direction}`);
      })
    );
  });

  it('matches its 45 degree sector for whole degrees', () => {
    // Sector edges fall on halves, so whole degrees never land on a tie
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 360 }), (value) => {
        const sector = Math.floor(((value + 22.5) % 360) / 45);

        assert.equal(cardinal_direction(value), DIRECTIONS[sector]);
      })
    );
  });

  it('gives a crude direction that is part of the detailed one', () => {
    fc.assert(
      fc.property(degrees, (value) => {
        const crude = cardinal_direction_crude(value);

        assert.ok(
          cardinal_direction(value).split('-').includes(crude),
          `${crude} is not part of ${cardinal_direction(value)} at ${value}`
        );
      })
    );
  });

  it('throws a RangeError for any degree outside 0 to 360', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.double({ max: -Number.MIN_VALUE, noNaN: true }),
          fc.double({ min: 360, minExcluded: true, noNaN: true })
        ),
        (value) => {
          assert.throws(() => cardinal_direction(value), RangeError);
          assert.throws(() => cardinal_direction_crude(value), RangeError);
        }
      )
    );
  });
});
