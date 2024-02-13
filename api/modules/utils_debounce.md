[@phun-ky/speccer](../README.md) / utils/debounce

# Module: utils/debounce

## Functions

### default

▸ **default**(`func`, `wait`, `immediate?`): [`DebounceAnyFunctionType`](types_debounce.md#debounceanyfunctiontype)

Creates a debounced version of a function that delays its execution until after a specified waiting time has elapsed since the last time the debounced function was invoked.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `func` | [`DebounceAnyFunctionType`](types_debounce.md#debounceanyfunctiontype) | `undefined` | The function to debounce. |
| `wait` | `number` | `undefined` | The number of milliseconds to wait before invoking the function after the last call. |
| `immediate?` | `boolean` | `false` | If `true`, the function is invoked immediately after the first call. |

#### Returns

[`DebounceAnyFunctionType`](types_debounce.md#debounceanyfunctiontype)

- The debounced function.

**`Example`**

```ts
// Create a debounced function
const debouncedFn = debounce((value) => {
  console.log(value);
}, 500);

// Call the debounced function
debouncedFn('Hello'); // This will not trigger immediate execution
debouncedFn('World'); // This will trigger immediate execution
```

#### Defined in

[utils/debounce.ts:24](https://github.com/phun-ky/speccer/blob/main/src/utils/debounce.ts#L24)
