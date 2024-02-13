[@phun-ky/speccer](../README.md) / utils/bezier

# Module: utils/bezier

## Functions

### createBezierCurveCoordinates

▸ **createBezierCurveCoordinates**(`coords`, `options`): `Object`

Calculates coordinates for a Bezier curve between two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coords` | [`CreateCoordinatesForCurveCoordParamType`](types_bezier.md#createcoordinatesforcurvecoordparamtype) | The coordinates of the start and end points. |
| `options` | [`CreateCoordinatesForCurveOptionsParamType`](types_bezier.md#createcoordinatesforcurveoptionsparamtype) | Options for controlling the curve's shape. |

#### Returns

`Object`

Coordinates for the Bezier curve.

| Name | Type |
| :------ | :------ |
| `firstControl` | \{ `x`: `number` ; `y`: `number` = y1 } |
| `firstControl.x` | `number` |
| `firstControl.y` | `number` |
| `firstPoint` | \{ `x`: `number` = x1; `y`: `number` = y1 } |
| `firstPoint.x` | `number` |
| `firstPoint.y` | `number` |
| `lastControl` | \{ `x`: `number` ; `y`: `number` = y2 } |
| `lastControl.x` | `number` |
| `lastControl.y` | `number` |
| `lastPoint` | \{ `x`: `number` = x2; `y`: `number` = y2 } |
| `lastPoint.x` | `number` |
| `lastPoint.y` | `number` |

**`Example`**

```ts
const coordinates = createBezierCurveCoordinates(
  { x1: 0, x2: 100, y1: 0, y2: 100 },
  { direct: true, firstSet: true, direction: 'west' }
);
```

#### Defined in

[utils/bezier.ts:25](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L25)

___

### getCurlySVGPath

▸ **getCurlySVGPath**(`startEl`, `stopEl`, `options`): `Promise`\<`string`\>

Generates an SVG path for a curved line between two HTML elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startEl` | `HTMLElement` | The starting HTML element. |
| `stopEl` | `HTMLElement` | The ending HTML element. |
| `options` | [`CurlyBezierPathOptionsType`](types_bezier.md#curlybezierpathoptionstype) | Options for controlling the curved line. |

#### Returns

`Promise`\<`string`\>

The SVG path string for the curved line.

**`Example`**

```ts
const svgPath = getCurlySVGPath(startElement, stopElement, {
  pos1: 'top',
  pos2: 'bottom',
  firstSet: true,
  direction: 'south',
});
```

#### Defined in

[utils/bezier.ts:95](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L95)

___

### getPositionsForCurlySVGPath

▸ **getPositionsForCurlySVGPath**(`direction`): `Object`

Returns positions for creating an SVG path for a curved line based on a cardinal direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | `string` | The cardinal direction ('east', 'west', 'south', 'north'). |

#### Returns

`Object`

Positions for creating an SVG path for a curved line.

| Name | Type |
| :------ | :------ |
| `path1pos1` | `string` |
| `path1pos2` | `string` |
| `path2pos1` | `string` |
| `path2pos2` | `string` |

**`Example`**

```ts
const positions = getPositionsForCurlySVGPath('west');
```

#### Defined in

[utils/bezier.ts:226](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L226)

___

### getPositionsForSVGPath

▸ **getPositionsForSVGPath**(`direction`): `Object`

Returns positions for creating an SVG path based on a cardinal direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | `string` | The cardinal direction ('east', 'west', 'south', 'north'). |

#### Returns

`Object`

Positions for creating an SVG path.

| Name | Type |
| :------ | :------ |
| `pos1` | `string` |
| `pos2` | `string` |

**`Example`**

```ts
const positions = getPositionsForSVGPath('east');
```

#### Defined in

[utils/bezier.ts:188](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L188)

___

### getSVGPath

▸ **getSVGPath**(`startEl`, `stopEl`, `options`): `Promise`\<`string`\>

Generates an SVG path for a straight line between two HTML elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startEl` | `HTMLElement` | The starting HTML element. |
| `stopEl` | `HTMLElement` | The ending HTML element. |
| `options` | [`BezierPathOptionsType`](types_bezier.md#bezierpathoptionstype) | Options for controlling the straight line. |

#### Returns

`Promise`\<`string`\>

The SVG path string for the straight line.

**`Example`**

```ts
const svgPath = getSVGPath(startElement, stopElement, {
  pos1: 'left',
  pos2: 'right',
});
```

#### Defined in

[utils/bezier.ts:156](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L156)
