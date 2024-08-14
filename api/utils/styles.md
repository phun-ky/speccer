<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/styles

# utils/styles

> Last updated 2024-08-14T10:18:52.257Z

## Functions

### add()

```ts
function add(el, styles): Promise<void>
```

Adds CSS styles to an HTMLElement.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `HTMLElement` | The HTMLElement to apply styles to. |
| `styles` | `object` \| \{ `key`: `string`; `value`: `string`; \}[] | An object or an array of objects containing CSS styles to apply. |

#### Returns

`Promise`\<`void`\>

- A Promise that resolves after styles are applied.

#### Example

```ts
// Apply styles as an object
const element = document.getElementById('my-element');
await add(element, { color: 'red', fontSize: '16px' });

// Apply styles as an array of objects
const styles = [
  { key: 'color', value: 'blue' },
  { key: 'backgroundColor', value: 'yellow' }
];
await add(element, styles);
```

#### Defined in

[utils/styles.ts:26](https://github.com/phun-ky/speccer/blob/main/src/utils/styles.ts#L26)

***

### get()

```ts
function get(el): Promise<CSSStyleDeclaration>
```

Gets the computed CSS styles of an HTMLElement.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `HTMLElement` | The HTMLElement to get computed styles from. |

#### Returns

`Promise`\<`CSSStyleDeclaration`\>

- A Promise that resolves with the computed CSS styles.

#### Example

```ts
// Get computed styles of an element
const element = document.getElementById('my-element');
const computedStyles = await get(element);
console.log(computedStyles.color); // Logs the color property value
```

#### Defined in

[utils/styles.ts:67](https://github.com/phun-ky/speccer/blob/main/src/utils/styles.ts#L67)

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
