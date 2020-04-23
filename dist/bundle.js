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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/main.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../font/Abel-Regular.ttf */ "./src/assets/font/Abel-Regular.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Abel\", sans-serif;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  width: 100vw;\n  overflow-x: hidden;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  margin: 0;\n  background: #fafafa;\n}\n\n.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nhtml,\nbutton,\nlabel,\ninput {\n  font-family: sans-serif;\n  font-size: 16px;\n}\n\n.container {\n  position: relative;\n  width: calc(100% - 30px);\n  max-width: 1200px;\n  height: calc(100% - 102px);\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 25px auto 0;\n}\n\n.header {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #232323;\n}\n.header__inner {\n  height: 100%;\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .navigation {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .navigation > div {\n  color: #fff;\n  height: 100%;\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: color 0.15s ease-in;\n}\n.header__inner .navigation > div:hover, .header__inner .navigation > div:focus, .header__inner .navigation > div:active, .header__inner .navigation > div.active {\n  color: #1ee0eb;\n  background: #3d3d3d;\n}\n.header__inner .input-group {\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .input-group > label {\n  color: #fff;\n  padding-right: 15px;\n}\n.header__inner .btn {\n  color: #fff;\n  height: 100%;\n  padding: 0 15px;\n  border: none;\n  background: transparent;\n  transition: background-color, color 0.15s ease-in;\n  outline: none;\n  cursor: pointer;\n}\n.header__inner .btn:disabled, .header__inner .btn:disabled:hover {\n  color: grey;\n  background: transparent;\n  cursor: default;\n}\n.header__inner .btn:hover {\n  color: #1ee0eb;\n  background: #494949;\n}\n.header__inner .btn:focus, .header__inner .btn:active {\n  outline: none;\n}\n\n.block {\n  position: relative;\n  display: inline-block;\n  padding-top: 10px;\n  text-align: center;\n  color: #fff;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n  /* Hides the slider so that custom slider can be made */\n  width: 100%;\n  /* Specific width is required for Firefox. */\n  background: transparent;\n  /* Otherwise white in Chrome */\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\ninput[type=range]:focus {\n  outline: none;\n  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n/* Special styling for WebKit/Blink */\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: 1px solid #000000;\n  height: 20px;\n  width: 10px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n  margin-top: -7px;\n  /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  /* Add cool effects to your sliders! */\n}\n\n/* All the same stuff for Firefox */\ninput[type=range]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 20px;\n  width: 10px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n}\n\n/* All the same stuff for IE */\ninput[type=range]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #1ee0eb;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #14d6e1;\n}\n\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #1ee0eb;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  border-width: 16px 0;\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #11bbc5;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #1ee0eb;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: #1ee0eb;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #4de6ef;\n}\n\ninput[type=range]:disabled::-webkit-slider-thumb {\n  background-color: grey;\n  border-color: grey;\n  cursor: default;\n}\ninput[type=range]:disabled::-webkit-slider-runnable-track {\n  background-color: lightgrey;\n  cursor: default;\n}\ninput[type=range]:disabled::-moz-range-thumb {\n  background-color: grey;\n  border-color: grey;\n}\ninput[type=range]:disabled::-moz-range-track {\n  cursor: default;\n}\ninput[type=range]:disabled::-ms-thumb {\n  background-color: grey;\n  border-color: grey;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/font/Abel-Regular.ttf":
/*!******************************************!*\
  !*** ./src/assets/font/Abel-Regular.ttf ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e8b810b8f2364e791205d6f12c5be3bf.ttf");

/***/ }),

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/main.scss */ "./src/assets/sass/main.scss");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_sorting_visualizer_SortingVisualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sorting-visualizer/SortingVisualizer */ "./src/modules/sorting-visualizer/SortingVisualizer.js");
/* harmony import */ var _modules_sortingAlgorithms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sortingAlgorithms */ "./src/modules/sortingAlgorithms/index.js");




const sortAlgorithms = {
  bubble: {
    name: "Bubble Sort",
    func: _modules_sortingAlgorithms__WEBPACK_IMPORTED_MODULE_2__["bubbleSort"],
  },
  merge: {
    name: "Merge Sort",
    func: _modules_sortingAlgorithms__WEBPACK_IMPORTED_MODULE_2__["mergeSort"],
  },
  quick: {
    name: "Quick Sort",
    func: _modules_sortingAlgorithms__WEBPACK_IMPORTED_MODULE_2__["quickSort"],
  },
};

const sortingVisualizer = new _modules_sorting_visualizer_SortingVisualizer__WEBPACK_IMPORTED_MODULE_1__["default"](
  sortAlgorithms,
  "container",
  1200,
  600,
  4,
  50
);
sortingVisualizer.initialize();


/***/ }),

/***/ "./src/modules/helpers/asyncDelay.js":
/*!*******************************************!*\
  !*** ./src/modules/helpers/asyncDelay.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
});


/***/ }),

/***/ "./src/modules/helpers/block.js":
/*!**************************************!*\
  !*** ./src/modules/helpers/block.js ***!
  \**************************************/
/*! exports provided: createBlock, getAllBlocks, visualizeSwapBlocks, updateBlock, setBlockBackground, updateBlocksFromArray, createValuesArrFromBlocks, visualizeBlocks, visualizeBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlock", function() { return createBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlocks", function() { return getAllBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualizeSwapBlocks", function() { return visualizeSwapBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlock", function() { return updateBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlockBackground", function() { return setBlockBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlocksFromArray", function() { return updateBlocksFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValuesArrFromBlocks", function() { return createValuesArrFromBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualizeBlocks", function() { return visualizeBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualizeBlock", function() { return visualizeBlock; });
const createBlock = (parentId, width, height, bgColor) => {
  const parent = document.getElementById(parentId);

  const block = document.createElement("div");
  block.style.width = `${width}px`;
  block.style.height = `${height}px`;
  block.style.marginRight = `${Math.floor(width / 5)}px`;
  block.style.fontSize = `${Math.floor(width / 5)}px`;
  block.style.backgroundColor = bgColor;
  block.classList = "block";

  if (width > 23) {
    block.innerText = height;
  }
  block.dataset.value = height;

  parent.appendChild(block);
};

const getAllBlocks = () => {
  const blocks = document.querySelectorAll(".block");
  return blocks;
};

const swapProperties = (block_1, block_2, speed) => {
  const tempValue_1 = block_1.dataset.value;
  const tempBgColor_1 = block_1.style.backgroundColor;

  const blockWidth = block_1.style.width.slice(0, 2);
  if (blockWidth > 23) {
    block_1.innerText = block_2.innerText;
    block_2.innerText = tempValue_1;
  }

  block_1.style.height = block_2.style.height;
  block_1.style.backgroundColor = block_2.style.backgroundColor;
  block_1.dataset.value = block_2.dataset.value;
  block_2.style.height = `${tempValue_1}px`;
  block_2.dataset.value = tempValue_1;
  block_2.style.backgroundColor = tempBgColor_1;
};

const visualizeSwapBlocks = async (block_1, block_2, speed) => {
  await new Promise((res, rej) => {
    window.requestAnimationFrame(() => {
      swapProperties(block_1, block_2, speed);
      setTimeout(res, speed);
    });
  });
};

const updateBlock = (block, value) => {
  block.dataset.value = value;
  block.style.height = `${value}px`;
};

const setBlockBackground = (block, color) => {
  block.style.backgroundColor = color;
};

const updateBlocksFromArray = (blocks, arr) => {
  for (let i = 0; i < arr.length; i++) {
    updateBlock(blocks[i], arr[i]);
  }
};

const createValuesArrFromBlocks = (blocks) => {
  const arr = [];
  blocks.forEach((elem) => arr.push(parseInt(elem.dataset.value, 10)));
  return arr;
};

const visualizeBlocks = (block_1, block_2, color, speed) => {
  return new Promise((res, rej) => {
    window.requestAnimationFrame(() => {
      block_1.style.backgroundColor = color;
      block_2.style.backgroundColor = color;
    });
    setTimeout(res, speed);
  });
};

const visualizeBlock = (block, color, speed) => {
  return new Promise((res, rej) => {
    window.requestAnimationFrame(() => {
      block.style.backgroundColor = color;
    });
    setTimeout(res, speed);
  });
};


/***/ }),

