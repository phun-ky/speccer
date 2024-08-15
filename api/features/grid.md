<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / features/grid

# features/grid

> Last updated 2024-08-15T07:39:37.320Z

## Functions

### create()

```ts
function create(targetElement, styles): HTMLDivElement;
```

Creates a visual grid overlay for a given target element.

#### Parameters

| Parameter       | Type                  | Description                                        |
| --------------- | --------------------- | -------------------------------------------------- |
| `targetElement` | `HTMLElement`         | The target element to create the grid overlay for. |
| `styles`        | `CSSStyleDeclaration` | The computed styles of the target element.         |

#### Returns

`HTMLDivElement`

The created grid container element.

#### Example

```ts
const targetElement = document.getElementById('target');
if (targetElement) {
  const styles = window.getComputedStyle(targetElement);
  const gridOverlay = create(targetElement, styles);
  document.body.appendChild(gridOverlay);
}
```

#### Defined in

[features/grid/index.ts:24](https://github.com/phun-ky/speccer/blob/main/src/features/grid/index.ts#L24)

---

### element()

```ts
function element(targetElement): Promise<void>;
```

Create a visual overlay to present the column gaps for a grid container

Adds a visual grid overlay to the target element if it has the appropriate data attribute and is a grid.

![grid](https://github.com/phun-ky/speccer/blob/main/public/grid.png?raw=true)

#### Parameters

| Parameter       | Type          | Description                                    |
| --------------- | ------------- | ---------------------------------------------- |
| `targetElement` | `HTMLElement` | The target element to add the grid overlay to. |

#### Returns

`Promise`\<`void`>

A promise that resolves once the overlay has been added.

#### Example

```ts
const targetElement = document.getElementById('target');
if (targetElement) {
  element(targetElement).then(() => {
    console.log('Grid overlay added');
  });
}
```

#### Defined in

[features/grid/index.ts:89](https://github.com/phun-ky/speccer/blob/main/src/features/grid/index.ts#L89)

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
