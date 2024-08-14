[**@phun-ky/speccer**](../../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../../README.md) / [features/spacing/utils/position](../README.md) / position

# Function: position()

> **position**(`property`, `value`, `spacingEl`, `targetEl`): `Promise`\<`void`\>

Set the position and dimensions of a spacing element relative to a target element.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `property` | `string` | The CSS property to set (e.g., 'marginTop', 'marginLeft', etc.). |
| `value` | `number` | The value of the CSS property. |
| `spacingEl` | `HTMLElement` | The spacing element. |
| `targetEl` | `HTMLElement` | The target element. |

## Returns

`Promise`\<`void`\>

- A promise that resolves after setting the position and dimensions.

## Example

```ts
const spacingElement = document.getElementById('spacing');
const targetElement = document.getElementById('target');
position('marginTop', 20, spacingElement, targetElement);
```

## Defined in

[features/spacing/utils/position.ts:21](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/utils/position.ts#L21)
