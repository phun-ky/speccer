[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / [main](../README.md) / mark

# Variable: mark

> `const` **mark**: `object`

## Type declaration

### create()

> **create**: (`n`) => `HTMLElement` = `markCreate`

Create a marker element with an optional element type.

#### Parameters

• **n**: `string` = `'span'`

The element type.

#### Returns

`HTMLElement`

- The created marker element.

#### Example

```typescript
const marker = create('div');
document.body.appendChild(marker);
```

### element()

> **element**: (`elementToMark`) => `Promise`\<`void`\> = `markElement`

Create a marker element and add it to the body with styles matching a specified element.

![mark](https://github.com/phun-ky/speccer/blob/main/public/mark.png?raw=true)

#### Parameters

• **elementToMark**: `HTMLElement`

The target element to match styles with.

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating and styling the marker element.

#### Example

```typescript
const elementToMark = document.getElementById('target');
element(elementToMark);
```

## Defined in

[main.ts:49](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L49)
