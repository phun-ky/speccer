/* node:coverage disable */
/**
 * Retrieves the role of a given HTML element.
 *
 * This function first checks if the `role` attribute of the target element is defined and not empty.
 * If the `role` attribute is not available, it maps certain semantic HTML elements to their respective
 * roles (e.g., `<header>` -> `'header'`). If the element does not match any predefined roles, it returns `'N/A'`.
 *
 * @param {HTMLElement} targetEl - The target HTML element whose role is to be determined.
 * @returns {string} The role of the element, or `'N/A'` if no role is applicable.
 *
 * @example
 * ```ts
 * const element = document.createElement('header');
 * const role = getRole(element);
 * console.log(role); // Output: 'header'
 *
 * const divElement = document.createElement('div');
 * divElement.setAttribute('role', 'button');
 * const divRole = getRole(divElement);
 * console.log(divRole); // Output: 'button'
 *
 * const spanElement = document.createElement('span');
 * const spanRole = getRole(spanElement);
 * console.log(spanRole); // Output: 'N/A'
 * ```
 */
/* node:coverage enable */
export const getRole = (targetEl:HTMLElement): string => {
  if(!targetEl) return '';

  if(targetEl.role && targetEl.role !== '') return targetEl.role;

  const _node_name = targetEl.nodeName.toLowerCase();

  if(['header', 'footer', 'section', 'form', 'main', 'nav', 'aside'].includes(_node_name)) return _node_name;

  return 'N/A';
};
