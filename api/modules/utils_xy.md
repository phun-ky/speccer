[@phun-ky/speccer](../README.md) / utils/xy

# Module: utils/xy

## Variables

### xy

• `Const` **xy**: `Object`

Object containing functions to retrieve specific x and y coordinates from a DOMRect.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bottom` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the bottom center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const bottomCenterCoordinates = xy.bottom(rect); // bottomCenterCoordinates.x and bottomCenterCoordinates.y will contain the coordinates ``` |
| `bottom-center` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the bottom center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const bottomCenterCoordinates = xy['bottom-center'](rect); // bottomCenterCoordinates.x and bottomCenterCoordinates.y will contain the coordinates ``` |
| `bottom-left` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the bottom left of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const bottomLeftCoordinates = xy['bottom-left'](rect); // bottomLeftCoordinates.x and bottomLeftCoordinates.y will contain the coordinates ``` |
| `bottom-right` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the bottom right of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const bottomRight = xy['bottom-right'](rect); // bottomRight.x and bottomRight.y will contain the coordinates ``` |
| `center` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const centerCoordinates = xy.center(rect); // centerCoordinates.x and centerCoordinates.y will contain the coordinates ``` |
| `left` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the left of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const leftCoordinates = xy.left(rect); // leftCoordinates.x and leftCoordinates.y will contain the coordinates ``` |
| `left-bottom` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the left bottom of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const leftBottomCoordinates = xy['left-bottom'](rect); // leftBottomCoordinates.x and leftBottomCoordinates.y will contain the coordinates ``` |
| `left-center` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the left center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const leftCenterCoordinates = xy['left-center'](rect); // leftCenterCoordinates.x and leftCenterCoordinates.y will contain the coordinates ``` |
| `left-top` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the left top of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const leftTop = xy['left-top'](rect); // leftTop.x and leftTop.y will contain the coordinates ``` |
| `right` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the right center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const rightCenterCoordinates = xy.right(rect); // rightCenterCoordinates.x and rightCenterCoordinates.y will contain the coordinates ``` |
| `right-bottom` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the right bottom of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const rightBottomCoordinates = xy['right-bottom'](rect); // rightBottomCoordinates.x and rightBottomCoordinates.y will contain the coordinates ``` |
| `right-center` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the right center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const rightCenterCoordinates = xy['right-center'](rect); // rightCenterCoordinates.x and rightCenterCoordinates.y will contain the coordinates ``` |
| `right-top` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | - |
| `top` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the top center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const topCenterCoordinates = xy.top(rect); // topCenterCoordinates.x and topCenterCoordinates.y will contain the coordinates ``` |
| `top-center` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the top center of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const topCenterCoordinates = xy['top-center'](rect); // topCenterCoordinates.x and topCenterCoordinates.y will contain the coordinates ``` |
| `top-left` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the top left of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const topLeftCoordinates = xy['top-left'](rect); // topLeftCoordinates.x and topLeftCoordinates.y will contain the coordinates ``` |
| `top-right` | (`rect`: `DOMRect`) => \{ `x`: `number` ; `y`: `number`  } | Get the x and y coordinates of the top right of a DOMRect. **`Example`** ```ts const rect = element.getBoundingClientRect(); const topRightCoordinates = xy['top-right'](rect); // topRightCoordinates.x and topRightCoordinates.y will contain the coordinates ``` |

#### Defined in

[utils/xy.ts:6](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L6)
