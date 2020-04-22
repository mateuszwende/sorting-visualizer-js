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
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "input[type=range] {\n  -webkit-appearance: none;\n  /* Hides the slider so that custom slider can be made */\n  width: 100%;\n  /* Specific width is required for Firefox. */\n  background: transparent;\n  /* Otherwise white in Chrome */\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\ninput[type=range]:focus {\n  outline: none;\n  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n/* Special styling for WebKit/Blink */\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: 1px solid #000000;\n  height: 20px;\n  width: 10px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n  margin-top: -7px;\n  /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  /* Add cool effects to your sliders! */\n}\n\n/* All the same stuff for Firefox */\ninput[type=range]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 20px;\n  width: 10px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n}\n\n/* All the same stuff for IE */\ninput[type=range]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #fff;\n  cursor: pointer;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #1ee0eb;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #14d6e1;\n}\n\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  background: #1ee0eb;\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  height: 7px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  border-width: 16px 0;\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #11bbc5;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #1ee0eb;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: #1ee0eb;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #4de6ef;\n}\n\ninput[type=range]:disabled::-webkit-slider-thumb {\n  background-color: grey;\n  border-color: grey;\n  cursor: default;\n}\ninput[type=range]:disabled::-webkit-slider-runnable-track {\n  background-color: lightgrey;\n  cursor: default;\n}\ninput[type=range]:disabled::-moz-range-thumb {\n  background-color: grey;\n  border-color: grey;\n}\ninput[type=range]:disabled::-moz-range-track {\n  cursor: default;\n}\ninput[type=range]:disabled::-ms-thumb {\n  background-color: grey;\n  border-color: grey;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  width: 100vw;\n  overflow-x: hidden;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  margin: 0;\n  background: #fafafa;\n}\n\n.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nhtml,\nbutton,\nlabel,\ninput {\n  font-family: sans-serif;\n  font-size: 16px;\n}\n\n.container {\n  position: relative;\n  width: calc(100% - 30px);\n  max-width: 1200px;\n  height: calc(100% - 102px);\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 25px auto 0;\n}\n\n.base-line {\n  width: 100%;\n  border: 1px solid lightgrey;\n  margin-bottom: 25px;\n}\n\n.block {\n  position: relative;\n  display: inline-block;\n  padding-top: 10px;\n  text-align: center;\n  color: #fff;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.header {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #232323;\n}\n.header__inner {\n  height: 100%;\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .navigation {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .navigation > div {\n  color: #fff;\n  height: 100%;\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: color 0.15s ease-in;\n}\n.header__inner .navigation > div:hover, .header__inner .navigation > div:focus, .header__inner .navigation > div:active, .header__inner .navigation > div.active {\n  color: #1ee0eb;\n  background: #3d3d3d;\n}\n.header__inner .input-group {\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__inner .input-group > label {\n  color: #fff;\n  padding-right: 15px;\n}\n.header__inner .btn {\n  color: #fff;\n  height: 100%;\n  padding: 0 15px;\n  border: none;\n  background: transparent;\n  transition: background-color, color 0.15s ease-in;\n  outline: none;\n  cursor: pointer;\n}\n.header__inner .btn:disabled, .header__inner .btn:disabled:hover {\n  color: grey;\n  background: transparent;\n  cursor: default;\n}\n.header__inner .btn:hover {\n  color: #1ee0eb;\n  background: #494949;\n}\n.header__inner .btn:focus, .header__inner .btn:active {\n  outline: none;\n}", ""]);
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
/* harmony import */ var _modules_utils_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils/block */ "./src/modules/utils/block.js");
/* harmony import */ var _modules_utils_getRandomNum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/utils/getRandomNum */ "./src/modules/utils/getRandomNum.js");
/* harmony import */ var _modules_sortingAlgorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sortingAlgorithms/bubbleSort */ "./src/modules/sortingAlgorithms/bubbleSort.js");
/* harmony import */ var _modules_sortingAlgorithms_mergeSort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sortingAlgorithms/mergeSort */ "./src/modules/sortingAlgorithms/mergeSort.js");
/* harmony import */ var _modules_sortingAlgorithms_quickSort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sortingAlgorithms/quickSort */ "./src/modules/sortingAlgorithms/quickSort.js");
/* harmony import */ var _modules_utils_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/utils/colors */ "./src/modules/utils/colors.js");
/* harmony import */ var _modules_utils_asyncDelay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/utils/asyncDelay */ "./src/modules/utils/asyncDelay.js");









const sortAlgorithms = {
  bubble: {
    name: "Bubble Sort",
    func: _modules_sortingAlgorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_3__["bubbleSort"],
  },
  merge: {
    name: "Merge Sort",
    func: _modules_sortingAlgorithms_mergeSort__WEBPACK_IMPORTED_MODULE_4__["mergeSort"],
  },
  quick: {
    name: "Quick Sort",
    func: _modules_sortingAlgorithms_quickSort__WEBPACK_IMPORTED_MODULE_5__["quickSort"],
  },
};

// Add template
class SortingVisualizer {
  constructor(containerId, width, height, n, speed) {
    this.containerId = containerId;
    this.width = width;
    this.height = height;
    this.minHeight = 40;
    this.n = n;
    this.nMin = 4;
    this.nMax = 100;
    this.speed = speed;
    this.speedMin = 1;
    this.speedMax = 500;
    this.isSorting = false;
    this.currentAlgorithm = sortAlgorithms["bubble"].func;
  }

