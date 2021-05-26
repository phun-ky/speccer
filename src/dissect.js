/* eslint no-console:0 */
'use strict';
import * as Styles from './lib/styles';
import { SPECCER_LITERALS, SPECCER_TAGS_TO_AVOID } from './lib/constants';

export const create = (e = '', t, n = 'span') => {
  const r = document.createElement(n);
  const o = document.createTextNode(e);
  r.classList.add('dissection');
  if (t.indexOf('full') === -1 && t.indexOf('enclose') === -1) {
    r.appendChild(o);
  } else if (t.indexOf('full') !== -1 || t.indexOf('enclose') !== -1) {
    r.setAttribute('data-dissection-counter', e);
  }
  if (t) {
    if (t.indexOf(' ') !== -1) {
      var ts = t.split(' ');
      ts.forEach(v => {
        r.classList.add(v);
      });
    } else {
      r.classList.add(t);
    }
  }
  return r;
};

export const element = (elementToDissect, dissectIndex) => {
  const rectOfDissectedElement = elementToDissect.getBoundingClientRect();
  const dissectionArea = elementToDissect.getAttribute('data-anatomy');
  const dissectionNode = create(SPECCER_LITERALS[dissectIndex], dissectionArea);
  const tableCorrection = SPECCER_TAGS_TO_AVOID.indexOf(elementToDissect.nodeName) >= 0;

  let tableCorrectionTop = 0;
  let tableCorrectionLeft = 0;

  if (tableCorrection) {
    const table = elementToDissect.closest('table');
    const tableStyle = window.getComputedStyle(table.parentElement);
    Node.after(table, dissectionNode);
    tableCorrectionTop = table.getBoundingClientRect().top - parseInt(tableStyle.getPropertyValue('padding-top'), 10);
    tableCorrectionLeft =
      table.getBoundingClientRect().left - parseInt(tableStyle.getPropertyValue('padding-left'), 10);
  } else {
    Node.after(elementToDissect, dissectionNode);
  }

  const rectOfDissectionNode = dissectionNode.getBoundingClientRect();
  let outlineLeftLeft =
    (tableCorrection ? rectOfDissectedElement.left - tableCorrectionLeft : elementToDissect.offsetLeft) -
    rectOfDissectionNode.width -
    48 +
    'px';
  let outlineLeftTop =
    (tableCorrection ? rectOfDissectedElement.top - tableCorrectionTop : elementToDissect.offsetTop) +
    rectOfDissectedElement.height / 2 -
    rectOfDissectionNode.height / 2 +
    'px';
  let outlineRightLeft =
    (tableCorrection ? rectOfDissectedElement.left - tableCorrectionLeft : elementToDissect.offsetLeft) +
    rectOfDissectedElement.width +
    48 +
    'px';
  let outlineRightTop =
    (tableCorrection ? rectOfDissectedElement.top - tableCorrectionTop : elementToDissect.offsetTop) +
    rectOfDissectedElement.height / 2 -
    rectOfDissectionNode.height / 2 +
    'px';
  let outlineTopLeft =
    (tableCorrection ? rectOfDissectedElement.left - tableCorrectionLeft : elementToDissect.offsetLeft) +
    rectOfDissectedElement.width / 2 -
    rectOfDissectionNode.width / 2 +
    'px';
  let outlineTopTop =
    (tableCorrection ? rectOfDissectedElement.top - tableCorrectionTop : elementToDissect.offsetTop) -
    rectOfDissectionNode.height -
    48 +
    'px';
  let outlineBottomleft =
    (tableCorrection ? rectOfDissectedElement.left - tableCorrectionLeft : elementToDissect.offsetLeft) +
    rectOfDissectedElement.width / 2 -
    rectOfDissectionNode.width / 2 +
    'px';
  let outlineBottomTop =
    (tableCorrection ? rectOfDissectedElement.top - tableCorrectionTop : elementToDissect.offsetTop) +
    rectOfDissectedElement.height +
    48 +
    'px';

  let _dissection_node_styles = {};
  if (dissectionArea.indexOf('outline') !== -1) {
    if (dissectionArea.indexOf('left') !== -1) {
      if (dissectionArea.indexOf('full') !== -1) {
        _dissection_node_styles = {
          left: elementToDissect.offsetLeft - 8 + 'px',
          top: elementToDissect.offsetTop + -1 + 'px',
          height: rectOfDissectedElement.height + 'px'
        };
      } else if (dissectionArea.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          left: elementToDissect.offsetLeft - 1 + 'px',
          top: elementToDissect.offsetTop + -1 + 'px',
          height: rectOfDissectedElement.height + 'px',
          width: rectOfDissectedElement.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: outlineLeftLeft,
          top: outlineLeftTop
        };
      }
    } else if (dissectionArea.indexOf('right') !== -1) {
      if (dissectionArea.indexOf('full') !== -1) {
        _dissection_node_styles = {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width + 'px',
          top: elementToDissect.offsetTop + -1 + 'px',
          height: rectOfDissectedElement.height + 'px'
        };
      } else if (dissectionArea.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          left: elementToDissect.offsetLeft + -1 + 'px',
          top: elementToDissect.offsetTop + -1 + 'px',
          height: rectOfDissectedElement.height + 'px',
          width: rectOfDissectedElement.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: outlineRightLeft,
          top: outlineRightTop
        };
      }
    } else if (dissectionArea.indexOf('top') !== -1) {
      if (dissectionArea.indexOf('full') !== -1) {
        _dissection_node_styles = {
          bottom: elementToDissect.offsetTop + rectOfDissectedElement.height + 'px',
          left: elementToDissect.offsetLeft + -1 + 'px',
          width: rectOfDissectedElement.width + 'px'
        };
      } else if (dissectionArea.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          top: elementToDissect.offsetTop + -1 + 'px',
          left: elementToDissect.offsetLeft + -1 + 'px',
          height: rectOfDissectedElement.height + 'px',
          width: rectOfDissectedElement.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: outlineTopLeft,
          top: outlineTopTop
        };
      }
    } else if (dissectionArea.indexOf('bottom') !== -1) {
      if (dissectionArea.indexOf('full') !== -1) {
        _dissection_node_styles = {
          top: elementToDissect.offsetTop + rectOfDissectedElement.height + 'px',
          left: elementToDissect.offsetLeft + -1 + 'px',
          width: rectOfDissectedElement.width + 'px'
        };
      } else if (dissectionArea.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          top: elementToDissect.offsetTop + -1 + 'px',
          left: elementToDissect.offsetLeft + -1 + 'px',
          height: rectOfDissectedElement.height + 'px',
          width: rectOfDissectedElement.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: outlineBottomleft,
          top: outlineBottomTop
        };
      }
    } else {
      if (dissectionArea.indexOf('full') !== -1) {
        _dissection_node_styles = {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width + 'px',
          top: elementToDissect.offsetTop + 'px',
          height: rectOfDissectedElement.height + 'px'
        };
      } else if (dissectionArea.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width + 'px',
          top: elementToDissect.offsetTop + -1 + 'px',
          height: rectOfDissectedElement.height + 'px',
          width: rectOfDissectedElement.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: outlineLeftLeft,
          top: outlineLeftTop
        };
      }
    }
  } else {
    if (dissectionArea.indexOf('full') !== -1) {
      _dissection_node_styles = {
        left: elementToDissect.offsetLeft - 8 + 'px',
        top: elementToDissect.offsetTop + -1 + 'px',
        height: rectOfDissectedElement.height + 'px'
      };
    } else if (dissectionArea.indexOf('enclose') !== -1) {
      _dissection_node_styles = {
        left: elementToDissect.offsetLeft - 1 + 'px',
        top: elementToDissect.offsetTop + -1 + 'px',
        height: rectOfDissectedElement.height + 'px',
        width: rectOfDissectedElement.width + 'px'
      };
    } else {
      _dissection_node_styles = {
        left: outlineLeftLeft,
        top: outlineLeftTop
      };
    }
  }
  Styles.add(dissectionNode, _dissection_node_styles);
};
