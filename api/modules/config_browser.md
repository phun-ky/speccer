[@phun-ky/speccer](../README.md) / config/browser

# Module: config/browser

## Functions

### activate

▸ **activate**(`speccer`): `void`

A function to activate speccer based on script attributes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speccer` | [`SpeccerFunctionType`](types_speccer.md#speccerfunctiontype) | The speccer function to execute. |

#### Returns

`void`

**`Example`**

```ts
// Usage example:
// activate(mySpeccer);
```

#### Defined in

[config/browser.ts:107](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L107)

___

### dom

▸ **dom**(`speccer`): `void`

A function to initialize speccer when the DOM is ready.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speccer` | [`SpeccerFunctionType`](types_speccer.md#speccerfunctiontype) | The speccer function to execute. |

#### Returns

`void`

**`Example`**

```ts
// Usage example:
// dom(mySpeccer);
```

#### Defined in

[config/browser.ts:20](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L20)

___

### lazy

▸ **lazy**(): `void`

A function to initialize lazy speccer functionality.

#### Returns

`void`

**`Example`**

```ts
// Usage example:
// lazy();
```

#### Defined in

[config/browser.ts:38](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L38)

___

### manual

▸ **manual**(`speccer`): `void`

A function to manually activate speccer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speccer` | [`SpeccerFunctionType`](types_speccer.md#speccerfunctiontype) | The speccer function to execute. |

#### Returns

`void`

**`Example`**

```ts
// Usage example:
// manual(mySpeccer);
```

#### Defined in

[config/browser.ts:92](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L92)
