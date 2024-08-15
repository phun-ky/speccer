import assert from 'node:assert/strict';
import { describe, it, beforeEach } from 'node:test';

import { DrawSVGLine } from '../DrawSVGLine';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('DrawSVGLine', () => {
  it('throws an error on initialization with missing elements', () => {
    assert.throws(
      () =>
        new DrawSVGLine(
          null as unknown as HTMLElement,
          null as unknown as HTMLElement
        ),
      /Missing inputs startElement and stopElement/
    );
  });

  it('throws an error on initialization with stopElement not in the DOM', () => {
    assert.throws(
      () =>
        new DrawSVGLine(
          document.createElement('div'),
          document.createElement('div')
        ),
      /stopElement is not in the DOM/
    );
  });

  it('throws an error on initialization with startElement not in the DOM', () => {
    assert.throws(
      () => new DrawSVGLine(document.createElement('div'), document.body),
      /startElement is not in the DOM/
    );
  });

  it('throws an error on initialization with missing required SVG elements', () => {
    assert.throws(
      () => new DrawSVGLine(document.body, document.body),
      /Missing required SVG element to draw lines/
    );
  });
});
