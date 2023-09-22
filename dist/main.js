var helloworldjs;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// UNUSED EXPORTS: sayHelloWorld, sayHi, sayHowAu

;// CONCATENATED MODULE: ./src/greeting.helper.ts
function sayHelloWorld() {
   return 'Hello World!'
}

function sayHi() {
   return 'Hi!!!'
}

function sayHowAu() {
   return 'How are you?'
}
;// CONCATENATED MODULE: ./src/index.ts



/* harmony default export */ const src = ({ sayHelloWorld: sayHelloWorld, sayHi: sayHi, sayHowAu: sayHowAu });

helloworldjs = __webpack_exports__["default"];
/******/ })()
;