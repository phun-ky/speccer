import { isElementHidden, removeAll } from '../../utils/node';

import { SPECCER_LANDMARK_ELEMENTS_SELECTOR } from './constants';
import { addA11yElement } from './utils/add-a11y-element';
import { addShortcutElement } from './utils/add-shortcut-element';
import { getTabOrder } from './utils/get-tab-order';

/**
 * Initializes the accessibility elements on the document.
 *
 * This feature will annotate or highlight accessibility areas like landmarks and region. It can also display tab stops/sequence and any keyboard shortcuts assigned
 *
 * ![pin](/speccer-a11y-tabstops-light.png?raw=true)
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
 * await a11y();
 * ```
 *
 * `a11y contrast` labels each element with text in the container with its
 * WCAG 2 contrast ratio and the level it meets: AAA, AA or Fail. The label
 * is `?` when the color behind the text can't be known from styles, like
 * over a background image or with `opacity` below 1.
 *
 */
export const a11y = async (): Promise<void> => {
  const _drawn: Promise<void>[] = [];

  // Replace the annotations from a previous call instead of adding to them
  removeAll('.ph-speccer.speccer.a11y');

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
  const _contrast_elements = document.querySelectorAll(
    '[data-speccer*="a11y contrast"]'
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

      _drawn.push(addShortcutElement(el as HTMLElement, _shortcut_string));
    }
  }

  if (_tab_order_elements.length) {
    for (const el of _tab_order_elements) {
      // Counts drawn stops only, so skipped elements leave no gaps
      let _tabstop = 0;

      for (const tabstopsEl of getTabOrder(el)) {
        if (!isElementHidden(tabstopsEl)) {
          _drawn.push(addA11yElement(tabstopsEl, ++_tabstop, 'tabstops'));
          continue;
        }

        const id = tabstopsEl.getAttribute('id');

        if (!id) continue;

        const potentialLabelElement = document.querySelector(`[for="${id}"]`);

        if (
          !potentialLabelElement ||
          isElementHidden(potentialLabelElement as HTMLElement)
        )
          continue;

        // This could be a fake element, like a toggle checkbox, so we use the labelElement
        _drawn.push(
          addA11yElement(
            potentialLabelElement as HTMLElement,
            ++_tabstop,
            'tabstops'
          )
        );
      }
    }
  }

  if (_autocomplete_elements.length) {
    for (const el of _autocomplete_elements) {
      const _autocomplete_els = el.querySelectorAll('[autocomplete]');

      for (const _autocomplete_el of _autocomplete_els) {
        if (isElementHidden(_autocomplete_el as HTMLElement)) continue;

        _drawn.push(
          addA11yElement(_autocomplete_el as HTMLElement, null, 'autocomplete')
        );
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

        _drawn.push(
          addA11yElement(_headings_el as HTMLElement, null, 'headings')
        );
      }
    }
  }

  for (const el of _contrast_elements) {
    // Each element with its own text, once, but not speccer's annotations
    const _text_els = new Set<HTMLElement>();
    const _walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);

    while (_walker.nextNode()) {
      const _parent = _walker.currentNode.parentElement;

      if (
        _walker.currentNode.textContent?.trim() &&
        _parent instanceof HTMLElement &&
        !_parent.closest('.ph-speccer') &&
        !isElementHidden(_parent)
      )
        _text_els.add(_parent);
    }

    for (const _text_el of _text_els)
      _drawn.push(addA11yElement(_text_el, null, 'contrast'));
  }

  if (_landmark_elements.length) {
    for (const el of _landmark_elements) {
      const _landmark_els = el.querySelectorAll(
        SPECCER_LANDMARK_ELEMENTS_SELECTOR
      );

      for (const [landmarkIndex, landmarkEl] of _landmark_els.entries()) {
        if (isElementHidden(landmarkEl as HTMLElement)) continue;

        _drawn.push(
          addA11yElement(
            landmarkEl as HTMLElement,
            landmarkIndex + 1,
            'landmark'
          )
        );
        _drawn.push(addA11yElement(landmarkEl as HTMLElement, null, 'region'));
      }
    }
  }

  await Promise.all(_drawn);
};
