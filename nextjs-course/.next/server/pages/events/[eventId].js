module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/events/[eventId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/event-detail/event-content.js":
/*!**************************************************!*\
  !*** ./components/event-detail/event-content.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-content.module.css */ \"./components/event-detail/event-content.module.css\");\n/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_content_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/components/event-detail/event-content.js\";\n\n\nfunction EventContent(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1jb250ZW50LmpzPzlhOTIiXSwibmFtZXMiOlsiRXZlbnRDb250ZW50IiwicHJvcHMiLCJjbGFzc2VzIiwiY29udGVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0Isc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLGdFQUFPLENBQUNDLE9BQTVCO0FBQUEsY0FDR0YsS0FBSyxDQUFDRztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjSiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LWNvbnRlbnQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIEV2ZW50Q29udGVudChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/event-detail/event-content.js\n");

/***/ }),

/***/ "./components/event-detail/event-content.module.css":
/*!**********************************************************!*\
  !*** ./components/event-detail/event-content.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"event-content_content__2VRI6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3M/ZjE1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRcIjogXCJldmVudC1jb250ZW50X2NvbnRlbnRfXzJWUkk2XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/event-detail/event-content.module.css\n");

/***/ }),

/***/ "./components/event-detail/event-logistics.js":
/*!****************************************************!*\
  !*** ./components/event-detail/event-logistics.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _logistics_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logistics-item */ \"./components/event-detail/logistics-item.js\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-logistics.module.css */ \"./components/event-detail/event-logistics.module.css\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/components/event-detail/event-logistics.js\";\n\n\n\n\n\nfunction EventLogistics(props) {\n  const {\n    date,\n    address,\n    image,\n    imageAlt\n  } = props;\n  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {\n    day: 'numeric',\n    month: 'long',\n    year: 'numeric'\n  });\n  const addressText = address === null || address === void 0 ? void 0 : address.replace(', ', '\\n');\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logistics,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: `/${image}`,\n        alt: imageAlt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_logistics_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        icon: _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n          children: humanReadableDate\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_logistics_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        icon: _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n          children: addressText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventLogistics);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MuanM/NDc3NSJdLCJuYW1lcyI6WyJFdmVudExvZ2lzdGljcyIsInByb3BzIiwiZGF0ZSIsImFkZHJlc3MiLCJpbWFnZSIsImltYWdlQWx0IiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiYWRkcmVzc1RleHQiLCJyZXBsYWNlIiwiY2xhc3NlcyIsImxvZ2lzdGljcyIsImxpc3QiLCJEYXRlSWNvbiIsIkFkZHJlc3NJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0IsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFdBQVI7QUFBaUJDLFNBQWpCO0FBQXdCQztBQUF4QixNQUFxQ0osS0FBM0M7QUFFQSxRQUFNSyxpQkFBaUIsR0FBRyxJQUFJQyxJQUFKLENBQVNMLElBQVQsRUFBZU0sa0JBQWYsQ0FBa0MsT0FBbEMsRUFBMkM7QUFDbkVDLE9BQUcsRUFBRSxTQUQ4RDtBQUVuRUMsU0FBSyxFQUFFLE1BRjREO0FBR25FQyxRQUFJLEVBQUU7QUFINkQsR0FBM0MsQ0FBMUI7QUFLQSxRQUFNQyxXQUFXLEdBQUdULE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFVSxPQUFULENBQWlCLElBQWpCLEVBQXVCLElBQXZCLENBQXBCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLGtFQUFPLENBQUNDLFNBQTVCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELGtFQUFPLENBQUNWLEtBQXhCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUcsSUFBR0EsS0FBTSxFQUFwQjtBQUF1QixXQUFHLEVBQUVDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFJLGVBQVMsRUFBRVMsa0VBQU8sQ0FBQ0UsSUFBdkI7QUFBQSw4QkFDRSxxRUFBQyx1REFBRDtBQUFlLFlBQUksRUFBRUMsd0RBQXJCO0FBQUEsK0JBQ0U7QUFBQSxvQkFBT1g7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUscUVBQUMsdURBQUQ7QUFBZSxZQUFJLEVBQUVZLDJEQUFyQjtBQUFBLCtCQUNFO0FBQUEsb0JBQVVOO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztBQUVjWiw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWxvZ2lzdGljcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRyZXNzSWNvbiBmcm9tICcuLi9pY29ucy9hZGRyZXNzLWljb24nO1xuaW1wb3J0IERhdGVJY29uIGZyb20gJy4uL2ljb25zL2RhdGUtaWNvbic7XG5pbXBvcnQgTG9naXN0aWNzSXRlbSBmcm9tICcuL2xvZ2lzdGljcy1pdGVtJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtbG9naXN0aWNzLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBFdmVudExvZ2lzdGljcyhwcm9wcykge1xuICBjb25zdCB7IGRhdGUsIGFkZHJlc3MsIGltYWdlLCBpbWFnZUFsdCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIGRheTogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICB9KTtcbiAgY29uc3QgYWRkcmVzc1RleHQgPSBhZGRyZXNzPy5yZXBsYWNlKCcsICcsICdcXG4nKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpc3RpY3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICA8aW1nIHNyYz17YC8ke2ltYWdlfWB9IGFsdD17aW1hZ2VBbHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0RhdGVJY29ufT5cbiAgICAgICAgICA8dGltZT57aHVtYW5SZWFkYWJsZURhdGV9PC90aW1lPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0FkZHJlc3NJY29ufT5cbiAgICAgICAgICA8YWRkcmVzcz57YWRkcmVzc1RleHR9PC9hZGRyZXNzPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMb2dpc3RpY3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/event-detail/event-logistics.js\n");

