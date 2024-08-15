import assert from 'node:assert/strict';
import { describe, it, beforeEach, afterEach } from 'node:test';

import { set, toggle, remove, cx } from '../classnames';

describe('classnames', () => {
  // Create a dummy HTML element for testing
  let dummyElement;

  beforeEach(() => {
    // Create a div element for testing
    dummyElement = document.createElement('div');
    document.body.appendChild(dummyElement);
  });

  afterEach(() => {
    // Remove the dummy element after each test
    document.body.removeChild(dummyElement);
  });

  it('set should add CSS classes to an HTML element', () => {
    set(dummyElement, 'class1 class2');
    assert.equal(dummyElement.classList.contains('class1'), true);
    assert.equal(dummyElement.classList.contains('class2'), true);
  });

  it('toggle should toggle CSS classes on an HTML element', () => {
    toggle(dummyElement, 'class1 class2');
    assert.equal(dummyElement.classList.contains('class1'), true);
    assert.equal(dummyElement.classList.contains('class2'), true);

    toggle(dummyElement, 'class1 class2');
    assert.equal(dummyElement.classList.contains('class1'), false);
    assert.equal(dummyElement.classList.contains('class2'), false);
  });

  it('remove should remove CSS classes from an HTML element', () => {
    set(dummyElement, 'class1 class2');
    remove(dummyElement, 'class1');
    assert.equal(dummyElement.classList.contains('class1'), false);
    assert.equal(dummyElement.classList.contains('class2'), true);
  });

  it('cx should generate CSS classes from a string and an object', () => {
    const classNames = cx('class1', { class2: true, class3: false });

    assert.equal(classNames, 'class1 class2');
  });
});
