[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/cardinal](../README.md) / cardinal\_direction

# Function: cardinal\_direction()

> **cardinal\_direction**(`degrees`): `string`

Gives you the cardinal direction based on degrees.
Note: The degrees start at 0, which is EAST (originally, north should be 0, but here, north is 270),
and we travel clockwise.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `degrees` | `number` | The angle in degrees. |

## Returns

`string`

- The cardinal direction.

## Throws

Parameter cannot exceed 360.

## Throws

Parameter cannot be lower than 0.

## Example

```ts
// Get the cardinal direction for an angle in degrees
const direction = cardinal_direction(45);
```

## Defined in

[utils/cardinal.ts:18](https://github.com/phun-ky/speccer/blob/main/src/utils/cardinal.ts#L18)
