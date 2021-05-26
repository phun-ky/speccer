export const after = (el, newSibling) => {
  return el.insertAdjacentElement('afterend', newSibling);
};

export const removeAll = (selector, el = document) => {
  [].forEach.call(el.querySelectorAll(selector), function (e) {
    e.remove();
  });
};
