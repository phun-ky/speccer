[@phun-ky/speccer](../README.md) / features/spacing

# Module: features/spacing

## Functions

### create

▸ **create**(`text?`, `tag?`): `HTMLElement`

Create a spacing element with optional text content.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` \| `number` | `''` | The optional text content for the spacing element. |
| `tag` | `string` | `'span'` | The HTML tag for the element (default is 'span'). |

#### Returns

`HTMLElement`

- The created spacing element.

**`Example`**

```ts
const spacingElement = create(20, 'div');
document.body.appendChild(spacingElement);
```

#### Defined in

[features/spacing/index.ts:26](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/index.ts#L26)

___

### element

▸ **element**(`targetEl`): `Promise`<`void`\>

Create and position spacing elements based on the target element's computed spacing styles.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetEl` | `HTMLElement` | The target element to create spacing elements for. |

#### Returns

`Promise`<`void`\>

- A promise that resolves after creating and positioning the spacing elements.

**`Example`**

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

#### Defined in

[features/spacing/index.ts:52](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/index.ts#L52)
