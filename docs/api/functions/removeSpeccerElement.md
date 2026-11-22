[@phun-ky/speccer](../index.md) / removeSpeccerElement

# Function: removeSpeccerElement()

```ts
function removeSpeccerElement(el: HTMLElement | null): void;
```

Defined in:
[utils/remove-speccer-element.ts:18](https://github.com/phun-ky/speccer/blob/main/src/utils/remove-speccer-element.ts#L18)

Remove the annotations of an element: every element speccer generated for it,
and its SVG lines, curly brackets and circles.

## Parameters

### el

| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) |
`null`

The annotated element. `null` does nothing.

## Returns

`void`

This function does not return a value.

## Example

```ts
const element = document.getElementById('my-element');
if (element) {
  removeSpeccerElement(element);
}
```
