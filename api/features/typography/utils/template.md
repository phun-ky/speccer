<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../../../README.md) / features/typography/utils/template

# features/typography/utils/template

> Last updated 2024-08-14T10:38:20.986Z

## Functions

### template()

```ts
function template(targetEl, useHighlighting?): Promise<string>
```

Generate a HTML string for typography styles of a target element.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `targetEl` | `HTMLElement` | `undefined` | The target element for which to generate typography styles. |
| `useHighlighting`? | `boolean` | `false` | If we should use highlighting markup |

#### Returns

`Promise`\<`string`\>

- A promise that resolves with the HTML string.

#### Example

```ts
const targetElement = document.getElementById('target');
const typographyStyles = await template(targetElement, true);
console.log(typographyStyles);
```

#### Defined in

[features/typography/utils/template.ts:18](https://github.com/phun-ky/speccer/blob/main/src/features/typography/utils/template.ts#L18)

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
