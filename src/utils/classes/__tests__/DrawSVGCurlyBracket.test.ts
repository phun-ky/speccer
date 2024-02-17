import { describe, it, expect ,beforeEach} from 'vitest';

import { DrawSVGCurlyBracket } from '../DrawSVGCurlyBracket';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('DrawSVGCurlyBracket', () => {
  it('throws an error on initialization with missing elements', () => {
    expect(() => new DrawSVGCurlyBracket(null as unknown as HTMLElement, null as unknown as HTMLElement)).toThrow(/Missing inputs startElement and stopElement/);
  });

  it('throws an error on initialization with stopElement not in the DOM', () => {
    expect(() => new DrawSVGCurlyBracket(document.createElement('div'), document.createElement('div')))
      .toThrow(/stopElement is not in the DOM/);
  });

  it('throws an error on initialization with startElement not in the DOM', () => {
    expect(() => new DrawSVGCurlyBracket(document.createElement('div'), document.body))
      .toThrow(/startElement is not in the DOM/);
  });

  it('throws an error on initialization with missing required SVG elements', () => {
    expect(() => new DrawSVGCurlyBracket(document.body, document.body))
      .toThrow(/Missing required SVG element to draw lines/);
  });
});
