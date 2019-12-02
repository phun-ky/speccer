import 'lib/poly';
import throttle from 'lib/throttle';
import { addStyleToElement, getCSSValue, getElementCSSStyle, normalizeCSSValue } from './lib/style';
import './anatomy.styl';
import './speccer.styl';

const o = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const regions = [
  {
    type: 'button-center'
  },
  {
    type: 'button-outline'
  },
  {
    type: 'button-icon'
  }
];
const avoidTheseTags = ['TR', 'TH', 'TD', 'TBODY', 'THEAD', 'TFOOT'];
const createDissectionNode = (e = '', t, n = 'span') => {
  const r = document.createElement(n);
  const o = document.createTextNode(e);
  r.classList.add('dissection');
  if (t.indexOf('full') === -1) {
    r.appendChild(o);
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
const dissectElement = (elementToDissect, dissectIndex) => {
  const rectOfDissectedElement = elementToDissect.getBoundingClientRect();
  if (!elementToDissect.getAttribute('data-anatomy')) {
    regions.forEach((t, n) => {
      const dissectionNode = createDissectionNode(o[n], t.type);
      if (avoidTheseTags.indexOf(elementToDissect.nodeName) >= 0) {
        elementToDissect.closest('table').insertAdjacentElement('afterend', dissectionNode);
      } else {
        elementToDissect.insertAdjacentElement('afterend', dissectionNode);
      }
      const rectOfDissectionNode = dissectionNode.getBoundingClientRect();
      if ('button-center' == t.type) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width / 2 - rectOfDissectionNode.width / 2 + 'px',
          top: elementToDissect.offsetTop - rectOfDissectionNode.height - 48 + rectOfDissectedElement.height / 2 + 'px'
        });
      } else if ('button-outline' == t.type) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width + 48 + 'px',
          top: elementToDissect.offsetTop + rectOfDissectedElement.height / 2 - rectOfDissectionNode.height / 2 + 'px'
        });
      } else if ('button-icon' == t.type) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft - rectOfDissectionNode.width - 48 + 18 + 'px',
          top: elementToDissect.offsetTop + rectOfDissectedElement.height / 2 - rectOfDissectionNode.height / 2 + 'px'
        });
      }
    });
  } else {
    const dissectionArea = elementToDissect.getAttribute('data-anatomy');
    const dissectionNode = createDissectionNode(o[dissectIndex], dissectionArea);
    const rectOfDissectedElement = elementToDissect.getBoundingClientRect();
    let tableCorrectionTop = 0;
    let tableCorrectionLeft = 0;
    const tableCorrection = avoidTheseTags.indexOf(elementToDissect.nodeName) >= 0;
    if (tableCorrection) {
      const table = elementToDissect.closest('table');
      const tableStyle = window.getComputedStyle(table.parentElement);
      table.insertAdjacentElement('afterend', dissectionNode);
      tableCorrectionTop = table.getBoundingClientRect().top - parseInt(tableStyle.getPropertyValue('padding-top'), 10);
      tableCorrectionLeft =
        table.getBoundingClientRect().left - parseInt(tableStyle.getPropertyValue('padding-left'), 10);
    } else {
      elementToDissect.insertAdjacentElement('afterend', dissectionNode);
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
    if (dissectionArea.indexOf('outline') !== -1) {
      if (dissectionArea.indexOf('left') !== -1) {
        if (dissectionArea.indexOf('full') !== -1) {
          addStyleToElement(dissectionNode, {
            left: elementToDissect.offsetLeft - 8 + 'px',
            top: elementToDissect.offsetTop + 'px',
            height: rectOfDissectedElement.height + 'px'
          });
        } else {
          addStyleToElement(dissectionNode, {
            left: outlineLeftLeft,
            top: outlineLeftTop
          });
        }
      } else if (dissectionArea.indexOf('right') !== -1) {
        if (dissectionArea.indexOf('full') !== -1) {
          addStyleToElement(dissectionNode, {
            left: elementToDissect.offsetLeft + rectOfDissectedElement.width + 'px',
            top: elementToDissect.offsetTop + 'px',
            height: rectOfDissectedElement.height + 'px'
          });
        } else {
          addStyleToElement(dissectionNode, {
            left: outlineRightLeft,
            top: outlineRightTop
          });
        }
      } else if (dissectionArea.indexOf('top') !== -1) {
        if (dissectionArea.indexOf('full') !== -1) {
          addStyleToElement(dissectionNode, {
            bottom: elementToDissect.offsetTop + rectOfDissectedElement.height + 'px',
            left: elementToDissect.offsetLeft + 'px',
            width: rectOfDissectedElement.width + 'px'
          });
        } else {
          addStyleToElement(dissectionNode, {
            left: outlineTopLeft,
            top: outlineTopTop
          });
        }
      } else if (dissectionArea.indexOf('bottom') !== -1) {
        if (dissectionArea.indexOf('full') !== -1) {
          addStyleToElement(dissectionNode, {
            top: elementToDissect.offsetTop + rectOfDissectedElement.width + 'px',
            left: elementToDissect.offsetLeft + 'px',
            width: rectOfDissectedElement.width + 'px'
          });
        } else {
          addStyleToElement(dissectionNode, {
            left: outlineBottomleft,
            top: outlineBottomTop
          });
        }
      } else {
        if (dissectionArea.indexOf('full') !== -1) {
          addStyleToElement(dissectionNode, {
            left: elementToDissect.offsetLeft + rectOfDissectedElement.width + 'px',
            top: elementToDissect.offsetTop + 'px',
            height: rectOfDissectedElement.height + 'px'
          });
        } else {
          addStyleToElement(dissectionNode, {
            left: outlineLeftLeft,
            top: outlineLeftTop
          });
        }
      }
    } else {
      if (dissectionArea.indexOf('full') !== -1) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width + 'px',
          top: elementToDissect.offsetTop + 'px',
          height: rectOfDissectedElement.height + 'px'
        });
      } else {
        addStyleToElement(dissectionNode, {
          left: outlineLeftLeft,
          top: outlineLeftTop
        });
      }
    }
  }
};
const anatomy = () => {
  console.info('[@phun-ky/speccer]: Running anatomy()');
  removeSpeccerElements('.dissection');
  document.querySelectorAll('[data-anatomy-section]').forEach(section => {
    const elementsToBeDissected = section.querySelectorAll('[data-anatomy]');
    elementsToBeDissected.forEach(dissectElement);
  });
};
const getDesiredCSSStyles = style => {
  const {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  } = style;
  return {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  };
};
const createSpeccerNode = (text = '', tag = 'span') => {
  const newTag = document.createElement(tag);
  const textContent = document.createTextNode(text);
  newTag.appendChild(textContent);
  newTag.setAttribute('title', text + 'px');
  newTag.classList.add('speccer');
  return newTag;
};
const createMeasureNode = (text = '', area = '', tag = 'span') => {
  const newTag = document.createElement(tag);
  // const textContent = document.createTextNode(text);
  // newTag.appendChild(textContent);
  newTag.setAttribute('title', text + 'px');
  newTag.setAttribute('data-measure', parseInt(text, 10) + 'px');
  newTag.classList.add('speccer');
  newTag.classList.add('measure');
  if (area !== '') {
    if (area.indexOf(' ') !== -1) {
      var ts = area.split(' ');
      ts.forEach(v => {
        newTag.classList.add(v);
      });
    } else {
      newTag.classList.add(area);
    }
  }
  return newTag;
};
const measureElement = elementToBeMeasured => {
  const rectOfMeasuredElement = elementToBeMeasured.getBoundingClientRect();
  const measureArea = elementToBeMeasured.getAttribute('data-speccer-measure');
  if (measureArea === '') {
    return;
  } else {
    if (measureArea.indexOf('width') !== -1) {
      if (measureArea.indexOf('bottom') !== -1) {
        const measureNode = createMeasureNode(rectOfMeasuredElement.width, 'width bottom');
        if (avoidTheseTags.indexOf(elementToBeMeasured.nodeName) >= 0) {
          elementToBeMeasured.closest('table').insertAdjacentElement('afterend', measureNode);
        } else {
          elementToBeMeasured.insertAdjacentElement('afterend', measureNode);
        }
        addStyleToElement(measureNode, {
          left: elementToBeMeasured.offsetLeft + 'px',
          top: elementToBeMeasured.offsetTop + rectOfMeasuredElement.height + 1 + 'px',
          width: rectOfMeasuredElement.width + 'px'
        });
      } else {
        const measureNode = createMeasureNode(rectOfMeasuredElement.width, 'width top');
        if (avoidTheseTags.indexOf(elementToBeMeasured.nodeName) >= 0) {
          elementToBeMeasured.closest('table').insertAdjacentElement('afterend', measureNode);
        } else {
          elementToBeMeasured.insertAdjacentElement('afterend', measureNode);
        }
        const rectOfMeasureNode = measureNode.getBoundingClientRect();
        addStyleToElement(measureNode, {
          left: elementToBeMeasured.offsetLeft + 'px',
          top: elementToBeMeasured.offsetTop - rectOfMeasureNode.height + 1 + 'px',
          width: rectOfMeasuredElement.width + 'px'
        });
      }
    } else if (measureArea.indexOf('height') !== -1) {
      if (measureArea.indexOf('right') !== -1) {
        const measureNode = createMeasureNode(rectOfMeasuredElement.height, 'height right');
        if (avoidTheseTags.indexOf(elementToBeMeasured.nodeName) >= 0) {
          elementToBeMeasured.closest('table').insertAdjacentElement('afterend', measureNode);
        } else {
          elementToBeMeasured.insertAdjacentElement('afterend', measureNode);
        }
        addStyleToElement(measureNode, {
          left: elementToBeMeasured.offsetLeft + rectOfMeasuredElement.width + 'px',
          top: elementToBeMeasured.offsetTop + 'px',
          height: rectOfMeasuredElement.height + 'px'
        });
      } else {
        const measureNode = createMeasureNode(rectOfMeasuredElement.height, 'height top');
        if (avoidTheseTags.indexOf(elementToBeMeasured.nodeName) >= 0) {
          elementToBeMeasured.closest('table').insertAdjacentElement('afterend', measureNode);
        } else {
          elementToBeMeasured.insertAdjacentElement('afterend', measureNode);
        }
        const rectOfMeasureNode = measureNode.getBoundingClientRect();
        addStyleToElement(measureNode, {
          left: elementToBeMeasured.offsetLeft - rectOfMeasureNode.width + 'px',
          top: elementToBeMeasured.offsetTop + 'px',
          height: rectOfMeasuredElement.height + 'px'
        });
      }
    }
  }
};
const specElement = elementToBeSpecced => {
  const speccerElement = {};
  const elementCSSStyle = getElementCSSStyle(elementToBeSpecced);
  if (elementCSSStyle.display === 'none' || elementCSSStyle.visibility === 'hidden') {
    return;
  }
  elementToBeSpecced.classList.add('speccer-isSpecced');
  const parentElementCSSStyle = getElementCSSStyle(elementToBeSpecced.parentElement);
  if (parentElementCSSStyle.position === 'static') {
    elementToBeSpecced.parentElement.style.position = 'relative';
  }
  speccerElement.style = getDesiredCSSStyles(elementCSSStyle);
  speccerElement.rect = elementToBeSpecced.getBoundingClientRect();
  if (speccerElement.style['marginTop'] !== '0px') {
    const speccerMarginTopElement = createSpeccerNode(getCSSValue(speccerElement.style.marginTop));
    speccerMarginTopElement.classList.add('margin');
    speccerMarginTopElement.classList.add('marginTop');
    addStyleToElement(speccerMarginTopElement, {
      height: speccerElement.style.marginTop,
      width: speccerElement.rect.width + 'px',
      left:
        normalizeCSSValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) + 'px',
      top:
        normalizeCSSValue(
          speccerElement.rect.y -
            elementToBeSpecced.parentElement.getBoundingClientRect().y -
            parseInt(speccerElement.style.marginTop, 10)
        ) + 'px'
    });
    if (avoidTheseTags.indexOf(elementToBeSpecced.nodeName) >= 0) {
      elementToBeSpecced.closest('table').insertAdjacentElement('afterend', speccerMarginTopElement);
    } else {
      elementToBeSpecced.insertAdjacentElement('afterend', speccerMarginTopElement);
    }
  }
  if (speccerElement.style['marginRight'] !== '0px') {
    const speccerMarginRightElement = createSpeccerNode(getCSSValue(speccerElement.style.marginRight));
    speccerMarginRightElement.classList.add('margin');
    speccerMarginRightElement.classList.add('marginRight');
    addStyleToElement(speccerMarginRightElement, {
      height: speccerElement.rect.height + 'px',
      width: speccerElement.style.marginRight,
      left:
        normalizeCSSValue(
          speccerElement.rect.x -
            elementToBeSpecced.parentElement.getBoundingClientRect().x +
            parseInt(speccerElement.rect.width, 10)
        ) + 'px',
      top: normalizeCSSValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (avoidTheseTags.indexOf(elementToBeSpecced.nodeName) >= 0) {
      elementToBeSpecced.closest('table').insertAdjacentElement('afterend', speccerMarginRightElement);
    } else {
      elementToBeSpecced.insertAdjacentElement('afterend', speccerMarginRightElement);
    }
  }
  if (speccerElement.style['marginBottom'] !== '0px') {
    const speccerMarginBottomElement = createSpeccerNode(getCSSValue(speccerElement.style.marginBottom));
    speccerMarginBottomElement.classList.add('margin');
    speccerMarginBottomElement.classList.add('marginBottom');
    addStyleToElement(speccerMarginBottomElement, {
      height: speccerElement.style.marginBottom,
      width: speccerElement.rect.width + 'px',
      left:
        normalizeCSSValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) + 'px',
      top:
        normalizeCSSValue(
          speccerElement.rect.y -
            elementToBeSpecced.parentElement.getBoundingClientRect().y +
            parseInt(speccerElement.rect.height, 10)
        ) + 'px'
    });
    if (avoidTheseTags.indexOf(elementToBeSpecced.nodeName) >= 0) {
      elementToBeSpecced.closest('table').insertAdjacentElement('afterend', speccerMarginBottomElement);
    } else {
      elementToBeSpecced.insertAdjacentElement('afterend', speccerMarginBottomElement);
    }
  }
  if (speccerElement.style['marginLeft'] !== '0px') {
    const speccerMarginLeftElement = createSpeccerNode(getCSSValue(speccerElement.style.marginLeft));
    speccerMarginLeftElement.classList.add('margin');
    speccerMarginLeftElement.classList.add('marginLeft');
    addStyleToElement(speccerMarginLeftElement, {
      height: speccerElement.rect.height + 'px',
      width: speccerElement.style.marginLeft,
      left:
        normalizeCSSValue(
          speccerElement.rect.x -
            elementToBeSpecced.parentElement.getBoundingClientRect().x -
            parseInt(speccerElement.style.marginLeft, 10)
        ) + 'px',
      top: normalizeCSSValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (avoidTheseTags.indexOf(elementToBeSpecced.nodeName) >= 0) {
      elementToBeSpecced.closest('table').insertAdjacentElement('afterend', speccerMarginLeftElement);
    } else {
      elementToBeSpecced.insertAdjacentElement('afterend', speccerMarginLeftElement);
    }
  }
  if (speccerElement.style['paddingTop'] !== '0px') {
    const speccerPaddingBottomElement = createSpeccerNode(getCSSValue(speccerElement.style.paddingTop));
    speccerPaddingBottomElement.classList.add('padding');
    speccerPaddingBottomElement.classList.add('paddingTop');
    addStyleToElement(speccerPaddingBottomElement, {
      height: speccerElement.style.paddingTop,
      width: speccerElement.rect.width + 'px',
      left:
        normalizeCSSValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) + 'px',
      top: normalizeCSSValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (avoidTheseTags.indexOf(elementToBeSpecced.nodeName) >= 0) {
      elementToBeSpecced.closest('table').insertAdjacentElement('afterend', speccerPaddingBottomElement);
    } else {
      elementToBeSpecced.insertAdjacentElement('afterend', speccerPaddingBottomElement);
    }
  }
  if (speccerElement.style['paddingBottom'] !== '0px') {
    const speccerPaddingBottomElement = createSpeccerNode(getCSSValue(speccerElement.style.paddingBottom));
    speccerPaddingBottomElement.classList.add('padding');
    speccerPaddingBottomElement.classList.add('paddingBottom');
    addStyleToElement(speccerPaddingBottomElement, {
      height: speccerElement.style.paddingBottom,
      width: speccerElement.rect.width + 'px',
      left:
        normalizeCSSValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) + 'px',
      top:
        normalizeCSSValue(
          speccerElement.rect.y -
            elementToBeSpecced.parentElement.getBoundingClientRect().y +
            (parseInt(speccerElement.rect.height, 10) - parseInt(speccerElement.style.paddingBottom, 10))
        ) + 'px'
    });
    if (avoidTheseTags.indexOf(elementToBeSpecced.nodeName) >= 0) {
      elementToBeSpecced.closest('table').insertAdjacentElement('afterend', speccerPaddingBottomElement);
    } else {
      elementToBeSpecced.insertAdjacentElement('afterend', speccerPaddingBottomElement);
    }
  }
  if (speccerElement.style['paddingRight'] !== '0px') {
    const speccerPaddingRightElement = createSpeccerNode(getCSSValue(speccerElement.style.paddingRight));
    speccerPaddingRightElement.classList.add('padding');
    speccerPaddingRightElement.classList.add('paddingRight');
    addStyleToElement(speccerPaddingRightElement, {
      height: speccerElement.rect.height + 'px',
      width: speccerElement.style.paddingRight,
      left:
        normalizeCSSValue(
          speccerElement.rect.x -
            elementToBeSpecced.parentElement.getBoundingClientRect().x +
            (parseInt(speccerElement.rect.width, 10) - parseInt(speccerElement.style.paddingRight, 10))
        ) + 'px',
      top: normalizeCSSValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (avoidTheseTags.indexOf(elementToBeSpecced.nodeName) >= 0) {
      elementToBeSpecced.closest('table').insertAdjacentElement('afterend', speccerPaddingRightElement);
    } else {
      elementToBeSpecced.insertAdjacentElement('afterend', speccerPaddingRightElement);
    }
  }
  if (speccerElement.style['paddingLeft'] !== '0px') {
    const speccerPaddingLeftElement = createSpeccerNode(getCSSValue(speccerElement.style.paddingLeft));
    speccerPaddingLeftElement.classList.add('padding');
    speccerPaddingLeftElement.classList.add('paddingLeft');
    addStyleToElement(speccerPaddingLeftElement, {
      height: speccerElement.rect.height + 'px',
      width: speccerElement.style.paddingLeft,
      left:
        normalizeCSSValue(speccerElement.rect.x - elementToBeSpecced.parentElement.getBoundingClientRect().x) + 'px',
      top: normalizeCSSValue(speccerElement.rect.y - elementToBeSpecced.parentElement.getBoundingClientRect().y) + 'px'
    });
    if (avoidTheseTags.indexOf(elementToBeSpecced.nodeName) >= 0) {
      elementToBeSpecced.closest('table').insertAdjacentElement('afterend', speccerPaddingLeftElement);
    } else {
      elementToBeSpecced.insertAdjacentElement('afterend', speccerPaddingLeftElement);
    }
  }
};
const speccer = () => {
  console.info('[@phun-ky/speccer]: Running speccer()');
  removeSpeccerElements('.speccer');
  const elementsToBeSpecced = document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)');
  elementsToBeSpecced.forEach(specElement);
  const elementsToBeMeasured = document.querySelectorAll('[data-speccer-measure]');
  elementsToBeMeasured.forEach(measureElement);
};

const activateOnResize = () => {
  throttle('resize', 'speccer-onResize');
  throttle('resize', 'anatomy-onResize');
  window.addEventListener('speccer-onResize', () => {
    console.info('[@phun-ky/speccer]: Event speccer-onResize triggered');
    speccer();
  });
  window.addEventListener('anatomy-onResize', () => {
    console.info('[@phun-ky/speccer]: Event anatomy-onResize triggered');
    anatomy();
  });
};

const speccerScript = document.currentScript;

const removeSpeccerElements = (selector, el = document) => {
  [].forEach.call(el.querySelectorAll(selector), function(e) {
    e.parentNode.removeChild(e);
  });
};

if (speccerScript.hasAttribute('data-manual')) {
  console.info('[@phun-ky/speccer]: Initialized with: data-manual');
  window.speccer = speccer;
  window.anatomy = anatomy;
} else if (speccerScript.hasAttribute('data-instant')) {
  anatomy();
  speccer();
} else if (speccerScript.hasAttribute('data-dom')) {
  console.info('[@phun-ky/speccer]: Initialized with: data-dom');
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', anatomy);
    document.addEventListener('DOMContentLoaded', speccer);
  } else {
    // `DOMContentLoaded` already fired
    anatomy();
    speccer();
  }
} else if (speccerScript.hasAttribute('data-lazy')) {
  console.info('[@phun-ky/speccer]: Initialized with: data-lazy');
  let specElementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        specElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)').forEach(el => {
    specElementObserver.observe(el);
  });
  let measureElementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        measureElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('[data-speccer-measure]').forEach(el => {
    measureElementObserver.observe(el);
  });
  let dissectElementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const targets = entry.target.querySelectorAll('[data-anatomy]');
      if (entry.intersectionRatio > 0) {
        targets.forEach(dissectElement);
        observer.unobserve(entry.target);
      }
    });
  });

  const observeAnatomySections = section => {
    dissectElementObserver.observe(section);
  };

  document.querySelectorAll('[data-anatomy-section]').forEach(observeAnatomySections);
} else {
  console.info('[@phun-ky/speccer]: Initialized with nothing, falling back to data-dom');
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', anatomy);
    document.addEventListener('DOMContentLoaded', speccer);
  } else {
    // `DOMContentLoaded` already fired
    anatomy();
    speccer();
  }
}

if (!speccerScript.hasAttribute('data-manual') || !speccerScript.hasAttribute('data-lazy')) {
  activateOnResize();
}
