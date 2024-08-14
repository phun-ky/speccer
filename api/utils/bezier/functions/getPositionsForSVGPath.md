[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/bezier](../README.md) / getPositionsForSVGPath

# Function: getPositionsForSVGPath()

> **getPositionsForSVGPath**(`direction`): `object`

Returns positions for creating an SVG path based on a cardinal direction.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `direction` | `string` | The cardinal direction ('east', 'west', 'south', 'north'). |

## Returns

`object`

Positions for creating an SVG path.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `pos1` | `string` | [utils/bezier.ts:212](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L212) |
| `pos2` | `string` | [utils/bezier.ts:212](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L212) |

## Example

```ts
const positions = getPositionsForSVGPath('east');
```

## Defined in

[utils/bezier.ts:188](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L188)
