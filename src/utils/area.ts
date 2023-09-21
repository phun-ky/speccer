import { DissectAreaEnum, MeasureAreaEnum } from 'types/enums/area';

/**
 * Splits a string containing areas into an array of strings.
 *
 * @param areaString - The string containing areas.
 * @returns An array of area strings.
 *
 * @example
 * const areas = getAreasFromString('left right top');
 * // areas: ['left', 'right', 'top']
 */
export const getAreasFromString = (areaString: string): string[] =>
  areaString.split(' ');

/**
 * Checks if 'left' area is present in the provided areaString.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if 'left' is present, otherwise `false`.
 */
export const isLeftArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Left);
};

/**
 * Checks if 'right' area is present in the provided areaString.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if 'right' is present, otherwise `false`.
 */
export const isRightArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Right);
};

/**
 * Checks if 'top' area is present in the provided areaString.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if 'top' is present, otherwise `false`.
 */
export const isTopArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Top);
};

/**
 * Checks if 'bottom' area is present in the provided areaString.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if 'bottom' is present, otherwise `false`.
 */
export const isBottomArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Bottom);
};

/**
 * Checks if 'full' area is present in the provided areaString.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if 'full' is present, otherwise `false`.
 */
export const isFullArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Full);
};

/**
 * Checks if 'enclose' area is present in the provided areaString.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if 'enclose' is present, otherwise `false`.
 */
export const isEncloseArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(DissectAreaEnum.Enclose);
};

/**
 * Checks if 'height' area is present in the provided areaString.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if 'height' is present, otherwise `false`.
 */
export const isHeightArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(MeasureAreaEnum.Height);
};

/**
 * Checks if 'width' area is present in the provided areaString.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if 'width' is present, otherwise `false`.
 */
export const isWidthArea = (areaString: string): boolean => {
  const areas = getAreasFromString(areaString);

  return areas.includes(MeasureAreaEnum.Width);
};

/**
 * Checks if the provided areaString contains SVG-related areas.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if any SVG-related area is present, otherwise `false`.
 */
export const useSVG = (areaString: string): boolean =>
  areaString.includes(DissectAreaEnum.SVG) ||
  areaString.includes(DissectAreaEnum.Curly) ||
  areaString.includes(DissectAreaEnum.Full) ||
  areaString.includes(DissectAreaEnum.Enclose);

/**
 * Checks if the provided areaString contains 'curly' and 'full' areas.
 *
 * @param areaString - The string containing areas.
 * @returns `true` if both 'curly' and 'full' are present, otherwise `false`.
 */
export const isCurly = (areaString: string): boolean =>
  areaString.includes(DissectAreaEnum.Curly) &&
  areaString.includes(DissectAreaEnum.Full);
