[@phun-ky/speccer](../README.md) / [utils/classes/DrawSVGCurlyBracket](../modules/utils_classes_DrawSVGCurlyBracket.md) / DrawSVGCurlyBracket

# Class: DrawSVGCurlyBracket

[utils/classes/DrawSVGCurlyBracket](../modules/utils_classes_DrawSVGCurlyBracket.md).DrawSVGCurlyBracket

Class representing a DrawSVGCurlyBracket instance.

## Constructors

### constructor

• **new DrawSVGCurlyBracket**(`startElement`, `stopElement`): [`DrawSVGCurlyBracket`](utils_classes_DrawSVGCurlyBracket.DrawSVGCurlyBracket.md)

Creates a new DrawSVGCurlyBracket instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startElement` | `HTMLElement` | The starting element for the bracket. |
| `stopElement` | `HTMLElement` | The ending element for the bracket. |

#### Returns

[`DrawSVGCurlyBracket`](utils_classes_DrawSVGCurlyBracket.DrawSVGCurlyBracket.md)

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:22](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L22)

## Properties

### #canvas

• `Private` **#canvas**: ``null`` \| `HTMLElement` \| `SVGElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:10](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L10)

___

### #originalPathElement

• `Private` **#originalPathElement**: ``null`` \| `HTMLElement` \| `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:11](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L11)

___

### firstPathElement

• **firstPathElement**: `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L14)

___

### secondPathElement

• **secondPathElement**: `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L15)

___

### startElement

• **startElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:12](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L12)

___

### stopElement

• **stopElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L13)

## Methods

### #getPathElement

▸ **#getPathElement**(`path`): `SVGPathElement`

Creates a new path element based on the provided path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `SVGPathElement` | The SVGPathElement to be used as the base path. |

#### Returns

`SVGPathElement`

A new SVGPathElement.

**`Throws`**

Will throw an error if no path is provided.

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:77](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L77)

___

### #init

▸ **#init**(`startElement`, `stopElement`): `void`

Initializes the DrawSVGCurlyBracket instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startElement` | `HTMLElement` | The starting element for the bracket. |
| `stopElement` | `HTMLElement` | The ending element for the bracket. |

#### Returns

`void`

**`Throws`**

Will throw an error if required elements are missing or not in the DOM.

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:32](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L32)

___

### connect

▸ **connect**(): `void`

Connects and draws the curly bracket.

#### Returns

`void`

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:67](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L67)

___

### draw

▸ **draw**(`path`): `Promise`\<`void`\>

Draws the curly bracket based on the provided path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `SVGPathElement` | The SVGPathElement to be used as the base path. |

#### Returns

`Promise`\<`void`\>

**`Throws`**

Will throw an error if no path is provided.

#### Defined in

[utils/classes/DrawSVGCurlyBracket.ts:101](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGCurlyBracket.ts#L101)
