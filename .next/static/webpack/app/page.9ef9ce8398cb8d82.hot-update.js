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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ \"(app-client)/./node_modules/emailjs-com/es/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import Spotify icon from react-icons\nfunction Page() {\n    _s();\n    const [favoriteIdea, setFavoriteIdea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showPlayer, setShowPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // State to control the visibility of the Spotify player\n    const [currentSong, setCurrentSong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store the current song URL\n    const [customIdea, setCustomIdea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store the custom idea\n    const ideas = [\n        \"Visit to a graveyard\",\n        \"Passenger princess duty (gloating n music involved)\",\n        \"Eat to bite or whatever I skipped some eng classes\",\n        \"Ghost\"\n    ];\n    const songs = [\n        \"https://open.spotify.com/embed/track/1xLoBwOKMtCq3tALgb8F6A?utm_source=generator\",\n        \"https://open.spotify.com/embed/track/1XsS266JiQtoqqLdlgD17V?utm_source=generator\",\n        \"https://open.spotify.com/embed/track/3TgMcrV32NUKjEG2ujn9eh?utm_source=generator\"\n    ];\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        const templateParams = {\n            favoriteIdea,\n            user_email: email\n        };\n        emailjs_com__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(\"service_gor0ceq\", \"template_27eho0j\", templateParams, \"Cr6mC4HZtDiN-XAsJ\").then((result)=>{\n            console.log(result.text);\n            alert(\"Email sent successfully!\");\n        }, (error)=>{\n            console.log(error.text);\n            alert(\"Failed to send email.\");\n        });\n    };\n    const playRandomSong = ()=>{\n        const randomIndex = Math.floor(Math.random() * songs.length);\n        setCurrentSong(songs[randomIndex]);\n        setShowPlayer(true);\n        // Force autoplay by interacting with the iframe\n        setTimeout(()=>{\n            const iframe = document.querySelector(\"iframe\");\n            if (iframe) {\n                const src = iframe.src;\n                iframe.src = \"\";\n                iframe.src = src;\n            }\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"yayyy\",\n                className: \"gif\",\n                src: \"/chowder.gif\"\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Yayyy~ lets plan <3\"\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"I have some fun ideas:\"\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    listStyleType: \"none\",\n                    padding: 0\n                },\n                children: [\n                    ideas.map((idea, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                marginBottom: \"10px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"custom-checkbox\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        checked: favoriteIdea === idea,\n                                        onChange: ()=>setFavoriteIdea(idea)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"checkmark\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    idea\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            marginBottom: \"10px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"custom-checkbox\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    checked: favoriteIdea === customIdea,\n                                    onChange: ()=>setFavoriteIdea(customIdea)\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"checkmark\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Your own suggestion\",\n                                    value: customIdea,\n                                    onChange: (e)=>{\n                                        setCustomIdea(e.target.value);\n                                        setFavoriteIdea(e.target.value);\n                                    },\n                                    className: \"custom-input\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"What do you think?\"\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: sendEmail,\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Your favorite idea: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"favoriteIdea\",\n                                value: favoriteIdea,\n                                onChange: (e)=>setFavoriteIdea(e.target.value),\n                                required: true,\n                                className: \"oval-input\" // Apply the new class\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Your email: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                name: \"user_email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true,\n                                className: \"oval-input\" // Apply the new class\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        children: \"Submit!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            favoriteIdea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Your favorite idea is: \".concat(favoriteIdea)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 129,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"spotify\",\n                onClick: playRandomSong,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSpotify, {\n                        className: \"spotify-icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            showPlayer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: currentSong,\n                width: \"300\",\n                height: \"80\",\n                frameBorder: \"0\",\n                allow: \"autoplay; encrypted-media\",\n                style: {\n                    position: \"absolute\",\n                    bottom: \"10px\",\n                    left: \"10px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n                lineNumber: 135,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadharissohail/Documents/GitHub/willyougooutwithme/app/page.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"BEp9GK9nxDxqa0O+qmpuH+cV47c=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VytCLE9BQU87b0JBQUVtQixTQUFTO29CQUFRQyxlQUFlO29CQUFVQyxZQUFZO2dCQUFTOztrQ0FDakcsOERBQUNiOzs0QkFDRTswQ0FDRCw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xZLE1BQUs7Z0NBQ0xQLE9BQU8xRDtnQ0FDUHVELFVBQVUsQ0FBQzFDLElBQU1aLGdCQUFnQlksRUFBRThDLE9BQU9EO2dDQUMxQ1EsUUFBUTtnQ0FDUjdCLFdBQVUsYUFBYSxzQkFBc0I7Ozs7Ozs7Ozs7OztrQ0FHakQsOERBQUM4Qjs7Ozs7a0NBQ0QsOERBQUNoQjs7NEJBQ0U7MENBQ0QsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMWSxNQUFLO2dDQUNMUCxPQUFPeEQ7Z0NBQ1BxRCxVQUFVLENBQUMxQyxJQUFNVixTQUFTVSxFQUFFOEMsT0FBT0Q7Z0NBQ25DUSxRQUFRO2dDQUNSN0IsV0FBVSxhQUFhLHNCQUFzQjs7Ozs7Ozs7Ozs7O2tDQUdqRCw4REFBQytCO3dCQUFPZixNQUFLO3dCQUFTVixPQUFPOzRCQUFFMEIsWUFBWTt3QkFBTztrQ0FBSTs7Ozs7Ozs7Ozs7O1lBRXZEckUsOEJBQ0MsOERBQUN5QzswQkFBRywwQkFBdUMsT0FBYnpDOzs7Ozs7MEJBRWhDLDhEQUFDb0U7Z0JBQU8vQixXQUFVO2dCQUFVaUMsU0FBUzdDOztrQ0FDbkMsOERBQUMzQixxREFBU0E7d0JBQUN1QyxXQUFVOzs7Ozs7b0JBQWlCOzs7Ozs7O1lBRXZDakMsNEJBQ0MsOERBQUM0QjtnQkFDQ0csS0FBSzdCO2dCQUNMaUUsT0FBTTtnQkFDTkMsUUFBTztnQkFDUEMsYUFBWTtnQkFDWkMsT0FBTTtnQkFDTi9CLE9BQU87b0JBQUVnQyxVQUFVO29CQUFZQyxRQUFRO29CQUFRQyxNQUFNO2dCQUFPOzs7Ozs7Ozs7Ozs7QUFLdEU7R0EzSXdCOUU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XHJcbmltcG9ydCB7IEZhU3BvdGlmeSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJzsgLy8gSW1wb3J0IFNwb3RpZnkgaWNvbiBmcm9tIHJlYWN0LWljb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IFtmYXZvcml0ZUlkZWEsIHNldEZhdm9yaXRlSWRlYV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Nob3dQbGF5ZXIsIHNldFNob3dQbGF5ZXJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTdGF0ZSB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBTcG90aWZ5IHBsYXllclxyXG4gIGNvbnN0IFtjdXJyZW50U29uZywgc2V0Q3VycmVudFNvbmddID0gdXNlU3RhdGUoJycpOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgY3VycmVudCBzb25nIFVSTFxyXG4gIGNvbnN0IFtjdXN0b21JZGVhLCBzZXRDdXN0b21JZGVhXSA9IHVzZVN0YXRlKCcnKTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIGN1c3RvbSBpZGVhXHJcblxyXG4gIGNvbnN0IGlkZWFzID0gW1xyXG4gICAgJ1Zpc2l0IHRvIGEgZ3JhdmV5YXJkJyxcclxuICAgICdQYXNzZW5nZXIgcHJpbmNlc3MgZHV0eSAoZ2xvYXRpbmcgbiBtdXNpYyBpbnZvbHZlZCknLFxyXG4gICAgJ0VhdCB0byBiaXRlIG9yIHdoYXRldmVyIEkgc2tpcHBlZCBzb21lIGVuZyBjbGFzc2VzJyxcclxuICAgICdHaG9zdCdcclxuICBdO1xyXG5cclxuICBjb25zdCBzb25ncyA9IFtcclxuICAgIFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLzF4TG9Cd09LTXRDcTN0QUxnYjhGNkE/dXRtX3NvdXJjZT1nZW5lcmF0b3JcIixcclxuICAgIFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLzFYc1MyNjZKaVF0b3FxTGRsZ0QxN1Y/dXRtX3NvdXJjZT1nZW5lcmF0b3JcIixcclxuICAgIFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLzNUZ01jclYzMk5VS2pFRzJ1am45ZWg/dXRtX3NvdXJjZT1nZW5lcmF0b3JcIlxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGVQYXJhbXMgPSB7XHJcbiAgICAgIGZhdm9yaXRlSWRlYSxcclxuICAgICAgdXNlcl9lbWFpbDogZW1haWxcclxuICAgIH07XHJcblxyXG4gICAgZW1haWxqcy5zZW5kKCdzZXJ2aWNlX2dvcjBjZXEnLCAndGVtcGxhdGVfMjdlaG8waicsIHRlbXBsYXRlUGFyYW1zLCAnQ3I2bUM0SFp0RGlOLVhBc0onKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICBhbGVydCgnRW1haWwgc2VudCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHNlbmQgZW1haWwuJyk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYXlSYW5kb21Tb25nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb25ncy5sZW5ndGgpO1xyXG4gICAgc2V0Q3VycmVudFNvbmcoc29uZ3NbcmFuZG9tSW5kZXhdKTtcclxuICAgIHNldFNob3dQbGF5ZXIodHJ1ZSk7XHJcblxyXG4gICAgLy8gRm9yY2UgYXV0b3BsYXkgYnkgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgaWZyYW1lXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XHJcbiAgICAgIGlmIChpZnJhbWUpIHtcclxuICAgICAgICBjb25zdCBzcmMgPSBpZnJhbWUuc3JjO1xyXG4gICAgICAgIGlmcmFtZS5zcmMgPSAnJztcclxuICAgICAgICBpZnJhbWUuc3JjID0gc3JjO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxyXG4gICAgICA8aW1nIGFsdD0neWF5eXknIGNsYXNzTmFtZT0nZ2lmJyBzcmM9Jy9jaG93ZGVyLmdpZicgLz5cclxuICAgICAgPGgxPnsnWWF5eXl+IGxldHMgcGxhbiA8Myd9PC9oMT5cclxuICAgICAgPHA+eydJIGhhdmUgc29tZSBmdW4gaWRlYXM6J308L3A+XHJcbiAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiAnbm9uZScsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAge2lkZWFzLm1hcCgoaWRlYSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zhdm9yaXRlSWRlYSA9PT0gaWRlYX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRGYXZvcml0ZUlkZWEoaWRlYSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAge2lkZWF9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtmYXZvcml0ZUlkZWEgPT09IGN1c3RvbUlkZWF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEZhdm9yaXRlSWRlYShjdXN0b21JZGVhKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG93biBzdWdnZXN0aW9uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tSWRlYX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEN1c3RvbUlkZWEoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmF2b3JpdGVJZGVhKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxwPnsnV2hhdCBkbyB5b3UgdGhpbms/J308L3A+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kRW1haWx9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIHsnWW91ciBmYXZvcml0ZSBpZGVhOiAnfVxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcclxuICAgICAgICAgICAgbmFtZT0nZmF2b3JpdGVJZGVhJyBcclxuICAgICAgICAgICAgdmFsdWU9e2Zhdm9yaXRlSWRlYX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmF2b3JpdGVJZGVhKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmFsLWlucHV0XCIgLy8gQXBwbHkgdGhlIG5ldyBjbGFzc1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIHsnWW91ciBlbWFpbDogJ31cclxuICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgdHlwZT0nZW1haWwnIFxyXG4gICAgICAgICAgICBuYW1lPSd1c2VyX2VtYWlsJyBcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZhbC1pbnB1dFwiIC8vIEFwcGx5IHRoZSBuZXcgY2xhc3NcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PnsnU3VibWl0ISd9PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAge2Zhdm9yaXRlSWRlYSAmJiAoXHJcbiAgICAgICAgPHA+e2BZb3VyIGZhdm9yaXRlIGlkZWEgaXM6ICR7ZmF2b3JpdGVJZGVhfWB9PC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nc3BvdGlmeScgb25DbGljaz17cGxheVJhbmRvbVNvbmd9PlxyXG4gICAgICAgIDxGYVNwb3RpZnkgY2xhc3NOYW1lPSdzcG90aWZ5LWljb24nIC8+IHsvKiBBcHBseSB0aGUgY2xhc3NOYW1lICovfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge3Nob3dQbGF5ZXIgJiYgKFxyXG4gICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgIHNyYz17Y3VycmVudFNvbmd9XHJcbiAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCI4MFwiXHJcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgYWxsb3c9XCJhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206ICcxMHB4JywgbGVmdDogJzEwcHgnIH19XHJcbiAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZW1haWxqcyIsIkZhU3BvdGlmeSIsIlBhZ2UiLCJmYXZvcml0ZUlkZWEiLCJzZXRGYXZvcml0ZUlkZWEiLCJlbWFpbCIsInNldEVtYWlsIiwic2hvd1BsYXllciIsInNldFNob3dQbGF5ZXIiLCJjdXJyZW50U29uZyIsInNldEN1cnJlbnRTb25nIiwiY3VzdG9tSWRlYSIsInNldEN1c3RvbUlkZWEiLCJpZGVhcyIsInNvbmdzIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVtcGxhdGVQYXJhbXMiLCJ1c2VyX2VtYWlsIiwic2VuZCIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImFsZXJ0IiwiZXJyb3IiLCJwbGF5UmFuZG9tU29uZyIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImlmcmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNyYyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsImFsdCIsImgxIiwicCIsInVsIiwic3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwicGFkZGluZyIsIm1hcCIsImlkZWEiLCJpbmRleCIsImxpIiwibWFyZ2luQm90dG9tIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJzcGFuIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInRhcmdldCIsImZvcm0iLCJvblN1Ym1pdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm5hbWUiLCJyZXF1aXJlZCIsImJyIiwiYnV0dG9uIiwibWFyZ2luTGVmdCIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lQm9yZGVyIiwiYWxsb3ciLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});