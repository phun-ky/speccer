[@phun-ky/speccer](../README.md) / features/dissect/utils/styles

# Module: features/dissect/utils/styles

## Functions

### styles

▸ **styles**(`area`, `targetEl`, `dissectionEl`, `options?`): `Promise`\<\{ `height?`: `string` ; `left`: `string` ; `top`: `string` ; `width?`: `string`  }\>

Get styles for dissected elements based on the specified area and options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `area` | `string` | The area description. |
| `targetEl` | `HTMLElement` | The target element. |
| `dissectionEl` | `HTMLElement` | The dissection element. |
| `options?` | [`DissectStylesOptionsType`](types_bezier.md#dissectstylesoptionstype) | Optional styles options. |

#### Returns

`Promise`\<\{ `height?`: `string` ; `left`: `string` ; `top`: `string` ; `width?`: `string`  }\>

- The computed styles.

**`Example`**

```ts
const area = 'top-left';
const targetElement = document.getElementById('target');
const dissectionElement = document.getElementById('dissection');
const options = { isCurly: true };
const styles = await styles(area, targetElement, dissectionElement, options);
console.log(styles);
```

#### Defined in

[features/dissect/utils/styles.ts:32](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/utils/styles.ts#L32)
