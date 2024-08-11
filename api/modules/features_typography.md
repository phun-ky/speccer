[@phun-ky/speccer](../README.md) / features/typography

# Module: features/typography

## Functions

### create

▸ **create**(`html`, `area`): `HTMLElement`

Create a DOM element with provided HTML and optional CSS class names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `html` | `string` | The HTML content to be set in the created element. |
| `area` | ``null`` \| `string` | The optional CSS class names to add. |

#### Returns

`HTMLElement`

- The created DOM element.

**`Example`**

```ts
const htmlContent = '<p>This is some HTML content.</p>';
const cssClass = 'custom-class';
const createdElement = create(htmlContent, cssClass);
document.body.appendChild(createdElement);
```

#### Defined in

[features/typography/index.ts:23](https://github.com/phun-ky/speccer/blob/main/src/features/typography/index.ts#L23)

___

### element

▸ **element**(`targetEl`): `Promise`\<`void`\>

Create a specced typography element for a given target element.

![typography](https://github.com/phun-ky/speccer/blob/main/public/typography.png?raw=true)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetEl` | `HTMLElement` | The target element to specc typography for. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves once typography element is created and positioned.

**`Example`**

```ts
const targetElement = document.querySelector('.target');
if (targetElement) {
  element(targetElement);
}
```

#### Defined in

[features/typography/index.ts:58](https://github.com/phun-ky/speccer/blob/main/src/features/typography/index.ts#L58)