/***/ "./src/modules/helpers/colors.js":
/*!***************************************!*\
  !*** ./src/modules/helpers/colors.js ***!
  \***************************************/
/*! exports provided: redColor, greenColor, yellowColor, purpleColor, baseColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redColor", function() { return redColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenColor", function() { return greenColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellowColor", function() { return yellowColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purpleColor", function() { return purpleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseColor", function() { return baseColor; });
const redColor = "#ee554a";
const greenColor = "#69c653";
const yellowColor = "#f1e059";
const purpleColor = "purple";
const baseColor = "#4cc8ea";


/***/ }),

/***/ "./src/modules/helpers/getCurrentSpeed.js":
/*!************************************************!*\
  !*** ./src/modules/helpers/getCurrentSpeed.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const speed = parseInt(document.getElementById("speedVal").value, 10);
  return speed;
});


/***/ }),

/***/ "./src/modules/helpers/getRandomNum.js":
/*!*********************************************!*\
  !*** ./src/modules/helpers/getRandomNum.js ***!
  \*********************************************/
/*! exports provided: getRandomNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNum", function() { return getRandomNum; });
const getRandomNum = (min, max) => Math.floor(Math.random() * max) + min;


/***/ }),

/***/ "./src/modules/helpers/withEndVisualization.js":
/*!*****************************************************!*\
  !*** ./src/modules/helpers/withEndVisualization.js ***!
  \*****************************************************/
/*! exports provided: withEndVisualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEndVisualization", function() { return withEndVisualization; });
/* harmony import */ var _getCurrentSpeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentSpeed */ "./src/modules/helpers/getCurrentSpeed.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ "./src/modules/helpers/block.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ "./src/modules/helpers/colors.js");




const withEndVisualization = (func) => async (blocks, n, isStopped) => {
  await func(blocks, n, isStopped);

  if (isStopped()) return;

  const speed = Math.min(Object(_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_0__["default"])() + 1000 / n);
  for (let j = 0; j < n; j++) {
    await Object(_block__WEBPACK_IMPORTED_MODULE_1__["visualizeBlock"])(blocks[j], _colors__WEBPACK_IMPORTED_MODULE_2__["purpleColor"], speed);
  }
};


/***/ }),

/***/ "./src/modules/sorting-visualizer/SortingVisualizer.js":
/*!*************************************************************!*\
  !*** ./src/modules/sorting-visualizer/SortingVisualizer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/block */ "./src/modules/helpers/block.js");
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/colors */ "./src/modules/helpers/colors.js");
/* harmony import */ var _helpers_asyncDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/asyncDelay */ "./src/modules/helpers/asyncDelay.js");
/* harmony import */ var _helpers_getRandomNum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getRandomNum */ "./src/modules/helpers/getRandomNum.js");
/* harmony import */ var _helpers_withEndVisualization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/withEndVisualization */ "./src/modules/helpers/withEndVisualization.js");






class SortingVisualizer {
  constructor(algorithms, containerId, width, height, n, speed) {
    this.containerId = containerId;
    this.width = width;
    this.height = height;
    this.minHeight = 60;
    this.n = n;
    this.nMin = 4;
    this.nMax = 100;
    this.speed = speed;
    this.speedMin = 1;
    this.speedMax = 500;
    this.isSorting = false;
    this.isStop = false;
    this.algorithms = algorithms;
    this.currentAlgorithm = null;

    this.isStopped = this.isStopped.bind(this);
  }

  initialize() {
    this.createNav(this.algorithms);
    this.createBlocks(this.n);

    this.setInitialAlgorithm("bubble");

    this.addEventListeners();
    this.setRangeInputProperties();
  }

  addEventListeners() {
    this.addElementsValInputEventListeners();
    this.addBtnsEventListeners();
    this.addNavAlgoElemsEventListeners();
  }

  addElementsValInputEventListeners() {
    const elementsValInput = document.getElementById("elementsNum");

    elementsValInput.addEventListener("change", (e) => {
      const n = e.target.value;
      this.n = parseInt(n, 10);
      this.createBlocks(n);
    });
  }

  addBtnsEventListeners() {
    const sortBtn = document.getElementById("sortBtn");
    const stopBtn = document.getElementById("stopBtn");
    const randomizeBtn = document.getElementById("randomizeBtn");

    sortBtn.addEventListener("click", async (e) => {
      this.isStop = false;
      if (!this.isSorting) {
        this.handleIsSortingState(true);

        const blocks = document.querySelectorAll(".block");
        await this.prepareBlocksForSort(blocks);
        await this.currentAlgorithm(blocks, this.n, this.isStopped);

        this.handleIsSortingState(false);
      }
    });

    randomizeBtn.addEventListener("click", () => {
      if (!this.isSorting) {
        const blocks = document.querySelectorAll(".block");
        this.randomizeBlocks(blocks);
      }
    });

    stopBtn.addEventListener("click", () => {
      if (this.isSorting) {
        this.isStop = true;
        const blocks = document.querySelectorAll(".block");
        setTimeout(() => this.clearBlocksColor(blocks), 50);
      }
    });
  }

