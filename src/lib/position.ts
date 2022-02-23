export const get_horizontal_center_of_els = (modifier: number, startRect: DOMRect, targetRect: DOMRect): number =>
  modifier - startRect.width / 2 + targetRect.width / 2;

export const get_vertical_center_of_els = (modifier: number, startRect: DOMRect, targetRect: DOMRect): number =>
  modifier - startRect.height / 2 + targetRect.height / 2;

export const get_body_correction = () => {
  const _body_style = getComputedStyle(document.body);
  const _body_left_correction = parseInt(_body_style.paddingLeft) + parseInt(_body_style.marginLeft);
  const _body_top_correction = parseInt(_body_style.paddingTop) + parseInt(_body_style.marginTop);

  return {
    top: _body_top_correction,
    left: _body_left_correction
  };
};
