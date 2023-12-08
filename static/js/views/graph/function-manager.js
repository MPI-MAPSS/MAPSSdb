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

/***/ "../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/function-manager.js":
/*!**************************************************************************************************************!*\
  !*** ../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/function-manager.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("Promise.all(/*! AMD require */[__webpack_require__.e(\"vendors-media_node_modules_backbone_backbone-min_js-media_node_modules_bootstrap_dist_js_boot-10d2f3\"), __webpack_require__.e(\"vendors-media_node_modules_codemirror_mode_javascript_javascript_js\"), __webpack_require__.e(\"vendors-media_node_modules_dropzone_dist_min_dropzone-amd-module_min_js-media_node_modules_jq-6fced1\"), __webpack_require__.e(\"vendors-media_node_modules_datatables_net-buttons-bs_js_buttons_bootstrap_min_js-media_node_m-d7d553\"), __webpack_require__.e(\"vendors-media_node_modules_bootstrap-colorpicker_dist_js_bootstrap-colorpicker_min_js-media_n-d138ec\"), __webpack_require__.e(\"vendors-media_node_modules_mapbox_geojson-extent_geojson-extent_js-media_node_modules_mapbox_-66e61b\"), __webpack_require__.e(\"usr_local_lib_python3_10_dist-packages_arches_app_media_js_views_base-manager_js-media_node_m-185be5\"), __webpack_require__.e(\"usr_local_lib_python3_10_dist-packages_arches_app_media_js_views_rdm_concept-report_js-usr_lo-8e2342\"), __webpack_require__.e(\"usr_local_lib_python3_10_dist-packages_arches_app_media_js_bindings_color-picker_js-usr_local-8c31c1\"), __webpack_require__.e(\"usr_local_lib_python3_10_dist-packages_arches_app_media_js_utils_load-component-dependencies_js\"), __webpack_require__.e(\"usr_local_lib_python3_10_dist-packages_arches_app_media_js_views_resource_report_js\")]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! jquery */ \"./media/node_modules/jquery/dist/jquery.min.js\"), __webpack_require__(/*! underscore */ \"./media/node_modules/underscore/underscore-min.js\"), __webpack_require__(/*! knockout */ \"./media/node_modules/knockout/build/output/knockout-latest.js\"), __webpack_require__(/*! arches */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/arches.js\"), __webpack_require__(/*! views/graph/graph-page-view */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/graph-page-view.js\"), __webpack_require__(/*! viewmodels/alert-json */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/viewmodels/alert-json.js\"), __webpack_require__(/*! views/graph/function-manager/function-list */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/function-manager/function-list.js\"), __webpack_require__(/*! views/graph/function-manager/applied-function-list */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/function-manager/applied-function-list.js\"), __webpack_require__(/*! models/function */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/models/function.js\"), __webpack_require__(/*! models/function-x-graph */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/models/function-x-graph.js\"), __webpack_require__(/*! views/graph/graph-base-data */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/graph-base-data.js\"), __webpack_require__(/*! views/graph/graph-functions-data */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/graph-functions-data.js\"), __webpack_require__(/*! views/components/functions/primary-descriptors */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/components/functions/primary-descriptors.js\"), __webpack_require__(/*! function-templates */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/function-templates.js\")]; (function ($, _, ko, arches, GraphPageView, JsonErrorAlertViewModel, FunctionList, AppliedFunctionList, FunctionModel, FunctionXGraphModel, baseData, data) {\n  /**\n  * set up the page view model with the graph model and related sub views\n  */\n  var functionModels = [];\n  var savedFunctions = ko.observableArray(_.map(data.applied_functions, function (fn) {\n    return fn.function_id;\n  }));\n  var viewModel = {\n    loading: ko.observable(false),\n    selectedFunction: ko.observable()\n  };\n  data.functions.forEach(function (func) {\n    functionModels.push(new FunctionModel(func));\n  }, this);\n  viewModel.functionList = new FunctionList({\n    functions: ko.observableArray(functionModels)\n  });\n  viewModel.functionList.on('item-clicked', function (func) {\n    var newAppliedFunction = new FunctionXGraphModel({\n      id: null,\n      graphid: baseData.graphid,\n      function: func,\n      function_id: func.functionid,\n      config: func.defaultconfig\n    });\n    viewModel.appliedFunctionList.items.push(newAppliedFunction);\n    viewModel.appliedFunctionList.selectItem(newAppliedFunction);\n  });\n  viewModel.appliedFunctionList = new AppliedFunctionList({\n    functions: ko.observableArray()\n  });\n  data.applied_functions.forEach(function (func) {\n    func.function = _.find(functionModels, function (fn) {\n      return fn.functionid === func.function_id;\n    });\n    viewModel.appliedFunctionList.items.push(new FunctionXGraphModel(func));\n  }, this);\n  viewModel.appliedFunctionList.on('item-clicked', function (func) {\n    if (func.selected()) {\n      viewModel.selectedFunction(func);\n    } else {\n      viewModel.selectedFunction(undefined);\n    }\n  });\n  viewModel.toggleFunctionLibrary = function () {\n    if (!!viewModel.selectedFunction()) {\n      viewModel._selectedFunction = viewModel.selectedFunction();\n      viewModel._selectedFunction.selected(false);\n      viewModel.selectedFunction(undefined);\n    } else {\n      viewModel.selectedFunction(viewModel._selectedFunction);\n      viewModel._selectedFunction.selected(true);\n    }\n  };\n  viewModel.dirty = ko.computed(function () {\n    if (viewModel.selectedFunction() && _.contains(savedFunctions(), viewModel.selectedFunction().function_id) === false) {\n      return true;\n    } else {\n      return !!_.find(viewModel.appliedFunctionList.items(), function (fn) {\n        return fn.dirty();\n      });\n    }\n  });\n  var alertFailure = function alertFailure(responseJSON) {\n    graphPageView.viewModel.alert(new JsonErrorAlertViewModel('ep-alert-red', responseJSON));\n  };\n  viewModel.save = function () {\n    var functionsToSave = [];\n    viewModel.loading(true);\n    viewModel.appliedFunctionList.items().forEach(function (fn) {\n      if (fn.dirty() || !fn.function.component()) {\n        functionsToSave.push(fn.toJSON());\n      }\n    });\n    $.ajax({\n      type: \"POST\",\n      url: arches.urls.apply_functions.replace('//', '/' + baseData.graphid + '/'),\n      data: JSON.stringify(functionsToSave),\n      success: function success(response) {\n        var functionToUpdate;\n        response.forEach(function (fn) {\n          savedFunctions.push(fn.function_id);\n          functionToUpdate = _.find(viewModel.appliedFunctionList.items(), function (func) {\n            return fn._id === func.toJSON()._id;\n          });\n          functionToUpdate.parse(fn);\n        });\n        viewModel.loading(false);\n      },\n      error: function error(response) {\n        viewModel.loading(false);\n        alertFailure(response.responseJSON);\n      }\n    });\n  };\n  viewModel.delete = function (functionToDelete) {\n    if (!functionToDelete.id) {\n      viewModel.appliedFunctionList.items.remove(functionToDelete);\n      viewModel.toggleFunctionLibrary();\n    } else {\n      $.ajax({\n        type: \"DELETE\",\n        url: arches.urls.remove_functions.replace('//', '/' + baseData.graphid + '/'),\n        data: JSON.stringify([functionToDelete]),\n        success: function success() {\n          savedFunctions.remove(functionToDelete.function_id);\n          viewModel.appliedFunctionList.items.remove(functionToDelete);\n          viewModel.toggleFunctionLibrary();\n          viewModel.loading(false);\n        },\n        error: function error(response) {\n          viewModel.loading(false);\n          alertFailure(response.responseJSON);\n        }\n      });\n    }\n  };\n  viewModel.cancel = function () {\n    viewModel.appliedFunctionList.items().forEach(function (fn) {\n      if (fn.dirty()) {\n        fn.reset();\n      }\n      if (!fn.id) {\n        viewModel.appliedFunctionList.items.remove(fn);\n        if (viewModel.selectedFunction() === fn) {\n          viewModel.toggleFunctionLibrary();\n        }\n      }\n    });\n  };\n  viewModel.filterFunctions = function () {\n    var vm = this;\n    return function (applied) {\n      var appliedIds = _.pluck(applied, 'function_id');\n      _.each(vm.functionList.items(), function (item) {\n        if (_.contains(appliedIds, item.functionid)) {\n          item.filtered(true);\n        } else if (item.filtered() === true) {\n          item.filtered(false);\n        }\n      }, this);\n    };\n  };\n  viewModel.appliedFunctionList.items.subscribe(viewModel.filterFunctions());\n  viewModel.appliedFunctionList.items.valueHasMutated(); //force the filter to updated on page load\n\n  /**\n  * a GraphPageView representing the graph manager page\n  */\n  var graphPageView = new GraphPageView({\n    viewModel: viewModel\n  });\n}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);})['catch'](__webpack_require__.oe);\n\n//# sourceURL=webpack://mapss/../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/function-manager.js?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "mapss:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"views/graph/function-manager": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmapss"] = self["webpackChunkmapss"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph/function-manager.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;