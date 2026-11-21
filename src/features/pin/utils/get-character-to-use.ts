import { SPECCER_LITERALS } from '../../../utils/constants';

/**
 * Returns the character to use for the pin at the specified index.
 * When the index is past the end of the literals, it starts over and adds a
 * lowercase copy for each round: `A`, `Aa`, `Aaa` and so on.
 *
 * @param {number} targetIndex - The index of the pin in its pin-area.
 * @param {string|string[]} literalsToUse - Literals to use. Empty literals fall back to `SPECCER_LITERALS`.
 * @returns {string} The character to use at the specified index.
 *
 * @example
 * ```ts
 * getCharacterToUse(0, SPECCER_LITERALS); // 'A'
 * getCharacterToUse(26, SPECCER_LITERALS); // 'Aa'
 * getCharacterToUse(53, SPECCER_LITERALS); // 'Bbb'
 * ```
 */
export const getCharacterToUse = (
  targetIndex: number,
  literalsToUse: string | string[]
): string => {
  // Spread, so a string is split into characters, not the halves of an emoji
  const _literals = literalsToUse.length
    ? [...literalsToUse]
    : SPECCER_LITERALS;
  const _character = _literals[targetIndex % _literals.length];
  const _round = Math.floor(targetIndex / _literals.length);

  return _character + _character.toLowerCase().repeat(_round);
};
