[@phun-ky/speccer](../index.md) / grid

# Variable: grid

```ts
const grid: {
  create: (
    targetElement: HTMLElement,
    styles: Partial<CSSStyleDeclaration>,
    options: SpeccerOptionsInterface
  ) => Promise<void>;
  element: (
    targetElement: HTMLElement,
    options?: SpeccerOptionsInterface
  ) => Promise<void>;
};
```

Defined in:
[main.ts:72](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L72)

This feature will highlight the grid spacing in a `display: grid;` element.

![pin](/speccer-grid-full-light.png?raw=true)

## Type Declaration

### create()

```ts
create: (
  targetElement: HTMLElement,
  styles: Partial<CSSStyleDeclaration>,
  options: SpeccerOptionsInterface
) => (Promise<void> = gridCreate);
```

Creates a visual grid overlay for a given target element.

#### Parameters

##### targetElement

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The target element to create the grid overlay for.

##### styles

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)>

The computed styles of the target element.

##### options

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

Options to determine what to draw

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

#### Example

```ts
const targetElement = document.getElementById('target');
if (targetElement) {
  const styles = window.getComputedStyle(targetElement);
  await create(targetElement, styles);
}
```

### element()

```ts
element: (targetElement: HTMLElement, options?: SpeccerOptionsInterface) =>
  (Promise<void> = gridElement);
```

Create a visual overlay to present the column gaps for a grid container

Adds a visual grid overlay to the target element if it has the appropriate data
attribute and is a grid.

![grid](/speccer-grid-full-light.png?raw=true)

#### Parameters

##### targetElement

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The target element to add the grid overlay to.

##### options?

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

Options.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

A promise that resolves once the overlay has been added.

#### Example

```ts
const targetElement = document.getElementById('target');

grid(targetElement);
```

##### Only rows

![grid](/speccer-grid-full-dark.png?raw=true)

```ts
const targetElement = document.getElementById('target');
const options = {
  type: 'grid',
  grid: {
    toggle: 'rows'
  }
};

grid(targetElement, options);
```

## Example

Use the following code, either for html or js:

```html
<div data-speccer="grid [columns|rows]" class="…">…</div>
```

```ts
const targetElement = document.getElementById('target');
const options = {
  type: 'grid',
  grid: {
    toggle: 'both'
  }
};

grid(targetElement, options);
```