/***/ }),

/***/ "./components/event-detail/event-logistics.module.css":
/*!************************************************************!*\
  !*** ./components/event-detail/event-logistics.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"logistics\": \"event-logistics_logistics__3HiYD\",\n\t\"image\": \"event-logistics_image__1ED6X\",\n\t\"list\": \"event-logistics_list__59rDU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MubW9kdWxlLmNzcz84MjlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9naXN0aWNzXCI6IFwiZXZlbnQtbG9naXN0aWNzX2xvZ2lzdGljc19fM0hpWURcIixcblx0XCJpbWFnZVwiOiBcImV2ZW50LWxvZ2lzdGljc19pbWFnZV9fMUVENlhcIixcblx0XCJsaXN0XCI6IFwiZXZlbnQtbG9naXN0aWNzX2xpc3RfXzU5ckRVXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/event-detail/event-logistics.module.css\n");

/***/ }),

/***/ "./components/event-detail/event-summary.js":
/*!**************************************************!*\
  !*** ./components/event-detail/event-summary.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-summary.module.css */ \"./components/event-detail/event-summary.module.css\");\n/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/components/event-detail/event-summary.js\";\n\n\nfunction EventSummary(props) {\n  const {\n    title\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summary,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventSummary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5LmpzPzgzNDciXSwibmFtZXMiOlsiRXZlbnRTdW1tYXJ5IiwicHJvcHMiLCJ0aXRsZSIsImNsYXNzZXMiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsUUFBTTtBQUFFQztBQUFGLE1BQVlELEtBQWxCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVFLGdFQUFPLENBQUNDLE9BQTVCO0FBQUEsMkJBQ0U7QUFBQSxnQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNGLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtc3VtbWFyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtc3VtbWFyeS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRTdW1tYXJ5KHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdW1tYXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/event-detail/event-summary.js\n");

/***/ }),

/***/ "./components/event-detail/event-summary.module.css":
/*!**********************************************************!*\
  !*** ./components/event-detail/event-summary.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"summary\": \"event-summary_summary__3PCze\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5Lm1vZHVsZS5jc3M/ZjdkMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlcIjogXCJldmVudC1zdW1tYXJ5X3N1bW1hcnlfXzNQQ3plXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/event-detail/event-summary.module.css\n");

/***/ }),

