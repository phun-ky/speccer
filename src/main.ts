/* eslint no-console:0 */
'use strict';

import './types/interfaces/global';
import * as node from './utils/node';
import * as __spacing from './features/spacing';
import * as __dissect from './features/dissect';
import * as __measure from './features/measure';
import * as __mark from './features/mark';
import * as __typography from './features/typography';
import * as browser from './config/browser';

export const spacing = __spacing;

export const dissect = __dissect;

export const measure = __measure;

export const mark = __mark;

export const typography = __typography;

export const modes = browser;

const speccer = () => {
  node.removeAll('.speccer');

  const _els_to_be_specced = document.querySelectorAll(
    '[data-speccer],[data-speccer] *:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody)'
  );
  const _els_to_be_measured = document.querySelectorAll(
    '[data-speccer-measure]'
  );
  const _els_to_be_typography_specced = document.querySelectorAll(
    '[data-speccer-typography]'
  );
  const _els_to_be_dissected = document.querySelectorAll(
    '[data-anatomy-section]'
  );
  const _els_to_be_marked = document.querySelectorAll('[data-speccer-mark]');

  _els_to_be_marked.forEach(mark.element);
  _els_to_be_specced.forEach(spacing.element);
  _els_to_be_measured.forEach(measure.element);
  _els_to_be_typography_specced.forEach(typography.element);
  _els_to_be_dissected.forEach(dissect.element);
};

export default speccer;

browser.activate(speccer);
