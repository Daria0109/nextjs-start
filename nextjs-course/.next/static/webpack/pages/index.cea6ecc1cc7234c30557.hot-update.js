webpackHotUpdate_N_E("pages/index",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-item.module.css */ \"./components/events/event-item.module.css\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/components/events/event-item.js\";\n\n\nfunction EventItem(props) {\n  var id = props.id,\n      title = props.title,\n      location = props.location,\n      date = props.date,\n      image = props.image;\n  var humanReadableDate = new Date(date).toLocaleDateString('en-US', {\n    day: 'numeric',\n    month: 'long',\n    year: 'numeric'\n  });\n  var exploreLink = \"/events/\".concat(id);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: '/' + image,\n      alt: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.date,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n            children: humanReadableDate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.address,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n            children: location\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: exploreLink,\n          children: \"Explore Event\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, this);\n}\n_c = EventItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"EventItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcz85YzZmIl0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsInByb3BzIiwiaWQiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZGF0ZSIsImltYWdlIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZXhwbG9yZUxpbmsiLCJjbGFzc2VzIiwiaXRlbSIsImNvbnRlbnQiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFNBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUEsTUFDakNDLEVBRGlDLEdBQ0lELEtBREosQ0FDakNDLEVBRGlDO0FBQUEsTUFDN0JDLEtBRDZCLEdBQ0lGLEtBREosQ0FDN0JFLEtBRDZCO0FBQUEsTUFDdEJDLFFBRHNCLEdBQ0lILEtBREosQ0FDdEJHLFFBRHNCO0FBQUEsTUFDWkMsSUFEWSxHQUNJSixLQURKLENBQ1pJLElBRFk7QUFBQSxNQUNOQyxLQURNLEdBQ0lMLEtBREosQ0FDTkssS0FETTtBQUd6QyxNQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyxJQUFKLENBQVNILElBQVQsRUFBZUksa0JBQWYsQ0FBa0MsT0FBbEMsRUFBMkM7QUFDcEVDLE9BQUcsRUFBRSxTQUQrRDtBQUVwRUMsU0FBSyxFQUFFLE1BRjZEO0FBR3BFQyxRQUFJLEVBQUU7QUFIOEQsR0FBM0MsQ0FBMUI7QUFNQSxNQUFNQyxXQUFXLHFCQUFjWCxFQUFkLENBQWpCO0FBRUEsc0JBQ0M7QUFBSSxhQUFTLEVBQUVZLDZEQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0M7QUFBSyxTQUFHLEVBQUUsTUFBTVQsS0FBaEI7QUFBdUIsU0FBRyxFQUFFSDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFLLGVBQVMsRUFBRVcsNkRBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDQztBQUFBLGdDQUNDO0FBQUEsb0JBQUtiO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQUssbUJBQVMsRUFBRVcsNkRBQU8sQ0FBQ1QsSUFBeEI7QUFBQSxpQ0FDQztBQUFBLHNCQUFPRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELGVBS0M7QUFBSyxtQkFBUyxFQUFFTyw2REFBTyxDQUFDRyxPQUF4QjtBQUFBLGlDQUNDO0FBQUEsc0JBQVViO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFVQztBQUFBLCtCQUNDLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFUyxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbUJBO0tBOUJ1QmIsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ldmVudC1pdGVtLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudEl0ZW0gKHByb3BzKSB7XG5cdGNvbnN0IHsgaWQsIHRpdGxlLCBsb2NhdGlvbiwgZGF0ZSwgaW1hZ2UgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcblx0XHRkYXk6ICdudW1lcmljJyxcblx0XHRtb250aDogJ2xvbmcnLFxuXHRcdHllYXI6ICdudW1lcmljJ1xuXHR9KVxuXG5cdGNvbnN0IGV4cGxvcmVMaW5rID0gYC9ldmVudHMvJHtpZH1gO1xuXG5cdHJldHVybiAoXG5cdFx0PGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cblx0XHRcdDxpbWcgc3JjPXsnLycgKyBpbWFnZX0gYWx0PXt0aXRsZX0gLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMj57dGl0bGV9PC9oMj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT5cblx0XHRcdFx0XHRcdDx0aW1lPntodW1hblJlYWRhYmxlRGF0ZX08L3RpbWU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+XG5cdFx0XHRcdFx0XHQ8YWRkcmVzcz57bG9jYXRpb259PC9hZGRyZXNzPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8TGluayBocmVmPXtleHBsb3JlTGlua30+RXhwbG9yZSBFdmVudDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2xpPlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n");

/***/ })

})