  initialize() {
    this.createNav(sortAlgorithms);
    this.createBlocks(this.n);
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
      this.n = n;
      this.createBlocks(n);
    });
  }

  addBtnsEventListeners() {
    const sortBtn = document.getElementById("sortBtn");
    const randomizeBtn = document.getElementById("randomizeBtn");

    sortBtn.addEventListener("click", async (e) => {
      if (!this.isSorting) {
        this.handleIsSortingState(true);

        const blocks = document.querySelectorAll(".block");
        await this.prepareBlocksForSort(blocks);
        await this.currentAlgorithm(blocks, this.n);

        this.handleIsSortingState(false);
      }
    });

    randomizeBtn.addEventListener("click", () => {
      if (!this.isSorting) {
        const blocks = document.querySelectorAll(".block");
        this.randomizeBlocks(blocks);
      }
    });
  }

  addNavAlgoElemsEventListeners() {
    const elems = document.querySelectorAll(".nav-algorithm-js");

    elems.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        elems.forEach((elem) => elem.classList.remove("active"));
        e.target.classList.add("active");
        this.currentAlgorithm =
          sortAlgorithms[e.target.dataset.algorithmKey].func;
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
      Object(_modules_utils_block__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(
        this.containerId,
        blockWidth,
        Object(_modules_utils_getRandomNum__WEBPACK_IMPORTED_MODULE_2__["getRandomNum"])(this.minHeight, this.height),
        _modules_utils_colors__WEBPACK_IMPORTED_MODULE_6__["baseColor"]
      );
    }
  }

  randomizeBlocks(blocks) {
    blocks.forEach((block) => {
      Object(_modules_utils_block__WEBPACK_IMPORTED_MODULE_1__["updateBlock"])(block, Object(_modules_utils_getRandomNum__WEBPACK_IMPORTED_MODULE_2__["getRandomNum"])(this.minHeight, this.height));
      Object(_modules_utils_block__WEBPACK_IMPORTED_MODULE_1__["setBlockBackground"])(block, _modules_utils_colors__WEBPACK_IMPORTED_MODULE_6__["baseColor"]);
    });
  }

  async prepareBlocksForSort(blocks) {
    blocks.forEach((block) => {
      Object(_modules_utils_block__WEBPACK_IMPORTED_MODULE_1__["setBlockBackground"])(block, _modules_utils_colors__WEBPACK_IMPORTED_MODULE_6__["baseColor"]);
    });
    await Object(_modules_utils_asyncDelay__WEBPACK_IMPORTED_MODULE_7__["default"])(this.speed);
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

const sortingVisualizer = new SortingVisualizer("container", 1200, 600, 4, 50);
sortingVisualizer.initialize();


/***/ }),

/***/ "./src/modules/sortingAlgorithms/bubbleSort.js":
/*!*****************************************************!*\
  !*** ./src/modules/sortingAlgorithms/bubbleSort.js ***!
  \*****************************************************/
/*! exports provided: bubbleSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubbleSort", function() { return bubbleSort; });
/* harmony import */ var _utils_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/block */ "./src/modules/utils/block.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/colors */ "./src/modules/utils/colors.js");
/* harmony import */ var _utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getCurrentSpeed */ "./src/modules/utils/getCurrentSpeed.js");




const bubbleSort = async (blocks, n) => {
  const arr = Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["createValuesArrFromBlocks"])(blocks);

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      const speed = Object(_utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_2__["default"])();

      await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[i + 1], _utils_colors__WEBPACK_IMPORTED_MODULE_1__["greenColor"], speed);
      if (arr[i] > arr[i + 1]) {
        await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[i + 1], _utils_colors__WEBPACK_IMPORTED_MODULE_1__["redColor"], speed);

        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeSwapBlocks"])(blocks[i], blocks[i + 1], speed);

        swapped = true;
      }
      await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[i + 1], _utils_colors__WEBPACK_IMPORTED_MODULE_1__["baseColor"], speed);
    }
  } while (swapped);

  const speed = Object(_utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_2__["default"])();
  for (let j = 0; j < n; j++) {
    await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlock"])(blocks[j], _utils_colors__WEBPACK_IMPORTED_MODULE_1__["purpleColor"], speed + 100);
  }
};


/***/ }),

/***/ "./src/modules/sortingAlgorithms/mergeSort.js":
/*!****************************************************!*\
  !*** ./src/modules/sortingAlgorithms/mergeSort.js ***!
  \****************************************************/
/*! exports provided: mergeSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSort", function() { return mergeSort; });
/* harmony import */ var _utils_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/block */ "./src/modules/utils/block.js");
/* harmony import */ var _utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getCurrentSpeed */ "./src/modules/utils/getCurrentSpeed.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/colors */ "./src/modules/utils/colors.js");




const mergeSort = async (blocks, n) => {
  const arr = Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["createValuesArrFromBlocks"])(blocks);
  const len = n;

  for (let size = 1; size <= len; size = size * 2) {
    for (let i = 0; i < len; i += 2 * size) {
      let left = i;
      let right = Math.min(size + i, len);
      let leftTo = right;
      let rightTo = Math.min(right + size, len);

      while (left < leftTo && right < rightTo) {
        const speed = Object(_utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])();

        await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[left], blocks[right], _utils_colors__WEBPACK_IMPORTED_MODULE_2__["greenColor"], speed);

        if (arr[left] >= arr[right]) {
          await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[left], blocks[right], _utils_colors__WEBPACK_IMPORTED_MODULE_2__["redColor"], speed);

          arr.splice(left, 0, arr[right]);
          right++;
          left++;
          leftTo++;
          arr.splice(right, 1);

          await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(
            blocks[left - 1],
            blocks[right - 1],
            _utils_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"],
            speed
          );
          Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["updateBlocksFromArray"])(blocks, arr);
        } else {
          left++;
          await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(
            blocks[left - 1],
            blocks[right],
            _utils_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"],
            speed
          );
        }
      }
    }
  }

  const speed = Object(_utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])();
  for (let j = 0; j < n; j++) {
    await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlock"])(blocks[j], _utils_colors__WEBPACK_IMPORTED_MODULE_2__["purpleColor"], speed + 50);
  }
};


