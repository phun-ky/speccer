[@phun-ky/speccer](../index.md) / removeSpeccerElement

# Function: removeSpeccerElement()

```ts
function removeSpeccerElement(el: HTMLElement): void;
```

Defined in:
[utils/remove-speccer-element.ts:18](https://github.com/phun-ky/speccer/blob/main/src/utils/remove-speccer-element.ts#L18)

Remove a speccer element by removing associated elements and SVG paths.

This function removes any speccer elements linked to the specified element and
also removes any SVG paths that might be associated with it.

## Parameters

### el

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The HTML element to unpin.

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
