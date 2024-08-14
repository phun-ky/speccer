[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/css](../README.md) / lineWidth

# Function: lineWidth()

> **lineWidth**(`el`): `number`

Retrieves the value of a custom CSS property "--ph-speccer-line-width" from an element.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `HTMLElement` | The HTML element. |

## Returns

`number`

- The parsed value of the CSS property or a default value.

## Example

```ts
// Get the value of a custom CSS property from an element
const value = lineWidth(document.body);
console.log(value); // Example output: 1.5
```

## Defined in

[utils/css.ts:206](https://github.com/phun-ky/speccer/blob/main/src/utils/css.ts#L206)