  addNavAlgoElemsEventListeners() {
    const elems = document.querySelectorAll(".nav-algorithm-js");

    elems.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        elems.forEach((elem) => elem.classList.remove("active"));
        e.target.classList.add("active");
        this.currentAlgorithm = this.algorithms[
          e.target.dataset.algorithmKey
        ].func;
      });
    });
  }

  setRangeInputProperties() {
    const elementsNumInput = document.getElementById("elementsNum");
    elementsNumInput.setAttribute("min", this.nMin);
    elementsNumInput.setAttribute("max", this.nMax);
    elementsNumInput.setAttribute("value", this.n);

    const speedValInput = document.getElementById("speedVal");
    speedValInput.setAttribute("min", this.speedMin);
    speedValInput.setAttribute("max", this.speedMax);
    speedValInput.setAttribute("value", this.speed);
    speedValInput.style.direction = "rtl";
  }

  setInitialAlgorithm(algoKey) {
    this.currentAlgorithm = this.algorithms[algoKey].func;
    const elems = document.querySelectorAll(".nav-algorithm-js");
    elems[0].classList.add("active");
  }

  handleIsSortingState(isSorting) {
    this.isSorting = isSorting;
    document.getElementById("sortBtn").disabled = isSorting;
    document.getElementById("randomizeBtn").disabled = isSorting;
    document.getElementById("elementsNum").disabled = isSorting;
  }

  createBlocks(n) {
    this.clearContainer();
    const blockWidth = Math.floor(this.width / n);

    for (let i = 0; i < n; i++) {
      Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(
        this.containerId,
        blockWidth,
        Object(_helpers_getRandomNum__WEBPACK_IMPORTED_MODULE_3__["getRandomNum"])(this.minHeight, this.height),
        _helpers_colors__WEBPACK_IMPORTED_MODULE_1__["baseColor"]
      );
    }
  }

  randomizeBlocks(blocks) {
    blocks.forEach((block) => {
      Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["updateBlock"])(block, Object(_helpers_getRandomNum__WEBPACK_IMPORTED_MODULE_3__["getRandomNum"])(this.minHeight, this.height));
      Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["setBlockBackground"])(block, _helpers_colors__WEBPACK_IMPORTED_MODULE_1__["baseColor"]);
    });
  }

  clearBlocksColor(blocks) {
    blocks.forEach((block) => {
      Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["setBlockBackground"])(block, _helpers_colors__WEBPACK_IMPORTED_MODULE_1__["baseColor"]);
    });
  }

  isStopped() {
    return this.isStop;
  }

  async prepareBlocksForSort(blocks) {
    blocks.forEach((block) => {
      Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["setBlockBackground"])(block, _helpers_colors__WEBPACK_IMPORTED_MODULE_1__["baseColor"]);
    });
    await Object(_helpers_asyncDelay__WEBPACK_IMPORTED_MODULE_2__["default"])(this.speed);
  }

  createNav(algorithms) {
    const nav = document.getElementById("nav");

    for (let [key, algo] of Object.entries(algorithms)) {
      const elem = document.createElement("div");
      elem.classList = "nav-algorithm-js";
      elem.innerText = algo.name;
      elem.dataset.algorithmKey = key;
      nav.appendChild(elem);
    }
  }

  clearContainer() {
    document.getElementById(this.containerId).innerHTML = "";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SortingVisualizer);


/***/ }),

/***/ "./src/modules/sortingAlgorithms/bubbleSort.js":
/*!*****************************************************!*\
  !*** ./src/modules/sortingAlgorithms/bubbleSort.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/block */ "./src/modules/helpers/block.js");
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/colors */ "./src/modules/helpers/colors.js");
/* harmony import */ var _helpers_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getCurrentSpeed */ "./src/modules/helpers/getCurrentSpeed.js");
/* harmony import */ var _helpers_withEndVisualization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/withEndVisualization */ "./src/modules/helpers/withEndVisualization.js");





const bubbleSort = async (blocks, n, isStopped) => {
  const arr = Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["createValuesArrFromBlocks"])(blocks);

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (isStopped()) return;
      const speed = Object(_helpers_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_2__["default"])();

      await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[i + 1], _helpers_colors__WEBPACK_IMPORTED_MODULE_1__["greenColor"], speed);
      if (arr[i] > arr[i + 1]) {
        await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[i + 1], _helpers_colors__WEBPACK_IMPORTED_MODULE_1__["redColor"], speed);

        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeSwapBlocks"])(blocks[i], blocks[i + 1], speed);

        swapped = true;
      }
      await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[i + 1], _helpers_colors__WEBPACK_IMPORTED_MODULE_1__["baseColor"], speed);
    }
  } while (swapped);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_withEndVisualization__WEBPACK_IMPORTED_MODULE_3__["withEndVisualization"])(bubbleSort));


/***/ }),

/***/ "./src/modules/sortingAlgorithms/index.js":
/*!************************************************!*\
  !*** ./src/modules/sortingAlgorithms/index.js ***!
  \************************************************/
/*! exports provided: bubbleSort, mergeSort, quickSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bubbleSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubbleSort */ "./src/modules/sortingAlgorithms/bubbleSort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bubbleSort", function() { return _bubbleSort__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeSort */ "./src/modules/sortingAlgorithms/mergeSort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeSort", function() { return _mergeSort__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _quickSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickSort */ "./src/modules/sortingAlgorithms/quickSort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickSort", function() { return _quickSort__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/modules/sortingAlgorithms/mergeSort.js":
/*!****************************************************!*\
  !*** ./src/modules/sortingAlgorithms/mergeSort.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/block */ "./src/modules/helpers/block.js");
/* harmony import */ var _helpers_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getCurrentSpeed */ "./src/modules/helpers/getCurrentSpeed.js");
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/colors */ "./src/modules/helpers/colors.js");
/* harmony import */ var _helpers_withEndVisualization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/withEndVisualization */ "./src/modules/helpers/withEndVisualization.js");





const mergeSort = async (blocks, n, isStopped) => {
  const arr = Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["createValuesArrFromBlocks"])(blocks);
  const len = n;

  for (let size = 1; size <= len; size = size * 2) {
    for (let i = 0; i < len; i += 2 * size) {
      let left = i;
      let right = Math.min(size + i, len);
      let leftTo = right;
      let rightTo = Math.min(right + size, len);

      while (left < leftTo && right < rightTo) {
        if (isStopped()) return;
        const speed = Object(_helpers_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])();

        await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[left], blocks[right], _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["greenColor"], speed);

        if (arr[left] >= arr[right]) {
          await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[left], blocks[right], _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["redColor"], speed);

          arr.splice(left, 0, arr[right]);
          right++;
          left++;
          leftTo++;
          arr.splice(right, 1);

          await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(
            blocks[left - 1],
            blocks[right - 1],
            _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"],
            speed
          );
          Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["updateBlocksFromArray"])(blocks, arr);
        } else {
          left++;
          await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(
            blocks[left - 1],
            blocks[right],
            _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"],
            speed
          );
        }
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_withEndVisualization__WEBPACK_IMPORTED_MODULE_3__["withEndVisualization"])(mergeSort));


/***/ }),

/***/ "./src/modules/sortingAlgorithms/quickSort.js":
/*!****************************************************!*\
  !*** ./src/modules/sortingAlgorithms/quickSort.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/block */ "./src/modules/helpers/block.js");
/* harmony import */ var _helpers_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getCurrentSpeed */ "./src/modules/helpers/getCurrentSpeed.js");
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/colors */ "./src/modules/helpers/colors.js");
/* harmony import */ var _helpers_withEndVisualization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/withEndVisualization */ "./src/modules/helpers/withEndVisualization.js");





