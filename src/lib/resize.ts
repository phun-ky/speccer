'use strict';

import { SpeccerFunctionType } from 'types/speccer';

import debounce from './debounce';

export const activate = (speccer: SpeccerFunctionType) => {
  const speccerEventFunc = () =>
    debounce(() => {
      speccer();
    }, 300);

  window.removeEventListener('resize', speccerEventFunc);
  window.addEventListener('resize', speccerEventFunc);
};
