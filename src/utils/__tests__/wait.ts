import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { waitFor, waitForFrame } from '../wait';

describe('waitFor', () => {
  it('should wait for the specified amount of time', async () => {
    const startTime = Date.now();
    const waitTime = 1000; // 1 second

    await waitFor(waitTime);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    // Check that the elapsed time is approximately equal to the wait time
    assert.ok(elapsedTime >= waitTime - 20); // Allowing for a 20ms margin of error
    assert.ok(elapsedTime <= waitTime + 20);
  });
});

describe('waitForFrame', () => {
  it('should wait for the next animation frame', async () => {
    const startTime = performance.now(); // High-resolution timestamp

    await waitForFrame();

    const endTime = performance.now(); // High-resolution timestamp
    const elapsedTime = endTime - startTime;

    // Check that the timestamp received is an approximate match to the expected next frame timestamp
    assert.ok(elapsedTime < 20); // Assuming 60 frames per second (approximately 16ms per frame)
  });
});
