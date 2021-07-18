self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admi\\Desktop\\cursos\\udemy\\microservices\\ticketing\\client\\components\\Header.js",
    _this = undefined;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var currenUser = _ref.currenUser;
  var links = [!currentUser && {
    label: 'SignUp',
    href: 'auth/signup'
  }, !currentUser && {
    label: 'signIn',
    href: 'auth/signIn'
  }, currentUser && {
    label: 'SignOut',
    href: 'auth/signout'
  }].filter(function (linkConfig) {
    return linkConfig;
  }).map(function (_ref2) {
    var label = _ref2.label,
        href = _ref2.href;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: label
    }, href, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 14
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-light bg-light",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "navbar-brand",
        children: "GitTix"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-end",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "nav d-flex align-items-center",
        children: links
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiY3VycmVuVXNlciIsImxpbmtzIiwiY3VycmVudFVzZXIiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsK0RBQWUsZ0JBQW9CO0FBQUEsTUFBakJBLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUNqQyxNQUFNQyxLQUFLLEdBQUcsQ0FDWixDQUFDQyxXQUFELElBQWdCO0FBQ2RDLFNBQUssRUFBRSxRQURPO0FBRWRDLFFBQUksRUFBRTtBQUZRLEdBREosRUFLWixDQUFDRixXQUFELElBQWdCO0FBQ2RDLFNBQUssRUFBRSxRQURPO0FBRWRDLFFBQUksRUFBRTtBQUZRLEdBTEosRUFTWkYsV0FBVyxJQUFJO0FBQ2JDLFNBQUssRUFBRSxTQURNO0FBRWJDLFFBQUksRUFBRTtBQUZPLEdBVEgsRUFjWEMsTUFkVyxDQWNKLFVBQUNDLFVBQUQ7QUFBQSxXQUFnQkEsVUFBaEI7QUFBQSxHQWRJLEVBZVhDLEdBZlcsQ0FlUCxpQkFBcUI7QUFBQSxRQUFsQkosS0FBa0IsU0FBbEJBLEtBQWtCO0FBQUEsUUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQ3hCLHdCQUFPO0FBQUEsZ0JBQWdCRDtBQUFoQixPQUFTQyxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELEdBakJXLENBQWQ7QUFtQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQywrQkFBZDtBQUFBLGtCQUErQ0g7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBOUJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmZhMGU1NWE5ZThiY2QxN2UyZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW5Vc2VyIH0pID0+IHtcclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgICFjdXJyZW50VXNlciAmJiB7XHJcbiAgICAgIGxhYmVsOiAnU2lnblVwJyxcclxuICAgICAgaHJlZjogJ2F1dGgvc2lnbnVwJyxcclxuICAgIH0sXHJcbiAgICAhY3VycmVudFVzZXIgJiYge1xyXG4gICAgICBsYWJlbDogJ3NpZ25JbicsXHJcbiAgICAgIGhyZWY6ICdhdXRoL3NpZ25JbicsXHJcbiAgICB9LFxyXG4gICAgY3VycmVudFVzZXIgJiYge1xyXG4gICAgICBsYWJlbDogJ1NpZ25PdXQnLFxyXG4gICAgICBocmVmOiAnYXV0aC9zaWdub3V0JyxcclxuICAgIH0sXHJcbiAgXVxyXG4gICAgLmZpbHRlcigobGlua0NvbmZpZykgPT4gbGlua0NvbmZpZylcclxuICAgIC5tYXAoKHsgbGFiZWwsIGhyZWYgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gPGxpIGtleT17aHJlZn0+e2xhYmVsfTwvbGk+O1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5HaXRUaXg8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPntsaW5rc308L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=