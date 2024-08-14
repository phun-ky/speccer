[**@phun-ky/speccer**](../../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../../README.md) / [features/dissect/utils/styles](../README.md) / styles

# Function: styles()

> **styles**(`area`, `targetEl`, `dissectionEl`, `options`?): `Promise`\<[`SpeccerStylesReturnType`](../../../../../types/styles/type-aliases/SpeccerStylesReturnType.md)\>

Get styles for dissected elements based on the specified area and options.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `area` | `string` | The area description. |
| `targetEl` | `HTMLElement` | The target element. |
| `dissectionEl` | `HTMLElement` | The dissection element. |
| `options`? | [`DissectStylesOptionsType`](../../../../../types/bezier/type-aliases/DissectStylesOptionsType.md) | Optional styles options. |

## Returns

`Promise`\<[`SpeccerStylesReturnType`](../../../../../types/styles/type-aliases/SpeccerStylesReturnType.md)\>

- The computed styles.

## Example

```ts
const area = 'top-left';
const targetElement = document.getElementById('target');
const dissectionElement = document.getElementById('dissection');
const options = { isCurly: true };
const styles = await styles(area, targetElement, dissectionElement, options);
console.log(styles);
```

## Defined in

[features/dissect/utils/styles.ts:33](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/styles.ts#L33)
