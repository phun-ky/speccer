[@phun-ky/speccer](../README.md) / utils/intrinsic-coords

# Module: utils/intrinsic-coords

## Functions

### intrinsic\_coords

▸ **intrinsic_coords**(`el`, `pos?`): `Promise`<{ `x`: `number` ; `y`: `number`  }\>

Get the intrinsic coordinates of an element based on a specified position.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `el` | `HTMLElement` | `undefined` | The HTML element. |
| `pos?` | `string` | `'center'` | The position to use. |

#### Returns

`Promise`<{ `x`: `number` ; `y`: `number`  }\>

- An object containing the coordinates.

**`Throws`**

No position given.

**`Throws`**

The position given is not the required type.

**`Example`**

```ts
// Get intrinsic coordinates for an element
const element = document.getElementById('example');
const coordinates = await intrinsic_coords(element, 'top-left');
```

#### Defined in

[utils/intrinsic-coords.ts:19](https://github.com/phun-ky/speccer/blob/main/src/utils/intrinsic-coords.ts#L19)
