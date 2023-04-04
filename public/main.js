/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordeon.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordeon.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordeon\": function() { return /* binding */ accordeon; }\n/* harmony export */ });\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.js */ \"./src/js/modules/tabs.js\");\n\r\n\r\nconst accordeon = () => {\r\n    const parent = \".accordeon\";\r\n    const trigger = \".accordeon__item-content__title\";\r\n    const content = \".accordeon__item-content__descr\";\r\n\r\n    const contents = document.querySelectorAll(content);\r\n    const triggers = document.querySelectorAll(trigger);\r\n\r\n    const parents = document.querySelectorAll(parent);\r\n\r\n    const hideAll = () => {\r\n        contents.forEach(item => {\r\n            item.classList.add(\"disable\");\r\n        })\r\n    }\r\n    const showContent = (index = 0) => {\r\n        contents.forEach((item, i) => {\r\n            if (i === index) {\r\n                item.classList.remove(\"disable\");\r\n            }\r\n        })\r\n    }\r\n    hideAll();\r\n\r\n    parents.forEach(item => {\r\n        item.addEventListener(\"click\", (event) => {\r\n            const target = event.target;\r\n            if (target && target.classList.contains(trigger.slice(1))) {\r\n                triggers.forEach((trigger, i) => {\r\n                    if (target === trigger) {\r\n                        hideAll();\r\n                        showContent(i);\r\n                    }\r\n                })\r\n            }\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/accordeon.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabs\": function() { return /* binding */ tabs; }\n/* harmony export */ });\nconst tabs = (parent, trigger, content) => {\r\n    const parentTrigger = document.querySelector(parent);\r\n\r\n    const triggers = document.querySelectorAll(trigger);\r\n\r\n    const contents = document.querySelectorAll(content);\r\n\r\n\r\n    const hideAll = () => {\r\n        contents.forEach(item => {\r\n            item.classList.add(\"disable\");\r\n        })\r\n    }\r\n\r\n    const showContent = (index = 0) => {\r\n        contents.forEach((item, i) => {\r\n            if (i === index) {\r\n                item.classList.remove(\"disable\");\r\n            }\r\n        })\r\n    }\r\n    hideAll();\r\n    showContent();\r\n\r\n    parentTrigger.addEventListener(\"click\", (event) => {\r\n        const target = event.target;\r\n\r\n        if (target && target.classList.contains(trigger.slice(1))) {\r\n            triggers.forEach((trigger, i) => {\r\n                if (target === trigger) {\r\n                    hideAll();\r\n                    showContent(i);\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://mytemplate/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_accordeon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon.js */ \"./src/js/modules/accordeon.js\");\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__.tabs)(\".projects__tabs\", \".projects__tabs-item\", \".projects__content\", \"data-tab\", \"tab-1\");\r\n    (0,_modules_accordeon_js__WEBPACK_IMPORTED_MODULE_1__.accordeon)();\r\n});\r\n\n\n//# sourceURL=webpack://mytemplate/./src/js/script.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;