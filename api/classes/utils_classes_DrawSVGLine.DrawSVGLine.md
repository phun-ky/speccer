[@phun-ky/speccer](../README.md) / [utils/classes/DrawSVGLine](../modules/utils_classes_DrawSVGLine.md) / DrawSVGLine

# Class: DrawSVGLine

[utils/classes/DrawSVGLine](../modules/utils_classes_DrawSVGLine.md).DrawSVGLine

Class representing a DrawSVGLine instance.

## Constructors

### constructor

• **new DrawSVGLine**(`startElement`, `stopElement`)

Creates a new DrawSVGLine instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startElement` | `HTMLElement` | The starting element for the line. |
| `stopElement` | `HTMLElement` | The ending element for the line. |

#### Defined in

[utils/classes/DrawSVGLine.ts:23](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L23)

## Properties

### #canvas

• `Private` **#canvas**: ``null`` \| `HTMLElement` \| `SVGElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:12](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L12)

___

### #originalPathElement

• `Private` **#originalPathElement**: ``null`` \| `HTMLElement` \| `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L13)

___

### line

• **line**: `SVGPathElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:16](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L16)

___

### startElement

• **startElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:14](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L14)

___

### stopElement

• **stopElement**: `HTMLElement`

#### Defined in

[utils/classes/DrawSVGLine.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L15)

## Methods

### #init

▸ `Private` **#init**(`startElement`, `stopElement`): `void`

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

[utils/classes/DrawSVGLine.ts:33](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L33)

___

### connect

▸ **connect**(): `void`

Connects and draws the line.

#### Returns

`void`

#### Defined in

[utils/classes/DrawSVGLine.ts:68](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L68)

___

### draw

▸ **draw**(`path`): `Promise`<`void`\>

Draws the line based on the provided path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `SVGPathElement` | The SVGPathElement to be used as the base path. |

#### Returns

`Promise`<`void`\>

**`Throws`**

Will throw an error if no path is provided.

#### Defined in

[utils/classes/DrawSVGLine.ts:77](https://github.com/phun-ky/speccer/blob/main/src/utils/classes/DrawSVGLine.ts#L77)
