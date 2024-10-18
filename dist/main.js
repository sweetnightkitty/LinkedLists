/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linked_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list.js */ \"./src/linked-list.js\");\n\n\nconst list = (0,_linked_list_js__WEBPACK_IMPORTED_MODULE_0__.createLinkedList)();\n\nlist.append(\"dog\");\nlist.append(\"cat\");\nlist.append(\"parrot\");\nlist.append(\"hamster\");\nlist.append(\"snake\");\nlist.append(\"turtle\");\n\nconsole.log(list.toString());\n\n//# sourceURL=webpack://linkedlists/./src/index.js?");

/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLinkedList: () => (/* binding */ createLinkedList)\n/* harmony export */ });\nfunction createNode() {\n    return {\n        value: null,\n        next: null,\n    };\n}\n\nfunction createLinkedList() {\n    return {\n        firstNode: null, //by default\n\n        lastNode: function() {\n            let currentNode = this.firstNode;\n            while(currentNode) {\n                if(!currentNode.next) {\n                    return currentNode;\n                }\n                currentNode = currentNode.next;\n            }\n        },\n\n        head: function() {\n            if(!this.firstNode) {\n                return \"List is empty\";\n            } else {\n                return this.firstNode.value;\n            }\n        },\n\n        //Appends new value but no linking\n        append: function(input) {\n            let newNode = createNode();\n            newNode.value = input;\n\n            if(!this.firstNode) {\n                this.firstNode = newNode;\n                return;\n            }\n\n            let currentNode = this.firstNode;\n            while(currentNode.next) {\n                currentNode = currentNode.next\n            }\n\n            currentNode.next = newNode\n        },\n\n        prepend: function(input) {\n            let newNode = createNode();\n            newNode.value = input;\n\n            if(!this.firstNode) {\n                this.firstNode = newNode;\n                return;\n            }\n\n            newNode.next = this.firstNode;\n            this.firstNode = newNode;\n        },\n\n        tail: function() {\n            let currentNode = this.firstNode;\n            if(currentNode.next == null) {\n                return currentNode.value;\n            }\n\n            while(currentNode) {\n                if(currentNode.next == null) {\n                    return currentNode.value;\n                }\n                currentNode = currentNode.next;\n            }\n        },\n\n        size: function() {\n            if(!this.firstNode) {\n                return 0;\n            }\n\n            let currentNode = this.firstNode;\n            let total = 0;\n            while(currentNode) {\n                total++;\n                currentNode = currentNode.next;\n            }\n            return total;\n        },\n\n        pop: function() {\n            const tail = this.lastNode();\n            let currentNode = this.firstNode;\n            while(currentNode) {\n                if(currentNode.next == tail) {\n                    currentNode.next = null;\n                }\n                currentNode = currentNode.next;\n            }\n        },\n\n        contains: function(value) {\n            let currentNode = this.firstNode;\n            while(currentNode) {\n                if(currentNode.value == value) {\n                    return true;\n                }\n                currentNode = currentNode.next;\n            }\n            return false;\n        },\n\n        at: function(index) {\n            let currentNode = this.firstNode;\n            const length = this.size();\n\n            for(let i = 0; i < length; i++) {\n                if(i == index) {\n                    return currentNode;\n                }\n                currentNode = currentNode.next;\n\n            }\n            return undefined;\n\n        },\n\n        find: function(value) {\n            let currentNode = this.firstNode;\n            const length = this.size();\n            for(let i = 0; i < length; i++) {\n                if(currentNode.value == value) {\n                    return i;\n                }\n                currentNode = currentNode.next;\n            }\n            return null;\n        },\n\n\n        print: function() {\n            let currentNode = this.firstNode;\n            while(currentNode) {\n                console.log(currentNode.value);\n                currentNode = currentNode.next;\n            }\n        },\n\n        toString: function() {\n            let currentNode = this.firstNode;\n            let string = \"\";\n            while(currentNode) {\n                if(currentNode.next) {\n                    const value = `( ${currentNode.value} ) -> `;\n                    string += value;\n                } else {\n                    const value = `( ${currentNode.value} ) -> null`;\n                    string += value;\n                }\n                currentNode = currentNode.next;\n            }\n            console.log(string);\n        },\n\n        insertAt: function(value, index) {\n            let newNode = createNode();\n            newNode.value = value;\n\n            let currentNode = this.firstNode;\n            const length = this.size();\n            let leftNode;\n            let rightNode;\n\n            for(let i = 0; i < length; i++) {\n                    if(i == (index - 1)) {\n                        leftNode = currentNode;\n                    } \n                    if(i == index) {\n                        rightNode = currentNode;\n                    }\n                    currentNode = currentNode.next;\n            }\n\n            newNode.next = rightNode;\n            leftNode.next = newNode;\n        },\n\n        removeAt: function(index) {\n            let currentNode = this.firstNode;\n            const length = this.size();\n\n            let leftNode;\n            let targetNode;\n\n            for(let i = 0; i < length; i++) {\n                if(i == (index - 1)) {\n                    leftNode = currentNode;\n                };\n                if(i == index) {\n                    targetNode = currentNode;\n                }\n                currentNode = currentNode.next;\n            }\n\n            leftNode.next = targetNode.next;\n        }\n\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://linkedlists/./src/linked-list.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;