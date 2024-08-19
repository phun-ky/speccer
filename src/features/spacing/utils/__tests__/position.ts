import { JSDOM } from 'jsdom';

import { strict as assert } from 'assert';
import { describe, test } from 'node:test';


import { position } from '../position'; // Adjust the path to your module

describe('position', () => {
  test('position should correctly apply styles for marginTop', async () => {
    const { window } = new JSDOM('<!DOCTYPE html><body><div id="spacing"></div><div id="target"></div></body>');
    const document = window.document;
    const spacingElement = document.getElementById('spacing');
    const targetElement = document.getElementById('target');

    // Mock the getBoundingClientRect method to return predefined dimensions
    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20
    });
    spacingElement.getBoundingClientRect = () => ({
      width: 100,
      height: 20,
      left: 10,
      top: 0
    });

    await position('marginTop', 20, spacingElement, targetElement);

    assert.deepEqual(spacingElement.getBoundingClientRect(),{
      width: 100,
      height: 20,
      left: 10,
      top: 0
    });
  });
  test('position should correctly apply styles for marginRight', async () => {
    const { window } = new JSDOM('<!DOCTYPE html><body><div id="spacing"></div><div id="target"></div></body>');
    const document = window.document;
    const spacingElement = document.getElementById('spacing');
    const targetElement = document.getElementById('target');

    // Mock the getBoundingClientRect method to return predefined dimensions
    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20
    });
    spacingElement.getBoundingClientRect = () => ({
      width: 150,
      height: 200,
      left: 160,
      top: 0
    });

    await position('marginTop', 150, spacingElement, targetElement);

    assert.deepEqual(spacingElement.getBoundingClientRect(),{
      width: 150,
      height: 200,
      left: 160,
      top: 0
    });
  });
  test('position should correctly apply styles for marginBottom', async () => {
    const { window } = new JSDOM('<!DOCTYPE html><body><div id="spacing"></div><div id="target"></div></body>');
    const document = window.document;
    const spacingElement = document.getElementById('spacing');
    const targetElement = document.getElementById('target');

    // Mock the getBoundingClientRect method to return predefined dimensions
    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20
    });
    spacingElement.getBoundingClientRect = () => ({
      width: 100,
      height: 200,
      left: 110,
      top: 0
    });

    await position('marginTop', 200, spacingElement, targetElement);

    assert.deepEqual(spacingElement.getBoundingClientRect(),{
      width: 100,
      height: 200,
      left: 110,
      top: 0
    });
  });
  test('position should correctly apply styles for marginLeft', async () => {
    const { window } = new JSDOM('<!DOCTYPE html><body><div id="spacing"></div><div id="target"></div></body>');
    const document = window.document;
    const spacingElement = document.getElementById('spacing');
    const targetElement = document.getElementById('target');

    // Mock the getBoundingClientRect method to return predefined dimensions
    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20
    });
    spacingElement.getBoundingClientRect = () => ({
      width: 200,
      height: 200,
      left: -90,
      top: 0
    });

    await position('marginTop', 200, spacingElement, targetElement);

    assert.deepEqual(spacingElement.getBoundingClientRect(),{
      width: 200,
      height: 200,
      left: -90,
      top: 0
    });
  });
  test('position should correctly apply styles for paddingTop', async () => {
    const { window } = new JSDOM('<!DOCTYPE html><body><div id="spacing"></div><div id="target"></div></body>');
    const document = window.document;
    const spacingElement = document.getElementById('spacing');
    const targetElement = document.getElementById('target');

    // Mock the getBoundingClientRect method to return predefined dimensions
    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20
    });
    spacingElement.getBoundingClientRect = () => ({
      width: 100,
      height: 20,
      left: 10,
      top: 0
    });

    await position('paddingTop', 20, spacingElement, targetElement);

    assert.deepEqual(spacingElement.getBoundingClientRect(),{
      width: 100,
      height: 20,
      left: 10,
      top: 0
    });
  });
  test('position should correctly apply styles for paddingRight', async () => {
    const { window } = new JSDOM('<!DOCTYPE html><body><div id="spacing"></div><div id="target"></div></body>');
    const document = window.document;
    const spacingElement = document.getElementById('spacing');
    const targetElement = document.getElementById('target');

    // Mock the getBoundingClientRect method to return predefined dimensions
    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20
    });
    spacingElement.getBoundingClientRect = () => ({
      width: 150,
      height: 200,
      left: 160,
      top: 0
    });

    await position('paddingTop', 150, spacingElement, targetElement);

    assert.deepEqual(spacingElement.getBoundingClientRect(),{
      width: 150,
      height: 200,
      left: 160,
      top: 0
    });
  });
  test('position should correctly apply styles for paddingBottom', async () => {
    const { window } = new JSDOM('<!DOCTYPE html><body><div id="spacing"></div><div id="target"></div></body>');
    const document = window.document;
    const spacingElement = document.getElementById('spacing');
    const targetElement = document.getElementById('target');

    // Mock the getBoundingClientRect method to return predefined dimensions
    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20
    });
    spacingElement.getBoundingClientRect = () => ({
      width: 100,
      height: 200,
      left: 110,
      top: 0
    });

    await position('paddingTop', 200, spacingElement, targetElement);

    assert.deepEqual(spacingElement.getBoundingClientRect(),{
      width: 100,
      height: 200,
      left: 110,
      top: 0
    });
  });
  test('position should correctly apply styles for paddingLeft', async () => {
    const { window } = new JSDOM('<!DOCTYPE html><body><div id="spacing"></div><div id="target"></div></body>');
    const document = window.document;
    const spacingElement = document.getElementById('spacing');
    const targetElement = document.getElementById('target');

    // Mock the getBoundingClientRect method to return predefined dimensions
    targetElement.getBoundingClientRect = () => ({
      width: 100,
      height: 50,
      left: 10,
      top: 20
    });
    spacingElement.getBoundingClientRect = () => ({
      width: 200,
      height: 200,
      left: -90,
      top: 0
    });

    await position('paddingTop', 200, spacingElement, targetElement);

    assert.deepEqual(spacingElement.getBoundingClientRect(),{
      width: 200,
      height: 200,
      left: -90,
      top: 0
    });
  });
});
