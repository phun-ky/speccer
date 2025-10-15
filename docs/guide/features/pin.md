# Pin

![Image of speccer](/anatomy.png)

::: info

For more technical documentation, see the relevant documentation
[under the API-section](/api/variables/pin).

:::

## Usage

### In the HTML

In the html use the following attribute. Remember to use the
`data-speccer="pin-area"`-attribute on a parent element to scope the marking.

```html
<div data-speccer="pin-area">
  <div
    data-speccer="pin [bracket [curly] |enclose] [left|right|top|bottom]"
    class="…"
  ></div>
</div>
```

This will place a pin to the outline of the element. Default is `top`.

If no [custom literals](#custom-literals) is used, the default literals are
used:

````typescript
/**
 * Array of uppercase letters.
 *
 * @type {string[]}
 * @example
 * ```ts
 * // Access the array of uppercase letters
 * const letters = SPECCER_LITERALS;
 * console.log(letters); // Example output: ['A', 'B', 'C', ...]
 * ```
 */
export const SPECCER_LITERALS: string[] = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
````

Which means that if you have more pins than the character set, we try one more
time with double characters, like so: `Aa, Bb, …` until we reach the end of the
set. If you use the HTML way, and add a `data-speccer="pin-area"` to the parent
container, the literals will reset for the next `data-speccer="pin-area"`.

### Programmatically

```typescript
import { pin } from 'https://esm.sh/@phun-ky/speccer';
import type {
  SpeccerOptionsInterface,
  SpeccerPositionType
} from 'https://esm.sh/@phun-ky/speccer';

const { pinElement } = pin as {
  pinElement: (
    target: HTMLElement,
    parent?: HTMLElement | null,
    label?: string,
    options?: SpeccerOptionsInterface
  ) => void;
};
const element = document.querySelector('…');
const options = {
  slug: 'pinQuick',
  position: 'left' | 'top' | 'right' | 'bottom',
  type: 'pin',
  pin: {
    bracket: [false | true],
    enclose: [false | true],
    subtle: [false | true],
    parent: [false | true],
    text: [false | true],
    useSVGLine: [false | true],
    useCurlyBrackets: [false | true]
  }
};
await pinElement(element, element.parentElement, 'A', options);
```

## Default

![Image of speccer](/speccer-pin-default-light.png)

::: code-group

```html [index.html]
<div data-speccer="pin-area">
  <div data-speccer="pin" class="…"></div>
</div>
```

```typescript [main.ts]
const element = document.querySelector('…');
const options = {
  slug: 'pinQuick',
  type: 'pin'
};
await pinElement(element, element.parentElement, 'A', options);
```

:::

## Bracket

::: code-group

```html [index.html]
<div data-speccer="pin-area">
  <div data-speccer="pin bracket" class="…"></div>
</div>
```

```typescript [main.ts]
const element = document.querySelector('…');
const options = {
  slug: 'pinQuick',
  type: 'pin',
  pin: {
    bracket: true
  }
};
await pinElement(element, element.parentElement, 'A', options);
```

:::

## Enclose

![Image of speccer](/speccer-pin-enclose-light.png)

::: code-group

```html [index.html]
<div data-speccer="pin-area">
  <div data-speccer="pin enclose" class="…"></div>
</div>
```

```typescript [main.ts]
const element = document.querySelector('…');
const options = {
  slug: 'pinQuick',
  type: 'pin',
  pin: {
    enclose: true
  }
};
await pinElement(element, element.parentElement, 'A', options);
```

:::

## Align With Parent Container

![Screenshot of the dissection/anatomy feature where the pins are aligned with the parent container](/speccer-pin-parent-align-default-light.png)

You can also align the pins to the parent container.

::: code-group

```html [index.html]
<div data-speccer="pin-area">
  <div data-speccer="pin parent [left|right|top|bottom]" class="…"></div>
</div>
```

```typescript [main.ts]
const element = document.querySelector('…');
const options = {
  slug: 'pinQuick',
  type: 'pin',
  pin: {
    parent: true
  }
};
await pinElement(element, element.parentElement, 'A', options);
```

:::

::: info Note

Only works with `pin [left|right|top|bottom]`, and not with `enclose`, `bracket`
or `curly`!

:::

![Screenshot of the dissection/anatomy feature where the pins are aligned with the parent container](/speccer-pin-parent-align-light.png)

## Pin With Text

![Image of text pin option](/speccer-pin-text-light.png)

If you want _text-in-place_ pinning feature, instead of referencing the pins,
you can use the `text` feature:

```html
<input
  type="text"
  …
  data-speccer="pin left text"
  data-speccer-title="Static text"
  data-speccer-description="Document size [xx] by [yy][units]"
  …
/>
```

Per now, this feature has no programmatic equivalent.

::: info

Headings (h1-h6) automatically get a coloured tag above the title, reflecting
the tag-name of the heading. You can customize this with
[the CSS variables](/guide/tutorials/customization).

:::

#### Customize

If you want to customize the look and feel of the text UI, you can style these
CSS classes:

```css
.ph-speccer.title {
  …
}
.ph-speccer.description {
  …
}
```

> [!TIP] Try it out with emoticons!
>
> ```typescript
> window.SPECCER_LITERALS = [
>   '🥰',
>   …
> ];
> ```

## Subtle Anatomy

![Image of subtle option for anatomy](/speccer-pin-default-subtle-light.png)

You can also give a more subtle touch to the anatomy elements.

```html
<div data-speccer="pin-area">
  <div data-speccer="pin top subtle" class="…"></div>
</div>
```

This will give a dashed border, and a more subtle pin style.

![Image of speccer](/speccer-pin-enclose-subtle-light.png)

::: code-group

```html [index.html]
<div data-speccer="pin-area">
  <div data-speccer="pin enclose subtle" class="…"></div>
</div>
```

```typescript [main.ts]
const element = document.querySelector('…');
const options = {
  slug: 'pinQuick',
  type: 'pin',
  pin: {
    enclose: true,
    subtle: true
  }
};
await pinElement(element, element.parentElement, 'A', options);
```

:::

## Curly Brackets

You can use curly brackets with the `curly` tag in `data-speccer` along side
`pin bracket` to provide a more sleek style.

![Image of curly option for anatomy](/speccer-pin-curly-light.png)

> [!NOTE] Only works with `pin bracket`

::: warning Important

If any SVG options are used, remember to add
[the required `svg` element](/guide/introduction/#svg) to the document.

:::
