import { GetRecPropertiesInterface } from '../types/interfaces/position';
import { PositionPropertiesType, PositionInputType } from '../types/position';

import { getParentThatIsSticky, isSticky } from './style-property';
import { waitForFrame } from './wait';

/**
 * Calculates the horizontal center of two elements.
 *
 * @param {number} modifier - A modifier value.
 * @param {DOMRect} startRect - The starting element's rectangle.
 * @param {DOMRect} targetRect - The target element's rectangle.
 * @returns {number} - The horizontal center position.
 *
 * @example
 * ```ts
 * // Calculate the horizontal center of two elements
 * const center = get_horizontal_center_of_els(0, startRect, targetRect);
 * ```
 */
export const get_horizontal_center_of_els = (
  modifier: number,
  startRect: DOMRect,
  targetRect: DOMRect
): number => modifier - startRect.width / 2 + targetRect.width / 2;

/**
 * Calculates the vertical center of two elements.
 *
 * @param {number} modifier - A modifier value.
 * @param {DOMRect} startRect - The starting element's rectangle.
 * @param {DOMRect} targetRect - The target element's rectangle.
 * @returns {number} - The vertical center position.
 *
 * @example
 * ```ts
 * // Calculate the vertical center of two elements
 * const center = get_vertical_center_of_els(0, startRect, targetRect);
 * ```
 */
export const get_vertical_center_of_els = (
  modifier: number,
  startRect: DOMRect,
  targetRect: DOMRect
): number => modifier - startRect.height / 2 + targetRect.height / 2;

/**
 * Gets the offset properties of an HTML element.
 *
 * @param {HTMLElement} targetEl - The target HTML element.
 * @returns {Promise<PositionPropertiesType>} - A promise that resolves to the offset properties.
 *
 * @example
 * ```ts
 * // Get the offset properties of an element
 * const offsetProps = await offset(targetElement);
 * ```
 */
export const offset = async (
  targetEl: HTMLElement
): Promise<PositionPropertiesType> => {
  await waitForFrame();

  let _target_rect = targetEl.getBoundingClientRect();
  let _el_offset_top = _target_rect.top + window.scrollY;

  const _el_offset_left = _target_rect.left + window.scrollX;
  const stickyParentElement = await getParentThatIsSticky(targetEl);
  const isTargetSticky = await isSticky(targetEl);

  // if node is sticky, we need to account for that
  if (isTargetSticky) {
    const originalPosition = targetEl.style.position;

    await waitForFrame();
    targetEl.style.position = 'relative';

    await waitForFrame();
    _target_rect = targetEl.getBoundingClientRect();
    _el_offset_top = _target_rect.top;
    await waitForFrame();
    targetEl.style.position = originalPosition;
  }
  // If any of the parents are sticky, we need to account for that
  else if (stickyParentElement) {
    const originalPosition = stickyParentElement.style.position;

    await waitForFrame();
    stickyParentElement.style.position = 'relative';

    await waitForFrame();
    _target_rect = targetEl.getBoundingClientRect();
    _el_offset_top = _target_rect.top;
    await waitForFrame();
    stickyParentElement.style.position = originalPosition;
  }

  return {
    height: _target_rect.height,
    width: _target_rect.width,
    top: _el_offset_top,
    left: _el_offset_left
  };
};

/**
 * Gets the offset properties of an HTML element with its center aligned to another element.
 *
 * @param {HTMLElement} sourceEl - The source HTML element.
 * @param {HTMLElement} targetEl - The target HTML element.
 * @returns {Promise<PositionPropertiesType>} - A promise that resolves to the offset properties.
 *
 * @example
 * ```ts
 * // Get the offset properties of an element with its center aligned to another element
 * const offsetProps = await offsetWithCenter(sourceElement, targetElement);
 * ```
 */
