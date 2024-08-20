<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](README.md) / main

# main

> Last updated 2024-08-20T07:17:27.757Z

## Table of Contents

- [Examples](#examples)
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
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`targetElement`, `styles`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`HTMLDivElement`](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)>

</td>
<td>

gridCreate

</td>
<td>

[main.ts:50](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L50)

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

gridElement

</td>
<td>

[main.ts:51](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L51)

</td>
</tr>
</table>

#### Defined in

[main.ts:49](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L49)

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
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`n`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

markCreate

</td>
<td>

[main.ts:71](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L71)

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

[main.ts:72](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L72)

</td>
</tr>
</table>

#### Defined in

[main.ts:70](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L70)

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
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`text`, `area`, `tag`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

measureCreate

</td>
<td>

[main.ts:66](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L66)

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

measureElement

</td>
<td>

[main.ts:67](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L67)

</td>
</tr>
</table>

#### Defined in

[main.ts:65](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L65)

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
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`activate`

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

`dom`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

[main.ts:81](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L81)

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

[main.ts:82](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L82)

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

[main.ts:83](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L83)

</td>
</tr>
</table>

#### Defined in

[main.ts:80](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L80)

---

### pin

```ts
const pin: {
  createPinElement: (textContent, area, id, n) => HTMLElement;
  pinElement: (
    targetElement,
    symbol,
    parentElement,
    areas?
  ) => Promise<string | void>;
  pinElements: (sectionElement) => Promise<void>;
};
```

#### Type declaration

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`createPinElement`

</td>
<td>

(`textContent`, `area`, `id`, `n`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

[main.ts:60](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L60)

</td>
</tr>
<tr>
<td>

`pinElement`

</td>
<td>

(`targetElement`, `symbol`, `parentElement`, `areas`?) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string` | `void`>

</td>
<td>

[main.ts:61](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L61)

</td>
</tr>
<tr>
<td>

`pinElements`

</td>
<td>

(`sectionElement`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

</td>
<td>

[main.ts:62](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L62)

</td>
</tr>
</table>

#### Defined in

[main.ts:59](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L59)

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
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
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

[main.ts:55](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L55)

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

spacingElement

</td>
<td>

[main.ts:56](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L56)

</td>
</tr>
</table>

#### Defined in

[main.ts:54](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L54)

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
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`create`

</td>
<td>

(`html`, `area`) => [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

typographyCreate

</td>
<td>

[main.ts:76](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L76)

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

typographyElement

</td>
<td>

[main.ts:77](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L77)

</td>
</tr>
</table>

#### Defined in

[main.ts:75](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L75)

## Functions

### speccer()

```ts
function speccer(): void;
```

#### Returns

`void`

#### Defined in

[main.ts:87](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L87)

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
