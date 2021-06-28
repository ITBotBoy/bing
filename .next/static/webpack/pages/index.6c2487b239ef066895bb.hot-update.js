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
/* harmony import */ var _components_downDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/downDialog */ "./components/downDialog.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");











/*export default class Page extends React.Component {
    componentDidMount () {
        likeFun()
    }
    render (){
        return PageFun()
    }
}*/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      downDialogVisible = _useState[0],
      setDownDialogVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      list = _useState2[0],
      updateList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      img = _useState3[0],
      updateImg = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      nextDate = _useState4[0],
      updateNextDate = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState5[0],
      updateLoading = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isMobile = _useState6[0],
      setIsMobile = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showTop = _useState7[0],
      setShowTop = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isEmpty = _useState8[0],
      setEmpty = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      sortInfo = _useState9[0],
      setSortInfo = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      likeList = _useState10[0],
      setLikeList = _useState10[1];

  var checkMode = function checkMode() {
    if (window.innerWidth < 1024 || window.innerWidth < window.innerHeight) {
      setIsMobile(true);
      return true;
    }

    setIsMobile(false);
    return false;
  };

  var likeFun = function likeFun(data) {
    var localLikeList = window.localStorage.getItem('localLikeList');

    if (!likeList.length && localLikeList) {
      setLikeList(JSON.parse(localLikeList));
    }

    if (data) {
      localLikeList = localLikeList ? JSON.parse(localLikeList) : [];

      if (!localLikeList.includes(data)) {
        axios__WEBPACK_IMPORTED_MODULE_2___default()("/api/sort?date=".concat(data, "&k=likeCount")).then(function (res) {
          if (res.data.likeCount) {
            if (!sortInfo[data]) {
              sortInfo[data] = {
                likeCount: 0
              };
            }

            sortInfo[data].likeCount = res.data.likeCount;
            setSortInfo(sortInfo);
            localLikeList.push(data);
            setLikeList(localLikeList);
            window.localStorage.setItem('localLikeList', JSON.stringify(localLikeList));
          }
        });
      }
    }
  };

  var throttleLikeFun = lodash_throttle__WEBPACK_IMPORTED_MODULE_8___default()(function (data) {
    return likeFun(data);
  }, 1500);

  if ( true && window) {
    likeFun();
  }

  var downloadFun = function downloadFun(data) {
    if (data) {
      axios__WEBPACK_IMPORTED_MODULE_2___default()("/api/sort?date=".concat(data, "&k=downloadCount")).then(function (res) {
        if (res.data.likeCount) {
          if (!sortInfo[data]) {
            sortInfo[data] = {
              downloadCount: 0
            };
          }

          sortInfo[data].downloadCount = res.data.downloadCount;
          setSortInfo(sortInfo);
        }
      });
    }
  };

  var queryList = function queryList(nextDate, isMobile) {
    updateLoading(true); // nextDate=String(nextDate).substr(0,6)

    axios__WEBPACK_IMPORTED_MODULE_2___default()("/api/list?date=".concat(nextDate, "&count=28")).then(function (_ref) {
      var data = _ref.data;
      var count = 0;
      var maxCount = isMobile ? 0 : 2;
      data.data.forEach(function (item, i) {
        var span = 1; //0 1 2

        count < maxCount && maxCount && (span = Math.ceil(Math.random() * 2)); // 10-i,第8张换span  8 16 24

        !(i % 8) && maxCount && (span = 2); // console.log(maxCount, span, isMobile);

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
      console.log(document.documentElement.clientHeight, $page.current.clientHeight);
      console.log(document.documentElement.scrollTop);

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

    axios__WEBPACK_IMPORTED_MODULE_2___default()("/api/sort").then(function (res) {
      setSortInfo(res.data);
    });
    queryList(nextDate, isMobile);
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
    className: "index-page ".concat(isMobile && 'mobile-page'),
    ref: $page,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_Head__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "img-list",
      style: {
        gridTemplateRows: isMobile ? "repeat(".concat(list.length, ", 75vw)") : "repeat(".concat(Math.ceil(list.length / 28) * 4, ", 19vw)")
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
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
            className: "handleButton",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
              className: (likeList.includes(img.date) ? 'icon-like-fill' : 'icon-xihuan') + ' iconfont',
              onClick: function onClick() {
                throttleLikeFun(img.date);
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
                className: "count",
                children: sortInfo[img.date] && sortInfo[img.date].likeCount || 0
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
              onClick: function onClick() {
                setDownDialogVisible(true);
                updateImg(img);
              },
              className: "iconfont icon-download",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
                className: "count",
                children: sortInfo[img.date] && sortInfo[img.date].downloadCount || 0
              })
            })]
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
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_downDialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
      downloadFun: downloadFun,
      isMobile: isMobile,
      visible: downDialogVisible,
      onHide: function onHide() {
        setDownDialogVisible(false);
        updateImg({});
      },
      imgInfo: img
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwibGlzdCIsInVwZGF0ZUxpc3QiLCJpbWciLCJ1cGRhdGVJbWciLCJuZXh0RGF0ZSIsInVwZGF0ZU5leHREYXRlIiwibG9hZGluZyIsInVwZGF0ZUxvYWRpbmciLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwic2hvd1RvcCIsInNldFNob3dUb3AiLCJpc0VtcHR5Iiwic2V0RW1wdHkiLCJzb3J0SW5mbyIsInNldFNvcnRJbmZvIiwibGlrZUxpc3QiLCJzZXRMaWtlTGlzdCIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpa2VGdW4iLCJkYXRhIiwibG9jYWxMaWtlTGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJKU09OIiwicGFyc2UiLCJpbmNsdWRlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImxpa2VDb3VudCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGhyb3R0bGVMaWtlRnVuIiwidGhyb3R0bGUiLCJkb3dubG9hZEZ1biIsImRvd25sb2FkQ291bnQiLCJxdWVyeUxpc3QiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwic3R5bGUiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJkYXRlU3RyIiwibW9tZW50IiwiZGF0ZSIsImZvcm1hdCIsImxhc3QiLCJwcmV2IiwiJHBhZ2UiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJlIiwib25zY3JvbGwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRIZWlnaHQiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsIkFycmF5IiwicHJvdG90eXBlIiwiZ3JpZFRlbXBsYXRlUm93cyIsIm1hcCIsImNwIiwiYmFja2dyb3VuZEltYWdlIiwidXJsYmFzZSIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSwyRUFBVztBQUFBLGtCQUM0QkEsc0RBQVEsQ0FBQyxLQUFELENBRHBDO0FBQUEsTUFDZkMsaUJBRGU7QUFBQSxNQUNJQyxvQkFESjs7QUFBQSxtQkFFS0Ysc0RBQVEsQ0FBQyxFQUFELENBRmI7QUFBQSxNQUVmRyxJQUZlO0FBQUEsTUFFVEMsVUFGUzs7QUFBQSxtQkFHR0osc0RBQVEsQ0FBQyxFQUFELENBSFg7QUFBQSxNQUdmSyxHQUhlO0FBQUEsTUFHVkMsU0FIVTs7QUFBQSxtQkFJYU4sc0RBQVEsQ0FBQyxDQUFELENBSnJCO0FBQUEsTUFJZk8sUUFKZTtBQUFBLE1BSUxDLGNBSks7O0FBQUEsbUJBS1dSLHNEQUFRLENBQUMsS0FBRCxDQUxuQjtBQUFBLE1BS2ZTLE9BTGU7QUFBQSxNQUtOQyxhQUxNOztBQUFBLG1CQU1VVixzREFBUSxDQUFDLEtBQUQsQ0FObEI7QUFBQSxNQU1mVyxRQU5lO0FBQUEsTUFNTEMsV0FOSzs7QUFBQSxtQkFPUVosc0RBQVEsQ0FBQyxLQUFELENBUGhCO0FBQUEsTUFPZmEsT0FQZTtBQUFBLE1BT05DLFVBUE07O0FBQUEsbUJBUU1kLHNEQUFRLENBQUMsS0FBRCxDQVJkO0FBQUEsTUFRZmUsT0FSZTtBQUFBLE1BUU5DLFFBUk07O0FBQUEsbUJBU1VoQixzREFBUSxDQUFDLEVBQUQsQ0FUbEI7QUFBQSxNQVNmaUIsUUFUZTtBQUFBLE1BU0xDLFdBVEs7O0FBQUEsb0JBVVVsQixzREFBUSxDQUFDLEVBQUQsQ0FWbEI7QUFBQSxNQVVmbUIsUUFWZTtBQUFBLE1BVUxDLFdB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SyxpQkFBUyw0Q0FBcUMsQ0FBQ0YsT0FBRCxJQUFZLE1BQWpELENBQWQ7QUFDSyxlQUFPLEVBQUU7QUFBQSxpQkFBTVMsTUFBTSxDQUFDOEQsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFOO0FBQUE7QUFEZCxRQURKLGVBR0k7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQW1DLFlBQUksRUFBQztBQUF4QyxRQUhKO0FBQUEsTUFqQ0osZUFzQ0ksOERBQUMsOERBQUQ7QUFBWSxpQkFBVyxFQUFFekMsV0FBekI7QUFBc0MsY0FBUSxFQUFFaEMsUUFBaEQ7QUFBMEQsYUFBTyxFQUFFVixpQkFBbkU7QUFBc0YsWUFBTSxFQUFFLGtCQUFNO0FBQUNDLDRCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFBNEJJLGlCQUFTLENBQUMsRUFBRCxDQUFUO0FBQWUsT0FBaEo7QUFDWSxhQUFPLEVBQUVEO0FBRHJCLE1BdENKO0FBQUEsSUFESjtBQTJDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YzI0ODdiMjM5ZWYwNjY4OTViYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRcIjtcbmltcG9ydCBEb3duRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2Rvd25EaWFsb2dcIjtcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuXG5pbXBvcnQge1NwaW59IGZyb20gXCJhbnRkXCI7XG4vKmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgbGlrZUZ1bigpXG4gICAgfVxuICAgIHJlbmRlciAoKXtcbiAgICAgICAgcmV0dXJuIFBhZ2VGdW4oKVxuICAgIH1cbn0qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW2Rvd25EaWFsb2dWaXNpYmxlLCBzZXREb3duRGlhbG9nVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xpc3QsIHVwZGF0ZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtpbWcsIHVwZGF0ZUltZ10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW25leHREYXRlLCB1cGRhdGVOZXh0RGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbG9hZGluZywgdXBkYXRlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dUb3AsIHNldFNob3dUb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0VtcHR5LCBzZXRFbXB0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NvcnRJbmZvLCBzZXRTb3J0SW5mb10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW2xpa2VMaXN0LCBzZXRMaWtlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgY2hlY2tNb2RlID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDI0IHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBzZXRJc01vYmlsZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHNldElzTW9iaWxlKGZhbHNlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGxpa2VGdW4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgbG9jYWxMaWtlTGlzdD13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsTGlrZUxpc3QnKVxuICAgICAgICBpZighbGlrZUxpc3QubGVuZ3RoICYmIGxvY2FsTGlrZUxpc3Qpe1xuICAgICAgICAgICAgc2V0TGlrZUxpc3QoSlNPTi5wYXJzZShsb2NhbExpa2VMaXN0KSlcbiAgICAgICAgfVxuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGxvY2FsTGlrZUxpc3Q9bG9jYWxMaWtlTGlzdD9KU09OLnBhcnNlKGxvY2FsTGlrZUxpc3QpOltdXG4gICAgICAgICAgICBpZighbG9jYWxMaWtlTGlzdC5pbmNsdWRlcyhkYXRhKSl7XG4gICAgICAgICAgICAgICAgYXhpb3MoYC9hcGkvc29ydD9kYXRlPSR7ZGF0YX0maz1saWtlQ291bnRgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubGlrZUNvdW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighc29ydEluZm9bZGF0YV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXT17bGlrZUNvdW50OjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdLmxpa2VDb3VudD1yZXMuZGF0YS5saWtlQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0SW5mbyhzb3J0SW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbExpa2VMaXN0LnB1c2goZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaWtlTGlzdChsb2NhbExpa2VMaXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxMaWtlTGlzdCcsSlNPTi5zdHJpbmdpZnkobG9jYWxMaWtlTGlzdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGhyb3R0bGVMaWtlRnVuPXRocm90dGxlKChkYXRhKT0+bGlrZUZ1bihkYXRhKSwxNTAwKVxuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyl7XG4gICAgICAgIGxpa2VGdW4oKVxuICAgIH1cbiAgICBjb25zdCBkb3dubG9hZEZ1biA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgYXhpb3MoYC9hcGkvc29ydD9kYXRlPSR7ZGF0YX0maz1kb3dubG9hZENvdW50YClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5saWtlQ291bnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXNvcnRJbmZvW2RhdGFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXT17ZG93bmxvYWRDb3VudDowfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV0uZG93bmxvYWRDb3VudD1yZXMuZGF0YS5kb3dubG9hZENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0SW5mbyhzb3J0SW5mbylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcXVlcnlMaXN0ID0gKG5leHREYXRlLCBpc01vYmlsZSkgPT4ge1xuICAgICAgICB1cGRhdGVMb2FkaW5nKHRydWUpO1xuICAgICAgICAvLyBuZXh0RGF0ZT1TdHJpbmcobmV4dERhdGUpLnN1YnN0cigwLDYpXG4gICAgICAgIGF4aW9zKGAvYXBpL2xpc3Q/ZGF0ZT0ke25leHREYXRlfSZjb3VudD0yOGApXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IGlzTW9iaWxlID8gMCA6IDI7XG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW4gPSAxO1xuICAgICAgICAgICAgICAgICAgICAvLzAgMSAyXG4gICAgICAgICAgICAgICAgICAgIChjb3VudCA8IG1heENvdW50KSAmJiBtYXhDb3VudCAmJiAoc3BhbiA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMikpO1xuICAgICAgICAgICAgICAgICAgICAvLyAxMC1pLOesrDjlvKDmjaJzcGFuICA4IDE2IDI0XG4gICAgICAgICAgICAgICAgICAgICEoaSU4KSAmJiBtYXhDb3VudCAmJiAoc3BhbiA9IDIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXhDb3VudCwgc3BhbiwgaXNNb2JpbGUpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuID09PSAyICYmIChjb3VudCArPSAxKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRDb2x1bW5TdGFydDogYHNwYW4gJHtzcGFufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkUm93U3RhcnQ6IGBzcGFuICR7c3Bhbn1gLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0ZVN0ciA9IG1vbWVudChpdGVtLmRhdGUsICdZWVlZTU1ERCcpLmZvcm1hdCgnWVkuTU0uREQnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zcGFuID0gc3BhbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBkYXRhLmRhdGEubGFzdCgpXG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdChbLi4ubGlzdCwgLi4uZGF0YS5kYXRhXSk7XG4gICAgICAgICAgICAgICAgIWxhc3QucHJldiAmJiBzZXRFbXB0eSh0cnVlKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVOZXh0RGF0ZShsYXN0LnByZXYpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0ICRwYWdlID0gdXNlUmVmKCk7XG5cbiAgICB1c2VFZmZlY3QoKGUpID0+IHtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvYWRpbmcgfHwgaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFNob3dUb3AoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDcwMCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCAkcGFnZS5jdXJyZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyA1MCA+ICRwYWdlLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcXVlcnlMaXN0KG5leHREYXRlLCBpc01vYmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cub25zY3JvbGwoKTtcbiAgICAgICAgfSlcbiAgICB9LCBbbmV4dERhdGUsIGxvYWRpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gY2hlY2tNb2RlKCk7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBheGlvcyhgL2FwaS9zb3J0YClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U29ydEluZm8ocmVzLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICBxdWVyeUxpc3QobmV4dERhdGUsIGlzTW9iaWxlKVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW5kZXgtcGFnZSAke2lzTW9iaWxlICYmICdtb2JpbGUtcGFnZSd9YH0gcmVmPXskcGFnZX0+XG4gICAgICAgICAgICA8SGVhZD48L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0XCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IGlzTW9iaWxlID8gYHJlcGVhdCgke2xpc3QubGVuZ3RofSwgNzV2dylgIDogYHJlcGVhdCgke01hdGguY2VpbChsaXN0Lmxlbmd0aCAvIDI4KSAqIDR9LCAxOXZ3KWBcbiAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaXN0Lm1hcCgoaW1nKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpbWcuc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWcuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tZmFuZ2RhIGFjdGlvbkJ0blwiIGhyZWY9e2AvJHtpbWcuZGF0ZX1gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57aW1nLmNwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRhdGUtc3RyIHNpemUtJHtpbWcuc3Bhbn1gfT57aW1nLmRhdGVTdHJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctYmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy8vY24uYmluZy5jb20ke2ltZy51cmxiYXNlfV8ke2ZhbHNlID8gJzc2OHgxMjgwJyA6ICcxMDI0eDc2OCd9LmpwZycpYH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW5kbGVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KGxpa2VMaXN0LmluY2x1ZGVzKGltZy5kYXRlKT8naWNvbi1saWtlLWZpbGwnOidpY29uLXhpaHVhbicpKycgaWNvbmZvbnQnfSBvbkNsaWNrPXsoKSA9PiB7dGhyb3R0bGVMaWtlRnVuKGltZy5kYXRlKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+e3NvcnRJbmZvW2ltZy5kYXRlXSAmJiBzb3J0SW5mb1tpbWcuZGF0ZV0ubGlrZUNvdW50IHx8IDB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIG9uQ2xpY2s9eygpID0+IHtzZXREb3duRGlhbG9nVmlzaWJsZSh0cnVlKTt1cGRhdGVJbWcoaW1nKTt9fSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWRvd25sb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPntzb3J0SW5mb1tpbWcuZGF0ZV0gJiYgc29ydEluZm9baW1nLmRhdGVdLmRvd25sb2FkQ291bnQgfHwgMH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aXNFbXB0eSAmJiA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LXRleHRcIj7igJTigJQg5Yiw5bqV5ZWmIOKAlOKAlDwvZGl2Pn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtYnRuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0by10b3AgaWNvbmZvbnQgaWNvbi1hcnJvdy1sZWZ0ICR7IXNob3dUb3AgJiYgJ2hpZGUnfWB9XG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCl9Lz5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLXRvdXppXCIgaHJlZj0nL3JhbmRvbScvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RG93bkRpYWxvZyBkb3dubG9hZEZ1bj17ZG93bmxvYWRGdW59IGlzTW9iaWxlPXtpc01vYmlsZX0gdmlzaWJsZT17ZG93bkRpYWxvZ1Zpc2libGV9IG9uSGlkZT17KCkgPT4ge3NldERvd25EaWFsb2dWaXNpYmxlKGZhbHNlKTt1cGRhdGVJbWcoe30pO319XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdJbmZvPXtpbWd9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==