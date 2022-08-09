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
exports.id = "pages/form";
exports.ids = ["pages/form"];
exports.modules = {

/***/ "./pages/form.tsx":
/*!************************!*\
  !*** ./pages/form.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Forms)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Forms() {\n    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        mode: \"onChange\"\n    });\n    const onValid = (data)=>{\n        console.log(\"im valid bby\");\n    };\n    const onInvalid = (errors)=>{\n        console.log(errors);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onValid, onInvalid),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"username\", {\n                    required: \"Username is required\",\n                    minLength: {\n                        message: \"The username should be longer than 5 chars\",\n                        value: 5\n                    }\n                }),\n                type: \"text\",\n                placeholder: \"Username\"\n            }, void 0, false, {\n                fileName: \"/Users/byungskersmacbook/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"email\", {\n                    required: \"Email is required\",\n                    validate: {\n                        notGmail: (value)=>!value.includes(\"@gmail.com\") || \"Gmail is not allowed\"\n                    }\n                }),\n                type: \"email\",\n                placeholder: \"Email\"\n            }, void 0, false, {\n                fileName: \"/Users/byungskersmacbook/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            errors.email?.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"password\", {\n                    required: \"Password is required\"\n                }),\n                type: \"password\",\n                placeholder: \"Password\"\n            }, void 0, false, {\n                fileName: \"/Users/byungskersmacbook/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/Users/byungskersmacbook/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/byungskersmacbook/Documents/GitHub/carrot-market/pages/form.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFXM0IsU0FBU0MsS0FBSyxHQUFHO0lBQzlCLE1BQU0sRUFDSkMsUUFBUSxHQUNSQyxZQUFZLEdBQ1pDLFNBQVMsRUFBRSxFQUFFQyxNQUFNLEdBQUUsS0FDdEIsR0FBR0wsd0RBQU8sQ0FBWTtRQUNyQk0sSUFBSSxFQUFFLFVBQVU7S0FDakIsQ0FBQztJQUNGLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxJQUFlLEdBQUs7UUFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsTUFBTUMsU0FBUyxHQUFHLENBQUNOLE1BQW1CLEdBQUs7UUFDekNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxNQUFNLENBQUMsQ0FBQztLQUNyQjtJQUNELHFCQUNFLDhEQUFDTyxNQUFJO1FBQUNDLFFBQVEsRUFBRVYsWUFBWSxDQUFDSSxPQUFPLEVBQUVJLFNBQVMsQ0FBQzs7MEJBQzlDLDhEQUFDRyxPQUFLO2dCQUNILEdBQUdaLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQ3ZCYSxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQ0MsU0FBUyxFQUFFO3dCQUNUQyxPQUFPLEVBQUUsNENBQTRDO3dCQUNyREMsS0FBSyxFQUFFLENBQUM7cUJBQ1Q7aUJBQ0YsQ0FBQztnQkFDRkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLFdBQVcsRUFBQyxVQUFVOzs7OztvQkFDdEI7MEJBQ0YsOERBQUNOLE9BQUs7Z0JBQ0gsR0FBR1osUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDcEJhLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCTSxRQUFRLEVBQUU7d0JBQ1JDLFFBQVEsRUFBRSxDQUFDSixLQUFLLEdBQ2QsQ0FBQ0EsS0FBSyxDQUFDSyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksc0JBQXNCO3FCQUMxRDtpQkFDRixDQUFDO2dCQUNGSixJQUFJLEVBQUMsT0FBTztnQkFDWkMsV0FBVyxFQUFDLE9BQU87Ozs7O29CQUNuQjtZQUNEZixNQUFNLENBQUNtQixLQUFLLEVBQUVQLE9BQU87MEJBQ3RCLDhEQUFDSCxPQUFLO2dCQUNILEdBQUdaLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQUVhLFFBQVEsRUFBRSxzQkFBc0I7aUJBQUUsQ0FBQztnQkFDOURJLElBQUksRUFBQyxVQUFVO2dCQUNmQyxXQUFXLEVBQUMsVUFBVTs7Ozs7b0JBQ3RCOzBCQUNGLDhEQUFDTixPQUFLO2dCQUFDSyxJQUFJLEVBQUMsUUFBUTtnQkFBQ0QsS0FBSyxFQUFDLGdCQUFnQjs7Ozs7b0JBQUc7Ozs7OztZQUN6QyxDQUNQO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0Ly4vcGFnZXMvZm9ybS50c3g/MGRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG4vLyBCZXR0ZXIgRXJyb3MgKHNldCwgY2xlYXIsIGRpc3BsYXkpXG4vLyBIYXZlIGNvbnRyb2wgb3ZlciBpbnB1dHNcblxuaW50ZXJmYWNlIExvZ2luRm9ybSB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1zKCkge1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm08TG9naW5Gb3JtPih7XG4gICAgbW9kZTogXCJvbkNoYW5nZVwiLFxuICB9KTtcbiAgY29uc3Qgb25WYWxpZCA9IChkYXRhOiBMb2dpbkZvcm0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImltIHZhbGlkIGJieVwiKTtcbiAgfTtcbiAgY29uc3Qgb25JbnZhbGlkID0gKGVycm9yczogRmllbGRFcnJvcnMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25WYWxpZCwgb25JbnZhbGlkKX0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwidXNlcm5hbWVcIiwge1xuICAgICAgICAgIHJlcXVpcmVkOiBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoZSB1c2VybmFtZSBzaG91bGQgYmUgbG9uZ2VyIHRoYW4gNSBjaGFyc1wiLFxuICAgICAgICAgICAgdmFsdWU6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSl9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcbiAgICAgICAgICByZXF1aXJlZDogXCJFbWFpbCBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3RHbWFpbDogKHZhbHVlKSA9PlxuICAgICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXMoXCJAZ21haWwuY29tXCIpIHx8IFwiR21haWwgaXMgbm90IGFsbG93ZWRcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAvPlxuICAgICAge2Vycm9ycy5lbWFpbD8ubWVzc2FnZX1cbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7IHJlcXVpcmVkOiBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIgfSl9XG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGUgQWNjb3VudFwiIC8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJGb3JtcyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwibW9kZSIsIm9uVmFsaWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm9uSW52YWxpZCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJtZXNzYWdlIiwidmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWxpZGF0ZSIsIm5vdEdtYWlsIiwiaW5jbHVkZXMiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/form.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/form.tsx"));
module.exports = __webpack_exports__;

})();