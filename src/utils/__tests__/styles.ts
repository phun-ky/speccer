import { describe, it, expect, beforeAll, afterAll } from 'vitest';

import { add, get } from '../styles';

describe('add', () => {
  let element;

  beforeAll(() => {
    // Create a div element for testing
    element = document.createElement('div');
    element.id = 'my-element';
    document.body.appendChild(element);
  });

  afterAll(() => {
    // Clean up: remove the element after testing
    document.body.removeChild(element);
  });

  it('should apply styles as an object', async () => {
    await add(element, { color: 'rgb(255, 0, 0)', fontSize: '16px' });

    const computedStyles = getComputedStyle(element);

    expect(computedStyles.color).toBe('rgb(255, 0, 0)');
    expect(computedStyles.fontSize).toBe('16px');
  });

  it('should apply styles as an array of objects', async () => {
    const styles = [
      { key: 'color', value: 'rgb(0, 0, 255)' },
      { key: 'backgroundColor', value: 'rgb(255, 255, 0)' }
    ];

    await add(element, styles);

    const computedStyles = getComputedStyle(element);

    expect(computedStyles.color).toBe('rgb(0, 0, 255)');
    expect(computedStyles.backgroundColor).toBe('rgb(255, 255, 0)');
  });
});

describe('get', () => {
  let element;

  beforeAll(() => {
    // Create a div element for testing
    element = document.createElement('div');
    element.id = 'my-element';
    element.style.color = 'rgb(0, 128, 0)';
    element.style.fontSize = '18px';
    document.body.appendChild(element);
  });

  afterAll(() => {
    // Clean up: remove the element after testing
    document.body.removeChild(element);
  });

  it('should get computed styles', async () => {
    const computedStyles = await get(element);

    expect(computedStyles.color).toBe('rgb(0, 128, 0)');
    expect(computedStyles.fontSize).toBe('18px');
  });
});
