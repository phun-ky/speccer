/* eslint no-console:0 */
'use strict';

import * as styles from '../lib/styles';
import { DrawLine } from '../lib/classes';
import * as classnames from '../lib/classnames';
import { DissectAreaEnum } from '../enums/area';
import * as helpers from '../helpers/dissect';
import { SPECCER_LITERALS } from '../lib/constants';
import { useSVG } from 'lib/area';
import { waitFor } from 'lib/wait';

export const create = (textContent = '', area: string, n = 'span') => {
  const _el = document.createElement(n);
  const _text_node = document.createTextNode(textContent);
  const _extra_class_names = {};

  if (area !== null && area !== '') {
    _extra_class_names[area] = true;
  }

  if (
    area.indexOf(DissectAreaEnum.Full) === -1 &&
    area.indexOf(DissectAreaEnum.Enclose) === -1
  ) {
    _el.appendChild(_text_node);
  } else if (
    area.indexOf(DissectAreaEnum.Full) !== -1 ||
    area.indexOf(DissectAreaEnum.Enclose) !== -1
  ) {
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
    _dissection_els.forEach(async (targetEl: HTMLElement, targetIndex) => {
      if (!targetEl) return Promise.resolve();

      const _areas_string: string | null =
        targetEl.getAttribute('data-anatomy') || '';

      if (
        !_areas_string ||
        _areas_string === '' ||
        _areas_string.indexOf(DissectAreaEnum.Outline) === -1
      )
        return;

      const _dissection_el = create(
        SPECCER_LITERALS[targetIndex],
        _areas_string
      );

      document.body.appendChild(_dissection_el);

      const _dissection_styles = await helpers.styles(
        _areas_string,
        targetEl,
        _dissection_el,
        useSVG(_areas_string)
      );

      await styles.add(_dissection_el, _dissection_styles);

      await waitFor(500);

      if (useSVG(_areas_string)) {
        new DrawLine(targetEl, _dissection_el);
      }
    });
  }
};