/***/ "./components/event-detail/logistics-item.js":
/*!***************************************************!*\
  !*** ./components/event-detail/logistics-item.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logistics-item.module.css */ \"./components/event-detail/logistics-item.module.css\");\n/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/components/event-detail/logistics-item.js\";\n\n\nfunction LogisticsItem(props) {\n  const {\n    icon: Icon\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogisticsItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9sb2dpc3RpY3MtaXRlbS5qcz9mMWEwIl0sIm5hbWVzIjpbIkxvZ2lzdGljc0l0ZW0iLCJwcm9wcyIsImljb24iLCJJY29uIiwiY2xhc3NlcyIsIml0ZW0iLCJjb250ZW50IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QixRQUFNO0FBQUVDLFFBQUksRUFBRUM7QUFBUixNQUFpQkYsS0FBdkI7QUFFQSxzQkFDRTtBQUFJLGFBQVMsRUFBRUcsaUVBQU8sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDRTtBQUFNLGVBQVMsRUFBRUQsaUVBQU8sQ0FBQ0YsSUFBekI7QUFBQSw2QkFDRSxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFNLGVBQVMsRUFBRUUsaUVBQU8sQ0FBQ0UsT0FBekI7QUFBQSxnQkFBbUNMLEtBQUssQ0FBQ007QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBRWNQLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvbG9naXN0aWNzLWl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBMb2dpc3RpY3NJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgaWNvbjogSWNvbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259PlxuICAgICAgICA8SWNvbiAvPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naXN0aWNzSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/event-detail/logistics-item.js\n");

/***/ }),

/***/ "./components/event-detail/logistics-item.module.css":
/*!***********************************************************!*\
  !*** ./components/event-detail/logistics-item.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"logistics-item_item__1FERm\",\n\t\"icon\": \"logistics-item_icon__1DIos\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9sb2dpc3RpY3MtaXRlbS5tb2R1bGUuY3NzPzFhOWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwibG9naXN0aWNzLWl0ZW1faXRlbV9fMUZFUm1cIixcblx0XCJpY29uXCI6IFwibG9naXN0aWNzLWl0ZW1faWNvbl9fMURJb3NcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/event-detail/logistics-item.module.css\n");

/***/ }),

/***/ "./components/icons/address-icon.js":
/*!******************************************!*\
  !*** ./components/icons/address-icon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/components/icons/address-icon.js\";\n\nfunction AddressIcon() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    stroke: \"currentColor\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M15 11a3 3 0 11-6 0 3 3 0 016 0z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddressIcon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2FkZHJlc3MtaWNvbi5qcz84ZWYwIl0sIm5hbWVzIjpbIkFkZHJlc3NJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCLHNCQUNFO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFVBQU0sRUFBQyxjQUpUO0FBQUEsNEJBTUU7QUFDRSxtQkFBYSxFQUFDLE9BRGhCO0FBRUUsb0JBQWMsRUFBQyxPQUZqQjtBQUdFLGlCQUFXLEVBQUUsQ0FIZjtBQUlFLE9BQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVlFO0FBQ0UsbUJBQWEsRUFBQyxPQURoQjtBQUVFLG9CQUFjLEVBQUMsT0FGakI7QUFHRSxpQkFBVyxFQUFFLENBSGY7QUFJRSxPQUFDLEVBQUM7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0FBRWNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pY29ucy9hZGRyZXNzLWljb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBBZGRyZXNzSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICBmaWxsPSdub25lJ1xuICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9J00xNy42NTcgMTYuNjU3TDEzLjQxNCAyMC45YTEuOTk4IDEuOTk4IDAgMDEtMi44MjcgMGwtNC4yNDQtNC4yNDNhOCA4IDAgMTExMS4zMTQgMHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9J00xNSAxMWEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkcmVzc0ljb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/icons/address-icon.js\n");

/***/ }),

/***/ "./components/icons/date-icon.js":
/*!***************************************!*\
  !*** ./components/icons/date-icon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/components/icons/date-icon.js\";\n\nfunction DateIcon() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    stroke: \"currentColor\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateIcon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2RhdGUtaWNvbi5qcz84MDZiIl0sIm5hbWVzIjpbIkRhdGVJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLHNCQUNFO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFVBQU0sRUFBQyxjQUpUO0FBQUEsMkJBTUU7QUFDRSxtQkFBYSxFQUFDLE9BRGhCO0FBRUUsb0JBQWMsRUFBQyxPQUZqQjtBQUdFLGlCQUFXLEVBQUUsQ0FIZjtBQUlFLE9BQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7QUFFY0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2ljb25zL2RhdGUtaWNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIERhdGVJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgIGZpbGw9J25vbmUnXG4gICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgZD0nTTggN1YzbTggNFYzbS05IDhoMTBNNSAyMWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlSWNvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/icons/date-icon.js\n");

/***/ }),

/***/ "./dummy-data.js":
/*!***********************!*\
  !*** ./dummy-data.js ***!
  \***********************/
