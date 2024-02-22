import assert from 'node:assert/strict';
import { describe, it, beforeEach, afterEach } from 'node:test';

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

      assert.equal(testElement.getAttribute('class'), 'active');
      assert.equal(testElement.getAttribute('data-value'), '123');
    });

    it('should handle empty input gracefully', () => {
      setAttributes(testElement); // No attributes provided

      assert.equal(testElement.hasAttributes(), false);
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

      assert.equal(testElement.getAttribute('class'), null);
      assert.equal(testElement.getAttribute('data-value'), null);
    });

    it('should handle empty input gracefully', () => {
      removeAttributes(testElement); // No attributes provided

      assert.equal(testElement.getAttribute('class'), 'active');
      assert.equal(testElement.getAttribute('data-value'), '123');
    });
  });
});
