export const after = (el, newSibling) => el.insertAdjacentElement('afterend', newSibling);

export const removeAll = (selector, el = document) => {
  [].forEach.call(el.querySelectorAll(selector), function (e) {
    e.remove();
  });
};