/*! exports provided: getFeaturedEvents, getAllEvents, getFilteredEvents, getEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedEvents\", function() { return getFeaturedEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllEvents\", function() { return getAllEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredEvents\", function() { return getFilteredEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventById\", function() { return getEventById; });\nconst DUMMY_EVENTS = [{\n  id: 'e1',\n  title: 'Programming for everyone',\n  description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',\n  location: 'Somestreet 25, 12345 San Somewhereo',\n  date: '2021-05-12',\n  image: 'images/coding-event.jpg',\n  isFeatured: false\n}, {\n  id: 'e2',\n  title: 'Networking for introverts',\n  description: \"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!\",\n  location: 'New Wall Street 5, 98765 New Work',\n  date: '2021-05-30',\n  image: 'images/introvert-event.jpg',\n  isFeatured: true\n}, {\n  id: 'e3',\n  title: 'Networking for extroverts',\n  description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',\n  location: 'My Street 12, 10115 Broke City',\n  date: '2022-04-10',\n  image: 'images/extrovert-event.jpg',\n  isFeatured: true\n}];\nfunction getFeaturedEvents() {\n  return DUMMY_EVENTS.filter(event => event.isFeatured);\n}\nfunction getAllEvents() {\n  return DUMMY_EVENTS;\n}\nfunction getFilteredEvents(dateFilter) {\n  const {\n    year,\n    month\n  } = dateFilter;\n  return DUMMY_EVENTS.filter(event => {\n    const eventDate = new Date(event.date);\n    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n  });\n}\nfunction getEventById(id) {\n  return DUMMY_EVENTS.find(event => event.id === id);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kdW1teS1kYXRhLmpzPzQ3NmIiXSwibmFtZXMiOlsiRFVNTVlfRVZFTlRTIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJkYXRlIiwiaW1hZ2UiLCJpc0ZlYXR1cmVkIiwiZ2V0RmVhdHVyZWRFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImdldEFsbEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwiZGF0ZUZpbHRlciIsInllYXIiLCJtb250aCIsImV2ZW50RGF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RXZlbnRCeUlkIiwiZmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1BLFlBQVksR0FBRyxDQUNqQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsMEJBRlg7QUFHSUMsYUFBVyxFQUNQLDRKQUpSO0FBS0lDLFVBQVEsRUFBRSxxQ0FMZDtBQU1JQyxNQUFJLEVBQUUsWUFOVjtBQU9JQyxPQUFLLEVBQUUseUJBUFg7QUFRSUMsWUFBVSxFQUFFO0FBUmhCLENBRGlCLEVBV2pCO0FBQ0lOLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSwyQkFGWDtBQUdJQyxhQUFXLEVBQ1AsMElBSlI7QUFLSUMsVUFBUSxFQUFFLG1DQUxkO0FBTUlDLE1BQUksRUFBRSxZQU5WO0FBT0lDLE9BQUssRUFBRSw0QkFQWDtBQVFJQyxZQUFVLEVBQUU7QUFSaEIsQ0FYaUIsRUFxQmpCO0FBQ0lOLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSwyQkFGWDtBQUdJQyxhQUFXLEVBQ1AsNklBSlI7QUFLSUMsVUFBUSxFQUFFLGdDQUxkO0FBTUlDLE1BQUksRUFBRSxZQU5WO0FBT0lDLE9BQUssRUFBRSw0QkFQWDtBQVFJQyxZQUFVLEVBQUU7QUFSaEIsQ0FyQmlCLENBQXJCO0FBaUNPLFNBQVNDLGlCQUFULEdBQTZCO0FBQ2hDLFNBQU9SLFlBQVksQ0FBQ1MsTUFBYixDQUFxQkMsS0FBRCxJQUFXQSxLQUFLLENBQUNILFVBQXJDLENBQVA7QUFDSDtBQUVNLFNBQVNJLFlBQVQsR0FBd0I7QUFDM0IsU0FBT1gsWUFBUDtBQUNIO0FBRU0sU0FBU1ksaUJBQVQsQ0FBMkJDLFVBQTNCLEVBQXVDO0FBQzFDLFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQWtCRixVQUF4QjtBQUVBLFNBQU9iLFlBQVksQ0FBQ1MsTUFBYixDQUFxQkMsS0FBRCxJQUFXO0FBQ2xDLFVBQU1NLFNBQVMsR0FBRyxJQUFJQyxJQUFKLENBQVNQLEtBQUssQ0FBQ0wsSUFBZixDQUFsQjtBQUNBLFdBQU9XLFNBQVMsQ0FBQ0UsV0FBVixPQUE0QkosSUFBNUIsSUFBb0NFLFNBQVMsQ0FBQ0csUUFBVixPQUF5QkosS0FBSyxHQUFHLENBQTVFO0FBQ0gsR0FITSxDQUFQO0FBSUg7QUFFTSxTQUFTSyxZQUFULENBQXNCbkIsRUFBdEIsRUFBMEI7QUFDN0IsU0FBT0QsWUFBWSxDQUFDcUIsSUFBYixDQUFtQlgsS0FBRCxJQUFXQSxLQUFLLENBQUNULEVBQU4sS0FBYUEsRUFBMUMsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vZHVtbXktZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERVTU1ZX0VWRU5UUyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAnZTEnLFxuICAgICAgICB0aXRsZTogJ1Byb2dyYW1taW5nIGZvciBldmVyeW9uZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0V2ZXJ5b25lIGNhbiBsZWFybiB0byBjb2RlISBZZXMsIGV2ZXJ5b25lISBJbiB0aGlzIGxpdmUgZXZlbnQsIHdlIGFyZSBnb2luZyB0byBnbyB0aHJvdWdoIGFsbCB0aGUga2V5IGJhc2ljcyBhbmQgZ2V0IHlvdSBzdGFydGVkIHdpdGggcHJvZ3JhbW1pbmcgYXMgd2VsbC4nLFxuICAgICAgICBsb2NhdGlvbjogJ1NvbWVzdHJlZXQgMjUsIDEyMzQ1IFNhbiBTb21ld2hlcmVvJyxcbiAgICAgICAgZGF0ZTogJzIwMjEtMDUtMTInLFxuICAgICAgICBpbWFnZTogJ2ltYWdlcy9jb2RpbmctZXZlbnQuanBnJyxcbiAgICAgICAgaXNGZWF0dXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnZTInLFxuICAgICAgICB0aXRsZTogJ05ldHdvcmtpbmcgZm9yIGludHJvdmVydHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiV2Uga25vdzogTmV0d29ya2luZyBpcyBubyBmdW4gaWYgeW91IGFyZSBhbiBpbnRyb3ZlcnQgcGVyc29uLiBUaGF0J3Mgd2h5IHdlIGNhbWUgdXAgd2l0aCB0aGlzIGV2ZW50IC0gaXQnbGwgYmUgc28gbXVjaCBlYXNpZXIuIFByb21pc2VkIVwiLFxuICAgICAgICBsb2NhdGlvbjogJ05ldyBXYWxsIFN0cmVldCA1LCA5ODc2NSBOZXcgV29yaycsXG4gICAgICAgIGRhdGU6ICcyMDIxLTA1LTMwJyxcbiAgICAgICAgaW1hZ2U6ICdpbWFnZXMvaW50cm92ZXJ0LWV2ZW50LmpwZycsXG4gICAgICAgIGlzRmVhdHVyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnZTMnLFxuICAgICAgICB0aXRsZTogJ05ldHdvcmtpbmcgZm9yIGV4dHJvdmVydHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdZb3UgcHJvYmFibHkgbmVlZCBubyBoZWxwIHdpdGggbmV0d29ya2luZyBpbiBnZW5lcmFsLiBCdXQgZm9jdXNpbmcgeW91ciBlbmVyZ3kgY29ycmVjdGx5IC0gdGhhdCBpcyBzb21ldGhpbmcgd2hlcmUgbW9zdCBwZW9wbGUgY2FuIGltcHJvdmUuJyxcbiAgICAgICAgbG9jYXRpb246ICdNeSBTdHJlZXQgMTIsIDEwMTE1IEJyb2tlIENpdHknLFxuICAgICAgICBkYXRlOiAnMjAyMi0wNC0xMCcsXG4gICAgICAgIGltYWdlOiAnaW1hZ2VzL2V4dHJvdmVydC1ldmVudC5qcGcnLFxuICAgICAgICBpc0ZlYXR1cmVkOiB0cnVlLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmVhdHVyZWRFdmVudHMoKSB7XG4gICAgcmV0dXJuIERVTU1ZX0VWRU5UUy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5pc0ZlYXR1cmVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEV2ZW50cygpIHtcbiAgICByZXR1cm4gRFVNTVlfRVZFTlRTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyZWRFdmVudHMoZGF0ZUZpbHRlcikge1xuICAgIGNvbnN0IHsgeWVhciwgbW9udGggfSA9IGRhdGVGaWx0ZXI7XG5cbiAgICByZXR1cm4gRFVNTVlfRVZFTlRTLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQuZGF0ZSk7XG4gICAgICAgIHJldHVybiBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJiBldmVudERhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGggLSAxO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIERVTU1ZX0VWRU5UUy5maW5kKChldmVudCkgPT4gZXZlbnQuaWQgPT09IGlkKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dummy-data.js\n");

/***/ }),

