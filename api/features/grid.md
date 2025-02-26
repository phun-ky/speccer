<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / features/grid

# features/grid

> Last updated 2025-02-26T10:30:33.224Z

This feature will highlight the grid spacing in a `display: grid;` element.

![pin](https://github.com/phun-ky/speccer/blob/main/public/speccer-grid-full-light.png?raw=true)

## Table of Contents

- [Example](#example)
- [Functions](#functions)
  - [create()](#create)
  - [grid()](#grid)

## Example

Use the following code, either for html or js:

```html
<div data-speccer="grid [columns|rows]" class="…">…</div>
```

```ts
const targetElement = document.getElementById('target');
const options = {
  type: 'grid',
  grid: {
    toggle: 'both'
  }
};

grid(targetElement, options);
```

## Functions

### create()

```ts
function create(targetElement, styles, options): Promise<void>;
```

Defined in:
[src/features/grid/index.ts:65](https://github.com/phun-ky/speccer/blob/main/src/features/grid/index.ts#L65)

Creates a visual grid overlay for a given target element.

#### Parameters

| Parameter       | Type                                                                                                                                                                               | Description                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)                                                                                                            | The target element to create the grid overlay for. |
| `styles`        | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)> | The computed styles of the target element.         |
| `options`       | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface)                                                                                                           | Options to determine what to draw                  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

#### Example

```ts
const targetElement = document.getElementById('target');
if (targetElement) {
  const styles = window.getComputedStyle(targetElement);
  await create(targetElement, styles);
}
```

---

### grid()

```ts
function grid(targetElement, options?): Promise<void>;
```

Defined in:
[src/features/grid/index.ts:208](https://github.com/phun-ky/speccer/blob/main/src/features/grid/index.ts#L208)

Create a visual overlay to present the column gaps for a grid container

Adds a visual grid overlay to the target element if it has the appropriate data
attribute and is a grid.

![grid](https://github.com/phun-ky/speccer/blob/main/public/speccer-grid-full-light.png?raw=true)

#### Parameters

| Parameter       | Type                                                                     | Description                                    |
| --------------- | ------------------------------------------------------------------------ | ---------------------------------------------- |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)  | The target element to add the grid overlay to. |
| `options`?      | [`SpeccerOptionsInterface`](../types/speccer.md#specceroptionsinterface) | Options.                                       |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

A promise that resolves once the overlay has been added.

#### Example

```ts
const targetElement = document.getElementById('target');

grid(targetElement);
```

##### Only rows

![grid](https://github.com/phun-ky/speccer/blob/main/public/speccer-grid-full-dark.png?raw=true)

```ts
const targetElement = document.getElementById('target');
const options = {
  type: 'grid',
  grid: {
    toggle: 'rows'
  }
};

grid(targetElement, options);
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
