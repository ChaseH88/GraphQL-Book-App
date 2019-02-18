webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/UserList.js":
/*!************************************!*\
  !*** ./src/components/UserList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");

var _jsxFileName = "C:\\Users\\scharr01\\Documents\\code-projects\\Graphql-bookApp\\client\\src\\components\\UserList.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    authors {\n      name\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getAuthorsQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

Launches = function Launches() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: getAuthorsQuery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    });
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "ERROR");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, data.authors.map(function (author) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, author.name);
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Launches);

/***/ })

})
//# sourceMappingURL=index.js.ffdff66d58868b4e5d4c.hot-update.js.map