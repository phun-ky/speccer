let _index_to_use = 0;

/**
 * Returns the character to use at the specified target index.
 * If the index exceeds the available characters, it generates a new character by pairing uppercase and lowercase letters.
 *
 * @param {number} targetIndex - The index of the character to retrieve.
 * @param {string|string[]} literalsToUse - Literals to use
 * @returns {string} The character to use at the specified index.
 *
 * @example
 * ```ts
 * const character = getCharacterToUse(0); // Returns first character from SPECCER_LITERALS
 * const nextCharacter = getCharacterToUse(25); // Returns next character or a generated pair if index exceeds literals length
 * ```
 */
export const getCharacterToUse = (
  targetIndex: number,
  literalsToUse: string | string[]
): string => {
  let _character_to_use = literalsToUse[targetIndex];

  // Reset index to use when we start new elements
  if (targetIndex === 0) _index_to_use = 0;

  /**
   * If we're running out of characters to use,
   * make a new one with uppercase and lowercase pairs
   */
  if (!_character_to_use) {
    _character_to_use = `${literalsToUse[_index_to_use]}${literalsToUse[
      _index_to_use
    ].toLowerCase()}`;
    _index_to_use++;
  }

  return _character_to_use;
};
