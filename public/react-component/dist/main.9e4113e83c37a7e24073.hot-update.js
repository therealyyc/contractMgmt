webpackHotUpdate("main",{

/***/ "./pages/home/components/List.jsx":
/*!****************************************!*\
  !*** ./pages/home/components/List.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _service_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/actions */ \"./pages/home/service/actions.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal */ \"./pages/home/components/Modal.jsx\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ \"./pages/home/components/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar Search = antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"].Search;\nvar MonthPicker = antd__WEBPACK_IMPORTED_MODULE_5__[\"DatePicker\"].MonthPicker,\n    RangePicker = antd__WEBPACK_IMPORTED_MODULE_5__[\"DatePicker\"].RangePicker;\nvar Option = antd__WEBPACK_IMPORTED_MODULE_5__[\"Select\"].Option;\n\nfunction MyModal(props) {\n  var form = props.form,\n      visible = props.visible,\n      handleOk = props.handleOk,\n      btnLoading = props.btnLoading,\n      handleCancel = props.handleCancel;\n  var getFieldDecorator = form.getFieldDecorator;\n  var content = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    gutter: 24\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    span: 12\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"].Item, {\n    label: \"\\u5408\\u540C\\u7C7B\\u578B\"\n  }, getFieldDecorator('type', {\n    rules: [{\n      required: true,\n      message: '请选择合同类型'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Select\"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {\n    value: \"86\"\n  }, \"+86\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {\n    value: \"87\"\n  }, \"+87\"))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    span: 12\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"].Item, {\n    label: \"\\u5BA2\\u6237/\\u4F9B\\u5E94\\u5546\"\n  }, getFieldDecorator('client', {\n    rules: [{\n      required: true,\n      message: '请填写客户'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], null))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    gutter: 24\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    span: 12\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"].Item, {\n    label: \"\\u7B7E\\u7EA6\\u65F6\\u95F4\"\n  }, getFieldDecorator('signTime', {\n    rules: [{\n      required: true,\n      message: '请填写时间'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"DatePicker\"], {\n    showTime: true,\n    format: \"YYYY-MM-DD HH:mm:ss\"\n  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    span: 12\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"].Item, {\n    label: \"\\u5408\\u540C\\u5230\\u671F\\u65F6\\u95F4\"\n  }, getFieldDecorator('DueTime', {\n    rules: [{\n      required: true,\n      message: '请填写到期时间'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"DatePicker\"], {\n    showTime: true,\n    format: \"YYYY-MM-DD HH:mm:ss\"\n  }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    gutter: 24\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    span: 12\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"].Item, {\n    label: \"\\u4EA7\\u54C1\\u540D\\u79F0\"\n  }, getFieldDecorator('product', {\n    rules: [{\n      required: true,\n      message: '请填写产品名称'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], null)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    span: 12\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"].Item, {\n    label: \"\\u91D1\\u989D\"\n  }, getFieldDecorator('price', {\n    rules: [{\n      required: true,\n      message: '请填写产品金额'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], null))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    gutter: 24\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    span: 12\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"].Item, {\n    label: \"\\u90E8\\u95E8\"\n  }, getFieldDecorator('product', {\n    rules: [{\n      required: true,\n      message: '请填写产品名称'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Select\"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {\n    value: \"86\"\n  }, \"+86\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {\n    value: \"87\"\n  }, \"+87\"))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    span: 12\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"].Item, {\n    label: \"\\u7B7E\\u8BA2\\u4EBA\"\n  }, getFieldDecorator('signer', {\n    rules: [{\n      required: true,\n      message: '请填写签订人'\n    }]\n  })(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], null))))));\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Modal\"], {\n    title: \"Title\",\n    visible: visible,\n    onOk: handleOk,\n    confirmLoading: btnLoading,\n    onCancel: handleCancel\n  }, content);\n}\n\nfunction List(props) {\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.home;\n  }),\n      contracts = _useSelector.contracts;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_service_actions__WEBPACK_IMPORTED_MODULE_7__[\"fetchApi\"])();\n\n            case 2:\n              res = _context.sent;\n              dispatch(Object(_service_actions__WEBPACK_IMPORTED_MODULE_7__[\"setContracts\"])(lodash__WEBPACK_IMPORTED_MODULE_6__[\"get\"](res, ['data', 'data'])));\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []); // type\n  // client\n  // signTime\n  // DueTime\n  // price\n  // product\n  // signer\n\n  var columns = [{\n    title: '合同类型',\n    dataIndex: 'type',\n    //对应数据项之中的\n    render: function render(text) {\n      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"a\", null, text);\n    }\n  }, {\n    title: '客户',\n    dataIndex: 'client'\n  }, {\n    title: '签约时间',\n    dataIndex: 'signTime'\n  }, //{\n  //   title: 'Tags',\n  //   key: 'tags',\n  //   dataIndex: 'tags',\n  //   render: tags => (\n  //     <span>\n  //       {tags.map(tag => {\n  //         let color = tag.length > 5 ? 'geekblue' : 'green';\n  //         if (tag === 'loser') {\n  //           color = 'volcano';\n  //         }\n  //         return (\n  //           <Tag color={color} key={tag}>\n  //             {tag.toUpperCase()}\n  //           </Tag>\n  //         );\n  //       })}\n  //     </span>\n  //   ),\n  // },\n  {\n    title: 'Action',\n    key: 'action',\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Divider\"], {\n        type: \"vertical\"\n      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"a\", null, \"Delete\"));\n    }\n  }];\n  console.log('contracts', contracts);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      btnLoading = _useState4[0],\n      setBtnLoading = _useState4[1];\n\n  var handleModalVisible = function handleModalVisible() {\n    setVisible(true);\n  };\n\n  var handleOk = function handleOk() {\n    setBtnLoading(true);\n    setTimeout(function () {\n      setVisible(false);\n      setBtnLoading(false);\n    }, 2000);\n  };\n\n  var handleCancel = function handleCancel() {\n    setVisible(false);\n  };\n\n  var WithFormModal = antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"].create()(MyModal);\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"main\", {\n    className: \"contract-list\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n    type: \"primary\",\n    onClick: handleModalVisible\n  }, \"\\u6DFB\\u52A0\\u5408\\u540C\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Search, {\n    placeholder: \"\\u8F93\\u5165\\u641C\\u7D22\\u5185\\u5BB9\",\n    onSearch: function onSearch(value) {\n      return console.log(value);\n    },\n    style: {\n      width: 200\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"section\", {\n    className: \"contract-table\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Table\"], {\n    columns: columns,\n    dataSource: contracts,\n    rowKey: 'id',\n    size: \"middle\",\n    pagination: {\n      pageSize: 8\n    }\n  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    visible: visible,\n    handleOk: handleOk,\n    btnLoading: btnLoading,\n    handleCancel: handleCancel\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./pages/home/components/List.jsx?");

/***/ })

})