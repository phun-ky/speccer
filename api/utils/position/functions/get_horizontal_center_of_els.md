[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/position](../README.md) / get\_horizontal\_center\_of\_els

# Function: get\_horizontal\_center\_of\_els()

> **get\_horizontal\_center\_of\_els**(`modifier`, `startRect`, `targetRect`): `number`

Calculates the horizontal center of two elements.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modifier` | `number` | A modifier value. |
| `startRect` | `DOMRect` | The starting element's rectangle. |
| `targetRect` | `DOMRect` | The target element's rectangle. |

## Returns

`number`

- The horizontal center position.

## Example

```ts
// Calculate the horizontal center of two elements
const center = get_horizontal_center_of_els(0, startRect, targetRect);
```

## Defined in

[utils/position.ts:21](https://github.com/phun-ky/speccer/blob/main/src/utils/position.ts#L21)
