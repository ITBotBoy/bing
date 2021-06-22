webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      list = _useState[0],
      updateList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      nextDate = _useState2[0],
      updateNextDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState3[0],
      updateLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isMobile = _useState4[0],
      setIsMobile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showTop = _useState5[0],
      setShowTop = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isEmpty = _useState6[0],
      setEmpty = _useState6[1];

  var checkMode = function checkMode() {
    if (window.innerWidth < 1024 || window.innerWidth < window.innerHeight) {
      setIsMobile(true);
      return true;
    }

    setIsMobile(false);
    return false;
  };

  var queryList = function queryList(nextDate, isMobile) {
    updateLoading(true);
    nextDate = String(nextDate).substr(0, 6);
    axios__WEBPACK_IMPORTED_MODULE_2___default()("/api/list?date=".concat(nextDate, "&count=10")).then(function (_ref) {
      var data = _ref.data;
      var count = 0;
      var maxCount = isMobile ? 0 : 2;
      data.data.forEach(function (item, i) {
        var span = 1; //0 1 2

        count < maxCount && maxCount && (span = Math.ceil(Math.random() * 2));
        maxCount - count === 10 - i && maxCount && (span = 2);
        console.log(maxCount, span, isMobile);
        span === 2 && (count += 1);
        item.style = {
          gridColumnStart: "span ".concat(span),
          gridRowStart: "span ".concat(span)
        };
        item.dateStr = moment__WEBPACK_IMPORTED_MODULE_5___default()(item.date, 'YYYYMMDD').format('YY.MM.DD');
        item.span = span;
      });
      var last = data.data.last();
      updateList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.data)));
      !last.prev && setEmpty(true);
      updateNextDate(last.prev);
      updateLoading(false);
    });
  };

  var $page = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function (e) {
    window.onscroll = function () {
      if (loading || isEmpty) {
        return;
      }

      setShowTop(document.documentElement.scrollTop > 700);

      if (document.documentElement.clientHeight + document.documentElement.scrollTop + 50 > $page.current.clientHeight) {
        queryList(nextDate, isMobile);
      }
    };

    setTimeout(function () {
      window.onscroll();
    });
  }, [nextDate, loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var isMobile = checkMode();

    Array.prototype.last = function () {
      return this[this.length - 1];
    };

    queryList(nextDate, isMobile);
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
    className: "index-page ".concat(isMobile && 'mobile-page'),
    ref: $page,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_Head__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "img-list",
      style: {
        gridTemplateRows: isMobile ? "repeat(".concat(list.length, ", 75vw)") : "repeat(".concat(Math.ceil(list.length / 10) * 4, ", 19vw)")
      },
      children: list.map(function (img) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
          className: "img-item",
          style: img.style,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
            className: "cover",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
              className: "iconfont icon-fangda actionBtn",
              href: "/".concat(img.date)
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
              className: "text",
              children: img.cp
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
            className: "date-str size-".concat(img.span),
            children: img.dateStr
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
            className: "img-bg",
            style: {
              backgroundImage: "url('//cn.bing.com".concat(img.urlbase, "_").concat(false ? undefined : '1024x768', ".jpg')")
            }
          })]
        }, img.date);
      })
    }), isEmpty && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "empty-text",
      children: "\u2014\u2014 \u5230\u5E95\u5566 \u2014\u2014"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
      className: "right-btn",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
        className: "to-top iconfont icon-arrow-left ".concat(!showTop && 'hide'),
        onClick: function onClick() {
          return window.scrollTo(0, 0);
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
        className: "iconfont icon-touzi",
        href: "/random"
      })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJsaXN0IiwidXBkYXRlTGlzdCIsIm5leHREYXRlIiwidXBkYXRlTmV4dERhdGUiLCJsb2FkaW5nIiwidXBkYXRlTG9hZGluZyIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJzaG93VG9wIiwic2V0U2hvd1RvcCIsImlzRW1wdHkiLCJzZXRFbXB0eSIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInF1ZXJ5TGlzdCIsIlN0cmluZyIsInN1YnN0ciIsImF4aW9zIiwidGhlbiIsImRhdGEiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZFJvd1N0YXJ0IiwiZGF0ZVN0ciIsIm1vbWVudCIsImRhdGUiLCJmb3JtYXQiLCJsYXN0IiwicHJldiIsIiRwYWdlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZSIsIm9uc2Nyb2xsIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJjbGllbnRIZWlnaHQiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsIkFycmF5IiwicHJvdG90eXBlIiwibGVuZ3RoIiwiZ3JpZFRlbXBsYXRlUm93cyIsIm1hcCIsImltZyIsImNwIiwiYmFja2dyb3VuZEltYWdlIiwidXJsYmFzZSIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSwyRUFBWTtBQUFBLGtCQUVJQSxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWhCQyxJQUZnQjtBQUFBLE1BRVZDLFVBRlU7O0FBQUEsbUJBR1lGLHNEQUFRLENBQUMsQ0FBRCxDQUhw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UUFISjtBQUFBLE1BekJKO0FBQUEsSUFGSjtBQWtDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lY2RmOTAxNmQ1YjM0YzY1M2ZlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IFtsaXN0LCB1cGRhdGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbmV4dERhdGUsIHVwZGF0ZU5leHREYXRlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtsb2FkaW5nLCB1cGRhdGVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd1RvcCwgc2V0U2hvd1RvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzRW1wdHksIHNldEVtcHR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjaGVja01vZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQgfHwgd2luZG93LmlubmVyV2lkdGggPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHNldElzTW9iaWxlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SXNNb2JpbGUoZmFsc2UpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUxpc3QgPSAobmV4dERhdGUsIGlzTW9iaWxlKSA9PiB7XG4gICAgICAgIHVwZGF0ZUxvYWRpbmcodHJ1ZSk7XG4gICAgICAgIG5leHREYXRlPVN0cmluZyhuZXh0RGF0ZSkuc3Vic3RyKDAsNilcbiAgICAgICAgYXhpb3MoYC9hcGkvbGlzdD9kYXRlPSR7bmV4dERhdGV9JmNvdW50PTEwYClcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heENvdW50ID0gaXNNb2JpbGUgPyAwIDogMjtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIC8vMCAxIDJcbiAgICAgICAgICAgICAgICAgICAgKGNvdW50IDwgbWF4Q291bnQpICYmIG1heENvdW50ICYmIChzcGFuID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAyKSk7XG4gICAgICAgICAgICAgICAgICAgICgobWF4Q291bnQgLSBjb3VudCkgPT09ICgxMCAtIGkpKSAmJiBtYXhDb3VudCAmJiAoc3BhbiA9IDIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1heENvdW50LCBzcGFuLCBpc01vYmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPT09IDIgJiYgKGNvdW50ICs9IDEpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtblN0YXJ0OiBgc3BhbiAke3NwYW59YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRSb3dTdGFydDogYHNwYW4gJHtzcGFufWAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kYXRlU3RyID0gbW9tZW50KGl0ZW0uZGF0ZSwgJ1lZWVlNTUREJykuZm9ybWF0KCdZWS5NTS5ERCcpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNwYW4gPSBzcGFuO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IGRhdGEuZGF0YS5sYXN0KClcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0KFsuLi5saXN0LCAuLi5kYXRhLmRhdGFdKTtcbiAgICAgICAgICAgICAgICAhbGFzdC5wcmV2ICYmIHNldEVtcHR5KHRydWUpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU5leHREYXRlKGxhc3QucHJldik7XG4gICAgICAgICAgICAgICAgdXBkYXRlTG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgJHBhZ2UgPSB1c2VSZWYoKTtcblxuICAgIHVzZUVmZmVjdCgoZSkgPT4ge1xuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9hZGluZyB8fCBpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2hvd1RvcChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNzAwKTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCArIDUwID4gJHBhZ2UuY3VycmVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBxdWVyeUxpc3QobmV4dERhdGUsIGlzTW9iaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5vbnNjcm9sbCgpO1xuICAgICAgICB9KVxuICAgIH0sIFtuZXh0RGF0ZSwgbG9hZGluZ10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSBjaGVja01vZGUoKTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVlcnlMaXN0KG5leHREYXRlLCBpc01vYmlsZSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbmRleC1wYWdlICR7aXNNb2JpbGUgJiYgJ21vYmlsZS1wYWdlJ31gfSByZWY9eyRwYWdlfT5cbiAgICAgICAgICAgIDxIZWFkPjwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWxpc3RcIlxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogaXNNb2JpbGUgPyBgcmVwZWF0KCR7bGlzdC5sZW5ndGh9LCA3NXZ3KWAgOiBgcmVwZWF0KCR7TWF0aC5jZWlsKGxpc3QubGVuZ3RoIC8gMTApICogNH0sIDE5dncpYFxuICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QubWFwKChpbWcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2ltZy5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ltZy5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1mYW5nZGEgYWN0aW9uQnRuXCIgaHJlZj17YC8ke2ltZy5kYXRlfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPntpbWcuY3B9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZGF0ZS1zdHIgc2l6ZS0ke2ltZy5zcGFufWB9PntpbWcuZGF0ZVN0cn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1iZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgnLy9jbi5iaW5nLmNvbSR7aW1nLnVybGJhc2V9XyR7ZmFsc2UgPyAnNzY4eDEyODAnIDogJzEwMjR4NzY4J30uanBnJylgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aXNFbXB0eSAmJiA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LXRleHRcIj7igJTigJQg5Yiw5bqV5ZWmIOKAlOKAlDwvZGl2Pn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtYnRuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0by10b3AgaWNvbmZvbnQgaWNvbi1hcnJvdy1sZWZ0ICR7IXNob3dUb3AgJiYgJ2hpZGUnfWB9XG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCl9Lz5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLXRvdXppXCIgaHJlZj0nL3JhbmRvbScvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=