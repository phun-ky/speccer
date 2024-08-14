[**@phun-ky/speccer**](../README.md) • **Docs**

***

[@phun-ky/speccer](../README.md) / utils/area

# utils/area

## Functions

### getAreasFromString()

> **getAreasFromString**(`areaString`): `string`[]

Splits a string containing areas into an array of strings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`string`[]

An array of area strings.

#### Example

```ts
const areas = getAreasFromString('left right top');
// areas: ['left', 'right', 'top']
```

#### Defined in

[utils/area.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L15)

***

### isBottomArea()

> **isBottomArea**(`areaString`): `boolean`

Checks if 'bottom' area is present in the provided areaString.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'bottom' is present, otherwise `false`.

#### Defined in

[utils/area.ts:60](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L60)

***

### isCurly()

> **isCurly**(`areaString`): `boolean`

Checks if the provided areaString contains 'curly' and 'full' areas.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if both 'curly' and 'full' are present, otherwise `false`.

#### Defined in

[utils/area.ts:129](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L129)

***

### isEncloseArea()

> **isEncloseArea**(`areaString`): `boolean`

Checks if 'enclose' area is present in the provided areaString.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'enclose' is present, otherwise `false`.

#### Defined in

[utils/area.ts:84](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L84)

***

### isFullArea()

> **isFullArea**(`areaString`): `boolean`

Checks if 'full' area is present in the provided areaString.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'full' is present, otherwise `false`.

#### Defined in

[utils/area.ts:72](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L72)

***

### isHeightArea()

> **isHeightArea**(`areaString`): `boolean`

Checks if 'height' area is present in the provided areaString.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'height' is present, otherwise `false`.

#### Defined in

[utils/area.ts:96](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L96)

***

### isLeftArea()

> **isLeftArea**(`areaString`): `boolean`

Checks if 'left' area is present in the provided areaString.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'left' is present, otherwise `false`.

#### Defined in

[utils/area.ts:24](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L24)

***

### isRightArea()

> **isRightArea**(`areaString`): `boolean`

Checks if 'right' area is present in the provided areaString.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'right' is present, otherwise `false`.

#### Defined in

[utils/area.ts:36](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L36)

***

### isTopArea()

> **isTopArea**(`areaString`): `boolean`

Checks if 'top' area is present in the provided areaString.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'top' is present, otherwise `false`.

#### Defined in

[utils/area.ts:48](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L48)

***

### isWidthArea()

> **isWidthArea**(`areaString`): `boolean`

Checks if 'width' area is present in the provided areaString.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if 'width' is present, otherwise `false`.

#### Defined in

[utils/area.ts:108](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L108)

***

### useSVG()

> **useSVG**(`areaString`): `boolean`

Checks if the provided areaString contains SVG-related areas.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `areaString` | `string` | The string containing areas. |

#### Returns

`boolean`

`true` if any SVG-related area is present, otherwise `false`.

#### Defined in

[utils/area.ts:120](https://github.com/phun-ky/speccer/blob/main/src/utils/area.ts#L120)
