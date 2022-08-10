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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Forms)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Forms() {\n    const { register , handleSubmit , formState: { errors  } , watch , setError , setValue , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        mode: \"onChange\"\n    });\n    const onValid = (data)=>{\n        console.log(\"im valid bby\");\n        reset();\n    };\n    const onInvalid = (errors)=>{\n        console.log(errors);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onValid, onInvalid),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"username\", {\n                    required: \"Username is required\",\n                    minLength: {\n                        message: \"The username should be longer than 5 chars\",\n                        value: 5\n                    }\n                }),\n                type: \"text\",\n                placeholder: \"Username\"\n            }, void 0, false, {\n                fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            errors.username?.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"email\", {\n                    required: \"Email is required\",\n                    validate: {\n                        notGmail: (value)=>!value.includes(\"@gmail.com\") || \"Gmail is not allowed\"\n                    }\n                }),\n                type: \"email\",\n                placeholder: \"Email\",\n                className: `${Boolean(errors.email?.message) ? \"border-red-100\" : \"\"}`\n            }, void 0, false, {\n                fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            errors.email?.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"password\", {\n                    required: \"Password is required\"\n                }),\n                type: \"password\",\n                placeholder: \"Password\"\n            }, void 0, false, {\n                fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFZM0IsU0FBU0MsS0FBSyxHQUFHO0lBQzlCLE1BQU0sRUFDSkMsUUFBUSxHQUNSQyxZQUFZLEdBQ1pDLFNBQVMsRUFBRSxFQUFFQyxNQUFNLEdBQUUsR0FDckJDLEtBQUssR0FDTEMsUUFBUSxHQUNSQyxRQUFRLEdBQ1JDLEtBQUssR0FDTixHQUFHVCx3REFBTyxDQUFZO1FBQ3JCVSxJQUFJLEVBQUUsVUFBVTtLQUNqQixDQUFDO0lBQ0YsTUFBTUMsT0FBTyxHQUFHLENBQUNDLElBQWUsR0FBSztRQUNuQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUJMLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRCxNQUFNTSxTQUFTLEdBQUcsQ0FBQ1YsTUFBbUIsR0FBSztRQUN6Q1EsT0FBTyxDQUFDQyxHQUFHLENBQUNULE1BQU0sQ0FBQyxDQUFDO0tBQ3JCO0lBQ0QscUJBQ0UsOERBQUNXLE1BQUk7UUFBQ0MsUUFBUSxFQUFFZCxZQUFZLENBQUNRLE9BQU8sRUFBRUksU0FBUyxDQUFDOzswQkFDOUMsOERBQUNHLE9BQUs7Z0JBQ0gsR0FBR2hCLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQ3ZCaUIsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaENDLFNBQVMsRUFBRTt3QkFDVEMsT0FBTyxFQUFFLDRDQUE0Qzt3QkFDckRDLEtBQUssRUFBRSxDQUFDO3FCQUNUO2lCQUNGLENBQUM7Z0JBQ0ZDLElBQUksRUFBQyxNQUFNO2dCQUNYQyxXQUFXLEVBQUMsVUFBVTs7Ozs7b0JBQ3RCO1lBQ0RuQixNQUFNLENBQUNvQixRQUFRLEVBQUVKLE9BQU87MEJBQ3pCLDhEQUFDSCxPQUFLO2dCQUNILEdBQUdoQixRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNwQmlCLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCTyxRQUFRLEVBQUU7d0JBQ1JDLFFBQVEsRUFBRSxDQUFDTCxLQUFLLEdBQ2QsQ0FBQ0EsS0FBSyxDQUFDTSxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksc0JBQXNCO3FCQUMxRDtpQkFDRixDQUFDO2dCQUNGTCxJQUFJLEVBQUMsT0FBTztnQkFDWkMsV0FBVyxFQUFDLE9BQU87Z0JBQ25CSyxTQUFTLEVBQUUsQ0FBQyxFQUFFQyxPQUFPLENBQUN6QixNQUFNLENBQUMwQixLQUFLLEVBQUVWLE9BQU8sQ0FBQyxHQUFHLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDOzs7OztvQkFDdEU7WUFDRGhCLE1BQU0sQ0FBQzBCLEtBQUssRUFBRVYsT0FBTzswQkFDdEIsOERBQUNILE9BQUs7Z0JBQ0gsR0FBR2hCLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQUVpQixRQUFRLEVBQUUsc0JBQXNCO2lCQUFFLENBQUM7Z0JBQzlESSxJQUFJLEVBQUMsVUFBVTtnQkFDZkMsV0FBVyxFQUFDLFVBQVU7Ozs7O29CQUN0QjswQkFDRiw4REFBQ04sT0FBSztnQkFBQ0ssSUFBSSxFQUFDLFFBQVE7Z0JBQUNELEtBQUssRUFBQyxnQkFBZ0I7Ozs7O29CQUFHOzs7Ozs7WUFDekMsQ0FDUDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL3BhZ2VzL2Zvcm0udHN4PzBkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuLy8gQmV0dGVyIEVycm9zIChzZXQsIGNsZWFyLCBkaXNwbGF5KVxuLy8gSGF2ZSBjb250cm9sIG92ZXIgaW5wdXRzXG5cbmludGVyZmFjZSBMb2dpbkZvcm0ge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBlcnJvcnM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1zKCkge1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgICB3YXRjaCxcbiAgICBzZXRFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICByZXNldFxuICB9ID0gdXNlRm9ybTxMb2dpbkZvcm0+KHtcbiAgICBtb2RlOiBcIm9uQ2hhbmdlXCIsXG4gIH0pO1xuICBjb25zdCBvblZhbGlkID0gKGRhdGE6IExvZ2luRm9ybSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaW0gdmFsaWQgYmJ5XCIpO1xuICAgIHJlc2V0KCk7XG4gIH07XG4gIGNvbnN0IG9uSW52YWxpZCA9IChlcnJvcnM6IEZpZWxkRXJyb3JzKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyb3JzKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQsIG9uSW52YWxpZCl9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHsuLi5yZWdpc3RlcihcInVzZXJuYW1lXCIsIHtcbiAgICAgICAgICByZXF1aXJlZDogXCJVc2VybmFtZSBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgIG1pbkxlbmd0aDoge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgdXNlcm5hbWUgc2hvdWxkIGJlIGxvbmdlciB0aGFuIDUgY2hhcnNcIixcbiAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgLz5cbiAgICAgIHtlcnJvcnMudXNlcm5hbWU/Lm1lc3NhZ2V9XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwge1xuICAgICAgICAgIHJlcXVpcmVkOiBcIkVtYWlsIGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIG5vdEdtYWlsOiAodmFsdWUpID0+XG4gICAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyhcIkBnbWFpbC5jb21cIikgfHwgXCJHbWFpbCBpcyBub3QgYWxsb3dlZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pfVxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtCb29sZWFuKGVycm9ycy5lbWFpbD8ubWVzc2FnZSkgPyBcImJvcmRlci1yZWQtMTAwXCIgOiBcIlwifWB9XG4gICAgICAvPlxuICAgICAge2Vycm9ycy5lbWFpbD8ubWVzc2FnZX1cbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7IHJlcXVpcmVkOiBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIgfSl9XG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGUgQWNjb3VudFwiIC8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJGb3JtcyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwid2F0Y2giLCJzZXRFcnJvciIsInNldFZhbHVlIiwicmVzZXQiLCJtb2RlIiwib25WYWxpZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib25JbnZhbGlkIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInVzZXJuYW1lIiwidmFsaWRhdGUiLCJub3RHbWFpbCIsImluY2x1ZGVzIiwiY2xhc3NOYW1lIiwiQm9vbGVhbiIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/form.tsx\n");

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