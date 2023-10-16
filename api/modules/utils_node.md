[@phun-ky/speccer](../README.md) / utils/node

# Module: utils/node

## Functions

### after

▸ **after**(`el`, `newSibling`): ``null`` \| `Element`

Inserts an HTML element after another element in the DOM.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | ``null`` \| `HTMLElement` | The reference element after which the new element will be inserted. |
| `newSibling` | `HTMLElement` | The new element to be inserted. |

#### Returns

``null`` \| `Element`

**`Example`**

```ts
// Insert an element after another element
const referenceElement = document.getElementById('reference-element');
const newElement = document.createElement('div');
after(referenceElement, newElement);

#### Defined in

[utils/node.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/node.ts#L15)

___

### removeAll

▸ **removeAll**(`selector`, `el?`): `void`

Removes all elements matching a selector from the DOM.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `selector` | `string` | `undefined` | The CSS selector used to select elements for removal. |
| `el` | `Document` | `document` | The document context (default is the global `document` object). |

#### Returns

`void`

**`Example`**

```ts
// Remove all elements with a specific class from the document
removeAll('.my-class');
```

#### Defined in

[utils/node.ts:33](https://github.com/phun-ky/speccer/blob/main/src/utils/node.ts#L33)
