/* eslint no-console:0 */
'use strict';

import * as Resize from './lib/resize';
import * as Spec from './spec';
import * as Measure from './measure';
import * as Dissect from './dissect';

export const dom = (speccer, anatomy) => {
  console.info('[@phun-ky/speccer]: Initialized with: data-dom');
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', anatomy);
    document.addEventListener('DOMContentLoaded', speccer);
  } else {
    // `DOMContentLoaded` already fired
    anatomy();
    speccer();
  }
};

export const lazy = () => {
  console.info('[@phun-ky/speccer]: Initialized with: data-lazy');
  let _spec_observer = new IntersectionObserver((els, observer) => {
    els.forEach(el => {
      if (el.intersectionRatio > 0) {
        Spec.element(el.target);
        observer.unobserve(el.target);
      }
    });
  });
  document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)').forEach(el => {
    _spec_observer.observe(el);
  });
  let _measure_observer = new IntersectionObserver((els, observer) => {
    els.forEach(el => {
      if (el.intersectionRatio > 0) {
        Measure.element(el.target);
        observer.unobserve(el.target);
      }
    });
  });
  document.querySelectorAll('[data-speccer-measure]').forEach(el => {
    _measure_observer.observe(el);
  });
  let _dissect_observer = new IntersectionObserver((els, observer) => {
    els.forEach(el => {
      const targets = el.target.querySelectorAll('[data-anatomy]');
      if (el.intersectionRatio > 0) {
        targets.forEach(Dissect.element);
        observer.unobserve(el.target);
      }
    });
  });

  document.querySelectorAll('[data-anatomy-section]').forEach(el => {
    _dissect_observer.observe(el);
  });
};

export const instant = (speccer, anatomy) => {
  anatomy();
  speccer();
};

export const manual = (speccer, anatomy) => {
  console.info('[@phun-ky/speccer]: Initialized with: data-manual');
  window.speccer = speccer;
  window.anatomy = anatomy;
};

export const activate = (speccer, anatomy) => {
  const _script = document.currentScript;

  if (_script) {
    const _speccer_script_src = _script.getAttribute('src');
    if (
      _speccer_script_src.indexOf('speccer.js') !== -1 ||
      // for codepen
      _speccer_script_src.indexOf('JaXpOK.js') !== -1
    ) {
      if (_script.hasAttribute('data-manual')) {
        manual(speccer, anatomy);
      } else if (_script.hasAttribute('data-instant')) {
        instant(speccer, anatomy);
      } else if (_script.hasAttribute('data-dom')) {
        dom(speccer, anatomy);
      } else if (_script.hasAttribute('data-lazy')) {
        lazy();
      } else {
        dom(speccer, anatomy);
      }

      if (!_script.hasAttribute('data-manual') && !_script.hasAttribute('data-lazy')) {
        Resize.activate();
      }
    }
  }
};
