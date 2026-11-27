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
 * Whether the missing SVG element has been warned about, so it's only done once.
 */
let _warned_missing_svg = false;

/**
 * Checks that the SVG element used to draw lines, circles and curly brackets
 * is in the document, and warns once if it isn't.
 *
 * @returns {boolean} `true` if the SVG element is in the document.
 *
 * @example
 * ```ts
 * if (hasSVGElement()) new DrawSVGLine(start, stop);
 * ```
 */
export const hasSVGElement = (): boolean => {
  if (
    document.getElementById('ph-speccer-svg') &&
    document.getElementById('ph-speccer-path')
  )
    return true;

  if (!_warned_missing_svg) {
    _warned_missing_svg = true;
    // eslint-disable-next-line no-console
    console.warn(
      'SPECCER: lines and curly brackets, like those of text and parent pins and the a11y tab stop path, need the #ph-speccer-svg element in the document. They are drawn without lines. See https://speccer.dev/guide/introduction/#svg'
    );
  }

  return false;
};

// Bumped by removeAnnotations(), so draws that started before it know they are stale
let _generation = 0;

/**
 * Removes every annotation, and stops the draws still in progress from adding
 * more. Draws wait for animation frames, so without this, a draw started
 * before the removal would add its annotations after it.
 *
 * @example
 * ```ts
 * removeAnnotations();
 * ```
 */
export const removeAnnotations = (): void => {
  _generation++;
  removeAll('.ph-speccer.speccer');
};

/**
 * Call when a draw starts. Returns a function that tells whether
 * `removeAnnotations()` has been called since, so the draw should stop before
 * it adds anything.
 *
 * @returns {() => boolean} True once the draw is stale.
 *
 * @example
 * ```ts
 * const isStale = startDraw();
 *
 * await waitForFrame();
 *
 * if (isStale()) return;
 *
 * document.body.appendChild(el);
 * ```
 */
export const startDraw = (): (() => boolean) => {
  const _started = _generation;

  return () => _started !== _generation;
};

/**
 * Throws a `TypeError` when a value is given but isn't an element, so a
 * public function fails with a message that names it, instead of failing
 * somewhere inside. `null` and `undefined` pass, because they mean "nothing
 * to annotate yet", like a ref before the element exists.
 *
 * @param {unknown} value - The value to check.
 * @param {string} name - The public name of the function, like `grid.element`.
 * @param {string} [argument] - The name of the argument.
 *
 * @example
 * ```ts
 * assertElement('#t', 'grid.element');
 * // TypeError: grid.element: expected targetElement to be an element, got string
 * ```
 */
export const assertElement = (
  value: unknown,
  name: string,
  argument = 'targetElement'
): void => {
  // nodeType, not instanceof, so elements from other frames pass too
  if (value === null || value === undefined || (value as Node).nodeType === 1)
    return;

  const _type =
    typeof value === 'object'
      ? Object.prototype.toString.call(value).slice(8, -1)
      : typeof value;

  throw new TypeError(
    `${name}: expected ${argument} to be an element, got ${_type}`
  );
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
