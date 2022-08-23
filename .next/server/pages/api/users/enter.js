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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/server/client */ \"(api)/./libs/server/client.ts\");\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/server/withHandler */ \"(api)/./libs/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { phone , email  } = req.body;\n    const payload = phone ? {\n        phone: +phone\n    } : {\n        email\n    };\n    const user = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.upsert({\n        where: {\n            ...payload\n        },\n        create: {\n            name: \"Anonymous\",\n            ...payload\n        },\n        update: {}\n    });\n    console.log(user);\n    /*   if (email) {\n    user = await client.user.findUnique({\n      where: {\n        email,\n      },\n    });\n    if (user) console.log(\"found it.\");\n    if (!user) {\n      console.log(\"Did not find. Will create.\");\n      user = await client.user.create({\n        data: {\n          name: \"Anonymous\",\n          email,\n        },\n      });\n    }\n    console.log(user);\n  }\n  if (phone) {\n    user = await client.user.findUnique({\n      where: {\n        phone: +phone,\n      },\n    });\n    if (user) console.log(\"found it.\");\n    if (!user) {\n      console.log(\"Did not find. Will create.\");\n      user = await client.user.create({\n        data: {\n          name: \"Anonymous\",\n          phone: +phone,\n        },\n      });\n    }\n    console.log(user);\n  } */ return res.status(200).end();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"POST\", handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvZW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNVO0FBR25ELGVBQWVFLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUNoRSxNQUFNLEVBQUVDLEtBQUssR0FBRUMsS0FBSyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUNqQyxNQUFNQyxPQUFPLEdBQUdILEtBQUssR0FBRztRQUFFQSxLQUFLLEVBQUUsQ0FBQ0EsS0FBSztLQUFFLEdBQUc7UUFBRUMsS0FBSztLQUFFO0lBQ3JELE1BQU1HLElBQUksR0FBRyxNQUFNVCx1RUFBa0IsQ0FBQztRQUNwQ1csS0FBSyxFQUFFO1lBQ0wsR0FBR0gsT0FBTztTQUNYO1FBQ0RJLE1BQU0sRUFBRTtZQUNOQyxJQUFJLEVBQUUsV0FBVztZQUNqQixHQUFHTCxPQUFPO1NBQ1g7UUFDRE0sTUFBTSxFQUFFLEVBQUU7S0FDWCxDQUFDO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLENBQUMsQ0FBQztJQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQ0ksQ0FDSixPQUFPTCxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Q0FDOUI7QUFFRCxpRUFBZWpCLG9FQUFXLENBQUMsTUFBTSxFQUFFQyxPQUFPLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9wYWdlcy9hcGkvdXNlcnMvZW50ZXIudHN4PzAyODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tIFwiQGxpYnMvc2VydmVyL2NsaWVudFwiO1xuaW1wb3J0IHdpdGhIYW5kbGVyIGZyb20gXCJAbGlicy9zZXJ2ZXIvd2l0aEhhbmRsZXJcIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHsgcGhvbmUsIGVtYWlsIH0gPSByZXEuYm9keTtcbiAgY29uc3QgcGF5bG9hZCA9IHBob25lID8geyBwaG9uZTogK3Bob25lIH0gOiB7IGVtYWlsIH07XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBjbGllbnQudXNlci51cHNlcnQoe1xuICAgIHdoZXJlOiB7XG4gICAgICAuLi5wYXlsb2FkLFxuICAgIH0sXG4gICAgY3JlYXRlOiB7XG4gICAgICBuYW1lOiBcIkFub255bW91c1wiLFxuICAgICAgLi4ucGF5bG9hZCxcbiAgICB9LFxuICAgIHVwZGF0ZToge30sXG4gIH0pO1xuICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgLyogICBpZiAoZW1haWwpIHtcbiAgICB1c2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBlbWFpbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKHVzZXIpIGNvbnNvbGUubG9nKFwiZm91bmQgaXQuXCIpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgY29uc29sZS5sb2coXCJEaWQgbm90IGZpbmQuIFdpbGwgY3JlYXRlLlwiKTtcbiAgICAgIHVzZXIgPSBhd2FpdCBjbGllbnQudXNlci5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogXCJBbm9ueW1vdXNcIixcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgfVxuICBpZiAocGhvbmUpIHtcbiAgICB1c2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBwaG9uZTogK3Bob25lLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAodXNlcikgY29uc29sZS5sb2coXCJmb3VuZCBpdC5cIik7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRpZCBub3QgZmluZC4gV2lsbCBjcmVhdGUuXCIpO1xuICAgICAgdXNlciA9IGF3YWl0IGNsaWVudC51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBcIkFub255bW91c1wiLFxuICAgICAgICAgIHBob25lOiArcGhvbmUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codXNlcik7XG4gIH0gKi9cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEhhbmRsZXIoXCJQT1NUXCIsIGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbImNsaWVudCIsIndpdGhIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBob25lIiwiZW1haWwiLCJib2R5IiwicGF5bG9hZCIsInVzZXIiLCJ1cHNlcnQiLCJ3aGVyZSIsImNyZWF0ZSIsIm5hbWUiLCJ1cGRhdGUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/enter.tsx\n");

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