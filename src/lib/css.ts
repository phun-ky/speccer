/* eslint no-console:0 */
'use strict';
import {
  SPECCER_DEFAULT_PIN_SPACE,
  SPECCER_DEFAULT_MEASURE_SIZE,
  SPECCER_DEFAULT_LINE_WIDTH
} from './constants';
import {
  SpacingCSSPropertiesType,
  TypographyCSSPropertiesType
} from '../types/css';

export const getNumberValue = (value: string): number => parseInt(value, 10);

export const normalizeNumberValue = (value: string | number): number => {
  const _value = parseFloat(value + '');

  return (_value >= 0 && _value < 1) || (_value <= 0 && _value > -1)
    ? 0
    : _value;
};

export const getClassNameFromCSSProperty = (property: string) => {
  if (property.indexOf('Top') !== -1) {
    return property.replace('Top', ' top');
  } else if (property.indexOf('Right') !== -1) {
    return property.replace('Right', ' right');
  } else if (property.indexOf('Bottom') !== -1) {
    return property.replace('Bottom', ' bottom');
  } else if (property.indexOf('Left') !== -1) {
    return property.replace('Left', ' left');
  }

  return '';
};

export const getSpacing = (
  style: SpacingCSSPropertiesType
): SpacingCSSPropertiesType => {
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

export const getTypography = (
  style: TypographyCSSPropertiesType
): TypographyCSSPropertiesType => {
  const {
    lineHeight,
    letterSpacing,
    fontFamily,
    fontSize,
    fontStyle,
    fontVariationSettings,
    fontWeight
  } = style;

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
  getNumberValue(
    getComputedStyle(el).getPropertyValue('--ph-speccer-pin-space')
  ) || SPECCER_DEFAULT_PIN_SPACE;

export const measureSize = (el: HTMLElement): number =>
  getNumberValue(
    getComputedStyle(el).getPropertyValue('--ph-speccer-measure-size')
  ) || SPECCER_DEFAULT_MEASURE_SIZE;

export const lineWidth = (el: HTMLElement): number =>
  getNumberValue(
    getComputedStyle(el).getPropertyValue('--ph-speccer-line-width')
  ) || SPECCER_DEFAULT_LINE_WIDTH;
