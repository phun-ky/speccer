<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/attributes

# utils/attributes

> Last updated 2025-04-15T06:57:05.320Z

## Table of Contents

- [Functions](#functions)
  - [removeAttributes()](#removeattributes)
  - [setAttributes()](#setattributes)

## Functions

### removeAttributes()

```ts
function removeAttributes(el, attrs?): void;
```

Defined in:
[src/utils/attributes.ts:44](https://github.com/phun-ky/speccer/blob/main/src/utils/attributes.ts#L44)

Removes attributes from an HTML element.

#### Parameters

| Parameter | Type                                                                    | Description                                      |
| --------- | ----------------------------------------------------------------------- | ------------------------------------------------ |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The HTML element to remove attributes from.      |
| `attrs?`  | `string`\[]                                                             | The attributes to remove as a key-value mapping. |

#### Returns

`void`

#### Example

```ts
const element = document.getElementById('myElement');
removeAttributes(element, ['class', 'data-value']);
```

---

### setAttributes()

```ts
function setAttributes(el, attrs?): void;
```

Defined in:
[src/utils/attributes.ts:19](https://github.com/phun-ky/speccer/blob/main/src/utils/attributes.ts#L19)

Sets attributes on an HTML element.

#### Parameters

| Parameter | Type                                                                                 | Description                                   |
| --------- | ------------------------------------------------------------------------------------ | --------------------------------------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)              | The HTML element to set attributes on.        |
| `attrs?`  | [`AttributesMapInterface`](../types/interfaces/attributes.md#attributesmapinterface) | The attributes to set as a key-value mapping. |

#### Returns

`void`

#### Example

```ts
const element = document.getElementById('myElement');
setAttributes(element, {
  class: 'active',
  'data-value': '123'
});
```

---

**Contributing**

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help
get rid of secondary activities and to enhance systems already in place, be it
documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to
maintain my projects, create new ones and contribute to the large community
we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net)
is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
