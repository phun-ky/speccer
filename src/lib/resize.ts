/* eslint no-console:0 */
'use strict';

import debounce from './debounce';

export const activate = (speccer: Function) => {
  const speccerEventFunc = () =>
    debounce(() => {
      speccer();
    }, 300);

  window.removeEventListener('resize', speccerEventFunc);
  window.addEventListener('resize', speccerEventFunc);
};
