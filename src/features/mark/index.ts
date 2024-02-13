/* eslint no-console:0 */
'use strict';

import { cx, set } from '../../utils/classnames';
import { getRec } from '../../utils/position';
import { add as addStyles } from '../../utils/styles';

/**
 * Create a marker element with an optional element type.
 *
 * @param {string} n - The element type.
 * @returns {HTMLElement} - The created marker element.
 *
 * @example
 * ```typescript
 * const marker = create('div');
 * document.body.appendChild(marker);
 * ```
 */
export const create = (n = 'span'): HTMLElement => {
  const markElement = document.createElement(n);
  const classNames = cx('ph-speccer speccer mark');

  set(markElement, classNames);

  return markElement;
};

/**
 * Create a marker element and add it to the body with styles matching a specified element.
 *
 * @param {HTMLElement} elementToMark - The target element to match styles with.
 * @returns {Promise<void>} - A promise that resolves after creating and styling the marker element.
 *
 * @example
 * ```typescript
 * const elementToMark = document.getElementById('target');
 * element(elementToMark);
 * ```
 */
export const element = async (elementToMark: HTMLElement): Promise<void> => {
  if (!elementToMark) return Promise.resolve();

  const markElement = create();

  document.body.appendChild(markElement);

  const positionalStyles = await getRec(markElement, elementToMark);
  const { left, top, height, width } = positionalStyles.absolute();
  const markStyles = {
    left: `${left}px`,
    top: `${top}px`,
    height: `${height}px`,
    width: `${width}px`
  };

  await addStyles(markElement, markStyles);
};
