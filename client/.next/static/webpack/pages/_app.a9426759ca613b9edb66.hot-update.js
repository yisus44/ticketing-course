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
  var links = [!currenUser && {
    label: 'SignUp',
    href: 'auth/signup'
  }, !currenUser && {
    label: 'signIn',
    href: 'auth/signIn'
  }, currenUser && {
    label: 'SignOut',
    href: 'auth/signout'
  }].filter(function (linkConfig) {
    return linkConfig;
  }).map(function (_ref2) {
    var label = _ref2.label,
        href = _ref2.href;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "nav-link",
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, _this)
    }, href, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
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
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-end",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "nav d-flex align-items-center",
        children: links
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiY3VycmVuVXNlciIsImxpbmtzIiwibGFiZWwiLCJocmVmIiwiZmlsdGVyIiwibGlua0NvbmZpZyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlLGdCQUFvQjtBQUFBLE1BQWpCQSxVQUFpQixRQUFqQkEsVUFBaUI7QUFDakMsTUFBTUMsS0FBSyxHQUFHLENBQ1osQ0FBQ0QsVUFBRCxJQUFlO0FBQ2JFLFNBQUssRUFBRSxRQURNO0FBRWJDLFFBQUksRUFBRTtBQUZPLEdBREgsRUFLWixDQUFDSCxVQUFELElBQWU7QUFDYkUsU0FBSyxFQUFFLFFBRE07QUFFYkMsUUFBSSxFQUFFO0FBRk8sR0FMSCxFQVNaSCxVQUFVLElBQUk7QUFDWkUsU0FBSyxFQUFFLFNBREs7QUFFWkMsUUFBSSxFQUFFO0FBRk0sR0FURixFQWNYQyxNQWRXLENBY0osVUFBQ0MsVUFBRDtBQUFBLFdBQWdCQSxVQUFoQjtBQUFBLEdBZEksRUFlWEMsR0FmVyxDQWVQLGlCQUFxQjtBQUFBLFFBQWxCSixLQUFrQixTQUFsQkEsS0FBa0I7QUFBQSxRQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDeEIsd0JBQ0U7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsVUFBYjtBQUFBLGtCQUF5QkQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVNDLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0QsR0FyQlcsQ0FBZDtBQXVCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLCtCQUFkO0FBQUEsa0JBQStDRjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FsQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hOTQyNjc1OWNhNjEzYjllZGI2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlblVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgIWN1cnJlblVzZXIgJiYge1xyXG4gICAgICBsYWJlbDogJ1NpZ25VcCcsXHJcbiAgICAgIGhyZWY6ICdhdXRoL3NpZ251cCcsXHJcbiAgICB9LFxyXG4gICAgIWN1cnJlblVzZXIgJiYge1xyXG4gICAgICBsYWJlbDogJ3NpZ25JbicsXHJcbiAgICAgIGhyZWY6ICdhdXRoL3NpZ25JbicsXHJcbiAgICB9LFxyXG4gICAgY3VycmVuVXNlciAmJiB7XHJcbiAgICAgIGxhYmVsOiAnU2lnbk91dCcsXHJcbiAgICAgIGhyZWY6ICdhdXRoL3NpZ25vdXQnLFxyXG4gICAgfSxcclxuICBdXHJcbiAgICAuZmlsdGVyKChsaW5rQ29uZmlnKSA9PiBsaW5rQ29uZmlnKVxyXG4gICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGtleT17aHJlZn0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntsYWJlbH08L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+R2l0VGl4PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj57bGlua3N9PC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9