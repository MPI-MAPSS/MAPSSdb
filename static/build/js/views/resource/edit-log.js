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

/***/ "../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/resource/edit-log.js":
/*!*********************************************************************************************************!*\
  !*** ../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/resource/edit-log.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.all(/*! AMD require */[__webpack_require__.e(\"vendors-media_node_modules_backbone_backbone-min_js-media_node_modules_bootstrap_dist_js_boot-10d2f3\"), __webpack_require__.e(\"usr_local_lib_python3_10_dist-packages_arches_app_media_js_views_base-manager_js-media_node_m-185be5\"), __webpack_require__.e(\"usr_local_lib_python3_10_dist-packages_arches_app_media_js_views_resource_resource-edit-histo-42d5f8\")]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! jquery */ \"./media/node_modules/jquery/dist/jquery.min.js\"), __webpack_require__(/*! underscore */ \"./media/node_modules/underscore/underscore-min.js\"), __webpack_require__(/*! knockout */ \"./media/node_modules/knockout/build/output/knockout-latest.js\"), __webpack_require__(/*! moment */ \"./media/node_modules/moment/moment.js\"), __webpack_require__(/*! views/base-manager */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/base-manager.js\"), __webpack_require__(/*! views/resource/resource-edit-history-data */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/resource/resource-edit-history-data.js\"), __webpack_require__(/*! bindings/chosen */ \"../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/bindings/chosen.js\")]; (function ($, _, ko, moment, BaseManagerView, data) {\n  var ResourceEditLogView = BaseManagerView.extend({\n    initialize: function initialize(options) {\n      var self = this;\n      var cards = data.cards;\n      var edits = data.edits;\n      var editTypeLookup = {\n        'create': {\n          icon: 'fa fa-chevron-circle-right fa-lg',\n          color: 'bg-mint'\n        },\n        'tile edit': {\n          icon: 'fa fa-repeat fa-lg',\n          color: 'bg-purple'\n        },\n        'tile create': {\n          icon: 'fa fa-plus fa-lg',\n          color: 'bg-dark'\n        },\n        'tile delete': {\n          icon: 'fa fa-minus fa-lg',\n          color: 'bg-danger'\n        },\n        'delete edit': {\n          icon: 'fa fa-minus fa-lg',\n          color: 'bg-danger'\n        }\n      };\n      var handleChildCards = function handleChildCards(card) {\n        if (card.cards.length > 0) {\n          _.each(card.cards, function (subCard) {\n            _.each(_.where(edits, {\n              nodegroupid: subCard.nodegroup_id\n            }), function (match) {\n              match.card = subCard;\n              match.cardContainerName = card.name;\n            });\n            handleChildCards(subCard);\n          }, this);\n        }\n      };\n      var assignCards = function assignCards() {\n        _.each(cards, function (card) {\n          _.each(_.where(edits, {\n            nodegroupid: card.nodegroup_id\n          }), function (match) {\n            match.card = card;\n            match.cardContainerName = null;\n          });\n          handleChildCards(card);\n        }, this);\n      };\n      assignCards();\n      var createFullValue = function createFullValue(value, edit) {\n        var full_value = {};\n        function rounder(key, value) {\n          if (typeof value === 'number') {\n            return Math.round(value * 10000000) / 10000000;\n          }\n          return value;\n        }\n        _.each(value, function (v, k) {\n          if (_.isObject(v) && v['features']) {\n            v = _.map(v['features'], function (feature) {\n              return JSON.stringify(feature['geometry'], rounder, 4);\n            });\n          }\n          full_value[k] = {\n            new_value: v\n          };\n          if (edit.card) {\n            _.each(edit.card.nodes, function (node) {\n              if (k == node.nodeid) {\n                full_value[node.nodeid].node = node;\n              }\n            }, this);\n          }\n        });\n        return _.map(full_value, function (v, k) {\n          return v;\n        });\n      };\n      _.each(edits, function (edit) {\n        var datetime = moment(edit.timestamp);\n        edit.time = datetime.format(\"HH:mm\");\n        edit.day = datetime.format('DD MMMM, YYYY');\n        edit.editor = edit.user_email != '' ? edit.user_email : edit.user_username;\n        edit.edit_type_icon = editTypeLookup[edit.edittype];\n        if (edit.nodegroupid) {\n          edit.full_new_value = createFullValue(edit.newvalue, edit);\n          edit.full_old_value = createFullValue(edit.oldvalue, edit);\n          edit.full_new_provisional_value = createFullValue(edit.newprovisionalvalue, edit);\n          edit.full_old_provisional_value = createFullValue(edit.oldprovisionalvalue, edit);\n        }\n      });\n      this.viewModel.displayname = data.displayname;\n      this.viewModel.description = data.description;\n      this.viewModel.sortOrder = ko.observable('time_desc');\n      this.viewModel.edits = ko.observableArray(edits);\n      this.viewModel.edits.sort(function (left, right) {\n        return left.timestamp == right.timestamp ? 0 : left.timestamp > right.timestamp ? -1 : 1;\n      });\n      this.viewModel.currentDate = moment().format('MMMM D, YYYY');\n      this.viewModel.sortOrder.subscribe(function (val) {\n        var sortConditions = {\n          'time_desc': {\n            'property': 'timestamp',\n            'direction': 'gt'\n          },\n          'time_asc': {\n            'property': 'timestamp',\n            'direction': 'lt'\n          },\n          'editor_asc': {\n            'property': 'user_email',\n            'direction': 'lt'\n          },\n          'type_desc': {\n            'property': 'edittype',\n            'direction': 'gt'\n          }\n        };\n        var sortProperty = sortConditions[val].property;\n        var sortDirection = sortConditions[val].direction;\n        if (sortDirection == 'gt') {\n          self.viewModel.edits.sort(function (left, right) {\n            return left[sortProperty] == right[sortProperty] ? 0 : left[sortProperty] > right[sortProperty] ? -1 : 1;\n          });\n        } else {\n          self.viewModel.edits.sort(function (left, right) {\n            return left[sortProperty] == right[sortProperty] ? 0 : left[sortProperty] < right[sortProperty] ? -1 : 1;\n          });\n        }\n      });\n      BaseManagerView.prototype.initialize.call(this, options);\n    }\n  });\n  return new ResourceEditLogView();\n}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);})['catch'](__webpack_require__.oe);\n\n//# sourceURL=webpack://mapss/../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/resource/edit-log.js?");

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
/******/ 			"views/resource/edit-log": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../usr/local/lib/python3.10/dist-packages/arches/app/media/js/views/resource/edit-log.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;