import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { SpeccerOptionsInterface } from '../../../../types/speccer';
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
