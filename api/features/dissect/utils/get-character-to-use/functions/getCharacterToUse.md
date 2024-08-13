[**@phun-ky/speccer**](../../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../../README.md) / [features/dissect/utils/get-character-to-use](../README.md) / getCharacterToUse

# Function: getCharacterToUse()

> **getCharacterToUse**(`targetIndex`): `string`

Returns the character to use at the specified target index.
If the index exceeds the available characters, it generates a new character by pairing uppercase and lowercase letters.

## Parameters

• **targetIndex**: `number`

The index of the character to retrieve.

## Returns

`string`

The character to use at the specified index.

## Example

```ts
const character = getCharacterToUse(0); // Returns first character from SPECCER_LITERALS
const nextCharacter = getCharacterToUse(25); // Returns next character or a generated pair if index exceeds literals length
```

## Defined in

[features/dissect/utils/get-character-to-use.ts:18](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/get-character-to-use.ts#L18)
