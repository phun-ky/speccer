<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](README.md) / main

# main

> Last updated 2024-08-19T11:01:52.724Z

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
  - [default()](#default)

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

(`targetElement`, `styles`) => `Promise`\<`HTMLDivElement`>

</td>
<td>

gridCreate

</td>
<td>

[main.ts:46](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L46)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`) => `Promise`\<`void`>

</td>
<td>

gridElement

</td>
<td>

[main.ts:47](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L47)

</td>
</tr>
</table>

#### Defined in

[main.ts:45](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L45)

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

(`n`) => `HTMLElement`

</td>
<td>

markCreate

</td>
<td>

[main.ts:67](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L67)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`) => `Promise`\<`void`>

</td>
<td>

markElement

</td>
<td>

[main.ts:68](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L68)

</td>
</tr>
</table>

#### Defined in

[main.ts:66](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L66)

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

(`text`, `area`, `tag`) => `HTMLElement`

</td>
<td>

measureCreate

</td>
<td>

[main.ts:62](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L62)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`) => `Promise`\<`void`>

</td>
<td>

measureElement

</td>
<td>

[main.ts:63](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L63)

</td>
</tr>
</table>

#### Defined in

[main.ts:61](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L61)

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

[main.ts:80](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L80)

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

[main.ts:77](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L77)

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

[main.ts:78](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L78)

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

[main.ts:79](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L79)

</td>
</tr>
</table>

#### Defined in

[main.ts:76](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L76)

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

(`textContent`, `area`, `id`, `n`) => `HTMLElement`

</td>
<td>

[main.ts:56](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L56)

</td>
</tr>
<tr>
<td>

`pinElement`

</td>
<td>

(`targetElement`, `symbol`, `parentElement`, `areas`?) => `Promise`\<`string` | `void`>

</td>
<td>

[main.ts:57](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L57)

</td>
</tr>
<tr>
<td>

`pinElements`

</td>
<td>

(`sectionElement`) => `Promise`\<`void`>

</td>
<td>

[main.ts:58](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L58)

</td>
</tr>
</table>

#### Defined in

[main.ts:55](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L55)

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

(`text`, `tag`) => `HTMLElement`

</td>
<td>

spacingCreate

</td>
<td>

[main.ts:51](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L51)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`) => `Promise`\<`void`>

</td>
<td>

spacingElement

</td>
<td>

[main.ts:52](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L52)

</td>
</tr>
</table>

#### Defined in

[main.ts:50](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L50)

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

(`html`, `area`) => `HTMLElement`

</td>
<td>

typographyCreate

</td>
<td>

[main.ts:72](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L72)

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

(`targetElement`) => `Promise`\<`void`>

</td>
<td>

typographyElement

</td>
<td>

[main.ts:73](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L73)

</td>
</tr>
</table>

#### Defined in

[main.ts:71](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L71)

## Functions

### default()

```ts
function default(): void
```

#### Returns

`void`

#### Defined in

[main.ts:83](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L83)

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
