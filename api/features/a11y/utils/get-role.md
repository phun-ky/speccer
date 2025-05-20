<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../../../README.md) / features/a11y/utils/get-role

# features/a11y/utils/get-role

> Last updated 2025-05-20T09:52:54.966Z

## Functions

### getRole()

```ts
function getRole(targetEl): string;
```

Defined in:
[src/features/a11y/utils/get-role.ts:29](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/utils/get-role.ts#L29)

Retrieves the role of a given HTML element.

This function first checks if the `role` attribute of the target element is
defined and not empty. If the `role` attribute is not available, it maps certain
semantic HTML elements to their respective roles (e.g., `<header>` ->
`'header'`). If the element does not match any predefined roles, it returns
`'N/A'`.

#### Parameters

| Parameter  | Type                                                                    | Description                                             |
| ---------- | ----------------------------------------------------------------------- | ------------------------------------------------------- |
| `targetEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | The target HTML element whose role is to be determined. |

#### Returns

`string`

The role of the element, or `'N/A'` if no role is applicable.

#### Example

```ts
const element = document.createElement('header');
const role = getRole(element);
console.log(role); // Output: 'header'

const divElement = document.createElement('div');
divElement.setAttribute('role', 'button');
const divRole = getRole(divElement);
console.log(divRole); // Output: 'button'

const spanElement = document.createElement('span');
const spanRole = getRole(spanElement);
console.log(spanRole); // Output: 'N/A'
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
