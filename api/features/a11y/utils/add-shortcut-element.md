<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../../README.md) / features/a11y/utils/add-shortcut-element

# features/a11y/utils/add-shortcut-element

> Last updated 2025-01-29T10:54:55.233Z

## Table of Contents

- [Functions](#functions)
  - [addShortcutElement()](#addshortcutelement)

## Functions

### addShortcutElement()

```ts
function addShortcutElement(el, shortcutString): Promise<void>;
```

Defined in: [src/features/a11y/utils/add-shortcut-element.ts:24](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/utils/add-shortcut-element.ts#L24)

Adds a shortcut element to the document body based on the provided HTML element and shortcut string.

![Screenshot of speccer a11y shortcuts in use](https://github.com/phun-ky/speccer/blob/main/public/speccer-a11y-shortcuts-light.png?raw=true)

#### Parameters

| Parameter        | Type                                                                    | Description                      |
| ---------------- | ----------------------------------------------------------------------- | -------------------------------- |
| `el`             | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | Target HTML element.             |
| `shortcutString` | `string`                                                                | Shortcut string to be displayed. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

A Promise resolving when the operation is complete.

#### Example

```ts
const shortcutElement = document.getElementById('shortcutElement');
if (shortcutElement) {
  await addShortcutElement(shortcutElement, 'Ctrl + Shift + A');
}
```

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to annotate or highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
