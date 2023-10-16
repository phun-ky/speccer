/* eslint no-console:0 */
'use strict';

import { SpeccerFunctionType } from 'types/speccer';

import { activate as resizeActivate } from '../utils/resize';

import { element as specElement } from '../features/spacing';
import { element as measureElement } from '../features/measure';
import { element as dissectElement } from '../features/dissect';

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
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      speccer();
    });
  } else {
    // `DOMContentLoaded` already fired
    speccer();
  }
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
    els.forEach((el: IntersectionObserverEntry) => {
      if (el.intersectionRatio > 0) {
        specElement(el.target as HTMLElement);
        observer.unobserve(el.target);
      }
    });
  });

  document
    .querySelectorAll(
      '[data-speccer],[data-speccer] *:not(td):not(tr):not(th):not(tfoot):not(thead):not(tbody)'
    )
    .forEach((el) => {
      _spec_observer.observe(el);
    });

  const _measure_observer = new IntersectionObserver((els, observer) => {
    els.forEach((el) => {
      if (el.intersectionRatio > 0) {
        measureElement(el.target as HTMLElement);
        observer.unobserve(el.target);
      }
    });
  });

  document.querySelectorAll('[data-speccer-measure]').forEach((el) => {
    _measure_observer.observe(el);
  });

  const _dissect_observer = new IntersectionObserver((els, observer) => {
    els.forEach((el) => {
      if (el.intersectionRatio > 0) {
        dissectElement(el.target as HTMLElement);
        observer.unobserve(el.target);
      }
    });
  });

  document.querySelectorAll('[data-anatomy-section]').forEach((el) => {
    _dissect_observer.observe(el);
  });
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

    if (
      _speccer_script_src &&
      (_speccer_script_src.indexOf('speccer.js') !== -1 ||
        // for codepen
        _speccer_script_src.indexOf('JaXpOK.js') !== -1)
    ) {
      if (_script.hasAttribute('data-manual')) {
        manual(speccer);
      } else if (_script.hasAttribute('data-instant')) {
        speccer();
      } else if (_script.hasAttribute('data-dom')) {
        dom(speccer);
      } else if (_script.hasAttribute('data-lazy')) {
        lazy();
      } else {
        dom(speccer);
      }

      if (
        !_script.hasAttribute('data-manual') &&
        !_script.hasAttribute('data-lazy')
      ) {
        resizeActivate(speccer);
      }
    }
  }
};
