# Storybook

You can add **SPECCER** to your stories!

![Image of the Storybook implementation](/storybook.png)

## Decorator

Add a decorator to `.storybook/preview.tsx` that runs speccer after a story has
rendered, and removes the annotations when you go to another story:

```tsx [.storybook/preview.tsx]
import type { Decorator, Preview } from '@storybook/react-vite';
import { useEffect } from 'storybook/preview-api';
import speccer, { removeSpeccer } from '@phun-ky/speccer';
import '@phun-ky/speccer/dist/speccer.min.css';

let timeout: ReturnType<typeof setTimeout> | undefined;

// speccer() draws every story on the page, so a docs page shares one draw
const draw = (delay = 0) => {
  clearTimeout(timeout);
  timeout = setTimeout(speccer, delay);
};

const withSpeccer: Decorator = (Story, { args }) => {
  // Runs after the story has rendered, and again after its args change
  useEffect(() => {
    draw();

    // Redraw when the window is resized, at most every 300 ms
    const onResize = () => draw(300);

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timeout);
      removeSpeccer();
    };
  }, [args]);

  return <Story />;
};

const preview: Preview = {
  decorators: [withSpeccer]
};

export default preview;
```

- **`useEffect` from `storybook/preview-api`**, not from React, works with every
  renderer, so the decorator works the same way with Vue, Svelte, Angular or web
  components. Import `Decorator` and `Preview` from your framework's package,
  and return `Story()` instead of `<Story />` if you don't use React.
- **`removeSpeccer()`** when the story changes removes every annotation on the
  page, stops draws that are still in progress, and keeps the `svg` element. It
  needs speccer 11.5.0 or newer.

## The svg element

Lines and curly brackets need [the `svg` element](/guide/introduction/#svg). Add
it to `.storybook/preview-body.html`, so it is on the page for every story:

```html [.storybook/preview-body.html]
<svg class="ph-speccer" id="ph-speccer-svg" xmlns="http://www.w3.org/2000/svg">
  <path
    class="ph-speccer path original"
    id="ph-speccer-path"
    fill="none"
    stroke-width="1"
    stroke="currentColor"
  />
</svg>
```

## Stories

Wrap the story in an element with `data-speccer="pin-area"`, and add the
`data-speccer` attribute to the component:

```tsx [Button.stories.tsx]
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div data-speccer="pin-area">
        <Story />
      </div>
    )
  ],
  render: (args) => <Button {...args} data-speccer="pin bracket top" />
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { label: 'Save' }
};
```

::: tip Important

Make sure `Button` passes the `data-speccer` attribute on to its DOM element.

:::

If something doesn't look right, see [troubleshooting](/guide/troubleshooting).
