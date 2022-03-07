webpackHotUpdate_N_E("pages/index",{

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
    var _ref2, time, title;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = context && context.query || {}, time = _ref2.time, title = _ref2.title;
            console.log(title, time);
            return _context.abrupt("return", {
              props: {
                time: time,
                title: title
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkLmpzIl0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInRpbWUiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLFNBQWVBLGtCQUF0QjtBQUFBO0FBQUE7Ozt5TUFBTyxpQkFBa0NDLE9BQWxDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDa0JBLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxLQUFuQixJQUE0QixFQUQ5QyxFQUNJQyxJQURKLFNBQ0lBLElBREosRUFDU0MsS0FEVCxTQUNTQSxLQURUO0FBRUhDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQUFrQkQsSUFBbEI7QUFGRyw2Q0FHSTtBQUNISSxtQkFBSyxFQUFFO0FBQ0hKLG9CQUFJLEVBQUpBLElBREc7QUFFSEMscUJBQUssRUFBTEE7QUFGRztBQURKLGFBSEo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVVRLCtFQUF3QjtBQUFBLE1BQWJELElBQWEsUUFBYkEsSUFBYTtBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUNuQyxzQkFDSSwrREFBQyxnREFBRDtBQUFBLDRCQUNJO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDO0FBQTVCLE1BREosZUFFSTtBQUFNLFNBQUcsRUFBQyxlQUFWO0FBQTBCLFVBQUksRUFBQyxXQUEvQjtBQUEyQyxVQUFJLEVBQUM7QUFBaEQsTUFGSixlQVFJO0FBQUEsZ0JBQVFBLEtBQUssR0FBRUQsSUFBSSxHQUFFQSxJQUFJLEdBQUMsS0FBUCxHQUFjLEtBQUdDLEtBQXZCLEdBQThCO0FBQTNDLE1BUko7QUFBQSxJQURKO0FBWUgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmRjMmM4NzM4MzBlNDFjNmQxYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7dGltZSx0aXRsZX0gPSBjb250ZXh0ICYmIGNvbnRleHQucXVlcnkgfHwge307XHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZSx0aW1lKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0aW1lLFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe3RpbWUsdGl0bGV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMjYxNDU3NV8wazkyNzJwNmNjbGYuY3NzXCIvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCJmYXZpY29uLnBuZ1wiLz5cclxuICAgICAgICAgICAgey8qPG1ldGEgY2hhclNldD1cIlVURi04XCIvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259Lz5cclxuICAgICAgICAgICAgPHRpdGxlPnt0aW1lPyh0aW1lKycgfCAnKTonJ317dGl0bGV9PC90aXRsZT4qL31cclxuICAgICAgICAgICAgey8qPHRpdGxlPnt0aW1lPyh0aW1lKycgfCAnKTonJ317dGl0bGV9PC90aXRsZT4qL31cclxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZT8odGltZT8odGltZSsnIHwgJyk6JycrdGl0bGUpOifnsr7nvo7lo4HnurggfCDlv4XlupQnfTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9