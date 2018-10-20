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

const dissectElement = (e, dissectIndex) => {
  if (!e.getAttribute('data-anatomy')) {
    regions.forEach((t, n) => {
      var r = e.getBoundingClientRect();
      var i = e.parentElement.getBoundingClientRect();

      if ('button-center' == t.type) {
        var c = createDissectionNode(o[n], t.type);
        e.insertAdjacentElement('afterend', c);
        var _ = r.top - i.top,
          l = r.left - i.left,
          d = c.getBoundingClientRect();
        addStyleToElement(c, {
          left: l + r.width / 2 - d.width / 2 + 'px',
          top: _ - 48 + 'px'
        });
      }
      if ('button-outline' == t.type) {
        var p = createDissectionNode(o[n], t.type);
        e.insertAdjacentElement('afterend', p);
        var f = r.top - i.top,
          s = r.left - i.left,
          b = p.getBoundingClientRect();
        addStyleToElement(p, {
          left: s + r.width + 48 + 'px',
          top: f + r.height / 2 - b.height / 2 + 'px'
        });
      }
      if ('button-icon' == t.type) {
        var y = createDissectionNode(o[n], t.type);
        e.insertAdjacentElement('afterend', y);
        var m = r.top - i.top,
          v = r.left - i.left,
          w = y.getBoundingClientRect();
        addStyleToElement(y, {
          left: v - 48 + 'px',
          top: m + r.height / 2 - w.height / 2 + 'px'
        });
      }
    });
  } else {
    var r = e.getBoundingClientRect();
    var i = e.parentElement.getBoundingClientRect();
    var dissectionArea = e.getAttribute('data-anatomy');
    var c = createDissectionNode(o[dissectIndex], dissectionArea);
    e.insertAdjacentElement('afterend', c);
    var d = c.getBoundingClientRect();
    // if (dissectionArea.indexOf(' ') !== -1) {
    //   var dissectionAreas = dissectionArea.split(' ');
    //   dissectionAreas.forEach(area => {
    //     if (area === 'left') {
    //       addStyleToElement(c, {
    //         left: r.left - i.left - 48 + 'px',
    //         top: r.top - i.top + r.height / 2 - d.height / 2 + 'px'
    //       });
    //     } else {
    //       addStyleToElement(c, {
    //         left: r.left - i.left + r.width / 2 - d.width / 2 + 'px',
    //         top: r.top - i.top - 48 + 'px'
    //       });
    //     }
    //   });
    // }
    if (dissectionArea.indexOf('outline') !== -1) {
      if (dissectionArea.indexOf('left') !== -1) {
        addStyleToElement(c, {
          left: r.left - i.left - 48 + 'px',
          top: r.top - i.top + r.height / 2 - d.height / 2 + 'px'
        });
      } else if (dissectionArea.indexOf('right') !== -1) {
        addStyleToElement(c, {
          right: r.left - i.left - 48 + 'px',
          top: r.top - i.top + r.height / 2 - d.height / 2 + 'px'
        });
      } else if (dissectionArea.indexOf('top') !== -1) {
        addStyleToElement(c, {
          left: r.left - i.left + r.width / 2 - d.width / 2 + 'px',
          top: r.top - i.top - 48 + 'px'
        });
      } else if (dissectionArea.indexOf('bottom') !== -1) {
        addStyleToElement(c, {
          left: r.left - i.left + r.width / 2 - d.width / 2 + 'px',
          bottom: r.top - i.top - 48 + 'px'
        });
      }
    } else if (dissectionArea.indexOf('group') !== -1) {
      if (dissectionArea.indexOf('left') !== -1) {
        addStyleToElement(c, {
          left: r.left - i.left - 48 + 'px',
          top: r.top - i.top + r.height / 2 - d.height / 2 + 'px'
        });
      } else if (dissectionArea.indexOf('right') !== -1) {
        addStyleToElement(c, {
          right: r.left - i.left - 48 + 'px',
          top: r.top - i.top + r.height / 2 - d.height / 2 + 'px'
        });
      } else if (dissectionArea.indexOf('top') !== -1) {
        addStyleToElement(c, {
          left: r.left - i.left + r.width / 2 - d.width / 2 + 'px',
          top: r.top - i.top - 48 + 'px'
        });
      } else if (dissectionArea.indexOf('bottom') !== -1) {
        addStyleToElement(c, {
          left: r.left - i.left + r.width / 2 - d.width / 2 + 'px',
          bottom: r.top - i.top - 48 + 'px'
        });
      }
    } else {
      addStyleToElement(c, {
        left: r.left - i.left + r.width / 2 - d.width / 2 + 'px',
        top: r.top - i.top - 48 + 'px'
      });
    }
  }
};

const anatomy = () => {
  [].forEach.call(document.querySelectorAll('.anatomy'), function(e) {
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
