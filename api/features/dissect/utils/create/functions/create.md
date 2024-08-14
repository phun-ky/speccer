[**@phun-ky/speccer**](../../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../../README.md) / [features/dissect/utils/create](../README.md) / create

# Function: create()

> **create**(`textContent`, `area`, `id`, `n`): `HTMLElement`

Create a dissected element with optional text content, area description, and element type.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `textContent` | `string` | `''` | The text content to add to the element. |
| `area` | `string` | `undefined` | The area description for styling. |
| `id` | `string` | `''` | The id of the dissection element |
| `n` | `string` | `'span'` | The element type. |

## Returns

`HTMLElement`

- The created dissected element.

## Example

```ts
const dissectedElement = create('A', 'outline top', 'div');
document.body.appendChild(dissectedElement);
```

## Defined in

[features/dissect/utils/create.ts:19](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/create.ts#L19)
