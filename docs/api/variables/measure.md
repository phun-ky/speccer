[@phun-ky/speccer](../index.md) / measure

# Variable: measure

```ts
const measure: {
  create: (
    text: string | number,
    options: SpeccerOptionsInterface,
    id: string,
    tag: string
  ) => HTMLElement;
  element: (
    targetElement: HTMLElement,
    options?: SpeccerOptionsInterface
  ) => Promise<void>;
};
```

Defined in:
[main.ts:159](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L159)

This feature measures given element

![pin](/speccer-pin-measure-height-light.png?raw=true)

## Type Declaration

### create()

```ts
create: (
  text: string | number,
  options: SpeccerOptionsInterface,
  id: string,
  tag: string
) => (HTMLElement = measureCreate);
```

Create a measurement element with optional text, area, and element type.

#### Parameters

##### text

The text to display on the element.

`string` | `number`

##### options

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

The options.

##### id

`string`

The element id.

##### tag

`string` = `'span'`

The element type.

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created measurement element.

#### Example

```ts
const measurement = create(100, 'width bottom', 'div');
document.body.appendChild(measurement);
```

### element()

```ts
element: (targetElement: HTMLElement, options?: SpeccerOptionsInterface) =>
  (Promise<void> = measureElement);
```

Create a measurement element and add it to the body with styles matching a
specified target element based on the attribute values from `data-speccer`.

![measure](/speccer-measure-right-full-light.png?raw=true)

#### Parameters

##### targetElement

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The target element to match styles with.

##### options?

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

Options.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

- A promise that resolves after creating and styling the measurement element.

#### Example

##### Height to the right

```ts
const targetElement = document.getElementById('target');
const options = {
  position: 'right',
  measure: {
    height: true
  }
};

measure(targetElement, options);
```

##### Slim width to the bottom

![measure](/speccer-measure-bottom-dark.png?raw=true)

```ts
const targetElement = document.getElementById('target');
const options = {
  position: 'bottom',
  measure: {
    slim: true,
    width: true
  }
};

measure(targetElement, options);
```

## Example

Use the following code, either for html or js:

```html
<div
  data-speccer="measure [height left|right] | [width top|bottom]"
  class="..."
>
  …
</div>
```

```ts
const targetElement = document.getElementById('target');
const options = {
  position: 'right',
  measure: {
    height: true
  }
};

measure(targetElement, options);
```
