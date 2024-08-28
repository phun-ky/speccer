<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / types/bezier

# types/bezier

> Last updated 2024-08-28T10:13:18.048Z

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
</table>

#### Defined in

[types/bezier.ts:29](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L29)

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

[types/bezier.ts:48](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L48)

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

[types/bezier.ts:53](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L53)

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

[types/bezier.ts:58](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L58)

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

[types/bezier.ts:63](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L63)

</td>
</tr>
</table>

#### Defined in

[types/bezier.ts:44](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L44)

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

[types/bezier.ts:73](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L73)

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

[types/bezier.ts:83](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L83)

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

[types/bezier.ts:78](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L78)

</td>
</tr>
</table>

#### Defined in

[types/bezier.ts:69](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L69)

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

[types/bezier.ts:23](https://github.com/phun-ky/speccer/blob/main/src/types/bezier.ts#L23)

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

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
