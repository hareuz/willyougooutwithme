"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction page() {\n    _s();\n    const [img, $img] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"i-want-to-play-a-game-play-time\");\n    const [how, $how] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [p, $p] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const updteImg = (im)=>{\n        $img(im);\n    };\n    const nah = ()=>{\n        const x = Math.random() * 90;\n        const y = Math.random() * 90;\n        $p({\n            x: \"\".concat(x, \"%\"),\n            y: \"\".concat(y, \"%\")\n        });\n        updteImg(\"chowder-crying\");\n    };\n    const dontdoit = ()=>{\n        nah();\n        updteImg(\"shock\");\n        $how(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"gumball\",\n                className: \"gif\",\n                src: \"crying-chowder.gif\"\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            how ? \"Hmmmph, Theres no choice!\" : \"Will you go out with me?\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btns\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"yes\",\n                        href: \"/yay\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseOver: ()=>updteImg(\"crying-chowder\"),\n                            onMouseOut: ()=>updteImg(\"puppy-eyes\"),\n                            children: \"Yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"no\",\n                        style: p ? {\n                            position: \"absolute\",\n                            top: p.x,\n                            right: p.y\n                        } : null,\n                        onClick: dontdoit,\n                        onMouseOver: nah,\n                        children: \"No\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"3FpxE/QQWDoN1/UoRlHWH+4d/fw=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNkI7QUFDRTtBQUVoQixTQUFTRTs7SUFFdEIsTUFBTSxDQUFDQyxLQUFLQyxLQUFLLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ0ksS0FBS0MsS0FBSyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QixNQUFNLENBQUNNLEdBQUdDLEdBQUcsR0FBR1AsK0NBQVFBLENBQUM7SUFFekIsTUFBTVEsV0FBVyxDQUFDQztRQUNoQk4sS0FBS007SUFDUDtJQUVBLE1BQU1DLE1BQU07UUFDVixNQUFNQyxJQUFJQyxLQUFLQyxXQUFXO1FBQzFCLE1BQU1DLElBQUlGLEtBQUtDLFdBQVc7UUFFMUJOLEdBQUc7WUFBQ0ksR0FBRyxHQUFLLE9BQUZBLEdBQUU7WUFBSUcsR0FBRyxHQUFLLE9BQUZBLEdBQUU7UUFBRTtRQUMxQk4sU0FBUztJQUNYO0lBRUEsTUFBTU8sV0FBVztRQUNmTDtRQUNBRixTQUFTO1FBQ1RILEtBQUs7SUFDUDtJQUVBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2Y7Z0JBQUlnQixLQUFJO2dCQUFVRCxXQUFVO2dCQUFNRSxLQUFNOzs7Ozs7WUFDeENmLE1BQU0sOEJBQThCOzBCQUNyQyw4REFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbEIsa0RBQUlBO3dCQUFDa0IsV0FBVTt3QkFBTUcsTUFBSztrQ0FDekIsNEVBQUNDOzRCQUFPQyxhQUFhLElBQU1kLFNBQVM7NEJBQW1CZSxZQUFZLElBQU1mLFNBQVM7c0NBQWU7Ozs7Ozs7Ozs7O2tDQUluRyw4REFBQ2E7d0JBQU9KLFdBQVU7d0JBQ2hCTyxPQUFPbEIsSUFBSTs0QkFBQ21CLFVBQVU7NEJBQVlDLEtBQUtwQixFQUFFSzs0QkFBR2dCLE9BQU9yQixFQUFFUTt3QkFBQyxJQUFJO3dCQUMxRGMsU0FBU2I7d0JBQVVPLGFBQWFaO2tDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0M7R0EzQ3dCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZSgpIHtcclxuXHJcbiAgY29uc3QgW2ltZywgJGltZ10gPSB1c2VTdGF0ZSgnaS13YW50LXRvLXBsYXktYS1nYW1lLXBsYXktdGltZScpO1xyXG4gIGNvbnN0IFtob3csICRob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwLCAkcF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgdXBkdGVJbWcgPSAoaW0pID0+IHtcclxuICAgICRpbWcoaW0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmFoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiA5MDtcclxuICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogOTA7XHJcblxyXG4gICAgJHAoe3g6IGAke3h9JWAsIHk6IGAke3l9JWB9KTtcclxuICAgIHVwZHRlSW1nKCdjaG93ZGVyLWNyeWluZycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvbnRkb2l0ID0gKCkgPT4ge1xyXG4gICAgbmFoKCk7XHJcbiAgICB1cGR0ZUltZygnc2hvY2snKTtcclxuICAgICRob3codHJ1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYm94Jz5cclxuICAgICAgPGltZyBhbHQ9J2d1bWJhbGwnIGNsYXNzTmFtZT0nZ2lmJyBzcmM9e2BjcnlpbmctY2hvd2Rlci5naWZgfSAvPlxyXG4gICAgICB7aG93ID8gJ0htbW1waCwgVGhlcmVzIG5vIGNob2ljZSEnIDogJ1dpbGwgeW91IGdvIG91dCB3aXRoIG1lPyd9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG5zJz5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9J3llcycgaHJlZj0nL3lheSc+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VPdmVyPXsoKSA9PiB1cGR0ZUltZygnY3J5aW5nLWNob3dkZXInKX0gb25Nb3VzZU91dD17KCkgPT4gdXBkdGVJbWcoJ3B1cHB5LWV5ZXMnKX0+XHJcbiAgICAgICAgICAgIFllc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdubycgXHJcbiAgICAgICAgICBzdHlsZT17cCA/IHtwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiBwLngsIHJpZ2h0OiBwLnl9IDogbnVsbH0gXHJcbiAgICAgICAgICBvbkNsaWNrPXtkb250ZG9pdH0gb25Nb3VzZU92ZXI9e25haH0+XHJcbiAgICAgICAgICAgIE5vXHJcbiAgICAgICAgPC9idXR0b24+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuICBcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJwYWdlIiwiaW1nIiwiJGltZyIsImhvdyIsIiRob3ciLCJwIiwiJHAiLCJ1cGR0ZUltZyIsImltIiwibmFoIiwieCIsIk1hdGgiLCJyYW5kb20iLCJ5IiwiZG9udGRvaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJocmVmIiwiYnV0dG9uIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});