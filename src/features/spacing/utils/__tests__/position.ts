import { JSDOM } from 'jsdom';

import { strict as assert } from 'assert';
import { describe, test } from 'node:test';

import { SpeccerOptionsInterface } from '../../../../types/speccer';
import { position } from '../position';

describe('position', () => {
  test('position should correctly calculate properties for marginTop', async () => {
    // Set up JSDOM environment
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    // Mock getBoundingClientRect
    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('marginTop', 20, targetElement);

    assert.deepEqual(result, {
      height: '20px',
      width: '196px',
      left: '-86px',
      top: '0px'
    });
  });

  test('position should correctly calculate properties for marginRight', async () => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('marginRight', 20, targetElement);

    assert.deepEqual(result, {
      height: '98px',
      width: '20px',
      left: '110px',
      top: '20px'
    });
  });

  test('position should correctly calculate properties for marginBottom with options', async () => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('marginBottom', 30, targetElement, {
      spacing: { bound: true }
    } as unknown as SpeccerOptionsInterface);

    assert.deepEqual(result, {
      height: '30px',
      width: '100px',
      left: '10px',
      top: '70px'
    });
  });

  test('position should return undefined for unsupported properties', async () => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('unsupportedProperty', 20, targetElement);

    assert.equal(result, undefined);
  });

  test('position should correctly calculate properties for marginLeft', async () => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('marginLeft', 20, targetElement);

    assert.deepEqual(result, {
      height: '98px',
      width: '20px',
      left: '-10px',
      top: '20px'
    });
  });

  test('position should correctly calculate properties for paddingTop', async () => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('paddingTop', 30, targetElement);

    assert.deepEqual(result, {
      height: '30px',
      width: '196px',
      left: '-86px',
      top: '20px'
    });
  });

  test('position should correctly calculate properties for paddingBottom with options', async () => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('paddingBottom', 30, targetElement, {
      spacing: { bound: true }
    } as unknown as SpeccerOptionsInterface);

    assert.deepEqual(result, {
      height: '30px',
      width: '100px',
      left: '10px',
      top: '40px'
    });
  });

  test('position should correctly calculate properties for paddingRight', async () => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('paddingRight', 40, targetElement);

    assert.deepEqual(result, {
      height: '98px',
      width: '40px',
      left: '70px',
      top: '20px'
    });
  });

  test('position should correctly calculate properties for paddingLeft', async () => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('paddingLeft', 40, targetElement);

    assert.deepEqual(result, {
      height: '98px',
      width: '40px',
      left: '10px',
      top: '20px'
    });
  });

  test('position should correctly handle bound spacing option', async () => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="target"></div></body>'
    );
    const document = window.document;
    const targetElement = document.getElementById('target');

    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20,
      right: 110,
      bottom: 70
    });

    const result = await position('paddingTop', 30, targetElement, {
      spacing: { bound: true }
    } as unknown as SpeccerOptionsInterface);

    assert.deepEqual(result, {
      height: '30px',
      width: '100px',
      left: '10px',
      top: '20px'
    });
  });
});
