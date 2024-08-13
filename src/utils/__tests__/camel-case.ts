import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { camelCase } from '../camel-case';

describe('camelCase', () => {
  it('should convert a single word to lowercase', () => {
    assert.equal(camelCase('Hello'),'hello');
    assert.equal(camelCase('WORLD'),'world');
  });

  it('should convert a phrase to camel case', () => {
    assert.equal(camelCase('Hello World'),'helloWorld');
    assert.equal(camelCase('  multiple   spaces  '),'multipleSpaces');
    assert.equal(camelCase('This is a test'),'thisIsATest');
  });

  it('should remove non-alphanumeric characters', () => {
    assert.equal(camelCase('Hello@World!'),'helloworld');
    assert.equal(camelCase('Camel-Case'),'camel-Case');
    assert.equal(camelCase('Test_with_special#chars'),'testwithspecialchars');
  });

  it('should handle accented characters correctly', () => {
    assert.equal(camelCase('café au lait'),'cafeAuLait');
    assert.equal(camelCase('résumé'),'resume');
    assert.equal(camelCase('naïve'),'naive');
  });

  it('should handle strings with numbers correctly', () => {
    assert.equal(camelCase('test 123 string'),'test123String');
    assert.equal(camelCase('Version 2.0'),'version20');
    assert.equal(camelCase('Hello 2022'),'hello2022');
  });

  it('should handle empty strings and return an empty string', () => {
    assert.equal(camelCase(''),'');
  });

  it('should handle strings with only non-alphanumeric characters and return an empty string', () => {
    assert.equal(camelCase('!@#$%^&*()'),'');
    assert.equal(camelCase('   '),'');
  });

  it('should handle strings with mixed cases and special characters', () => {
    assert.equal(camelCase(' Camel CASE-Test_string!'),'camelCase-Teststring');
    assert.equal(camelCase('example-with-ACCENTS_éüî'),'example-With-Accentseui');
  });
});
