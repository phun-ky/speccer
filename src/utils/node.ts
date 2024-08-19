/**
 * Inserts an HTML element after another element in the DOM.
 *
 * @param {HTMLElement|null} el - The reference element after which the new element will be inserted.
 * @param {HTMLElement} newSibling - The new element to be inserted.
 * @returns {Element|undefined|null}
 *
 * @example
 * ```ts
 * // Insert an element after another element
 * const referenceElement = document.getElementById('reference-element');
 * const newElement = document.createElement('div');
 * after(referenceElement, newElement);
 */
export const after = (
  el: HTMLElement | null,
  newSibling: HTMLElement
): Element | undefined | null =>
  el?.insertAdjacentElement('afterend', newSibling);

/**
 * Removes all elements matching a selector from the DOM.
 *
 * @param {string} selector - The CSS selector used to select elements for removal.
 * @param {Document} el - The document context (default is the global `document` object).
 * @returns {void}
 *
 * @example
 * ```ts
 * // Remove all elements with a specific class from the document
 * removeAll('.my-class');
 * ```
 */
export const removeAll = (selector: string, el: Document = document): void => {
  [].forEach.call(el.querySelectorAll(selector), function (e: HTMLElement) {
    e.remove();
  });
};

/**
 * Determines if an HTML element is hidden based on its visibility properties.
 *
 * @param {HTMLElement} element - The HTML element to check for visibility.
 * @returns {boolean} True if the element is hidden, false otherwise.
 *
 * @example
 * ```ts
 * const element = document.getElementById('my-element');
 * if (element) {
 *   const hidden = isElementHidden(element);
 *   console.log(hidden); // true if the element is hidden, false if visible
 * }
 * ```
 */
export const isElementHidden = (element: HTMLElement): boolean =>
  !element.checkVisibility({
    checkVisibilityCSS: true
  });
