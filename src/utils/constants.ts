/* eslint no-console:0 */
'use strict';

/**
 * Array of uppercase letters.
 *
 * @type {string[]}
 * @example
 * // Access the array of uppercase letters
 * const letters = SPECCER_LITERALS;
 * console.log(letters); // Example output: ['A', 'B', 'C', ...]
 */
export const SPECCER_LITERALS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

/**
 * Array of HTML tags to avoid when processing.
 *
 * @type {string[]}
 * @example
 * // Access the array of tags to avoid
 * const tagsToAvoid = SPECCER_TAGS_TO_AVOID;
 * console.log(tagsToAvoid); // Example output: ['TR', 'TH', 'TD', ...]
 */
export const SPECCER_TAGS_TO_AVOID = [
  'TR',
  'TH',
  'TD',
  'TBODY',
  'THEAD',
  'TFOOT'
];

/**
 * Default value for pin space.
 *
 * @type {number}
 * @example
 * // Access the default pin space value
 * const defaultPinSpace = SPECCER_DEFAULT_PIN_SPACE;
 * console.log(defaultPinSpace); // Example output: 48
 */
export const SPECCER_DEFAULT_PIN_SPACE = 48;

/**
 * Negative default value for pin space.
 *
 * @type {number}
 * @example
 * // Access the negative default pin space value
 * const negativeDefaultPinSpace = SPECCER_DEFAULT_PIN_SPACE_NEG;
 * console.log(negativeDefaultPinSpace); // Example output: -48
 */
export const SPECCER_DEFAULT_PIN_SPACE_NEG = SPECCER_DEFAULT_PIN_SPACE * -1;

/**
 * Default value for measure size.
 *
 * @type {number}
 * @example
 * // Access the default measure size value
 * const defaultMeasureSize = SPECCER_DEFAULT_MEASURE_SIZE;
 * console.log(defaultMeasureSize); // Example output: 8
 */
export const SPECCER_DEFAULT_MEASURE_SIZE = 8;

/**
 * Negative default value for measure size.
 *
 * @type {number}
 * @example
 * // Access the negative default measure size value
 * const negativeDefaultMeasureSize = SPECCER_DEFAULT_MEASURE_SIZE_NEG;
 * console.log(negativeDefaultMeasureSize); // Example output: -8
 */
export const SPECCER_DEFAULT_MEASURE_SIZE_NEG =
  SPECCER_DEFAULT_MEASURE_SIZE * -1;

/**
 * Default line width value.
 *
 * @type {number}
 * @example
 * // Access the default line width value
 * const defaultLineWidth = SPECCER_DEFAULT_LINE_WIDTH;
 * console.log(defaultLineWidth); // Example output: 1
 */
export const SPECCER_DEFAULT_LINE_WIDTH = 1;
