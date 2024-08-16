import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  getAreasFromString,
  isLeftArea,
  isRightArea,
  isTopArea,
  isBottomArea,
  isBracketArea,
  isEncloseArea,
  isSubtle,
  isParentArea,
  isHeightArea,
  isWidthArea,
  useSVG,
  isCurly,
  isValidTypographyElement,
  isValidSpacingElement,
  isValidMeasureElement,
  isValidPinElement,
  isValidMarkElement,
  isValidGridElement,
  useSyntaxHighlighting
} from '../area';

describe('Area string utility functions', () => {
  describe('getAreasFromString', () => {
    it('should split a space-separated string into an array', () => {
      assert.deepEqual(getAreasFromString('left right top'),['left', 'right', 'top']);
    });

    it('should handle empty strings', () => {
      assert.deepEqual(getAreasFromString(''),['']);
    });
  });

  describe('isLeftArea', () => {
    it('should return true if "left" is present', () => {
      assert.equal(isLeftArea('left right top'),true);
    });

    it('should return false if "left" is not present', () => {
      assert.equal(isLeftArea('right top'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isLeftArea(null),false);
    });
  });

  describe('isRightArea', () => {
    it('should return true if "right" is present', () => {
      assert.equal(isRightArea('left right top'),true);
    });

    it('should return false if "right" is not present', () => {
      assert.equal(isRightArea('left top'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isRightArea(null),false);
    });
  });

  describe('isTopArea', () => {
    it('should return true if "top" is present', () => {
      assert.equal(isTopArea('left right top'),true);
    });

    it('should return false if "top" is not present', () => {
      assert.equal(isTopArea('left right'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isTopArea(null),false);
    });
  });

  describe('isBottomArea', () => {
    it('should return true if "bottom" is present', () => {
      assert.equal(isBottomArea('left right bottom'),true);
    });

    it('should return false if "bottom" is not present', () => {
      assert.equal(isBottomArea('left right'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isBottomArea(null),false);
    });
  });

  describe('isBracketArea', () => {
    it('should return true if "bracket" is present', () => {
      assert.equal(isBracketArea('left right bracket'),true);
    });

    it('should return false if "bracket" is not present', () => {
      assert.equal(isBracketArea('left right'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isBracketArea(null),false);
    });
  });

  describe('isEncloseArea', () => {
    it('should return true if "enclose" is present', () => {
      assert.equal(isEncloseArea('left right enclose'),true);
    });

    it('should return false if "enclose" is not present', () => {
      assert.equal(isEncloseArea('left right'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isEncloseArea(null),false);
    });
  });

  describe('isSubtle', () => {
    it('should return true if "subtle" is present', () => {
      assert.equal(isSubtle('left right subtle'),true);
    });

    it('should return false if "subtle" is not present', () => {
      assert.equal(isSubtle('left right'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isSubtle(null),false);
    });
  });

  describe('isParentArea', () => {
    it('should return true if "parent" is present', () => {
      assert.equal(isParentArea('left right parent'),true);
    });

    it('should return false if "parent" is not present', () => {
      assert.equal(isParentArea('left right'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isParentArea(null),false);
    });
  });

  describe('isHeightArea', () => {
    it('should return true if "height" is present', () => {
      assert.equal(isHeightArea('height width'),true);
    });

    it('should return false if "height" is not present', () => {
      assert.equal(isHeightArea('width'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isHeightArea(null),false);
    });
  });

  describe('isWidthArea', () => {
    it('should return true if "width" is present', () => {
      assert.equal(isWidthArea('height width'),true);
    });

    it('should return false if "width" is not present', () => {
      assert.equal(isWidthArea('height'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isWidthArea(null),false);
    });
  });

  describe('useSVG', () => {
    it('should return true if "svg" is present', () => {
      assert.equal(useSVG('svg'),true);
    });

    it('should return false if "svg" is not present', () => {
      assert.equal(useSVG('not-svg'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(useSVG(null),false);
    });
  });

  describe('isCurly', () => {
    it('should return true if both "curly" and "bracket" are present', () => {
      assert.equal(isCurly('curly bracket'),true);
    });

    it('should return false if both "curly" and "bracket" are not present', () => {
      assert.equal(isCurly('curly'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isCurly(null),false);
    });
  });

  describe('isValidTypographyElement', () => {
    it('should return true if "typography" is present', () => {
      assert.equal(isValidTypographyElement('typography'),true);
    });

    it('should return false if "typography" is not present', () => {
      assert.equal(isValidTypographyElement('not-pography'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isValidTypographyElement(null),false);
    });
  });

  describe('isValidSpacingElement', () => {
    it('should return true if "spacing" is present', () => {
      assert.equal(isValidSpacingElement('spacing'),true);
    });

    it('should return false if "spacing" is not present', () => {
      assert.equal(isValidSpacingElement('not-sacing'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isValidSpacingElement(null),false);
    });
  });

  describe('isValidMeasureElement', () => {
    it('should return true if "measure" is present', () => {
      assert.equal(isValidMeasureElement('measure'),true);
    });

    it('should return false if "measure" is not present', () => {
      assert.equal(isValidMeasureElement('not-masure'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isValidMeasureElement(null),false);
    });
  });

  describe('isValidPinElement', () => {
    it('should return true if "pin" is present', () => {
      assert.equal(isValidPinElement('pin'),true);
    });

    it('should return false if "pin" is not present', () => {
      assert.equal(isValidPinElement('not-pn'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isValidPinElement(null),false);
    });
  });

  describe('isValidMarkElement', () => {
    it('should return true if "mark" is present', () => {
      assert.equal(isValidMarkElement('mark'),true);
    });

    it('should return false if "mark" is not present', () => {
      assert.equal(isValidMarkElement('not-mrk'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(isValidMarkElement(null),false);
    });
  });

  describe('isValidGridElement', () => {
    it('should return true if "grid" is present and display is grid', () => {
      const styles = { display: 'grid' } as CSSStyleDeclaration;

      assert.equal(isValidGridElement('grid', styles),true);
    });

    it('should return false if "grid" is not present or display is not grid', () => {
      const styles = { display: 'block' } as CSSStyleDeclaration;

      assert.equal(isValidGridElement('grid', styles),false);
    });

    it('should return false if areaString is null', () => {
      const styles = { display: 'grid' } as CSSStyleDeclaration;

      assert.equal(isValidGridElement(null, styles),false);
    });
  });

  describe('useSyntaxHighlighting', () => {
    it('should return true if "syntax" is present', () => {
      assert.equal(useSyntaxHighlighting('syntax'),true);
    });

    it('should return false if "syntax" is not present', () => {
      assert.equal(useSyntaxHighlighting('sntax'),false);
    });

    it('should return false if areaString is null', () => {
      assert.equal(useSyntaxHighlighting(null),false);
    });
  });
});
