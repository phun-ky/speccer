# Lazy loading

::: info

See a [demo of this here](https://codepen.io/phun-ky/full/VwRRLyY).

:::

If you're importing **SPECCER** instead of with a script tag, use
`modes.lazy()`. It renders each element when it is scrolled into view. To
re-render on resize, call `modes.rerenderLazy()`: it redraws the annotations in
view right away, and the rest when they are scrolled into view.

```javascript
import { modes } from '@phun-ky/speccer';

modes.lazy();

let resizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(modes.rerenderLazy, 300);
});
```

To lazy load only some features, you can use your own `IntersectionObserver`
instead, like this for pins:

```javascript
import { pin } from '@phun-ky/speccer';

const { pinElements } = pin;
/**
 * Callback function for IntersectionObserver
 * @param {IntersectionObserverEntry[]} entries - Array of entries being observed
 * @param {IntersectionObserver} observer - The IntersectionObserver instance
 * @returns {Promise<void>} Promise that resolves when element dissection is complete
 */
const intersectionCallback: IntersectionObserverCallback = async (entries, observer) => {
  entries.forEach(async (entry) => {
    if (entry.intersectionRatio > 0) {
      await pinElements(entry.target);
      observer.unobserve(entry.target);
    }
  });
};
// Creating IntersectionObserver instance with the callback
const pinElementObserver = new IntersectionObserver(intersectionCallback);
/**
 * Function to observe elements using IntersectionObserver
 * @param {Element} el - The element to be observed
 */
const observeElement = (el: Element): void => {
  pinElementObserver.observe(el);
};

// Observing elements with the specified data attribute
document.querySelectorAll('[data-speccer="pin-area"]').forEach((el) => {
  observeElement(el);
});
```
