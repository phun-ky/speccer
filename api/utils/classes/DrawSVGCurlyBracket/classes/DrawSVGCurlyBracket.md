[**@phun-ky/speccer**](../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../README.md) / [utils/classes/DrawSVGCurlyBracket](../README.md) / DrawSVGCurlyBracket

# Class: DrawSVGCurlyBracket

Class representing a DrawSVGCurlyBracket instance.

## Constructors

### new DrawSVGCurlyBracket()

> **new DrawSVGCurlyBracket**(`startElement`, `stopElement`): [`DrawSVGCurlyBracket`](DrawSVGCurlyBracket.md)

Creates a new DrawSVGCurlyBracket instance.

#### Parameters

• **startElement**: `HTMLElement`

The starting element for the bracket.

• **stopElement**: `HTMLElement`

The ending element for the bracket.

#### Returns

[`DrawSVGCurlyBracket`](DrawSVGCurlyBracket.md)

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:22](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L22)

## Properties

### firstPathElement

> **firstPathElement**: `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L14)

***

### secondPathElement

> **secondPathElement**: `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L15)

***

### startElement

> **startElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:12](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L12)

***

### stopElement

> **stopElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L13)

## Methods

### connect()

> **connect**(): `void`

Connects and draws the curly bracket.

#### Returns

`void`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:67](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L67)

***

### draw()

> **draw**(`path`): `Promise`\<`void`\>

Draws the curly bracket based on the provided path.

#### Parameters

• **path**: `SVGPathElement`

The SVGPathElement to be used as the base path.

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if no path is provided.

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:101](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L101)
