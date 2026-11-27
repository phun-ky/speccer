import { SPECCER_TABBABLE_ELEMENTS_SELECTOR } from '../constants';

// Radios with the same name in the same form share one tab stop
const isRadioOf = (el: Element, group?: HTMLInputElement) =>
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
 * A group of radio buttons is one tab stop: the checked radio, or the first
 * one when none is checked. Arrow keys move within the group.
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
    .filter((el, _, all) => {
      if (!isRadioOf(el)) return true;

      const group = all.filter((other) =>
        isRadioOf(other, el as HTMLInputElement)
      ) as HTMLInputElement[];

      return el === (group.find((radio) => radio.checked) ?? group[0]);
    });
