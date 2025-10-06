[@phun-ky/speccer](../index.md) / modes

# Variable: modes

```ts
const modes: {
  activate: (speccer: SpeccerFunctionType) => void;
  dom: (speccer: SpeccerFunctionType) => void;
  lazy: () => void;
  manual: (speccer: SpeccerFunctionType) => void;
};
```

Defined in:
[main.ts:238](https://github.com/phun-ky/speccer/blob/main/src/main.ts#L238)

The available modes to run SPECCER with

## Type Declaration

### activate()

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

### dom()

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

### lazy()

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

### manual()

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
