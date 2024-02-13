import { describe, it, expect } from '@jest/globals';

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
      expect(referenceElement.nextSibling).toBe(newElement);

      // Clean up by removing the elements
      document.body.removeChild(referenceElement);
      document.body.removeChild(newElement);
    });

    it('should return null if the reference element is null', () => {
      const newElement = document.createElement('span');
      const result = after(null, newElement);

      expect(result).toBeNull();
      expect(document.body.contains(newElement)).toBeFalsy();
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
      expect(document.body.contains(element1)).toBeFalsy();
      expect(document.body.contains(element2)).toBeFalsy();
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
      expect(document.body.contains(element1)).toBeFalsy();
      expect(document.body.contains(element2)).toBeTruthy();

      // Clean up by removing the remaining element
      document.body.removeChild(element2);
    });
  });
});
