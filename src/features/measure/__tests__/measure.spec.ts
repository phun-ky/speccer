import { JSDOM } from 'jsdom';

import { strict as assert } from 'assert';

import { test, describe, beforeEach } from 'node:test';

import { create } from '../index.js';
import { SpeccerOptionsInterface } from '../../../types/speccer.js';

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

  test('builds a slim measure element for height', async () => {
    const el = create(
      20,
      {
        measure: { slim: true, height: true },
        position: 'bottom',
        slug: 'measure'
      } as SpeccerOptionsInterface,
      '850b1cfa-c2f5-557c-9144-19f17234a1ac',
      'div'
    );

    assert.ok(el instanceof HTMLElement);
    assert.equal(el.tagName, 'DIV');

    assert.equal(el.getAttribute('data-measure'), '20px');

    const classNames = [...el.classList.values()].toString();

    assert.ok(classNames.includes('ph-speccer'));
    assert.ok(classNames.includes('speccer'));
    assert.ok(classNames.includes('measure'));
    assert.ok(classNames.includes('height'));
    assert.ok(classNames.includes('slim'));
  });
});
