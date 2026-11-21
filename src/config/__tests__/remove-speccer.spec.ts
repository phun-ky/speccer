import assert from 'node:assert/strict';
import { afterEach, beforeEach, describe, it, mock } from 'node:test';

import { activate as resizeActivate } from '../../utils/resize';
import { lazy, removeSpeccer } from '../browser';

describe('removeSpeccer', () => {
  const observers: { disconnected: boolean }[] = [];

  let _IntersectionObserver: unknown;

  beforeEach(() => {
    document.body.innerHTML = `
      <div data-speccer="mark" id="target"></div>
      <span class="ph-speccer speccer mark"></span>
      <svg class="ph-speccer" id="ph-speccer-svg">
        <path class="ph-speccer path original" id="ph-speccer-path"></path>
        <path class="ph-speccer path speccer"></path>
        <circle class="ph-speccer speccer circle"></circle>
      </svg>
    `;
    _IntersectionObserver = (globalThis as { IntersectionObserver?: unknown })
      .IntersectionObserver;
    // jsdom has no IntersectionObserver
    (globalThis as { IntersectionObserver?: unknown }).IntersectionObserver =
      class {
        state = { disconnected: false };
        constructor() {
          observers.push(this.state);
        }
        observe() {}
        unobserve() {}
        disconnect() {
          this.state.disconnected = true;
        }
      };
  });

  afterEach(() => {
    (globalThis as { IntersectionObserver?: unknown }).IntersectionObserver =
      _IntersectionObserver;
    observers.length = 0;
  });

  it('removes the annotations, lines and circles, and keeps the svg element', () => {
    removeSpeccer();

    assert.equal(document.querySelectorAll('.ph-speccer.speccer').length, 0);
    assert.ok(document.getElementById('ph-speccer-svg'));
    assert.ok(document.getElementById('ph-speccer-path'));
  });

  it('disconnects the lazy-loading observers', () => {
    lazy();
    assert.ok(observers.length > 0);

    removeSpeccer();

    assert.ok(observers.every((o) => o.disconnected));
  });

  it('removes the resize listener', () => {
    mock.timers.enable({ apis: ['setTimeout'] });

    const speccer = mock.fn();

    resizeActivate(speccer);
    removeSpeccer();
    window.dispatchEvent(new window.Event('resize'));
    mock.timers.tick(300);

    assert.equal(speccer.mock.calls.length, 0);
    mock.timers.reset();
  });
});
