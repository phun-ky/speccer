import {
  describe,
  it,
  expect,
  vi,
  beforeAll,
  afterEach,
  beforeEach
} from 'vitest';

import { SpeccerFunctionType } from '../../types/speccer';
import { dom } from '../browser';

describe('dom', () => {
  const addEventListener = document.addEventListener;

  let mockReadySate = 'complete';
  let eventListenerMock;

  beforeAll(() => {
    Object.defineProperty(document, 'readyState', {
      get() {
        return mockReadySate;
      }
    });
  });

  beforeEach(() => {
    eventListenerMock = vi
      .fn()
      .mockImplementation((event, callback) => callback());
    document.addEventListener = eventListenerMock;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.addEventListener = addEventListener;
  });

  it('should add event listener if document is still loading', () => {
    mockReadySate = 'loading';

    const speccerMock: SpeccerFunctionType = vi.fn();

    dom(speccerMock);
    expect(eventListenerMock).toHaveBeenCalledTimes(1);
    expect(eventListenerMock).toHaveBeenCalledWith(
      'DOMContentLoaded',
      expect.any(Function)
    );
    expect(speccerMock).toHaveBeenCalled();

    mockReadySate = 'complete';

    expect(eventListenerMock).toHaveBeenCalledTimes(1);
    expect(speccerMock).toHaveBeenCalled();
  });

  it('should execute speccer directly if document is already loaded', () => {
    const speccerMock: SpeccerFunctionType = vi.fn();

    mockReadySate = 'complete';

    dom(speccerMock);

    expect(eventListenerMock).not.toHaveBeenCalled();
    expect(speccerMock).toHaveBeenCalled();
  });
});
