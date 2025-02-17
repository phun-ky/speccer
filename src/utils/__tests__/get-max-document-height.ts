import assert from 'node:assert/strict';
import { beforeEach, describe, it } from 'node:test';
import { JSDOM } from 'jsdom';

import { getMaxDocumentHeight } from '../get-max-document-height';

describe('getMaxDocumentHeight', () => {
  let document: typeof window.document;

  beforeEach(() => {
    const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = window.document;
    document = window.document;
  });

  it('should return 0 when the document is empty', () => {
    assert.strictEqual(getMaxDocumentHeight(), 0);
  });

  it('should return the correct height when body has a defined height', () => {
    document.body.style.height = '1000px';
    document.documentElement.style.height = '500px';
    Object.defineProperty(document.body, 'scrollHeight', { value: 1000, configurable: true });
    Object.defineProperty(document.body, 'offsetHeight', { value: 1000, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(document.documentElement, 'offsetHeight', { value: 500, configurable: true });

    assert.strictEqual(getMaxDocumentHeight(), 1000);
  });

  it('should return the correct height when html has a greater height', () => {
    document.body.style.height = '500px';
    document.documentElement.style.height = '1200px';
    Object.defineProperty(document.body, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(document.body, 'offsetHeight', { value: 500, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 1200, configurable: true });
    Object.defineProperty(document.documentElement, 'offsetHeight', { value: 1200, configurable: true });

    assert.strictEqual(getMaxDocumentHeight(), 1200);
  });

  it('should return the highest value among all height properties', () => {

    Object.defineProperty(document.body, 'scrollHeight', { value: 800, configurable: true });
    Object.defineProperty(document.body, 'offsetHeight', { value: 600, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 900, configurable: true });
    Object.defineProperty(document.documentElement, 'offsetHeight', { value: 750, configurable: true });
    Object.defineProperty(document.documentElement, 'clientHeight', { value: 700, configurable: true });

    assert.strictEqual(getMaxDocumentHeight(), 900);
  });
});
