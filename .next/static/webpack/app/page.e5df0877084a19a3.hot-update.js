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

/***/ "(app-pages-browser)/./app/donutchart/page.js":
/*!********************************!*\
  !*** ./app/donutchart/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: function() { return /* binding */ data; },\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\n// const options = {\n//   plugins: {\n//       title: {\n//         display: true,\n//         text: \"Number of Visits\",\n//       },\n//       legend: {\n//         position: 'top',\n//         align: 'center'\n//       }\n//   },\n// };\nconst data = {\n    labels: [\n        \"Red\",\n        \"Blue\",\n        \"Yellow\"\n    ],\n    datasets: [\n        {\n            label: \"# of Votes\",\n            data: [\n                8,\n                20\n            ],\n            backgroundColor: [\n                \"rgba(255, 99, 132, 0.2)\",\n                \"rgba(54, 162, 235, 0.2)\"\n            ],\n            borderColor: [\n                \"rgba(255, 99, 132, 1)\",\n                \"rgba(54, 162, 235, 1)\"\n            ],\n            borderWidth: 1,\n            cutout: \"70%\",\n            borderRadius: 50,\n            spacing: 2\n        }\n    ]\n};\nfunction App() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Doughnut, {\n        data: data\n    }, void 0, false, {\n        fileName: \"/Users/jasminebabayara/Documents/Projects/Next/dashboard-demo-2/app/donutchart/page.js\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kb251dGNoYXJ0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDK0M7QUFDOUI7QUFFM0NFLDJDQUFPQSxDQUFDSyxRQUFRLENBQUNKLGdEQUFVQSxFQUFFQyw2Q0FBT0EsRUFBRUMsNENBQU1BO0FBQzVDLG9CQUFvQjtBQUNwQixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLHlCQUF5QjtBQUN6QixvQ0FBb0M7QUFDcEMsV0FBVztBQUNYLGtCQUFrQjtBQUNsQiwyQkFBMkI7QUFDM0IsMEJBQTBCO0FBQzFCLFVBQVU7QUFDVixPQUFPO0FBQ1AsS0FBSztBQUVFLE1BQU1HLE9BQU87SUFDbEJDLFFBQVE7UUFBQztRQUFPO1FBQVE7S0FBVztJQUNuQ0MsVUFBVTtRQUNSO1lBQ0VDLE9BQU87WUFDUEgsTUFBTTtnQkFBQztnQkFBRzthQUFHO1lBQ2JJLGlCQUFpQjtnQkFDZjtnQkFDQTthQUNEO1lBQ0RDLGFBQWE7Z0JBQ1g7Z0JBQ0E7YUFDRDtZQUNEQyxhQUFhO1lBQ2JDLFFBQVE7WUFDUkMsY0FBYztZQUNkQyxTQUFTO1FBQ1g7S0FDRDtBQUNILEVBQUU7QUFFYSxTQUFTQztJQUN0QixxQkFBTyw4REFBQ1oscURBQVFBO1FBQUNFLE1BQU1BOzs7Ozs7QUFDekI7S0FGd0JVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kb251dGNoYXJ0L3BhZ2UuanM/MzYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUywgQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5DaGFydEpTLnJlZ2lzdGVyKEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCk7XG4vLyBjb25zdCBvcHRpb25zID0ge1xuLy8gICBwbHVnaW5zOiB7XG4vLyAgICAgICB0aXRsZToge1xuLy8gICAgICAgICBkaXNwbGF5OiB0cnVlLFxuLy8gICAgICAgICB0ZXh0OiBcIk51bWJlciBvZiBWaXNpdHNcIixcbi8vICAgICAgIH0sXG4vLyAgICAgICBsZWdlbmQ6IHtcbi8vICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuLy8gICAgICAgICBhbGlnbjogJ2NlbnRlcidcbi8vICAgICAgIH1cbi8vICAgfSxcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFsnUmVkJywgJ0JsdWUnLCAnWWVsbG93JywgXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxuICAgICAgZGF0YTogWzgsIDIwXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxuICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLFxuICAgICAgXSxcbiAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxuICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcbiAgICAgIF0sXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIGN1dG91dDogJzcwJScsXG4gICAgICBib3JkZXJSYWRpdXM6IDUwLCBcbiAgICAgIHNwYWNpbmc6IDJcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gPERvdWdobnV0IGRhdGE9e2RhdGF9IC8+O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hhcnQiLCJDaGFydEpTIiwiQXJjRWxlbWVudCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJEb3VnaG51dCIsInJlZ2lzdGVyIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiY3V0b3V0IiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsIkFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/donutchart/page.js\n"));

/***/ })

});