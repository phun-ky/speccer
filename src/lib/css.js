/* eslint no-console:0 */
'use strict';

export const getNumberValue = cssValue => parseInt(cssValue, 10);

export const normalizeNumberValue = cssValue => {
  const value = parseFloat(cssValue);
  return (value >= 0 && value < 1) || (value <= 0 && value > -1) ? 0 : value;
};

export const getSpacing = style => {
  const { marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } =
    style;
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

export const getTypography = style => {
  const { lineHeight, letterSpacing, fontFamily, fontSize, fontStyle, fontVariationSettings, fontWeight } = style;
  return {
    lineHeight,
    letterSpacing,
    fontFamily,
    fontSize,
    fontStyle,
    fontVariationSettings,
    fontWeight
  };
};
