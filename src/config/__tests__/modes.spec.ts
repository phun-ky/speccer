import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';

import { activate, dom, manual } from '../browser';

// https://github.com/phun-ky/speccer/issues/570
describe('modes without a speccer argument', () => {
  const speccer = mock.fn();

  // What main.ts does on import
  activate(speccer);

  it('manual() sets window.speccer to the speccer function', () => {
    manual();

    assert.equal(window.speccer, speccer);
  });

  it('dom() runs the speccer function', () => {
    speccer.mock.resetCalls();
    dom();

    assert.equal(speccer.mock.callCount(), 1);
  });

  it('a passed function still wins', () => {
    const other = mock.fn();

    manual(other);
    dom(other);

    assert.equal(window.speccer, other);
    assert.equal(other.mock.callCount(), 1);
  });
});
