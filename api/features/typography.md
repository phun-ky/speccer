<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / features/typography

# features/typography

> Last updated 2024-08-14T10:16:53.362Z

## Functions

### create()

```ts
function create(html, area): HTMLElement
```

Create a DOM element with provided HTML and optional CSS class names.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `html` | `string` | The HTML content to be set in the created element. |
| `area` | `null` \| `string` | The optional CSS class names to add. |

#### Returns

`HTMLElement`

- The created DOM element.

#### Example

```ts
const htmlContent = '<p>This is some HTML content.</p>';
const cssClass = 'custom-class';
const createdElement = create(htmlContent, cssClass);
document.body.appendChild(createdElement);
```

#### Defined in

[features/typography/index.ts:23](https://github.com/phun-ky/speccer/blob/main/src/features/typography/index.ts#L23)

***

### element()

```ts
function element(targetEl): Promise<void>
```

Create a specced typography element for a given target element.

![typography](https://github.com/phun-ky/speccer/blob/main/public/typography.png?raw=true)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetEl` | `HTMLElement` | The target element to specc typography for. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves once typography element is created and positioned.

#### Example

```ts
const targetElement = document.querySelector('.target');
if (targetElement) {
  element(targetElement);
}
```

#### Defined in

[features/typography/index.ts:58](https://github.com/phun-ky/speccer/blob/main/src/features/typography/index.ts#L58)

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
