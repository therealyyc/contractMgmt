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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./pages/home/service/actions.js\");\n\n\nvar initialState = {\n  contracts: [],\n  origin_contracts: [],\n  searchValue: '',\n  table_loading: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload,\n      name = action.name;\n  var contracts = state.contracts,\n      origin_contracts = state.origin_contracts;\n\n  switch (type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_SET_CONTRACTS\"]:\n      return Object.assign({}, state, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, payload));\n\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_SET_ORIGIN_CONTRACTS\"]:\n      return Object.assign({}, state, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, payload));\n\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_SET_TABLE_LOADING\"]:\n      return Object.assign({}, state, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, payload));\n\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_SET_SEARCH_VALUE\"]:\n      if (!payload) {\n        return Object.assign({}, state, {\n          contracts: origin_contracts\n        });\n      } else {\n        /**\r\n         * 1.确定好要对哪些属性进行搜索\r\n         * 2.查看每一项所对用的属性是不是满足，如果满足就将该项推入结果数组\r\n         *    选出哪几项\r\n         */\n        var searchKeys = ['type', 'client'];\n        var ret = [];\n        var filterArr = origin_contracts.map(function (contract) {\n          var rett = [];\n\n          for (var i = 0; i < searchKeys.length; i++) {\n            rett.push(contract[searchKeys[i]]);\n          }\n\n          return rett;\n        });\n        console.log('filterArr', filterArr, origin_contracts);\n        filterArr.map(function (arr, index) {\n          arr.some(function (a) {\n            return a.includes(payload);\n          }) ? ret.push(origin_contracts[index]) : null;\n        });\n        console.log('ret', ret, filterArr); // return Object.assign({}, state, {\n        //   contracts: ret\n        // })\n      }\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./pages/home/service/reducer.js?");

/***/ })

})