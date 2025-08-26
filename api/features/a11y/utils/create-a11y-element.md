<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../../../README.md) / features/a11y/utils/create-a11y-element

# features/a11y/utils/create-a11y-element

> Last updated 2025-08-26T17:21:40.758Z

## Functions

### createA11yElement()

```ts
function createA11yElement(type?, content?, n?): HTMLElement;
```

Defined in:
[src/features/a11y/utils/create-a11y-element.ts:18](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/utils/create-a11y-element.ts#L18)

Creates an HTML element based on the specified type. \*

#### Parameters

| Parameter  | Type      | Default value | Description                                         |
| ---------- | --------- | ------------- | --------------------------------------------------- |
| `type?`    | `string`  | `'tabstops'`  | Type of element ('tabstops', 'landmark', 'region'). |
| `content?` | `unknown` | `undefined`   | Content to be added to the element.                 |
| `n?`       | `string`  | `'span'`      | HTML tag name (default is 'span').                  |

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The created HTML element.

#### Example

```ts
const tabElement = create('tabstops', null, 'div');
const landmarkElement = create('landmark', 1, 'div');
const regionElement = create('region', null, 'div');
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
