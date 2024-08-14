[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/wait](../README.md) / waitFor

# Function: waitFor()

> **waitFor**(`ms`): `Promise`\<`void`\>

Waits for the specified amount of time in milliseconds.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ms` | `number` | The number of milliseconds to wait. |

## Returns

`Promise`\<`void`\>

- A Promise that resolves after the specified time.

## Example

```ts
// Wait for 1 second (1000 milliseconds)
await waitFor(1000);
```

## Defined in

[utils/wait.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/wait.ts#L13)
