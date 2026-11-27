import { isElementHidden, removeAll, startDraw } from '../../utils/node';

import { SPECCER_LANDMARK_ELEMENTS_SELECTOR } from './constants';
import { addA11yElement } from './utils/add-a11y-element';
import { addShortcutElement } from './utils/add-shortcut-element';
import { drawTabstopsPath } from './utils/draw-tabstops-path';
import { getTabOrder } from './utils/get-tab-order';

// Bumped by each a11y() call, so an earlier call stops before drawing its path
let _run = 0;

/**
 * Initializes the accessibility elements on the document.
 *
 * This feature will annotate or highlight accessibility areas like landmarks and region. It can also display tab stops/sequence and any keyboard shortcuts assigned
 *
 * Tab stops are numbered in the order the Tab key visits them. Add `path` to
 * draw a line from each tab stop to the next. Lines that go against the
 * reading order get the `backwards` class. Lines need the `#ph-speccer-svg`
 * element in the document.
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
 *
 * <div data-speccer="a11y tabstops path">…</div>
 * ```
 *
 * ```ts
 * const targetElement = document.getElementById('target');
 * await a11y();
 * ```
 *
 *
 */
export const a11y = async (): Promise<void> => {
  const _drawn: Promise<unknown>[] = [];
  const _this_run = ++_run;
  const _is_draw_stale = startDraw();
  // The path is drawn after the badges, so a later a11y() call or
  // removeAnnotations() may have removed them by then
  const isStale = () => _this_run !== _run || _is_draw_stale();

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
      const _targets: HTMLElement[] = [];

      for (const tabstopsEl of getTabOrder(el)) {
        if (!isElementHidden(tabstopsEl)) {
          _targets.push(tabstopsEl);
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
        _targets.push(potentialLabelElement as HTMLElement);
      }

      // Numbered after the skipped elements are left out, so there are no gaps
      const _badges = _targets.map((target, index) =>
        addA11yElement(target, index + 1, 'tabstops')
      );

      _drawn.push(..._badges);

      if (!el.getAttribute('data-speccer')?.split(/\s+/).includes('path'))
        continue;

      _drawn.push(
        Promise.all(_badges).then((badges) => {
          if (isStale()) return;

          return drawTabstopsPath(
            _targets.flatMap((target, index) => {
              const badge = badges[index];

              return badge ? [{ target, badge }] : [];
            }),
            getComputedStyle(el).direction === 'rtl'
          );
        })
      );
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
