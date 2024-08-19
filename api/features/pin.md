<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / features/pin

# features/pin

> Last updated 2024-08-19T13:10:31.105Z

This feature highlights the anatomy of an element.

![pin](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)

In your component examples, use the following attribute. Remember to use the `data-speccer="pin-area"`-attribute on a parent element to scope the marking.

## Table of Contents

- [Example](#example)
- [References](#references)
  - [createPinElement](#createpinelement)
  - [pinElement](#pinelement)
- [Functions](#functions)
  - [pinElements()](#pinelements)

## Example

```html
<div data-speccer="pin-area">
  <div
    data-speccer="pin [bracket|enclose][curly] [left|right|top|bottom]"
    class="..."
  ></div>
</div>
```

## References

### createPinElement

Re-exports [createPinElement](pin/utils/create-pin-element.md#createpinelement)

### pinElement

Re-exports [pinElement](pin/utils/pin-element.md#pinelement)

## Functions

### pinElements()

```ts
function pinElements(sectionElement): Promise<void>;
```

Create pinned elements based on the section element and its data-speccer attributes.

#### Parameters

| Parameter        | Type          | Description                                     |
| ---------------- | ------------- | ----------------------------------------------- |
| `sectionElement` | `HTMLElement` | The section element containing pinned elements. |

#### Returns

`Promise`\<`void`>

- A promise that resolves after creating pinned elements.

#### Example

```ts
const sectionElement = document.getElementById('section');
pinElements(sectionElement);
```

#### Defined in

[features/pin/index.ts:43](https://github.com/phun-ky/speccer/blob/main/src/features/pin/index.ts#L43)

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