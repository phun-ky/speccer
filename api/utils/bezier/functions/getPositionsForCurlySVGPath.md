[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/bezier](../README.md) / getPositionsForCurlySVGPath

# Function: getPositionsForCurlySVGPath()

> **getPositionsForCurlySVGPath**(`direction`): `object`

Returns positions for creating an SVG path for a curved line based on a cardinal direction.

## Parameters

• **direction**: `string`

The cardinal direction ('east', 'west', 'south', 'north').

## Returns

`object`

Positions for creating an SVG path for a curved line.

### path1pos1

> **path1pos1**: `string`

### path1pos2

> **path1pos2**: `string`

### path2pos1

> **path2pos1**: `string`

### path2pos2

> **path2pos2**: `string`

## Example

```ts
const positions = getPositionsForCurlySVGPath('west');
```

## Defined in

[utils/bezier.ts:226](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L226)
