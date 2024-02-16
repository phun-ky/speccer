import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import { setAttributes, removeAttributes } from '../attributes';

describe('Attribute-related functions', () => {
  let testElement;

  beforeEach(() => {
    // Create a test element for each test case
    testElement = document.createElement('div');
    document.body.appendChild(testElement);
  });

  afterEach(() => {
    // Clean up the test element after each test case
    testElement.remove();
  });

  describe('setAttributes', () => {
    it('should set attributes on an HTML element', () => {
      setAttributes(testElement, {
        class: 'active',
        'data-value': '123'
      });

      expect(testElement.getAttribute('class')).toBe('active');
      expect(testElement.getAttribute('data-value')).toBe('123');
    });

    it('should handle empty input gracefully', () => {
      setAttributes(testElement); // No attributes provided

      expect(testElement.hasAttributes()).toBe(false);
    });
  });

  describe('removeAttributes', () => {
    beforeEach(() => {
      // Set attributes for testing removal
      testElement.setAttribute('class', 'active');
      testElement.setAttribute('data-value', '123');
    });

    it('should remove attributes from an HTML element', () => {
      removeAttributes(testElement, ['class', 'data-value']);

      expect(testElement.getAttribute('class')).toBe(null);
      expect(testElement.getAttribute('data-value')).toBe(null);
    });

    it('should handle empty input gracefully', () => {
      removeAttributes(testElement); // No attributes provided

      expect(testElement.getAttribute('class')).toBe('active');
      expect(testElement.getAttribute('data-value')).toBe('123');
    });
  });
});
