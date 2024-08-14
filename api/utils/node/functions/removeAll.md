[**@phun-ky/speccer**](../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../README.md) / [utils/node](../README.md) / removeAll

# Function: removeAll()

> **removeAll**(`selector`, `el`): `void`

Removes all elements matching a selector from the DOM.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `selector` | `string` | `undefined` | The CSS selector used to select elements for removal. |
| `el` | `Document` | `document` | The document context (default is the global `document` object). |

## Returns

`void`

## Example

```ts
// Remove all elements with a specific class from the document
removeAll('.my-class');
```

## Defined in

[utils/node.ts:34](https://github.com/phun-ky/speccer/blob/main/src/utils/node.ts#L34)
