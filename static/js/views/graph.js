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

/***/ "../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph.js":
/*!*********************************************************************************************!*\
  !*** ../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nPromise.all(/*! AMD require */[__webpack_require__.e(\"vendors-media_node_modules_backbone_backbone-min_js-media_node_modules_bootstrap_dist_js_boot-10d2f3\"), __webpack_require__.e(\"usr_local_lib_python3_10_dist-packages_arches_app_media_js_views_base-manager_js-media_node_m-185be5\"), __webpack_require__.e(\"usr_local_lib_python3_10_dist-packages_arches_app_media_js_bindings_hover_js-usr_local_lib_py-21e897\")]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! jquery */ \"./media/node_modules/jquery/dist/jquery.min.js\"), __webpack_require__(/*! underscore */ \"./media/node_modules/underscore/underscore-min.js\"), __webpack_require__(/*! knockout */ \"./media/node_modules/knockout/build/output/knockout-latest.js\"), __webpack_require__(/*! arches */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/arches.js\"), __webpack_require__(/*! views/graph-manager-data */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph-manager-data.js\"), __webpack_require__(/*! views/base-manager */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/base-manager.js\"), __webpack_require__(/*! viewmodels/alert */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/viewmodels/alert.js\"), __webpack_require__(/*! viewmodels/alert-json */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/viewmodels/alert-json.js\"), __webpack_require__(/*! bootstrap */ \"./media/node_modules/bootstrap/dist/js/bootstrap.min.js\"), __webpack_require__(/*! bindings/hover */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/bindings/hover.js\"), __webpack_require__(/*! bindings/chosen */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/bindings/chosen.js\"), __webpack_require__(/*! utils/set-csrf-token */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/utils/set-csrf-token.js\")]; (function ($, _, ko, arches, graphManagerData, BaseManager, AlertViewModel, JsonErrorAlertViewModel) {\n  var GraphView = BaseManager.extend({\n    /**\n    * Initializes an instance of BaseManager, optionally using a passed in view\n    * model\n    *\n    * @memberof BaseManager.prototype\n    * @param {object} options - additional options to pass to the view\n    * @return {object} an instance of GraphView\n    */\n    initialize: function initialize(options) {\n      var self = this;\n      /**\n      * creates a request to add a new graph; redirects to the graph settings\n      * page for the new graph on success\n      *\n      * @param  {string} url - the url to be used in the request\n      * @param  {object} data (optional) - data to be included in request\n      */\n      var _newGraph = function newGraph(url, data) {\n        data = data || {};\n        self.viewModel.loading(true);\n        $.ajax({\n          type: \"POST\",\n          url: url,\n          data: JSON.stringify(data),\n          success: function success(response) {\n            window.location = arches.urls.graph_designer(response.graphid);\n          },\n          error: function error() {\n            self.viewModel.loading(false);\n          }\n        });\n      };\n      this.viewModel.leaveDropdown = function () {\n        $('.dropdown').dropdown('toggle');\n      };\n      this.viewModel.allGraphs().forEach(function (graph) {\n        graph.root = null;\n        graph.isCard = false;\n        if (graphManagerData && _typeof(graphManagerData.root_nodes) === 'object') {\n          graph.root = _.find(graphManagerData.root_nodes, function (node) {\n            return node.graph_id === graph.graphid;\n          });\n          if (graph.root) {\n            graph.isCard = graph.root.nodegroup_id === graph.root.nodeid;\n          }\n        }\n        graph.hover = ko.observable(false);\n        graph.clone = function () {\n          _newGraph(arches.urls.clone_graph(graph.graphid));\n        };\n        graph.exportGraph = function (model) {\n          window.open(arches.urls.export_graph(graph.graphid), '_blank');\n        };\n        graph.exportMappingFile = function (model) {\n          window.open(arches.urls.export_mapping_file(graph.graphid), '_blank');\n        };\n        graph.deleteGraph = function () {\n          self.viewModel.alert(new AlertViewModel('ep-alert-red', arches.translations.confirmGraphDelete.title, arches.translations.confirmGraphDelete.text, function () {\n            return;\n          }, function () {\n            self.viewModel.loading(true);\n            $.ajax({\n              type: \"DELETE\",\n              url: arches.urls.delete_graph(graph.graphid),\n              complete: function complete(response, status) {\n                self.viewModel.loading(false);\n                if (status === 'success') {\n                  self.viewModel.allGraphs.remove(graph);\n                } else {\n                  self.viewModel.alert(new JsonErrorAlertViewModel('ep-alert-red', response.responseJSON));\n                }\n              }\n            });\n          }));\n        };\n        graph.deleteInstances = function () {\n          self.viewModel.alert(new AlertViewModel('ep-alert-red', arches.translations.confirmAllResourceDelete.title, arches.translations.confirmAllResourceDelete.text, function () {\n            return;\n          }, function () {\n            self.viewModel.loading(true);\n            $.ajax({\n              type: \"DELETE\",\n              url: arches.urls.delete_instances(graph.graphid),\n              complete: function complete(response, status) {\n                self.viewModel.loading(false);\n                if (status === 'success') {\n                  self.viewModel.alert(new AlertViewModel('ep-alert-blue', response.responseJSON.title, response.responseJSON.message));\n                } else {\n                  self.viewModel.alert(new JsonErrorAlertViewModel('ep-alert-red', response.responseJSON));\n                }\n              }\n            });\n          }));\n        };\n      });\n      this.viewModel.showResources = ko.observable(window.location.hash !== '#branches');\n      _.defaults(this.viewModel, {\n        arches: arches,\n        groupedGraphs: ko.observable({\n          groups: [{\n            name: 'Resource Models',\n            items: self.viewModel.resources()\n          }, {\n            name: 'Branches',\n            items: self.viewModel.graphs()\n          }]\n        }),\n        graphId: ko.observable(null),\n        showFind: ko.observable(false),\n        currentList: ko.computed(function () {\n          if (self.viewModel.showResources()) {\n            return self.viewModel.resources();\n          } else {\n            return self.viewModel.graphs();\n          }\n        }),\n        newResource: function newResource() {\n          _newGraph('new', {\n            isresource: true\n          });\n        },\n        newGraph: function newGraph() {\n          _newGraph('new', {\n            isresource: false\n          });\n        },\n        importGraph: function importGraph(data, e) {\n          var formData = new FormData();\n          formData.append(\"importedGraph\", e.target.files[0]);\n          $.ajax({\n            type: \"POST\",\n            url: 'import/',\n            processData: false,\n            data: formData,\n            cache: false,\n            contentType: false,\n            success: function success(response) {\n              if (response[0].length != 0) {\n                // eslint-disable-next-line no-constant-condition\n                if (_typeof(response[0])) {\n                  response = response[0].join('<br />');\n                }\n                self.viewModel.alert(new AlertViewModel('ep-alert-red', arches.translations.graphImportFailed.title, response));\n              } else {\n                window.location.reload(true);\n              }\n            },\n            error: function error(response) {\n              self.viewModel.alert(new AlertViewModel('ep-alert-red', arches.translations.graphImportFailed.title, arches.translations.pleaseContactSystemAdministrator));\n              self.viewModel.loading(false);\n            }\n          });\n        },\n        importButtonClick: function importButtonClick() {\n          $(\"#fileupload\").trigger('click');\n        }\n      });\n      this.viewModel.graphId.subscribe(function (graphid) {\n        if (graphid && graphid !== \"\") {\n          self.viewModel.navigate(arches.urls.graph_designer(graphid));\n        }\n      });\n      BaseManager.prototype.initialize.call(this, options);\n    }\n  });\n  return new GraphView();\n}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);})['catch'](__webpack_require__.oe);\n\n//# sourceURL=webpack://mapss/../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph.js?");

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
/******/ 			"views/graph": 0
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/graph.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;