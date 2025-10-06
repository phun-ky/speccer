# Add Pins on Click

::: info

See a [demo of this here](https://codepen.io/phun-ky/full/LYKOWyP).

:::

## Code

::: info

The code below is not overly simplified. It basically boils down to use
`pinElement` directly:

```typescript
pinElement(el, el.parentElement, '🥰', options);
```

:::

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

/** Minimal options helper: bracket XOR enclose XOR none; curly only with bracket */
const pinOptions = ({
  variant = 'none',
  position = 'top',
  subtle = false,
  curly = false
}: {
  variant?: 'none' | 'bracket' | 'enclose';
  position?: SpeccerPositionType;
  subtle?: boolean;
  curly?: boolean;
} = {}): SpeccerOptionsInterface => {
  const isBracket = variant === 'bracket';
  const isEnclose = variant === 'enclose';

  return {
    slug: 'pinQuick',
    position,
    type: 'pin',
    pin: {
      bracket: isBracket,
      enclose: isEnclose,
      subtle,
      parent: false,
      text: false,
      useSVGLine: false,
      useCurlyBrackets: isBracket && curly
    }
  };
};

/** Attach pin-on-click to a single element (or call this in a loop for many). */
export const attachSpeccer = (
  target: HTMLElement,
  options?: Parameters<typeof pinOptions>[0]
) => {
  const opts = pinOptions(options);

  const onClick = () => {
    if (target.classList.contains('is-specced')) {
      const id = target.getAttribute('data-speccer-element-id');
      document.getElementById(id ?? '')?.remove();
      target.classList.remove('is-specced');
      return;
    }
    pinElement(target, target.parentElement, '🥰', opts);
    target.classList.add('is-specced');
  };

  target.removeEventListener('click', onClick as EventListener);
  target.addEventListener('click', onClick as EventListener);
};
```

## Usage

```typescript
// 1) Pick any element you already have:
const el = document.getElementById('anything')!;

// 2) Enable pin-on-click with your preferred variant:
attachSpeccer(el, { variant: 'bracket', subtle: true, curly: true }); // bracket (curly ok)
attachSpeccer(el, { variant: 'enclose' }); // or enclose
attachSpeccer(el); // or default (none)
```
