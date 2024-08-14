[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/position](../README.md) / offsetWithCenter

# Function: offsetWithCenter()

> **offsetWithCenter**(`sourceEl`, `targetEl`): `Promise`\<[`PositionPropertiesType`](../../../types/position/type-aliases/PositionPropertiesType.md)\>

Gets the offset properties of an HTML element with its center aligned to another element.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceEl` | `HTMLElement` | The source HTML element. |
| `targetEl` | `HTMLElement` | The target HTML element. |

## Returns

`Promise`\<[`PositionPropertiesType`](../../../types/position/type-aliases/PositionPropertiesType.md)\>

- A promise that resolves to the offset properties.

## Example

```ts
// Get the offset properties of an element with its center aligned to another element
const offsetProps = await offsetWithCenter(sourceElement, targetElement);
```

## Defined in

[utils/position.ts:117](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L117)
