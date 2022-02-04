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
})({"d5kvp":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"igcvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _helloWorldJson = require("../contract/build/contracts/HelloWorld.json");
var _helloWorldJsonDefault = parcelHelpers.interopDefault(_helloWorldJson);
console.log("Script running!");
var web3 = new Web3(Web3.givenProvider);
const contractAddress = "0xbF7d6767d06021517650124234BdEC19C2507de6";
web3.eth.requestAccounts().then((result1)=>{
    console.log(result1);
    document.getElementById("readbutton").onclick = ()=>{
        const helloworld = new web3.eth.Contract(_helloWorldJsonDefault.default.abi, contractAddress);
        helloworld.methods.greet().call().then((result)=>{
            document.getElementById("greeting").textContent = result;
        });
    };
    document.getElementById("writebutton").onclick = ()=>{
        const helloworld = new web3.eth.Contract(_helloWorldJsonDefault.default.abi, contractAddress);
        helloworld.methods.setWhat("hello saturn").send({
            from: result1[0]
        }).then((result)=>{
            console.log(result);
        });
    };
});

},{"../contract/build/contracts/HelloWorld.json":"fle98","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fle98":[function(require,module,exports) {
module.exports = JSON.parse("{\"contractName\":\"HelloWorld\",\"abi\":[{\"inputs\":[],\"name\":\"greet\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"newWhat\",\"type\":\"string\"}],\"name\":\"setWhat\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.8.11+commit.d7f03943\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"name\\\":\\\"greet\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"newWhat\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"setWhat\\\",\\\"outputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"project:/contracts/HelloWorld.sol\\\":\\\"HelloWorld\\\"},\\\"evmVersion\\\":\\\"london\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"project:/contracts/HelloWorld.sol\\\":{\\\"keccak256\\\":\\\"0x7fa2aa632ce4efe2288bf75f891ecaf36e8eb91e157ddf48d69d6769aa9a3401\\\",\\\"license\\\":\\\"MIT\\\",\\\"urls\\\":[\\\"bzz-raw://64b2e5010333cf9ad76a27efe039d6fcf823acec842241d26f06cf4263498544\\\",\\\"dweb:/ipfs/QmP6Hzz3Bjn71Znqc2zTwz2gFXuEWos3EpmhLXGkGKdGJi\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x60806040526040518060400160405280600b81526020017f68656c6c6f20776f726c640000000000000000000000000000000000000000008152506000908051906020019061004f929190610062565b5034801561005c57600080fd5b50610166565b82805461006e90610134565b90600052602060002090601f01602090048101928261009057600085556100d7565b82601f106100a957805160ff19168380011785556100d7565b828001600101855582156100d7579182015b828111156100d65782518255916020019190600101906100bb565b5b5090506100e491906100e8565b5090565b5b808211156101015760008160009055506001016100e9565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061014c57607f821691505b602082108114156101605761015f610105565b5b50919050565b6104a8806101756000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806361e6ff161461003b578063cfae321714610057575b600080fd5b6100556004803603810190610050919061031e565b610075565b005b61005f61008f565b60405161006c91906103ef565b60405180910390f35b806000908051906020019061008b929190610121565b5050565b60606000805461009e90610440565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610440565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b5050505050905090565b82805461012d90610440565b90600052602060002090601f01602090048101928261014f5760008555610196565b82601f1061016857805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019557825182559160200191906001019061017a565b5b5090506101a391906101a7565b5090565b5b808211156101c05760008160009055506001016101a8565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61022b826101e2565b810181811067ffffffffffffffff8211171561024a576102496101f3565b5b80604052505050565b600061025d6101c4565b90506102698282610222565b919050565b600067ffffffffffffffff821115610289576102886101f3565b5b610292826101e2565b9050602081019050919050565b82818337600083830152505050565b60006102c16102bc8461026e565b610253565b9050828152602081018484840111156102dd576102dc6101dd565b5b6102e884828561029f565b509392505050565b600082601f830112610305576103046101d8565b5b81356103158482602086016102ae565b91505092915050565b600060208284031215610334576103336101ce565b5b600082013567ffffffffffffffff811115610352576103516101d3565b5b61035e848285016102f0565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103a1578082015181840152602081019050610386565b838111156103b0576000848401525b50505050565b60006103c182610367565b6103cb8185610372565b93506103db818560208601610383565b6103e4816101e2565b840191505092915050565b6000602082019050818103600083015261040981846103b6565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045857607f821691505b6020821081141561046c5761046b610411565b5b5091905056fea26469706673582212203b0ea144ca349c8bdcb987b61704a30452aa7c770813a587fe39c85b7e9128b564736f6c634300080b0033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100365760003560e01c806361e6ff161461003b578063cfae321714610057575b600080fd5b6100556004803603810190610050919061031e565b610075565b005b61005f61008f565b60405161006c91906103ef565b60405180910390f35b806000908051906020019061008b929190610121565b5050565b60606000805461009e90610440565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610440565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b5050505050905090565b82805461012d90610440565b90600052602060002090601f01602090048101928261014f5760008555610196565b82601f1061016857805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019557825182559160200191906001019061017a565b5b5090506101a391906101a7565b5090565b5b808211156101c05760008160009055506001016101a8565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61022b826101e2565b810181811067ffffffffffffffff8211171561024a576102496101f3565b5b80604052505050565b600061025d6101c4565b90506102698282610222565b919050565b600067ffffffffffffffff821115610289576102886101f3565b5b610292826101e2565b9050602081019050919050565b82818337600083830152505050565b60006102c16102bc8461026e565b610253565b9050828152602081018484840111156102dd576102dc6101dd565b5b6102e884828561029f565b509392505050565b600082601f830112610305576103046101d8565b5b81356103158482602086016102ae565b91505092915050565b600060208284031215610334576103336101ce565b5b600082013567ffffffffffffffff811115610352576103516101d3565b5b61035e848285016102f0565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103a1578082015181840152602081019050610386565b838111156103b0576000848401525b50505050565b60006103c182610367565b6103cb8185610372565b93506103db818560208601610383565b6103e4816101e2565b840191505092915050565b6000602082019050818103600083015261040981846103b6565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045857607f821691505b6020821081141561046c5761046b610411565b5b5091905056fea26469706673582212203b0ea144ca349c8bdcb987b61704a30452aa7c770813a587fe39c85b7e9128b564736f6c634300080b0033\",\"immutableReferences\":{},\"generatedSources\":[{\"ast\":{\"nodeType\":\"YulBlock\",\"src\":\"0:516:2\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"35:152:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"52:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"55:77:2\",\"type\":\"\",\"value\":\"35408467139433450592217433187231851964531694900788300625387963629091585785856\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"45:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"45:88:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"45:88:2\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"149:1:2\",\"type\":\"\",\"value\":\"4\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"152:4:2\",\"type\":\"\",\"value\":\"0x22\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"142:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"142:15:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"142:15:2\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"173:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"176:4:2\",\"type\":\"\",\"value\":\"0x24\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"166:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"166:15:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"166:15:2\"}]},\"name\":\"panic_error_0x22\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"7:180:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"244:269:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"254:22:2\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"268:4:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"274:1:2\",\"type\":\"\",\"value\":\"2\"}],\"functionName\":{\"name\":\"div\",\"nodeType\":\"YulIdentifier\",\"src\":\"264:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"264:12:2\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"254:6:2\"}]},{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"285:38:2\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"315:4:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"321:1:2\",\"type\":\"\",\"value\":\"1\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"311:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"311:12:2\"},\"variables\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulTypedName\",\"src\":\"289:18:2\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"362:51:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"376:27:2\",\"value\":{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"390:6:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"398:4:2\",\"type\":\"\",\"value\":\"0x7f\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"386:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"386:17:2\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"376:6:2\"}]}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"342:18:2\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"335:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"335:26:2\"},\"nodeType\":\"YulIf\",\"src\":\"332:81:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"465:42:2\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x22\",\"nodeType\":\"YulIdentifier\",\"src\":\"479:16:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"479:18:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"479:18:2\"}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"429:18:2\"},{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"452:6:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"460:2:2\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"449:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"449:14:2\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"426:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"426:38:2\"},\"nodeType\":\"YulIf\",\"src\":\"423:84:2\"}]},\"name\":\"extract_byte_array_length\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"data\",\"nodeType\":\"YulTypedName\",\"src\":\"228:4:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"237:6:2\",\"type\":\"\"}],\"src\":\"193:320:2\"}]},\"contents\":\"{\\n\\n    function panic_error_0x22() {\\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\\n        mstore(4, 0x22)\\n        revert(0, 0x24)\\n    }\\n\\n    function extract_byte_array_length(data) -> length {\\n        length := div(data, 2)\\n        let outOfPlaceEncoding := and(data, 1)\\n        if iszero(outOfPlaceEncoding) {\\n            length := and(length, 0x7f)\\n        }\\n\\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\\n            panic_error_0x22()\\n        }\\n    }\\n\\n}\\n\",\"id\":2,\"language\":\"Yul\",\"name\":\"#utility.yul\"}],\"deployedGeneratedSources\":[{\"ast\":{\"nodeType\":\"YulBlock\",\"src\":\"0:4854:2\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"47:35:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"57:19:2\",\"value\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"73:2:2\",\"type\":\"\",\"value\":\"64\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"67:5:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"67:9:2\"},\"variableNames\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"57:6:2\"}]}]},\"name\":\"allocate_unbounded\",\"nodeType\":\"YulFunctionDefinition\",\"returnVariables\":[{\"name\":\"memPtr\",\"nodeType\":\"YulTypedName\",\"src\":\"40:6:2\",\"type\":\"\"}],\"src\":\"7:75:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"177:28:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"194:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"197:1:2\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"187:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"187:12:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"187:12:2\"}]},\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"88:117:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"300:28:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"317:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"320:1:2\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"310:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"310:12:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"310:12:2\"}]},\"name\":\"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"211:117:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"423:28:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"440:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"443:1:2\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"433:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"433:12:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"433:12:2\"}]},\"name\":\"revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"334:117:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"546:28:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"563:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"566:1:2\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"556:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"556:12:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"556:12:2\"}]},\"name\":\"revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"457:117:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"628:54:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"638:38:2\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"656:5:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"663:2:2\",\"type\":\"\",\"value\":\"31\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"652:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"652:14:2\"},{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"672:2:2\",\"type\":\"\",\"value\":\"31\"}],\"functionName\":{\"name\":\"not\",\"nodeType\":\"YulIdentifier\",\"src\":\"668:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"668:7:2\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"648:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"648:28:2\"},\"variableNames\":[{\"name\":\"result\",\"nodeType\":\"YulIdentifier\",\"src\":\"638:6:2\"}]}]},\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"611:5:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"result\",\"nodeType\":\"YulTypedName\",\"src\":\"621:6:2\",\"type\":\"\"}],\"src\":\"580:102:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"716:152:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"733:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"736:77:2\",\"type\":\"\",\"value\":\"35408467139433450592217433187231851964531694900788300625387963629091585785856\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"726:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"726:88:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"726:88:2\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"830:1:2\",\"type\":\"\",\"value\":\"4\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"833:4:2\",\"type\":\"\",\"value\":\"0x41\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"823:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"823:15:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"823:15:2\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"854:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"857:4:2\",\"type\":\"\",\"value\":\"0x24\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"847:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"847:15:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"847:15:2\"}]},\"name\":\"panic_error_0x41\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"688:180:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"917:238:2\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"927:58:2\",\"value\":{\"arguments\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"949:6:2\"},{\"arguments\":[{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"979:4:2\"}],\"functionName\":{\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulIdentifier\",\"src\":\"957:21:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"957:27:2\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"945:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"945:40:2\"},\"variables\":[{\"name\":\"newFreePtr\",\"nodeType\":\"YulTypedName\",\"src\":\"931:10:2\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1096:22:2\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x41\",\"nodeType\":\"YulIdentifier\",\"src\":\"1098:16:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1098:18:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1098:18:2\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"newFreePtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1039:10:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1051:18:2\",\"type\":\"\",\"value\":\"0xffffffffffffffff\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"1036:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1036:34:2\"},{\"arguments\":[{\"name\":\"newFreePtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1075:10:2\"},{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1087:6:2\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"1072:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1072:22:2\"}],\"functionName\":{\"name\":\"or\",\"nodeType\":\"YulIdentifier\",\"src\":\"1033:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1033:62:2\"},\"nodeType\":\"YulIf\",\"src\":\"1030:88:2\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1134:2:2\",\"type\":\"\",\"value\":\"64\"},{\"name\":\"newFreePtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1138:10:2\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"1127:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1127:22:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1127:22:2\"}]},\"name\":\"finalize_allocation\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"memPtr\",\"nodeType\":\"YulTypedName\",\"src\":\"903:6:2\",\"type\":\"\"},{\"name\":\"size\",\"nodeType\":\"YulTypedName\",\"src\":\"911:4:2\",\"type\":\"\"}],\"src\":\"874:281:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1202:88:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"1212:30:2\",\"value\":{\"arguments\":[],\"functionName\":{\"name\":\"allocate_unbounded\",\"nodeType\":\"YulIdentifier\",\"src\":\"1222:18:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1222:20:2\"},\"variableNames\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1212:6:2\"}]},{\"expression\":{\"arguments\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1271:6:2\"},{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"1279:4:2\"}],\"functionName\":{\"name\":\"finalize_allocation\",\"nodeType\":\"YulIdentifier\",\"src\":\"1251:19:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1251:33:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1251:33:2\"}]},\"name\":\"allocate_memory\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"size\",\"nodeType\":\"YulTypedName\",\"src\":\"1186:4:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"memPtr\",\"nodeType\":\"YulTypedName\",\"src\":\"1195:6:2\",\"type\":\"\"}],\"src\":\"1161:129:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1363:241:2\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1468:22:2\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x41\",\"nodeType\":\"YulIdentifier\",\"src\":\"1470:16:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1470:18:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1470:18:2\"}]},\"condition\":{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"1440:6:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1448:18:2\",\"type\":\"\",\"value\":\"0xffffffffffffffff\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"1437:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1437:30:2\"},\"nodeType\":\"YulIf\",\"src\":\"1434:56:2\"},{\"nodeType\":\"YulAssignment\",\"src\":\"1500:37:2\",\"value\":{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"1530:6:2\"}],\"functionName\":{\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulIdentifier\",\"src\":\"1508:21:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1508:29:2\"},\"variableNames\":[{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"1500:4:2\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"1574:23:2\",\"value\":{\"arguments\":[{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"1586:4:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1592:4:2\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1582:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1582:15:2\"},\"variableNames\":[{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"1574:4:2\"}]}]},\"name\":\"array_allocation_size_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"1347:6:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"size\",\"nodeType\":\"YulTypedName\",\"src\":\"1358:4:2\",\"type\":\"\"}],\"src\":\"1296:308:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1661:103:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"1684:3:2\"},{\"name\":\"src\",\"nodeType\":\"YulIdentifier\",\"src\":\"1689:3:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"1694:6:2\"}],\"functionName\":{\"name\":\"calldatacopy\",\"nodeType\":\"YulIdentifier\",\"src\":\"1671:12:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1671:30:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1671:30:2\"},{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"1742:3:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"1747:6:2\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1738:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1738:16:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1756:1:2\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"1731:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1731:27:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1731:27:2\"}]},\"name\":\"copy_calldata_to_memory\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"src\",\"nodeType\":\"YulTypedName\",\"src\":\"1643:3:2\",\"type\":\"\"},{\"name\":\"dst\",\"nodeType\":\"YulTypedName\",\"src\":\"1648:3:2\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"1653:6:2\",\"type\":\"\"}],\"src\":\"1610:154:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1854:328:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"1864:75:2\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"1931:6:2\"}],\"functionName\":{\"name\":\"array_allocation_size_t_string_memory_ptr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1889:41:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1889:49:2\"}],\"functionName\":{\"name\":\"allocate_memory\",\"nodeType\":\"YulIdentifier\",\"src\":\"1873:15:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1873:66:2\"},\"variableNames\":[{\"name\":\"array\",\"nodeType\":\"YulIdentifier\",\"src\":\"1864:5:2\"}]},{\"expression\":{\"arguments\":[{\"name\":\"array\",\"nodeType\":\"YulIdentifier\",\"src\":\"1955:5:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"1962:6:2\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"1948:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1948:21:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1948:21:2\"},{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"1978:27:2\",\"value\":{\"arguments\":[{\"name\":\"array\",\"nodeType\":\"YulIdentifier\",\"src\":\"1993:5:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2000:4:2\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1989:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1989:16:2\"},\"variables\":[{\"name\":\"dst\",\"nodeType\":\"YulTypedName\",\"src\":\"1982:3:2\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2043:83:2\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae\",\"nodeType\":\"YulIdentifier\",\"src\":\"2045:77:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2045:79:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2045:79:2\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"src\",\"nodeType\":\"YulIdentifier\",\"src\":\"2024:3:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"2029:6:2\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2020:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2020:16:2\"},{\"name\":\"end\",\"nodeType\":\"YulIdentifier\",\"src\":\"2038:3:2\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"2017:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2017:25:2\"},\"nodeType\":\"YulIf\",\"src\":\"2014:112:2\"},{\"expression\":{\"arguments\":[{\"name\":\"src\",\"nodeType\":\"YulIdentifier\",\"src\":\"2159:3:2\"},{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"2164:3:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"2169:6:2\"}],\"functionName\":{\"name\":\"copy_calldata_to_memory\",\"nodeType\":\"YulIdentifier\",\"src\":\"2135:23:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2135:41:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2135:41:2\"}]},\"name\":\"abi_decode_available_length_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"src\",\"nodeType\":\"YulTypedName\",\"src\":\"1827:3:2\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"1832:6:2\",\"type\":\"\"},{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"1840:3:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"array\",\"nodeType\":\"YulTypedName\",\"src\":\"1848:5:2\",\"type\":\"\"}],\"src\":\"1770:412:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2264:278:2\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2313:83:2\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d\",\"nodeType\":\"YulIdentifier\",\"src\":\"2315:77:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2315:79:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2315:79:2\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"2292:6:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2300:4:2\",\"type\":\"\",\"value\":\"0x1f\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2288:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2288:17:2\"},{\"name\":\"end\",\"nodeType\":\"YulIdentifier\",\"src\":\"2307:3:2\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"2284:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2284:27:2\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"2277:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2277:35:2\"},\"nodeType\":\"YulIf\",\"src\":\"2274:122:2\"},{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"2405:34:2\",\"value\":{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"2432:6:2\"}],\"functionName\":{\"name\":\"calldataload\",\"nodeType\":\"YulIdentifier\",\"src\":\"2419:12:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2419:20:2\"},\"variables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"2409:6:2\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"2448:88:2\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"2509:6:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2517:4:2\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2505:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2505:17:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"2524:6:2\"},{\"name\":\"end\",\"nodeType\":\"YulIdentifier\",\"src\":\"2532:3:2\"}],\"functionName\":{\"name\":\"abi_decode_available_length_t_string_memory_ptr\",\"nodeType\":\"YulIdentifier\",\"src\":\"2457:47:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2457:79:2\"},\"variableNames\":[{\"name\":\"array\",\"nodeType\":\"YulIdentifier\",\"src\":\"2448:5:2\"}]}]},\"name\":\"abi_decode_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"2242:6:2\",\"type\":\"\"},{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"2250:3:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"array\",\"nodeType\":\"YulTypedName\",\"src\":\"2258:5:2\",\"type\":\"\"}],\"src\":\"2202:340:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2624:433:2\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2670:83:2\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulIdentifier\",\"src\":\"2672:77:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2672:79:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2672:79:2\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"2645:7:2\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2654:9:2\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"2641:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2641:23:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2666:2:2\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"2637:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2637:32:2\"},\"nodeType\":\"YulIf\",\"src\":\"2634:119:2\"},{\"nodeType\":\"YulBlock\",\"src\":\"2763:287:2\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"2778:45:2\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2809:9:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2820:1:2\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2805:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2805:17:2\"}],\"functionName\":{\"name\":\"calldataload\",\"nodeType\":\"YulIdentifier\",\"src\":\"2792:12:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2792:31:2\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"2782:6:2\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2870:83:2\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db\",\"nodeType\":\"YulIdentifier\",\"src\":\"2872:77:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2872:79:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2872:79:2\"}]},\"condition\":{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"2842:6:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2850:18:2\",\"type\":\"\",\"value\":\"0xffffffffffffffff\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"2839:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2839:30:2\"},\"nodeType\":\"YulIf\",\"src\":\"2836:117:2\"},{\"nodeType\":\"YulAssignment\",\"src\":\"2967:73:2\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"3012:9:2\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"3023:6:2\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3008:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3008:22:2\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"3032:7:2\"}],\"functionName\":{\"name\":\"abi_decode_t_string_memory_ptr\",\"nodeType\":\"YulIdentifier\",\"src\":\"2977:30:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2977:63:2\"},\"variableNames\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"2967:6:2\"}]}]}]},\"name\":\"abi_decode_tuple_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"2594:9:2\",\"type\":\"\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulTypedName\",\"src\":\"2605:7:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"2617:6:2\",\"type\":\"\"}],\"src\":\"2548:509:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3122:40:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"3133:22:2\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"3149:5:2\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"3143:5:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3143:12:2\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3133:6:2\"}]}]},\"name\":\"array_length_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"3105:5:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"3115:6:2\",\"type\":\"\"}],\"src\":\"3063:99:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3264:73:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3281:3:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3286:6:2\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"3274:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3274:19:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3274:19:2\"},{\"nodeType\":\"YulAssignment\",\"src\":\"3302:29:2\",\"value\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3321:3:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3326:4:2\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3317:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3317:14:2\"},\"variableNames\":[{\"name\":\"updated_pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3302:11:2\"}]}]},\"name\":\"array_storeLengthForEncoding_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"3236:3:2\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"3241:6:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"updated_pos\",\"nodeType\":\"YulTypedName\",\"src\":\"3252:11:2\",\"type\":\"\"}],\"src\":\"3168:169:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3392:258:2\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"3402:10:2\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3411:1:2\",\"type\":\"\",\"value\":\"0\"},\"variables\":[{\"name\":\"i\",\"nodeType\":\"YulTypedName\",\"src\":\"3406:1:2\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3471:63:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"3496:3:2\"},{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"3501:1:2\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3492:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3492:11:2\"},{\"arguments\":[{\"arguments\":[{\"name\":\"src\",\"nodeType\":\"YulIdentifier\",\"src\":\"3515:3:2\"},{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"3520:1:2\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3511:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3511:11:2\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"3505:5:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3505:18:2\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"3485:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3485:39:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3485:39:2\"}]},\"condition\":{\"arguments\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"3432:1:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3435:6:2\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"3429:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3429:13:2\"},\"nodeType\":\"YulForLoop\",\"post\":{\"nodeType\":\"YulBlock\",\"src\":\"3443:19:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"3445:15:2\",\"value\":{\"arguments\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"3454:1:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3457:2:2\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3450:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3450:10:2\"},\"variableNames\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"3445:1:2\"}]}]},\"pre\":{\"nodeType\":\"YulBlock\",\"src\":\"3425:3:2\",\"statements\":[]},\"src\":\"3421:113:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3568:76:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"3618:3:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3623:6:2\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3614:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3614:16:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3632:1:2\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"3607:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3607:27:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3607:27:2\"}]},\"condition\":{\"arguments\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"3549:1:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3552:6:2\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"3546:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3546:13:2\"},\"nodeType\":\"YulIf\",\"src\":\"3543:101:2\"}]},\"name\":\"copy_memory_to_memory\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"src\",\"nodeType\":\"YulTypedName\",\"src\":\"3374:3:2\",\"type\":\"\"},{\"name\":\"dst\",\"nodeType\":\"YulTypedName\",\"src\":\"3379:3:2\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"3384:6:2\",\"type\":\"\"}],\"src\":\"3343:307:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3748:272:2\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"3758:53:2\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"3805:5:2\"}],\"functionName\":{\"name\":\"array_length_t_string_memory_ptr\",\"nodeType\":\"YulIdentifier\",\"src\":\"3772:32:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3772:39:2\"},\"variables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"3762:6:2\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"3820:78:2\",\"value\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3886:3:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3891:6:2\"}],\"functionName\":{\"name\":\"array_storeLengthForEncoding_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"3827:58:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3827:71:2\"},\"variableNames\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3820:3:2\"}]},{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"3933:5:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3940:4:2\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3929:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3929:16:2\"},{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3947:3:2\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3952:6:2\"}],\"functionName\":{\"name\":\"copy_memory_to_memory\",\"nodeType\":\"YulIdentifier\",\"src\":\"3907:21:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3907:52:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3907:52:2\"},{\"nodeType\":\"YulAssignment\",\"src\":\"3968:46:2\",\"value\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3979:3:2\"},{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4006:6:2\"}],\"functionName\":{\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulIdentifier\",\"src\":\"3984:21:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3984:29:2\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3975:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3975:39:2\"},\"variableNames\":[{\"name\":\"end\",\"nodeType\":\"YulIdentifier\",\"src\":\"3968:3:2\"}]}]},\"name\":\"abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"3729:5:2\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"3736:3:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"3744:3:2\",\"type\":\"\"}],\"src\":\"3656:364:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4144:195:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"4154:26:2\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"4166:9:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4177:2:2\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4162:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4162:18:2\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"4154:4:2\"}]},{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"4201:9:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4212:1:2\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4197:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4197:17:2\"},{\"arguments\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"4220:4:2\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"4226:9:2\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"4216:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4216:20:2\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"4190:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4190:47:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4190:47:2\"},{\"nodeType\":\"YulAssignment\",\"src\":\"4246:86:2\",\"value\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"4318:6:2\"},{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"4327:4:2\"}],\"functionName\":{\"name\":\"abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"4254:63:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4254:78:2\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"4246:4:2\"}]}]},\"name\":\"abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"4116:9:2\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"4128:6:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"4139:4:2\",\"type\":\"\"}],\"src\":\"4026:313:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4373:152:2\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4390:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4393:77:2\",\"type\":\"\",\"value\":\"35408467139433450592217433187231851964531694900788300625387963629091585785856\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"4383:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4383:88:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4383:88:2\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4487:1:2\",\"type\":\"\",\"value\":\"4\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4490:4:2\",\"type\":\"\",\"value\":\"0x22\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"4480:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4480:15:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4480:15:2\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4511:1:2\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4514:4:2\",\"type\":\"\",\"value\":\"0x24\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"4504:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4504:15:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4504:15:2\"}]},\"name\":\"panic_error_0x22\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"4345:180:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4582:269:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"4592:22:2\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"4606:4:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4612:1:2\",\"type\":\"\",\"value\":\"2\"}],\"functionName\":{\"name\":\"div\",\"nodeType\":\"YulIdentifier\",\"src\":\"4602:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4602:12:2\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4592:6:2\"}]},{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"4623:38:2\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"4653:4:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4659:1:2\",\"type\":\"\",\"value\":\"1\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"4649:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4649:12:2\"},\"variables\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulTypedName\",\"src\":\"4627:18:2\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4700:51:2\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"4714:27:2\",\"value\":{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4728:6:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4736:4:2\",\"type\":\"\",\"value\":\"0x7f\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"4724:3:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4724:17:2\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4714:6:2\"}]}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"4680:18:2\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"4673:6:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4673:26:2\"},\"nodeType\":\"YulIf\",\"src\":\"4670:81:2\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4803:42:2\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x22\",\"nodeType\":\"YulIdentifier\",\"src\":\"4817:16:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4817:18:2\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4817:18:2\"}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"4767:18:2\"},{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4790:6:2\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4798:2:2\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"4787:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4787:14:2\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"4764:2:2\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4764:38:2\"},\"nodeType\":\"YulIf\",\"src\":\"4761:84:2\"}]},\"name\":\"extract_byte_array_length\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"data\",\"nodeType\":\"YulTypedName\",\"src\":\"4566:4:2\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"4575:6:2\",\"type\":\"\"}],\"src\":\"4531:320:2\"}]},\"contents\":\"{\\n\\n    function allocate_unbounded() -> memPtr {\\n        memPtr := mload(64)\\n    }\\n\\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\\n        revert(0, 0)\\n    }\\n\\n    function round_up_to_mul_of_32(value) -> result {\\n        result := and(add(value, 31), not(31))\\n    }\\n\\n    function panic_error_0x41() {\\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\\n        mstore(4, 0x41)\\n        revert(0, 0x24)\\n    }\\n\\n    function finalize_allocation(memPtr, size) {\\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\\n        // protect against overflow\\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\\n        mstore(64, newFreePtr)\\n    }\\n\\n    function allocate_memory(size) -> memPtr {\\n        memPtr := allocate_unbounded()\\n        finalize_allocation(memPtr, size)\\n    }\\n\\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\\n        // Make sure we can allocate memory without overflow\\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\\n\\n        size := round_up_to_mul_of_32(length)\\n\\n        // add length slot\\n        size := add(size, 0x20)\\n\\n    }\\n\\n    function copy_calldata_to_memory(src, dst, length) {\\n        calldatacopy(dst, src, length)\\n        // clear end\\n        mstore(add(dst, length), 0)\\n    }\\n\\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\\n        mstore(array, length)\\n        let dst := add(array, 0x20)\\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\\n        copy_calldata_to_memory(src, dst, length)\\n    }\\n\\n    // string\\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\\n        let length := calldataload(offset)\\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\\n    }\\n\\n    function abi_decode_tuple_t_string_memory_ptr(headStart, dataEnd) -> value0 {\\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := calldataload(add(headStart, 0))\\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\\n\\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function array_length_t_string_memory_ptr(value) -> length {\\n\\n        length := mload(value)\\n\\n    }\\n\\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\\n        mstore(pos, length)\\n        updated_pos := add(pos, 0x20)\\n    }\\n\\n    function copy_memory_to_memory(src, dst, length) {\\n        let i := 0\\n        for { } lt(i, length) { i := add(i, 32) }\\n        {\\n            mstore(add(dst, i), mload(add(src, i)))\\n        }\\n        if gt(i, length)\\n        {\\n            // clear end\\n            mstore(add(dst, length), 0)\\n        }\\n    }\\n\\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\\n        let length := array_length_t_string_memory_ptr(value)\\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\\n        copy_memory_to_memory(add(value, 0x20), pos, length)\\n        end := add(pos, round_up_to_mul_of_32(length))\\n    }\\n\\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        mstore(add(headStart, 0), sub(tail, headStart))\\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\\n\\n    }\\n\\n    function panic_error_0x22() {\\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\\n        mstore(4, 0x22)\\n        revert(0, 0x24)\\n    }\\n\\n    function extract_byte_array_length(data) -> length {\\n        length := div(data, 2)\\n        let outOfPlaceEncoding := and(data, 1)\\n        if iszero(outOfPlaceEncoding) {\\n            length := and(length, 0x7f)\\n        }\\n\\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\\n            panic_error_0x22()\\n        }\\n    }\\n\\n}\\n\",\"id\":2,\"language\":\"Yul\",\"name\":\"#utility.yul\"}],\"sourceMap\":\"66:223:0:-:0;;;93:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;66:223;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:180:2:-;55:77;52:1;45:88;152:4;149:1;142:15;176:4;173:1;166:15;193:320;237:6;274:1;268:4;264:12;254:22;;321:1;315:4;311:12;342:18;332:81;;398:4;390:6;386:17;376:27;;332:81;460:2;452:6;449:14;429:18;426:38;423:84;;;479:18;;:::i;:::-;423:84;244:269;193:320;;;:::o;66:223:0:-;;;;;;;\",\"deployedSourceMap\":\"66:223:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;214:73;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;134:76;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;214:73;275:7;267:5;:15;;;;;;;;;;;;:::i;:::-;;214:73;:::o;134:76::-;172:13;200:5;193:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;134:76;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:2:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:154::-;1694:6;1689:3;1684;1671:30;1756:1;1747:6;1742:3;1738:16;1731:27;1610:154;;;:::o;1770:412::-;1848:5;1873:66;1889:49;1931:6;1889:49;:::i;:::-;1873:66;:::i;:::-;1864:75;;1962:6;1955:5;1948:21;2000:4;1993:5;1989:16;2038:3;2029:6;2024:3;2020:16;2017:25;2014:112;;;2045:79;;:::i;:::-;2014:112;2135:41;2169:6;2164:3;2159;2135:41;:::i;:::-;1854:328;1770:412;;;;;:::o;2202:340::-;2258:5;2307:3;2300:4;2292:6;2288:17;2284:27;2274:122;;2315:79;;:::i;:::-;2274:122;2432:6;2419:20;2457:79;2532:3;2524:6;2517:4;2509:6;2505:17;2457:79;:::i;:::-;2448:88;;2264:278;2202:340;;;;:::o;2548:509::-;2617:6;2666:2;2654:9;2645:7;2641:23;2637:32;2634:119;;;2672:79;;:::i;:::-;2634:119;2820:1;2809:9;2805:17;2792:31;2850:18;2842:6;2839:30;2836:117;;;2872:79;;:::i;:::-;2836:117;2977:63;3032:7;3023:6;3012:9;3008:22;2977:63;:::i;:::-;2967:73;;2763:287;2548:509;;;;:::o;3063:99::-;3115:6;3149:5;3143:12;3133:22;;3063:99;;;:::o;3168:169::-;3252:11;3286:6;3281:3;3274:19;3326:4;3321:3;3317:14;3302:29;;3168:169;;;;:::o;3343:307::-;3411:1;3421:113;3435:6;3432:1;3429:13;3421:113;;;3520:1;3515:3;3511:11;3505:18;3501:1;3496:3;3492:11;3485:39;3457:2;3454:1;3450:10;3445:15;;3421:113;;;3552:6;3549:1;3546:13;3543:101;;;3632:1;3623:6;3618:3;3614:16;3607:27;3543:101;3392:258;3343:307;;;:::o;3656:364::-;3744:3;3772:39;3805:5;3772:39;:::i;:::-;3827:71;3891:6;3886:3;3827:71;:::i;:::-;3820:78;;3907:52;3952:6;3947:3;3940:4;3933:5;3929:16;3907:52;:::i;:::-;3984:29;4006:6;3984:29;:::i;:::-;3979:3;3975:39;3968:46;;3748:272;3656:364;;;;:::o;4026:313::-;4139:4;4177:2;4166:9;4162:18;4154:26;;4226:9;4220:4;4216:20;4212:1;4201:9;4197:17;4190:47;4254:78;4327:4;4318:6;4254:78;:::i;:::-;4246:86;;4026:313;;;;:::o;4345:180::-;4393:77;4390:1;4383:88;4490:4;4487:1;4480:15;4514:4;4511:1;4504:15;4531:320;4575:6;4612:1;4606:4;4602:12;4592:22;;4659:1;4653:4;4649:12;4680:18;4670:81;;4736:4;4728:6;4724:17;4714:27;;4670:81;4798:2;4790:6;4787:14;4767:18;4764:38;4761:84;;;4817:18;;:::i;:::-;4761:84;4582:269;4531:320;;;:::o\",\"source\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.8.11 <0.9.0;\\n\\ncontract HelloWorld {\\n  \\n  string private _what = \\\"hello world\\\";\\n\\n  function greet() public view returns (string memory) {\\n    return _what;\\n  }\\n\\n  function setWhat(string memory newWhat) public {\\n    _what = newWhat;\\n  }\\n}\\n\",\"sourcePath\":\"/Users/tom/repo/web3-tech/contract/contracts/HelloWorld.sol\",\"ast\":{\"absolutePath\":\"project:/contracts/HelloWorld.sol\",\"exportedSymbols\":{\"HelloWorld\":[23]},\"id\":24,\"license\":\"MIT\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":1,\"literals\":[\"solidity\",\">=\",\"0.8\",\".11\",\"<\",\"0.9\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"32:32:0\"},{\"abstract\":false,\"baseContracts\":[],\"canonicalName\":\"HelloWorld\",\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":23,\"linearizedBaseContracts\":[23],\"name\":\"HelloWorld\",\"nameLocation\":\"75:10:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":4,\"mutability\":\"mutable\",\"name\":\"_what\",\"nameLocation\":\"108:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":23,\"src\":\"93:36:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string\"},\"typeName\":{\"id\":2,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"93:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":{\"hexValue\":\"68656c6c6f20776f726c64\",\"id\":3,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"116:13:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad\",\"typeString\":\"literal_string \\\"hello world\\\"\"},\"value\":\"hello world\"},\"visibility\":\"private\"},{\"body\":{\"id\":11,\"nodeType\":\"Block\",\"src\":\"187:23:0\",\"statements\":[{\"expression\":{\"id\":9,\"name\":\"_what\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4,\"src\":\"200:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"functionReturnParameters\":8,\"id\":10,\"nodeType\":\"Return\",\"src\":\"193:12:0\"}]},\"functionSelector\":\"cfae3217\",\"id\":12,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"greet\",\"nameLocation\":\"143:5:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":5,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"148:2:0\"},\"returnParameters\":{\"id\":8,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":12,\"src\":\"172:13:0\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":6,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"172:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"171:15:0\"},\"scope\":23,\"src\":\"134:76:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":21,\"nodeType\":\"Block\",\"src\":\"261:26:0\",\"statements\":[{\"expression\":{\"id\":19,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":17,\"name\":\"_what\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4,\"src\":\"267:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":18,\"name\":\"newWhat\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":14,\"src\":\"275:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"267:15:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":20,\"nodeType\":\"ExpressionStatement\",\"src\":\"267:15:0\"}]},\"functionSelector\":\"61e6ff16\",\"id\":22,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"setWhat\",\"nameLocation\":\"223:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":15,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":14,\"mutability\":\"mutable\",\"name\":\"newWhat\",\"nameLocation\":\"245:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":22,\"src\":\"231:21:0\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":13,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"231:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"230:23:0\"},\"returnParameters\":{\"id\":16,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"261:0:0\"},\"scope\":23,\"src\":\"214:73:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":24,\"src\":\"66:223:0\",\"usedErrors\":[]}],\"src\":\"32:258:0\"},\"legacyAST\":{\"absolutePath\":\"project:/contracts/HelloWorld.sol\",\"exportedSymbols\":{\"HelloWorld\":[23]},\"id\":24,\"license\":\"MIT\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":1,\"literals\":[\"solidity\",\">=\",\"0.8\",\".11\",\"<\",\"0.9\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"32:32:0\"},{\"abstract\":false,\"baseContracts\":[],\"canonicalName\":\"HelloWorld\",\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":23,\"linearizedBaseContracts\":[23],\"name\":\"HelloWorld\",\"nameLocation\":\"75:10:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":4,\"mutability\":\"mutable\",\"name\":\"_what\",\"nameLocation\":\"108:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":23,\"src\":\"93:36:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string\"},\"typeName\":{\"id\":2,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"93:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"value\":{\"hexValue\":\"68656c6c6f20776f726c64\",\"id\":3,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"116:13:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad\",\"typeString\":\"literal_string \\\"hello world\\\"\"},\"value\":\"hello world\"},\"visibility\":\"private\"},{\"body\":{\"id\":11,\"nodeType\":\"Block\",\"src\":\"187:23:0\",\"statements\":[{\"expression\":{\"id\":9,\"name\":\"_what\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4,\"src\":\"200:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"functionReturnParameters\":8,\"id\":10,\"nodeType\":\"Return\",\"src\":\"193:12:0\"}]},\"functionSelector\":\"cfae3217\",\"id\":12,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"greet\",\"nameLocation\":\"143:5:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":5,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"148:2:0\"},\"returnParameters\":{\"id\":8,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":12,\"src\":\"172:13:0\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":6,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"172:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"171:15:0\"},\"scope\":23,\"src\":\"134:76:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":21,\"nodeType\":\"Block\",\"src\":\"261:26:0\",\"statements\":[{\"expression\":{\"id\":19,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":17,\"name\":\"_what\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4,\"src\":\"267:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":18,\"name\":\"newWhat\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":14,\"src\":\"275:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"267:15:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":20,\"nodeType\":\"ExpressionStatement\",\"src\":\"267:15:0\"}]},\"functionSelector\":\"61e6ff16\",\"id\":22,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"setWhat\",\"nameLocation\":\"223:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":15,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":14,\"mutability\":\"mutable\",\"name\":\"newWhat\",\"nameLocation\":\"245:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":22,\"src\":\"231:21:0\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":13,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"231:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"230:23:0\"},\"returnParameters\":{\"id\":16,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"261:0:0\"},\"scope\":23,\"src\":\"214:73:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":24,\"src\":\"66:223:0\",\"usedErrors\":[]}],\"src\":\"32:258:0\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.8.11+commit.d7f03943.Emscripten.clang\"},\"networks\":{\"4\":{\"events\":{},\"links\":{},\"address\":\"0xbF7d6767d06021517650124234BdEC19C2507de6\",\"transactionHash\":\"0x540669738e8cfd1d56de2f2761cb6e7ec2376bbe4b2b1b18f537129aaaebc7bf\"}},\"schemaVersion\":\"3.4.4\",\"updatedAt\":\"2022-02-04T13:44:02.122Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}]},["d5kvp","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=index.5baa4167.js.map
