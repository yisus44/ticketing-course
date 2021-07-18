self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildClient; }
/* harmony export */ });
/* harmony import */ var C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



function buildClient(_x) {
  return _buildClient.apply(this, arguments);
}

function _buildClient() {
  _buildClient = (0,C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref) {
    var req;
    return C_Users_Admi_Desktop_cursos_udemy_microservices_ticketing_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;

            if (true) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_2___default().create({
              baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
              Headers: req.headers
            }));

          case 5:
            return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_2___default().create({
              baseURL: '/'
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _buildClient.apply(this, arguments);
}

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


/***/ }),

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
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Admi\\Desktop\\cursos\\udemy\\microservices\\ticketing\\client\\pages\\index.js",
    _this = undefined;




var main = function main(_ref) {
  var currentUser = _ref.currentUser;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
    children: "Pongan bachata 3"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2J1aWxkLWNsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJyZXEiLCJheGlvcyIsImJhc2VVUkwiLCJIZWFkZXJzIiwiaGVhZGVycyIsIm1haW4iLCJjdXJyZW50VXNlciIsImdldEluaXRpYWxQcm9wcyIsInByZWZpeCIsIm9wdHMiLCJlcnIiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQWVBLFdBQTlCO0FBQUE7QUFBQTs7O3FWQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QkMsZUFBN0IsUUFBNkJBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQUdKQyxtREFBQSxDQUFhO0FBQ2xCQyxxQkFBTyxFQUFFLHNEQURTO0FBRWxCQyxxQkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRkssYUFBYixDQUhJOztBQUFBO0FBQUEsNkNBU0pILG1EQUFBLENBQWE7QUFDbEJDLHFCQUFPLEVBQUU7QUFEUyxhQUFiLENBVEk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjtBQUNBOztBQUVBLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNoQyxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDs7QUFJQUQsSUFBSSxDQUFDRSxlQUFMO0FBQUEsa1ZBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTUCxlQUFULFNBQVNBLEdBQVQ7QUFDckI7QUFDTVEsa0JBRmUsR0FHbkIsMkJBQ0EsQ0FKbUI7O0FBS3JCLHVCQUFtQyxFQUFuQyxNQUVPLENBQ0w7QUFDRCxlQVRvQixDQVVyQjs7O0FBQ01DLGdCQVhlLEdBV1I7QUFDWEwscUJBQU8sRUFBRUosR0FBRyxDQUFDSTtBQURGLGFBWFE7QUFBQTtBQUFBLG1CQWNFSCxnREFBQSxDQUNoQk8sTUFBTSxHQUFHLHdCQURPLFdBRWQsVUFBQ0UsR0FBRCxFQUFTLENBQ2Q7QUFDRCxhQUpvQixDQWRGOztBQUFBO0FBY2ZDLG9CQWRlO0FBb0JyQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBcEJxQiw2Q0FxQmRGLFFBQVEsQ0FBQ0csSUFyQks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JBLCtEQUFlVCxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ0ZWU5NzgwYmY4YTc2Y2M2MjJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYnVpbGRDbGllbnQoeyByZXEgfSkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy93ZSBhcmUgb24gdGhlIHNlcnZlclxyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6ICdodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJyxcclxuICAgICAgSGVhZGVyczogcmVxLmhlYWRlcnMsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy93ZSBhcmUgaW4gdGhlIGJyb3dzZXJcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiAnLycsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xyXG5cclxuY29uc3QgbWFpbiA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICByZXR1cm4gPGgxPlBvbmdhbiBiYWNoYXRhIDM8L2gxPjtcclxufTtcclxuXHJcbm1haW4uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcclxuICAvL3RoaXMgY2FuIGJlIGNoYW5nZWQgaWYgd2UgZGVwbG95IHRvIGhlcm9rdVxyXG4gIGNvbnN0IHByZWZpeCA9XHJcbiAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAxJyB8fFxyXG4gICAgJ2h0dHA6Ly9pbmdyZXNzLW5naW54LmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWwnO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy93ZSBhcmUgb24gdGhlIHNlcnZlclxyXG4gIH0gZWxzZSB7XHJcbiAgICAvL3dlIGFyZSBpbiB0aGUgYnJvd3NlclxyXG4gIH1cclxuICAvL2NvZGUgdGhhdCB3b3VsZCBiZSB1c2VkIGlmIHdlIHVzZWQga3ViZXJuZXRlc1xyXG4gIGNvbnN0IG9wdHMgPSB7XHJcbiAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcclxuICB9O1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NcclxuICAgIC5nZXQocHJlZml4ICsgJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdJIHdhcyBleGVjdXRlZCB5ZXllJyk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9