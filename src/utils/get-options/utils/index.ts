import {
  SpeccerFeatureType,
  SpeccerPositionType
} from '../../../types/speccer';
import {
  isBottomArea,
  isLeftArea,
  isRightArea,
  isValidGridElement,
  isValidMarkElement,
  isValidMeasureElement,
  isValidPinElement,
  isValidSpacingElement,
  isValidTypographyElement
} from '../../area';
import { waitForFrame } from '../../wait';

/* node:coverage disable */
/**
 * Determines the Speccer feature type based on the given area string and target element.
 *
 * @param {string} areaString - The string representing different area types.
 * @param {HTMLElement} targetElement - The target HTML element being evaluated.
 * @returns {Promise<SpeccerFeatureType>} The determined Speccer feature type.
 *
 * @example
 * ```ts
 * const feature = getFeatureBasedOnArea('left right pin', document.getElementById('myElement'));
 * console.log(feature); // Output: 'pin'
 * ```
 */
/* node:coverage enable */
export const getFeatureBasedOnArea = async (
  areaString: string,
  targetElement: HTMLElement
): Promise<SpeccerFeatureType> => {
  await waitForFrame();

  const targetStyle = getComputedStyle(targetElement);

  if (isValidPinElement(areaString)) return 'pin';

  if (isValidGridElement(areaString, targetStyle)) return 'grid';

  if (isValidMarkElement(areaString)) return 'mark';

  if (isValidMeasureElement(areaString)) return 'measure';

  if (isValidSpacingElement(areaString)) return 'spacing';

  if (isValidTypographyElement(areaString)) return 'typography';

  return 'pin';
};

/**
 * Determines the position based on the provided area string.
 *
 * This function checks the area string and assigns the appropriate position.
 * Defaults to `'top'` if no other position is found.
 *
 * @param {string} areaString - The string defining the area type.
 * @returns {SpeccerPositionType} The determined position (`'left' | 'right' | 'bottom' | 'top'`).
 *
 * @example
 * ```ts
 * console.log(getPositionBasedOnArea('left-area')); // Output: 'left'
 * console.log(getPositionBasedOnArea('right-area')); // Output: 'right'
 * console.log(getPositionBasedOnArea('unknown-area')); // Output: 'top'
 * ```
 */
export const getPositionBasedOnArea = (
  areaString: string
): SpeccerPositionType => {
  if (isLeftArea(areaString)) return 'left';

  if (isRightArea(areaString)) return 'right';

  if (isBottomArea(areaString)) return 'bottom';

  return 'top';
};

/**
 * Determines the grid toggle value based on the provided area string.
 *
 * This function checks whether `'columns'` or `'rows'` are present in the area string
 * and returns the respective toggle value. Defaults to `'both'` if neither is found.
 *
 * @param {string} areaString - The string defining the area type.
 * @returns {'columns' | 'rows' | 'both'} The grid toggle value.
 *
 * @example
 * ```ts
 * console.log(getGridToggleValue('grid-columns')); // Output: 'columns'
 * console.log(getGridToggleValue('grid-rows')); // Output: 'rows'
 * console.log(getGridToggleValue('grid')); // Output: 'both'
 * ```
 */
export const getGridToggleValue = (areaString: string) => {
  if (areaString?.includes('columns')) return 'columns';

  if (areaString?.includes('rows')) return 'rows';

  return 'both';
};

/**
 * Determines the spacing toggle value based on the provided area string.
 *
 * This function checks whether `'margin'` or `'padding'` are present in the area string
 * and returns the respective toggle value. Defaults to `'both'` if neither is found.
 *
 * @param {string} areaString - The string defining the area type.
 * @returns {'margin' | 'padding' | 'both'} The spacing toggle value.
 *
 * @example
 * ```ts
 * console.log(getSpacingToggleValue('spacing-margin')); // Output: 'margin'
 * console.log(getSpacingToggleValue('spacing-padding')); // Output: 'padding'
 * console.log(getSpacingToggleValue('spacing')); // Output: 'both'
 * ```
 */
export const getSpacingToggleValue = (areaString: string) => {
  if (areaString?.includes('margin')) return 'margin';

  if (areaString?.includes('padding')) return 'padding';

  return 'both';
};
