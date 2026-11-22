[@phun-ky/speccer](../index.md) / removeSpeccer

# Function: removeSpeccer()

```ts
function removeSpeccer(): void;
```

Defined in:
[config/browser.ts:218](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L218)

Removes everything speccer has added to the page, and stops it:

- removes every annotation, including the SVG lines, circles and curly brackets,
  but keeps the `#ph-speccer-svg` element and its original path
- stops draws that are still in progress from adding annotations
- disconnects the lazy-loading observers
- removes the resize listener speccer added in script mode

Call it when a component unmounts or the view changes. Call `speccer()`, or a
mode, to draw again.

## Returns

`void`

## Example

```ts
import { removeSpeccer } from '@phun-ky/speccer';

removeSpeccer();
```