export const offsetWithCenter = async (
  sourceEl: HTMLElement,
  targetEl: HTMLElement
): Promise<PositionPropertiesType> => {
  await waitForFrame();

  const _source_rect = sourceEl.getBoundingClientRect();

  await waitForFrame();

  const _target_rect = targetEl.getBoundingClientRect();
  const _el_offset_top = _target_rect.top + window.scrollY;
  const _el_offset_left = _target_rect.left + window.scrollX;

  return {
    height: _target_rect.height,
    width: _target_rect.width,
    top: get_vertical_center_of_els(_el_offset_top, _source_rect, _target_rect),
    left: get_horizontal_center_of_els(
      _el_offset_left,
      _source_rect,
      _target_rect
    )
  };
};

/**
 * Gets various positioning properties between two HTML elements.
 *
 * @param {HTMLElement} sourceEl - The source HTML element.
 * @param {HTMLElement} targetEl - The target HTML element.
 * @returns {Promise<GetRecPropertiesInterface>} - A promise that resolves to an object with positioning functions.
 *
 * @example
 * ```ts
 * // Get positioning properties between two elements
 * const recProps = await getRec(sourceElement, targetElement);
 *
 * // Get the absolute position properties
 * const absoluteProps = recProps.absolute();
 *
 * // Get the position properties with the source element above the target element
 * const aboveProps = recProps.toTop();
 * ```
 */
export const getRec = async (
  sourceEl: HTMLElement,
  targetEl: HTMLElement
): Promise<GetRecPropertiesInterface> => {
  await waitForFrame();

  const _source_rect = sourceEl.getBoundingClientRect();
  const _target_offset = await offset(targetEl);
  const _target_offset_center = await offsetWithCenter(sourceEl, targetEl);
  const _target_height = _target_offset.height;
  const _target_width = _target_offset.width;
  const _source_height = _source_rect.height;
  const _source_width = _source_rect.width;

  return {
    absolute: (): PositionPropertiesType => ({
      top: _target_offset.top,
      left: _target_offset.left,
      height: _target_height,
      width: _target_width
    }),
    toTop: ({
      center = false,
      sourceHeight = _source_height,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => ({
      top: _target_offset.top + sourceHeight + modifier,
      left: center ? _target_offset_center.left : _target_offset.left,
      height: _target_height,
      width: _target_width
    }),

    fromTop: ({
      center = false,
      sourceHeight = _source_height,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => ({
      top: _target_offset.top - sourceHeight - modifier,
      left: center ? _target_offset_center.left : _target_offset.left,
      height: _target_height,
      width: _target_width
    }),

    toBottom: ({
      center = false,
      sourceHeight = _source_height,
      targetHeight = _target_height,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => ({
      top: _target_offset.top + targetHeight - (sourceHeight + modifier),
      left: center ? _target_offset_center.left : _target_offset.left,
      height: _target_height,
      width: _target_width
    }),
    fromBottom: ({
      center = false,
      targetHeight = _target_height,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => ({
      top: _target_offset.top + targetHeight + modifier,
      left: center ? _target_offset_center.left : _target_offset.left,
      height: _target_height,
      width: _target_width
    }),

    toLeft: ({
      center = false,
      sourceWidth = _source_width,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => ({
      top: center ? _target_offset_center.top : _target_offset.top,
      left: _target_offset.left + sourceWidth + modifier,
      height: _target_height,
      width: _target_width
    }),

    fromLeft: ({
      center = false,
      sourceWidth = _source_width,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => ({
      top: center ? _target_offset_center.top : _target_offset.top,
      left: _target_offset.left - sourceWidth - modifier,
      height: _target_height,
      width: _target_width
    }),

    toRight: ({
      center = false,
      sourceWidth = _source_width,
      targetWidth = _target_width,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => ({
      top: center ? _target_offset_center.top : _target_offset.top,
      left: _target_offset.left + targetWidth - (sourceWidth + modifier),
      height: _target_height,
      width: _target_width
    }),

    fromRight: ({
      center = false,
      targetWidth = _target_width,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => ({
      top: center ? _target_offset_center.top : _target_offset.top,
      left: _target_offset.left + targetWidth + modifier,
      height: _target_height,
      width: _target_width
    })
  };
};
