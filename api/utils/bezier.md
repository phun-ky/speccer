<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/bezier

# utils/bezier

> Last updated 2025-05-20T09:52:56.196Z

## Functions

### createBezierCurveCoordinates()

```ts
function createBezierCurveCoordinates(
  coords,
  options
): CoordinatesForBezierObjectType;
```

Defined in:
[src/utils/bezier.ts:32](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L32)

Calculates coordinates for a Bezier curve between two points.

#### Parameters

| Parameter | Type                                                                                                        | Description                                  |
| --------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `coords`  | [`CreateCoordinatesForCurveCoordParamType`](../types/bezier.md#createcoordinatesforcurvecoordparamtype)     | The coordinates of the start and end points. |
| `options` | [`CreateCoordinatesForCurveOptionsParamType`](../types/bezier.md#createcoordinatesforcurveoptionsparamtype) | Options for controlling the curve's shape.   |

#### Returns

[`CoordinatesForBezierObjectType`](../types/bezier.md#coordinatesforbezierobjecttype)

Coordinates for the Bezier curve.

#### Example

```ts
const coordinates = createBezierCurveCoordinates(
  { x1: 0, x2: 100, y1: 0, y2: 100 },
  { direct: true, firstSet: true, direction: 'west' }
);
```

---

### getCurlySVGPath()

```ts
function getCurlySVGPath(startEl, stopEl, options): Promise<string>;
```

Defined in:
[src/utils/bezier.ts:141](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L141)

Generates an SVG path for a curved line between two HTML elements.

#### Parameters

| Parameter | Type                                                                          | Description                              |
| --------- | ----------------------------------------------------------------------------- | ---------------------------------------- |
| `startEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)       | The starting HTML element.               |
| `stopEl`  | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)       | The ending HTML element.                 |
| `options` | [`CurlyBezierPathOptionsType`](../types/bezier.md#curlybezierpathoptionstype) | Options for controlling the curved line. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`>

The SVG path string for the curved line.

#### Example

```ts
const svgPath = getCurlySVGPath(startElement, stopElement, {
  pos1: 'top',
  pos2: 'bottom',
  firstSet: true,
  direction: 'south'
});
```

---

### getPositionsForCurlySVGPath()

```ts
function getPositionsForCurlySVGPath(direction): {
  path1pos1: string;
  path1pos2: string;
  path2pos1: string;
  path2pos2: string;
};
```

Defined in:
[src/utils/bezier.ts:286](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L286)

Returns positions for creating an SVG path for a curved line based on a cardinal
direction.

#### Parameters

| Parameter   | Type     | Description                                                |
| ----------- | -------- | ---------------------------------------------------------- |
| `direction` | `string` | The cardinal direction ('east', 'west', 'south', 'north'). |

#### Returns

```ts
{
  path1pos1: string;
  path1pos2: string;
  path2pos1: string;
  path2pos2: string;
}
```

Positions for creating an SVG path for a curved line.

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

`path1pos1`

</td>
<td>

`string`

</td>
<td>

[src/utils/bezier.ts:321](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L321)

</td>
</tr>
<tr>
<td>

`path1pos2`

</td>
<td>

`string`

</td>
<td>

[src/utils/bezier.ts:322](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L322)

</td>
</tr>
<tr>
<td>

`path2pos1`

</td>
<td>

`string`

</td>
<td>

[src/utils/bezier.ts:323](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L323)

</td>
</tr>
<tr>
<td>

`path2pos2`

</td>
<td>

`string`

</td>
<td>

[src/utils/bezier.ts:324](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L324)

</td>
</tr>
</tbody>
</table>

#### Example

```ts
const positions = getPositionsForCurlySVGPath('west');
```

---

### getPositionsForSVGPath()

```ts
function getPositionsForSVGPath(direction): {
  pos1: string;
  pos2: string;
};
```

Defined in:
[src/utils/bezier.ts:246](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L246)

Returns positions for creating an SVG path based on a cardinal direction.

#### Parameters

| Parameter   | Type     | Description                                                |
| ----------- | -------- | ---------------------------------------------------------- |
| `direction` | `string` | The cardinal direction ('east', 'west', 'south', 'north'). |

#### Returns

```ts
{
  pos1: string;
  pos2: string;
}
```

Positions for creating an SVG path.

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

`pos1`

</td>
<td>

`string`

</td>
<td>

[src/utils/bezier.ts:270](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L270)

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

[src/utils/bezier.ts:270](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L270)

</td>
</tr>
</tbody>
</table>

#### Example

```ts
const positions = getPositionsForSVGPath('east');
```

---

### getSVGPath()

```ts
function getSVGPath(startEl, stopEl, options): Promise<string>;
```

Defined in:
[src/utils/bezier.ts:204](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L204)

Generates an SVG path for a straight line between two HTML elements.

#### Parameters

| Parameter | Type                                                                    | Description                                |
| --------- | ----------------------------------------------------------------------- | ------------------------------------------ |
| `startEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The starting HTML element.                 |
| `stopEl`  | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The ending HTML element.                   |
| `options` | [`BezierPathOptionsType`](../types/bezier.md#bezierpathoptionstype)     | Options for controlling the straight line. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`>

The SVG path string for the straight line.

#### Example

```ts
const svgPath = getSVGPath(startElement, stopElement, {
  pos1: 'left',
  pos2: 'right'
});
```

---

**Contributing**

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help
get rid of secondary activities and to enhance systems already in place, be it
documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to
maintain my projects, create new ones and contribute to the large community
we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net)
is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
