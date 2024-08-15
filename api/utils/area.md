<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/area

# utils/area

> Last updated 2024-08-15T07:39:37.328Z

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

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'bottom' is present, otherwise `false`.

#### Defined in

[utils/area.ts:60](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L60)

---

### isCurly()

```ts
function isCurly(areaString): boolean;
```

Checks if the provided areaString contains 'curly' and 'full' areas.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if both 'curly' and 'full' are present, otherwise `false`.

#### Defined in

[utils/area.ts:153](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L153)

---

### isEncloseArea()

```ts
function isEncloseArea(areaString): boolean;
```

Checks if 'enclose' area is present in the provided areaString.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'enclose' is present, otherwise `false`.

#### Defined in

[utils/area.ts:84](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L84)

---

### isFullArea()

```ts
function isFullArea(areaString): boolean;
```

Checks if 'full' area is present in the provided areaString.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'full' is present, otherwise `false`.

#### Defined in

[utils/area.ts:72](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L72)

---

### isHeightArea()

```ts
function isHeightArea(areaString): boolean;
```

Checks if 'height' area is present in the provided areaString.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'height' is present, otherwise `false`.

#### Defined in

[utils/area.ts:120](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L120)

---

### isLeftArea()

```ts
function isLeftArea(areaString): boolean;
```

Checks if 'left' area is present in the provided areaString.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'left' is present, otherwise `false`.

#### Defined in

[utils/area.ts:24](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L24)

---

### isParentArea()

```ts
function isParentArea(areaString): boolean;
```

Checks if 'parent' area is present in the provided areaString.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'parent' is present, otherwise `false`.

#### Defined in

[utils/area.ts:108](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L108)

---

### isRightArea()

```ts
function isRightArea(areaString): boolean;
```

Checks if 'right' area is present in the provided areaString.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'right' is present, otherwise `false`.

#### Defined in

[utils/area.ts:36](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L36)

---

### isSubtle()

```ts
function isSubtle(areaString): boolean;
```

Checks if 'subtle' area is present in the provided areaString.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'subtle' is present, otherwise `false`.

#### Defined in

[utils/area.ts:96](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L96)

---

### isTopArea()

```ts
function isTopArea(areaString): boolean;
```

Checks if 'top' area is present in the provided areaString.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'top' is present, otherwise `false`.

#### Defined in

[utils/area.ts:48](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L48)

---

### isWidthArea()

```ts
function isWidthArea(areaString): boolean;
```

Checks if 'width' area is present in the provided areaString.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'width' is present, otherwise `false`.

#### Defined in

[utils/area.ts:132](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L132)

---

### useSVG()

```ts
function useSVG(areaString): boolean;
```

Checks if the provided areaString contains SVG-related areas.

#### Parameters

| Parameter    | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if any SVG-related area is present, otherwise `false`.

#### Defined in

[utils/area.ts:144](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L144)

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
