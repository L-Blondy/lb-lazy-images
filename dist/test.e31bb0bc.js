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
},{"./..\\arrow-up-solid.svg":"../src/assets/arrow-up-solid.svg","./..\\square-regular.svg":"../src/assets/square-regular.svg","./..\\subfolder1\\chevron-up-solid.svg":"../src/assets/subfolder1/chevron-up-solid.svg","./..\\subfolder1\\plus-circle-solid.svg":"../src/assets/subfolder1/plus-circle-solid.svg","./..\\subfolder1\\subfolder2\\arrow-down-solid.svg":"../src/assets/subfolder1/subfolder2/arrow-down-solid.svg","./..\\subfolder1\\subfolder2\\chevron-down-solid.old.svg":"../src/assets/subfolder1/subfolder2/chevron-down-solid.old.svg","./..\\subfolder1\\subfolder2\\two.svg":"../src/assets/subfolder1/subfolder2/two.svg"}],"../node_modules/_mybundle/bundle.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _=_interopRequireDefault(require("../../src/assets/**/*.*"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function ownKeys(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var getDictionary=function s(i,t){var a,c=1<arguments.length&&void 0!==t?t:"",l={};for(var e in i){!function(e){var t,r=i[e],n="string"==typeof(a=Object.keys(i[e]).map(function(t){return i[e][t]}))[0],o="object"===_typeof(a[0]);n?(t=Object.keys(r)[0],l["".concat(c+e,".").concat(t)]=r[t]):o&&(l=_objectSpread(_objectSpread({},l),s(r,"".concat(c+e,"/"))))}(e)}return l},dictionary=getDictionary(_.default),translateSrc=function(t){return dictionary[t]||t},translateSrcset=function(t){return t.split(",").reduce(function(t,e){var r=e.slice(0,e.lastIndexOf(" ")).trim(),n=e.slice(e.lastIndexOf(" ")+1);return"".concat(t&&t+","," ").concat(translateSrc(r)," ").concat(n)},"").trim()},translateDataset=function(t){var e=t.dataset,r=e.src,n=e.srcset;r&&(t.dataset.src=translateSrc(r)),n&&(t.dataset.srcset=translateSrcset(n))},toArray=function(t){return"string"==typeof t&&(t=document.querySelectorAll(t)),t.length?[].slice.call(t):[t]},preload=function(t){var e=t.cloneNode(!1),r=e.dataset,n=r.src,o=r.srcset;return n&&(e.src=n),o&&(e.srcset=o),e};function display(t){t.dataset.src&&(t.src=t.dataset.src),t.dataset.srcset&&(t.srcset=t.dataset.srcset),t.removeAttribute("data-src"),t.removeAttribute("data-srcset")}var LazyLoader=function(){function r(t){_classCallCheck(this,r),this.images=toArray(t),this.settledCountdown=this.images.length,this.hasObservers=!1,this.onLoadCb=this.onErrorCb=this.onIntersectCb=this.onVisibleCb=function(){},this._init()}return _createClass(r,[{key:"_init",value:function(){this.images.forEach(translateDataset)}},{key:"_countDown",value:function(){this.settledCountdown--,!this.settledCountdown&&this.onAllSettledCb&&this.onAllSettledCb(this.images)}},{key:"_attachListeners",value:function(e,t){var r=this;t.addEventListener("load",function(t){display(e),r.onLoadCb(e),window.IntersectionObserver||(r.onIntersectCb(e),r.onVisibleCb(e)),r._countDown()}),t.addEventListener("error",function(t){display(e),r.onErrorCb(e),window.IntersectionObserver||(r.onIntersectCb(e),r.onVisibleCb(e)),r._countDown()})}},{key:"_setObservers",value:function(t){var e={root:(e=0<arguments.length&&void 0!==t?t:{}).root,rootMargin:e.rootMargin||"500px 500px 500px 500px",threshold:e.threshold||.01};this.intersectObs=new IntersectionObserver(function(t){var r=this;t.forEach(function(t){var e;t.intersectionRatio&&(e=preload(t.target),n._attachListeners(t.target,e),n.onIntersectCb(t.target),n.visibleObs.observe(t.target),r.unobserve(t.target))})},e),this.visibleObs=new IntersectionObserver(function(t){var e=this;t.forEach(function(t){t.intersectionRatio&&(n.onVisibleCb(t.target),e.unobserve(t.target))})},_objectSpread(_objectSpread({},e),{},{rootMargin:"0px 0px 0px 0px"}));var n=this;return this.hasObservers=!0,this}},{key:"loadAll",value:function(){var r=this;return this.images.forEach(function(t){var e=preload(t);r._attachListeners(t,e)}),this}},{key:"loadWithIO",value:function(t){var e=this,r=0<arguments.length&&void 0!==t?t:{};return window.IntersectionObserver?(this._setObservers(r),this.images.forEach(function(t){e.intersectObs.observe(t)}),this):this.loadAll()}},{key:"onLoad",value:function(t){return this.onLoadCb=t,this}},{key:"onError",value:function(t){return this.onErrorCb=t,this}},{key:"onAllSettled",value:function(t){return this.onAllSettledCb=t,this}},{key:"onVisible",value:function(t){return this.onVisibleCb=t,this}},{key:"onIntersection",value:function(t){return this.onIntersectCb=t,this}}],[{key:"loadWithIO",value:function(t,e){return new r(t).loadWithIO(e)}},{key:"loadAll",value:function(t){return new r(t).loadAll()}}]),r}(),_default=LazyLoader;exports.default=LazyLoader;
},{"../../src/assets/**/*.*":"../src/assets/**/*.*"}],"../src/assets/*.*":[function(require,module,exports) {
module.exports = {
  "arrow-up-solid": {
    "svg": require("./arrow-up-solid.svg")
  },
  "square-regular": {
    "svg": require("./square-regular.svg")
  }
};
},{"./arrow-up-solid.svg":"../src/assets/arrow-up-solid.svg","./square-regular.svg":"../src/assets/square-regular.svg"}],"index.js":[function(require,module,exports) {
"use strict";

var _mybundle = _interopRequireDefault(require("_mybundle"));

var _ = _interopRequireDefault(require("../src/assets/*.*"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import LazyLoader from '../lib/lib/LazyLoader';
var options = {
  root: document.getElementById('root'),
  rootMargin: '200px 200px 200px 200px',
  threshold: 0.001
}; // new LazyLoader('.img')
// 	.loadAll()
// 	.onLoad((e) => console.log('onLoadCb'))
// 	.onError((e) => console.log('onErrorCb'))
// 	.onAllSettled(() => console.log('allSettledCb'));
// window.IntersectionObserver = null;
// new LazyLoader('.img')
// 	.loadWithIO(options).

_mybundle.default.loadWithIO('.img', options).onLoad(function (img) {
  return console.log('onLoadCb', img);
}).onError(function (img) {
  return console.log('onErrorCb', img);
}).onAllSettled(function (images) {
  return console.log('allSettledCb', images);
}).onVisible(function (img) {
  return img.classList.add('fadein');
}).onIntersection(function (img) {
  return console.log('onIntersectCb', img);
});

document.querySelector('button').addEventListener('click', function () {
  return _mybundle.default.loadAll('.with-button').onLoad(function (img) {
    return img.classList.add('fadein');
  });
});
var sourceMap = Object.values(_.default).map(function (val) {
  return Object.values(val)[0];
});
var imageMap = sourceMap.map(function (src) {
  var img = document.createElement('IMG');
  img.dataset.src = src;
  root.appendChild(img);
  return img;
});

_mybundle.default.loadWithIO(imageMap).onVisible(function (img) {
  return img.classList.add('fadein');
});
},{"_mybundle":"../node_modules/_mybundle/bundle.js","../src/assets/*.*":"../src/assets/*.*"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64145" + '/');

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