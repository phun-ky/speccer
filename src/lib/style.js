export const addStyleToElement = (el, style) => {
  Object.assign(el.style, style);
};

export const getCSSValue = cssValue => parseInt(cssValue, 10);

export const normalizeCSSValue = cssValue => {
  const value = parseFloat(cssValue);
  return (value >= 0 && value < 1) || (value <= 0 && value > -1) ? 0 : value;
};

export const getElementCSSStyle = el => (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle);
