[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/bezier](../README.md) / createBezierCurveCoordinates

# Function: createBezierCurveCoordinates()

> **createBezierCurveCoordinates**(`coords`, `options`): `object`

Calculates coordinates for a Bezier curve between two points.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `coords` | [`CreateCoordinatesForCurveCoordParamType`](../../../types/bezier/type-aliases/CreateCoordinatesForCurveCoordParamType.md) | The coordinates of the start and end points. |
| `options` | [`CreateCoordinatesForCurveOptionsParamType`](../../../types/bezier/type-aliases/CreateCoordinatesForCurveOptionsParamType.md) | Options for controlling the curve's shape. |

## Returns

`object`

Coordinates for the Bezier curve.

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `firstControl` | `object` | - | [utils/bezier.ts:71](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L71) |
| `firstControl.x` | `number` | - | [utils/bezier.ts:34](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L34) |
| `firstControl.y` | `number` | y1 | [utils/bezier.ts:34](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L34) |
| `firstPoint` | `object` | - | [utils/bezier.ts:70](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L70) |
| `firstPoint.x` | `number` | x1 | [utils/bezier.ts:31](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L31) |
| `firstPoint.y` | `number` | y1 | [utils/bezier.ts:31](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L31) |
| `lastControl` | `object` | - | [utils/bezier.ts:73](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L73) |
| `lastControl.x` | `number` | - | [utils/bezier.ts:35](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L35) |
| `lastControl.y` | `number` | y2 | [utils/bezier.ts:35](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L35) |
| `lastPoint` | `object` | - | [utils/bezier.ts:72](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L72) |
| `lastPoint.x` | `number` | x2 | [utils/bezier.ts:32](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L32) |
| `lastPoint.y` | `number` | y2 | [utils/bezier.ts:32](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L32) |

## Example

```ts
const coordinates = createBezierCurveCoordinates(
  { x1: 0, x2: 100, y1: 0, y2: 100 },
  { direct: true, firstSet: true, direction: 'west' }
);
```

## Defined in

[utils/bezier.ts:25](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L25)
