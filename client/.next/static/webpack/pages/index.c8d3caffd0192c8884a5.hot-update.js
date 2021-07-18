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
            } //code that would be used if we used kubernetes


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFpbiIsImN1cnJlbnRVc2VyIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJlZml4Iiwib3B0cyIsImhlYWRlcnMiLCJIb3N0IiwiYXhpb3MiLCJlcnIiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBcUI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ2hDLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztBQUlBRCxJQUFJLENBQUNFLGVBQUwsb1ZBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQjtBQUNNQyxnQkFGZSxHQUduQiwyQkFDQSxDQUptQjs7QUFLckIscUJBQW1DLEVBQW5DLE1BRU8sQ0FDTDtBQUNELGFBVG9CLENBVXJCOzs7QUFDTUMsY0FYZSxHQVdSO0FBQ1hDLG1CQUFPLEVBQUU7QUFDUEMsa0JBQUksRUFBRTtBQURDO0FBREUsV0FYUTtBQUFBO0FBQUEsaUJBZ0JFQyxnREFBQSxDQUNoQkosTUFBTSxHQUFHLHdCQURPLFdBRWQsVUFBQ0ssR0FBRCxFQUFTLENBQ2Q7QUFDRCxXQUpvQixDQWhCRjs7QUFBQTtBQWdCZkMsa0JBaEJlO0FBc0JyQkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBdEJxQiwyQ0F1QmRGLFFBQVEsQ0FBQ0csSUF2Qks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUEwQkEsK0RBQWVaLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzhkM2NhZmZkMDE5MmM4ODg0YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBtYWluID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiA8aDE+UG9uZ2FuIGJhY2hhdGEgMzwvaDE+O1xyXG59O1xyXG5cclxubWFpbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy90aGlzIGNhbiBiZSBjaGFuZ2VkIGlmIHdlIGRlcGxveSB0byBoZXJva3VcclxuICBjb25zdCBwcmVmaXggPVxyXG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScgfHxcclxuICAgICdodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJztcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vd2UgYXJlIG9uIHRoZSBzZXJ2ZXJcclxuICB9IGVsc2Uge1xyXG4gICAgLy93ZSBhcmUgaW4gdGhlIGJyb3dzZXJcclxuICB9XHJcbiAgLy9jb2RlIHRoYXQgd291bGQgYmUgdXNlZCBpZiB3ZSB1c2VkIGt1YmVybmV0ZXNcclxuICBjb25zdCBvcHRzID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBIb3N0OiAndGlja2V0aW5nLmRldicsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xyXG4gICAgLmdldChwcmVmaXggKyAnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0kgd2FzIGV4ZWN1dGVkIHlleWUnKTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=