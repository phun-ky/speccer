/**
 * Retrieves the maximum document height.
 *
 * This function calculates the maximum height of the document by considering
 * various properties of both the `<body>` and `<html>` elements.
 *
 * @returns {number} The maximum height of the document in pixels.
 *
 * @example
 * ```ts
 * console.log(getMaxDocumentHeight()); // Output: Maximum height of the document (in pixels)
 * ```
 */
export const getMaxDocumentHeight = (): number => {
  const { body, documentElement: html } = document;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
};
