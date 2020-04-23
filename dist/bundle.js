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
        setTimeout(() => this.clearBlocksColor(blocks), 30);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9BYmVsLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Fzcy9tYWluLnNjc3M/MDhmMSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9hc3luY0RlbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hlbHBlcnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9nZXRDdXJyZW50U3BlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9nZXRSYW5kb21OdW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy93aXRoRW5kVmlzdWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nLXZpc3VhbGl6ZXIvU29ydGluZ1Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvYnViYmxlU29ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nQWxnb3JpdGhtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nQWxnb3JpdGhtcy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvcXVpY2tTb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRyxzQ0FBc0MsbUJBQU8sQ0FBQyxpSEFBeUQ7QUFDdkcsb0NBQW9DLG1CQUFPLENBQUMsb0VBQTBCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLHNDQUFzQyx5RUFBeUUscUJBQXFCLHVCQUF1QixHQUFHLEtBQUssMkJBQTJCLEdBQUcsVUFBVSxpQkFBaUIsdUJBQXVCLEdBQUcsVUFBVSxrQkFBa0IsZ0JBQWdCLGNBQWMsd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixzQkFBc0IsbUJB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QSxjQUFjLGdGQUF5Qjs7QUFFdkM7QUFDQTs7QUFFZSx5SkFBb0IsV0FBVyxFQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9mb250L0FiZWwtUmVndWxhci50dGZcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBYmVsXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaHRtbCxcXG5idXR0b24sXFxubGFiZWwsXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMnB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIG1hcmdpbjogMjVweCBhdXRvIDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG59XFxuLmhlYWRlcl9faW5uZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW47XFxufVxcbi5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2OmhvdmVyLCAuaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdjpmb2N1cywgLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXY6YWN0aXZlLCAuaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdi5hY3RpdmUge1xcbiAgY29sb3I6ICMxZWUwZWI7XFxuICBiYWNrZ3JvdW5kOiAjM2QzZDNkO1xcbn1cXG4uaGVhZGVyX19pbm5lciAuaW5wdXQtZ3JvdXAge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmlucHV0LWdyb3VwID4gbGFiZWwge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG4uaGVhZGVyX19pbm5lciAuYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciAwLjE1cyBlYXNlLWluO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0bjpkaXNhYmxlZCwgLmhlYWRlcl9faW5uZXIgLmJ0bjpkaXNhYmxlZDpob3ZlciB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uaGVhZGVyX19pbm5lciAuYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjMWVlMGViO1xcbiAgYmFja2dyb3VuZDogIzQ5NDk0OTtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0bjpmb2N1cywgLmhlYWRlcl9faW5uZXIgLmJ0bjphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAvKiBIaWRlcyB0aGUgc2xpZGVyIHNvIHRoYXQgY3VzdG9tIHNsaWRlciBjYW4gYmUgbWFkZSAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBTcGVjaWZpYyB3aWR0aCBpcyByZXF1aXJlZCBmb3IgRmlyZWZveC4gKi9cXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLyogT3RoZXJ3aXNlIHdoaXRlIGluIENocm9tZSAqL1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLyogUmVtb3ZlcyB0aGUgYmx1ZSBib3JkZXIuIFlvdSBzaG91bGQgcHJvYmFibHkgZG8gc29tZSBraW5kIG9mIGZvY3VzIHN0eWxpbmcgZm9yIGFjY2Vzc2liaWxpdHkgcmVhc29ucyB0aG91Z2guICovXFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKiBIaWRlcyB0aGUgc2xpZGVyIHNvIGN1c3RvbSBzdHlsZXMgY2FuIGJlIGFkZGVkICovXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIFNwZWNpYWwgc3R5bGluZyBmb3IgV2ViS2l0L0JsaW5rICovXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtN3B4O1xcbiAgLyogWW91IG5lZWQgdG8gc3BlY2lmeSBhIG1hcmdpbiBpbiBDaHJvbWUsIGJ1dCBpbiBGaXJlZm94IGFuZCBJRSBpdCBpcyBhdXRvbWF0aWMgKi9cXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxuICAvKiBBZGQgY29vbCBlZmZlY3RzIHRvIHlvdXIgc2xpZGVycyEgKi9cXG59XFxuXFxuLyogQWxsIHRoZSBzYW1lIHN0dWZmIGZvciBGaXJlZm94ICovXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEFsbCB0aGUgc2FtZSBzdHVmZiBmb3IgSUUgKi9cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1iIHtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxuICBiYWNrZ3JvdW5kOiAjMWVlMGViO1xcbiAgYm9yZGVyLXJhZGl1czogMS4zcHg7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjMTRkNmUxO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJhY2tncm91bmQ6ICMxZWUwZWI7XFxuICBib3JkZXItcmFkaXVzOiAxLjNweDtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzAxMDEwMTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAxNnB4IDA7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlciB7XFxuICBiYWNrZ3JvdW5kOiAjMTFiYmM1O1xcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMDEwMTAxO1xcbiAgYm9yZGVyLXJhZGl1czogMi42cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtbG93ZXIge1xcbiAgYmFja2dyb3VuZDogIzFlZTBlYjtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLXVwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICMxZWUwZWI7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XFxuICBib3JkZXItcmFkaXVzOiAyLjZweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC11cHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjNGRlNmVmO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV06ZGlzYWJsZWQ6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV06ZGlzYWJsZWQ6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV06ZGlzYWJsZWQ6Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LW1zLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZThiODEwYjhmMjM2NGU3OTEyMDVkNmYxMmM1YmUzYmYudHRmXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFwiLi9hc3NldHMvc2Fzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBTb3J0aW5nVmlzdWFsaXplciBmcm9tIFwiLi9tb2R1bGVzL3NvcnRpbmctdmlzdWFsaXplci9Tb3J0aW5nVmlzdWFsaXplclwiO1xuaW1wb3J0IHsgYnViYmxlU29ydCwgbWVyZ2VTb3J0LCBxdWlja1NvcnQgfSBmcm9tIFwiLi9tb2R1bGVzL3NvcnRpbmdBbGdvcml0aG1zXCI7XG5cbmNvbnN0IHNvcnRBbGdvcml0aG1zID0ge1xuICBidWJibGU6IHtcbiAgICBuYW1lOiBcIkJ1YmJsZSBTb3J0XCIsXG4gICAgZnVuYzogYnViYmxlU29ydCxcbiAgfSxcbiAgbWVyZ2U6IHtcbiAgICBuYW1lOiBcIk1lcmdlIFNvcnRcIixcbiAgICBmdW5jOiBtZXJnZVNvcnQsXG4gIH0sXG4gIHF1aWNrOiB7XG4gICAgbmFtZTogXCJRdWljayBTb3J0XCIsXG4gICAgZnVuYzogcXVpY2tTb3J0LFxuICB9LFxufTtcblxuY29uc3Qgc29ydGluZ1Zpc3VhbGl6ZXIgPSBuZXcgU29ydGluZ1Zpc3VhbGl6ZXIoXG4gIHNvcnRBbGdvcml0aG1zLFxuICBcImNvbnRhaW5lclwiLFxuICAxMjAwLFxuICA2MDAsXG4gIDQsXG4gIDUwXG4pO1xuc29ydGluZ1Zpc3VhbGl6ZXIuaW5pdGlhbGl6ZSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKG1zKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVCbG9jayA9IChwYXJlbnRJZCwgd2lkdGgsIGhlaWdodCwgYmdDb2xvcikgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZCk7XG5cbiAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBibG9jay5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgYmxvY2suc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgYmxvY2suc3R5bGUubWFyZ2luUmlnaHQgPSBgJHtNYXRoLmZsb29yKHdpZHRoIC8gNSl9cHhgO1xuICBibG9jay5zdHlsZS5mb250U2l6ZSA9IGAke01hdGguZmxvb3Iod2lkdGggLyA1KX1weGA7XG4gIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnQ29sb3I7XG4gIGJsb2NrLmNsYXNzTGlzdCA9IFwiYmxvY2tcIjtcblxuICBpZiAod2lkdGggPiAyMykge1xuICAgIGJsb2NrLmlubmVyVGV4dCA9IGhlaWdodDtcbiAgfVxuICBibG9jay5kYXRhc2V0LnZhbHVlID0gaGVpZ2h0O1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChibG9jayk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQmxvY2tzID0gKCkgPT4ge1xuICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrXCIpO1xuICByZXR1cm4gYmxvY2tzO1xufTtcblxuY29uc3Qgc3dhcFByb3BlcnRpZXMgPSAoYmxvY2tfMSwgYmxvY2tfMiwgc3BlZWQpID0+IHtcbiAgY29uc3QgdGVtcFZhbHVlXzEgPSBibG9ja18xLmRhdGFzZXQudmFsdWU7XG4gIGNvbnN0IHRlbXBCZ0NvbG9yXzEgPSBibG9ja18xLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcblxuICBibG9ja18xLnN0eWxlLmhlaWdodCA9IGJsb2NrXzIuc3R5bGUuaGVpZ2h0O1xuICBibG9ja18xLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJsb2NrXzIuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBibG9ja18xLmRhdGFzZXQudmFsdWUgPSBibG9ja18yLmRhdGFzZXQudmFsdWU7XG4gIGJsb2NrXzIuc3R5bGUuaGVpZ2h0ID0gYCR7dGVtcFZhbHVlXzF9cHhgO1xuICBibG9ja18yLmRhdGFzZXQudmFsdWUgPSB0ZW1wVmFsdWVfMTtcbiAgYmxvY2tfMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0ZW1wQmdDb2xvcl8xO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpc3VhbGl6ZVN3YXBCbG9ja3MgPSBhc3luYyAoYmxvY2tfMSwgYmxvY2tfMiwgc3BlZWQpID0+IHtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzd2FwUHJvcGVydGllcyhibG9ja18xLCBibG9ja18yLCBzcGVlZCk7XG4gICAgICBzZXRUaW1lb3V0KHJlcywgc3BlZWQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCbG9jayA9IChibG9jaywgdmFsdWUpID0+IHtcbiAgYmxvY2suZGF0YXNldC52YWx1ZSA9IHZhbHVlO1xuICBibG9jay5zdHlsZS5oZWlnaHQgPSBgJHt2YWx1ZX1weGA7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QmxvY2tCYWNrZ3JvdW5kID0gKGJsb2NrLCBjb2xvcikgPT4ge1xuICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCbG9ja3NGcm9tQXJyYXkgPSAoYmxvY2tzLCBhcnIpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB1cGRhdGVCbG9jayhibG9ja3NbaV0sIGFycltpXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVWYWx1ZXNBcnJGcm9tQmxvY2tzID0gKGJsb2NrcykgPT4ge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgYmxvY2tzLmZvckVhY2goKGVsZW0pID0+IGFyci5wdXNoKHBhcnNlSW50KGVsZW0uZGF0YXNldC52YWx1ZSwgMTApKSk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5leHBvcnQgY29uc3QgdmlzdWFsaXplQmxvY2tzID0gKGJsb2NrXzEsIGJsb2NrXzIsIGNvbG9yLCBzcGVlZCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBibG9ja18xLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgYmxvY2tfMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KHJlcywgc3BlZWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aXN1YWxpemVCbG9jayA9IChibG9jaywgY29sb3IsIHNwZWVkKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQocmVzLCBzcGVlZCk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCByZWRDb2xvciA9IFwiI2VlNTU0YVwiO1xuZXhwb3J0IGNvbnN0IGdyZWVuQ29sb3IgPSBcIiM2OWM2NTNcIjtcbmV4cG9ydCBjb25zdCB5ZWxsb3dDb2xvciA9IFwiI2YxZTA1OVwiO1xuZXhwb3J0IGNvbnN0IHB1cnBsZUNvbG9yID0gXCJwdXJwbGVcIjtcbmV4cG9ydCBjb25zdCBiYXNlQ29sb3IgPSBcIiM0Y2M4ZWFcIjtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3Qgc3BlZWQgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWVkVmFsXCIpLnZhbHVlLCAxMCk7XG4gIHJldHVybiBzcGVlZDtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0UmFuZG9tTnVtID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluO1xuIiwiaW1wb3J0IGdldEN1cnJlbnRTcGVlZCBmcm9tIFwiLi9nZXRDdXJyZW50U3BlZWRcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZUJsb2NrIH0gZnJvbSBcIi4vYmxvY2tcIjtcbmltcG9ydCB7IHB1cnBsZUNvbG9yIH0gZnJvbSBcIi4vY29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCB3aXRoRW5kVmlzdWFsaXphdGlvbiA9IChmdW5jKSA9PiBhc3luYyAoYmxvY2tzLCBuLCBpc1N0b3BwZWQpID0+IHtcbiAgYXdhaXQgZnVuYyhibG9ja3MsIG4sIGlzU3RvcHBlZCk7XG5cbiAgaWYgKGlzU3RvcHBlZCgpKSByZXR1cm47XG5cbiAgY29uc3Qgc3BlZWQgPSBNYXRoLm1pbihnZXRDdXJyZW50U3BlZWQoKSArIDEwMDAgLyBuKTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBhd2FpdCB2aXN1YWxpemVCbG9jayhibG9ja3Nbal0sIHB1cnBsZUNvbG9yLCBzcGVlZCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVCbG9jaywgdXBkYXRlQmxvY2ssIHNldEJsb2NrQmFja2dyb3VuZCB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2NrXCI7XG5pbXBvcnQgeyBiYXNlQ29sb3IgfSBmcm9tIFwiLi4vaGVscGVycy9jb2xvcnNcIjtcbmltcG9ydCBhc3luY0RlbGF5IGZyb20gXCIuLi9oZWxwZXJzL2FzeW5jRGVsYXlcIjtcbmltcG9ydCB7IGdldFJhbmRvbU51bSB9IGZyb20gXCIuLi9oZWxwZXJzL2dldFJhbmRvbU51bVwiO1xuaW1wb3J0IHsgd2l0aEVuZFZpc3VhbGl6YXRpb24gfSBmcm9tIFwiLi4vaGVscGVycy93aXRoRW5kVmlzdWFsaXphdGlvblwiO1xuXG5jbGFzcyBTb3J0aW5nVmlzdWFsaXplciB7XG4gIGNvbnN0cnVjdG9yKGFsZ29yaXRobXMsIGNvbnRhaW5lcklkLCB3aWR0aCwgaGVpZ2h0LCBuLCBzcGVlZCkge1xuICAgIHRoaXMuY29udGFpbmVySWQgPSBjb250YWluZXJJZDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5taW5IZWlnaHQgPSA2MDtcbiAgICB0aGlzLm4gPSBuO1xuICAgIHRoaXMubk1pbiA9IDQ7XG4gICAgdGhpcy5uTWF4ID0gMTAwO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLnNwZWVkTWluID0gMTtcbiAgICB0aGlzLnNwZWVkTWF4ID0gNTAwO1xuICAgIHRoaXMuaXNTb3J0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcbiAgICB0aGlzLmFsZ29yaXRobXMgPSBhbGdvcml0aG1zO1xuICAgIHRoaXMuY3VycmVudEFsZ29yaXRobSA9IG51bGw7XG5cbiAgICB0aGlzLmlzU3RvcHBlZCA9IHRoaXMuaXNTdG9wcGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuY3JlYXRlTmF2KHRoaXMuYWxnb3JpdGhtcyk7XG4gICAgdGhpcy5jcmVhdGVCbG9ja3ModGhpcy5uKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbEFsZ29yaXRobShcImJ1YmJsZVwiKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnNldFJhbmdlSW5wdXRQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmFkZEVsZW1lbnRzVmFsSW5wdXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkQnRuc0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGROYXZBbGdvRWxlbXNFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgYWRkRWxlbWVudHNWYWxJbnB1dEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzVmFsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnRzTnVtXCIpO1xuXG4gICAgZWxlbWVudHNWYWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBuID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLm4gPSBwYXJzZUludChuLCAxMCk7XG4gICAgICB0aGlzLmNyZWF0ZUJsb2NrcyhuKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEJ0bnNFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBzb3J0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0QnRuXCIpO1xuICAgIGNvbnN0IHN0b3BCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3BCdG5cIik7XG4gICAgY29uc3QgcmFuZG9taXplQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21pemVCdG5cIik7XG5cbiAgICBzb3J0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcbiAgICAgIGlmICghdGhpcy5pc1NvcnRpbmcpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVJc1NvcnRpbmdTdGF0ZSh0cnVlKTtcblxuICAgICAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrXCIpO1xuICAgICAgICBhd2FpdCB0aGlzLnByZXBhcmVCbG9ja3NGb3JTb3J0KGJsb2Nrcyk7XG4gICAgICAgIGF3YWl0IHRoaXMuY3VycmVudEFsZ29yaXRobShibG9ja3MsIHRoaXMubiwgdGhpcy5pc1N0b3BwZWQpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlSXNTb3J0aW5nU3RhdGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmFuZG9taXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNTb3J0aW5nKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tcIik7XG4gICAgICAgIHRoaXMucmFuZG9taXplQmxvY2tzKGJsb2Nrcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1NvcnRpbmcpIHtcbiAgICAgICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuICAgICAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xlYXJCbG9ja3NDb2xvcihibG9ja3MpLCAzMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGROYXZBbGdvRWxlbXNFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWFsZ29yaXRobS1qc1wiKTtcblxuICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMuY3VycmVudEFsZ29yaXRobSA9IHRoaXMuYWxnb3JpdGhtc1tcbiAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LmFsZ29yaXRobUtleVxuICAgICAgICBdLmZ1bmM7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFJhbmdlSW5wdXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzTnVtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnRzTnVtXCIpO1xuICAgIGVsZW1lbnRzTnVtSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIHRoaXMubk1pbik7XG4gICAgZWxlbWVudHNOdW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgdGhpcy5uTWF4KTtcbiAgICBlbGVtZW50c051bUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRoaXMubik7XG5cbiAgICBjb25zdCBzcGVlZFZhbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGVlZFZhbFwiKTtcbiAgICBzcGVlZFZhbElucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCB0aGlzLnNwZWVkTWluKTtcbiAgICBzcGVlZFZhbElucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCB0aGlzLnNwZWVkTWF4KTtcbiAgICBzcGVlZFZhbElucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRoaXMuc3BlZWQpO1xuICAgIHNwZWVkVmFsSW5wdXQuc3R5bGUuZGlyZWN0aW9uID0gXCJydGxcIjtcbiAgfVxuXG4gIHNldEluaXRpYWxBbGdvcml0aG0oYWxnb0tleSkge1xuICAgIHRoaXMuY3VycmVudEFsZ29yaXRobSA9IHRoaXMuYWxnb3JpdGhtc1thbGdvS2V5XS5mdW5jO1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYWxnb3JpdGhtLWpzXCIpO1xuICAgIGVsZW1zWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cblxuICBoYW5kbGVJc1NvcnRpbmdTdGF0ZShpc1NvcnRpbmcpIHtcbiAgICB0aGlzLmlzU29ydGluZyA9IGlzU29ydGluZztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCdG5cIikuZGlzYWJsZWQgPSBpc1NvcnRpbmc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21pemVCdG5cIikuZGlzYWJsZWQgPSBpc1NvcnRpbmc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50c051bVwiKS5kaXNhYmxlZCA9IGlzU29ydGluZztcbiAgfVxuXG4gIGNyZWF0ZUJsb2NrcyhuKSB7XG4gICAgdGhpcy5jbGVhckNvbnRhaW5lcigpO1xuICAgIGNvbnN0IGJsb2NrV2lkdGggPSBNYXRoLmZsb29yKHRoaXMud2lkdGggLyBuKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjcmVhdGVCbG9jayhcbiAgICAgICAgdGhpcy5jb250YWluZXJJZCxcbiAgICAgICAgYmxvY2tXaWR0aCxcbiAgICAgICAgZ2V0UmFuZG9tTnVtKHRoaXMubWluSGVpZ2h0LCB0aGlzLmhlaWdodCksXG4gICAgICAgIGJhc2VDb2xvclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByYW5kb21pemVCbG9ja3MoYmxvY2tzKSB7XG4gICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICB1cGRhdGVCbG9jayhibG9jaywgZ2V0UmFuZG9tTnVtKHRoaXMubWluSGVpZ2h0LCB0aGlzLmhlaWdodCkpO1xuICAgICAgc2V0QmxvY2tCYWNrZ3JvdW5kKGJsb2NrLCBiYXNlQ29sb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJCbG9ja3NDb2xvcihibG9ja3MpIHtcbiAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgIHNldEJsb2NrQmFja2dyb3VuZChibG9jaywgYmFzZUNvbG9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzU3RvcHBlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1N0b3A7XG4gIH1cblxuICBhc3luYyBwcmVwYXJlQmxvY2tzRm9yU29ydChibG9ja3MpIHtcbiAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgIHNldEJsb2NrQmFja2dyb3VuZChibG9jaywgYmFzZUNvbG9yKTtcbiAgICB9KTtcbiAgICBhd2FpdCBhc3luY0RlbGF5KHRoaXMuc3BlZWQpO1xuICB9XG5cbiAgY3JlYXRlTmF2KGFsZ29yaXRobXMpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcblxuICAgIGZvciAobGV0IFtrZXksIGFsZ29dIG9mIE9iamVjdC5lbnRyaWVzKGFsZ29yaXRobXMpKSB7XG4gICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0ID0gXCJuYXYtYWxnb3JpdGhtLWpzXCI7XG4gICAgICBlbGVtLmlubmVyVGV4dCA9IGFsZ28ubmFtZTtcbiAgICAgIGVsZW0uZGF0YXNldC5hbGdvcml0aG1LZXkgPSBrZXk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDb250YWluZXIoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJZCkuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3J0aW5nVmlzdWFsaXplcjtcbiIsImltcG9ydCB7XG4gIHZpc3VhbGl6ZVN3YXBCbG9ja3MsXG4gIHZpc3VhbGl6ZUJsb2NrcyxcbiAgY3JlYXRlVmFsdWVzQXJyRnJvbUJsb2Nrcyxcbn0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tcIjtcbmltcG9ydCB7IGdyZWVuQ29sb3IsIHJlZENvbG9yLCBiYXNlQ29sb3IgfSBmcm9tIFwiLi4vaGVscGVycy9jb2xvcnNcIjtcbmltcG9ydCBnZXRDdXJyZW50U3BlZWQgZnJvbSBcIi4uL2hlbHBlcnMvZ2V0Q3VycmVudFNwZWVkXCI7XG5pbXBvcnQgeyB3aXRoRW5kVmlzdWFsaXphdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL3dpdGhFbmRWaXN1YWxpemF0aW9uXCI7XG5cbmNvbnN0IGJ1YmJsZVNvcnQgPSBhc3luYyAoYmxvY2tzLCBuLCBpc1N0b3BwZWQpID0+IHtcbiAgY29uc3QgYXJyID0gY3JlYXRlVmFsdWVzQXJyRnJvbUJsb2NrcyhibG9ja3MpO1xuXG4gIGxldCBzd2FwcGVkO1xuXG4gIGRvIHtcbiAgICBzd2FwcGVkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICBpZiAoaXNTdG9wcGVkKCkpIHJldHVybjtcbiAgICAgIGNvbnN0IHNwZWVkID0gZ2V0Q3VycmVudFNwZWVkKCk7XG5cbiAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tpICsgMV0sIGdyZWVuQ29sb3IsIHNwZWVkKTtcbiAgICAgIGlmIChhcnJbaV0gPiBhcnJbaSArIDFdKSB7XG4gICAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tpICsgMV0sIHJlZENvbG9yLCBzcGVlZCk7XG5cbiAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgYXJyW2ldID0gYXJyW2kgKyAxXTtcbiAgICAgICAgYXJyW2kgKyAxXSA9IHRlbXA7XG5cbiAgICAgICAgYXdhaXQgdmlzdWFsaXplU3dhcEJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tpICsgMV0sIHNwZWVkKTtcblxuICAgICAgICBzd2FwcGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tpICsgMV0sIGJhc2VDb2xvciwgc3BlZWQpO1xuICAgIH1cbiAgfSB3aGlsZSAoc3dhcHBlZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRW5kVmlzdWFsaXphdGlvbihidWJibGVTb3J0KTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYnViYmxlU29ydCB9IGZyb20gXCIuL2J1YmJsZVNvcnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VTb3J0IH0gZnJvbSBcIi4vbWVyZ2VTb3J0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHF1aWNrU29ydCB9IGZyb20gXCIuL3F1aWNrU29ydFwiO1xuIiwiaW1wb3J0IHtcbiAgdmlzdWFsaXplQmxvY2tzLFxuICB1cGRhdGVCbG9ja3NGcm9tQXJyYXksXG4gIGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MsXG59IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2NrXCI7XG5pbXBvcnQgZ2V0Q3VycmVudFNwZWVkIGZyb20gXCIuLi9oZWxwZXJzL2dldEN1cnJlbnRTcGVlZFwiO1xuaW1wb3J0IHsgZ3JlZW5Db2xvciwgcmVkQ29sb3IsIGJhc2VDb2xvciB9IGZyb20gXCIuLi9oZWxwZXJzL2NvbG9yc1wiO1xuaW1wb3J0IHsgd2l0aEVuZFZpc3VhbGl6YXRpb24gfSBmcm9tIFwiLi4vaGVscGVycy93aXRoRW5kVmlzdWFsaXphdGlvblwiO1xuXG5jb25zdCBtZXJnZVNvcnQgPSBhc3luYyAoYmxvY2tzLCBuLCBpc1N0b3BwZWQpID0+IHtcbiAgY29uc3QgYXJyID0gY3JlYXRlVmFsdWVzQXJyRnJvbUJsb2NrcyhibG9ja3MpO1xuICBjb25zdCBsZW4gPSBuO1xuXG4gIGZvciAobGV0IHNpemUgPSAxOyBzaXplIDw9IGxlbjsgc2l6ZSA9IHNpemUgKiAyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMiAqIHNpemUpIHtcbiAgICAgIGxldCBsZWZ0ID0gaTtcbiAgICAgIGxldCByaWdodCA9IE1hdGgubWluKHNpemUgKyBpLCBsZW4pO1xuICAgICAgbGV0IGxlZnRUbyA9IHJpZ2h0O1xuICAgICAgbGV0IHJpZ2h0VG8gPSBNYXRoLm1pbihyaWdodCArIHNpemUsIGxlbik7XG5cbiAgICAgIHdoaWxlIChsZWZ0IDwgbGVmdFRvICYmIHJpZ2h0IDwgcmlnaHRUbykge1xuICAgICAgICBpZiAoaXNTdG9wcGVkKCkpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBnZXRDdXJyZW50U3BlZWQoKTtcblxuICAgICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2xlZnRdLCBibG9ja3NbcmlnaHRdLCBncmVlbkNvbG9yLCBzcGVlZCk7XG5cbiAgICAgICAgaWYgKGFycltsZWZ0XSA+PSBhcnJbcmlnaHRdKSB7XG4gICAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tsZWZ0XSwgYmxvY2tzW3JpZ2h0XSwgcmVkQ29sb3IsIHNwZWVkKTtcblxuICAgICAgICAgIGFyci5zcGxpY2UobGVmdCwgMCwgYXJyW3JpZ2h0XSk7XG4gICAgICAgICAgcmlnaHQrKztcbiAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgbGVmdFRvKys7XG4gICAgICAgICAgYXJyLnNwbGljZShyaWdodCwgMSk7XG5cbiAgICAgICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoXG4gICAgICAgICAgICBibG9ja3NbbGVmdCAtIDFdLFxuICAgICAgICAgICAgYmxvY2tzW3JpZ2h0IC0gMV0sXG4gICAgICAgICAgICBiYXNlQ29sb3IsXG4gICAgICAgICAgICBzcGVlZFxuICAgICAgICAgICk7XG4gICAgICAgICAgdXBkYXRlQmxvY2tzRnJvbUFycmF5KGJsb2NrcywgYXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKFxuICAgICAgICAgICAgYmxvY2tzW2xlZnQgLSAxXSxcbiAgICAgICAgICAgIGJsb2Nrc1tyaWdodF0sXG4gICAgICAgICAgICBiYXNlQ29sb3IsXG4gICAgICAgICAgICBzcGVlZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFbmRWaXN1YWxpemF0aW9uKG1lcmdlU29ydCk7XG4iLCJpbXBvcnQge1xuICB2aXN1YWxpemVCbG9ja3MsXG4gIHZpc3VhbGl6ZVN3YXBCbG9ja3MsXG4gIHZpc3VhbGl6ZUJsb2NrLFxuICBjcmVhdGVWYWx1ZXNBcnJGcm9tQmxvY2tzLFxufSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja1wiO1xuaW1wb3J0IGdldEN1cnJlbnRTcGVlZCBmcm9tIFwiLi4vaGVscGVycy9nZXRDdXJyZW50U3BlZWRcIjtcbmltcG9ydCB7XG4gIGdyZWVuQ29sb3IsXG4gIHJlZENvbG9yLFxuICBiYXNlQ29sb3IsXG4gIHllbGxvd0NvbG9yLFxufSBmcm9tIFwiLi4vaGVscGVycy9jb2xvcnNcIjtcbmltcG9ydCB7IHdpdGhFbmRWaXN1YWxpemF0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvd2l0aEVuZFZpc3VhbGl6YXRpb25cIjtcblxuY29uc3QgcGFydGl0aW9uID0gYXN5bmMgKGFyciwgc3RhcnQsIGVuZCwgYmxvY2tzLCBpc1N0b3BwZWQpID0+IHtcbiAgbGV0IGkgPSBzdGFydCArIDE7XG4gIGxldCBwaXYgPSBhcnJbc3RhcnRdO1xuXG4gIGF3YWl0IHZpc3VhbGl6ZUJsb2NrKGJsb2Nrc1tzdGFydF0sIHllbGxvd0NvbG9yLCBnZXRDdXJyZW50U3BlZWQoKSk7XG5cbiAgZm9yIChsZXQgaiA9IHN0YXJ0ICsgMTsgaiA8PSBlbmQ7IGorKykge1xuICAgIGlmIChpc1N0b3BwZWQoKSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3BlZWQgPSBnZXRDdXJyZW50U3BlZWQoKTtcblxuICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tqXSwgZ3JlZW5Db2xvciwgc3BlZWQpO1xuXG4gICAgaWYgKGFycltqXSA8IHBpdikge1xuICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2pdLCByZWRDb2xvciwgc3BlZWQpO1xuXG4gICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgYXJyW2pdID0gdGVtcDtcblxuICAgICAgLy8gU3dhcFxuICAgICAgYXdhaXQgdmlzdWFsaXplU3dhcEJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tqXSwgc3BlZWQpO1xuICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2pdLCBiYXNlQ29sb3IsIHNwZWVkKTtcblxuICAgICAgaSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3Nbal0sIGJhc2VDb2xvciwgc3BlZWQpO1xuICAgIH1cbiAgfVxuICAvLyBQdXQgcGl2b3QgaW4gaXRzIHByb3BlciBwbGFjZVxuICBjb25zdCB0ZW1wID0gYXJyW3N0YXJ0XTtcbiAgYXJyW3N0YXJ0XSA9IGFycltpIC0gMV07XG4gIGFycltpIC0gMV0gPSB0ZW1wO1xuXG4gIGF3YWl0IHZpc3VhbGl6ZVN3YXBCbG9ja3MoYmxvY2tzW3N0YXJ0XSwgYmxvY2tzW2kgLSAxXSwgZ2V0Q3VycmVudFNwZWVkKCkpO1xuICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoXG4gICAgYmxvY2tzW3N0YXJ0XSxcbiAgICBibG9ja3NbaSAtIDFdLFxuICAgIGJhc2VDb2xvcixcbiAgICBnZXRDdXJyZW50U3BlZWQoKVxuICApO1xuXG4gIHJldHVybiBpIC0gMTtcbn07XG5cbmNvbnN0IHF1aWNrU29ydEFsZ28gPSBhc3luYyAoYXJyLCBzdGFydCwgZW5kLCBibG9ja3MsIGlzU3RvcHBlZCkgPT4ge1xuICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICBsZXQgcGl2b3RQb3MgPSBhd2FpdCBwYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kLCBibG9ja3MsIGlzU3RvcHBlZCk7XG4gICAgaWYgKGlzU3RvcHBlZCgpKSByZXR1cm47XG5cbiAgICBhd2FpdCBxdWlja1NvcnRBbGdvKGFyciwgc3RhcnQsIHBpdm90UG9zIC0gMSwgYmxvY2tzLCBpc1N0b3BwZWQpO1xuICAgIGF3YWl0IHF1aWNrU29ydEFsZ28oYXJyLCBwaXZvdFBvcyArIDEsIGVuZCwgYmxvY2tzLCBpc1N0b3BwZWQpO1xuICB9XG59O1xuXG5jb25zdCBxdWlja1NvcnQgPSBhc3luYyAoYmxvY2tzLCBuLCBpc1N0b3BwZWQpID0+IHtcbiAgY29uc3QgYXJyID0gY3JlYXRlVmFsdWVzQXJyRnJvbUJsb2NrcyhibG9ja3MpO1xuXG4gIGF3YWl0IHF1aWNrU29ydEFsZ28oYXJyLCAwLCBuIC0gMSwgYmxvY2tzLCBpc1N0b3BwZWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVuZFZpc3VhbGl6YXRpb24ocXVpY2tTb3J0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=