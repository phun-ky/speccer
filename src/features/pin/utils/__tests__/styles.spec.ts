import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';

import { SpeccerOptionsInterface } from '../../../../types/speccer';
import { SPECCER_DEFAULT_PIN_SPACE } from '../../../../utils/constants';
import { styles } from '../styles';

describe('pin styles', () => {
  it('should return styles for enclose area', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      pin: { enclose: true, useCurlyBrackets: true }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['height'] !== undefined);
    assert.ok(result['width'] !== undefined);
  });

  it('should return styles for left area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      position: 'left',
      pin: { useCurlyBrackets: true }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for left area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      position: 'left',
      pin: { useCurlyBrackets: false }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for left bracket area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      position: 'left',
      pin: { bracket: true, useCurlyBrackets: false }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['height'] !== undefined);
  });

  it('should return styles for right area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      position: 'right',
      pin: { useCurlyBrackets: true }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for right area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      position: 'right',
      pin: { useCurlyBrackets: false }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for right bracket area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      position: 'right',
      pin: { bracket: true, useCurlyBrackets: false }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['height'] !== undefined);
  });

  it('should return styles for bottom area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      position: 'bottom',
      pin: { useCurlyBrackets: true }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for bottom area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      position: 'bottom',
      pin: { useCurlyBrackets: false }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for bottom bracket area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      position: 'bottom',
      pin: { bracket: true, useCurlyBrackets: false }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['width'] !== undefined);
  });

  it('should return styles for bracket area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      pin: { bracket: true, useCurlyBrackets: true }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for bracket area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const options = {
      pin: { bracket: true, useCurlyBrackets: false }
    } as SpeccerOptionsInterface;
    const result = await styles(targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['width'] !== undefined);
  });
});

describe('pin styles for text pins on a scrolled page', () => {
  const scroll = { x: 300, y: 600 };
  // The pin-area as getBoundingClientRect() reports it: relative to the viewport
  const area = { top: 300, left: 180, width: 840, height: 444 };
  const space = SPECCER_DEFAULT_PIN_SPACE;

  before(() => {
    Object.defineProperty(window, 'scrollX', {
      value: scroll.x,
      configurable: true
    });
    Object.defineProperty(window, 'scrollY', {
      value: scroll.y,
      configurable: true
    });
  });

  after(() => {
    Object.defineProperty(window, 'scrollX', { value: 0, configurable: true });
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
  });

  const getStyles = (position: string) => {
    const parentElement = document.createElement('div');

    parentElement.getBoundingClientRect = () =>
      ({
        ...area,
        right: area.left + area.width,
        bottom: area.top + area.height
      }) as DOMRect;

    return styles(
      document.createElement('div'),
      document.createElement('div'),
      parentElement,
      { position, pin: { text: true } } as SpeccerOptionsInterface
    );
  };

  it('should place a bottom pin below the pin-area in document coordinates', async () => {
    const { top } = await getStyles('bottom');

    assert.equal(top, `${area.top + area.height + scroll.y + space}px`);
  });

  it('should place a top pin above the pin-area in document coordinates', async () => {
    const { top } = await getStyles('top');

    assert.equal(top, `${area.top + scroll.y - space * 1.5}px`);
  });

  it('should place a right pin right of the pin-area in document coordinates', async () => {
    const { left } = await getStyles('right');

    assert.equal(left, `${area.left + area.width + scroll.x + space}px`);
  });

  it('should place a left pin left of the pin-area in document coordinates', async () => {
    const { left } = await getStyles('left');

    assert.equal(left, `${area.left + scroll.x - space * 1.5 - 170}px`);
  });
});
