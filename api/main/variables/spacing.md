[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / [main](../README.md) / spacing

# Variable: spacing

> `const` **spacing**: `object`

## Type declaration

### create()

> **create**: (`text`, `tag`) => `HTMLElement` = `spacingCreate`

Create a spacing element with optional text content.

#### Parameters

• **text**: `string` \| `number` = `''`

The optional text content for the spacing element.

• **tag**: `string` = `'span'`

The HTML tag for the element (default is 'span').

#### Returns

`HTMLElement`

- The created spacing element.

#### Example

```ts
const spacingElement = create(20, 'div');
document.body.appendChild(spacingElement);
```

### element()

> **element**: (`targetEl`) => `Promise`\<`void`\> = `spacingElement`

Create and position spacing elements based on the target element's computed spacing styles.

![spacing](https://github.com/phun-ky/speccer/blob/main/public/spacing.png?raw=true)

#### Parameters

• **targetEl**: `HTMLElement`

The target element to create spacing elements for.

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating and positioning the spacing elements.

#### Example

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

## Defined in

[main.ts:35](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L35)
