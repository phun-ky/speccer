<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/node

# utils/node

> Last updated 2024-08-14T10:23:12.593Z

## Functions

### after()

```ts
function after(el, newSibling): undefined | null | Element
```

Inserts an HTML element after another element in the DOM.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `null` \| `HTMLElement` | The reference element after which the new element will be inserted. |
| `newSibling` | `HTMLElement` | The new element to be inserted. |

#### Returns

`undefined` \| `null` \| `Element`

#### Example

```ts
// Insert an element after another element
const referenceElement = document.getElementById('reference-element');
const newElement = document.createElement('div');
after(referenceElement, newElement);

#### Defined in

[utils/node.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/node.ts#L15)

***

### removeAll()

```ts
function removeAll(selector, el): void
```

Removes all elements matching a selector from the DOM.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `selector` | `string` | `undefined` | The CSS selector used to select elements for removal. |
| `el` | `Document` | `document` | The document context (default is the global `document` object). |

#### Returns

`void`

#### Example

```ts
// Remove all elements with a specific class from the document
removeAll('.my-class');
```

#### Defined in

[utils/node.ts:34](https://github.com/phun-ky/speccer/blob/main/src/utils/node.ts#L34)

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
