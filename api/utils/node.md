<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/node

# utils/node

> Last updated 2025-09-30T09:01:11.956Z

## Functions

### after()

```ts
function after(el, newSibling): undefined | null | Element;
```

Defined in:
[src/utils/node.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/node.ts#L15)

Inserts an HTML element after another element in the DOM.

#### Parameters

| Parameter    | Type                                                                    | Description                     |
| ------------ | ----------------------------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `el`         |                                                                         | `null`                          | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The reference element after which the new element will be inserted. |
| `newSibling` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The new element to be inserted. |

#### Returns

| `undefined` | `null` |
[`Element`](https://developer.mozilla.org/docs/Web/API/Element)

#### Example

````ts
// Insert an element after another element
const referenceElement = document.getElementById('reference-element');
const newElement = document.createElement('div');
after(referenceElement, newElement);

***

### isElementHidden()

```ts
function isElementHidden(element): boolean;
````

Defined in:
[src/utils/node.ts:55](https://github.com/phun-ky/speccer/blob/main/src/utils/node.ts#L55)

Determines if an HTML element is hidden based on its visibility properties.

#### Parameters

| Parameter | Type                                                                    | Description                               |
| --------- | ----------------------------------------------------------------------- | ----------------------------------------- |
| `element` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The HTML element to check for visibility. |

#### Returns

`boolean`

True if the element is hidden, false otherwise.

#### Example

```ts
const element = document.getElementById('my-element');
if (element) {
  const hidden = isElementHidden(element);
  console.log(hidden); // true if the element is hidden, false if visible
}
```

---

### removeAll()

```ts
function removeAll(selector, el): void;
```

Defined in:
[src/utils/node.ts:34](https://github.com/phun-ky/speccer/blob/main/src/utils/node.ts#L34)

Removes all elements matching a selector from the DOM.

#### Parameters

| Parameter  | Type                                                              | Default value | Description                                                     |
| ---------- | ----------------------------------------------------------------- | ------------- | --------------------------------------------------------------- |
| `selector` | `string`                                                          | `undefined`   | The CSS selector used to select elements for removal.           |
| `el`       | [`Document`](https://developer.mozilla.org/docs/Web/API/Document) | `document`    | The document context (default is the global `document` object). |

#### Returns

`void`

#### Example

```ts
// Remove all elements with a specific class from the document
removeAll('.my-class');
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
