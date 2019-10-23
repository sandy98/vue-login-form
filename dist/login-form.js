/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "7ddf");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0ac3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_login_form_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ee0c");
/* harmony import */ var _usr_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_login_form_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_login_form_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _usr_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_login_form_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _usr_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_login_form_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_login_form_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1179":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "1942":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("7c27")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "1a30":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("9544")(false);
// imports


// module
exports.push([module.i, ".login-form{display:flex;flex-direction:column;justify-content:space-between;width:90%;height:50%;max-height:50%;min-height:50%;margin:0 auto;margin-top:30px;padding:.3em;border:1px solid;border-radius:8px;background:#eee;box-shadow:4px 6px #708090}.header-title{width:100%;text-align:center;background:inherit;color:#4682b4;border-bottom:1px solid}.form-row{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:1em;padding-right:1em;margin-top:auto;margin-bottom:.5em}.form-row label{font-weight:700;color:#888}.form-row input{padding-left:10px;height:2em;width:50%}.feedback{color:red;text-align:center}.white-fg{color:#f5f5f5}.blue{background:#4682b4}.red{background:#8b0000}.btn{padding:.75em;font-weight:700;border-radius:8px;opacity:.85;border-collapse:collapse;border-style:none;cursor:pointer}.btn:hover{opacity:.99}@media only screen and (min-width:1048px){.login-form{width:33%}}", ""]);

// exports


/***/ }),

/***/ "1ced":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("4e37");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "20a6":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "47b2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fbeb");

/***/ }),

/***/ "4e37":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "59b7":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("20a6");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "65cf":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "6af4":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("4e37");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6b64":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "7832":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("fdf9");
var core = __webpack_require__("65cf");
var ctx = __webpack_require__("59b7");
var hide = __webpack_require__("bd30");
var has = __webpack_require__("1179");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "7c27":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7ddf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("9544");

// EXTERNAL MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("dd77");

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b5c12f96-vue-loader-template"}!/usr/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./login-form.vue?vue&type=template&id=3d63d4c9&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-form",on:{"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.doLogin($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.resetVals($event)}]}},[_c('div',{staticClass:"header-title"},[_c('h3',[_vm._v(_vm._s(_vm.headerTitle))])]),_c('div',{staticClass:"form-row"},[_c('label',[_vm._v(_vm._s(_vm.emailLabel))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],ref:"emailInput",attrs:{"type":"text","placeholder":"email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_c('div',{staticClass:"form-row"},[_c('label',[_vm._v(_vm._s(_vm.passwordLabel))]),((_vm.muestra)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],ref:"passwordInput",attrs:{"placeholder":"password","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.password)?_vm._i(_vm.password,null)>-1:(_vm.password)},on:{"change":function($event){var $$a=_vm.password,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.password=$$a.concat([$$v]))}else{$$i>-1&&(_vm.password=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.password=$$c}}}}):((_vm.muestra)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],ref:"passwordInput",attrs:{"placeholder":"password","type":"radio"},domProps:{"checked":_vm._q(_vm.password,null)},on:{"change":function($event){_vm.password=null}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],ref:"passwordInput",attrs:{"placeholder":"password","type":_vm.muestra},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_c('p',{staticStyle:{"padding-right":"1em","text-align":"right"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.showPassword),expression:"showPassword"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.showPassword)?_vm._i(_vm.showPassword,null)>-1:(_vm.showPassword)},on:{"change":function($event){var $$a=_vm.showPassword,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.showPassword=$$a.concat([$$v]))}else{$$i>-1&&(_vm.showPassword=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.showPassword=$$c}}}}),_c('label',{staticStyle:{"font-weight":"lighter","font-size":"9pt"}},[_vm._v("\n        "+_vm._s(_vm.showPasswordLabel)+"\n      ")])]),_c('div',{staticClass:"form-row",staticStyle:{"justify-content":"center"}},[(_vm.feedback)?_c('p',{staticClass:"feedback"},[_vm._v(_vm._s(_vm.feedback))]):_c('p')]),_c('div',{staticClass:"form-row"},[_c('button',{staticClass:"btn white-fg red",on:{"click":_vm.resetVals}},[_vm._v(_vm._s(_vm.resetText))]),_c('button',{staticClass:"btn white-fg blue",on:{"click":_vm.doLogin}},[_vm._v(_vm._s(_vm.loginText))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./login-form.vue?vue&type=template&id=3d63d4c9&shadow

// EXTERNAL MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("47b2");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./login-form.vue?vue&type=script&lang=js&shadow

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_login_formvue_type_script_lang_js_shadow = ({
  name: 'LoginForm',
  props: {
    headerTitle: {
      type: String,
      default: 'Formulario de Ingreso'
    },
    resetText: {
      type: String,
      default: 'Borrar'
    },
    loginText: {
      type: String,
      default: 'Ingresar'
    },
    passwordLabel: {
      type: String,
      default: 'Contraseña'
    },
    emailLabel: {
      type: String,
      default: 'Correo'
    },
    showPasswordLabel: {
      type: String,
      default: 'Mostrar contraseña'
    },
    feedbackText: {
      type: String
    }
  },

  data() {
    return {
      email: null,
      password: null,
      feedback: null,
      showPassword: false
    };
  },

  methods: {
    showMail() {
      /*
      console.clear()
      console.log(this.email)
      console.log("")
      */
    },

    resetVals() {
      this.email = null, this.password = null;
    },

    doLogin() {
      if (!this.email || !this.password) {
        this.feedback = this.feedbackText || "Debe incluir email y password";

        if (!this.email) {
          this.$refs.emailInput.focus();
        } else {
          this.$refs.passwordInput.focus();
        }

        return;
      }

      this.feedback = null;
      this.$emit('login', {
        email: this.email,
        password: this.password
      }, now_default()()); //setTimeout(() => alert(`email: ${this.email} - password: ${this.password}`), 0)
    }

  },
  computed: {
    muestra() {
      return this.showPassword ? "text" : "password";
    }

  }
});
// CONCATENATED MODULE: ./login-form.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var login_formvue_type_script_lang_js_shadow = (lib_vue_loader_options_login_formvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./login-form.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("0ac3")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  login_formvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var login_formshadow = (component.exports);
// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('login-form', vue_wc_wrapper(external_Vue_default.a, login_formshadow))

/***/ }),

/***/ "82d1":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("4e37");
var document = __webpack_require__("fdf9").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "9544":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "9814":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("1ced");
var IE8_DOM_DEFINE = __webpack_require__("d227");
var toPrimitive = __webpack_require__("6af4");
var dP = Object.defineProperty;

exports.f = __webpack_require__("1942") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "bd30":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("9814");
var createDesc = __webpack_require__("6b64");
module.exports = __webpack_require__("1942") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "d227":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("1942") && !__webpack_require__("7c27")(function () {
  return Object.defineProperty(__webpack_require__("82d1")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "dd77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "e6bd":
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__("7832");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "ee0c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1a30");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("dd77").default
module.exports.__inject__ = function (shadowRoot) {
  add("c18cddee", content, shadowRoot)
};

/***/ }),

/***/ "fbeb":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("e6bd");
module.exports = __webpack_require__("65cf").Date.now;


/***/ }),

/***/ "fdf9":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ })

/******/ });
//# sourceMappingURL=login-form.js.map