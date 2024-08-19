/* eslint-disable import/no-unused-modules */
/* eslint no-console:0 */
/**
 * Array of uppercase letters.
 *
 * @type {string[]}
 * @example
 * ```ts
 * // Access the array of uppercase letters
 * const letters = SPECCER_LITERALS;
 * console.log(letters); // Example output: ['A', 'B', 'C', ...]
 * ```
 */
export const SPECCER_LITERALS: string[] = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

/**
 * Array of HTML tags to avoid when processing.
 *
 * @type {string[]}
 * @example
 * ```ts
 * // Access the array of tags to avoid
 * const tagsToAvoid = SPECCER_TAGS_TO_AVOID;
 * console.log(tagsToAvoid); // Example output: ['TR', 'TH', 'TD', ...]
 * ```
 */
export const SPECCER_TAGS_TO_AVOID: string[] = [
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
 * ```ts
 * // Access the default pin space value
 * const defaultPinSpace = SPECCER_DEFAULT_PIN_SPACE;
 * console.log(defaultPinSpace); // Example output: 48
 * ```
 */
export const SPECCER_DEFAULT_PIN_SPACE = 48;

/**
 * Negative default value for pin space.
 *
 * @type {number}
 * @example
 * ```ts
 * // Access the negative default pin space value
 * const negativeDefaultPinSpace = SPECCER_DEFAULT_PIN_SPACE_NEG;
 * console.log(negativeDefaultPinSpace); // Example output: -48
 * ```
 */
export const SPECCER_DEFAULT_PIN_SPACE_NEG: number =
  SPECCER_DEFAULT_PIN_SPACE * -1;

/**
 * Default value for measure size.
 *
 * @type {number}
 * @example
 * ```ts
 * // Access the default measure size value
 * const defaultMeasureSize = SPECCER_DEFAULT_MEASURE_SIZE;
 * console.log(defaultMeasureSize); // Example output: 8
 * ```
 */
export const SPECCER_DEFAULT_MEASURE_SIZE = 8;

/**
 * Negative default value for measure size.
 *
 * @type {number}
 * @example
 * ```ts
 * // Access the negative default measure size value
 * const negativeDefaultMeasureSize = SPECCER_DEFAULT_MEASURE_SIZE_NEG;
 * console.log(negativeDefaultMeasureSize); // Example output: -8
 * ```
 */
export const SPECCER_DEFAULT_MEASURE_SIZE_NEG: number =
  SPECCER_DEFAULT_MEASURE_SIZE * -1;

/**
 * Default line width value.
 *
 * @type {number}
 * @example
 * ```ts
 * // Access the default line width value
 * const defaultLineWidth = SPECCER_DEFAULT_LINE_WIDTH;
 * console.log(defaultLineWidth); // Example output: 1
 * ```
 */
export const SPECCER_DEFAULT_LINE_WIDTH = 1;

/**
 * The name of the attribute speccer uses to identify elements to spec
 * @type {string}
 */
export const SPECCER_DATA_ATTRIBUTE = 'data-speccer';

/**
 * The selector for the `spacing` feature
 * @type {string}
 */
export const SPECCER_FEATURE_SPACING = 'spacing';

/**
 * The selector for the `measure` feature
 * @type {string}
 */
export const SPECCER_FEATURE_MEASURE = 'measure';

/**
 * The selector for the `typography` feature
 * @type {string}
 */
export const SPECCER_FEATURE_TYPOGRAPHY = 'typography';

/**
 * The selector for the `mark` feature
 * @type {string}
 */
export const SPECCER_FEATURE_MARK = 'mark';

/**
 * The selector for the `grid` feature
 * @type {string}
 */
export const SPECCER_FEATURE_GRID = 'grid';

/**
 * The selector for the container of the `pin` feature
 * @type {string}
 */
export const SPECCER_FEATURE_PIN_AREA = 'pin-area';
