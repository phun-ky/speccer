[@phun-ky/speccer](../README.md) / features/measure

# Module: features/measure

## Functions

### create

▸ **create**(`text?`, `area?`, `tag?`): `HTMLElement`

Create a measurement element with optional text, area, and element type.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` \| `number` | `''` | The text to display on the element. |
| `area` | ``null`` \| `string` | `''` | The area to specify with CSS class. |
| `tag` | `string` | `'span'` | The element type. |

#### Returns

`HTMLElement`

- The created measurement element.

**`Example`**

```ts
const measurement = create(100, 'width bottom', 'div');
document.body.appendChild(measurement);
```

#### Defined in

[features/measure/index.ts:28](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L28)

___

### element

▸ **element**(`targetEl`): `Promise`\<`void`\>

Create a measurement element and add it to the body with styles matching a specified target element.

![measure](https://github.com/phun-ky/speccer/blob/main/public/measure.png?raw=true)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetEl` | `HTMLElement` | The target element to match styles with. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating and styling the measurement element.

**`Example`**

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

#### Defined in

[features/measure/index.ts:57](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L57)
