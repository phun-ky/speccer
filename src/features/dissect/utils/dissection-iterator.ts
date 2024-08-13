import { DissectAreaEnum } from '../../../types/enums/area';
import { isCurly, useSVG } from '../../../utils/area';
import { DrawSVGCurlyBracket } from '../../../utils/classes/DrawSVGCurlyBracket';
import { DrawSVGLine } from '../../../utils/classes/DrawSVGLine';
import { add } from '../../../utils/styles';

import { create } from './create';
import { getCharacterToUse } from './get-character-to-use';
import { styles } from './styles';

/**
 * Iterates over the dissection areas of a target element, creating and styling the dissection elements as needed.
 *
 * This function appends a new dissection element to the document body based on the anatomy data attribute
 * of the target element. It handles different styles, such as curly brackets or lines, based on the anatomy type.
 *
 * @param {HTMLElement} targetEl - The target element that contains the anatomy data.
 * @param {number} targetIndex - The index used to determine the character for the dissection.
 * @returns {Promise<void>} A promise that resolves when the dissection is completed.
 *
 * @example
 * ```ts
 * const targetElement = document.getElementById('target');
 * const targetIndex = 0;
 * dissectionIterator(targetElement, targetIndex).then(() => {
 *   console.log('Dissection completed');
 * });
 * ```
 */
export const dissectionIterator = async (targetEl: HTMLElement, targetIndex: number): Promise<void> => {
  if (!targetEl) return;

  const _areas_string: string = targetEl.getAttribute('data-anatomy') || '';

  if (
    !_areas_string ||
        _areas_string === '' ||
        !_areas_string.includes(DissectAreaEnum.Outline)
  )
    return;

  const _character_to_use = getCharacterToUse(targetIndex);
  const _dissection_el = create(_character_to_use, _areas_string);

  document.body.appendChild(_dissection_el);

  const _dissection_styles = await styles(
    _areas_string,
        targetEl as HTMLElement,
        _dissection_el,
        {
          isCurly: isCurly(_areas_string)
        }
  );

  await add(_dissection_el, _dissection_styles);

  if (useSVG(_areas_string) && !isCurly(_areas_string))
    new DrawSVGLine(targetEl as HTMLElement, _dissection_el);
  else if (isCurly(_areas_string))
    new DrawSVGCurlyBracket(targetEl as HTMLElement, _dissection_el);
};
