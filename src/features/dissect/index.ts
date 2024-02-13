/* eslint no-console:0 */
'use strict';

import { DissectAreaEnum } from '../../types/enums/area';
import { isCurly, isEncloseArea, isFullArea, useSVG } from '../../utils/area';
import { DrawSVGCurlyBracket } from '../../utils/classes/DrawSVGCurlyBracket';
import { DrawSVGLine } from '../../utils/classes/DrawSVGLine';
import { set as setClassNames, cx } from '../../utils/classnames';
import { SPECCER_LITERALS } from '../../utils/constants';
import { add } from '../../utils/styles';

import { styles } from './utils/styles';

/**
 * Create a dissected element with optional text content, area description, and element type.
 *
 * @param {string} textContent - The text content to add to the element.
 * @param {string} area - The area description for styling.
 * @param {string} n - The element type.
 * @returns {HTMLElement} - The created dissected element.
 *
 * @example
 * ```ts
 * const dissectedElement = create('A', 'outline top', 'div');
 * document.body.appendChild(dissectedElement);
 * ```
 */
export const create = (
  textContent = '',
  area: string,
  n = 'span'
): HTMLElement => {
  const _el = document.createElement(n);
  const _text_node = document.createTextNode(textContent);
  const _extra_class_names = {};

  if (area !== null && area !== '') {
    _extra_class_names[area] = true;
  }

  if (
    (!isFullArea(area) && !isEncloseArea(area)) ||
    (isFullArea(area) && isCurly(area))
  ) {
    _el.appendChild(_text_node);
  } else if (isFullArea(area) || isEncloseArea(area)) {
    _el.setAttribute('data-dissection-counter', textContent);
  }

  const _class_names = cx('ph-speccer speccer dissection', _extra_class_names);

  setClassNames(_el, _class_names);

  return _el;
};

/**
 * Create dissected elements based on the section element and its data-anatomy attributes.
 *
 * @param {HTMLElement} sectionEl - The section element containing dissected elements.
 * @returns {Promise<void>} - A promise that resolves after creating dissected elements.
 *
 * @example
 * ```ts
 * const sectionElement = document.getElementById('section');
 * element(sectionElement);
 * ```
 */
export const element = (sectionEl: HTMLElement): Promise<void> => {
  if (!sectionEl) return Promise.resolve();

  const _dissection_els = sectionEl.querySelectorAll('[data-anatomy]');

  if (_dissection_els) {
    let _index_to_use = 0;

    _dissection_els.forEach(async (targetEl: HTMLElement, targetIndex) => {
      if (!targetEl) return Promise.resolve();

      const _areas_string: string = targetEl.getAttribute('data-anatomy') || '';

      if (
        !_areas_string ||
        _areas_string === '' ||
        _areas_string.indexOf(DissectAreaEnum.Outline) === -1
      )
        return Promise.resolve();

      /**
       * If we're running out of literals to use,
       * make a new one with uppercase and lowercase pairs
       */
      let _literal_to_use = SPECCER_LITERALS[targetIndex];

      if (!_literal_to_use) {
        _literal_to_use = `${SPECCER_LITERALS[_index_to_use]}${SPECCER_LITERALS[
          _index_to_use
        ].toLowerCase()}`;
        _index_to_use++;
      }

      const _dissection_el = create(_literal_to_use, _areas_string);

      document.body.appendChild(_dissection_el);

      const _dissection_styles = await styles(
        _areas_string,
        targetEl,
        _dissection_el,
        {
          isCurly: isCurly(_areas_string)
        }
      );

      await add(_dissection_el, _dissection_styles);

      if (useSVG(_areas_string) && !isCurly(_areas_string)) {
        new DrawSVGLine(targetEl, _dissection_el);
      } else if (isCurly(_areas_string)) {
        new DrawSVGCurlyBracket(targetEl, _dissection_el);
      }
    });
  }

  return Promise.resolve();
};
