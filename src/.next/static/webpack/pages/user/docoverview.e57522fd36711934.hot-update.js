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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProgramTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProgramTable */ \"./pages/user/components/ProgramTable.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar apiData = [\n    {\n        id: \"1\",\n        programName: \"JC_9/16/2022\",\n        programDate: \"09/16/2022\",\n        location: \"somewhere_1.docx\"\n    },\n    {\n        id: \"2\",\n        programName: \"JC_9/09/2022\",\n        programDate: \"09/09/2022\",\n        location: \"somewhere_2.docx\"\n    },\n    {\n        id: \"3\",\n        programName: \"JC_9/02/2022\",\n        programDate: \"09/02/2022\",\n        location: \"somewhere_3.docx\"\n    }, \n];\nvar docoverview = function() {\n    var FakeTimeout = function FakeTimeout(timeout) {\n        setTimeout(function() {\n            setData(apiData);\n            setIsLoading(false);\n        }, timeout);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref1[0], setData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        FakeTimeout(1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProgramTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        rowData: data,\n        isLoading: isLoading\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\myles-ahead-program-manager\\\\myles-ahead\\\\pages\\\\user\\\\docoverview.tsx\",\n        lineNumber: 48,\n        columnNumber: 10\n    }, _this);\n};\n_s(docoverview, \"8o/wTzMJqfDmdMXpuEuSA/C8Ess=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (docoverview);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2RvY292ZXJ2aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBQzRDO0FBQ1M7QUFTckQsSUFBTUcsT0FBTyxHQUFjO0lBQ3pCO1FBQ0VDLEVBQUUsRUFBRSxHQUFHO1FBQ1BDLFdBQVcsRUFBRSxjQUFjO1FBQzNCQyxXQUFXLEVBQUUsWUFBWTtRQUN6QkMsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QjtJQUNEO1FBQ0VILEVBQUUsRUFBRSxHQUFHO1FBQ1BDLFdBQVcsRUFBRSxjQUFjO1FBQzNCQyxXQUFXLEVBQUUsWUFBWTtRQUN6QkMsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QjtJQUNEO1FBQ0VILEVBQUUsRUFBRSxHQUFHO1FBQ1BDLFdBQVcsRUFBRSxjQUFjO1FBQzNCQyxXQUFXLEVBQUUsWUFBWTtRQUN6QkMsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QjtDQUNGO0FBRUQsSUFBTUMsV0FBVyxHQUFhLFdBQU07UUFRekJDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxDQUFDQyxPQUFlLEVBQUU7UUFDcENDLFVBQVUsQ0FBQyxXQUFNO1lBQ2ZDLE9BQU8sQ0FBQ1QsT0FBTyxDQUFDLENBQUM7WUFDakJVLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUVILE9BQU8sQ0FBQyxDQUFDO0lBQ2QsQ0FBQzs7SUFaRCxJQUFrQ1QsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF6Q2EsU0FBUyxHQUFrQmIsR0FBYyxHQUFoQyxFQUFFWSxZQUFZLEdBQUlaLEdBQWMsR0FBbEI7SUFDOUIsSUFBd0JBLElBQXVCLEdBQXZCQSwrQ0FBUSxDQUFZLEVBQUUsQ0FBQyxFQUF4Q2MsSUFBSSxHQUFhZCxJQUF1QixHQUFwQyxFQUFFVyxPQUFPLEdBQUlYLElBQXVCLEdBQTNCO0lBQ3BCRCxnREFBUyxDQUFDLFdBQU07UUFDZFMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQVVQLHFCQUFPLDhEQUFDUCxnRUFBWTtRQUFDYyxPQUFPLEVBQUVELElBQUk7UUFBRUQsU0FBUyxFQUFFQSxTQUFTOzs7OzthQUFJLENBQUM7QUFDL0QsQ0FBQztHQWhCS04sV0FBVztBQWtCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2RvY292ZXJ2aWV3LnRzeD9iMTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9ncmFtVGFibGUgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9ncmFtVGFibGVcIjtcclxuXHJcbmludGVyZmFjZSBSb3dEYXRhIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHByb2dyYW1OYW1lOiBzdHJpbmc7XHJcbiAgcHJvZ3JhbURhdGU6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBhcGlEYXRhOiBSb3dEYXRhW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgcHJvZ3JhbU5hbWU6IFwiSkNfOS8xNi8yMDIyXCIsXHJcbiAgICBwcm9ncmFtRGF0ZTogXCIwOS8xNi8yMDIyXCIsXHJcbiAgICBsb2NhdGlvbjogXCJzb21ld2hlcmVfMS5kb2N4XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBwcm9ncmFtTmFtZTogXCJKQ185LzA5LzIwMjJcIixcclxuICAgIHByb2dyYW1EYXRlOiBcIjA5LzA5LzIwMjJcIixcclxuICAgIGxvY2F0aW9uOiBcInNvbWV3aGVyZV8yLmRvY3hcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjNcIixcclxuICAgIHByb2dyYW1OYW1lOiBcIkpDXzkvMDIvMjAyMlwiLFxyXG4gICAgcHJvZ3JhbURhdGU6IFwiMDkvMDIvMjAyMlwiLFxyXG4gICAgbG9jYXRpb246IFwic29tZXdoZXJlXzMuZG9jeFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBkb2NvdmVydmlldzogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFJvd0RhdGFbXT4oW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBGYWtlVGltZW91dCgxMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIFxyXG4gIGZ1bmN0aW9uIEZha2VUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcikge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERhdGEoYXBpRGF0YSk7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCB0aW1lb3V0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8UHJvZ3JhbVRhYmxlIHJvd0RhdGE9e2RhdGF9IGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvY292ZXJ2aWV3O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9ncmFtVGFibGUiLCJhcGlEYXRhIiwiaWQiLCJwcm9ncmFtTmFtZSIsInByb2dyYW1EYXRlIiwibG9jYXRpb24iLCJkb2NvdmVydmlldyIsIkZha2VUaW1lb3V0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJzZXREYXRhIiwic2V0SXNMb2FkaW5nIiwiaXNMb2FkaW5nIiwiZGF0YSIsInJvd0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/docoverview.tsx\n"));

/***/ })

});