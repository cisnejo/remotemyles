"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/docoverview",{

/***/ "./pages/user/docoverview.tsx":
/*!************************************!*\
  !*** ./pages/user/docoverview.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar data = [\n    {\n        programName: \"JC_9/16/2022\",\n        programDate: \"09/16/2022\",\n        location: \"somewhere_1.docx\"\n    },\n    {\n        programName: \"JC_9/09/2022\",\n        programDate: \"09/09/2022\",\n        location: \"somewhere_2.docx\"\n    },\n    {\n        programName: \"JC_9/02/2022\",\n        programDate: \"09/02/2022\",\n        location: \"somewhere_3.docx\"\n    }, \n];\nvar docoverview = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rowData = ref[0], setRowData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setRowData([]);\n    }, []);\n    var table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: \"Program Name\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            rowData.map(function(programdata) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: programdata.programName\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n    if (rowData.length < 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"...loading\"\n        }, void 0, false, {\n            fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, _this);\n    }\n};\n_s(docoverview, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (docoverview);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2RvY292ZXJ2aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFHNEM7QUFJNUMsSUFBTUUsSUFBSSxHQUFHO0lBQ1g7UUFDRUMsV0FBVyxFQUFFLGNBQWM7UUFDM0JDLFdBQVcsRUFBRSxZQUFZO1FBQ3pCQyxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCO0lBQ0Q7UUFDRUYsV0FBVyxFQUFFLGNBQWM7UUFDM0JDLFdBQVcsRUFBRSxZQUFZO1FBQ3pCQyxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCO0lBQ0Q7UUFDRUYsV0FBVyxFQUFFLGNBQWM7UUFDM0JDLFdBQVcsRUFBRSxZQUFZO1FBQ3pCQyxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCO0NBQ0Y7QUFRRCxJQUFNQyxXQUFXLEdBQWEsV0FBTTs7SUFDbEMsSUFBOEJMLEdBQXVCLEdBQXZCQSwrQ0FBUSxDQUFZLEVBQUUsQ0FBQyxFQUE5Q00sT0FBTyxHQUFnQk4sR0FBdUIsR0FBdkMsRUFBRU8sVUFBVSxHQUFJUCxHQUF1QixHQUEzQjtJQUMxQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RRLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFNQyxLQUFLLGlCQUNULDhEQUFDQSxPQUFLOzswQkFDSiw4REFBQ0MsSUFBRTswQkFDRCw0RUFBQ0MsSUFBRTs4QkFBQyxjQUFZOzs7Ozt5QkFBSzs7Ozs7cUJBQ2xCO1lBQ0pKLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLFdBQVcsRUFBSztnQkFDNUIscUJBQ0UsOERBQUNGLElBQUU7OEJBQ0QsNEVBQUNHLEdBQUM7a0NBQUVELFdBQVcsQ0FBQ1YsV0FBVzs7Ozs7NkJBQUs7Ozs7O3lCQUM3QixDQUNMO1lBQ0osQ0FBQyxDQUFDOzs7Ozs7YUFDSTtJQUdWLElBQUlJLE9BQU8sQ0FBQ1EsTUFBTSxHQUFHLENBQUMsRUFBQztRQUNyQixxQkFBTyw4REFBQ0MsS0FBRztzQkFBQyxZQUFVOzs7OztpQkFBTSxDQUFDO0lBQy9CLENBQUM7QUFDSCxDQUFDO0dBeEJLVixXQUFXO0FBMEJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvZG9jb3ZlcnZpZXcudHN4P2IxNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJncmlkanMtcmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBwcm9ncmFtTmFtZTogXCJKQ185LzE2LzIwMjJcIixcclxuICAgIHByb2dyYW1EYXRlOiBcIjA5LzE2LzIwMjJcIixcclxuICAgIGxvY2F0aW9uOiBcInNvbWV3aGVyZV8xLmRvY3hcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2dyYW1OYW1lOiBcIkpDXzkvMDkvMjAyMlwiLFxyXG4gICAgcHJvZ3JhbURhdGU6IFwiMDkvMDkvMjAyMlwiLFxyXG4gICAgbG9jYXRpb246IFwic29tZXdoZXJlXzIuZG9jeFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvZ3JhbU5hbWU6IFwiSkNfOS8wMi8yMDIyXCIsXHJcbiAgICBwcm9ncmFtRGF0ZTogXCIwOS8wMi8yMDIyXCIsXHJcbiAgICBsb2NhdGlvbjogXCJzb21ld2hlcmVfMy5kb2N4XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmludGVyZmFjZSBSb3dEYXRhIHtcclxuICBwcm9ncmFtTmFtZTogc3RyaW5nO1xyXG4gIHByb2dyYW1EYXRlOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgZG9jb3ZlcnZpZXc6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyb3dEYXRhLCBzZXRSb3dEYXRhXSA9IHVzZVN0YXRlPFJvd0RhdGFbXT4oW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRSb3dEYXRhKFtdKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRhYmxlID0gKFxyXG4gICAgPHRhYmxlPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkPlByb2dyYW0gTmFtZTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIHtyb3dEYXRhLm1hcCgocHJvZ3JhbWRhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8YT57cHJvZ3JhbWRhdGEucHJvZ3JhbU5hbWV9PC9hPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxuXHJcbiAgaWYgKHJvd0RhdGEubGVuZ3RoIDwgMSl7XHJcbiAgICByZXR1cm4gPGRpdj4uLi5sb2FkaW5nPC9kaXY+O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvY292ZXJ2aWV3O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYXRhIiwicHJvZ3JhbU5hbWUiLCJwcm9ncmFtRGF0ZSIsImxvY2F0aW9uIiwiZG9jb3ZlcnZpZXciLCJyb3dEYXRhIiwic2V0Um93RGF0YSIsInRhYmxlIiwidHIiLCJ0ZCIsIm1hcCIsInByb2dyYW1kYXRhIiwiYSIsImxlbmd0aCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/docoverview.tsx\n"));

/***/ })

});