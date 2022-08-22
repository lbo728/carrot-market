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
exports.id = "pages/api/users/enter";
exports.ids = ["pages/api/users/enter"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./libs/server/client.ts":
/*!*******************************!*\
  !*** ./libs/server/client.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLGlFQUFlLElBQUlBLHdEQUFZLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9saWJzL3NlcnZlci9jbGllbnQudHM/MmIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByaXNtYUNsaWVudCgpO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/server/client.ts\n");

/***/ }),

/***/ "(api)/./libs/server/withHandler.ts":
/*!************************************!*\
  !*** ./libs/server/withHandler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler(method, fn) {\n    return async function(req, res) {\n        if (req.method !== method) {\n            return res.status(405).end();\n        }\n        try {\n            await fn(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci93aXRoSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRWUsU0FBU0EsV0FBVyxDQUNqQ0MsTUFBaUMsRUFDakNDLEVBQXVELEVBQ3ZEO0lBQ0EsT0FBTyxlQUFnQkMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtRQUNoRSxJQUFJRCxHQUFHLENBQUNGLE1BQU0sS0FBS0EsTUFBTSxFQUFFO1lBQ3pCLE9BQU9HLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUk7WUFDRixNQUFNSixFQUFFLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7U0FDcEIsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU9ILEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSyxJQUFJLENBQUM7Z0JBQUVILEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDeEM7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vbGlicy9zZXJ2ZXIvd2l0aEhhbmRsZXIudHM/OGVmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhhbmRsZXIoXG4gIG1ldGhvZDogXCJHRVRcIiB8IFwiUE9TVFwiIHwgXCJERUxFVEVcIixcbiAgZm46IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZFxuKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gbWV0aG9kKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZm4ocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJtZXRob2QiLCJmbiIsInJlcSIsInJlcyIsInN0YXR1cyIsImVuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/enter.tsx":
/*!***********************************!*\
  !*** ./pages/api/users/enter.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/server/client */ \"(api)/./libs/server/client.ts\");\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/server/withHandler */ \"(api)/./libs/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { phone , email  } = req.body;\n    let user;\n    if (email) {\n        user = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (user) console.log(\"found it.\");\n        if (!user) {\n            console.log(\"Did not find. Will create.\");\n            user = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                data: {\n                    name: \"Anonymous\",\n                    email\n                }\n            });\n        }\n        console.log(user);\n    }\n    if (phone) {\n        user = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                phone: +phone\n            }\n        });\n        if (user) console.log(\"found it.\");\n        if (!user) {\n            console.log(\"Did not find. Will create.\");\n            user = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                data: {\n                    name: \"Anonymous\",\n                    phone: +phone\n                }\n            });\n        }\n        console.log(user);\n    }\n    return res.status(200).end();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"POST\", handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvZW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNVO0FBR25ELGVBQWVFLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUNoRSxNQUFNLEVBQUVDLEtBQUssR0FBRUMsS0FBSyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUNqQyxJQUFJQyxJQUFJO0lBQ1IsSUFBSUYsS0FBSyxFQUFFO1FBQ1RFLElBQUksR0FBRyxNQUFNUiwyRUFBc0IsQ0FBQztZQUNsQ1UsS0FBSyxFQUFFO2dCQUNMSixLQUFLO2FBQ047U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJRSxJQUFJLEVBQUVHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQ0osSUFBSSxFQUFFO1lBQ1RHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDMUNKLElBQUksR0FBRyxNQUFNUix1RUFBa0IsQ0FBQztnQkFDOUJjLElBQUksRUFBRTtvQkFDSkMsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCVCxLQUFLO2lCQUNOO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFDREssT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQyxDQUFDO0tBQ25CO0lBQ0QsSUFBSUgsS0FBSyxFQUFFO1FBQ1RHLElBQUksR0FBRyxNQUFNUiwyRUFBc0IsQ0FBQztZQUNsQ1UsS0FBSyxFQUFFO2dCQUNMTCxLQUFLLEVBQUUsQ0FBQ0EsS0FBSzthQUNkO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSUcsSUFBSSxFQUFFRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUNKLElBQUksRUFBRTtZQUNURyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzFDSixJQUFJLEdBQUcsTUFBTVIsdUVBQWtCLENBQUM7Z0JBQzlCYyxJQUFJLEVBQUU7b0JBQ0pDLElBQUksRUFBRSxXQUFXO29CQUNqQlYsS0FBSyxFQUFFLENBQUNBLEtBQUs7aUJBQ2Q7YUFDRixDQUFDLENBQUM7U0FDSjtRQUNETSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUM7S0FDbkI7SUFDRCxPQUFPSixHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Q0FDOUI7QUFFRCxpRUFBZWhCLG9FQUFXLENBQUMsTUFBTSxFQUFFQyxPQUFPLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9wYWdlcy9hcGkvdXNlcnMvZW50ZXIudHN4PzAyODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tIFwiQGxpYnMvc2VydmVyL2NsaWVudFwiO1xuaW1wb3J0IHdpdGhIYW5kbGVyIGZyb20gXCJAbGlicy9zZXJ2ZXIvd2l0aEhhbmRsZXJcIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHsgcGhvbmUsIGVtYWlsIH0gPSByZXEuYm9keTtcbiAgbGV0IHVzZXI7XG4gIGlmIChlbWFpbCkge1xuICAgIHVzZXIgPSBhd2FpdCBjbGllbnQudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAodXNlcikgY29uc29sZS5sb2coXCJmb3VuZCBpdC5cIik7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRpZCBub3QgZmluZC4gV2lsbCBjcmVhdGUuXCIpO1xuICAgICAgdXNlciA9IGF3YWl0IGNsaWVudC51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBcIkFub255bW91c1wiLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICB9XG4gIGlmIChwaG9uZSkge1xuICAgIHVzZXIgPSBhd2FpdCBjbGllbnQudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHBob25lOiArcGhvbmUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmICh1c2VyKSBjb25zb2xlLmxvZyhcImZvdW5kIGl0LlwiKTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGlkIG5vdCBmaW5kLiBXaWxsIGNyZWF0ZS5cIik7XG4gICAgICB1c2VyID0gYXdhaXQgY2xpZW50LnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG5hbWU6IFwiQW5vbnltb3VzXCIsXG4gICAgICAgICAgcGhvbmU6ICtwaG9uZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgfVxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoSGFuZGxlcihcIlBPU1RcIiwgaGFuZGxlcik7XG4iXSwibmFtZXMiOlsiY2xpZW50Iiwid2l0aEhhbmRsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicGhvbmUiLCJlbWFpbCIsImJvZHkiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImRhdGEiLCJuYW1lIiwic3RhdHVzIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/enter.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/enter.tsx"));
module.exports = __webpack_exports__;

})();