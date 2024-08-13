[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/position](../README.md) / getRec

# Function: getRec()

> **getRec**(`sourceEl`, `targetEl`): `Promise`\<[`GetRecPropertiesInterface`](../../../types/interfaces/position/interfaces/GetRecPropertiesInterface.md)\>

Gets various positioning properties between two HTML elements.

## Parameters

• **sourceEl**: `HTMLElement`

The source HTML element.

• **targetEl**: `HTMLElement`

The target HTML element.

## Returns

`Promise`\<[`GetRecPropertiesInterface`](../../../types/interfaces/position/interfaces/GetRecPropertiesInterface.md)\>

- A promise that resolves to an object with positioning functions.

## Example

```ts
// Get positioning properties between two elements
const recProps = await getRec(sourceElement, targetElement);

// Get the absolute position properties
const absoluteProps = recProps.absolute();

// Get the position properties with the source element above the target element
const aboveProps = recProps.toTop();
```

## Defined in

[utils/position.ts:159](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L159)