const partition = async (arr, start, end, blocks, isStopped) => {
  let i = start + 1;
  let piv = arr[start];

  await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlock"])(blocks[start], _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["yellowColor"], Object(_helpers_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])());

  for (let j = start + 1; j <= end; j++) {
    if (isStopped()) return;

    const speed = Object(_helpers_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])();

    await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[j], _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["greenColor"], speed);

    if (arr[j] < piv) {
      await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[j], _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["redColor"], speed);

      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      // Swap
      await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeSwapBlocks"])(blocks[i], blocks[j], speed);
      await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[j], _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"], speed);

      i++;
    } else {
      await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[j], _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"], speed);
    }
  }
  // Put pivot in its proper place
  const temp = arr[start];
  arr[start] = arr[i - 1];
  arr[i - 1] = temp;

  await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeSwapBlocks"])(blocks[start], blocks[i - 1], Object(_helpers_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])());
  await Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(
    blocks[start],
    blocks[i - 1],
    _helpers_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"],
    Object(_helpers_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])()
  );

  return i - 1;
};

const quickSortAlgo = async (arr, start, end, blocks, isStopped) => {
  if (start < end) {
    let pivotPos = await partition(arr, start, end, blocks, isStopped);
    if (isStopped()) return;

    await quickSortAlgo(arr, start, pivotPos - 1, blocks, isStopped);
    await quickSortAlgo(arr, pivotPos + 1, end, blocks, isStopped);
  }
};

