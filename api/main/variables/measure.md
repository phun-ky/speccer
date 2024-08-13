[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / [main](../README.md) / measure

# Variable: measure

> `const` **measure**: `object`

## Type declaration

### create()

> **create**: (`text`, `area`, `tag`) => `HTMLElement` = `measureCreate`

Create a measurement element with optional text, area, and element type.

#### Parameters

• **text**: `string` \| `number` = `''`

The text to display on the element.

• **area**: `null` \| `string` = `''`

The area to specify with CSS class.

• **tag**: `string` = `'span'`

The element type.

#### Returns

`HTMLElement`

- The created measurement element.

#### Example

```ts
const measurement = create(100, 'width bottom', 'div');
document.body.appendChild(measurement);
```

### element()

> **element**: (`targetEl`) => `Promise`\<`void`\> = `measureElement`

Create a measurement element and add it to the body with styles matching a specified target element.

![measure](https://github.com/phun-ky/speccer/blob/main/public/measure.png?raw=true)

#### Parameters

• **targetEl**: `HTMLElement`

The target element to match styles with.

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating and styling the measurement element.

#### Example

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

## Defined in

[main.ts:46](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L46)
