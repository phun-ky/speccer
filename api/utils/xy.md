<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/xy

# utils/xy

> Last updated 2024-08-14T10:38:21.014Z

## Variables

### xy

```ts
const xy: {
  bottom: (rect) => SpeccerCoordinatesInterface;
  bottom-center: (rect) => SpeccerCoordinatesInterface;
  bottom-left: (rect) => SpeccerCoordinatesInterface;
  bottom-right: (rect) => SpeccerCoordinatesInterface;
  center: (rect) => SpeccerCoordinatesInterface;
  left: (rect) => SpeccerCoordinatesInterface;
  left-bottom: (rect) => SpeccerCoordinatesInterface;
  left-center: (rect) => SpeccerCoordinatesInterface;
  left-top: (rect) => SpeccerCoordinatesInterface;
  right: (rect) => SpeccerCoordinatesInterface;
  right-bottom: (rect) => SpeccerCoordinatesInterface;
  right-center: (rect) => SpeccerCoordinatesInterface;
  right-top: (rect) => {
     x: number;
     y: number;
    };
  top: (rect) => SpeccerCoordinatesInterface;
  top-center: (rect) => SpeccerCoordinatesInterface;
  top-left: (rect) => SpeccerCoordinatesInterface;
  top-right: (rect) => SpeccerCoordinatesInterface;
};
```

Object containing functions to retrieve specific x and y coordinates from a DOMRect.

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

`bottom`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the bottom center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const bottomCenterCoordinates = xy.bottom(rect);
// bottomCenterCoordinates.x and bottomCenterCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:68](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L68)

</td>
</tr>
<tr>
<td>

`bottom-center`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the bottom center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const bottomCenterCoordinates = xy['bottom-center'](rect);
// bottomCenterCoordinates.x and bottomCenterCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:237](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L237)

</td>
</tr>
<tr>
<td>

`bottom-left`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the bottom left of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const bottomLeftCoordinates = xy['bottom-left'](rect);
// bottomLeftCoordinates.x and bottomLeftCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:177](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L177)

</td>
</tr>
<tr>
<td>

`bottom-right`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the bottom right of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const bottomRight = xy['bottom-right'](rect);
// bottomRight.x and bottomRight.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:192](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L192)

</td>
</tr>
<tr>
<td>

`center`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const centerCoordinates = xy.center(rect);
// centerCoordinates.x and centerCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L20)

</td>
</tr>
<tr>
<td>

`left`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the left of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const leftCoordinates = xy.left(rect);
// leftCoordinates.x and leftCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:83](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L83)

</td>
</tr>
<tr>
<td>

`left-bottom`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the left bottom of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const leftBottomCoordinates = xy['left-bottom'](rect);
// leftBottomCoordinates.x and leftBottomCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:132](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L132)

</td>
</tr>
<tr>
<td>

`left-center`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the left center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const leftCenterCoordinates = xy['left-center'](rect);
// leftCenterCoordinates.x and leftCenterCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:252](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L252)

</td>
</tr>
<tr>
<td>

`left-top`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the left top of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const leftTop = xy['left-top'](rect);
// leftTop.x and leftTop.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:117](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L117)

</td>
</tr>
<tr>
<td>

`right`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the right center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const rightCenterCoordinates = xy.right(rect);
// rightCenterCoordinates.x and rightCenterCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:52](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L52)

</td>
</tr>
<tr>
<td>

`right-bottom`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the right bottom of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const rightBottomCoordinates = xy['right-bottom'](rect);
// rightBottomCoordinates.x and rightBottomCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:102](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L102)

</td>
</tr>
<tr>
<td>

`right-center`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the right center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const rightCenterCoordinates = xy['right-center'](rect);
// rightCenterCoordinates.x and rightCenterCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:222](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L222)

</td>
</tr>
<tr>
<td>

`right-top`

</td>
<td>

(`rect`) => \{
  `x`: `number`;
  `y`: `number`;
 \}

</td>
<td>

&hyphen;

</td>
<td>

[utils/xy.ts:87](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L87)

</td>
</tr>
<tr>
<td>

`top`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the top center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const topCenterCoordinates = xy.top(rect);
// topCenterCoordinates.x and topCenterCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:36](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L36)

</td>
</tr>
<tr>
<td>

`top-center`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the top center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const topCenterCoordinates = xy['top-center'](rect);
// topCenterCoordinates.x and topCenterCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:207](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L207)

</td>
</tr>
<tr>
<td>

`top-left`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the top left of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const topLeftCoordinates = xy['top-left'](rect);
// topLeftCoordinates.x and topLeftCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:147](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L147)

</td>
</tr>
<tr>
<td>

`top-right`

</td>
<td>

(`rect`) => [`SpeccerCoordinatesInterface`](../types/xy.md#speccercoordinatesinterface)

</td>
<td>

Get the x and y coordinates of the top right of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const topRightCoordinates = xy['top-right'](rect);
// topRightCoordinates.x and topRightCoordinates.y will contain the coordinates
```

</td>
<td>

[utils/xy.ts:162](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L162)

</td>
</tr>
</table>

#### Defined in

[utils/xy.ts:8](https://github.com/phun-ky/speccer/blob/main/src/utils/xy.ts#L8)

***

## Contributing

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

## Sponsor me

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

***
<p class="ph">
  This project created by
  <a rel="noopener noreferrer" target="_blank" class="ph" href="http://phun-ky.net" property="cc:attributionName">
    Alexander Vassbotn Røyne-Helgesen</a>
  is licensed under a
  <a rel="noopener noreferrer" target="_blank" class="ph" href="https://choosealicense.com/licenses/mit/">
    MIT License </a>.
</p>
