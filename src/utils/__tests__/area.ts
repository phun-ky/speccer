import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

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

      assert.deepEqual(areas,['left', 'right', 'top']);
    });
  });

  describe('isLeftArea', () => {
    it('should return true if "left" is in the area string', () => {
      assert.equal(isLeftArea('left'), true);
      assert.equal(isLeftArea('top left bottom'), true);
      assert.equal(isLeftArea('right top'), false);
    });
  });

  describe('isRightArea', () => {
    it('should return true if "right" is in the area string', () => {
      assert.equal(isRightArea('right'), true);
      assert.equal(isRightArea('bottom left right'), true);
      assert.equal(isRightArea('top left'), false);
    });
  });

  describe('isTopArea', () => {
    it('should return true if "top" is in the area string', () => {
      assert.equal(isTopArea('top'), true);
      assert.equal(isTopArea('top right bottom'), true);
      assert.equal(isTopArea('left right'), false);
    });
  });

  describe('isBottomArea', () => {
    it('should return true if "bottom" is in the area string', () => {
      assert.equal(isBottomArea('bottom'), true);
      assert.equal(isBottomArea('left right bottom top'), true);
      assert.equal(isBottomArea('left right'), false);
    });
  });

  describe('isFullArea', () => {
    it('should return true if "full" is in the area string', () => {
      assert.equal(isFullArea('full'), true);
      assert.equal(isFullArea('top full left'), true);
      assert.equal(isFullArea('left right'), false);
    });
  });

  describe('isEncloseArea', () => {
    it('should return true if "enclose" is in the area string', () => {
      assert.equal(isEncloseArea('enclose'), true);
      assert.equal(isEncloseArea('left right enclose top'), true);
      assert.equal(isEncloseArea('left right'), false);
    });
  });

  describe('isHeightArea', () => {
    it('should return true if "height" is in the area string', () => {
      assert.equal(isHeightArea('height'), true);
      assert.equal(isHeightArea('top height bottom'), true);
      assert.equal(isHeightArea('left right'), false);
    });
  });

  describe('isWidthArea', () => {
    it('should return true if "width" is in the area string', () => {
      assert.equal(isWidthArea('width'), true);
      assert.equal(isWidthArea('left right width top'), true);
      assert.equal(isWidthArea('left right'), false);
    });
  });

  describe('useSVG', () => {
    it('should return true if SVG-related areas are in the area string', () => {
      assert.equal(useSVG('svg'), true);
      assert.equal(useSVG('full curly'), false);
      assert.equal(useSVG('left right'), false);
    });
  });

  describe('isCurly', () => {
    it('should return true if both "curly" and "full" are in the area string', () => {
      assert.equal(isCurly('curly full'), true);
      assert.equal(isCurly('full curly right'), true);
      assert.equal(isCurly('curly top'), false);
    });
  });
});
