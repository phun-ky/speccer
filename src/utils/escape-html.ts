/**
 * Escapes a string so it can be inserted into HTML as text.
 *
 * Values read from the page (attributes, computed styles) go through this
 * before they are inserted with `innerHTML`, so markup in them is shown as
 * text and never rendered or run. Only for text content, not attribute values.
 *
 * @param {string} str - The string to escape.
 * @returns {string} The string with `&`, `<` and `>` replaced by entities.
 *
 * @example
 * ```ts
 * escapeHTML('<img src=x onerror=alert(1)>');
 * // '&lt;img src=x onerror=alert(1)&gt;'
 * ```
 */
export const escapeHTML = (str: string): string =>
  str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
