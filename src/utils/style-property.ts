import { waitForFrame } from './wait';

/**
 * Checks if a specific CSS property of an element has a certain value.
 *
 * @param {HTMLElement} element - The target element.
 * @param {string} property - The CSS property to check.
 * @param {string} value - The expected value of the CSS property.
 * @returns {Promise<boolean>} - A promise that resolves to true if the property has the expected value, false otherwise.
 *
 * @example
 * ```ts
 * // Usage example:
 * const result = await hasStylePropertySet(myElement, 'display', 'block');
 * console.log(result); // true or false
 * ```
 */
const hasStylePropertySet = async (
  element: HTMLElement,
  property: string,
  value: string
): Promise<boolean> => {
  await waitForFrame();

  const _computed_style = getComputedStyle(element);

  return _computed_style[property] === value;
};
/**
 * Finds the nearest parent element with a specific CSS property set to a certain value.
 *
 * @param {HTMLElement} element - The target element.
 * @param {string} property - The CSS property to check.
 * @param {string} value - The expected value of the CSS property.
 * @returns {Promise<HTMLElement | null>} - A promise that resolves to the parent element if found, or null if none.
 *
 * @example
 * ```ts
 * // Usage example:
 * const parentSticky = await getParentWithStylePropertySet(myElement, 'position', 'sticky');
 * console.log(parentSticky); // HTMLElement or null
 * ```
 */
const getParentWithStylePropertySet = async (
  element: HTMLElement,
  property: string,
  value: string
): Promise<HTMLElement | null> => {
  if (!element.parentElement) return null;

  const hasStyleProperty = await hasStylePropertySet(
    element.parentElement,
    property,
    value
  );

  if (hasStyleProperty) return element.parentElement;

  return await getParentWithStylePropertySet(
    element.parentElement,
    property,
    value
  );
};

/**
 * Finds the nearest parent element with 'position: sticky'.
 *
 * @param {HTMLElement} element - The target element.
 * @returns {Promise<HTMLElement | null>} - A promise that resolves to the sticky parent element if found, or null if none.
 * @private
 * @example
 * ```ts
 * // Usage example:
 * const stickyParent = await getParentThatIsSticky(myElement);
 * console.log(stickyParent); // HTMLElement or null
 * ```
 */
export const getParentThatIsSticky = async (
  element: HTMLElement
): Promise<HTMLElement | null> => {
  return await getParentWithStylePropertySet(element, 'position', 'sticky');
};

/**
 * Checks if an element has 'position: sticky'.
 *
 * @param {HTMLElement} element - The target element.
 * @returns {Promise<boolean>} - A promise that resolves to true if the element has 'position: sticky', false otherwise.
 *
 * @example
 * ```ts
 * // Usage example:
 * const isElementSticky = await isSticky(myElement);
 * console.log(isElementSticky); // true or false
 * ```
 */
export const isSticky = async (element: HTMLElement): Promise<boolean> =>
  await hasStylePropertySet(element, 'position', 'sticky');
