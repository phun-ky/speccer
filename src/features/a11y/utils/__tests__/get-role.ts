import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {getRole} from '../get-role';


describe('getRole', () => {
  it('should return the role attribute if it is defined and not empty', () => {
    const divElement = document.createElement('div');

    divElement.setAttribute('role', 'button');
    assert.strictEqual(getRole(divElement),'button');
  });

  it('should return the role of semantic HTML elements', () => {
    const headerElement = document.createElement('header');

    assert.strictEqual(getRole(headerElement),'header');

    const footerElement = document.createElement('footer');

    assert.strictEqual(getRole(footerElement),'footer');

    const sectionElement = document.createElement('section');

    assert.strictEqual(getRole(sectionElement),'section');

    const formElement = document.createElement('form');

    assert.strictEqual(getRole(formElement),'form');

    const mainElement = document.createElement('main');

    assert.strictEqual(getRole(mainElement),'main');

    const navElement = document.createElement('nav');

    assert.strictEqual(getRole(navElement),'nav');

    const asideElement = document.createElement('aside');

    assert.strictEqual(getRole(asideElement),'aside');
  });

  it('should return "N/A" for elements without a defined role or semantic mapping', () => {
    const spanElement = document.createElement('span');

    assert.strictEqual(getRole(spanElement),'N/A');

    const divElement = document.createElement('div');

    assert.strictEqual(getRole(divElement),'N/A');
  });

  it('should return an empty string if the target element is null or undefined', () => {
    assert.strictEqual(getRole(null as unknown as HTMLElement),'');
    assert.strictEqual(getRole(undefined as unknown as HTMLElement),'');
  });

  it('should return "N/A" for elements with an empty role attribute', () => {
    const divElement = document.createElement('div');

    divElement.setAttribute('role', '');
    assert.strictEqual(getRole(divElement),'N/A');
  });

  it('should handle case insensitivity for semantic elements', () => {
    const HEADERElement = document.createElement('HEADER');

    assert.strictEqual(getRole(HEADERElement),'header');

    const FoOtErElement = document.createElement('FoOtEr');

    assert.strictEqual(getRole(FoOtErElement),'footer');
  });
});
