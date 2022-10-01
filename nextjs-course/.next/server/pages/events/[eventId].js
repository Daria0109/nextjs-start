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

/***/ "./components/ui/error-alert.js":
/*!**************************************!*\
  !*** ./components/ui/error-alert.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-alert.module.css */ \"./components/ui/error-alert.module.css\");\n/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/components/ui/error-alert.js\";\n\n\nfunction ErrorAlert(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.alert,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorAlert);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL2Vycm9yLWFsZXJ0LmpzP2MxNWEiXSwibmFtZXMiOlsiRXJyb3JBbGVydCIsInByb3BzIiwiY2xhc3NlcyIsImFsZXJ0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixzQkFBTztBQUFLLGFBQVMsRUFBRUMsOERBQU8sQ0FBQ0MsS0FBeEI7QUFBQSxjQUFnQ0YsS0FBSyxDQUFDRztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFY0oseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL2Vycm9yLWFsZXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9lcnJvci1hbGVydC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXJyb3JBbGVydChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWxlcnR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQWxlcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/error-alert.js\n");

/***/ }),

/***/ "./components/ui/error-alert.module.css":
/*!**********************************************!*\
  !*** ./components/ui/error-alert.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"alert\": \"error-alert_alert__11Gsq\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL2Vycm9yLWFsZXJ0Lm1vZHVsZS5jc3M/OTBiMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvdWkvZXJyb3ItYWxlcnQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFsZXJ0XCI6IFwiZXJyb3ItYWxlcnRfYWxlcnRfXzExR3NxXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/error-alert.module.css\n");

/***/ }),

/***/ "./helpers/api-utils.js":
/*!******************************!*\
  !*** ./helpers/api-utils.js ***!
  \******************************/
