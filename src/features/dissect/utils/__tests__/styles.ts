import { describe, it, expect, vi } from 'vitest';

import { waitForFrame } from '../../../../utils/wait';
import { styles } from '../styles';

vi.mock('../../../../utils/wait', () => ({ waitForFrame: vi.fn() }));

describe('styles', () => {
  it('should return styles for enclose area', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'enclose';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(result).toHaveProperty('height');
    expect(result).toHaveProperty('width');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for left area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'left';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for left area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'left';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for left full area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'left full';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(result).toHaveProperty('height');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for right area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'right';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for right area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'right';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for right full area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'right full';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(result).toHaveProperty('height');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for bottom area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'bottom';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for bottom area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'bottom';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for bottom full area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'bottom full';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(result).toHaveProperty('width');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for full area with isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'full';
    const options = { isCurly: true };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(waitForFrame).toHaveBeenCalled();
  });

  it('should return styles for full area without isCurly', async () => {
    const targetEl = document.createElement('div');
    const dissectionEl = document.createElement('div');
    const area = 'full';
    const options = { isCurly: false };
    const result = await styles(area, targetEl, dissectionEl, options);

    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
    expect(result).toHaveProperty('width');
    expect(waitForFrame).toHaveBeenCalled();
  });
});
