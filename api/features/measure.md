<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / features/measure

# features/measure

> Last updated 2024-08-14T10:38:20.983Z

## Functions

### create()

```ts
function create(
   text, 
   area, 
   tag): HTMLElement
```

Create a measurement element with optional text, area, and element type.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `text` | `string` \| `number` | `''` | The text to display on the element. |
| `area` | `null` \| `string` | `''` | The area to specify with CSS class. |
| `tag` | `string` | `'span'` | The element type. |

#### Returns

`HTMLElement`

- The created measurement element.

#### Example

```ts
const measurement = create(100, 'width bottom', 'div');
document.body.appendChild(measurement);
```

#### Defined in

[features/measure/index.ts:28](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L28)

***

### element()

```ts
function element(targetEl): Promise<void>
```

Create a measurement element and add it to the body with styles matching a specified target element.

![measure](https://github.com/phun-ky/speccer/blob/main/public/measure.png?raw=true)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetEl` | `HTMLElement` | The target element to match styles with. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves after creating and styling the measurement element.

#### Example

```ts
const targetElement = document.getElementById('target');
element(targetElement);
```

#### Defined in

[features/measure/index.ts:57](https://github.com/phun-ky/speccer/blob/main/src/features/measure/index.ts#L57)

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
