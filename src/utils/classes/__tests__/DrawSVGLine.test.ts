import { describe, it, expect ,beforeEach} from 'vitest';

import { DrawSVGLine } from '../DrawSVGLine';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('DrawSVGLine', () => {
  it('throws an error on initialization with missing elements', () => {
    expect(() => new DrawSVGLine(null as unknown as HTMLElement, null as unknown as HTMLElement)).toThrow(/Missing inputs startElement and stopElement/);
  });

  it('throws an error on initialization with stopElement not in the DOM', () => {
    expect(() => new DrawSVGLine(document.createElement('div'), document.createElement('div')))
      .toThrow(/stopElement is not in the DOM/);
  });

  it('throws an error on initialization with startElement not in the DOM', () => {
    expect(() => new DrawSVGLine(document.createElement('div'), document.body))
      .toThrow(/startElement is not in the DOM/);
  });

  it('throws an error on initialization with missing required SVG elements', () => {
    expect(() => new DrawSVGLine(document.body, document.body))
      .toThrow(/Missing required SVG element to draw lines/);
  });
});
