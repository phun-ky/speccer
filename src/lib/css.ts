/* eslint no-console:0 */
'use strict';
import { SPECCER_DEFAULT_PIN_SPACE } from './constants';
import { SpacingCSSPropertiesType, TypographyCSSPropertiesType } from '../types/css';

export const getNumberValue = (value: string): number => parseInt(value, 10);

export const normalizeNumberValue = (value: string | number): number => {
  const _value = parseFloat(value + '');

  return (_value >= 0 && _value < 1) || (_value <= 0 && _value > -1) ? 0 : _value;
};

export const getSpacing = (style: SpacingCSSPropertiesType): SpacingCSSPropertiesType => {
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

export const getTypography = (style: TypographyCSSPropertiesType): TypographyCSSPropertiesType => {
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

export const pinSpace = (el: HTMLElement): number =>
  getNumberValue(getComputedStyle(el).getPropertyValue('--ph-speccer-pin-space')) || SPECCER_DEFAULT_PIN_SPACE;
