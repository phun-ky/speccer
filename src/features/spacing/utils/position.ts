import * as styles from '../../../utils/styles';
import { offset } from '../../../utils/position';
import { waitForFrame } from '../../../utils/wait';

export const position = async (
  property: string,
  value: number,
  spacingEl: HTMLElement,
  targetEl: HTMLElement
) => {
  await waitForFrame();

  const _target_rect = targetEl.getBoundingClientRect();
  const _target_offset = await offset(targetEl);

  if (property === 'marginTop') {
    styles.add(spacingEl, {
      height: `${value}px`,
      width: _target_rect.width + 'px',
      left: _target_offset.left + 'px',
      top: _target_offset.top - value + 'px'
    });
  }

  if (property === 'marginRight') {
    styles.add(spacingEl, {
      height: _target_rect.height + 'px',
      width: `${value}px`,
      left: _target_offset.left + parseInt(_target_rect.width + '', 10) + 'px',
      top: _target_offset.top + 'px'
    });
  }

  if (property === 'marginBottom') {
    styles.add(spacingEl, {
      height: `${value}px`,
      width: _target_rect.width + 'px',
      left: _target_offset.left + 'px',
      top: _target_offset.top + parseInt(_target_rect.height + '', 10) + 'px'
    });
  }

  if (property === 'marginLeft') {
    styles.add(spacingEl, {
      height: _target_rect.height + 'px',
      width: `${value}px`,
      left: _target_offset.left - value + 'px',
      top: _target_offset.top + 'px'
    });
  }

  if (property === 'paddingTop') {
    styles.add(spacingEl, {
      height: `${value}px`,
      width: _target_rect.width + 'px',
      left: _target_offset.left + 'px',
      top: _target_offset.top + 'px'
    });
  }

  if (property === 'paddingBottom') {
    styles.add(spacingEl, {
      height: `${value}px`,
      width: _target_rect.width + 'px',
      left: _target_offset.left + 'px',
      top:
        _target_offset.top +
        (parseInt(_target_rect.height + '', 10) - value) +
        'px'
    });
  }

  if (property === 'paddingRight') {
    styles.add(spacingEl, {
      height: _target_rect.height + 'px',
      width: `${value}px`,
      left:
        _target_offset.left +
        (parseInt(_target_rect.width + '', 10) - value) +
        'px',
      top: _target_offset.top + 'px'
    });
  }

  if (property === 'paddingLeft') {
    styles.add(spacingEl, {
      height: _target_rect.height + 'px',
      width: `${value}px`,
      left: _target_offset.left + 'px',
      top: _target_offset.top + 'px'
    });
  }
};
