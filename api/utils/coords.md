[**@phun-ky/speccer**](../README.md) • **Docs**

***

[@phun-ky/speccer](../README.md) / utils/coords

# utils/coords

## Variables

### coords

> `const` **coords**: `object`

A set of functions to retrieve specific coordinates from a DOMRect.

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

(`rect`) => `number`

</td>
<td>

Get the bottom coordinate of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const bottomCoordinate = coords.bottom(rect);
```

</td>
<td>

[utils/coords.ts:39](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L39)

</td>
</tr>
<tr>
<td>

`center_x`

</td>
<td>

(`rect`) => `number`

</td>
<td>

Get the x-coordinate of the center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const centerXCoordinate = coords.center_x(rect);
```

</td>
<td>

[utils/coords.ts:63](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L63)

</td>
</tr>
<tr>
<td>

`center_y`

</td>
<td>

(`rect`) => `number`

</td>
<td>

Get the y-coordinate of the center of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const centerYCoordinate = coords.center_y(rect);
```

</td>
<td>

[utils/coords.ts:75](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L75)

</td>
</tr>
<tr>
<td>

`left`

</td>
<td>

(`rect`) => `number`

</td>
<td>

Get the left coordinate of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const leftCoordinate = coords.left(rect);
```

</td>
<td>

[utils/coords.ts:51](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L51)

</td>
</tr>
<tr>
<td>

`right`

</td>
<td>

(`rect`) => `number`

</td>
<td>

Get the right coordinate of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const rightCoordinate = coords.right(rect);
```

</td>
<td>

[utils/coords.ts:27](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L27)

</td>
</tr>
<tr>
<td>

`top`

</td>
<td>

(`rect`) => `number`

</td>
<td>

Get the top coordinate of a DOMRect.

**Example**

```ts
const rect = element.getBoundingClientRect();
const topCoordinate = coords.top(rect);
```

</td>
<td>

[utils/coords.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L15)

</td>
</tr>
</table>

#### Defined in

[utils/coords.ts:4](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L4)
