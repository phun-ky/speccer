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

/**
 * Generates Speccer options based on the target element and the specified area string.
 *
 * @param {HTMLElement} targetElement - The HTML element for which options are being generated.
 * @param {string} areaString - The string representing different area types.
 * @param {SpeccerOptionsInterface|undefined} [customOptions] - Custom options
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
  targetStyle: CSSStyleDeclaration,
  customOptions?: SpeccerOptionsInterface | undefined
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
    const _toggle_value = getGridToggleValue(areaString);

    options['grid'] = {
      toggle: _toggle_value,
      both: _toggle_value === 'both',
      rows: _toggle_value === 'rows',
      columns: _toggle_value === 'columns'
    };
  }

  if (type === 'spacing') {
    const _toggle_value = getSpacingToggleValue(areaString);

    options['spacing'] = {
      both: _toggle_value === 'both',
      margin: _toggle_value === 'margin',
      padding: _toggle_value === 'padding',
      bound: areaString.includes('bound')
    };
  }

  return { ...options, ...customOptions };
};
