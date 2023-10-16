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

/**
 * Parses a string value into an integer.
 *
 * @param {string} value - The string value to parse.
 * @returns {number} - The parsed integer value.
 *
 * @example
 * ```ts
 * // Parse a string value into an integer
 * const intValue = getNumberValue("42");
 * console.log(intValue); // Example output: 42
 * ```
 */
export const getNumberValue = (value: string): number => parseInt(value, 10);

/**
 * Normalizes a string or number value to ensure it's a valid number.
 * If the value is within the range [0, 1] or [-1, 0), it's normalized to 0.
 *
 * @param {string | number} value - The value to normalize.
 * @returns {number} - The normalized number value.
 *
 * @example
 * ```ts
 * // Normalize a value to ensure it's a valid number
 * const normalizedValue = normalizeNumberValue("0.5");
 * console.log(normalizedValue); // Example output: 0.5
 * ```
 */
export const normalizeNumberValue = (value: string | number): number => {
  const _value = parseFloat(value + '');

  return (_value >= 0 && _value < 1) || (_value <= 0 && _value > -1)
    ? 0
    : _value;
};

/**
 * Converts a CSS property name with "Top", "Right", "Bottom", or "Left" into a class name.
 *
 * @param {string} property - The CSS property name.
 * @returns {string} - The corresponding class name.
 *
 * @example
 * ```ts
 * // Convert a CSS property name to a class name
 * const className = getClassNameFromCSSProperty("marginTop");
 * console.log(className); // Example output: "margin top"
 * ```
 */
export const getClassNameFromCSSProperty = (property: string): string => {
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

/**
 * Extracts spacing-related CSS properties from a style object.
 *
 * @param {SpacingCSSPropertiesType} style - The style object.
 * @returns {SpacingCSSPropertiesType} - The extracted spacing-related properties.
 *
 * @example
 * ```ts
 * // Extract spacing-related properties from a style object
 * const spacing = getSpacing({
 *   marginTop: "10px",
 *   marginLeft: "20px",
 * });
 * console.log(spacing); // Example output: { marginTop: "10px", marginLeft: "20px" }
 * ```
 */
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

/**
 * Extracts typography-related CSS properties from a style object.
 *
 * @param {TypographyCSSPropertiesType} style - The style object.
 * @returns {TypographyCSSPropertiesType} - The extracted typography-related properties.
 *
 * @example
 * ```ts
 * // Extract typography-related properties from a style object
 * const typography = getTypography({
 *   fontSize: "16px",
 *   fontWeight: "bold",
 * });
 * console.log(typography); // Example output: { fontSize: "16px", fontWeight: "bold" }
 * ```
 */
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

/**
 * Retrieves the value of a custom CSS property "--ph-speccer-pin-space" from an element.
 *
 * @param {HTMLElement} el - The HTML element.
 * @returns {number} - The parsed value of the CSS property or a default value.
 *
 * @example
 * ```ts
 * // Get the value of a custom CSS property from an element
 * const value = pinSpace(document.body);
 * console.log(value); // Example output: 10
 * ```
 */
export const pinSpace = (el: HTMLElement): number =>
  getNumberValue(
    getComputedStyle(el).getPropertyValue('--ph-speccer-pin-space')
  ) || SPECCER_DEFAULT_PIN_SPACE;

/**
 * Retrieves the value of a custom CSS property "--ph-speccer-measure-size" from an element.
 *
 * @param {HTMLElement} el - The HTML element.
 * @returns {number} - The parsed value of the CSS property or a default value.
 *
 * @example
 * ```ts
 * // Get the value of a custom CSS property from an element
 * const value = measureSize(document.body);
 * console.log(value); // Example output: 20
 * ```
 */
export const measureSize = (el: HTMLElement): number =>
  getNumberValue(
    getComputedStyle(el).getPropertyValue('--ph-speccer-measure-size')
  ) || SPECCER_DEFAULT_MEASURE_SIZE;

/**
 * Retrieves the value of a custom CSS property "--ph-speccer-line-width" from an element.
 *
 * @param {HTMLElement} el - The HTML element.
 * @returns {number} - The parsed value of the CSS property or a default value.
 *
 * @example
 * ```ts
 * // Get the value of a custom CSS property from an element
 * const value = lineWidth(document.body);
 * console.log(value); // Example output: 1.5
 * ```
 */
export const lineWidth = (el: HTMLElement): number =>
  getNumberValue(
    getComputedStyle(el).getPropertyValue('--ph-speccer-line-width')
  ) || SPECCER_DEFAULT_LINE_WIDTH;
