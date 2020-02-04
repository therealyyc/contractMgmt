webpackHotUpdate("main",{

/***/ "./pages/home/components/List.jsx":
/*!****************************************!*\
  !*** ./pages/home/components/List.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _service_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/actions */ \"./pages/home/service/actions.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal */ \"./pages/home/components/Modal.jsx\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ \"./pages/home/components/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar Search = antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"].Search;\nvar MonthPicker = antd__WEBPACK_IMPORTED_MODULE_5__[\"DatePicker\"].MonthPicker,\n    RangePicker = antd__WEBPACK_IMPORTED_MODULE_5__[\"DatePicker\"].RangePicker;\nvar Option = antd__WEBPACK_IMPORTED_MODULE_5__[\"Select\"].Option;\nvar confirm = antd__WEBPACK_IMPORTED_MODULE_5__[\"Modal\"].confirm;\n\nfunction List(props) {\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.home;\n  }),\n      contracts = _useSelector.contracts,\n      table_loading = _useSelector.table_loading;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_service_actions__WEBPACK_IMPORTED_MODULE_7__[\"fetchApi\"])();\n\n            case 2:\n              res = _context.sent;\n              dispatch(Object(_service_actions__WEBPACK_IMPORTED_MODULE_7__[\"setContracts\"])(lodash__WEBPACK_IMPORTED_MODULE_6__[\"get\"](res, ['data', 'data'])));\n              dispatch(Object(_service_actions__WEBPACK_IMPORTED_MODULE_7__[\"setOriginContracts\"])(lodash__WEBPACK_IMPORTED_MODULE_6__[\"get\"](res, ['data', 'data'])));\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  var columns = [{\n    title: '合同类型',\n    dataIndex: 'type',\n    //对应数据项之中的\n    render: function render(text) {\n      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"a\", null, text);\n    }\n  }, {\n    title: '产品名称',\n    dataIndex: 'product'\n  }, {\n    title: '产品价格',\n    dataIndex: 'price'\n  }, {\n    title: '客户',\n    dataIndex: 'client'\n  }, {\n    title: '签约人',\n    dataIndex: 'signer'\n  }, {\n    title: '签约时间',\n    dataIndex: 'signTime'\n  }, {\n    title: '过期时间',\n    dataIndex: 'DueTime'\n  }, {\n    title: '操作',\n    key: 'action',\n    render: function render(text, record, index) {\n      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"a\", {\n        onClick: function onClick() {\n          handleEdit(record);\n        }\n      }, \"\\u4FEE\\u6539\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Divider\"], {\n        type: \"vertical\"\n      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"a\", {\n        onClick: handleDelete\n      }, \"\\u5220\\u9664\"));\n    }\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('add'),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      mode = _useState4[0],\n      setMode = _useState4[1];\n\n  var info = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])({});\n  var contractId = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])('99');\n\n  var handleModalVisible = function handleModalVisible() {\n    setMode('add');\n    setVisible(true);\n  };\n\n  var handleEdit = function handleEdit(tableinfo) {\n    setMode('edit');\n    info.current = tableinfo;\n    setVisible(true);\n  };\n\n  var handleDelete = function handleDelete() {\n    confirm({\n      title: '你确定要删除这一个合同吗',\n      onOk: function () {\n        var _onOk = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n        /*#__PURE__*/\n        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n          var res;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  _context2.next = 2;\n                  return Object(_service_actions__WEBPACK_IMPORTED_MODULE_7__[\"deleteApi\"])();\n\n                case 2:\n                  res = _context2.sent;\n\n                  if (res) {\n                    antd__WEBPACK_IMPORTED_MODULE_5__[\"message\"].success('删除成功');\n                    dispatch(Object(_service_actions__WEBPACK_IMPORTED_MODULE_7__[\"refreshTableData\"])());\n                  }\n\n                case 4:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2);\n        }));\n\n        function onOk() {\n          return _onOk.apply(this, arguments);\n        }\n\n        return onOk;\n      }()\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"main\", {\n    className: \"contract-list\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n    type: \"primary\",\n    onClick: handleModalVisible\n  }, \"\\u6DFB\\u52A0\\u5408\\u540C\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Search, {\n    placeholder: \"\\u8F93\\u5165\\u641C\\u7D22\\u5185\\u5BB9\",\n    onChange: function onChange(value) {\n      dispatch(Object(_service_actions__WEBPACK_IMPORTED_MODULE_7__[\"setSearchValue\"])(value));\n    },\n    style: {\n      width: 200\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"section\", {\n    className: \"contract-table\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Table\"], {\n    columns: columns,\n    dataSource: contracts,\n    rowKey: 'id',\n    size: \"small\",\n    pagination: {\n      pageSize: 7\n    },\n    loading: table_loading\n  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    visible: visible,\n    setVisible: setVisible,\n    mode: mode,\n    info: info.current\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./pages/home/components/List.jsx?");

/***/ })

})