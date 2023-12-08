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

/***/ "../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/components/widgets/map/map-styles.js":
/*!*************************************************************************************************************************!*\
  !*** ../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/components/widgets/map/map-styles.js ***!
  \*************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n  var getDrawStyles = function getDrawStyles(resource) {\n    return [{\n      \"id\": \"gl-draw-point\",\n      \"type\": \"circle\",\n      \"filter\": [\"all\", [\"!in\", \"$type\", \"LineString\", \"Polygon\"], [\"!=\", \"mode\", \"static\"], [\"!=\", \"active\", 'true']],\n      \"paint\": {\n        \"circle-radius\": resource.pointsize(),\n        \"circle-color\": resource.color()\n      }\n    }, {\n      \"id\": \"gl-draw-point-active-halo\",\n      \"type\": \"circle\",\n      \"filter\": [\"all\", [\"!=\", \"meta\", \"vertex\"], [\"==\", \"$type\", \"Point\"], [\"!=\", \"mode\", \"static\"], [\"==\", \"active\", \"true\"]],\n      \"paint\": {\n        \"circle-radius\": resource.pointsize() * 1.25,\n        \"circle-color\": \"#FFF\"\n      }\n    }, {\n      \"id\": \"gl-draw-point-active\",\n      \"type\": \"circle\",\n      \"layout\": {},\n      \"filter\": [\"all\", [\"!in\", \"$type\", \"LineString\", \"Polygon\"], [\"!=\", \"mode\", \"static\"], [\"==\", \"active\", 'true']],\n      \"paint\": {\n        \"circle-radius\": resource.pointsize(),\n        \"circle-color\": resource.color()\n      }\n    }, {\n      \"id\": \"gl-draw-line\",\n      \"type\": \"line\",\n      \"filter\": [\"all\", [\"==\", \"$type\", \"LineString\"], [\"!=\", \"mode\", \"static\"]],\n      \"layout\": {\n        \"line-cap\": \"round\",\n        \"line-join\": \"round\"\n      },\n      \"paint\": {\n        \"line-color\": resource.color(),\n        // \"line-dasharray\": [0.2, 2],\n        \"line-width\": resource.linewidth()\n      }\n    }, {\n      \"id\": \"gl-draw-polygon-fill\",\n      \"type\": \"fill\",\n      \"filter\": [\"all\", [\"==\", \"$type\", \"Polygon\"], [\"!=\", \"mode\", \"static\"]],\n      \"paint\": {\n        \"fill-color\": resource.color(),\n        \"fill-outline-color\": resource.color(),\n        \"fill-opacity\": 0.1\n      }\n    }, {\n      \"id\": \"gl-draw-polygon-stroke-active\",\n      \"type\": \"line\",\n      \"filter\": [\"all\", [\"==\", \"$type\", \"Polygon\"], [\"!=\", \"mode\", \"static\"]],\n      \"layout\": {\n        \"line-cap\": \"round\",\n        \"line-join\": \"round\"\n      },\n      \"paint\": {\n        \"line-color\": resource.color(),\n        // \"line-dasharray\": [0.2, 2],\n        \"line-width\": resource.linewidth()\n      }\n    }, {\n      \"id\": \"gl-draw-polygon-and-line-vertex-halo-active\",\n      \"type\": \"circle\",\n      \"filter\": [\"all\", [\"==\", \"meta\", \"vertex\"], [\"==\", \"$type\", \"Point\"], [\"!=\", \"mode\", \"static\"]],\n      \"paint\": {\n        \"circle-radius\": resource.pointsize() * 1.25,\n        \"circle-color\": \"#FFF\"\n      }\n    }, {\n      \"id\": \"gl-draw-polygon-and-line-vertex-active\",\n      \"type\": \"circle\",\n      \"filter\": [\"all\", [\"==\", \"meta\", \"vertex\"], [\"==\", \"$type\", \"Point\"], [\"!=\", \"mode\", \"static\"]],\n      \"paint\": {\n        \"circle-radius\": resource.pointsize(),\n        \"circle-color\": resource.color()\n      }\n    }, {\n      \"id\": \"gl-draw-polygon-and-line-midpoint-halo-active\",\n      \"type\": \"circle\",\n      \"filter\": [\"all\", [\"==\", \"meta\", \"midpoint\"], [\"==\", \"$type\", \"Point\"], [\"!=\", \"mode\", \"static\"]],\n      \"paint\": {\n        \"circle-radius\": resource.pointsize() * 1.25,\n        \"circle-color\": \"#FFF\"\n      }\n    }, {\n      \"id\": \"gl-draw-polygon-and-line-midpoint-active\",\n      \"type\": \"circle\",\n      \"filter\": [\"all\", [\"==\", \"meta\", \"midpoint\"], [\"==\", \"$type\", \"Point\"], [\"!=\", \"mode\", \"static\"]],\n      \"paint\": {\n        \"circle-radius\": resource.pointsize(),\n        \"circle-color\": resource.color()\n      }\n    }];\n  };\n  var getSearchQueryStyles = function getSearchQueryStyles() {\n    return [{\n      \"id\": \"search-poly\",\n      \"type\": \"fill\",\n      \"source\": \"search-query\",\n      \"layout\": {\n        \"visibility\": \"visible\"\n      },\n      \"filter\": [\"all\", [\"==\", \"$type\", \"Polygon\"]],\n      \"paint\": {\n        \"fill-color\": \"#0000FF\",\n        \"fill-opacity\": 0.4\n      }\n    }, {\n      \"id\": \"search-line\",\n      \"type\": \"line\",\n      \"source\": \"search-query\",\n      \"layout\": {\n        \"visibility\": \"visible\"\n      },\n      \"filter\": [\"all\", [\"==\", \"$type\", \"LineString\"]],\n      \"paint\": {\n        \"line-color\": \"#0000FF\",\n        \"line-width\": 2.0\n      }\n    }, {\n      \"id\": \"search-point\",\n      \"type\": \"circle\",\n      \"source\": \"search-query\",\n      \"layout\": {\n        \"visibility\": \"visible\"\n      },\n      \"filter\": [\"==\", \"$type\", \"Point\"],\n      \"paint\": {\n        \"circle-radius\": 5,\n        \"circle-color\": \"#0000FF\"\n      }\n    }, {\n      \"id\": \"buffer-layer\",\n      \"type\": \"fill\",\n      \"source\": \"search-query\",\n      \"filter\": [\"all\", [\"==\", \"$type\", \"Polygon\"], [\"==\", \"id\", \"buffer-layer\"]],\n      \"paint\": {\n        \"fill-color\": \"#0000FF\",\n        \"fill-outline-color\": \"#0000FF\",\n        \"fill-opacity\": 0.1\n      }\n    }];\n  };\n  return {\n    getDrawStyles: getDrawStyles,\n    getSearchQueryStyles: getSearchQueryStyles\n  };\n}).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://mapss/../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/components/widgets/map/map-styles.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/components/widgets/map/map-styles.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;