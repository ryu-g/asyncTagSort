// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style/main.sass":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"script/switchDisplay.js":[function(require,module,exports) {
var controller = document.getElementById('sortController');
controller.addEventListener('click', switchDisplay, false);
var hello = document.getElementById("hello");
var items_hello = document.getElementsByClassName('hello');
var poster = document.getElementById("poster");
var items_poster = document.getElementsByClassName('poster');
var webpage = document.getElementById("webpage");
var items_webpage = document.getElementsByClassName('webpage');
var other = document.getElementById("other");
var items_other = document.getElementsByClassName('other');
var cd = document.getElementById("cd");
var items_cd = document.getElementsByClassName('cd');

function switchDisplay() {
  switch_hello();
  switch_poster();
  switch_webpage();
  switch_other();
  switch_cd();

  if (!hello.checked && !poster.checked && !webpage.checked && !other.checked && !cd.checked) {
    displayAll();
  }
}

function displayAll() {
  for (var i = 0; i < items_hello.length; i++) {
    items_hello[i].style.visibility = "visible";
    items_hello[i].style.width = "30vw";
    items_hello[i].style.margin = "10px";
  }

  for (var _i = 0; _i < items_poster.length; _i++) {
    items_poster[_i].style.visibility = "visible";
    items_poster[_i].style.width = "30vw";
    items_poster[_i].style.margin = "10px";
  }

  for (var _i2 = 0; _i2 < items_webpage.length; _i2++) {
    items_webpage[_i2].style.visibility = "visible";
    items_webpage[_i2].style.width = "30vw";
    items_webpage[_i2].style.margin = "10px";
  }

  for (var _i3 = 0; _i3 < items_other.length; _i3++) {
    items_other[_i3].style.visibility = "visible";
    items_other[_i3].style.width = "30vw";
    items_other[_i3].style.margin = "10px";
  }

  for (var _i4 = 0; _i4 < items_cd.length; _i4++) {
    items_cd[_i4].style.visibility = "visible";
    items_cd[_i4].style.width = "30vw";
    items_cd[_i4].style.margin = "10px";
  }
}

function switch_hello() {
  for (var i = 0; i < items_hello.length; i++) {
    if (hello.checked) {
      items_hello[i].style.visibility = "visible";
      items_hello[i].style.width = "30vw";
      items_hello[i].style.margin = "10px";
    } else {
      items_hello[i].style.visibility = "hidden";
      items_hello[i].style.width = "0px";
      items_hello[i].style.margin = "10px 0px";
    }
  }
}

function switch_poster() {
  for (var i = 0; i < items_poster.length; i++) {
    if (poster.checked) {
      items_poster[i].style.visibility = "visible";
      items_poster[i].style.width = "30vw";
      items_poster[i].style.margin = "10px";
    } else {
      items_poster[i].style.visibility = "hidden";
      items_poster[i].style.width = "0px";
      items_poster[i].style.margin = "10px 0px";
    }
  }
}

function switch_webpage() {
  for (var i = 0; i < items_webpage.length; i++) {
    if (webpage.checked) {
      items_webpage[i].style.visibility = "visible";
      items_webpage[i].style.width = "30vw";
      items_webpage[i].style.margin = "10px";
    } else {
      items_webpage[i].style.visibility = "hidden";
      items_webpage[i].style.width = "0px";
      items_webpage[i].style.margin = "10px 0px";
    }
  }
}

function switch_other() {
  for (var i = 0; i < items_other.length; i++) {
    if (other.checked) {
      items_other[i].style.visibility = "visible";
      items_other[i].style.width = "30vw";
      items_other[i].style.margin = "10px";
    } else {
      items_other[i].style.visibility = "hidden";
      items_other[i].style.width = "0px";
      items_other[i].style.margin = "10px 0px";
    }
  }
}

function switch_cd() {
  for (var i = 0; i < items_cd.length; i++) {
    if (cd.checked) {
      items_cd[i].style.visibility = "visible";
      items_cd[i].style.width = "30vw";
      items_cd[i].style.margin = "10px";
    } else {
      items_cd[i].style.visibility = "hidden";
      items_cd[i].style.width = "0px";
      items_cd[i].style.margin = "10px 0px";
    }
  }
}
},{}],"script/*.js":[function(require,module,exports) {
module.exports = {
  "switchDisplay": require("./switchDisplay.js")
};
},{"./switchDisplay.js":"script/switchDisplay.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./style/main.sass");

require("./script/*.js");
},{"./style/main.sass":"style/main.sass","./script/*.js":"script/*.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55237" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map