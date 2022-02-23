/* eslint no-console:0 */
'use strict';

import './interfaces/global';
import * as __node from './lib/node';
import * as __spacing from './tasks/spec';
import * as __dissect from './tasks/dissect';
import * as __measure from './tasks/measure';
import * as __typography from './tasks/typography';
import * as __browser from './browser';

export const spacing = __spacing;

export const dissect = __dissect;

export const measure = __measure;

export const typography = __typography;

const speccer = () => {
  __node.removeAll('.speccer');

  const _els_to_be_specced = document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)');
  const _els_to_be_measured = document.querySelectorAll('[data-speccer-measure]');
  const _els_to_be_typography_specced = document.querySelectorAll('[data-speccer-typography]');
  const _els_to_be_dissected = document.querySelectorAll('[data-anatomy-section] [data-anatomy]');

  _els_to_be_specced.forEach(spacing.element);
  _els_to_be_measured.forEach(measure.element);
  _els_to_be_typography_specced.forEach(typography.element);
  _els_to_be_dissected.forEach(dissect.element);
};

export default speccer;

__browser.activate(speccer);
