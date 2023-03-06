/* eslint no-console:0 */
'use strict';

import { isBottomArea, isHeightArea, isRightArea, isWidthArea } from 'lib/area';
import * as classnames from '../lib/classnames';
import * as styles from '../lib/styles';
import { waitForFrame } from '../lib/wait';
import * as position from '../lib/position';
import { SPECCER_DEFAULT_MEASURE_SIZE_NEG } from 'lib/constants';

const create = (
  text: string | number = '',
  area: string | null = '',
  tag = 'span'
) => {
  const _el = document.createElement(tag);

  _el.setAttribute('title', text + 'px');
  _el.setAttribute('data-measure', parseInt(text + '', 10) + 'px');

  classnames.set(_el, `ph speccer measure ${area}`);

  return _el;
};

export const element = async (targetEl: HTMLElement) => {
  if (!targetEl) return;

  const _areas_string: string | null = targetEl.getAttribute(
    'data-speccer-measure'
  );

  if (_areas_string === '' || !_areas_string) {
    return;
  }

  const _target_styles = await styles.get(targetEl);

  if (
    _target_styles.display === 'none' ||
    _target_styles.opacity === '0' ||
    _target_styles.visibility === 'hidden'
  ) {
    return;
  }

  await waitForFrame();

  const _target_rect = targetEl.getBoundingClientRect();

  if (isWidthArea(_areas_string)) {
    if (isBottomArea(_areas_string)) {
      const _measure_el = create(_target_rect.width, _areas_string);

      document.body.appendChild(_measure_el);

      const _positional_styles = await position.getRec(_measure_el, targetEl);
      const { left, top, width } = _positional_styles.fromBottom({
        center: false
      });

      await styles.add(_measure_el, {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`
      });
    } else {
      const _measure_el = create(_target_rect.width, _areas_string);

      document.body.appendChild(_measure_el);

      const _positional_styles = await position.getRec(_measure_el, targetEl);
      const { left, top, width } = _positional_styles.fromTop({
        center: false,
        modifier: SPECCER_DEFAULT_MEASURE_SIZE_NEG
      });

      await styles.add(_measure_el, {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`
      });
    }
  } else if (isHeightArea(_areas_string)) {
    if (isRightArea(_areas_string)) {
      const _measure_el = create(_target_rect.height, _areas_string);

      document.body.appendChild(_measure_el);

      const _positional_styles = await position.getRec(_measure_el, targetEl);
      const { left, top, height } = _positional_styles.fromRight({
        center: false
      });

      await styles.add(_measure_el, {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`
      });
    } else {
      const _measure_el = create(_target_rect.height, _areas_string);

      document.body.appendChild(_measure_el);

      const _positional_styles = await position.getRec(_measure_el, targetEl);
      const { left, top, height } = _positional_styles.fromLeft({
        center: false,
        modifier: SPECCER_DEFAULT_MEASURE_SIZE_NEG
      });

      await styles.add(_measure_el, {
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`
      });
    }
  }
};
