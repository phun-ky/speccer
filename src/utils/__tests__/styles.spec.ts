import assert from 'node:assert/strict';
import { describe, it, before, after } from 'node:test';

import { add, get } from '../styles';

describe('add', () => {
  let element;

  before(() => {
    // Create a div element for testing
    element = document.createElement('div');
    element.id = 'my-element';
    document.body.appendChild(element);
  });

  after(() => {
    // Clean up: remove the element after testing
    document.body.removeChild(element);
  });

  it('should apply styles as an object', async () => {
    await add(element, { color: 'rgb(255, 0, 0)', fontSize: '16px' });

    const computedStyles = getComputedStyle(element);

    assert.equal(computedStyles.color, 'rgb(255, 0, 0)');
    assert.equal(computedStyles.fontSize, '16px');
  });

  it('should apply styles as an array of objects', async () => {
    const styles = [
      { key: 'color', value: 'rgb(0, 0, 255)' },
      { key: 'backgroundColor', value: 'rgb(255, 255, 0)' }
    ];

    await add(element, styles);

    const computedStyles = getComputedStyle(element);

    assert.equal(computedStyles.color, 'rgb(0, 0, 255)');
    assert.equal(computedStyles.backgroundColor, 'rgb(255, 255, 0)');
  });
});

describe('get', () => {
  let element;

  before(() => {
    // Create a div element for testing
    element = document.createElement('div');
    element.id = 'my-element';
    element.style.color = 'rgb(0, 128, 0)';
    element.style.fontSize = '18px';
    document.body.appendChild(element);
  });
  after(() => {
    // Clean up: remove the element after testing
    document.body.removeChild(element);
  });

  it('should get computed styles', async () => {
    const computedStyles = await get(element);

    assert.equal(computedStyles.color, 'rgb(0, 128, 0)');
    assert.equal(computedStyles.fontSize, '18px');
  });
});
