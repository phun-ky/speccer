<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/style-property

# utils/style-property

> Last updated 2025-02-17T12:33:43.820Z

## Table of Contents

- [Functions](#functions)
  - [isSticky()](#issticky)

## Functions

### isSticky()

```ts
function isSticky(element): Promise<boolean>;
```

Defined in: [src/utils/style-property.ts:98](https://github.com/phun-ky/speccer/blob/main/src/utils/style-property.ts#L98)

Checks if an element has 'position: sticky'.

#### Parameters

| Parameter | Type                                                                    | Description         |
| --------- | ----------------------------------------------------------------------- | ------------------- |
| `element` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The target element. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`>

- A promise that resolves to true if the element has 'position: sticky', false otherwise.

#### Example

```ts
// Usage example:
const isElementSticky = await isSticky(myElement);
console.log(isElementSticky); // true or false
```

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
