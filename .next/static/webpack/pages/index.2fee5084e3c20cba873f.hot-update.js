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

      if (document.documentElement.clientHeight + document.documentElement.scrollTop + 100 > $page.current.clientHeight) {// queryList(nextDate, isMobile);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwibGlzdCIsInVwZGF0ZUxpc3QiLCJpbWciLCJ1cGRhdGVJbWciLCJuZXh0RGF0ZSIsInVwZGF0ZU5leHREYXRlIiwibG9hZGluZyIsInVwZGF0ZUxvYWRpbmciLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwic2hvd1RvcCIsInNldFNob3dUb3AiLCJpc0VtcHR5Iiwic2V0RW1wdHkiLCJzb3J0SW5mbyIsInNldFNvcnRJbmZvIiwibGlrZUxpc3QiLCJzZXRMaWtlTGlzdCIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpa2VGdW4iLCJkYXRhIiwibG9jYWxMaWtlTGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJKU09OIiwicGFyc2UiLCJpbmNsdWRlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImxpa2VDb3VudCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGhyb3R0bGVMaWtlRnVuIiwidGhyb3R0bGUiLCJkb3dubG9hZEZ1biIsImRvd25sb2FkQ291bnQiLCJxdWVyeUxpc3QiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwic3R5bGUiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJkYXRlU3RyIiwibW9tZW50IiwiZGF0ZSIsImZvcm1hdCIsImxhc3QiLCJwcmV2IiwiJHBhZ2UiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJlIiwib25zY3JvbGwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJncmlkVGVtcGxhdGVSb3dzIiwicGFyc2VJbnQiLCJtYXAiLCJjcCIsImJhY2tncm91bmRJbWFnZSIsInVybGJhc2UiLCJzY3JvbGxUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsMkVBQVc7QUFBQSxrQkFDNEJBLHNEQUFRLENBQUMsS0FBRCxDQURwQztBQUFBLE1BQ2ZDLGlCQURlO0FBQUEsTUFDSUMsb0JBREo7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFZkcsSUFGZTtBQUFBLE1BRVRDLFVBRlM7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUMsRUFBRCxDQUhYO0FBQUEsTUFHZkssR0FIZTtBQUFBLE1BR1ZDLFNBSFU7O0FBQUEsbUJBSWFOLHNEQUFRLENBQUMsQ0FBRCxDQUpyQjtBQUFBLE1BSWZPLFFBSmU7QUFBQSxNQUlMQyxjQUpLOztBQUFBLG1CQUtXUixzREFBUSxDQUFDLEtBQUQsQ0FMbkI7QUFBQSxNQUtmUyxPQUxlO0FBQUEsTUFLTkMsYUFMTTs7QUFBQSxtQkFNVVYsc0RBQVEsQ0FBQyxLQUFELENBTmxCO0FBQUEsTUFNZlcsUUFOZTtBQUFBLE1BTUxDLFdBTks7O0FBQUEsbUJBT1FaLHNEQUFRLENBQUMsS0FBRCxDQVBoQjtBQUFBLE1BT2ZhLE9BUGU7QUFBQSxNQU9OQyxVQVBNOztBQUFBLG1CQVFNZCxzREFBUSxDQUFDLEtBQUQsQ0FSZDtBQUFBLE1BUWZlLE9BUmU7QUFBQSxNQVFOQyxRQVJNOztBQUFBLG1CQVNVaEIsc0RBQVEsQ0FBQyxFQUFELENBVGxCO0FBQUEsTUFTZmlCLFFBVGU7QUFBQSxNQVNMQyxXQVRLOztBQUFBLG9CQVVVbEIsc0RBQVEsQ0FBQyxFQUFELENBVmxCO0FBQUEsTUFVZm1CLFFBVmU7QUFBQSxNQVVMQyxXQVZLOztBQVd0QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUlDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUFwQixJQUE0QkQsTUFBTSxDQUFDQyxVQUFQLEdBQW9CRCxNQUFNLENBQUNFLFdBQTNELEVBQXdFO0FBQ3BFWixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBLGFBQU8sSUFBUDtBQUNIOztBQUNEQSxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0EsV0FBTyxLQUFQO0FBQ0gsR0FQRDs7QUFRQSxNQUFNYSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQVU7QUFDdEIsUUFBSUMsYUFBYSxHQUFDTCxNQUFNLENBQUNNLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGVBQTVCLENBQWxCOztBQUNBLFFBQUcsQ0FBQ1YsUUFBUSxDQUFDVyxNQUFWLElBQW9CSCxhQUF2QixFQUFxQztBQUNqQ1AsaUJBQVcsQ0FBQ1csSUFBSSxDQUFDQyxLQUFMLENBQVdMLGFBQVgsQ0FBRCxDQUFYO0FBQ0g7O0FBQ0QsUUFBR0QsSUFBSCxFQUFRO0FBQ0pDLG1CQUFhLEdBQUNBLGFBQWEsR0FBQ0ksSUFBSSxDQUFDQyxLQUFMLENBQVdMLGFBQVgsQ0FBRCxHQUEyQixFQUF0RDs7QUFDQSxVQUFHLENBQUNBLGFBQWEsQ0FBQ00sUUFBZCxDQUF1QlAsSUFBdkIsQ0FBSixFQUFpQztBQUM3QlEsb0RBQUssMEJBQW1CUixJQUFuQixrQkFBTCxDQUNLUyxJQURMLENBQ1UsVUFBQUMsR0FBRyxFQUFJO0FBQ1QsY0FBR0EsR0FBRyxDQUFDVixJQUFKLENBQVNXLFNBQVosRUFBc0I7QUFDbEIsZ0JBQUcsQ0FBQ3BCLFFBQVEsQ0FBQ1MsSUFBRCxDQUFaLEVBQW1CO0FBQ2ZULHNCQUFRLENBQUNTLElBQUQsQ0FBUixHQUFlO0FBQUNXLHlCQUFTLEVBQUM7QUFBWCxlQUFmO0FBQ0g7O0FBQ0RwQixvQkFBUSxDQUFDUyxJQUFELENBQVIsQ0FBZVcsU0FBZixHQUF5QkQsR0FBRyxDQUFDVixJQUFKLENBQVNXLFNBQWxDO0FBQ0FuQix1QkFBVyxDQUFDRCxRQUFELENBQVg7QUFDQVUseUJBQWEsQ0FBQ1csSUFBZCxDQUFtQlosSUFBbkI7QUFDQU4sdUJBQVcsQ0FBQ08sYUFBRCxDQUFYO0FBQ0FMLGtCQUFNLENBQUNNLFlBQVAsQ0FBb0JXLE9BQXBCLENBQTRCLGVBQTVCLEVBQTRDUixJQUFJLENBQUNTLFNBQUwsQ0FBZWIsYUFBZixDQUE1QztBQUNIO0FBQ0osU0FaTDtBQWFIO0FBQ0o7QUFDSixHQXZCRDs7QUF3QkEsTUFBTWMsZUFBZSxHQUFDQyxzREFBUSxDQUFDLFVBQUNoQixJQUFEO0FBQUEsV0FBUUQsT0FBTyxDQUFDQyxJQUFELENBQWY7QUFBQSxHQUFELEVBQXVCLElBQXZCLENBQTlCOztBQUNBLE1BQUcsU0FBaUNKLE1BQXBDLEVBQTJDO0FBQ3ZDRyxXQUFPO0FBQ1Y7O0FBQ0QsTUFBTWtCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNqQixJQUFELEVBQVU7QUFDMUIsUUFBR0EsSUFBSCxFQUFRO0FBQ0pRLGtEQUFLLDBCQUFtQlIsSUFBbkIsc0JBQUwsQ0FDS1MsSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNULFlBQUdBLEdBQUcsQ0FBQ1YsSUFBSixDQUFTVyxTQUFaLEVBQXNCO0FBQ2xCLGNBQUcsQ0FBQ3BCLFFBQVEsQ0FBQ1MsSUFBRCxDQUFaLEVBQW1CO0FBQ2ZULG9CQUFRLENBQUNTLElBQUQsQ0FBUixHQUFlO0FBQUNrQiwyQkFBYSxFQUFDO0FBQWYsYUFBZjtBQUNIOztBQUNEM0Isa0JBQVEsQ0FBQ1MsSUFBRCxDQUFSLENBQWVrQixhQUFmLEdBQTZCUixHQUFHLENBQUNWLElBQUosQ0FBU2tCLGFBQXRDO0FBQ0ExQixxQkFBVyxDQUFDRCxRQUFELENBQVg7QUFDSDtBQUNKLE9BVEw7QUFVSDtBQUNKLEdBYkQ7O0FBY0EsTUFBTTRCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN0QyxRQUFELEVBQVdJLFFBQVgsRUFBd0I7QUFDdENELGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0F3QixnREFBSywwQkFBbUIzQixRQUFuQixlQUFMLENBQ0s0QixJQURMLENBQ1UsZ0JBQVk7QUFBQSxVQUFWVCxJQUFVLFFBQVZBLElBQVU7QUFDZCxVQUFJb0IsS0FBSyxHQUFHLENBQVo7QUFDQSxVQUFNQyxRQUFRLEdBQUdwQyxRQUFRLEdBQUcsQ0FBSCxHQUFPLENBQWhDO0FBQ0FlLFVBQUksQ0FBQ0EsSUFBTCxDQUFVc0IsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUMzQixZQUFJQyxJQUFJLEdBQUcsQ0FBWCxDQUQyQixDQUUzQjs7QUFDQ0wsYUFBSyxHQUFHQyxRQUFULElBQXNCQSxRQUF0QixLQUFtQ0ksSUFBSSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUQsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTFCLENBQTFDLEVBSDJCLENBSTNCOztBQUNFUCxnQkFBUSxHQUFDRCxLQUFWLEtBQXNCLEtBQUtJLENBQTVCLElBQW1DSCxRQUFuQyxLQUFnREksSUFBSSxHQUFHLENBQXZELEVBTDJCLENBTTNCOztBQUNBQSxZQUFJLEtBQUssQ0FBVCxLQUFlTCxLQUFLLElBQUksQ0FBeEI7QUFDQUcsWUFBSSxDQUFDTSxLQUFMLEdBQWE7QUFDVEMseUJBQWUsaUJBQVVMLElBQVYsQ0FETjtBQUVUTSxzQkFBWSxpQkFBVU4sSUFBVjtBQUZILFNBQWI7QUFJQUYsWUFBSSxDQUFDUyxPQUFMLEdBQWVDLDZDQUFNLENBQUNWLElBQUksQ0FBQ1csSUFBTixFQUFZLFVBQVosQ0FBTixDQUE4QkMsTUFBOUIsQ0FBcUMsVUFBckMsQ0FBZjtBQUNBWixZQUFJLENBQUNFLElBQUwsR0FBWUEsSUFBWjtBQUNILE9BZEQ7QUFlQSxVQUFNVyxJQUFJLEdBQUdwQyxJQUFJLENBQUNBLElBQUwsQ0FBVW9DLElBQVYsRUFBYjtBQUNBMUQsZ0JBQVUsd0dBQUtELElBQUwsZ0dBQWN1QixJQUFJLENBQUNBLElBQW5CLEdBQVY7QUFDQSxPQUFDb0MsSUFBSSxDQUFDQyxJQUFOLElBQWMvQyxRQUFRLENBQUMsSUFBRCxDQUF0QjtBQUNBUixvQkFBYyxDQUFDc0QsSUFBSSxDQUFDQyxJQUFOLENBQWQ7QUFDQXJELG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0gsS0F4Qkw7QUF5QkgsR0EzQkQ7O0FBNkJBLE1BQU1zRCxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCO0FBRUFDLHlEQUFTLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2I3QyxVQUFNLENBQUM4QyxRQUFQLEdBQWtCLFlBQU07QUFDcEIsVUFBSTNELE9BQU8sSUFBSU0sT0FBZixFQUF3QjtBQUNwQjtBQUNIOztBQUNERCxnQkFBVSxDQUFDdUQsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUF6QixHQUFxQyxHQUF0QyxDQUFWOztBQUNBLFVBQUlGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0NILFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBakUsR0FBNkUsR0FBN0UsR0FBbUZQLEtBQUssQ0FBQ1MsT0FBTixDQUFjRCxZQUFyRyxFQUFtSCxDQUMvRztBQUNIO0FBQ0osS0FSRDs7QUFTQUUsY0FBVSxDQUFDLFlBQU07QUFDYnBELFlBQU0sQ0FBQzhDLFFBQVA7QUFDSCxLQUZTLENBQVY7QUFHSCxHQWJRLEVBYU4sQ0FBQzdELFFBQUQsRUFBV0UsT0FBWCxDQWJNLENBQVQ7QUFlQXlELHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU12RCxRQUFRLEdBQUdVLFNBQVMsRUFBMUI7O0FBQ0FzRCxTQUFLLENBQUNDLFNBQU4sQ0FBZ0JkLElBQWhCLEdBQXVCLFlBQVk7QUFDL0IsYUFBTyxLQUFLLEtBQUtoQyxNQUFMLEdBQWMsQ0FBbkIsQ0FBUDtBQUNILEtBRkQ7O0FBR0FJLGdEQUFLLGFBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNUbEIsaUJBQVcsQ0FBQ2tCLEdBQUcsQ0FBQ1YsSUFBTCxDQUFYO0FBQ0gsS0FITDtBQUlBbUIsYUFBUyxDQUFDdEMsUUFBRCxFQUFXSSxRQUFYLENBQVQ7QUFDSCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBV0Esc0JBQ0k7QUFBSyxhQUFTLHVCQUFnQkEsUUFBUSxJQUFJLGFBQTVCLENBQWQ7QUFBMkQsT0FBRyxFQUFFcUQsS0FBaEU7QUFBQSw0QkFDSSw4REFBQyx3REFBRCxLQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUNLLFdBQUssRUFBRTtBQUNIYSx3QkFBZ0IsRUFBRWxFLFFBQVEsb0JBQWFSLElBQUksQ0FBQzJCLE1BQWxCLGdDQUE4Q2dELFFBQVEsQ0FBQzNFLElBQUksQ0FBQzJCLE1BQUwsR0FBYyxFQUFmLENBQVIsR0FBNkIsQ0FBM0U7QUFEdkIsT0FEWjtBQUFBLGdCQUtRM0IsSUFBSSxDQUFDNEUsR0FBTCxDQUFTLFVBQUMxRSxHQUFEO0FBQUEsNEJBQ0w7QUFDSSxtQkFBUyxFQUFDLFVBRGQ7QUFFSSxlQUFLLEVBQUVBLEdBQUcsQ0FBQ2tELEtBRmY7QUFBQSxrQ0FLSTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG9DQUNJO0FBQUcsdUJBQVMsRUFBQyxnQ0FBYjtBQUE4QyxrQkFBSSxhQUFNbEQsR0FBRyxDQUFDdUQsSUFBVjtBQUFsRCxjQURKLGVBRUk7QUFBTSx1QkFBUyxFQUFDLE1BQWhCO0FBQUEsd0JBQXdCdkQsR0FBRyxDQUFDMkU7QUFBNUIsY0FGSjtBQUFBLFlBTEosZUFTSTtBQUFLLHFCQUFTLDBCQUFtQjNFLEdBQUcsQ0FBQzhDLElBQXZCLENBQWQ7QUFBQSxzQkFBOEM5QyxHQUFHLENBQUNxRDtBQUFsRCxZQVRKLGVBVUk7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFDSyxpQkFBSyxFQUFFO0FBQUN1Qiw2QkFBZSw4QkFBdUI1RSxHQUFHLENBQUM2RSxPQUEzQixjQUFzQyxRQUFRLFNBQVIsR0FBcUIsVUFBM0Q7QUFBaEI7QUFEWixZQVZKLGVBWUs7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLEVBQUUsQ0FBQy9ELFFBQVEsQ0FBQ2MsUUFBVCxDQUFrQjVCLEdBQUcsQ0FBQ3VELElBQXRCLElBQTRCLGdCQUE1QixHQUE2QyxhQUE5QyxJQUE2RCxXQUE5RTtBQUEyRixxQkFBTyxFQUFFLG1CQUFNO0FBQUNuQiwrQkFBZSxDQUFDcEMsR0FBRyxDQUFDdUQsSUFBTCxDQUFmO0FBQTBCLGVBQXJJO0FBQUEscUNBQ0k7QUFBTSx5QkFBUyxFQUFDLE9BQWhCO0FBQUEsMEJBQXlCM0MsUUFBUSxDQUFDWixHQUFHLENBQUN1RCxJQUFMLENBQVIsSUFBc0IzQyxRQUFRLENBQUNaLEdBQUcsQ0FBQ3VELElBQUwsQ0FBUixDQUFtQnZCLFNBQXpDLElBQXNEO0FBQS9FO0FBREosY0FESixlQUlJO0FBQU8scUJBQU8sRUFBRSxtQkFBTTtBQUFDbkMsb0NBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUEyQkkseUJBQVMsQ0FBQ0QsR0FBRCxDQUFUO0FBQWdCLGVBQWxFO0FBQW9FLHVCQUFTLEVBQUMsd0JBQTlFO0FBQUEscUNBQ0c7QUFBTSx5QkFBUyxFQUFDLE9BQWhCO0FBQUEsMEJBQXlCWSxRQUFRLENBQUNaLEdBQUcsQ0FBQ3VELElBQUwsQ0FBUixJQUFzQjNDLFFBQVEsQ0FBQ1osR0FBRyxDQUFDdUQsSUFBTCxDQUFSLENBQW1CaEIsYUFBekMsSUFBMEQ7QUFBbkY7QUFESCxjQUpKO0FBQUEsWUFaTDtBQUFBLFdBR1N2QyxHQUFHLENBQUN1RCxJQUhiLENBREs7QUFBQSxPQUFUO0FBTFIsTUFGSixFQWdDSzdDLE9BQU8saUJBQUk7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUEsTUFoQ2hCLGVBaUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLDRDQUFxQyxDQUFDRixPQUFELElBQVksTUFBakQsQ0FBZDtBQUNLLGVBQU8sRUFBRTtBQUFBLGlCQUFNUyxNQUFNLENBQUM2RCxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQU47QUFBQTtBQURkLFFBREosZUFHSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBbUMsWUFBSSxFQUFDO0FBQXhDLFFBSEo7QUFBQSxNQWpDSixlQXNDSSw4REFBQyw4REFBRDtBQUFZLGlCQUFXLEVBQUV4QyxXQUF6QjtBQUFzQyxjQUFRLEVBQUVoQyxRQUFoRDtBQUEwRCxhQUFPLEVBQUVWLGlCQUFuRTtBQUFzRixZQUFNLEVBQUUsa0JBQU07QUFBQ0MsNEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUE0QkksaUJBQVMsQ0FBQyxFQUFELENBQVQ7QUFBZSxPQUFoSjtBQUNZLGFBQU8sRUFBRUQ7QUFEckIsTUF0Q0o7QUFBQSxJQURKO0FBMkNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmZWU1MDg0ZTNjMjBjYmE4NzNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZFwiO1xuaW1wb3J0IERvd25EaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG93bkRpYWxvZ1wiO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5cbmltcG9ydCB7U3Bpbn0gZnJvbSBcImFudGRcIjtcbi8qZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBsaWtlRnVuKClcbiAgICB9XG4gICAgcmVuZGVyICgpe1xuICAgICAgICByZXR1cm4gUGFnZUZ1bigpXG4gICAgfVxufSovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBbZG93bkRpYWxvZ1Zpc2libGUsIHNldERvd25EaWFsb2dWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbGlzdCwgdXBkYXRlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2ltZywgdXBkYXRlSW1nXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbbmV4dERhdGUsIHVwZGF0ZU5leHREYXRlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtsb2FkaW5nLCB1cGRhdGVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd1RvcCwgc2V0U2hvd1RvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzRW1wdHksIHNldEVtcHR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc29ydEluZm8sIHNldFNvcnRJbmZvXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbbGlrZUxpc3QsIHNldExpa2VMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBjaGVja01vZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQgfHwgd2luZG93LmlubmVyV2lkdGggPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHNldElzTW9iaWxlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SXNNb2JpbGUoZmFsc2UpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgbGlrZUZ1biA9IChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBsb2NhbExpa2VMaXN0PXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxMaWtlTGlzdCcpXG4gICAgICAgIGlmKCFsaWtlTGlzdC5sZW5ndGggJiYgbG9jYWxMaWtlTGlzdCl7XG4gICAgICAgICAgICBzZXRMaWtlTGlzdChKU09OLnBhcnNlKGxvY2FsTGlrZUxpc3QpKVxuICAgICAgICB9XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgbG9jYWxMaWtlTGlzdD1sb2NhbExpa2VMaXN0P0pTT04ucGFyc2UobG9jYWxMaWtlTGlzdCk6W11cbiAgICAgICAgICAgIGlmKCFsb2NhbExpa2VMaXN0LmluY2x1ZGVzKGRhdGEpKXtcbiAgICAgICAgICAgICAgICBheGlvcyhgL2FwaS9zb3J0P2RhdGU9JHtkYXRhfSZrPWxpa2VDb3VudGApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5saWtlQ291bnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFzb3J0SW5mb1tkYXRhXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdPXtsaWtlQ291bnQ6MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV0ubGlrZUNvdW50PXJlcy5kYXRhLmxpa2VDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRJbmZvKHNvcnRJbmZvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsTGlrZUxpc3QucHVzaChkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExpa2VMaXN0KGxvY2FsTGlrZUxpc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbExpa2VMaXN0JyxKU09OLnN0cmluZ2lmeShsb2NhbExpa2VMaXN0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0aHJvdHRsZUxpa2VGdW49dGhyb3R0bGUoKGRhdGEpPT5saWtlRnVuKGRhdGEpLDE1MDApXG4gICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KXtcbiAgICAgICAgbGlrZUZ1bigpXG4gICAgfVxuICAgIGNvbnN0IGRvd25sb2FkRnVuID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBheGlvcyhgL2FwaS9zb3J0P2RhdGU9JHtkYXRhfSZrPWRvd25sb2FkQ291bnRgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmxpa2VDb3VudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighc29ydEluZm9bZGF0YV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdPXtkb3dubG9hZENvdW50OjB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXS5kb3dubG9hZENvdW50PXJlcy5kYXRhLmRvd25sb2FkQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRJbmZvKHNvcnRJbmZvKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBxdWVyeUxpc3QgPSAobmV4dERhdGUsIGlzTW9iaWxlKSA9PiB7XG4gICAgICAgIHVwZGF0ZUxvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGF4aW9zKGAvYXBpL2xpc3Q/ZGF0ZT0ke25leHREYXRlfSZjb3VudD0xMGApXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IGlzTW9iaWxlID8gMCA6IDI7XG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW4gPSAxO1xuICAgICAgICAgICAgICAgICAgICAvLzAgMSAyXG4gICAgICAgICAgICAgICAgICAgIChjb3VudCA8IG1heENvdW50KSAmJiBtYXhDb3VudCAmJiAoc3BhbiA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMikpO1xuICAgICAgICAgICAgICAgICAgICAvLyAyLOesrDnlvKDmjaJzcGFuICA7ICAxIOacgOWQjuS4gOW8oHNwYW4gO1xuICAgICAgICAgICAgICAgICAgICAoKG1heENvdW50LWNvdW50KSA9PT0gKDEwIC0gaSkpICYmIG1heENvdW50ICYmIChzcGFuID0gMik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvdW50PTEgOyBjb3VudD0yIDtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiA9PT0gMiAmJiAoY291bnQgKz0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkQ29sdW1uU3RhcnQ6IGBzcGFuICR7c3Bhbn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFJvd1N0YXJ0OiBgc3BhbiAke3NwYW59YCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRhdGVTdHIgPSBtb21lbnQoaXRlbS5kYXRlLCAnWVlZWU1NREQnKS5mb3JtYXQoJ1lZLk1NLkREJyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3BhbiA9IHNwYW47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gZGF0YS5kYXRhLmxhc3QoKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3QoWy4uLmxpc3QsIC4uLmRhdGEuZGF0YV0pO1xuICAgICAgICAgICAgICAgICFsYXN0LnByZXYgJiYgc2V0RW1wdHkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dERhdGUobGFzdC5wcmV2KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgJHBhZ2UgPSB1c2VSZWYoKTtcblxuICAgIHVzZUVmZmVjdCgoZSkgPT4ge1xuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9hZGluZyB8fCBpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2hvd1RvcChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNzAwKTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCArIDEwMCA+ICRwYWdlLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLy8gcXVlcnlMaXN0KG5leHREYXRlLCBpc01vYmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cub25zY3JvbGwoKTtcbiAgICAgICAgfSlcbiAgICB9LCBbbmV4dERhdGUsIGxvYWRpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gY2hlY2tNb2RlKCk7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBheGlvcyhgL2FwaS9zb3J0YClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U29ydEluZm8ocmVzLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICBxdWVyeUxpc3QobmV4dERhdGUsIGlzTW9iaWxlKVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW5kZXgtcGFnZSAke2lzTW9iaWxlICYmICdtb2JpbGUtcGFnZSd9YH0gcmVmPXskcGFnZX0+XG4gICAgICAgICAgICA8SGVhZD48L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0XCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IGlzTW9iaWxlID8gYHJlcGVhdCgke2xpc3QubGVuZ3RofSwgNzV2dylgIDogYHJlcGVhdCgke3BhcnNlSW50KGxpc3QubGVuZ3RoIC8gMTApICogNH0sIDE5dncpYFxuICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QubWFwKChpbWcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2ltZy5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ltZy5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1mYW5nZGEgYWN0aW9uQnRuXCIgaHJlZj17YC8ke2ltZy5kYXRlfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPntpbWcuY3B9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZGF0ZS1zdHIgc2l6ZS0ke2ltZy5zcGFufWB9PntpbWcuZGF0ZVN0cn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1iZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgnLy9jbi5iaW5nLmNvbSR7aW1nLnVybGJhc2V9XyR7ZmFsc2UgPyAnNzY4eDEyODAnIDogJzEwMjR4NzY4J30uanBnJylgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbmRsZUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsobGlrZUxpc3QuaW5jbHVkZXMoaW1nLmRhdGUpPydpY29uLWxpa2UtZmlsbCc6J2ljb24teGlodWFuJykrJyBpY29uZm9udCd9IG9uQ2xpY2s9eygpID0+IHt0aHJvdHRsZUxpa2VGdW4oaW1nLmRhdGUpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj57c29ydEluZm9baW1nLmRhdGVdICYmIHNvcnRJbmZvW2ltZy5kYXRlXS5saWtlQ291bnQgfHwgMH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgb25DbGljaz17KCkgPT4ge3NldERvd25EaWFsb2dWaXNpYmxlKHRydWUpO3VwZGF0ZUltZyhpbWcpO319IGNsYXNzTmFtZT1cImljb25mb250IGljb24tZG93bmxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+e3NvcnRJbmZvW2ltZy5kYXRlXSAmJiBzb3J0SW5mb1tpbWcuZGF0ZV0uZG93bmxvYWRDb3VudCB8fCAwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpc0VtcHR5ICYmIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktdGV4dFwiPuKAlOKAlCDliLDlupXllaYg4oCU4oCUPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1idG5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvLXRvcCBpY29uZm9udCBpY29uLWFycm93LWxlZnQgJHshc2hvd1RvcCAmJiAnaGlkZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX0vPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tdG91emlcIiBocmVmPScvcmFuZG9tJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxEb3duRGlhbG9nIGRvd25sb2FkRnVuPXtkb3dubG9hZEZ1bn0gaXNNb2JpbGU9e2lzTW9iaWxlfSB2aXNpYmxlPXtkb3duRGlhbG9nVmlzaWJsZX0gb25IaWRlPXsoKSA9PiB7c2V0RG93bkRpYWxvZ1Zpc2libGUoZmFsc2UpO3VwZGF0ZUltZyh7fSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0luZm89e2ltZ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9