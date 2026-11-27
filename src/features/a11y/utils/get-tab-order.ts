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
export const getTabOrder = (container: Element): HTMLElement[] => {
  // Checked radios by group owner (the form, or the root outside a form) and
  // name, filled once per root so each radio is a lookup, not a page scan
  const checked = new Map<Node, Map<string, HTMLInputElement>>();
  const scanned = new Set<Node>();
  const checkedOf = (radio: HTMLInputElement) => {
    const root = radio.getRootNode();

    if (!scanned.has(root)) {
      scanned.add(root);
      (root as ParentNode)
        .querySelectorAll('input[type="radio"]:checked')
        .forEach((other) => {
          if (!isRadioOf(other)) return;

          const owner = other.form ?? root;

          checked.set(
            owner,
            (checked.get(owner) ?? new Map()).set(other.name, other)
          );
        });
    }

    return checked.get(radio.form ?? root)?.get(radio.name);
  };

  return (
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

        const groupChecked = checkedOf(el);

        return !groupChecked || el === groupChecked;
      })
      .filter((el, i, all) => !(isRadioOf(el) && isRadioOf(all[i - 1], el)))
  );
};
