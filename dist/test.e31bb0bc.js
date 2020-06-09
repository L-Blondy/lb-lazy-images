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
})({"../src/assets/arrow-up-solid.svg":[function(require,module,exports) {
module.exports = "/arrow-up-solid.b70d0350.svg";
},{}],"../src/assets/square-regular.svg":[function(require,module,exports) {
module.exports = "/square-regular.0d1a2200.svg";
},{}],"../src/assets/subfolder1/chevron-up-solid.svg":[function(require,module,exports) {
module.exports = "/chevron-up-solid.c7ee1979.svg";
},{}],"../src/assets/subfolder1/plus-circle-solid.svg":[function(require,module,exports) {
module.exports = "/plus-circle-solid.bf21ed4e.svg";
},{}],"../src/assets/subfolder1/subfolder2/arrow-down-solid.svg":[function(require,module,exports) {
module.exports = "/arrow-down-solid.0e51ec7f.svg";
},{}],"../src/assets/subfolder1/subfolder2/chevron-down-solid.old.svg":[function(require,module,exports) {
module.exports = "/chevron-down-solid.old.8c0a481d.svg";
},{}],"../src/assets/subfolder1/subfolder2/two.svg":[function(require,module,exports) {
module.exports = "/two.2985b9d1.svg";
},{}],"../src/assets/**/*.*":[function(require,module,exports) {
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
},{"./..\\arrow-up-solid.svg":"../src/assets/arrow-up-solid.svg","./..\\square-regular.svg":"../src/assets/square-regular.svg","./..\\subfolder1\\chevron-up-solid.svg":"../src/assets/subfolder1/chevron-up-solid.svg","./..\\subfolder1\\plus-circle-solid.svg":"../src/assets/subfolder1/plus-circle-solid.svg","./..\\subfolder1\\subfolder2\\arrow-down-solid.svg":"../src/assets/subfolder1/subfolder2/arrow-down-solid.svg","./..\\subfolder1\\subfolder2\\chevron-down-solid.old.svg":"../src/assets/subfolder1/subfolder2/chevron-down-solid.old.svg","./..\\subfolder1\\subfolder2\\two.svg":"../src/assets/subfolder1/subfolder2/two.svg"}],"../lib/lib/dictionary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("../../src/assets/**/*.*"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getDictionary = function getDictionary(images) {
  var relPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var dictionary = {};

  var _loop = function _loop(key) {
    var value = images[key];
    values = Object.keys(images[key]).map(function (e) {
      return images[key][e];
    });
    var isImage = typeof values[0] === "string";
    var isFolder = _typeof(values[0]) === "object";

    if (isImage) {
      var ext = Object.keys(value)[0];
      dictionary["".concat(relPath + key, ".").concat(ext)] = value[ext];
    } else if (isFolder) {
      dictionary = _objectSpread(_objectSpread({}, dictionary), getDictionary(value, "".concat(relPath + key, "/")));
    }
  };

  for (var key in images) {
    var values;

    _loop(key);
  }

  return dictionary;
};

var _default = getDictionary(_.default);

exports.default = _default;
},{"../../src/assets/**/*.*":"../src/assets/**/*.*"}],"../lib/lib/utils.js":[function(require,module,exports) {
"use strict";

var _dictionary = _interopRequireDefault(require("./dictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var translateSrc = function translateSrc(src) {
  return _dictionary.default[src] || src;
};

var translateSrcset = function translateSrcset(srcset) {
  return srcset.split(',').reduce(function (srcset, current) {
    var src = current.slice(0, current.lastIndexOf(' ')).trim();
    var size = current.slice(current.lastIndexOf(' ') + 1);
    return "".concat(srcset && srcset + ',', " ").concat(translateSrc(src), " ").concat(size);
  }, '').trim();
};

var translateDataset = function translateDataset(img) {
  var _img$dataset = img.dataset,
      src = _img$dataset.src,
      srcset = _img$dataset.srcset;
  src && (img.dataset.src = translateSrc(src));
  srcset && (img.dataset.srcset = translateSrcset(srcset));
};

var toArray = function toArray(targets) {
  if (typeof targets === 'string') targets = document.querySelectorAll(targets);
  if (!targets.length) return [targets];
  return [].slice.call(targets);
};

var preload = function preload(img) {
  var preloader = img.cloneNode(false);
  var _preloader$dataset = preloader.dataset,
      src = _preloader$dataset.src,
      srcset = _preloader$dataset.srcset;

  if (src) {
    preloader.src = src;
    preloader.removeAttribute('data-src');
  }

  if (srcset) {
    preloader.srcset = srcset;
    preloader.removeAttribute('data-srcset');
  }

  return preloader;
};

module.exports = {
  translateDataset: translateDataset,
  toArray: toArray,
  preload: preload
};
},{"./dictionary":"../lib/lib/dictionary.js"}],"../lib/lib/LazyLoader.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../../src/assets/**/*.*"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LazyLoader =
/*#__PURE__*/
function () {
  function LazyLoader(images) {
    _classCallCheck(this, LazyLoader);

    this.images = (0, _utils.toArray)(images);
    this.settledCountdown = this.images.length;
    this.preloaders = [];
    this.hasObservers = false;

    this._init();
  }

  _createClass(LazyLoader, [{
    key: "_init",
    value: function _init() {
      this.images.forEach(_utils.translateDataset);
    }
  }, {
    key: "_countDown",
    value: function _countDown() {
      this.settledCountdown--;
      !this.settledCountdown && this.onAllSettledCb && this.onAllSettledCb(this.preloaders);
    }
  }, {
    key: "_attachListeners",
    value: function _attachListeners(img, preloader) {
      var _this = this;

      preloader.addEventListener('load', function (e) {
        img.parentNode && img.parentNode.replaceChild(preloader, img);
        _this.onLoadCb && _this.onLoadCb(e);

        _this._countDown();
      });
      preloader.addEventListener('error', function (e) {
        img.parentNode && img.parentNode.replaceChild(preloader, img);
        _this.onErrorCb && _this.onErrorCb(e);

        _this._countDown();
      });
    }
  }, {
    key: "_setObservers",
    value: function _setObservers() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      options = {
        root: options.root,
        rootMargin: options.rootMargin || '500px 500px 500px 500px',
        threshold: options.threshold || 0.01
      };
      this.intersectObs = new IntersectionObserver(intersectCb, options);
      this.visibleObs = new IntersectionObserver(visibleCb, _objectSpread(_objectSpread({}, options), {}, {
        rootMargin: '0px 0px 0px 0px'
      }));
      var that = this;

      function intersectCb(entries) {
        var _this2 = this;

        entries.forEach(function (e) {
          if (!e.intersectionRatio) return;
          var preloader = (0, _utils.preload)(e.target);

          that._attachListeners(e.target, preloader);

          that.visibleObs.observe(preloader);
          that.preloaders.push(preloader);
          that.onIntersectCb && that.onIntersectCb(e);

          _this2.unobserve(e.target);
        });
      }

      function visibleCb(entries) {
        var _this3 = this;

        entries.forEach(function (e) {
          if (!e.intersectionRatio) return;
          that.onVisibleCb && that.onVisibleCb(e);

          _this3.unobserve(e.target);
        });
      }

      this.hasObservers = true;
      return this;
    }
  }, {
    key: "loadAll",
    value: function loadAll() {
      var _this4 = this;

      this.images.forEach(function (img) {
        var preloader = (0, _utils.preload)(img);

        _this4.preloaders.push(preloader);

        _this4._attachListeners(img, preloader);
      });
      return this;
    }
  }, {
    key: "loadWithIO",
    value: function loadWithIO() {
      var _this5 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._setObservers(options);

      this.images.forEach(function (img) {
        _this5.intersectObs.observe(img);
      });
      return this;
    }
  }, {
    key: "onLoad",
    value: function onLoad(cb) {
      this.onLoadCb = cb;
      return this;
    }
  }, {
    key: "onError",
    value: function onError(cb) {
      this.onErrorCb = cb;
      return this;
    }
  }, {
    key: "onAllSettled",
    value: function onAllSettled(cb) {
      this.onAllSettledCb = cb;
      return this;
    }
  }, {
    key: "onVisible",
    value: function onVisible(cb) {
      this.onVisibleCb = cb;
      return this;
    }
  }, {
    key: "onIntersect",
    value: function onIntersect(cb) {
      this.onIntersectCb = cb;
      return this;
    }
  }]);

  return LazyLoader;
}();

var options = {
  root: document.getElementById('root'),
  rootMargin: '200px 200px 200px 200px',
  threshold: 0.001
};
var test = new LazyLoader('img'); // test
// 	.loadAll()
// 	.onLoad((e) => console.log('onLoadCb'))
// 	.onError((e) => console.log('onErrorCb'))
// 	.onAllSettled(() => console.log('allSettledCb'));

test.loadWithIO(options).onLoad(function (e) {
  return console.log('onLoadCb');
}).onError(function (e) {
  return console.log('onErrorCb');
}).onAllSettled(function () {
  return console.log('allSettledCb');
}).onVisible(function () {
  return console.log('onVisibleCb');
}).onIntersect(function () {
  return console.log('onIntersectCb');
});
},{"../../src/assets/**/*.*":"../src/assets/**/*.*","./utils":"../lib/lib/utils.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _LazyLoader = _interopRequireDefault(require("../lib/lib/LazyLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../lib/lib/LazyLoader":"../lib/lib/LazyLoader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49835" + '/');

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
//# sourceMappingURL=/test.e31bb0bc.js.map