[**@phun-ky/speccer**](../README.md) • **Docs**

***

[@phun-ky/speccer](../README.md) / utils/attributes

# utils/attributes

## Functions

### removeAttributes()

> **removeAttributes**(`el`, `attrs`?): `void`

Removes attributes from an HTML element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `HTMLElement` | The HTML element to remove attributes from. |
| `attrs`? | `string`[] | The attributes to remove as a key-value mapping. |

#### Returns

`void`

#### Example

```ts
const element = document.getElementById('myElement');
removeAttributes(element, ['class', 'data-value']);
```

#### Defined in

[utils/attributes.ts:44](https://github.com/phun-ky/speccer/blob/main/src/utils/attributes.ts#L44)

***

### setAttributes()

> **setAttributes**(`el`, `attrs`?): `void`

Sets attributes on an HTML element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `HTMLElement` | The HTML element to set attributes on. |
| `attrs`? | [`AttributesMapInterface`](../types/interfaces/attributes.md#attributesmapinterface) | The attributes to set as a key-value mapping. |

#### Returns

`void`

#### Example

```ts
const element = document.getElementById('myElement');
setAttributes(element, {
  'class': 'active',
  'data-value': '123',
});
```

#### Defined in

[utils/attributes.ts:19](https://github.com/phun-ky/speccer/blob/main/src/utils/attributes.ts#L19)
