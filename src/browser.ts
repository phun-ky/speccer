/* eslint no-console:0 */
'use strict';

import { SpeccerFunctionType } from 'types/speccer';

import * as resize from './lib/resize';

import * as spec from './tasks/spec';
import * as measure from './tasks/measure';
import * as dissect from './tasks/dissect';

export const dom = (speccer: SpeccerFunctionType) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      speccer();
    });
  } else {
    // `DOMContentLoaded` already fired
    speccer();
  }
};

export const lazy = () => {
  const _spec_observer = new IntersectionObserver((els, observer) => {
    els.forEach((el: IntersectionObserverEntry) => {
      if (el.intersectionRatio > 0) {
        spec.element(el.target as HTMLElement);
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
        measure.element(el.target as HTMLElement);
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
        dissect.element(el.target as HTMLElement);
        observer.unobserve(el.target);
      }
    });
  });

  document.querySelectorAll('[data-anatomy-section]').forEach((el) => {
    _dissect_observer.observe(el);
  });
};

export const manual = (speccer: SpeccerFunctionType) => {
  window.speccer = speccer;
};

export const activate = (speccer: SpeccerFunctionType) => {
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
        resize.activate(speccer);
      }
    }
  }
};
