/* eslint @typescript-eslint/no-explicit-any: ["error", { "fixToUnknown": true }] */
'use strict';

import { DebounceAnyFunctionType } from 'types/debounce';

export const waitForFrame = () => new Promise(requestAnimationFrame);

const debounce = function (
  func: DebounceAnyFunctionType,
  wait: number,
  immediate?: boolean
): DebounceAnyFunctionType {
  let timeout: null | ReturnType<typeof setTimeout>;

  return function (context: unknown, ...args: unknown[]) {
    const later = function () {
      timeout = null;

      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

export default debounce;
