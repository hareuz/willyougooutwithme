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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction page() {\n    _s();\n    const [img, $img] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"i-want-to-play-a-game-play-time\");\n    const [how, $how] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [p, $p] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const updteImg = (im)=>{\n        $img(im);\n    };\n    const nah = ()=>{\n        const x = Math.random() * 90;\n        const y = Math.random() * 90;\n        $p({\n            x: \"\".concat(x, \"%\"),\n            y: \"\".concat(y, \"%\")\n        });\n        updteImg(\"chowder-crying\");\n    };\n    const dontdoit = ()=>{\n        nah();\n        updteImg(\"shock\");\n        $how(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"gumball\",\n                className: \"gif\",\n                src: \"/\".concat(img, \".gif\")\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            how ? \"Hmmmph, Theres no choice!\" : \"Will you go out with me?\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btns\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"yes\",\n                        href: \"/yay\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseOver: ()=>updteImg(\"crying-chowder\"),\n                            onMouseOut: ()=>updteImg(\"puppy-eyes\"),\n                            children: \"Yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"no\",\n                        style: p ? {\n                            position: \"absolute\",\n                            top: p.x,\n                            right: p.y\n                        } : null,\n                        onClick: dontdoit,\n                        onMouseOver: nah,\n                        children: \"No\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"3FpxE/QQWDoN1/UoRlHWH+4d/fw=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNkI7QUFDRTtBQUVoQixTQUFTRTs7SUFFdEIsTUFBTSxDQUFDQyxLQUFLQyxLQUFLLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ0ksS0FBS0MsS0FBSyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QixNQUFNLENBQUNNLEdBQUdDLEdBQUcsR0FBR1AsK0NBQVFBLENBQUM7SUFFekIsTUFBTVEsV0FBVyxDQUFDQztRQUNoQk4sS0FBS007SUFDUDtJQUVBLE1BQU1DLE1BQU07UUFDVixNQUFNQyxJQUFJQyxLQUFLQyxXQUFXO1FBQzFCLE1BQU1DLElBQUlGLEtBQUtDLFdBQVc7UUFFMUJOLEdBQUc7WUFBQ0ksR0FBRyxHQUFLLE9BQUZBLEdBQUU7WUFBSUcsR0FBRyxHQUFLLE9BQUZBLEdBQUU7UUFBRTtRQUMxQk4sU0FBUztJQUNYO0lBRUEsTUFBTU8sV0FBVztRQUNmTDtRQUNBRixTQUFTO1FBQ1RILEtBQUs7SUFDUDtJQUVBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2Y7Z0JBQUlnQixLQUFJO2dCQUFVRCxXQUFVO2dCQUFNRSxLQUFLLElBQVEsT0FBSmpCLEtBQUk7Ozs7OztZQUMvQ0UsTUFBTSw4QkFBOEI7MEJBQ3JDLDhEQUFDWTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNsQixrREFBSUE7d0JBQUNrQixXQUFVO3dCQUFNRyxNQUFLO2tDQUN6Qiw0RUFBQ0M7NEJBQU9DLGFBQWEsSUFBTWQsU0FBUzs0QkFBbUJlLFlBQVksSUFBTWYsU0FBUztzQ0FBZTs7Ozs7Ozs7Ozs7a0NBSW5HLDhEQUFDYTt3QkFBT0osV0FBVTt3QkFDaEJPLE9BQU9sQixJQUFJOzRCQUFDbUIsVUFBVTs0QkFBWUMsS0FBS3BCLEVBQUVLOzRCQUFHZ0IsT0FBT3JCLEVBQUVRO3dCQUFDLElBQUk7d0JBQzFEYyxTQUFTYjt3QkFBVU8sYUFBYVo7a0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQztHQTNDd0JUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKCkge1xyXG5cclxuICBjb25zdCBbaW1nLCAkaW1nXSA9IHVzZVN0YXRlKCdpLXdhbnQtdG8tcGxheS1hLWdhbWUtcGxheS10aW1lJyk7XHJcbiAgY29uc3QgW2hvdywgJGhvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3AsICRwXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCB1cGR0ZUltZyA9IChpbSkgPT4ge1xyXG4gICAgJGltZyhpbSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuYWggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIDkwO1xyXG4gICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiA5MDtcclxuXHJcbiAgICAkcCh7eDogYCR7eH0lYCwgeTogYCR7eX0lYH0pO1xyXG4gICAgdXBkdGVJbWcoJ2Nob3dkZXItY3J5aW5nJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9udGRvaXQgPSAoKSA9PiB7XHJcbiAgICBuYWgoKTtcclxuICAgIHVwZHRlSW1nKCdzaG9jaycpO1xyXG4gICAgJGhvdyh0cnVlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxyXG4gICAgICA8aW1nIGFsdD0nZ3VtYmFsbCcgY2xhc3NOYW1lPSdnaWYnIHNyYz17YC8ke2ltZ30uZ2lmYH0gLz5cclxuICAgICAge2hvdyA/ICdIbW1tcGgsIFRoZXJlcyBubyBjaG9pY2UhJyA6ICdXaWxsIHlvdSBnbyBvdXQgd2l0aCBtZT8nfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRucyc+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPSd5ZXMnIGhyZWY9Jy95YXknPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlT3Zlcj17KCkgPT4gdXBkdGVJbWcoJ2NyeWluZy1jaG93ZGVyJyl9IG9uTW91c2VPdXQ9eygpID0+IHVwZHRlSW1nKCdwdXBweS1leWVzJyl9PlxyXG4gICAgICAgICAgICBZZXNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbm8nIFxyXG4gICAgICAgICAgc3R5bGU9e3AgPyB7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogcC54LCByaWdodDogcC55fSA6IG51bGx9IFxyXG4gICAgICAgICAgb25DbGljaz17ZG9udGRvaXR9IG9uTW91c2VPdmVyPXtuYWh9PlxyXG4gICAgICAgICAgICBOb1xyXG4gICAgICAgIDwvYnV0dG9uPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbiAgXHJcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwicGFnZSIsImltZyIsIiRpbWciLCJob3ciLCIkaG93IiwicCIsIiRwIiwidXBkdGVJbWciLCJpbSIsIm5haCIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsImRvbnRkb2l0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwiaHJlZiIsImJ1dHRvbiIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});