import assert from 'node:assert/strict';
import { describe, it, beforeEach } from 'node:test';

import { DrawCircle } from '../DrawCircle';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('DrawCircle', () => {
  it('throws an error on initialization with missing elements', () => {
    assert.throws(
      () =>
        new DrawCircle(
          null as unknown as HTMLElement,
          null as unknown as number,
          null as unknown as string
        ),
      /Missing inputs el or radius or areas/
    );
  });

  it('throws an error on initialization with el not in the DOM', () => {
    assert.throws(
      () => new DrawCircle(document.createElement('div'), 12, 'asd'),
      /el is not in the DOM/
    );
  });

  it('throws an error on initialization with missing required SVG elements', () => {
    assert.throws(
      () => new DrawCircle(document.body, 123, 'asd'),
      /Missing required SVG element to draw circles. Please see the documentation/
    );
  });
});
