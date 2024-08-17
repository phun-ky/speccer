<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/area

# utils/area

> Last updated 2024-08-17T05:45:48.749Z

## Functions

### getAreasFromString()

```ts
function getAreasFromString(areaString): string[];
```

Splits a string containing areas into an array of strings.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`string`\[]

An array of area strings.

#### Example

```ts
const areas = getAreasFromString('left right top');
// areas: ['left', 'right', 'top']
```

#### Defined in

[utils/area.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L15)

---

### isBottomArea()

```ts
function isBottomArea(areaString): boolean;
```

Checks if 'bottom' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'bottom' is present, otherwise `false`.

#### Defined in

[utils/area.ts:66](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L66)

---

### isBracketArea()

```ts
function isBracketArea(areaString): boolean;
```

Checks if 'bracket' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'bracket' is present, otherwise `false`.

#### Defined in

[utils/area.ts:80](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L80)

---

### isCurly()

```ts
function isCurly(areaString): boolean;
```

Checks if the provided areaString contains 'curly' and 'bracket' areas.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if both 'curly' and 'bracket' are present, otherwise `false`.

#### Defined in

[utils/area.ts:178](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L178)

---

### isEncloseArea()

```ts
function isEncloseArea(areaString): boolean;
```

Checks if 'enclose' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'enclose' is present, otherwise `false`.

#### Defined in

[utils/area.ts:94](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L94)

---

### isHeightArea()

```ts
function isHeightArea(areaString): boolean;
```

Checks if 'height' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'height' is present, otherwise `false`.

#### Defined in

[utils/area.ts:136](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L136)

---

### isLeftArea()

```ts
function isLeftArea(areaString): boolean;
```

Checks if 'left' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'left' is present, otherwise `false`.

#### Defined in

[utils/area.ts:24](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L24)

---

### isParentArea()

```ts
function isParentArea(areaString): boolean;
```

Checks if 'parent' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'parent' is present, otherwise `false`.

#### Defined in

[utils/area.ts:122](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L122)

---

### isRightArea()

```ts
function isRightArea(areaString): boolean;
```

Checks if 'right' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'right' is present, otherwise `false`.

#### Defined in

[utils/area.ts:38](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L38)

---

### isSubtle()

```ts
function isSubtle(areaString): boolean;
```

Checks if 'subtle' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'subtle' is present, otherwise `false`.

#### Defined in

[utils/area.ts:108](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L108)

---

### isTopArea()

```ts
function isTopArea(areaString): boolean;
```

Checks if 'top' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'top' is present, otherwise `false`.

#### Defined in

[utils/area.ts:52](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L52)

---

### isValidGridElement()

```ts
function isValidGridElement(areaString, styles): boolean;
```

Checks if the provided areaString contains 'grid'.

#### Parameters

| Parameter    | Type                  | Description                  |
| ------------ | --------------------- | ---------------------------- |
| `areaString` | `null` \| `string`    | The string containing areas. |
| `styles`     | `CSSStyleDeclaration` | -                            |

#### Returns

`boolean`

boolean `true` if 'grid' are present, otherwise `false`.

#### Defined in

[utils/area.ts:239](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L239)

---

### isValidMarkElement()

```ts
function isValidMarkElement(areaString): boolean;
```

Checks if the provided areaString contains 'mark'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'mark' are present, otherwise `false`.

#### Defined in

[utils/area.ts:229](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L229)

---

### isValidMeasureElement()

```ts
function isValidMeasureElement(areaString): boolean;
```

Checks if the provided areaString contains 'measure'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'measure' are present, otherwise `false`.

#### Defined in

[utils/area.ts:211](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L211)

---

### isValidPinElement()

```ts
function isValidPinElement(areaString): boolean;
```

Checks if the provided areaString contains 'pin'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'pin' are present, otherwise `false`.

#### Defined in

[utils/area.ts:220](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L220)

---

### isValidSpacingElement()

```ts
function isValidSpacingElement(areaString): boolean;
```

Checks if the provided areaString contains 'spacing'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'spacing' are present, otherwise `false`.

#### Defined in

[utils/area.ts:202](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L202)

---

### isValidTypographyElement()

```ts
function isValidTypographyElement(areaString): boolean;
```

Checks if the provided areaString contains 'typography'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'typography' are present, otherwise `false`.

#### Defined in

[utils/area.ts:193](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L193)

---

### isWidthArea()

```ts
function isWidthArea(areaString): boolean;
```

Checks if 'width' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'width' is present, otherwise `false`.

#### Defined in

[utils/area.ts:150](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L150)

---

### useSVG()

```ts
function useSVG(areaString): boolean;
```

Checks if the provided areaString contains SVG-related areas.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if any SVG-related area is present, otherwise `false`.

#### Defined in

[utils/area.ts:164](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L164)

---

### useSyntaxHighlighting()

```ts
function useSyntaxHighlighting(areaString): boolean;
```

Checks if the provided areaString contains 'syntax'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if both 'syntax' are present, otherwise `false`.

#### Defined in

[utils/area.ts:248](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L248)

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
