[@phun-ky/speccer](../README.md) / features/a11y

# Module: features/a11y

## Functions

### create

▸ **create**(`type?`, `content?`, `n?`): `HTMLElement`

Creates an HTML element based on the specified type.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type?` | `string` | `'tabstops'` | Type of element ('tabstops', 'landmark', 'region'). |
| `content?` | `unknown` | `undefined` | Content to be added to the element. |
| `n?` | `string` | `'span'` | HTML tag name (default is 'span'). |

#### Returns

`HTMLElement`

The created HTML element.

**`Example`**

```ts
const tabElement = create('tabstops', 'Tab Content', 'div');
```

#### Defined in

[features/a11y/index.ts:27](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/index.ts#L27)

___

### element

▸ **element**(`targetEl`, `content?`, `type`): `Promise`\<`void`\>

Adds an accessibility element to the document body based on the target element and type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetEl` | `HTMLElement` | Target HTML element. |
| `content?` | `unknown` | Content to be added to the accessibility element. |
| `type` | `string` | Type of accessibility element ('tabstops' or 'landmark'). |

#### Returns

`Promise`\<`void`\>

A Promise resolving when the operation is complete.

**`Example`**

```ts
const targetElement = document.getElementById('myElement');
if (targetElement) {
  await element(targetElement, 'Landmark Content', 'landmark');
}
```

#### Defined in

[features/a11y/index.ts:66](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/index.ts#L66)

___

### init

▸ **init**(): `void`

Initializes the accessibility elements on the document.

#### Returns

`void`

**`Example`**

```ts
init();
```

#### Defined in

[features/a11y/index.ts:159](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/index.ts#L159)

___

### shortcut

▸ **shortcut**(`el`, `shortcutString`): `Promise`\<`void`\>

Adds a shortcut element to the document body based on the provided HTML element and shortcut string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | Target HTML element. |
| `shortcutString` | `string` | Shortcut string to be displayed. |

#### Returns

`Promise`\<`void`\>

A Promise resolving when the operation is complete.

**`Example`**

```ts
const shortcutElement = document.getElementById('shortcutElement');
if (shortcutElement) {
  await shortcut(shortcutElement, 'Ctrl + Shift + A');
}
```

#### Defined in

[features/a11y/index.ts:107](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/index.ts#L107)
