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
 * @param {CSSStyleDeclaration} targetStyle - The target HTML element being evaluated.
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
  targetStyle: CSSStyleDeclaration
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

/**
 * Generates Speccer options based on the target element and the specified area string.
 *
 * @param {HTMLElement} targetElement - The HTML element for which options are being generated.
 * @param {string} areaString - The string representing different area types.
 * @returns {SpeccerOptionsInterface} The generated Speccer options.
 *
 * @example
 * ```ts
 * const options = getOptions(document.getElementById('myElement'), 'left right pin');
 * console.log(options);
 * // Output: { position: { left: true, right: true, top: false, bottom: false }, type: 'pin', pin: { bracket: false, enclose: false, subtle: false, parent: false, text: false, useSVGLine: false, useCurlyBrackets: false } }
 * ```
 */
export const getOptions = (
  areaString: string,
  targetStyle: CSSStyleDeclaration
): SpeccerOptionsInterface => {
  const type = getFeatureBasedOnArea(areaString, targetStyle);
  const options: SpeccerOptionsInterface = {
    slug: camelCase(areaString),
    position: getPositionBasedOnArea(areaString),
    type
  };

  if (type === 'pin') {
    options['pin'] = {
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
    options['measure'] = {
      slim: isSlimArea(areaString),
      height: isHeightArea(areaString),
      width: isWidthArea(areaString)
    };
  }

  if (type === 'typography') {
    options['typography'] = {
      useSyntaxHighlighting: useSyntaxHighlighting(areaString)
    };
  }

  if (type === 'grid') {
    let toggle = 'both';

    if (areaString?.includes('columns')) toggle = 'columns';

    if (areaString?.includes('rows')) toggle = 'rows';

    options['grid'] = {
      toggle
    };
  }

  return options;
};
