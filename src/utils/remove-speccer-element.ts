/**
 * Remove a speccer element by removing associated elements and SVG paths.
 *
 * This function removes any speccer elements linked to the specified element and
 * also removes any SVG paths that might be associated with it.
 *
 * @param {HTMLElement} el - The HTML element to unpin.
 * @returns {void} This function does not return a value.
 *
 * @example
 * ```ts
 * const element = document.getElementById('my-element');
 * if (element) {
 *   removeSpeccerElement(element);
 * }
 * ```
 */
export const removeSpeccerElement = (el: HTMLElement): void => {
  const _selector = el.getAttribute('data-speccer-element-id');

  if (!_selector) return;

  const _pin_element =
    document.getElementById(_selector) ||
    document.querySelectorAll(`[data-speccer-id="${_selector}"]`);

  if (!_pin_element) return;

  if (Object.prototype.isPrototypeOf.call(NodeList.prototype, _pin_element)) {
    [...(_pin_element as unknown as HTMLElement[])].forEach((el: HTMLElement) =>
      el.remove()
    );
  } else {
    // We also need to remove the svg paths if it is in use
    if (
      (_pin_element as HTMLElement).classList.contains('curly') ||
      (_pin_element as HTMLElement).classList.contains('svg')
    ) {
      const _el_ID = el.getAttribute('id');

      document
        .querySelectorAll(`#ph-speccer-svg path[data-start-el="${_el_ID}"]`)
        .forEach((el) => el.remove());
    }
  }
};
