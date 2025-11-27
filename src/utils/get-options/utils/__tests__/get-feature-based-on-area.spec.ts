// getFeatureBasedOnArea.test.js
import { test, describe, beforeEach, mock } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { getFeatureBasedOnArea } from '../index.js';

describe('getFeatureBasedOnArea', () => {
  beforeEach(async () => {
    const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    Object.assign(globalThis, {
      window,
      document: window.document,
      Node: window.Node,
      Element: window.Element,
      HTMLElement: window.HTMLElement,
      HTMLDivElement: window.HTMLDivElement,
      Text: window.Text
    });
  });

  test('gets correct feature', async () => {
    const el = document.createElement('div');

    let result = await getFeatureBasedOnArea('left pin ', el);
    assert.equal(result, 'pin');

    // result = await getFeatureBasedOnArea('grid', el);
    // assert.equal(result, 'grid');

    result = await getFeatureBasedOnArea('mark', el);
    assert.equal(result, 'mark');

    result = await getFeatureBasedOnArea('measure', el);
    assert.equal(result, 'measure');

    result = await getFeatureBasedOnArea('spacing', el);
    assert.equal(result, 'spacing');

    result = await getFeatureBasedOnArea('typography', el);
    assert.equal(result, 'typography');
  });

  test('falls back to "pin" when nothing matches', async () => {
    const el = document.createElement('div');

    const result = await getFeatureBasedOnArea('unknown stuff', el);
    assert.equal(result, 'pin');
  });
});
