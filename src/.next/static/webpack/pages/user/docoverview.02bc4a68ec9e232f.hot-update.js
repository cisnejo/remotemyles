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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar data = [\n    {\n        id: \"1\",\n        programName: \"JC_9/16/2022\",\n        programDate: \"09/16/2022\",\n        location: \"somewhere_1.docx\"\n    },\n    {\n        id: \"2\",\n        programName: \"JC_9/09/2022\",\n        programDate: \"09/09/2022\",\n        location: \"somewhere_2.docx\"\n    },\n    {\n        id: \"3\",\n        programName: \"JC_9/02/2022\",\n        programDate: \"09/02/2022\",\n        location: \"somewhere_3.docx\"\n    }, \n];\nvar docoverview = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rowData = ref1[0], setRowData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setRowData(data);\n        setIsLoading(false);\n    }, []);\n    var table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Program Name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: rowData.map(function(program) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\".concat(program.location),\n                                children: program.programName\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"...loading\"\n        }, void 0, false, {\n            fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n            lineNumber: 65,\n            columnNumber: 12\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: table\n        }, void 0, false, {\n            fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, _this);\n    }\n};\n_s(docoverview, \"8o/wTzMJqfDmdMXpuEuSA/C8Ess=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (docoverview);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2RvY292ZXJ2aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFHNEM7QUFJNUMsSUFBTUUsSUFBSSxHQUFHO0lBQ1g7UUFDRUMsRUFBRSxFQUFFLEdBQUc7UUFDUEMsV0FBVyxFQUFFLGNBQWM7UUFDM0JDLFdBQVcsRUFBRSxZQUFZO1FBQ3pCQyxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCO0lBQ0Q7UUFDRUgsRUFBRSxFQUFFLEdBQUc7UUFDUEMsV0FBVyxFQUFFLGNBQWM7UUFDM0JDLFdBQVcsRUFBRSxZQUFZO1FBQ3pCQyxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCO0lBQ0Q7UUFDRUgsRUFBRSxFQUFFLEdBQUc7UUFDUEMsV0FBVyxFQUFFLGNBQWM7UUFDM0JDLFdBQVcsRUFBRSxZQUFZO1FBQ3pCQyxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCO0NBQ0Y7QUFRRCxJQUFNQyxXQUFXLEdBQWEsV0FBTTs7SUFDbEMsSUFBa0NOLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBekNPLFNBQVMsR0FBa0JQLEdBQWMsR0FBaEMsRUFBRVEsWUFBWSxHQUFJUixHQUFjLEdBQWxCO0lBQzlCLElBQThCQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBWSxFQUFFLENBQUMsRUFBOUNTLE9BQU8sR0FBZ0JULElBQXVCLEdBQXZDLEVBQUVVLFVBQVUsR0FBSVYsSUFBdUIsR0FBM0I7SUFDMUJELGdEQUFTLENBQUMsV0FBTTtRQUNkVyxVQUFVLENBQUNULElBQUksQ0FBQyxDQUFDO1FBQ2pCTyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTUcsS0FBSyxpQkFDVCw4REFBQ0EsT0FBSzs7MEJBQ0osOERBQUNDLE9BQUs7MEJBQ0osNEVBQUNDLElBQUU7OEJBQ0QsNEVBQUNDLElBQUU7a0NBQUMsY0FBWTs7Ozs7NkJBQUs7Ozs7O3lCQUNsQjs7Ozs7cUJBQ0M7MEJBQ1IsOERBQUNDLE9BQUs7MEJBQ0hOLE9BQU8sQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBSztvQkFDeEIscUJBQ0UsOERBQUNKLElBQUU7a0NBQ0QsNEVBQUNDLElBQUU7c0NBQ0QsNEVBQUNJLEdBQUM7Z0NBQUNDLElBQUksRUFBRSxHQUFFLENBQW1CLE9BQWpCRixPQUFPLENBQUNaLFFBQVEsQ0FBRTswQ0FBR1ksT0FBTyxDQUFDZCxXQUFXOzs7OztxQ0FBSzs7Ozs7aUNBQ3ZEOzs7Ozs2QkFDRixDQUNMO2dCQUNKLENBQUMsQ0FBQzs7Ozs7cUJBQ0k7Ozs7OzthQUNGO0lBR1YsSUFBSUksU0FBUyxFQUFFO1FBQ2IscUJBQU8sOERBQUNhLEtBQUc7c0JBQUMsWUFBVTs7Ozs7aUJBQU0sQ0FBQztJQUMvQixPQUFPO1FBQ0wscUJBQU8sOERBQUNBLEtBQUc7c0JBQUVULEtBQUs7Ozs7O2lCQUFPLENBQUM7SUFDNUIsQ0FBQztBQUNILENBQUM7R0FsQ0tMLFdBQVc7QUFvQ2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9kb2NvdmVydmlldy50c3g/YjE2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcImdyaWRqcy1yZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIjFcIixcclxuICAgIHByb2dyYW1OYW1lOiBcIkpDXzkvMTYvMjAyMlwiLFxyXG4gICAgcHJvZ3JhbURhdGU6IFwiMDkvMTYvMjAyMlwiLFxyXG4gICAgbG9jYXRpb246IFwic29tZXdoZXJlXzEuZG9jeFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiMlwiLFxyXG4gICAgcHJvZ3JhbU5hbWU6IFwiSkNfOS8wOS8yMDIyXCIsXHJcbiAgICBwcm9ncmFtRGF0ZTogXCIwOS8wOS8yMDIyXCIsXHJcbiAgICBsb2NhdGlvbjogXCJzb21ld2hlcmVfMi5kb2N4XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIzXCIsXHJcbiAgICBwcm9ncmFtTmFtZTogXCJKQ185LzAyLzIwMjJcIixcclxuICAgIHByb2dyYW1EYXRlOiBcIjA5LzAyLzIwMjJcIixcclxuICAgIGxvY2F0aW9uOiBcInNvbWV3aGVyZV8zLmRvY3hcIixcclxuICB9LFxyXG5dO1xyXG5cclxuaW50ZXJmYWNlIFJvd0RhdGEge1xyXG4gIHByb2dyYW1OYW1lOiBzdHJpbmc7XHJcbiAgcHJvZ3JhbURhdGU6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBkb2NvdmVydmlldzogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtyb3dEYXRhLCBzZXRSb3dEYXRhXSA9IHVzZVN0YXRlPFJvd0RhdGFbXT4oW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRSb3dEYXRhKGRhdGEpO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRhYmxlID0gKFxyXG4gICAgPHRhYmxlPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPlByb2dyYW0gTmFtZTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHtyb3dEYXRhLm1hcCgocHJvZ3JhbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtwcm9ncmFtLmxvY2F0aW9ufWB9Pntwcm9ncmFtLnByb2dyYW1OYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXY+Li4ubG9hZGluZzwvZGl2PjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxkaXY+e3RhYmxlfTwvZGl2PjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb2NvdmVydmlldztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGF0YSIsImlkIiwicHJvZ3JhbU5hbWUiLCJwcm9ncmFtRGF0ZSIsImxvY2F0aW9uIiwiZG9jb3ZlcnZpZXciLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3dEYXRhIiwic2V0Um93RGF0YSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRkIiwidGJvZHkiLCJtYXAiLCJwcm9ncmFtIiwiYSIsImhyZWYiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/docoverview.tsx\n"));

/***/ })

});