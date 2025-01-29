<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/area

# utils/area

> Last updated 2025-01-29T08:54:31.619Z

## Table of Contents

- [Functions](#functions)
  - [getAreasFromString()](#getareasfromstring)
  - [isBottomArea()](#isbottomarea)
  - [isBracketArea()](#isbracketarea)
  - [isCurly()](#iscurly)
  - [isEncloseArea()](#isenclosearea)
  - [isHeightArea()](#isheightarea)
  - [isLeftArea()](#isleftarea)
  - [isParentArea()](#isparentarea)
  - [isRightArea()](#isrightarea)
  - [isSlimArea()](#isslimarea)
  - [isSubtle()](#issubtle)
  - [isTextArea()](#istextarea)
  - [isTopArea()](#istoparea)
  - [isValidGridElement()](#isvalidgridelement)
  - [isValidMarkElement()](#isvalidmarkelement)
  - [isValidMeasureElement()](#isvalidmeasureelement)
  - [isValidPinElement()](#isvalidpinelement)
  - [isValidSpacingElement()](#isvalidspacingelement)
  - [isValidTypographyElement()](#isvalidtypographyelement)
  - [isWidthArea()](#iswidtharea)
  - [useSVG()](#usesvg)
  - [useSyntaxHighlighting()](#usesyntaxhighlighting)

## Functions

### getAreasFromString()

```ts
function getAreasFromString(areaString): string[];
```

Defined in: [src/utils/area.ts:22](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L22)

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

Defined in: [src/utils/area.ts:73](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L73)

Checks if 'bottom' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'bottom' is present, otherwise `false`.

---

### isBracketArea()

```ts
function isBracketArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:87](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L87)

Checks if 'bracket' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'bracket' is present, otherwise `false`.

---

### isCurly()

```ts
function isCurly(areaString): boolean;
```

Defined in: [src/utils/area.ts:220](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L220)

Checks if the provided areaString contains 'curly' and 'bracket' areas.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if both 'curly' and 'bracket' are present, otherwise `false`.

---

### isEncloseArea()

```ts
function isEncloseArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:101](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L101)

Checks if 'enclose' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'enclose' is present, otherwise `false`.

---

### isHeightArea()

```ts
function isHeightArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:157](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L157)

Checks if 'height' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'height' is present, otherwise `false`.

---

### isLeftArea()

```ts
function isLeftArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:31](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L31)

Checks if 'left' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'left' is present, otherwise `false`.

---

### isParentArea()

```ts
function isParentArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:129](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L129)

Checks if 'parent' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'parent' is present, otherwise `false`.

---

### isRightArea()

```ts
function isRightArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:45](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L45)

Checks if 'right' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'right' is present, otherwise `false`.

---

### isSlimArea()

```ts
function isSlimArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:171](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L171)

Checks if 'slim' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'slim' is present, otherwise `false`.

---

### isSubtle()

```ts
function isSubtle(areaString): boolean;
```

Defined in: [src/utils/area.ts:115](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L115)

Checks if 'subtle' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'subtle' is present, otherwise `false`.

---

### isTextArea()

```ts
function isTextArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:143](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L143)

Checks if 'text' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'text' is present, otherwise `false`.

---

### isTopArea()

```ts
function isTopArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:59](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L59)

Checks if 'top' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'top' is present, otherwise `false`.

---

### isValidGridElement()

```ts
function isValidGridElement(areaString, styles): boolean;
```

Defined in: [src/utils/area.ts:285](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L285)

Checks if the provided areaString contains 'grid'.

#### Parameters

| Parameter    | Type                                                                                    | Description                  |
| ------------ | --------------------------------------------------------------------------------------- | ---------------------------- |
| `areaString` | `null` \| `string`                                                                      | The string containing areas. |
| `styles`     | [`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration) | -                            |

#### Returns

`boolean`

boolean `true` if 'grid' are present, otherwise `false`.

---

### isValidMarkElement()

```ts
function isValidMarkElement(areaString): boolean;
```

Defined in: [src/utils/area.ts:275](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L275)

Checks if the provided areaString contains 'mark'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'mark' are present, otherwise `false`.

---

### isValidMeasureElement()

```ts
function isValidMeasureElement(areaString): boolean;
```

Defined in: [src/utils/area.ts:256](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L256)

Checks if the provided areaString contains 'measure'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'measure' are present, otherwise `false`.

---

### isValidPinElement()

```ts
function isValidPinElement(areaString): boolean;
```

Defined in: [src/utils/area.ts:266](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L266)

Checks if the provided areaString contains 'pin'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'pin' are present, otherwise `false`.

---

### isValidSpacingElement()

```ts
function isValidSpacingElement(areaString): boolean;
```

Defined in: [src/utils/area.ts:246](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L246)

Checks if the provided areaString contains 'spacing'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'spacing' are present, otherwise `false`.

---

### isValidTypographyElement()

```ts
function isValidTypographyElement(areaString): boolean;
```

Defined in: [src/utils/area.ts:236](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L236)

Checks if the provided areaString contains 'typography'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'typography' are present, otherwise `false`.

---

### isWidthArea()

```ts
function isWidthArea(areaString): boolean;
```

Defined in: [src/utils/area.ts:185](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L185)

Checks if 'width' area is present in the provided areaString.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if 'width' is present, otherwise `false`.

---

### useSVG()

```ts
function useSVG(areaString): boolean;
```

Defined in: [src/utils/area.ts:199](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L199)

Checks if the provided areaString contains SVG-related areas.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if any SVG-related area is present, otherwise `false`.

---

### useSyntaxHighlighting()

```ts
function useSyntaxHighlighting(areaString): boolean;
```

Defined in: [src/utils/area.ts:299](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L299)

Checks if the provided areaString contains 'syntax'.

#### Parameters

| Parameter    | Type               | Description                  |
| ------------ | ------------------ | ---------------------------- |
| `areaString` | `null` \| `string` | The string containing areas. |

#### Returns

`boolean`

boolean `true` if both 'syntax' are present, otherwise `false`.

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
