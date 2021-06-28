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

        count < maxCount && maxCount && (span = Math.ceil(Math.random() * 2)); // 10-i,第8张换span  8 16 24

        i && !(i % 10) && maxCount && (span = 2); // console.log(maxCount, span, isMobile);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwibGlzdCIsInVwZGF0ZUxpc3QiLCJpbWciLCJ1cGRhdGVJbWciLCJuZXh0RGF0ZSIsInVwZGF0ZU5leHREYXRlIiwibG9hZGluZyIsInVwZGF0ZUxvYWRpbmciLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwic2hvd1RvcCIsInNldFNob3dUb3AiLCJpc0VtcHR5Iiwic2V0RW1wdHkiLCJzb3J0SW5mbyIsInNldFNvcnRJbmZvIiwibGlrZUxpc3QiLCJzZXRMaWtlTGlzdCIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpa2VGdW4iLCJkYXRhIiwibG9jYWxMaWtlTGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJKU09OIiwicGFyc2UiLCJpbmNsdWRlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImxpa2VDb3VudCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGhyb3R0bGVMaWtlRnVuIiwidGhyb3R0bGUiLCJkb3dubG9hZEZ1biIsImRvd25sb2FkQ291bnQiLCJxdWVyeUxpc3QiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwic3R5bGUiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJkYXRlU3RyIiwibW9tZW50IiwiZGF0ZSIsImZvcm1hdCIsImxhc3QiLCJwcmV2IiwiJHBhZ2UiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJlIiwib25zY3JvbGwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJncmlkVGVtcGxhdGVSb3dzIiwicGFyc2VJbnQiLCJtYXAiLCJjcCIsImJhY2tncm91bmRJbWFnZSIsInVybGJhc2UiLCJzY3JvbGxUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsMkVBQVc7QUFBQSxrQkFDNEJBLHNEQUFRLENBQUMsS0FBRCxDQURwQztBQUFBLE1BQ2ZDLGlCQURlO0FBQUEsTUFDSUMsb0JBREo7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFZkcsSUFGZTtBQUFBLE1BRVRDLFVBRlM7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUMsRUFBRCxDQUhYO0FBQUEsTUFHZkssR0FIZTtBQUFBLE1BR1ZDLFNBSFU7O0FBQUEsbUJBSWFOLHNEQUFRLENBQUMsQ0FBRCxDQUpyQjtBQUFBLE1BSWZPLFFBSmU7QUFBQSxNQUlMQyxjQUpLOztBQUFBLG1CQUtXUixzREFBUSxDQUFDLEtBQUQsQ0FMbkI7QUFBQSxNQUtmUyxPQUxlO0FBQUEsTUFLTkMsYUFMTTs7QUFBQSxtQkFNVVYsc0RBQVEsQ0FBQyxLQUFELENBTmxCO0FBQUEsTUFNZlcsUUFOZTtBQUFBLE1BTUxDLFdBTks7O0FBQUEsbUJBT1FaLHNEQUFRLENBQUMsS0FBRCxDQVBoQjtBQUFBLE1BT2ZhLE9BUGU7QUFBQSxNQU9OQyxVQVBNOztBQUFBLG1CQVFNZCxzREFBUSxDQUFDLEtBQUQsQ0FSZDtBQUFBLE1BUWZlLE9BUmU7QUFBQSxNQVFOQyxRQVJNOztBQUFBLG1CQVNVaEIsc0RBQVEsQ0FBQyxFQUFELENBVGxCO0FBQUEsTUFTZmlCLFFBVGU7QUFBQSxNQVNMQyxXQVRLOztBQUFBLG9CQVVVbEIsc0RBQVEsQ0FBQyxFQUFELENBVmxCO0FBQUEsTUFVZm1CLFFBVmU7QUFBQSxNQVVMQyxXQVZLOztBQVd0QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUlDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUFwQixJQUE0QkQsTUFBTSxDQUFDQyxVQUFQLEdBQW9CRCxNQUFNLENBQUNFLFdBQTNELEVBQXdFO0FBQ3BFWixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBLGFBQU8sSUFBUDtBQUNIOztBQUNEQSxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0EsV0FBTyxLQUFQO0FBQ0gsR0FQRDs7QUFRQSxNQUFNYSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQVU7QUFDdEIsUUFBSUMsYUFBYSxHQUFDTCxNQUFNLENBQUNNLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGVBQTVCLENBQWxCOztBQUNBLFFBQUcsQ0FBQ1YsUUFBUSxDQUFDVyxNQUFWLElBQW9CSCxhQUF2QixFQUFxQztBQUNqQ1AsaUJBQVcsQ0FBQ1csSUFBSSxDQUFDQyxLQUFMLENBQVdMLGFBQVgsQ0FBRCxDQUFYO0FBQ0g7O0FBQ0QsUUFBR0QsSUFBSCxFQUFRO0FBQ0pDLG1CQUFhLEdBQUNBLGFBQWEsR0FBQ0ksSUFBSSxDQUFDQyxLQUFMLENBQVdMLGFBQVgsQ0FBRCxHQUEyQixFQUF0RDs7QUFDQSxVQUFHLENBQUNBLGFBQWEsQ0FBQ00sUUFBZCxDQUF1QlAsSUFBdkIsQ0FBSixFQUFpQztBQUM3QlEsb0RBQUssMEJBQW1CUixJQUFuQixrQkFBTCxDQUNLUyxJQURMLENBQ1UsVUFBQUMsR0FBRyxFQUFJO0FBQ1QsY0FBR0EsR0FBRyxDQUFDVixJQUFKLENBQVNXLFNBQVosRUFBc0I7QUFDbEIsZ0JBQUcsQ0FBQ3BCLFFBQVEsQ0FBQ1MsSUFBRCxDQUFaLEVBQW1CO0FBQ2ZULHNCQUFRLENBQUNTLElBQUQsQ0FBUixHQUFlO0FBQUNXLHlCQUFTLEVBQUM7QUFBWCxlQUFmO0FBQ0g7O0FBQ0RwQixvQkFBUSxDQUFDUyxJQUFELENBQVIsQ0FBZVcsU0FBZixHQUF5QkQsR0FBRyxDQUFDVixJQUFKLENBQVNXLFNBQWxDO0FBQ0FuQix1QkFBVyxDQUFDRCxRQUFELENBQVg7QUFDQVUseUJBQWEsQ0FBQ1csSUFBZCxDQUFtQlosSUFBbkI7QUFDQU4sdUJBQVcsQ0FBQ08sYUFBRCxDQUFYO0FBQ0FMLGtCQUFNLENBQUNNLFlBQVAsQ0FBb0JXLE9BQXBCLENBQTRCLGVBQTVCLEVBQTRDUixJQUFJLENBQUNTLFNBQUwsQ0FBZWIsYUFBZixDQUE1QztBQUNIO0FBQ0osU0FaTDtBQWFIO0FBQ0o7QUFDSixHQXZCRDs7QUF3QkEsTUFBTWMsZUFBZSxHQUFDQyxzREFBUSxDQUFDLFVBQUNoQixJQUFEO0FBQUEsV0FBUUQsT0FBTyxDQUFDQyxJQUFELENBQWY7QUFBQSxHQUFELEVBQXVCLElBQXZCLENBQTlCOztBQUNBLE1BQUcsU0FBaUNKLE1BQXBDLEVBQTJDO0FBQ3ZDRyxXQUFPO0FBQ1Y7O0FBQ0QsTUFBTWtCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNqQixJQUFELEVBQVU7QUFDMUIsUUFBR0EsSUFBSCxFQUFRO0FBQ0pRLGtEQUFLLDBCQUFtQlIsSUFBbkIsc0JBQUwsQ0FDS1MsSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNULFlBQUdBLEdBQUcsQ0FBQ1YsSUFBSixDQUFTVyxTQUFaLEVBQXNCO0FBQ2xCLGNBQUcsQ0FBQ3BCLFFBQVEsQ0FBQ1MsSUFBRCxDQUFaLEVBQW1CO0FBQ2ZULG9CQUFRLENBQUNTLElBQUQsQ0FBUixHQUFlO0FBQUNrQiwyQkFBYSxFQUFDO0FBQWYsYUFBZjtBQUNIOztBQUNEM0Isa0JBQVEsQ0FBQ1MsSUFBRCxDQUFSLENBQWVrQixhQUFmLEdBQTZCUixHQUFHLENBQUNWLElBQUosQ0FBU2tCLGFBQXRDO0FBQ0ExQixxQkFBVyxDQUFDRCxRQUFELENBQVg7QUFDSDtBQUNKLE9BVEw7QUFVSDtBQUNKLEdBYkQ7O0FBY0EsTUFBTTRCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN0QyxRQUFELEVBQVdJLFFBQVgsRUFBd0I7QUFDdENELGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0F3QixnREFBSywwQkFBbUIzQixRQUFuQixlQUFMLENBQ0s0QixJQURMLENBQ1UsZ0JBQVk7QUFBQSxVQUFWVCxJQUFVLFFBQVZBLElBQVU7QUFDZCxVQUFJb0IsS0FBSyxHQUFHLENBQVo7QUFDQSxVQUFNQyxRQUFRLEdBQUdwQyxRQUFRLEdBQUcsQ0FBSCxHQUFPLENBQWhDO0FBQ0FlLFVBQUksQ0FBQ0EsSUFBTCxDQUFVc0IsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUMzQixZQUFJQyxJQUFJLEdBQUcsQ0FBWCxDQUQyQixDQUUzQjs7QUFDQ0wsYUFBSyxHQUFHQyxRQUFULElBQXNCQSxRQUF0QixLQUFtQ0ksSUFBSSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUQsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTFCLENBQTFDLEVBSDJCLENBSTNCOztBQUNBSixTQUFDLElBQUksRUFBRUEsQ0FBQyxHQUFDLEVBQUosQ0FBTCxJQUFnQkgsUUFBaEIsS0FBNkJJLElBQUksR0FBRyxDQUFwQyxFQUwyQixDQU0zQjs7QUFDQUEsWUFBSSxLQUFLLENBQVQsS0FBZUwsS0FBSyxJQUFJLENBQXhCO0FBQ0FHLFlBQUksQ0FBQ00sS0FBTCxHQUFhO0FBQ1RDLHlCQUFlLGlCQUFVTCxJQUFWLENBRE47QUFFVE0sc0JBQVksaUJBQVVOLElBQVY7QUFGSCxTQUFiO0FBSUFGLFlBQUksQ0FBQ1MsT0FBTCxHQUFlQyw2Q0FBTSxDQUFDVixJQUFJLENBQUNXLElBQU4sRUFBWSxVQUFaLENBQU4sQ0FBOEJDLE1BQTlCLENBQXFDLFVBQXJDLENBQWY7QUFDQVosWUFBSSxDQUFDRSxJQUFMLEdBQVlBLElBQVo7QUFDSCxPQWREO0FBZUEsVUFBTVcsSUFBSSxHQUFHcEMsSUFBSSxDQUFDQSxJQUFMLENBQVVvQyxJQUFWLEVBQWI7QUFDQTFELGdCQUFVLHdHQUFLRCxJQUFMLGdHQUFjdUIsSUFBSSxDQUFDQSxJQUFuQixHQUFWO0FBQ0EsT0FBQ29DLElBQUksQ0FBQ0MsSUFBTixJQUFjL0MsUUFBUSxDQUFDLElBQUQsQ0FBdEI7QUFDQVIsb0JBQWMsQ0FBQ3NELElBQUksQ0FBQ0MsSUFBTixDQUFkO0FBQ0FyRCxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNILEtBeEJMO0FBeUJILEdBM0JEOztBQTZCQSxNQUFNc0QsS0FBSyxHQUFHQyxvREFBTSxFQUFwQjtBQUVBQyx5REFBUyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUNiN0MsVUFBTSxDQUFDOEMsUUFBUCxHQUFrQixZQUFNO0FBQ3BCLFVBQUkzRCxPQUFPLElBQUlNLE9BQWYsRUFBd0I7QUFDcEI7QUFDSDs7QUFDREQsZ0JBQVUsQ0FBQ3VELFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsR0FBcUMsR0FBdEMsQ0FBVjs7QUFDQSxVQUFJRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXdDSCxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQWpFLEdBQTZFLEVBQTdFLEdBQWtGUCxLQUFLLENBQUNTLE9BQU4sQ0FBY0QsWUFBcEcsRUFBa0g7QUFDOUczQixpQkFBUyxDQUFDdEMsUUFBRCxFQUFXSSxRQUFYLENBQVQ7QUFDSDtBQUNKLEtBUkQ7O0FBU0ErRCxjQUFVLENBQUMsWUFBTTtBQUNicEQsWUFBTSxDQUFDOEMsUUFBUDtBQUNILEtBRlMsQ0FBVjtBQUdILEdBYlEsRUFhTixDQUFDN0QsUUFBRCxFQUFXRSxPQUFYLENBYk0sQ0FBVDtBQWVBeUQseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTXZELFFBQVEsR0FBR1UsU0FBUyxFQUExQjs7QUFDQXNELFNBQUssQ0FBQ0MsU0FBTixDQUFnQmQsSUFBaEIsR0FBdUIsWUFBWTtBQUMvQixhQUFPLEtBQUssS0FBS2hDLE1BQUwsR0FBYyxDQUFuQixDQUFQO0FBQ0gsS0FGRDs7QUFHQUksZ0RBQUssYUFBTCxDQUNLQyxJQURMLENBQ1UsVUFBQUMsR0FBRyxFQUFJO0FBQ1RsQixpQkFBVyxDQUFDa0IsR0FBRyxDQUFDVixJQUFMLENBQVg7QUFDSCxLQUhMO0FBSUFtQixhQUFTLENBQUN0QyxRQUFELEVBQVdJLFFBQVgsQ0FBVDtBQUNILEdBVlEsRUFVTixFQVZNLENBQVQ7QUFXQSxzQkFDSTtBQUFLLGFBQVMsdUJBQWdCQSxRQUFRLElBQUksYUFBNUIsQ0FBZDtBQUEyRCxPQUFHLEVBQUVxRCxLQUFoRTtBQUFBLDRCQUNJLDhEQUFDLHdEQUFELEtBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQ0ssV0FBSyxFQUFFO0FBQ0hhLHdCQUFnQixFQUFFbEUsUUFBUSxvQkFBYVIsSUFBSSxDQUFDMkIsTUFBbEIsZ0NBQThDZ0QsUUFBUSxDQUFDM0UsSUFBSSxDQUFDMkIsTUFBTCxHQUFhLEVBQWQsQ0FBUixHQUE0QixDQUExRTtBQUR2QixPQURaO0FBQUEsZ0JBS1EzQixJQUFJLENBQUM0RSxHQUFMLENBQVMsVUFBQzFFLEdBQUQ7QUFBQSw0QkFDTDtBQUNJLG1CQUFTLEVBQUMsVUFEZDtBQUVJLGVBQUssRUFBRUEsR0FBRyxDQUFDa0QsS0FGZjtBQUFBLGtDQUtJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsb0NBQ0k7QUFBRyx1QkFBUyxFQUFDLGdDQUFiO0FBQThDLGtCQUFJLGFBQU1sRCxHQUFHLENBQUN1RCxJQUFWO0FBQWxELGNBREosZUFFSTtBQUFNLHVCQUFTLEVBQUMsTUFBaEI7QUFBQSx3QkFBd0J2RCxHQUFHLENBQUMyRTtBQUE1QixjQUZKO0FBQUEsWUFMSixlQVNJO0FBQUsscUJBQVMsMEJBQW1CM0UsR0FBRyxDQUFDOEMsSUFBdkIsQ0FBZDtBQUFBLHNCQUE4QzlDLEdBQUcsQ0FBQ3FEO0FBQWxELFlBVEosZUFVSTtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUNLLGlCQUFLLEVBQUU7QUFBQ3VCLDZCQUFlLDhCQUF1QjVFLEdBQUcsQ0FBQzZFLE9BQTNCLGNBQXNDLFFBQVEsU0FBUixHQUFxQixVQUEzRDtBQUFoQjtBQURaLFlBVkosZUFZSztBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG9DQUNJO0FBQU0sdUJBQVMsRUFBRSxDQUFDL0QsUUFBUSxDQUFDYyxRQUFULENBQWtCNUIsR0FBRyxDQUFDdUQsSUFBdEIsSUFBNEIsZ0JBQTVCLEdBQTZDLGFBQTlDLElBQTZELFdBQTlFO0FBQTJGLHFCQUFPLEVBQUUsbUJBQU07QUFBQ25CLCtCQUFlLENBQUNwQyxHQUFHLENBQUN1RCxJQUFMLENBQWY7QUFBMEIsZUFBckk7QUFBQSxxQ0FDSTtBQUFNLHlCQUFTLEVBQUMsT0FBaEI7QUFBQSwwQkFBeUIzQyxRQUFRLENBQUNaLEdBQUcsQ0FBQ3VELElBQUwsQ0FBUixJQUFzQjNDLFFBQVEsQ0FBQ1osR0FBRyxDQUFDdUQsSUFBTCxDQUFSLENBQW1CdkIsU0FBekMsSUFBc0Q7QUFBL0U7QUFESixjQURKLGVBSUk7QUFBTyxxQkFBTyxFQUFFLG1CQUFNO0FBQUNuQyxvQ0FBb0IsQ0FBQyxJQUFELENBQXBCO0FBQTJCSSx5QkFBUyxDQUFDRCxHQUFELENBQVQ7QUFBZ0IsZUFBbEU7QUFBb0UsdUJBQVMsRUFBQyx3QkFBOUU7QUFBQSxxQ0FDRztBQUFNLHlCQUFTLEVBQUMsT0FBaEI7QUFBQSwwQkFBeUJZLFFBQVEsQ0FBQ1osR0FBRyxDQUFDdUQsSUFBTCxDQUFSLElBQXNCM0MsUUFBUSxDQUFDWixHQUFHLENBQUN1RCxJQUFMLENBQVIsQ0FBbUJoQixhQUF6QyxJQUEwRDtBQUFuRjtBQURILGNBSko7QUFBQSxZQVpMO0FBQUEsV0FHU3ZDLEdBQUcsQ0FBQ3VELElBSGIsQ0FESztBQUFBLE9BQVQ7QUFMUixNQUZKLEVBZ0NLN0MsT0FBTyxpQkFBSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQSxNQWhDaEIsZUFpQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsNENBQXFDLENBQUNGLE9BQUQsSUFBWSxNQUFqRCxDQUFkO0FBQ0ssZUFBTyxFQUFFO0FBQUEsaUJBQU1TLE1BQU0sQ0FBQzZELFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBTjtBQUFBO0FBRGQsUUFESixlQUdJO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFtQyxZQUFJLEVBQUM7QUFBeEMsUUFISjtBQUFBLE1BakNKLGVBc0NJLDhEQUFDLDhEQUFEO0FBQVksaUJBQVcsRUFBRXhDLFdBQXpCO0FBQXNDLGNBQVEsRUFBRWhDLFFBQWhEO0FBQTBELGFBQU8sRUFBRVYsaUJBQW5FO0FBQXNGLFlBQU0sRUFBRSxrQkFBTTtBQUFDQyw0QkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQTRCSSxpQkFBUyxDQUFDLEVBQUQsQ0FBVDtBQUFlLE9BQWhKO0FBQ1ksYUFBTyxFQUFFRDtBQURyQixNQXRDSjtBQUFBLElBREo7QUEyQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzM0ZjU5OTMwNjA2MGI2MTlkMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkXCI7XG5pbXBvcnQgRG93bkRpYWxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9kb3duRGlhbG9nXCI7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcblxuaW1wb3J0IHtTcGlufSBmcm9tIFwiYW50ZFwiO1xuLypleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGxpa2VGdW4oKVxuICAgIH1cbiAgICByZW5kZXIgKCl7XG4gICAgICAgIHJldHVybiBQYWdlRnVuKClcbiAgICB9XG59Ki9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IFtkb3duRGlhbG9nVmlzaWJsZSwgc2V0RG93bkRpYWxvZ1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsaXN0LCB1cGRhdGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbaW1nLCB1cGRhdGVJbWddID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtuZXh0RGF0ZSwgdXBkYXRlTmV4dERhdGVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHVwZGF0ZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93VG9wLCBzZXRTaG93VG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNFbXB0eSwgc2V0RW1wdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzb3J0SW5mbywgc2V0U29ydEluZm9dID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtsaWtlTGlzdCwgc2V0TGlrZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGNoZWNrTW9kZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgc2V0SXNNb2JpbGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRJc01vYmlsZShmYWxzZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBsaWtlRnVuID0gKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGxvY2FsTGlrZUxpc3Q9d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbExpa2VMaXN0JylcbiAgICAgICAgaWYoIWxpa2VMaXN0Lmxlbmd0aCAmJiBsb2NhbExpa2VMaXN0KXtcbiAgICAgICAgICAgIHNldExpa2VMaXN0KEpTT04ucGFyc2UobG9jYWxMaWtlTGlzdCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBsb2NhbExpa2VMaXN0PWxvY2FsTGlrZUxpc3Q/SlNPTi5wYXJzZShsb2NhbExpa2VMaXN0KTpbXVxuICAgICAgICAgICAgaWYoIWxvY2FsTGlrZUxpc3QuaW5jbHVkZXMoZGF0YSkpe1xuICAgICAgICAgICAgICAgIGF4aW9zKGAvYXBpL3NvcnQ/ZGF0ZT0ke2RhdGF9Jms9bGlrZUNvdW50YClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmxpa2VDb3VudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXNvcnRJbmZvW2RhdGFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV09e2xpa2VDb3VudDowfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXS5saWtlQ291bnQ9cmVzLmRhdGEubGlrZUNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEluZm8oc29ydEluZm8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxMaWtlTGlzdC5wdXNoKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlrZUxpc3QobG9jYWxMaWtlTGlzdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsTGlrZUxpc3QnLEpTT04uc3RyaW5naWZ5KGxvY2FsTGlrZUxpc3QpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRocm90dGxlTGlrZUZ1bj10aHJvdHRsZSgoZGF0YSk9Pmxpa2VGdW4oZGF0YSksMTUwMClcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpe1xuICAgICAgICBsaWtlRnVuKClcbiAgICB9XG4gICAgY29uc3QgZG93bmxvYWRGdW4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGF4aW9zKGAvYXBpL3NvcnQ/ZGF0ZT0ke2RhdGF9Jms9ZG93bmxvYWRDb3VudGApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubGlrZUNvdW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFzb3J0SW5mb1tkYXRhXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV09e2Rvd25sb2FkQ291bnQ6MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdLmRvd25sb2FkQ291bnQ9cmVzLmRhdGEuZG93bmxvYWRDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEluZm8oc29ydEluZm8pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IChuZXh0RGF0ZSwgaXNNb2JpbGUpID0+IHtcbiAgICAgICAgdXBkYXRlTG9hZGluZyh0cnVlKTtcbiAgICAgICAgYXhpb3MoYC9hcGkvbGlzdD9kYXRlPSR7bmV4dERhdGV9JmNvdW50PTEwYClcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heENvdW50ID0gaXNNb2JpbGUgPyAwIDogMjtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIC8vMCAxIDJcbiAgICAgICAgICAgICAgICAgICAgKGNvdW50IDwgbWF4Q291bnQpICYmIG1heENvdW50ICYmIChzcGFuID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAyKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIDEwLWks56ysOOW8oOaNonNwYW4gIDggMTYgMjRcbiAgICAgICAgICAgICAgICAgICAgaSAmJiAhKGklMTApICYmIG1heENvdW50ICYmIChzcGFuID0gMik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1heENvdW50LCBzcGFuLCBpc01vYmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPT09IDIgJiYgKGNvdW50ICs9IDEpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtblN0YXJ0OiBgc3BhbiAke3NwYW59YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRSb3dTdGFydDogYHNwYW4gJHtzcGFufWAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kYXRlU3RyID0gbW9tZW50KGl0ZW0uZGF0ZSwgJ1lZWVlNTUREJykuZm9ybWF0KCdZWS5NTS5ERCcpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNwYW4gPSBzcGFuO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IGRhdGEuZGF0YS5sYXN0KClcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0KFsuLi5saXN0LCAuLi5kYXRhLmRhdGFdKTtcbiAgICAgICAgICAgICAgICAhbGFzdC5wcmV2ICYmIHNldEVtcHR5KHRydWUpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU5leHREYXRlKGxhc3QucHJldik7XG4gICAgICAgICAgICAgICAgdXBkYXRlTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0ICRwYWdlID0gdXNlUmVmKCk7XG5cbiAgICB1c2VFZmZlY3QoKGUpID0+IHtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvYWRpbmcgfHwgaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFNob3dUb3AoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDcwMCk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyA1MCA+ICRwYWdlLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcXVlcnlMaXN0KG5leHREYXRlLCBpc01vYmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cub25zY3JvbGwoKTtcbiAgICAgICAgfSlcbiAgICB9LCBbbmV4dERhdGUsIGxvYWRpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gY2hlY2tNb2RlKCk7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBheGlvcyhgL2FwaS9zb3J0YClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U29ydEluZm8ocmVzLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICBxdWVyeUxpc3QobmV4dERhdGUsIGlzTW9iaWxlKVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW5kZXgtcGFnZSAke2lzTW9iaWxlICYmICdtb2JpbGUtcGFnZSd9YH0gcmVmPXskcGFnZX0+XG4gICAgICAgICAgICA8SGVhZD48L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0XCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IGlzTW9iaWxlID8gYHJlcGVhdCgke2xpc3QubGVuZ3RofSwgNzV2dylgIDogYHJlcGVhdCgke3BhcnNlSW50KGxpc3QubGVuZ3RoLyAxMCkgKiA0fSwgMTl2dylgXG4gICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5tYXAoKGltZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aW1nLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW1nLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWZhbmdkYSBhY3Rpb25CdG5cIiBocmVmPXtgLyR7aW1nLmRhdGV9YH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2ltZy5jcH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkYXRlLXN0ciBzaXplLSR7aW1nLnNwYW59YH0+e2ltZy5kYXRlU3RyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWJnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCcvL2NuLmJpbmcuY29tJHtpbWcudXJsYmFzZX1fJHtmYWxzZSA/ICc3Njh4MTI4MCcgOiAnMTAyNHg3NjgnfS5qcGcnKWB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFuZGxlQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyhsaWtlTGlzdC5pbmNsdWRlcyhpbWcuZGF0ZSk/J2ljb24tbGlrZS1maWxsJzonaWNvbi14aWh1YW4nKSsnIGljb25mb250J30gb25DbGljaz17KCkgPT4ge3Rocm90dGxlTGlrZUZ1bihpbWcuZGF0ZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPntzb3J0SW5mb1tpbWcuZGF0ZV0gJiYgc29ydEluZm9baW1nLmRhdGVdLmxpa2VDb3VudCB8fCAwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBvbkNsaWNrPXsoKSA9PiB7c2V0RG93bkRpYWxvZ1Zpc2libGUodHJ1ZSk7dXBkYXRlSW1nKGltZyk7fX0gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1kb3dubG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj57c29ydEluZm9baW1nLmRhdGVdICYmIHNvcnRJbmZvW2ltZy5kYXRlXS5kb3dubG9hZENvdW50IHx8IDB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzRW1wdHkgJiYgPGRpdiBjbGFzc05hbWU9XCJlbXB0eS10ZXh0XCI+4oCU4oCUIOWIsOW6leWVpiDigJTigJQ8L2Rpdj59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWJ0blwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG8tdG9wIGljb25mb250IGljb24tYXJyb3ctbGVmdCAkeyFzaG93VG9wICYmICdoaWRlJ31gfVxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfS8+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi10b3V6aVwiIGhyZWY9Jy9yYW5kb20nLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPERvd25EaWFsb2cgZG93bmxvYWRGdW49e2Rvd25sb2FkRnVufSBpc01vYmlsZT17aXNNb2JpbGV9IHZpc2libGU9e2Rvd25EaWFsb2dWaXNpYmxlfSBvbkhpZGU9eygpID0+IHtzZXREb3duRGlhbG9nVmlzaWJsZShmYWxzZSk7dXBkYXRlSW1nKHt9KTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nSW5mbz17aW1nfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=