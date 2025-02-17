/* eslint-disable @typescript-eslint/no-explicit-any */
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { SPECCER_LITERALS } from '../../../../utils/constants';
import { getCharacterToUse } from '../get-character-to-use';

describe('getCharacterToUse', () => {
  it('should return the correct character from SPECCER_LITERALS based on the target index', () => {
    const targetIndex = 0;
    const character = getCharacterToUse(targetIndex, SPECCER_LITERALS);

    assert.equal(character, SPECCER_LITERALS[targetIndex]);
  });

  it('should return the combined character if the target index exceeds SPECCER_LITERALS length', () => {
    const targetIndex = SPECCER_LITERALS.length + 1;
    const expectedCharacter = `${SPECCER_LITERALS[0]}${SPECCER_LITERALS[0].toLowerCase()}`;
    const character = getCharacterToUse(targetIndex, SPECCER_LITERALS);

    assert.equal(character, expectedCharacter);
  });

  it('should reset the internal index when targetIndex is 0', () => {
    const character1 = getCharacterToUse(
      SPECCER_LITERALS.length + 1,
      SPECCER_LITERALS
    ); // Exceeding length to increment internal index

    assert.equal(
      character1,
      `${SPECCER_LITERALS[1]}${SPECCER_LITERALS[1].toLowerCase()}`
    );

    const character2 = getCharacterToUse(0, SPECCER_LITERALS); // Reset internal index

    assert.equal(character2, SPECCER_LITERALS[0]);
  });

  it('should handle multiple calls correctly when exceeding available characters', () => {
    const firstCharacter = getCharacterToUse(
      SPECCER_LITERALS.length,
      SPECCER_LITERALS
    ); // Exceeds, should use combined characters

    assert.equal(
      firstCharacter,
      `${SPECCER_LITERALS[0]}${SPECCER_LITERALS[0].toLowerCase()}`
    );

    const secondCharacter = getCharacterToUse(
      SPECCER_LITERALS.length + 1,
      SPECCER_LITERALS
    ); // Next in line

    assert.equal(
      secondCharacter,
      `${SPECCER_LITERALS[1]}${SPECCER_LITERALS[1].toLowerCase()}`
    );
  });
});
