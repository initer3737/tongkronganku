"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tentang",{

/***/ "./pages/tentang/index.tsx":
/*!*********************************!*\
  !*** ./pages/tentang/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_asembleKomponen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/asembleKomponen */ \"./component/asembleKomponen/index.tsx\");\n\n\nfunction index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_asembleKomponen__WEBPACK_IMPORTED_MODULE_1__.Template, {\n        title: \"tentang\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 overflow-hidden rounded-md shadow-sm bg-sky-100 shadow-sky-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-2 border-3 text-sky-900\",\n                    children: [\n                        \"about me \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \"text-sky-900\"\n                        }, void 0, false, {\n                            fileName: \"/home/puthut/Public/projects/stacks/frontend/tongkronganku/pages/tentang/index.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 64\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/puthut/Public/projects/stacks/frontend/tongkronganku/pages/tentang/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 12\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/puthut/Public/projects/stacks/frontend/tongkronganku/pages/tentang/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/puthut/Public/projects/stacks/frontend/tongkronganku/pages/tentang/index.tsx\",\n            lineNumber: 8,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/puthut/Public/projects/stacks/frontend/tongkronganku/pages/tentang/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZW50YW5nL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFHdUM7QUFDeEIsU0FBU0MsUUFBUTtJQUM5QixxQkFDRSw4REFBQ0QsZ0VBQVFBO1FBQUNFLE9BQU07a0JBQ2IsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2YsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7d0JBQTRCO3NDQUFTLDhEQUFDQzs0QkFBR0QsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVudGFuZy9pbmRleC50c3g/Zjk0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFBhcmFsbGF4LFxuICAgIFRlbXBsYXRlXG59ZnJvbSAnLi4vLi4vY29tcG9uZW50L2FzZW1ibGVLb21wb25lbidcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxUZW1wbGF0ZSB0aXRsZT0ndGVudGFuZyc+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgc2hhZG93LXNtIGJnLXNreS0xMDAgc2hhZG93LXNreS03MDBcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLTMgdGV4dC1za3ktOTAwXCI+YWJvdXQgbWUgPGhyIGNsYXNzTmFtZT0ndGV4dC1za3ktOTAwJy8+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgIDwvVGVtcGxhdGU+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsImluZGV4IiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tentang/index.tsx\n"));

/***/ })

});