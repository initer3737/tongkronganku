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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_imgWebsite_img1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/imgWebsite/img1.jpg */ \"./assets/imgWebsite/img1.jpg\");\n/* harmony import */ var _assets_imgWebsite_img2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/imgWebsite/img2.jpg */ \"./assets/imgWebsite/img2.jpg\");\n/* harmony import */ var _assets_imgWebsite_img3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/imgWebsite/img3.jpg */ \"./assets/imgWebsite/img3.jpg\");\n/* harmony import */ var _assets_imgWebsite_img4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/imgWebsite/img4.jpg */ \"./assets/imgWebsite/img4.jpg\");\n/* harmony import */ var _assets_imgWebsite_img5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/imgWebsite/img5.jpg */ \"./assets/imgWebsite/img5.jpg\");\n/* harmony import */ var _assets_imgWebsite_img6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/imgWebsite/img6.jpg */ \"./assets/imgWebsite/img6.jpg\");\n/* harmony import */ var _assets_imgWebsite_img7_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/imgWebsite/img7.png */ \"./assets/imgWebsite/img7.png\");\n/* harmony import */ var _assets_imgWebsite_img8_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/imgWebsite/img8.jpg */ \"./assets/imgWebsite/img8.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header.module.css */ \"./component/molekul/header/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n//===============================\nfunction Header() {\n    _s();\n    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const path = pathname.split(\"/\");\n    const sliderImg = [\n        _assets_imgWebsite_img1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _assets_imgWebsite_img2_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assets_imgWebsite_img3_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _assets_imgWebsite_img4_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _assets_imgWebsite_img5_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _assets_imgWebsite_img6_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        _assets_imgWebsite_img7_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        _assets_imgWebsite_img8_jpg__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    ];\n    const sliderText = [\n        \"img1\",\n        \"img2\",\n        \"Img3\",\n        \"Img4\",\n        \"Img5\",\n        \"Img6\",\n        \"fresh\",\n        \"Img8\"\n    ];\n    let [slider, setSlider] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(0);\n    //===========\n    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{\n        const slidersSlide = setInterval(()=>{\n            setSlider((prevvalue)=>Number(prevvalue) + 1);\n            if (Number(slider) >= sliderImg.length - 1) {\n                setSlider(0);\n            }\n        }, 3000);\n        return ()=>{\n            clearInterval(slidersSlide);\n        };\n    }, [\n        slider\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_12___default().text),\n                    children: sliderText[Number(slider)]\n                }, void 0, false, {\n                    fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: sliderImg[Number(slider)].src,\n                alt: \"cilok\",\n                className: \"w-[100vw] h-[60vh] object-cover gambar-slider\",\n                width: 600,\n                height: 450,\n                loading: \"lazy\"\n            }, void 0, false, {\n                fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/puthut/Рабочий стол/front-end/tongkronganku/component/molekul/header/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n}\n_s(Header, \"VNOjept/JH6eSQru344Ku8saYI8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbW9sZWt1bC9oZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDdUM7QUFFUjtBQUN1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1Y7QUFDRDtBQUMzQyxpQ0FBaUM7QUFDbEIsU0FBU2EsU0FBUzs7SUFDL0IsTUFBTSxFQUFDQyxTQUFRLEVBQUMsR0FBQ2Qsc0RBQVNBO0lBQ3hCLE1BQU1lLE9BQUtELFNBQVNFLEtBQUssQ0FBQztJQUMxQixNQUFNQyxZQUFVO1FBQUNmLG1FQUFJQTtRQUFDQyxtRUFBSUE7UUFBRUMsbUVBQUlBO1FBQUVDLG1FQUFJQTtRQUFDQyxtRUFBSUE7UUFBQ0MsbUVBQUlBO1FBQUVDLG1FQUFJQTtRQUFDQyxvRUFBSUE7S0FBQztJQUM1RCxNQUFNUyxhQUFXO1FBQUM7UUFBTztRQUFRO1FBQVE7UUFBTztRQUFPO1FBQVE7UUFBUTtLQUFPO0lBQzlFLElBQUksQ0FBQ0MsUUFBT0MsVUFBVSxHQUFDVCxnREFBUUEsQ0FBUztJQUN4QyxhQUFhO0lBQ2JELGlEQUFTQSxDQUFDLElBQUk7UUFDWixNQUFNVyxlQUFhQyxZQUFZLElBQUk7WUFDL0JGLFVBQVdHLENBQUFBLFlBQVlDLE9BQU9ELGFBQVc7WUFDM0MsSUFBSUMsT0FBT0wsV0FBV0YsVUFBVVEsTUFBTSxHQUFFLEdBQUU7Z0JBQ3RDTCxVQUFVO1lBQ2QsQ0FBQztRQUNILEdBQUU7UUFDRixPQUFPLElBQUk7WUFDVE0sY0FBY0w7UUFDaEI7SUFDRixHQUFFO1FBQUNGO0tBQU87SUFDWixxQkFDSSw4REFBQ1E7UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQUdGLFdBQVdoQixpRUFBYzs4QkFBR00sVUFBVSxDQUFDTSxPQUFPTCxRQUFROzs7Ozs7Ozs7OzswQkFFL0QsOERBQUNsQixtREFBS0E7Z0JBQ0grQixLQUFLZixTQUFTLENBQUNPLE9BQU9MLFFBQVEsQ0FBQ2EsR0FBRztnQkFDbENDLEtBQUk7Z0JBQ0pMLFdBQVk7Z0JBQ1pNLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFNBQVM7Ozs7Ozs7Ozs7OztBQUluQixDQUFDO0dBakN1QnZCOztRQUNMYixrREFBU0E7OztLQURKYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvbW9sZWt1bC9oZWFkZXIvaW5kZXgudHN4PzMwNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi8uLi9hdG9tXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEltZzEgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ltZ1dlYnNpdGUvaW1nMS5qcGcnXG5pbXBvcnQgSW1nMiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaW1nV2Vic2l0ZS9pbWcyLmpwZydcbmltcG9ydCBJbWczIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWdXZWJzaXRlL2ltZzMuanBnJ1xuaW1wb3J0IEltZzQgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ltZ1dlYnNpdGUvaW1nNC5qcGcnXG5pbXBvcnQgSW1nNSBmcm9tICcuLi8uLi8uLi9hc3NldHMvaW1nV2Vic2l0ZS9pbWc1LmpwZydcbmltcG9ydCBJbWc2IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWdXZWJzaXRlL2ltZzYuanBnJ1xuaW1wb3J0IEltZzcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ltZ1dlYnNpdGUvaW1nNy5wbmcnXG5pbXBvcnQgSW1nOCBmcm9tICcuLi8uLi8uLi9hc3NldHMvaW1nV2Vic2l0ZS9pbWc4LmpwZydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBoZWFkZXJDc3MgZnJvbSAnLi9oZWFkZXIubW9kdWxlLmNzcydcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCB7cGF0aG5hbWV9PXVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHBhdGg9cGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBzbGlkZXJJbWc9W0ltZzEsSW1nMiwgSW1nMywgSW1nNCxJbWc1LEltZzYsIEltZzcsSW1nOF1cbiAgICBjb25zdCBzbGlkZXJUZXh0PVsnaW1nMScsJ2ltZzInLCAnSW1nMycsICdJbWc0JywnSW1nNScsJ0ltZzYnLCAnZnJlc2gnLCdJbWc4J11cbiAgICBsZXQgW3NsaWRlcixzZXRTbGlkZXJdPXVzZVN0YXRlPE51bWJlcj4oMCk7XG4gICAgLy89PT09PT09PT09PVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgY29uc3Qgc2xpZGVyc1NsaWRlPXNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgc2V0U2xpZGVyKChwcmV2dmFsdWU9PihOdW1iZXIocHJldnZhbHVlKSsxKSkpXG4gICAgICAgIGlmKCBOdW1iZXIoc2xpZGVyKSA+PSBzbGlkZXJJbWcubGVuZ3RoIC0xKXtcbiAgICAgICAgICAgIHNldFNsaWRlcigwKVxuICAgICAgICB9XG4gICAgICB9LDMwMDApXG4gICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZXJzU2xpZGUpXG4gICAgICB9XG4gICAgfSxbc2xpZGVyXSlcbiAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LVsxMDAlXSBoLVsxMDAlXSBiZy1bIzAwMF0vNjAgdGV4dC13aGl0ZSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17aGVhZGVyQ3NzLnRleHR9PntzbGlkZXJUZXh0W051bWJlcihzbGlkZXIpXX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgc3JjPXtzbGlkZXJJbWdbTnVtYmVyKHNsaWRlcildLnNyY30gXG4gICAgICAgICAgYWx0PVwiY2lsb2tcIiBcbiAgICAgICAgICBjbGFzc05hbWU9e2B3LVsxMDB2d10gaC1bNjB2aF0gb2JqZWN0LWNvdmVyIGdhbWJhci1zbGlkZXJgfSBcbiAgICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICAgIGhlaWdodD17NDUwfVxuICAgICAgICAgIGxvYWRpbmc9eydsYXp5J31cbiAgICAgICAgLz5cbiAgICAgIDwvaGVhZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSW1hZ2UiLCJJbWcxIiwiSW1nMiIsIkltZzMiLCJJbWc0IiwiSW1nNSIsIkltZzYiLCJJbWc3IiwiSW1nOCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaGVhZGVyQ3NzIiwiSGVhZGVyIiwicGF0aG5hbWUiLCJwYXRoIiwic3BsaXQiLCJzbGlkZXJJbWciLCJzbGlkZXJUZXh0Iiwic2xpZGVyIiwic2V0U2xpZGVyIiwic2xpZGVyc1NsaWRlIiwic2V0SW50ZXJ2YWwiLCJwcmV2dmFsdWUiLCJOdW1iZXIiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJ0ZXh0Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/molekul/header/index.tsx\n"));

/***/ })

});