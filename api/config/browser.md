[**@phun-ky/speccer**](../README.md) • **Docs**

***

[@phun-ky/speccer](../README.md) / config/browser

# config/browser

Contains the helper functions to activate SPECCER via a script tag, based on attributes:

> [!NOTE]
> If the activation method is dom or instant, a resize feature is activated, making sure everything is re-rendered on resize. for manual or lazy loading, you are responsible to handle resize yourself.

## Default implementation
```html
<script src="../speccer.js"</script>
```

If no attribute is applied, it will default to `data-dom`, as in, it will initialize when `DOMContentLoaded` is fired.

## Manual initiation
```html
<script src="../speccer.js" data-manual</script>
```

Makes `window.speccer()` available to be used when you feel like it

## Initiate immediately
```html
<script src="../speccer.js" data-instant></script>
```

fires off `speccer()` right away

## Initiate when dom ready
```html
<script src="../speccer.js" data-dom></script>
```

Waits for `DOMContentLoaded`

## Initiate with lazy loading
```html
<script src="../speccer.js" data-lazy></script>
```

Lazy loads `speccer()` per specced element

## Functions

### activate()

> **activate**(`speccer`): `void`

A function to activate speccer based on script attributes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `speccer` | [`SpeccerFunctionType`](../types/speccer.md#speccerfunctiontype) | The speccer function to execute. |

#### Returns

`void`

#### Example

```ts
// Usage example:
// activate(mySpeccer);
```

#### Defined in

[config/browser.ts:149](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L149)

***

### dom()

> **dom**(`speccer`): `void`

A function to initialize speccer when the DOM is ready.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `speccer` | [`SpeccerFunctionType`](../types/speccer.md#speccerfunctiontype) | The speccer function to execute. |

#### Returns

`void`

#### Example

```ts
// Usage example:
// dom(mySpeccer);
```

#### Defined in

[config/browser.ts:62](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L62)

***

### lazy()

> **lazy**(): `void`

A function to initialize lazy speccer functionality.

#### Returns

`void`

#### Example

```ts
// Usage example:
// lazy();
```

#### Defined in

[config/browser.ts:80](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L80)

***

### manual()

> **manual**(`speccer`): `void`

A function to manually activate speccer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `speccer` | [`SpeccerFunctionType`](../types/speccer.md#speccerfunctiontype) | The speccer function to execute. |

#### Returns

`void`

#### Example

```ts
// Usage example:
// manual(mySpeccer);
```

#### Defined in

[config/browser.ts:134](https://github.com/phun-ky/speccer/blob/main/src/config/browser.ts#L134)
