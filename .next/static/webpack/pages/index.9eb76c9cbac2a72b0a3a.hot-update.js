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
              href: "/".concat(img.date.substr(0, 6))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJsaXN0IiwidXBkYXRlTGlzdCIsIm5leHREYXRlIiwidXBkYXRlTmV4dERhdGUiLCJsb2FkaW5nIiwidXBkYXRlTG9hZGluZyIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJzaG93VG9wIiwic2V0U2hvd1RvcCIsImlzRW1wdHkiLCJzZXRFbXB0eSIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInF1ZXJ5TGlzdCIsIlN0cmluZyIsInN1YnN0ciIsImF4aW9zIiwidGhlbiIsImRhdGEiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZFJvd1N0YXJ0IiwiZGF0ZVN0ciIsIm1vbWVudCIsImRhdGUiLCJmb3JtYXQiLCJsYXN0IiwicHJldiIsIiRwYWdlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZSIsIm9uc2Nyb2xsIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJjbGllbnRIZWlnaHQiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsIkFycmF5IiwicHJvdG90eXBlIiwibGVuZ3RoIiwiZ3JpZFRlbXBsYXRlUm93cyIsIm1hcCIsImltZyIsImNwIiwiYmFja2dyb3VuZEltYWdlIiwidXJsYmFzZSIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSwyRUFBWTtBQUFBLGtCQUVJQSxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWhCQyxJQUZnQjtBQUFBLE1BRVZDLFVBRlU7O0FBQUEsbUJBR1lGLHNEQUFRLENBQUMsQ0FBRCxDQUhw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RyxpQkFBUyxFQUFDLHFCQUFiO0FBQW1DLFlBQUksRUFBQztBQUF4QyxRQUhKO0FBQUEsTUF6Qko7QUFBQSxJQUZKO0FBa0NIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjllYjc2YzljYmFjMmE3MmIwYTNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgW2xpc3QsIHVwZGF0ZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtuZXh0RGF0ZSwgdXBkYXRlTmV4dERhdGVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHVwZGF0ZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93VG9wLCBzZXRTaG93VG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNFbXB0eSwgc2V0RW1wdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGNoZWNrTW9kZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgc2V0SXNNb2JpbGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRJc01vYmlsZShmYWxzZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IChuZXh0RGF0ZSwgaXNNb2JpbGUpID0+IHtcbiAgICAgICAgdXBkYXRlTG9hZGluZyh0cnVlKTtcbiAgICAgICAgbmV4dERhdGU9U3RyaW5nKG5leHREYXRlKS5zdWJzdHIoMCw2KVxuICAgICAgICBheGlvcyhgL2FwaS9saXN0P2RhdGU9JHtuZXh0RGF0ZX0mY291bnQ9MTBgKVxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4Q291bnQgPSBpc01vYmlsZSA/IDAgOiAyO1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGFuID0gMTtcbiAgICAgICAgICAgICAgICAgICAgLy8wIDEgMlxuICAgICAgICAgICAgICAgICAgICAoY291bnQgPCBtYXhDb3VudCkgJiYgbWF4Q291bnQgJiYgKHNwYW4gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgKChtYXhDb3VudCAtIGNvdW50KSA9PT0gKDEwIC0gaSkpICYmIG1heENvdW50ICYmIChzcGFuID0gMik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWF4Q291bnQsIHNwYW4sIGlzTW9iaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiA9PT0gMiAmJiAoY291bnQgKz0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkQ29sdW1uU3RhcnQ6IGBzcGFuICR7c3Bhbn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFJvd1N0YXJ0OiBgc3BhbiAke3NwYW59YCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRhdGVTdHIgPSBtb21lbnQoaXRlbS5kYXRlLCAnWVlZWU1NREQnKS5mb3JtYXQoJ1lZLk1NLkREJyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3BhbiA9IHNwYW47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gZGF0YS5kYXRhLmxhc3QoKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3QoWy4uLmxpc3QsIC4uLmRhdGEuZGF0YV0pO1xuICAgICAgICAgICAgICAgICFsYXN0LnByZXYgJiYgc2V0RW1wdHkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dERhdGUobGFzdC5wcmV2KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCAkcGFnZSA9IHVzZVJlZigpO1xuXG4gICAgdXNlRWZmZWN0KChlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nIHx8IGlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTaG93VG9wKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA3MDApO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICsgNTAgPiAkcGFnZS5jdXJyZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5TGlzdChuZXh0RGF0ZSwgaXNNb2JpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93Lm9uc2Nyb2xsKCk7XG4gICAgICAgIH0pXG4gICAgfSwgW25leHREYXRlLCBsb2FkaW5nXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc01vYmlsZSA9IGNoZWNrTW9kZSgpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICBxdWVyeUxpc3QobmV4dERhdGUsIGlzTW9iaWxlKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGluZGV4LXBhZ2UgJHtpc01vYmlsZSAmJiAnbW9iaWxlLXBhZ2UnfWB9IHJlZj17JHBhZ2V9PlxuICAgICAgICAgICAgPEhlYWQ+PC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbGlzdFwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiBpc01vYmlsZSA/IGByZXBlYXQoJHtsaXN0Lmxlbmd0aH0sIDc1dncpYCA6IGByZXBlYXQoJHtNYXRoLmNlaWwobGlzdC5sZW5ndGggLyAxMCkgKiA0fSwgMTl2dylgXG4gICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5tYXAoKGltZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aW1nLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW1nLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWZhbmdkYSBhY3Rpb25CdG5cIiBocmVmPXtgLyR7aW1nLmRhdGUuc3Vic3RyKDAsNil9YH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2ltZy5jcH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkYXRlLXN0ciBzaXplLSR7aW1nLnNwYW59YH0+e2ltZy5kYXRlU3RyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWJnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCcvL2NuLmJpbmcuY29tJHtpbWcudXJsYmFzZX1fJHtmYWxzZSA/ICc3Njh4MTI4MCcgOiAnMTAyNHg3NjgnfS5qcGcnKWB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpc0VtcHR5ICYmIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktdGV4dFwiPuKAlOKAlCDliLDlupXllaYg4oCU4oCUPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1idG5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvLXRvcCBpY29uZm9udCBpY29uLWFycm93LWxlZnQgJHshc2hvd1RvcCAmJiAnaGlkZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX0vPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tdG91emlcIiBocmVmPScvcmFuZG9tJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==