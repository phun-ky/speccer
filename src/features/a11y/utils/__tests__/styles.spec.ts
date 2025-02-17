import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { styles } from '../styles';

describe('styles', () => {
  it('should calculate styles for tabstops element', async () => {
    const targetEl = document.createElement('div');
    const a11yEl = document.createElement('div');
    const tabstopsStyles = await styles('tabstops', targetEl, a11yEl);

    assert.strictEqual(typeof tabstopsStyles.left, 'string');
    assert.strictEqual(typeof tabstopsStyles.top, 'string');
  });

  it('should calculate styles for landmark element', async () => {
    const targetEl = document.createElement('div');
    const a11yEl = document.createElement('div');
    const landmarkStyles = await styles('landmark', targetEl, a11yEl);

    assert.strictEqual(typeof landmarkStyles.left, 'string');
    assert.strictEqual(typeof landmarkStyles.top, 'string');
  });

  it('should calculate styles for region element', async () => {
    const targetEl = document.createElement('div');
    const a11yEl = document.createElement('div');
    const regionStyles = await styles('region', targetEl, a11yEl);

    assert.strictEqual(typeof regionStyles.left, 'string');
    assert.strictEqual(typeof regionStyles.top, 'string');
    assert.strictEqual(typeof regionStyles.height, 'string');
    assert.strictEqual(typeof regionStyles.width, 'string');
  });

  it('should calculate styles for shortcut element', async () => {
    const targetEl = document.createElement('div');
    const a11yEl = document.createElement('div');
    const shortcutStyles = await styles('shortcut', targetEl, a11yEl);

    assert.strictEqual(typeof shortcutStyles.left, 'string');
    assert.strictEqual(typeof shortcutStyles.top, 'string');
  });

  it('should calculate default styles', async () => {
    const targetEl = document.createElement('div');
    const a11yEl = document.createElement('div');
    const defaultStyles = await styles('default', targetEl, a11yEl);

    assert.strictEqual(typeof defaultStyles.left, 'string');
    assert.strictEqual(typeof defaultStyles.top, 'string');
  });
});
