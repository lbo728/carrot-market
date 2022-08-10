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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Forms)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Forms() {\n    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        mode: \"onChange\"\n    });\n    const onValid = (data)=>{\n        console.log(\"im valid bby\");\n    };\n    const onInvalid = (errors)=>{\n        console.log(errors);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onValid, onInvalid),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"username\", {\n                    required: \"Username is required\",\n                    minLength: {\n                        message: \"The username should be longer than 5 chars\",\n                        value: 5\n                    }\n                }),\n                type: \"text\",\n                placeholder: \"Username\"\n            }, void 0, false, {\n                fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"email\", {\n                    required: \"Email is required\",\n                    validate: {\n                        notGmail: (value)=>!value.includes(\"@gmail.com\") || \"Gmail is not allowed\"\n                    }\n                }),\n                type: \"email\",\n                placeholder: \"Email\",\n                className: `${Boolean(errors.email?.message) ? \"border-red-100\" : \"\"}`\n            }, void 0, false, {\n                fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            errors.email?.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"password\", {\n                    required: \"Password is required\"\n                }),\n                type: \"password\",\n                placeholder: \"Password\"\n            }, void 0, false, {\n                fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/byungwoo.lee/Documents/GitHub/carrot-market/pages/form.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFXM0IsU0FBU0MsS0FBSyxHQUFHO0lBQzlCLE1BQU0sRUFDSkMsUUFBUSxHQUNSQyxZQUFZLEdBQ1pDLFNBQVMsRUFBRSxFQUFFQyxNQUFNLEdBQUUsS0FDdEIsR0FBR0wsd0RBQU8sQ0FBWTtRQUNyQk0sSUFBSSxFQUFFLFVBQVU7S0FDakIsQ0FBQztJQUNGLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxJQUFlLEdBQUs7UUFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsTUFBTUMsU0FBUyxHQUFHLENBQUNOLE1BQW1CLEdBQUs7UUFDekNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxNQUFNLENBQUMsQ0FBQztLQUNyQjtJQUNELHFCQUNFLDhEQUFDTyxNQUFJO1FBQUNDLFFBQVEsRUFBRVYsWUFBWSxDQUFDSSxPQUFPLEVBQUVJLFNBQVMsQ0FBQzs7MEJBQzlDLDhEQUFDRyxPQUFLO2dCQUNILEdBQUdaLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQ3ZCYSxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQ0MsU0FBUyxFQUFFO3dCQUNUQyxPQUFPLEVBQUUsNENBQTRDO3dCQUNyREMsS0FBSyxFQUFFLENBQUM7cUJBQ1Q7aUJBQ0YsQ0FBQztnQkFDRkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLFdBQVcsRUFBQyxVQUFVOzs7OztvQkFDdEI7MEJBQ0YsOERBQUNOLE9BQUs7Z0JBQ0gsR0FBR1osUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDcEJhLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCTSxRQUFRLEVBQUU7d0JBQ1JDLFFBQVEsRUFBRSxDQUFDSixLQUFLLEdBQ2QsQ0FBQ0EsS0FBSyxDQUFDSyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksc0JBQXNCO3FCQUMxRDtpQkFDRixDQUFDO2dCQUNGSixJQUFJLEVBQUMsT0FBTztnQkFDWkMsV0FBVyxFQUFDLE9BQU87Z0JBQ25CSSxTQUFTLEVBQUUsQ0FBQyxFQUFFQyxPQUFPLENBQUNwQixNQUFNLENBQUNxQixLQUFLLEVBQUVULE9BQU8sQ0FBQyxHQUFHLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDOzs7OztvQkFDdEU7WUFDRFosTUFBTSxDQUFDcUIsS0FBSyxFQUFFVCxPQUFPOzBCQUN0Qiw4REFBQ0gsT0FBSztnQkFDSCxHQUFHWixRQUFRLENBQUMsVUFBVSxFQUFFO29CQUFFYSxRQUFRLEVBQUUsc0JBQXNCO2lCQUFFLENBQUM7Z0JBQzlESSxJQUFJLEVBQUMsVUFBVTtnQkFDZkMsV0FBVyxFQUFDLFVBQVU7Ozs7O29CQUN0QjswQkFDRiw4REFBQ04sT0FBSztnQkFBQ0ssSUFBSSxFQUFDLFFBQVE7Z0JBQUNELEtBQUssRUFBQyxnQkFBZ0I7Ozs7O29CQUFHOzs7Ozs7WUFDekMsQ0FDUDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC8uL3BhZ2VzL2Zvcm0udHN4PzBkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuLy8gQmV0dGVyIEVycm9zIChzZXQsIGNsZWFyLCBkaXNwbGF5KVxuLy8gSGF2ZSBjb250cm9sIG92ZXIgaW5wdXRzXG5cbmludGVyZmFjZSBMb2dpbkZvcm0ge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtcygpIHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtPExvZ2luRm9ybT4oe1xuICAgIG1vZGU6IFwib25DaGFuZ2VcIixcbiAgfSk7XG4gIGNvbnN0IG9uVmFsaWQgPSAoZGF0YTogTG9naW5Gb3JtKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJpbSB2YWxpZCBiYnlcIik7XG4gIH07XG4gIGNvbnN0IG9uSW52YWxpZCA9IChlcnJvcnM6IEZpZWxkRXJyb3JzKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyb3JzKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQsIG9uSW52YWxpZCl9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHsuLi5yZWdpc3RlcihcInVzZXJuYW1lXCIsIHtcbiAgICAgICAgICByZXF1aXJlZDogXCJVc2VybmFtZSBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgIG1pbkxlbmd0aDoge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgdXNlcm5hbWUgc2hvdWxkIGJlIGxvbmdlciB0aGFuIDUgY2hhcnNcIixcbiAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7XG4gICAgICAgICAgcmVxdWlyZWQ6IFwiRW1haWwgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgbm90R21haWw6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKFwiQGdtYWlsLmNvbVwiKSB8fCBcIkdtYWlsIGlzIG5vdCBhbGxvd2VkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSl9XG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICBjbGFzc05hbWU9e2Ake0Jvb2xlYW4oZXJyb3JzLmVtYWlsPy5tZXNzYWdlKSA/IFwiYm9yZGVyLXJlZC0xMDBcIiA6IFwiXCJ9YH1cbiAgICAgIC8+XG4gICAgICB7ZXJyb3JzLmVtYWlsPy5tZXNzYWdlfVxuICAgICAgPGlucHV0XG4gICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHsgcmVxdWlyZWQ6IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIiB9KX1cbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNyZWF0ZSBBY2NvdW50XCIgLz5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRm9ybSIsIkZvcm1zIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJtb2RlIiwib25WYWxpZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib25JbnZhbGlkIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbGlkYXRlIiwibm90R21haWwiLCJpbmNsdWRlcyIsImNsYXNzTmFtZSIsIkJvb2xlYW4iLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/form.tsx\n");

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