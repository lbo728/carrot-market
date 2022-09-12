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

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler(method, fn) {\n    return async function(req, res) {\n        if (req.method !== method) {\n            return res.status(405).end();\n        }\n        try {\n            await fn(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci93aXRoSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBT2UsU0FBU0EsV0FBVyxDQUNqQ0MsTUFBaUMsRUFDakNDLEVBQXVELEVBQ3ZEO0lBQ0EsT0FBTyxlQUFnQkMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtRQUNoRSxJQUFJRCxHQUFHLENBQUNGLE1BQU0sS0FBS0EsTUFBTSxFQUFFO1lBQ3pCLE9BQU9HLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUk7WUFDRixNQUFNSixFQUFFLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7U0FDcEIsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU9ILEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSyxJQUFJLENBQUM7Z0JBQUVILEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDeEM7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vbGlicy9zZXJ2ZXIvd2l0aEhhbmRsZXIudHM/OGVmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVR5cGUge1xuICBvazogYm9vbGVhbjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoSGFuZGxlcihcbiAgbWV0aG9kOiBcIkdFVFwiIHwgXCJQT1NUXCIgfCBcIkRFTEVURVwiLFxuICBmbjogKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB2b2lkXG4pIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGlmIChyZXEubWV0aG9kICE9PSBtZXRob2QpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBmbihyZXEsIHJlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xuICAgIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsIm1ldGhvZCIsImZuIiwicmVxIiwicmVzIiwic3RhdHVzIiwiZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/enter.tsx":
/*!***********************************!*\
  !*** ./pages/api/users/enter.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twilio */ \"twilio\");\n/* harmony import */ var twilio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(twilio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/server/withHandler */ \"(api)/./libs/server/withHandler.ts\");\n/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/server/client */ \"(api)/./libs/server/client.ts\");\n\n\n\nconst twilioClient = twilio__WEBPACK_IMPORTED_MODULE_0___default()(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);\nasync function handler(req, res) {\n    const { phone , email  } = req.body;\n    const user = phone ? {\n        phone: +phone\n    } : email ? {\n        email\n    } : null;\n    if (!user) return res.status(400).json({\n        ok: false\n    });\n    const payload = Math.floor(100000 + Math.random() * 900000) + \"\";\n    const token = await _libs_server_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].token.create({\n        data: {\n            payload,\n            user: {\n                connectOrCreate: {\n                    where: {\n                        ...user\n                    },\n                    create: {\n                        name: \"Anonymous\",\n                        ...user\n                    }\n                }\n            }\n        }\n    });\n    if (phone) {\n        const message = await twilioClient.messages.create({\n            messagingServiceSid: process.env.TWILIO_MSID,\n            to: process.env.MY_PHONE,\n            body: \"your login token is ${payload}.\"\n        });\n        console.log(message);\n    }\n    return res.json({\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"POST\", handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvZW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRCO0FBRXlDO0FBQzVCO0FBRXpDLE1BQU1HLFlBQVksR0FBR0gsNkNBQU0sQ0FBQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsRUFBRUYsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFlBQVksQ0FBQztBQUU3RSxlQUFlQyxPQUFPLENBQ3BCQyxHQUFtQixFQUNuQkMsR0FBa0MsRUFDaEM7SUFDRixNQUFNLEVBQUVDLEtBQUssR0FBRUMsS0FBSyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUNqQyxNQUFNQyxJQUFJLEdBQUdILEtBQUssR0FBRztRQUFFQSxLQUFLLEVBQUUsQ0FBQ0EsS0FBSztLQUFFLEdBQUdDLEtBQUssR0FBRztRQUFFQSxLQUFLO0tBQUUsR0FBRyxJQUFJO0lBQ2pFLElBQUksQ0FBQ0UsSUFBSSxFQUFFLE9BQU9KLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsRUFBRSxFQUFFLEtBQUs7S0FBRSxDQUFDLENBQUM7SUFDdEQsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUNoRSxNQUFNQyxLQUFLLEdBQUcsTUFBTXBCLHdFQUFtQixDQUFDO1FBQ3RDc0IsSUFBSSxFQUFFO1lBQ0pOLE9BQU87WUFDUEosSUFBSSxFQUFFO2dCQUNKVyxlQUFlLEVBQUU7b0JBQ2ZDLEtBQUssRUFBRTt3QkFDTCxHQUFHWixJQUFJO3FCQUNSO29CQUNEUyxNQUFNLEVBQUU7d0JBQ05JLElBQUksRUFBRSxXQUFXO3dCQUNqQixHQUFHYixJQUFJO3FCQUNSO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFDRixJQUFJSCxLQUFLLEVBQUU7UUFDVCxNQUFNaUIsT0FBTyxHQUFHLE1BQU16QixZQUFZLENBQUMwQixRQUFRLENBQUNOLE1BQU0sQ0FBQztZQUNuRE8sbUJBQW1CLEVBQUUxQixPQUFPLENBQUNDLEdBQUcsQ0FBQzBCLFdBQVc7WUFDNUNDLEVBQUUsRUFBRTVCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNEIsUUFBUTtZQUN4QnBCLElBQUksRUFBRSxpQ0FBaUM7U0FDdEMsQ0FBQztRQUNGcUIsT0FBTyxDQUFDQyxHQUFHLENBQUNQLE9BQU8sQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsT0FBT2xCLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO1FBQ2RDLEVBQUUsRUFBRSxJQUFJO0tBQ1QsQ0FBQyxDQUFDO0NBQ0o7QUFFRCxpRUFBZWhCLG9FQUFXLENBQUMsTUFBTSxFQUFFTyxPQUFPLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQvLi9wYWdlcy9hcGkvdXNlcnMvZW50ZXIudHN4PzAyODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3aWxpbyBmcm9tIFwidHdpbGlvXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB3aXRoSGFuZGxlciwgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiQGxpYnMvc2VydmVyL3dpdGhIYW5kbGVyXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJAbGlicy9zZXJ2ZXIvY2xpZW50XCI7XG5cbmNvbnN0IHR3aWxpb0NsaWVudCA9IHR3aWxpbyhwcm9jZXNzLmVudi5UV0lMSU9fU0lELCBwcm9jZXNzLmVudi5UV0lMSU9fVE9LRU4pO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XG4gICkge1xuICBjb25zdCB7IHBob25lLCBlbWFpbCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHVzZXIgPSBwaG9uZSA/IHsgcGhvbmU6ICtwaG9uZSB9IDogZW1haWwgPyB7IGVtYWlsIH0gOiBudWxsO1xuICBpZiAoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG9rOiBmYWxzZSB9KTtcbiAgY29uc3QgcGF5bG9hZCA9IE1hdGguZmxvb3IoMTAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMCkgKyBcIlwiO1xuICBjb25zdCB0b2tlbiA9IGF3YWl0IGNsaWVudC50b2tlbi5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHBheWxvYWQsXG4gICAgICB1c2VyOiB7XG4gICAgICAgIGNvbm5lY3RPckNyZWF0ZToge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBuYW1lOiBcIkFub255bW91c1wiLFxuICAgICAgICAgICAgLi4udXNlcixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgaWYgKHBob25lKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHR3aWxpb0NsaWVudC5tZXNzYWdlcy5jcmVhdGUoe1xuICAgIG1lc3NhZ2luZ1NlcnZpY2VTaWQ6IHByb2Nlc3MuZW52LlRXSUxJT19NU0lELFxuICAgIHRvOiBwcm9jZXNzLmVudi5NWV9QSE9ORSEsXG4gICAgYm9keTogJ3lvdXIgbG9naW4gdG9rZW4gaXMgJHtwYXlsb2FkfS4nLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG4gIHJldHVybiByZXMuanNvbih7XG4gICAgb2s6IHRydWUsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoSGFuZGxlcihcIlBPU1RcIiwgaGFuZGxlcik7XG4iXSwibmFtZXMiOlsidHdpbGlvIiwid2l0aEhhbmRsZXIiLCJjbGllbnQiLCJ0d2lsaW9DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiVFdJTElPX1NJRCIsIlRXSUxJT19UT0tFTiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwaG9uZSIsImVtYWlsIiwiYm9keSIsInVzZXIiLCJzdGF0dXMiLCJqc29uIiwib2siLCJwYXlsb2FkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9rZW4iLCJjcmVhdGUiLCJkYXRhIiwiY29ubmVjdE9yQ3JlYXRlIiwid2hlcmUiLCJuYW1lIiwibWVzc2FnZSIsIm1lc3NhZ2VzIiwibWVzc2FnaW5nU2VydmljZVNpZCIsIlRXSUxJT19NU0lEIiwidG8iLCJNWV9QSE9ORSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/enter.tsx\n");

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