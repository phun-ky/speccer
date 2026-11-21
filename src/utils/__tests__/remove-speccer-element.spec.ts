import assert from 'node:assert/strict';
import { afterEach, describe, it } from 'node:test';

import { removeSpeccerElement } from '../remove-speccer-element';

// The attributes speccer links an element and its annotations with
const PAGE = `
  <div id="target" data-speccer-element-id="speccer-pin-target">target</div>
  <div id="other" data-speccer-element-id="speccer-pin-other">other</div>
  <div id="no-id" data-speccer-element-id="speccer-spacing-no-id">no id</div>
  <div id="plain">not annotated</div>
  <span id="speccer-pin-target" data-speccer-id="speccer-pin-target">A</span>
  <span data-speccer-id="speccer-pin-target">padding</span>
  <span data-speccer-id="speccer-pin-other">B</span>
  <span data-speccer-id="speccer-spacing-no-id">margin</span>
  <svg id="ph-speccer-svg">
    <path id="ph-speccer-path" class="original"></path>
    <path id="line" data-start-el="target"></path>
    <circle id="circle" data-el="target"></circle>
    <path id="other-line" data-start-el="other"></path>
  </svg>
`;
const ids = () =>
  [...document.querySelectorAll('[data-speccer-id], svg > *')].map(
    (node) => node.id || node.textContent
  );

describe('removeSpeccerElement', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('removes the annotations, lines and circles of the element only', () => {
    document.body.innerHTML = PAGE;

    removeSpeccerElement(document.getElementById('target') as HTMLElement);

    assert.deepEqual(ids(), ['B', 'margin', 'ph-speccer-path', 'other-line']);
  });

  it('removes the annotations of an element whose id is not in the SVG', () => {
    document.body.innerHTML = PAGE;

    const el = document.getElementById('no-id') as HTMLElement;

    el.removeAttribute('id');
    removeSpeccerElement(el);

    assert.equal(ids().includes('margin'), false);
    assert.equal(ids().length, 7);
  });

  it('does nothing for an element that is not annotated', () => {
    document.body.innerHTML = PAGE;

    removeSpeccerElement(document.getElementById('plain') as HTMLElement);

    assert.equal(ids().length, 8);
  });

  it('handles ids with quotes and brackets', () => {
    const id = 'speccer-pin-a"]b';

    document.body.innerHTML = '<div id="t"></div><span></span>';
    document.getElementById('t')?.setAttribute('data-speccer-element-id', id);
    document.querySelector('span')?.setAttribute('data-speccer-id', id);

    removeSpeccerElement(document.getElementById('t') as HTMLElement);

    assert.equal(document.querySelector('span'), null);
  });
});