/***/ }),

/***/ "./src/modules/sortingAlgorithms/quickSort.js":
/*!****************************************************!*\
  !*** ./src/modules/sortingAlgorithms/quickSort.js ***!
  \****************************************************/
/*! exports provided: quickSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickSort", function() { return quickSort; });
/* harmony import */ var _utils_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/block */ "./src/modules/utils/block.js");
/* harmony import */ var _utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getCurrentSpeed */ "./src/modules/utils/getCurrentSpeed.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/colors */ "./src/modules/utils/colors.js");




const partition = async (arr, start, end, blocks) => {
  let i = start + 1;
  let piv = arr[start];

  await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlock"])(blocks[start], _utils_colors__WEBPACK_IMPORTED_MODULE_2__["yellowColor"], Object(_utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])());

  for (let j = start + 1; j <= end; j++) {
    const speed = Object(_utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])();

    await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[j], _utils_colors__WEBPACK_IMPORTED_MODULE_2__["greenColor"], speed);

    if (arr[j] < piv) {
      await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[j], _utils_colors__WEBPACK_IMPORTED_MODULE_2__["redColor"], speed);

      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      // Swap
      await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeSwapBlocks"])(blocks[i], blocks[j], speed);
      await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[j], _utils_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"], speed);

      i++;
    } else {
      await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(blocks[i], blocks[j], _utils_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"], speed);
    }
  }
  // Put pivot in its proper place
  const temp = arr[start];
  arr[start] = arr[i - 1];
  arr[i - 1] = temp;

  await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeSwapBlocks"])(blocks[start], blocks[i - 1], Object(_utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])());
  await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlocks"])(
    blocks[start],
    blocks[i - 1],
    _utils_colors__WEBPACK_IMPORTED_MODULE_2__["baseColor"],
    Object(_utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])()
  );

  return i - 1;
};

const quickSortAlgo = async (arr, start, end, blocks) => {
  if (start < end) {
    let pivotPos = await partition(arr, start, end, blocks);

    await quickSortAlgo(arr, start, pivotPos - 1, blocks);
    await quickSortAlgo(arr, pivotPos + 1, end, blocks);
  }
};

const quickSort = async (blocks, n) => {
  const arr = Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["createValuesArrFromBlocks"])(blocks);

  await quickSortAlgo(arr, 0, arr.length - 1, blocks);

  let speed = Object(_utils_getCurrentSpeed__WEBPACK_IMPORTED_MODULE_1__["default"])();
  for (let j = 0; j < n; j++) {
    await Object(_utils_block__WEBPACK_IMPORTED_MODULE_0__["visualizeBlock"])(blocks[j], _utils_colors__WEBPACK_IMPORTED_MODULE_2__["purpleColor"], speed + 100);
  }
};


/***/ }),

/***/ "./src/modules/utils/asyncDelay.js":
/*!*****************************************!*\
  !*** ./src/modules/utils/asyncDelay.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
});


/***/ }),

/***/ "./src/modules/utils/block.js":
/*!************************************!*\
  !*** ./src/modules/utils/block.js ***!
  \************************************/
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

/***/ "./src/modules/utils/colors.js":
/*!*************************************!*\
  !*** ./src/modules/utils/colors.js ***!
  \*************************************/
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

/***/ "./src/modules/utils/getCurrentSpeed.js":
/*!**********************************************!*\
  !*** ./src/modules/utils/getCurrentSpeed.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const speed = parseInt(document.getElementById("speedVal").value, 10);
  return speed;
});


/***/ }),

/***/ "./src/modules/utils/getRandomNum.js":
/*!*******************************************!*\
  !*** ./src/modules/utils/getRandomNum.js ***!
  \*******************************************/
