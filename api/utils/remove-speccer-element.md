<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/remove-speccer-element

# utils/remove-speccer-element

> Last updated 2025-05-02T20:14:13.354Z

## Functions

### removeSpeccerElement()

```ts
function removeSpeccerElement(el): void;
```

Defined in:
[src/utils/remove-speccer-element.ts:18](https://github.com/phun-ky/speccer/blob/main/src/utils/remove-speccer-element.ts#L18)

Remove a speccer element by removing associated elements and SVG paths.

This function removes any speccer elements linked to the specified element and
also removes any SVG paths that might be associated with it.

#### Parameters

| Parameter | Type                                                                    | Description                |
| --------- | ----------------------------------------------------------------------- | -------------------------- |
| `el`      | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The HTML element to unpin. |

#### Returns

`void`

This function does not return a value.

#### Example

```ts
const element = document.getElementById('my-element');
if (element) {
  removeSpeccerElement(element);
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
