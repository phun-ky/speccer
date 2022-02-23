export const after = (el: HTMLElement | null, newSibling: HTMLElement) =>
  el && el.insertAdjacentElement('afterend', newSibling);

export const removeAll = (selector: string, el: Document = document) => {
  [].forEach.call(el.querySelectorAll(selector), function (e: HTMLElement) {
    e.remove();
  });
};
