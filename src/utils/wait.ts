/**
 * Waits for the specified amount of time in milliseconds.
 *
 * @param {number} ms - The number of milliseconds to wait.
 * @returns {Promise<void>} - A Promise that resolves after the specified time.
 *
 * @example
 * ```ts
 * // Wait for 1 second (1000 milliseconds)
 * await waitFor(1000);
 * ```
 */
export const waitFor = (ms: number): Promise<void> =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Waits for the next animation frame using requestAnimationFrame.
 *
 * @returns {Promise<number>} - A Promise that resolves with the timestamp of the next animation frame.
 *
 * @example
 * ```ts
 * // Wait for the next animation frame and get the rect
 * await waitForFrame();
 * const rect = el.getBoundingClientRect();
 * // Wait for the next animation frame and get the timestamp
 * const timestamp = await waitForFrame();
 * ```
 */
export const waitForFrame = (): Promise<number> =>
  new Promise<number>(requestAnimationFrame);
