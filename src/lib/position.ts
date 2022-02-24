import { waitForFrame } from './debounce';

export const get_horizontal_center_of_els = (modifier: number, startRect: DOMRect, targetRect: DOMRect): number =>
  modifier - startRect.width / 2 + targetRect.width / 2;

export const get_vertical_center_of_els = (modifier: number, startRect: DOMRect, targetRect: DOMRect): number =>
  modifier - startRect.height / 2 + targetRect.height / 2;

export const offset = async (targetEl: HTMLElement): Promise<{ left: number; top: number }> => {
  await waitForFrame();

  const _target_rect = targetEl.getBoundingClientRect();
  const _el_offset_top = _target_rect.top + window.pageYOffset;
  const _el_offset_left = _target_rect.left + window.pageXOffset;

  return {
    top: _el_offset_top,
    left: _el_offset_left
  };
};
