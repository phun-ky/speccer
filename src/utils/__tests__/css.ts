import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  SpacingCSSPropertiesType,
  TypographyCSSPropertiesType
} from '../../types/css';
import {
  getNumberValue,
  normalizeNumberValue,
  getClassNameFromCSSProperty,
  getSpacing,
  getTypography,
  pinSpace,
  measureSize,
  lineWidth
} from '../css';

describe('css', () => {
  it('getNumberValue should parse a string value into an integer', () => {
    const intValue = getNumberValue('42');

    assert.equal(intValue, 42);
  });

  it('normalizeNumberValue should ensure a valid number within [0, 1] or [-1, 0) is normalized to 0', () => {
    assert.equal(normalizeNumberValue('1.5'), 1.5);
    assert.equal(normalizeNumberValue(-0.5), 0);
    assert.equal(normalizeNumberValue(0.0), 0.0);
    assert.equal(normalizeNumberValue(1.0), 1.0);
  });

  it('getClassNameFromCSSProperty should convert a CSS property name to a class name', () => {
    const className = getClassNameFromCSSProperty('marginTop');

    assert.equal(className, 'margin top');
  });

  it('getSpacing should extract spacing-related properties from a style object', () => {
    const style = {
      marginBottom: undefined,
      marginLeft: '20px',
      marginRight: undefined,
      marginTop: '10px',
      paddingBottom: undefined,
      paddingLeft: undefined,
      paddingRight: undefined,
      paddingTop: undefined
    };
    const spacing = getSpacing(style as unknown as SpacingCSSPropertiesType);

    assert.deepEqual(spacing, style);
  });

  it('getTypography should extract typography-related properties from a style object', () => {
    const style = {
      fontFamily: undefined,
      fontSize: '16px',
      fontStyle: undefined,
      fontVariationSettings: undefined,
      fontWeight: 'bold',
      letterSpacing: undefined,
      lineHeight: undefined
    };
    const typography = getTypography(
      style as unknown as TypographyCSSPropertiesType
    );

    assert.deepEqual(typography, style);
  });

  it('pinSpace should retrieve the value of a custom CSS property', () => {
    const dummyElement = document.createElement('div');

    dummyElement.style.setProperty('--ph-speccer-pin-space', '5');
    document.body.appendChild(dummyElement);

    const value = pinSpace(dummyElement);

    assert.equal(value, 5);
    document.body.removeChild(dummyElement);
  });

  it('measureSize should retrieve the value of a custom CSS property', () => {
    const dummyElement = document.createElement('div');

    dummyElement.style.setProperty('--ph-speccer-measure-size', '15');
    document.body.appendChild(dummyElement);

    const value = measureSize(dummyElement);

    assert.equal(value, 15);
    document.body.removeChild(dummyElement);
  });

  it('lineWidth should retrieve the value of a custom CSS property', () => {
    const dummyElement = document.createElement('div');

    dummyElement.style.setProperty('--ph-speccer-line-width', '3');
    document.body.appendChild(dummyElement);

    const value = lineWidth(dummyElement);

    assert.equal(value, 3);
    document.body.removeChild(dummyElement);
  });
});
