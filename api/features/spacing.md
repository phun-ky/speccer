<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / features/spacing

# features/spacing

> Last updated 2024-08-14T10:18:52.245Z

## Functions

### create()

```ts
function create(text, tag): HTMLElement
```

Create a spacing element with optional text content.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `text` | `string` \| `number` | `''` | The optional text content for the spacing element. |
| `tag` | `string` | `'span'` | The HTML tag for the element (default is 'span'). |

#### Returns

`HTMLElement`

- The created spacing element.

#### Example

```ts
const spacingElement = create(20, 'div');
document.body.appendChild(spacingElement);
```

#### Defined in

[features/spacing/index.ts:25](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/index.ts#L25)

***

### element()

```ts
function element(targetEl): Promise<void>
```

Create and position spacing elements based on the target element's computed spacing styles.

![spacing](https://github.com/phun-ky/speccer/blob/main/public/spacing.png?raw=true)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetEl` | `HTMLElement` | The target element to create spacing elements for. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating and positioning the spacing elements.

#### Example

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

#### Defined in

[features/spacing/index.ts:53](https://github.com/phun-ky/speccer/blob/main/src/features/spacing/index.ts#L53)

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
