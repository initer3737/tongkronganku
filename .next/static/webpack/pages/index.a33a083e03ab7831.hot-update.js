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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_imgWebsite_img1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/imgWebsite/img1.jpg */ \"./assets/imgWebsite/img1.jpg\");\n/* harmony import */ var _assets_imgWebsite_img2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/imgWebsite/img2.jpg */ \"./assets/imgWebsite/img2.jpg\");\n/* harmony import */ var _assets_imgWebsite_img3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/imgWebsite/img3.jpg */ \"./assets/imgWebsite/img3.jpg\");\n/* harmony import */ var _assets_imgWebsite_img4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/imgWebsite/img4.jpg */ \"./assets/imgWebsite/img4.jpg\");\n/* harmony import */ var _assets_imgWebsite_img5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/imgWebsite/img5.jpg */ \"./assets/imgWebsite/img5.jpg\");\n/* harmony import */ var _assets_imgWebsite_img6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/imgWebsite/img6.jpg */ \"./assets/imgWebsite/img6.jpg\");\n/* harmony import */ var _assets_imgWebsite_img7_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/imgWebsite/img7.png */ \"./assets/imgWebsite/img7.png\");\n/* harmony import */ var _assets_imgWebsite_img8_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/imgWebsite/img8.jpg */ \"./assets/imgWebsite/img8.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header.module.css */ \"./component/molekul/header/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n//===============================\nfunction Header() {\n    _s();\n    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const path = pathname.split(\"/\");\n    const sliderImg = [\n        _assets_imgWebsite_img1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _assets_imgWebsite_img2_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assets_imgWebsite_img3_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _assets_imgWebsite_img4_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _assets_imgWebsite_img5_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _assets_imgWebsite_img6_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        _assets_imgWebsite_img7_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        _assets_imgWebsite_img8_jpg__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    ];\n    const sliderText = [\n        ,\n        _assets_imgWebsite_img2_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assets_imgWebsite_img3_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _assets_imgWebsite_img4_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _assets_imgWebsite_img5_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _assets_imgWebsite_img6_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        _assets_imgWebsite_img7_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        _assets_imgWebsite_img8_jpg__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    ];\n    let [slider, setSlider] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(0);\n    //===========\n    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{\n        const slidersSlide = setInterval(()=>{\n            setSlider((prevvalue)=>Number(prevvalue) + 1);\n            if (Number(slider) >= sliderImg.length - 1) {\n                setSlider(0);\n            }\n        }, 3000);\n        return ()=>{\n            clearInterval(slidersSlide);\n        };\n    }, [\n        slider\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_12___default().text),\n                    children: \"cofee\"\n                }, void 0, false, {\n                    fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: sliderImg[Number(slider)].src,\n                alt: \"cilok\",\n                className: \"w-[100vw] h-[60vh] object-cover gambar-slider\",\n                width: 600,\n                height: 450,\n                loading: \"lazy\"\n            }, void 0, false, {\n                fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n}\n_s(Header, \"VNOjept/JH6eSQru344Ku8saYI8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbW9sZWt1bC9oZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDdUM7QUFFUjtBQUN1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1Y7QUFDRDtBQUMzQyxpQ0FBaUM7QUFDbEIsU0FBU2EsU0FBUzs7SUFDL0IsTUFBTSxFQUFDQyxTQUFRLEVBQUMsR0FBQ2Qsc0RBQVNBO0lBQ3hCLE1BQU1lLE9BQUtELFNBQVNFLEtBQUssQ0FBQztJQUMxQixNQUFNQyxZQUFVO1FBQUNmLG1FQUFJQTtRQUFDQyxtRUFBSUE7UUFBRUMsbUVBQUlBO1FBQUVDLG1FQUFJQTtRQUFDQyxtRUFBSUE7UUFBQ0MsbUVBQUlBO1FBQUVDLG1FQUFJQTtRQUFDQyxvRUFBSUE7S0FBQztJQUM1RCxNQUFNUyxhQUFXOztRQUFFZixtRUFBSUE7UUFBRUMsbUVBQUlBO1FBQUVDLG1FQUFJQTtRQUFDQyxtRUFBSUE7UUFBQ0MsbUVBQUlBO1FBQUVDLG1FQUFJQTtRQUFDQyxvRUFBSUE7S0FBQztJQUN6RCxJQUFJLENBQUNVLFFBQU9DLFVBQVUsR0FBQ1QsZ0RBQVFBLENBQVM7SUFDeEMsYUFBYTtJQUNiRCxpREFBU0EsQ0FBQyxJQUFJO1FBQ1osTUFBTVcsZUFBYUMsWUFBWSxJQUFJO1lBQy9CRixVQUFXRyxDQUFBQSxZQUFZQyxPQUFPRCxhQUFXO1lBQzNDLElBQUlDLE9BQU9MLFdBQVdGLFVBQVVRLE1BQU0sR0FBRSxHQUFFO2dCQUN0Q0wsVUFBVTtZQUNkLENBQUM7UUFDSCxHQUFFO1FBQ0YsT0FBTyxJQUFJO1lBQ1RNLGNBQWNMO1FBQ2hCO0lBQ0YsR0FBRTtRQUFDRjtLQUFPO0lBQ1oscUJBQ0ksOERBQUNRO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUNFO29CQUFHRixXQUFXaEIsaUVBQWM7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVwQyw4REFBQ1gsbURBQUtBO2dCQUNIK0IsS0FBS2YsU0FBUyxDQUFDTyxPQUFPTCxRQUFRLENBQUNhLEdBQUc7Z0JBQ2xDQyxLQUFJO2dCQUNKTCxXQUFZO2dCQUNaTSxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFJbkIsQ0FBQztHQWpDdUJ2Qjs7UUFDTGIsa0RBQVNBOzs7S0FESmEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21vbGVrdWwvaGVhZGVyL2luZGV4LnRzeD8zMDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vLi4vYXRvbVwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBJbWcxIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWdXZWJzaXRlL2ltZzEuanBnJ1xuaW1wb3J0IEltZzIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ltZ1dlYnNpdGUvaW1nMi5qcGcnXG5pbXBvcnQgSW1nMyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaW1nV2Vic2l0ZS9pbWczLmpwZydcbmltcG9ydCBJbWc0IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWdXZWJzaXRlL2ltZzQuanBnJ1xuaW1wb3J0IEltZzUgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ltZ1dlYnNpdGUvaW1nNS5qcGcnXG5pbXBvcnQgSW1nNiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaW1nV2Vic2l0ZS9pbWc2LmpwZydcbmltcG9ydCBJbWc3IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWdXZWJzaXRlL2ltZzcucG5nJ1xuaW1wb3J0IEltZzggZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ltZ1dlYnNpdGUvaW1nOC5qcGcnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaGVhZGVyQ3NzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5jc3MnXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3Qge3BhdGhuYW1lfT11c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBwYXRoPXBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgY29uc3Qgc2xpZGVySW1nPVtJbWcxLEltZzIsIEltZzMsIEltZzQsSW1nNSxJbWc2LCBJbWc3LEltZzhdXG4gICAgY29uc3Qgc2xpZGVyVGV4dD1bLEltZzIsIEltZzMsIEltZzQsSW1nNSxJbWc2LCBJbWc3LEltZzhdXG4gICAgbGV0IFtzbGlkZXIsc2V0U2xpZGVyXT11c2VTdGF0ZTxOdW1iZXI+KDApO1xuICAgIC8vPT09PT09PT09PT1cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgIGNvbnN0IHNsaWRlcnNTbGlkZT1zZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgIHNldFNsaWRlcigocHJldnZhbHVlPT4oTnVtYmVyKHByZXZ2YWx1ZSkrMSkpKVxuICAgICAgICBpZiggTnVtYmVyKHNsaWRlcikgPj0gc2xpZGVySW1nLmxlbmd0aCAtMSl7XG4gICAgICAgICAgICBzZXRTbGlkZXIoMClcbiAgICAgICAgfVxuICAgICAgfSwzMDAwKVxuICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2xpZGVyc1NsaWRlKVxuICAgICAgfVxuICAgIH0sW3NsaWRlcl0pXG4gIHJldHVybiAoXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1bMTAwJV0gaC1bMTAwJV0gYmctWyMwMDBdLzYwIHRleHQtd2hpdGUgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2hlYWRlckNzcy50ZXh0fT5jb2ZlZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIDxJbWFnZSBcbiAgICAgICAgICBzcmM9e3NsaWRlckltZ1tOdW1iZXIoc2xpZGVyKV0uc3JjfSBcbiAgICAgICAgICBhbHQ9XCJjaWxva1wiIFxuICAgICAgICAgIGNsYXNzTmFtZT17YHctWzEwMHZ3XSBoLVs2MHZoXSBvYmplY3QtY292ZXIgZ2FtYmFyLXNsaWRlcmB9IFxuICAgICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgICAgaGVpZ2h0PXs0NTB9XG4gICAgICAgICAgbG9hZGluZz17J2xhenknfVxuICAgICAgICAvPlxuICAgICAgPC9oZWFkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkltZzEiLCJJbWcyIiwiSW1nMyIsIkltZzQiLCJJbWc1IiwiSW1nNiIsIkltZzciLCJJbWc4IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJoZWFkZXJDc3MiLCJIZWFkZXIiLCJwYXRobmFtZSIsInBhdGgiLCJzcGxpdCIsInNsaWRlckltZyIsInNsaWRlclRleHQiLCJzbGlkZXIiLCJzZXRTbGlkZXIiLCJzbGlkZXJzU2xpZGUiLCJzZXRJbnRlcnZhbCIsInByZXZ2YWx1ZSIsIk51bWJlciIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInRleHQiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/molekul/header/index.tsx\n"));

/***/ })

});