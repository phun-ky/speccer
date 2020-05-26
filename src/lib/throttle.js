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
  obj.removeEventListener(type, func);
  obj.addEventListener(type, func);
};

export default throttle;
