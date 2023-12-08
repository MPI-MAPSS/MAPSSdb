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

/***/ "../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/components/cards/select-related-feature-layers.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/components/cards/select-related-feature-layers.js ***!
  \**************************************************************************************************************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n  return function (source, sourceLayer, selectedResourceIds, visible, color, nodeids, filteredNodeids, hoverId, selectedLayerConfig) {\n    var layerConfig = selectedLayerConfig;\n    color = color || layerConfig.defaultcolor;\n    var selectionColor = layerConfig.selectioncolor;\n    var hoverColor = layerConfig.hovercolor;\n    var colorPalette = layerConfig.colorpalette;\n    var createColorExpressions = function createColorExpressions(defaultColor, colorPalette) {\n      if (nodeids) {\n        var colorExpressions = ['case'];\n        nodeids.forEach(function (nodeid, i) {\n          colorExpressions.push(['==', ['get', 'nodeid'], nodeid]);\n          if (i <= colorPalette.length) {\n            colorExpressions.push(colorPalette[i]);\n          } else {\n            colorExpressions.push(colorPalette[Math.floor(Math.random() * Math.floor(colorPalette.length))]);\n          }\n        });\n        colorExpressions.push(color);\n        return colorExpressions;\n      } else {\n        return defaultColor;\n      }\n    };\n    color = createColorExpressions(color, colorPalette);\n    var nodeFilter = [\"!=\", \"resourceinstanceid\", \"x\"]; // just a placeholder if there are no filterNodeids\n    if (filteredNodeids && nodeids.length > 0) {\n      nodeFilter = filteredNodeids.map(function (id) {\n        return [\"==\", \"nodeid\", id];\n      });\n      nodeFilter.splice(0, 0, 'any');\n    }\n    if (selectedResourceIds && selectedResourceIds.length > 0) {\n      color = ['match', ['get', 'resourceinstanceid'], selectedResourceIds, selectionColor, color];\n    }\n    if (hoverId) {\n      color = ['match', ['get', 'resourceinstanceid'], hoverId, hoverColor, color];\n    }\n    if (!source) return [];\n    var layers = [{\n      \"id\": \"select-feature-polygon-fill\",\n      \"type\": \"fill\",\n      \"minzoom\": layerConfig.minzoom,\n      \"filter\": ['all', [\"==\", \"$type\", \"Polygon\"], nodeFilter],\n      \"paint\": {\n        \"fill-color\": color,\n        \"fill-outline-color\": color,\n        \"fill-opacity\": layerConfig.fillopacity\n      },\n      \"layout\": {\n        \"visibility\": visible ? \"visible\" : \"none\"\n      }\n    }, {\n      \"id\": \"select-feature-polygon-under-stroke\",\n      \"type\": \"line\",\n      \"minzoom\": layerConfig.minzoom,\n      \"filter\": ['all', [\"==\", \"$type\", \"Polygon\"], nodeFilter],\n      \"layout\": {\n        \"line-cap\": \"round\",\n        \"line-join\": \"round\",\n        \"visibility\": visible ? \"visible\" : \"none\"\n      },\n      \"paint\": {\n        \"line-color\": layerConfig.strokecolor,\n        \"line-width\": layerConfig.strokelinewidth\n      }\n    }, {\n      \"id\": \"select-feature-polygon-stroke\",\n      \"type\": \"line\",\n      \"minzoom\": layerConfig.minzoom,\n      \"filter\": ['all', [\"==\", \"$type\", \"Polygon\"], nodeFilter],\n      \"layout\": {\n        \"line-cap\": \"round\",\n        \"line-join\": \"round\",\n        \"visibility\": visible ? \"visible\" : \"none\"\n      },\n      \"paint\": {\n        \"line-color\": color,\n        \"line-width\": layerConfig.linewidth\n      }\n    }, {\n      \"id\": \"select-feature-line\",\n      \"type\": \"line\",\n      \"minzoom\": layerConfig.minzoom,\n      \"filter\": ['all', [\"==\", \"$type\", \"LineString\"], nodeFilter],\n      \"layout\": {\n        \"line-cap\": \"round\",\n        \"line-join\": \"round\",\n        \"visibility\": visible ? \"visible\" : \"none\"\n      },\n      \"paint\": {\n        \"line-color\": color,\n        \"line-width\": layerConfig.linewidth\n      }\n    }, {\n      \"id\": \"select-feature-point-point-stroke\",\n      \"type\": \"circle\",\n      \"minzoom\": layerConfig.minzoom,\n      \"filter\": ['all', [\"==\", \"$type\", \"Point\"]],\n      \"paint\": {\n        \"circle-radius\": layerConfig.strokepointradius,\n        \"circle-opacity\": layerConfig.strokepointopacity,\n        \"circle-color\": layerConfig.strokecolor\n      },\n      \"layout\": {\n        \"visibility\": visible ? \"visible\" : \"none\"\n      }\n    }, {\n      \"id\": \"select-feature-point\",\n      \"type\": \"circle\",\n      \"minzoom\": layerConfig.minzoom,\n      \"filter\": ['all', [\"==\", \"$type\", \"Point\"], nodeFilter],\n      \"paint\": {\n        \"circle-radius\": layerConfig.pointradius,\n        \"circle-color\": color\n      },\n      \"layout\": {\n        \"visibility\": visible ? \"visible\" : \"none\"\n      }\n    }];\n    layers.forEach(function (layer) {\n      layer[\"source\"] = source;\n      if (sourceLayer) layer[\"source-layer\"] = sourceLayer;\n    });\n    return layers;\n  };\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://mapss/../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/components/cards/select-related-feature-layers.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/components/cards/select-related-feature-layers.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;