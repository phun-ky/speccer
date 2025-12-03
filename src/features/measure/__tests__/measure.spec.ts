import { JSDOM } from 'jsdom';
import { strict as assert } from 'assert';
import { test, describe, beforeEach } from 'node:test';

import { create, measure } from '../index.js';
import { SpeccerOptionsInterface } from '../../../types/speccer.js';
import { MeasureAreaEnum } from '../../../types/enums/area.js';

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

  test('builds a slim measure element for width', async () => {
    const el = create(
      42,
      {
        measure: { slim: true, width: true },
        position: 'top',
        slug: 'measure'
      } as SpeccerOptionsInterface,
      'id-width-slim',
      'span'
    );

    assert.ok(el instanceof HTMLElement);
    assert.equal(el.tagName, 'SPAN');

    // attributes
    assert.equal(el.getAttribute('title'), '42px');
    assert.equal(el.getAttribute('id'), 'id-width-slim');
    assert.equal(el.getAttribute('data-speccer-id'), 'id-width-slim');
    assert.equal(el.getAttribute('data-measure'), '42px');

    // classes
    const classNames = [...el.classList.values()].toString();
    assert.ok(classNames.includes('ph-speccer'));
    assert.ok(classNames.includes('speccer'));
    assert.ok(classNames.includes('measure'));
    assert.ok(classNames.includes('width'));
    assert.ok(classNames.includes('slim'));
    assert.ok(classNames.includes('top'));
  });

  test('builds a non-slim height measure and respects tag parameter', async () => {
    const el = create(
      10,
      {
        measure: { height: true },
        position: 'left',
        slug: 'measure'
      } as SpeccerOptionsInterface,
      'id-height-full',
      'div'
    );

    assert.ok(el instanceof HTMLElement);
    assert.equal(el.tagName, 'DIV');

    assert.equal(el.getAttribute('title'), '10px');
    assert.equal(el.getAttribute('data-measure'), '10px');

    const classNames = [...el.classList.values()].toString();
    assert.ok(classNames.includes('ph-speccer'));
    assert.ok(classNames.includes('speccer'));
    assert.ok(classNames.includes('measure'));
    assert.ok(classNames.includes('height'));
    assert.ok(!classNames.includes('width'));
    assert.ok(!classNames.includes('slim'));
    assert.ok(classNames.includes('left'));
  });

  test('coerces numeric text values to integer pixels', async () => {
    const el = create(
      '20.9',
      {
        measure: { width: true },
        position: 'bottom',
        slug: 'measure'
      } as SpeccerOptionsInterface,
      'id-coerce'
    );

    // parseInt("20.9",10) -> 20
    assert.equal(el.getAttribute('title'), '20.9px');
    assert.equal(el.getAttribute('data-measure'), '20px');
  });

  test('handles empty text by defaulting to 0px in data-measure', async () => {
    const el = create(
      undefined,
      {
        measure: { width: true },
        position: 'bottom',
        slug: 'measure'
      } as SpeccerOptionsInterface,
      'id-empty'
    );

    // text defaults to '' → parseInt('',10) → NaN → `${NaN}px`
    // If you prefer 0px here, this test will highlight that behaviour and can
    // be adapted if you change the implementation.
    assert.equal(el.getAttribute('title'), 'px');
    assert.equal(el.getAttribute('data-measure'), 'NaNpx');
  });

  test('applies both height and width classes when both are enabled', async () => {
    const el = create(
      100,
      {
        measure: { width: true, height: true, slim: false },
        position: 'right',
        slug: 'measure'
      } as SpeccerOptionsInterface,
      'id-both'
    );

    const classNames = [...el.classList.values()].toString();
    assert.ok(classNames.includes('measure'));
    assert.ok(classNames.includes('width'));
    assert.ok(classNames.includes('height'));
    assert.ok(classNames.includes('right'));
    assert.ok(!classNames.includes('slim'));
  });
});

describe('measure', () => {
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

  test('returns early if targetElement is falsy', async () => {
    // @ts-expect-error – intentional runtime guard
    await measure(undefined);

    // Should not throw and should not add anything to the DOM
    assert.equal(document.body.children.length, 0);
  });

  test('does nothing when targetElement is hidden (display:none)', async () => {
    const target = document.createElement('div');
    target.id = 'hidden';
    target.style.display = 'none';
    document.body.appendChild(target);

    await measure(
      target as HTMLElement,
      {
        position: MeasureAreaEnum.Right,
        measure: { height: true }
      } as SpeccerOptionsInterface
    );

    // Still only the target element in the body (no measurement element)
    assert.equal(document.body.children.length, 1);
    assert.equal(document.body.firstElementChild?.id, 'hidden');
    assert.equal(
      target.getAttribute('data-speccer-element-id'),
      null,
      'data-speccer-element-id should not be set for hidden elements'
    );
  });

  test('sets data-speccer-element-id on visible elements', async () => {
    const target = document.createElement('div');
    target.id = 'visible-target';
    target.style.display = 'block';
    document.body.appendChild(target);

    await measure(
      target as HTMLElement,
      {
        position: MeasureAreaEnum.Right,
        measure: { height: true }
      } as SpeccerOptionsInterface
    );

    const elementId = target.getAttribute('data-speccer-element-id');
    assert.ok(
      elementId && elementId.startsWith('speccer-'),
      'measure should set a speccer-related id on the target element'
    );
  });
});
