import { JSDOM } from 'jsdom';

import { strict as assert } from 'assert';

import { test, describe, beforeEach } from 'node:test';

import { create } from '../index.js';

describe('create', () => {
  beforeEach(() => {
    const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    Object.assign(globalThis, {
      window,
      document: window.document,
      Node: window.Node,
      Element: window.Element,
      HTMLElement: window.HTMLElement,
      HTMLDivElement: window.HTMLDivElement,
      Text: window.Text
    });
  });

  test('builds a spacing element with text, title, classes and tag', async () => {
    const el = create(20, 'div');

    assert.ok(el instanceof HTMLElement);
    assert.equal(el.tagName, 'DIV');

    assert.equal(el.textContent, '20px');

    assert.equal(el.getAttribute('title'), '20px');

    const classNames = [...el.classList.values()].toString();

    assert.ok(classNames.includes('ph-speccer'));
    assert.ok(classNames.includes('speccer'));
    assert.ok(classNames.includes('spacing'));
  });

  test('defaults to <span> and empty text -> "px"', async () => {
    const el = create(); // defaults
    assert.equal(el.tagName, 'SPAN');
    assert.equal(el.textContent, 'px');
    assert.equal(el.getAttribute('title'), 'px');
  });
});
