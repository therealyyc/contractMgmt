webpackHotUpdate("main",{

/***/ "./pages/home/service/actions.js":
/*!***************************************!*\
  !*** ./pages/home/service/actions.js ***!
  \***************************************/
/*! exports provided: ACTION_SET_CONTRACTS, ACTION_SET_ORIGIN_CONTRACTS, ACTION_SET_TABLE_LOADING, ACTION_SET_SEARCH_VALUE, setContracts, setOriginContracts, setTableLoading, setSearchValue, refreshTableData, fetchApi, addApi, editApi, deleteApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_SET_CONTRACTS\", function() { return ACTION_SET_CONTRACTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_SET_ORIGIN_CONTRACTS\", function() { return ACTION_SET_ORIGIN_CONTRACTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_SET_TABLE_LOADING\", function() { return ACTION_SET_TABLE_LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_SET_SEARCH_VALUE\", function() { return ACTION_SET_SEARCH_VALUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setContracts\", function() { return setContracts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setOriginContracts\", function() { return setOriginContracts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTableLoading\", function() { return setTableLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSearchValue\", function() { return setSearchValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"refreshTableData\", function() { return refreshTableData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchApi\", function() { return fetchApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addApi\", function() { return addApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editApi\", function() { return editApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteApi\", function() { return deleteApi; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ACTION_SET_CONTRACTS = 'SET_CONTRACTS';\nvar ACTION_SET_ORIGIN_CONTRACTS = 'SET_ORIGIN_CONTRACTS';\nvar ACTION_SET_TABLE_LOADING = 'SET_TABLE_LOADING';\nvar ACTION_SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';\nfunction setContracts(contracts) {\n  return {\n    type: ACTION_SET_CONTRACTS,\n    payload: contracts,\n    name: 'contracts'\n  };\n}\nfunction setOriginContracts(origin_contracts) {\n  return {\n    type: ACTION_SET_ORIGIN_CONTRACTS,\n    payload: origin_contracts,\n    name: 'origin_contracts'\n  };\n}\nfunction setTableLoading(table_loading) {\n  return {\n    type: ACTION_SET_TABLE_LOADING,\n    payload: table_loading,\n    name: 'table_loading'\n  };\n}\nfunction setSearchValue(searchValue) {\n  return {\n    type: ACTION_SET_SEARCH_VALUE,\n    payload: searchValue\n  };\n}\nfunction refreshTableData() {\n  return function (dispatch, getState) {\n    console.log('111');\n    dispatch(setTableLoading(true));\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: \"/api/contracts\",\n      method: 'GET'\n    }).then(function (res) {\n      dispatch(setContracts(lodash__WEBPACK_IMPORTED_MODULE_0__[\"get\"](res, ['data', 'data'])));\n      dispatch(setOriginContracts(lodash__WEBPACK_IMPORTED_MODULE_0__[\"get\"](res, ['data', 'data'])));\n      dispatch(setTableLoading(false));\n    });\n  };\n}\nvar fetchApi = function fetchApi() {\n  return Promise.resolve(axios__WEBPACK_IMPORTED_MODULE_1___default()({\n    url: \"/api/contracts\",\n    method: 'GET'\n  }));\n};\nvar addApi = function addApi() {\n  return Promise.resolve(axios__WEBPACK_IMPORTED_MODULE_1___default()({\n    url: \"/api/contracts\",\n    method: 'POST'\n  }));\n};\nvar editApi = function editApi() {\n  return Promise.resolve(axios__WEBPACK_IMPORTED_MODULE_1___default()({\n    url: \"/api/contracts\",\n    method: 'PUT'\n  }));\n};\nvar deleteApi = function deleteApi() {\n  return Promise.resolve(axios__WEBPACK_IMPORTED_MODULE_1___default()({\n    url: \"/api/contracts\",\n    method: 'DELETE'\n  }));\n};\n\n//# sourceURL=webpack:///./pages/home/service/actions.js?");

/***/ })

})