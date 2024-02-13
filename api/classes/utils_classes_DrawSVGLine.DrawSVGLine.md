[@phun-ky/speccer](../README.md) / [utils/classes/DrawSVGLine](../modules/utils_classes_DrawSVGLine.md) / DrawSVGLine

# Class: DrawSVGLine

[utils/classes/DrawSVGLine](../modules/utils_classes_DrawSVGLine.md).DrawSVGLine

Class representing a DrawSVGLine instance.

## Constructors

### constructor

• **new DrawSVGLine**(`startElement`, `stopElement`): [`DrawSVGLine`](utils_classes_DrawSVGLine.DrawSVGLine.md)

Creates a new DrawSVGLine instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startElement` | `HTMLElement` | The starting element for the line. |
| `stopElement` | `HTMLElement` | The ending element for the line. |

#### Returns

[`DrawSVGLine`](utils_classes_DrawSVGLine.DrawSVGLine.md)

#### Defined in

[utils/classes/DrawSVGLine.ts:21](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L21)

## Properties

### #canvas

• `Private` **#canvas**: ``null`` \| `HTMLElement` \| `SVGElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:10](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L10)

___

### #originalPathElement

• `Private` **#originalPathElement**: ``null`` \| `HTMLElement` \| `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:11](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L11)

___

### line

• **line**: `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L14)

___

### startElement

• **startElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:12](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L12)

___

### stopElement

• **stopElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L13)

## Methods

### #init

▸ **#init**(`startElement`, `stopElement`): `void`

Initializes the DrawSVGLine instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startElement` | `HTMLElement` | The starting element for the line. |
| `stopElement` | `HTMLElement` | The ending element for the line. |

#### Returns

`void`

**`Throws`**

Will throw an error if required elements are missing or not in the DOM.

#### Defined in

[utils/classes/DrawSVGLine.ts:31](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L31)

___

### connect

▸ **connect**(): `void`

Connects and draws the line.

#### Returns

`void`

#### Defined in

[utils/classes/DrawSVGLine.ts:66](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L66)

___

### draw

▸ **draw**(`path`): `Promise`\<`void`\>

Draws the line based on the provided path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `SVGPathElement` | The SVGPathElement to be used as the base path. |

#### Returns

`Promise`\<`void`\>

**`Throws`**

Will throw an error if no path is provided.

#### Defined in

[utils/classes/DrawSVGLine.ts:75](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L75)
