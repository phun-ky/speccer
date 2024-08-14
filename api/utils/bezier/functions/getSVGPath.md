[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/bezier](../README.md) / getSVGPath

# Function: getSVGPath()

> **getSVGPath**(`startEl`, `stopEl`, `options`): `Promise`\<`string`\>

Generates an SVG path for a straight line between two HTML elements.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `startEl` | `HTMLElement` | The starting HTML element. |
| `stopEl` | `HTMLElement` | The ending HTML element. |
| `options` | [`BezierPathOptionsType`](../../../types/bezier/type-aliases/BezierPathOptionsType.md) | Options for controlling the straight line. |

## Returns

`Promise`\<`string`\>

The SVG path string for the straight line.

## Example

```ts
const svgPath = getSVGPath(startElement, stopElement, {
  pos1: 'left',
  pos2: 'right',
});
```

## Defined in

[utils/bezier.ts:156](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L156)
