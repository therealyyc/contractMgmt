webpackHotUpdate("main",{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./pages/home/service/reducer.js":
/*!***************************************!*\
  !*** ./pages/home/service/reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./pages/home/service/actions.js\");\n\n\nvar initialState = {\n  contracts: [],\n  origin_contracts: [],\n  searchVal: '',\n  table_loading: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload,\n      name = action.name;\n\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_SET_CONTRACTS\"]:\n      return Object.assign({}, state, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, payload));\n\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_SET_ORIGIN_CONTRACTS\"]:\n      return Object.assign({}, state, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, payload));\n\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_SET_TABLE_LOADING\"]:\n      return Object.assign({}, state, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, payload));\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./pages/home/service/reducer.js?");

/***/ }),

/***/ "./store/reducer.js":
/*!**************************!*\
  !*** ./store/reducer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _pages_login_service_reducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/login/service/reducer.js */ \"./pages/login/service/reducer.js\");\n/* harmony import */ var _pages_home_service_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/home/service/reducer */ \"./pages/home/service/reducer.js\");\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  login: _pages_login_service_reducer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./store/reducer.js?");

/***/ })

})