/* eslint no-console:0 */
/* node:coverage disable */
/**
 * Contains the helper functions to activate SPECCER via a script tag, based on attributes:
 *
 * > [!NOTE]
 * > With dom, instant or lazy activation, annotations are re-rendered when the window is resized. With lazy loading, only the annotations in view are redrawn right away; the rest follow when they are scrolled into view. With manual activation, you are responsible for handling resize yourself.
 *
 * > [!NOTE]
 * > Remember to add the CSS file!:
 *
 * > ```html
 * > <link rel="stylesheet" href="../path/to/speccer.min.css" />
 * > ```
 *
 * ## Default implementation
 * ```html
 * <script src="../speccer.js"</script>
 * ```
 *
 * If no attribute is applied, it will default to `data-dom`, as in, it will initialize when `DOMContentLoaded` is fired.
 *
 * ## Manual initiation
 * ```html
 * <script src="../speccer.js" data-manual</script>
 * ```
 *
 * Makes `window.speccer()` available to be used when you feel like it
 *
 * ## Initiate immediately
 * ```html
 * <script src="../speccer.js" data-instant></script>
 * ```
 *
 * fires off `speccer()` right away
 *
 * ## Initiate when dom ready
 * ```html
 * <script src="../speccer.js" data-dom></script>
 * ```
 *
 * Waits for `DOMContentLoaded`
 *
 * ## Initiate with lazy loading
 * ```html
 * <script src="../speccer.js" data-lazy></script>
 * ```
 *
 * Lazy loads `speccer()` per specced element, when it is scrolled into view
 *
 */
/* node:coverage enable */
import { grid as gridElement } from '../features/grid';
import { mark as markElement } from '../features/mark';
import { measure as measureElement } from '../features/measure';
import { pinElements } from '../features/pin';
import { spacing as spacingElement } from '../features/spacing';
import { typography as typographyElement } from '../features/typography';
import { SpeccerFunctionType } from '../types/speccer';
import {
  SPECCER_DATA_ATTRIBUTE,
  SPECCER_FEATURE_GRID,
  SPECCER_FEATURE_MARK,
  SPECCER_FEATURE_MEASURE,
  SPECCER_FEATURE_PIN_AREA,
  SPECCER_FEATURE_SPACING,
  SPECCER_FEATURE_TYPOGRAPHY
} from '../utils/constants';
import { removeAll } from '../utils/node';
import { activate as resizeActivate } from '../utils/resize';

/* node:coverage disable */
/**
 * A function to initialize speccer when the DOM is ready.
 *
 * @param {SpeccerFunctionType} speccer - The speccer function to execute.
 *
 * @example
 * ```ts
 * // Usage example:
 * dom(mySpeccer);
 * ```
 */
/* node:coverage enable */
export const dom = (speccer: SpeccerFunctionType): void => {
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', () => {
      speccer();
    });
  // `DOMContentLoaded` already fired
  else speccer();
};

/**
 * The observers created by the latest call to `lazy()`.
 */
let _lazy_observers: IntersectionObserver[] = [];

/**
 * Renders each element matching the selector the first time it is scrolled
 * into view.
 *
 * @param {string} selector - The elements to observe.
 * @param {(el: HTMLElement) => unknown} render - Renders the annotations for one element.
 */
const observeLazily = (
  selector: string,
  render: (el: HTMLElement) => unknown
): void => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.intersectionRatio > 0) {
        // Before rendering, so a slow render can't be started twice
        observer.unobserve(entry.target);
        render(entry.target as HTMLElement);
      }
    }
  });

  for (const el of document.querySelectorAll(selector)) observer.observe(el);

  _lazy_observers.push(observer);
};

/* node:coverage disable */
/**
 * A function to initialize lazy speccer functionality.
 *
 * @example
 * ```ts
 * // Usage example:
 * lazy();
 * ```
 */
/* node:coverage enable */
export const lazy = (): void => {
  // Stop the observers from a previous call, so nothing is rendered twice
  for (const observer of _lazy_observers) observer.disconnect();

  _lazy_observers = [];

  observeLazily(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_SPACING}"],[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_SPACING}"] *:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody)`,
    spacingElement
  );
  observeLazily(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_MEASURE}"]`,
    measureElement
  );
  observeLazily(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_MARK}"]`,
    markElement
  );
  observeLazily(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_TYPOGRAPHY}"]`,
    typographyElement
  );
  observeLazily(
    `[${SPECCER_DATA_ATTRIBUTE}^="${SPECCER_FEATURE_GRID}"]`,
    gridElement
  );
  observeLazily(
    `[${SPECCER_DATA_ATTRIBUTE}="${SPECCER_FEATURE_PIN_AREA}"]`,
    pinElements
  );
};

/* node:coverage disable */
/**
 * Removes all annotations and starts lazy loading again, so annotations in
 * view are redrawn right away and the rest when they are scrolled into view.
 * Used to re-render on resize when lazy loading.
 *
 * @example
 * ```ts
 * rerenderLazy();
 * ```
 */
/* node:coverage enable */
export const rerenderLazy = (): void => {
  removeAll('.ph-speccer.speccer');
  lazy();
};

/* node:coverage disable */
/**
 * A function to manually activate speccer.
 *
 * @param {SpeccerFunctionType} speccer - The speccer function to execute.
 *
 * @example
 * ```ts
 * // Usage example:
 * manual(mySpeccer);
 * ```
 */
/* node:coverage enable */
export const manual = (speccer: SpeccerFunctionType): void => {
  window.speccer = speccer;
};

/* node:coverage disable */
/**
 * A function to activate speccer based on script attributes.
 *
 * @param {SpeccerFunctionType} speccer - The speccer function to execute.
 *
 * @example
 * ```ts
 * // Usage example:
 * activate(mySpeccer);
 * ```
 */
/* node:coverage enable */
export const activate = (speccer: SpeccerFunctionType): void => {
  const _script = document.currentScript;

  if (_script) {
    const _speccer_script_src = _script.getAttribute('src');

    if (_speccer_script_src?.includes('speccer.js')) {
      if (_script.hasAttribute('data-manual')) {
        manual(speccer);

        return;
      }

      // Lazy loading re-renders lazily on resize, so not everything at once
      if (
        _script.hasAttribute('data-lazy') &&
        !_script.hasAttribute('data-instant') &&
        !_script.hasAttribute('data-dom')
      ) {
        lazy();
        resizeActivate(rerenderLazy);

        return;
      }

      if (_script.hasAttribute('data-instant')) speccer();
      else dom(speccer);

      resizeActivate(speccer);
    }
  }
};
