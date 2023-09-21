/* eslint no-console:0 */
'use strict';

import { DissectAreaEnum } from '../../types/enums/area';

import * as classnames from '../../utils/classnames';
import { SPECCER_LITERALS } from '../../utils/constants';
import { add } from '../../utils/styles';
import { isCurly, isEncloseArea, isFullArea, useSVG } from '../../utils/area';
import { DrawSVGLine } from '../../utils/classes/DrawSVGLine';
import { DrawSVGCurlyBracket } from '../../utils/classes/DrawSVGCurlyBracket';

import { styles } from './utils/styles';

export const create = (textContent = '', area: string, n = 'span') => {
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

  const _class_names = classnames.cx(
    'ph speccer dissection',
    _extra_class_names
  );

  classnames.set(_el, _class_names);

  return _el;
};

export const element = (sectionEl: HTMLElement) => {
  if (!sectionEl) return;

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
        return;

      /**
       * If we're running out of literals to use,
       * make a new one with uppercase and lower case pairs
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

      if (useSVG(_areas_string)) {
        new DrawSVGLine(targetEl, _dissection_el);
      } else if (isCurly(_areas_string)) {
        new DrawSVGCurlyBracket(targetEl, _dissection_el);
      }
    });
  }
};
