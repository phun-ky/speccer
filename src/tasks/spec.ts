/* eslint no-console:0 */
'use strict';

import * as classnames from '../lib/classnames';
import * as css from '../lib/css';
import * as styles from '../lib/styles';
import * as helpers from '../helpers/spacing';

export const create = (text: string | number = '', tag = 'span') => {
  const _el = document.createElement(tag);
  const _text_content = document.createTextNode(text + '');

  _el.appendChild(_text_content);
  _el.setAttribute('title', text + 'px');
  classnames.set(_el, 'ph speccer spacing');

  return _el;
};

export const element = async (targetEl: HTMLElement) => {
  if (!targetEl) return;

  const _target_styles = await styles.get(targetEl);

  if (_target_styles.display === 'none' || _target_styles.opacity === '0' || _target_styles.visibility === 'hidden') {
    return;
  }

  const _target_spacing_styles = css.getSpacing(_target_styles);
  const _target_pruned_spacing_styles = Object.keys(_target_spacing_styles).filter((property) => {
    const _value = _target_spacing_styles[property];

    return _value !== '0px';
  });

  if (_target_pruned_spacing_styles.length === 0) return;

  _target_pruned_spacing_styles.forEach(async (property) => {
    const _value = css.getNumberValue(_target_spacing_styles[property]);
    const _speccer_el = create(_value);
    const _class_name = css.getClassNameFromCSSProperty(property);

    classnames.set(_speccer_el, _class_name);
    document.body.appendChild(_speccer_el);

    targetEl.classList.add('is-specced');
    await helpers.position(property, _value, _speccer_el, targetEl);
  });
};
