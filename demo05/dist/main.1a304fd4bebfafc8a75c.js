"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo1"] = self["webpackChunkwebpack_demo1"] || []).push([["main"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ 569);\n\r\n\r\nfunction getComponent() {\r\n  const element = document.createElement('div');\r\n  return __webpack_require__.e(/*! import() */ \"vendor\").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 486, 23))\r\n    .then(({ default: _ }) => {\r\n      const element = document.createElement('div');\r\n\r\n      element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n      // element.innerHTML =  'Hello';\r\n      element.onclick = _print__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(null, 'Hello webpack!');\r\n\r\n      return element;\r\n    })\r\n    .catch((error) => 'An error occurred while loading the component');\r\n}\r\n\r\ngetComponent().then((component) => {\r\n  document.body.appendChild(component);\r\n});\n\n//# sourceURL=webpack://webpack-demo1/./src/index.js?");

/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ print)\n/* harmony export */ });\nfunction print(text) {\r\n    console.log(text);\r\n  };\n\n//# sourceURL=webpack://webpack-demo1/./src/print.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);