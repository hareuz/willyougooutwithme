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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import Spotify icon from react-icons\nfunction page() {\n    _s();\n    const [img, $img] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"i-want-to-play-a-game-play-time\");\n    const [how, $how] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [p, $p] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [showPlayer, setShowPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // State to control the visibility of the Spotify player\n    const [currentSong, setCurrentSong] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // State to store the current song URL\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n        style: \"border-radius:12px\",\n        src: \"https://open.spotify.com/embed/track/3TgMcrV32NUKjEG2ujn9eh?utm_source=generator\",\n        width: \"100%\",\n        height: \"352\",\n        frameBorder: \"0\",\n        allowfullscreen: \"\",\n        allow: \"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\",\n        loading: \"lazy\"\n    }, void 0, false, {\n        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n        lineNumber: 16,\n        columnNumber: 1\n    }, this);\n    const songs = [\n        \"https://open.spotify.com/embed/track/1xLoBwOKMtCq3tALgb8F6A?utm_source=generator\",\n        \"https://open.spotify.com/embed/track/1XsS266JiQtoqqLdlgD17V?utm_source=generator\",\n        \"https://open.spotify.com/embed/track/3TgMcrV32NUKjEG2ujn9eh?utm_source=generator\"\n    ];\n    const updteImg = (im)=>{\n        $img(im);\n    };\n    const nah = ()=>{\n        const x = Math.random() * 90;\n        const y = Math.random() * 90;\n        $p({\n            x: \"\".concat(x, \"%\"),\n            y: \"\".concat(y, \"%\")\n        });\n        updteImg(\"chowder-crying\");\n    };\n    const dontdoit = ()=>{\n        nah();\n        updteImg(\"shock\");\n        $how(true);\n    };\n    const playRandomSong = ()=>{\n        const randomIndex = Math.floor(Math.random() * songs.length);\n        setCurrentSong(songs[randomIndex]);\n        setShowPlayer(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"gumball\",\n                className: \"gif\",\n                src: \"/\".concat(img, \".gif\")\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            how ? \"Hmmmph, Theres no choice!\" : \"Will you go out with me?\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btns\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"yes\",\n                        href: \"/yay\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseOver: ()=>updteImg(\"crying-chowder\"),\n                            onMouseOut: ()=>updteImg(\"waiting\"),\n                            children: \"Yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"no\",\n                        style: p ? {\n                            position: \"absolute\",\n                            top: p.x,\n                            right: p.y\n                        } : null,\n                        onClick: dontdoit,\n                        onMouseOver: nah,\n                        children: \"No\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"spotify\",\n                        onClick: playRandomSong,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSpotify, {\n                                className: \"spotify-icon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            showPlayer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: currentSong,\n                width: \"300\",\n                height: \"80\",\n                frameBorder: \"0\",\n                allow: \"encrypted-media\",\n                style: {\n                    position: \"absolute\",\n                    bottom: \"10px\",\n                    left: \"10px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"d5NePewGWVuDywvUAjfjNzVUwuM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTZCO0FBQ0U7QUFDWSxDQUFDLHVDQUF1QztBQUVwRSxTQUFTRzs7SUFFdEIsTUFBTSxDQUFDQyxLQUFLQyxLQUFLLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ0ssS0FBS0MsS0FBSyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QixNQUFNLENBQUNPLEdBQUdDLEdBQUcsR0FBR1IsK0NBQVFBLENBQUM7SUFDekIsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDLFFBQVEsd0RBQXdEO0lBQzdHLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLLHNDQUFzQztrQkFHNUYsOERBQUNhO1FBQU9DLE9BQU07UUFBcUJDLEtBQUk7UUFBbUZDLE9BQU07UUFBT0MsUUFBTztRQUFNQyxhQUFZO1FBQUlDLGlCQUFnQjtRQUFHQyxPQUFNO1FBQTZFQyxTQUFROzs7Ozs7SUFFaFIsTUFBTUMsUUFBUTtRQUNaO1FBQ0E7UUFDQTtLQUNEO0lBRUQsTUFBTUMsV0FBVyxDQUFDQztRQUNoQnBCLEtBQUtvQjtJQUNQO0lBRUEsTUFBTUMsTUFBTTtRQUNWLE1BQU1DLElBQUlDLEtBQUtDLFdBQVc7UUFDMUIsTUFBTUMsSUFBSUYsS0FBS0MsV0FBVztRQUUxQnBCLEdBQUc7WUFBQ2tCLEdBQUcsR0FBSyxPQUFGQSxHQUFFO1lBQUlHLEdBQUcsR0FBSyxPQUFGQSxHQUFFO1FBQUU7UUFDMUJOLFNBQVM7SUFDWDtJQUVBLE1BQU1PLFdBQVc7UUFDZkw7UUFDQUYsU0FBUztRQUNUakIsS0FBSztJQUNQO0lBRUEsTUFBTXlCLGlCQUFpQjtRQUNyQixNQUFNQyxjQUFjTCxLQUFLTSxNQUFNTixLQUFLQyxXQUFXTixNQUFNWTtRQUNyRHRCLGVBQWVVLEtBQUssQ0FBQ1UsWUFBWTtRQUNqQ3RCLGNBQWM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ3lCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDakM7Z0JBQUlrQyxLQUFJO2dCQUFVRCxXQUFVO2dCQUFNckIsS0FBSyxJQUFRLE9BQUpaLEtBQUk7Ozs7OztZQUMvQ0UsTUFBTSw4QkFBOEI7MEJBQ3JDLDhEQUFDOEI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDckMsa0RBQUlBO3dCQUFDcUMsV0FBVTt3QkFBTUUsTUFBSztrQ0FDekIsNEVBQUNDOzRCQUFPQyxhQUFhLElBQU1qQixTQUFTOzRCQUFtQmtCLFlBQVksSUFBTWxCLFNBQVM7c0NBQVk7Ozs7Ozs7Ozs7O2tDQUloRyw4REFBQ2dCO3dCQUFPSCxXQUFVO3dCQUNoQnRCLE9BQU9QLElBQUk7NEJBQUNtQyxVQUFVOzRCQUFZQyxLQUFLcEMsRUFBRW1COzRCQUFHa0IsT0FBT3JDLEVBQUVzQjt3QkFBQyxJQUFJO3dCQUMxRGdCLFNBQVNmO3dCQUFVVSxhQUFhZjtrQ0FBSzs7Ozs7O2tDQUd2Qyw4REFBQ2M7d0JBQU9ILFdBQVU7d0JBQVVTLFNBQVNkOzswQ0FDbkMsOERBQUM5QixxREFBU0E7Z0NBQUNtQyxXQUFVOzs7Ozs7NEJBQWlCOzs7Ozs7Ozs7Ozs7O1lBR3pDM0IsNEJBQ0MsOERBQUNJO2dCQUNDRSxLQUFLSjtnQkFDTEssT0FBTTtnQkFDTkMsUUFBTztnQkFDUEMsYUFBWTtnQkFDWkUsT0FBTTtnQkFDTk4sT0FBTztvQkFBRTRCLFVBQVU7b0JBQVlJLFFBQVE7b0JBQVFDLE1BQU07Z0JBQU87Ozs7Ozs7Ozs7OztBQUt0RTtHQXhFd0I3QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVNwb3RpZnkgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7IC8vIEltcG9ydCBTcG90aWZ5IGljb24gZnJvbSByZWFjdC1pY29uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZSgpIHtcclxuXHJcbiAgY29uc3QgW2ltZywgJGltZ10gPSB1c2VTdGF0ZSgnaS13YW50LXRvLXBsYXktYS1nYW1lLXBsYXktdGltZScpO1xyXG4gIGNvbnN0IFtob3csICRob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwLCAkcF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2hvd1BsYXllciwgc2V0U2hvd1BsYXllcl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFN0YXRlIHRvIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgb2YgdGhlIFNwb3RpZnkgcGxheWVyXHJcbiAgY29uc3QgW2N1cnJlbnRTb25nLCBzZXRDdXJyZW50U29uZ10gPSB1c2VTdGF0ZSgnJyk7IC8vIFN0YXRlIHRvIHN0b3JlIHRoZSBjdXJyZW50IHNvbmcgVVJMXHJcblxyXG5cclxuPGlmcmFtZSBzdHlsZT1cImJvcmRlci1yYWRpdXM6MTJweFwiIHNyYz1cImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8zVGdNY3JWMzJOVUtqRUcydWpuOWVoP3V0bV9zb3VyY2U9Z2VuZXJhdG9yXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzUyXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgYWxsb3c9XCJhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGZ1bGxzY3JlZW47IHBpY3R1cmUtaW4tcGljdHVyZVwiIGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWU+XHJcblxyXG4gIGNvbnN0IHNvbmdzID0gW1xyXG4gICAgXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2svMXhMb0J3T0tNdENxM3RBTGdiOEY2QT91dG1fc291cmNlPWdlbmVyYXRvclwiLFxyXG4gICAgXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2svMVhzUzI2NkppUXRvcXFMZGxnRDE3Vj91dG1fc291cmNlPWdlbmVyYXRvclwiLFxyXG4gICAgXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2svM1RnTWNyVjMyTlVLakVHMnVqbjllaD91dG1fc291cmNlPWdlbmVyYXRvclwiXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdXBkdGVJbWcgPSAoaW0pID0+IHtcclxuICAgICRpbWcoaW0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmFoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiA5MDtcclxuICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogOTA7XHJcblxyXG4gICAgJHAoe3g6IGAke3h9JWAsIHk6IGAke3l9JWB9KTtcclxuICAgIHVwZHRlSW1nKCdjaG93ZGVyLWNyeWluZycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvbnRkb2l0ID0gKCkgPT4ge1xyXG4gICAgbmFoKCk7XHJcbiAgICB1cGR0ZUltZygnc2hvY2snKTtcclxuICAgICRob3codHJ1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlSYW5kb21Tb25nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb25ncy5sZW5ndGgpO1xyXG4gICAgc2V0Q3VycmVudFNvbmcoc29uZ3NbcmFuZG9tSW5kZXhdKTtcclxuICAgIHNldFNob3dQbGF5ZXIodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XHJcbiAgICAgIDxpbWcgYWx0PSdndW1iYWxsJyBjbGFzc05hbWU9J2dpZicgc3JjPXtgLyR7aW1nfS5naWZgfSAvPlxyXG4gICAgICB7aG93ID8gJ0htbW1waCwgVGhlcmVzIG5vIGNob2ljZSEnIDogJ1dpbGwgeW91IGdvIG91dCB3aXRoIG1lPyd9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG5zJz5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9J3llcycgaHJlZj0nL3lheSc+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VPdmVyPXsoKSA9PiB1cGR0ZUltZygnY3J5aW5nLWNob3dkZXInKX0gb25Nb3VzZU91dD17KCkgPT4gdXBkdGVJbWcoJ3dhaXRpbmcnKX0+XHJcbiAgICAgICAgICAgIFllc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdubycgXHJcbiAgICAgICAgICBzdHlsZT17cCA/IHtwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiBwLngsIHJpZ2h0OiBwLnl9IDogbnVsbH0gXHJcbiAgICAgICAgICBvbkNsaWNrPXtkb250ZG9pdH0gb25Nb3VzZU92ZXI9e25haH0+XHJcbiAgICAgICAgICAgIE5vXHJcbiAgICAgICAgPC9idXR0b24+IFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzcG90aWZ5JyBvbkNsaWNrPXtwbGF5UmFuZG9tU29uZ30+XHJcbiAgICAgICAgICA8RmFTcG90aWZ5IGNsYXNzTmFtZT0nc3BvdGlmeS1pY29uJyAvPiB7LyogQXBwbHkgdGhlIGNsYXNzTmFtZSAqL31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93UGxheWVyICYmIChcclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICBzcmM9e2N1cnJlbnRTb25nfVxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiODBcIlxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIGFsbG93PVwiZW5jcnlwdGVkLW1lZGlhXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206ICcxMHB4JywgbGVmdDogJzEwcHgnIH19XHJcbiAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIkZhU3BvdGlmeSIsInBhZ2UiLCJpbWciLCIkaW1nIiwiaG93IiwiJGhvdyIsInAiLCIkcCIsInNob3dQbGF5ZXIiLCJzZXRTaG93UGxheWVyIiwiY3VycmVudFNvbmciLCJzZXRDdXJyZW50U29uZyIsImlmcmFtZSIsInN0eWxlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmcmFtZUJvcmRlciIsImFsbG93ZnVsbHNjcmVlbiIsImFsbG93IiwibG9hZGluZyIsInNvbmdzIiwidXBkdGVJbWciLCJpbSIsIm5haCIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsImRvbnRkb2l0IiwicGxheVJhbmRvbVNvbmciLCJyYW5kb21JbmRleCIsImZsb29yIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0IiwiaHJlZiIsImJ1dHRvbiIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJvbkNsaWNrIiwiYm90dG9tIiwibGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});