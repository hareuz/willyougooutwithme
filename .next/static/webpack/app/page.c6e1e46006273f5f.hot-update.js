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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import Spotify icon from react-icons\nfunction page() {\n    _s();\n    const [img, $img] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"i-want-to-play-a-game-play-time\");\n    const [how, $how] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [p, $p] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [showPlayer, setShowPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // State to control the visibility of the Spotify player\n    const [currentSong, setCurrentSong] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // State to store the current song URL\n    const songs = [\n        \"https://open.spotify.com/embed/track/1xLoBwOKMtCq3tALgb8F6A?utm_source=generator\",\n        \"https://open.spotify.com/embed/track/1XsS266JiQtoqqLdlgD17V?utm_source=generator\",\n        \"https://open.spotify.com/embed/track/3TgMcrV32NUKjEG2ujn9eh?utm_source=generator\"\n    ];\n    const updteImg = (im)=>{\n        $img(im);\n    };\n    const nah = ()=>{\n        const x = Math.random() * 90;\n        const y = Math.random() * 90;\n        $p({\n            x: \"\".concat(x, \"%\"),\n            y: \"\".concat(y, \"%\")\n        });\n        updteImg(\"chowder-crying\");\n    };\n    const dontdoit = ()=>{\n        nah();\n        updteImg(\"shock\");\n        $how(true);\n    };\n    const playRandomSong = ()=>{\n        const randomIndex = Math.floor(Math.random() * songs.length);\n        setCurrentSong(songs[randomIndex]);\n        setShowPlayer(true);\n        // Force autoplay by interacting with the iframe\n        setTimeout(()=>{\n            const iframe = document.querySelector(\"iframe\");\n            if (iframe) {\n                const src = iframe.src;\n                iframe.src = \"\";\n                iframe.src = src;\n            }\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"gumball\",\n                className: \"gif\",\n                src: \"/\".concat(img, \".gif\")\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            how ? \"Hmmmph, Theres no choice!\" : \"Will you go out with me?\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btns\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"yes\",\n                        href: \"/yay\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseOver: ()=>updteImg(\"crying-chowder\"),\n                            onMouseOut: ()=>updteImg(\"waiting\"),\n                            children: \"Yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"no\",\n                        style: p ? {\n                            position: \"absolute\",\n                            top: p.x,\n                            right: p.y\n                        } : null,\n                        onClick: dontdoit,\n                        onMouseOver: nah,\n                        children: \"No\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"spotify\",\n                        onClick: playRandomSong,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSpotify, {\n                                className: \"spotify-icon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            showPlayer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: currentSong,\n                width: \"300\",\n                height: \"80\",\n                frameBorder: \"0\",\n                allow: \"autoplay; encrypted-media\",\n                style: {\n                    position: \"absolute\",\n                    bottom: \"10px\",\n                    left: \"10px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"d5NePewGWVuDywvUAjfjNzVUwuM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTZCO0FBQ2E7QUFDQyxDQUFDLHVDQUF1QztBQUVwRSxTQUFTSTs7SUFFdEIsTUFBTSxDQUFDQyxLQUFLQyxLQUFLLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ00sS0FBS0MsS0FBSyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QixNQUFNLENBQUNRLEdBQUdDLEdBQUcsR0FBR1QsK0NBQVFBLENBQUM7SUFDekIsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDLFFBQVEsd0RBQXdEO0lBQzdHLE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLLHNDQUFzQztJQUUxRixNQUFNYyxRQUFRO1FBQ1o7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNQyxXQUFXLENBQUNDO1FBQ2hCWCxLQUFLVztJQUNQO0lBRUEsTUFBTUMsTUFBTTtRQUNWLE1BQU1DLElBQUlDLEtBQUtDLFdBQVc7UUFDMUIsTUFBTUMsSUFBSUYsS0FBS0MsV0FBVztRQUUxQlgsR0FBRztZQUFDUyxHQUFHLEdBQUssT0FBRkEsR0FBRTtZQUFJRyxHQUFHLEdBQUssT0FBRkEsR0FBRTtRQUFFO1FBQzFCTixTQUFTO0lBQ1g7SUFFQSxNQUFNTyxXQUFXO1FBQ2ZMO1FBQ0FGLFNBQVM7UUFDVFIsS0FBSztJQUNQO0lBRUEsTUFBTWdCLGlCQUFpQjtRQUNyQixNQUFNQyxjQUFjTCxLQUFLTSxNQUFNTixLQUFLQyxXQUFXTixNQUFNWTtRQUNyRGIsZUFBZUMsS0FBSyxDQUFDVSxZQUFZO1FBQ2pDYixjQUFjO1FBRWQsZ0RBQWdEO1FBQ2hEZ0IsV0FBVztZQUNULE1BQU1DLFNBQVNDLFNBQVNDLGNBQWM7WUFDdEMsSUFBSUYsUUFBUTtnQkFDVixNQUFNRyxNQUFNSCxPQUFPRztnQkFDbkJILE9BQU9HLE1BQU07Z0JBQ2JILE9BQU9HLE1BQU1BO1lBQ2Y7UUFDRixHQUFHO0lBQ0w7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUM3QjtnQkFBSThCLEtBQUk7Z0JBQVVELFdBQVU7Z0JBQU1GLEtBQUssSUFBUSxPQUFKM0IsS0FBSTs7Ozs7O1lBQy9DRSxNQUFNLDhCQUE4QjswQkFDckMsOERBQUMwQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNsQyxrREFBSUE7d0JBQUNrQyxXQUFVO3dCQUFNRSxNQUFLO2tDQUN6Qiw0RUFBQ0M7NEJBQU9DLGFBQWEsSUFBTXRCLFNBQVM7NEJBQW1CdUIsWUFBWSxJQUFNdkIsU0FBUztzQ0FBWTs7Ozs7Ozs7Ozs7a0NBSWhHLDhEQUFDcUI7d0JBQU9ILFdBQVU7d0JBQ2hCTSxPQUFPL0IsSUFBSTs0QkFBQ2dDLFVBQVU7NEJBQVlDLEtBQUtqQyxFQUFFVTs0QkFBR3dCLE9BQU9sQyxFQUFFYTt3QkFBQyxJQUFJO3dCQUMxRHNCLFNBQVNyQjt3QkFBVWUsYUFBYXBCO2tDQUFLOzs7Ozs7a0NBR3ZDLDhEQUFDbUI7d0JBQU9ILFdBQVU7d0JBQVVVLFNBQVNwQjs7MENBQ25DLDhEQUFDckIscURBQVNBO2dDQUFDK0IsV0FBVTs7Ozs7OzRCQUFpQjs7Ozs7Ozs7Ozs7OztZQUd6Q3ZCLDRCQUNDLDhEQUFDa0I7Z0JBQ0NHLEtBQUtuQjtnQkFDTGdDLE9BQU07Z0JBQ05DLFFBQU87Z0JBQ1BDLGFBQVk7Z0JBQ1pDLE9BQU07Z0JBQ05SLE9BQU87b0JBQUVDLFVBQVU7b0JBQVlRLFFBQVE7b0JBQVFDLE1BQU07Z0JBQU87Ozs7Ozs7Ozs7OztBQUt0RTtHQS9Fd0I5QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhU3BvdGlmeSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJzsgLy8gSW1wb3J0IFNwb3RpZnkgaWNvbiBmcm9tIHJlYWN0LWljb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKCkge1xyXG5cclxuICBjb25zdCBbaW1nLCAkaW1nXSA9IHVzZVN0YXRlKCdpLXdhbnQtdG8tcGxheS1hLWdhbWUtcGxheS10aW1lJyk7XHJcbiAgY29uc3QgW2hvdywgJGhvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3AsICRwXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93UGxheWVyLCBzZXRTaG93UGxheWVyXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU3RhdGUgdG8gY29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgU3BvdGlmeSBwbGF5ZXJcclxuICBjb25zdCBbY3VycmVudFNvbmcsIHNldEN1cnJlbnRTb25nXSA9IHVzZVN0YXRlKCcnKTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIGN1cnJlbnQgc29uZyBVUkxcclxuXHJcbiAgY29uc3Qgc29uZ3MgPSBbXHJcbiAgICBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8xeExvQndPS010Q3EzdEFMZ2I4RjZBP3V0bV9zb3VyY2U9Z2VuZXJhdG9yXCIsXHJcbiAgICBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8xWHNTMjY2SmlRdG9xcUxkbGdEMTdWP3V0bV9zb3VyY2U9Z2VuZXJhdG9yXCIsXHJcbiAgICBcImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8zVGdNY3JWMzJOVUtqRUcydWpuOWVoP3V0bV9zb3VyY2U9Z2VuZXJhdG9yXCJcclxuICBdO1xyXG5cclxuICBjb25zdCB1cGR0ZUltZyA9IChpbSkgPT4ge1xyXG4gICAgJGltZyhpbSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuYWggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIDkwO1xyXG4gICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiA5MDtcclxuXHJcbiAgICAkcCh7eDogYCR7eH0lYCwgeTogYCR7eX0lYH0pO1xyXG4gICAgdXBkdGVJbWcoJ2Nob3dkZXItY3J5aW5nJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9udGRvaXQgPSAoKSA9PiB7XHJcbiAgICBuYWgoKTtcclxuICAgIHVwZHRlSW1nKCdzaG9jaycpO1xyXG4gICAgJGhvdyh0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheVJhbmRvbVNvbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNvbmdzLmxlbmd0aCk7XHJcbiAgICBzZXRDdXJyZW50U29uZyhzb25nc1tyYW5kb21JbmRleF0pO1xyXG4gICAgc2V0U2hvd1BsYXllcih0cnVlKTtcclxuXHJcbiAgICAvLyBGb3JjZSBhdXRvcGxheSBieSBpbnRlcmFjdGluZyB3aXRoIHRoZSBpZnJhbWVcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcclxuICAgICAgaWYgKGlmcmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHNyYyA9IGlmcmFtZS5zcmM7XHJcbiAgICAgICAgaWZyYW1lLnNyYyA9ICcnO1xyXG4gICAgICAgIGlmcmFtZS5zcmMgPSBzcmM7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XHJcbiAgICAgIDxpbWcgYWx0PSdndW1iYWxsJyBjbGFzc05hbWU9J2dpZicgc3JjPXtgLyR7aW1nfS5naWZgfSAvPlxyXG4gICAgICB7aG93ID8gJ0htbW1waCwgVGhlcmVzIG5vIGNob2ljZSEnIDogJ1dpbGwgeW91IGdvIG91dCB3aXRoIG1lPyd9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG5zJz5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9J3llcycgaHJlZj0nL3lheSc+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VPdmVyPXsoKSA9PiB1cGR0ZUltZygnY3J5aW5nLWNob3dkZXInKX0gb25Nb3VzZU91dD17KCkgPT4gdXBkdGVJbWcoJ3dhaXRpbmcnKX0+XHJcbiAgICAgICAgICAgIFllc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdubycgXHJcbiAgICAgICAgICBzdHlsZT17cCA/IHtwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiBwLngsIHJpZ2h0OiBwLnl9IDogbnVsbH0gXHJcbiAgICAgICAgICBvbkNsaWNrPXtkb250ZG9pdH0gb25Nb3VzZU92ZXI9e25haH0+XHJcbiAgICAgICAgICAgIE5vXHJcbiAgICAgICAgPC9idXR0b24+IFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzcG90aWZ5JyBvbkNsaWNrPXtwbGF5UmFuZG9tU29uZ30+XHJcbiAgICAgICAgICA8RmFTcG90aWZ5IGNsYXNzTmFtZT0nc3BvdGlmeS1pY29uJyAvPiB7LyogQXBwbHkgdGhlIGNsYXNzTmFtZSAqL31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93UGxheWVyICYmIChcclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICBzcmM9e2N1cnJlbnRTb25nfVxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiODBcIlxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAnMTBweCcsIGxlZnQ6ICcxMHB4JyB9fVxyXG4gICAgICAgID48L2lmcmFtZT5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGYVNwb3RpZnkiLCJwYWdlIiwiaW1nIiwiJGltZyIsImhvdyIsIiRob3ciLCJwIiwiJHAiLCJzaG93UGxheWVyIiwic2V0U2hvd1BsYXllciIsImN1cnJlbnRTb25nIiwic2V0Q3VycmVudFNvbmciLCJzb25ncyIsInVwZHRlSW1nIiwiaW0iLCJuYWgiLCJ4IiwiTWF0aCIsInJhbmRvbSIsInkiLCJkb250ZG9pdCIsInBsYXlSYW5kb21Tb25nIiwicmFuZG9tSW5kZXgiLCJmbG9vciIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJpZnJhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJkaXYiLCJjbGFzc05hbWUiLCJhbHQiLCJocmVmIiwiYnV0dG9uIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0Iiwib25DbGljayIsIndpZHRoIiwiaGVpZ2h0IiwiZnJhbWVCb3JkZXIiLCJhbGxvdyIsImJvdHRvbSIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});