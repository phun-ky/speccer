import './speccer.styl';

const getElementCSSStyle = el => (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle);
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
const elementsToBeSpecced = document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)');
const addStyleToElement = (el, style) => {
  Object.assign(el.style, style);
};
const getCSSValue = cssValue => parseInt(cssValue, 10);

const normalizeCSSValue = cssValue => {
  const value = parseFloat(cssValue);
  return (value >= 0 && value < 1) || (value <= 0 && value > -1) ? 0 : value;
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
            (parseInt(speccerElement.rect.width, 10) - parseInt(speccerElement.style.paddingRight, 10))
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
elementsToBeSpecced.forEach(specElement);
