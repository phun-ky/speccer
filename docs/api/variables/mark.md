[@phun-ky/speccer](../index.md) / mark

# Variable: mark

```ts
const mark: {
  create: (id: string, n: string) => HTMLElement;
  element: (
    targetElement: HTMLElement,
    options?: SpeccerOptionsInterface
  ) => Promise<void>;
};
```

Defined in:
[main.ts:207](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L207)

This feature marks given element

![pin](/speccer-pin-mark-light.png?raw=true)

## Type Declaration

### ~~create~~

```ts
create: (id: string, n: string) => (HTMLElement = markCreate);
```

Create a marker element with an optional element type.

#### Parameters

##### id

`string`

The id.

##### n?

`string` = `'span'`

The element type.

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

- The created marker element.

#### Example

```typescript
const marker = create('div');
document.body.appendChild(marker);
```

#### Deprecated

Internal node builder, removed from the public API in 12.0. Use `mark.element`,
see https://github.com/phun-ky/speccer/issues/567

### element

```ts
element: (targetElement: HTMLElement, options?: SpeccerOptionsInterface) =>
  (Promise<void> = markElement);
```

Create a marker element and add it to the body with styles matching a specified
element.

![mark](/speccer-pin-mark-light.png?raw=true)

#### Parameters

##### targetElement

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The target element to match styles with.

##### options?

[`SpeccerOptionsInterface`](../interfaces/SpeccerOptionsInterface.md)

Options, merged over the ones from `data-speccer`.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

- A promise that resolves after creating and styling the marker element.

#### Example

```typescript
const targetElement = document.getElementById('target');
mark(targetElement);

// Without a data-speccer attribute
mark(targetElement, { type: 'mark' });
```

## Example

Use the following code, either for html or js:

```html
<div data-speccer="mark" class="...">…</div>
```

```ts
const targetElement = document.getElementById('target');
const options = {
  type: 'mark'
};

mark(targetElement, options);
```
