[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/position](../README.md) / get\_vertical\_center\_of\_els

# Function: get\_vertical\_center\_of\_els()

> **get\_vertical\_center\_of\_els**(`modifier`, `startRect`, `targetRect`): `number`

Calculates the vertical center of two elements.

## Parameters

• **modifier**: `number`

A modifier value.

• **startRect**: `DOMRect`

The starting element's rectangle.

• **targetRect**: `DOMRect`

The target element's rectangle.

## Returns

`number`

- The vertical center position.

## Example

```ts
// Calculate the vertical center of two elements
const center = get_vertical_center_of_els(0, startRect, targetRect);
```

## Defined in

[utils/position.ts:41](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L41)
