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
},{"./..\\arrow-up-solid.svg":"assets/arrow-up-solid.svg","./..\\square-regular.svg":"assets/square-regular.svg","./..\\subfolder1\\chevron-up-solid.svg":"assets/subfolder1/chevron-up-solid.svg","./..\\subfolder1\\plus-circle-solid.svg":"assets/subfolder1/plus-circle-solid.svg","./..\\subfolder1\\subfolder2\\arrow-down-solid.svg":"assets/subfolder1/subfolder2/arrow-down-solid.svg","./..\\subfolder1\\subfolder2\\chevron-down-solid.old.svg":"assets/subfolder1/subfolder2/chevron-down-solid.old.svg","./..\\subfolder1\\subfolder2\\two.svg":"assets/subfolder1/subfolder2/two.svg"}],"rawSrc/loadImg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadImg = loadImg;
exports.loadOnScroll = loadOnScroll;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      pathList[relPath + key + '.' + Object.keys(value)[0]] = value[Object.keys(value)[0]];
    } else if (isFolder) {
      pathList = _objectSpread(_objectSpread({}, pathList), getDictionary(value, relPath + key + "/"));
    }
  };

  for (var key in images) {
    var values;

    _loop(key);
  }

  return pathList;
};

var dictionary = getDictionary(images);

var Loader =
/*#__PURE__*/
function () {
  function Loader(targets) {
    var obsOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Loader);

    this.targets = targets;
    this.imgElements = [];
    this.obsOptions = obsOptions;
  }

  _createClass(Loader, [{
    key: "getSrc",
    value: function getSrc(dataSrc) {
      return dictionary[dataSrc] || dataSrc;
    }
  }, {
    key: "getSrcset",
    value: function getSrcset(dataSrcset) {
      var srcset = dataSrcset.split(',').reduce(function (srcset, current) {
        var src = current.slice(0, current.lastIndexOf(' ')).trim();
        var size = current.slice(current.lastIndexOf(' ') + 1);
        return "".concat(srcset && srcset + ',', " ").concat(dictionary[src], " ").concat(size);
      }, '');
      return srcset;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      if (typeof this.targets === 'string') this.imgElements = [].slice.call(document.querySelectorAll(this.targets));else if (!this.targets.length) this.imgElements = [this.targets];else this.imgElements = [].slice.call(this.targets);
      return this;
    }
  }, {
    key: "attachObserver",
    value: function attachObserver() {
      var _this = this;

      if (!('IntersectionObserver' in window)) {
        setTimeout(function () {
          return _this.loadAll();
        }, 17);
        return this;
      }

      var self = this;
      var _this$obsOptions = this.obsOptions,
          root = _this$obsOptions.root,
          _this$obsOptions$root = _this$obsOptions.rootMargin,
          rootMargin = _this$obsOptions$root === void 0 ? '500px 500px 500px 500px' : _this$obsOptions$root,
          _this$obsOptions$thre = _this$obsOptions.threshold,
          threshold = _this$obsOptions$thre === void 0 ? 0.01 : _this$obsOptions$thre;
      this.observer = new IntersectionObserver(cb, {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
      });

      function cb(entries) {
        var _this2 = this;

        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            _this2.unobserve(entry.target);

            self.loadSingle(entry.target);
            self.obsCallback && self.obsCallback(entry);
          }
        });
      }

      this.imgElements.forEach(function (img) {
        return _this.observer.observe(img);
      });
      return this;
    }
  }, {
    key: "loadAll",
    value: function loadAll() {
      var _this3 = this;

      this.allPromises = this.imgElements.reduce(function (allPromises, img) {
        allPromises.push(_this3.loadSingle(img));
        return allPromises;
      }, []);

      if ("Promise" in window) {
        return Promise.all(this.allPromises);
      }

      return this;
    }
  }, {
    key: "loadSingle",
    value: function loadSingle(img) {
      var _this4 = this;

      var imgCached = document.createElement('IMG');
      var EM = 'Could not load <img ';
      [].slice.call(img.attributes).forEach(function (_ref) {
        var name = _ref.name,
            value = _ref.value;
        EM += "".concat(name, "=\"").concat(value, "\" ");
        if (name === 'src' || name === 'data-src' || name === 'data-srcset') return;
        imgCached.setAttribute(name, value);
      });
      EM += '/>';
      if (img.dataset.src) imgCached.src = this.getSrc(img.dataset.src);
      if (img.dataset.srcset) imgCached.srcset = this.getSrcset(img.dataset.srcset);
      console.log(imgCached);

      if (!('Promise' in window)) {
        img.parentNode.replaceChild(imgCached, img);
        console.log('no promise');
        this.onLoadCallback && imgCached.addEventListener('load', this.onLoadCallback);
        this.onErrorCallback && imgCached.addEventListener('error', function (e) {
          e.message = EM;

          _this4.onErrorCallback(e);
        });
        return;
      }

      return new Promise(function (resolve, reject) {
        imgCached.addEventListener('load', function (e) {
          img.parentNode.replaceChild(imgCached, img);
          _this4.onLoadCallback && _this4.onLoadCallback(e);
          resolve(imgCached);
        });
        imgCached.addEventListener('error', function (e) {
          e.message = EM;
          _this4.onErrorCallback && _this4.onErrorCallback(e);
          reject(e);
        });
      });
    }
  }, {
    key: "onIntersection",
    value: function onIntersection(obsCallback) {
      this.obsCallback = obsCallback;
      return this;
    }
  }, {
    key: "onLoad",
    value: function onLoad(onLoadCallback) {
      this.onLoadCallback = onLoadCallback;
      return this;
    }
  }, {
    key: "onError",
    value: function onError(onErrorCallback) {
      this.onErrorCallback = onErrorCallback;
      return this;
    }
  }]);

  return Loader;
}();

function loadImg(targets) {
  return new Loader(targets).toArray().loadAll();
}

function loadOnScroll(targets) {
  var obsOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Loader(targets, obsOptions).toArray().attachObserver();
}
},{"./../../src/assets/**/*.*":"assets/**/*.*"}],"index.js":[function(require,module,exports) {
"use strict";

var _loadImg = require("./rawSrc/loadImg");

var img = document.createElement('img');
var container = document.querySelector('.container');
var button = document.querySelector('button.load');
img.dataset.src = 'subfolder1/subfolder2/chevron-down-solid.old.svg';
container.appendChild(img);
button.addEventListener('click', function () {
  (0, _loadImg.loadImg)(img).then(function (images) {
    return console.log('images', images);
  }).catch(function (e) {
    return console.log('promise.all', e);
  });
});
var images = document.querySelectorAll('.img');
var options = {
  root: document.getElementById('root'),
  rootMargin: '0px 0px -100px 0px'
};
var loader = (0, _loadImg.loadOnScroll)(images, options).onIntersection(function (e) {
  return console.log(e);
}).onLoad(function (e) {
  return console.log(e);
}).onError(function (e) {
  return console.log(e);
});
},{"./rawSrc/loadImg":"rawSrc/loadImg.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57613" + '/');

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