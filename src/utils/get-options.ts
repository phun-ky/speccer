import {
  SpeccerFeatureType,
  SpeccerOptionsInterface,
  SpeccerPositionType
} from '../types/speccer';

import {
  isBottomArea,
  isBracketArea,
  isCurly,
  isEncloseArea,
  isHeightArea,
  isLeftArea,
  isParentArea,
  isRightArea,
  isSlimArea,
  isSubtle,
  isTextArea,
  isValidGridElement,
  isValidMarkElement,
  isValidMeasureElement,
  isValidPinElement,
  isValidSpacingElement,
  isValidTypographyElement,
  isWidthArea,
  useSVG,
  useSyntaxHighlighting
} from './area';
import { camelCase } from './camel-case';

/**
 * Determines the Speccer feature type based on the given area string and target element.
 *
 * @param {string} areaString - The string representing different area types.
 * @param {Partial<CSSStyleDeclaration>} targetStyle - The target HTML element being evaluated.
 * @returns {SpeccerFeatureType} The determined Speccer feature type.
 *
 * @example
 * ```ts
 * const feature = getFeatureBasedOnArea('left right pin', document.getElementById('myElement'));
 * console.log(feature); // Output: 'pin'
 * ```
 */
const getFeatureBasedOnArea = (
  areaString: string,
  targetStyle: Partial<CSSStyleDeclaration>
): SpeccerFeatureType => {
  if (isValidPinElement(areaString)) return 'pin';

  if (isValidGridElement(areaString, targetStyle)) return 'grid';

  if (isValidMarkElement(areaString)) return 'mark';

  if (isValidMeasureElement(areaString)) return 'measure';

  if (isValidSpacingElement(areaString)) return 'spacing';

  if (isValidTypographyElement(areaString)) return 'typography';

  return 'pin';
};
const getPositionBasedOnArea = (areaString: string): SpeccerPositionType => {
  if (isLeftArea(areaString)) return 'left';

  if (isRightArea(areaString)) return 'right';

  if (isBottomArea(areaString)) return 'bottom';

  return 'top';
};
const getGridToggleValue = (areaString: string) => {
  if (areaString?.includes('columns')) return 'columns';

  if (areaString?.includes('rows')) return 'rows';

  return 'both';
};
const getSpacingToggleValue = (areaString: string) => {
  if (areaString?.includes('margin')) return 'margin';

  if (areaString?.includes('padding')) return 'padding';

  return 'both';
};

/* node:coverage disable */
/**
 * Generates Speccer options based on the provided area string and target style.
 *
 * This function determines the type of feature (pin, measure, typography, grid, or spacing)
 * and assigns the relevant properties accordingly. It merges custom options if provided.
 *
 * @param {string} areaString - The string defining the area type.
 * @param {Partial<CSSStyleDeclaration>} targetStyle - The computed style of the target element.
 * @param {SpeccerOptionsInterface} [customOptions] - Optional custom options to override defaults.
 * @returns {SpeccerOptionsInterface} The generated Speccer options object.
 *
 * @example
 * ```ts
 * const areaString = 'pin bracket subtle';
 * const options = getOptions(areaString, element.style);
 * console.log(options);
 * // Output: {
 * //   slug: 'pinBracketSubtle',
 * //   position: { left: true, right: false, top: false, bottom: false },
 * //   type: 'pin',
 * //   pin: { bracket: true, enclose: false, subtle: true, ... }
 * // }
 * ```
 */
/* node:coverage enable */
export const getOptions = (
  areaString: string,
  targetStyle: Partial<CSSStyleDeclaration>,
  customOptions?: SpeccerOptionsInterface | undefined
): SpeccerOptionsInterface => {
  const type = getFeatureBasedOnArea(areaString, targetStyle);
  const options: SpeccerOptionsInterface = {
    slug: camelCase(areaString),
    position: getPositionBasedOnArea(areaString),
    type
  };

  if (type === 'pin') {
    options.pin = {
      bracket: isBracketArea(areaString),
      enclose: isEncloseArea(areaString),
      subtle: isSubtle(areaString),
      parent: isParentArea(areaString),
      text: isTextArea(areaString),
      useSVGLine: useSVG(areaString),
      useCurlyBrackets: isCurly(areaString)
    };
  }

  if (type === 'measure') {
    options.measure = {
      slim: isSlimArea(areaString),
      height: isHeightArea(areaString),
      width: isWidthArea(areaString)
    };
  }

  if (type === 'typography') {
    options.typography = {
      useSyntaxHighlighting: useSyntaxHighlighting(areaString)
    };
  }

  if (type === 'grid') {
    const _toggle_value = getGridToggleValue(areaString);

    options.grid = {
      toggle: _toggle_value,
      both: _toggle_value === 'both',
      rows: _toggle_value === 'rows',
      columns: _toggle_value === 'columns'
    };
  }

  if (type === 'spacing') {
    const _toggle_value = getSpacingToggleValue(areaString);

    options.spacing = {
      both: _toggle_value === 'both',
      margin: _toggle_value === 'margin',
      padding: _toggle_value === 'padding',
      bound: areaString.includes('bound')
    };
  }

  return { ...options, ...customOptions };
};
