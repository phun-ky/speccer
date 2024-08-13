[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/angle](../README.md) / angle

# Function: angle()

> **angle**(`cx`, `cy`, `ex`, `ey`, `normalize`?): `number`

Returns the angle between two sets of coordinates.

## Parameters

• **cx**: `number`

The x-coordinate of the first point.

• **cy**: `number`

The y-coordinate of the first point.

• **ex**: `number`

The x-coordinate of the second point.

• **ey**: `number`

The y-coordinate of the second point.

• **normalize?**: `boolean` = `true`

If the angle output should be normalized to a value between 0° and 360°.

## Returns

`number`

The angle between the given coordinates.

## Throws

Missing input for `angle`.

## Throws

Parameters for `angle` do not have the required type.

## Example

```ts
// Calculate the angle between two points
const angleValue = angle(0, 0, 3, 4);
```

## Defined in

[utils/angle.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/angle.ts#L20)