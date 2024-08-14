<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/attributes

# utils/attributes

> Last updated 2024-08-14T10:23:12.586Z

## Functions

### removeAttributes()

```ts
function removeAttributes(el, attrs?): void
```

Removes attributes from an HTML element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `HTMLElement` | The HTML element to remove attributes from. |
| `attrs`? | `string`[] | The attributes to remove as a key-value mapping. |

#### Returns

`void`

#### Example

```ts
const element = document.getElementById('myElement');
removeAttributes(element, ['class', 'data-value']);
```

#### Defined in

[utils/attributes.ts:44](https://github.com/phun-ky/speccer/blob/main/src/utils/attributes.ts#L44)

***

### setAttributes()

```ts
function setAttributes(el, attrs?): void
```

Sets attributes on an HTML element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `el` | `HTMLElement` | The HTML element to set attributes on. |
| `attrs`? | [`AttributesMapInterface`](../types/interfaces/attributes.md#attributesmapinterface) | The attributes to set as a key-value mapping. |

#### Returns

`void`

#### Example

```ts
const element = document.getElementById('myElement');
setAttributes(element, {
  'class': 'active',
  'data-value': '123',
});
```

#### Defined in

[utils/attributes.ts:19](https://github.com/phun-ky/speccer/blob/main/src/utils/attributes.ts#L19)

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