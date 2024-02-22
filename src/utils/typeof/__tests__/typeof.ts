import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

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
    assert.equal(isString('test'), true);
    assert.equal(isString(123), false);
    assert.equal(isString(true), false);
    assert.equal(isString(undefined), false);
  });
});
describe('isNotString', () => {
  it('should typecheck the given variable correctly', () => {
    assert.equal(isNotString('test'), false);
    assert.equal(isNotString(123), true);
    assert.equal(isNotString(true), true);
    assert.equal(isNotString(undefined), true);
  });
});
describe('isNumber', () => {
  it('should typecheck the given variable correctly', () => {
    assert.equal(isNumber(123), true);
    assert.equal(isNumber('test'), false);
    assert.equal(isNumber(true), false);
    assert.equal(isNumber(undefined), false);
  });
});
describe('isNotNumber', () => {
  it('should typecheck the given variable correctly', () => {
    assert.equal(isNotNumber(123), false);
    assert.equal(isNotNumber('test'), true);
    assert.equal(isNotNumber(true), true);
    assert.equal(isNotNumber(undefined), true);
  });
});
describe('isBoolean', () => {
  it('should typecheck the given variable correctly', () => {
    assert.equal(isBoolean(true), true);
    assert.equal(isBoolean(123), false);
    assert.equal(isBoolean('test'), false);
    assert.equal(isBoolean(undefined), false);
  });
});
describe('isNotBoolean', () => {
  it('should typecheck the given variable correctly', () => {
    assert.equal(isNotBoolean(true), false);
    assert.equal(isNotBoolean(123), true);
    assert.equal(isNotBoolean('test'), true);
    assert.equal(isNotBoolean(undefined), true);
  });
});
describe('isUndefined', () => {
  it('should typecheck the given variable correctly', () => {
    assert.equal(isUndefined(undefined), true);
    assert.equal(isUndefined(123), false);
    assert.equal(isUndefined('test'), false);
    assert.equal(isUndefined(true), false);
  });
});
describe('isNotUndefined', () => {
  it('should typecheck the given variable correctly', () => {
    assert.equal(isNotUndefined(undefined), false);
    assert.equal(isNotUndefined(123), true);
    assert.equal(isNotUndefined('test'), true);
    assert.equal(isNotUndefined(true), true);
  });
});
