[**@phun-ky/speccer**](../README.md) • **Docs**

***

[@phun-ky/speccer](../README.md) / features/mark

# features/mark

## Functions

### create()

> **create**(`n`): `HTMLElement`

Create a marker element with an optional element type.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `n` | `string` | `'span'` | The element type. |

#### Returns

`HTMLElement`

- The created marker element.

#### Example

```typescript
const marker = create('div');
document.body.appendChild(marker);
```

#### Defined in

[features/mark/index.ts:18](https://github.com/phun-ky/speccer/blob/main/src/features/mark/index.ts#L18)

***

### element()

> **element**(`elementToMark`): `Promise`\<`void`\>

Create a marker element and add it to the body with styles matching a specified element.

![mark](https://github.com/phun-ky/speccer/blob/main/public/mark.png?raw=true)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `elementToMark` | `HTMLElement` | The target element to match styles with. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating and styling the marker element.

#### Example

```typescript
const elementToMark = document.getElementById('target');
element(elementToMark);
```

#### Defined in

[features/mark/index.ts:41](https://github.com/phun-ky/speccer/blob/main/src/features/mark/index.ts#L41)
