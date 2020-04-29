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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/assets/sass/main.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/assets/sass/main.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../font/Abel-Regular.ttf */ "./src/assets/font/Abel-Regular.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Abel\", sans-serif;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  width: 100vw;\n  overflow-x: hidden;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  margin: 0;\n  background: #fafafa;\n}\n\n.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nhtml,\nbutton,\nlabel,\ninput {\n  font-family: sans-serif;\n  font-size: 16px;\n}\n\n.container {\n  position: relative;\n  width: calc(100% - 30px);\n  max-width: 1200px;\n  height: calc(100% - 102px);\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 25px auto 0;\n}\n\n.header {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #232323;\n}\n.header__inner {\n  height: 100%;\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .navigation {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .navigation > div {\n  color: #fff;\n  height: 100%;\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: color 0.15s ease-in;\n}\n.header__inner .navigation > div:hover, .header__inner .navigation > div:focus, .header__inner .navigation > div:active, .header__inner .navigation > div.active {\n  color: #1ee0eb;\n  background: #3d3d3d;\n}\n.header__inner .navigation > div.blocked {\n  color: grey;\n  background: transparent;\n  cursor: default;\n}\n.header__inner .input-group {\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .input-group > label {\n  color: #fff;\n  padding-right: 15px;\n}\n.header__inner .btn {\n  color: #fff;\n  height: 100%;\n  padding: 0 15px;\n  border: none;\n  background: transparent;\n  transition: background-color, color 0.15s ease-in;\n  outline: none;\n  cursor: pointer;\n}\n.header__inner .btn:disabled, .header__inner .btn:disabled:hover {\n  color: grey;\n  background: transparent;\n  cursor: default;\n}\n.header__inner .btn:hover {\n  color: #1ee0eb;\n  background: #494949;\n}\n.header__inner .btn:focus, .header__inner .btn:active {\n  outline: none;\n}\n\n.block {\n  position: relative;\n  display: inline-block;\n  padding-top: 10px;\n  text-align: center;\n  color: #fff;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n  /* Hides the slider so that custom slider can be made */\n  width: 100%;\n  /* Specific width is required for Firefox. */\n  background: transparent;\n  /* Otherwise white in Chrome */\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\ninput[type=range]:focus {\n  outline: none;\n  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n/* Special styling for WebKit/Blink */\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: 1px solid #000000;\n  height: 20px;\n  width: 10px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n  margin-top: -7px;\n  /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  /* Add cool effects to your sliders! */\n}\n\n/* All the same stuff for Firefox */\ninput[type=range]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 20px;\n  width: 10px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n}\n\n/* All the same stuff for IE */\ninput[type=range]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #1ee0eb;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #14d6e1;\n}\n\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #1ee0eb;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  border-width: 16px 0;\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #11bbc5;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #1ee0eb;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: #1ee0eb;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #4de6ef;\n}\n\ninput[type=range]:disabled::-webkit-slider-thumb {\n  background-color: grey;\n  border-color: grey;\n  cursor: default;\n}\ninput[type=range]:disabled::-webkit-slider-runnable-track {\n  background-color: lightgrey;\n  cursor: default;\n}\ninput[type=range]:disabled::-moz-range-thumb {\n  background-color: grey;\n  border-color: grey;\n}\ninput[type=range]:disabled::-moz-range-track {\n  cursor: default;\n}\ninput[type=range]:disabled::-ms-thumb {\n  background-color: grey;\n  border-color: grey;\n}", ""]);
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
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/assets/sass/main.scss");

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

