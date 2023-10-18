import { describe, it, expect } from '@jest/globals';

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
import {
  SpacingCSSPropertiesType,
  TypographyCSSPropertiesType
} from 'types/css';

describe('css', () => {
  it('getNumberValue should parse a string value into an integer', () => {
    const intValue = getNumberValue('42');

    expect(intValue).toBe(42);
  });

  it('normalizeNumberValue should ensure a valid number within [0, 1] or [-1, 0) is normalized to 0', () => {
    expect(normalizeNumberValue('1.5')).toBe(1.5);
    expect(normalizeNumberValue(-0.5)).toBe(0);
    expect(normalizeNumberValue(0.0)).toBe(0.0);
    expect(normalizeNumberValue(1.0)).toBe(1.0);
  });

  it('getClassNameFromCSSProperty should convert a CSS property name to a class name', () => {
    const className = getClassNameFromCSSProperty('marginTop');

    expect(className).toBe('margin top');
  });

  it('getSpacing should extract spacing-related properties from a style object', () => {
    const style = {
      marginTop: '10px',
      marginLeft: '20px'
    };
    const spacing = getSpacing(style as SpacingCSSPropertiesType);

    expect(spacing).toEqual(style);
  });

  it('getTypography should extract typography-related properties from a style object', () => {
    const style = {
      fontSize: '16px',
      fontWeight: 'bold'
    };
    const typography = getTypography(style as TypographyCSSPropertiesType);

    expect(typography).toEqual(style);
  });

  it('pinSpace should retrieve the value of a custom CSS property', () => {
    const dummyElement = document.createElement('div');

    dummyElement.style.setProperty('--ph-speccer-pin-space', '5');
    document.body.appendChild(dummyElement);

    const value = pinSpace(dummyElement);

    expect(value).toBe(5);
    document.body.removeChild(dummyElement);
  });

  it('measureSize should retrieve the value of a custom CSS property', () => {
    const dummyElement = document.createElement('div');

    dummyElement.style.setProperty('--ph-speccer-measure-size', '15');
    document.body.appendChild(dummyElement);

    const value = measureSize(dummyElement);

    expect(value).toBe(15);
    document.body.removeChild(dummyElement);
  });

  it('lineWidth should retrieve the value of a custom CSS property', () => {
    const dummyElement = document.createElement('div');

    dummyElement.style.setProperty('--ph-speccer-line-width', '3');
    document.body.appendChild(dummyElement);

    const value = lineWidth(dummyElement);

    expect(value).toBe(3);
    document.body.removeChild(dummyElement);
  });
});
