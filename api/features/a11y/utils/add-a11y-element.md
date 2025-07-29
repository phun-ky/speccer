<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../../../README.md) / features/a11y/utils/add-a11y-element

# features/a11y/utils/add-a11y-element

> Last updated 2025-07-29T06:23:31.145Z

## Functions

### addA11yElement()

```ts
function addA11yElement(targetElement, content?, type?): Promise<void>;
```

Defined in:
[src/features/a11y/utils/add-a11y-element.ts:28](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/utils/add-a11y-element.ts#L28)

Adds an accessibility element to the document body based on the target element
and type.

![Screenshot of speccer a11y tab stops in use](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-tabstops-light.png?raw=true)
![Screenshot of speccer a11y landmark in use](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-landmarks-light.png?raw=true)

#### Parameters

| Parameter       | Type                                                                    | Description                                               |
| --------------- | ----------------------------------------------------------------------- | --------------------------------------------------------- |
| `targetElement` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | Target HTML element.                                      |
| `content?`      | `unknown`                                                               | Content to be added to the accessibility element.         |
| `type?`         | `string`                                                                | Type of accessibility element ('tabstops' or 'landmark'). |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

A Promise resolving when the operation is complete.

#### Example

```ts
const targetElement = document.getElementById('myElement');
if (targetElement) {
  await addA11yElement(targetElement, 1, 'landmark');
  await addA11yElement(targetElement, null, 'tabstops');
}
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
