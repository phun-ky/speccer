<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / features/dissect

# features/dissect

> Last updated 2024-08-14T10:42:54.220Z

This feature highlights the anatomy of an element.

![dissect](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)

In your component examples, use the following attribute. Remember to use the `data-anatomy-section` as an attribute on a parent element to scope the marking.

## Table of Contents

- [Example](#example)
- [References](#references)
  - [create](#create)
  - [dissect](#dissect)
- [Functions](#functions)
  - [element()](#element)

## Example

```html
<div data-anatomy-section>
  <div
    data-anatomy="outline [full|enclose][curly] [left|right|top|bottom]"
    class="..."
  ></div>
</div>
```

## References

### create

Re-exports [create](dissect/utils/create.md#create)

### dissect

Re-exports [dissect](dissect/utils/dissect.md#dissect)

## Functions

### element()

```ts
function element(sectionEl): Promise<void>;
```

Create dissected elements based on the section element and its data-anatomy attributes.

#### Parameters

| Parameter   | Type          | Description                                        |
| ----------- | ------------- | -------------------------------------------------- |
| `sectionEl` | `HTMLElement` | The section element containing dissected elements. |

#### Returns

`Promise`\<`void`>

- A promise that resolves after creating dissected elements.

#### Example

```ts
const sectionElement = document.getElementById('section');
element(sectionElement);
```

#### Defined in

[features/dissect/index.ts:41](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/index.ts#L41)

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
