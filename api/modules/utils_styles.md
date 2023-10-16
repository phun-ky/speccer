[@phun-ky/speccer](../README.md) / utils/styles

# Module: utils/styles

## Functions

### add

▸ **add**(`el`, `styles`): `Promise`<`void`\>

Adds CSS styles to an HTMLElement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | The HTMLElement to apply styles to. |
| `styles` | `object` \| { `key`: `string` ; `value`: `string`  }[] | An object or an array of objects containing CSS styles to apply. |

#### Returns

`Promise`<`void`\>

- A Promise that resolves after styles are applied.

**`Example`**

```ts
// Apply styles as an object
const element = document.getElementById('my-element');
await add(element, { color: 'red', fontSize: '16px' });

// Apply styles as an array of objects
const styles = [
  { key: 'color', value: 'blue' },
  { key: 'backgroundColor', value: 'yellow' }
];
await add(element, styles);
```

#### Defined in

[utils/styles.ts:26](https://github.com/phun-ky/speccer/blob/main/src/utils/styles.ts#L26)

___

### get

▸ **get**(`el`): `Promise`<`CSSStyleDeclaration`\>

Gets the computed CSS styles of an HTMLElement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | The HTMLElement to get computed styles from. |

#### Returns

`Promise`<`CSSStyleDeclaration`\>

- A Promise that resolves with the computed CSS styles.

**`Example`**

```ts
// Get computed styles of an element
const element = document.getElementById('my-element');
const computedStyles = await get(element);
console.log(computedStyles.color); // Logs the color property value
```

#### Defined in

[utils/styles.ts:68](https://github.com/phun-ky/speccer/blob/main/src/utils/styles.ts#L68)
