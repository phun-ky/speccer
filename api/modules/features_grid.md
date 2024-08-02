[@phun-ky/speccer](../README.md) / features/grid

# Module: features/grid

## Functions

### create

▸ **create**(`targetElement`, `styles`): `HTMLDivElement`

Creates a visual grid overlay for a given target element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetElement` | `HTMLElement` | The target element to create the grid overlay for. |
| `styles` | `CSSStyleDeclaration` | The computed styles of the target element. |

#### Returns

`HTMLDivElement`

The created grid container element.

**`Example`**

```ts
const targetElement = document.getElementById('target');
if (targetElement) {
  const styles = window.getComputedStyle(targetElement);
  const gridOverlay = create(targetElement, styles);
  document.body.appendChild(gridOverlay);
}
```

#### Defined in

features/grid/index.ts:24

___

### element

▸ **element**(`targetElement`): `Promise`\<`void`\>

Create a visual overlay to present the column gaps for a grid container

Adds a visual grid overlay to the target element if it has the appropriate data attribute and is a grid.

![dissect](https://github.com/phun-ky/speccer/blob/main/public/grid.png?raw=true)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetElement` | `HTMLElement` | The target element to add the grid overlay to. |

#### Returns

`Promise`\<`void`\>

A promise that resolves once the overlay has been added.

**`Example`**

```ts
const targetElement = document.getElementById('target');
if (targetElement) {
  element(targetElement).then(() => {
    console.log('Grid overlay added');
  });
}
```

#### Defined in

features/grid/index.ts:89
