/* eslint no-console:0 */
'use strict';

import * as ClassNames from './lib/classnames';
import * as Styles from './lib/style';

import { SPECCER_TAGS_TO_AVOID } from './lib/constants';

const create = (text = '', area = '', tag = 'span') => {
  const newTag = document.createElement(tag);
  newTag.setAttribute('title', text + 'px');
  newTag.setAttribute('data-measure', parseInt(text, 10) + 'px');

  ClassNames.set(`speccer measure ${area}`);

  return newTag;
};

export const element = elementToBeMeasured => {
  if (!elementToBeMeasured) return;

  const rectOfMeasuredElement = elementToBeMeasured.getBoundingClientRect();
  const measureArea = elementToBeMeasured.getAttribute('data-speccer-measure');

  if (measureArea === '') {
    return;
  }

  if (measureArea.indexOf('width') !== -1) {
    if (measureArea.indexOf('bottom') !== -1) {
      const measureNode = create(rectOfMeasuredElement.width, 'width bottom');
      if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeMeasured.nodeName) >= 0) {
        Node.after(elementToBeMeasured.closest('table'), measureNode);
      } else {
        Node.after(elementToBeMeasured, measureNode);
      }
      Styles.add(measureNode, {
        left: elementToBeMeasured.offsetLeft + 'px',
        top: elementToBeMeasured.offsetTop + rectOfMeasuredElement.height + 1 + 'px',
        width: rectOfMeasuredElement.width + 'px'
      });
    } else {
      const measureNode = create(rectOfMeasuredElement.width, 'width top');
      if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeMeasured.nodeName) >= 0) {
        Node.after(elementToBeMeasured.closest('table'), measureNode);
      } else {
        Node.after(elementToBeMeasured, measureNode);
      }
      const rectOfMeasureNode = measureNode.getBoundingClientRect();
      Styles.add(measureNode, {
        left: elementToBeMeasured.offsetLeft + 'px',
        top: elementToBeMeasured.offsetTop - rectOfMeasureNode.height + 1 + 'px',
        width: rectOfMeasuredElement.width + 'px'
      });
    }
  } else if (measureArea.indexOf('height') !== -1) {
    if (measureArea.indexOf('right') !== -1) {
      const measureNode = create(rectOfMeasuredElement.height, 'height right');
      if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeMeasured.nodeName) >= 0) {
        Node.after(elementToBeMeasured.closest('table'), measureNode);
      } else {
        Node.after(elementToBeMeasured, measureNode);
      }
      Styles.add(measureNode, {
        left: elementToBeMeasured.offsetLeft + rectOfMeasuredElement.width + 'px',
        top: elementToBeMeasured.offsetTop + 'px',
        height: rectOfMeasuredElement.height + 'px'
      });
    } else {
      const measureNode = create(rectOfMeasuredElement.height, 'height top');
      if (SPECCER_TAGS_TO_AVOID.indexOf(elementToBeMeasured.nodeName) >= 0) {
        Node.after(elementToBeMeasured.closest('table'), measureNode);
      } else {
        Node.after(elementToBeMeasured, measureNode);
      }
      const rectOfMeasureNode = measureNode.getBoundingClientRect();
      Styles.add(measureNode, {
        left: elementToBeMeasured.offsetLeft - rectOfMeasureNode.width + 'px',
        top: elementToBeMeasured.offsetTop + 'px',
        height: rectOfMeasuredElement.height + 'px'
      });
    }
  }
};
