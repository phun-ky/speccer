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

const createDissectionNode = (e = '', t, n = 'span') => {
  const r = document.createElement(n);
  const o = document.createTextNode(e);
  r.classList.add('dissection');
  r.appendChild(o);
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
      elementToDissect.insertAdjacentElement('afterend', dissectionNode);

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
    elementToDissect.insertAdjacentElement('afterend', dissectionNode);
    const rectOfDissectionNode = dissectionNode.getBoundingClientRect();

    if (dissectionArea.indexOf('outline') !== -1) {
      if (dissectionArea.indexOf('left') !== -1) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft - rectOfDissectionNode.width - 48 + 'px',
          top: elementToDissect.offsetTop + rectOfDissectedElement.height / 2 - rectOfDissectionNode.height / 2 + 'px'
        });
      } else if (dissectionArea.indexOf('right') !== -1) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width + 48 + 'px',
          top: elementToDissect.offsetTop + rectOfDissectedElement.height / 2 - rectOfDissectionNode.height / 2 + 'px'
        });
      } else if (dissectionArea.indexOf('top') !== -1) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width / 2 - rectOfDissectionNode.width / 2 + 'px',
          top: elementToDissect.offsetTop - rectOfDissectionNode.height - 48 + 'px'
        });
      } else if (dissectionArea.indexOf('bottom') !== -1) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width / 2 - rectOfDissectionNode.width / 2 + 'px',
          top: elementToDissect.offsetTop + rectOfDissectedElement.height + 48 + 'px'
        });
      } else {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width / 2 - rectOfDissectionNode.width / 2 + 'px',
          top: elementToDissect.offsetTop - rectOfDissectionNode.height - 48 + 'px'
        });
      }
    } else {
      addStyleToElement(dissectionNode, {
        left: elementToDissect.offsetLeft + rectOfDissectedElement.width / 2 - rectOfDissectionNode.width / 2 + 'px',
        top: elementToDissect.offsetTop - rectOfDissectionNode.height - 48 + 'px'
      });
    }
  }
};

const anatomy = () => {
  [].forEach.call(document.querySelectorAll('.dissection'), function(e) {
    e.parentNode.removeChild(e);
  });
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
        elementToBeMeasured.insertAdjacentElement('afterend', measureNode);
        addStyleToElement(measureNode, {
          left: elementToBeMeasured.offsetLeft + 'px',
          top: elementToBeMeasured.offsetTop + rectOfMeasuredElement.height + 1 + 'px',
          width: rectOfMeasuredElement.width + 'px'
        });
      } else {
        const measureNode = createMeasureNode(rectOfMeasuredElement.width, 'width top');
        elementToBeMeasured.insertAdjacentElement('afterend', measureNode);
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
        elementToBeMeasured.insertAdjacentElement('afterend', measureNode);
        addStyleToElement(measureNode, {
          left: elementToBeMeasured.offsetLeft + rectOfMeasuredElement.width + 'px',
          top: elementToBeMeasured.offsetTop + 'px',
          height: rectOfMeasuredElement.height + 'px'
        });
      } else {
        const measureNode = createMeasureNode(rectOfMeasuredElement.height, 'height top');
        elementToBeMeasured.insertAdjacentElement('afterend', measureNode);
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

    elementToBeSpecced.insertAdjacentElement('afterend', speccerMarginTopElement);
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

    elementToBeSpecced.insertAdjacentElement('afterend', speccerMarginRightElement);
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

    elementToBeSpecced.insertAdjacentElement('afterend', speccerMarginBottomElement);
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

    elementToBeSpecced.insertAdjacentElement('afterend', speccerMarginLeftElement);
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

    elementToBeSpecced.insertAdjacentElement('afterend', speccerPaddingBottomElement);
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

    elementToBeSpecced.insertAdjacentElement('afterend', speccerPaddingBottomElement);
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

    elementToBeSpecced.insertAdjacentElement('afterend', speccerPaddingRightElement);
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

    elementToBeSpecced.insertAdjacentElement('afterend', speccerPaddingLeftElement);
  }
};

const speccer = () => {
  [].forEach.call(document.querySelectorAll('.speccer'), function(e) {
    e.parentNode.removeChild(e);
  });
  const elementsToBeSpecced = document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)');
  elementsToBeSpecced.forEach(specElement);
  const elementsToBeMeasured = document.querySelectorAll('[data-speccer-measure]');
  elementsToBeMeasured.forEach(measureElement);
};

throttle('resize', 'speccer-onResize');
throttle('resize', 'anatomy-onResize');

window.addEventListener('speccer-onResize', () => {
  speccer();
});

window.addEventListener('anatomy-onResize', () => {
  anatomy();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', anatomy);
  document.addEventListener('DOMContentLoaded', speccer);
} else {
  // `DOMContentLoaded` already fired
  anatomy();
  speccer();
}
