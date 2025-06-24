<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../../README.md) / types/interfaces/classnames

# types/interfaces/classnames

> Last updated 2025-06-24T06:59:57.854Z

## Type Aliases

### ClassNamesFirstArgType

```ts
type ClassNamesFirstArgType = string | ClassNamesSecondArgType;
```

Defined in:
[src/types/interfaces/classnames.ts:9](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/classnames.ts#L9)

Type for the first argument of the cx function which can be either a string or
`ClassNamesSecondArgType`.

---

### ClassNamesSecondArgType

```ts
type ClassNamesSecondArgType = undefined | Record<string, boolean>;
```

Defined in:
[src/types/interfaces/classnames.ts:4](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/classnames.ts#L4)

Type for the optional properties object with boolean values.

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
