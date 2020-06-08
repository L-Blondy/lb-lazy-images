// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/arrow-up-solid.svg":[function(require,module,exports) {
module.exports = "/arrow-up-solid.e093b807.svg";
},{}],"assets/square-regular.svg":[function(require,module,exports) {
module.exports = "/square-regular.90e12ba7.svg";
},{}],"assets/subfolder1/chevron-up-solid.svg":[function(require,module,exports) {
module.exports = "/chevron-up-solid.6e0e77cf.svg";
},{}],"assets/subfolder1/plus-circle-solid.svg":[function(require,module,exports) {
module.exports = "/plus-circle-solid.025a1dda.svg";
},{}],"assets/subfolder1/subfolder2/arrow-down-solid.svg":[function(require,module,exports) {
module.exports = "/arrow-down-solid.65c45ad3.svg";
},{}],"assets/subfolder1/subfolder2/chevron-down-solid.old.svg":[function(require,module,exports) {
module.exports = "/chevron-down-solid.old.ae62c709.svg";
},{}],"assets/subfolder1/subfolder2/two.svg":[function(require,module,exports) {
module.exports = "/two.12f6dca1.svg";
},{}],"assets/**/*.*":[function(require,module,exports) {
module.exports = {
  "arrow-up-solid": {
    "svg": require("./..\\arrow-up-solid.svg")
  },
  "square-regular": {
    "svg": require("./..\\square-regular.svg")
  },
  "subfolder1": {
    "chevron-up-solid": {
      "svg": require("./..\\subfolder1\\chevron-up-solid.svg")
    },
    "plus-circle-solid": {
      "svg": require("./..\\subfolder1\\plus-circle-solid.svg")
    },
    "subfolder2": {
      "arrow-down-solid": {
        "svg": require("./..\\subfolder1\\subfolder2\\arrow-down-solid.svg")
      },
      "chevron-down-solid": {
        "old.svg": require("./..\\subfolder1\\subfolder2\\chevron-down-solid.old.svg")
      },
      "two": {
        "svg": require("./..\\subfolder1\\subfolder2\\two.svg")
      }
    }
  }
};
},{"./..\\arrow-up-solid.svg":"assets/arrow-up-solid.svg","./..\\square-regular.svg":"assets/square-regular.svg","./..\\subfolder1\\chevron-up-solid.svg":"assets/subfolder1/chevron-up-solid.svg","./..\\subfolder1\\plus-circle-solid.svg":"assets/subfolder1/plus-circle-solid.svg","./..\\subfolder1\\subfolder2\\arrow-down-solid.svg":"assets/subfolder1/subfolder2/arrow-down-solid.svg","./..\\subfolder1\\subfolder2\\chevron-down-solid.old.svg":"assets/subfolder1/subfolder2/chevron-down-solid.old.svg","./..\\subfolder1\\subfolder2\\two.svg":"assets/subfolder1/subfolder2/two.svg"}],"rawSrc/dictionary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var images = require("./../../src/assets/**/*.*");

var getDictionary = function getDictionary(images) {
  var relPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var pathList = {};

  var _loop = function _loop(key) {
    var value = images[key];
    values = Object.keys(images[key]).map(function (e) {
      return images[key][e];
    });
    var isImage = typeof values[0] === "string";
    var isFolder = _typeof(values[0]) === "object";

    if (isImage) {
      var ext = Object.keys(value)[0];
      pathList["".concat(relPath + key, ".").concat(ext)] = value[ext];
    } else if (isFolder) {
      pathList = _objectSpread(_objectSpread({}, pathList), getDictionary(value, "".concat(relPath + key, "/")));
    }
  };

  for (var key in images) {
    var values;

    _loop(key);
  }

  return pathList;
};

var _default = getDictionary(images);

exports.default = _default;
},{"./../../src/assets/**/*.*":"assets/**/*.*"}],"rawSrc/Img.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dictionary = _interopRequireDefault(require("./dictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log(_dictionary.default);

