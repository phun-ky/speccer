/* eslint no-console:0 */
'use strict';

import * as node from './lib/node';
import * as spec from './spec';
import * as dissect from './dissect';
import * as measure from './measure';
import * as typography from './typography';
import * as browser from './browser';

const speccer = () => {
  node.removeAll('.speccer');
  node.removeAll('.dissection');

  const _els_to_be_specced = document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)');
  const _els_to_be_measured = document.querySelectorAll('[data-speccer-measure]');
  const _els_to_be_typography_specced = document.querySelectorAll('[data-speccer-typography]');
  const _els_to_be_dissected = document.querySelectorAll('[data-anatomy-section] [data-anatomy]');

  _els_to_be_specced.forEach(spec.element);
  _els_to_be_measured.forEach(measure.element);
  _els_to_be_typography_specced.forEach(typography.element);
  _els_to_be_dissected.forEach(dissect.element);
};

export default speccer;

browser.activate(speccer);
