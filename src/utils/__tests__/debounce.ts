import { describe, it, expect, vi } from 'vitest';

import debounce from '../debounce';

describe('debounce', () => {
  vi.useFakeTimers();

  it('should debounce a function with the specified wait time', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 500);

    // Call debounced function twice in quick succession
    debouncedFn();
    debouncedFn();

    // Should not have been called yet
    expect(mockFn).not.toBeCalled();

    // Fast-forward time by 500 milliseconds
    vi.advanceTimersByTime(500);

    // Now the debounced function should be called with the last arguments
    expect(mockFn).toBeCalled();
  });

  it('should debounce a function with immediate execution', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 500, true);

    // Call debounced function twice in quick succession
    debouncedFn();
    debouncedFn();

    // The function should be called immediately with the last arguments
    expect(mockFn).toBeCalled();

    // Should not have been called again
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
