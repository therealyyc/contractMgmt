webpackHotUpdate("main",{

/***/ "./apis/contracts.js":
/*!***************************!*\
  !*** ./apis/contracts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\nmockjs__WEBPACK_IMPORTED_MODULE_0__[\"Random\"].extend({\n  contractCollections: function contractCollections(data) {\n    var contracts = ['买房合同', '买车合同', '买地合同', '劳务合同', '其他合同'];\n    return this.pick(contracts);\n  },\n  departments: function departments(data) {\n    var departments = ['税务部', '人力资源部', '财务部', '体育部'];\n    return this.pick(departments);\n  }\n});\nvar regex = /\\/api\\/contracts/;\nmockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock(regex, function (req) {\n  return mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock({\n    code: 0,\n    'data|1-10': [{\n      \"id|+1\": 1,\n      \"type\": '@contractCollections',\n      \"client\": '@cname',\n      \"signTime\": '@date',\n      \"DueTime\": '@date',\n      \"price|100-10000.1-10\": 100,\n      \"product\": '产品名',\n      \"signer\": '@cname',\n      \"department\": '@departments'\n    }]\n  });\n}); // type\n// client\n// signTime\n// DueTime\n// price\n// product\n// signer\n\n//# sourceURL=webpack:///./apis/contracts.js?");

/***/ })

})