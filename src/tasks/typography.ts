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

  const _class_names = classnames.cx(
    'ph speccer typography',
    _extra_class_names
  );

  _el.innerHTML = html;

  classnames.set(_el, _class_names);

  return _el;
};

export const element = async (targetEl: HTMLElement) => {
  if (!targetEl) return;

  const _area: string | null = targetEl.getAttribute('data-speccer-typography');
  const _target_styles = await styles.get(targetEl);

  if (
    _target_styles.display === 'none' ||
    _target_styles.opacity === '0' ||
    _target_styles.visibility === 'hidden'
  ) {
    return;
  }

  targetEl.classList.add('is-specced');

  const _html = await helpers.template(targetEl);
  const _speccer_el = create(_html, _area);

  document.body.appendChild(_speccer_el);

  const _position = await helpers.position(_area, targetEl, _speccer_el);

  styles.add(_speccer_el, _position);
};
