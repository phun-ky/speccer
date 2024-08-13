[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/wait](../README.md) / waitForFrame

# Function: waitForFrame()

> **waitForFrame**(): `Promise`\<`number`\>

Waits for the next animation frame using requestAnimationFrame.

## Returns

`Promise`\<`number`\>

- A Promise that resolves with the timestamp of the next animation frame.

## Example

```ts
// Wait for the next animation frame and get the rect
await waitForFrame();
const rect = el.getBoundingClientRect();
// Wait for the next animation frame and get the timestamp
const timestamp = await waitForFrame();
```

## Defined in

[utils/wait.ts:30](https://github.com/phun-ky/speccer/blob/main/src/utils/wait.ts#L30)
