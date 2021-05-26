/* eslint no-console:0 */
'use strict';

import debounce from './debounce';

export const activate = speccer => {
  const speccerEventFunc = debounce(() => {
    speccer();
  }, 300);

  window.removeEventListener('speccer-onResize', speccerEventFunc);
  window.addEventListener('speccer-onResize', speccerEventFunc);
};