const swapProperties = (block_1, block_2) => {
  const tempValue_1 = block_1.dataset.value;
  const tempBgColor_1 = block_1.style.backgroundColor;

  updateBlock(block_1, block_2.dataset.value);
  block_1.style.backgroundColor = block_2.style.backgroundColor;

  updateBlock(block_2, tempValue_1);
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
  const blockWidth = block.style.width.slice(0, 2);
  if (blockWidth > 23) {
    block.innerText = value;
  }
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

  const speed = Math.min(Object(_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_0__["default"])() + 1000 / n);
  for (let j = 0; j < n; j++) {
    if (isStopped()) return;
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
        this.clearBlocksColor(blocks);
        this.randomizeBlocks(blocks);
      }
    });

    stopBtn.addEventListener("click", () => {
      if (this.isSorting) {
        this.isStop = true;
        const blocks = document.querySelectorAll(".block");
      }
    });
  }

  addNavAlgoElemsEventListeners() {
    const elems = document.querySelectorAll(".nav-algorithm-js");

    elems.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        const isBlocked = e.target.classList.contains("blocked");
        if (isBlocked) return;

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
    this.handleOtherNavAlgorithms(isSorting);
  }

  handleOtherNavAlgorithms(isSorting) {
    const elems = document.querySelectorAll(".nav-algorithm-js");

    if (isSorting) {
      elems.forEach((elem) =>
        !elem.classList.contains("active")
          ? elem.classList.add("blocked")
          : null
      );
    } else {
      elems.forEach((elem) =>
        elem.classList.contains("blocked")
          ? elem.classList.remove("blocked")
          : null
      );
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9BYmVsLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Fzcy9tYWluLnNjc3M/ODkxNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9hc3luY0RlbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hlbHBlcnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9nZXRDdXJyZW50U3BlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy9nZXRSYW5kb21OdW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaGVscGVycy93aXRoRW5kVmlzdWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nLXZpc3VhbGl6ZXIvU29ydGluZ1Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvYnViYmxlU29ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nQWxnb3JpdGhtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zb3J0aW5nQWxnb3JpdGhtcy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvcXVpY2tTb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRyxzQ0FBc0MsbUJBQU8sQ0FBQyxpSEFBeUQ7QUFDdkcsb0NBQW9DLG1CQUFPLENBQUMsb0VBQTBCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLHNDQUFzQyx5RUFBeUUscUJBQXFCLHVCQUF1QixHQUFHLEtBQUssMkJBQTJCLEdBQUcsVUFBVSxpQkFBaUIsdUJBQXVCLEdBQUcsVUFBVSxrQkFBa0IsZ0JBQWdCLGNBQWMsd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixzQkFBc0IsbUJB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RUFBZTtBQUN6RSxRQUFRLHNFQUFlO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLHlEQUFTO0FBQ2IsSUFBSSx3RUFBZTtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxnRkFBeUI7O0FBRXZDO0FBQ0E7O0FBRWUseUpBQW9CLFdBQVcsRUFBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vZm9udC9BYmVsLVJlZ3VsYXIudHRmXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWJlbFxcXCIsIHNhbnMtc2VyaWY7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmh0bWwsXFxuYnV0dG9uLFxcbmxhYmVsLFxcbmlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDJweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW46IDI1cHggYXV0byAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxufVxcbi5oZWFkZXJfX2lubmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluO1xcbn1cXG4uaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdjpob3ZlciwgLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXY6Zm9jdXMsIC5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2OmFjdGl2ZSwgLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXYuYWN0aXZlIHtcXG4gIGNvbG9yOiAjMWVlMGViO1xcbiAgYmFja2dyb3VuZDogIzNkM2QzZDtcXG59XFxuLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXYuYmxvY2tlZCB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uaGVhZGVyX19pbm5lciAuaW5wdXQtZ3JvdXAge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmlucHV0LWdyb3VwID4gbGFiZWwge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG4uaGVhZGVyX19pbm5lciAuYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciAwLjE1cyBlYXNlLWluO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0bjpkaXNhYmxlZCwgLmhlYWRlcl9faW5uZXIgLmJ0bjpkaXNhYmxlZDpob3ZlciB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uaGVhZGVyX19pbm5lciAuYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjMWVlMGViO1xcbiAgYmFja2dyb3VuZDogIzQ5NDk0OTtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0bjpmb2N1cywgLmhlYWRlcl9faW5uZXIgLmJ0bjphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAvKiBIaWRlcyB0aGUgc2xpZGVyIHNvIHRoYXQgY3VzdG9tIHNsaWRlciBjYW4gYmUgbWFkZSAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBTcGVjaWZpYyB3aWR0aCBpcyByZXF1aXJlZCBmb3IgRmlyZWZveC4gKi9cXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLyogT3RoZXJ3aXNlIHdoaXRlIGluIENocm9tZSAqL1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLyogUmVtb3ZlcyB0aGUgYmx1ZSBib3JkZXIuIFlvdSBzaG91bGQgcHJvYmFibHkgZG8gc29tZSBraW5kIG9mIGZvY3VzIHN0eWxpbmcgZm9yIGFjY2Vzc2liaWxpdHkgcmVhc29ucyB0aG91Z2guICovXFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKiBIaWRlcyB0aGUgc2xpZGVyIHNvIGN1c3RvbSBzdHlsZXMgY2FuIGJlIGFkZGVkICovXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIFNwZWNpYWwgc3R5bGluZyBmb3IgV2ViS2l0L0JsaW5rICovXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtN3B4O1xcbiAgLyogWW91IG5lZWQgdG8gc3BlY2lmeSBhIG1hcmdpbiBpbiBDaHJvbWUsIGJ1dCBpbiBGaXJlZm94IGFuZCBJRSBpdCBpcyBhdXRvbWF0aWMgKi9cXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxuICAvKiBBZGQgY29vbCBlZmZlY3RzIHRvIHlvdXIgc2xpZGVycyEgKi9cXG59XFxuXFxuLyogQWxsIHRoZSBzYW1lIHN0dWZmIGZvciBGaXJlZm94ICovXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEFsbCB0aGUgc2FtZSBzdHVmZiBmb3IgSUUgKi9cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1iIHtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxuICBiYWNrZ3JvdW5kOiAjMWVlMGViO1xcbiAgYm9yZGVyLXJhZGl1czogMS4zcHg7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjMTRkNmUxO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJhY2tncm91bmQ6ICMxZWUwZWI7XFxuICBib3JkZXItcmFkaXVzOiAxLjNweDtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzAxMDEwMTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAxNnB4IDA7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlciB7XFxuICBiYWNrZ3JvdW5kOiAjMTFiYmM1O1xcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMDEwMTAxO1xcbiAgYm9yZGVyLXJhZGl1czogMi42cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtbG93ZXIge1xcbiAgYmFja2dyb3VuZDogIzFlZTBlYjtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLXVwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICMxZWUwZWI7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XFxuICBib3JkZXItcmFkaXVzOiAyLjZweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC11cHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjNGRlNmVmO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV06ZGlzYWJsZWQ6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV06ZGlzYWJsZWQ6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV06ZGlzYWJsZWQ6Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LW1zLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZThiODEwYjhmMjM2NGU3OTEyMDVkNmYxMmM1YmUzYmYudHRmXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFwiLi9hc3NldHMvc2Fzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBTb3J0aW5nVmlzdWFsaXplciBmcm9tIFwiLi9tb2R1bGVzL3NvcnRpbmctdmlzdWFsaXplci9Tb3J0aW5nVmlzdWFsaXplclwiO1xuaW1wb3J0IHsgYnViYmxlU29ydCwgbWVyZ2VTb3J0LCBxdWlja1NvcnQgfSBmcm9tIFwiLi9tb2R1bGVzL3NvcnRpbmdBbGdvcml0aG1zXCI7XG5cbmNvbnN0IHNvcnRBbGdvcml0aG1zID0ge1xuICBidWJibGU6IHtcbiAgICBuYW1lOiBcIkJ1YmJsZSBTb3J0XCIsXG4gICAgZnVuYzogYnViYmxlU29ydCxcbiAgfSxcbiAgbWVyZ2U6IHtcbiAgICBuYW1lOiBcIk1lcmdlIFNvcnRcIixcbiAgICBmdW5jOiBtZXJnZVNvcnQsXG4gIH0sXG4gIHF1aWNrOiB7XG4gICAgbmFtZTogXCJRdWljayBTb3J0XCIsXG4gICAgZnVuYzogcXVpY2tTb3J0LFxuICB9LFxufTtcblxuY29uc3Qgc29ydGluZ1Zpc3VhbGl6ZXIgPSBuZXcgU29ydGluZ1Zpc3VhbGl6ZXIoXG4gIHNvcnRBbGdvcml0aG1zLFxuICBcImNvbnRhaW5lclwiLFxuICAxMjAwLFxuICA2MDAsXG4gIDQsXG4gIDUwXG4pO1xuc29ydGluZ1Zpc3VhbGl6ZXIuaW5pdGlhbGl6ZSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKG1zKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVCbG9jayA9IChwYXJlbnRJZCwgd2lkdGgsIGhlaWdodCwgYmdDb2xvcikgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZCk7XG5cbiAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBibG9jay5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgYmxvY2suc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgYmxvY2suc3R5bGUubWFyZ2luUmlnaHQgPSBgJHtNYXRoLmZsb29yKHdpZHRoIC8gNSl9cHhgO1xuICBibG9jay5zdHlsZS5mb250U2l6ZSA9IGAke01hdGguZmxvb3Iod2lkdGggLyA1KX1weGA7XG4gIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnQ29sb3I7XG4gIGJsb2NrLmNsYXNzTGlzdCA9IFwiYmxvY2tcIjtcblxuICBpZiAod2lkdGggPiAyMykge1xuICAgIGJsb2NrLmlubmVyVGV4dCA9IGhlaWdodDtcbiAgfVxuICBibG9jay5kYXRhc2V0LnZhbHVlID0gaGVpZ2h0O1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChibG9jayk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQmxvY2tzID0gKCkgPT4ge1xuICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrXCIpO1xuICByZXR1cm4gYmxvY2tzO1xufTtcblxuY29uc3Qgc3dhcFByb3BlcnRpZXMgPSAoYmxvY2tfMSwgYmxvY2tfMikgPT4ge1xuICBjb25zdCB0ZW1wVmFsdWVfMSA9IGJsb2NrXzEuZGF0YXNldC52YWx1ZTtcbiAgY29uc3QgdGVtcEJnQ29sb3JfMSA9IGJsb2NrXzEuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuXG4gIHVwZGF0ZUJsb2NrKGJsb2NrXzEsIGJsb2NrXzIuZGF0YXNldC52YWx1ZSk7XG4gIGJsb2NrXzEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmxvY2tfMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG5cbiAgdXBkYXRlQmxvY2soYmxvY2tfMiwgdGVtcFZhbHVlXzEpO1xuICBibG9ja18yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRlbXBCZ0NvbG9yXzE7XG59O1xuXG5leHBvcnQgY29uc3QgdmlzdWFsaXplU3dhcEJsb2NrcyA9IGFzeW5jIChibG9ja18xLCBibG9ja18yLCBzcGVlZCkgPT4ge1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHN3YXBQcm9wZXJ0aWVzKGJsb2NrXzEsIGJsb2NrXzIsIHNwZWVkKTtcbiAgICAgIHNldFRpbWVvdXQocmVzLCBzcGVlZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJsb2NrID0gKGJsb2NrLCB2YWx1ZSkgPT4ge1xuICBjb25zdCBibG9ja1dpZHRoID0gYmxvY2suc3R5bGUud2lkdGguc2xpY2UoMCwgMik7XG4gIGlmIChibG9ja1dpZHRoID4gMjMpIHtcbiAgICBibG9jay5pbm5lclRleHQgPSB2YWx1ZTtcbiAgfVxuICBibG9jay5kYXRhc2V0LnZhbHVlID0gdmFsdWU7XG4gIGJsb2NrLnN0eWxlLmhlaWdodCA9IGAke3ZhbHVlfXB4YDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRCbG9ja0JhY2tncm91bmQgPSAoYmxvY2ssIGNvbG9yKSA9PiB7XG4gIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJsb2Nrc0Zyb21BcnJheSA9IChibG9ja3MsIGFycikgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHVwZGF0ZUJsb2NrKGJsb2Nrc1tpXSwgYXJyW2ldKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MgPSAoYmxvY2tzKSA9PiB7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBibG9ja3MuZm9yRWFjaCgoZWxlbSkgPT4gYXJyLnB1c2gocGFyc2VJbnQoZWxlbS5kYXRhc2V0LnZhbHVlLCAxMCkpKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cbmV4cG9ydCBjb25zdCB2aXN1YWxpemVCbG9ja3MgPSAoYmxvY2tfMSwgYmxvY2tfMiwgY29sb3IsIHNwZWVkKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGJsb2NrXzEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICBibG9ja18yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQocmVzLCBzcGVlZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpc3VhbGl6ZUJsb2NrID0gKGJsb2NrLCBjb2xvciwgc3BlZWQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChyZXMsIHNwZWVkKTtcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHJlZENvbG9yID0gXCIjZWU1NTRhXCI7XG5leHBvcnQgY29uc3QgZ3JlZW5Db2xvciA9IFwiIzY5YzY1M1wiO1xuZXhwb3J0IGNvbnN0IHllbGxvd0NvbG9yID0gXCIjZjFlMDU5XCI7XG5leHBvcnQgY29uc3QgcHVycGxlQ29sb3IgPSBcInB1cnBsZVwiO1xuZXhwb3J0IGNvbnN0IGJhc2VDb2xvciA9IFwiIzRjYzhlYVwiO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBzcGVlZCA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BlZWRWYWxcIikudmFsdWUsIDEwKTtcbiAgcmV0dXJuIHNwZWVkO1xufTtcbiIsImV4cG9ydCBjb25zdCBnZXRSYW5kb21OdW0gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW47XG4iLCJpbXBvcnQgZ2V0Q3VycmVudFNwZWVkIGZyb20gXCIuL2dldEN1cnJlbnRTcGVlZFwiO1xuaW1wb3J0IHsgdmlzdWFsaXplQmxvY2sgfSBmcm9tIFwiLi9ibG9ja1wiO1xuaW1wb3J0IHsgcHVycGxlQ29sb3IgfSBmcm9tIFwiLi9jb2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IHdpdGhFbmRWaXN1YWxpemF0aW9uID0gKGZ1bmMpID0+IGFzeW5jIChibG9ja3MsIG4sIGlzU3RvcHBlZCkgPT4ge1xuICBhd2FpdCBmdW5jKGJsb2NrcywgbiwgaXNTdG9wcGVkKTtcblxuICBjb25zdCBzcGVlZCA9IE1hdGgubWluKGdldEN1cnJlbnRTcGVlZCgpICsgMTAwMCAvIG4pO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGlmIChpc1N0b3BwZWQoKSkgcmV0dXJuO1xuICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrKGJsb2Nrc1tqXSwgcHVycGxlQ29sb3IsIHNwZWVkKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUJsb2NrLCB1cGRhdGVCbG9jaywgc2V0QmxvY2tCYWNrZ3JvdW5kIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tcIjtcbmltcG9ydCB7IGJhc2VDb2xvciB9IGZyb20gXCIuLi9oZWxwZXJzL2NvbG9yc1wiO1xuaW1wb3J0IGFzeW5jRGVsYXkgZnJvbSBcIi4uL2hlbHBlcnMvYXN5bmNEZWxheVwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tTnVtIH0gZnJvbSBcIi4uL2hlbHBlcnMvZ2V0UmFuZG9tTnVtXCI7XG5pbXBvcnQgeyB3aXRoRW5kVmlzdWFsaXphdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL3dpdGhFbmRWaXN1YWxpemF0aW9uXCI7XG5cbmNsYXNzIFNvcnRpbmdWaXN1YWxpemVyIHtcbiAgY29uc3RydWN0b3IoYWxnb3JpdGhtcywgY29udGFpbmVySWQsIHdpZHRoLCBoZWlnaHQsIG4sIHNwZWVkKSB7XG4gICAgdGhpcy5jb250YWluZXJJZCA9IGNvbnRhaW5lcklkO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLm1pbkhlaWdodCA9IDYwO1xuICAgIHRoaXMubiA9IG47XG4gICAgdGhpcy5uTWluID0gNDtcbiAgICB0aGlzLm5NYXggPSAxMDA7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuc3BlZWRNaW4gPSAxO1xuICAgIHRoaXMuc3BlZWRNYXggPSA1MDA7XG4gICAgdGhpcy5pc1NvcnRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgIHRoaXMuYWxnb3JpdGhtcyA9IGFsZ29yaXRobXM7XG4gICAgdGhpcy5jdXJyZW50QWxnb3JpdGhtID0gbnVsbDtcblxuICAgIHRoaXMuaXNTdG9wcGVkID0gdGhpcy5pc1N0b3BwZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5jcmVhdGVOYXYodGhpcy5hbGdvcml0aG1zKTtcbiAgICB0aGlzLmNyZWF0ZUJsb2Nrcyh0aGlzLm4pO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsQWxnb3JpdGhtKFwiYnViYmxlXCIpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc2V0UmFuZ2VJbnB1dFByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuYWRkRWxlbWVudHNWYWxJbnB1dEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGRCdG5zRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZE5hdkFsZ29FbGVtc0V2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRFbGVtZW50c1ZhbElucHV0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgZWxlbWVudHNWYWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudHNOdW1cIik7XG5cbiAgICBlbGVtZW50c1ZhbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMubiA9IHBhcnNlSW50KG4sIDEwKTtcbiAgICAgIHRoaXMuY3JlYXRlQmxvY2tzKG4pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQnRuc0V2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHNvcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCdG5cIik7XG4gICAgY29uc3Qgc3RvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcEJ0blwiKTtcbiAgICBjb25zdCByYW5kb21pemVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbWl6ZUJ0blwiKTtcblxuICAgIHNvcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgICAgaWYgKCF0aGlzLmlzU29ydGluZykge1xuICAgICAgICB0aGlzLmhhbmRsZUlzU29ydGluZ1N0YXRlKHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tcIik7XG4gICAgICAgIGF3YWl0IHRoaXMucHJlcGFyZUJsb2Nrc0ZvclNvcnQoYmxvY2tzKTtcbiAgICAgICAgYXdhaXQgdGhpcy5jdXJyZW50QWxnb3JpdGhtKGJsb2NrcywgdGhpcy5uLCB0aGlzLmlzU3RvcHBlZCk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVJc1NvcnRpbmdTdGF0ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByYW5kb21pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc1NvcnRpbmcpIHtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja1wiKTtcbiAgICAgICAgdGhpcy5jbGVhckJsb2Nrc0NvbG9yKGJsb2Nrcyk7XG4gICAgICAgIHRoaXMucmFuZG9taXplQmxvY2tzKGJsb2Nrcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1NvcnRpbmcpIHtcbiAgICAgICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuICAgICAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkTmF2QWxnb0VsZW1zRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hbGdvcml0aG0tanNcIik7XG5cbiAgICBlbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpc0Jsb2NrZWQgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJibG9ja2VkXCIpO1xuICAgICAgICBpZiAoaXNCbG9ja2VkKSByZXR1cm47XG5cbiAgICAgICAgZWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWxnb3JpdGhtID0gdGhpcy5hbGdvcml0aG1zW1xuICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQuYWxnb3JpdGhtS2V5XG4gICAgICAgIF0uZnVuYztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0UmFuZ2VJbnB1dFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgZWxlbWVudHNOdW1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudHNOdW1cIik7XG4gICAgZWxlbWVudHNOdW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdGhpcy5uTWluKTtcbiAgICBlbGVtZW50c051bUlucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCB0aGlzLm5NYXgpO1xuICAgIGVsZW1lbnRzTnVtSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGhpcy5uKTtcblxuICAgIGNvbnN0IHNwZWVkVmFsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWVkVmFsXCIpO1xuICAgIHNwZWVkVmFsSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIHRoaXMuc3BlZWRNaW4pO1xuICAgIHNwZWVkVmFsSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIHRoaXMuc3BlZWRNYXgpO1xuICAgIHNwZWVkVmFsSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGhpcy5zcGVlZCk7XG4gICAgc3BlZWRWYWxJbnB1dC5zdHlsZS5kaXJlY3Rpb24gPSBcInJ0bFwiO1xuICB9XG5cbiAgc2V0SW5pdGlhbEFsZ29yaXRobShhbGdvS2V5KSB7XG4gICAgdGhpcy5jdXJyZW50QWxnb3JpdGhtID0gdGhpcy5hbGdvcml0aG1zW2FsZ29LZXldLmZ1bmM7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hbGdvcml0aG0tanNcIik7XG4gICAgZWxlbXNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIGhhbmRsZUlzU29ydGluZ1N0YXRlKGlzU29ydGluZykge1xuICAgIHRoaXMuaXNTb3J0aW5nID0gaXNTb3J0aW5nO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ0blwiKS5kaXNhYmxlZCA9IGlzU29ydGluZztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbWl6ZUJ0blwiKS5kaXNhYmxlZCA9IGlzU29ydGluZztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnRzTnVtXCIpLmRpc2FibGVkID0gaXNTb3J0aW5nO1xuICAgIHRoaXMuaGFuZGxlT3RoZXJOYXZBbGdvcml0aG1zKGlzU29ydGluZyk7XG4gIH1cblxuICBoYW5kbGVPdGhlck5hdkFsZ29yaXRobXMoaXNTb3J0aW5nKSB7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hbGdvcml0aG0tanNcIik7XG5cbiAgICBpZiAoaXNTb3J0aW5nKSB7XG4gICAgICBlbGVtcy5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgICAhZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICAgICAgICA/IGVsZW0uY2xhc3NMaXN0LmFkZChcImJsb2NrZWRcIilcbiAgICAgICAgICA6IG51bGxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvY2tlZFwiKVxuICAgICAgICAgID8gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2tlZFwiKVxuICAgICAgICAgIDogbnVsbFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCbG9ja3Mobikge1xuICAgIHRoaXMuY2xlYXJDb250YWluZXIoKTtcbiAgICBjb25zdCBibG9ja1dpZHRoID0gTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY3JlYXRlQmxvY2soXG4gICAgICAgIHRoaXMuY29udGFpbmVySWQsXG4gICAgICAgIGJsb2NrV2lkdGgsXG4gICAgICAgIGdldFJhbmRvbU51bSh0aGlzLm1pbkhlaWdodCwgdGhpcy5oZWlnaHQpLFxuICAgICAgICBiYXNlQ29sb3JcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmFuZG9taXplQmxvY2tzKGJsb2Nrcykge1xuICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgdXBkYXRlQmxvY2soYmxvY2ssIGdldFJhbmRvbU51bSh0aGlzLm1pbkhlaWdodCwgdGhpcy5oZWlnaHQpKTtcbiAgICAgIHNldEJsb2NrQmFja2dyb3VuZChibG9jaywgYmFzZUNvbG9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyQmxvY2tzQ29sb3IoYmxvY2tzKSB7XG4gICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBzZXRCbG9ja0JhY2tncm91bmQoYmxvY2ssIGJhc2VDb2xvcik7XG4gICAgfSk7XG4gIH1cblxuICBpc1N0b3BwZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTdG9wO1xuICB9XG5cbiAgYXN5bmMgcHJlcGFyZUJsb2Nrc0ZvclNvcnQoYmxvY2tzKSB7XG4gICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBzZXRCbG9ja0JhY2tncm91bmQoYmxvY2ssIGJhc2VDb2xvcik7XG4gICAgfSk7XG4gICAgYXdhaXQgYXN5bmNEZWxheSh0aGlzLnNwZWVkKTtcbiAgfVxuXG4gIGNyZWF0ZU5hdihhbGdvcml0aG1zKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5cbiAgICBmb3IgKGxldCBba2V5LCBhbGdvXSBvZiBPYmplY3QuZW50cmllcyhhbGdvcml0aG1zKSkge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdCA9IFwibmF2LWFsZ29yaXRobS1qc1wiO1xuICAgICAgZWxlbS5pbm5lclRleHQgPSBhbGdvLm5hbWU7XG4gICAgICBlbGVtLmRhdGFzZXQuYWxnb3JpdGhtS2V5ID0ga2V5O1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyQ29udGFpbmVyKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVySWQpLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29ydGluZ1Zpc3VhbGl6ZXI7XG4iLCJpbXBvcnQge1xuICB2aXN1YWxpemVTd2FwQmxvY2tzLFxuICB2aXN1YWxpemVCbG9ja3MsXG4gIGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MsXG59IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2NrXCI7XG5pbXBvcnQgeyBncmVlbkNvbG9yLCByZWRDb2xvciwgYmFzZUNvbG9yIH0gZnJvbSBcIi4uL2hlbHBlcnMvY29sb3JzXCI7XG5pbXBvcnQgZ2V0Q3VycmVudFNwZWVkIGZyb20gXCIuLi9oZWxwZXJzL2dldEN1cnJlbnRTcGVlZFwiO1xuaW1wb3J0IHsgd2l0aEVuZFZpc3VhbGl6YXRpb24gfSBmcm9tIFwiLi4vaGVscGVycy93aXRoRW5kVmlzdWFsaXphdGlvblwiO1xuXG5jb25zdCBidWJibGVTb3J0ID0gYXN5bmMgKGJsb2NrcywgbiwgaXNTdG9wcGVkKSA9PiB7XG4gIGNvbnN0IGFyciA9IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MoYmxvY2tzKTtcblxuICBsZXQgc3dhcHBlZDtcblxuICBkbyB7XG4gICAgc3dhcHBlZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgaWYgKGlzU3RvcHBlZCgpKSByZXR1cm47XG4gICAgICBjb25zdCBzcGVlZCA9IGdldEN1cnJlbnRTcGVlZCgpO1xuXG4gICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3NbaSArIDFdLCBncmVlbkNvbG9yLCBzcGVlZCk7XG4gICAgICBpZiAoYXJyW2ldID4gYXJyW2kgKyAxXSkge1xuICAgICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3NbaSArIDFdLCByZWRDb2xvciwgc3BlZWQpO1xuXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgIGFycltpXSA9IGFycltpICsgMV07XG4gICAgICAgIGFycltpICsgMV0gPSB0ZW1wO1xuXG4gICAgICAgIGF3YWl0IHZpc3VhbGl6ZVN3YXBCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3NbaSArIDFdLCBzcGVlZCk7XG5cbiAgICAgICAgc3dhcHBlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3NbaSArIDFdLCBiYXNlQ29sb3IsIHNwZWVkKTtcbiAgICB9XG4gIH0gd2hpbGUgKHN3YXBwZWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVuZFZpc3VhbGl6YXRpb24oYnViYmxlU29ydCk7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGJ1YmJsZVNvcnQgfSBmcm9tIFwiLi9idWJibGVTb3J0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlU29ydCB9IGZyb20gXCIuL21lcmdlU29ydFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBxdWlja1NvcnQgfSBmcm9tIFwiLi9xdWlja1NvcnRcIjtcbiIsImltcG9ydCB7XG4gIHZpc3VhbGl6ZUJsb2NrcyxcbiAgdXBkYXRlQmxvY2tzRnJvbUFycmF5LFxuICBjcmVhdGVWYWx1ZXNBcnJGcm9tQmxvY2tzLFxufSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja1wiO1xuaW1wb3J0IGdldEN1cnJlbnRTcGVlZCBmcm9tIFwiLi4vaGVscGVycy9nZXRDdXJyZW50U3BlZWRcIjtcbmltcG9ydCB7IGdyZWVuQ29sb3IsIHJlZENvbG9yLCBiYXNlQ29sb3IgfSBmcm9tIFwiLi4vaGVscGVycy9jb2xvcnNcIjtcbmltcG9ydCB7IHdpdGhFbmRWaXN1YWxpemF0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvd2l0aEVuZFZpc3VhbGl6YXRpb25cIjtcblxuY29uc3QgbWVyZ2VTb3J0ID0gYXN5bmMgKGJsb2NrcywgbiwgaXNTdG9wcGVkKSA9PiB7XG4gIGNvbnN0IGFyciA9IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MoYmxvY2tzKTtcbiAgY29uc3QgbGVuID0gbjtcblxuICBmb3IgKGxldCBzaXplID0gMTsgc2l6ZSA8PSBsZW47IHNpemUgPSBzaXplICogMikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDIgKiBzaXplKSB7XG4gICAgICBsZXQgbGVmdCA9IGk7XG4gICAgICBsZXQgcmlnaHQgPSBNYXRoLm1pbihzaXplICsgaSwgbGVuKTtcbiAgICAgIGxldCBsZWZ0VG8gPSByaWdodDtcbiAgICAgIGxldCByaWdodFRvID0gTWF0aC5taW4ocmlnaHQgKyBzaXplLCBsZW4pO1xuXG4gICAgICB3aGlsZSAobGVmdCA8IGxlZnRUbyAmJiByaWdodCA8IHJpZ2h0VG8pIHtcbiAgICAgICAgaWYgKGlzU3RvcHBlZCgpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNwZWVkID0gZ2V0Q3VycmVudFNwZWVkKCk7XG5cbiAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tsZWZ0XSwgYmxvY2tzW3JpZ2h0XSwgZ3JlZW5Db2xvciwgc3BlZWQpO1xuXG4gICAgICAgIGlmIChhcnJbbGVmdF0gPj0gYXJyW3JpZ2h0XSkge1xuICAgICAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbbGVmdF0sIGJsb2Nrc1tyaWdodF0sIHJlZENvbG9yLCBzcGVlZCk7XG5cbiAgICAgICAgICBhcnIuc3BsaWNlKGxlZnQsIDAsIGFycltyaWdodF0pO1xuICAgICAgICAgIHJpZ2h0Kys7XG4gICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgIGxlZnRUbysrO1xuICAgICAgICAgIGFyci5zcGxpY2UocmlnaHQsIDEpO1xuXG4gICAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKFxuICAgICAgICAgICAgYmxvY2tzW2xlZnQgLSAxXSxcbiAgICAgICAgICAgIGJsb2Nrc1tyaWdodCAtIDFdLFxuICAgICAgICAgICAgYmFzZUNvbG9yLFxuICAgICAgICAgICAgc3BlZWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHVwZGF0ZUJsb2Nrc0Zyb21BcnJheShibG9ja3MsIGFycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhcbiAgICAgICAgICAgIGJsb2Nrc1tsZWZ0IC0gMV0sXG4gICAgICAgICAgICBibG9ja3NbcmlnaHRdLFxuICAgICAgICAgICAgYmFzZUNvbG9yLFxuICAgICAgICAgICAgc3BlZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRW5kVmlzdWFsaXphdGlvbihtZXJnZVNvcnQpO1xuIiwiaW1wb3J0IHtcbiAgdmlzdWFsaXplQmxvY2tzLFxuICB2aXN1YWxpemVTd2FwQmxvY2tzLFxuICB2aXN1YWxpemVCbG9jayxcbiAgY3JlYXRlVmFsdWVzQXJyRnJvbUJsb2Nrcyxcbn0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tcIjtcbmltcG9ydCBnZXRDdXJyZW50U3BlZWQgZnJvbSBcIi4uL2hlbHBlcnMvZ2V0Q3VycmVudFNwZWVkXCI7XG5pbXBvcnQge1xuICBncmVlbkNvbG9yLFxuICByZWRDb2xvcixcbiAgYmFzZUNvbG9yLFxuICB5ZWxsb3dDb2xvcixcbn0gZnJvbSBcIi4uL2hlbHBlcnMvY29sb3JzXCI7XG5pbXBvcnQgeyB3aXRoRW5kVmlzdWFsaXphdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL3dpdGhFbmRWaXN1YWxpemF0aW9uXCI7XG5cbmNvbnN0IHBhcnRpdGlvbiA9IGFzeW5jIChhcnIsIHN0YXJ0LCBlbmQsIGJsb2NrcywgaXNTdG9wcGVkKSA9PiB7XG4gIGxldCBpID0gc3RhcnQgKyAxO1xuICBsZXQgcGl2ID0gYXJyW3N0YXJ0XTtcblxuICBhd2FpdCB2aXN1YWxpemVCbG9jayhibG9ja3Nbc3RhcnRdLCB5ZWxsb3dDb2xvciwgZ2V0Q3VycmVudFNwZWVkKCkpO1xuXG4gIGZvciAobGV0IGogPSBzdGFydCArIDE7IGogPD0gZW5kOyBqKyspIHtcbiAgICBpZiAoaXNTdG9wcGVkKCkpIHJldHVybjtcblxuICAgIGNvbnN0IHNwZWVkID0gZ2V0Q3VycmVudFNwZWVkKCk7XG5cbiAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3Nbal0sIGdyZWVuQ29sb3IsIHNwZWVkKTtcblxuICAgIGlmIChhcnJbal0gPCBwaXYpIHtcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tqXSwgcmVkQ29sb3IsIHNwZWVkKTtcblxuICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgIGFycltqXSA9IHRlbXA7XG5cbiAgICAgIC8vIFN3YXBcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZVN3YXBCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3Nbal0sIHNwZWVkKTtcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tqXSwgYmFzZUNvbG9yLCBzcGVlZCk7XG5cbiAgICAgIGkrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2pdLCBiYXNlQ29sb3IsIHNwZWVkKTtcbiAgICB9XG4gIH1cbiAgLy8gUHV0IHBpdm90IGluIGl0cyBwcm9wZXIgcGxhY2VcbiAgY29uc3QgdGVtcCA9IGFycltzdGFydF07XG4gIGFycltzdGFydF0gPSBhcnJbaSAtIDFdO1xuICBhcnJbaSAtIDFdID0gdGVtcDtcblxuICBhd2FpdCB2aXN1YWxpemVTd2FwQmxvY2tzKGJsb2Nrc1tzdGFydF0sIGJsb2Nrc1tpIC0gMV0sIGdldEN1cnJlbnRTcGVlZCgpKTtcbiAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKFxuICAgIGJsb2Nrc1tzdGFydF0sXG4gICAgYmxvY2tzW2kgLSAxXSxcbiAgICBiYXNlQ29sb3IsXG4gICAgZ2V0Q3VycmVudFNwZWVkKClcbiAgKTtcblxuICByZXR1cm4gaSAtIDE7XG59O1xuXG5jb25zdCBxdWlja1NvcnRBbGdvID0gYXN5bmMgKGFyciwgc3RhcnQsIGVuZCwgYmxvY2tzLCBpc1N0b3BwZWQpID0+IHtcbiAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgbGV0IHBpdm90UG9zID0gYXdhaXQgcGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCwgYmxvY2tzLCBpc1N0b3BwZWQpO1xuICAgIGlmIChpc1N0b3BwZWQoKSkgcmV0dXJuO1xuXG4gICAgYXdhaXQgcXVpY2tTb3J0QWxnbyhhcnIsIHN0YXJ0LCBwaXZvdFBvcyAtIDEsIGJsb2NrcywgaXNTdG9wcGVkKTtcbiAgICBhd2FpdCBxdWlja1NvcnRBbGdvKGFyciwgcGl2b3RQb3MgKyAxLCBlbmQsIGJsb2NrcywgaXNTdG9wcGVkKTtcbiAgfVxufTtcblxuY29uc3QgcXVpY2tTb3J0ID0gYXN5bmMgKGJsb2NrcywgbiwgaXNTdG9wcGVkKSA9PiB7XG4gIGNvbnN0IGFyciA9IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MoYmxvY2tzKTtcblxuICBhd2FpdCBxdWlja1NvcnRBbGdvKGFyciwgMCwgbiAtIDEsIGJsb2NrcywgaXNTdG9wcGVkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFbmRWaXN1YWxpemF0aW9uKHF1aWNrU29ydCk7XG4iXSwic291cmNlUm9vdCI6IiJ9