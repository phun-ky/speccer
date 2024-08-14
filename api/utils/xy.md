[**@phun-ky/speccer**](../README.md) • **Docs**

***

[@phun-ky/speccer](../README.md) / utils/xy

# utils/xy

## Variables

### xy

> `const` **xy**: `object`

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

(`rect`) => `object`

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
