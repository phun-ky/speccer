/* eslint no-console:0 */

import { element as dissectElement } from '../features/dissect';
import { element as measureElement } from '../features/measure';
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
    '[data-speccer],[data-speccer] *:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody)'
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

  for (const el of document.querySelectorAll('[data-speccer-measure]')) {
    _measure_observer.observe(el);
  }

  const _dissect_observer = new IntersectionObserver(async (els, observer) => {
    for (const el of els) {
      if (el.intersectionRatio > 0) {
        await dissectElement(el.target as HTMLElement);
        observer.unobserve(el.target);
      }
    }
  });

  for (const el of document.querySelectorAll('[data-anatomy-section]')) {
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

    if (_speccer_script_src && _speccer_script_src.includes('speccer.js')) {
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
