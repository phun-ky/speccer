[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / [main](../README.md) / grid

# Variable: grid

> `const` **grid**: `object`

## Type declaration

### create()

> **create**: (`targetElement`, `styles`) => `HTMLDivElement` = `gridCreate`

Creates a visual grid overlay for a given target element.

#### Parameters

• **targetElement**: `HTMLElement`

The target element to create the grid overlay for.

• **styles**: `CSSStyleDeclaration`

The computed styles of the target element.

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

### element()

> **element**: (`targetElement`) => `Promise`\<`void`\> = `gridElement`

Create a visual overlay to present the column gaps for a grid container

Adds a visual grid overlay to the target element if it has the appropriate data attribute and is a grid.

![grid](https://github.com/phun-ky/speccer/blob/main/public/grid.png?raw=true)

#### Parameters

• **targetElement**: `HTMLElement`

The target element to add the grid overlay to.

#### Returns

`Promise`\<`void`\>

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

## Defined in

[main.ts:29](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L29)
