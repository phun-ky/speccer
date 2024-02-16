import { describe, it, expect, beforeEach, afterEach } from 'vitest';

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
    expect(dummyElement.classList.contains('class1')).toBe(true);
    expect(dummyElement.classList.contains('class2')).toBe(true);
  });

  it('toggle should toggle CSS classes on an HTML element', () => {
    toggle(dummyElement, 'class1 class2');
    expect(dummyElement.classList.contains('class1')).toBe(true);
    expect(dummyElement.classList.contains('class2')).toBe(true);

    toggle(dummyElement, 'class1 class2');
    expect(dummyElement.classList.contains('class1')).toBe(false);
    expect(dummyElement.classList.contains('class2')).toBe(false);
  });

  it('remove should remove CSS classes from an HTML element', () => {
    set(dummyElement, 'class1 class2');
    remove(dummyElement, 'class1');
    expect(dummyElement.classList.contains('class1')).toBe(false);
    expect(dummyElement.classList.contains('class2')).toBe(true);
  });

  it('cx should generate CSS classes from a string and an object', () => {
    const classNames = cx('class1', { class2: true, class3: false });

    expect(classNames).toBe('class1 class2');
  });
});
