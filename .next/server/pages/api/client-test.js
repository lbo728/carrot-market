"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/client-test";
exports.ids = ["pages/api/client-test"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./libs/client.ts":
/*!************************!*\
  !*** ./libs/client.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsaUVBQWUsSUFBSUEsd0RBQVksRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL2xpYnMvY2xpZW50LnRzPzRiYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcmlzbWFDbGllbnQoKTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/client.ts\n");

/***/ }),

/***/ "(api)/./pages/api/client-test.tsx":
/*!***********************************!*\
  !*** ./pages/api/client-test.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/client */ \"(api)/./libs/client.ts\");\n\nasync function handler(req, res) {\n    await _libs_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n        data: {\n            email: \"hi\",\n            name: \"hi\"\n        }\n    });\n    res.json({\n        ok: true\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2xpZW50LXRlc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3VDO0FBRXhCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU1ILGdFQUFrQixDQUFDO1FBQ3ZCTSxJQUFJLEVBQUU7WUFDSkMsS0FBSyxFQUFFLElBQUk7WUFDWEMsSUFBSSxFQUFFLElBQUk7U0FDWDtLQUNGLENBQUMsQ0FBQztJQUNITCxHQUFHLENBQUNNLElBQUksQ0FBQztRQUNQQyxFQUFFLEVBQUUsSUFBSTtLQUNULENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL3BhZ2VzL2FwaS9jbGllbnQtdGVzdC50c3g/NTMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2xpYnMvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgYXdhaXQgY2xpZW50LnVzZXIuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBlbWFpbDogXCJoaVwiLFxuICAgICAgbmFtZTogXCJoaVwiLFxuICAgIH0sXG4gIH0pO1xuICByZXMuanNvbih7XG4gICAgb2s6IHRydWUsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VyIiwiY3JlYXRlIiwiZGF0YSIsImVtYWlsIiwibmFtZSIsImpzb24iLCJvayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/client-test.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/client-test.tsx"));
module.exports = __webpack_exports__;

})();