var Images =
/*#__PURE__*/
function () {
  function Images(targets) {
    _classCallCheck(this, Images);

    this.targets = this._getTargets(targets);
    this.cache = [];
  }

  _createClass(Images, [{
    key: "_getTargets",
    value: function _getTargets(targets) {
      if (typeof targets === 'string') targets = document.querySelectorAll(targets);
      if (!targets.length) return [targets];
      return [].slice.call(targets);
    }
  }, {
    key: "_translateDataset",
    value: function _translateDataset(img) {
      var _img$dataset = img.dataset,
          src = _img$dataset.src,
          srcset = _img$dataset.srcset;
      if (src) img.dataset.src = _dictionary.default[src] || src;
      if (srcset) img.dataset.srcset = srcset.split(',').reduce(function (srcset, current) {
        var src = current.slice(0, current.lastIndexOf(' ')).trim();
        var size = current.slice(current.lastIndexOf(' ') + 1);
        console.log(src, size);
        return "".concat(srcset && srcset + ',', " ").concat(_dictionary.default[src] || src, " ").concat(size);
      }, '');
    }
  }, {
    key: "_cacheImg",
    value: function _cacheImg(img) {
      var el = document.createElement('img');
      [].slice.call(img.attributes).forEach(function (_ref) {
        var name = _ref.name,
            value = _ref.value;
        if (name === 'src') return;
        if (name === 'data-src') return el.src = value;
        if (name === 'data-srcset') return el.srcset = value;
        el.setAttribute(name, value);
      });
      return el;
    }
  }, {
    key: "_attachListeners",
    value: function _attachListeners(target, cached) {
      cached.addEventListener('load', function (e) {
        target.parentNode.replaceChild(cached, target);
      });
      cached.addEventListener('error', function (e) {
        target.parentNode.replaceChild(cached, target);
        console.log(e);
      });
    }
  }, {
    key: "loadAll",
    value: function loadAll() {
      var _this = this;

      this.targets.forEach(function (target) {
        return _this._loadOne(target);
      });
      return this;
    }
  }, {
    key: "_loadOne",
    value: function _loadOne(target) {
      this._translateDataset(target);

      var cached = this._cacheImg(target);

      this._attachListeners(target, cached);
    }
  }, {
    key: "_getWithMarginObserver",
    value: function _getWithMarginObserver(onIntersection, options) {
      var defaultOptions = {
        rootMargin: '500px 500px 500px 500px',
        threshold: 0.01
      };
      options = _objectSpread(_objectSpread({}, defaultOptions), options);
      return new IntersectionObserver(onIntersection, options);
    }
  }, {
    key: "_getWithoutMarginObserver",
    value: function _getWithoutMarginObserver(onVisible, options) {
      options = {
        root: options.root,
        threshold: 0.01
      };
      console.log(options);
      return new IntersectionObserver(onVisible, options);
    }
  }, {
    key: "loadOnIntersection",
    value: function loadOnIntersection() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!('IntersectionObserver' in window)) return this.loadAll();

      var withMarginObserver = this._getWithMarginObserver(onIntersection, options);

      var withoutMarginObserver = this._getWithoutMarginObserver(onVisible, options);

      var that = this;

      function onIntersection(entries) {
        var _this2 = this;

        entries.forEach(function (e) {
          if (!e.intersectionRatio) return;

          that._loadOne(e.target);

          console.log('intersecting');
          console.log(_this2);

          _this2.unobserve(e.target);
        });
      }

      function onVisible(entries) {
        var _this3 = this;

        entries.forEach(function (e) {
          // if (!e.intersectionRatio) return;
          console.log('visible');
          console.log(_this3); // this.unobserve(e.target);
        });
      }

      this.targets.forEach(function (target) {
        withMarginObserver.observe(target);
        withoutMarginObserver.observe(target);
      });
      return this;
    }
  }]);

  return Images;
}();

function load(targets) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // return new Images(targets, options).loadAll();
  return new Images(targets).loadOnIntersection(options);
}

load('.img', {
  root: document.getElementById('root')
});
var _default = Images;
exports.default = _default;
},{"./dictionary":"rawSrc/dictionary.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _Img = _interopRequireDefault(require("./rawSrc/Img"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./rawSrc/Img":"rawSrc/Img.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49838" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map