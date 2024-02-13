[@phun-ky/speccer](../README.md) / utils/number

# Module: utils/number

## Functions

### decimal

▸ **decimal**(`number`, `decimals?`): `string`

Converts a number to a string with a specified number of decimal places.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `number` | `string` \| `number` | `undefined` | The number to convert. |
| `decimals` | `number` | `3` | The number of decimal places (default is 3). |

#### Returns

`string`

- The formatted number as a string.

**`Example`**

```ts
// Convert a number to a string with 2 decimal places
const formattedNumber = decimal(12.3456, 2); // "12.34"
```

#### Defined in

[utils/number.ts:15](https://github.com/phun-ky/speccer/blob/main/src/utils/number.ts#L15)
