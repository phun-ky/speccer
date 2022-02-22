/* eslint no-console:0 */
'use strict';

import * as __node from './lib/node';
import * as __spacing from './spec';
import * as __dissect from './dissect';
import * as __measure from './measure';
import * as __typography from './typography';
import * as __browser from './browser';

const speccer = () => {
  __node.removeAll('.speccer');
  __node.removeAll('.dissection');

  const _els_to_be_specced = document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)');
  const _els_to_be_measured = document.querySelectorAll('[data-speccer-measure]');
  const _els_to_be_typography_specced = document.querySelectorAll('[data-speccer-typography]');
  const _els_to_be_dissected = document.querySelectorAll('[data-anatomy-section] [data-anatomy]');

  _els_to_be_specced.forEach(__spacing.element);
  _els_to_be_measured.forEach(__measure.element);
  _els_to_be_typography_specced.forEach(__typography.element);
  _els_to_be_dissected.forEach(__dissect.element);
};

export const spacing = __spacing;
export const dissect = __dissect;
export const measure = __measure;
export const typography = __typography;

export default speccer;

__browser.activate(speccer);
