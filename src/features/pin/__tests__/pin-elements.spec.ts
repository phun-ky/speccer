import assert from 'node:assert/strict';
import { beforeEach, describe, it, mock } from 'node:test';

import { SpeccerOptionsInterface } from '../../../types/speccer';
import { pinElement, pinElements } from '../index';

const getPins = () => [
  ...document.querySelectorAll<HTMLElement>('.ph-speccer.speccer.pin')
];

describe('pinElements', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-speccer="pin-area" id="section">
        <div data-speccer="pin" id="first"></div>
        <div data-speccer="pin" id="hidden" style="display: none"></div>
        <div data-speccer="pin" id="last"></div>
      </div>
    `;
  });

  it('should have drawn every pin when the returned promise resolves', async () => {
    await pinElements(document.getElementById('section') as HTMLElement);

    assert.equal(getPins().length, 2);
  });

  it('should not use up a literal for hidden elements', async () => {
    await pinElements(document.getElementById('section') as HTMLElement);

    const literals = getPins()
      .map((pin) => pin.textContent)
      .sort();

    assert.deepEqual(literals, ['A', 'B']);
  });
});

describe('pinElement', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-speccer="pin-area" id="section">
        <div data-speccer="pin bracket" id="target"></div>
      </div>
    `;
  });

  it('should use the options resolved from the element', async () => {
    const target = document.getElementById('target') as HTMLElement;
    const section = document.getElementById('section') as HTMLElement;
    const id = await pinElement(
      target,
      section,
      'A',
      {} as SpeccerOptionsInterface
    );

    assert.equal(id, 'speccer-pinBracket-target');

    const pin = document.getElementById(id as string) as HTMLElement;

    assert.ok(pin.classList.contains('bracket'));
  });
});

describe('pinElements without the SVG element', () => {
  beforeEach(() => {
    // Text pins and curly brackets are drawn with SVG, but there is no
    // #ph-speccer-svg element on this page
    document.body.innerHTML = `
      <div data-speccer="pin-area" id="section">
        <div data-speccer="pin right text" data-speccer-title="One" id="one"></div>
        <div data-speccer="pin right text" data-speccer-title="Two" id="two"></div>
        <div data-speccer="pin bracket curly top" id="curly"></div>
      </div>
    `;
  });

  it('still draws the pins, and warns once instead of throwing', async () => {
    const warn = mock.method(console, 'warn', () => {});

    await pinElements(document.getElementById('section') as HTMLElement);

    assert.equal(getPins().length, 3);
    assert.equal(warn.mock.calls.length, 1);
    assert.match(
      String(warn.mock.calls[0].arguments[0]),
      /#ph-speccer-svg/
    );

    warn.mock.restore();
  });
});
