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
    window.onscroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_8___default()(function () {
      if (loading || isEmpty) {
        return;
      }

      setShowTop(document.documentElement.scrollTop > 700);
      var scrollTop = document.documentElement.scrollTop;
      var clientHeight = document.documentElement.clientHeight; // 触发滚动高度

      var triggerHeight = Math.ceil(clientHeight * 0.25) + 40;
      var pageHeight = $page.current.clientHeight; // console.log(triggerHeight,'triggerHeight')
      // 滚动条20px

      if (scrollTop && clientHeight + scrollTop + triggerHeight > pageHeight) {
        queryList(nextDate, isMobile);
      } // console.log(clientHeight + scrollTop,pageHeight)

    }, 100);
    window.onscroll();
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
     true && setTimeout(function () {
      var VConsole = __webpack_require__(/*! vconsole */ "./node_modules/vconsole/dist/vconsole.min.js");

      new VConsole();
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
    className: "index-page ".concat(isMobile && 'mobile-page'),
    ref: $page,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
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
              href: "/".concat(img.date, "?time=").concat(img.date, "&title=", 5)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwibGlzdCIsInVwZGF0ZUxpc3QiLCJpbWciLCJ1cGRhdGVJbWciLCJuZXh0RGF0ZSIsInVwZGF0ZU5leHREYXRlIiwibG9hZGluZyIsInVwZGF0ZUxvYWRpbmciLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwic2hvd1RvcCIsInNldFNob3dUb3AiLCJpc0VtcHR5Iiwic2V0RW1wdHkiLCJzb3J0SW5mbyIsInNldFNvcnRJbmZvIiwibGlrZUxpc3QiLCJzZXRMaWtlTGlzdCIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpa2VGdW4iLCJkYXRhIiwibG9jYWxMaWtlTGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJKU09OIiwicGFyc2UiLCJpbmNsdWRlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImxpa2VDb3VudCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGhyb3R0bGVMaWtlRnVuIiwidGhyb3R0bGUiLCJkb3dubG9hZEZ1biIsImRvd25sb2FkQ291bnQiLCJxdWVyeUxpc3QiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwic3R5bGUiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJkYXRlU3RyIiwibW9tZW50IiwiZGF0ZSIsImZvcm1hdCIsImxhc3QiLCJwcmV2IiwiJHBhZ2UiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJlIiwib25zY3JvbGwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsInRyaWdnZXJIZWlnaHQiLCJwYWdlSGVpZ2h0IiwiY3VycmVudCIsIkFycmF5IiwicHJvdG90eXBlIiwic2V0VGltZW91dCIsIlZDb25zb2xlIiwicmVxdWlyZSIsImdyaWRUZW1wbGF0ZVJvd3MiLCJwYXJzZUludCIsIm1hcCIsImNwIiwiYmFja2dyb3VuZEltYWdlIiwidXJsYmFzZSIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSwyRUFBVztBQUFBLGtCQUM0QkEsc0RBQVEsQ0FBQyxLQUFELENBRHBDO0FBQUEsTUFDZkMsaUJBRGU7QUFBQSxNQUNJQyxvQkFESjs7QUFBQSxtQkFFS0Ysc0RBQVEsQ0FBQyxFQUFELENBRmI7QUFBQSxNQUVmRyxJQUZlO0FBQUEsTUFFVEMsVUFGUzs7QUFBQSxtQkFHR0osc0RBQVEsQ0FBQyxFQUFELENBSFg7QUFBQSxNQUdmSyxHQUhlO0FBQUEsTUFHVkMsU0FIVTs7QUFBQSxtQkFJYU4sc0RBQVEsQ0FBQyxDQUFELENBSnJCO0FBQUEsTUFJZk8sUUFKZTtBQUFBLE1BSUxDLGNBSks7O0FBQUEsbUJBS1dSLHNEQUFRLENBQUMsS0FBRCxDQUxuQjtBQUFBLE1BS2ZTLE9BTGU7QUFBQSxNQUtOQyxhQUxNOztBQUFBLG1CQU1VVixzREFBUSxDQUFDLEtBQUQsQ0FObEI7QUFBQSxNQU1mVyxRQU5lO0FBQUEsTUFNTEMsV0FOSzs7QUFBQSxtQkFPUVosc0RBQVEsQ0FBQyxLQUFELENBUGhCO0FBQUEsTUFPZmEsT0FQZTtBQUFBLE1BT05DLFVBUE07O0FBQUEsbUJBUU1kLHNEQUFRLENBQUMsS0FBRCxDQVJkO0FBQUEsTUFRZmUsT0FSZTtBQUFBLE1BUU5DLFFBUk07O0FBQUEsbUJBU1VoQixzREFBUSxDQUFDLEVBQUQsQ0FUbEI7QUFBQSxNQVNmaUIsUUFUZTtBQUFBLE1BU0xDLFdBVEs7O0FBQUEsb0JBVVVsQixzREFBUSxD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UUFBUSxDQUFDWixHQUFHLENBQUN1RCxJQUFMLENBQVIsQ0FBbUJoQixhQUF6QyxJQUEwRDtBQUFuRjtBQURILGNBSko7QUFBQSxZQVpMO0FBQUEsV0FHU3ZDLEdBQUcsQ0FBQ3VELElBSGIsQ0FESztBQUFBLE9BQVQ7QUFMUixNQURKLEVBK0JLN0MsT0FBTyxpQkFBSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQSxNQS9CaEIsZUFnQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsNENBQXFDLENBQUNGLE9BQUQsSUFBWSxNQUFqRCxDQUFkO0FBQ0ssZUFBTyxFQUFFO0FBQUEsaUJBQU1TLE1BQU0sQ0FBQ2lFLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBTjtBQUFBO0FBRGQsUUFESixlQUdJO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFtQyxZQUFJLEVBQUM7QUFBeEMsUUFISjtBQUFBLE1BaENKLGVBcUNJLDhEQUFDLDhEQUFEO0FBQVksaUJBQVcsRUFBRTVDLFdBQXpCO0FBQXNDLGNBQVEsRUFBRWhDLFFBQWhEO0FBQTBELGFBQU8sRUFBRVYsaUJBQW5FO0FBQXNGLFlBQU0sRUFBRSxrQkFBTTtBQUFDQyw0QkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQTRCSSxpQkFBUyxDQUFDLEVBQUQsQ0FBVDtBQUFlLE9BQWhKO0FBQ1ksYUFBTyxFQUFFRDtBQURyQixNQXJDSjtBQUFBLElBREo7QUEwQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWY5YzQzYjVkNTQ1MzZhZGE2ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRcIjtcclxuaW1wb3J0IERvd25EaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG93bkRpYWxvZ1wiO1xyXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcclxuXHJcbmltcG9ydCB7U3Bpbn0gZnJvbSBcImFudGRcIjtcclxuLypleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgICAgICBsaWtlRnVuKClcclxuICAgIH1cclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgICByZXR1cm4gUGFnZUZ1bigpXHJcbiAgICB9XHJcbn0qL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IFtkb3duRGlhbG9nVmlzaWJsZSwgc2V0RG93bkRpYWxvZ1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xpc3QsIHVwZGF0ZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ltZywgdXBkYXRlSW1nXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtuZXh0RGF0ZSwgdXBkYXRlTmV4dERhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgdXBkYXRlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93VG9wLCBzZXRTaG93VG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0VtcHR5LCBzZXRFbXB0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc29ydEluZm8sIHNldFNvcnRJbmZvXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtsaWtlTGlzdCwgc2V0TGlrZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgY2hlY2tNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQgfHwgd2luZG93LmlubmVyV2lkdGggPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgc2V0SXNNb2JpbGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc01vYmlsZShmYWxzZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaWtlRnVuID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgbG9jYWxMaWtlTGlzdD13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsTGlrZUxpc3QnKVxyXG4gICAgICAgIGlmKCFsaWtlTGlzdC5sZW5ndGggJiYgbG9jYWxMaWtlTGlzdCl7XHJcbiAgICAgICAgICAgIHNldExpa2VMaXN0KEpTT04ucGFyc2UobG9jYWxMaWtlTGlzdCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICBsb2NhbExpa2VMaXN0PWxvY2FsTGlrZUxpc3Q/SlNPTi5wYXJzZShsb2NhbExpa2VMaXN0KTpbXVxyXG4gICAgICAgICAgICBpZighbG9jYWxMaWtlTGlzdC5pbmNsdWRlcyhkYXRhKSl7XHJcbiAgICAgICAgICAgICAgICBheGlvcyhgL2FwaS9zb3J0P2RhdGU9JHtkYXRhfSZrPWxpa2VDb3VudGApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubGlrZUNvdW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFzb3J0SW5mb1tkYXRhXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV09e2xpa2VDb3VudDowfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV0ubGlrZUNvdW50PXJlcy5kYXRhLmxpa2VDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEluZm8oc29ydEluZm8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbExpa2VMaXN0LnB1c2goZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExpa2VMaXN0KGxvY2FsTGlrZUxpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsTGlrZUxpc3QnLEpTT04uc3RyaW5naWZ5KGxvY2FsTGlrZUxpc3QpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHRocm90dGxlTGlrZUZ1bj10aHJvdHRsZSgoZGF0YSk9Pmxpa2VGdW4oZGF0YSksMTUwMClcclxuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyl7XHJcbiAgICAgICAgbGlrZUZ1bigpXHJcbiAgICB9XHJcbiAgICBjb25zdCBkb3dubG9hZEZ1biA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGF4aW9zKGAvYXBpL3NvcnQ/ZGF0ZT0ke2RhdGF9Jms9ZG93bmxvYWRDb3VudGApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmxpa2VDb3VudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFzb3J0SW5mb1tkYXRhXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXT17ZG93bmxvYWRDb3VudDowfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdLmRvd25sb2FkQ291bnQ9cmVzLmRhdGEuZG93bmxvYWRDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0SW5mbyhzb3J0SW5mbylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IChuZXh0RGF0ZSwgaXNNb2JpbGUpID0+IHtcclxuICAgICAgICB1cGRhdGVMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGF4aW9zKGAvYXBpL2xpc3Q/ZGF0ZT0ke25leHREYXRlfSZjb3VudD0xMGApXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IGlzTW9iaWxlID8gMCA6IDI7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGFuID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAvLzAgMSAyXHJcbiAgICAgICAgICAgICAgICAgICAgKGNvdW50IDwgbWF4Q291bnQpICYmIG1heENvdW50ICYmIChzcGFuID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMiznrKw55byg5o2ic3BhbiAgOyAgMSDmnIDlkI7kuIDlvKBzcGFuIDtcclxuICAgICAgICAgICAgICAgICAgICAoKG1heENvdW50LWNvdW50KSA9PT0gKDEwIC0gaSkpICYmIG1heENvdW50ICYmIChzcGFuID0gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY291bnQ9MSA7IGNvdW50PTIgO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPT09IDIgJiYgKGNvdW50ICs9IDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRDb2x1bW5TdGFydDogYHNwYW4gJHtzcGFufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRSb3dTdGFydDogYHNwYW4gJHtzcGFufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0ZVN0ciA9IG1vbWVudChpdGVtLmRhdGUsICdZWVlZTU1ERCcpLmZvcm1hdCgnWVkuTU0uREQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNwYW4gPSBzcGFuO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBkYXRhLmRhdGEubGFzdCgpXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0KFsuLi5saXN0LCAuLi5kYXRhLmRhdGFdKTtcclxuICAgICAgICAgICAgICAgICFsYXN0LnByZXYgJiYgc2V0RW1wdHkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVOZXh0RGF0ZShsYXN0LnByZXYpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgJHBhZ2UgPSB1c2VSZWYoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKGUpID0+IHtcclxuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSB0aHJvdHRsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsb2FkaW5nIHx8IGlzRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTaG93VG9wKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA3MDApO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnRIZWlnaHQ9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgLy8g6Kem5Y+R5rua5Yqo6auY5bqmXHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VySGVpZ2h0PU1hdGguY2VpbChjbGllbnRIZWlnaHQgKiAwLjI1KSArIDQwO1xyXG4gICAgICAgICAgICBsZXQgcGFnZUhlaWdodD0kcGFnZS5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHJpZ2dlckhlaWdodCwndHJpZ2dlckhlaWdodCcpXHJcbiAgICAgICAgICAgIC8vIOa7muWKqOadoTIwcHhcclxuICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAmJiAoY2xpZW50SGVpZ2h0ICsgc2Nyb2xsVG9wICsgdHJpZ2dlckhlaWdodCA+cGFnZUhlaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5TGlzdChuZXh0RGF0ZSwgaXNNb2JpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNsaWVudEhlaWdodCArIHNjcm9sbFRvcCxwYWdlSGVpZ2h0KVxyXG4gICAgICAgIH0sMTAwKVxyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCgpO1xyXG4gICAgfSwgW25leHREYXRlLCBsb2FkaW5nXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IGNoZWNrTW9kZSgpO1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBheGlvcyhgL2FwaS9zb3J0YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNvcnRJbmZvKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIHF1ZXJ5TGlzdChuZXh0RGF0ZSwgaXNNb2JpbGUpXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBWQ29uc29sZSA9IHJlcXVpcmUoJ3Zjb25zb2xlJyk7XHJcbiAgICAgICAgICAgIG5ldyBWQ29uc29sZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbmRleC1wYWdlICR7aXNNb2JpbGUgJiYgJ21vYmlsZS1wYWdlJ31gfSByZWY9eyRwYWdlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogaXNNb2JpbGUgPyBgcmVwZWF0KCR7bGlzdC5sZW5ndGh9LCA3NXZ3KWAgOiBgcmVwZWF0KCR7cGFyc2VJbnQobGlzdC5sZW5ndGggLyAxMCkgKiA0fSwgMTl2dylgXHJcbiAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5tYXAoKGltZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aW1nLnN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWcuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tZmFuZ2RhIGFjdGlvbkJ0blwiIGhyZWY9e2AvJHtpbWcuZGF0ZX0/dGltZT0ke2ltZy5kYXRlfSZ0aXRsZT0kezV9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57aW1nLmNwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkYXRlLXN0ciBzaXplLSR7aW1nLnNwYW59YH0+e2ltZy5kYXRlU3RyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgnLy9jbi5iaW5nLmNvbSR7aW1nLnVybGJhc2V9XyR7ZmFsc2UgPyAnNzY4eDEyODAnIDogJzEwMjR4NzY4J30uanBnJylgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFuZGxlQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KGxpa2VMaXN0LmluY2x1ZGVzKGltZy5kYXRlKT8naWNvbi1saWtlLWZpbGwnOidpY29uLXhpaHVhbicpKycgaWNvbmZvbnQnfSBvbkNsaWNrPXsoKSA9PiB7dGhyb3R0bGVMaWtlRnVuKGltZy5kYXRlKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj57c29ydEluZm9baW1nLmRhdGVdICYmIHNvcnRJbmZvW2ltZy5kYXRlXS5saWtlQ291bnQgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIG9uQ2xpY2s9eygpID0+IHtzZXREb3duRGlhbG9nVmlzaWJsZSh0cnVlKTt1cGRhdGVJbWcoaW1nKTt9fSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWRvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+e3NvcnRJbmZvW2ltZy5kYXRlXSAmJiBzb3J0SW5mb1tpbWcuZGF0ZV0uZG93bmxvYWRDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzRW1wdHkgJiYgPGRpdiBjbGFzc05hbWU9XCJlbXB0eS10ZXh0XCI+4oCU4oCUIOWIsOW6leWVpiDigJTigJQ8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvLXRvcCBpY29uZm9udCBpY29uLWFycm93LWxlZnQgJHshc2hvd1RvcCAmJiAnaGlkZSd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfS8+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLXRvdXppXCIgaHJlZj0nL3JhbmRvbScvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERvd25EaWFsb2cgZG93bmxvYWRGdW49e2Rvd25sb2FkRnVufSBpc01vYmlsZT17aXNNb2JpbGV9IHZpc2libGU9e2Rvd25EaWFsb2dWaXNpYmxlfSBvbkhpZGU9eygpID0+IHtzZXREb3duRGlhbG9nVmlzaWJsZShmYWxzZSk7dXBkYXRlSW1nKHt9KTt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdJbmZvPXtpbWd9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9