[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/intrinsic-coords](../README.md) / intrinsic\_coords

# Function: intrinsic\_coords()

> **intrinsic\_coords**(`el`, `pos`?): `Promise`\<`object`\>

Get the intrinsic coordinates of an element based on a specified position.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `el` | `HTMLElement` | `undefined` | The HTML element. |
| `pos`? | `string` | `'center'` | The position to use. |

## Returns

`Promise`\<`object`\>

- An object containing the coordinates.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `x` | `number` | [utils/intrinsic-coords.ts:23](https://github.com/phun-ky/speccer/blob/main/src/utils/intrinsic-coords.ts#L23) |
| `y` | `number` | [utils/intrinsic-coords.ts:23](https://github.com/phun-ky/speccer/blob/main/src/utils/intrinsic-coords.ts#L23) |

## Throws

No position given.

## Throws

The position given is not the required type.

## Example

```ts
// Get intrinsic coordinates for an element
const element = document.getElementById('example');
const coordinates = await intrinsic_coords(element, 'top-left');
```

## Defined in

[utils/intrinsic-coords.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/intrinsic-coords.ts#L20)
