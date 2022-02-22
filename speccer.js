(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.speccer = factory());
}(this, (function () { 'use strict';

  const after = (el, newSibling) => el.insertAdjacentElement('afterend', newSibling);
  const removeAll = (selector, el = document) => {
    [].forEach.call(el.querySelectorAll(selector), function (e) {
      e.remove();
    });
  };

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime_1 = createCommonjsModule(function (module) {
  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

  /* eslint no-console:0 */

  const set = (el, cls, avoid = 'noop') => {
    if (!el) return;
    if (!cls || cls && cls.length === 0) return;
    cls.trim().split(' ').filter(cl => cl !== avoid).forEach(cl => el.classList.add(cl));
  };

  /* eslint no-console:0 */

  const getNumberValue = value => parseInt(value, 10);
  const normalizeNumberValue = value => {
    const _value = parseFloat(value);

    return _value >= 0 && _value < 1 || _value <= 0 && _value > -1 ? 0 : _value;
  };
  const getSpacing = style => {
    const {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight
    } = style;
    return {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight
    };
  };
  const getTypography = style => {
    const {
      lineHeight,
      letterSpacing,
      fontFamily,
      fontSize,
      fontStyle,
      fontVariationSettings,
      fontWeight
    } = style;
    return {
      lineHeight,
      letterSpacing,
      fontFamily,
      fontSize,
      fontStyle,
      fontVariationSettings,
      fontWeight
    };
  };

  /* eslint no-console:0 */

  const waitForFrame = () => new Promise(requestAnimationFrame);

  const debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  /* eslint no-console:0 */
  const add = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(el, styles) {
      return regenerator.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (el) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            if (!(!styles || styles && styles.length === 0 && styles.constructor === String || styles && styles.length === 0 && styles.constructor === Array || styles && Object.keys(styles).length === 0 && styles.constructor === Object)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return waitForFrame();

          case 6:
            if (typeof styles === 'string' || Array.isArray(styles)) {
              styles.forEach(style => el.style[style.key] = style.value);
            } else {
              Object.keys(styles).forEach(key => el.style[key] = styles[key]);
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));

    return function add(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  const get = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(el) {
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return waitForFrame();

          case 2:
            return _context2.abrupt("return", window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle);

          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));

    return function get(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /* eslint no-console:0 */

  const SPECCER_LITERALS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const SPECCER_TAGS_TO_AVOID = ['TR', 'TH', 'TD', 'TBODY', 'THEAD', 'TFOOT'];

  /* eslint no-console:0 */
  const create$3 = (text = '', tag = 'span') => {
    const _el = document.createElement(tag);

    const textContent = document.createTextNode(text);

    _el.appendChild(textContent);

    _el.setAttribute('title', text + 'px');

    set(_el, 'ph speccer spacing');
    return _el;
  };
  const element$3 = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(el) {
      var _speccer_el, _el_style, _parent_el_style, _speccer_margin_top_el, _speccer_margin_right_el, _speccer_margin_bottom_el, _speccer_margin_left_el, _speccer_padding_top_el, _speccer_padding_bottom_el, _speccer_padding_right_el, _speccer_padding_left_el;

      return regenerator.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _speccer_el = {};
            _context.next = 3;
            return get(el);

          case 3:
            _el_style = _context.sent;

            if (!(_el_style.display === 'none' || _el_style.visibility === 'hidden')) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            el.classList.add('is-specced');
            _parent_el_style = get(el.parentElement);

            if (_parent_el_style.position === 'static') {
              window.requestAnimationFrame(() => {
                el.parentElement.style.position = 'relative';
              });
            }

            _speccer_el.styles = getSpacing(_el_style);
            _speccer_el.rect = el.getBoundingClientRect();

            if (_speccer_el.styles['marginTop'] !== '0px') {
              _speccer_margin_top_el = create$3(getNumberValue(_speccer_el.styles.marginTop));
              set(_speccer_margin_top_el, 'margin top');
              add(_speccer_margin_top_el, {
                height: _speccer_el.styles.marginTop,
                width: _speccer_el.rect.width + 'px',
                left: normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
                top: normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y - parseInt(_speccer_el.styles.marginTop, 10)) + 'px'
              });

              if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
                after(el.closest('table'), _speccer_margin_top_el);
              } else {
                after(el, _speccer_margin_top_el);
              }
            }

            if (_speccer_el.styles['marginRight'] !== '0px') {
              _speccer_margin_right_el = create$3(getNumberValue(_speccer_el.styles.marginRight));
              set(_speccer_margin_right_el, 'margin right');
              add(_speccer_margin_right_el, {
                height: _speccer_el.rect.height + 'px',
                width: _speccer_el.styles.marginRight,
                left: normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x + parseInt(_speccer_el.rect.width, 10)) + 'px',
                top: normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
              });

              if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
                after(el.closest('table'), _speccer_margin_right_el);
              } else {
                after(el, _speccer_margin_right_el);
              }
            }

            if (_speccer_el.styles['marginBottom'] !== '0px') {
              _speccer_margin_bottom_el = create$3(getNumberValue(_speccer_el.styles.marginBottom));
              set(_speccer_margin_bottom_el, 'margin bottom');
              add(_speccer_margin_bottom_el, {
                height: _speccer_el.styles.marginBottom,
                width: _speccer_el.rect.width + 'px',
                left: normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
                top: normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y + parseInt(_speccer_el.rect.height, 10)) + 'px'
              });

              if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
                after(el.closest('table'), _speccer_margin_bottom_el);
              } else {
                after(el, _speccer_margin_bottom_el);
              }
            }

            if (_speccer_el.styles['marginLeft'] !== '0px') {
              _speccer_margin_left_el = create$3(getNumberValue(_speccer_el.styles.marginLeft));
              set(_speccer_margin_left_el, 'margin left');
              add(_speccer_margin_left_el, {
                height: _speccer_el.rect.height + 'px',
                width: _speccer_el.styles.marginLeft,
                left: normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x - parseInt(_speccer_el.styles.marginLeft, 10)) + 'px',
                top: normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
              });

              if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
                after(el.closest('table'), _speccer_margin_left_el);
              } else {
                after(el, _speccer_margin_left_el);
              }
            }

            if (_speccer_el.styles['paddingTop'] !== '0px') {
              _speccer_padding_top_el = create$3(getNumberValue(_speccer_el.styles.paddingTop));
              set(_speccer_padding_top_el, 'padding top');
              add(_speccer_padding_top_el, {
                height: _speccer_el.styles.paddingTop,
                width: _speccer_el.rect.width + 'px',
                left: normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
                top: normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
              });

              if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
                after(el.closest('table'), _speccer_padding_top_el);
              } else {
                after(el, _speccer_padding_top_el);
              }
            }

            if (_speccer_el.styles['paddingBottom'] !== '0px') {
              _speccer_padding_bottom_el = create$3(getNumberValue(_speccer_el.styles.paddingBottom));
              set(_speccer_padding_bottom_el, 'padding bottom');
              add(_speccer_padding_bottom_el, {
                height: _speccer_el.styles.paddingBottom,
                width: _speccer_el.rect.width + 'px',
                left: normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
                top: normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y + (parseInt(_speccer_el.rect.height, 10) - parseInt(_speccer_el.styles.paddingBottom, 10))) + 'px'
              });

              if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
                after(el.closest('table'), _speccer_padding_bottom_el);
              } else {
                after(el, _speccer_padding_bottom_el);
              }
            }

            if (_speccer_el.styles['paddingRight'] !== '0px') {
              _speccer_padding_right_el = create$3(getNumberValue(_speccer_el.styles.paddingRight));
              set(_speccer_padding_right_el, 'padding right');
              add(_speccer_padding_right_el, {
                height: _speccer_el.rect.height + 'px',
                width: _speccer_el.styles.paddingRight,
                left: normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x + (parseInt(_speccer_el.rect.width, 10) - parseInt(_speccer_el.styles.paddingRight, 10))) + 'px',
                top: normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
              });

              if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
                after(el.closest('table'), _speccer_padding_right_el);
              } else {
                after(el, _speccer_padding_right_el);
              }
            }

            if (_speccer_el.styles['paddingLeft'] !== '0px') {
              _speccer_padding_left_el = create$3(getNumberValue(_speccer_el.styles.paddingLeft));
              set(_speccer_padding_left_el, 'padding left');
              add(_speccer_padding_left_el, {
                height: _speccer_el.rect.height + 'px',
                width: _speccer_el.styles.paddingLeft,
                left: normalizeNumberValue(_speccer_el.rect.x - el.parentElement.getBoundingClientRect().x) + 'px',
                top: normalizeNumberValue(_speccer_el.rect.y - el.parentElement.getBoundingClientRect().y) + 'px'
              });

              if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
                after(el.closest('table'), _speccer_padding_left_el);
              } else {
                after(el, _speccer_padding_left_el);
              }
            }

          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));

    return function element(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /* eslint no-console:0 */
  const create$2 = (e = '', t, n = 'span') => {
    const _el = document.createElement(n);

    const o = document.createTextNode(e);

    if (t.indexOf('full') === -1 && t.indexOf('enclose') === -1) {
      _el.appendChild(o);
    } else if (t.indexOf('full') !== -1 || t.indexOf('enclose') !== -1) {
      _el.setAttribute('data-dissection-counter', e);
    }

    set(_el, `ph speccer dissection ${t}`);
    return _el;
  };
  const element$2 = (el, dissectIndex) => {
    const _el_rect = el.getBoundingClientRect();

    const _area = el.getAttribute('data-anatomy');

    const _dissection_node = create$2(SPECCER_LITERALS[dissectIndex], _area);

    const _is_table_correction_needed = SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0;

    let _table_top = 0;
    let _table_left = 0;

    if (_is_table_correction_needed) {
      const table = el.closest('table');
      const tableStyle = get(table.parentElement);
      after(table, _dissection_node);

      const _table_rect = table.getBoundingClientRect();

      _table_top = _table_rect.top - parseInt(tableStyle.getPropertyValue('padding-top'), 10);
      _table_left = _table_rect.left - parseInt(tableStyle.getPropertyValue('padding-left'), 10);
    } else {
      after(el, _dissection_node);
    }

    const _el_offset_left = el.offsetLeft;
    const _el_offset_top = el.offsetTop;

    const _dissection_node_rect = _dissection_node.getBoundingClientRect();

    let _outline_left_position_left = (_is_table_correction_needed ? _el_rect.left - _table_left : _el_offset_left) - _dissection_node_rect.width - 48 + 'px';

    let _outline_left_position_top = (_is_table_correction_needed ? _el_rect.top - _table_top : _el_offset_top) + _el_rect.height / 2 - _dissection_node_rect.height / 2 + 'px';

    let _outline_right_position_left = (_is_table_correction_needed ? _el_rect.left - _table_left : _el_offset_left) + _el_rect.width + 48 + 'px';

    let _outline_right_position_top = (_is_table_correction_needed ? _el_rect.top - _table_top : _el_offset_top) + _el_rect.height / 2 - _dissection_node_rect.height / 2 + 'px';

    let _outline_top_position_left = (_is_table_correction_needed ? _el_rect.left - _table_left : _el_offset_left) + _el_rect.width / 2 - _dissection_node_rect.width / 2 + 'px';

    let _outline_top_position_top = (_is_table_correction_needed ? _el_rect.top - _table_top : _el_offset_top) - _dissection_node_rect.height - 48 + 'px';

    let _outline_bottom_position_left = (_is_table_correction_needed ? _el_rect.left - _table_left : _el_offset_left) + _el_rect.width / 2 - _dissection_node_rect.width / 2 + 'px';

    let _outline_bottom_position_top = (_is_table_correction_needed ? _el_rect.top - _table_top : _el_offset_top) + _el_rect.height + 48 + 'px';

    let _dissection_node_styles = {};

    if (_area.indexOf('outline') !== -1) {
      if (_area.indexOf('left') !== -1) {
        if (_area.indexOf('full') !== -1) {
          _dissection_node_styles = {
            left: _el_offset_left - 8 + 'px',
            top: _el_offset_top + -1 + 'px',
            height: _el_rect.height + 'px'
          };
        } else if (_area.indexOf('enclose') !== -1) {
          _dissection_node_styles = {
            left: _el_offset_left - 1 + 'px',
            top: _el_offset_top + -1 + 'px',
            height: _el_rect.height + 'px',
            width: _el_rect.width + 'px'
          };
        } else {
          _dissection_node_styles = {
            left: _outline_left_position_left,
            top: _outline_left_position_top
          };
        }
      } else if (_area.indexOf('right') !== -1) {
        if (_area.indexOf('full') !== -1) {
          _dissection_node_styles = {
            left: _el_offset_left + _el_rect.width + 'px',
            top: _el_offset_top + -1 + 'px',
            height: _el_rect.height + 'px'
          };
        } else if (_area.indexOf('enclose') !== -1) {
          _dissection_node_styles = {
            left: _el_offset_left + -1 + 'px',
            top: _el_offset_top + -1 + 'px',
            height: _el_rect.height + 'px',
            width: _el_rect.width + 'px'
          };
        } else {
          _dissection_node_styles = {
            left: _outline_right_position_left,
            top: _outline_right_position_top
          };
        }
      } else if (_area.indexOf('top') !== -1) {
        if (_area.indexOf('full') !== -1) {
          _dissection_node_styles = {
            top: _el_offset_top + -8 + 'px',
            left: _el_offset_left + -1 + 'px',
            width: _el_rect.width + 'px'
          };
        } else if (_area.indexOf('enclose') !== -1) {
          _dissection_node_styles = {
            top: _el_offset_top + -1 + 'px',
            left: _el_offset_left + -1 + 'px',
            height: _el_rect.height + 'px',
            width: _el_rect.width + 'px'
          };
        } else {
          _dissection_node_styles = {
            left: _outline_top_position_left,
            top: _outline_top_position_top
          };
        }
      } else if (_area.indexOf('bottom') !== -1) {
        if (_area.indexOf('full') !== -1) {
          _dissection_node_styles = {
            top: _el_offset_top + _el_rect.height + 'px',
            left: _el_offset_left + -1 + 'px',
            width: _el_rect.width + 'px'
          };
        } else if (_area.indexOf('enclose') !== -1) {
          _dissection_node_styles = {
            top: _el_offset_top + -1 + 'px',
            left: _el_offset_left + -1 + 'px',
            height: _el_rect.height + 'px',
            width: _el_rect.width + 'px'
          };
        } else {
          _dissection_node_styles = {
            left: _outline_bottom_position_left,
            top: _outline_bottom_position_top
          };
        }
      } else {
        if (_area.indexOf('full') !== -1) {
          _dissection_node_styles = {
            left: _el_offset_left + _el_rect.width + 'px',
            top: _el_offset_top + 'px',
            height: _el_rect.height + 'px'
          };
        } else if (_area.indexOf('enclose') !== -1) {
          _dissection_node_styles = {
            left: _el_offset_left + _el_rect.width + 'px',
            top: _el_offset_top + -1 + 'px',
            height: _el_rect.height + 'px',
            width: _el_rect.width + 'px'
          };
        } else {
          _dissection_node_styles = {
            left: _outline_left_position_left,
            top: _outline_left_position_top
          };
        }
      }
    } else {
      if (_area.indexOf('full') !== -1) {
        _dissection_node_styles = {
          left: _el_offset_left - 8 + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px'
        };
      } else if (_area.indexOf('enclose') !== -1) {
        _dissection_node_styles = {
          left: _el_offset_left - 1 + 'px',
          top: _el_offset_top + -1 + 'px',
          height: _el_rect.height + 'px',
          width: _el_rect.width + 'px'
        };
      } else {
        _dissection_node_styles = {
          left: _outline_left_position_left,
          top: _outline_left_position_top
        };
      }
    }

    add(_dissection_node, _dissection_node_styles);
  };

  /* eslint no-console:0 */

  const create$1 = (text = '', area = '', tag = 'span') => {
    const _el = document.createElement(tag);

    _el.setAttribute('title', text + 'px');

    _el.setAttribute('data-measure', parseInt(text, 10) + 'px');

    set(_el, `ph speccer measure ${area}`);
    return _el;
  };

  const element$1 = el => {
    if (!el) return;

    const _el_rect = el.getBoundingClientRect();

    const _area = el.getAttribute('data-speccer-measure');

    if (_area === '') {
      return;
    }

    const _el_offset_top = el.offsetTop;
    const _el_offset_left = el.offsetLeft;

    if (_area.indexOf('width') !== -1) {
      if (_area.indexOf('bottom') !== -1) {
        const _measure_node = create$1(_el_rect.width, 'width bottom');

        if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
          after(el.closest('table'), _measure_node);
        } else {
          after(el, _measure_node);
        }

        add(_measure_node, {
          left: _el_offset_left + 'px',
          top: _el_offset_top + _el_rect.height + 1 + 'px',
          width: _el_rect.width + 'px'
        });
      } else {
        const _measure_node = create$1(_el_rect.width, 'width top');

        if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
          after(el.closest('table'), _measure_node);
        } else {
          after(el, _measure_node);
        }

        const _measure_node_rect = _measure_node.getBoundingClientRect();

        add(_measure_node, {
          left: _el_offset_left + 'px',
          top: _el_offset_top - _measure_node_rect.height + 1 + 'px',
          width: _el_rect.width + 'px'
        });
      }
    } else if (_area.indexOf('height') !== -1) {
      if (_area.indexOf('right') !== -1) {
        const _measure_node = create$1(_el_rect.height, 'height right');

        if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
          after(el.closest('table'), _measure_node);
        } else {
          after(el, _measure_node);
        }

        add(_measure_node, {
          left: _el_offset_left + _el_rect.width + 'px',
          top: _el_offset_top + 'px',
          height: _el_rect.height + 'px'
        });
      } else {
        const _measure_node = create$1(_el_rect.height, 'height top');

        if (SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0) {
          after(el.closest('table'), _measure_node);
        } else {
          after(el, _measure_node);
        }

        const _measure_node_rect = _measure_node.getBoundingClientRect();

        add(_measure_node, {
          left: _el_offset_left - _measure_node_rect.width + 'px',
          top: _el_offset_top + 'px',
          height: _el_rect.height + 'px'
        });
      }
    }
  };

  /* eslint no-console:0 */

  const to3Decimals = number => parseFloat(number).toFixed(3);

  /* eslint no-console:0 */
  const create = (html, area) => {
    const _el = document.createElement('div');

    _el.innerHTML = html;
    set(_el, `ph speccer typography ${area}`);
    return _el;
  };
  const element = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(el) {
      var _area, _el_style, _parent_style, _styles, _el_rect, html, speccerNode, tableCorrectionTop, tableCorrectionLeft, tableCorrection, table, tableStyle, rectOfSpeccerNode, outlineLeftLeft, outlineLeftTop, outlineRightLeft, outlineRightTop, outlineTopLeft, outlineTopTop, outlineBottomleft, outlineBottomTop, position;

      return regenerator.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _area = el.getAttribute('data-speccer-typography');
            _context.next = 3;
            return get(el);

          case 3:
            _el_style = _context.sent;

            if (!(_el_style.display === 'none' || _el_style.visibility === 'hidden')) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            el.classList.add('is-specced');
            _parent_style = get(el.parentElement);

            if (_parent_style.position === 'static') {
              window.requestAnimationFrame(() => {
                el.parentElement.style.position = 'relative';
              });
            }

            _styles = getTypography(_el_style);
            _el_rect = el.getBoundingClientRect();
            html = `
    ` + 'font-styles: {' + '<ul class="speccer-styles">' + `  <li><span class="property">font-family:</span> ${_styles['fontFamily']};</li>` + `  <li><span class="property">font-size:</span> ${_styles['fontSize']} / ${parseInt(_styles['fontSize'], 10) / 16}rem;</li>` + `  <li><span class="property">font-weight:</span> ${_styles['fontWeight']};</li>` + `  <li><span class="property">font-variation-settings:</span> ${_styles['fontVariationSettings']};</li>` + `  <li><span class="property">line-height:</span> ${_styles['lineHeight']} / ${parseInt(_styles['lineHeight'], 10) / 16}rem;</li>` + `  <li><span class="property">letter-spacing:</span> ${_styles['letterSpacing']};</li>` + `  <li><span class="property">font-style:</span> ${_styles['fontStyle']};</li>` + '</ul>' + '}';
            speccerNode = create(html, _area);
            tableCorrectionTop = 0;
            tableCorrectionLeft = 0;
            tableCorrection = SPECCER_TAGS_TO_AVOID.indexOf(el.nodeName) >= 0;

            if (tableCorrection) {
              table = el.parentElement;
              tableStyle = window.getComputedStyle(table.parentElement);
              after(table, speccerNode);
              tableCorrectionTop = table.getBoundingClientRect().top - parseInt(tableStyle.getPropertyValue('padding-top'), 10);
              tableCorrectionLeft = table.getBoundingClientRect().left - parseInt(tableStyle.getPropertyValue('padding-left'), 10);
            } else {
              after(el, speccerNode);
            }

            rectOfSpeccerNode = speccerNode.getBoundingClientRect();
            outlineLeftLeft = (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : el.offsetLeft) - rectOfSpeccerNode.width - 48 + 'px';
            outlineLeftTop = to3Decimals((tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : el.offsetTop) - rectOfSpeccerNode.height / 2 + _el_rect.height / 2) + 'px';
            outlineRightLeft = (tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : el.offsetLeft) + _el_rect.width + 48 + 'px';
            outlineRightTop = to3Decimals((tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : el.offsetTop) - rectOfSpeccerNode.height / 2 + _el_rect.height / 2) + 'px';
            outlineTopLeft = to3Decimals((tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : el.offsetLeft) - rectOfSpeccerNode.width / 2 + _el_rect.width / 2) + 'px';
            outlineTopTop = (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : el.offsetTop) - rectOfSpeccerNode.height - 48 + 'px';
            outlineBottomleft = to3Decimals((tableCorrection ? rectOfSpeccerNode.left - tableCorrectionLeft : el.offsetLeft) - rectOfSpeccerNode.width / 2 + _el_rect.width / 2) + 'px';
            outlineBottomTop = (tableCorrection ? rectOfSpeccerNode.top - tableCorrectionTop : el.offsetTop) + _el_rect.height + 48 + 'px';
            position = {
              left: outlineLeftLeft,
              top: outlineLeftTop
            };

            if (_area.indexOf('right') !== -1) {
              position = {
                left: outlineRightLeft,
                top: outlineRightTop
              };
            } else if (_area.indexOf('top') !== -1) {
              position = {
                left: outlineTopLeft,
                top: outlineTopTop
              };
            } else if (_area.indexOf('bottom') !== -1) {
              position = {
                left: outlineBottomleft,
                top: outlineBottomTop
              };
            }

            add(speccerNode, position);

          case 29:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));

    return function element(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /* eslint no-console:0 */
  const activate$1 = speccer => {
    const speccerEventFunc = debounce(() => {
      speccer();
    }, 300);
    window.removeEventListener('resize', speccerEventFunc);
    window.addEventListener('resize', speccerEventFunc);
  };

  /* eslint no-console:0 */
  const dom = speccer => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', speccer);
    } else {
      // `DOMContentLoaded` already fired
      speccer();
    }
  };
  const lazy = () => {
    let _spec_observer = new IntersectionObserver((els, observer) => {
      els.forEach(el => {
        if (el.intersectionRatio > 0) {
          element$3(el.target);
          observer.unobserve(el.target);
        }
      });
    });

    document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)').forEach(el => {
      _spec_observer.observe(el);
    });

    let _measure_observer = new IntersectionObserver((els, observer) => {
      els.forEach(el => {
        if (el.intersectionRatio > 0) {
          element$1(el.target);
          observer.unobserve(el.target);
        }
      });
    });

    document.querySelectorAll('[data-speccer-measure]').forEach(el => {
      _measure_observer.observe(el);
    });

    let _dissect_observer = new IntersectionObserver((els, observer) => {
      els.forEach(el => {
        const targets = el.target.querySelectorAll('[data-anatomy]');

        if (el.intersectionRatio > 0) {
          targets.forEach(element$2);
          observer.unobserve(el.target);
        }
      });
    });

    document.querySelectorAll('[data-anatomy-section]').forEach(el => {
      _dissect_observer.observe(el);
    });
  };
  const manual = speccer => {
    window.speccer = speccer;
  };
  const activate = speccer => {
    const _script = document.currentScript;

    if (_script) {
      const _speccer_script_src = _script.getAttribute('src');

      if (_speccer_script_src.indexOf('speccer.js') !== -1 || // for codepen
      _speccer_script_src.indexOf('JaXpOK.js') !== -1) {
        if (_script.hasAttribute('data-manual')) {
          manual(speccer);
        } else if (_script.hasAttribute('data-instant')) {
          speccer();
        } else if (_script.hasAttribute('data-dom')) {
          dom(speccer);
        } else if (_script.hasAttribute('data-lazy')) {
          lazy();
        } else {
          dom(speccer);
        }

        if (!_script.hasAttribute('data-manual') && !_script.hasAttribute('data-lazy')) {
          activate$1(speccer);
        }
      }
    }
  };

  /* eslint no-console:0 */

  const speccer = () => {
    removeAll('.speccer');
    removeAll('.dissection');

    const _els_to_be_specced = document.querySelectorAll('[data-speccer],[data-speccer] *:not(td)');

    const _els_to_be_measured = document.querySelectorAll('[data-speccer-measure]');

    const _els_to_be_typography_specced = document.querySelectorAll('[data-speccer-typography]');

    const _els_to_be_dissected = document.querySelectorAll('[data-anatomy-section] [data-anatomy]');

    _els_to_be_specced.forEach(element$3);

    _els_to_be_measured.forEach(element$1);

    _els_to_be_typography_specced.forEach(element);

    _els_to_be_dissected.forEach(element$2);
  };
  activate(speccer);

  return speccer;

})));
