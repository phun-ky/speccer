[@phun-ky/speccer](../README.md) / utils/direction-of-element

# Module: utils/direction-of-element

## Functions

### direction\_of\_element

▸ **direction_of_element**(`options`): `Promise`\<`string`\>

Get the direction of an element based on its position relative to another element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | `Object` | `undefined` | Options for direction calculation. |
| `options.crude?` | `boolean` | `false` | If the direction should be calculated crudely (NSEW). |
| `options.start` | `HTMLElement` | `undefined` | The starting HTML element. |
| `options.stop` | `HTMLElement` | `undefined` | The stopping HTML element. |

#### Returns

`Promise`\<`string`\>

- The calculated direction.

**`Example`**

```ts
// Get the direction of one element relative to another
const startElement = document.getElementById('startElement');
const stopElement = document.getElementById('stopElement');
const direction = await direction_of_element({ start: startElement, stop: stopElement });
```

#### Defined in

[utils/direction-of-element.ts:21](https://github.com/phun-ky/speccer/blob/main/src/utils/direction-of-element.ts#L21)
