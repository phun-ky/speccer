import assert from 'node:assert/strict';
import { describe, mock, it } from 'node:test';

import { SpeccerFunctionType } from '../../types/speccer';
import { manual } from '../browser';

describe('manual', () => {
  it('should set the speccer function to window.speccer', () => {
    const speccerMock: SpeccerFunctionType = mock.fn();

    manual(speccerMock);

    assert.deepEqual(window.speccer, speccerMock);
  });
});
