[@phun-ky/speccer](../README.md) / features/typography/utils/position

# Module: features/typography/utils/position

## Functions

### position

▸ **position**(`area`, `targetEl`, `speccerEl`): `Promise`<{ `left`: `string` ; `top`: `string`  }\>

Calculate the position for the speccer element relative to the target element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `area` | ``null`` \| `string` | The area information for positioning. |
| `targetEl` | `HTMLElement` | The target element. |
| `speccerEl` | `HTMLElement` | The speccer element to position. |

#### Returns

`Promise`<{ `left`: `string` ; `top`: `string`  }\>

- A promise that resolves with the calculated position.

**`Example`**

```ts
const targetElement = document.getElementById('target');
const speccerElement = document.getElementById('speccer');
const area = 'top';
const position = await position(area, targetElement, speccerElement);
console.log(position); // { left: '10px', top: '20px' }
```

#### Defined in

[features/typography/utils/position.ts:28](https://github.com/phun-ky/speccer/blob/main/src/features/typography/utils/position.ts#L28)
