import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { blend, contrastLevel, contrastRatio, luminance } from '../contrast';

const WHITE = [255, 255, 255, 1] as [number, number, number, number];
const BLACK = [0, 0, 0, 1] as [number, number, number, number];
const close = (actual: number, expected: number) =>
  assert.ok(Math.abs(actual - expected) < 0.01, `${actual} ≉ ${expected}`);

describe('contrast', () => {
  it('luminance is 0 for black and 1 for white', () => {
    assert.equal(luminance(BLACK), 0);
    close(luminance(WHITE), 1);
  });

  it('contrastRatio matches known WCAG values', () => {
    close(contrastRatio(BLACK, WHITE), 21);
    // In either order
    close(contrastRatio(WHITE, BLACK), 21);
    close(contrastRatio([119, 119, 119, 1], WHITE), 4.48);
    close(contrastRatio([118, 118, 118, 1], WHITE), 4.54);
    close(contrastRatio(WHITE, WHITE), 1);
  });

  it('blend paints a translucent color over a background', () => {
    assert.deepEqual(blend([0, 0, 0, 0.5], WHITE), [127.5, 127.5, 127.5, 1]);
    assert.deepEqual(blend([0, 0, 0, 0], WHITE), WHITE);
    assert.deepEqual(blend(BLACK, WHITE), BLACK);
    // Two translucent layers stay translucent
    assert.deepEqual(
      blend([255, 0, 0, 0.5], [0, 0, 255, 0.5]),
      [170, 0, 85, 0.75]
    );
    assert.deepEqual(blend([0, 0, 0, 0], [0, 0, 0, 0]), [0, 0, 0, 0]);
  });

  it('contrastLevel uses the lower thresholds for large text', () => {
    assert.equal(contrastLevel(7, false), 'AAA');
    assert.equal(contrastLevel(6.99, false), 'AA');
    assert.equal(contrastLevel(4.5, false), 'AA');
    assert.equal(contrastLevel(4.49, false), 'Fail');
    assert.equal(contrastLevel(4.5, true), 'AAA');
    assert.equal(contrastLevel(3, true), 'AA');
    assert.equal(contrastLevel(2.99, true), 'Fail');
  });
});
