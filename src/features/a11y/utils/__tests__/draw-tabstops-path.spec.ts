import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { isBackwards } from '../draw-tabstops-path';

const rect = (left: number, top: number, width = 10, height = 10) => ({
  left,
  top,
  right: left + width,
  bottom: top + height
});

describe('isBackwards', () => {
  it('is false along the reading order', () => {
    // Next on the same row, to the right
    assert.equal(isBackwards(rect(0, 0), rect(20, 0)), false);
    // Next row, even when it starts further left
    assert.equal(isBackwards(rect(50, 0), rect(0, 20)), false);
    // Same row with a different height, like a button next to a field
    assert.equal(isBackwards(rect(0, 0, 10, 30), rect(20, 10)), false);
  });

  it('is true when focus moves up or back along the row', () => {
    assert.equal(isBackwards(rect(0, 20), rect(50, 0)), true);
    assert.equal(isBackwards(rect(20, 0), rect(0, 0)), true);
  });

  it('is false for overlapping elements, like a field and its label', () => {
    assert.equal(isBackwards(rect(0, 0, 50, 20), rect(10, 5)), false);
  });

  it('reads rows right to left when rtl', () => {
    assert.equal(isBackwards(rect(20, 0), rect(0, 0), true), false);
    assert.equal(isBackwards(rect(0, 0), rect(20, 0), true), true);
  });
});
