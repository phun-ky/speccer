import assert from 'node:assert/strict';
import { describe, it, before, afterEach, beforeEach, mock } from 'node:test';

import { dom } from '../browser';

describe('dom', () => {
  const addEventListener = document.addEventListener;

  let mockReadySate = 'complete';
  let eventListenerMock: it.Mock<(event: any, callback: any) => any>;

  before(() => {
    Object.defineProperty(document, 'readyState', {
      get() {
        return mockReadySate;
      }
    });
  });

  beforeEach(() => {
    eventListenerMock = mock.fn((event, callback) => callback());
    document.addEventListener = eventListenerMock;
  });

  afterEach(() => {
    mock.reset();
    document.addEventListener = addEventListener;
  });

  it('should add event listener if document is still loading', (context) => {
    mockReadySate = 'loading';

    const speccerMock = context.mock.fn();

    dom(speccerMock);
    assert.equal(eventListenerMock.mock.calls.length, 1);

    assert.equal(
      eventListenerMock.mock.calls[0].arguments[0],
      'DOMContentLoaded'
    );
    assert.equal(speccerMock.mock.calls.length, 1);

    mockReadySate = 'complete';

    assert.equal(eventListenerMock.mock.calls.length, 1);
    assert.equal(speccerMock.mock.calls.length, 1);
  });

  it('should execute speccer directly if document is already loaded', (context) => {
    const speccerMock = context.mock.fn();

    mockReadySate = 'complete';

    dom(speccerMock);

    assert.equal(eventListenerMock.mock.calls.length, 0);
    assert.equal(speccerMock.mock.calls.length, 1);
  });
});
