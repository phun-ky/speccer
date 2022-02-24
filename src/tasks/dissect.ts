/* eslint no-console:0 */
'use strict';

import * as styles from '../lib/styles';
import * as classnames from '../lib/classnames';
import { DissectAreaEnum } from '../enums/area';
import * as helpers from '../helpers/dissect';
import { SPECCER_LITERALS } from '../lib/constants';

export const create = (textContent = '', area: string, n = 'span') => {
  const _el = document.createElement(n);
  const _text_node = document.createTextNode(textContent);
  const _extra_class_names = {};

  if (area !== null && area !== '') {
    _extra_class_names[area] = true;
  }

  if (area.indexOf(DissectAreaEnum.Full) === -1 && area.indexOf(DissectAreaEnum.Enclose) === -1) {
    _el.appendChild(_text_node);
  } else if (area.indexOf(DissectAreaEnum.Full) !== -1 || area.indexOf(DissectAreaEnum.Enclose) !== -1) {
    _el.setAttribute('data-dissection-counter', textContent);
  }

  const _class_names = classnames.cx('ph speccer dissection', _extra_class_names);

  classnames.set(_el, _class_names);

  return _el;
};

export const element = async (el: HTMLElement, dissectIndex: number) => {
  if (!el) return;

  const _area: string | null = el.getAttribute('data-anatomy') || '';

  if (!_area || _area === '') return;

  const _dissection_el = create(SPECCER_LITERALS[dissectIndex], _area);

  document.body.appendChild(_dissection_el);

  const _dissection_styles = await helpers.styles(_area, el, _dissection_el);

  styles.add(_dissection_el, _dissection_styles);
};
