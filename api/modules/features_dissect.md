[@phun-ky/speccer](../README.md) / features/dissect

# Module: features/dissect

## Functions

### create

▸ **create**(`textContent?`, `area`, `n?`): `HTMLElement`

Create a dissected element with optional text content, area description, and element type.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `textContent` | `string` | `''` | The text content to add to the element. |
| `area` | `string` | `undefined` | The area description for styling. |
| `n` | `string` | `'span'` | The element type. |

#### Returns

`HTMLElement`

- The created dissected element.

**`Example`**

```ts
const dissectedElement = create('A', 'outline top', 'div');
document.body.appendChild(dissectedElement);
```

#### Defined in

[features/dissect/index.ts:26](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/index.ts#L26)

___

### element

▸ **element**(`sectionEl`): `Promise`\<`void`\>

Create dissected elements based on the section element and its data-anatomy attributes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sectionEl` | `HTMLElement` | The section element containing dissected elements. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating dissected elements.

**`Example`**

```ts
const sectionElement = document.getElementById('section');
element(sectionElement);
```

#### Defined in

[features/dissect/index.ts:64](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/index.ts#L64)
