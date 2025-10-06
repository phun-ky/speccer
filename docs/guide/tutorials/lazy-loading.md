# Lazy loading

::: info

See a [demo of this here](https://codepen.io/phun-ky/full/VwRRLyY).

:::

If you're importing **SPECCER** instead of with a script tag, you can use the
following approach to apply lazy loading:

```javascript
import { pin } from 'https://esm.sh/@phun-ky/speccer';

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
