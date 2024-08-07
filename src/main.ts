/* eslint-disable import/no-unused-modules */
/* eslint no-console:0 */
import './types/interfaces/global';
import { dom, lazy, manual, activate } from './config/browser';
import { init as initA11y } from './features/a11y';
import {
  create as dissectCreate,
  element as dissectElement
} from './features/dissect';
import {
  create as gridCreate,
  element as gridElement
} from './features/grid';
import { create as markCreate, element as markElement } from './features/mark';
import {
  create as measureCreate,
  element as measureElement
} from './features/measure';
import {
  create as spacingCreate,
  element as spacingElement
} from './features/spacing';
import {
  create as typographyCreate,
  element as typographyElement
} from './features/typography';
import { removeAll } from './utils/node';


export const grid = {
  create: gridCreate,
  element: gridElement
};

export const spacing = {
  create: spacingCreate,
  element: spacingElement
};

export const dissect = {
  create: dissectCreate,
  element: dissectElement
};

export const measure = {
  create: measureCreate,
  element: measureElement
};

export const mark = {
  create: markCreate,
  element: markElement
};

export const typography = {
  create: typographyCreate,
  element: typographyElement
};

export const modes = {
  dom,
  lazy,
  manual,
  activate
};

const speccer = () => {
  removeAll('.ph-speccer.speccer');

  const elsToBeSpecced = document.querySelectorAll(
    '[data-speccer],[data-speccer] *:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody)'
  );
  const elsToBeMeasured = document.querySelectorAll('[data-speccer-measure]');
  const elsToBeTypographySpecced = document.querySelectorAll(
    '[data-speccer-typography]'
  );
  const elsToBeDissected = document.querySelectorAll('[data-anatomy-section]');
  const elsToBeMarked = document.querySelectorAll('[data-speccer-mark]');
  const SPECCER_DATA_ATTR = 'data-speccer-grid';
  const SPECCER_FEATURE_GRID = 'grid';
  const SPECCER_FEATURE_GRID_SELECTOR = `[${SPECCER_DATA_ATTR}="${SPECCER_FEATURE_GRID}"]`;
  const elstToBeGrid = document.querySelectorAll(SPECCER_FEATURE_GRID_SELECTOR);

  for (const el of elsToBeMarked) {
    markElement(el as HTMLElement);
  }

  for (const el of elstToBeGrid) {
    gridElement(el as HTMLElement);
  }
  for (const el of elsToBeSpecced) {
    spacingElement(el as HTMLElement);
  }
  for (const el of elsToBeMeasured) {
    measureElement(el as HTMLElement);
  }
  for (const el of elsToBeTypographySpecced) {
    typographyElement(el as HTMLElement);
  }
  for (const el of elsToBeDissected) {
    dissectElement(el as HTMLElement);
  }
  initA11y();
};

export default speccer;

activate(speccer);