/*! exports provided: fetcher, getAllEvents, getFeaturedEvents, getEventById, getFilteredEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetcher\", function() { return fetcher; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllEvents\", function() { return getAllEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedEvents\", function() { return getFeaturedEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventById\", function() { return getEventById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredEvents\", function() { return getFilteredEvents; });\n/* harmony import */ var _object_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-utils */ \"./helpers/object-utils.js\");\n\nconst fetcher = async url => {\n  const response = await fetch(url);\n  if (!response.ok) throw new Error();\n  return response.json();\n};\nconst getAllEvents = async () => {\n  const response = await fetch('https://nextjx-learning-default-rtdb.firebaseio.com/events.json');\n  const data = await response.json();\n  const transformedEvents = Object(_object_utils__WEBPACK_IMPORTED_MODULE_0__[\"transformDataObjectToArray\"])(data);\n  return transformedEvents;\n};\nconst getFeaturedEvents = async () => {\n  const events = await getAllEvents();\n  return events.filter(event => event.isFeatured);\n};\nconst getEventById = async id => {\n  const events = await getAllEvents();\n  return events.find(event => id === event.id);\n};\nconst getFilteredEvents = async dateFilter => {\n  const {\n    year,\n    month\n  } = dateFilter;\n  const events = await getAllEvents();\n  return events.filter(event => {\n    const eventDate = new Date(event.date);\n    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2FwaS11dGlscy5qcz8yYjdjIl0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJnZXRBbGxFdmVudHMiLCJkYXRhIiwidHJhbnNmb3JtZWRFdmVudHMiLCJ0cmFuc2Zvcm1EYXRhT2JqZWN0VG9BcnJheSIsImdldEZlYXR1cmVkRXZlbnRzIiwiZXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJpc0ZlYXR1cmVkIiwiZ2V0RXZlbnRCeUlkIiwiaWQiLCJmaW5kIiwiZ2V0RmlsdGVyZWRFdmVudHMiLCJkYXRlRmlsdGVyIiwieWVhciIsIm1vbnRoIiwiZXZlbnREYXRlIiwiRGF0ZSIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsT0FBTyxHQUFHLE1BQU9DLEdBQVAsSUFBZTtBQUNyQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFELENBQTVCO0FBQ0EsTUFBSSxDQUFDQyxRQUFRLENBQUNFLEVBQWQsRUFBa0IsTUFBTSxJQUFJQyxLQUFKLEVBQU47QUFDbEIsU0FBT0gsUUFBUSxDQUFDSSxJQUFULEVBQVA7QUFDQSxDQUpNO0FBTUEsTUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDdkMsUUFBTUwsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxpRUFBRCxDQUE1QjtBQUNBLFFBQU1LLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNJLElBQVQsRUFBbkI7QUFDQSxRQUFNRyxpQkFBaUIsR0FBR0MsZ0ZBQTBCLENBQUNGLElBQUQsQ0FBcEQ7QUFFQSxTQUFPQyxpQkFBUDtBQUNBLENBTk07QUFRQSxNQUFNRSxpQkFBaUIsR0FBRyxZQUFZO0FBQzVDLFFBQU1DLE1BQU0sR0FBRyxNQUFNTCxZQUFZLEVBQWpDO0FBQ0EsU0FBT0ssTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxVQUE3QixDQUFQO0FBQ0EsQ0FITTtBQUtBLE1BQU1DLFlBQVksR0FBRyxNQUFPQyxFQUFQLElBQWM7QUFDekMsUUFBTUwsTUFBTSxHQUFHLE1BQU1MLFlBQVksRUFBakM7QUFDQSxTQUFPSyxNQUFNLENBQUNNLElBQVAsQ0FBWUosS0FBSyxJQUFJRyxFQUFFLEtBQUtILEtBQUssQ0FBQ0csRUFBbEMsQ0FBUDtBQUNBLENBSE07QUFLQSxNQUFNRSxpQkFBaUIsR0FBRyxNQUFPQyxVQUFQLElBQXNCO0FBQ3RELFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQWtCRixVQUF4QjtBQUNBLFFBQU1SLE1BQU0sR0FBRyxNQUFNTCxZQUFZLEVBQWpDO0FBRUEsU0FBT0ssTUFBTSxDQUFDQyxNQUFQLENBQWVDLEtBQUQsSUFBVztBQUMvQixVQUFNUyxTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTVixLQUFLLENBQUNXLElBQWYsQ0FBbEI7QUFDQSxXQUFPRixTQUFTLENBQUNHLFdBQVYsT0FBNEJMLElBQTVCLElBQW9DRSxTQUFTLENBQUNJLFFBQVYsT0FBeUJMLEtBQUssR0FBRyxDQUE1RTtBQUNBLEdBSE0sQ0FBUDtBQUlBLENBUk0iLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS11dGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYW5zZm9ybURhdGFPYmplY3RUb0FycmF5IH0gZnJvbSAnLi9vYmplY3QtdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmwpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoKTtcblx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsbEV2ZW50cyA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9uZXh0angtbGVhcm5pbmctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2V2ZW50cy5qc29uJyk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdGNvbnN0IHRyYW5zZm9ybWVkRXZlbnRzID0gdHJhbnNmb3JtRGF0YU9iamVjdFRvQXJyYXkoZGF0YSk7XG5cblx0cmV0dXJuIHRyYW5zZm9ybWVkRXZlbnRzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RmVhdHVyZWRFdmVudHMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGV2ZW50cyA9IGF3YWl0IGdldEFsbEV2ZW50cygpO1xuXHRyZXR1cm4gZXZlbnRzLmZpbHRlcihldmVudCA9PiBldmVudC5pc0ZlYXR1cmVkKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEV2ZW50QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuXHRjb25zdCBldmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcblx0cmV0dXJuIGV2ZW50cy5maW5kKGV2ZW50ID0+IGlkID09PSBldmVudC5pZCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJlZEV2ZW50cyA9IGFzeW5jIChkYXRlRmlsdGVyKSA9PiB7XG5cdGNvbnN0IHsgeWVhciwgbW9udGggfSA9IGRhdGVGaWx0ZXI7XG5cdGNvbnN0IGV2ZW50cyA9IGF3YWl0IGdldEFsbEV2ZW50cygpO1xuXG5cdHJldHVybiBldmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuXHRcdHJldHVybiBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJiBldmVudERhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGggLSAxO1xuXHR9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/api-utils.js\n");

/***/ }),

/***/ "./helpers/object-utils.js":
/*!*********************************!*\
  !*** ./helpers/object-utils.js ***!
  \*********************************/
