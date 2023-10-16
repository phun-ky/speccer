[@phun-ky/speccer](../README.md) / features/typography/utils/template

# Module: features/typography/utils/template

## Functions

### template

▸ **template**(`targetEl`): `Promise`<`string`\>

Generate a HTML string for typography styles of a target element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetEl` | `HTMLElement` | The target element for which to generate typography styles. |

#### Returns

`Promise`<`string`\>

- A promise that resolves with the HTML string.

**`Example`**

```ts
const targetElement = document.getElementById('target');
const typographyStyles = await template(targetElement);
console.log(typographyStyles);
```

#### Defined in

[features/typography/utils/template.ts:17](https://github.com/phun-ky/speccer/blob/main/src/features/typography/utils/template.ts#L17)
