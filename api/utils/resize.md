<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../README.md) / utils/resize

# utils/resize

> Last updated 2024-08-20T07:01:27.204Z

## Functions

### activate()

```ts
function activate(speccer): void;
```

Attaches a debounced event listener to the window's resize event that triggers the provided function.

#### Parameters

| Parameter | Type                                                             | Description                                         |
| --------- | ---------------------------------------------------------------- | --------------------------------------------------- |
| `speccer` | [`SpeccerFunctionType`](../types/speccer.md#speccerfunctiontype) | The function to trigger when the window is resized. |

#### Returns

`void`

#### Example

```ts
// Define a function to be triggered on window resize
const mySpeccer = () => {
  // Your logic here
  console.log('Window resized');
};

// Activate the debounced event listener
activate(mySpeccer);
```

#### Defined in

[utils/resize.ts:22](https://github.com/phun-ky/speccer/blob/main/src/utils/resize.ts#L22)

---

**Contributing**

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net) is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).
