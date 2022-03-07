webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);





function getServerSideProps(_x) {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var _ref2, time, title, description;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = context && context.query || {}, time = _ref2.time, title = _ref2.title, description = _ref2.description;
            console.log(title, time);
            return _context.abrupt("return", {
              props: {
                time: time,
                title: title,
                description: description
              }
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getServerSideProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var time = _ref.time,
      title = _ref.title;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_2614575_0k9272p6cclf.css"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
      rel: "shortcut icon",
      type: "image/png",
      href: "favicon.png"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("title", {
      children: title ? time ? time + ' | ' : '' + title : '精美壁纸 | 必应'
    })]
  });
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkLmpzIl0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInRpbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBZUEsa0JBQXRCO0FBQUE7QUFBQTs7O3lNQUFPLGlCQUFrQ0MsT0FBbEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUM4QkEsT0FBTyxJQUFJQSxPQUFPLENBQUNDLEtBQW5CLElBQTRCLEVBRDFELEVBQ0lDLElBREosU0FDSUEsSUFESixFQUNTQyxLQURULFNBQ1NBLEtBRFQsRUFDZUMsV0FEZixTQUNlQSxXQURmO0FBRUhDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUFrQkQsSUFBbEI7QUFGRyw2Q0FHSTtBQUNISyxtQkFBSyxFQUFFO0FBQ0hMLG9CQUFJLEVBQUpBLElBREc7QUFFSEMscUJBQUssRUFBTEEsS0FGRztBQUdIQywyQkFBVyxFQUFYQTtBQUhHO0FBREosYUFISjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBV1EsK0VBQXdCO0FBQUEsTUFBYkYsSUFBYSxRQUFiQSxJQUFhO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQ25DLHNCQUNJLCtEQUFDLGdEQUFEO0FBQUEsNEJBQ0k7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUM7QUFBNUIsTUFESixlQUVJO0FBQU0sU0FBRyxFQUFDLGVBQVY7QUFBMEIsVUFBSSxFQUFDLFdBQS9CO0FBQTJDLFVBQUksRUFBQztBQUFoRCxNQUZKLGVBUUk7QUFBQSxnQkFBUUEsS0FBSyxHQUFFRCxJQUFJLEdBQUVBLElBQUksR0FBQyxLQUFQLEdBQWMsS0FBR0MsS0FBdkIsR0FBOEI7QUFBM0MsTUFSSjtBQUFBLElBREo7QUFZSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdjZjE2YWNmNzUzZmE0NGM2MTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qge3RpbWUsdGl0bGUsZGVzY3JpcHRpb259ID0gY29udGV4dCAmJiBjb250ZXh0LnF1ZXJ5IHx8IHt9O1xyXG4gICAgY29uc29sZS5sb2codGl0bGUsdGltZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdGltZSxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7dGltZSx0aXRsZX0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9hdC5hbGljZG4uY29tL3QvZm9udF8yNjE0NTc1XzBrOTI3MnA2Y2NsZi5jc3NcIi8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cImZhdmljb24ucG5nXCIvPlxyXG4gICAgICAgICAgICB7Lyo8bWV0YSBjaGFyU2V0PVwiVVRGLThcIi8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0vPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpbWU/KHRpbWUrJyB8ICcpOicnfXt0aXRsZX08L3RpdGxlPiovfVxyXG4gICAgICAgICAgICB7Lyo8dGl0bGU+e3RpbWU/KHRpbWUrJyB8ICcpOicnfXt0aXRsZX08L3RpdGxlPiovfVxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlPyh0aW1lPyh0aW1lKycgfCAnKTonJyt0aXRsZSk6J+eyvue+juWjgee6uCB8IOW/heW6lCd9PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=