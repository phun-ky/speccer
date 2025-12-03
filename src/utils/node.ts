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
 * Determines whether a given HTML element should be considered hidden.
 *
 * The function prefers the native `HTMLElement.prototype.checkVisibility`
 * API when available, as it more accurately reflects the browser's idea
 * of whether an element is visible (including CSS properties, layout,
 * `content-visibility`, etc).
 *
 * When `checkVisibility` is not available (e.g. in older browsers or
 * test environments like JSDOM), it falls back to a simple heuristic
 * using `getComputedStyle` to check:
 *
 * - `display === "none"`
 * - `visibility === "hidden"` or `"collapse"`
 * - `opacity === "0"`
 *
 * @param {HTMLElement} element - The element to test for visibility.
 * @returns {boolean} `true` if the element is considered hidden, `false` otherwise.
 *
 * @example
 * ```ts
 * const element = document.getElementById('panel') as HTMLElement;
 *
 * if (isElementHidden(element)) {
 *   console.log('The panel is hidden, showing it now...');
 *   element.style.display = 'block';
 * }
 * ```
 */
export const isElementHidden = (element: HTMLElement): boolean => {
  const anyEl = element as HTMLElement & {
    /**
     * Optional browser-native visibility check.
     *
     * This is not yet universally available, so we treat it as optional
     * and guard its usage at runtime.
     */
    checkVisibility?: (options?: Record<string, boolean>) => boolean;
  };

  if (typeof anyEl.checkVisibility === 'function') {
    return !anyEl.checkVisibility({
      opacityProperty: true,
      checkVisibilityCSS: true
    } as Record<string, boolean>);
  }

  // Fallback for environments without checkVisibility (e.g. jsdom)
  const win = element.ownerDocument?.defaultView;

  const style = win?.getComputedStyle(element);

  // If we cannot read computed styles, assume "not hidden" to avoid false positives.
  if (!style) return false;

  if (style.display === 'none') return true;
  if (style.visibility === 'hidden' || style.visibility === 'collapse')
    return true;
  if (style.opacity === '0') return true;

  return false;
};
