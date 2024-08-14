<img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/>

[@phun-ky/speccer](../README.md) / utils/wait

# utils/wait

> Last updated 2024-08-14T10:18:52.259Z

## Functions

### waitFor()

```ts
function waitFor(ms): Promise<void>
```

Waits for the specified amount of time in milliseconds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ms` | `number` | The number of milliseconds to wait. |

#### Returns

`Promise`\<`void`\>

- A Promise that resolves after the specified time.

#### Example

```ts
// Wait for 1 second (1000 milliseconds)
await waitFor(1000);
```

#### Defined in

[utils/wait.ts:13](https://github.com/phun-ky/speccer/blob/main/src/utils/wait.ts#L13)

***

### waitForFrame()

```ts
function waitForFrame(): Promise<number>
```

Waits for the next animation frame using requestAnimationFrame.

#### Returns

`Promise`\<`number`\>

- A Promise that resolves with the timestamp of the next animation frame.

#### Example

```ts
// Wait for the next animation frame and get the rect
await waitForFrame();
const rect = el.getBoundingClientRect();
// Wait for the next animation frame and get the timestamp
const timestamp = await waitForFrame();
```

#### Defined in

[utils/wait.ts:30](https://github.com/phun-ky/speccer/blob/main/src/utils/wait.ts#L30)

***

## Contributing

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md)

## Sponsor me

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![Speccer banner, with logo and slogan: A zero dependency package to highlight elements](https://github.com/phun-ky/speccer/blob/main/public/speccer-banner.png?raw=true)

***
<p class="ph">
  This project created by
  <a rel="noopener noreferrer" target="_blank" class="ph" href="http://phun-ky.net" property="cc:attributionName">
    Alexander Vassbotn Røyne-Helgesen</a>
  is licensed under a
  <a rel="noopener noreferrer" target="_blank" class="ph" href="https://choosealicense.com/licenses/mit/">
    MIT License </a>.
</p>
