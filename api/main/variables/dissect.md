[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / [main](../README.md) / dissect

# Variable: dissect

> `const` **dissect**: `object`

## Type declaration

### create()

> **create**: (`textContent`, `area`, `n`) => `HTMLElement` = `dissectCreate`

Create a dissected element with optional text content, area description, and element type.

#### Parameters

• **textContent**: `string` = `''`

The text content to add to the element.

• **area**: `string`

The area description for styling.

• **n**: `string` = `'span'`

The element type.

#### Returns

`HTMLElement`

- The created dissected element.

#### Example

```ts
const dissectedElement = create('A', 'outline top', 'div');
document.body.appendChild(dissectedElement);
```

### element()

> **element**: (`sectionEl`) => `Promise`\<`void`\> = `dissectElement`

Create dissected elements based on the section element and its data-anatomy attributes.

![dissect](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)

#### Parameters

• **sectionEl**: `HTMLElement`

The section element containing dissected elements.

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating dissected elements.

#### Example

```ts
const sectionElement = document.getElementById('section');
element(sectionElement);
```

## Defined in

[main.ts:39](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L39)
