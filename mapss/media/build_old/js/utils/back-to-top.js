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

/***/ "../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/utils/back-to-top.js":
/*!************************************************************************************************!*\
  !*** ../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/utils/back-to-top.js ***!
  \************************************************************************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n  var backToTop = {\n    scrollToTopHandler: function scrollToTopHandler() {\n      // Get the button:\n      var mybutton = document.getElementById(\"backToTopBtn\");\n\n      // When the user scrolls down 200px from the top of the document, show the button\n      window.onscroll = function () {\n        scrollFunction();\n      };\n      function scrollFunction() {\n        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {\n          mybutton.style.opacity = \"0.5\";\n        } else {\n          mybutton.style.opacity = \"0\";\n        }\n      }\n    },\n    // When the user clicks on the button, scroll to the top of the document\n    backToTopHandler: function backToTopHandler() {\n      document.body.scrollTop = 0; // For Safari\n      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\n    }\n  };\n  return backToTop;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://mapss/../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/utils/back-to-top.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/utils/back-to-top.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;