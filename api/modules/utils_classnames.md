[@phun-ky/speccer](../README.md) / utils/classnames

# Module: utils/classnames

## Functions

### cx

▸ **cx**(`cls`, `cls_obj?`): `string`

Generate CSS classes from a string and an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cls` | `string` | Additional CSS classes as a string. |
| `cls_obj?` | [`ClassNamesObjectMapInterface`](../interfaces/types_interfaces_classnames.ClassNamesObjectMapInterface.md) | A mapping of class names to boolean values. |

#### Returns

`string`

- A space-separated string of CSS class names.

**`Example`**

```ts
// Generate CSS classes from a string and an object
const classNames = cx('class1', { class2: true, class3: false });
console.log(classNames); // Example output: 'class1 class2'
```

#### Defined in

[utils/classnames.ts:97](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L97)

___

### remove

▸ **remove**(`el`, `cls`, `avoid?`): `void`

Remove CSS classes from an HTML element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `el` | `HTMLElement` | `undefined` | The HTML element from which classes should be removed. |
| `cls` | `string` | `undefined` | The CSS classes to remove, separated by spaces. |
| `avoid?` | `string` | `'noop'` | Classes to avoid removing. |

#### Returns

`void`

**`Example`**

```ts
// Remove classes from an HTML element
const element = document.getElementById('example');
remove(element, 'class1 class2');
```

#### Defined in

[utils/classnames.ts:72](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L72)

___

### set

▸ **set**(`el`, `cls`, `avoid?`): `void`

Add CSS classes to an HTML element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `el` | `HTMLElement` | `undefined` | The HTML element to which classes should be added. |
| `cls` | `string` | `undefined` | The CSS classes to add, separated by spaces. |
| `avoid?` | `string` | `'noop'` | Classes to avoid adding. |

#### Returns

`void`

**`Example`**

```ts
// Add classes to an HTML element
const element = document.getElementById('example');
set(element, 'class1 class2');
```

#### Defined in

[utils/classnames.ts:20](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L20)

___

### toggle

▸ **toggle**(`el`, `cls`, `avoid?`): `void`

Toggle CSS classes on an HTML element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `el` | `HTMLElement` | `undefined` | The HTML element on which classes should be toggled. |
| `cls` | `string` | `undefined` | The CSS classes to toggle, separated by spaces. |
| `avoid?` | `string` | `'noop'` | Classes to avoid toggling. |

#### Returns

`void`

**`Example`**

```ts
// Toggle classes on an HTML element
const element = document.getElementById('example');
toggle(element, 'class1 class2');
```

#### Defined in

[utils/classnames.ts:46](https://github.com/phun-ky/speccer/blob/main/src/utils/classnames.ts#L46)