/*! exports provided: transformDataObjectToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformDataObjectToArray\", function() { return transformDataObjectToArray; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst transformDataObjectToArray = data => {\n  const transformedData = [];\n\n  for (const key in data) {\n    transformedData.push(_objectSpread({\n      id: key\n    }, data[key]));\n  }\n\n  return transformedData;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL29iamVjdC11dGlscy5qcz9kN2FjIl0sIm5hbWVzIjpbInRyYW5zZm9ybURhdGFPYmplY3RUb0FycmF5IiwiZGF0YSIsInRyYW5zZm9ybWVkRGF0YSIsImtleSIsInB1c2giLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSwwQkFBMEIsR0FBSUMsSUFBRCxJQUFVO0FBQ25ELFFBQU1DLGVBQWUsR0FBRyxFQUF4Qjs7QUFDQSxPQUFLLE1BQU1DLEdBQVgsSUFBa0JGLElBQWxCLEVBQXdCO0FBQ3ZCQyxtQkFBZSxDQUFDRSxJQUFoQjtBQUNDQyxRQUFFLEVBQUVGO0FBREwsT0FFSUYsSUFBSSxDQUFDRSxHQUFELENBRlI7QUFJQTs7QUFDRCxTQUFPRCxlQUFQO0FBQ0EsQ0FUTSIsImZpbGUiOiIuL2hlbHBlcnMvb2JqZWN0LXV0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRyYW5zZm9ybURhdGFPYmplY3RUb0FycmF5ID0gKGRhdGEpID0+IHtcblx0Y29uc3QgdHJhbnNmb3JtZWREYXRhID0gW107XG5cdGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcblx0XHR0cmFuc2Zvcm1lZERhdGEucHVzaCh7XG5cdFx0XHRpZDoga2V5LFxuXHRcdFx0Li4uZGF0YVtrZXldXG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHRyYW5zZm9ybWVkRGF0YTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/object-utils.js\n");

/***/ }),

