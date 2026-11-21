/**
 * Remove the annotations of an element: every element speccer generated for
 * it, and its SVG lines, curly brackets and circles.
 *
 * @param {HTMLElement} el - The annotated element.
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

  // Compared as values, not put in a selector, so any id works
  for (const node of document.querySelectorAll('[data-speccer-id]')) {
    if (node.getAttribute('data-speccer-id') === _selector) node.remove();
  }

  const _el_ID = el.getAttribute('id');

  if (!_el_ID) return;

  // shortcut: SVG shapes only store the element's id, so elements sharing an
  // id lose each other's shapes; store the annotation id on them if that matters
  for (const node of document.querySelectorAll(
    '#ph-speccer-svg [data-start-el], #ph-speccer-svg [data-el]'
  )) {
    if (
      node.getAttribute('data-start-el') === _el_ID ||
      node.getAttribute('data-el') === _el_ID
    )
      node.remove();
  }
};
