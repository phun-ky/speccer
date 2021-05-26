/* eslint no-console:0 */
'use strict';

import throttle from './throttle';

export const activate = (speccer, anatomy) => {
  throttle('resize', 'speccer-onResize');

  const speccerEventFunc = () => {
    console.info('[@phun-ky/speccer]: Event speccer-onResize triggered');
    speccer();
    anatomy();
  };

  window.removeEventListener('speccer-onResize', speccerEventFunc);
  window.addEventListener('speccer-onResize', speccerEventFunc);
};
