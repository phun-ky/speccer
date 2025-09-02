<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;"/></div>

[@phun-ky/speccer](../../README.md) / types/interfaces/global

# types/interfaces/global

> Last updated 2025-09-02T16:39:27.581Z

## Interfaces

### Window

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36358

The **`Window`** interface represents a window containing a DOM document; the
`document` property points to the DOM document loaded in that window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window)

#### Extends

- [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget).`AnimationFrameProvider`.`GlobalEventHandlers`.`WindowEventHandlers`.`WindowLocalStorage`.`WindowOrWorkerGlobalScope`.`WindowSessionStorage`

#### Indexable

```ts
[index: number]: Window
```

#### Properties

| Property                                                                 | Modifier   | Type                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                          | Inherited from                                                                                                                                                                                           | Defined in                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| <a id="caches"></a> `caches`                                             | `readonly` | [`CacheStorage`](https://developer.mozilla.org/docs/Web/API/CacheStorage)                   | Available only in secure contexts. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)                                                                                                                                                                                                                                                                                                                         | `WindowOrWorkerGlobalScope.caches`                                                                                                                                                                       | node_modules/typescript/lib/lib.dom.d.ts:36892                                                                                                                                                                                                                                                |
| <a id="clientinformation"></a> ~~`clientInformation`~~                   | `readonly` | [`Navigator`](https://developer.mozilla.org/docs/Web/API/Navigator)                         | **Deprecated** This is a legacy alias of `navigator`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)                                                                                                                                                                                                                                                                                                   | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36364                                                                                                                                                                                                                                                |
| <a id="closed"></a> `closed`                                             | `readonly` | `boolean`                                                                                   | The **`Window.closed`** read-only property indicates whether the referenced window is closed or not. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/closed)                                                                                                                                                                                                                                                       | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36370                                                                                                                                                                                                                                                |
| <a id="cookiestore"></a> `cookieStore`                                   | `readonly` | [`CookieStore`](https://developer.mozilla.org/docs/Web/API/CookieStore)                     | The **`cookieStore`** read-only property of the Window interface returns a reference to the CookieStore object for the current document context. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cookieStore)                                                                                                                                                                                                      | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36376                                                                                                                                                                                                                                                |
| <a id="crossoriginisolated"></a> `crossOriginIsolated`                   | `readonly` | `boolean`                                                                                   | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)                                                                                                                                                                                                                                                                                                                                               | `WindowOrWorkerGlobalScope.crossOriginIsolated`                                                                                                                                                          | node_modules/typescript/lib/lib.dom.d.ts:36894                                                                                                                                                                                                                                                |
| <a id="crypto"></a> `crypto`                                             | `readonly` | [`Crypto`](https://developer.mozilla.org/docs/Web/API/Crypto)                               | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto)                                                                                                                                                                                                                                                                                                                                                            | `WindowOrWorkerGlobalScope.crypto`                                                                                                                                                                       | node_modules/typescript/lib/lib.dom.d.ts:36896                                                                                                                                                                                                                                                |
| <a id="customelements"></a> `customElements`                             | `readonly` | [`CustomElementRegistry`](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry) | The **`customElements`** read-only property of the Window interface returns a reference to the CustomElementRegistry object, which can be used to register new custom elements and get information about previously registered custom elements. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/customElements)                                                                                                    | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36382                                                                                                                                                                                                                                                |
| <a id="devicepixelratio"></a> `devicePixelRatio`                         | `readonly` | `number`                                                                                    | The **`devicePixelRatio`** of Window interface returns the ratio of the resolution in _physical pixels_ to the resolution in _CSS pixels_ for the current display device. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)                                                                                                                                                                        | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36388                                                                                                                                                                                                                                                |
| <a id="document"></a> `document`                                         | `readonly` | [`Document`](https://developer.mozilla.org/docs/Web/API/Document)                           | **`window.document`** returns a reference to the document contained in the window. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/document)                                                                                                                                                                                                                                                                       | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36394                                                                                                                                                                                                                                                |
| <a id="drawcircle"></a> `DrawCircle`                                     | `public`   | `any`                                                                                       | Represents the DrawCircle class for drawing circles.                                                                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                        | [src/types/interfaces/global.ts:16](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L16)                                                                                                                                                                          |
| <a id="drawsvgcurlybracket"></a> `DrawSVGCurlyBracket`                   | `public`   | `any`                                                                                       | Represents the DrawSVGCurlyBracket class for drawing curly brackets.                                                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                        | [src/types/interfaces/global.ts:12](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L12)                                                                                                                                                                          |
| <a id="drawsvgline"></a> `DrawSVGLine`                                   | `public`   | `any`                                                                                       | Represents the DrawSVGLine class for drawing lines.                                                                                                                                                                                                                                                                                                                                                                                  | -                                                                                                                                                                                                        | [src/types/interfaces/global.ts:21](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L21)                                                                                                                                                                          |
| <a id="event"></a> ~~`event`~~                                           | `readonly` | `undefined`                                                                                 | [`Event`](https://developer.mozilla.org/docs/Web/API/Event)                                                                                                                                                                                                                                                                                                                                                                          | The read-only Window property **`event`** returns the Event which is currently being handled by the site's code. **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/event) | -                                                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:36401 |
| <a id="external"></a> ~~`external`~~                                     | `readonly` | `External`                                                                                  | The `external` property of the Window API returns an instance of the `External` interface, which was intended to contain functions related to adding external search providers to the browser. **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/external)                                                                                                                                            | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36408                                                                                                                                                                                                                                                |
| <a id="frameelement"></a> `frameElement`                                 | `readonly` | `null`                                                                                      | [`Element`](https://developer.mozilla.org/docs/Web/API/Element)                                                                                                                                                                                                                                                                                                                                                                      | The **`Window.frameElement`** property returns the element (such as iframe or object) in which the window is embedded. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frameElement)   | -                                                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:36414 |
| <a id="frames"></a> `frames`                                             | `readonly` | [`Window`](#window)                                                                         | Returns the window itself, which is an array-like object, listing the direct sub-frames of the current window. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frames)                                                                                                                                                                                                                                             | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36420                                                                                                                                                                                                                                                |
| <a id="history"></a> `history`                                           | `readonly` | [`History`](https://developer.mozilla.org/docs/Web/API/History)                             | The `Window.history` read-only property returns a reference to the History object, which provides an interface for manipulating the browser _session history_ (pages visited in the tab or frame that the current page is loaded in). [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/history)                                                                                                                     | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36426                                                                                                                                                                                                                                                |
| <a id="indexeddb"></a> `indexedDB`                                       | `readonly` | [`IDBFactory`](https://developer.mozilla.org/docs/Web/API/IDBFactory)                       | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)                                                                                                                                                                                                                                                                                                                                                         | `WindowOrWorkerGlobalScope.indexedDB`                                                                                                                                                                    | node_modules/typescript/lib/lib.dom.d.ts:36898                                                                                                                                                                                                                                                |
| <a id="innerheight"></a> `innerHeight`                                   | `readonly` | `number`                                                                                    | The read-only **`innerHeight`** property of the including the height of the horizontal scroll bar, if present. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerHeight)                                                                                                                                                                                                                                        | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36432                                                                                                                                                                                                                                                |
| <a id="innerwidth"></a> `innerWidth`                                     | `readonly` | `number`                                                                                    | The read-only Window property **`innerWidth`** returns the interior width of the window in pixels (that is, the width of the window's layout viewport). [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerWidth)                                                                                                                                                                                                | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36438                                                                                                                                                                                                                                                |
| <a id="issecurecontext"></a> `isSecureContext`                           | `readonly` | `boolean`                                                                                   | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext)                                                                                                                                                                                                                                                                                                                                                   | `WindowOrWorkerGlobalScope.isSecureContext`                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:36900                                                                                                                                                                                                                                                |
| <a id="length"></a> `length`                                             | `readonly` | `number`                                                                                    | Returns the number of frames (either frame or A number. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/length)                                                                                                                                                                                                                                                                                                    | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36444                                                                                                                                                                                                                                                |
| <a id="localstorage"></a> `localStorage`                                 | `readonly` | [`Storage`](https://developer.mozilla.org/docs/Web/API/Storage)                             | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/localStorage)                                                                                                                                                                                                                                                                                                                                                      | `WindowLocalStorage.localStorage`                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36883                                                                                                                                                                                                                                                |
| <a id="locationbar"></a> `locationbar`                                   | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns the `locationbar` object. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/locationbar)                                                                                                                                                                                                                                                                                                                     | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36457                                                                                                                                                                                                                                                |
| <a id="menubar"></a> `menubar`                                           | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns the `menubar` object. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/menubar)                                                                                                                                                                                                                                                                                                                             | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36463                                                                                                                                                                                                                                                |
| <a id="name"></a> `name`                                                 | `public`   | `string`                                                                                    | The `Window.name` property gets/sets the name of the window's browsing context. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/name)                                                                                                                                                                                                                                                                              | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36469                                                                                                                                                                                                                                                |
| <a id="navigator"></a> `navigator`                                       | `readonly` | [`Navigator`](https://developer.mozilla.org/docs/Web/API/Navigator)                         | The **`Window.navigator`** read-only property returns a reference to the Navigator object, which has methods and properties about the application running the script. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)                                                                                                                                                                                   | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36475                                                                                                                                                                                                                                                |
| <a id="onabort"></a> `onabort`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)                                                                                                                 | `GlobalEventHandlers.onabort`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12743 |
| <a id="onafterprint"></a> `onafterprint`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event)                                                                                                                      | `WindowEventHandlers.onafterprint`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:36832 |
| <a id="onanimationcancel"></a> `onanimationcancel`                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)                                                                                                                | `GlobalEventHandlers.onanimationcancel`                                                                                                                                                                                                                                                       | node_modules/typescript/lib/lib.dom.d.ts:12745 |
| <a id="onanimationend"></a> `onanimationend`                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)                                                                                                                   | `GlobalEventHandlers.onanimationend`                                                                                                                                                                                                                                                          | node_modules/typescript/lib/lib.dom.d.ts:12747 |
| <a id="onanimationiteration"></a> `onanimationiteration`                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)                                                                                                             | `GlobalEventHandlers.onanimationiteration`                                                                                                                                                                                                                                                    | node_modules/typescript/lib/lib.dom.d.ts:12749 |
| <a id="onanimationstart"></a> `onanimationstart`                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)                                                                                                                 | `GlobalEventHandlers.onanimationstart`                                                                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:12751 |
| <a id="onauxclick"></a> `onauxclick`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)                                                                                                                       | `GlobalEventHandlers.onauxclick`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:12753 |
| <a id="onbeforeinput"></a> `onbeforeinput`                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)                                                                                                                    | `GlobalEventHandlers.onbeforeinput`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:12755 |
| <a id="onbeforematch"></a> `onbeforematch`                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforematch_event)                                                                                                                    | `GlobalEventHandlers.onbeforematch`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:12757 |
| <a id="onbeforeprint"></a> `onbeforeprint`                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeprint_event)                                                                                                                     | `WindowEventHandlers.onbeforeprint`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:36834 |
| <a id="onbeforetoggle"></a> `onbeforetoggle`                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)                                                                                                               | `GlobalEventHandlers.onbeforetoggle`                                                                                                                                                                                                                                                          | node_modules/typescript/lib/lib.dom.d.ts:12759 |
| <a id="onbeforeunload"></a> `onbeforeunload`                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)                                                                                                                    | `WindowEventHandlers.onbeforeunload`                                                                                                                                                                                                                                                          | node_modules/typescript/lib/lib.dom.d.ts:36836 |
| <a id="onblur"></a> `onblur`                                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)                                                                                                                           | `GlobalEventHandlers.onblur`                                                                                                                                                                                                                                                                  | node_modules/typescript/lib/lib.dom.d.ts:12761 |
| <a id="oncancel"></a> `oncancel`                                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)                                                                                                               | `GlobalEventHandlers.oncancel`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:12763 |
| <a id="oncanplay"></a> `oncanplay`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)                                                                                                               | `GlobalEventHandlers.oncanplay`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12765 |
| <a id="oncanplaythrough"></a> `oncanplaythrough`                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)                                                                                                        | `GlobalEventHandlers.oncanplaythrough`                                                                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:12767 |
| <a id="onchange"></a> `onchange`                                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)                                                                                                                     | `GlobalEventHandlers.onchange`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:12769 |
| <a id="onclick"></a> `onclick`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)                                                                                                                          | `GlobalEventHandlers.onclick`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12771 |
| <a id="onclose"></a> `onclose`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)                                                                                                                | `GlobalEventHandlers.onclose`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12773 |
| <a id="oncontextlost"></a> `oncontextlost`                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextlost_event)                                                                                                          | `GlobalEventHandlers.oncontextlost`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:12775 |
| <a id="oncontextmenu"></a> `oncontextmenu`                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)                                                                                                                    | `GlobalEventHandlers.oncontextmenu`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:12777 |
| <a id="oncontextrestored"></a> `oncontextrestored`                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)                                                                                                      | `GlobalEventHandlers.oncontextrestored`                                                                                                                                                                                                                                                       | node_modules/typescript/lib/lib.dom.d.ts:12779 |
| <a id="oncopy"></a> `oncopy`                                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)                                                                                                                           | `GlobalEventHandlers.oncopy`                                                                                                                                                                                                                                                                  | node_modules/typescript/lib/lib.dom.d.ts:12781 |
| <a id="oncuechange"></a> `oncuechange`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)                                                                                                             | `GlobalEventHandlers.oncuechange`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12783 |
| <a id="oncut"></a> `oncut`                                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)                                                                                                                            | `GlobalEventHandlers.oncut`                                                                                                                                                                                                                                                                   | node_modules/typescript/lib/lib.dom.d.ts:12785 |
| <a id="ondblclick"></a> `ondblclick`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)                                                                                                                       | `GlobalEventHandlers.ondblclick`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:12787 |
| <a id="ondevicemotion"></a> `ondevicemotion`                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | Available only in secure contexts. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicemotion_event)                                                                                 | -                                                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:36481 |
| <a id="ondeviceorientation"></a> `ondeviceorientation`                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | Available only in secure contexts. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientation_event)                                                                            | -                                                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:36487 |
| <a id="ondeviceorientationabsolute"></a> `ondeviceorientationabsolute`   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | Available only in secure contexts. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientationabsolute_event)                                                                    | -                                                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:36493 |
| <a id="ondrag"></a> `ondrag`                                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)                                                                                                                       | `GlobalEventHandlers.ondrag`                                                                                                                                                                                                                                                                  | node_modules/typescript/lib/lib.dom.d.ts:12789 |
| <a id="ondragend"></a> `ondragend`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)                                                                                                                    | `GlobalEventHandlers.ondragend`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12791 |
| <a id="ondragenter"></a> `ondragenter`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)                                                                                                                  | `GlobalEventHandlers.ondragenter`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12793 |
| <a id="ondragleave"></a> `ondragleave`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)                                                                                                                  | `GlobalEventHandlers.ondragleave`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12795 |
| <a id="ondragover"></a> `ondragover`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)                                                                                                                   | `GlobalEventHandlers.ondragover`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:12797 |
| <a id="ondragstart"></a> `ondragstart`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)                                                                                                                  | `GlobalEventHandlers.ondragstart`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12799 |
| <a id="ondrop"></a> `ondrop`                                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)                                                                                                                       | `GlobalEventHandlers.ondrop`                                                                                                                                                                                                                                                                  | node_modules/typescript/lib/lib.dom.d.ts:12801 |
| <a id="ondurationchange"></a> `ondurationchange`                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)                                                                                                        | `GlobalEventHandlers.ondurationchange`                                                                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:12803 |
| <a id="onemptied"></a> `onemptied`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)                                                                                                               | `GlobalEventHandlers.onemptied`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12805 |
| <a id="onended"></a> `onended`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)                                                                                                                 | `GlobalEventHandlers.onended`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12807 |
| <a id="onerror"></a> `onerror`                                           | `public`   | `OnErrorEventHandler`                                                                       | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)                                                                                                                                                                                                                                                                                                                                                  | `GlobalEventHandlers.onerror`                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:12809                                                                                                                                                                                                                                                |
| <a id="onfocus"></a> `onfocus`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)                                                                                                                          | `GlobalEventHandlers.onfocus`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12811 |
| <a id="onformdata"></a> `onformdata`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)                                                                                                               | `GlobalEventHandlers.onformdata`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:12813 |
| <a id="ongamepadconnected"></a> `ongamepadconnected`                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepadconnected_event)                                                                                                                | `WindowEventHandlers.ongamepadconnected`                                                                                                                                                                                                                                                      | node_modules/typescript/lib/lib.dom.d.ts:36838 |
| <a id="ongamepaddisconnected"></a> `ongamepaddisconnected`               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepaddisconnected_event)                                                                                                             | `WindowEventHandlers.ongamepaddisconnected`                                                                                                                                                                                                                                                   | node_modules/typescript/lib/lib.dom.d.ts:36840 |
| <a id="ongotpointercapture"></a> `ongotpointercapture`                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)                                                                                                              | `GlobalEventHandlers.ongotpointercapture`                                                                                                                                                                                                                                                     | node_modules/typescript/lib/lib.dom.d.ts:12815 |
| <a id="onhashchange"></a> `onhashchange`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event)                                                                                                                      | `WindowEventHandlers.onhashchange`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:36842 |
| <a id="oninput"></a> `oninput`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)                                                                                                                          | `GlobalEventHandlers.oninput`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12817 |
| <a id="oninvalid"></a> `oninvalid`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)                                                                                                               | `GlobalEventHandlers.oninvalid`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12819 |
| <a id="onkeydown"></a> `onkeydown`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)                                                                                                                        | `GlobalEventHandlers.onkeydown`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12821 |
| <a id="onkeypress"></a> ~~`onkeypress`~~                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)                                                                                                        | `GlobalEventHandlers.onkeypress`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:12827 |
| <a id="onkeyup"></a> `onkeyup`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)                                                                                                                          | `GlobalEventHandlers.onkeyup`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12829 |
| <a id="onlanguagechange"></a> `onlanguagechange`                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/languagechange_event)                                                                                                                  | `WindowEventHandlers.onlanguagechange`                                                                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36844 |
| <a id="onload"></a> `onload`                                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/load_event)                                                                                                                       | `GlobalEventHandlers.onload`                                                                                                                                                                                                                                                                  | node_modules/typescript/lib/lib.dom.d.ts:12831 |
| <a id="onloadeddata"></a> `onloadeddata`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)                                                                                                            | `GlobalEventHandlers.onloadeddata`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:12833 |
| <a id="onloadedmetadata"></a> `onloadedmetadata`                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)                                                                                                        | `GlobalEventHandlers.onloadedmetadata`                                                                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:12835 |
| <a id="onloadstart"></a> `onloadstart`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)                                                                                                             | `GlobalEventHandlers.onloadstart`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12837 |
| <a id="onlostpointercapture"></a> `onlostpointercapture`                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)                                                                                                             | `GlobalEventHandlers.onlostpointercapture`                                                                                                                                                                                                                                                    | node_modules/typescript/lib/lib.dom.d.ts:12839 |
| <a id="onmessage"></a> `onmessage`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/message_event)                                                                                                                         | `WindowEventHandlers.onmessage`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:36846 |
| <a id="onmessageerror"></a> `onmessageerror`                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/messageerror_event)                                                                                                                    | `WindowEventHandlers.onmessageerror`                                                                                                                                                                                                                                                          | node_modules/typescript/lib/lib.dom.d.ts:36848 |
| <a id="onmousedown"></a> `onmousedown`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)                                                                                                                      | `GlobalEventHandlers.onmousedown`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12841 |
| <a id="onmouseenter"></a> `onmouseenter`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)                                                                                                                     | `GlobalEventHandlers.onmouseenter`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:12843 |
| <a id="onmouseleave"></a> `onmouseleave`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)                                                                                                                     | `GlobalEventHandlers.onmouseleave`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:12845 |
| <a id="onmousemove"></a> `onmousemove`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)                                                                                                                      | `GlobalEventHandlers.onmousemove`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12847 |
| <a id="onmouseout"></a> `onmouseout`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)                                                                                                                       | `GlobalEventHandlers.onmouseout`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:12849 |
| <a id="onmouseover"></a> `onmouseover`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)                                                                                                                      | `GlobalEventHandlers.onmouseover`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12851 |
| <a id="onmouseup"></a> `onmouseup`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)                                                                                                                        | `GlobalEventHandlers.onmouseup`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12853 |
| <a id="onoffline"></a> `onoffline`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/offline_event)                                                                                                                         | `WindowEventHandlers.onoffline`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:36850 |
| <a id="ononline"></a> `ononline`                                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/online_event)                                                                                                                          | `WindowEventHandlers.ononline`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:36852 |
| <a id="onorientationchange"></a> ~~`onorientationchange`~~               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientationchange_event)                                                                                                | -                                                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:36499 |
| <a id="onpagehide"></a> `onpagehide`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagehide_event)                                                                                                                        | `WindowEventHandlers.onpagehide`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:36854 |
| <a id="onpagereveal"></a> `onpagereveal`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagereveal_event)                                                                                                                      | `WindowEventHandlers.onpagereveal`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:36856 |
| <a id="onpageshow"></a> `onpageshow`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageshow_event)                                                                                                                        | `WindowEventHandlers.onpageshow`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:36858 |
| <a id="onpageswap"></a> `onpageswap`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageswap_event)                                                                                                                        | `WindowEventHandlers.onpageswap`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:36860 |
| <a id="onpaste"></a> `onpaste`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)                                                                                                                          | `GlobalEventHandlers.onpaste`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12855 |
| <a id="onpause"></a> `onpause`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)                                                                                                                 | `GlobalEventHandlers.onpause`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12857 |
| <a id="onplay"></a> `onplay`                                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)                                                                                                                  | `GlobalEventHandlers.onplay`                                                                                                                                                                                                                                                                  | node_modules/typescript/lib/lib.dom.d.ts:12859 |
| <a id="onplaying"></a> `onplaying`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)                                                                                                               | `GlobalEventHandlers.onplaying`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12861 |
| <a id="onpointercancel"></a> `onpointercancel`                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)                                                                                                                  | `GlobalEventHandlers.onpointercancel`                                                                                                                                                                                                                                                         | node_modules/typescript/lib/lib.dom.d.ts:12863 |
| <a id="onpointerdown"></a> `onpointerdown`                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)                                                                                                                    | `GlobalEventHandlers.onpointerdown`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:12865 |
| <a id="onpointerenter"></a> `onpointerenter`                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)                                                                                                                   | `GlobalEventHandlers.onpointerenter`                                                                                                                                                                                                                                                          | node_modules/typescript/lib/lib.dom.d.ts:12867 |
| <a id="onpointerleave"></a> `onpointerleave`                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)                                                                                                                   | `GlobalEventHandlers.onpointerleave`                                                                                                                                                                                                                                                          | node_modules/typescript/lib/lib.dom.d.ts:12869 |
| <a id="onpointermove"></a> `onpointermove`                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)                                                                                                                    | `GlobalEventHandlers.onpointermove`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:12871 |
| <a id="onpointerout"></a> `onpointerout`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)                                                                                                                     | `GlobalEventHandlers.onpointerout`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:12873 |
| <a id="onpointerover"></a> `onpointerover`                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)                                                                                                                    | `GlobalEventHandlers.onpointerover`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:12875 |
| <a id="onpointerrawupdate"></a> `onpointerrawupdate`                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | Available only in secure contexts. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerrawupdate_event)                                                                            | `GlobalEventHandlers.onpointerrawupdate`                                                                                                                                                                                                                                                      | node_modules/typescript/lib/lib.dom.d.ts:12881 |
| <a id="onpointerup"></a> `onpointerup`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)                                                                                                                      | `GlobalEventHandlers.onpointerup`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12883 |
| <a id="onpopstate"></a> `onpopstate`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)                                                                                                                        | `WindowEventHandlers.onpopstate`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:36862 |
| <a id="onprogress"></a> `onprogress`                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)                                                                                                              | `GlobalEventHandlers.onprogress`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:12885 |
| <a id="onratechange"></a> `onratechange`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)                                                                                                            | `GlobalEventHandlers.onratechange`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:12887 |
| <a id="onrejectionhandled"></a> `onrejectionhandled`                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/rejectionhandled_event)                                                                                                                | `WindowEventHandlers.onrejectionhandled`                                                                                                                                                                                                                                                      | node_modules/typescript/lib/lib.dom.d.ts:36864 |
| <a id="onreset"></a> `onreset`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)                                                                                                                  | `GlobalEventHandlers.onreset`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12889 |
| <a id="onresize"></a> `onresize`                                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)                                                                                                                | `GlobalEventHandlers.onresize`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:12891 |
| <a id="onscroll"></a> `onscroll`                                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)                                                                                                                        | `GlobalEventHandlers.onscroll`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:12893 |
| <a id="onscrollend"></a> `onscrollend`                                   | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)                                                                                                                     | `GlobalEventHandlers.onscrollend`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12895 |
| <a id="onsecuritypolicyviolation"></a> `onsecuritypolicyviolation`       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)                                                                                                       | `GlobalEventHandlers.onsecuritypolicyviolation`                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12897 |
| <a id="onseeked"></a> `onseeked`                                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)                                                                                                                | `GlobalEventHandlers.onseeked`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:12899 |
| <a id="onseeking"></a> `onseeking`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)                                                                                                               | `GlobalEventHandlers.onseeking`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12901 |
| <a id="onselect"></a> `onselect`                                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)                                                                                                                | `GlobalEventHandlers.onselect`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:12903 |
| <a id="onselectionchange"></a> `onselectionchange`                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)                                                                                                               | `GlobalEventHandlers.onselectionchange`                                                                                                                                                                                                                                                       | node_modules/typescript/lib/lib.dom.d.ts:12905 |
| <a id="onselectstart"></a> `onselectstart`                               | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)                                                                                                                       | `GlobalEventHandlers.onselectstart`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:12907 |
| <a id="onslotchange"></a> `onslotchange`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)                                                                                                             | `GlobalEventHandlers.onslotchange`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:12909 |
| <a id="onstalled"></a> `onstalled`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)                                                                                                               | `GlobalEventHandlers.onstalled`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12911 |
| <a id="onstorage"></a> `onstorage`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/storage_event)                                                                                                                         | `WindowEventHandlers.onstorage`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:36866 |
| <a id="onsubmit"></a> `onsubmit`                                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)                                                                                                                 | `GlobalEventHandlers.onsubmit`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:12913 |
| <a id="onsuspend"></a> `onsuspend`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)                                                                                                               | `GlobalEventHandlers.onsuspend`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12915 |
| <a id="ontimeupdate"></a> `ontimeupdate`                                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)                                                                                                            | `GlobalEventHandlers.ontimeupdate`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:12917 |
| <a id="ontoggle"></a> `ontoggle`                                         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)                                                                                                                     | `GlobalEventHandlers.ontoggle`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:12919 |
| <a id="ontouchcancel"></a> `ontouchcancel?`                              | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)                                                                                                                    | `GlobalEventHandlers.ontouchcancel`                                                                                                                                                                                                                                                           | node_modules/typescript/lib/lib.dom.d.ts:12921 |
| <a id="ontouchend"></a> `ontouchend?`                                    | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)                                                                                                                       | `GlobalEventHandlers.ontouchend`                                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:12923 |
| <a id="ontouchmove"></a> `ontouchmove?`                                  | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)                                                                                                                      | `GlobalEventHandlers.ontouchmove`                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:12925 |
| <a id="ontouchstart"></a> `ontouchstart?`                                | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)                                                                                                                     | `GlobalEventHandlers.ontouchstart`                                                                                                                                                                                                                                                            | node_modules/typescript/lib/lib.dom.d.ts:12927 |
| <a id="ontransitioncancel"></a> `ontransitioncancel`                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)                                                                                                               | `GlobalEventHandlers.ontransitioncancel`                                                                                                                                                                                                                                                      | node_modules/typescript/lib/lib.dom.d.ts:12929 |
| <a id="ontransitionend"></a> `ontransitionend`                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)                                                                                                                  | `GlobalEventHandlers.ontransitionend`                                                                                                                                                                                                                                                         | node_modules/typescript/lib/lib.dom.d.ts:12931 |
| <a id="ontransitionrun"></a> `ontransitionrun`                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)                                                                                                                  | `GlobalEventHandlers.ontransitionrun`                                                                                                                                                                                                                                                         | node_modules/typescript/lib/lib.dom.d.ts:12933 |
| <a id="ontransitionstart"></a> `ontransitionstart`                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)                                                                                                                | `GlobalEventHandlers.ontransitionstart`                                                                                                                                                                                                                                                       | node_modules/typescript/lib/lib.dom.d.ts:12935 |
| <a id="onunhandledrejection"></a> `onunhandledrejection`                 | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event)                                                                                                              | `WindowEventHandlers.onunhandledrejection`                                                                                                                                                                                                                                                    | node_modules/typescript/lib/lib.dom.d.ts:36868 |
| <a id="onunload"></a> ~~`onunload`~~                                     | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)                                                                                                           | `WindowEventHandlers.onunload`                                                                                                                                                                                                                                                                | node_modules/typescript/lib/lib.dom.d.ts:36874 |
| <a id="onvolumechange"></a> `onvolumechange`                             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)                                                                                                          | `GlobalEventHandlers.onvolumechange`                                                                                                                                                                                                                                                          | node_modules/typescript/lib/lib.dom.d.ts:12937 |
| <a id="onwaiting"></a> `onwaiting`                                       | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)                                                                                                               | `GlobalEventHandlers.onwaiting`                                                                                                                                                                                                                                                               | node_modules/typescript/lib/lib.dom.d.ts:12939 |
| <a id="onwebkitanimationend"></a> ~~`onwebkitanimationend`~~             | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | **Deprecated** This is a legacy alias of `onanimationend`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)                                                        | `GlobalEventHandlers.onwebkitanimationend`                                                                                                                                                                                                                                                    | node_modules/typescript/lib/lib.dom.d.ts:12945 |
| <a id="onwebkitanimationiteration"></a> ~~`onwebkitanimationiteration`~~ | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | **Deprecated** This is a legacy alias of `onanimationiteration`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)                                            | `GlobalEventHandlers.onwebkitanimationiteration`                                                                                                                                                                                                                                              | node_modules/typescript/lib/lib.dom.d.ts:12951 |
| <a id="onwebkitanimationstart"></a> ~~`onwebkitanimationstart`~~         | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | **Deprecated** This is a legacy alias of `onanimationstart`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)                                                    | `GlobalEventHandlers.onwebkitanimationstart`                                                                                                                                                                                                                                                  | node_modules/typescript/lib/lib.dom.d.ts:12957 |
| <a id="onwebkittransitionend"></a> ~~`onwebkittransitionend`~~           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | **Deprecated** This is a legacy alias of `ontransitionend`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)                                                      | `GlobalEventHandlers.onwebkittransitionend`                                                                                                                                                                                                                                                   | node_modules/typescript/lib/lib.dom.d.ts:12963 |
| <a id="onwheel"></a> `onwheel`                                           | `public`   | `null`                                                                                      | (`this`, `ev`) => `any`                                                                                                                                                                                                                                                                                                                                                                                                              | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)                                                                                                                          | `GlobalEventHandlers.onwheel`                                                                                                                                                                                                                                                                 | node_modules/typescript/lib/lib.dom.d.ts:12965 |
| <a id="opener"></a> `opener`                                             | `public`   | `any`                                                                                       | The Window interface's **`opener`** property returns a reference to the window that opened the window, either with Window.open, or by navigating a link with a `target` attribute. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/opener)                                                                                                                                                                         | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36505                                                                                                                                                                                                                                                |
| <a id="orientation"></a> ~~`orientation`~~                               | `readonly` | `number`                                                                                    | Returns the orientation in degrees (in 90-degree increments) of the viewport relative to the device's natural orientation. **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientation)                                                                                                                                                                                                             | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36512                                                                                                                                                                                                                                                |
| <a id="origin"></a> `origin`                                             | `readonly` | `string`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin)                                                                                                                                                                                                                                                                                                                                                            | `WindowOrWorkerGlobalScope.origin`                                                                                                                                                                       | node_modules/typescript/lib/lib.dom.d.ts:36902                                                                                                                                                                                                                                                |
| <a id="originagentcluster"></a> `originAgentCluster`                     | `readonly` | `boolean`                                                                                   | The **`originAgentCluster`** read-only property of the Window interface returns `true` if this window belongs to an _origin-keyed agent cluster_: this means that the operating system has provided dedicated resources (for example an operating system process) to this window's origin that are not shared with windows from other origins. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/originAgentCluster) | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36518                                                                                                                                                                                                                                                |
| <a id="outerheight"></a> `outerHeight`                                   | `readonly` | `number`                                                                                    | The **`Window.outerHeight`** read-only property returns the height in pixels of the whole browser window, including any sidebar, window chrome, and window-resizing borders/handles. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerHeight)                                                                                                                                                                  | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36524                                                                                                                                                                                                                                                |
| <a id="outerwidth"></a> `outerWidth`                                     | `readonly` | `number`                                                                                    | **`Window.outerWidth`** read-only property returns the width of the outside of the browser window. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerWidth)                                                                                                                                                                                                                                                     | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36530                                                                                                                                                                                                                                                |
| <a id="pagexoffset"></a> `pageXOffset`                                   | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)                                                                                                                                                                                                                                                                                                                                                           | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36532                                                                                                                                                                                                                                                |
| <a id="pageyoffset"></a> `pageYOffset`                                   | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)                                                                                                                                                                                                                                                                                                                                                           | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36534                                                                                                                                                                                                                                                |
| <a id="parent"></a> `parent`                                             | `readonly` | [`Window`](#window)                                                                         | The **`Window.parent`** property is a reference to the parent of the current window or subframe. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/parent)                                                                                                                                                                                                                                                           | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36540                                                                                                                                                                                                                                                |
| <a id="performance"></a> `performance`                                   | `readonly` | [`Performance`](https://developer.mozilla.org/docs/Web/API/Performance)                     | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance)                                                                                                                                                                                                                                                                                                                                                       | `WindowOrWorkerGlobalScope.performance`                                                                                                                                                                  | node_modules/typescript/lib/lib.dom.d.ts:36904                                                                                                                                                                                                                                                |
| <a id="personalbar"></a> `personalbar`                                   | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns the `personalbar` object. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/personalbar)                                                                                                                                                                                                                                                                                                                     | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36546                                                                                                                                                                                                                                                |
| <a id="screen"></a> `screen`                                             | `readonly` | [`Screen`](https://developer.mozilla.org/docs/Web/API/Screen)                               | The Window property **`screen`** returns a reference to the screen object associated with the window. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screen)                                                                                                                                                                                                                                                      | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36552                                                                                                                                                                                                                                                |
| <a id="screenleft"></a> `screenLeft`                                     | `readonly` | `number`                                                                                    | The **`Window.screenLeft`** read-only property returns the horizontal distance, in CSS pixels, from the left border of the user's browser viewport to the left side of the screen. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenLeft)                                                                                                                                                                     | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36558                                                                                                                                                                                                                                                |
| <a id="screentop"></a> `screenTop`                                       | `readonly` | `number`                                                                                    | The **`Window.screenTop`** read-only property returns the vertical distance, in CSS pixels, from the top border of the user's browser viewport to the top side of the screen. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenTop)                                                                                                                                                                           | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36564                                                                                                                                                                                                                                                |
| <a id="screenx"></a> `screenX`                                           | `readonly` | `number`                                                                                    | The **`Window.screenX`** read-only property returns the horizontal distance, in CSS pixels, of the left border of the user's browser viewport to the left side of the screen. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenX)                                                                                                                                                                             | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36570                                                                                                                                                                                                                                                |
| <a id="screeny"></a> `screenY`                                           | `readonly` | `number`                                                                                    | The **`Window.screenY`** read-only property returns the vertical distance, in CSS pixels, of the top border of the user's browser viewport to the top edge of the screen. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenY)                                                                                                                                                                                 | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36576                                                                                                                                                                                                                                                |
| <a id="scrollbars"></a> `scrollbars`                                     | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns the `scrollbars` object. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollbars)                                                                                                                                                                                                                                                                                                                       | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36594                                                                                                                                                                                                                                                |
| <a id="scrollx"></a> `scrollX`                                           | `readonly` | `number`                                                                                    | The read-only **`scrollX`** property of the Window interface returns the number of pixels by which the document is currently scrolled horizontally. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)                                                                                                                                                                                                       | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36582                                                                                                                                                                                                                                                |
| <a id="scrolly"></a> `scrollY`                                           | `readonly` | `number`                                                                                    | The read-only **`scrollY`** property of the Window interface returns the number of pixels by which the document is currently scrolled vertically. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)                                                                                                                                                                                                         | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36588                                                                                                                                                                                                                                                |
| <a id="self"></a> `self`                                                 | `readonly` | [`Window`](#window) & _typeof_ `globalThis`                                                 | The **`Window.self`** read-only property returns the window itself, as a WindowProxy. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/self)                                                                                                                                                                                                                                                                        | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36600                                                                                                                                                                                                                                                |
| <a id="sessionstorage"></a> `sessionStorage`                             | `readonly` | [`Storage`](https://developer.mozilla.org/docs/Web/API/Storage)                             | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)                                                                                                                                                                                                                                                                                                                                                    | `WindowSessionStorage.sessionStorage`                                                                                                                                                                    | node_modules/typescript/lib/lib.dom.d.ts:36932                                                                                                                                                                                                                                                |
| <a id="speccer"></a> `speccer`                                           | `public`   | `any`                                                                                       | Represents the speccer object for additional functionality.                                                                                                                                                                                                                                                                                                                                                                          | -                                                                                                                                                                                                        | [src/types/interfaces/global.ts:26](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L26)                                                                                                                                                                          |
| <a id="speccer_literals"></a> `SPECCER_LITERALS`                         | `public`   | `string`\[]                                                                                 | Represents the custom literals to be used. ![Screenshot of speccer with custom literals](https://github.com/phun-ky/speccer/blob/main/public/literals.png?raw=true) **Example** `window.SPECCER_LITERALS = [あ,い,う,え,お,か,き,く,け,こ,さ,し,す,せ,そ,た,ち,つ,て,と,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を]; speccer();`                                                                     | -                                                                                                                                                                                                        | [src/types/interfaces/global.ts:37](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L37)                                                                                                                                                                          |
| <a id="speechsynthesis"></a> `speechSynthesis`                           | `readonly` | [`SpeechSynthesis`](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis)             | The `speechSynthesis` read-only property of the Window object returns a SpeechSynthesis object, which is the entry point into using Web Speech API speech synthesis functionality. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/speechSynthesis)                                                                                                                                                                | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36606                                                                                                                                                                                                                                                |
| <a id="status"></a> ~~`status`~~                                         | `public`   | `string`                                                                                    | The **`status`** property of the bar at the bottom of the browser window. **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/status)                                                                                                                                                                                                                                                                   | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36613                                                                                                                                                                                                                                                |
| <a id="statusbar"></a> `statusbar`                                       | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns the `statusbar` object. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/statusbar)                                                                                                                                                                                                                                                                                                                         | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36619                                                                                                                                                                                                                                                |
| <a id="toolbar"></a> `toolbar`                                           | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns the `toolbar` object. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/toolbar)                                                                                                                                                                                                                                                                                                                             | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36625                                                                                                                                                                                                                                                |
| <a id="top"></a> `top`                                                   | `readonly` | `null`                                                                                      | [`Window`](#window)                                                                                                                                                                                                                                                                                                                                                                                                                  | Returns a reference to the topmost window in the window hierarchy. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/top)                                                                | -                                                                                                                                                                                                                                                                                             | node_modules/typescript/lib/lib.dom.d.ts:36631 |
| <a id="visualviewport"></a> `visualViewport`                             | `readonly` |                                                                                             | `null`                                                                                                                                                                                                                                                                                                                                                                                                                               | [`VisualViewport`](https://developer.mozilla.org/docs/Web/API/VisualViewport)                                                                                                                            | The **`visualViewport`** read-only property of the Window interface returns a VisualViewport object representing the visual viewport for a given window, or `null` if current document is not fully active. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/visualViewport) | -                                              | node_modules/typescript/lib/lib.dom.d.ts:36637 |
| <a id="window-1"></a> `window`                                           | `readonly` | [`Window`](#window) & _typeof_ `globalThis`                                                 | The **`window`** property of a Window object points to the window object itself. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/window)                                                                                                                                                                                                                                                                           | -                                                                                                                                                                                                        | node_modules/typescript/lib/lib.dom.d.ts:36643                                                                                                                                                                                                                                                |

#### Accessors

##### location

###### Get Signature

```ts
get location(): Location;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36450

The **`Window.location`** read-only property returns a Location object with
information about the current location of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/location)

###### Returns

[`Location`](https://developer.mozilla.org/docs/Web/API/Location)

###### Set Signature

```ts
set location(href): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36451

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `href`    | `string` |

###### Returns

`void`

#### Methods

##### addEventListener()

###### Call Signature

```ts
addEventListener<K>(
   type,
   listener,
   options?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36795

The **`addEventListener()`** method of the EventTarget interface sets up a
function that will be called whenever the specified event is delivered to the
target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

###### Type Parameters

| Type Parameter                       |
| ------------------------------------ |
| `K` _extends_ keyof `WindowEventMap` |

###### Parameters

| Parameter  | Type                    |
| ---------- | ----------------------- | ------------------------- |
| `type`     | `K`                     |
| `listener` | (`this`, `ev`) => `any` |
| `options?` | `boolean`               | `AddEventListenerOptions` |

###### Returns

`void`

###### Overrides

```ts
EventTarget.addEventListener;
```

###### Call Signature

```ts
addEventListener(
   type,
   listener,
   options?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36796

The **`addEventListener()`** method of the EventTarget interface sets up a
function that will be called whenever the specified event is delivered to the
target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

###### Parameters

| Parameter  | Type                                 |
| ---------- | ------------------------------------ | ------------------------- |
| `type`     | `string`                             |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean`                            | `AddEventListenerOptions` |

###### Returns

`void`

###### Overrides

```ts
EventTarget.addEventListener;
```

##### alert()

```ts
alert(message?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36649

`window.alert()` instructs the browser to display a dialog with an optional
message, and to wait until the user dismisses the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/alert)

###### Parameters

| Parameter  | Type  |
| ---------- | ----- |
| `message?` | `any` |

###### Returns

`void`

##### atob()

```ts
atob(data): string;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36906

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `data`    | `string` |

###### Returns

`string`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.atob;
```

##### ~~blur()~~

```ts
blur(): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36656

The **`Window.blur()`** method does nothing.

###### Returns

`void`

###### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/blur)

##### btoa()

```ts
btoa(data): string;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36908

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `data`    | `string` |

###### Returns

`string`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.btoa;
```

##### cancelAnimationFrame()

```ts
cancelAnimationFrame(handle): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:3133

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `handle`  | `number` |

###### Returns

`void`

###### Inherited from

```ts
AnimationFrameProvider.cancelAnimationFrame;
```

##### cancelIdleCallback()

```ts
cancelIdleCallback(handle): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36662

The **`window.cancelIdleCallback()`** method cancels a callback previously
scheduled with window.requestIdleCallback().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cancelIdleCallback)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `handle`  | `number` |

###### Returns

`void`

##### ~~captureEvents()~~

```ts
captureEvents(): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36669

The **`Window.captureEvents()`** method does nothing.

###### Returns

`void`

###### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/captureEvents)

##### clearInterval()

```ts
clearInterval(id): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36910

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval)

###### Parameters

| Parameter | Type        |
| --------- | ----------- | -------- |
| `id`      | `undefined` | `number` |

###### Returns

`void`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.clearInterval;
```

##### clearTimeout()

```ts
clearTimeout(id): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36912

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout)

###### Parameters

| Parameter | Type        |
| --------- | ----------- | -------- |
| `id`      | `undefined` | `number` |

###### Returns

`void`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.clearTimeout;
```

##### close()

```ts
close(): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36675

The **`Window.close()`** method closes the current window, or the window on
which it was called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/close)

###### Returns

`void`

##### confirm()

```ts
confirm(message?): boolean;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36681

`window.confirm()` instructs the browser to display a dialog with an optional
message, and to wait until the user either confirms or cancels the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/confirm)

###### Parameters

| Parameter  | Type     |
| ---------- | -------- |
| `message?` | `string` |

###### Returns

`boolean`

##### createImageBitmap()

###### Call Signature

```ts
createImageBitmap(image, options?): Promise<ImageBitmap>;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36914

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap)

###### Parameters

| Parameter  | Type                 |
| ---------- | -------------------- |
| `image`    | `ImageBitmapSource`  |
| `options?` | `ImageBitmapOptions` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`ImageBitmap`](https://developer.mozilla.org/docs/Web/API/ImageBitmap)>

###### Inherited from

```ts
WindowOrWorkerGlobalScope.createImageBitmap;
```

###### Call Signature

```ts
createImageBitmap(
   image,
   sx,
   sy,
   sw,
   sh,
options?): Promise<ImageBitmap>;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36915

###### Parameters

| Parameter  | Type                 |
| ---------- | -------------------- |
| `image`    | `ImageBitmapSource`  |
| `sx`       | `number`             |
| `sy`       | `number`             |
| `sw`       | `number`             |
| `sh`       | `number`             |
| `options?` | `ImageBitmapOptions` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`ImageBitmap`](https://developer.mozilla.org/docs/Web/API/ImageBitmap)>

###### Inherited from

```ts
WindowOrWorkerGlobalScope.createImageBitmap;
```

##### dispatchEvent()

```ts
dispatchEvent(event): boolean;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:11575

The **`dispatchEvent()`** method of the EventTarget sends an Event to the
object, (synchronously) invoking the affected event listeners in the appropriate
order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

###### Parameters

| Parameter | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `event`   | [`Event`](https://developer.mozilla.org/docs/Web/API/Event) |

###### Returns

`boolean`

###### Inherited from

```ts
EventTarget.dispatchEvent;
```

##### fetch()

```ts
fetch(input, init?): Promise<Response>;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36917

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type                                                    |
| --------- | ------------------------------------------------------- | ------------- |
| `input`   | [`URL`](https://developer.mozilla.org/docs/Web/API/URL) | `RequestInfo` |
| `init?`   | `RequestInit`                                           |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

###### Inherited from

```ts
WindowOrWorkerGlobalScope.fetch;
```

##### focus()

```ts
focus(): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36687

Makes a request to bring the window to the front.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/focus)

###### Returns

`void`

##### getComputedStyle()

```ts
getComputedStyle(elt, pseudoElt?): CSSStyleDeclaration;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36693

The **`Window.getComputedStyle()`** method returns an object containing the
values of all CSS properties of an element, after applying active stylesheets
and resolving any basic computation those values may contain.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle)

###### Parameters

| Parameter    | Type                                                            |
| ------------ | --------------------------------------------------------------- | -------- |
| `elt`        | [`Element`](https://developer.mozilla.org/docs/Web/API/Element) |
| `pseudoElt?` | `null`                                                          | `string` |

###### Returns

[`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)

##### getSelection()

```ts
getSelection():
  | null
  | Selection;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36699

The **`getSelection()`** method of the Window interface returns the Selection
object associated with the window's document, representing the range of text
selected by the user or the current position of the caret.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getSelection)

###### Returns

| `null` | [`Selection`](https://developer.mozilla.org/docs/Web/API/Selection)

##### matchMedia()

```ts
matchMedia(query): MediaQueryList;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36705

The Window interface's **`matchMedia()`** method returns a new MediaQueryList
object that can then be used to determine if the document matches the media
query string, as well as to monitor the document to detect when it matches (or
stops matching) that media query.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `query`   | `string` |

###### Returns

[`MediaQueryList`](https://developer.mozilla.org/docs/Web/API/MediaQueryList)

##### moveBy()

```ts
moveBy(x, y): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36711

The **`moveBy()`** method of the Window interface moves the current window by a
specified amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveBy)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `x`       | `number` |
| `y`       | `number` |

###### Returns

`void`

##### moveTo()

```ts
moveTo(x, y): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36717

The **`moveTo()`** method of the Window interface moves the current window to
the specified coordinates.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveTo)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `x`       | `number` |
| `y`       | `number` |

###### Returns

`void`

##### open()

```ts
open(
   url?,
   target?,
   features?): null | Window;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36723

The **`open()`** method of the `Window` interface loads a specified resource
into a new or existing browsing context (that is, a tab, a window, or an iframe)
under a specified name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/open)

###### Parameters

| Parameter   | Type     |
| ----------- | -------- | ------------------------------------------------------- |
| `url?`      | `string` | [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `target?`   | `string` |
| `features?` | `string` |

###### Returns

`null` | [`Window`](#window)

##### postMessage()

###### Call Signature

```ts
postMessage(
   message,
   targetOrigin,
   transfer?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36729

The **`window.postMessage()`** method safely enables cross-origin communication
between Window objects; _e.g.,_ between a page and a pop-up that it spawned, or
between a page and an iframe embedded within it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/postMessage)

###### Parameters

| Parameter      | Type              |
| -------------- | ----------------- |
| `message`      | `any`             |
| `targetOrigin` | `string`          |
| `transfer?`    | `Transferable`\[] |

###### Returns

`void`

###### Call Signature

```ts
postMessage(message, options?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36730

###### Parameters

| Parameter  | Type                       |
| ---------- | -------------------------- |
| `message`  | `any`                      |
| `options?` | `WindowPostMessageOptions` |

###### Returns

`void`

##### print()

```ts
print(): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36736

Opens the print dialog to print the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/print)

###### Returns

`void`

##### prompt()

```ts
prompt(message?, _default?): null | string;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36742

`window.prompt()` instructs the browser to display a dialog with an optional
message prompting the user to input some text, and to wait until the user either
submits the text or cancels the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/prompt)

###### Parameters

| Parameter   | Type     |
| ----------- | -------- |
| `message?`  | `string` |
| `_default?` | `string` |

###### Returns

`null` | `string`

##### queueMicrotask()

```ts
queueMicrotask(callback): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36919

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask)

###### Parameters

| Parameter  | Type           |
| ---------- | -------------- |
| `callback` | `VoidFunction` |

###### Returns

`void`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.queueMicrotask;
```

##### ~~releaseEvents()~~

```ts
releaseEvents(): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36749

Releases the window from trapping events of a specific type.

###### Returns

`void`

###### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/releaseEvents)

##### removeEventListener()

###### Call Signature

```ts
removeEventListener<K>(
   type,
   listener,
   options?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36797

The **`removeEventListener()`** method of the EventTarget interface removes an
event listener previously registered with EventTarget.addEventListener() from
the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

###### Type Parameters

| Type Parameter                       |
| ------------------------------------ |
| `K` _extends_ keyof `WindowEventMap` |

###### Parameters

| Parameter  | Type                    |
| ---------- | ----------------------- | ---------------------- |
| `type`     | `K`                     |
| `listener` | (`this`, `ev`) => `any` |
| `options?` | `boolean`               | `EventListenerOptions` |

###### Returns

`void`

###### Overrides

```ts
EventTarget.removeEventListener;
```

###### Call Signature

```ts
removeEventListener(
   type,
   listener,
   options?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36798

The **`removeEventListener()`** method of the EventTarget interface removes an
event listener previously registered with EventTarget.addEventListener() from
the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

###### Parameters

| Parameter  | Type                                 |
| ---------- | ------------------------------------ | ---------------------- |
| `type`     | `string`                             |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean`                            | `EventListenerOptions` |

###### Returns

`void`

###### Overrides

```ts
EventTarget.removeEventListener;
```

##### reportError()

```ts
reportError(e): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36921

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError)

###### Parameters

| Parameter | Type  |
| --------- | ----- |
| `e`       | `any` |

###### Returns

`void`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.reportError;
```

##### requestAnimationFrame()

```ts
requestAnimationFrame(callback): number;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:3135

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)

###### Parameters

| Parameter  | Type                   |
| ---------- | ---------------------- |
| `callback` | `FrameRequestCallback` |

###### Returns

`number`

###### Inherited from

```ts
AnimationFrameProvider.requestAnimationFrame;
```

##### requestIdleCallback()

```ts
requestIdleCallback(callback, options?): number;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36755

The **`window.requestIdleCallback()`** method queues a function to be called
during a browser's idle periods.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback)

###### Parameters

| Parameter  | Type                  |
| ---------- | --------------------- |
| `callback` | `IdleRequestCallback` |
| `options?` | `IdleRequestOptions`  |

###### Returns

`number`

##### resizeBy()

```ts
resizeBy(x, y): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36761

The **`Window.resizeBy()`** method resizes the current window by a specified
amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeBy)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `x`       | `number` |
| `y`       | `number` |

###### Returns

`void`

##### resizeTo()

```ts
resizeTo(width, height): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36767

The **`Window.resizeTo()`** method dynamically resizes the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeTo)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `width`   | `number` |
| `height`  | `number` |

###### Returns

`void`

##### scroll()

###### Call Signature

```ts
scroll(options?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36773

The **`Window.scroll()`** method scrolls the window to a particular place in the
document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scroll)

###### Parameters

| Parameter  | Type              |
| ---------- | ----------------- |
| `options?` | `ScrollToOptions` |

###### Returns

`void`

###### Call Signature

```ts
scroll(x, y): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36774

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `x`       | `number` |
| `y`       | `number` |

###### Returns

`void`

##### scrollBy()

###### Call Signature

```ts
scrollBy(options?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36780

The **`Window.scrollBy()`** method scrolls the document in the window by the
given amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollBy)

###### Parameters

| Parameter  | Type              |
| ---------- | ----------------- |
| `options?` | `ScrollToOptions` |

###### Returns

`void`

###### Call Signature

```ts
scrollBy(x, y): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36781

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `x`       | `number` |
| `y`       | `number` |

###### Returns

`void`

##### scrollTo()

###### Call Signature

```ts
scrollTo(options?): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36787

**`Window.scrollTo()`** scrolls to a particular set of coordinates in the
document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollTo)

###### Parameters

| Parameter  | Type              |
| ---------- | ----------------- |
| `options?` | `ScrollToOptions` |

###### Returns

`void`

###### Call Signature

```ts
scrollTo(x, y): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36788

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `x`       | `number` |
| `y`       | `number` |

###### Returns

`void`

##### setInterval()

```ts
setInterval(
   handler,
   timeout?, ...
   arguments?): number;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36923

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval)

###### Parameters

| Parameter       | Type           |
| --------------- | -------------- |
| `handler`       | `TimerHandler` |
| `timeout?`      | `number`       |
| ...`arguments?` | `any`\[]       |

###### Returns

`number`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.setInterval;
```

##### setTimeout()

```ts
setTimeout(
   handler,
   timeout?, ...
   arguments?): number;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36925

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)

###### Parameters

| Parameter       | Type           |
| --------------- | -------------- |
| `handler`       | `TimerHandler` |
| `timeout?`      | `number`       |
| ...`arguments?` | `any`\[]       |

###### Returns

`number`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.setTimeout;
```

##### stop()

```ts
stop(): void;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36794

The **`window.stop()`** stops further resource loading in the current browsing
context, equivalent to the stop button in the browser.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/stop)

###### Returns

`void`

##### structuredClone()

```ts
structuredClone<T>(value, options?): T;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36927

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone)

###### Type Parameters

| Type Parameter | Default type |
| -------------- | ------------ |
| `T`            | `any`        |

###### Parameters

| Parameter  | Type                         |
| ---------- | ---------------------------- |
| `value`    | `T`                          |
| `options?` | `StructuredSerializeOptions` |

###### Returns

`T`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.structuredClone;
```

## Variables

### Window

```ts
Window: {
(): Window;
  prototype: Window;
};
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:36358

#### Type Declaration

#### Returns

[`Window`](#window)

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="prototype"></a> `prototype`

</td>
<td>

[`Window`](#window)

</td>
<td>

node_modules/typescript/lib/lib.dom.d.ts:36803

</td>
</tr>
</tbody>
</table>

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
