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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import Spotify icon from react-icons\nfunction page() {\n    _s();\n    const [img, $img] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"i-want-to-play-a-game-play-time\");\n    const [how, $how] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [p, $p] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [showPlayer, setShowPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // State to control the visibility of the Spotify player\n    const updteImg = (im)=>{\n        $img(im);\n    };\n    const nah = ()=>{\n        const x = Math.random() * 90;\n        const y = Math.random() * 90;\n        $p({\n            x: \"\".concat(x, \"%\"),\n            y: \"\".concat(y, \"%\")\n        });\n        updteImg(\"chowder-crying\");\n    };\n    const dontdoit = ()=>{\n        nah();\n        updteImg(\"shock\");\n        $how(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"gumball\",\n                className: \"gif\",\n                src: \"/\".concat(img, \".gif\")\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            how ? \"Hmmmph, Theres no choice!\" : \"Will you go out with me?\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btns\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"yes\",\n                        href: \"/yay\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseOver: ()=>updteImg(\"crying-chowder\"),\n                            onMouseOut: ()=>updteImg(\"waiting\"),\n                            children: \"Yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"no\",\n                        style: p ? {\n                            position: \"absolute\",\n                            top: p.x,\n                            right: p.y\n                        } : null,\n                        onClick: dontdoit,\n                        onMouseOver: nah,\n                        children: \"No\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"spotify\",\n                        onClick: ()=>setShowPlayer(true),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSpotify, {\n                                className: \"spotify-icon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            showPlayer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: \"https://open.spotify.com/embed/track/1xLoBwOKMtCq3tALgb8F6A?utm_source=generator\",\n                width: \"300\",\n                height: \"80\",\n                frameBorder: \"0\",\n                allow: \"encrypted-media\",\n                style: {\n                    position: \"absolute\",\n                    bottom: \"10px\",\n                    left: \"10px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"dLOdIjzCFsmAaaCi5iXI8Z9VV/Y=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTZCO0FBQ0U7QUFDWSxDQUFDLHVDQUF1QztBQUVwRSxTQUFTRzs7SUFFdEIsTUFBTSxDQUFDQyxLQUFLQyxLQUFLLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ0ssS0FBS0MsS0FBSyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QixNQUFNLENBQUNPLEdBQUdDLEdBQUcsR0FBR1IsK0NBQVFBLENBQUM7SUFDekIsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDLFFBQVEsd0RBQXdEO0lBRTdHLE1BQU1XLFdBQVcsQ0FBQ0M7UUFDaEJSLEtBQUtRO0lBQ1A7SUFFQSxNQUFNQyxNQUFNO1FBQ1YsTUFBTUMsSUFBSUMsS0FBS0MsV0FBVztRQUMxQixNQUFNQyxJQUFJRixLQUFLQyxXQUFXO1FBRTFCUixHQUFHO1lBQUNNLEdBQUcsR0FBSyxPQUFGQSxHQUFFO1lBQUlHLEdBQUcsR0FBSyxPQUFGQSxHQUFFO1FBQUU7UUFDMUJOLFNBQVM7SUFDWDtJQUVBLE1BQU1PLFdBQVc7UUFDZkw7UUFDQUYsU0FBUztRQUNUTCxLQUFLO0lBQ1A7SUFFQSxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNqQjtnQkFBSWtCLEtBQUk7Z0JBQVVELFdBQVU7Z0JBQU1FLEtBQUssSUFBUSxPQUFKbkIsS0FBSTs7Ozs7O1lBQy9DRSxNQUFNLDhCQUE4QjswQkFDckMsOERBQUNjO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3JCLGtEQUFJQTt3QkFBQ3FCLFdBQVU7d0JBQU1HLE1BQUs7a0NBQ3pCLDRFQUFDQzs0QkFBT0MsYUFBYSxJQUFNZCxTQUFTOzRCQUFtQmUsWUFBWSxJQUFNZixTQUFTO3NDQUFZOzs7Ozs7Ozs7OztrQ0FJaEcsOERBQUNhO3dCQUFPSixXQUFVO3dCQUNoQk8sT0FBT3BCLElBQUk7NEJBQUNxQixVQUFVOzRCQUFZQyxLQUFLdEIsRUFBRU87NEJBQUdnQixPQUFPdkIsRUFBRVU7d0JBQUMsSUFBSTt3QkFDMURjLFNBQVNiO3dCQUFVTyxhQUFhWjtrQ0FBSzs7Ozs7O2tDQUd2Qyw4REFBQ1c7d0JBQU9KLFdBQVU7d0JBQVVXLFNBQVMsSUFBTXJCLGNBQWM7OzBDQUN2RCw4REFBQ1QscURBQVNBO2dDQUFDbUIsV0FBVTs7Ozs7OzRCQUFpQjs7Ozs7Ozs7Ozs7OztZQUd6Q1gsNEJBQ0MsOERBQUN1QjtnQkFDQ1YsS0FBSTtnQkFDSlcsT0FBTTtnQkFDTkMsUUFBTztnQkFDUEMsYUFBWTtnQkFDWkMsT0FBTTtnQkFDTlQsT0FBTztvQkFBRUMsVUFBVTtvQkFBWVMsUUFBUTtvQkFBUUMsTUFBTTtnQkFBTzs7Ozs7Ozs7Ozs7O0FBS3RFO0dBeER3QnBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhU3BvdGlmeSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJzsgLy8gSW1wb3J0IFNwb3RpZnkgaWNvbiBmcm9tIHJlYWN0LWljb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKCkge1xyXG5cclxuICBjb25zdCBbaW1nLCAkaW1nXSA9IHVzZVN0YXRlKCdpLXdhbnQtdG8tcGxheS1hLWdhbWUtcGxheS10aW1lJyk7XHJcbiAgY29uc3QgW2hvdywgJGhvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3AsICRwXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93UGxheWVyLCBzZXRTaG93UGxheWVyXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU3RhdGUgdG8gY29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgU3BvdGlmeSBwbGF5ZXJcclxuXHJcbiAgY29uc3QgdXBkdGVJbWcgPSAoaW0pID0+IHtcclxuICAgICRpbWcoaW0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmFoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiA5MDtcclxuICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogOTA7XHJcblxyXG4gICAgJHAoe3g6IGAke3h9JWAsIHk6IGAke3l9JWB9KTtcclxuICAgIHVwZHRlSW1nKCdjaG93ZGVyLWNyeWluZycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvbnRkb2l0ID0gKCkgPT4ge1xyXG4gICAgbmFoKCk7XHJcbiAgICB1cGR0ZUltZygnc2hvY2snKTtcclxuICAgICRob3codHJ1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYm94Jz5cclxuICAgICAgPGltZyBhbHQ9J2d1bWJhbGwnIGNsYXNzTmFtZT0nZ2lmJyBzcmM9e2AvJHtpbWd9LmdpZmB9IC8+XHJcbiAgICAgIHtob3cgPyAnSG1tbXBoLCBUaGVyZXMgbm8gY2hvaWNlIScgOiAnV2lsbCB5b3UgZ28gb3V0IHdpdGggbWU/J31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bnMnPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT0neWVzJyBocmVmPScveWF5Jz5cclxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZU92ZXI9eygpID0+IHVwZHRlSW1nKCdjcnlpbmctY2hvd2RlcicpfSBvbk1vdXNlT3V0PXsoKSA9PiB1cGR0ZUltZygnd2FpdGluZycpfT5cclxuICAgICAgICAgICAgWWVzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J25vJyBcclxuICAgICAgICAgIHN0eWxlPXtwID8ge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IHAueCwgcmlnaHQ6IHAueX0gOiBudWxsfSBcclxuICAgICAgICAgIG9uQ2xpY2s9e2RvbnRkb2l0fSBvbk1vdXNlT3Zlcj17bmFofT5cclxuICAgICAgICAgICAgTm9cclxuICAgICAgICA8L2J1dHRvbj4gXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3Nwb3RpZnknIG9uQ2xpY2s9eygpID0+IHNldFNob3dQbGF5ZXIodHJ1ZSl9PlxyXG4gICAgICAgICAgPEZhU3BvdGlmeSBjbGFzc05hbWU9J3Nwb3RpZnktaWNvbicgLz4gey8qIEFwcGx5IHRoZSBjbGFzc05hbWUgKi99XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd1BsYXllciAmJiAoXHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLzF4TG9Cd09LTXRDcTN0QUxnYjhGNkE/dXRtX3NvdXJjZT1nZW5lcmF0b3JcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiODBcIlxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIGFsbG93PVwiZW5jcnlwdGVkLW1lZGlhXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206ICcxMHB4JywgbGVmdDogJzEwcHgnIH19XHJcbiAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIkZhU3BvdGlmeSIsInBhZ2UiLCJpbWciLCIkaW1nIiwiaG93IiwiJGhvdyIsInAiLCIkcCIsInNob3dQbGF5ZXIiLCJzZXRTaG93UGxheWVyIiwidXBkdGVJbWciLCJpbSIsIm5haCIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsImRvbnRkb2l0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwiaHJlZiIsImJ1dHRvbiIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIm9uQ2xpY2siLCJpZnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lQm9yZGVyIiwiYWxsb3ciLCJib3R0b20iLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});