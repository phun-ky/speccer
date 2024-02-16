import { describe, it, expect } from 'vitest';

import {
  isBoolean,
  isNotBoolean,
  isNotNumber,
  isNotString,
  isNotUndefined,
  isNumber,
  isString,
  isUndefined
} from '..';

describe('isString', () => {
  it('should typecheck the given variable correctly', () => {
    expect(isString('test')).toBe(true);
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });
});
describe('isNotString', () => {
  it('should typecheck the given variable correctly', () => {
    expect(isNotString('test')).toBe(false);
    expect(isNotString(123)).toBe(true);
    expect(isNotString(true)).toBe(true);
    expect(isNotString(undefined)).toBe(true);
  });
});
describe('isNumber', () => {
  it('should typecheck the given variable correctly', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber('test')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });
});
describe('isNotNumber', () => {
  it('should typecheck the given variable correctly', () => {
    expect(isNotNumber(123)).toBe(false);
    expect(isNotNumber('test')).toBe(true);
    expect(isNotNumber(true)).toBe(true);
    expect(isNotNumber(undefined)).toBe(true);
  });
});
describe('isBoolean', () => {
  it('should typecheck the given variable correctly', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(123)).toBe(false);
    expect(isBoolean('test')).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });
});
describe('isNotBoolean', () => {
  it('should typecheck the given variable correctly', () => {
    expect(isNotBoolean(true)).toBe(false);
    expect(isNotBoolean(123)).toBe(true);
    expect(isNotBoolean('test')).toBe(true);
    expect(isNotBoolean(undefined)).toBe(true);
  });
});
describe('isUndefined', () => {
  it('should typecheck the given variable correctly', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(123)).toBe(false);
    expect(isUndefined('test')).toBe(false);
    expect(isUndefined(true)).toBe(false);
  });
});
describe('isNotUndefined', () => {
  it('should typecheck the given variable correctly', () => {
    expect(isNotUndefined(undefined)).toBe(false);
    expect(isNotUndefined(123)).toBe(true);
    expect(isNotUndefined('test')).toBe(true);
    expect(isNotUndefined(true)).toBe(true);
  });
});
