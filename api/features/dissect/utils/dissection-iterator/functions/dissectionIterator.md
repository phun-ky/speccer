[**@phun-ky/speccer**](../../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../../README.md) / [features/dissect/utils/dissection-iterator](../README.md) / dissectionIterator

# Function: dissectionIterator()

> **dissectionIterator**(`targetEl`, `targetIndex`): `Promise`\<`void`\>

Iterates over the dissection areas of a target element, creating and styling the dissection elements as needed.

This function appends a new dissection element to the document body based on the anatomy data attribute
of the target element. It handles different styles, such as curly brackets or lines, based on the anatomy type.

## Parameters

• **targetEl**: `HTMLElement`

The target element that contains the anatomy data.

• **targetIndex**: `number`

The index used to determine the character for the dissection.

## Returns

`Promise`\<`void`\>

A promise that resolves when the dissection is completed.

## Example

```ts
const targetElement = document.getElementById('target');
const targetIndex = 0;
dissectionIterator(targetElement, targetIndex).then(() => {
  console.log('Dissection completed');
});
```

## Defined in

[features/dissect/utils/dissection-iterator.ts:30](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/dissection-iterator.ts#L30)
