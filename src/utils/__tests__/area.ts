import { describe, it, expect } from '@jest/globals';

import {
  getAreasFromString,
  isLeftArea,
  isRightArea,
  isTopArea,
  isBottomArea,
  isFullArea,
  isEncloseArea,
  isHeightArea,
  isWidthArea,
  useSVG,
  isCurly
} from '../area'; // Replace with the correct path to your module

describe('area', () => {
  describe('getAreasFromString', () => {
    it('should split area string into an array', () => {
      const areas = getAreasFromString('left right top');

      expect(areas).toEqual(['left', 'right', 'top']);
    });
  });

  describe('isLeftArea', () => {
    it('should return true if "left" is in the area string', () => {
      expect(isLeftArea('left')).toBe(true);
      expect(isLeftArea('top left bottom')).toBe(true);
      expect(isLeftArea('right top')).toBe(false);
    });
  });

  describe('isRightArea', () => {
    it('should return true if "right" is in the area string', () => {
      expect(isRightArea('right')).toBe(true);
      expect(isRightArea('bottom left right')).toBe(true);
      expect(isRightArea('top left')).toBe(false);
    });
  });

  describe('isTopArea', () => {
    it('should return true if "top" is in the area string', () => {
      expect(isTopArea('top')).toBe(true);
      expect(isTopArea('top right bottom')).toBe(true);
      expect(isTopArea('left right')).toBe(false);
    });
  });

  describe('isBottomArea', () => {
    it('should return true if "bottom" is in the area string', () => {
      expect(isBottomArea('bottom')).toBe(true);
      expect(isBottomArea('left right bottom top')).toBe(true);
      expect(isBottomArea('left right')).toBe(false);
    });
  });

  describe('isFullArea', () => {
    it('should return true if "full" is in the area string', () => {
      expect(isFullArea('full')).toBe(true);
      expect(isFullArea('top full left')).toBe(true);
      expect(isFullArea('left right')).toBe(false);
    });
  });

  describe('isEncloseArea', () => {
    it('should return true if "enclose" is in the area string', () => {
      expect(isEncloseArea('enclose')).toBe(true);
      expect(isEncloseArea('left right enclose top')).toBe(true);
      expect(isEncloseArea('left right')).toBe(false);
    });
  });

  describe('isHeightArea', () => {
    it('should return true if "height" is in the area string', () => {
      expect(isHeightArea('height')).toBe(true);
      expect(isHeightArea('top height bottom')).toBe(true);
      expect(isHeightArea('left right')).toBe(false);
    });
  });

  describe('isWidthArea', () => {
    it('should return true if "width" is in the area string', () => {
      expect(isWidthArea('width')).toBe(true);
      expect(isWidthArea('left right width top')).toBe(true);
      expect(isWidthArea('left right')).toBe(false);
    });
  });

  describe('useSVG', () => {
    it('should return true if SVG-related areas are in the area string', () => {
      expect(useSVG('svg')).toBe(true);
      expect(useSVG('full curly')).toBe(true);
      expect(useSVG('left right')).toBe(false);
    });
  });

  describe('isCurly', () => {
    it('should return true if both "curly" and "full" are in the area string', () => {
      expect(isCurly('curly full')).toBe(true);
      expect(isCurly('full curly right')).toBe(true);
      expect(isCurly('curly top')).toBe(false);
    });
  });
});
