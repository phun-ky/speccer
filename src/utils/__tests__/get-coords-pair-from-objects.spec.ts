import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getCoordsPairFromObjects } from '../get-coords-pair-from-objects';

describe('get-coords-pair-from-objects', () => {
  it('should return coordinates for two elements with default positions', async () => {
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const coordinates = await getCoordsPairFromObjects(element1, element2);

    assert.deepEqual(coordinates, { x1: 0, y1: 0, x2: 0, y2: 0 });
  });

  it('should return coordinates for two elements with custom positions', async () => {
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const coordinates = await getCoordsPairFromObjects(
      element1,
      element2,
      'top',
      'bottom'
    );

    assert.deepEqual(coordinates, { x1: 0, y1: 0, x2: 0, y2: 0 });
  });

  it('should throw an error when no element is given', async () => {
    const element1 = document.createElement('div');

    // Call the function without the second element
    try {
      // @ts-expect-error testing wrong argument type
      await getCoordsPairFromObjects(element1);
    } catch (error) {
      assert.ok(error instanceof Error);

      assert.equal(error.message, 'No element given');
    }
  });
});
