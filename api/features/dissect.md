[**@phun-ky/speccer**](../README.md) • **Docs**

***

[@phun-ky/speccer](../README.md) / features/dissect

# features/dissect

This feature highlights the anatomy of an element.

![dissect](https://github.com/phun-ky/speccer/blob/main/public/anatomy.png?raw=true)

In your component examples, use the following attribute. Remember to use the `data-anatomy-section` as an attribute on a parent element to scope the marking.

## Example

```html
<div data-anatomy-section>
  <div
    data-anatomy="outline [full|enclose][curly] [left|right|top|bottom]"
    class="..."
  ></div>
</div>
```

## References

### create

Re-exports [create](dissect/utils/create.md#create)

### dissect

Re-exports [dissect](dissect/utils/dissect.md#dissect)

## Functions

### element()

> **element**(`sectionEl`): `Promise`\<`void`\>

Create dissected elements based on the section element and its data-anatomy attributes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sectionEl` | `HTMLElement` | The section element containing dissected elements. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating dissected elements.

#### Example

```ts
const sectionElement = document.getElementById('section');
element(sectionElement);
```

#### Defined in

[features/dissect/index.ts:41](https://github.com/phun-ky/speccer/blob/main/src/features/dissect/index.ts#L41)
