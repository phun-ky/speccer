[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [features/grid](../README.md) / element

# Function: element()

> **element**(`targetElement`): `Promise`\<`void`\>

Create a visual overlay to present the column gaps for a grid container

Adds a visual grid overlay to the target element if it has the appropriate data attribute and is a grid.

![grid](https://github.com/phun-ky/speccer/blob/main/public/grid.png?raw=true)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetElement` | `HTMLElement` | The target element to add the grid overlay to. |

## Returns

`Promise`\<`void`\>

A promise that resolves once the overlay has been added.

## Example

```ts
const targetElement = document.getElementById('target');
if (targetElement) {
  element(targetElement).then(() => {
    console.log('Grid overlay added');
  });
}
```

## Defined in

[features/grid/index.ts:89](https://github.com/phun-ky/speccer/blob/main/src/features/grid/index.ts#L89)
