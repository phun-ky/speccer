import assert from 'node:assert/strict';
import { afterEach, beforeEach, describe, it } from 'node:test';

import { a11y } from '..';

const texts = (selector: string) =>
  [...document.querySelectorAll(selector)].map((el) => el.textContent);
const settle = async () => {
  for (let i = 0; i < 10; i++) await new Promise(requestAnimationFrame);
};

describe('a11y', () => {
  // jsdom has no checkVisibility, so every element counts as visible unless
  // it sets its own
  beforeEach(() => {
    HTMLElement.prototype.checkVisibility = () => true;
  });

  afterEach(() => {
    delete (HTMLElement.prototype as Partial<HTMLElement>).checkVisibility;
  });

  it('annotates tab stops, headings, landmarks, autocomplete and shortcuts', async () => {
    document.body.innerHTML = `
      <div data-speccer="a11y tabstops"><a href="#">a</a><input><button>b</button><input type="checkbox" id="toggle" class="hidden"><label for="toggle">t</label><input class="hidden"></div>
      <div data-speccer="a11y headings"><h2>H</h2><h3 id="hidden">x</h3><div role="heading">R</div></div>
      <div data-speccer="a11y landmark"><nav>n</nav><main>m</main></div>
      <div data-speccer="a11y autocomplete"><input autocomplete="email"></div>
      <button data-speccer="a11y shortcut" data-speccer-a11y-shortcut="ctrl + s">b</button>
    `;
    // A hidden tab stop is shown on its label, like a styled checkbox
    for (const el of document.querySelectorAll<HTMLElement>('#hidden, .hidden'))
      el.checkVisibility = () => false;

    a11y();
    await settle();

    assert.deepEqual(
      [...document.querySelectorAll('.speccer.tabstops')].map((el) =>
        el.getAttribute('data-speccer-a11y-tabstops')
      ),
      ['1', '2', '3', '4']
    );
    assert.deepEqual(texts('.speccer.headings'), ['H2', 'DIV']);
    assert.ok(document.querySelector('.speccer.headings.h2'));
    assert.deepEqual(texts('.speccer.landmark'), [
      '<nav role="nav">',
      '<main role="main">'
    ]);
    assert.equal(document.querySelectorAll('.speccer.region').length, 2);
    assert.deepEqual(texts('.speccer.autocomplete'), ['autocomplete="email"']);
    assert.deepEqual(texts('.shortcut-holder kbd'), ['ctrl', 's']);
    assert.ok(document.querySelector('kbd.modifier'));

    // Positioned once the styles are applied
    for (const el of document.querySelectorAll<HTMLElement>(
      '.speccer.a11y:not(kbd)'
    ))
      assert.match(el.style.left, /px$/, el.className);
  });

  it('skips shortcuts without keys', () => {
    document.body.innerHTML =
      '<button data-speccer="a11y shortcut" data-speccer-a11y-shortcut="">b</button>';

    a11y();

    assert.equal(document.querySelectorAll('.speccer').length, 0);
  });

  // https://github.com/phun-ky/speccer/issues/563
  it('removes the annotations from a previous call', () => {
    document.body.innerHTML = `
      <span class="ph-speccer speccer a11y tabstops"></span>
      <span class="ph-speccer speccer pin"></span>
    `;

    a11y();

    assert.equal(document.querySelectorAll('.a11y').length, 0);
    assert.equal(document.querySelectorAll('.pin').length, 1);
  });

  it('labels each element with text with its contrast', async () => {
    document.body.innerHTML = `
      <div data-speccer="a11y contrast" style="background: #fff; color: #000">
        Own text
        <p style="color: #777">grey <b>bold</b></p>
        <p style="background-image: linear-gradient(red, blue)">image</p>
        <p class="hidden">hidden</p>
        <div>   </div>
      </div>
      <p>outside</p>
    `;
    for (const el of document.querySelectorAll<HTMLElement>('.hidden'))
      el.checkVisibility = () => false;

    await a11y();

    const badges = [...document.querySelectorAll('.speccer.contrast')];

    // The container, p, b (inherits #777) and the image p, once each
    assert.deepEqual(
      badges.map((el) => el.textContent),
      ['21:1 AAA', '4.47:1 Fail', '4.47:1 Fail', '?']
    );
    assert.deepEqual(
      badges.map((el) => [...el.classList].at(-1)),
      ['aaa', 'fail', 'fail', 'unknown']
    );
  });
});
