[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/position](../README.md) / offset

# Function: offset()

> **offset**(`targetEl`): `Promise`\<[`PositionPropertiesType`](../../../types/position/type-aliases/PositionPropertiesType.md)\>

Gets the offset properties of an HTML element.

## Parameters

• **targetEl**: `HTMLElement`

The target HTML element.

## Returns

`Promise`\<[`PositionPropertiesType`](../../../types/position/type-aliases/PositionPropertiesType.md)\>

- A promise that resolves to the offset properties.

## Example

```ts
// Get the offset properties of an element
const offsetProps = await offset(targetElement);
```

## Defined in

[utils/position.ts:59](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L59)
