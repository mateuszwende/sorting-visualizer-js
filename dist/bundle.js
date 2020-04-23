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
    block_1.innerText = block_2.dataset.value;
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
  block.innerText = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9BYmVsLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Fzcy9tYWluLnNjc3M/MDhmMSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9hc3luY0RlbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hlbHBlcnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9nZXRDdXJyZW50U3BlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9nZXRSYW5kb21OdW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy93aXRoRW5kVmlzdWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nLXZpc3VhbGl6ZXIvU29ydGluZ1Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvYnViYmxlU29ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nQWxnb3JpdGhtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nQWxnb3JpdGhtcy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvcXVpY2tTb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRyxzQ0FBc0MsbUJBQU8sQ0FBQyxpSEFBeUQ7QUFDdkcsb0NBQW9DLG1CQUFPLENBQUMsb0VBQTBCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLHNDQUFzQyx5RUFBeUUscUJBQXFCLHVCQUF1QixHQUFHLEtBQUssMkJBQTJCLEdBQUcsVUFBVSxpQkFBaUIsdUJBQXVCLEdBQUcsVUFBVSxrQkFBa0IsZ0JBQWdCLGNBQWMsd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixzQkFBc0IsbUJB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxnRkFBeUI7O0FBRXZDO0FBQ0E7O0FBRWUseUpBQW9CLFdBQVcsRUFBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vZm9udC9BYmVsLVJlZ3VsYXIudHRmXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWJlbFxcXCIsIHNhbnMtc2VyaWY7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmh0bWwsXFxuYnV0dG9uLFxcbmxhYmVsLFxcbmlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDJweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW46IDI1cHggYXV0byAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxufVxcbi5oZWFkZXJfX2lubmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluO1xcbn1cXG4uaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdjpob3ZlciwgLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXY6Zm9jdXMsIC5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2OmFjdGl2ZSwgLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXYuYWN0aXZlIHtcXG4gIGNvbG9yOiAjMWVlMGViO1xcbiAgYmFja2dyb3VuZDogIzNkM2QzZDtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmlucHV0LWdyb3VwIHtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5pbnB1dC1ncm91cCA+IGxhYmVsIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0biB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgY29sb3IgMC4xNXMgZWFzZS1pbjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5idG46ZGlzYWJsZWQsIC5oZWFkZXJfX2lubmVyIC5idG46ZGlzYWJsZWQ6aG92ZXIge1xcbiAgY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzFlZTBlYjtcXG4gIGJhY2tncm91bmQ6ICM0OTQ5NDk7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5idG46Zm9jdXMsIC5oZWFkZXJfX2lubmVyIC5idG46YWN0aXZlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5ibG9jayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLyogSGlkZXMgdGhlIHNsaWRlciBzbyB0aGF0IGN1c3RvbSBzbGlkZXIgY2FuIGJlIG1hZGUgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogU3BlY2lmaWMgd2lkdGggaXMgcmVxdWlyZWQgZm9yIEZpcmVmb3guICovXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC8qIE90aGVyd2lzZSB3aGl0ZSBpbiBDaHJvbWUgKi9cXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC8qIFJlbW92ZXMgdGhlIGJsdWUgYm9yZGVyLiBZb3Ugc2hvdWxkIHByb2JhYmx5IGRvIHNvbWUga2luZCBvZiBmb2N1cyBzdHlsaW5nIGZvciBhY2Nlc3NpYmlsaXR5IHJlYXNvbnMgdGhvdWdoLiAqL1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogSGlkZXMgdGhlIHNsaWRlciBzbyBjdXN0b20gc3R5bGVzIGNhbiBiZSBhZGRlZCAqL1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBTcGVjaWFsIHN0eWxpbmcgZm9yIFdlYktpdC9CbGluayAqL1xcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogLTdweDtcXG4gIC8qIFlvdSBuZWVkIHRvIHNwZWNpZnkgYSBtYXJnaW4gaW4gQ2hyb21lLCBidXQgaW4gRmlyZWZveCBhbmQgSUUgaXQgaXMgYXV0b21hdGljICovXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbiAgLyogQWRkIGNvb2wgZWZmZWN0cyB0byB5b3VyIHNsaWRlcnMhICovXFxufVxcblxcbi8qIEFsbCB0aGUgc2FtZSBzdHVmZiBmb3IgRmlyZWZveCAqL1xcbmlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBBbGwgdGhlIHNhbWUgc3R1ZmYgZm9yIElFICovXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYiB7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGhlaWdodDogMzZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbiAgYmFja2dyb3VuZDogIzFlZTBlYjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuM3B4O1xcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMDEwMTAxO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgYmFja2dyb3VuZDogIzE0ZDZlMTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxuICBiYWNrZ3JvdW5kOiAjMWVlMGViO1xcbiAgYm9yZGVyLXJhZGl1czogMS4zcHg7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogMTZweCAwO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtbG93ZXIge1xcbiAgYmFja2dyb3VuZDogIzExYmJjNTtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzAxMDEwMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLWxvd2VyIHtcXG4gIGJhY2tncm91bmQ6ICMxZWUwZWI7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC11cHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjMWVlMGViO1xcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMDEwMTAxO1xcbiAgYm9yZGVyLXJhZGl1czogMi42cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtdXBwZXIge1xcbiAgYmFja2dyb3VuZDogIzRkZTZlZjtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06ZGlzYWJsZWQ6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdOmRpc2FibGVkOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdOmRpc2FibGVkOjotbW96LXJhbmdlLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdOmRpc2FibGVkOjotbW96LXJhbmdlLXRyYWNrIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV06ZGlzYWJsZWQ6Oi1tcy10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU4YjgxMGI4ZjIzNjRlNzkxMjA1ZDZmMTJjNWJlM2JmLnR0ZlwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3Nhc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgU29ydGluZ1Zpc3VhbGl6ZXIgZnJvbSBcIi4vbW9kdWxlcy9zb3J0aW5nLXZpc3VhbGl6ZXIvU29ydGluZ1Zpc3VhbGl6ZXJcIjtcbmltcG9ydCB7IGJ1YmJsZVNvcnQsIG1lcmdlU29ydCwgcXVpY2tTb3J0IH0gZnJvbSBcIi4vbW9kdWxlcy9zb3J0aW5nQWxnb3JpdGhtc1wiO1xuXG5jb25zdCBzb3J0QWxnb3JpdGhtcyA9IHtcbiAgYnViYmxlOiB7XG4gICAgbmFtZTogXCJCdWJibGUgU29ydFwiLFxuICAgIGZ1bmM6IGJ1YmJsZVNvcnQsXG4gIH0sXG4gIG1lcmdlOiB7XG4gICAgbmFtZTogXCJNZXJnZSBTb3J0XCIsXG4gICAgZnVuYzogbWVyZ2VTb3J0LFxuICB9LFxuICBxdWljazoge1xuICAgIG5hbWU6IFwiUXVpY2sgU29ydFwiLFxuICAgIGZ1bmM6IHF1aWNrU29ydCxcbiAgfSxcbn07XG5cbmNvbnN0IHNvcnRpbmdWaXN1YWxpemVyID0gbmV3IFNvcnRpbmdWaXN1YWxpemVyKFxuICBzb3J0QWxnb3JpdGhtcyxcbiAgXCJjb250YWluZXJcIixcbiAgMTIwMCxcbiAgNjAwLFxuICA0LFxuICA1MFxuKTtcbnNvcnRpbmdWaXN1YWxpemVyLmluaXRpYWxpemUoKTtcbiIsImV4cG9ydCBkZWZhdWx0IChtcykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlQmxvY2sgPSAocGFyZW50SWQsIHdpZHRoLCBoZWlnaHQsIGJnQ29sb3IpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpO1xuXG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmxvY2suc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gIGJsb2NrLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gIGJsb2NrLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7TWF0aC5mbG9vcih3aWR0aCAvIDUpfXB4YDtcbiAgYmxvY2suc3R5bGUuZm9udFNpemUgPSBgJHtNYXRoLmZsb29yKHdpZHRoIC8gNSl9cHhgO1xuICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiZ0NvbG9yO1xuICBibG9jay5jbGFzc0xpc3QgPSBcImJsb2NrXCI7XG5cbiAgaWYgKHdpZHRoID4gMjMpIHtcbiAgICBibG9jay5pbm5lclRleHQgPSBoZWlnaHQ7XG4gIH1cbiAgYmxvY2suZGF0YXNldC52YWx1ZSA9IGhlaWdodDtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoYmxvY2spO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbEJsb2NrcyA9ICgpID0+IHtcbiAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja1wiKTtcbiAgcmV0dXJuIGJsb2Nrcztcbn07XG5cbmNvbnN0IHN3YXBQcm9wZXJ0aWVzID0gKGJsb2NrXzEsIGJsb2NrXzIsIHNwZWVkKSA9PiB7XG4gIGNvbnN0IHRlbXBWYWx1ZV8xID0gYmxvY2tfMS5kYXRhc2V0LnZhbHVlO1xuICBjb25zdCB0ZW1wQmdDb2xvcl8xID0gYmxvY2tfMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG5cbiAgY29uc3QgYmxvY2tXaWR0aCA9IGJsb2NrXzEuc3R5bGUud2lkdGguc2xpY2UoMCwgMik7XG4gIGlmIChibG9ja1dpZHRoID4gMjMpIHtcbiAgICBibG9ja18xLmlubmVyVGV4dCA9IGJsb2NrXzIuZGF0YXNldC52YWx1ZTtcbiAgICBibG9ja18yLmlubmVyVGV4dCA9IHRlbXBWYWx1ZV8xO1xuICB9XG5cbiAgYmxvY2tfMS5zdHlsZS5oZWlnaHQgPSBibG9ja18yLnN0eWxlLmhlaWdodDtcbiAgYmxvY2tfMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBibG9ja18yLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgYmxvY2tfMS5kYXRhc2V0LnZhbHVlID0gYmxvY2tfMi5kYXRhc2V0LnZhbHVlO1xuICBibG9ja18yLnN0eWxlLmhlaWdodCA9IGAke3RlbXBWYWx1ZV8xfXB4YDtcbiAgYmxvY2tfMi5kYXRhc2V0LnZhbHVlID0gdGVtcFZhbHVlXzE7XG4gIGJsb2NrXzIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGVtcEJnQ29sb3JfMTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aXN1YWxpemVTd2FwQmxvY2tzID0gYXN5bmMgKGJsb2NrXzEsIGJsb2NrXzIsIHNwZWVkKSA9PiB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3dhcFByb3BlcnRpZXMoYmxvY2tfMSwgYmxvY2tfMiwgc3BlZWQpO1xuICAgICAgc2V0VGltZW91dChyZXMsIHNwZWVkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQmxvY2sgPSAoYmxvY2ssIHZhbHVlKSA9PiB7XG4gIGJsb2NrLmRhdGFzZXQudmFsdWUgPSB2YWx1ZTtcbiAgYmxvY2suaW5uZXJUZXh0ID0gdmFsdWU7XG4gIGJsb2NrLnN0eWxlLmhlaWdodCA9IGAke3ZhbHVlfXB4YDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRCbG9ja0JhY2tncm91bmQgPSAoYmxvY2ssIGNvbG9yKSA9PiB7XG4gIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJsb2Nrc0Zyb21BcnJheSA9IChibG9ja3MsIGFycikgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHVwZGF0ZUJsb2NrKGJsb2Nrc1tpXSwgYXJyW2ldKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MgPSAoYmxvY2tzKSA9PiB7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBibG9ja3MuZm9yRWFjaCgoZWxlbSkgPT4gYXJyLnB1c2gocGFyc2VJbnQoZWxlbS5kYXRhc2V0LnZhbHVlLCAxMCkpKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cbmV4cG9ydCBjb25zdCB2aXN1YWxpemVCbG9ja3MgPSAoYmxvY2tfMSwgYmxvY2tfMiwgY29sb3IsIHNwZWVkKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGJsb2NrXzEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICBibG9ja18yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQocmVzLCBzcGVlZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpc3VhbGl6ZUJsb2NrID0gKGJsb2NrLCBjb2xvciwgc3BlZWQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChyZXMsIHNwZWVkKTtcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHJlZENvbG9yID0gXCIjZWU1NTRhXCI7XG5leHBvcnQgY29uc3QgZ3JlZW5Db2xvciA9IFwiIzY5YzY1M1wiO1xuZXhwb3J0IGNvbnN0IHllbGxvd0NvbG9yID0gXCIjZjFlMDU5XCI7XG5leHBvcnQgY29uc3QgcHVycGxlQ29sb3IgPSBcInB1cnBsZVwiO1xuZXhwb3J0IGNvbnN0IGJhc2VDb2xvciA9IFwiIzRjYzhlYVwiO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBzcGVlZCA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BlZWRWYWxcIikudmFsdWUsIDEwKTtcbiAgcmV0dXJuIHNwZWVkO1xufTtcbiIsImV4cG9ydCBjb25zdCBnZXRSYW5kb21OdW0gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW47XG4iLCJpbXBvcnQgZ2V0Q3VycmVudFNwZWVkIGZyb20gXCIuL2dldEN1cnJlbnRTcGVlZFwiO1xuaW1wb3J0IHsgdmlzdWFsaXplQmxvY2sgfSBmcm9tIFwiLi9ibG9ja1wiO1xuaW1wb3J0IHsgcHVycGxlQ29sb3IgfSBmcm9tIFwiLi9jb2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IHdpdGhFbmRWaXN1YWxpemF0aW9uID0gKGZ1bmMpID0+IGFzeW5jIChibG9ja3MsIG4sIGlzU3RvcHBlZCkgPT4ge1xuICBhd2FpdCBmdW5jKGJsb2NrcywgbiwgaXNTdG9wcGVkKTtcblxuICBpZiAoaXNTdG9wcGVkKCkpIHJldHVybjtcblxuICBjb25zdCBzcGVlZCA9IE1hdGgubWluKGdldEN1cnJlbnRTcGVlZCgpICsgMTAwMCAvIG4pO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrKGJsb2Nrc1tqXSwgcHVycGxlQ29sb3IsIHNwZWVkKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUJsb2NrLCB1cGRhdGVCbG9jaywgc2V0QmxvY2tCYWNrZ3JvdW5kIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tcIjtcbmltcG9ydCB7IGJhc2VDb2xvciB9IGZyb20gXCIuLi9oZWxwZXJzL2NvbG9yc1wiO1xuaW1wb3J0IGFzeW5jRGVsYXkgZnJvbSBcIi4uL2hlbHBlcnMvYXN5bmNEZWxheVwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tTnVtIH0gZnJvbSBcIi4uL2hlbHBlcnMvZ2V0UmFuZG9tTnVtXCI7XG5pbXBvcnQgeyB3aXRoRW5kVmlzdWFsaXphdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL3dpdGhFbmRWaXN1YWxpemF0aW9uXCI7XG5cbmNsYXNzIFNvcnRpbmdWaXN1YWxpemVyIHtcbiAgY29uc3RydWN0b3IoYWxnb3JpdGhtcywgY29udGFpbmVySWQsIHdpZHRoLCBoZWlnaHQsIG4sIHNwZWVkKSB7XG4gICAgdGhpcy5jb250YWluZXJJZCA9IGNvbnRhaW5lcklkO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLm1pbkhlaWdodCA9IDYwO1xuICAgIHRoaXMubiA9IG47XG4gICAgdGhpcy5uTWluID0gNDtcbiAgICB0aGlzLm5NYXggPSAxMDA7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuc3BlZWRNaW4gPSAxO1xuICAgIHRoaXMuc3BlZWRNYXggPSA1MDA7XG4gICAgdGhpcy5pc1NvcnRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgIHRoaXMuYWxnb3JpdGhtcyA9IGFsZ29yaXRobXM7XG4gICAgdGhpcy5jdXJyZW50QWxnb3JpdGhtID0gbnVsbDtcblxuICAgIHRoaXMuaXNTdG9wcGVkID0gdGhpcy5pc1N0b3BwZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5jcmVhdGVOYXYodGhpcy5hbGdvcml0aG1zKTtcbiAgICB0aGlzLmNyZWF0ZUJsb2Nrcyh0aGlzLm4pO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsQWxnb3JpdGhtKFwiYnViYmxlXCIpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc2V0UmFuZ2VJbnB1dFByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuYWRkRWxlbWVudHNWYWxJbnB1dEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGRCdG5zRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZE5hdkFsZ29FbGVtc0V2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRFbGVtZW50c1ZhbElucHV0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgZWxlbWVudHNWYWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudHNOdW1cIik7XG5cbiAgICBlbGVtZW50c1ZhbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMubiA9IHBhcnNlSW50KG4sIDEwKTtcbiAgICAgIHRoaXMuY3JlYXRlQmxvY2tzKG4pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQnRuc0V2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHNvcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCdG5cIik7XG4gICAgY29uc3Qgc3RvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcEJ0blwiKTtcbiAgICBjb25zdCByYW5kb21pemVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbWl6ZUJ0blwiKTtcblxuICAgIHNvcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgICAgaWYgKCF0aGlzLmlzU29ydGluZykge1xuICAgICAgICB0aGlzLmhhbmRsZUlzU29ydGluZ1N0YXRlKHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tcIik7XG4gICAgICAgIGF3YWl0IHRoaXMucHJlcGFyZUJsb2Nrc0ZvclNvcnQoYmxvY2tzKTtcbiAgICAgICAgYXdhaXQgdGhpcy5jdXJyZW50QWxnb3JpdGhtKGJsb2NrcywgdGhpcy5uLCB0aGlzLmlzU3RvcHBlZCk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVJc1NvcnRpbmdTdGF0ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByYW5kb21pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc1NvcnRpbmcpIHtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja1wiKTtcbiAgICAgICAgdGhpcy5yYW5kb21pemVCbG9ja3MoYmxvY2tzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0b3BCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzU29ydGluZykge1xuICAgICAgICB0aGlzLmlzU3RvcCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbGVhckJsb2Nrc0NvbG9yKGJsb2NrcyksIDUwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5hdkFsZ29FbGVtc0V2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYWxnb3JpdGhtLWpzXCIpO1xuXG4gICAgZWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWxnb3JpdGhtID0gdGhpcy5hbGdvcml0aG1zW1xuICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQuYWxnb3JpdGhtS2V5XG4gICAgICAgIF0uZnVuYztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0UmFuZ2VJbnB1dFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgZWxlbWVudHNOdW1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudHNOdW1cIik7XG4gICAgZWxlbWVudHNOdW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdGhpcy5uTWluKTtcbiAgICBlbGVtZW50c051bUlucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCB0aGlzLm5NYXgpO1xuICAgIGVsZW1lbnRzTnVtSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGhpcy5uKTtcblxuICAgIGNvbnN0IHNwZWVkVmFsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWVkVmFsXCIpO1xuICAgIHNwZWVkVmFsSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIHRoaXMuc3BlZWRNaW4pO1xuICAgIHNwZWVkVmFsSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIHRoaXMuc3BlZWRNYXgpO1xuICAgIHNwZWVkVmFsSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGhpcy5zcGVlZCk7XG4gICAgc3BlZWRWYWxJbnB1dC5zdHlsZS5kaXJlY3Rpb24gPSBcInJ0bFwiO1xuICB9XG5cbiAgc2V0SW5pdGlhbEFsZ29yaXRobShhbGdvS2V5KSB7XG4gICAgdGhpcy5jdXJyZW50QWxnb3JpdGhtID0gdGhpcy5hbGdvcml0aG1zW2FsZ29LZXldLmZ1bmM7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hbGdvcml0aG0tanNcIik7XG4gICAgZWxlbXNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIGhhbmRsZUlzU29ydGluZ1N0YXRlKGlzU29ydGluZykge1xuICAgIHRoaXMuaXNTb3J0aW5nID0gaXNTb3J0aW5nO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ0blwiKS5kaXNhYmxlZCA9IGlzU29ydGluZztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbWl6ZUJ0blwiKS5kaXNhYmxlZCA9IGlzU29ydGluZztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnRzTnVtXCIpLmRpc2FibGVkID0gaXNTb3J0aW5nO1xuICB9XG5cbiAgY3JlYXRlQmxvY2tzKG4pIHtcbiAgICB0aGlzLmNsZWFyQ29udGFpbmVyKCk7XG4gICAgY29uc3QgYmxvY2tXaWR0aCA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAvIG4pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNyZWF0ZUJsb2NrKFxuICAgICAgICB0aGlzLmNvbnRhaW5lcklkLFxuICAgICAgICBibG9ja1dpZHRoLFxuICAgICAgICBnZXRSYW5kb21OdW0odGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgYmFzZUNvbG9yXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJhbmRvbWl6ZUJsb2NrcyhibG9ja3MpIHtcbiAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgIHVwZGF0ZUJsb2NrKGJsb2NrLCBnZXRSYW5kb21OdW0odGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KSk7XG4gICAgICBzZXRCbG9ja0JhY2tncm91bmQoYmxvY2ssIGJhc2VDb2xvcik7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckJsb2Nrc0NvbG9yKGJsb2Nrcykge1xuICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgc2V0QmxvY2tCYWNrZ3JvdW5kKGJsb2NrLCBiYXNlQ29sb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNTdG9wcGVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzU3RvcDtcbiAgfVxuXG4gIGFzeW5jIHByZXBhcmVCbG9ja3NGb3JTb3J0KGJsb2Nrcykge1xuICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgc2V0QmxvY2tCYWNrZ3JvdW5kKGJsb2NrLCBiYXNlQ29sb3IpO1xuICAgIH0pO1xuICAgIGF3YWl0IGFzeW5jRGVsYXkodGhpcy5zcGVlZCk7XG4gIH1cblxuICBjcmVhdGVOYXYoYWxnb3JpdGhtcykge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xuXG4gICAgZm9yIChsZXQgW2tleSwgYWxnb10gb2YgT2JqZWN0LmVudHJpZXMoYWxnb3JpdGhtcykpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZWxlbS5jbGFzc0xpc3QgPSBcIm5hdi1hbGdvcml0aG0tanNcIjtcbiAgICAgIGVsZW0uaW5uZXJUZXh0ID0gYWxnby5uYW1lO1xuICAgICAgZWxlbS5kYXRhc2V0LmFsZ29yaXRobUtleSA9IGtleTtcbiAgICAgIG5hdi5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9XG4gIH1cblxuICBjbGVhckNvbnRhaW5lcigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRhaW5lcklkKS5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRpbmdWaXN1YWxpemVyO1xuIiwiaW1wb3J0IHtcbiAgdmlzdWFsaXplU3dhcEJsb2NrcyxcbiAgdmlzdWFsaXplQmxvY2tzLFxuICBjcmVhdGVWYWx1ZXNBcnJGcm9tQmxvY2tzLFxufSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja1wiO1xuaW1wb3J0IHsgZ3JlZW5Db2xvciwgcmVkQ29sb3IsIGJhc2VDb2xvciB9IGZyb20gXCIuLi9oZWxwZXJzL2NvbG9yc1wiO1xuaW1wb3J0IGdldEN1cnJlbnRTcGVlZCBmcm9tIFwiLi4vaGVscGVycy9nZXRDdXJyZW50U3BlZWRcIjtcbmltcG9ydCB7IHdpdGhFbmRWaXN1YWxpemF0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvd2l0aEVuZFZpc3VhbGl6YXRpb25cIjtcblxuY29uc3QgYnViYmxlU29ydCA9IGFzeW5jIChibG9ja3MsIG4sIGlzU3RvcHBlZCkgPT4ge1xuICBjb25zdCBhcnIgPSBjcmVhdGVWYWx1ZXNBcnJGcm9tQmxvY2tzKGJsb2Nrcyk7XG5cbiAgbGV0IHN3YXBwZWQ7XG5cbiAgZG8ge1xuICAgIHN3YXBwZWQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgIGlmIChpc1N0b3BwZWQoKSkgcmV0dXJuO1xuICAgICAgY29uc3Qgc3BlZWQgPSBnZXRDdXJyZW50U3BlZWQoKTtcblxuICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2kgKyAxXSwgZ3JlZW5Db2xvciwgc3BlZWQpO1xuICAgICAgaWYgKGFycltpXSA+IGFycltpICsgMV0pIHtcbiAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2kgKyAxXSwgcmVkQ29sb3IsIHNwZWVkKTtcblxuICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICBhcnJbaV0gPSBhcnJbaSArIDFdO1xuICAgICAgICBhcnJbaSArIDFdID0gdGVtcDtcblxuICAgICAgICBhd2FpdCB2aXN1YWxpemVTd2FwQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2kgKyAxXSwgc3BlZWQpO1xuXG4gICAgICAgIHN3YXBwZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2kgKyAxXSwgYmFzZUNvbG9yLCBzcGVlZCk7XG4gICAgfVxuICB9IHdoaWxlIChzd2FwcGVkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFbmRWaXN1YWxpemF0aW9uKGJ1YmJsZVNvcnQpO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBidWJibGVTb3J0IH0gZnJvbSBcIi4vYnViYmxlU29ydFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZVNvcnQgfSBmcm9tIFwiLi9tZXJnZVNvcnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcXVpY2tTb3J0IH0gZnJvbSBcIi4vcXVpY2tTb3J0XCI7XG4iLCJpbXBvcnQge1xuICB2aXN1YWxpemVCbG9ja3MsXG4gIHVwZGF0ZUJsb2Nrc0Zyb21BcnJheSxcbiAgY3JlYXRlVmFsdWVzQXJyRnJvbUJsb2Nrcyxcbn0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tcIjtcbmltcG9ydCBnZXRDdXJyZW50U3BlZWQgZnJvbSBcIi4uL2hlbHBlcnMvZ2V0Q3VycmVudFNwZWVkXCI7XG5pbXBvcnQgeyBncmVlbkNvbG9yLCByZWRDb2xvciwgYmFzZUNvbG9yIH0gZnJvbSBcIi4uL2hlbHBlcnMvY29sb3JzXCI7XG5pbXBvcnQgeyB3aXRoRW5kVmlzdWFsaXphdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL3dpdGhFbmRWaXN1YWxpemF0aW9uXCI7XG5cbmNvbnN0IG1lcmdlU29ydCA9IGFzeW5jIChibG9ja3MsIG4sIGlzU3RvcHBlZCkgPT4ge1xuICBjb25zdCBhcnIgPSBjcmVhdGVWYWx1ZXNBcnJGcm9tQmxvY2tzKGJsb2Nrcyk7XG4gIGNvbnN0IGxlbiA9IG47XG5cbiAgZm9yIChsZXQgc2l6ZSA9IDE7IHNpemUgPD0gbGVuOyBzaXplID0gc2l6ZSAqIDIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAyICogc2l6ZSkge1xuICAgICAgbGV0IGxlZnQgPSBpO1xuICAgICAgbGV0IHJpZ2h0ID0gTWF0aC5taW4oc2l6ZSArIGksIGxlbik7XG4gICAgICBsZXQgbGVmdFRvID0gcmlnaHQ7XG4gICAgICBsZXQgcmlnaHRUbyA9IE1hdGgubWluKHJpZ2h0ICsgc2l6ZSwgbGVuKTtcblxuICAgICAgd2hpbGUgKGxlZnQgPCBsZWZ0VG8gJiYgcmlnaHQgPCByaWdodFRvKSB7XG4gICAgICAgIGlmIChpc1N0b3BwZWQoKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBzcGVlZCA9IGdldEN1cnJlbnRTcGVlZCgpO1xuXG4gICAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbbGVmdF0sIGJsb2Nrc1tyaWdodF0sIGdyZWVuQ29sb3IsIHNwZWVkKTtcblxuICAgICAgICBpZiAoYXJyW2xlZnRdID49IGFycltyaWdodF0pIHtcbiAgICAgICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2xlZnRdLCBibG9ja3NbcmlnaHRdLCByZWRDb2xvciwgc3BlZWQpO1xuXG4gICAgICAgICAgYXJyLnNwbGljZShsZWZ0LCAwLCBhcnJbcmlnaHRdKTtcbiAgICAgICAgICByaWdodCsrO1xuICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICBsZWZ0VG8rKztcbiAgICAgICAgICBhcnIuc3BsaWNlKHJpZ2h0LCAxKTtcblxuICAgICAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhcbiAgICAgICAgICAgIGJsb2Nrc1tsZWZ0IC0gMV0sXG4gICAgICAgICAgICBibG9ja3NbcmlnaHQgLSAxXSxcbiAgICAgICAgICAgIGJhc2VDb2xvcixcbiAgICAgICAgICAgIHNwZWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgICB1cGRhdGVCbG9ja3NGcm9tQXJyYXkoYmxvY2tzLCBhcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoXG4gICAgICAgICAgICBibG9ja3NbbGVmdCAtIDFdLFxuICAgICAgICAgICAgYmxvY2tzW3JpZ2h0XSxcbiAgICAgICAgICAgIGJhc2VDb2xvcixcbiAgICAgICAgICAgIHNwZWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVuZFZpc3VhbGl6YXRpb24obWVyZ2VTb3J0KTtcbiIsImltcG9ydCB7XG4gIHZpc3VhbGl6ZUJsb2NrcyxcbiAgdmlzdWFsaXplU3dhcEJsb2NrcyxcbiAgdmlzdWFsaXplQmxvY2ssXG4gIGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MsXG59IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2NrXCI7XG5pbXBvcnQgZ2V0Q3VycmVudFNwZWVkIGZyb20gXCIuLi9oZWxwZXJzL2dldEN1cnJlbnRTcGVlZFwiO1xuaW1wb3J0IHtcbiAgZ3JlZW5Db2xvcixcbiAgcmVkQ29sb3IsXG4gIGJhc2VDb2xvcixcbiAgeWVsbG93Q29sb3IsXG59IGZyb20gXCIuLi9oZWxwZXJzL2NvbG9yc1wiO1xuaW1wb3J0IHsgd2l0aEVuZFZpc3VhbGl6YXRpb24gfSBmcm9tIFwiLi4vaGVscGVycy93aXRoRW5kVmlzdWFsaXphdGlvblwiO1xuXG5jb25zdCBwYXJ0aXRpb24gPSBhc3luYyAoYXJyLCBzdGFydCwgZW5kLCBibG9ja3MsIGlzU3RvcHBlZCkgPT4ge1xuICBsZXQgaSA9IHN0YXJ0ICsgMTtcbiAgbGV0IHBpdiA9IGFycltzdGFydF07XG5cbiAgYXdhaXQgdmlzdWFsaXplQmxvY2soYmxvY2tzW3N0YXJ0XSwgeWVsbG93Q29sb3IsIGdldEN1cnJlbnRTcGVlZCgpKTtcblxuICBmb3IgKGxldCBqID0gc3RhcnQgKyAxOyBqIDw9IGVuZDsgaisrKSB7XG4gICAgaWYgKGlzU3RvcHBlZCgpKSByZXR1cm47XG5cbiAgICBjb25zdCBzcGVlZCA9IGdldEN1cnJlbnRTcGVlZCgpO1xuXG4gICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2pdLCBncmVlbkNvbG9yLCBzcGVlZCk7XG5cbiAgICBpZiAoYXJyW2pdIDwgcGl2KSB7XG4gICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3Nbal0sIHJlZENvbG9yLCBzcGVlZCk7XG5cbiAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICBhcnJbal0gPSB0ZW1wO1xuXG4gICAgICAvLyBTd2FwXG4gICAgICBhd2FpdCB2aXN1YWxpemVTd2FwQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2pdLCBzcGVlZCk7XG4gICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3Nbal0sIGJhc2VDb2xvciwgc3BlZWQpO1xuXG4gICAgICBpKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tqXSwgYmFzZUNvbG9yLCBzcGVlZCk7XG4gICAgfVxuICB9XG4gIC8vIFB1dCBwaXZvdCBpbiBpdHMgcHJvcGVyIHBsYWNlXG4gIGNvbnN0IHRlbXAgPSBhcnJbc3RhcnRdO1xuICBhcnJbc3RhcnRdID0gYXJyW2kgLSAxXTtcbiAgYXJyW2kgLSAxXSA9IHRlbXA7XG5cbiAgYXdhaXQgdmlzdWFsaXplU3dhcEJsb2NrcyhibG9ja3Nbc3RhcnRdLCBibG9ja3NbaSAtIDFdLCBnZXRDdXJyZW50U3BlZWQoKSk7XG4gIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhcbiAgICBibG9ja3Nbc3RhcnRdLFxuICAgIGJsb2Nrc1tpIC0gMV0sXG4gICAgYmFzZUNvbG9yLFxuICAgIGdldEN1cnJlbnRTcGVlZCgpXG4gICk7XG5cbiAgcmV0dXJuIGkgLSAxO1xufTtcblxuY29uc3QgcXVpY2tTb3J0QWxnbyA9IGFzeW5jIChhcnIsIHN0YXJ0LCBlbmQsIGJsb2NrcywgaXNTdG9wcGVkKSA9PiB7XG4gIGlmIChzdGFydCA8IGVuZCkge1xuICAgIGxldCBwaXZvdFBvcyA9IGF3YWl0IHBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQsIGJsb2NrcywgaXNTdG9wcGVkKTtcbiAgICBpZiAoaXNTdG9wcGVkKCkpIHJldHVybjtcblxuICAgIGF3YWl0IHF1aWNrU29ydEFsZ28oYXJyLCBzdGFydCwgcGl2b3RQb3MgLSAxLCBibG9ja3MsIGlzU3RvcHBlZCk7XG4gICAgYXdhaXQgcXVpY2tTb3J0QWxnbyhhcnIsIHBpdm90UG9zICsgMSwgZW5kLCBibG9ja3MsIGlzU3RvcHBlZCk7XG4gIH1cbn07XG5cbmNvbnN0IHF1aWNrU29ydCA9IGFzeW5jIChibG9ja3MsIG4sIGlzU3RvcHBlZCkgPT4ge1xuICBjb25zdCBhcnIgPSBjcmVhdGVWYWx1ZXNBcnJGcm9tQmxvY2tzKGJsb2Nrcyk7XG5cbiAgYXdhaXQgcXVpY2tTb3J0QWxnbyhhcnIsIDAsIG4gLSAxLCBibG9ja3MsIGlzU3RvcHBlZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRW5kVmlzdWFsaXphdGlvbihxdWlja1NvcnQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==