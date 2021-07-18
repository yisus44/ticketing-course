self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Admi\\Desktop\\cursos\\udemy\\microservices\\ticketing\\client\\pages\\index.js",
    _this = undefined;



var main = function main(_ref) {
  var currentUser = _ref.currentUser;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
    children: "Pongan bachata 3"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, _this);
};

main.getInitialProps = /*#__PURE__*/(0,C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
  var prefix, opts, response;
  return C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //this can be changed if we deploy to heroku
          prefix = 'http://localhost:3001' || 0;

          if (false) {} else {//we are in the browser
            }

          opts = {
            headers: {
              Host: 'ticketing.dev'
            }
          };
          _context.next = 5;
          return axios__WEBPACK_IMPORTED_MODULE_3___default().get(prefix + '/api/users/currentuser')["catch"](function (err) {// console.log(err.message);
          });

        case 5:
          response = _context.sent;
          console.log('I was executed yeye');
          return _context.abrupt("return", response.data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (main);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFpbiIsImN1cnJlbnRVc2VyIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJlZml4Iiwib3B0cyIsImhlYWRlcnMiLCJIb3N0IiwiYXhpb3MiLCJlcnIiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBcUI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ2hDLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztBQUlBRCxJQUFJLENBQUNFLGVBQUwsb1ZBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQjtBQUNNQyxnQkFGZSxHQUduQiwyQkFDQSxDQUptQjs7QUFLckIscUJBQW1DLEVBQW5DLE1BRU8sQ0FDTDtBQUNEOztBQUNLQyxjQVZlLEdBVVI7QUFDWEMsbUJBQU8sRUFBRTtBQUNQQyxrQkFBSSxFQUFFO0FBREM7QUFERSxXQVZRO0FBQUE7QUFBQSxpQkFlRUMsZ0RBQUEsQ0FDaEJKLE1BQU0sR0FBRyx3QkFETyxXQUVkLFVBQUNLLEdBQUQsRUFBUyxDQUNkO0FBQ0QsV0FKb0IsQ0FmRjs7QUFBQTtBQWVmQyxrQkFmZTtBQXFCckJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQXJCcUIsMkNBc0JkRixRQUFRLENBQUNHLElBdEJLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBeUJBLCtEQUFlWixJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE3YWJmMjY5ZjI4YmQ5OTFhNzlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgbWFpbiA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICByZXR1cm4gPGgxPlBvbmdhbiBiYWNoYXRhIDM8L2gxPjtcclxufTtcclxuXHJcbm1haW4uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vdGhpcyBjYW4gYmUgY2hhbmdlZCBpZiB3ZSBkZXBsb3kgdG8gaGVyb2t1XHJcbiAgY29uc3QgcHJlZml4ID1cclxuICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDEnIHx8XHJcbiAgICAnaHR0cDovL2luZ3Jlc3MtbmdpbnguaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCc7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvL3dlIGFyZSBvbiB0aGUgc2VydmVyXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vd2UgYXJlIGluIHRoZSBicm93c2VyXHJcbiAgfVxyXG4gIGNvbnN0IG9wdHMgPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEhvc3Q6ICd0aWNrZXRpbmcuZGV2JyxcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KHByZWZpeCArICcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJylcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnSSB3YXMgZXhlY3V0ZWQgeWV5ZScpO1xyXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==