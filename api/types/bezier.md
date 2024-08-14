[**@phun-ky/speccer**](../README.md) • **Docs**

***

[@phun-ky/speccer](../README.md) / types/bezier

# types/bezier

## Type Aliases

### BezierPathOptionsType

> **BezierPathOptionsType**: `object`

Options for creating a bezier path.

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`pos1`

</td>
<td>

`string`

</td>
<td>

The first position.

</td>
<td>

[types/bezier.ts:46](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L46)

</td>
</tr>
<tr>
<td>

`pos2`

</td>
<td>

`string`

</td>
<td>

The second position.

</td>
<td>

[types/bezier.ts:51](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L51)

</td>
</tr>
</table>

#### Defined in

[types/bezier.ts:42](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L42)

***

### CreateCoordinatesForCurveCoordParamType

> **CreateCoordinatesForCurveCoordParamType**: `object`

Parameters for creating coordinates for a curve.

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`x1`

</td>
<td>

`number`

</td>
<td>

The x-coordinate of the first point.

</td>
<td>

[types/bezier.ts:61](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L61)

</td>
</tr>
<tr>
<td>

`x2`

</td>
<td>

`number`

</td>
<td>

The x-coordinate of the second point.

</td>
<td>

[types/bezier.ts:66](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L66)

</td>
</tr>
<tr>
<td>

`y1`

</td>
<td>

`number`

</td>
<td>

The y-coordinate of the first point.

</td>
<td>

[types/bezier.ts:71](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L71)

</td>
</tr>
<tr>
<td>

`y2`

</td>
<td>

`number`

</td>
<td>

The y-coordinate of the second point.

</td>
<td>

[types/bezier.ts:76](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L76)

</td>
</tr>
</table>

#### Defined in

[types/bezier.ts:57](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L57)

***

### CreateCoordinatesForCurveOptionsParamType

> **CreateCoordinatesForCurveOptionsParamType**: `object`

Options for creating coordinates for a curve.

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`direct`

</td>
<td>

`boolean`

</td>
<td>

Indicates whether the curve is direct.

</td>
<td>

[types/bezier.ts:86](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L86)

</td>
</tr>
<tr>
<td>

`direction`

</td>
<td>

`string`

</td>
<td>

The direction of the curve.

</td>
<td>

[types/bezier.ts:96](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L96)

</td>
</tr>
<tr>
<td>

`firstSet`

</td>
<td>

`boolean`

</td>
<td>

Indicates if this is the first set of coordinates.

</td>
<td>

[types/bezier.ts:91](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L91)

</td>
</tr>
</table>

#### Defined in

[types/bezier.ts:82](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L82)

***

### CurlyBezierPathOptionsType

> **CurlyBezierPathOptionsType**: `object`

Options for creating a curly bezier path.

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`direction`

</td>
<td>

`string`

</td>
<td>

The direction of the path.

</td>
<td>

[types/bezier.ts:36](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L36)

</td>
</tr>
<tr>
<td>

`firstSet`

</td>
<td>

`boolean`

</td>
<td>

Indicates if this is the first part of the curly bracket or not.

</td>
<td>

[types/bezier.ts:31](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L31)

</td>
</tr>
<tr>
<td>

`pos1`

</td>
<td>

`string`

</td>
<td>

The first position.

</td>
<td>

[types/bezier.ts:21](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L21)

</td>
</tr>
<tr>
<td>

`pos2`

</td>
<td>

`string`

</td>
<td>

The second position.

</td>
<td>

[types/bezier.ts:26](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L26)

</td>
</tr>
</table>

#### Defined in

[types/bezier.ts:17](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L17)

***

### DissectStylesOptionsType

> **DissectStylesOptionsType**: `Record`\<`string`, `never`\> \| `object`

Options for dissect styles.

#### Defined in

[types/bezier.ts:5](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L5)
