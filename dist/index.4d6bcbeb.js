// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"f3BSW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
//! main.js
// html에 있는 요소를 지정하여 컴포넌트로 구성된 app.js에 표시될 위치를 지정한다.
// 이 파일은 보통 하나의 파일로만 존재하며 다양한 app.js를 html의 요소에 적재적소 하는 역할을 함 
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _routes = require("./routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
// 위와 같이 설정시 index 값을 기본으로 찾아줌
const root = document.querySelector("#root");
// 요소 구성
root.append(new (0, _appDefault.default)().el);
// 요소가 먼저 있어야지 각 요소에 지정할 routes를 만들 수 있다. (즉, router-view가 있어야 한다.)
// 각 요소의 기능 추가
(0, _routesDefault.default)();

},{"./App":"2kQhy","./routes":"3L9mC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kQhy":[function(require,module,exports) {
//! app.js
// main.js 이전에 router-view라는 부분에 보여줄 movie-app 을 지정
// 이부분은 지금에서는 하나의 앱 => movie app 을 만들기 때문에 하나의 파일로 존재하지만
// 추후 여러 앱을 만들어서 main.js에 반영할 경우 이름이 변경될 여지가 있음
// 또한, 모든 페이지에서 고정되어 보여질 화면 (header, footer side bar)을 지정할 수 있음
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("./core/youjun");
var _theHeader = require("./components/TheHeader");
var _theHeaderDefault = parcelHelpers.interopDefault(_theHeader);
var _theFooter = require("./components/TheFooter");
var _theFooterDefault = parcelHelpers.interopDefault(_theFooter);
class App extends (0, _youjun.Component) {
    render() {
        const theHeader = new (0, _theHeaderDefault.default)().el;
        const routerView = document.createElement("router-view");
        const theFooter = new (0, _theFooterDefault.default)().el;
        this.el.append(theHeader, routerView, theFooter);
    }
}
exports.default = App;

},{"./core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./components/TheHeader":"3Cyq4","./components/TheFooter":"b3x3c"}],"4Gvzt":[function(require,module,exports) {
//! youjun.js는 가장 근간이 되는 논리구조를 담당한다.
///? Component ///
//* 해석 :
// component 라는 클래스는 호출될 때 payload라는 매개변수를 받는다.
// payload에서 tagName, state, props를 꺼낸다.
// 그 다음 각각의 변수에 저장된 내용을 this를 사용해서 해당하는 각각의 변수에 할당해준다.
// this를 통해 지정함으로써 class 안에서 만들어지는 모든 메소드(render())에서 this 라는 키워드로 참조해서 쓸 수 있다.
// 정리하면 웹페이지에 나타낼 tag를 명시하고 tag안에 담길 데이터를 정의한다.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component);
//* routes의 index.js 에서 사용되며 [{ path: '#/', component: Home }] 와 같은 형식의 데이터를 받는다.
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
///? store ///
//* 해석:
// 각각의 컴포넌트가 통신할 수 있도록 통용되는 데이터 상태를 관리해주는 store
parcelHelpers.export(exports, "Store", ()=>Store);
class Component {
    constructor(payload = {}){
        const { tagName ="div" , state ={} , props ={}  } = payload;
        this.el = document.createElement(tagName);
        // this.render()에서 사용할 수 있도록 선언을 해준다.
        // state는 자식이 부모의 데이터에 영향을 줄 데이터를 의미한다.
        this.state = state;
        // props는 부모가 자식에게 줄 데이터를 의미한다.
        this.props = props;
        // this.render를 통해 위에서 설정된 값들이 render() 를 통해 변화될 수 있도록 한다. => 다른 component들이 render()를 통해 여기에 지정된 값과 규칙을 근간으로 자신만의 모습을 가질 수 있게된다.
        this.render();
    // 또한, 가장 기본적인 규칙을 이루고 있는 만큼 this.render()이 호출되는 함수 밑으로는 code가 작동되지 않는다. 
    }
    render() {}
}
///? Router ///
//* 해석 :
// 입력된 주소에 따라 페이지를 구분해주고 각 페이지를 routes 의 index.js를 통해 app.js 반영해줌
// 주소에 입력받은 api와 query에 대한 데이터도 처리함
function routeRender(routes) {
    // 주소부분에 hash가 붙어 있는지 확인해서 *** 이 부분에서 발생할 수 있는 에러를 차단한다. 그리고 자동으로 component가 있는 화면으로 넘어갈 수 있게 된다.
    if (!location.hash) history.replaceState(null, "", "/#/"); // history를 남기지 않으면서 창을 이동시킨다. => 초기화면의 주소를 설정해준다.
    //* app.js에서 지정한 movie app의 범위를 잡는다.
    const routerView = document.querySelector("router-view");
    // http://localhost:1234/#/about?name=youjun
    // location.hash = #/about?name=youjun
    const [hash, queryString = ""] = location.hash.split("?");
    const query = queryString.split("&").reduce((acc, cur)=>{
        const [key, value] = cur.split("=");
        acc[key] = value;
        return acc; // => key(name)에 따른 value값을 객체 형태로 반환
    }, {});
    history.replaceState(query, ""); // query가 history 객체의 state 속성에 저장된다.
    // 즉,위와 같이 history의 state를 통해 주소에 저장된 query문을 전처리하여 저장후 쓸 수 있다.
    // 현재 페이지에 입력된 hash가 실제로 존재하는 지 확인 => 있으면 페이지 새로 랜더링 => *** 없으면 에러
    const currentRoute = routes.find((route)=>new RegExp(`${route.path}/?$`).test(hash));
    // routerView의 초기화
    routerView.innerHTML = "";
    // routerView에 대입
    routerView.append(new currentRoute.component().el);
    // 페이지 이동시 스크롤 위치 상단으로 고정
    window.scrollTo(0, 0);
}
function createRouter(routes) {
    return function() {
        window.addEventListener("popstate", ()=>{
            // popstate : 주소 부분이 바뀌면 실행됨
            routeRender(routes);
        });
        routeRender(routes);
    };
}
class Store {
    constructor(state){
        // 저장할 상태
        this.state = {};
        // 지켜볼 상태
        this.observers = {};
        for(const key in state)// 정의하고자 하는 데이터가 새로운 값이 할당될 때마다 필요한 함수를 실행하기 위해 defineProperty를 사용한다.
        // this.state에 key를 할당하고, 이를 조작할 함수를 정의한다.
        // get 함수를 통해서 실제 state가 갖고 있는 데이터를 얻을 수 있게 한다.
        // set 함수를 통해서 새로운 값을 지정한다.
        Object.defineProperty(this.state, key, {
            get: ()=>state[key],
            set: (val)=>{
                state[key] = val;
                // 아래와 같은 함수 실행
                // this.observers['message']()
                console.log("core" + key);
                console.log("core" + val);
                console.log(this.observers);
                console.log(this.observers[key]);
                if (Array.isArray(this.observers[key])) // 호출할 콜백이 있는 경우 => 에러방지
                this.observers[key].forEach((observer)=>{
                    observer(val);
                });
            }
        });
    }
    // cb = callback function
    // 이 함수를 통해 감시할 대상과 이벤트를 지정한다.
    // this.observers['message'] = () => {}
    // { message: () => {} } => 하나의 함수만을 등록할 수 있다.
    // 즉, 하나의 컴포넌트/기능만 할 수 있는 것이다. 두개 이상의 컴포넌트에 동시에 영향을 줄 수 없다.
    // 다음과 같은 방식으로 하면 다양한 함수를 등록하고 사용할 수 있다.
    // { message: [ () => {}, () => {}, () => {} ] }
    subscribe(key, cb) {
        Array.isArray(this.observers[key]) ? this.observers[key].push(cb) : this.observers[key] = [
            cb
        ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3Cyq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
class TheHeader extends (0, _youjun.Component) {
    constructor(){
        super({
            tagName: "header",
            state: {
                menus: [
                    {
                        name: "Search",
                        href: "#/"
                    },
                    {
                        name: "Movie",
                        href: "#/movie?id=tt4520988"
                    },
                    {
                        name: "About",
                        href: "#/about"
                    }
                ]
            }
        });
        // 페이지가 바뀔 때마다 새로 랜더링 => class active 적용
        window.addEventListener("popstate", ()=>{
            this.render();
        });
    }
    render() {
        this.el.innerHTML = /* html */ `
    <a href="#/" class="logo">
      <span>OMDbAPI</span>.COM
    </a>
    <nav>
      <ul>
        ${this.state.menus.map((menu)=>{
            // 이동할 페이지의 주소
            const href = menu.href.split("?")[0];
            // 실제 페이지의 주소
            const hash = location.hash.split("?")[0];
            const isActive = href === hash;
            return /* html */ `
          <li>
            <a href="${menu.href}" class="${isActive ? "active" : ""}">
              ${menu.name}
            </a>
          </li>
          `;
        }).join("")}
      </ul>
    </nav>
    <a href="#/about" class="user">
      <img src="https://lh3.googleusercontent.com/a/AAcHTtcg-XuKSKFMKu4nzKQdS1o-en3j5GsC_-C9I7kUyA=s576-c-no" alt="User">
    </a>
    `;
    }
}
exports.default = TheHeader;

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3x3c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
var _about = require("../store/about");
var _aboutDefault = parcelHelpers.interopDefault(_about);
class TheFooter extends (0, _youjun.Component) {
    constructor(){
        super({
            tagName: "footer"
        });
    }
    render() {
        const { github , repository  } = (0, _aboutDefault.default).state;
        this.el.innerHTML = /* html */ `
    <div>
      <a href="${repository}">
        Github Repository
      </a>
  </div>
  <div>
    <a href="${github}">
      ${new Date().getFullYear()}
      ReasonJun
    </a>
  </div>
    `;
    }
}
exports.default = TheFooter;

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../store/about":"4RAJO"}],"4RAJO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
exports.default = new (0, _youjun.Store)({
    photo: "https://lh3.googleusercontent.com/a/AAcHTtcg-XuKSKFMKu4nzKQdS1o-en3j5GsC_-C9I7kUyA=s576-c-no",
    name: "ReasonJun / Lee Eui Jun",
    email: "tndhworl1998@gmail.com",
    blog: "https://reasonjun.tistory.com/",
    github: "https://github.com/YouJun-IWON",
    repository: "https://github.com/YouJun-IWON/movie-app"
});

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3L9mC":[function(require,module,exports) {
//! routes :
// (movie) app.js에서 지정한 (html) 부분에 표시할 웹(list)를 지정한다.
// 배열을 통해 각각의 웹페이지를 나열하고 객체를 통해 각 페이지에서 보여질 component를 지정한다.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
var _home = require("./Home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _movie = require("./Movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
var _about = require("./About");
var _aboutDefault = parcelHelpers.interopDefault(_about);
var _notFound = require("./NotFound");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);
// 여기서 path에 따라 지정된 component가 app.js의 router-view가 된다.
exports.default = (0, _youjun.createRouter)([
    {
        path: "#/",
        component: (0, _homeDefault.default)
    },
    {
        path: "#/movie",
        component: (0, _movieDefault.default)
    },
    {
        path: "#/about",
        component: (0, _aboutDefault.default)
    },
    {
        path: ".*",
        component: (0, _notFoundDefault.default)
    }
]);

},{"../core/youjun":"4Gvzt","./Home":"0JSNG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Movie":"1LTyN","./About":"gdB30","./NotFound":"4fDiL"}],"0JSNG":[function(require,module,exports) {
//! Home.js
// home 화면을 component로 구성한다.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
var _headline = require("../components/Headline");
var _headlineDefault = parcelHelpers.interopDefault(_headline);
var _search = require("../components/Search");
var _searchDefault = parcelHelpers.interopDefault(_search);
var _movieList = require("../components/MovieList");
var _movieListDefault = parcelHelpers.interopDefault(_movieList);
var _movieListMore = require("../components/MovieListMore");
var _movieListMoreDefault = parcelHelpers.interopDefault(_movieListMore);
class Home extends (0, _youjun.Component) {
    render() {
        const headline = new (0, _headlineDefault.default)().el;
        const search = new (0, _searchDefault.default)().el;
        const movieList = new (0, _movieListDefault.default)().el;
        const movieListMore = new (0, _movieListMoreDefault.default)().el;
        this.el.classList.add("container");
        this.el.append(headline, search, movieList, movieListMore);
    }
}
exports.default = Home;

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/Headline":"gaVgo","../components/Search":"jqPPz","../components/MovieList":"8UDl3","../components/MovieListMore":"3ZUar"}],"gaVgo":[function(require,module,exports) {
//! Home.js
// home 화면에 쓰일 headline을 구성한다.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
class Headline extends (0, _youjun.Component) {
    render() {
        this.el.classList.add("headline");
        this.el.innerHTML = /* html */ `
      <h1>
        <span>OMDb API</span><br />
        THE OPEN<br />
        MOVIES DATABASE
      </h1>
			<p>
  			The OMDb API is a RESTful web service to obtain movie information,
  			all content and images on the site are contributed and maintained by our users.<br />
  			If you find this service useful, please consider making a one-time donation or become a patron.
			</p>
        `;
    }
}
exports.default = Headline;

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqPPz":[function(require,module,exports) {
//! Search.js
// home 화면의 search 컴포넌트를 구성한다.
// 검색결과에 따른 movie 데이터를 지정해야 하는 만큼
// store 폴더에 있는 movie.js와 연결한다.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class Search extends (0, _youjun.Component) {
    render() {
        this.el.classList.add("search");
        this.el.innerHTML = /* html */ `
    <!-- value 요소를 지정해서 뒤로가기를 진행했을 때 검색창에 입력된 값이 초기화되지 않도록 한다.  -->
					<input value="${(0, _movieDefault.default).state.searchText}" placeholder="Enter the movie title to search!" />
					<button class="btn btn-primary">
						Search!
					</button>
        `;
        const inputEl = this.el.querySelector("input");
        inputEl.addEventListener("input", ()=>{
            // input 값을 movie 검색 api에 전송한다.
            (0, _movieDefault.default).state.searchText = inputEl.value;
        });
        inputEl.addEventListener("keydown", (event)=>{
            if (event.key === "Enter" && (0, _movieDefault.default).state.searchText.trim()) // trim() => 앞 뒤 공백문자 제거
            // 검색!
            (0, _movie.searchMovies)(1);
        });
        const btnEl = this.el.querySelector(".btn");
        btnEl.addEventListener("click", ()=>{
            if ((0, _movieDefault.default).state.searchText.trim()) // trim() => 앞 뒤 공백문자 제거
            // 검색!
            (0, _movie.searchMovies)(1);
        });
    }
}
exports.default = Search;

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../store/movie":"kq1bo"}],"kq1bo":[function(require,module,exports) {
//! movie.js
// 계속해서 변화될 수 있는 movie 데이터를 지정하고 상황에 따라 가공한다.
// 사용할 movie 데이터의 형식을 결정하고 이 형식에 영향을 줄 수 있는 함수를 가진다.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchMovies", ()=>searchMovies);
parcelHelpers.export(exports, "getMovieDetails", ()=>getMovieDetails);
var _youjun = require("../core/youjun");
// 검색할 영화 입력 받기
const store = new (0, _youjun.Store)({
    // this.state에 저장
    searchText: "",
    page: 1,
    pageMax: 1,
    movies: [],
    movie: {},
    loading: false,
    message: "Search for the movie title!"
});
exports.default = store;
const searchMovies = async (page)=>{
    store.state.loading = true;
    store.state.page = page; // 더보기를 눌렀을 때 +1 이 된 page 값이 저장된다.
    // 새로운 검색 이벤트가 발생했을 때(page = 1이 지정됐을 때) 기존 배열에 저장된 내용을 초기화 한다.
    if (page === 1) {
        store.state.movies = [];
        store.state.message = "";
    }
    // error를 핸들링할 수 있게 만들어서 (네트워크 에러때문에) javascript가 멈추는 일이 없게 한다.
    try {
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`);
        const { Search , totalResults , Response , Error  } = await res.json();
        if (Response === "True") {
            // 페이지 내용을 축적한다.
            store.state.movies = [
                ...store.state.movies,
                ...Search
            ];
            // totalResults 라는 변수를 통해 최대 출력 가능한 page를 확인한다.
            store.state.pageMax = Math.ceil(Number(totalResults) / 10);
        } else store.state.message = Error;
    } catch (error) {
        console.log("searchMovies error:", error);
    } finally{
        store.state.loading = false;
    }
};
const getMovieDetails = async (id)=>{
    try {
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`);
        store.state.movie = await res.json();
    } catch (error) {
        console.log("getMovieDetails error:", error);
    }
};

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UDl3":[function(require,module,exports) {
//! MovieList.js
// home 화면의 movie list 컴포넌트를 구성한다.
// movieStore의 상태를 추적하다가 변화되는 값(입력된 값)이 있으면
// Search.js => movie.js => youjun.js 를 거쳐 나온
// movieStore.state.movies에 저장된 값을 보여준다.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
var _movieItem = require("./MovieItem");
var _movieItemDefault = parcelHelpers.interopDefault(_movieItem);
class MovieList extends (0, _youjun.Component) {
    // constructor를 만들어서 어떤 조건이 발생되면 movieStore.subscribe가 작동될 수 있도록(새로 검색할 때마다 웹페이지가 갱신될 수 있도록) 한다.
    constructor(){
        super();
        // movieStore에 저장된 값 중에서 movies 라는 대상을 감시한다.
        // 새로 movies가 갱신될 때마다 다시 render() 된다.
        (0, _movieDefault.default).subscribe("movies", ()=>{
            this.render();
        });
        (0, _movieDefault.default).subscribe("loading", ()=>{
            this.render();
        });
        (0, _movieDefault.default).subscribe("message", ()=>{
            this.render();
        });
    }
    render() {
        this.el.classList.add("movie-list");
        this.el.innerHTML = /* html */ `
        ${(0, _movieDefault.default).state.message ? `<div class="message">${(0, _movieDefault.default).state.message}</div>` : '<div class="movies"></div>'}
        <div class="the-loader hide"></div>
        `;
        const moviesEl = this.el.querySelector(".movies");
        // 에러 제거
        moviesEl?.append(...(0, _movieDefault.default).state.movies.map((movie)=>new (0, _movieItemDefault.default)({
                movie
            }).el // movie = movie : movie
        ));
        const loaderEl = this.el.querySelector(".the-loader");
        (0, _movieDefault.default).state.loading ? loaderEl.classList.remove("hide") : loaderEl.classList.add("hide");
    }
} //! 위와 같이 constructor를 지정한 이유
 /*
class Polygon {
    constructor() {
      this.name = 'Polygon';
      this.render()
    }
    render() {
      console.log('hello')
      this.name = this.name.concat('-wow')
    }
  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);
  */  // console.log =>
 // "hello"
 // "Polygon-wow"
 //* 해석 :
 // 위의 내용처럼 hello가 먼저 출력된 후 "Polygon"이 나온다.
 // 즉, constructor에 지정된 함수가 실행된 후 나온 결과를 바탕으로 constructor에 정의된 변수들의 상태를 변경하여 결과를 보여주는 것이다.
 // 이는 class의 constructor를 사용하면 사용할(지정된) 변수들을 다양한 함수를 통해 수정하고 new (className)을 통해 결과물을 얻을 수 있다는 것이다.
 // 상황에 따라 변화되는 데이터를 나타낼 시 보여줄 초기 세팅을 이룬다음에 어떤 특정 조건이 달성되었을 때 subscribe 와 같은 함수를 통해 가공된 데이터를 보여줄 수 있는 것이다.
exports.default = MovieList;

},{"../core/youjun":"4Gvzt","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./MovieItem":"fAzE8"}],"fAzE8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
class MovieItem extends (0, _youjun.Component) {
    // 부모 컴포넌트(MovieList.js)를 통해 데이터를 받아서 사용하겠다. => props
    constructor(props){
        super({
            props,
            tagName: "a"
        });
    }
    render() {
        // console.log('this is state:' + JSON.stringify(this.state));
        console.log("this is props:" + JSON.stringify(this.props));
        const { movie  } = this.props;
        this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`);
        this.el.classList.add("movie");
        // img 태그로 출력하게 되면 각각 다른 Poster의 크기 때문에 layout이 깨질 수 있다.
        // 그래서 아래 코드 같이 지정한 후 a 태그의 크기를 결정해 통일한다.
        this.el.style.backgroundImage = `url(${movie.Poster})`;
        this.el.innerHTML = /* html */ `
    <div class="info">
        <div class="year">
            ${movie.Year}
        </div>
        <div class="title">
            ${movie.Title}
        </div>
    </div>
    `;
    }
}
exports.default = MovieItem;

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ZUar":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class MovieListMore extends (0, _youjun.Component) {
    constructor(){
        super({
            tagName: "button"
        });
        // 더보기 버튼을 상황에 따라 보여주는 함수
        // pageMax가 새로 갱신될 때 마다
        (0, _movieDefault.default).subscribe("pageMax", ()=>{
            const { page , pageMax  } = (0, _movieDefault.default).state;
            pageMax > page ? this.el.classList.remove("hide") : this.el.classList.add("hide");
        });
    }
    render() {
        this.el.classList.add("btn", "view-more", "hide");
        this.el.textContent = "View more..";
        this.el.addEventListener("click", async ()=>{
            // 영화 데이터가 존재하지 않을 시 '더보기' 버튼이 보여지는 것을 방지한다.
            this.el.classList.add("hide");
            await (0, _movie.searchMovies)((0, _movieDefault.default).state.page + 1);
        });
    }
}
exports.default = MovieListMore;

},{"../core/youjun":"4Gvzt","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LTyN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class Movie extends (0, _youjun.Component) {
    async render() {
        this.el.classList.add("container", "the-movie");
        // skeleton을 넣기 위해 표시할 부분을 지정해준다.
        this.el.innerHTML = /* html */ `
      <div class="poster skeleton"></div>
        <div class="specs">
          <div class="title skeleton"></div>
          <div class="labels skeleton"></div>
          <div class="plot skeleton"></div>
        </div>
    `;
        await (0, _movie.getMovieDetails)(history.state.id);
        // router 기능을 통해 history의 state에 객체데이터로 저장했기 때문에 위와 같이 데이터를 가져 올 수 있다.
        console.log((0, _movieDefault.default).state.movie);
        const { movie  } = (0, _movieDefault.default).state;
        // 이미지 리사이징
        const bigPoster = movie.Poster.replace("SX300", "SX700");
        this.el.innerHTML = /* html */ `
    <div style="background-image: url(${bigPoster})" class="poster"></div>
    <div class="specs">
      <div class="title">${movie.Title}</div>
      <div class="labels">
        <span>${movie.Released}</span>
        <!-- &nbsp; = 띄어쓰기 특수기호 -->
        &nbsp;/&nbsp;
        <span>${movie.Runtime}</span>
        &nbsp;/&nbsp;
        <span>${movie.Country}</span>
      </div>
      <div class="plot">${movie.Plot}</div>
      <div>
        <h3>Ratings</h3>
        ${movie.Ratings.map((rating)=>{
            return `<p>${rating.Source} - ${rating.Value}</p>`;
        }).join("")}
      </div>
      <div>
        <h3>Actors</h3>
        <p>${movie.Actors}</p>
      </div>
      <div>
        <h3>Director</h3>
        <p>${movie.Director}</p>
      </div>
      <div>
        <h3>Production</h3>
        <p>${movie.Production}</p>
      </div>
      <div>
        <h3>Genre</h3>
        <p>${movie.Genre}</p>
      </div>
    </div>
    `;
    }
}
exports.default = Movie;

},{"../core/youjun":"4Gvzt","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdB30":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
var _about = require("../store/about");
var _aboutDefault = parcelHelpers.interopDefault(_about);
class About extends (0, _youjun.Component) {
    render() {
        const { photo , name , email , github , blog  } = (0, _aboutDefault.default).state;
        this.el.classList.add("container", "about");
        this.el.innerHTML = /* html */ `
      <div style="background-image: url(${photo});" class="photo"></div>
      <p class="name">${name}</p>
      <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">${email}</a></p>
      <p><a href="${github}" target="_blank">GitHub</a></p>
      <p><a href="${blog}" target="_blank">Blog</a></p>
    `;
    }
}
exports.default = About;

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../store/about":"4RAJO"}],"4fDiL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _youjun = require("../core/youjun");
class NotFound extends (0, _youjun.Component) {
    render() {
        this.el.classList.add("container", "not-found");
        this.el.innerHTML = /* html */ `
    <h1>
      Sorry.. <br>
      Page Not Found
    </h1>
    `;
    }
}
exports.default = NotFound;

},{"../core/youjun":"4Gvzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["f3BSW","gLLPy"], "gLLPy", "parcelRequire6588")

//# sourceMappingURL=index.4d6bcbeb.js.map
