/* node:coverage disable */
import assert from 'node:assert/strict';

import { AnyFunction, MockedFunction } from '../src/types/tests';

export const verifyThat = <T extends AnyFunction>(fn: MockedFunction<T>) => {
  return {
    calledWith: (...args: Parameters<T>) => {
      assert.ok(
        fn.mock?.calls.length !== undefined &&
          fn.mock.calls.length >= 1 &&
          fn.mock.calls.some((call) => deepEquals(call.arguments, args))
      );
    },
    calledTimes: (times: number) => {
      assert.equal(fn.mock?.calls?.length, times);
    },
    notCalled: () => {
      assert.equal(fn?.mock?.calls?.length, 0);
    },
    called: () => {
      assert.ok(
        fn.mock?.calls.length !== undefined && fn.mock.calls.length > 0
      );
    }
  };
};

const deepEquals = (left: unknown, right: unknown): boolean => {
  try {
    assert.deepEqual(left, right);

    return true;
  } catch {
    return false;
  }
};
/* node:coverage enable */
