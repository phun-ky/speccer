[**@phun-ky/speccer**](../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../README.md) / [utils/classes/DrawSVGLine](../README.md) / DrawSVGLine

# Class: DrawSVGLine

Class representing a DrawSVGLine instance.

## Constructors

### new DrawSVGLine()

> **new DrawSVGLine**(`startElement`, `stopElement`): [`DrawSVGLine`](DrawSVGLine.md)

Creates a new DrawSVGLine instance.

#### Parameters

• **startElement**: `HTMLElement`

The starting element for the line.

• **stopElement**: `HTMLElement`

The ending element for the line.

#### Returns

[`DrawSVGLine`](DrawSVGLine.md)

#### Defined in

[utils/classes/DrawSVGLine.ts:21](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L21)

## Properties

### line

> **line**: `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L14)

***

### startElement

> **startElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:12](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L12)

***

### stopElement

> **stopElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L13)

## Methods

### connect()

> **connect**(): `void`

Connects and draws the line.

#### Returns

`void`

#### Defined in

[utils/classes/DrawSVGLine.ts:66](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L66)

***

### draw()

> **draw**(`path`): `Promise`\<`void`\>

Draws the line based on the provided path.

#### Parameters

• **path**: `SVGPathElement`

The SVGPathElement to be used as the base path.

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if no path is provided.

#### Defined in

[utils/classes/DrawSVGLine.ts:75](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L75)
