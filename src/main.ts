/* eslint-disable import/no-unused-modules */

/* eslint no-console:0 */
import './types/interfaces/global';
import { dom, lazy, manual, activate } from './config/browser';
import { a11y as initA11y } from './features/a11y';
export { a11y } from './features/a11y';
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

export type {
  SpeccerOptionsInterface,
  SpeccerFunctionType
} from './types/speccer';

export { removeSpeccerElement } from './utils/remove-speccer-element';

/**
 * This feature will highlight the grid spacing in a `display: grid;` element.
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-grid-full-light.png?raw=true)
 *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="grid [columns|rows]"
 *   class="…"
 * >
 *   …
 * </div>
 * ```
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * const options = {
 *   type: 'grid',
 *   grid: {
 *     toggle: 'both'
 *   }
 * };
 *
 * grid(targetElement, options);
 * ```
 *
 */
export const grid = {
  create: gridCreate,
  element: gridElement
};

/**
 * This feature highlights the spacing of an element.
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-spacing-dark.png?raw=true)
 * *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="spacing [padding|margin][bound]"
 *   class="…"
 * >
 * …
 * </div>
 * ```
 * ```ts
 * const targetElement = document.getElementById('target');
 * element(targetElement);
 * ```
 */
export const spacing = {
  create: spacingCreate,
  element: spacingElement
};

/**
 * This feature annotate or highlight the anatomy of an element.
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)
 *
 * In your component examples, use the following attribute. Remember to use the `data-speccer="pin-area"`-attribute on a parent element to scope the marking.
 *
 * @example
 * ```html
 * <div data-speccer="pin-area">
 *   <div
 *     data-speccer="pin [bracket [curly] |enclose] [left|right|top|bottom]"
 *     class="..."
 *   ></div>
 * </div>
 * ```
 *
 */
export const pin = {
  createPinElement,
  pinElement,
  pinElements
};

/**
 * This feature measures given element
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-pin-measure-height-light.png?raw=true)
 *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="measure [height left|right] | [width top|bottom]"
 *   class="..."
 * >
 *   …
 * </div>
 * ```
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * const options = {
 *   position: 'right',
 *   measure: {
 *     height: true
 *   }
 * };
 *
 * measure(targetElement, options);
 * ```
 *
 */
export const measure = {
  create: measureCreate,
  element: measureElement
};

/**
 * This feature marks given element
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-pin-mark-light.png?raw=true)
 *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="mark"
 *   class="..."
 * >
 *   …
 * </div>
 * ```
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * const options = {
 *   type: 'mark'
 * };
 *
 * mark(targetElement, options);
 * ```
 *
 */
export const mark = {
  create: markCreate,
  element: markElement
};

/**
 * This feature presents typography
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-typography-light.png?raw=true)
 *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="typography [top|right|bottom|left] [syntax]"
 *   class="..."
 * >
 *   …
 * </div>
 * ```
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * const options = {
 *   position: 'right',
 *   type: 'typography',
 *   typography: {
 *     useSyntaxHighlighting: false
 *   }
 * };
 *
 * typography(targetElement, options);
 * ```
 *
 */
export const typography = {
  create: typographyCreate,
  element: typographyElement
};

/**
 * The available modes to run SPECCER with
 *
 */
export const modes = {
  dom,
  lazy,
  manual,
  activate
};

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
 */
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
