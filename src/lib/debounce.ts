/* eslint no-console:0 */
'use strict';

export const waitForFrame = () => new Promise(requestAnimationFrame);

const debounce = function (func: Function, wait: number, immediate?: boolean): Function {
  let timeout: null | ReturnType<typeof setTimeout>;

  return function (this: any) {
    const context = this;
    const args = arguments;
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
