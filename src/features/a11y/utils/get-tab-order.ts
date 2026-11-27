import { SPECCER_TABBABLE_ELEMENTS_SELECTOR } from '../constants';

// Radios with the same name in the same form share one tab stop
const isRadioOf = (
  el: Element | undefined,
  group?: HTMLInputElement
): el is HTMLInputElement =>
  el instanceof HTMLInputElement &&
  el.type === 'radio' &&
  el.name !== '' &&
  (!group || (el.name === group.name && el.form === group.form));

/**
 * Returns the focusable elements inside a container in the order the Tab key
 * visits them: positive `tabindex` values first, in ascending order, then the
 * rest in document order.
 *
 * Elements that can't take focus are left out: a negative `tabindex`, disabled
 * (also through a disabled `fieldset`) or inside an `inert` subtree. Hidden
 * elements are kept, since the caller may show them on their label.
 *
 * When a radio group has a checked radio, that radio is the group's only tab
 * stop, and the group has none if it can't take focus or sits outside the
 * container. With nothing checked, Tab skips the rest of the group it leaves,
 * so each run of the group's radios in tab order is one stop.
 *
 * @param {Element} container - The element to look for tab stops in.
 * @returns {HTMLElement[]} The tab stops, in tab order.
 *
 * @example
 * ```ts
 * const form = document.querySelector('form');
 * getTabOrder(form).forEach((el, i) => console.log(i + 1, el));
 * ```
 */
export const getTabOrder = (container: Element): HTMLElement[] =>
  [
    ...container.querySelectorAll<HTMLElement>(
      SPECCER_TABBABLE_ELEMENTS_SELECTOR
    )
  ]
    .map((el) => ({
      el,
      // Without the attribute, the selector only matched natively focusable
      // elements. With it, `tabIndex` gives the browser's parsed value.
      index: el.hasAttribute('tabindex') ? el.tabIndex : 0
    }))
    .filter(
      ({ el, index }) =>
        index >= 0 && !el.matches(':disabled') && !el.closest('[inert]')
    )
    // Array#sort is stable, so equal keys keep document order
    .sort(
      (a, b) =>
        (a.index || Number.MAX_SAFE_INTEGER) -
        (b.index || Number.MAX_SAFE_INTEGER)
    )
    .map(({ el }) => el)
    // Look for the checked radio in the whole group, not just the stops found
    .filter((el) => {
      if (!isRadioOf(el)) return true;

      const checked = [
        ...(el.getRootNode() as ParentNode).querySelectorAll(
          'input[type="radio"]:checked'
        )
      ].find((other) => isRadioOf(other, el));

      return !checked || el === checked;
    })
    .filter((el, i, all) => !(isRadioOf(el) && isRadioOf(all[i - 1], el)));
