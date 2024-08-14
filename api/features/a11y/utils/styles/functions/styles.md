[**@phun-ky/speccer**](../../../../../README.md) • **Docs**

***

[@phun-ky/speccer](../../../../../README.md) / [features/a11y/utils/styles](../README.md) / styles

# Function: styles()

> **styles**(`type`, `targetEl`, `a11yEl`): `Promise`\<[`SpeccerStylesReturnType`](../../../../../types/styles/type-aliases/SpeccerStylesReturnType.md)\>

Calculates and returns the styles for an accessibility element based on its type.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | Type of the accessibility element ('tabstops', 'landmark', 'region', 'shortcut', or default). |
| `targetEl` | `HTMLElement` | Target HTML element. |
| `a11yEl` | `HTMLElement` | Accessibility HTML element to be styled. |

## Returns

`Promise`\<[`SpeccerStylesReturnType`](../../../../../types/styles/type-aliases/SpeccerStylesReturnType.md)\>

A Promise resolving with the calculated styles.

## Example

```ts
const targetElement = document.getElementById('targetElement');
const a11yElement = document.createElement('div');

// Example for tab order element styles
const tabstopsStyles = await styles('tabstops', targetElement, a11yElement);

// Example for landmark element styles
const landmarkStyles = await styles('landmark', targetElement, a11yElement);

// Example for region element styles
const regionStyles = await styles('region', targetElement, a11yElement);

// Example for shortcut element styles
const shortcutStyles = await styles('shortcut', targetElement, a11yElement);

// Example for default styles
const defaultStyles = await styles('default', targetElement, a11yElement);
```

## Defined in

[features/a11y/utils/styles.ts:35](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/utils/styles.ts#L35)