/***/ "./pages/events/[eventId].js":
/*!***********************************!*\
  !*** ./pages/events/[eventId].js ***!
  \***********************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventDetailPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ \"./components/event-detail/event-summary.js\");\n/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ \"./components/event-detail/event-logistics.js\");\n/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/event-detail/event-content */ \"./components/event-detail/event-content.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n/* harmony import */ var _helpers_api_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/api-utils */ \"./helpers/api-utils.js\");\n\n\nvar _jsxFileName = \"/Users/apple/WebstormProjects/untitled/nextjs-course/pages/events/[eventId].js\";\n\n\n\n\n\nfunction EventDetailPage(props) {\n  const {\n    event\n  } = props;\n\n  if (!event) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Event not found!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: event === null || event === void 0 ? void 0 : event.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      date: event === null || event === void 0 ? void 0 : event.date,\n      address: event === null || event === void 0 ? void 0 : event.location,\n      image: event === null || event === void 0 ? void 0 : event.image,\n      imageAlt: event === null || event === void 0 ? void 0 : event.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: event === null || event === void 0 ? void 0 : event.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async context => {\n  const {\n    params\n  } = context;\n  const event = await Object(_helpers_api_utils__WEBPACK_IMPORTED_MODULE_5__[\"getEventById\"])(params.eventId);\n\n  if (!event) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      event\n    },\n    revalidate: 30\n  };\n};\nconst getStaticPaths = async () => {\n  const events = await Object(_helpers_api_utils__WEBPACK_IMPORTED_MODULE_5__[\"getFeaturedEvents\"])();\n  const pathsWithParams = events.map(event => ({\n    params: {\n      eventId: event.id\n    }\n  }));\n  return {\n    paths: pathsWithParams,\n    fallback: 'blocking'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzP2U1MGQiXSwibmFtZXMiOlsiRXZlbnREZXRhaWxQYWdlIiwicHJvcHMiLCJldmVudCIsInRpdGxlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInBhcmFtcyIsImdldEV2ZW50QnlJZCIsImV2ZW50SWQiLCJub3RGb3VuZCIsInJldmFsaWRhdGUiLCJnZXRTdGF0aWNQYXRocyIsImV2ZW50cyIsImdldEZlYXR1cmVkRXZlbnRzIiwicGF0aHNXaXRoUGFyYW1zIiwibWFwIiwiaWQiLCJwYXRocyIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxlQUFULENBQTBCQyxLQUExQixFQUFpQztBQUM1QyxRQUFNO0FBQUVDO0FBQUYsTUFBWUQsS0FBbEI7O0FBRUEsTUFBSSxDQUFDQyxLQUFMLEVBQVk7QUFDUix3QkFDSTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSDs7QUFFRCxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDhFQUFEO0FBQWMsV0FBSyxFQUFFQSxLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsZ0ZBQUQ7QUFDSSxVQUFJLEVBQUVELEtBQUYsYUFBRUEsS0FBRix1QkFBRUEsS0FBSyxDQUFFRSxJQURqQjtBQUVJLGFBQU8sRUFBRUYsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVHLFFBRnBCO0FBR0ksV0FBSyxFQUFFSCxLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRUksS0FIbEI7QUFJSSxjQUFRLEVBQUVKLEtBQUYsYUFBRUEsS0FBRix1QkFBRUEsS0FBSyxDQUFFQztBQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFRSSxxRUFBQyw4RUFBRDtBQUFBLDZCQUNJO0FBQUEsa0JBQUlELEtBQUosYUFBSUEsS0FBSix1QkFBSUEsS0FBSyxDQUFFSztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQSxrQkFESjtBQWNIO0FBRU0sTUFBTUMsY0FBYyxHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDN0MsUUFBTTtBQUFFQztBQUFGLE1BQWFELE9BQW5CO0FBQ0EsUUFBTVAsS0FBSyxHQUFHLE1BQU1TLHVFQUFZLENBQUNELE1BQU0sQ0FBQ0UsT0FBUixDQUFoQzs7QUFFQSxNQUFJLENBQUNWLEtBQUwsRUFBWTtBQUNSLFdBQU87QUFBRVcsY0FBUSxFQUFFO0FBQVosS0FBUDtBQUNIOztBQUVELFNBQU87QUFBRVosU0FBSyxFQUFFO0FBQUVDO0FBQUYsS0FBVDtBQUFvQlksY0FBVSxFQUFFO0FBQWhDLEdBQVA7QUFDSCxDQVRNO0FBV0EsTUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDdEMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLDRFQUFpQixFQUF0QztBQUNBLFFBQU1DLGVBQWUsR0FBR0YsTUFBTSxDQUFDRyxHQUFQLENBQVdqQixLQUFLLEtBQUs7QUFBRVEsVUFBTSxFQUFFO0FBQUVFLGFBQU8sRUFBRVYsS0FBSyxDQUFDa0I7QUFBakI7QUFBVixHQUFMLENBQWhCLENBQXhCO0FBRUEsU0FBTztBQUNIQyxTQUFLLEVBQUVILGVBREo7QUFFSEksWUFBUSxFQUFFO0FBRlAsR0FBUDtBQUlILENBUk0iLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5JztcbmltcG9ydCBFdmVudExvZ2lzdGljcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MnO1xuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1jb250ZW50JztcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvZXJyb3ItYWxlcnQnO1xuaW1wb3J0IHsgZ2V0RmVhdHVyZWRFdmVudHMsIGdldEV2ZW50QnlJZCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBpLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnREZXRhaWxQYWdlIChwcm9wcykge1xuICAgIGNvbnN0IHsgZXZlbnQgfSA9IHByb3BzO1xuXG4gICAgaWYgKCFldmVudCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5FdmVudCBub3QgZm91bmQhPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEV2ZW50U3VtbWFyeSB0aXRsZT17ZXZlbnQ/LnRpdGxlfSAvPlxuICAgICAgICAgICAgPEV2ZW50TG9naXN0aWNzXG4gICAgICAgICAgICAgICAgZGF0ZT17ZXZlbnQ/LmRhdGV9XG4gICAgICAgICAgICAgICAgYWRkcmVzcz17ZXZlbnQ/LmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIGltYWdlPXtldmVudD8uaW1hZ2V9XG4gICAgICAgICAgICAgICAgaW1hZ2VBbHQ9e2V2ZW50Py50aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXZlbnRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxwPntldmVudD8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9FdmVudENvbnRlbnQ+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcbiAgICBjb25zdCBldmVudCA9IGF3YWl0IGdldEV2ZW50QnlJZChwYXJhbXMuZXZlbnRJZCk7XG5cbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9wczogeyBldmVudCB9LCByZXZhbGlkYXRlOiAzMCB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgZ2V0RmVhdHVyZWRFdmVudHMoKTtcbiAgICBjb25zdCBwYXRoc1dpdGhQYXJhbXMgPSBldmVudHMubWFwKGV2ZW50ID0+ICh7IHBhcmFtczogeyBldmVudElkOiBldmVudC5pZCB9IH0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBwYXRoc1dpdGhQYXJhbXMsXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[eventId].js\n");

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