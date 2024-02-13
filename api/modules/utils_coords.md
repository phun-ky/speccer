[@phun-ky/speccer](../README.md) / utils/coords

# Module: utils/coords

## Variables

### coords

• `Const` **coords**: `Object`

A set of functions to retrieve specific coordinates from a DOMRect.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bottom` | (`rect`: `DOMRect`) => `number` | Get the bottom coordinate of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const bottomCoordinate = coords.bottom(rect); ``` |
| `center_x` | (`rect`: `DOMRect`) => `number` | Get the x-coordinate of the center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const centerXCoordinate = coords.center_x(rect); ``` |
| `center_y` | (`rect`: `DOMRect`) => `number` | Get the y-coordinate of the center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const centerYCoordinate = coords.center_y(rect); ``` |
| `left` | (`rect`: `DOMRect`) => `number` | Get the left coordinate of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const leftCoordinate = coords.left(rect); ``` |
| `right` | (`rect`: `DOMRect`) => `number` | Get the right coordinate of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const rightCoordinate = coords.right(rect); ``` |
| `top` | (`rect`: `DOMRect`) => `number` | Get the top coordinate of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const topCoordinate = coords.top(rect); ``` |

#### Defined in

[utils/coords.ts:4](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L4)
