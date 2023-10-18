import { describe, it, expect } from '@jest/globals';
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
    await add(element, { color: 'red', fontSize: '16px' });

    const computedStyles = getComputedStyle(element);

    expect(computedStyles.color).toBe('red');
    expect(computedStyles.fontSize).toBe('16px');
  });

  it('should apply styles as an array of objects', async () => {
    const styles = [
      { key: 'color', value: 'blue' },
      { key: 'backgroundColor', value: 'yellow' }
    ];

    await add(element, styles);

    const computedStyles = getComputedStyle(element);

    expect(computedStyles.color).toBe('blue');
    expect(computedStyles.backgroundColor).toBe('yellow');
  });
});

describe('get', () => {
  let element;

  beforeAll(() => {
    // Create a div element for testing
    element = document.createElement('div');
    element.id = 'my-element';
    element.style.color = 'green';
    element.style.fontSize = '18px';
    document.body.appendChild(element);
  });

  afterAll(() => {
    // Clean up: remove the element after testing
    document.body.removeChild(element);
  });

  it('should get computed styles', async () => {
    const computedStyles = await get(element);

    expect(computedStyles.color).toBe('green');
    expect(computedStyles.fontSize).toBe('18px');
  });
});
