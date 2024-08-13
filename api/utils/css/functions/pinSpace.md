[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/css](../README.md) / pinSpace

# Function: pinSpace()

> **pinSpace**(`el`): `number`

Retrieves the value of a custom CSS property "--ph-speccer-pin-space" from an element.

## Parameters

• **el**: `HTMLElement`

The HTML element.

## Returns

`number`

- The parsed value of the CSS property or a default value.

## Example

```ts
// Get the value of a custom CSS property from an element
const value = pinSpace(document.body);
console.log(value); // Example output: 10
```

## Defined in

[utils/css.ts:170](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L170)
