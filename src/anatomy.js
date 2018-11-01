import './anatomy.styl';
export default anatomy;

// CustomEvent poly from MDN: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
(function() {
  if (typeof window.CustomEvent === 'function') return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

// throttle with RAF
const throttle = (type, name, obj) => {
  obj = obj || window;
  var running = false;
  var func = function() {
    if (running) {
      return;
    }
    running = true;
    requestAnimationFrame(function() {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  obj.addEventListener(type, func);
};

const o = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const regions = [
  {
    type: 'button-center'
  },
  {
    type: 'button-outline'
  },
  {
    type: 'button-icon'
  }
];

const createDissectionNode = (e = '', t, n = 'span') => {
  const r = document.createElement(n);
  const o = document.createTextNode(e);
  r.classList.add('dissection');
  r.appendChild(o);
  if (t) {
    if (t.indexOf(' ') !== -1) {
      var ts = t.split(' ');
      ts.forEach(v => {
        r.classList.add(v);
      });
    } else {
      r.classList.add(t);
    }
  }
  return r;
};

const addStyleToElement = (e, t) => {
  Object.assign(e.style, t);
};

const dissectElement = (elementToDissect, dissectIndex) => {
  var rectOfDissectedElement = elementToDissect.getBoundingClientRect();
  var rectOfDissectedElementParent = elementToDissect.parentElement.getBoundingClientRect();

  var adjustedElementTop = rectOfDissectedElement.top - rectOfDissectedElementParent.top;
  var adjustedElementLeft = rectOfDissectedElement.left - rectOfDissectedElementParent.left;

  if (!elementToDissect.getAttribute('data-anatomy')) {
    regions.forEach((t, n) => {
      var dissectionNode = createDissectionNode(o[n], t.type);
      elementToDissect.insertAdjacentElement('afterend', dissectionNode);

      var rectOfDissectionNode = dissectionNode.getBoundingClientRect();

      if ('button-center' == t.type) {
        addStyleToElement(dissectionNode, {
          left: adjustedElementLeft + rectOfDissectedElement.width / 2 - rectOfDissectionNode.width / 2 + 'px',
          top: adjustedElementTop - 48 + 'px'
        });
      }
      if ('button-outline' == t.type) {
        addStyleToElement(dissectionNode, {
          left: adjustedElementLeft + rectOfDissectedElement.width + 48 + 'px',
          top: adjustedElementTop + rectOfDissectedElement.height / 2 - rectOfDissectionNode.height / 2 + 'px'
        });
      }
      if ('button-icon' == t.type) {
        addStyleToElement(dissectionNode, {
          left: adjustedElementLeft - 48 + 'px',
          top: adjustedElementTop + rectOfDissectedElement.height / 2 - rectOfDissectionNode.height / 2 + 'px'
        });
      }
    });
  } else {
    var dissectionArea = elementToDissect.getAttribute('data-anatomy');
    var dissectionNode = createDissectionNode(o[dissectIndex], dissectionArea);
    elementToDissect.insertAdjacentElement('afterend', dissectionNode);
    var rectOfDissectionNode = dissectionNode.getBoundingClientRect();

    if (dissectionArea.indexOf('outline') !== -1) {
      if (dissectionArea.indexOf('left') !== -1) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft - rectOfDissectionNode.width - 48 + 'px',
          top: elementToDissect.offsetTop + rectOfDissectedElement.height / 2 - rectOfDissectionNode.height / 2 + 'px'
        });
      } else if (dissectionArea.indexOf('right') !== -1) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectionNode.width + 48 + 'px',
          top: elementToDissect.offsetTop + rectOfDissectedElement.height / 2 - rectOfDissectionNode.height / 2 + 'px'
        });
      } else if (dissectionArea.indexOf('top') !== -1) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width / 2 - rectOfDissectionNode.width / 2 + 'px',
          top: elementToDissect.offsetTop - rectOfDissectionNode.height - 48 + 'px'
        });
      } else if (dissectionArea.indexOf('bottom') !== -1) {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width / 2 - rectOfDissectionNode.width / 2 + 'px',
          top: elementToDissect.offsetTop + 48 + 'px'
        });
      } else {
        addStyleToElement(dissectionNode, {
          left: elementToDissect.offsetLeft + rectOfDissectedElement.width / 2 - rectOfDissectionNode.width / 2 + 'px',
          top: adjustedElementTop - 48 + 'px'
        });
      }
    } else {
      addStyleToElement(dissectionNode, {
        left:
          rectOfDissectedElement.left -
          rectOfDissectedElementParent.left +
          rectOfDissectedElement.width / 2 -
          rectOfDissectionNode.width / 2 +
          'px',
        top: adjustedElementTop - 48 + 'px'
      });
    }
  }
};

const anatomy = () => {
  [].forEach.call(document.querySelectorAll('.dissection'), function(e) {
    e.parentNode.removeChild(e);
  });
  document.querySelectorAll('[data-anatomy-section]').forEach(section => {
    const elementsToBeDissected = section.querySelectorAll('[data-anatomy]');
    elementsToBeDissected.forEach(dissectElement);
  });
};

throttle('resize', 'anatomy-onResize');

window.addEventListener('anatomy-onResize', () => {
  anatomy();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', anatomy);
} else {
  // `DOMContentLoaded` already fired
  anatomy();
}
