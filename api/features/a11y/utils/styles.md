<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../../../README.md) / features/a11y/utils/styles

# features/a11y/utils/styles

> Last updated 2024-08-14T10:38:20.978Z

## Functions

### styles()

```ts
function styles(
   type, 
   targetEl, 
a11yEl): Promise<SpeccerStylesReturnType>
```

Calculates and returns the styles for an accessibility element based on its type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | Type of the accessibility element ('tabstops', 'landmark', 'region', 'shortcut', or default). |
| `targetEl` | `HTMLElement` | Target HTML element. |
| `a11yEl` | `HTMLElement` | Accessibility HTML element to be styled. |

#### Returns

`Promise`\<[`SpeccerStylesReturnType`](../../../types/styles.md#speccerstylesreturntype)\>

A Promise resolving with the calculated styles.

#### Example

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

#### Defined in

[features/a11y/utils/styles.ts:35](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/utils/styles.ts#L35)

***

## Contributing

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

## Sponsor me

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

***
<p class="ph">
  This project created by
  <a rel="noopener noreferrer" target="_blank" class="ph" href="http://phun-ky.net" property="cc:attributionName">
    Alexander Vassbotn Røyne-Helgesen</a>
  is licensed under a
  <a rel="noopener noreferrer" target="_blank" class="ph" href="https://choosealicense.com/licenses/mit/">
    MIT License </a>.
</p>
