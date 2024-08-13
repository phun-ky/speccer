[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/get-coords-pair-from-objects](../README.md) / getCoordsPairFromObjects

# Function: getCoordsPairFromObjects()

> **getCoordsPairFromObjects**(`el1`, `el2`, `pos1`?, `pos2`?): `Promise`\<`object`\>

Get the x and y coordinates of two elements and return them as an object.

## Parameters

• **el1**: `HTMLElement`

The first HTML element.

• **el2**: `HTMLElement`

The second HTML element.

• **pos1?**: `string` = `'center'`

The position to use for the first element.

• **pos2?**: `string` = `'center'`

The position to use for the second element.

## Returns

`Promise`\<`object`\>

- An object containing the coordinates.

### x1

> **x1**: `number`

### x2

> **x2**: `number`

### y1

> **y1**: `number`

### y2

> **y2**: `number`

## Throws

No element given.

## Example

```ts
// Get coordinates for two elements
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');
const coordinates = await get_coords_pair_from_objects(element1, element2);
```

## Defined in

[utils/get-coords-pair-from-objects.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/get-coords-pair-from-objects.ts#L20)
