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
    updateLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default()("/api/list?date=".concat(nextDate, "&count=10")).then(function (_ref) {
      var data = _ref.data;
      var count = 0;
      var maxCount = isMobile ? 0 : 2;
      data.data.forEach(function (item, i) {
        var span = 1; //0 1 2

        count < maxCount && maxCount && (span = Math.ceil(Math.random() * 2)); // 2,第9张换span  ;  1 最后一张span ;

        maxCount - count === 10 - i && maxCount && (span = 2); // count=1 ; count=2 ;

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

      if (document.documentElement.clientHeight + document.documentElement.scrollTop + 100 > $page.current.clientHeight) {
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
        gridTemplateRows: isMobile ? "repeat(".concat(list.length, ", 75vw)") : "repeat(".concat(parseInt(list.length / 10) * 4, ", 19vw)")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwibGlzdCIsInVwZGF0ZUxpc3QiLCJpbWciLCJ1cGRhdGVJbWciLCJuZXh0RGF0ZSIsInVwZGF0ZU5leHREYXRlIiwibG9hZGluZyIsInVwZGF0ZUxvYWRpbmciLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwic2hvd1RvcCIsInNldFNob3dUb3AiLCJpc0VtcHR5Iiwic2V0RW1wdHkiLCJzb3J0SW5mbyIsInNldFNvcnRJbmZvIiwibGlrZUxpc3QiLCJzZXRMaWtlTGlzdCIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpa2VGdW4iLCJkYXRhIiwibG9jYWxMaWtlTGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJKU09OIiwicGFyc2UiLCJpbmNsdWRlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImxpa2VDb3VudCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGhyb3R0bGVMaWtlRnVuIiwidGhyb3R0bGUiLCJkb3dubG9hZEZ1biIsImRvd25sb2FkQ291bnQiLCJxdWVyeUxpc3QiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwic3R5bGUiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJkYXRlU3RyIiwibW9tZW50IiwiZGF0ZSIsImZvcm1hdCIsImxhc3QiLCJwcmV2IiwiJHBhZ2UiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJlIiwib25zY3JvbGwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJncmlkVGVtcGxhdGVSb3dzIiwicGFyc2VJbnQiLCJtYXAiLCJjcCIsImJhY2tncm91bmRJbWFnZSIsInVybGJhc2UiLCJzY3JvbGxUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsMkVBQVc7QUFBQSxrQkFDNEJBLHNEQUFRLENBQUMsS0FBRCxDQURwQztBQUFBLE1BQ2ZDLGlCQURlO0FBQUEsTUFDSUMsb0JBREo7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFZkcsSUFGZTtBQUFBLE1BRVRDLFVBRlM7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUMsRUFBRCxDQUhYO0FBQUEsTUFHZkssR0FIZTtBQUFBLE1BR1ZDLFNBSFU7O0FBQUEsbUJBSWFOLHNEQUFRLENBQUMsQ0FBRCxDQUpyQjtBQUFBLE1BSWZPLFFBSmU7QUFBQSxNQUlMQyxjQUpLOztBQUFBLG1CQUtXUixzREFBUSxDQUFDLEtBQUQsQ0FMbkI7QUFBQSxNQUtmUyxPQUxlO0FBQUEsTUFLTkMsYUFMTTs7QUFBQSxtQkFNVVYsc0RBQVEsQ0FBQyxLQUFELENBTmxCO0FBQUEsTUFNZlcsUUFOZTtBQUFBLE1BTUxDLFdBTks7O0FBQUEsbUJBT1FaLHNEQUFRLENBQUMsS0FBRCxDQVBoQjtBQUFBLE1BT2ZhLE9BUGU7QUFBQSxNQU9OQyxVQVBNOztBQUFBLG1CQVFNZCxzREFBUSxDQUFDLEtBQUQsQ0FSZDtBQUFBLE1BUWZlLE9BUmU7QUFBQSxNQVFOQyxRQVJNOztBQUFBLG1CQVNVaEIsc0RBQVEsQ0FBQyxFQUFELENBVGxCO0FBQUEsTUFTZmlCLFFBVGU7QUFBQSxNQVNMQyxXQVRLOztBQUFBLG9CQVVVbEIsc0RBQVEsQ0FBQyxFQUFELENBVmxCO0FBQUEsTUFVZm1CLFFBVmU7QUFBQSxNQVVMQyxXQVZLOztB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QW1DLFlBQUksRUFBQztBQUF4QyxRQUhKO0FBQUEsTUFqQ0osZUFzQ0ksOERBQUMsOERBQUQ7QUFBWSxpQkFBVyxFQUFFeEMsV0FBekI7QUFBc0MsY0FBUSxFQUFFaEMsUUFBaEQ7QUFBMEQsYUFBTyxFQUFFVixpQkFBbkU7QUFBc0YsWUFBTSxFQUFFLGtCQUFNO0FBQUNDLDRCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFBNEJJLGlCQUFTLENBQUMsRUFBRCxDQUFUO0FBQWUsT0FBaEo7QUFDWSxhQUFPLEVBQUVEO0FBRHJCLE1BdENKO0FBQUEsSUFESjtBQTJDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YWZkMWZlNTJmMTVhYzljZjBjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRcIjtcbmltcG9ydCBEb3duRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2Rvd25EaWFsb2dcIjtcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuXG5pbXBvcnQge1NwaW59IGZyb20gXCJhbnRkXCI7XG4vKmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgbGlrZUZ1bigpXG4gICAgfVxuICAgIHJlbmRlciAoKXtcbiAgICAgICAgcmV0dXJuIFBhZ2VGdW4oKVxuICAgIH1cbn0qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW2Rvd25EaWFsb2dWaXNpYmxlLCBzZXREb3duRGlhbG9nVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xpc3QsIHVwZGF0ZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtpbWcsIHVwZGF0ZUltZ10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW25leHREYXRlLCB1cGRhdGVOZXh0RGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbG9hZGluZywgdXBkYXRlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dUb3AsIHNldFNob3dUb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0VtcHR5LCBzZXRFbXB0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NvcnRJbmZvLCBzZXRTb3J0SW5mb10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW2xpa2VMaXN0LCBzZXRMaWtlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgY2hlY2tNb2RlID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDI0IHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBzZXRJc01vYmlsZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHNldElzTW9iaWxlKGZhbHNlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGxpa2VGdW4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgbG9jYWxMaWtlTGlzdD13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsTGlrZUxpc3QnKVxuICAgICAgICBpZighbGlrZUxpc3QubGVuZ3RoICYmIGxvY2FsTGlrZUxpc3Qpe1xuICAgICAgICAgICAgc2V0TGlrZUxpc3QoSlNPTi5wYXJzZShsb2NhbExpa2VMaXN0KSlcbiAgICAgICAgfVxuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGxvY2FsTGlrZUxpc3Q9bG9jYWxMaWtlTGlzdD9KU09OLnBhcnNlKGxvY2FsTGlrZUxpc3QpOltdXG4gICAgICAgICAgICBpZighbG9jYWxMaWtlTGlzdC5pbmNsdWRlcyhkYXRhKSl7XG4gICAgICAgICAgICAgICAgYXhpb3MoYC9hcGkvc29ydD9kYXRlPSR7ZGF0YX0maz1saWtlQ291bnRgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubGlrZUNvdW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighc29ydEluZm9bZGF0YV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXT17bGlrZUNvdW50OjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdLmxpa2VDb3VudD1yZXMuZGF0YS5saWtlQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0SW5mbyhzb3J0SW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbExpa2VMaXN0LnB1c2goZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaWtlTGlzdChsb2NhbExpa2VMaXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxMaWtlTGlzdCcsSlNPTi5zdHJpbmdpZnkobG9jYWxMaWtlTGlzdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGhyb3R0bGVMaWtlRnVuPXRocm90dGxlKChkYXRhKT0+bGlrZUZ1bihkYXRhKSwxNTAwKVxuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyl7XG4gICAgICAgIGxpa2VGdW4oKVxuICAgIH1cbiAgICBjb25zdCBkb3dubG9hZEZ1biA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgYXhpb3MoYC9hcGkvc29ydD9kYXRlPSR7ZGF0YX0maz1kb3dubG9hZENvdW50YClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5saWtlQ291bnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXNvcnRJbmZvW2RhdGFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXT17ZG93bmxvYWRDb3VudDowfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV0uZG93bmxvYWRDb3VudD1yZXMuZGF0YS5kb3dubG9hZENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0SW5mbyhzb3J0SW5mbylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcXVlcnlMaXN0ID0gKG5leHREYXRlLCBpc01vYmlsZSkgPT4ge1xuICAgICAgICB1cGRhdGVMb2FkaW5nKHRydWUpO1xuICAgICAgICBheGlvcyhgL2FwaS9saXN0P2RhdGU9JHtuZXh0RGF0ZX0mY291bnQ9MTBgKVxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4Q291bnQgPSBpc01vYmlsZSA/IDAgOiAyO1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGFuID0gMTtcbiAgICAgICAgICAgICAgICAgICAgLy8wIDEgMlxuICAgICAgICAgICAgICAgICAgICAoY291bnQgPCBtYXhDb3VudCkgJiYgbWF4Q291bnQgJiYgKHNwYW4gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gMiznrKw55byg5o2ic3BhbiAgOyAgMSDmnIDlkI7kuIDlvKBzcGFuIDtcbiAgICAgICAgICAgICAgICAgICAgKChtYXhDb3VudC1jb3VudCkgPT09ICgxMCAtIGkpKSAmJiBtYXhDb3VudCAmJiAoc3BhbiA9IDIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb3VudD0xIDsgY291bnQ9MiA7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPT09IDIgJiYgKGNvdW50ICs9IDEpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtblN0YXJ0OiBgc3BhbiAke3NwYW59YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRSb3dTdGFydDogYHNwYW4gJHtzcGFufWAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kYXRlU3RyID0gbW9tZW50KGl0ZW0uZGF0ZSwgJ1lZWVlNTUREJykuZm9ybWF0KCdZWS5NTS5ERCcpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNwYW4gPSBzcGFuO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IGRhdGEuZGF0YS5sYXN0KClcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0KFsuLi5saXN0LCAuLi5kYXRhLmRhdGFdKTtcbiAgICAgICAgICAgICAgICAhbGFzdC5wcmV2ICYmIHNldEVtcHR5KHRydWUpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU5leHREYXRlKGxhc3QucHJldik7XG4gICAgICAgICAgICAgICAgdXBkYXRlTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0ICRwYWdlID0gdXNlUmVmKCk7XG5cbiAgICB1c2VFZmZlY3QoKGUpID0+IHtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvYWRpbmcgfHwgaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFNob3dUb3AoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDcwMCk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyAxMDAgPiAkcGFnZS5jdXJyZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5TGlzdChuZXh0RGF0ZSwgaXNNb2JpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93Lm9uc2Nyb2xsKCk7XG4gICAgICAgIH0pXG4gICAgfSwgW25leHREYXRlLCBsb2FkaW5nXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc01vYmlsZSA9IGNoZWNrTW9kZSgpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgYXhpb3MoYC9hcGkvc29ydGApXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNvcnRJbmZvKHJlcy5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgcXVlcnlMaXN0KG5leHREYXRlLCBpc01vYmlsZSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGluZGV4LXBhZ2UgJHtpc01vYmlsZSAmJiAnbW9iaWxlLXBhZ2UnfWB9IHJlZj17JHBhZ2V9PlxuICAgICAgICAgICAgPEhlYWQ+PC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbGlzdFwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiBpc01vYmlsZSA/IGByZXBlYXQoJHtsaXN0Lmxlbmd0aH0sIDc1dncpYCA6IGByZXBlYXQoJHtwYXJzZUludChsaXN0Lmxlbmd0aC8gMTApICogNH0sIDE5dncpYFxuICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QubWFwKChpbWcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2ltZy5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ltZy5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1mYW5nZGEgYWN0aW9uQnRuXCIgaHJlZj17YC8ke2ltZy5kYXRlfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPntpbWcuY3B9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZGF0ZS1zdHIgc2l6ZS0ke2ltZy5zcGFufWB9PntpbWcuZGF0ZVN0cn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1iZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgnLy9jbi5iaW5nLmNvbSR7aW1nLnVybGJhc2V9XyR7ZmFsc2UgPyAnNzY4eDEyODAnIDogJzEwMjR4NzY4J30uanBnJylgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbmRsZUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsobGlrZUxpc3QuaW5jbHVkZXMoaW1nLmRhdGUpPydpY29uLWxpa2UtZmlsbCc6J2ljb24teGlodWFuJykrJyBpY29uZm9udCd9IG9uQ2xpY2s9eygpID0+IHt0aHJvdHRsZUxpa2VGdW4oaW1nLmRhdGUpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj57c29ydEluZm9baW1nLmRhdGVdICYmIHNvcnRJbmZvW2ltZy5kYXRlXS5saWtlQ291bnQgfHwgMH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgb25DbGljaz17KCkgPT4ge3NldERvd25EaWFsb2dWaXNpYmxlKHRydWUpO3VwZGF0ZUltZyhpbWcpO319IGNsYXNzTmFtZT1cImljb25mb250IGljb24tZG93bmxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+e3NvcnRJbmZvW2ltZy5kYXRlXSAmJiBzb3J0SW5mb1tpbWcuZGF0ZV0uZG93bmxvYWRDb3VudCB8fCAwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpc0VtcHR5ICYmIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktdGV4dFwiPuKAlOKAlCDliLDlupXllaYg4oCU4oCUPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1idG5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvLXRvcCBpY29uZm9udCBpY29uLWFycm93LWxlZnQgJHshc2hvd1RvcCAmJiAnaGlkZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX0vPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tdG91emlcIiBocmVmPScvcmFuZG9tJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxEb3duRGlhbG9nIGRvd25sb2FkRnVuPXtkb3dubG9hZEZ1bn0gaXNNb2JpbGU9e2lzTW9iaWxlfSB2aXNpYmxlPXtkb3duRGlhbG9nVmlzaWJsZX0gb25IaWRlPXsoKSA9PiB7c2V0RG93bkRpYWxvZ1Zpc2libGUoZmFsc2UpO3VwZGF0ZUltZyh7fSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0luZm89e2ltZ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9