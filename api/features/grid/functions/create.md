[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/grid](../README.md) / create

# Function: create()

> **create**(`targetElement`, `styles`): `HTMLDivElement`

Creates a visual grid overlay for a given target element.

## Parameters

• **targetElement**: `HTMLElement`

The target element to create the grid overlay for.

• **styles**: `CSSStyleDeclaration`

The computed styles of the target element.

## Returns

`HTMLDivElement`

The created grid container element.

## Example

```ts
const targetElement = document.getElementById('target');
if (targetElement) {
  const styles = window.getComputedStyle(targetElement);
  const gridOverlay = create(targetElement, styles);
  document.body.appendChild(gridOverlay);
}
```

## Defined in

[features/grid/index.ts:24](https://github.com/phun-ky/speccer/blob/main/src/features/grid/index.ts#L24)
