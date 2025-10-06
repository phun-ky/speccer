# Mark

![Screenshot of marked elements](https://raw.githubusercontent.com/phun-ky/speccer/refs/heads/main/public/speccer-pin-mark-light.png)

This feature allows you to mark specific elements.

::: info

For more technical documentation, see the relevant documentation
[under the API-section](/api/variables/mark).

:::

## Usage

### In the HTML

In your component examples, use the following attribute.

```html
<div data-speccer="mark" …>…</div>
```

### Programmatically

```typescript
import { mark } from 'https://esm.sh/@phun-ky/speccer';
import type {
  SpeccerOptionsInterface,
  SpeccerPositionType
} from 'https://esm.sh/@phun-ky/speccer';

const { create } = mark as {
  create: (target: HTMLElement, options?: SpeccerOptionsInterface) => void;
};
const element = document.querySelector('…');
const options = {
  slug: 'markTest',
  type: 'mark'
};
await create(element, options);
```
