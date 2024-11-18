<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../README.md) / features/a11y/constants

# features/a11y/constants

> Last updated 2024-11-18T09:12:16.668Z

## Variables

### SPECCER_LANDMARK_ELEMENTS_SELECTOR

```ts
const SPECCER_LANDMARK_ELEMENTS_SELECTOR: '\nheader, footer, section, form, main, nav, aside, [role="section"], [role="banner"],\n[role="complementary"], [role="contentinfo"], [role="form"], [role="main"],\n[role="navigation"], [role="region"], [role="search"]\n';
```

Selector string for landmark elements.

#### Defined in

[features/a11y/constants/index.ts:50](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/constants/index.ts#L50)

---

### SPECCER_MODIFIER_KEYS

```ts
const SPECCER_MODIFIER_KEYS: string[];
```

Array of keys considered as modifiers in shortcuts.

#### Defined in

[features/a11y/constants/index.ts:5](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/constants/index.ts#L5)

---

### SPECCER_PHYSICAL_KEYS

```ts
const SPECCER_PHYSICAL_KEYS: string[];
```

#### Defined in

[features/a11y/constants/index.ts:26](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/constants/index.ts#L26)

---

### SPECCER_TABBABLE_ELEMENTS_SELECTOR

```ts
const SPECCER_TABBABLE_ELEMENTS_SELECTOR: "\n  a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n  textarea:not([disabled]):not([tabindex='-1']),\n  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]\n";
```

Selector string for tabbable elements.

#### Defined in

[features/a11y/constants/index.ts:39](https://github.com/phun-ky/speccer/blob/main/src/features/a11y/constants/index.ts#L39)

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
