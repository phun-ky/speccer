import { DissectAreaEnum } from '../../../types/enums/area';
import {
  isCurly,
  isEncloseArea,
  isFullArea,
  isParentArea,
  isSubtle,
  useSVG
} from '../../../utils/area';
import { camelCase } from '../../../utils/camel-case';
import { DrawCircle } from '../../../utils/classes/DrawCircle';
import { DrawSVGCurlyBracket } from '../../../utils/classes/DrawSVGCurlyBracket';
import { DrawSVGLine } from '../../../utils/classes/DrawSVGLine';
import { uniqueID } from '../../../utils/id';
import { add } from '../../../utils/styles';

import { create } from './create';
import { styles } from './styles';

/**
 * Create and style the dissection element as needed.
 *
 * This function appends a new dissection element to the document body based on the anatomy data attribute
 * of the target element. It handles different styles, such as curly brackets or lines, based on the anatomy type.
 *
 * @param {HTMLElement} el - The target element that contains the anatomy data.
 * @param {string} symbol - The symbol to use.
 * @param {HTMLElement} parentElement - The parent element
 * @param {string} [areas] - Optional areas to use if not [data-anatomy] is set as an attribute on the element
 * @returns {Promise<string|void>} A promise that resolves to the id of the dissection element when the dissection is completed, or `void` if required input is invalid.
 *
 * @example
 * ```ts
 * const element = document.getElementById('target');
 * const symbol = 0;
 * dissect(element, symbol).then(() => {
 *   console.log('Dissection completed');
 * });
 * ```
 */
export const dissect = async (
  el: HTMLElement,
  symbol: string,
  parentElement: HTMLElement,
  areas = ''
): Promise<string | void> => {
  if (!el) return;

  const _areas_string: string = el.getAttribute('data-anatomy') || areas;

  if (
    !_areas_string ||
    _areas_string === '' ||
    !_areas_string.includes(DissectAreaEnum.Outline)
  )
    return;

  const _dissection_el_id = `speccer-${camelCase(_areas_string)}-${el.getAttribute('id') || uniqueID()}`;
  const _dissection_el = create(symbol, _areas_string, _dissection_el_id);

  el.setAttribute('data-speccer-element-id', _dissection_el_id);

  document.body.appendChild(_dissection_el);

  const _dissection_styles = await styles(
    _areas_string,
    el as HTMLElement,
    _dissection_el,
    parentElement,
    {
      isCurly: isCurly(_areas_string)
    }
  );

  await add(_dissection_el, _dissection_styles);

  const isParent =
    isParentArea(_areas_string) &&
    !isEncloseArea(_areas_string) &&
    !isFullArea(_areas_string) &&
    !isSubtle(_areas_string);
  const isSVGLine =
    isParent || (useSVG(_areas_string) && !isCurly(_areas_string));

  if (isSVGLine) {
    new DrawSVGLine(el as HTMLElement, _dissection_el);

    if (isParent) new DrawCircle(el, 5, _areas_string);
  } else if (isCurly(_areas_string)) {
    new DrawSVGCurlyBracket(el as HTMLElement, _dissection_el);
  }

  return _dissection_el_id;
};
