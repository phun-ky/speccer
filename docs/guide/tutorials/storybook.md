# Storybook

You can add **SPECCER** to your stories!

![Image of the Storybook implementation](https://raw.githubusercontent.com/phun-ky/speccer/refs/heads/main/public/storybook.png)

In `preview.tsx`:

```typescript [preview.tsx]
import '@phun-ky/speccer/dist/speccer.min.css';
import { debounce } from '@mui/material'; // or any other debounce function
import { addons } from '@storybook/preview-api';

let speccerEventFunc: (() => void) | undefined;

addons.getChannel().on('docsRendered', async () => {
  const { default: speccer } = await import('@phun-ky/speccer');

  speccer();
  speccerEventFunc = debounce(() => {
    speccer();
  }, 100);

  window.addEventListener('resize', speccerEventFunc);
});

addons.getChannel().on('storyChanged', () => {
  if (speccerEventFunc) {
    window.removeEventListener('resize', speccerEventFunc);
    speccerEventFunc = undefined;
  }

  // Remove all pinned elements
  document.querySelectorAll('.ph-speccer')?.forEach((el) => {
    if (el instanceof HTMLElement) {
      el.remove();
    }
  });
});
```

And then in your `*.stories.tsx`:

```typescript [MyComponent.stories.tsx]
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyComponent } from '../path-to-component/MyComponent';

export default {
    title: 'Components/MyComponent',
    component: MyComponent,
    tags: ['autodocs'],
    …

} as ComponentMeta<typeof MyComponent>

const Template: ComponentStory<typeof MyComponent> = (args) => {

  …
  // you need `data-speccer="pin-area"` on the container of the elements you want to spec
  return (
    <div data-speccer="pin-area">
      <MyComponent {...args} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  …,
  "data-speccer": "pin bracket top",
};
```

::: tip Important

Just make sure `MyComponent` passed down the attributes to the DOM element

:::
