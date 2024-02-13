[@phun-ky/speccer](../README.md) / utils/wait

# Module: utils/wait

## Functions

### waitFor

▸ **waitFor**(`ms`): `Promise`\<`void`\>

Waits for the specified amount of time in milliseconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The number of milliseconds to wait. |

#### Returns

`Promise`\<`void`\>

- A Promise that resolves after the specified time.

**`Example`**

```ts
// Wait for 1 second (1000 milliseconds)
await waitFor(1000);
```

#### Defined in

[utils/wait.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/wait.ts#L13)

___

### waitForFrame

▸ **waitForFrame**(): `Promise`\<`number`\>

Waits for the next animation frame using requestAnimationFrame.

#### Returns

`Promise`\<`number`\>

- A Promise that resolves with the timestamp of the next animation frame.

**`Example`**

```ts
// Wait for the next animation frame and get the rect
await waitForFrame();
const rect = el.getBoundingClientRect();
// Wait for the next animation frame and get the timestamp
const timestamp = await waitForFrame();
```

#### Defined in

[utils/wait.ts:30](https://github.com/phun-ky/speccer/blob/main/src/utils/wait.ts#L30)
