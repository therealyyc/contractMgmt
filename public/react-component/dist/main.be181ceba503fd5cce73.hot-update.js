webpackHotUpdate("main",{

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index.js */ \"./store/index.js\");\n/* harmony import */ var _pages_login_components_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/components/index.jsx */ \"./pages/login/components/index.jsx\");\n/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.scss */ \"./test.scss\");\n/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_test_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: _store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"\\u5165\\u53E3\\u6587\\u4EF6\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_login_components_index_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./App.jsx?");

/***/ }),

/***/ "./pages/login/components/index.jsx":
/*!******************************************!*\
  !*** ./pages/login/components/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Login(props) {\n  console.log('props', props);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Login\");\n}\n\nvar mapStatetoProps = function mapStatetoProps(state) {\n  return {\n    login: state.login\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return dispatch;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connect(mapStatetoProps, mapDispatchToProps)(Login));\n\n//# sourceURL=webpack:///./pages/login/components/index.jsx?");

/***/ })

})