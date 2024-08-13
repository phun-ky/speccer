[**@phun-ky/speccer**](../../README.md) • **Docs**

***

[@phun-ky/speccer](../../README.md) / [main](../README.md) / modes

# Variable: modes

> `const` **modes**: `object`

## Type declaration

### activate()

> **activate**: (`speccer`) => `void`

A function to activate speccer based on script attributes.

#### Parameters

• **speccer**: [`SpeccerFunctionType`](../../types/speccer/type-aliases/SpeccerFunctionType.md)

The speccer function to execute.

#### Returns

`void`

#### Example

```ts
// Usage example:
// activate(mySpeccer);
```

### dom()

> **dom**: (`speccer`) => `void`

A function to initialize speccer when the DOM is ready.

#### Parameters

• **speccer**: [`SpeccerFunctionType`](../../types/speccer/type-aliases/SpeccerFunctionType.md)

The speccer function to execute.

#### Returns

`void`

#### Example

```ts
// Usage example:
// dom(mySpeccer);
```

### lazy()

> **lazy**: () => `void`

A function to initialize lazy speccer functionality.

#### Returns

`void`

#### Example

```ts
// Usage example:
// lazy();
```

### manual()

> **manual**: (`speccer`) => `void`

A function to manually activate speccer.

#### Parameters

• **speccer**: [`SpeccerFunctionType`](../../types/speccer/type-aliases/SpeccerFunctionType.md)

The speccer function to execute.

#### Returns

`void`

#### Example

```ts
// Usage example:
// manual(mySpeccer);
```

## Defined in

[main.ts:61](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L61)
