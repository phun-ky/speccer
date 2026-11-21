import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { SpeccerOptionsInterface } from '../../types/speccer';
import { removeSpeccerElement } from '../../utils/remove-speccer-element';
import { create as gridCreate, grid } from '../grid';
import { mark } from '../mark';
import { measure } from '../measure';
import { pinElement, pinElements } from '../pin';
import { spacing } from '../spacing';
import { typography } from '../typography';

// The public functions name themselves when given something that isn't an
// element, instead of failing inside with a minified name
const target = () => document.body.firstElementChild as HTMLElement;
const CALLS: [string, (value: never) => Promise<unknown>][] = [
  ['grid.element', (v) => grid(v)],
  ['grid.create', (v) => gridCreate(v)],
  ['mark.element', (v) => mark(v)],
  ['measure.element', (v) => measure(v)],
  ['spacing.element', (v) => spacing(v)],
  ['typography.element', (v) => typography(v)],
  ['pin.pinElements', (v) => pinElements(v)],
  [
    'pin.pinElement',
    (v) => pinElement(v, document.body, 'A', {} as SpeccerOptionsInterface)
  ]
];

describe('argument errors', () => {
  for (const [name, call] of CALLS) {
    it(`${name} rejects a value that isn't an element with a TypeError`, async () => {
      await assert.rejects(call('#t' as never), {
        name: 'TypeError',
        message: new RegExp(
          `^${name.replace('.', '\\.')}: expected \\w+ to be an element, got string$`
        )
      });
    });

    it(`${name} does nothing for null`, async () => {
      assert.equal(await call(null as never), undefined);
    });
  }

  it('pin.pinElement names parentElement', async () => {
    document.body.innerHTML = '<div data-speccer="pin left"></div>';

    await assert.rejects(
      pinElement(
        target(),
        {} as HTMLElement,
        'A',
        {} as SpeccerOptionsInterface
      ),
      {
        message:
          'pin.pinElement: expected parentElement to be an element, got Object'
      }
    );
  });

  it('removeSpeccerElement does nothing for null and names itself otherwise', () => {
    removeSpeccerElement(null);
    assert.throws(() => removeSpeccerElement('x' as never), {
      name: 'TypeError',
      message: 'removeSpeccerElement: expected el to be an element, got string'
    });
  });
});
