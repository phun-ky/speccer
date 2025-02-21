import assert from 'node:assert/strict';
import { describe, it, beforeEach } from 'node:test';

import { SpeccerOptionsInterface } from '../../../../types/speccer';
import { getContentForPin } from '../get-content-for-pin';

describe('getContentForPin', () => {
  const symbol = '★';

  let targetElement: HTMLElement;

  beforeEach(() => {
    targetElement = document.createElement('div');
  });

  it('should return the symbol if the pin options are not provided', () => {
    const options: SpeccerOptionsInterface = {} as SpeccerOptionsInterface;

    assert.strictEqual(
      getContentForPin(symbol, targetElement, options),
      symbol
    );
  });

  it('should return the symbol if text option is false', () => {
    const options: SpeccerOptionsInterface = {
      pin: { text: false }
    } as SpeccerOptionsInterface;

    assert.strictEqual(
      getContentForPin(symbol, targetElement, options),
      symbol
    );
  });

  it('should return the symbol if data-speccer-title is not set', () => {
    const options: SpeccerOptionsInterface = {
      pin: { text: true }
    } as SpeccerOptionsInterface;

    assert.strictEqual(
      getContentForPin(symbol, targetElement, options),
      symbol
    );
  });

  it('should return a title span if data-speccer-title is set and no description is provided', () => {
    const options: SpeccerOptionsInterface = {
      pin: { text: true }
    } as SpeccerOptionsInterface;

    targetElement.setAttribute('data-speccer-title', 'My Title');

    assert.strictEqual(
      getContentForPin(symbol, targetElement, options),
      '<span class="ph-speccer title">My Title</span>'
    );
  });

  it('should return title and description spans if both are provided', () => {
    const options: SpeccerOptionsInterface = {
      pin: { text: true }
    } as SpeccerOptionsInterface;

    targetElement.setAttribute('data-speccer-title', 'My Title');
    targetElement.setAttribute('data-speccer-description', 'My Description');

    assert.strictEqual(
      getContentForPin(symbol, targetElement, options),
      '<span class="ph-speccer title">My Title</span><span class="ph-speccer description">My Description</span>'
    );
  });

  it('should replace newline characters in the description with <br/>', () => {
    const options: SpeccerOptionsInterface = {
      pin: { text: true }
    } as SpeccerOptionsInterface;

    targetElement.setAttribute('data-speccer-title', 'My Title');
    targetElement.setAttribute(
      'data-speccer-description',
      'Line 1\\nLine 2\\nLine 3'
    );

    assert.strictEqual(
      getContentForPin(symbol, targetElement, options),
      '<span class="ph-speccer title">My Title</span><span class="ph-speccer description">Line 1<br/>Line 2<br/>Line 3</span>'
    );
  });

  it('should include a heading span if the target element is a heading', () => {
    const options: SpeccerOptionsInterface = {
      pin: { text: true }
    } as SpeccerOptionsInterface;

    targetElement = document.createElement('h1');
    targetElement.setAttribute('data-speccer-title', 'Heading Title');

    assert.strictEqual(
      getContentForPin(symbol, targetElement, options),
      '<span class="ph-speccer heading">H1</span><span class="ph-speccer title">Heading Title</span>'
    );
  });

  it('should return the symbol if no title or description is provided, even for headings', () => {
    const options: SpeccerOptionsInterface = {
      pin: { text: true }
    } as SpeccerOptionsInterface;

    targetElement = document.createElement('h1');

    assert.strictEqual(
      getContentForPin(symbol, targetElement, options),
      symbol
    );
  });
});
