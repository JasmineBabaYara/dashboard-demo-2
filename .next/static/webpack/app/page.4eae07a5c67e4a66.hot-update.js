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

/***/ "(app-pages-browser)/./app/barchart/page.js":
/*!******************************!*\
  !*** ./app/barchart/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: function() { return /* binding */ App; },\n/* harmony export */   data: function() { return /* binding */ data; },\n/* harmony export */   options: function() { return /* binding */ options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @faker-js/faker */ \"(app-pages-browser)/./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ options,data,App auto */ \n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nconst options = {\n    plugins: {\n        title: {\n            display: true,\n            text: \"Chart.js Bar Chart - Stacked\"\n        }\n    },\n    responsive: true,\n    scales: {\n        x: {\n            stacked: true\n        },\n        y: {\n            stacked: true\n        }\n    }\n};\nconst labels = [\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\"\n];\nconst data = {\n    labels,\n    datasets: [\n        {\n            label: \"Dataset 1\",\n            data: labels.map(()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.datatype.number({\n                    min: -1000,\n                    max: 1000\n                })),\n            backgroundColor: \"rgb(255, 99, 132)\"\n        },\n        {\n            label: \"Dataset 2\",\n            data: labels.map(()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.datatype.number({\n                    min: -1000,\n                    max: 1000\n                })),\n            backgroundColor: \"rgb(75, 192, 192)\"\n        },\n        {\n            label: \"Dataset 3\",\n            data: labels.map(()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.datatype.number({\n                    min: -1000,\n                    max: 1000\n                })),\n            backgroundColor: \"rgb(53, 162, 235)\"\n        }\n    ]\n};\nfunction App() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n        options: options,\n        data: data\n    }, void 0, false, {\n        fileName: \"/Users/jasminebabayara/Documents/Projects/Next/dashboard-demo-2/app/barchart/page.js\",\n        lineNumber: 66,\n        columnNumber: 10\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9iYXJjaGFydC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFTUjtBQUNvQjtBQUNFO0FBRXhDRSwyQ0FBT0EsQ0FBQ1MsUUFBUSxDQUNkUixtREFBYUEsRUFDYkMsaURBQVdBLEVBQ1hDLGdEQUFVQSxFQUNWQywyQ0FBS0EsRUFDTEMsNkNBQU9BLEVBQ1BDLDRDQUFNQTtBQUdELE1BQU1JLFVBQVU7SUFDckJDLFNBQVM7UUFDUEMsT0FBTztZQUNMQyxTQUFTO1lBQ1RDLE1BQU07UUFDUjtJQUNGO0lBQ0FDLFlBQVk7SUFDWkMsUUFBUTtRQUNOQyxHQUFHO1lBQ0RDLFNBQVM7UUFDWDtRQUNBQyxHQUFHO1lBQ0RELFNBQVM7UUFDWDtJQUNGO0FBQ0YsRUFBRTtBQUVGLE1BQU1FLFNBQVM7SUFBQztJQUFXO0lBQVk7SUFBUztJQUFTO0lBQU87SUFBUTtDQUFPO0FBRXhFLE1BQU1DLE9BQU87SUFDbEJEO0lBQ0FFLFVBQVU7UUFDUjtZQUNFQyxPQUFPO1lBQ1BGLE1BQU1ELE9BQU9JLEdBQUcsQ0FBQyxJQUFNaEIsa0RBQUtBLENBQUNpQixRQUFRLENBQUNDLE1BQU0sQ0FBQztvQkFBRUMsS0FBSyxDQUFDO29CQUFNQyxLQUFLO2dCQUFLO1lBQ3JFQyxpQkFBaUI7UUFDbkI7UUFDQTtZQUNFTixPQUFPO1lBQ1BGLE1BQU1ELE9BQU9JLEdBQUcsQ0FBQyxJQUFNaEIsa0RBQUtBLENBQUNpQixRQUFRLENBQUNDLE1BQU0sQ0FBQztvQkFBRUMsS0FBSyxDQUFDO29CQUFNQyxLQUFLO2dCQUFLO1lBQ3JFQyxpQkFBaUI7UUFDbkI7UUFDQTtZQUNFTixPQUFPO1lBQ1BGLE1BQU1ELE9BQU9JLEdBQUcsQ0FBQyxJQUFNaEIsa0RBQUtBLENBQUNpQixRQUFRLENBQUNDLE1BQU0sQ0FBQztvQkFBRUMsS0FBSyxDQUFDO29CQUFNQyxLQUFLO2dCQUFLO1lBQ3JFQyxpQkFBaUI7UUFDbkI7S0FDRDtBQUNILEVBQUU7QUFFSyxTQUFTQztJQUNkLHFCQUFPLDhEQUFDdkIsZ0RBQUdBO1FBQUNHLFNBQVNBO1FBQVNXLE1BQU1BOzs7Ozs7QUFDdEM7S0FGZ0JTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9iYXJjaGFydC9wYWdlLmpzPzM3YTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgQmFyRWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbn0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcbmltcG9ydCB7IGZha2VyIH0gZnJvbSAnQGZha2VyLWpzL2Zha2VyJztcblxuQ2hhcnRKUy5yZWdpc3RlcihcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIEJhckVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmRcbik7XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xuICBwbHVnaW5zOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICB0ZXh0OiAnQ2hhcnQuanMgQmFyIENoYXJ0IC0gU3RhY2tlZCcsXG4gICAgfSxcbiAgfSxcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgc2NhbGVzOiB7XG4gICAgeDoge1xuICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHk6IHtcbiAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGxhYmVscyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J107XG5cbmV4cG9ydCBjb25zdCBkYXRhID0ge1xuICBsYWJlbHMsXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdEYXRhc2V0IDEnLFxuICAgICAgZGF0YTogbGFiZWxzLm1hcCgoKSA9PiBmYWtlci5kYXRhdHlwZS5udW1iZXIoeyBtaW46IC0xMDAwLCBtYXg6IDEwMDAgfSkpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdEYXRhc2V0IDInLFxuICAgICAgZGF0YTogbGFiZWxzLm1hcCgoKSA9PiBmYWtlci5kYXRhdHlwZS5udW1iZXIoeyBtaW46IC0xMDAwLCBtYXg6IDEwMDAgfSkpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDc1LCAxOTIsIDE5MiknLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdEYXRhc2V0IDMnLFxuICAgICAgZGF0YTogbGFiZWxzLm1hcCgoKSA9PiBmYWtlci5kYXRhdHlwZS5udW1iZXIoeyBtaW46IC0xMDAwLCBtYXg6IDEwMDAgfSkpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDUzLCAxNjIsIDIzNSknLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gPEJhciBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtkYXRhfSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJCYXIiLCJmYWtlciIsInJlZ2lzdGVyIiwib3B0aW9ucyIsInBsdWdpbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwicmVzcG9uc2l2ZSIsInNjYWxlcyIsIngiLCJzdGFja2VkIiwieSIsImxhYmVscyIsImRhdGEiLCJkYXRhc2V0cyIsImxhYmVsIiwibWFwIiwiZGF0YXR5cGUiLCJudW1iZXIiLCJtaW4iLCJtYXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/barchart/page.js\n"));

/***/ })

});