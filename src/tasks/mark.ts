/* eslint no-console:0 */
'use strict';

import * as styles from '../lib/styles';
import { cx, set } from '../lib/classnames';
import { getRec } from 'lib/position';

export const create = (n = 'span') => {
  const markElement = document.createElement(n);
  const classNames = cx('ph speccer mark');

  set(markElement, classNames);

  return markElement;
};

export const element = async (elementToMark: HTMLElement) => {
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

  await styles.add(markElement, markStyles);
};
