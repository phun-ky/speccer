import assert from 'node:assert/strict';
import { describe, mock, it } from 'node:test';

import debounce from '../debounce';

describe('debounce', () => {
  mock.timers.enable({ apis: ['setTimeout'] });

  it('should debounce a function with the specified wait time', () => {
    const mockFn = mock.fn();
    const debouncedFn = debounce(mockFn, 500);

    // Call debounced function twice in quick succession
    debouncedFn();
    debouncedFn();

    // Should not have been called yet
    assert.equal(mockFn.mock.calls.length, 0);

    // Fast-forward time by 500 milliseconds
    mock.timers.tick(500);

    // Now the debounced function should be called with the last arguments
    assert.equal(mockFn.mock.calls.length, 1);
  });

  it('should debounce a function with immediate execution', () => {
    const mockFn = mock.fn();
    const debouncedFn = debounce(mockFn, 500, true);

    // Call debounced function twice in quick succession
    debouncedFn();
    debouncedFn();

    // The function should be called immediately with the last arguments

    assert.equal(mockFn.mock.calls.length, 1);
    // Should not have been called again
    assert.equal(mockFn.mock.calls.length, 1);
  });
});
