import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { after, removeAll } from '../node';

describe('node', () => {
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
});
