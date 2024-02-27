[@phun-ky/speccer](../README.md) / utils/style-property

# Module: utils/style-property

## Functions

### getParentThatIsSticky

▸ **getParentThatIsSticky**(`element`): `Promise`\<``null`` \| `HTMLElement`\>

Finds the nearest parent element with 'position: sticky'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | The target element. |

#### Returns

`Promise`\<``null`` \| `HTMLElement`\>

- A promise that resolves to the sticky parent element if found, or null if none.

**`Example`**

```ts
// Usage example:
const stickyParent = await getParentThatIsSticky(myElement);
console.log(stickyParent); // HTMLElement or null
```

#### Defined in

[utils/style-property.ts:79](https://github.com/phun-ky/speccer/blob/main/src/utils/style-property.ts#L79)

___

### isSticky

▸ **isSticky**(`element`): `Promise`\<`boolean`\>

Checks if an element has 'position: sticky'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | The target element. |

#### Returns

`Promise`\<`boolean`\>

- A promise that resolves to true if the element has 'position: sticky', false otherwise.

**`Example`**

```ts
// Usage example:
const isElementSticky = await isSticky(myElement);
console.log(isElementSticky); // true or false
```

#### Defined in

[utils/style-property.ts:96](https://github.com/phun-ky/speccer/blob/main/src/utils/style-property.ts#L96)