const quickSort = async (blocks, n, isStopped) => {
  const arr = Object(_helpers_block__WEBPACK_IMPORTED_MODULE_0__["createValuesArrFromBlocks"])(blocks);

  await quickSortAlgo(arr, 0, n - 1, blocks, isStopped);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_withEndVisualization__WEBPACK_IMPORTED_MODULE_3__["withEndVisualization"])(quickSort));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9BYmVsLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Fzcy9tYWluLnNjc3M/MDhmMSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9hc3luY0RlbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hlbHBlcnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9nZXRDdXJyZW50U3BlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9nZXRSYW5kb21OdW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy93aXRoRW5kVmlzdWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nLXZpc3VhbGl6ZXIvU29ydGluZ1Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvYnViYmxlU29ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nQWxnb3JpdGhtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nQWxnb3JpdGhtcy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvcXVpY2tTb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRyxzQ0FBc0MsbUJBQU8sQ0FBQyxpSEFBeUQ7QUFDdkcsb0NBQW9DLG1CQUFPLENBQUMsb0VBQTBCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLHNDQUFzQyx5RUFBeUUscUJBQXFCLHVCQUF1QixHQUFHLEtBQUssMkJBQTJCLEdBQUcsVUFBVSxpQkFBaUIsdUJBQXVCLEdBQUcsVUFBVSxrQkFBa0IsZ0JBQWdCLGNBQWMsd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixzQkFBc0IsbUJB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsZ0ZBQXlCOztBQUV2QztBQUNBOztBQUVlLHlKQUFvQixXQUFXLEVBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ZvbnQvQWJlbC1SZWd1bGFyLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFiZWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5odG1sLFxcbmJ1dHRvbixcXG5sYWJlbCxcXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAycHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbn1cXG4uaGVhZGVyX19pbm5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXYge1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXY6aG92ZXIsIC5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2OmZvY3VzLCAuaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdjphY3RpdmUsIC5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2LmFjdGl2ZSB7XFxuICBjb2xvcjogIzFlZTBlYjtcXG4gIGJhY2tncm91bmQ6ICMzZDNkM2Q7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5pbnB1dC1ncm91cCB7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19pbm5lciAuaW5wdXQtZ3JvdXAgPiBsYWJlbCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5idG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuMTVzIGVhc2UtaW47XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVhZGVyX19pbm5lciAuYnRuOmRpc2FibGVkLCAuaGVhZGVyX19pbm5lciAuYnRuOmRpc2FibGVkOmhvdmVyIHtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5idG46aG92ZXIge1xcbiAgY29sb3I6ICMxZWUwZWI7XFxuICBiYWNrZ3JvdW5kOiAjNDk0OTQ5O1xcbn1cXG4uaGVhZGVyX19pbm5lciAuYnRuOmZvY3VzLCAuaGVhZGVyX19pbm5lciAuYnRuOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qIEhpZGVzIHRoZSBzbGlkZXIgc28gdGhhdCBjdXN0b20gc2xpZGVyIGNhbiBiZSBtYWRlICovXFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIFNwZWNpZmljIHdpZHRoIGlzIHJlcXVpcmVkIGZvciBGaXJlZm94LiAqL1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAvKiBPdGhlcndpc2Ugd2hpdGUgaW4gQ2hyb21lICovXFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAvKiBSZW1vdmVzIHRoZSBibHVlIGJvcmRlci4gWW91IHNob3VsZCBwcm9iYWJseSBkbyBzb21lIGtpbmQgb2YgZm9jdXMgc3R5bGluZyBmb3IgYWNjZXNzaWJpbGl0eSByZWFzb25zIHRob3VnaC4gKi9cXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIEhpZGVzIHRoZSBzbGlkZXIgc28gY3VzdG9tIHN0eWxlcyBjYW4gYmUgYWRkZWQgKi9cXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogU3BlY2lhbCBzdHlsaW5nIGZvciBXZWJLaXQvQmxpbmsgKi9cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IC03cHg7XFxuICAvKiBZb3UgbmVlZCB0byBzcGVjaWZ5IGEgbWFyZ2luIGluIENocm9tZSwgYnV0IGluIEZpcmVmb3ggYW5kIElFIGl0IGlzIGF1dG9tYXRpYyAqL1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIC8qIEFkZCBjb29sIGVmZmVjdHMgdG8geW91ciBzbGlkZXJzISAqL1xcbn1cXG5cXG4vKiBBbGwgdGhlIHNhbWUgc3R1ZmYgZm9yIEZpcmVmb3ggKi9cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiB7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQWxsIHRoZSBzYW1lIHN0dWZmIGZvciBJRSAqL1xcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWIge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJhY2tncm91bmQ6ICMxZWUwZWI7XFxuICBib3JkZXItcmFkaXVzOiAxLjNweDtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzAxMDEwMTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICMxNGQ2ZTE7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbiAgYmFja2dyb3VuZDogIzFlZTBlYjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuM3B4O1xcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMDEwMTAxO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDE2cHggMDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLWxvd2VyIHtcXG4gIGJhY2tncm91bmQ6ICMxMWJiYzU7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XFxuICBib3JkZXItcmFkaXVzOiAyLjZweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC1sb3dlciB7XFxuICBiYWNrZ3JvdW5kOiAjMWVlMGViO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXIge1xcbiAgYmFja2dyb3VuZDogIzFlZTBlYjtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzAxMDEwMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLXVwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICM0ZGU2ZWY7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmRpc2FibGVkOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LW1vei1yYW5nZS10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LW1vei1yYW5nZS10cmFjayB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdOmRpc2FibGVkOjotbXMtdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlOGI4MTBiOGYyMzY0ZTc5MTIwNWQ2ZjEyYzViZTNiZi50dGZcIjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgXCIuL2Fzc2V0cy9zYXNzL21haW4uc2Nzc1wiO1xuaW1wb3J0IFNvcnRpbmdWaXN1YWxpemVyIGZyb20gXCIuL21vZHVsZXMvc29ydGluZy12aXN1YWxpemVyL1NvcnRpbmdWaXN1YWxpemVyXCI7XG5pbXBvcnQgeyBidWJibGVTb3J0LCBtZXJnZVNvcnQsIHF1aWNrU29ydCB9IGZyb20gXCIuL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXNcIjtcblxuY29uc3Qgc29ydEFsZ29yaXRobXMgPSB7XG4gIGJ1YmJsZToge1xuICAgIG5hbWU6IFwiQnViYmxlIFNvcnRcIixcbiAgICBmdW5jOiBidWJibGVTb3J0LFxuICB9LFxuICBtZXJnZToge1xuICAgIG5hbWU6IFwiTWVyZ2UgU29ydFwiLFxuICAgIGZ1bmM6IG1lcmdlU29ydCxcbiAgfSxcbiAgcXVpY2s6IHtcbiAgICBuYW1lOiBcIlF1aWNrIFNvcnRcIixcbiAgICBmdW5jOiBxdWlja1NvcnQsXG4gIH0sXG59O1xuXG5jb25zdCBzb3J0aW5nVmlzdWFsaXplciA9IG5ldyBTb3J0aW5nVmlzdWFsaXplcihcbiAgc29ydEFsZ29yaXRobXMsXG4gIFwiY29udGFpbmVyXCIsXG4gIDEyMDAsXG4gIDYwMCxcbiAgNCxcbiAgNTBcbik7XG5zb3J0aW5nVmlzdWFsaXplci5pbml0aWFsaXplKCk7XG4iLCJleHBvcnQgZGVmYXVsdCAobXMpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUJsb2NrID0gKHBhcmVudElkLCB3aWR0aCwgaGVpZ2h0LCBiZ0NvbG9yKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKTtcblxuICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsb2NrLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICBibG9jay5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICBibG9jay5zdHlsZS5tYXJnaW5SaWdodCA9IGAke01hdGguZmxvb3Iod2lkdGggLyA1KX1weGA7XG4gIGJsb2NrLnN0eWxlLmZvbnRTaXplID0gYCR7TWF0aC5mbG9vcih3aWR0aCAvIDUpfXB4YDtcbiAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmdDb2xvcjtcbiAgYmxvY2suY2xhc3NMaXN0ID0gXCJibG9ja1wiO1xuXG4gIGlmICh3aWR0aCA+IDIzKSB7XG4gICAgYmxvY2suaW5uZXJUZXh0ID0gaGVpZ2h0O1xuICB9XG4gIGJsb2NrLmRhdGFzZXQudmFsdWUgPSBoZWlnaHQ7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxCbG9ja3MgPSAoKSA9PiB7XG4gIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tcIik7XG4gIHJldHVybiBibG9ja3M7XG59O1xuXG5jb25zdCBzd2FwUHJvcGVydGllcyA9IChibG9ja18xLCBibG9ja18yLCBzcGVlZCkgPT4ge1xuICBjb25zdCB0ZW1wVmFsdWVfMSA9IGJsb2NrXzEuZGF0YXNldC52YWx1ZTtcbiAgY29uc3QgdGVtcEJnQ29sb3JfMSA9IGJsb2NrXzEuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuXG4gIGNvbnN0IGJsb2NrV2lkdGggPSBibG9ja18xLnN0eWxlLndpZHRoLnNsaWNlKDAsIDIpO1xuICBpZiAoYmxvY2tXaWR0aCA+IDIzKSB7XG4gICAgYmxvY2tfMS5pbm5lclRleHQgPSBibG9ja18yLmlubmVyVGV4dDtcbiAgICBibG9ja18yLmlubmVyVGV4dCA9IHRlbXBWYWx1ZV8xO1xuICB9XG5cbiAgYmxvY2tfMS5zdHlsZS5oZWlnaHQgPSBibG9ja18yLnN0eWxlLmhlaWdodDtcbiAgYmxvY2tfMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBibG9ja18yLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgYmxvY2tfMS5kYXRhc2V0LnZhbHVlID0gYmxvY2tfMi5kYXRhc2V0LnZhbHVlO1xuICBibG9ja18yLnN0eWxlLmhlaWdodCA9IGAke3RlbXBWYWx1ZV8xfXB4YDtcbiAgYmxvY2tfMi5kYXRhc2V0LnZhbHVlID0gdGVtcFZhbHVlXzE7XG4gIGJsb2NrXzIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGVtcEJnQ29sb3JfMTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aXN1YWxpemVTd2FwQmxvY2tzID0gYXN5bmMgKGJsb2NrXzEsIGJsb2NrXzIsIHNwZWVkKSA9PiB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3dhcFByb3BlcnRpZXMoYmxvY2tfMSwgYmxvY2tfMiwgc3BlZWQpO1xuICAgICAgc2V0VGltZW91dChyZXMsIHNwZWVkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQmxvY2sgPSAoYmxvY2ssIHZhbHVlKSA9PiB7XG4gIGJsb2NrLmRhdGFzZXQudmFsdWUgPSB2YWx1ZTtcbiAgYmxvY2suc3R5bGUuaGVpZ2h0ID0gYCR7dmFsdWV9cHhgO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEJsb2NrQmFja2dyb3VuZCA9IChibG9jaywgY29sb3IpID0+IHtcbiAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQmxvY2tzRnJvbUFycmF5ID0gKGJsb2NrcywgYXJyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdXBkYXRlQmxvY2soYmxvY2tzW2ldLCBhcnJbaV0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVmFsdWVzQXJyRnJvbUJsb2NrcyA9IChibG9ja3MpID0+IHtcbiAgY29uc3QgYXJyID0gW107XG4gIGJsb2Nrcy5mb3JFYWNoKChlbGVtKSA9PiBhcnIucHVzaChwYXJzZUludChlbGVtLmRhdGFzZXQudmFsdWUsIDEwKSkpO1xuICByZXR1cm4gYXJyO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpc3VhbGl6ZUJsb2NrcyA9IChibG9ja18xLCBibG9ja18yLCBjb2xvciwgc3BlZWQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgYmxvY2tfMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgIGJsb2NrXzIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChyZXMsIHNwZWVkKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdmlzdWFsaXplQmxvY2sgPSAoYmxvY2ssIGNvbG9yLCBzcGVlZCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KHJlcywgc3BlZWQpO1xuICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgcmVkQ29sb3IgPSBcIiNlZTU1NGFcIjtcbmV4cG9ydCBjb25zdCBncmVlbkNvbG9yID0gXCIjNjljNjUzXCI7XG5leHBvcnQgY29uc3QgeWVsbG93Q29sb3IgPSBcIiNmMWUwNTlcIjtcbmV4cG9ydCBjb25zdCBwdXJwbGVDb2xvciA9IFwicHVycGxlXCI7XG5leHBvcnQgY29uc3QgYmFzZUNvbG9yID0gXCIjNGNjOGVhXCI7XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHNwZWVkID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGVlZFZhbFwiKS52YWx1ZSwgMTApO1xuICByZXR1cm4gc3BlZWQ7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldFJhbmRvbU51bSA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pbjtcbiIsImltcG9ydCBnZXRDdXJyZW50U3BlZWQgZnJvbSBcIi4vZ2V0Q3VycmVudFNwZWVkXCI7XG5pbXBvcnQgeyB2aXN1YWxpemVCbG9jayB9IGZyb20gXCIuL2Jsb2NrXCI7XG5pbXBvcnQgeyBwdXJwbGVDb2xvciB9IGZyb20gXCIuL2NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3Qgd2l0aEVuZFZpc3VhbGl6YXRpb24gPSAoZnVuYykgPT4gYXN5bmMgKGJsb2NrcywgbiwgaXNTdG9wcGVkKSA9PiB7XG4gIGF3YWl0IGZ1bmMoYmxvY2tzLCBuLCBpc1N0b3BwZWQpO1xuXG4gIGlmIChpc1N0b3BwZWQoKSkgcmV0dXJuO1xuXG4gIGNvbnN0IHNwZWVkID0gTWF0aC5taW4oZ2V0Q3VycmVudFNwZWVkKCkgKyAxMDAwIC8gbik7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgYXdhaXQgdmlzdWFsaXplQmxvY2soYmxvY2tzW2pdLCBwdXJwbGVDb2xvciwgc3BlZWQpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQmxvY2ssIHVwZGF0ZUJsb2NrLCBzZXRCbG9ja0JhY2tncm91bmQgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja1wiO1xuaW1wb3J0IHsgYmFzZUNvbG9yIH0gZnJvbSBcIi4uL2hlbHBlcnMvY29sb3JzXCI7XG5pbXBvcnQgYXN5bmNEZWxheSBmcm9tIFwiLi4vaGVscGVycy9hc3luY0RlbGF5XCI7XG5pbXBvcnQgeyBnZXRSYW5kb21OdW0gfSBmcm9tIFwiLi4vaGVscGVycy9nZXRSYW5kb21OdW1cIjtcbmltcG9ydCB7IHdpdGhFbmRWaXN1YWxpemF0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvd2l0aEVuZFZpc3VhbGl6YXRpb25cIjtcblxuY2xhc3MgU29ydGluZ1Zpc3VhbGl6ZXIge1xuICBjb25zdHJ1Y3RvcihhbGdvcml0aG1zLCBjb250YWluZXJJZCwgd2lkdGgsIGhlaWdodCwgbiwgc3BlZWQpIHtcbiAgICB0aGlzLmNvbnRhaW5lcklkID0gY29udGFpbmVySWQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubWluSGVpZ2h0ID0gNjA7XG4gICAgdGhpcy5uID0gbjtcbiAgICB0aGlzLm5NaW4gPSA0O1xuICAgIHRoaXMubk1heCA9IDEwMDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5zcGVlZE1pbiA9IDE7XG4gICAgdGhpcy5zcGVlZE1heCA9IDUwMDtcbiAgICB0aGlzLmlzU29ydGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG4gICAgdGhpcy5hbGdvcml0aG1zID0gYWxnb3JpdGhtcztcbiAgICB0aGlzLmN1cnJlbnRBbGdvcml0aG0gPSBudWxsO1xuXG4gICAgdGhpcy5pc1N0b3BwZWQgPSB0aGlzLmlzU3RvcHBlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmNyZWF0ZU5hdih0aGlzLmFsZ29yaXRobXMpO1xuICAgIHRoaXMuY3JlYXRlQmxvY2tzKHRoaXMubik7XG5cbiAgICB0aGlzLnNldEluaXRpYWxBbGdvcml0aG0oXCJidWJibGVcIik7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zZXRSYW5nZUlucHV0UHJvcGVydGllcygpO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5hZGRFbGVtZW50c1ZhbElucHV0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZEJ0bnNFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkTmF2QWxnb0VsZW1zRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFkZEVsZW1lbnRzVmFsSW5wdXRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBlbGVtZW50c1ZhbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50c051bVwiKTtcblxuICAgIGVsZW1lbnRzVmFsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5uID0gcGFyc2VJbnQobiwgMTApO1xuICAgICAgdGhpcy5jcmVhdGVCbG9ja3Mobik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRCdG5zRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgc29ydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ0blwiKTtcbiAgICBjb25zdCBzdG9wQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9wQnRuXCIpO1xuICAgIGNvbnN0IHJhbmRvbWl6ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZG9taXplQnRuXCIpO1xuXG4gICAgc29ydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG4gICAgICBpZiAoIXRoaXMuaXNTb3J0aW5nKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlSXNTb3J0aW5nU3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja1wiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVwYXJlQmxvY2tzRm9yU29ydChibG9ja3MpO1xuICAgICAgICBhd2FpdCB0aGlzLmN1cnJlbnRBbGdvcml0aG0oYmxvY2tzLCB0aGlzLm4sIHRoaXMuaXNTdG9wcGVkKTtcblxuICAgICAgICB0aGlzLmhhbmRsZUlzU29ydGluZ1N0YXRlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJhbmRvbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzU29ydGluZykge1xuICAgICAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrXCIpO1xuICAgICAgICB0aGlzLnJhbmRvbWl6ZUJsb2NrcyhibG9ja3MpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNTb3J0aW5nKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja1wiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsZWFyQmxvY2tzQ29sb3IoYmxvY2tzKSwgNTApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkTmF2QWxnb0VsZW1zRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hbGdvcml0aG0tanNcIik7XG5cbiAgICBlbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlbGVtcy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLmN1cnJlbnRBbGdvcml0aG0gPSB0aGlzLmFsZ29yaXRobXNbXG4gICAgICAgICAgZS50YXJnZXQuZGF0YXNldC5hbGdvcml0aG1LZXlcbiAgICAgICAgXS5mdW5jO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRSYW5nZUlucHV0UHJvcGVydGllcygpIHtcbiAgICBjb25zdCBlbGVtZW50c051bUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50c051bVwiKTtcbiAgICBlbGVtZW50c051bUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCB0aGlzLm5NaW4pO1xuICAgIGVsZW1lbnRzTnVtSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIHRoaXMubk1heCk7XG4gICAgZWxlbWVudHNOdW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0aGlzLm4pO1xuXG4gICAgY29uc3Qgc3BlZWRWYWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BlZWRWYWxcIik7XG4gICAgc3BlZWRWYWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdGhpcy5zcGVlZE1pbik7XG4gICAgc3BlZWRWYWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgdGhpcy5zcGVlZE1heCk7XG4gICAgc3BlZWRWYWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0aGlzLnNwZWVkKTtcbiAgICBzcGVlZFZhbElucHV0LnN0eWxlLmRpcmVjdGlvbiA9IFwicnRsXCI7XG4gIH1cblxuICBzZXRJbml0aWFsQWxnb3JpdGhtKGFsZ29LZXkpIHtcbiAgICB0aGlzLmN1cnJlbnRBbGdvcml0aG0gPSB0aGlzLmFsZ29yaXRobXNbYWxnb0tleV0uZnVuYztcbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWFsZ29yaXRobS1qc1wiKTtcbiAgICBlbGVtc1swXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgaGFuZGxlSXNTb3J0aW5nU3RhdGUoaXNTb3J0aW5nKSB7XG4gICAgdGhpcy5pc1NvcnRpbmcgPSBpc1NvcnRpbmc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0QnRuXCIpLmRpc2FibGVkID0gaXNTb3J0aW5nO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZG9taXplQnRuXCIpLmRpc2FibGVkID0gaXNTb3J0aW5nO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudHNOdW1cIikuZGlzYWJsZWQgPSBpc1NvcnRpbmc7XG4gIH1cblxuICBjcmVhdGVCbG9ja3Mobikge1xuICAgIHRoaXMuY2xlYXJDb250YWluZXIoKTtcbiAgICBjb25zdCBibG9ja1dpZHRoID0gTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY3JlYXRlQmxvY2soXG4gICAgICAgIHRoaXMuY29udGFpbmVySWQsXG4gICAgICAgIGJsb2NrV2lkdGgsXG4gICAgICAgIGdldFJhbmRvbU51bSh0aGlzLm1pbkhlaWdodCwgdGhpcy5oZWlnaHQpLFxuICAgICAgICBiYXNlQ29sb3JcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmFuZG9taXplQmxvY2tzKGJsb2Nrcykge1xuICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgdXBkYXRlQmxvY2soYmxvY2ssIGdldFJhbmRvbU51bSh0aGlzLm1pbkhlaWdodCwgdGhpcy5oZWlnaHQpKTtcbiAgICAgIHNldEJsb2NrQmFja2dyb3VuZChibG9jaywgYmFzZUNvbG9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyQmxvY2tzQ29sb3IoYmxvY2tzKSB7XG4gICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBzZXRCbG9ja0JhY2tncm91bmQoYmxvY2ssIGJhc2VDb2xvcik7XG4gICAgfSk7XG4gIH1cblxuICBpc1N0b3BwZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTdG9wO1xuICB9XG5cbiAgYXN5bmMgcHJlcGFyZUJsb2Nrc0ZvclNvcnQoYmxvY2tzKSB7XG4gICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBzZXRCbG9ja0JhY2tncm91bmQoYmxvY2ssIGJhc2VDb2xvcik7XG4gICAgfSk7XG4gICAgYXdhaXQgYXN5bmNEZWxheSh0aGlzLnNwZWVkKTtcbiAgfVxuXG4gIGNyZWF0ZU5hdihhbGdvcml0aG1zKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5cbiAgICBmb3IgKGxldCBba2V5LCBhbGdvXSBvZiBPYmplY3QuZW50cmllcyhhbGdvcml0aG1zKSkge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdCA9IFwibmF2LWFsZ29yaXRobS1qc1wiO1xuICAgICAgZWxlbS5pbm5lclRleHQgPSBhbGdvLm5hbWU7XG4gICAgICBlbGVtLmRhdGFzZXQuYWxnb3JpdGhtS2V5ID0ga2V5O1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyQ29udGFpbmVyKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySWQpLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29ydGluZ1Zpc3VhbGl6ZXI7XG4iLCJpbXBvcnQge1xuICB2aXN1YWxpemVTd2FwQmxvY2tzLFxuICB2aXN1YWxpemVCbG9ja3MsXG4gIGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MsXG59IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2NrXCI7XG5pbXBvcnQgeyBncmVlbkNvbG9yLCByZWRDb2xvciwgYmFzZUNvbG9yIH0gZnJvbSBcIi4uL2hlbHBlcnMvY29sb3JzXCI7XG5pbXBvcnQgZ2V0Q3VycmVudFNwZWVkIGZyb20gXCIuLi9oZWxwZXJzL2dldEN1cnJlbnRTcGVlZFwiO1xuaW1wb3J0IHsgd2l0aEVuZFZpc3VhbGl6YXRpb24gfSBmcm9tIFwiLi4vaGVscGVycy93aXRoRW5kVmlzdWFsaXphdGlvblwiO1xuXG5jb25zdCBidWJibGVTb3J0ID0gYXN5bmMgKGJsb2NrcywgbiwgaXNTdG9wcGVkKSA9PiB7XG4gIGNvbnN0IGFyciA9IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MoYmxvY2tzKTtcblxuICBsZXQgc3dhcHBlZDtcblxuICBkbyB7XG4gICAgc3dhcHBlZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgaWYgKGlzU3RvcHBlZCgpKSByZXR1cm47XG4gICAgICBjb25zdCBzcGVlZCA9IGdldEN1cnJlbnRTcGVlZCgpO1xuXG4gICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3NbaSArIDFdLCBncmVlbkNvbG9yLCBzcGVlZCk7XG4gICAgICBpZiAoYXJyW2ldID4gYXJyW2kgKyAxXSkge1xuICAgICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3NbaSArIDFdLCByZWRDb2xvciwgc3BlZWQpO1xuXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgIGFycltpXSA9IGFycltpICsgMV07XG4gICAgICAgIGFycltpICsgMV0gPSB0ZW1wO1xuXG4gICAgICAgIGF3YWl0IHZpc3VhbGl6ZVN3YXBCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3NbaSArIDFdLCBzcGVlZCk7XG5cbiAgICAgICAgc3dhcHBlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3NbaSArIDFdLCBiYXNlQ29sb3IsIHNwZWVkKTtcbiAgICB9XG4gIH0gd2hpbGUgKHN3YXBwZWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVuZFZpc3VhbGl6YXRpb24oYnViYmxlU29ydCk7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGJ1YmJsZVNvcnQgfSBmcm9tIFwiLi9idWJibGVTb3J0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlU29ydCB9IGZyb20gXCIuL21lcmdlU29ydFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBxdWlja1NvcnQgfSBmcm9tIFwiLi9xdWlja1NvcnRcIjtcbiIsImltcG9ydCB7XG4gIHZpc3VhbGl6ZUJsb2NrcyxcbiAgdXBkYXRlQmxvY2tzRnJvbUFycmF5LFxuICBjcmVhdGVWYWx1ZXNBcnJGcm9tQmxvY2tzLFxufSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja1wiO1xuaW1wb3J0IGdldEN1cnJlbnRTcGVlZCBmcm9tIFwiLi4vaGVscGVycy9nZXRDdXJyZW50U3BlZWRcIjtcbmltcG9ydCB7IGdyZWVuQ29sb3IsIHJlZENvbG9yLCBiYXNlQ29sb3IgfSBmcm9tIFwiLi4vaGVscGVycy9jb2xvcnNcIjtcbmltcG9ydCB7IHdpdGhFbmRWaXN1YWxpemF0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvd2l0aEVuZFZpc3VhbGl6YXRpb25cIjtcblxuY29uc3QgbWVyZ2VTb3J0ID0gYXN5bmMgKGJsb2NrcywgbiwgaXNTdG9wcGVkKSA9PiB7XG4gIGNvbnN0IGFyciA9IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MoYmxvY2tzKTtcbiAgY29uc3QgbGVuID0gbjtcblxuICBmb3IgKGxldCBzaXplID0gMTsgc2l6ZSA8PSBsZW47IHNpemUgPSBzaXplICogMikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDIgKiBzaXplKSB7XG4gICAgICBsZXQgbGVmdCA9IGk7XG4gICAgICBsZXQgcmlnaHQgPSBNYXRoLm1pbihzaXplICsgaSwgbGVuKTtcbiAgICAgIGxldCBsZWZ0VG8gPSByaWdodDtcbiAgICAgIGxldCByaWdodFRvID0gTWF0aC5taW4ocmlnaHQgKyBzaXplLCBsZW4pO1xuXG4gICAgICB3aGlsZSAobGVmdCA8IGxlZnRUbyAmJiByaWdodCA8IHJpZ2h0VG8pIHtcbiAgICAgICAgaWYgKGlzU3RvcHBlZCgpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNwZWVkID0gZ2V0Q3VycmVudFNwZWVkKCk7XG5cbiAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tsZWZ0XSwgYmxvY2tzW3JpZ2h0XSwgZ3JlZW5Db2xvciwgc3BlZWQpO1xuXG4gICAgICAgIGlmIChhcnJbbGVmdF0gPj0gYXJyW3JpZ2h0XSkge1xuICAgICAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbbGVmdF0sIGJsb2Nrc1tyaWdodF0sIHJlZENvbG9yLCBzcGVlZCk7XG5cbiAgICAgICAgICBhcnIuc3BsaWNlKGxlZnQsIDAsIGFycltyaWdodF0pO1xuICAgICAgICAgIHJpZ2h0Kys7XG4gICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgIGxlZnRUbysrO1xuICAgICAgICAgIGFyci5zcGxpY2UocmlnaHQsIDEpO1xuXG4gICAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKFxuICAgICAgICAgICAgYmxvY2tzW2xlZnQgLSAxXSxcbiAgICAgICAgICAgIGJsb2Nrc1tyaWdodCAtIDFdLFxuICAgICAgICAgICAgYmFzZUNvbG9yLFxuICAgICAgICAgICAgc3BlZWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHVwZGF0ZUJsb2Nrc0Zyb21BcnJheShibG9ja3MsIGFycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhcbiAgICAgICAgICAgIGJsb2Nrc1tsZWZ0IC0gMV0sXG4gICAgICAgICAgICBibG9ja3NbcmlnaHRdLFxuICAgICAgICAgICAgYmFzZUNvbG9yLFxuICAgICAgICAgICAgc3BlZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRW5kVmlzdWFsaXphdGlvbihtZXJnZVNvcnQpO1xuIiwiaW1wb3J0IHtcbiAgdmlzdWFsaXplQmxvY2tzLFxuICB2aXN1YWxpemVTd2FwQmxvY2tzLFxuICB2aXN1YWxpemVCbG9jayxcbiAgY3JlYXRlVmFsdWVzQXJyRnJvbUJsb2Nrcyxcbn0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tcIjtcbmltcG9ydCBnZXRDdXJyZW50U3BlZWQgZnJvbSBcIi4uL2hlbHBlcnMvZ2V0Q3VycmVudFNwZWVkXCI7XG5pbXBvcnQge1xuICBncmVlbkNvbG9yLFxuICByZWRDb2xvcixcbiAgYmFzZUNvbG9yLFxuICB5ZWxsb3dDb2xvcixcbn0gZnJvbSBcIi4uL2hlbHBlcnMvY29sb3JzXCI7XG5pbXBvcnQgeyB3aXRoRW5kVmlzdWFsaXphdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL3dpdGhFbmRWaXN1YWxpemF0aW9uXCI7XG5cbmNvbnN0IHBhcnRpdGlvbiA9IGFzeW5jIChhcnIsIHN0YXJ0LCBlbmQsIGJsb2NrcywgaXNTdG9wcGVkKSA9PiB7XG4gIGxldCBpID0gc3RhcnQgKyAxO1xuICBsZXQgcGl2ID0gYXJyW3N0YXJ0XTtcblxuICBhd2FpdCB2aXN1YWxpemVCbG9jayhibG9ja3Nbc3RhcnRdLCB5ZWxsb3dDb2xvciwgZ2V0Q3VycmVudFNwZWVkKCkpO1xuXG4gIGZvciAobGV0IGogPSBzdGFydCArIDE7IGogPD0gZW5kOyBqKyspIHtcbiAgICBpZiAoaXNTdG9wcGVkKCkpIHJldHVybjtcblxuICAgIGNvbnN0IHNwZWVkID0gZ2V0Q3VycmVudFNwZWVkKCk7XG5cbiAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3Nbal0sIGdyZWVuQ29sb3IsIHNwZWVkKTtcblxuICAgIGlmIChhcnJbal0gPCBwaXYpIHtcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tqXSwgcmVkQ29sb3IsIHNwZWVkKTtcblxuICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgIGFycltqXSA9IHRlbXA7XG5cbiAgICAgIC8vIFN3YXBcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZVN3YXBCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3Nbal0sIHNwZWVkKTtcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tqXSwgYmFzZUNvbG9yLCBzcGVlZCk7XG5cbiAgICAgIGkrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2pdLCBiYXNlQ29sb3IsIHNwZWVkKTtcbiAgICB9XG4gIH1cbiAgLy8gUHV0IHBpdm90IGluIGl0cyBwcm9wZXIgcGxhY2VcbiAgY29uc3QgdGVtcCA9IGFycltzdGFydF07XG4gIGFycltzdGFydF0gPSBhcnJbaSAtIDFdO1xuICBhcnJbaSAtIDFdID0gdGVtcDtcblxuICBhd2FpdCB2aXN1YWxpemVTd2FwQmxvY2tzKGJsb2Nrc1tzdGFydF0sIGJsb2Nrc1tpIC0gMV0sIGdldEN1cnJlbnRTcGVlZCgpKTtcbiAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKFxuICAgIGJsb2Nrc1tzdGFydF0sXG4gICAgYmxvY2tzW2kgLSAxXSxcbiAgICBiYXNlQ29sb3IsXG4gICAgZ2V0Q3VycmVudFNwZWVkKClcbiAgKTtcblxuICByZXR1cm4gaSAtIDE7XG59O1xuXG5jb25zdCBxdWlja1NvcnRBbGdvID0gYXN5bmMgKGFyciwgc3RhcnQsIGVuZCwgYmxvY2tzLCBpc1N0b3BwZWQpID0+IHtcbiAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgbGV0IHBpdm90UG9zID0gYXdhaXQgcGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCwgYmxvY2tzLCBpc1N0b3BwZWQpO1xuICAgIGlmIChpc1N0b3BwZWQoKSkgcmV0dXJuO1xuXG4gICAgYXdhaXQgcXVpY2tTb3J0QWxnbyhhcnIsIHN0YXJ0LCBwaXZvdFBvcyAtIDEsIGJsb2NrcywgaXNTdG9wcGVkKTtcbiAgICBhd2FpdCBxdWlja1NvcnRBbGdvKGFyciwgcGl2b3RQb3MgKyAxLCBlbmQsIGJsb2NrcywgaXNTdG9wcGVkKTtcbiAgfVxufTtcblxuY29uc3QgcXVpY2tTb3J0ID0gYXN5bmMgKGJsb2NrcywgbiwgaXNTdG9wcGVkKSA9PiB7XG4gIGNvbnN0IGFyciA9IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MoYmxvY2tzKTtcblxuICBhd2FpdCBxdWlja1NvcnRBbGdvKGFyciwgMCwgbiAtIDEsIGJsb2NrcywgaXNTdG9wcGVkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFbmRWaXN1YWxpemF0aW9uKHF1aWNrU29ydCk7XG4iXSwic291cmNlUm9vdCI6IiJ9