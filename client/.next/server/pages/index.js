(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildClient; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function buildClient({
  req
}) {
  if (true) {
    //we are on the server
    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
      Headers: req.headers
    });
  } else {}
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");

var _jsxFileName = "C:\\Users\\Admi\\Desktop\\cursos\\udemy\\microservices\\ticketing\\client\\pages\\index.js";



const main = ({
  currentUser
}) => {
  return currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "You are signed in"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "You are not signed in"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

main.getInitialProps = async ({
  req
}) => {
  //this can be changed if we deploy to heroku or another domain
  const baseURL = 'http://localhost:3001' || 0;
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseURL + '/api/users/currentuser').catch(err => {// console.log(err.message);
  });
  console.log('I was executed yeye');
  return response.data;
};

/* harmony default export */ __webpack_exports__["default"] = (main);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJyZXEiLCJheGlvcyIsImJhc2VVUkwiLCJIZWFkZXJzIiwiaGVhZGVycyIsIm1haW4iLCJjdXJyZW50VXNlciIsImdldEluaXRpYWxQcm9wcyIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsZUFBZUEsV0FBZixDQUEyQjtBQUFFQztBQUFGLENBQTNCLEVBQW9DO0FBQ2pELFlBQW1DO0FBQ2pDO0FBQ0EsV0FBT0MsbURBQUEsQ0FBYTtBQUNsQkMsYUFBTyxFQUFFLHNEQURTO0FBRWxCQyxhQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGSyxLQUFiLENBQVA7QUFJRCxHQU5ELE1BTU8sRUFLTjtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQUNBOztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFxQjtBQUNoQyxTQUFPQSxXQUFXLGdCQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQixnQkFHaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUtELENBTkQ7O0FBUUFELElBQUksQ0FBQ0UsZUFBTCxHQUF1QixPQUFPO0FBQUVQO0FBQUYsQ0FBUCxLQUFtQjtBQUN4QztBQUVBLFFBQU1FLE9BQU8sR0FDWCwyQkFDQSxDQUZGO0FBSUEsUUFBTU0sUUFBUSxHQUFHLE1BQU1QLGdEQUFBLENBQ2hCQyxPQUFPLEdBQUcsd0JBRE0sRUFFcEJPLEtBRm9CLENBRWJDLEdBQUQsSUFBUyxDQUNkO0FBQ0QsR0FKb0IsQ0FBdkI7QUFNQUMsU0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQSxTQUFPSixRQUFRLENBQUNLLElBQWhCO0FBQ0QsQ0FmRDs7QUFpQkEsK0RBQWVSLElBQWYsRTs7Ozs7Ozs7Ozs7QUM1QkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYnVpbGRDbGllbnQoeyByZXEgfSkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy93ZSBhcmUgb24gdGhlIHNlcnZlclxyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6ICdodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJyxcclxuICAgICAgSGVhZGVyczogcmVxLmhlYWRlcnMsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy93ZSBhcmUgaW4gdGhlIGJyb3dzZXJcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiAnLycsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xyXG5cclxuY29uc3QgbWFpbiA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICByZXR1cm4gY3VycmVudFVzZXIgPyAoXHJcbiAgICA8aDE+WW91IGFyZSBzaWduZWQgaW48L2gxPlxyXG4gICkgOiAoXHJcbiAgICA8aDE+WW91IGFyZSBub3Qgc2lnbmVkIGluPC9oMT5cclxuICApO1xyXG59O1xyXG5cclxubWFpbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG4gIC8vdGhpcyBjYW4gYmUgY2hhbmdlZCBpZiB3ZSBkZXBsb3kgdG8gaGVyb2t1IG9yIGFub3RoZXIgZG9tYWluXHJcblxyXG4gIGNvbnN0IGJhc2VVUkwgPVxyXG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScgfHxcclxuICAgICdodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJztcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xyXG4gICAgLmdldChiYXNlVVJMICsgJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdJIHdhcyBleGVjdXRlZCB5ZXllJyk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9