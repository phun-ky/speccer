/* eslint no-console:0 */
/**
 * Contains the helper functions to activate SPECCER via a script tag, based on attributes:
 *
 * > [!NOTE]
 * > If the activation method is dom or instant, a resize feature is activated, making sure everything is re-rendered on resize. for manual or lazy loading, you are responsible to handle resize yourself.
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
 * Lazy loads `speccer()` per specced element
 *
 * @packageDocumentation
 */
import { element as measureElement } from '../features/measure';
import { pinElements } from '../features/pin';
import { element as specElement } from '../features/spacing';
import { SpeccerFunctionType } from '../types/speccer';
import { activate as resizeActivate } from '../utils/resize';

/**
 * A function to initialize speccer when the DOM is ready.
 *
 * @param {SpeccerFunctionType} speccer - The speccer function to execute.
 *
 * @example
 * ```ts
 * // Usage example:
 * // dom(mySpeccer);
 * ```
 */
export const dom = (speccer: SpeccerFunctionType): void => {
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', () => {
      speccer();
    });
  // `DOMContentLoaded` already fired
  else speccer();
};

/**
 * A function to initialize lazy speccer functionality.
 *
 * @example
 * ```ts
 * // Usage example:
 * // lazy();
 * ```
 */
export const lazy = (): void => {
  const _spec_observer = new IntersectionObserver((els, observer) => {
    for (const el of els) {
      if (el.intersectionRatio > 0) {
        specElement(el.target as HTMLElement);
        observer.unobserve(el.target);
      }
    }
  });

  for (const el of document.querySelectorAll(
    '[data-speccer^="spacing"],[data-speccer^="spacing"] *:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody)'
  )) {
    _spec_observer.observe(el);
  }

  const _measure_observer = new IntersectionObserver((els, observer) => {
    for (const el of els) {
      if (el.intersectionRatio > 0) {
        measureElement(el.target as HTMLElement);
        observer.unobserve(el.target);
      }
    }
  });

  for (const el of document.querySelectorAll('[data-speccer^="measure"]')) {
    _measure_observer.observe(el);
  }

  const _dissect_observer = new IntersectionObserver(async (els, observer) => {
    for (const el of els) {
      if (el.intersectionRatio > 0) {
        await pinElements(el.target as HTMLElement);
        observer.unobserve(el.target);
      }
    }
  });

  for (const el of document.querySelectorAll('[data-speccer="pin-area"]')) {
    _dissect_observer.observe(el);
  }
};

/**
 * A function to manually activate speccer.
 *
 * @param {SpeccerFunctionType} speccer - The speccer function to execute.
 *
 * @example
 * ```ts
 * // Usage example:
 * // manual(mySpeccer);
 * ```
 */
export const manual = (speccer: SpeccerFunctionType): void => {
  window.speccer = speccer;
};

/**
 * A function to activate speccer based on script attributes.
 *
 * @param {SpeccerFunctionType} speccer - The speccer function to execute.
 *
 * @example
 * ```ts
 * // Usage example:
 * // activate(mySpeccer);
 * ```
 */
export const activate = (speccer: SpeccerFunctionType): void => {
  const _script = document.currentScript;

  if (_script) {
    const _speccer_script_src = _script.getAttribute('src');

    if (_speccer_script_src?.includes('speccer.js')) {
      if (_script.hasAttribute('data-manual')) manual(speccer);
      else if (_script.hasAttribute('data-instant')) speccer();
      else if (_script.hasAttribute('data-dom')) dom(speccer);
      else if (_script.hasAttribute('data-lazy')) lazy();
      else dom(speccer);

      if (
        !_script.hasAttribute('data-manual') &&
        !_script.hasAttribute('data-lazy')
      )
        resizeActivate(speccer);
    }
  }
};
