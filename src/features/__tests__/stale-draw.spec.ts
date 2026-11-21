import assert from 'node:assert/strict';
import { beforeEach, describe, it } from 'node:test';

import { SpeccerOptionsInterface } from '../../types/speccer';
import { removeAnnotations } from '../../utils/node';
import { grid } from '../grid';
import { mark } from '../mark';
import { measure } from '../measure';
import { pinElement, pinElements } from '../pin';
import { spacing } from '../spacing';
import { typography } from '../typography';

// https://github.com/phun-ky/speccer/issues/557
//
// A draw that is still in progress when the annotations are removed must not
// add its annotations after the removal.
const annotations = () => document.querySelectorAll('.ph-speccer.speccer');
const target = () => document.getElementById('target') as HTMLElement;
const FEATURES: [string, string, () => Promise<unknown>][] = [
  ['pinElements', 'pin', () => pinElements(document.body)],
  [
    'pinElement',
    'pin',
    () =>
      pinElement(target(), document.body, 'A', {} as SpeccerOptionsInterface)
  ],
  ['mark', 'mark', () => mark(target())],
  ['grid', 'grid', () => grid(target())],
  ['spacing', 'spacing', () => spacing(target())],
  ['measure', 'measure width bottom', () => measure(target())],
  ['typography', 'typography', () => typography(target())]
];

describe('a draw in progress when the annotations are removed', () => {
  for (const [name, attribute, draw] of FEATURES) {
    describe(name, () => {
      beforeEach(() => {
        document.body.innerHTML = `<div id="target" data-speccer="${attribute}" style="display: grid; grid-template-columns: 1fr 1fr; padding: 8px"><span>a</span><span>b</span></div>`;
      });

      it('draws when nothing is removed', async () => {
        await draw();

        assert.ok(annotations().length > 0);
      });

      it('adds nothing after the removal', async () => {
        const drawing = draw();

        removeAnnotations();
        await drawing;

        assert.equal(annotations().length, 0);
      });
    });
  }

  it('pinElement draws no line for a pin removed while it was styled', async () => {
    document.body.innerHTML = `
      <div id="target" data-speccer="pin parent left">target</div>
      <svg id="ph-speccer-svg"><path id="ph-speccer-path" class="original"></path></svg>
    `;

    const drawing = pinElement(
      target(),
      document.body,
      'A',
      {} as SpeccerOptionsInterface
    );

    while (!document.querySelector('.ph-speccer.speccer.pin'))
      await new Promise(requestAnimationFrame);

    removeAnnotations();
    await drawing;

    assert.equal(annotations().length, 0);
    assert.equal(document.querySelectorAll('#ph-speccer-svg > *').length, 1);
  });
});
