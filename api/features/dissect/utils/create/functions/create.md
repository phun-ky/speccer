[**@phun-ky/speccer**](../../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../../README.md) / [features/dissect/utils/create](../README.md) / create

# Function: create()

> **create**(`textContent`, `area`, `n`): `HTMLElement`

Create a dissected element with optional text content, area description, and element type.

## Parameters

• **textContent**: `string` = `''`

The text content to add to the element.

• **area**: `string`

The area description for styling.

• **n**: `string` = `'span'`

The element type.

## Returns

`HTMLElement`

- The created dissected element.

## Example

```ts
const dissectedElement = create('A', 'outline top', 'div');
document.body.appendChild(dissectedElement);
```

## Defined in

[features/dissect/utils/create.ts:18](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/create.ts#L18)
