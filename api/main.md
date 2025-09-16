<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](README.md) / main

# main

> Last updated 2025-09-16T12:35:56.798Z

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
  create: (targetElement, styles, options) => Promise<void>;
  element: (targetElement, options?) => Promise<void>;
};
```

Defined in:
[src/main.ts:52](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L52)

#### Type Declaration

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

<a id="create"></a> `create()`

</td>
<td>

(`targetElement`, `styles`, `options`) =>
[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

</td>
<td>

`gridCreate`

</td>
<td>

[src/main.ts:53](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L53)

</td>
</tr>
<tr>
<td>

<a id="element"></a> `element()`

</td>
<td>

(`targetElement`, `options?`) =>
[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

</td>
<td>

`gridElement`

</td>
<td>

[src/main.ts:54](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L54)

</td>
</tr>
</tbody>
</table>

---

### mark

```ts
const mark: {
  create: (id, n) => HTMLElement;
  element: (targetElement) => Promise<void>;
};
```

Defined in:
[src/main.ts:73](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L73)

#### Type Declaration

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

<a id="create-1"></a> `create()`

</td>
<td>

(`id`, `n`) =>
[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

`markCreate`

</td>
<td>

[src/main.ts:74](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L74)

</td>
</tr>
<tr>
<td>

<a id="element-1"></a> `element()`

</td>
<td>

(`targetElement`) =>
[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

</td>
<td>

`markElement`

</td>
<td>

[src/main.ts:75](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L75)

</td>
</tr>
</tbody>
</table>

---

### measure

```ts
const measure: {
  create: (text, options, id, tag) => HTMLElement;
  element: (targetElement, options?) => Promise<void>;
};
```

Defined in:
[src/main.ts:68](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L68)

#### Type Declaration

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

<a id="create-2"></a> `create()`

</td>
<td>

(`text`, `options`, `id`, `tag`) =>
[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

`measureCreate`

</td>
<td>

[src/main.ts:69](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L69)

</td>
</tr>
<tr>
<td>

<a id="element-2"></a> `element()`

</td>
<td>

(`targetElement`, `options?`) =>
[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

</td>
<td>

`measureElement`

</td>
<td>

[src/main.ts:70](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L70)

</td>
</tr>
</tbody>
</table>

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

Defined in:
[src/main.ts:83](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L83)

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

<a id="activate"></a> `activate()`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

A function to activate speccer based on script attributes.

**Example**

```ts
// Usage example:
// activate(mySpeccer);
```

</td>
<td>

[src/main.ts:87](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L87)

</td>
</tr>
<tr>
<td>

<a id="dom"></a> `dom()`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

A function to initialize speccer when the DOM is ready.

**Example**

```ts
// Usage example:
// dom(mySpeccer);
```

</td>
<td>

[src/main.ts:84](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L84)

</td>
</tr>
<tr>
<td>

<a id="lazy"></a> `lazy()`

</td>
<td>

() => `void`

</td>
<td>

A function to initialize lazy speccer functionality.

**Example**

```ts
// Usage example:
// lazy();
```

</td>
<td>

[src/main.ts:85](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L85)

</td>
</tr>
<tr>
<td>

<a id="manual"></a> `manual()`

</td>
<td>

(`speccer`) => `void`

</td>
<td>

A function to manually activate speccer.

**Example**

```ts
// Usage example:
// manual(mySpeccer);
```

</td>
<td>

[src/main.ts:86](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L86)

</td>
</tr>
</tbody>
</table>

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

Defined in:
[src/main.ts:62](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L62)

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

<a id="createpinelement"></a> `createPinElement()`

</td>
<td>

(`content`, `options`, `id`, `n`) =>
[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

Create a pin element with optional content, area description, and element type.

**Example**

```ts
const pinElement = createPinElement('A', 'outline top', 'div');
document.body.appendChild(pinElement);
```

</td>
<td>

[src/main.ts:63](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L63)

</td>
</tr>
<tr>
<td>

<a id="pinelement"></a> `pinElement()`

</td>
<td>

(`targetElement`, `parentElement`, `content`, `options`) =>
[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`
| `void`>

</td>
<td>

Create and style the pin element as needed.

This function appends a new pin element to the document body based on the
`data-speccer="pin"` attribute of the target element. It handles different
styles, such as curly brackets or lines, based on the pin type.

**Example**

```ts
const targetElement = document.getElementById('target');
const parentElement = document.getElementById('parent');
const content = 0;
const options = { … };
pinElement(targetElement, parentElement, content, options).then(() => {
  console.log('process completed');
});
```

</td>
<td>

[src/main.ts:64](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L64)

</td>
</tr>
<tr>
<td>

<a id="pinelements"></a> `pinElements()`

</td>
<td>

(`sectionElement`, `options?`) =>
[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

</td>
<td>

Create pinned elements based on the section element and its data-speccer
attributes.

**Example**

```ts
const sectionElement = document.getElementById('section');
pinElements(sectionElement);
```

</td>
<td>

[src/main.ts:65](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L65)

</td>
</tr>
</tbody>
</table>

---

### spacing

```ts
const spacing: {
  create: (text, tag) => HTMLElement;
  element: (targetElement, options?) => Promise<void>;
};
```

Defined in:
[src/main.ts:57](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L57)

#### Type Declaration

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

<a id="create-3"></a> `create()`

</td>
<td>

(`text`, `tag`) =>
[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

`spacingCreate`

</td>
<td>

[src/main.ts:58](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L58)

</td>
</tr>
<tr>
<td>

<a id="element-3"></a> `element()`

</td>
<td>

(`targetElement`, `options?`) =>
[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

</td>
<td>

`spacingElement`

</td>
<td>

[src/main.ts:59](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L59)

</td>
</tr>
</tbody>
</table>

---

### typography

```ts
const typography: {
  create: (html, options, id) => HTMLElement;
  element: (targetElement, options?) => Promise<void>;
};
```

Defined in:
[src/main.ts:78](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L78)

#### Type Declaration

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

<a id="create-4"></a> `create()`

</td>
<td>

(`html`, `options`, `id`) =>
[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

`typographyCreate`

</td>
<td>

[src/main.ts:79](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L79)

</td>
</tr>
<tr>
<td>

<a id="element-4"></a> `element()`

</td>
<td>

(`targetElement`, `options?`) =>
[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

</td>
<td>

`typographyElement`

</td>
<td>

[src/main.ts:80](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L80)

</td>
</tr>
</tbody>
</table>

## Functions

### speccer()

```ts
function speccer(): void;
```

Defined in:
[src/main.ts:90](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L90)

#### Returns

`void`

## References

### removeSpeccerElement

Re-exports
[removeSpeccerElement](utils/remove-speccer-element.md#removespeccerelement)

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
