/* eslint no-console:0 */
'use strict';

import * as classnames from '../lib/classnames';
import * as styles from '../lib/styles';
import * as helpers from '../helpers/typography';

export const create = (html: string, area: string | null) => {
  const _el = document.createElement('div');
  const _extra_class_names = {};

  if (area !== null && area !== '') {
    _extra_class_names[area] = true;
  }

  const _class_names = classnames.cx('ph speccer typography', _extra_class_names);

  _el.innerHTML = html;

  classnames.set(_el, _class_names);

  return _el;
};

export const element = async (el: HTMLElement) => {
  if (!el) return;

  const _area: string | null = el.getAttribute('data-speccer-typography');
  const _el_style = await styles.get(el);

  if (_el_style.display === 'none' || _el_style.visibility === 'hidden' || !el.parentElement) {
    return;
  }

  el.classList.add('is-specced');

  const _html = await helpers.template(el);
  const _speccer_el = create(_html, _area);

  document.body.appendChild(_speccer_el);

  const _position = await helpers.position(_area, el, _speccer_el);

  styles.add(_speccer_el, _position);
};