/***/ "./pages/events/[eventId].js":
/*!***********************************!*\
  !*** ./pages/events/[eventId].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventDetailPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ \"./components/event-detail/event-summary.js\");\n/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ \"./components/event-detail/event-logistics.js\");\n/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/event-detail/event-content */ \"./components/event-detail/event-content.js\");\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/pages/events/[eventId].js\";\n\n\n\n\n\n\nfunction EventDetailPage() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const id = router.query.eventId;\n  const event = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_6__[\"getEventById\"])(id);\n\n  if (!event) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Event not found!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: event === null || event === void 0 ? void 0 : event.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      date: event === null || event === void 0 ? void 0 : event.date,\n      address: event === null || event === void 0 ? void 0 : event.location,\n      image: event === null || event === void 0 ? void 0 : event.image,\n      imageAlt: event === null || event === void 0 ? void 0 : event.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: event === null || event === void 0 ? void 0 : event.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzP2U1MGQiXSwibmFtZXMiOlsiRXZlbnREZXRhaWxQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImV2ZW50SWQiLCJldmVudCIsImdldEV2ZW50QnlJZCIsInRpdGxlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsZUFBVCxHQUE0QjtBQUN2QyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsT0FBeEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLGdFQUFZLENBQUNKLEVBQUQsQ0FBMUI7O0FBRUEsTUFBSSxDQUFDRyxLQUFMLEVBQVk7QUFDUix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw4RUFBRDtBQUFjLFdBQUssRUFBRUEsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLGdGQUFEO0FBQ0ksVUFBSSxFQUFFRixLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRUcsSUFEakI7QUFFSSxhQUFPLEVBQUVILEtBQUYsYUFBRUEsS0FBRix1QkFBRUEsS0FBSyxDQUFFSSxRQUZwQjtBQUdJLFdBQUssRUFBRUosS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVLLEtBSGxCO0FBSUksY0FBUSxFQUFFTCxLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRUU7QUFKckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBUUkscUVBQUMsOEVBQUQ7QUFBQSw2QkFDSTtBQUFBLGtCQUFJRixLQUFKLGFBQUlBLEtBQUosdUJBQUlBLEtBQUssQ0FBRU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUEsa0JBREo7QUFjSCIsImZpbGUiOiIuL3BhZ2VzL2V2ZW50cy9bZXZlbnRJZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5JztcbmltcG9ydCBFdmVudExvZ2lzdGljcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MnO1xuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1jb250ZW50JztcbmltcG9ydCB7IGdldEV2ZW50QnlJZCB9IGZyb20gJy4uLy4uL2R1bW15LWRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudERldGFpbFBhZ2UgKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmV2ZW50SWQ7XG4gICAgY29uc3QgZXZlbnQgPSBnZXRFdmVudEJ5SWQoaWQpO1xuXG4gICAgaWYgKCFldmVudCkge1xuICAgICAgICByZXR1cm4gPGRpdj5FdmVudCBub3QgZm91bmQhPC9kaXY+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxFdmVudFN1bW1hcnkgdGl0bGU9e2V2ZW50Py50aXRsZX0gLz5cbiAgICAgICAgICAgIDxFdmVudExvZ2lzdGljc1xuICAgICAgICAgICAgICAgIGRhdGU9e2V2ZW50Py5kYXRlfVxuICAgICAgICAgICAgICAgIGFkZHJlc3M9e2V2ZW50Py5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICBpbWFnZT17ZXZlbnQ/LmltYWdlfVxuICAgICAgICAgICAgICAgIGltYWdlQWx0PXtldmVudD8udGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEV2ZW50Q29udGVudD5cbiAgICAgICAgICAgICAgICA8cD57ZXZlbnQ/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvRXZlbnRDb250ZW50PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[eventId].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });