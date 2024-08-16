import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { styles } from '../styles';

describe('pin styles', () => {
  it('should return styles for enclose area', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'enclose';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['height'] !== undefined);
    assert.ok(result['width'] !== undefined);
  });

  it('should return styles for left area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'left';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for left area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'left';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for left bracket area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'left bracket';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['height'] !== undefined);
  });

  it('should return styles for right area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'right';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for right area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'right';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for right bracket area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'right bracket';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['height'] !== undefined);
  });

  it('should return styles for bottom area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'bottom';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for bottom area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'bottom';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for bottom bracket area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'bottom bracket';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['width'] !== undefined);
  });

  it('should return styles for bracket area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'bracket';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
  });

  it('should return styles for bracket area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const pinEl = document.createElement('div');
    const parentElement = document.createElement('div');
    const area = 'bracket';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, pinEl, parentElement, options);

    assert.ok(result['left'] !== undefined);
    assert.ok(result['top'] !== undefined);
    assert.ok(result['width'] !== undefined);
  });
});
