[@phun-ky/speccer](../README.md) / types/bezier

# Module: types/bezier

## Type Aliases

### BezierPathOptionsType

Ƭ **BezierPathOptionsType**: `Object`

Options for creating a bezier path.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos1` | `string` | The first position. |
| `pos2` | `string` | The second position. |

#### Defined in

[types/bezier.ts:41](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L41)

___

### CreateCoordinatesForCurveCoordParamType

Ƭ **CreateCoordinatesForCurveCoordParamType**: `Object`

Parameters for creating coordinates for a curve.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The x-coordinate of the first point. |
| `x2` | `number` | The x-coordinate of the second point. |
| `y1` | `number` | The y-coordinate of the first point. |
| `y2` | `number` | The y-coordinate of the second point. |

#### Defined in

[types/bezier.ts:56](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L56)

___

### CreateCoordinatesForCurveOptionsParamType

Ƭ **CreateCoordinatesForCurveOptionsParamType**: `Object`

Options for creating coordinates for a curve.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `direct?` | `boolean` | Indicates whether the curve is direct. |
| `direction` | `string` | The direction of the curve. |
| `firstSet?` | `boolean` | Indicates if this is the first set of coordinates. |

#### Defined in

[types/bezier.ts:81](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L81)

___

### CurlyBezierPathOptionsType

Ƭ **CurlyBezierPathOptionsType**: `Object`

Options for creating a curly bezier path.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | `string` | The direction of the path. |
| `firstSet?` | `boolean` | Indicates if this is the first part of the curly bracket or not. |
| `pos1` | `string` | The first position. |
| `pos2` | `string` | The second position. |

#### Defined in

[types/bezier.ts:16](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L16)

___

### DissectStylesOptionsType

Ƭ **DissectStylesOptionsType**: `Record`<`string`, `never`\> \| { `isCurly?`: `boolean`  }

Options for dissect styles.

#### Defined in

[types/bezier.ts:4](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L4)
