import assert from 'node:assert/strict';
import { describe, mock, it } from 'node:test';

import { activate } from '../resize';

describe('resize', () => {
  mock.timers.enable({ apis: ['setTimeout'] });

  const resize = () => window.dispatchEvent(new window.Event('resize'));

  it('should call speccer once after resizing stops', () => {
    const speccer = mock.fn();

    activate(speccer);

    resize();
    resize();

    assert.equal(speccer.mock.calls.length, 0);

    mock.timers.tick(300);

    assert.equal(speccer.mock.calls.length, 1);
  });

  it('should replace the listener when activated again', () => {
    const first = mock.fn();
    const second = mock.fn();

    activate(first);
    activate(second);

    resize();
    mock.timers.tick(300);

    assert.equal(first.mock.calls.length, 0);
    assert.equal(second.mock.calls.length, 1);
  });
});
