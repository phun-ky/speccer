[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/css](../README.md) / measureSize

# Function: measureSize()

> **measureSize**(`el`): `number`

Retrieves the value of a custom CSS property "--ph-speccer-measure-size" from an element.

## Parameters

• **el**: `HTMLElement`

The HTML element.

## Returns

`number`

- The parsed value of the CSS property or a default value.

## Example

```ts
// Get the value of a custom CSS property from an element
const value = measureSize(document.body);
console.log(value); // Example output: 20
```

## Defined in

[utils/css.ts:188](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L188)
