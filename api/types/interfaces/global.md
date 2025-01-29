<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/speccer/main/public/logo-speccer-horizontal-colored-package.svg?raw=true" style="max-height:32px;" />
</div>

[@phun-ky/speccer](../../README.md) / types/interfaces/global

# types/interfaces/global

> Last updated 2025-01-29T08:54:31.606Z

## Table of Contents

- [Interfaces](#interfaces)
  - [Window](#window)
- [Variables](#variables)
  - [Window()](#window-1)

## Interfaces

### Window

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26280

A window containing a DOM document; the document property points to the DOM document loaded in that window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window)

#### Extends

- [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget).`AnimationFrameProvider`.`GlobalEventHandlers`.`WindowEventHandlers`.`WindowLocalStorage`.`WindowOrWorkerGlobalScope`.`WindowSessionStorage`

#### Indexable

```ts
[index: number]: Window
```

#### Properties

| Property                                                               | Modifier   | Type                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                      | Inherited from                                   | Defined in                                                                                                           |
| ---------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| <a id="caches" /> `caches`                                             | `readonly` | [`CacheStorage`](https://developer.mozilla.org/docs/Web/API/CacheStorage)                   | Available only in secure contexts. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)                                                                                                                                                                                                                                                     | `WindowOrWorkerGlobalScope.caches`               | node_modules/typescript/lib/lib.dom.d.ts:26635                                                                       |
| <a id="clientinformation" /> ~~`clientInformation`~~                   | `readonly` | [`Navigator`](https://developer.mozilla.org/docs/Web/API/Navigator)                         | **Deprecated** This is a legacy alias of `navigator`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)                                                                                                                                                                                                                               | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26286                                                                       |
| <a id="closed" /> `closed`                                             | `readonly` | `boolean`                                                                                   | Returns true if the window has been closed, false otherwise. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/closed)                                                                                                                                                                                                                           | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26292                                                                       |
| <a id="crossoriginisolated" /> `crossOriginIsolated`                   | `readonly` | `boolean`                                                                                   | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)                                                                                                                                                                                                                                                                           | `WindowOrWorkerGlobalScope.crossOriginIsolated`  | node_modules/typescript/lib/lib.dom.d.ts:26637                                                                       |
| <a id="crypto" /> `crypto`                                             | `readonly` | [`Crypto`](https://developer.mozilla.org/docs/Web/API/Crypto)                               | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto)                                                                                                                                                                                                                                                                                        | `WindowOrWorkerGlobalScope.crypto`               | node_modules/typescript/lib/lib.dom.d.ts:26639                                                                       |
| <a id="customelements" /> `customElements`                             | `readonly` | [`CustomElementRegistry`](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry) | Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/customElements)                                                                                                                                                                 | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26298                                                                       |
| <a id="devicepixelratio" /> `devicePixelRatio`                         | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)                                                                                                                                                                                                                                                                              | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26300                                                                       |
| <a id="document" /> `document`                                         | `readonly` | [`Document`](https://developer.mozilla.org/docs/Web/API/Document)                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/document)                                                                                                                                                                                                                                                                                      | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26302                                                                       |
| <a id="drawcircle" /> `DrawCircle`                                     | `public`   | `any`                                                                                       | Represents the DrawCircle class for drawing circles.                                                                                                                                                                                                                                                                                                             | -                                                | [src/types/interfaces/global.ts:16](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L16) |
| <a id="drawsvgcurlybracket" /> `DrawSVGCurlyBracket`                   | `public`   | `any`                                                                                       | Represents the DrawSVGCurlyBracket class for drawing curly brackets.                                                                                                                                                                                                                                                                                             | -                                                | [src/types/interfaces/global.ts:12](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L12) |
| <a id="drawsvgline" /> `DrawSVGLine`                                   | `public`   | `any`                                                                                       | Represents the DrawSVGLine class for drawing lines.                                                                                                                                                                                                                                                                                                              | -                                                | [src/types/interfaces/global.ts:21](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L21) |
| <a id="event" /> ~~`event`~~                                           | `readonly` | `undefined` \| [`Event`](https://developer.mozilla.org/docs/Web/API/Event)                  | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/event)                                                                                                                                                                                                                                                                          | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26308                                                                       |
| <a id="external" /> ~~`external`~~                                     | `readonly` | `External`                                                                                  | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/external)                                                                                                                                                                                                                                                                       | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26314                                                                       |
| <a id="frameelement" /> `frameElement`                                 | `readonly` | `null` \| [`Element`](https://developer.mozilla.org/docs/Web/API/Element)                   | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frameElement)                                                                                                                                                                                                                                                                                  | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26316                                                                       |
| <a id="frames" /> `frames`                                             | `readonly` | [`Window`](global.md#window)                                                                | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frames)                                                                                                                                                                                                                                                                                        | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26318                                                                       |
| <a id="history" /> `history`                                           | `readonly` | [`History`](https://developer.mozilla.org/docs/Web/API/History)                             | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/history)                                                                                                                                                                                                                                                                                       | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26320                                                                       |
| <a id="indexeddb" /> `indexedDB`                                       | `readonly` | [`IDBFactory`](https://developer.mozilla.org/docs/Web/API/IDBFactory)                       | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)                                                                                                                                                                                                                                                                                     | `WindowOrWorkerGlobalScope.indexedDB`            | node_modules/typescript/lib/lib.dom.d.ts:26641                                                                       |
| <a id="innerheight" /> `innerHeight`                                   | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerHeight)                                                                                                                                                                                                                                                                                   | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26322                                                                       |
| <a id="innerwidth" /> `innerWidth`                                     | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerWidth)                                                                                                                                                                                                                                                                                    | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26324                                                                       |
| <a id="issecurecontext" /> `isSecureContext`                           | `readonly` | `boolean`                                                                                   | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext)                                                                                                                                                                                                                                                                               | `WindowOrWorkerGlobalScope.isSecureContext`      | node_modules/typescript/lib/lib.dom.d.ts:26643                                                                       |
| <a id="length" /> `length`                                             | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/length)                                                                                                                                                                                                                                                                                        | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26326                                                                       |
| <a id="localstorage" /> `localStorage`                                 | `readonly` | [`Storage`](https://developer.mozilla.org/docs/Web/API/Storage)                             | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/localStorage)                                                                                                                                                                                                                                                                                  | `WindowLocalStorage.localStorage`                | node_modules/typescript/lib/lib.dom.d.ts:26626                                                                       |
| <a id="locationbar" /> `locationbar`                                   | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns true if the location bar is visible; otherwise, returns false. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/locationbar)                                                                                                                                                                                                            | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26335                                                                       |
| <a id="menubar" /> `menubar`                                           | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns true if the menu bar is visible; otherwise, returns false. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/menubar)                                                                                                                                                                                                                    | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26341                                                                       |
| <a id="name" /> `name`                                                 | `public`   | `string`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/name)                                                                                                                                                                                                                                                                                          | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26343                                                                       |
| <a id="navigator" /> `navigator`                                       | `readonly` | [`Navigator`](https://developer.mozilla.org/docs/Web/API/Navigator)                         | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)                                                                                                                                                                                                                                                                                     | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26345                                                                       |
| <a id="onabort" /> `onabort`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user aborts the download. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)                                                                                                                                                                                                           | `GlobalEventHandlers.onabort`                    | node_modules/typescript/lib/lib.dom.d.ts:9452                                                                        |
| <a id="onafterprint" /> `onafterprint`                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event)                                                                                                                                                                                                                                                                              | `WindowEventHandlers.onafterprint`               | node_modules/typescript/lib/lib.dom.d.ts:26579                                                                       |
| <a id="onanimationcancel" /> `onanimationcancel`                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)                                                                                                                                                                                                                                                                        | `GlobalEventHandlers.onanimationcancel`          | node_modules/typescript/lib/lib.dom.d.ts:9454                                                                        |
| <a id="onanimationend" /> `onanimationend`                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)                                                                                                                                                                                                                                                                           | `GlobalEventHandlers.onanimationend`             | node_modules/typescript/lib/lib.dom.d.ts:9456                                                                        |
| <a id="onanimationiteration" /> `onanimationiteration`                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)                                                                                                                                                                                                                                                                     | `GlobalEventHandlers.onanimationiteration`       | node_modules/typescript/lib/lib.dom.d.ts:9458                                                                        |
| <a id="onanimationstart" /> `onanimationstart`                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)                                                                                                                                                                                                                                                                         | `GlobalEventHandlers.onanimationstart`           | node_modules/typescript/lib/lib.dom.d.ts:9460                                                                        |
| <a id="onauxclick" /> `onauxclick`                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)                                                                                                                                                                                                                                                                               | `GlobalEventHandlers.onauxclick`                 | node_modules/typescript/lib/lib.dom.d.ts:9462                                                                        |
| <a id="onbeforeinput" /> `onbeforeinput`                               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)                                                                                                                                                                                                                                                                            | `GlobalEventHandlers.onbeforeinput`              | node_modules/typescript/lib/lib.dom.d.ts:9464                                                                        |
| <a id="onbeforeprint" /> `onbeforeprint`                               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeprint_event)                                                                                                                                                                                                                                                                             | `WindowEventHandlers.onbeforeprint`              | node_modules/typescript/lib/lib.dom.d.ts:26581                                                                       |
| <a id="onbeforetoggle" /> `onbeforetoggle`                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)                                                                                                                                                                                                                                                                       | `GlobalEventHandlers.onbeforetoggle`             | node_modules/typescript/lib/lib.dom.d.ts:9466                                                                        |
| <a id="onbeforeunload" /> `onbeforeunload`                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)                                                                                                                                                                                                                                                                            | `WindowEventHandlers.onbeforeunload`             | node_modules/typescript/lib/lib.dom.d.ts:26583                                                                       |
| <a id="onblur" /> `onblur`                                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the object loses the input focus. **Param** The focus event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)                                                                                                                                                                                                           | `GlobalEventHandlers.onblur`                     | node_modules/typescript/lib/lib.dom.d.ts:9473                                                                        |
| <a id="oncancel" /> `oncancel`                                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/cancel_event)                                                                                                                                                                                                                                                                             | `GlobalEventHandlers.oncancel`                   | node_modules/typescript/lib/lib.dom.d.ts:9475                                                                        |
| <a id="oncanplay" /> `oncanplay`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when playback is possible, but would require further buffering. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)                                                                                                                                                                           | `GlobalEventHandlers.oncanplay`                  | node_modules/typescript/lib/lib.dom.d.ts:9482                                                                        |
| <a id="oncanplaythrough" /> `oncanplaythrough`                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)                                                                                                                                                                                                                                                                | `GlobalEventHandlers.oncanplaythrough`           | node_modules/typescript/lib/lib.dom.d.ts:9484                                                                        |
| <a id="onchange" /> `onchange`                                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the contents of the object or selection have changed. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)                                                                                                                                                                                       | `GlobalEventHandlers.onchange`                   | node_modules/typescript/lib/lib.dom.d.ts:9491                                                                        |
| <a id="onclick" /> `onclick`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user clicks the left mouse button on the object **Param** The mouse event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)                                                                                                                                                                                        | `GlobalEventHandlers.onclick`                    | node_modules/typescript/lib/lib.dom.d.ts:9498                                                                        |
| <a id="onclose" /> `onclose`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)                                                                                                                                                                                                                                                                        | `GlobalEventHandlers.onclose`                    | node_modules/typescript/lib/lib.dom.d.ts:9500                                                                        |
| <a id="oncontextlost" /> `oncontextlost`                               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)                                                                                                                                                                                                                                                             | `GlobalEventHandlers.oncontextlost`              | node_modules/typescript/lib/lib.dom.d.ts:9502                                                                        |
| <a id="oncontextmenu" /> `oncontextmenu`                               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user clicks the right mouse button in the client area, opening the context menu. **Param** The mouse event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)                                                                                                                                                 | `GlobalEventHandlers.oncontextmenu`              | node_modules/typescript/lib/lib.dom.d.ts:9509                                                                        |
| <a id="oncontextrestored" /> `oncontextrestored`                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)                                                                                                                                                                                                                                                              | `GlobalEventHandlers.oncontextrestored`          | node_modules/typescript/lib/lib.dom.d.ts:9511                                                                        |
| <a id="oncopy" /> `oncopy`                                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)                                                                                                                                                                                                                                                                                   | `GlobalEventHandlers.oncopy`                     | node_modules/typescript/lib/lib.dom.d.ts:9513                                                                        |
| <a id="oncuechange" /> `oncuechange`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)                                                                                                                                                                                                                                                                     | `GlobalEventHandlers.oncuechange`                | node_modules/typescript/lib/lib.dom.d.ts:9515                                                                        |
| <a id="oncut" /> `oncut`                                               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)                                                                                                                                                                                                                                                                                    | `GlobalEventHandlers.oncut`                      | node_modules/typescript/lib/lib.dom.d.ts:9517                                                                        |
| <a id="ondblclick" /> `ondblclick`                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user double-clicks the object. **Param** The mouse event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)                                                                                                                                                                                                      | `GlobalEventHandlers.ondblclick`                 | node_modules/typescript/lib/lib.dom.d.ts:9524                                                                        |
| <a id="ondevicemotion" /> `ondevicemotion`                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Available only in secure contexts. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicemotion_event)                                                                                                                                                                                                                                         | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26351                                                                       |
| <a id="ondeviceorientation" /> `ondeviceorientation`                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Available only in secure contexts. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientation_event)                                                                                                                                                                                                                                    | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26357                                                                       |
| <a id="ondeviceorientationabsolute" /> `ondeviceorientationabsolute`   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Available only in secure contexts. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientationabsolute_event)                                                                                                                                                                                                                            | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26363                                                                       |
| <a id="ondrag" /> `ondrag`                                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires on the source object continuously during a drag operation. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)                                                                                                                                                                                         | `GlobalEventHandlers.ondrag`                     | node_modules/typescript/lib/lib.dom.d.ts:9531                                                                        |
| <a id="ondragend" /> `ondragend`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires on the source object when the user releases the mouse at the close of a drag operation. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)                                                                                                                                                         | `GlobalEventHandlers.ondragend`                  | node_modules/typescript/lib/lib.dom.d.ts:9538                                                                        |
| <a id="ondragenter" /> `ondragenter`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires on the target element when the user drags the object to a valid drop target. **Param** The drag event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)                                                                                                                                                             | `GlobalEventHandlers.ondragenter`                | node_modules/typescript/lib/lib.dom.d.ts:9545                                                                        |
| <a id="ondragleave" /> `ondragleave`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation. **Param** The drag event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)                                                                                                                                   | `GlobalEventHandlers.ondragleave`                | node_modules/typescript/lib/lib.dom.d.ts:9552                                                                        |
| <a id="ondragover" /> `ondragover`                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires on the target element continuously while the user drags the object over a valid drop target. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)                                                                                                                                                   | `GlobalEventHandlers.ondragover`                 | node_modules/typescript/lib/lib.dom.d.ts:9559                                                                        |
| <a id="ondragstart" /> `ondragstart`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires on the source object when the user starts to drag a text selection or selected object. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)                                                                                                                                                        | `GlobalEventHandlers.ondragstart`                | node_modules/typescript/lib/lib.dom.d.ts:9566                                                                        |
| <a id="ondrop" /> `ondrop`                                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)                                                                                                                                                                                                                                                                               | `GlobalEventHandlers.ondrop`                     | node_modules/typescript/lib/lib.dom.d.ts:9568                                                                        |
| <a id="ondurationchange" /> `ondurationchange`                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the duration attribute is updated. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)                                                                                                                                                                                            | `GlobalEventHandlers.ondurationchange`           | node_modules/typescript/lib/lib.dom.d.ts:9575                                                                        |
| <a id="onemptied" /> `onemptied`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the media element is reset to its initial state. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)                                                                                                                                                                                     | `GlobalEventHandlers.onemptied`                  | node_modules/typescript/lib/lib.dom.d.ts:9582                                                                        |
| <a id="onended" /> `onended`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the end of playback is reached. **Param** The event [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)                                                                                                                                                                                                         | `GlobalEventHandlers.onended`                    | node_modules/typescript/lib/lib.dom.d.ts:9589                                                                        |
| <a id="onerror" /> `onerror`                                           | `public`   | `OnErrorEventHandler`                                                                       | Fires when an error occurs during object loading. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)                                                                                                                                                                                                       | `GlobalEventHandlers.onerror`                    | node_modules/typescript/lib/lib.dom.d.ts:9596                                                                        |
| <a id="onfocus" /> `onfocus`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the object receives focus. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)                                                                                                                                                                                                                       | `GlobalEventHandlers.onfocus`                    | node_modules/typescript/lib/lib.dom.d.ts:9603                                                                        |
| <a id="onformdata" /> `onformdata`                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)                                                                                                                                                                                                                                                                       | `GlobalEventHandlers.onformdata`                 | node_modules/typescript/lib/lib.dom.d.ts:9605                                                                        |
| <a id="ongamepadconnected" /> `ongamepadconnected`                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepadconnected_event)                                                                                                                                                                                                                                                                        | `WindowEventHandlers.ongamepadconnected`         | node_modules/typescript/lib/lib.dom.d.ts:26585                                                                       |
| <a id="ongamepaddisconnected" /> `ongamepaddisconnected`               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepaddisconnected_event)                                                                                                                                                                                                                                                                     | `WindowEventHandlers.ongamepaddisconnected`      | node_modules/typescript/lib/lib.dom.d.ts:26587                                                                       |
| <a id="ongotpointercapture" /> `ongotpointercapture`                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)                                                                                                                                                                                                                                                                      | `GlobalEventHandlers.ongotpointercapture`        | node_modules/typescript/lib/lib.dom.d.ts:9607                                                                        |
| <a id="onhashchange" /> `onhashchange`                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event)                                                                                                                                                                                                                                                                              | `WindowEventHandlers.onhashchange`               | node_modules/typescript/lib/lib.dom.d.ts:26589                                                                       |
| <a id="oninput" /> `oninput`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)                                                                                                                                                                                                                                                                                  | `GlobalEventHandlers.oninput`                    | node_modules/typescript/lib/lib.dom.d.ts:9609                                                                        |
| <a id="oninvalid" /> `oninvalid`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)                                                                                                                                                                                                                                                                       | `GlobalEventHandlers.oninvalid`                  | node_modules/typescript/lib/lib.dom.d.ts:9611                                                                        |
| <a id="onkeydown" /> `onkeydown`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user presses a key. **Param** The keyboard event [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)                                                                                                                                                                                                                | `GlobalEventHandlers.onkeydown`                  | node_modules/typescript/lib/lib.dom.d.ts:9618                                                                        |
| <a id="onkeypress" /> ~~`onkeypress`~~                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user presses an alphanumeric key. **Param** The event. **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)                                                                                                                                                                                          | `GlobalEventHandlers.onkeypress`                 | node_modules/typescript/lib/lib.dom.d.ts:9626                                                                        |
| <a id="onkeyup" /> `onkeyup`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user releases a key. **Param** The keyboard event [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)                                                                                                                                                                                                                 | `GlobalEventHandlers.onkeyup`                    | node_modules/typescript/lib/lib.dom.d.ts:9633                                                                        |
| <a id="onlanguagechange" /> `onlanguagechange`                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/languagechange_event)                                                                                                                                                                                                                                                                          | `WindowEventHandlers.onlanguagechange`           | node_modules/typescript/lib/lib.dom.d.ts:26591                                                                       |
| <a id="onload" /> `onload`                                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires immediately after the browser loads the object. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)                                                                                                                                                                                                     | `GlobalEventHandlers.onload`                     | node_modules/typescript/lib/lib.dom.d.ts:9640                                                                        |
| <a id="onloadeddata" /> `onloadeddata`                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when media data is loaded at the current playback position. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)                                                                                                                                                                            | `GlobalEventHandlers.onloadeddata`               | node_modules/typescript/lib/lib.dom.d.ts:9647                                                                        |
| <a id="onloadedmetadata" /> `onloadedmetadata`                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the duration and dimensions of the media have been determined. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)                                                                                                                                                                | `GlobalEventHandlers.onloadedmetadata`           | node_modules/typescript/lib/lib.dom.d.ts:9654                                                                        |
| <a id="onloadstart" /> `onloadstart`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when Internet Explorer begins looking for media data. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)                                                                                                                                                                                   | `GlobalEventHandlers.onloadstart`                | node_modules/typescript/lib/lib.dom.d.ts:9661                                                                        |
| <a id="onlostpointercapture" /> `onlostpointercapture`                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)                                                                                                                                                                                                                                                                     | `GlobalEventHandlers.onlostpointercapture`       | node_modules/typescript/lib/lib.dom.d.ts:9663                                                                        |
| <a id="onmessage" /> `onmessage`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/message_event)                                                                                                                                                                                                                                                                                 | `WindowEventHandlers.onmessage`                  | node_modules/typescript/lib/lib.dom.d.ts:26593                                                                       |
| <a id="onmessageerror" /> `onmessageerror`                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/messageerror_event)                                                                                                                                                                                                                                                                            | `WindowEventHandlers.onmessageerror`             | node_modules/typescript/lib/lib.dom.d.ts:26595                                                                       |
| <a id="onmousedown" /> `onmousedown`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user clicks the object with either mouse button. **Param** The mouse event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)                                                                                                                                                                                   | `GlobalEventHandlers.onmousedown`                | node_modules/typescript/lib/lib.dom.d.ts:9670                                                                        |
| <a id="onmouseenter" /> `onmouseenter`                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)                                                                                                                                                                                                                                                                             | `GlobalEventHandlers.onmouseenter`               | node_modules/typescript/lib/lib.dom.d.ts:9672                                                                        |
| <a id="onmouseleave" /> `onmouseleave`                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)                                                                                                                                                                                                                                                                             | `GlobalEventHandlers.onmouseleave`               | node_modules/typescript/lib/lib.dom.d.ts:9674                                                                        |
| <a id="onmousemove" /> `onmousemove`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user moves the mouse over the object. **Param** The mouse event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)                                                                                                                                                                                              | `GlobalEventHandlers.onmousemove`                | node_modules/typescript/lib/lib.dom.d.ts:9681                                                                        |
| <a id="onmouseout" /> `onmouseout`                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user moves the mouse pointer outside the boundaries of the object. **Param** The mouse event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)                                                                                                                                                                  | `GlobalEventHandlers.onmouseout`                 | node_modules/typescript/lib/lib.dom.d.ts:9688                                                                        |
| <a id="onmouseover" /> `onmouseover`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user moves the mouse pointer into the object. **Param** The mouse event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)                                                                                                                                                                                      | `GlobalEventHandlers.onmouseover`                | node_modules/typescript/lib/lib.dom.d.ts:9695                                                                        |
| <a id="onmouseup" /> `onmouseup`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user releases a mouse button while the mouse is over the object. **Param** The mouse event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)                                                                                                                                                                     | `GlobalEventHandlers.onmouseup`                  | node_modules/typescript/lib/lib.dom.d.ts:9702                                                                        |
| <a id="onoffline" /> `onoffline`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/offline_event)                                                                                                                                                                                                                                                                                 | `WindowEventHandlers.onoffline`                  | node_modules/typescript/lib/lib.dom.d.ts:26597                                                                       |
| <a id="ononline" /> `ononline`                                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/online_event)                                                                                                                                                                                                                                                                                  | `WindowEventHandlers.ononline`                   | node_modules/typescript/lib/lib.dom.d.ts:26599                                                                       |
| <a id="onorientationchange" /> ~~`onorientationchange`~~               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientationchange_event)                                                                                                                                                                                                                                                        | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26369                                                                       |
| <a id="onpagehide" /> `onpagehide`                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagehide_event)                                                                                                                                                                                                                                                                                | `WindowEventHandlers.onpagehide`                 | node_modules/typescript/lib/lib.dom.d.ts:26601                                                                       |
| <a id="onpageshow" /> `onpageshow`                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageshow_event)                                                                                                                                                                                                                                                                                | `WindowEventHandlers.onpageshow`                 | node_modules/typescript/lib/lib.dom.d.ts:26603                                                                       |
| <a id="onpaste" /> `onpaste`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)                                                                                                                                                                                                                                                                                  | `GlobalEventHandlers.onpaste`                    | node_modules/typescript/lib/lib.dom.d.ts:9704                                                                        |
| <a id="onpause" /> `onpause`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when playback is paused. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)                                                                                                                                                                                                                    | `GlobalEventHandlers.onpause`                    | node_modules/typescript/lib/lib.dom.d.ts:9711                                                                        |
| <a id="onplay" /> `onplay`                                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the play method is requested. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)                                                                                                                                                                                                           | `GlobalEventHandlers.onplay`                     | node_modules/typescript/lib/lib.dom.d.ts:9718                                                                        |
| <a id="onplaying" /> `onplaying`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the audio or video has started playing. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)                                                                                                                                                                                              | `GlobalEventHandlers.onplaying`                  | node_modules/typescript/lib/lib.dom.d.ts:9725                                                                        |
| <a id="onpointercancel" /> `onpointercancel`                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)                                                                                                                                                                                                                                                                          | `GlobalEventHandlers.onpointercancel`            | node_modules/typescript/lib/lib.dom.d.ts:9727                                                                        |
| <a id="onpointerdown" /> `onpointerdown`                               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)                                                                                                                                                                                                                                                                            | `GlobalEventHandlers.onpointerdown`              | node_modules/typescript/lib/lib.dom.d.ts:9729                                                                        |
| <a id="onpointerenter" /> `onpointerenter`                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)                                                                                                                                                                                                                                                                           | `GlobalEventHandlers.onpointerenter`             | node_modules/typescript/lib/lib.dom.d.ts:9731                                                                        |
| <a id="onpointerleave" /> `onpointerleave`                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)                                                                                                                                                                                                                                                                           | `GlobalEventHandlers.onpointerleave`             | node_modules/typescript/lib/lib.dom.d.ts:9733                                                                        |
| <a id="onpointermove" /> `onpointermove`                               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)                                                                                                                                                                                                                                                                            | `GlobalEventHandlers.onpointermove`              | node_modules/typescript/lib/lib.dom.d.ts:9735                                                                        |
| <a id="onpointerout" /> `onpointerout`                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)                                                                                                                                                                                                                                                                             | `GlobalEventHandlers.onpointerout`               | node_modules/typescript/lib/lib.dom.d.ts:9737                                                                        |
| <a id="onpointerover" /> `onpointerover`                               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)                                                                                                                                                                                                                                                                            | `GlobalEventHandlers.onpointerover`              | node_modules/typescript/lib/lib.dom.d.ts:9739                                                                        |
| <a id="onpointerup" /> `onpointerup`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)                                                                                                                                                                                                                                                                              | `GlobalEventHandlers.onpointerup`                | node_modules/typescript/lib/lib.dom.d.ts:9741                                                                        |
| <a id="onpopstate" /> `onpopstate`                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)                                                                                                                                                                                                                                                                                | `WindowEventHandlers.onpopstate`                 | node_modules/typescript/lib/lib.dom.d.ts:26605                                                                       |
| <a id="onprogress" /> `onprogress`                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs to indicate progress while downloading media data. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)                                                                                                                                                                                       | `GlobalEventHandlers.onprogress`                 | node_modules/typescript/lib/lib.dom.d.ts:9748                                                                        |
| <a id="onratechange" /> `onratechange`                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the playback rate is increased or decreased. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)                                                                                                                                                                                      | `GlobalEventHandlers.onratechange`               | node_modules/typescript/lib/lib.dom.d.ts:9755                                                                        |
| <a id="onrejectionhandled" /> `onrejectionhandled`                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/rejectionhandled_event)                                                                                                                                                                                                                                                                        | `WindowEventHandlers.onrejectionhandled`         | node_modules/typescript/lib/lib.dom.d.ts:26607                                                                       |
| <a id="onreset" /> `onreset`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user resets a form. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)                                                                                                                                                                                                                  | `GlobalEventHandlers.onreset`                    | node_modules/typescript/lib/lib.dom.d.ts:9762                                                                        |
| <a id="onresize" /> `onresize`                                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)                                                                                                                                                                                                                                                                        | `GlobalEventHandlers.onresize`                   | node_modules/typescript/lib/lib.dom.d.ts:9764                                                                        |
| <a id="onscroll" /> `onscroll`                                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the user repositions the scroll box in the scroll bar on the object. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)                                                                                                                                                                           | `GlobalEventHandlers.onscroll`                   | node_modules/typescript/lib/lib.dom.d.ts:9771                                                                        |
| <a id="onscrollend" /> `onscrollend`                                   | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)                                                                                                                                                                                                                                                                             | `GlobalEventHandlers.onscrollend`                | node_modules/typescript/lib/lib.dom.d.ts:9773                                                                        |
| <a id="onsecuritypolicyviolation" /> `onsecuritypolicyviolation`       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)                                                                                                                                                                                                                                                               | `GlobalEventHandlers.onsecuritypolicyviolation`  | node_modules/typescript/lib/lib.dom.d.ts:9775                                                                        |
| <a id="onseeked" /> `onseeked`                                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the seek operation ends. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)                                                                                                                                                                                                              | `GlobalEventHandlers.onseeked`                   | node_modules/typescript/lib/lib.dom.d.ts:9782                                                                        |
| <a id="onseeking" /> `onseeking`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the current playback position is moved. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)                                                                                                                                                                                              | `GlobalEventHandlers.onseeking`                  | node_modules/typescript/lib/lib.dom.d.ts:9789                                                                        |
| <a id="onselect" /> `onselect`                                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Fires when the current selection changes. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)                                                                                                                                                                                                         | `GlobalEventHandlers.onselect`                   | node_modules/typescript/lib/lib.dom.d.ts:9796                                                                        |
| <a id="onselectionchange" /> `onselectionchange`                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)                                                                                                                                                                                                                                                                       | `GlobalEventHandlers.onselectionchange`          | node_modules/typescript/lib/lib.dom.d.ts:9798                                                                        |
| <a id="onselectstart" /> `onselectstart`                               | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)                                                                                                                                                                                                                                                                               | `GlobalEventHandlers.onselectstart`              | node_modules/typescript/lib/lib.dom.d.ts:9800                                                                        |
| <a id="onslotchange" /> `onslotchange`                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)                                                                                                                                                                                                                                                                     | `GlobalEventHandlers.onslotchange`               | node_modules/typescript/lib/lib.dom.d.ts:9802                                                                        |
| <a id="onstalled" /> `onstalled`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the download has stopped. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)                                                                                                                                                                                                            | `GlobalEventHandlers.onstalled`                  | node_modules/typescript/lib/lib.dom.d.ts:9809                                                                        |
| <a id="onstorage" /> `onstorage`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/storage_event)                                                                                                                                                                                                                                                                                 | `WindowEventHandlers.onstorage`                  | node_modules/typescript/lib/lib.dom.d.ts:26609                                                                       |
| <a id="onsubmit" /> `onsubmit`                                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)                                                                                                                                                                                                                                                                         | `GlobalEventHandlers.onsubmit`                   | node_modules/typescript/lib/lib.dom.d.ts:9811                                                                        |
| <a id="onsuspend" /> `onsuspend`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs if the load operation has been intentionally halted. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)                                                                                                                                                                                      | `GlobalEventHandlers.onsuspend`                  | node_modules/typescript/lib/lib.dom.d.ts:9818                                                                        |
| <a id="ontimeupdate" /> `ontimeupdate`                                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs to indicate the current playback position. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)                                                                                                                                                                                             | `GlobalEventHandlers.ontimeupdate`               | node_modules/typescript/lib/lib.dom.d.ts:9825                                                                        |
| <a id="ontoggle" /> `ontoggle`                                         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event)                                                                                                                                                                                                                                                                      | `GlobalEventHandlers.ontoggle`                   | node_modules/typescript/lib/lib.dom.d.ts:9827                                                                        |
| <a id="ontouchcancel" /> `ontouchcancel?`                              | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)                                                                                                                                                                                                                                                                            | `GlobalEventHandlers.ontouchcancel`              | node_modules/typescript/lib/lib.dom.d.ts:9829                                                                        |
| <a id="ontouchend" /> `ontouchend?`                                    | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)                                                                                                                                                                                                                                                                               | `GlobalEventHandlers.ontouchend`                 | node_modules/typescript/lib/lib.dom.d.ts:9831                                                                        |
| <a id="ontouchmove" /> `ontouchmove?`                                  | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)                                                                                                                                                                                                                                                                              | `GlobalEventHandlers.ontouchmove`                | node_modules/typescript/lib/lib.dom.d.ts:9833                                                                        |
| <a id="ontouchstart" /> `ontouchstart?`                                | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)                                                                                                                                                                                                                                                                             | `GlobalEventHandlers.ontouchstart`               | node_modules/typescript/lib/lib.dom.d.ts:9835                                                                        |
| <a id="ontransitioncancel" /> `ontransitioncancel`                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)                                                                                                                                                                                                                                                                       | `GlobalEventHandlers.ontransitioncancel`         | node_modules/typescript/lib/lib.dom.d.ts:9837                                                                        |
| <a id="ontransitionend" /> `ontransitionend`                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)                                                                                                                                                                                                                                                                          | `GlobalEventHandlers.ontransitionend`            | node_modules/typescript/lib/lib.dom.d.ts:9839                                                                        |
| <a id="ontransitionrun" /> `ontransitionrun`                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)                                                                                                                                                                                                                                                                          | `GlobalEventHandlers.ontransitionrun`            | node_modules/typescript/lib/lib.dom.d.ts:9841                                                                        |
| <a id="ontransitionstart" /> `ontransitionstart`                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)                                                                                                                                                                                                                                                                        | `GlobalEventHandlers.ontransitionstart`          | node_modules/typescript/lib/lib.dom.d.ts:9843                                                                        |
| <a id="onunhandledrejection" /> `onunhandledrejection`                 | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event)                                                                                                                                                                                                                                                                      | `WindowEventHandlers.onunhandledrejection`       | node_modules/typescript/lib/lib.dom.d.ts:26611                                                                       |
| <a id="onunload" /> ~~`onunload`~~                                     | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)                                                                                                                                                                                                                                                                   | `WindowEventHandlers.onunload`                   | node_modules/typescript/lib/lib.dom.d.ts:26617                                                                       |
| <a id="onvolumechange" /> `onvolumechange`                             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when the volume is changed, or playback is muted or unmuted. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)                                                                                                                                                                         | `GlobalEventHandlers.onvolumechange`             | node_modules/typescript/lib/lib.dom.d.ts:9850                                                                        |
| <a id="onwaiting" /> `onwaiting`                                       | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | Occurs when playback stops because the next frame of a video resource is not available. **Param** The event. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)                                                                                                                                                          | `GlobalEventHandlers.onwaiting`                  | node_modules/typescript/lib/lib.dom.d.ts:9857                                                                        |
| <a id="onwebkitanimationend" /> ~~`onwebkitanimationend`~~             | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | **Deprecated** This is a legacy alias of `onanimationend`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)                                                                                                                                                                                                                | `GlobalEventHandlers.onwebkitanimationend`       | node_modules/typescript/lib/lib.dom.d.ts:9863                                                                        |
| <a id="onwebkitanimationiteration" /> ~~`onwebkitanimationiteration`~~ | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | **Deprecated** This is a legacy alias of `onanimationiteration`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)                                                                                                                                                                                                    | `GlobalEventHandlers.onwebkitanimationiteration` | node_modules/typescript/lib/lib.dom.d.ts:9869                                                                        |
| <a id="onwebkitanimationstart" /> ~~`onwebkitanimationstart`~~         | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | **Deprecated** This is a legacy alias of `onanimationstart`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)                                                                                                                                                                                                            | `GlobalEventHandlers.onwebkitanimationstart`     | node_modules/typescript/lib/lib.dom.d.ts:9875                                                                        |
| <a id="onwebkittransitionend" /> ~~`onwebkittransitionend`~~           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | **Deprecated** This is a legacy alias of `ontransitionend`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)                                                                                                                                                                                                              | `GlobalEventHandlers.onwebkittransitionend`      | node_modules/typescript/lib/lib.dom.d.ts:9881                                                                        |
| <a id="onwheel" /> `onwheel`                                           | `public`   | `null` \| (`this`, `ev`) => `any`                                                           | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)                                                                                                                                                                                                                                                                                  | `GlobalEventHandlers.onwheel`                    | node_modules/typescript/lib/lib.dom.d.ts:9883                                                                        |
| <a id="opener" /> `opener`                                             | `public`   | `any`                                                                                       | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/opener)                                                                                                                                                                                                                                                                                        | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26371                                                                       |
| <a id="orientation" /> ~~`orientation`~~                               | `readonly` | `number`                                                                                    | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientation)                                                                                                                                                                                                                                                                    | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26377                                                                       |
| <a id="origin" /> `origin`                                             | `readonly` | `string`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin)                                                                                                                                                                                                                                                                                        | `WindowOrWorkerGlobalScope.origin`               | node_modules/typescript/lib/lib.dom.d.ts:26645                                                                       |
| <a id="outerheight" /> `outerHeight`                                   | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerHeight)                                                                                                                                                                                                                                                                                   | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26379                                                                       |
| <a id="outerwidth" /> `outerWidth`                                     | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerWidth)                                                                                                                                                                                                                                                                                    | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26381                                                                       |
| <a id="pagexoffset" /> ~~`pageXOffset`~~                               | `readonly` | `number`                                                                                    | **Deprecated** This is a legacy alias of `scrollX`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)                                                                                                                                                                                                                                   | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26387                                                                       |
| <a id="pageyoffset" /> ~~`pageYOffset`~~                               | `readonly` | `number`                                                                                    | **Deprecated** This is a legacy alias of `scrollY`. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)                                                                                                                                                                                                                                   | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26393                                                                       |
| <a id="parent" /> `parent`                                             | `readonly` | [`Window`](global.md#window)                                                                | Refers to either the parent WindowProxy, or itself. It can rarely be null e.g. for contentWindow of an iframe that is already removed from the parent. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/parent)                                                                                                                                 | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26401                                                                       |
| <a id="performance" /> `performance`                                   | `readonly` | [`Performance`](https://developer.mozilla.org/docs/Web/API/Performance)                     | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance)                                                                                                                                                                                                                                                                                   | `WindowOrWorkerGlobalScope.performance`          | node_modules/typescript/lib/lib.dom.d.ts:26647                                                                       |
| <a id="personalbar" /> `personalbar`                                   | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns true if the personal bar is visible; otherwise, returns false. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/personalbar)                                                                                                                                                                                                            | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26407                                                                       |
| <a id="screen" /> `screen`                                             | `readonly` | [`Screen`](https://developer.mozilla.org/docs/Web/API/Screen)                               | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screen)                                                                                                                                                                                                                                                                                        | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26409                                                                       |
| <a id="screenleft" /> `screenLeft`                                     | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenLeft)                                                                                                                                                                                                                                                                                    | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26411                                                                       |
| <a id="screentop" /> `screenTop`                                       | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenTop)                                                                                                                                                                                                                                                                                     | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26413                                                                       |
| <a id="screenx" /> `screenX`                                           | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenX)                                                                                                                                                                                                                                                                                       | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26415                                                                       |
| <a id="screeny" /> `screenY`                                           | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenY)                                                                                                                                                                                                                                                                                       | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26417                                                                       |
| <a id="scrollbars" /> `scrollbars`                                     | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns true if the scrollbars are visible; otherwise, returns false. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollbars)                                                                                                                                                                                                              | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26427                                                                       |
| <a id="scrollx" /> `scrollX`                                           | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)                                                                                                                                                                                                                                                                                       | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26419                                                                       |
| <a id="scrolly" /> `scrollY`                                           | `readonly` | `number`                                                                                    | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)                                                                                                                                                                                                                                                                                       | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26421                                                                       |
| <a id="self" /> `self`                                                 | `readonly` | [`Window`](global.md#window) & _typeof_ `globalThis`                                        | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/self)                                                                                                                                                                                                                                                                                          | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26429                                                                       |
| <a id="sessionstorage" /> `sessionStorage`                             | `readonly` | [`Storage`](https://developer.mozilla.org/docs/Web/API/Storage)                             | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)                                                                                                                                                                                                                                                                                | `WindowSessionStorage.sessionStorage`            | node_modules/typescript/lib/lib.dom.d.ts:26675                                                                       |
| <a id="speccer" /> `speccer`                                           | `public`   | `any`                                                                                       | Represents the speccer object for additional functionality.                                                                                                                                                                                                                                                                                                      | -                                                | [src/types/interfaces/global.ts:26](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L26) |
| <a id="speccer_literals" /> `SPECCER_LITERALS`                         | `public`   | `string`\[]                                                                                 | Represents the custom literals to be used. ![Screenshot of speccer with custom literals](https://github.com/phun-ky/speccer/blob/main/public/literals.png?raw=true) **Example** `window.SPECCER_LITERALS = [あ,い,う,え,お,か,き,く,け,こ,さ,し,す,せ,そ,た,ち,つ,て,と,な,に,ぬ,ね,の,は,ひ,ふ,へ,ほ,ま,み,む,め,も,や,ゆ,よ,ら,り,る,れ,ろ,わ,を]; speccer();` | -                                                | [src/types/interfaces/global.ts:37](https://github.com/phun-ky/speccer/blob/main/src/types/interfaces/global.ts#L37) |
| <a id="speechsynthesis" /> `speechSynthesis`                           | `readonly` | [`SpeechSynthesis`](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis)             | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/speechSynthesis)                                                                                                                                                                                                                                                                               | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26431                                                                       |
| <a id="status" /> ~~`status`~~                                         | `public`   | `string`                                                                                    | **Deprecated** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/status)                                                                                                                                                                                                                                                                         | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26437                                                                       |
| <a id="statusbar" /> `statusbar`                                       | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns true if the status bar is visible; otherwise, returns false. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/statusbar)                                                                                                                                                                                                                | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26443                                                                       |
| <a id="toolbar" /> `toolbar`                                           | `readonly` | [`BarProp`](https://developer.mozilla.org/docs/Web/API/BarProp)                             | Returns true if the toolbar is visible; otherwise, returns false. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/toolbar)                                                                                                                                                                                                                     | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26449                                                                       |
| <a id="top" /> `top`                                                   | `readonly` | `null` \| [`Window`](global.md#window)                                                      | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/top)                                                                                                                                                                                                                                                                                           | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26451                                                                       |
| <a id="visualviewport" /> `visualViewport`                             | `readonly` | \| `null` \| [`VisualViewport`](https://developer.mozilla.org/docs/Web/API/VisualViewport)  | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/visualViewport)                                                                                                                                                                                                                                                                                | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26453                                                                       |
| <a id="window-1" /> `window`                                           | `readonly` | [`Window`](global.md#window) & _typeof_ `globalThis`                                        | [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/window)                                                                                                                                                                                                                                                                                        | -                                                | node_modules/typescript/lib/lib.dom.d.ts:26455                                                                       |

#### Accessors

##### location

###### Get Signature

```ts
get location(): Location
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26328

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/location)

###### Returns

[`Location`](https://developer.mozilla.org/docs/Web/API/Location)

###### Set Signature

```ts
set location(href): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26329

###### Parameters

| Parameter | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `href`    | \| `string` \| [`Location`](https://developer.mozilla.org/docs/Web/API/Location) |

###### Returns

`void`

#### Methods

##### addEventListener()

###### Call Signature

```ts
addEventListener<K>(
   type,
   listener,
   options?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26544

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

###### Type Parameters

| Type Parameter                       |
| ------------------------------------ |
| `K` _extends_ keyof `WindowEventMap` |

###### Parameters

| Parameter  | Type                                   |
| ---------- | -------------------------------------- |
| `type`     | `K`                                    |
| `listener` | (`this`, `ev`) => `any`                |
| `options`? | `boolean` \| `AddEventListenerOptions` |

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
   options?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26545

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

###### Parameters

| Parameter  | Type                                   |
| ---------- | -------------------------------------- |
| `type`     | `string`                               |
| `listener` | `EventListenerOrEventListenerObject`   |
| `options`? | `boolean` \| `AddEventListenerOptions` |

###### Returns

`void`

###### Overrides

```ts
EventTarget.addEventListener;
```

##### alert()

```ts
alert(message?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26457

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/alert)

###### Parameters

| Parameter  | Type  |
| ---------- | ----- |
| `message`? | `any` |

###### Returns

`void`

##### atob()

```ts
atob(data): string
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26649

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
blur(): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26463

###### Returns

`void`

###### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/blur)

##### btoa()

```ts
btoa(data): string
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26651

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
cancelAnimationFrame(handle): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:2743

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
cancelIdleCallback(handle): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26465

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cancelIdleCallback)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `handle`  | `number` |

###### Returns

`void`

##### ~~captureEvents()~~

```ts
captureEvents(): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26471

###### Returns

`void`

###### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/captureEvents)

##### clearInterval()

```ts
clearInterval(id): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26653

[MDN Reference](https://developer.mozilla.org/docs/Web/API/clearInterval)

###### Parameters

| Parameter | Type                    |
| --------- | ----------------------- |
| `id`      | `undefined` \| `number` |

###### Returns

`void`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.clearInterval;
```

##### clearTimeout()

```ts
clearTimeout(id): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26655

[MDN Reference](https://developer.mozilla.org/docs/Web/API/clearTimeout)

###### Parameters

| Parameter | Type                    |
| --------- | ----------------------- |
| `id`      | `undefined` \| `number` |

###### Returns

`void`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.clearTimeout;
```

##### close()

```ts
close(): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26477

Closes the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/close)

###### Returns

`void`

##### confirm()

```ts
confirm(message?): boolean
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26479

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/confirm)

###### Parameters

| Parameter  | Type     |
| ---------- | -------- |
| `message`? | `string` |

###### Returns

`boolean`

##### createImageBitmap()

###### Call Signature

```ts
createImageBitmap(image, options?): Promise<ImageBitmap>
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26657

[MDN Reference](https://developer.mozilla.org/docs/Web/API/createImageBitmap)

###### Parameters

| Parameter  | Type                 |
| ---------- | -------------------- |
| `image`    | `ImageBitmapSource`  |
| `options`? | `ImageBitmapOptions` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ImageBitmap`](https://developer.mozilla.org/docs/Web/API/ImageBitmap)>

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
options?): Promise<ImageBitmap>
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26658

###### Parameters

| Parameter  | Type                 |
| ---------- | -------------------- |
| `image`    | `ImageBitmapSource`  |
| `sx`       | `number`             |
| `sy`       | `number`             |
| `sw`       | `number`             |
| `sh`       | `number`             |
| `options`? | `ImageBitmapOptions` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ImageBitmap`](https://developer.mozilla.org/docs/Web/API/ImageBitmap)>

###### Inherited from

```ts
WindowOrWorkerGlobalScope.createImageBitmap;
```

##### dispatchEvent()

```ts
dispatchEvent(event): boolean
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:8719

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

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
fetch(input, init?): Promise<Response>
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26660

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type                                                                     |
| --------- | ------------------------------------------------------------------------ |
| `input`   | [`URL`](https://developer.mozilla.org/docs/Web/API/URL) \| `RequestInfo` |
| `init`?   | `RequestInit`                                                            |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

###### Inherited from

```ts
WindowOrWorkerGlobalScope.fetch;
```

##### focus()

```ts
focus(): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26485

Moves the focus to the window's browsing context, if any.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/focus)

###### Returns

`void`

##### getComputedStyle()

```ts
getComputedStyle(elt, pseudoElt?): CSSStyleDeclaration
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26487

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle)

###### Parameters

| Parameter    | Type                                                            |
| ------------ | --------------------------------------------------------------- |
| `elt`        | [`Element`](https://developer.mozilla.org/docs/Web/API/Element) |
| `pseudoElt`? | `null` \| `string`                                              |

###### Returns

[`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)

##### getSelection()

```ts
getSelection():
  | null
  | Selection
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26489

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getSelection)

###### Returns

\| `null`
\| [`Selection`](https://developer.mozilla.org/docs/Web/API/Selection)

##### matchMedia()

```ts
matchMedia(query): MediaQueryList
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26491

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `query`   | `string` |

###### Returns

[`MediaQueryList`](https://developer.mozilla.org/docs/Web/API/MediaQueryList)

##### moveBy()

```ts
moveBy(x, y): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26493

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
moveTo(x, y): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26495

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
   features?): null | Window
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26497

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/open)

###### Parameters

| Parameter   | Type                                                                |
| ----------- | ------------------------------------------------------------------- |
| `url`?      | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `target`?   | `string`                                                            |
| `features`? | `string`                                                            |

###### Returns

`null` | [`Window`](global.md#window)

##### postMessage()

###### Call Signature

```ts
postMessage(
   message,
   targetOrigin,
   transfer?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26511

Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.

Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.

A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.

If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "\*".

Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/postMessage)

###### Parameters

| Parameter      | Type              |
| -------------- | ----------------- |
| `message`      | `any`             |
| `targetOrigin` | `string`          |
| `transfer`?    | `Transferable`\[] |

###### Returns

`void`

###### Call Signature

```ts
postMessage(message, options?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26512

###### Parameters

| Parameter  | Type                       |
| ---------- | -------------------------- |
| `message`  | `any`                      |
| `options`? | `WindowPostMessageOptions` |

###### Returns

`void`

##### print()

```ts
print(): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26514

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/print)

###### Returns

`void`

##### prompt()

```ts
prompt(message?, _default?): null | string
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26516

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/prompt)

###### Parameters

| Parameter   | Type     |
| ----------- | -------- |
| `message`?  | `string` |
| `_default`? | `string` |

###### Returns

`null` | `string`

##### queueMicrotask()

```ts
queueMicrotask(callback): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26662

[MDN Reference](https://developer.mozilla.org/docs/Web/API/queueMicrotask)

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
releaseEvents(): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26522

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
   options?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26546

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

###### Type Parameters

| Type Parameter                       |
| ------------------------------------ |
| `K` _extends_ keyof `WindowEventMap` |

###### Parameters

| Parameter  | Type                                |
| ---------- | ----------------------------------- |
| `type`     | `K`                                 |
| `listener` | (`this`, `ev`) => `any`             |
| `options`? | `boolean` \| `EventListenerOptions` |

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
   options?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26547

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

###### Parameters

| Parameter  | Type                                 |
| ---------- | ------------------------------------ |
| `type`     | `string`                             |
| `listener` | `EventListenerOrEventListenerObject` |
| `options`? | `boolean` \| `EventListenerOptions`  |

###### Returns

`void`

###### Overrides

```ts
EventTarget.removeEventListener;
```

##### reportError()

```ts
reportError(e): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26664

[MDN Reference](https://developer.mozilla.org/docs/Web/API/reportError)

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
requestAnimationFrame(callback): number
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:2745

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
requestIdleCallback(callback, options?): number
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26524

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback)

###### Parameters

| Parameter  | Type                  |
| ---------- | --------------------- |
| `callback` | `IdleRequestCallback` |
| `options`? | `IdleRequestOptions`  |

###### Returns

`number`

##### resizeBy()

```ts
resizeBy(x, y): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26526

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
resizeTo(width, height): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26528

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
scroll(options?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26530

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scroll)

###### Parameters

| Parameter  | Type              |
| ---------- | ----------------- |
| `options`? | `ScrollToOptions` |

###### Returns

`void`

###### Call Signature

```ts
scroll(x, y): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26531

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
scrollBy(options?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26533

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollBy)

###### Parameters

| Parameter  | Type              |
| ---------- | ----------------- |
| `options`? | `ScrollToOptions` |

###### Returns

`void`

###### Call Signature

```ts
scrollBy(x, y): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26534

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
scrollTo(options?): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26536

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollTo)

###### Parameters

| Parameter  | Type              |
| ---------- | ----------------- |
| `options`? | `ScrollToOptions` |

###### Returns

`void`

###### Call Signature

```ts
scrollTo(x, y): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26537

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
   arguments?): number
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26666

[MDN Reference](https://developer.mozilla.org/docs/Web/API/setInterval)

###### Parameters

| Parameter       | Type           |
| --------------- | -------------- |
| `handler`       | `TimerHandler` |
| `timeout`?      | `number`       |
| ...`arguments`? | `any`\[]       |

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
   arguments?): number
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26668

[MDN Reference](https://developer.mozilla.org/docs/Web/API/setTimeout)

###### Parameters

| Parameter       | Type           |
| --------------- | -------------- |
| `handler`       | `TimerHandler` |
| `timeout`?      | `number`       |
| ...`arguments`? | `any`\[]       |

###### Returns

`number`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.setTimeout;
```

##### stop()

```ts
stop(): void
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26543

Cancels the document load.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/stop)

###### Returns

`void`

##### structuredClone()

```ts
structuredClone<T>(value, options?): T
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26670

[MDN Reference](https://developer.mozilla.org/docs/Web/API/structuredClone)

###### Type Parameters

| Type Parameter | Default type |
| -------------- | ------------ |
| `T`            | `any`        |

###### Parameters

| Parameter  | Type                         |
| ---------- | ---------------------------- |
| `value`    | `T`                          |
| `options`? | `StructuredSerializeOptions` |

###### Returns

`T`

###### Inherited from

```ts
WindowOrWorkerGlobalScope.structuredClone;
```

## Variables

### Window()

```ts
Window: () => Window;
```

Defined in: node_modules/typescript/lib/lib.dom.d.ts:26280

#### Type declaration

#### Returns

[`Window`](global.md#window)

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
        <a id="prototype" /> `prototype`
      </td>

      <td>
        [`Window`](global.md#window)
      </td>

      <td>
        node\_modules/typescript/lib/lib.dom.d.ts:26552
      </td>
    </tr>

  </tbody>
</table>

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
