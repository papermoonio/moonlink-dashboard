webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DataFeed.js":
/*!********************************!*\
  !*** ./components/DataFeed.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_feed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/feed */ \"./ethereum/feed.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/alberto/data/presentations/ChainlinkHackathon/moonlink-oracles/components/DataFeed.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar addresses = __webpack_require__(/*! ../ethereum/addresses */ \"./ethereum/addresses.json\");\n\nvar Table = /*#__PURE__*/function (_Component) {\n  Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Table, _Component);\n\n  var _super = _createSuper(Table);\n\n  function Table() {\n    var _this;\n\n    Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Table);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      btcusd: 'N/A',\n      updated: 'N/A'\n    });\n\n    Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"onUpdate\", /*#__PURE__*/Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var currentdate, btcPrice, ethPrice;\n      return _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // Date\n              currentdate = new Date(); // BTC\n\n              btcPrice = _this.getPrice(addresses.btcusd);\n              console.log(btcPrice); // BTC\n\n              ethPrice = _this.getPrice(addresses.ethusd);\n\n              _this.setState(function () {\n                return {\n                  btcusd: btcPrice.toFixed(2),\n                  ethusd: ethPrice.toFixed(2),\n                  updated: \"\".concat(currentdate.getFullYear(), \"/\").concat(currentdate.getMonth(), \"/\").concat(currentdate.getDate(), \" \").concat(currentdate.getHours(), \":\").concat(currentdate.getMinutes(), \":\").concat(currentdate.getSeconds())\n                };\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"getPrice\", /*#__PURE__*/function () {\n      var _ref2 = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(address) {\n        var contractInstance, dec;\n        return _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                contractInstance = Object(_ethereum_feed__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(addresses.btcusd);\n                dec = contractInstance.decimals();\n                _context2.next = 4;\n                return contractInstance.getLatestPrice();\n\n              case 4:\n                _context2.t0 = _context2.sent;\n                _context2.t1 = Math.pow(10, dec);\n                return _context2.abrupt(\"return\", _context2.t0 / _context2.t1);\n\n              case 7:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Table, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n        var currentdate, btcInst, decimals, price;\n        return _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                currentdate = new Date();\n                btcInst = Object(_ethereum_feed__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(addresses.btcusd);\n                _context3.next = 4;\n                return btcInst.decimals();\n\n              case 4:\n                decimals = _context3.sent;\n                _context3.next = 7;\n                return btcInst.getLatestPrice();\n\n              case 7:\n                _context3.t0 = _context3.sent;\n                _context3.t1 = Math.pow(10, decimals);\n                price = _context3.t0 / _context3.t1;\n                this.setState(function () {\n                  return {\n                    btcusd: price.toFixed(2),\n                    updated: \"\".concat(currentdate.getFullYear(), \"/\").concat(currentdate.getMonth(), \"/\").concat(currentdate.getDate(), \" \").concat(currentdate.getHours(), \":\").concat(currentdate.getMinutes(), \":\").concat(currentdate.getSeconds())\n                  };\n                });\n\n              case 11:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Data Price Feed\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n          className: \"ui celled table\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Token Pair\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Price\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n                    content: \"Updated Data\",\n                    icon: \"plus square\",\n                    primary: true,\n                    onClick: this.onUpdate\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 28\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 25\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 22\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 16\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Token Pair\",\n                children: \"BTC/USD\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Price\",\n                children: this.state.btcusd\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Last Updated\",\n                children: this.state.updated\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 22\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 16\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Token Pair\",\n                children: \"ETH/USD\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Price\",\n                children: this.state.ethusd\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                \"data-label\": \"Last Updated\",\n                children: this.state.updated\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 22\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 16\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 10\n      }, this);\n    }\n  }], [{\n    key: \"getInitialProps\",\n    // Nextjs uses this function to render this first server-side\n    value: function () {\n      var _getInitialProps = Object(_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {\n        return _home_alberto_data_presentations_ChainlinkHackathon_moonlink_oracles_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                return _context4.abrupt(\"return\", {});\n\n              case 1:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Table;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXRhRmVlZC5qcz9iMjI0Il0sIm5hbWVzIjpbImFkZHJlc3NlcyIsInJlcXVpcmUiLCJUYWJsZSIsImJ0Y3VzZCIsInVwZGF0ZWQiLCJjdXJyZW50ZGF0ZSIsIkRhdGUiLCJidGNQcmljZSIsImdldFByaWNlIiwiY29uc29sZSIsImxvZyIsImV0aFByaWNlIiwiZXRodXNkIiwic2V0U3RhdGUiLCJ0b0ZpeGVkIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiYWRkcmVzcyIsImNvbnRyYWN0SW5zdGFuY2UiLCJDb25zdW1lckluc3RhbmNlIiwiZGVjIiwiZGVjaW1hbHMiLCJnZXRMYXRlc3RQcmljZSIsIk1hdGgiLCJwb3ciLCJidGNJbnN0IiwicHJpY2UiLCJvblVwZGF0ZSIsInN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXpCOztJQUVNQyxLOzs7Ozs7Ozs7Ozs7Ozs7O2tYQU1LO0FBQ0xDLFlBQU0sRUFBRSxLQURIO0FBRUxDLGFBQU8sRUFBRTtBQUZKLEs7O3F0QkFvQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1I7QUFDTUMseUJBRkUsR0FFWSxJQUFJQyxJQUFKLEVBRlosRUFHUjs7QUFDTUMsc0JBSkUsR0FJUyxNQUFLQyxRQUFMLENBQWNSLFNBQVMsQ0FBQ0csTUFBeEIsQ0FKVDtBQUtSTSxxQkFBTyxDQUFDQyxHQUFSLENBQVlILFFBQVosRUFMUSxDQU9SOztBQUNNSSxzQkFSRSxHQVFTLE1BQUtILFFBQUwsQ0FBY1IsU0FBUyxDQUFDWSxNQUF4QixDQVJUOztBQVVSLG9CQUFLQyxRQUFMLENBQWMsWUFBTTtBQUNqQix1QkFB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QUdHO0FBQUksOEJBQVcsY0FBZjtBQUFBLDBCQUErQixLQUFLNkIsS0FBTCxDQUFXNUI7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpCSCxlQXdCRztBQUFBLG1DQUNHO0FBQUEsc0NBQ0c7QUFBSSw4QkFBVyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURILGVBRUc7QUFBSSw4QkFBVyxPQUFmO0FBQUEsMEJBQXdCLEtBQUs0QixLQUFMLENBQVdwQjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZILGVBR0c7QUFBSSw4QkFBVyxjQUFmO0FBQUEsMEJBQStCLEtBQUtvQixLQUFMLENBQVc1QjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESDtBQXFDRjs7O0FBeEZEOzs7Ozs7O2tEQUVVLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFITzZCLGdEOztBQTRGTC9CLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EYXRhRmVlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgQ29uc3VtZXJJbnN0YW5jZSBmcm9tICcuLi9ldGhlcmV1bS9mZWVkJztcbmNvbnN0IGFkZHJlc3NlcyA9IHJlcXVpcmUoJy4uL2V0aGVyZXVtL2FkZHJlc3NlcycpO1xuXG5jbGFzcyBUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAvLyBOZXh0anMgdXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHJlbmRlciB0aGlzIGZpcnN0IHNlcnZlci1zaWRlXG4gICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgfVxuXG4gICBzdGF0ZSA9IHtcbiAgICAgIGJ0Y3VzZDogJ04vQScsXG4gICAgICB1cGRhdGVkOiAnTi9BJyxcbiAgIH07XG5cbiAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgY3VycmVudGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBjb25zdCBidGNJbnN0ID0gQ29uc3VtZXJJbnN0YW5jZShhZGRyZXNzZXMuYnRjdXNkKTtcbiAgICAgIGNvbnN0IGRlY2ltYWxzID0gYXdhaXQgYnRjSW5zdC5kZWNpbWFscygpO1xuICAgICAgY29uc3QgcHJpY2UgPSAoYXdhaXQgYnRjSW5zdC5nZXRMYXRlc3RQcmljZSgpKSAvIE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ0Y3VzZDogcHJpY2UudG9GaXhlZCgyKSxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IGAke2N1cnJlbnRkYXRlLmdldEZ1bGxZZWFyKCl9LyR7Y3VycmVudGRhdGUuZ2V0TW9udGgoKX0vJHtjdXJyZW50ZGF0ZS5nZXREYXRlKCl9ICR7Y3VycmVudGRhdGUuZ2V0SG91cnMoKX06JHtjdXJyZW50ZGF0ZS5nZXRNaW51dGVzKCl9OiR7Y3VycmVudGRhdGUuZ2V0U2Vjb25kcygpfWAsXG4gICAgICAgICB9O1xuICAgICAgfSk7XG4gICB9XG5cbiAgIG9uVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gRGF0ZVxuICAgICAgY29uc3QgY3VycmVudGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgLy8gQlRDXG4gICAgICBjb25zdCBidGNQcmljZSA9IHRoaXMuZ2V0UHJpY2UoYWRkcmVzc2VzLmJ0Y3VzZCk7XG4gICAgICBjb25zb2xlLmxvZyhidGNQcmljZSk7XG5cbiAgICAgIC8vIEJUQ1xuICAgICAgY29uc3QgZXRoUHJpY2UgPSB0aGlzLmdldFByaWNlKGFkZHJlc3Nlcy5ldGh1c2QpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidGN1c2Q6IGJ0Y1ByaWNlLnRvRml4ZWQoMiksXG4gICAgICAgICAgICBldGh1c2Q6IGV0aFByaWNlLnRvRml4ZWQoMiksXG4gICAgICAgICAgICB1cGRhdGVkOiBgJHtjdXJyZW50ZGF0ZS5nZXRGdWxsWWVhcigpfS8ke2N1cnJlbnRkYXRlLmdldE1vbnRoKCl9LyR7Y3VycmVudGRhdGUuZ2V0RGF0ZSgpfSAke2N1cnJlbnRkYXRlLmdldEhvdXJzKCl9OiR7Y3VycmVudGRhdGUuZ2V0TWludXRlcygpfToke2N1cnJlbnRkYXRlLmdldFNlY29uZHMoKX1gLFxuICAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgZ2V0UHJpY2UgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgICAgY29uc3QgY29udHJhY3RJbnN0YW5jZSA9IENvbnN1bWVySW5zdGFuY2UoYWRkcmVzc2VzLmJ0Y3VzZCk7XG4gICAgICBjb25zdCBkZWMgPSBjb250cmFjdEluc3RhbmNlLmRlY2ltYWxzKCk7XG4gICAgICByZXR1cm4gKGF3YWl0IGNvbnRyYWN0SW5zdGFuY2UuZ2V0TGF0ZXN0UHJpY2UoKSkgLyBNYXRoLnBvdygxMCwgZGVjKTtcbiAgIH07XG5cbiAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPkRhdGEgUHJpY2UgRmVlZDwvaDM+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd1aSBjZWxsZWQgdGFibGUnPlxuICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgPHRoPlRva2VuIFBhaXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nVXBkYXRlZCBEYXRhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0ncGx1cyBzcXVhcmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPSdUb2tlbiBQYWlyJz5CVEMvVVNEPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPSdQcmljZSc+e3RoaXMuc3RhdGUuYnRjdXNkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD0nTGFzdCBVcGRhdGVkJz57dGhpcy5zdGF0ZS51cGRhdGVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPSdUb2tlbiBQYWlyJz5FVEgvVVNEPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPSdQcmljZSc+e3RoaXMuc3RhdGUuZXRodXNkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD0nTGFzdCBVcGRhdGVkJz57dGhpcy5zdGF0ZS51cGRhdGVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DataFeed.js\n");

/***/ })

})