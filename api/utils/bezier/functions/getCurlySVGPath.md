[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/bezier](../README.md) / getCurlySVGPath

# Function: getCurlySVGPath()

> **getCurlySVGPath**(`startEl`, `stopEl`, `options`): `Promise`\<`string`\>

Generates an SVG path for a curved line between two HTML elements.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `startEl` | `HTMLElement` | The starting HTML element. |
| `stopEl` | `HTMLElement` | The ending HTML element. |
| `options` | [`CurlyBezierPathOptionsType`](../../../types/bezier/type-aliases/CurlyBezierPathOptionsType.md) | Options for controlling the curved line. |

## Returns

`Promise`\<`string`\>

The SVG path string for the curved line.

## Example

```ts
const svgPath = getCurlySVGPath(startElement, stopElement, {
  pos1: 'top',
  pos2: 'bottom',
  firstSet: true,
  direction: 'south',
});
```

## Defined in

[utils/bezier.ts:95](https://github.com/phun-ky/speccer/blob/main/src/utils/bezier.ts#L95)
