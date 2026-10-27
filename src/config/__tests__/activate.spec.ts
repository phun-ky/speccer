import assert from 'node:assert/strict';
import { afterEach, beforeEach, describe, mock, it } from 'node:test';

import { SpeccerFunctionType } from '../../types/speccer';
import { activate } from '../browser';

describe('activate', () => {
  describe('without a DOM', () => {
    let _document: PropertyDescriptor | undefined;

    beforeEach(() => {
      _document = Object.getOwnPropertyDescriptor(globalThis, 'document');
      // Like Node or server-side rendering, where there is no document
      delete (globalThis as { document?: Document }).document;
    });

    afterEach(() => {
      if (_document) Object.defineProperty(globalThis, 'document', _document);
    });

    it('should do nothing, and not throw', () => {
      const speccerMock = mock.fn<SpeccerFunctionType>();

      assert.equal(typeof globalThis.document, 'undefined');
      assert.doesNotThrow(() => activate(speccerMock));
      assert.equal(speccerMock.mock.callCount(), 0);
    });
  });

  it('should do nothing without a speccer script tag', () => {
    const speccerMock = mock.fn<SpeccerFunctionType>();

    activate(speccerMock);

    assert.equal(speccerMock.mock.callCount(), 0);
  });
});
