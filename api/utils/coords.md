<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/coords

# utils/coords

> Last updated 2025-08-26T17:21:42.330Z

## Variables

### coords

```ts
const coords: {
  bottom: (rect) => number;
  center_x: (rect) => number;
  center_y: (rect) => number;
  left: (rect) => number;
  right: (rect) => number;
  top: (rect) => number;
};
```

Defined in:
[src/utils/coords.ts:4](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L4)

A set of functions to retrieve specific coordinates from a DOMRect.

#### Type Declaration

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

<a id="bottom"></a> `bottom()`

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

[src/utils/coords.ts:39](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L39)

</td>
</tr>
<tr>
<td>

<a id="center_x"></a> `center_x()`

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

[src/utils/coords.ts:63](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L63)

</td>
</tr>
<tr>
<td>

<a id="center_y"></a> `center_y()`

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

[src/utils/coords.ts:75](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L75)

</td>
</tr>
<tr>
<td>

<a id="left"></a> `left()`

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

[src/utils/coords.ts:51](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L51)

</td>
</tr>
<tr>
<td>

<a id="right"></a> `right()`

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

[src/utils/coords.ts:27](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L27)

</td>
</tr>
<tr>
<td>

<a id="top"></a> `top()`

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

[src/utils/coords.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/coords.ts#L15)

</td>
</tr>
</tbody>
</table>

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
