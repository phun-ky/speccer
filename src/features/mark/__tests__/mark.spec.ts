import assert from 'node:assert/strict';
import { beforeEach, describe, it } from 'node:test';

import { mark } from '..';
import { SpeccerOptionsInterface } from '../../../types/speccer';

const marks = () => document.querySelectorAll('.ph-speccer.speccer.mark');
const target = () => document.getElementById('target') as HTMLElement;

describe('mark', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="target">target</div>';
  });

  it('draws nothing without data-speccer or options', async () => {
    await mark(target());

    assert.equal(marks().length, 0);
  });

  it('reads the type from data-speccer', async () => {
    target().setAttribute('data-speccer', 'mark');

    await mark(target());

    assert.equal(marks().length, 1);
  });

  // https://github.com/phun-ky/speccer/issues/568
  it('takes the type from the options', async () => {
    await mark(target(), { type: 'mark' } as SpeccerOptionsInterface);

    assert.equal(marks().length, 1);
  });
});
