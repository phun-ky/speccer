import assert from 'node:assert/strict';
import { beforeEach, describe, it } from 'node:test';

import { SpeccerOptionsInterface } from '../../../types/speccer';
import { pinElement } from '../index';

// pinElement settles only once its SVG shapes are drawn, so speccer() can
// wait for everything
const target = () => document.getElementById('target') as HTMLElement;
const draw = () =>
  pinElement(target(), document.body, 'A', {} as SpeccerOptionsInterface);
const shapes = (selector: string) => [
  ...document.querySelectorAll(`#ph-speccer-svg > ${selector}`)
];

describe('pinElement with SVG shapes', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="target">target</div>
      <svg id="ph-speccer-svg"><path id="ph-speccer-path" class="original"></path></svg>
    `;
  });

  it('settles once the line and the circle are drawn', async () => {
    target().setAttribute('data-speccer', 'pin parent left');

    await draw();

    const lines = shapes('path:not(.original)');
    const circles = shapes('circle');

    assert.equal(lines.length, 1);
    assert.ok(lines[0].getAttribute('d'));
    assert.equal(circles.length, 1);
    assert.ok(circles[0].getAttribute('cx'));
  });

  it('settles once the curly bracket is drawn', async () => {
    target().setAttribute('data-speccer', 'pin bracket curly left');

    await draw();

    const paths = shapes('path:not(.original)');

    assert.equal(paths.length, 2);
    for (const path of paths) assert.ok(path.getAttribute('d'));
  });
});
