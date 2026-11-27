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

  it('gives a group no stop when its checked radio cannot take focus', () => {
    document.body.innerHTML = `
      <input id="d1" type="radio" name="d" disabled checked><input id="d2" type="radio" name="d">
      <input id="t1" type="radio" name="t" tabindex="-1" checked><input id="t2" type="radio" name="t">
      <input id="o1" type="radio" name="o" checked>
      <div id="box"><input id="o2" type="radio" name="o"><button id="ok">ok</button></div>
    `;

    assert.deepEqual(ids(document.body), ['o1', 'ok']);
    // The checked radio is outside the container, so o2 is still no stop
    assert.deepEqual(ids(document.getElementById('box')!), ['ok']);
  });

  it('stops on each run of an unchecked group in tab order', () => {
    document.body.innerHTML = `
      <input id="r1" type="radio" name="r"><input id="r2" type="radio" name="r">
      <button id="b">b</button>
      <input id="r3" type="radio" name="r">
      <input id="h1" type="radio" name="h">
      <input id="r4" type="radio" name="r">
      <input id="h2" type="radio" name="h" checked>
      <input id="p1" type="radio" name="p"><input id="p2" type="radio" name="p" tabindex="1">
    `;

    // h1 is no stop, so r3 and r4 are one run; p2 moves to the front, so
    // p1 and p2 are two runs
    assert.deepEqual(ids(document.body), ['p2', 'r1', 'b', 'r3', 'h2', 'p1']);
  });
});
