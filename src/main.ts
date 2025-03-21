/* eslint-disable import/no-unused-modules */
/**
 *
 * @example
 * ```typescript
 * import '@phun-ky/speccer/dist/speccer.min.css';
 * import speccer from '@phun-ky/speccer';
 *
 * // do stuff
 * speccer();
 * ```
 * @example
 * ```html
 * <link rel="stylesheet" href="../path/to/speccer.min.css" />
 * <script src="../path/to/speccer.js"></script>
 * ```
 * @packageDocumentation
 */

/* eslint no-console:0 */
import './types/interfaces/global';
import { dom, lazy, manual, activate } from './config/browser';
import { a11y as initA11y } from './features/a11y';
import { create as gridCreate, grid as gridElement } from './features/grid';
import { create as markCreate, mark as markElement } from './features/mark';
import {
  create as measureCreate,
  measure as measureElement
} from './features/measure';
import { createPinElement, pinElement, pinElements } from './features/pin';
import {
  create as spacingCreate,
  spacing as spacingElement
} from './features/spacing';
import {
  create as typographyCreate,
  typography as typographyElement
} from './features/typography';
import {
  SPECCER_DATA_ATTRIBUTE,
  SPECCER_FEATURE_GRID,
  SPECCER_FEATURE_MARK,
  SPECCER_FEATURE_MEASURE,
  SPECCER_FEATURE_PIN_AREA,
  SPECCER_FEATURE_SPACING,
  SPECCER_FEATURE_TYPOGRAPHY
} from './utils/constants';
import { removeAll } from './utils/node';

export { removeSpeccerElement } from './utils/remove-speccer-element';

export const grid = {
  create: gridCreate,
  element: gridElement
};

export const spacing = {
  create: spacingCreate,
  element: spacingElement
};

export const pin = {
  createPinElement,
  pinElement,
  pinElements
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

  const spacingElements = document.querySelectorAll(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_SPACING}"]`
  );
  const measureElements = document.querySelectorAll(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_MEASURE}"]`
  );
  const typographyElements = document.querySelectorAll(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_TYPOGRAPHY}"]`
  );
  const pinSectionElements = document.querySelectorAll(
    `[${SPECCER_DATA_ATTRIBUTE}="${SPECCER_FEATURE_PIN_AREA}"]`
  );
  const markElements = document.querySelectorAll(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_MARK}"]`
  );
  const gridElements = document.querySelectorAll(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_GRID}"]`
  );

  for (const el of markElements) {
    markElement(el as HTMLElement);
  }
  for (const el of gridElements) {
    gridElement(el as HTMLElement);
  }
  for (const el of spacingElements) {
    spacingElement(el as HTMLElement);

    if (el.hasChildNodes()) {
      const _child_spacing_elements = el.querySelectorAll(
        '*:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody):not([data-speccer])'
      );
      const _areas_string: string = el.getAttribute('data-speccer') || '';

      if (_child_spacing_elements?.length) {
        for (const childEl of _child_spacing_elements) {
          childEl.setAttribute('data-speccer', _areas_string);
          spacingElement(childEl as HTMLElement);
        }
      }
    }
  }
  for (const el of measureElements) {
    measureElement(el as HTMLElement);
  }
  for (const el of typographyElements) {
    typographyElement(el as HTMLElement);
  }
  for (const el of pinSectionElements) {
    pinElements(el as HTMLElement);
  }
  initA11y();
};

export default speccer;

activate(speccer);
