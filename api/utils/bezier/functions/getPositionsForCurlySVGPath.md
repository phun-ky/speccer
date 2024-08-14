[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/bezier](../README.md) / getPositionsForCurlySVGPath

# Function: getPositionsForCurlySVGPath()

> **getPositionsForCurlySVGPath**(`direction`): `object`

Returns positions for creating an SVG path for a curved line based on a cardinal direction.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `direction` | `string` | The cardinal direction ('east', 'west', 'south', 'north'). |

## Returns

`object`

Positions for creating an SVG path for a curved line.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `path1pos1` | `string` | [utils/bezier.ts:261](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L261) |
| `path1pos2` | `string` | [utils/bezier.ts:262](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L262) |
| `path2pos1` | `string` | [utils/bezier.ts:263](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L263) |
| `path2pos2` | `string` | [utils/bezier.ts:264](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L264) |

## Example

```ts
const positions = getPositionsForCurlySVGPath('west');
```

## Defined in

[utils/bezier.ts:226](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L226)
