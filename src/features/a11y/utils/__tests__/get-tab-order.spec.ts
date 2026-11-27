import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getTabOrder } from '../get-tab-order';

const ids = (container: Element) => getTabOrder(container).map((el) => el.id);

describe('getTabOrder', () => {
  it('puts positive tabindex first, ascending, then document order', () => {
    document.body.innerHTML = `
      <a id="a" href="#">a</a>
      <button id="b" tabindex="2">b</button>
      <input id="c">
      <div id="d" tabindex="1">d</div>
      <div id="e" tabindex="2">e</div>
      <div id="f" tabindex="0">f</div>
    `;

    assert.deepEqual(ids(document.body), ['d', 'b', 'e', 'a', 'c', 'f']);
  });

  it('leaves out elements that cannot take focus', () => {
    document.body.innerHTML = `
      <a id="neg-link" href="#" tabindex="-1">x</a>
      <iframe id="neg-frame" tabindex="-1"></iframe>
      <div id="neg-edit" contenteditable="true" tabindex="-1">x</div>
      <button id="disabled" disabled>x</button>
      <fieldset disabled><input id="in-fieldset"></fieldset>
      <div inert><button id="inert">x</button></div>
      <button id="ok">ok</button>
    `;

    assert.deepEqual(ids(document.body), ['ok']);
  });

  it('stops once per radio group, on the checked radio or the first', () => {
    document.body.innerHTML = `
      <input id="a1" type="radio" name="a"><input id="a2" type="radio" name="a" checked>
      <input id="b1" type="radio" name="b" disabled><input id="b2" type="radio" name="b"><input id="b3" type="radio" name="b">
      <input id="n1" type="radio"><input id="n2" type="radio">
      <form><input id="f1" type="radio" name="a"></form>
    `;

    // No name means no group, and another form is another group
    assert.deepEqual(ids(document.body), ['a2', 'b2', 'n1', 'n2', 'f1']);
  });
});
