/* eslint no-console:0 */
'use strict';

export const getNumberValue = value => parseInt(value, 10);

export const normalizeNumberValue = value => {
  const _value = parseFloat(value);
  return (_value >= 0 && _value < 1) || (_value <= 0 && _value > -1) ? 0 : _value;
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
