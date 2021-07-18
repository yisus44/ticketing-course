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

main.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
    var req, prefix, opts, response;
    return C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            //this can be changed if we deploy to heroku
            prefix = 'http://localhost:3001' || 0;

            if (false) {} else {//we are in the browser
              } //code that would be used if we used kubernetes


            opts = {
              headers: req.headers
            };
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_3___default().get(prefix + '/api/users/currentuser')["catch"](function (err) {// console.log(err.message);
            });

          case 6:
            response = _context.sent;
            console.log('I was executed yeye');
            return _context.abrupt("return", response.data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFpbiIsImN1cnJlbnRVc2VyIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicHJlZml4Iiwib3B0cyIsImhlYWRlcnMiLCJheGlvcyIsImVyciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDaEMsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0FBSUFELElBQUksQ0FBQ0UsZUFBTDtBQUFBLGtWQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsZUFBVCxTQUFTQSxHQUFUO0FBQ3JCO0FBQ01DLGtCQUZlLEdBR25CLDJCQUNBLENBSm1COztBQUtyQix1QkFBbUMsRUFBbkMsTUFFTyxDQUNMO0FBQ0QsZUFUb0IsQ0FVckI7OztBQUNNQyxnQkFYZSxHQVdSO0FBQ1hDLHFCQUFPLEVBQUVILEdBQUcsQ0FBQ0c7QUFERixhQVhRO0FBQUE7QUFBQSxtQkFjRUMsZ0RBQUEsQ0FDaEJILE1BQU0sR0FBRyx3QkFETyxXQUVkLFVBQUNJLEdBQUQsRUFBUyxDQUNkO0FBQ0QsYUFKb0IsQ0FkRjs7QUFBQTtBQWNmQyxvQkFkZTtBQW9CckJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQXBCcUIsNkNBcUJkRixRQUFRLENBQUNHLElBckJLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdCQSwrREFBZVosSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NzM1Njc4ZGU3OWEzNzU4MjhkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IG1haW4gPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIDxoMT5Qb25nYW4gYmFjaGF0YSAzPC9oMT47XHJcbn07XHJcblxyXG5tYWluLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XHJcbiAgLy90aGlzIGNhbiBiZSBjaGFuZ2VkIGlmIHdlIGRlcGxveSB0byBoZXJva3VcclxuICBjb25zdCBwcmVmaXggPVxyXG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScgfHxcclxuICAgICdodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJztcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vd2UgYXJlIG9uIHRoZSBzZXJ2ZXJcclxuICB9IGVsc2Uge1xyXG4gICAgLy93ZSBhcmUgaW4gdGhlIGJyb3dzZXJcclxuICB9XHJcbiAgLy9jb2RlIHRoYXQgd291bGQgYmUgdXNlZCBpZiB3ZSB1c2VkIGt1YmVybmV0ZXNcclxuICBjb25zdCBvcHRzID0ge1xyXG4gICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXHJcbiAgfTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KHByZWZpeCArICcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJylcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnSSB3YXMgZXhlY3V0ZWQgeWV5ZScpO1xyXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==