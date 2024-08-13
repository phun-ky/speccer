[**@phun-ky/speccer**](../../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../../README.md) / [features/dissect/utils/dissect](../README.md) / dissect

# Function: dissect()

> **dissect**(`el`, `symbol`, `areas`?): `Promise`\<`string` \| `void`\>

Create and style the dissection element as needed.

This function appends a new dissection element to the document body based on the anatomy data attribute
of the target element. It handles different styles, such as curly brackets or lines, based on the anatomy type.

## Parameters

• **el**: `HTMLElement`

The target element that contains the anatomy data.

• **symbol**: `string`

The symbol to use.

• **areas?**: `string` = `''`

Optional areas to use if not [data-anatomy] is set as an attribute on the element

## Returns

`Promise`\<`string` \| `void`\>

A promise that resolves to the id of the dissection element when the dissection is completed, or `void` if required input is invalid.

## Example

```ts
const element = document.getElementById('target');
const symbol = 0;
dissect(element, symbol).then(() => {
  console.log('Dissection completed');
});
```

## Defined in

[features/dissect/utils/dissect.ts:34](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/dissect.ts#L34)
