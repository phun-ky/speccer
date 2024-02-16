import { describe, it, expect, vi } from 'vitest';

import { SpeccerFunctionType } from '../../types/speccer';
import { manual } from '../browser';

describe('manual', () => {
  it('should set the speccer function to window.speccer', () => {
    const speccerMock: SpeccerFunctionType = vi.fn();

    manual(speccerMock);

    expect(window.speccer).toBe(speccerMock);
  });
});
