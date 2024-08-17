<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../../README.md) / features/pin/utils/get-character-to-use

# features/pin/utils/get-character-to-use

> Last updated 2024-08-17T05:45:48.742Z

## Functions

### getCharacterToUse()

```ts
function getCharacterToUse(targetIndex): string;
```

Returns the character to use at the specified target index.
If the index exceeds the available characters, it generates a new character by pairing uppercase and lowercase letters.

#### Parameters

| Parameter     | Type     | Description                             |
| ------------- | -------- | --------------------------------------- |
| `targetIndex` | `number` | The index of the character to retrieve. |

#### Returns

`string`

The character to use at the specified index.

#### Example

```ts
const character = getCharacterToUse(0); // Returns first character from SPECCER_LITERALS
const nextCharacter = getCharacterToUse(25); // Returns next character or a generated pair if index exceeds literals length
```

#### Defined in

[features/pin/utils/get-character-to-use.ts:18](https://github.com/phun-ky/speccer/blob/main/src/features/pin/utils/get-character-to-use.ts#L18)

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
