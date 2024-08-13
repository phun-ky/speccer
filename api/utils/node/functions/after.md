[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/node](../README.md) / after

# Function: after()

> **after**(`el`, `newSibling`): `undefined` \| `null` \| `Element`

Inserts an HTML element after another element in the DOM.

## Parameters

• **el**: `null` \| `HTMLElement`

The reference element after which the new element will be inserted.

• **newSibling**: `HTMLElement`

The new element to be inserted.

## Returns

`undefined` \| `null` \| `Element`

## Example

```ts
// Insert an element after another element
const referenceElement = document.getElementById('reference-element');
const newElement = document.createElement('div');
after(referenceElement, newElement);

## Defined in

[utils/node.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/node.ts#L15)
