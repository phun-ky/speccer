[@phun-ky/speccer](../index.md) / speccer

# Function: speccer()

```ts
function speccer(): Promise<void>;
```

Defined in:
[main.ts:283](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L283)

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

## Examples

```typescript
import '@phun-ky/speccer/dist/speccer.min.css';
import speccer from '@phun-ky/speccer';

// do stuff
speccer();

// or wait until everything is drawn
await speccer();
```

```html
<link rel="stylesheet" href="../path/to/speccer.min.css" />
<script src="../path/to/speccer.js"></script>
```
