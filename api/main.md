<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](README.md) / main

# main

> Last updated 2024-11-21T14:05:20.012Z

## Table of Contents

- [Examples](#examples)
- [References](#references)
  - [removeSpeccerElement](#removespeccerelement)
- [Variables](#variables)
  - [grid](#grid)
  - [mark](#mark)
  - [measure](#measure)
  - [modes](#modes)
  - [pin](#pin)
  - [spacing](#spacing)
  - [typography](#typography)
- [Functions](#functions)
  - [speccer()](#speccer)

## Examples

```typescript
import '@phun-ky/speccer/dist/speccer.min.css';
import speccer from '@phun-ky/speccer';

// do stuff
speccer();
```

```html
<link rel="stylesheet" href="../path/to/speccer.min.css" />
<script src="../path/to/speccer.js"></script>
```

## References

### removeSpeccerElement

Re-exports [removeSpeccerElement](utils/remove-speccer-element.md#removespeccerelement)

## Variables

### grid

```ts
const grid: {
  create: gridCreate;
  element: gridElement;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`create`

</td>
<td>

(`targetElement`, `styles`, `options`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

</td>
<td>

gridCreate

</td>
<td>

[main.ts:53](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L53)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`, `options`?) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

</td>
<td>

gridElement

</td>
<td>

[main.ts:54](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L54)

</td>
</tr>
</tbody>
</table>

#### Defined in

[main.ts:52](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L52)

---

### mark

```ts
const mark: {
  create: markCreate;
  element: markElement;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`create`

</td>
<td>

(`id`, `n`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

markCreate

</td>
<td>

[main.ts:74](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L74)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

</td>
<td>

markElement

</td>
<td>

[main.ts:75](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L75)

</td>
</tr>
</tbody>
</table>

#### Defined in

[main.ts:73](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L73)

---

### measure

```ts
const measure: {
  create: measureCreate;
  element: measureElement;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`create`

</td>
<td>

(`text`, `options`, `id`, `tag`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

measureCreate

</td>
<td>

[main.ts:69](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L69)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`, `options`?) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

</td>
<td>

measureElement

</td>
<td>

[main.ts:70](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L70)

</td>
</tr>
</tbody>
</table>

#### Defined in

[main.ts:68](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L68)

---

### modes

```ts
const modes: {
  activate: (speccer) => void;
  dom: (speccer) => void;
  lazy: () => void;
  manual: (speccer) => void;
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

`activate`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

[main.ts:87](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L87)

</td>
</tr>
<tr>
<td>

`dom`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

[main.ts:84](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L84)

</td>
</tr>
<tr>
<td>

`lazy`

</td>
<td>

() => `void`

</td>
<td>

[main.ts:85](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L85)

</td>
</tr>
<tr>
<td>

`manual`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

[main.ts:86](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L86)

</td>
</tr>
</tbody>
</table>

#### Defined in

[main.ts:83](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L83)

---

### pin

```ts
const pin: {
  createPinElement: (content, options, id, n) => HTMLElement;
  pinElement: (
    targetElement,
    parentElement,
    content,
    options
  ) => Promise<string | void>;
  pinElements: (sectionElement, options?) => Promise<void>;
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

`createPinElement`

</td>
<td>

(`content`, `options`, `id`, `n`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

[main.ts:63](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L63)

</td>
</tr>
<tr>
<td>

`pinElement`

</td>
<td>

(`targetElement`, `parentElement`, `content`, `options`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string` | `void`>

</td>
<td>

[main.ts:64](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L64)

</td>
</tr>
<tr>
<td>

`pinElements`

</td>
<td>

(`sectionElement`, `options`?) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

</td>
<td>

[main.ts:65](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L65)

</td>
</tr>
</tbody>
</table>

#### Defined in

[main.ts:62](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L62)

---

### spacing

```ts
const spacing: {
  create: spacingCreate;
  element: spacingElement;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`create`

</td>
<td>

(`text`, `tag`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

spacingCreate

</td>
<td>

[main.ts:58](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L58)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`, `options`?) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

</td>
<td>

spacingElement

</td>
<td>

[main.ts:59](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L59)

</td>
</tr>
</tbody>
</table>

#### Defined in

[main.ts:57](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L57)

---

### typography

```ts
const typography: {
  create: typographyCreate;
  element: typographyElement;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`create`

</td>
<td>

(`html`, `options`, `id`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

typographyCreate

</td>
<td>

[main.ts:79](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L79)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`, `options`?) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

</td>
<td>

typographyElement

</td>
<td>

[main.ts:80](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L80)

</td>
</tr>
</tbody>
</table>

#### Defined in

[main.ts:78](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L78)

## Functions

### speccer()

```ts
function speccer(): void;
```

#### Returns

`void`

#### Defined in

[main.ts:90](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L90)

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
