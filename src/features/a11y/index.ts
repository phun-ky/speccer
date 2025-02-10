/**
 * This feature will annotate or highlight accessibility areas like landmarks and region. It can also display tab stops/sequence and any keyboard shortcuts assigned
 *
 * ![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-tabstops-light.png?raw=true)
 *
 * @example
 *
 * Use the following code, either for html or js:
 *
 * ```html
 * <div
 *   data-speccer="a11y [shortcuts|tabstops|landmark|headings|autocomplete]"
 *   class="…"
 * >
 *   …
 * </div>
 * ```
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * a11y(targetElement);
 * ```
 *
 * @packageDocumentation
 */

import { isElementHidden } from '../../utils/node';

import {
  SPECCER_LANDMARK_ELEMENTS_SELECTOR,
  SPECCER_TABBABLE_ELEMENTS_SELECTOR
} from './constants';
import { addA11yElement } from './utils/add-a11y-element';
import { addShortcutElement } from './utils/add-shortcut-element';

/**
 * Initializes the accessibility elements on the document.
 *
 * @example
 * ```ts
 * a11y();
 * ```
 */
export const a11y = () => {
  const _tab_order_elements = document.querySelectorAll(
    '[data-speccer*="a11y tabstops"]'
  );
  const _landmark_elements = document.querySelectorAll(
    '[data-speccer*="a11y landmark"]'
  );
  const _shortcut_elements = document.querySelectorAll(
    '[data-speccer*="a11y shortcut"]'
  );
  const _autocomplete_elements = document.querySelectorAll(
    '[data-speccer*="a11y autocomplete"]'
  );
  const _headings_elements = document.querySelectorAll(
    '[data-speccer*="a11y headings"]'
  );

  if (_shortcut_elements.length) {
    for (const el of _shortcut_elements) {
      const _shortcut_string = el.getAttribute('data-speccer-a11y-shortcut');

      if (
        !_shortcut_string ||
        _shortcut_string === '' ||
        isElementHidden(el as HTMLElement)
      )
        continue;

      addShortcutElement(el as HTMLElement, _shortcut_string);
    }
  }

  if (_tab_order_elements.length) {
    for (const el of _tab_order_elements) {
      const _tabstops_els = el.querySelectorAll(
        SPECCER_TABBABLE_ELEMENTS_SELECTOR
      );

      for (const [tabstopsIndex, tabstopsEl] of _tabstops_els.entries()) {
        if (!isElementHidden(tabstopsEl as HTMLElement)) {
          addA11yElement(tabstopsEl as HTMLElement, tabstopsIndex + 1, 'tabstops');
          continue;
        }

        const id = tabstopsEl.getAttribute('id');

        if (!id) continue;

        const potentialLabelElement = document.querySelector(`[for="${id}"]`);

        if (
          !potentialLabelElement ||
          isElementHidden(potentialLabelElement as HTMLElement)
        ) continue;

        // This could be a fake element, like a toggle checkbox, so we use the labelElement
        addA11yElement(potentialLabelElement as HTMLElement, tabstopsIndex + 1, 'tabstops');
      }
    }
  }

  if (_autocomplete_elements.length) {
    for (const el of _autocomplete_elements) {
      const _autocomplete_els = el.querySelectorAll(
        '[autocomplete]'
      );

      for (const _autocomplete_el of _autocomplete_els) {
        if (isElementHidden(_autocomplete_el as HTMLElement)) continue;

        addA11yElement(_autocomplete_el as HTMLElement, null, 'autocomplete');
      }
    }
  }

  if (_headings_elements.length) {
    for (const el of _headings_elements) {
      const _headings_els = el.querySelectorAll(
        'h1,h2,h3,h4,h5,h6, [role="heading"]'
      );

      for (const _headings_el of _headings_els) {
        if (isElementHidden(_headings_el as HTMLElement)) continue;

        addA11yElement(_headings_el as HTMLElement, null, 'headings');
      }
    }
  }

  if (_landmark_elements.length) {
    for (const el of _landmark_elements) {
      const _landmark_els = el.querySelectorAll(
        SPECCER_LANDMARK_ELEMENTS_SELECTOR
      );

      for (const [landmarkIndex, landmarkEl] of _landmark_els.entries()) {
        if (isElementHidden(landmarkEl as HTMLElement)) continue;

        addA11yElement(landmarkEl as HTMLElement, landmarkIndex + 1, 'landmark');
        addA11yElement(landmarkEl as HTMLElement, null, 'region');
      }
    }
  }
};
