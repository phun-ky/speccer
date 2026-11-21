import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { a11y } from '..';

describe('a11y', () => {
  // https://github.com/phun-ky/speccer/issues/563
  it('removes the annotations from a previous call', () => {
    document.body.innerHTML = `
      <span class="ph-speccer speccer a11y tabstops"></span>
      <span class="ph-speccer speccer pin"></span>
    `;

    a11y();

    assert.equal(document.querySelectorAll('.a11y').length, 0);
    assert.equal(document.querySelectorAll('.pin').length, 1);
  });
});
