<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / types/bezier

# types/bezier

> Last updated 2024-11-19T08:01:30.479Z

## Type Aliases

### BezierPathOptionsType

```ts
type BezierPathOptionsType: {
  pos1: string;
  pos2: string;
};
```

Options for creating a bezier path.

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
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

[types/bezier.ts:33](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L33)

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

[types/bezier.ts:38](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L38)

</td>
</tr>
</tbody>
</table>

#### Defined in

[types/bezier.ts:29](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L29)

---

### CoordinatesForBezierObjectType

```ts
type CoordinatesForBezierObjectType: {
  firstControl: CoordinatesType;
  firstPoint: CoordinatesType;
  lastControl: CoordinatesType;
  lastPoint: CoordinatesType;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`firstControl`

</td>
<td>

[`CoordinatesType`](bezier.md#coordinatestype)

</td>
<td>

[types/bezier.ts:48](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L48)

</td>
</tr>
<tr>
<td>

`firstPoint`

</td>
<td>

[`CoordinatesType`](bezier.md#coordinatestype)

</td>
<td>

[types/bezier.ts:47](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L47)

</td>
</tr>
<tr>
<td>

`lastControl`

</td>
<td>

[`CoordinatesType`](bezier.md#coordinatestype)

</td>
<td>

[types/bezier.ts:50](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L50)

</td>
</tr>
<tr>
<td>

`lastPoint`

</td>
<td>

[`CoordinatesType`](bezier.md#coordinatestype)

</td>
<td>

[types/bezier.ts:49](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L49)

</td>
</tr>
</tbody>
</table>

#### Defined in

[types/bezier.ts:46](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L46)

---

### CoordinatesType

```ts
type CoordinatesType: {
  x: number;
  y: number;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`x`

</td>
<td>

`number`

</td>
<td>

[types/bezier.ts:42](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L42)

</td>
</tr>
<tr>
<td>

`y`

</td>
<td>

`number`

</td>
<td>

[types/bezier.ts:43](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L43)

</td>
</tr>
</tbody>
</table>

#### Defined in

[types/bezier.ts:41](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L41)

---

### CreateCoordinatesForCurveCoordParamType

```ts
type CreateCoordinatesForCurveCoordParamType: {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};
```

Parameters for creating coordinates for a curve.

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
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

[types/bezier.ts:60](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L60)

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

[types/bezier.ts:65](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L65)

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

[types/bezier.ts:70](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L70)

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

[types/bezier.ts:75](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L75)

</td>
</tr>
</tbody>
</table>

#### Defined in

[types/bezier.ts:56](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L56)

---

### CreateCoordinatesForCurveOptionsParamType

```ts
type CreateCoordinatesForCurveOptionsParamType: {
  direct: boolean;
  direction: string;
  firstSet: boolean;
};
```

Options for creating coordinates for a curve.

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`direct`?

</td>
<td>

`boolean`

</td>
<td>

Indicates whether the curve is direct.

</td>
<td>

[types/bezier.ts:85](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L85)

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

[types/bezier.ts:95](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L95)

</td>
</tr>
<tr>
<td>

`firstSet`?

</td>
<td>

`boolean`

</td>
<td>

Indicates if this is the first set of coordinates.

</td>
<td>

[types/bezier.ts:90](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L90)

</td>
</tr>
</tbody>
</table>

#### Defined in

[types/bezier.ts:81](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L81)

---

### CurlyBezierPathOptionsType

```ts
type CurlyBezierPathOptionsType: {
  direction: string;
  firstSet: boolean;
  pos1: string;
  pos2: string;
};
```

Options for creating a curly bezier path.

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
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

[types/bezier.ts:23](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L23)

</td>
</tr>
<tr>
<td>

`firstSet`?

</td>
<td>

`boolean`

</td>
<td>

Indicates if this is the first part of the curly bracket or not.

</td>
<td>

[types/bezier.ts:18](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L18)

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

[types/bezier.ts:8](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L8)

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

[types/bezier.ts:13](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L13)

</td>
</tr>
</tbody>
</table>

#### Defined in

[types/bezier.ts:4](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L4)

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
