/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
require([], () => { return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/viewmodels/function.js":
/*!*****************************************************************************************************!*\
  !*** ../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/viewmodels/function.js ***!
  \*****************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! views/graph/graph-base-data */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/graph-base-data.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (data) {\n  /**\n  * A base viewmodel for functions\n  *\n  * @constructor\n  * @name FunctionViewModel\n  *\n  * @param  {string} params - a configuration object\n  */\n  var FunctionViewModel = function FunctionViewModel(params) {\n    this.graphid = data.graphid;\n    this.graph = data.graph;\n    this.config = params.config;\n  };\n  return FunctionViewModel;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://mapss/../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/viewmodels/function.js?");

/***/ }),

/***/ "../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/graph-base-data.js":
/*!*************************************************************************************************************!*\
  !*** ../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/graph-base-data.js ***!
  \*************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {\n  function removeTrailingCommaFromObject(string) {\n    return string.replace(/,\\s*}*$/, \"}\");\n  }\n  var graphBaseDataHTML = document.querySelector('#graphBaseData');\n  var graphBaseData = graphBaseDataHTML.getAttribute('graphBaseData');\n  var graphBaseDataJSON = JSON.parse(removeTrailingCommaFromObject(graphBaseData));\n  return graphBaseDataJSON;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://mapss/../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/graph-base-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/viewmodels/function.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;