import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { SPECCER_LITERALS } from '../../../../utils/constants';
import { getCharacterToUse } from '../get-character-to-use';

describe('getCharacterToUse', () => {
  it('returns the literal at the index', () => {
    assert.equal(getCharacterToUse(0, SPECCER_LITERALS), 'A');
    assert.equal(getCharacterToUse(25, SPECCER_LITERALS), 'Z');
  });

  it('adds a lowercase copy for each round past the end', () => {
    assert.equal(getCharacterToUse(26, SPECCER_LITERALS), 'Aa');
    assert.equal(getCharacterToUse(51, SPECCER_LITERALS), 'Zz');
    // https://github.com/phun-ky/speccer/issues/562
    assert.equal(getCharacterToUse(52, SPECCER_LITERALS), 'Aaa');
    assert.equal(getCharacterToUse(53, SPECCER_LITERALS), 'Bbb');
  });

  it('depends only on the index, not on earlier calls', () => {
    assert.equal(getCharacterToUse(27, SPECCER_LITERALS), 'Bb');
    assert.equal(getCharacterToUse(27, SPECCER_LITERALS), 'Bb');
  });

  it('splits string literals into characters', () => {
    assert.deepEqual(
      [0, 1, 2, 3, 4].map((i) => getCharacterToUse(i, 'AB')),
      ['A', 'B', 'Aa', 'Bb', 'Aaa']
    );
    assert.equal(getCharacterToUse(1, '🥰😎'), '😎');
  });

  it('falls back to SPECCER_LITERALS for empty literals', () => {
    assert.equal(getCharacterToUse(1, []), 'B');
    assert.equal(getCharacterToUse(1, ''), 'B');
  });
});