/*! exports provided: getRandomNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNum", function() { return getRandomNum; });
const getRandomNum = (min, max) => Math.floor(Math.random() * max) + min;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Nhc3MvbWFpbi5zY3NzPzA4ZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NvcnRpbmdBbGdvcml0aG1zL2J1YmJsZVNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvbWVyZ2VTb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NvcnRpbmdBbGdvcml0aG1zL3F1aWNrU29ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91dGlscy9hc3luY0RlbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3V0aWxzL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3V0aWxzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91dGlscy9nZXRDdXJyZW50U3BlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdXRpbHMvZ2V0UmFuZG9tTnVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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ZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qIEhpZGVzIHRoZSBzbGlkZXIgc28gdGhhdCBjdXN0b20gc2xpZGVyIGNhbiBiZSBtYWRlICovXFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIFNwZWNpZmljIHdpZHRoIGlzIHJlcXVpcmVkIGZvciBGaXJlZm94LiAqL1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAvKiBPdGhlcndpc2Ugd2hpdGUgaW4gQ2hyb21lICovXFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAvKiBSZW1vdmVzIHRoZSBibHVlIGJvcmRlci4gWW91IHNob3VsZCBwcm9iYWJseSBkbyBzb21lIGtpbmQgb2YgZm9jdXMgc3R5bGluZyBmb3IgYWNjZXNzaWJpbGl0eSByZWFzb25zIHRob3VnaC4gKi9cXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIEhpZGVzIHRoZSBzbGlkZXIgc28gY3VzdG9tIHN0eWxlcyBjYW4gYmUgYWRkZWQgKi9cXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogU3BlY2lhbCBzdHlsaW5nIGZvciBXZWJLaXQvQmxpbmsgKi9cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IC03cHg7XFxuICAvKiBZb3UgbmVlZCB0byBzcGVjaWZ5IGEgbWFyZ2luIGluIENocm9tZSwgYnV0IGluIEZpcmVmb3ggYW5kIElFIGl0IGlzIGF1dG9tYXRpYyAqL1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIC8qIEFkZCBjb29sIGVmZmVjdHMgdG8geW91ciBzbGlkZXJzISAqL1xcbn1cXG5cXG4vKiBBbGwgdGhlIHNhbWUgc3R1ZmYgZm9yIEZpcmVmb3ggKi9cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiB7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQWxsIHRoZSBzYW1lIHN0dWZmIGZvciBJRSAqL1xcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWIge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG4gIGJhY2tncm91bmQ6ICMxZWUwZWI7XFxuICBib3JkZXItcmFkaXVzOiAxLjNweDtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzAxMDEwMTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICMxNGQ2ZTE7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcbiAgYmFja2dyb3VuZDogIzFlZTBlYjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuM3B4O1xcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMDEwMTAxO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDE2cHggMDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLWxvd2VyIHtcXG4gIGJhY2tncm91bmQ6ICMxMWJiYzU7XFxuICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XFxuICBib3JkZXItcmFkaXVzOiAyLjZweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC1sb3dlciB7XFxuICBiYWNrZ3JvdW5kOiAjMWVlMGViO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXIge1xcbiAgYmFja2dyb3VuZDogIzFlZTBlYjtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzAxMDEwMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLXVwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICM0ZGU2ZWY7XFxufVxcblxcbmlucHV0W3R5cGU9cmFuZ2VdOmRpc2FibGVkOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LW1vei1yYW5nZS10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTpkaXNhYmxlZDo6LW1vei1yYW5nZS10cmFjayB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdOmRpc2FibGVkOjotbXMtdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaHRtbCxcXG5idXR0b24sXFxubGFiZWwsXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMnB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIG1hcmdpbjogMjVweCBhdXRvIDA7XFxufVxcblxcbi5iYXNlLWxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG59XFxuLmhlYWRlcl9faW5uZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW47XFxufVxcbi5oZWFkZXJfX2lubmVyIC5uYXZpZ2F0aW9uID4gZGl2OmhvdmVyLCAuaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdjpmb2N1cywgLmhlYWRlcl9faW5uZXIgLm5hdmlnYXRpb24gPiBkaXY6YWN0aXZlLCAuaGVhZGVyX19pbm5lciAubmF2aWdhdGlvbiA+IGRpdi5hY3RpdmUge1xcbiAgY29sb3I6ICMxZWUwZWI7XFxuICBiYWNrZ3JvdW5kOiAjM2QzZDNkO1xcbn1cXG4uaGVhZGVyX19pbm5lciAuaW5wdXQtZ3JvdXAge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmlucHV0LWdyb3VwID4gbGFiZWwge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG4uaGVhZGVyX19pbm5lciAuYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciAwLjE1cyBlYXNlLWluO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0bjpkaXNhYmxlZCwgLmhlYWRlcl9faW5uZXIgLmJ0bjpkaXNhYmxlZDpob3ZlciB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uaGVhZGVyX19pbm5lciAuYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjMWVlMGViO1xcbiAgYmFja2dyb3VuZDogIzQ5NDk0OTtcXG59XFxuLmhlYWRlcl9faW5uZXIgLmJ0bjpmb2N1cywgLmhlYWRlcl9faW5uZXIgLmJ0bjphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3Nhc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQge1xuICBjcmVhdGVCbG9jayxcbiAgdXBkYXRlQmxvY2ssXG4gIHNldEJsb2NrQmFja2dyb3VuZCxcbn0gZnJvbSBcIi4vbW9kdWxlcy91dGlscy9ibG9ja1wiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tTnVtIH0gZnJvbSBcIi4vbW9kdWxlcy91dGlscy9nZXRSYW5kb21OdW1cIjtcbmltcG9ydCB7IGJ1YmJsZVNvcnQgfSBmcm9tIFwiLi9tb2R1bGVzL3NvcnRpbmdBbGdvcml0aG1zL2J1YmJsZVNvcnRcIjtcbmltcG9ydCB7IG1lcmdlU29ydCB9IGZyb20gXCIuL21vZHVsZXMvc29ydGluZ0FsZ29yaXRobXMvbWVyZ2VTb3J0XCI7XG5pbXBvcnQgeyBxdWlja1NvcnQgfSBmcm9tIFwiLi9tb2R1bGVzL3NvcnRpbmdBbGdvcml0aG1zL3F1aWNrU29ydFwiO1xuaW1wb3J0IHsgYmFzZUNvbG9yIH0gZnJvbSBcIi4vbW9kdWxlcy91dGlscy9jb2xvcnNcIjtcbmltcG9ydCBhc3luY0RlbGF5IGZyb20gXCIuL21vZHVsZXMvdXRpbHMvYXN5bmNEZWxheVwiO1xuXG5jb25zdCBzb3J0QWxnb3JpdGhtcyA9IHtcbiAgYnViYmxlOiB7XG4gICAgbmFtZTogXCJCdWJibGUgU29ydFwiLFxuICAgIGZ1bmM6IGJ1YmJsZVNvcnQsXG4gIH0sXG4gIG1lcmdlOiB7XG4gICAgbmFtZTogXCJNZXJnZSBTb3J0XCIsXG4gICAgZnVuYzogbWVyZ2VTb3J0LFxuICB9LFxuICBxdWljazoge1xuICAgIG5hbWU6IFwiUXVpY2sgU29ydFwiLFxuICAgIGZ1bmM6IHF1aWNrU29ydCxcbiAgfSxcbn07XG5cbi8vIEFkZCB0ZW1wbGF0ZVxuY2xhc3MgU29ydGluZ1Zpc3VhbGl6ZXIge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJJZCwgd2lkdGgsIGhlaWdodCwgbiwgc3BlZWQpIHtcbiAgICB0aGlzLmNvbnRhaW5lcklkID0gY29udGFpbmVySWQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubWluSGVpZ2h0ID0gNDA7XG4gICAgdGhpcy5uID0gbjtcbiAgICB0aGlzLm5NaW4gPSA0O1xuICAgIHRoaXMubk1heCA9IDEwMDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5zcGVlZE1pbiA9IDE7XG4gICAgdGhpcy5zcGVlZE1heCA9IDUwMDtcbiAgICB0aGlzLmlzU29ydGluZyA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudEFsZ29yaXRobSA9IHNvcnRBbGdvcml0aG1zW1wiYnViYmxlXCJdLmZ1bmM7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuY3JlYXRlTmF2KHNvcnRBbGdvcml0aG1zKTtcbiAgICB0aGlzLmNyZWF0ZUJsb2Nrcyh0aGlzLm4pO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnNldFJhbmdlSW5wdXRQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmFkZEVsZW1lbnRzVmFsSW5wdXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkQnRuc0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGROYXZBbGdvRWxlbXNFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgYWRkRWxlbWVudHNWYWxJbnB1dEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzVmFsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnRzTnVtXCIpO1xuXG4gICAgZWxlbWVudHNWYWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBuID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLm4gPSBuO1xuICAgICAgdGhpcy5jcmVhdGVCbG9ja3Mobik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRCdG5zRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgc29ydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ0blwiKTtcbiAgICBjb25zdCByYW5kb21pemVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbWl6ZUJ0blwiKTtcblxuICAgIHNvcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNTb3J0aW5nKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlSXNTb3J0aW5nU3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja1wiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVwYXJlQmxvY2tzRm9yU29ydChibG9ja3MpO1xuICAgICAgICBhd2FpdCB0aGlzLmN1cnJlbnRBbGdvcml0aG0oYmxvY2tzLCB0aGlzLm4pO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlSXNTb3J0aW5nU3RhdGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmFuZG9taXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNTb3J0aW5nKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tcIik7XG4gICAgICAgIHRoaXMucmFuZG9taXplQmxvY2tzKGJsb2Nrcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGROYXZBbGdvRWxlbXNFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWFsZ29yaXRobS1qc1wiKTtcblxuICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMuY3VycmVudEFsZ29yaXRobSA9XG4gICAgICAgICAgc29ydEFsZ29yaXRobXNbZS50YXJnZXQuZGF0YXNldC5hbGdvcml0aG1LZXldLmZ1bmM7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFJhbmdlSW5wdXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzTnVtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnRzTnVtXCIpO1xuICAgIGVsZW1lbnRzTnVtSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIHRoaXMubk1pbik7XG4gICAgZWxlbWVudHNOdW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgdGhpcy5uTWF4KTtcbiAgICBlbGVtZW50c051bUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRoaXMubik7XG5cbiAgICBjb25zdCBzcGVlZFZhbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGVlZFZhbFwiKTtcbiAgICBzcGVlZFZhbElucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCB0aGlzLnNwZWVkTWluKTtcbiAgICBzcGVlZFZhbElucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCB0aGlzLnNwZWVkTWF4KTtcbiAgICBzcGVlZFZhbElucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRoaXMuc3BlZWQpO1xuICAgIHNwZWVkVmFsSW5wdXQuc3R5bGUuZGlyZWN0aW9uID0gXCJydGxcIjtcbiAgfVxuXG4gIGhhbmRsZUlzU29ydGluZ1N0YXRlKGlzU29ydGluZykge1xuICAgIHRoaXMuaXNTb3J0aW5nID0gaXNTb3J0aW5nO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJ0blwiKS5kaXNhYmxlZCA9IGlzU29ydGluZztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbWl6ZUJ0blwiKS5kaXNhYmxlZCA9IGlzU29ydGluZztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZW1lbnRzTnVtXCIpLmRpc2FibGVkID0gaXNTb3J0aW5nO1xuICB9XG5cbiAgY3JlYXRlQmxvY2tzKG4pIHtcbiAgICB0aGlzLmNsZWFyQ29udGFpbmVyKCk7XG4gICAgY29uc3QgYmxvY2tXaWR0aCA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAvIG4pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNyZWF0ZUJsb2NrKFxuICAgICAgICB0aGlzLmNvbnRhaW5lcklkLFxuICAgICAgICBibG9ja1dpZHRoLFxuICAgICAgICBnZXRSYW5kb21OdW0odGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgYmFzZUNvbG9yXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJhbmRvbWl6ZUJsb2NrcyhibG9ja3MpIHtcbiAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgIHVwZGF0ZUJsb2NrKGJsb2NrLCBnZXRSYW5kb21OdW0odGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KSk7XG4gICAgICBzZXRCbG9ja0JhY2tncm91bmQoYmxvY2ssIGJhc2VDb2xvcik7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBwcmVwYXJlQmxvY2tzRm9yU29ydChibG9ja3MpIHtcbiAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgIHNldEJsb2NrQmFja2dyb3VuZChibG9jaywgYmFzZUNvbG9yKTtcbiAgICB9KTtcbiAgICBhd2FpdCBhc3luY0RlbGF5KHRoaXMuc3BlZWQpO1xuICB9XG5cbiAgY3JlYXRlTmF2KGFsZ29yaXRobXMpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcblxuICAgIGZvciAobGV0IFtrZXksIGFsZ29dIG9mIE9iamVjdC5lbnRyaWVzKGFsZ29yaXRobXMpKSB7XG4gICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0ID0gXCJuYXYtYWxnb3JpdGhtLWpzXCI7XG4gICAgICBlbGVtLmlubmVyVGV4dCA9IGFsZ28ubmFtZTtcbiAgICAgIGVsZW0uZGF0YXNldC5hbGdvcml0aG1LZXkgPSBrZXk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDb250YWluZXIoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJZCkuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxufVxuXG5jb25zdCBzb3J0aW5nVmlzdWFsaXplciA9IG5ldyBTb3J0aW5nVmlzdWFsaXplcihcImNvbnRhaW5lclwiLCAxMjAwLCA2MDAsIDQsIDUwKTtcbnNvcnRpbmdWaXN1YWxpemVyLmluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7XG4gIHZpc3VhbGl6ZVN3YXBCbG9ja3MsXG4gIHZpc3VhbGl6ZUJsb2NrLFxuICB2aXN1YWxpemVCbG9ja3MsXG4gIGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MsXG59IGZyb20gXCIuLi91dGlscy9ibG9ja1wiO1xuaW1wb3J0IHsgZ3JlZW5Db2xvciwgcmVkQ29sb3IsIGJhc2VDb2xvciwgcHVycGxlQ29sb3IgfSBmcm9tIFwiLi4vdXRpbHMvY29sb3JzXCI7XG5pbXBvcnQgZ2V0Q3VycmVudFNwZWVkIGZyb20gXCIuLi91dGlscy9nZXRDdXJyZW50U3BlZWRcIjtcblxuZXhwb3J0IGNvbnN0IGJ1YmJsZVNvcnQgPSBhc3luYyAoYmxvY2tzLCBuKSA9PiB7XG4gIGNvbnN0IGFyciA9IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MoYmxvY2tzKTtcblxuICBsZXQgc3dhcHBlZDtcblxuICBkbyB7XG4gICAgc3dhcHBlZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgY29uc3Qgc3BlZWQgPSBnZXRDdXJyZW50U3BlZWQoKTtcblxuICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2kgKyAxXSwgZ3JlZW5Db2xvciwgc3BlZWQpO1xuICAgICAgaWYgKGFycltpXSA+IGFycltpICsgMV0pIHtcbiAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2kgKyAxXSwgcmVkQ29sb3IsIHNwZWVkKTtcblxuICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICBhcnJbaV0gPSBhcnJbaSArIDFdO1xuICAgICAgICBhcnJbaSArIDFdID0gdGVtcDtcblxuICAgICAgICBhd2FpdCB2aXN1YWxpemVTd2FwQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2kgKyAxXSwgc3BlZWQpO1xuXG4gICAgICAgIHN3YXBwZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2kgKyAxXSwgYmFzZUNvbG9yLCBzcGVlZCk7XG4gICAgfVxuICB9IHdoaWxlIChzd2FwcGVkKTtcblxuICBjb25zdCBzcGVlZCA9IGdldEN1cnJlbnRTcGVlZCgpO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrKGJsb2Nrc1tqXSwgcHVycGxlQ29sb3IsIHNwZWVkICsgMTAwKTtcbiAgfVxufTtcbiIsImltcG9ydCB7XG4gIHZpc3VhbGl6ZUVuZCxcbiAgdmlzdWFsaXplQmxvY2tzLFxuICB1cGRhdGVCbG9ja3NGcm9tQXJyYXksXG4gIGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MsXG4gIHZpc3VhbGl6ZUJsb2NrLFxufSBmcm9tIFwiLi4vdXRpbHMvYmxvY2tcIjtcbmltcG9ydCBnZXRDdXJyZW50U3BlZWQgZnJvbSBcIi4uL3V0aWxzL2dldEN1cnJlbnRTcGVlZFwiO1xuaW1wb3J0IHsgZ3JlZW5Db2xvciwgcmVkQ29sb3IsIGJhc2VDb2xvciwgcHVycGxlQ29sb3IgfSBmcm9tIFwiLi4vdXRpbHMvY29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCBtZXJnZVNvcnQgPSBhc3luYyAoYmxvY2tzLCBuKSA9PiB7XG4gIGNvbnN0IGFyciA9IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MoYmxvY2tzKTtcbiAgY29uc3QgbGVuID0gbjtcblxuICBmb3IgKGxldCBzaXplID0gMTsgc2l6ZSA8PSBsZW47IHNpemUgPSBzaXplICogMikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDIgKiBzaXplKSB7XG4gICAgICBsZXQgbGVmdCA9IGk7XG4gICAgICBsZXQgcmlnaHQgPSBNYXRoLm1pbihzaXplICsgaSwgbGVuKTtcbiAgICAgIGxldCBsZWZ0VG8gPSByaWdodDtcbiAgICAgIGxldCByaWdodFRvID0gTWF0aC5taW4ocmlnaHQgKyBzaXplLCBsZW4pO1xuXG4gICAgICB3aGlsZSAobGVmdCA8IGxlZnRUbyAmJiByaWdodCA8IHJpZ2h0VG8pIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBnZXRDdXJyZW50U3BlZWQoKTtcblxuICAgICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2xlZnRdLCBibG9ja3NbcmlnaHRdLCBncmVlbkNvbG9yLCBzcGVlZCk7XG5cbiAgICAgICAgaWYgKGFycltsZWZ0XSA+PSBhcnJbcmlnaHRdKSB7XG4gICAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tsZWZ0XSwgYmxvY2tzW3JpZ2h0XSwgcmVkQ29sb3IsIHNwZWVkKTtcblxuICAgICAgICAgIGFyci5zcGxpY2UobGVmdCwgMCwgYXJyW3JpZ2h0XSk7XG4gICAgICAgICAgcmlnaHQrKztcbiAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgbGVmdFRvKys7XG4gICAgICAgICAgYXJyLnNwbGljZShyaWdodCwgMSk7XG5cbiAgICAgICAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoXG4gICAgICAgICAgICBibG9ja3NbbGVmdCAtIDFdLFxuICAgICAgICAgICAgYmxvY2tzW3JpZ2h0IC0gMV0sXG4gICAgICAgICAgICBiYXNlQ29sb3IsXG4gICAgICAgICAgICBzcGVlZFxuICAgICAgICAgICk7XG4gICAgICAgICAgdXBkYXRlQmxvY2tzRnJvbUFycmF5KGJsb2NrcywgYXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKFxuICAgICAgICAgICAgYmxvY2tzW2xlZnQgLSAxXSxcbiAgICAgICAgICAgIGJsb2Nrc1tyaWdodF0sXG4gICAgICAgICAgICBiYXNlQ29sb3IsXG4gICAgICAgICAgICBzcGVlZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzcGVlZCA9IGdldEN1cnJlbnRTcGVlZCgpO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrKGJsb2Nrc1tqXSwgcHVycGxlQ29sb3IsIHNwZWVkICsgNTApO1xuICB9XG59O1xuIiwiaW1wb3J0IHtcbiAgdmlzdWFsaXplQmxvY2tzLFxuICB2aXN1YWxpemVTd2FwQmxvY2tzLFxuICB2aXN1YWxpemVCbG9jayxcbiAgY3JlYXRlVmFsdWVzQXJyRnJvbUJsb2Nrcyxcbn0gZnJvbSBcIi4uL3V0aWxzL2Jsb2NrXCI7XG5pbXBvcnQgZ2V0Q3VycmVudFNwZWVkIGZyb20gXCIuLi91dGlscy9nZXRDdXJyZW50U3BlZWRcIjtcbmltcG9ydCB7XG4gIGdyZWVuQ29sb3IsXG4gIHJlZENvbG9yLFxuICBiYXNlQ29sb3IsXG4gIHB1cnBsZUNvbG9yLFxuICB5ZWxsb3dDb2xvcixcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbG9yc1wiO1xuXG5jb25zdCBwYXJ0aXRpb24gPSBhc3luYyAoYXJyLCBzdGFydCwgZW5kLCBibG9ja3MpID0+IHtcbiAgbGV0IGkgPSBzdGFydCArIDE7XG4gIGxldCBwaXYgPSBhcnJbc3RhcnRdO1xuXG4gIGF3YWl0IHZpc3VhbGl6ZUJsb2NrKGJsb2Nrc1tzdGFydF0sIHllbGxvd0NvbG9yLCBnZXRDdXJyZW50U3BlZWQoKSk7XG5cbiAgZm9yIChsZXQgaiA9IHN0YXJ0ICsgMTsgaiA8PSBlbmQ7IGorKykge1xuICAgIGNvbnN0IHNwZWVkID0gZ2V0Q3VycmVudFNwZWVkKCk7XG5cbiAgICBhd2FpdCB2aXN1YWxpemVCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3Nbal0sIGdyZWVuQ29sb3IsIHNwZWVkKTtcblxuICAgIGlmIChhcnJbal0gPCBwaXYpIHtcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tqXSwgcmVkQ29sb3IsIHNwZWVkKTtcblxuICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgIGFycltqXSA9IHRlbXA7XG5cbiAgICAgIC8vIFN3YXBcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZVN3YXBCbG9ja3MoYmxvY2tzW2ldLCBibG9ja3Nbal0sIHNwZWVkKTtcbiAgICAgIGF3YWl0IHZpc3VhbGl6ZUJsb2NrcyhibG9ja3NbaV0sIGJsb2Nrc1tqXSwgYmFzZUNvbG9yLCBzcGVlZCk7XG5cbiAgICAgIGkrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKGJsb2Nrc1tpXSwgYmxvY2tzW2pdLCBiYXNlQ29sb3IsIHNwZWVkKTtcbiAgICB9XG4gIH1cbiAgLy8gUHV0IHBpdm90IGluIGl0cyBwcm9wZXIgcGxhY2VcbiAgY29uc3QgdGVtcCA9IGFycltzdGFydF07XG4gIGFycltzdGFydF0gPSBhcnJbaSAtIDFdO1xuICBhcnJbaSAtIDFdID0gdGVtcDtcblxuICBhd2FpdCB2aXN1YWxpemVTd2FwQmxvY2tzKGJsb2Nrc1tzdGFydF0sIGJsb2Nrc1tpIC0gMV0sIGdldEN1cnJlbnRTcGVlZCgpKTtcbiAgYXdhaXQgdmlzdWFsaXplQmxvY2tzKFxuICAgIGJsb2Nrc1tzdGFydF0sXG4gICAgYmxvY2tzW2kgLSAxXSxcbiAgICBiYXNlQ29sb3IsXG4gICAgZ2V0Q3VycmVudFNwZWVkKClcbiAgKTtcblxuICByZXR1cm4gaSAtIDE7XG59O1xuXG5jb25zdCBxdWlja1NvcnRBbGdvID0gYXN5bmMgKGFyciwgc3RhcnQsIGVuZCwgYmxvY2tzKSA9PiB7XG4gIGlmIChzdGFydCA8IGVuZCkge1xuICAgIGxldCBwaXZvdFBvcyA9IGF3YWl0IHBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQsIGJsb2Nrcyk7XG5cbiAgICBhd2FpdCBxdWlja1NvcnRBbGdvKGFyciwgc3RhcnQsIHBpdm90UG9zIC0gMSwgYmxvY2tzKTtcbiAgICBhd2FpdCBxdWlja1NvcnRBbGdvKGFyciwgcGl2b3RQb3MgKyAxLCBlbmQsIGJsb2Nrcyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBxdWlja1NvcnQgPSBhc3luYyAoYmxvY2tzLCBuKSA9PiB7XG4gIGNvbnN0IGFyciA9IGNyZWF0ZVZhbHVlc0FyckZyb21CbG9ja3MoYmxvY2tzKTtcblxuICBhd2FpdCBxdWlja1NvcnRBbGdvKGFyciwgMCwgYXJyLmxlbmd0aCAtIDEsIGJsb2Nrcyk7XG5cbiAgbGV0IHNwZWVkID0gZ2V0Q3VycmVudFNwZWVkKCk7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgYXdhaXQgdmlzdWFsaXplQmxvY2soYmxvY2tzW2pdLCBwdXJwbGVDb2xvciwgc3BlZWQgKyAxMDApO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKG1zKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVCbG9jayA9IChwYXJlbnRJZCwgd2lkdGgsIGhlaWdodCwgYmdDb2xvcikgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZCk7XG5cbiAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBibG9jay5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgYmxvY2suc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgYmxvY2suc3R5bGUubWFyZ2luUmlnaHQgPSBgJHtNYXRoLmZsb29yKHdpZHRoIC8gNSl9cHhgO1xuICBibG9jay5zdHlsZS5mb250U2l6ZSA9IGAke01hdGguZmxvb3Iod2lkdGggLyA1KX1weGA7XG4gIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnQ29sb3I7XG4gIGJsb2NrLmNsYXNzTGlzdCA9IFwiYmxvY2tcIjtcblxuICBpZiAod2lkdGggPiAyMykge1xuICAgIGJsb2NrLmlubmVyVGV4dCA9IGhlaWdodDtcbiAgfVxuICBibG9jay5kYXRhc2V0LnZhbHVlID0gaGVpZ2h0O1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChibG9jayk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQmxvY2tzID0gKCkgPT4ge1xuICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrXCIpO1xuICByZXR1cm4gYmxvY2tzO1xufTtcblxuY29uc3Qgc3dhcFByb3BlcnRpZXMgPSAoYmxvY2tfMSwgYmxvY2tfMiwgc3BlZWQpID0+IHtcbiAgY29uc3QgdGVtcFZhbHVlXzEgPSBibG9ja18xLmRhdGFzZXQudmFsdWU7XG4gIGNvbnN0IHRlbXBCZ0NvbG9yXzEgPSBibG9ja18xLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcblxuICBibG9ja18xLnN0eWxlLmhlaWdodCA9IGJsb2NrXzIuc3R5bGUuaGVpZ2h0O1xuICBibG9ja18xLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJsb2NrXzIuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBibG9ja18xLmRhdGFzZXQudmFsdWUgPSBibG9ja18yLmRhdGFzZXQudmFsdWU7XG4gIGJsb2NrXzIuc3R5bGUuaGVpZ2h0ID0gYCR7dGVtcFZhbHVlXzF9cHhgO1xuICBibG9ja18yLmRhdGFzZXQudmFsdWUgPSB0ZW1wVmFsdWVfMTtcbiAgYmxvY2tfMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0ZW1wQmdDb2xvcl8xO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpc3VhbGl6ZVN3YXBCbG9ja3MgPSBhc3luYyAoYmxvY2tfMSwgYmxvY2tfMiwgc3BlZWQpID0+IHtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzd2FwUHJvcGVydGllcyhibG9ja18xLCBibG9ja18yLCBzcGVlZCk7XG4gICAgICBzZXRUaW1lb3V0KHJlcywgc3BlZWQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCbG9jayA9IChibG9jaywgdmFsdWUpID0+IHtcbiAgYmxvY2suZGF0YXNldC52YWx1ZSA9IHZhbHVlO1xuICBibG9jay5zdHlsZS5oZWlnaHQgPSBgJHt2YWx1ZX1weGA7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QmxvY2tCYWNrZ3JvdW5kID0gKGJsb2NrLCBjb2xvcikgPT4ge1xuICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCbG9ja3NGcm9tQXJyYXkgPSAoYmxvY2tzLCBhcnIpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB1cGRhdGVCbG9jayhibG9ja3NbaV0sIGFycltpXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVWYWx1ZXNBcnJGcm9tQmxvY2tzID0gKGJsb2NrcykgPT4ge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgYmxvY2tzLmZvckVhY2goKGVsZW0pID0+IGFyci5wdXNoKHBhcnNlSW50KGVsZW0uZGF0YXNldC52YWx1ZSwgMTApKSk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5leHBvcnQgY29uc3QgdmlzdWFsaXplQmxvY2tzID0gKGJsb2NrXzEsIGJsb2NrXzIsIGNvbG9yLCBzcGVlZCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBibG9ja18xLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgYmxvY2tfMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KHJlcywgc3BlZWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aXN1YWxpemVCbG9jayA9IChibG9jaywgY29sb3IsIHNwZWVkKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQocmVzLCBzcGVlZCk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCByZWRDb2xvciA9IFwiI2VlNTU0YVwiO1xuZXhwb3J0IGNvbnN0IGdyZWVuQ29sb3IgPSBcIiM2OWM2NTNcIjtcbmV4cG9ydCBjb25zdCB5ZWxsb3dDb2xvciA9IFwiI2YxZTA1OVwiO1xuZXhwb3J0IGNvbnN0IHB1cnBsZUNvbG9yID0gXCJwdXJwbGVcIjtcbmV4cG9ydCBjb25zdCBiYXNlQ29sb3IgPSBcIiM0Y2M4ZWFcIjtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3Qgc3BlZWQgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWVkVmFsXCIpLnZhbHVlLCAxMCk7XG4gIHJldHVybiBzcGVlZDtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0UmFuZG9tTnVtID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==