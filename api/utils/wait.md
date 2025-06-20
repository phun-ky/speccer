<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../README.md) / utils/wait

# utils/wait

> Last updated 2025-06-20T09:04:05.684Z

## Functions

### waitFor()

```ts
function waitFor(ms): Promise<void>;
```

Defined in:
[src/utils/wait.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/wait.ts#L13)

Waits for the specified amount of time in milliseconds.

#### Parameters

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| `ms`      | `number` | The number of milliseconds to wait. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

- A Promise that resolves after the specified time.

#### Example

```ts
// Wait for 1 second (1000 milliseconds)
await waitFor(1000);
```

---

### waitForFrame()

```ts
function waitForFrame(): Promise<number>;
```

Defined in:
[src/utils/wait.ts:30](https://github.com/phun-ky/speccer/blob/main/src/utils/wait.ts#L30)

Waits for the next animation frame using requestAnimationFrame.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`number`>

- A Promise that resolves with the timestamp of the next animation frame.

#### Example

```ts
// Wait for the next animation frame and get the rect
await waitForFrame();
const rect = el.getBoundingClientRect();
// Wait for the next animation frame and get the timestamp
const timestamp = await waitForFrame();
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
