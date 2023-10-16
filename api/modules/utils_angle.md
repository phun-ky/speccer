[@phun-ky/speccer](../README.md) / utils/angle

# Module: utils/angle

## Functions

### angle

▸ **angle**(`cx`, `cy`, `ex`, `ey`, `normalize?`): `number`

Returns the angle between two sets of coordinates.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cx` | `number` | `undefined` | The x-coordinate of the first point. |
| `cy` | `number` | `undefined` | The y-coordinate of the first point. |
| `ex` | `number` | `undefined` | The x-coordinate of the second point. |
| `ey` | `number` | `undefined` | The y-coordinate of the second point. |
| `normalize?` | `boolean` | `true` | If the angle output should be normalized to a value between 0° and 360°. |

#### Returns

`number`

The angle between the given coordinates.

**`Throws`**

Missing input for `angle`.

**`Throws`**

Parameters for `angle` do not have the required type.

**`Example`**

```ts
// Calculate the angle between two points
const angleValue = angle(0, 0, 3, 4);
```

#### Defined in

[utils/angle.ts:18](https://github.com/phun-ky/speccer/blob/main/src/utils/angle.ts#L18)
