import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getContrast, toRGBA } from '../get-contrast';

const contrast = (html: string) => {
  document.body.innerHTML = html;

  const result = getContrast(document.getElementById('t') as HTMLElement);

  return result && { ...result, ratio: Math.floor(result.ratio * 100) / 100 };
};

describe('toRGBA', () => {
  it('parses computed rgb() and rgba()', () => {
    assert.deepEqual(toRGBA('rgb(1, 2, 3)'), [1, 2, 3, 1]);
    assert.deepEqual(toRGBA('rgba(1, 2, 3, 0.5)'), [1, 2, 3, 0.5]);
    assert.deepEqual(toRGBA('rgb(1 2 3 / 0.5)'), [1, 2, 3, 0.5]);
  });

  it('is null for other colors without a canvas, like in jsdom', () => {
    assert.equal(toRGBA('oklch(0.5 0.1 200)'), null);
  });
});

describe('getContrast', () => {
  it('uses white when nothing sets a background', () => {
    assert.deepEqual(contrast('<p id="t" style="color: #777">x</p>'), {
      ratio: 4.47,
      level: 'Fail'
    });
  });

  it('uses the nearest opaque background of an ancestor', () => {
    assert.deepEqual(
      contrast(
        '<div style="background: #000"><span><b id="t" style="color: #fff">x</b></span></div>'
      ),
      { ratio: 21, level: 'AAA' }
    );
  });

  it('blends translucent backgrounds and text', () => {
    // 50% black over white is rgb(127.5, 127.5, 127.5), 3.975:1
    assert.deepEqual(
      contrast(
        '<div style="background: #fff"><p id="t" style="background: rgba(0, 0, 0, 0.5); color: #fff">x</p></div>'
      ),
      { ratio: 3.97, level: 'Fail' }
    );
    // Translucent text is lighter than its color
    assert.deepEqual(
      contrast('<p id="t" style="color: rgba(0, 0, 0, 0.5)">x</p>'),
      { ratio: 3.97, level: 'Fail' }
    );
  });

  it('uses the lower thresholds for large text', () => {
    const style = 'color: #777';

    assert.equal(
      contrast(`<p id="t" style="${style}; font-size: 24px">x</p>`)?.level,
      'AA'
    );
    assert.equal(
      contrast(
        `<p id="t" style="${style}; font-size: 19px; font-weight: 700">x</p>`
      )?.level,
      'AA'
    );
    assert.equal(
      contrast(`<p id="t" style="${style}; font-size: 19px">x</p>`)?.level,
      'Fail'
    );
  });

  it('is null when the color behind the text is unknown', () => {
    assert.equal(
      contrast(
        '<div style="background-image: linear-gradient(red, blue)"><p id="t">x</p></div>'
      ),
      null
    );
    assert.equal(contrast('<p id="t" style="opacity: 0.5">x</p>'), null);
    // Opacity fades everything inside, also past an opaque background
    assert.equal(
      contrast(
        '<div style="opacity: 0.9"><div style="background: #fff"><p id="t">x</p></div></div>'
      ),
      null
    );
  });

  it('ignores a background image under an opaque background', () => {
    assert.deepEqual(
      contrast(
        '<div style="background-image: linear-gradient(red, blue)"><p id="t" style="background: #fff; color: #000">x</p></div>'
      ),
      { ratio: 21, level: 'AAA' }
    );
  });
});
