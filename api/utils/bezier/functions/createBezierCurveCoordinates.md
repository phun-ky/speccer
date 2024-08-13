[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/bezier](../README.md) / createBezierCurveCoordinates

# Function: createBezierCurveCoordinates()

> **createBezierCurveCoordinates**(`coords`, `options`): `object`

Calculates coordinates for a Bezier curve between two points.

## Parameters

• **coords**: [`CreateCoordinatesForCurveCoordParamType`](../../../types/bezier/type-aliases/CreateCoordinatesForCurveCoordParamType.md)

The coordinates of the start and end points.

• **options**: [`CreateCoordinatesForCurveOptionsParamType`](../../../types/bezier/type-aliases/CreateCoordinatesForCurveOptionsParamType.md)

Options for controlling the curve's shape.

## Returns

`object`

Coordinates for the Bezier curve.

### firstControl

> **firstControl**: `object`

### firstControl.x

> **x**: `number`

### firstControl.y

> **y**: `number` = `y1`

### firstPoint

> **firstPoint**: `object`

### firstPoint.x

> **x**: `number` = `x1`

### firstPoint.y

> **y**: `number` = `y1`

### lastControl

> **lastControl**: `object`

### lastControl.x

> **x**: `number`

### lastControl.y

> **y**: `number` = `y2`

### lastPoint

> **lastPoint**: `object`

### lastPoint.x

> **x**: `number` = `x2`

### lastPoint.y

> **y**: `number` = `y2`

## Example

```ts
const coordinates = createBezierCurveCoordinates(
  { x1: 0, x2: 100, y1: 0, y2: 100 },
  { direct: true, firstSet: true, direction: 'west' }
);
```

## Defined in

[utils/bezier.ts:25](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L25)
