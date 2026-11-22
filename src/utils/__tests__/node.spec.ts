import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  after,
  assertElement,
  isElementHidden,
  removeAll,
  removeAnnotations,
  startDraw
} from '../node';

describe('node', () => {
  describe('assertElement', () => {
    it('passes elements, null and undefined', () => {
      assertElement(document.createElement('div'), 'f');
      assertElement(
        document.createElementNS('http://www.w3.org/2000/svg', 'g'),
        'f'
      );
      assertElement(null, 'f');
      assertElement(undefined, 'f');
    });

    it('throws a TypeError that names the function, the argument and the type', () => {
      assert.throws(() => assertElement('#t', 'grid.element'), {
        name: 'TypeError',
        message:
          'grid.element: expected targetElement to be an element, got string'
      });
      assert.throws(() => assertElement({}, 'f', 'el'), {
        message: 'f: expected el to be an element, got Object'
      });
      assert.throws(() => assertElement([], 'f'), { message: /got Array$/ });
      assert.throws(() => assertElement(document, 'f'), {
        message: /got (HTML)?Document$/
      });
      assert.throws(() => assertElement(document.createTextNode('x'), 'f'), {
        message: /got Text$/
      });
    });
  });

  describe('after', () => {
    it('should insert an element after the reference element', () => {
      // Create reference and new elements
      const referenceElement = document.createElement('div');
      const newElement = document.createElement('span');

      // Append the reference element to the document
      document.body.appendChild(referenceElement);

      // Call the after function
      after(referenceElement, newElement);

      // Check if the new element is inserted after the reference element
      assert.deepEqual(referenceElement.nextSibling, newElement);

      // Clean up by removing the elements
      document.body.removeChild(referenceElement);
      document.body.removeChild(newElement);
    });

    it('should return undefined if the reference element is null', () => {
      const newElement = document.createElement('span');
      const result = after(null, newElement);

      assert.equal(result, undefined);
      assert.equal(document.body.contains(newElement), false);
    });
  });

  describe('removeAll', () => {
    it('should remove all elements matching a selector', () => {
      // Create and append elements with the 'my-class' class
      const element1 = document.createElement('div');

      element1.className = 'my-class';
      document.body.appendChild(element1);

      const element2 = document.createElement('div');

      element2.className = 'my-class';
      document.body.appendChild(element2);

      // Call the removeAll function to remove elements with 'my-class' class
      removeAll('.my-class');

      // Check if the elements are removed
      assert.equal(document.body.contains(element1), false);
      assert.equal(document.body.contains(element2), false);
    });

    it('should not remove elements with a different class', () => {
      // Create and append elements with different classes
      const element1 = document.createElement('div');

      element1.className = 'my-class';
      document.body.appendChild(element1);

      const element2 = document.createElement('div');

      element2.className = 'other-class';
      document.body.appendChild(element2);

      // Call the removeAll function to remove elements with 'my-class' class
      removeAll('.my-class');

      // Check if only elements with 'my-class' are removed
      assert.equal(document.body.contains(element1), false);
      assert.equal(document.body.contains(element2), true);

      // Clean up by removing the remaining element
      document.body.removeChild(element2);
    });
  });

  describe('isElementHidden', () => {
    // Helper: create a fake HTMLElement with a fake window + getComputedStyle
    const createElementWithComputedStyle = (
      style: Partial<{
        display: string;
        visibility: string;
        opacity: string;
      }> | null
    ): HTMLElement => {
      const fakeWindow = {
        getComputedStyle: () => style as unknown as CSSStyleDeclaration
      };
      const fakeDocument = {
        defaultView: fakeWindow
      };
      const element = {
        ownerDocument: fakeDocument
      } as unknown as HTMLElement;

      return element;
    };

    describe('isElementHidden', () => {
      it('uses checkVisibility when available and returns the inverse of its value (visible -> false)', () => {
        let receivedOptions: Record<string, boolean> | undefined;

        const element = {
          ownerDocument: {
            defaultView: {
              getComputedStyle: () => ({
                display: 'none',
                visibility: 'hidden',
                opacity: '0'
              })
            }
          },
          checkVisibility: (options?: Record<string, boolean>) => {
            receivedOptions = options;

            return true; // element is visible according to native API
          }
        } as unknown as HTMLElement;
        const result = isElementHidden(element);

        assert.equal(
          result,
          false,
          'should return false when checkVisibility returns true'
        );
        assert.deepEqual(receivedOptions, {
          opacityProperty: true,
          checkVisibilityCSS: true
        });
      });

      it('uses checkVisibility when available and returns the inverse of its value (hidden -> true)', () => {
        const element = {
          ownerDocument: {
            defaultView: {
              getComputedStyle: () => ({
                display: 'block',
                visibility: 'visible',
                opacity: '1'
              })
            }
          },
          checkVisibility: () => false // element is hidden according to native API
        } as unknown as HTMLElement;
        const result = isElementHidden(element);

        assert.equal(
          result,
          true,
          'should return true when checkVisibility returns false'
        );
      });

      it('falls back to computed styles when checkVisibility is not available', () => {
        let getComputedStyleCalled = false;

        const element = {
          ownerDocument: {
            defaultView: {
              getComputedStyle: () => {
                getComputedStyleCalled = true;

                return {
                  display: 'none',
                  visibility: 'visible',
                  opacity: '1'
                } as unknown as CSSStyleDeclaration;
              }
            }
          }
          // no checkVisibility
        } as unknown as HTMLElement;
        const result = isElementHidden(element);

        assert.equal(
          result,
          true,
          'should use fallback and detect display:none as hidden'
        );
        assert.equal(
          getComputedStyleCalled,
          true,
          'getComputedStyle should be called in fallback'
        );
      });

      it('returns true when display is "none"', () => {
        const element = createElementWithComputedStyle({
          display: 'none',
          visibility: 'visible',
          opacity: '1'
        });
        const result = isElementHidden(element);

        assert.equal(result, true);
      });

      it('returns true when visibility is "hidden"', () => {
        const element = createElementWithComputedStyle({
          display: 'block',
          visibility: 'hidden',
          opacity: '1'
        });
        const result = isElementHidden(element);

        assert.equal(result, true);
      });

      it('returns true when visibility is "collapse"', () => {
        const element = createElementWithComputedStyle({
          display: 'block',
          visibility: 'collapse',
          opacity: '1'
        });
        const result = isElementHidden(element);

        assert.equal(result, true);
      });

      it('returns true when opacity is "0"', () => {
        const element = createElementWithComputedStyle({
          display: 'block',
          visibility: 'visible',
          opacity: '0'
        });
        const result = isElementHidden(element);

        assert.equal(result, true);
      });

      it('returns false when element appears visible according to computed styles', () => {
        const element = createElementWithComputedStyle({
          display: 'block',
          visibility: 'visible',
          opacity: '1'
        });
        const result = isElementHidden(element);

        assert.equal(result, false);
      });

      it('returns false when computed style cannot be obtained', () => {
        // Simulate ownerDocument / defaultView present but getComputedStyle returns null
        const element = {
          ownerDocument: {
            defaultView: {
              getComputedStyle: () => null
            }
          }
        } as unknown as HTMLElement;
        const result = isElementHidden(element);

        assert.equal(
          result,
          false,
          'should default to not hidden when style is unavailable'
        );
      });

      it('returns false when ownerDocument or defaultView is missing', () => {
        const elementWithoutDoc = {} as unknown as HTMLElement;
        const result = isElementHidden(elementWithoutDoc);

        assert.equal(
          result,
          false,
          'should default to not hidden when no ownerDocument/defaultView'
        );
      });
    });
  });

  describe('removeAnnotations and startDraw', () => {
    it('removes the annotations and marks draws started before as stale', () => {
      document.body.innerHTML =
        '<div class="ph-speccer speccer"></div><div class="ph-speccer"></div>';

      const isStale = startDraw();

      assert.equal(isStale(), false);

      removeAnnotations();

      assert.equal(isStale(), true);
      assert.equal(document.querySelectorAll('.ph-speccer.speccer').length, 0);
      assert.equal(document.querySelectorAll('.ph-speccer').length, 1);

      // A draw started after the removal is not stale
      assert.equal(startDraw()(), false);
    });
  });
});
