import {
  SpeccerOptionsInterface,
} from '../../types/speccer';
import {
  isBracketArea,
  isCurly,
  isEncloseArea,
  isHeightArea,
  isParentArea,
  isSlimArea,
  isSubtle,
  isTextArea,
  isWidthArea,
  useSVG,
  useSyntaxHighlighting
} from '../area';
import { camelCase } from '../camel-case';
import { getFeatureBasedOnArea, getGridToggleValue, getPositionBasedOnArea, getSpacingToggleValue } from './utils';

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
