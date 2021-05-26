/* eslint no-console:0 */
'use strict';

import * as Node from './lib/node';
import * as Spec from './spec';
import * as Dissect from './dissect';
import * as Measure from './measure';
import * as Typography from './typography';
import * as Browser from './browser';

export const anatomy = () => {
  console.info('[@phun-ky/speccer]: Running anatomy()');
  Node.removeAll('.dissection');
  document.querySelectorAll('[data-anatomy-section]').forEach(section => {
    const elementsToBeDissected = section.querySelectorAll('[data-anatomy]');
    elementsToBeDissected.forEach(Dissect.element);
  });
};

export const speccer = () => {
  console.info('[@phun-ky/speccer]: Running speccer()');

  Node.removeAll('.speccer');

  const elementsToBeSpecced = document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)');
  const elementsToBeMeasured = document.querySelectorAll('[data-speccer-measure]');
  const elementsToBeTypographySpecced = document.querySelectorAll('[data-speccer-typography]');

  elementsToBeSpecced.forEach(Spec.element);
  elementsToBeMeasured.forEach(Measure.element);
  elementsToBeTypographySpecced.forEach(Typography.element);
};

Browser.activate(speccer, anatomy);
