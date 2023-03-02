import { waitForFrame } from './wait';

import { PositionPropertiesType, PositionInputType } from '../types/position';
import { GetRecPropertiesInterface } from 'interfaces/position';

export const get_horizontal_center_of_els = (
  modifier: number,
  startRect: DOMRect,
  targetRect: DOMRect
): number => modifier - startRect.width / 2 + targetRect.width / 2;

export const get_vertical_center_of_els = (
  modifier: number,
  startRect: DOMRect,
  targetRect: DOMRect
): number => modifier - startRect.height / 2 + targetRect.height / 2;

export const offset = async (
  targetEl: HTMLElement
): Promise<PositionPropertiesType> => {
  await waitForFrame();

  const _target_rect = targetEl.getBoundingClientRect();
  const _el_offset_top = _target_rect.top + window.pageYOffset;
  const _el_offset_left = _target_rect.left + window.pageXOffset;

  return {
    height: _target_rect.height,
    width: _target_rect.width,
    top: _el_offset_top,
    left: _el_offset_left
  };
};

export const offsetWithCenter = async (
  sourceEl: HTMLElement,
  targetEl: HTMLElement
): Promise<PositionPropertiesType> => {
  await waitForFrame();

  const _source_rect = sourceEl.getBoundingClientRect();
  const _target_rect = targetEl.getBoundingClientRect();
  const _el_offset_top = _target_rect.top + window.pageYOffset;
  const _el_offset_left = _target_rect.left + window.pageXOffset;

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
    toTop: ({
      center = false,
      sourceHeight = _source_height
    }: PositionInputType = {}): PositionPropertiesType => {
      return {
        top: _target_offset.top - sourceHeight,
        left: center ? _target_offset_center.left : _target_offset.left,
        height: _target_height,
        width: _target_width
      };
    },

    fromTop: ({
      center = false
    }: PositionInputType = {}): PositionPropertiesType => {
      return {
        top: _target_offset.top,
        left: center ? _target_offset_center.left : _target_offset.left,
        height: _target_height,
        width: _target_width
      };
    },

    toBottom: ({
      center = false,
      sourceHeight = _source_height,
      targetHeight = _target_height
    }: PositionInputType = {}): PositionPropertiesType => {
      return {
        top: _target_offset.top + targetHeight - sourceHeight,
        left: center ? _target_offset_center.left : _target_offset.left,
        height: _target_height,
        width: _target_width
      };
    },
    fromBottom: ({
      center = false,
      targetHeight = _target_height
    }: PositionInputType = {}): PositionPropertiesType => {
      return {
        top: _target_offset.top + targetHeight,
        left: center ? _target_offset_center.left : _target_offset.left,
        height: _target_height,
        width: _target_width
      };
    },

    toLeft: ({
      center = false,
      sourceWidth = _source_width,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => {
      return {
        top: center ? _target_offset_center.top : _target_offset.top,
        left: _target_offset.left - sourceWidth - modifier,
        height: _target_height,
        width: _target_width
      };
    },

    fromLeft: ({
      center = false
    }: PositionInputType = {}): PositionPropertiesType => {
      return {
        top: center ? _target_offset_center.top : _target_offset.top,
        left: _target_offset.left,
        height: _target_height,
        width: _target_width
      };
    },

    toRight: ({
      center = false,
      sourceWidth = _source_width,
      targetWidth = _target_width,
      modifier = 0
    }: PositionInputType = {}): PositionPropertiesType => {
      return {
        top: center ? _target_offset_center.top : _target_offset.top,
        left: _target_offset.left + targetWidth - sourceWidth + modifier,
        height: _target_height,
        width: _target_width
      };
    },

    fromRight: ({
      center = false,
      targetWidth = _target_width
    }: PositionInputType = {}): PositionPropertiesType => {
      return {
        top: center ? _target_offset_center.top : _target_offset.top,
        left: _target_offset.left + targetWidth,
        height: _target_height,
        width: _target_width
      };
    }
  };
};
