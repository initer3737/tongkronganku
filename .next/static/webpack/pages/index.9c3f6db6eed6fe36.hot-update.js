"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/molekul/header/index.tsx":
/*!********************************************!*\
  !*** ./component/molekul/header/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_imgWebsite_img1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/imgWebsite/img1.jpg */ \"./assets/imgWebsite/img1.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n//===============================\nfunction Header() {\n    _s();\n    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const path = pathname.split(\"/\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _assets_imgWebsite_img1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n                alt: \"cilok\",\n                className: \"w-[100vw] h-[60vh] object-cover\",\n                width: 600,\n                height: 450,\n                loading: \"lazy\"\n            }, void 0, false, {\n                fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, this);\n}\n_s(Header, \"Q1ZdS3L8K5NfmON/UeWa8oPrWT0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbW9sZWt1bC9oZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ3VDO0FBRVI7QUFDMEI7QUFDekQsaUNBQWlDO0FBQ2xCLFNBQVNHLFNBQVM7O0lBQy9CLE1BQU0sRUFBQ0MsU0FBUSxFQUFDLEdBQUNKLHNEQUFTQTtJQUN4QixNQUFNSyxPQUFLRCxTQUFTRSxLQUFLLENBQUM7SUFDNUIscUJBQ0ksOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Ozs7OzBCQUNGLDhEQUFDUixtREFBS0E7Z0JBQ0hTLEtBQUtSLHVFQUFXO2dCQUNoQlMsS0FBSTtnQkFDSkgsV0FBVTtnQkFDVkksT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsU0FBUzs7Ozs7Ozs7Ozs7O0FBSW5CLENBQUM7R0FoQnVCWDs7UUFDTEgsa0RBQVNBOzs7S0FESkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21vbGVrdWwvaGVhZGVyL2luZGV4LnRzeD8zMDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vLi4vYXRvbVwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBtYWluSW1nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWdXZWJzaXRlL2ltZzEuanBnJ1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHtwYXRobmFtZX09dXNlUm91dGVyKCk7XG4gICAgY29uc3QgcGF0aD1wYXRobmFtZS5zcGxpdCgnLycpO1xuICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGgxPjwvaDE+XG4gICAgICAgPEltYWdlIFxuICAgICAgICAgIHNyYz17bWFpbkltZy5zcmN9IFxuICAgICAgICAgIGFsdD1cImNpbG9rXCIgXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bMTAwdnddIGgtWzYwdmhdIG9iamVjdC1jb3ZlclwiIFxuICAgICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgICAgaGVpZ2h0PXs0NTB9XG4gICAgICAgICAgbG9hZGluZz17J2xhenknfVxuICAgICAgICAvPlxuICAgICAgPC9oZWFkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJJbWFnZSIsIm1haW5JbWciLCJIZWFkZXIiLCJwYXRobmFtZSIsInBhdGgiLCJzcGxpdCIsImhlYWRlciIsImNsYXNzTmFtZSIsImgxIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/molekul/header/index.tsx\n"));

/***/ })

});