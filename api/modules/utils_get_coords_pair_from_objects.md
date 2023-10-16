[@phun-ky/speccer](../README.md) / utils/get-coords-pair-from-objects

# Module: utils/get-coords-pair-from-objects

## Functions

### getCoordsPairFromObjects

▸ **getCoordsPairFromObjects**(`el1`, `el2`, `pos1?`, `pos2?`): `Promise`<{ `x1`: `number` ; `x2`: `number` ; `y1`: `number` ; `y2`: `number`  }\>

Get the x and y coordinates of two elements and return them as an object.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `el1` | `HTMLElement` | `undefined` | The first HTML element. |
| `el2` | `HTMLElement` | `undefined` | The second HTML element. |
| `pos1?` | `string` | `'center'` | The position to use for the first element. |
| `pos2?` | `string` | `'center'` | The position to use for the second element. |

#### Returns

`Promise`<{ `x1`: `number` ; `x2`: `number` ; `y1`: `number` ; `y2`: `number`  }\>

- An object containing the coordinates.

**`Throws`**

No element given.

**`Example`**

```ts
// Get coordinates for two elements
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');
const coordinates = await get_coords_pair_from_objects(element1, element2);
```

#### Defined in

[utils/get-coords-pair-from-objects.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/get-coords-pair-from-objects.ts#L20)
