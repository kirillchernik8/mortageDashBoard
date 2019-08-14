(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/Components/Stats.jsx":
/*!**********************************!*\
  !*** ./src/Components/Stats.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-minimal-pie-chart */ \"./node_modules/react-minimal-pie-chart/dist/index.js\");\n/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Stats =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Stats, _React$Component);\n\n  function Stats(props) {\n    _classCallCheck(this, Stats);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Stats).call(this, props));\n  }\n\n  _createClass(Stats, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"chartForCreditScore\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" Credit scores: \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Green-Optimal \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Aqua-Medium \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Orange-Low \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        animate: true,\n        animationDuration: 1000,\n        data: [{\n          title: \"Good Chance\",\n          value: this.props.stats.credit.good,\n          color: \"green\"\n        }, {\n          title: \"Likely\",\n          value: this.props.stats.credit.med,\n          color: \"aquamarine\"\n        }, {\n          title: \"Unlikely\",\n          value: this.props.stats.credit.min,\n          color: \"orange\"\n        }]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"chartForBalance\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" Balances: \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Green-Optimal \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Aqua-Medium \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Orange-Low \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        animate: true,\n        animationDuration: 1000,\n        data: [{\n          title: \"High\",\n          value: this.props.stats.balance.high,\n          color: \"green\"\n        }, {\n          title: \"Med\",\n          value: this.props.stats.balance.med,\n          color: \"aquamarine\"\n        }, {\n          title: \"Low\",\n          value: this.props.stats.balance.low,\n          color: \"orange\"\n        }]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.props.showStats,\n        className: \"showUsers\"\n      }, \" \", \"Show Users\", \" \"));\n    }\n  }]);\n\n  return Stats;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stats);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9TdGF0cy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TdGF0cy5qc3g/NzZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGllQ2hhcnQgZnJvbSBcInJlYWN0LW1pbmltYWwtcGllLWNoYXJ0XCI7XG5cbmNsYXNzIFN0YXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRGb3JDcmVkaXRTY29yZVwiPlxuICAgICAgICAgIDxoMT4gQ3JlZGl0IHNjb3JlczogPC9oMT5cbiAgICAgICAgICA8aDU+R3JlZW4tT3B0aW1hbCA8L2g1PlxuICAgICAgICAgIDxoNT5BcXVhLU1lZGl1bSA8L2g1PlxuICAgICAgICAgIDxoNT5PcmFuZ2UtTG93IDwvaDU+XG4gICAgICAgICAgPFBpZUNoYXJ0XG4gICAgICAgICAgICBhbmltYXRlPXt0cnVlfVxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249ezEwMDB9XG4gICAgICAgICAgICBkYXRhPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJHb29kIENoYW5jZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnN0YXRzLmNyZWRpdC5nb29kLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxpa2VseVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnN0YXRzLmNyZWRpdC5tZWQsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiYXF1YW1hcmluZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVbmxpa2VseVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnN0YXRzLmNyZWRpdC5taW4sXG4gICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0Rm9yQmFsYW5jZVwiPlxuICAgICAgICAgIDxoMT4gQmFsYW5jZXM6IDwvaDE+XG4gICAgICAgICAgPGg1PkdyZWVuLU9wdGltYWwgPC9oNT5cbiAgICAgICAgICA8aDU+QXF1YS1NZWRpdW0gPC9oNT5cbiAgICAgICAgICA8aDU+T3JhbmdlLUxvdyA8L2g1PlxuICAgICAgICAgIDxQaWVDaGFydFxuICAgICAgICAgICAgYW5pbWF0ZT17dHJ1ZX1cbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXsxMDAwfVxuICAgICAgICAgICAgZGF0YT17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSGlnaFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnN0YXRzLmJhbGFuY2UuaGlnaCxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJncmVlblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNZWRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5zdGF0cy5iYWxhbmNlLm1lZCxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJhcXVhbWFyaW5lXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnN0YXRzLmJhbGFuY2UubG93LFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zaG93U3RhdHN9IGNsYXNzTmFtZT1cInNob3dVc2Vyc1wiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBTaG93IFVzZXJze1wiIFwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWRBO0FBdUJBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFkQTtBQXNCQTtBQUFBO0FBQUE7QUFNQTs7OztBQXJFQTtBQUNBO0FBdUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Stats.jsx\n");

/***/ })

}]);