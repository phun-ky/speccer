[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/direction-of-element](../README.md) / direction\_of\_element

# Function: direction\_of\_element()

> **direction\_of\_element**(`options`): `Promise`\<`string`\>

Get the direction of an element based on its position relative to another element.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options for direction calculation. |
| `options.crude`? | `boolean` | If the direction should be calculated crudely (NSEW). |
| `options.start` | `HTMLElement` | The starting HTML element. |
| `options.stop` | `HTMLElement` | The stopping HTML element. |

## Returns

`Promise`\<`string`\>

- The calculated direction.

## Example

```ts
// Get the direction of one element relative to another
const startElement = document.getElementById('startElement');
const stopElement = document.getElementById('stopElement');
const direction = await direction_of_element({ start: startElement, stop: stopElement });
```

## Defined in

[utils/direction-of-element.ts:21](https://github.com/phun-ky/speccer/blob/main/src/utils/direction-of-element.ts#L21)
