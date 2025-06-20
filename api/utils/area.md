<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/area

# utils/area

> Last updated 2025-06-17T08:01:02.047Z

## Functions

### getAreasFromString()

```ts
function getAreasFromString(areaString): string[];
```

Defined in:
[src/utils/area.ts:24](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L24)

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

---

### isBottomArea()

```ts
function isBottomArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:75](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L75)

Checks if 'bottom' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'bottom' is present, otherwise `false`.

---

### isBracketArea()

```ts
function isBracketArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:89](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L89)

Checks if 'bracket' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'bracket' is present, otherwise `false`.

---

### isCurly()

```ts
function isCurly(areaString): boolean;
```

Defined in:
[src/utils/area.ts:222](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L222)

Checks if the provided areaString contains 'curly' and 'bracket' areas.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if both 'curly' and 'bracket' are present, otherwise `false`.

---

### isEncloseArea()

```ts
function isEncloseArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:103](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L103)

Checks if 'enclose' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'enclose' is present, otherwise `false`.

---

### isHeightArea()

```ts
function isHeightArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:159](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L159)

Checks if 'height' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'height' is present, otherwise `false`.

---

### isLeftArea()

```ts
function isLeftArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:33](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L33)

Checks if 'left' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'left' is present, otherwise `false`.

---

### isParentArea()

```ts
function isParentArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:131](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L131)

Checks if 'parent' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'parent' is present, otherwise `false`.

---

### isRightArea()

```ts
function isRightArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:47](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L47)

Checks if 'right' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'right' is present, otherwise `false`.

---

### isSlimArea()

```ts
function isSlimArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:173](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L173)

Checks if 'slim' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'slim' is present, otherwise `false`.

---

### isSubtle()

```ts
function isSubtle(areaString): boolean;
```

Defined in:
[src/utils/area.ts:117](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L117)

Checks if 'subtle' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'subtle' is present, otherwise `false`.

---

### isTextArea()

```ts
function isTextArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:145](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L145)

Checks if 'text' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'text' is present, otherwise `false`.

---

### isTopArea()

```ts
function isTopArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:61](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L61)

Checks if 'top' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'top' is present, otherwise `false`.

---

### isValidGridElement()

```ts
function isValidGridElement(areaString, styles): boolean;
```

Defined in:
[src/utils/area.ts:287](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L287)

Checks if the provided areaString contains 'grid'.

#### Parameters

| Parameter    | Type                                                                                                                                                                              | Description |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------- |
| `areaString` | `null`                                                                                                                                                                            | `string`    | The string containing areas. |
| `styles`     | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)> | -           |

#### Returns

`boolean`

boolean `true` if 'grid' are present, otherwise `false`.

---

### isValidMarkElement()

```ts
function isValidMarkElement(areaString): boolean;
```

Defined in:
[src/utils/area.ts:277](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L277)

Checks if the provided areaString contains 'mark'.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'mark' are present, otherwise `false`.

---

### isValidMeasureElement()

```ts
function isValidMeasureElement(areaString): boolean;
```

Defined in:
[src/utils/area.ts:258](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L258)

Checks if the provided areaString contains 'measure'.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'measure' are present, otherwise `false`.

---

### isValidPinElement()

```ts
function isValidPinElement(areaString): boolean;
```

Defined in:
[src/utils/area.ts:268](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L268)

Checks if the provided areaString contains 'pin'.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'pin' are present, otherwise `false`.

---

### isValidSpacingElement()

```ts
function isValidSpacingElement(areaString): boolean;
```

Defined in:
[src/utils/area.ts:248](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L248)

Checks if the provided areaString contains 'spacing'.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'spacing' are present, otherwise `false`.

---

### isValidTypographyElement()

```ts
function isValidTypographyElement(areaString): boolean;
```

Defined in:
[src/utils/area.ts:238](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L238)

Checks if the provided areaString contains 'typography'.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'typography' are present, otherwise `false`.

---

### isWidthArea()

```ts
function isWidthArea(areaString): boolean;
```

Defined in:
[src/utils/area.ts:187](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L187)

Checks if 'width' area is present in the provided areaString.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'width' is present, otherwise `false`.

---

### useSVG()

```ts
function useSVG(areaString): boolean;
```

Defined in:
[src/utils/area.ts:201](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L201)

Checks if the provided areaString contains SVG-related areas.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if any SVG-related area is present, otherwise `false`.

---

### useSyntaxHighlighting()

```ts
function useSyntaxHighlighting(areaString): boolean;
```

Defined in:
[src/utils/area.ts:302](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L302)

Checks if the provided areaString contains 'syntax'.

#### Parameters

| Parameter    | Type   | Description |
| ------------ | ------ | ----------- | ---------------------------- |
| `areaString` | `null` | `string`    | The string containing areas. |

#### Returns

`boolean`

boolean `true` if both 'syntax' are present, otherwise `false`.

---

**Contributing**

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help
get rid of secondary activities and to enhance systems already in place, be it
documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to
maintain my projects, create new ones and contribute to the large community
we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net)
is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
