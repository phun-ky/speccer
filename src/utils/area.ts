import {
  PinAreaEnum,
  MeasureAreaEnum,
  TypographyAreaEnum,
  SpacingAreaEnum,
  MarkAreaEnum,
  GridAreaEnum
} from '../types/enums/area';

/**
 * Splits a string containing areas into an array of strings.
 *
 * @param {string} areaString - The string containing areas.
 * @returns An array of area strings.
 *
 * @example
 * ```ts
 * const areas = getAreasFromString('left right top');
 * // areas: ['left', 'right', 'top']
 * ```
 */
export const getAreasFromString = (areaString: string): string[] =>
  areaString.split(' ');

/**
 * Checks if 'left' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'left' is present, otherwise `false`.
 */
export const isLeftArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(PinAreaEnum.Left);
};

/**
 * Checks if 'right' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'right' is present, otherwise `false`.
 */
export const isRightArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(PinAreaEnum.Right);
};

/**
 * Checks if 'top' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'top' is present, otherwise `false`.
 */
export const isTopArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(PinAreaEnum.Top);
};

/**
 * Checks if 'bottom' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'bottom' is present, otherwise `false`.
 */
export const isBottomArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(PinAreaEnum.Bottom);
};

/**
 * Checks if 'bracket' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'bracket' is present, otherwise `false`.
 */
export const isBracketArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(PinAreaEnum.Bracket);
};

/**
 * Checks if 'enclose' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'enclose' is present, otherwise `false`.
 */
export const isEncloseArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(PinAreaEnum.Enclose);
};

/**
 * Checks if 'subtle' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'subtle' is present, otherwise `false`.
 */
export const isSubtle = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(PinAreaEnum.Subtle);
};

/**
 * Checks if 'parent' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'parent' is present, otherwise `false`.
 */
export const isParentArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(PinAreaEnum.Parent);
};

/**
 * Checks if 'text' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'text' is present, otherwise `false`.
 */
export const isTextArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(PinAreaEnum.Text);
};

/**
 * Checks if 'height' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'height' is present, otherwise `false`.
 */
export const isHeightArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(MeasureAreaEnum.Height);
};

/**
 * Checks if 'slim' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'slim' is present, otherwise `false`.
 */
export const isSlimArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(MeasureAreaEnum.Slim);
};

/**
 * Checks if 'width' area is present in the provided areaString.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'width' is present, otherwise `false`.
 */
export const isWidthArea = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return areas.includes(MeasureAreaEnum.Width);
};

/**
 * Checks if the provided areaString contains SVG-related areas.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if any SVG-related area is present, otherwise `false`.
 */
export const useSVG = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return (
    ((isParentArea(areaString) &&
      !isEncloseArea(areaString) &&
      !isBracketArea(areaString)) ||
      isTextArea(areaString) ||
      areas.includes(PinAreaEnum.SVG)) &&
    !isCurly(areaString)
  );
};

/**
 * Checks if the provided areaString contains 'curly' and 'bracket' areas.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if both 'curly' and 'bracket' are present, otherwise `false`.
 */
export const isCurly = (areaString: string | null): boolean => {
  if (areaString === null) return false;

  const areas = getAreasFromString(areaString);

  return (
    areas.includes(PinAreaEnum.Curly) && areas.includes(PinAreaEnum.Bracket)
  );
};

/**
 * Checks if the provided areaString contains 'typography'.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'typography' are present, otherwise `false`.
 */
export const isValidTypographyElement = (areaString: string | null): boolean =>
  areaString !== null &&
  areaString.split(' ').includes(TypographyAreaEnum.Typography);

/**
 * Checks if the provided areaString contains 'spacing'.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'spacing' are present, otherwise `false`.
 */
export const isValidSpacingElement = (areaString: string | null): boolean =>
  areaString !== null &&
  areaString.split(' ').includes(SpacingAreaEnum.Spacing);

/**
 * Checks if the provided areaString contains 'measure'.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'measure' are present, otherwise `false`.
 */
export const isValidMeasureElement = (areaString: string | null): boolean =>
  areaString !== null &&
  areaString.split(' ').includes(MeasureAreaEnum.Measure);

/**
 * Checks if the provided areaString contains 'pin'.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'pin' are present, otherwise `false`.
 */
export const isValidPinElement = (areaString: string | null): boolean =>
  areaString !== null && areaString.split(' ').includes(PinAreaEnum.Pin);

/**
 * Checks if the provided areaString contains 'mark'.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if 'mark' are present, otherwise `false`.
 */
export const isValidMarkElement = (areaString: string | null): boolean =>
  areaString !== null && areaString.split(' ').includes(MarkAreaEnum.Mark);

/**
 * Checks if the provided areaString contains 'grid'.
 *
 * @param {string|null} areaString - The string containing areas.
 * @param {Partial<CSSStyleDeclaration>} areaString - The string containing areas.
 * @returns boolean `true` if 'grid' are present, otherwise `false`.
 */
export const isValidGridElement = (
  areaString: string | null,
  styles: Partial<CSSStyleDeclaration>
): boolean =>
  areaString !== null &&
  areaString.split(' ').includes(GridAreaEnum.Grid) &&
  isString(styles.display) &&
  (styles.display === 'grid' || (styles.display || '').includes('grid'));

/**
 * Checks if the provided areaString contains 'syntax'.
 *
 * @param {string|null} areaString - The string containing areas.
 * @returns boolean `true` if both 'syntax' are present, otherwise `false`.
 */
export const useSyntaxHighlighting = (areaString: string | null): boolean => {
  if (areaString)
    return areaString.split(' ').includes(TypographyAreaEnum.Syntax);

  return false;
};
