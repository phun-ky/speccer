[@phun-ky/speccer](../index.md) / modes

# Variable: modes

```ts
const modes: {
  activate: (speccer: SpeccerFunctionType) => void;
  dom: (speccer: SpeccerFunctionType) => void;
  lazy: () => void;
  manual: (speccer: SpeccerFunctionType) => void;
  rerenderLazy: () => void;
};
```

Defined in:
[main.ts:252](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L252)

The available modes to run SPECCER with

## Type Declaration

### activate

```ts
activate: (speccer: SpeccerFunctionType) => void;
```

A function to activate speccer based on script attributes.

#### Parameters

##### speccer

[`SpeccerFunctionType`](../type-aliases/SpeccerFunctionType.md)

The speccer function to execute.

#### Returns

`void`

#### Example

```ts
// Usage example:
activate(mySpeccer);
```

### dom

```ts
dom: (speccer: SpeccerFunctionType) => void;
```

A function to initialize speccer when the DOM is ready.

#### Parameters

##### speccer

[`SpeccerFunctionType`](../type-aliases/SpeccerFunctionType.md)

The speccer function to execute.

#### Returns

`void`

#### Example

```ts
// Usage example:
dom(mySpeccer);
```

### lazy

```ts
lazy: () => void;
```

A function to initialize lazy speccer functionality.

#### Returns

`void`

#### Example

```ts
// Usage example:
lazy();
```

### manual

```ts
manual: (speccer: SpeccerFunctionType) => void;
```

A function to manually activate speccer.

#### Parameters

##### speccer

[`SpeccerFunctionType`](../type-aliases/SpeccerFunctionType.md)

The speccer function to execute.

#### Returns

`void`

#### Example

```ts
// Usage example:
manual(mySpeccer);
```

### rerenderLazy

```ts
rerenderLazy: () => void;
```

Removes all annotations and starts lazy loading again, so annotations in view
are redrawn right away and the rest when they are scrolled into view. Used to
re-render on resize when lazy loading.

#### Returns

`void`

#### Example

```ts
rerenderLazy();
```

## Example

Lazy loading, re-rendered on resize:

```ts
import { modes } from '@phun-ky/speccer';

modes.lazy();

let resizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(modes.rerenderLazy, 300);
});
```
