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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwibGlzdCIsInVwZGF0ZUxpc3QiLCJpbWciLCJ1cGRhdGVJbWciLCJuZXh0RGF0ZSIsInVwZGF0ZU5leHREYXRlIiwibG9hZGluZyIsInVwZGF0ZUxvYWRpbmciLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwic2hvd1RvcCIsInNldFNob3dUb3AiLCJpc0VtcHR5Iiwic2V0RW1wdHkiLCJzb3J0SW5mbyIsInNldFNvcnRJbmZvIiwibGlrZUxpc3QiLCJzZXRMaWtlTGlzdCIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpa2VGdW4iLCJkYXRhIiwibG9jYWxMaWtlTGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJKU09OIiwicGFyc2UiLCJpbmNsdWRlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImxpa2VDb3VudCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGhyb3R0bGVMaWtlRnVuIiwidGhyb3R0bGUiLCJkb3dubG9hZEZ1biIsImRvd25sb2FkQ291bnQiLCJxdWVyeUxpc3QiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwic3R5bGUiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJkYXRlU3RyIiwibW9tZW50IiwiZGF0ZSIsImZvcm1hdCIsImxhc3QiLCJwcmV2IiwiJHBhZ2UiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJlIiwib25zY3JvbGwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsInRyaWdnZXJIZWlnaHQiLCJwYWdlSGVpZ2h0IiwiY3VycmVudCIsIkFycmF5IiwicHJvdG90eXBlIiwic2V0VGltZW91dCIsIlZDb25zb2xlIiwicmVxdWlyZSIsImdyaWRUZW1wbGF0ZVJvd3MiLCJwYXJzZUludCIsIm1hcCIsImNwIiwiYmFja2dyb3VuZEltYWdlIiwidXJsYmFzZSIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSwyRUFBVztBQUFBLGtCQUM0QkEsc0RBQVEsQ0FBQyxLQUFELENBRHBDO0FBQUEsTUFDZkMsaUJBRGU7QUFBQSxNQUNJQyxvQkFESjs7QUFBQSxtQkFFS0Ysc0RBQVEsQ0FBQyxFQUFELENBRmI7QUFBQSxNQUVmRyxJQUZlO0FBQUEsTUFFVEMsVUFGUzs7QUFBQSxtQkFHR0osc0RBQVEsQ0FBQyxFQUFELENBSFg7QUFBQSxNQUdmSyxHQUhlO0FBQUEsTUFHVkMsU0FIVTs7QUFBQSxtQkFJYU4sc0RBQVEsQ0FBQyxDQUFELENBSnJCO0FBQUEsTUFJZk8sUUFKZTtBQUFBLE1BSUxDLGNBSks7O0FBQUEsbUJBS1dSLHNEQUFRLENBQUMsS0FBRCxDQUxuQjtBQUFBLE1BS2ZTLE9BTGU7QUFBQSxNQUtOQyxhQUxNOztBQUFBLG1CQU1VVixzREFBUSxDQUFDLEtBQUQsQ0FObEI7QUFBQSxNQU1mVyxRQU5lO0FBQUEsTUFNTEMsV0FOSzs7QUFBQSxtQkFPUVosc0RBQVEsQ0FBQyxLQUFELENBUGhCO0FBQUEsTUFPZmEsT0FQZTtBQUFBLE1BT05DLFVBUE07O0FBQUEsbUJBUU1kLHNEQUFRLENBQUMsS0FBRCxDQVJkO0FBQUEsTUFRZmUsT0FSZTtBQUFBLE1BUU5DLFFBUk07O0FBQUEsbUJBU1VoQixzREFBUSxDQUFDLEVBQUQsQ0FUbEI7QUFBQSxNQVNmaUIsUUFUZTtBQUFBLE1BU0xDLFdBVEs7O0FBQUEsb0JBVVVsQixzREFBUSxD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QUFDdUQsSUFBTCxDQUFSLENBQW1CaEIsYUFBekMsSUFBMEQ7QUFBbkY7QUFESCxjQUpKO0FBQUEsWUFaTDtBQUFBLFdBR1N2QyxHQUFHLENBQUN1RCxJQUhiLENBREs7QUFBQSxPQUFUO0FBTFIsTUFGSixFQWdDSzdDLE9BQU8saUJBQUk7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUEsTUFoQ2hCLGVBaUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLDRDQUFxQyxDQUFDRixPQUFELElBQVksTUFBakQsQ0FBZDtBQUNLLGVBQU8sRUFBRTtBQUFBLGlCQUFNUyxNQUFNLENBQUNpRSxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQU47QUFBQTtBQURkLFFBREosZUFHSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBbUMsWUFBSSxFQUFDO0FBQXhDLFFBSEo7QUFBQSxNQWpDSixlQXNDSSw4REFBQyw4REFBRDtBQUFZLGlCQUFXLEVBQUU1QyxXQUF6QjtBQUFzQyxjQUFRLEVBQUVoQyxRQUFoRDtBQUEwRCxhQUFPLEVBQUVWLGlCQUFuRTtBQUFzRixZQUFNLEVBQUUsa0JBQU07QUFBQ0MsNEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUE0QkksaUJBQVMsQ0FBQyxFQUFELENBQVQ7QUFBZSxPQUFoSjtBQUNZLGFBQU8sRUFBRUQ7QUFEckIsTUF0Q0o7QUFBQSxJQURKO0FBMkNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1YjhlYTYyYjA1NzAxYzg3ZWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkXCI7XHJcbmltcG9ydCBEb3duRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2Rvd25EaWFsb2dcIjtcclxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XHJcblxyXG5pbXBvcnQge1NwaW59IGZyb20gXCJhbnRkXCI7XHJcbi8qZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAgICAgbGlrZUZ1bigpXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgcmV0dXJuIFBhZ2VGdW4oKVxyXG4gICAgfVxyXG59Ki9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBbZG93bkRpYWxvZ1Zpc2libGUsIHNldERvd25EaWFsb2dWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsaXN0LCB1cGRhdGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpbWcsIHVwZGF0ZUltZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbmV4dERhdGUsIHVwZGF0ZU5leHREYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHVwZGF0ZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1RvcCwgc2V0U2hvd1RvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNFbXB0eSwgc2V0RW1wdHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NvcnRJbmZvLCBzZXRTb3J0SW5mb10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbGlrZUxpc3QsIHNldExpa2VMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGNoZWNrTW9kZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDI0IHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHNldElzTW9iaWxlKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNNb2JpbGUoZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGlrZUZ1biA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGxvY2FsTGlrZUxpc3Q9d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbExpa2VMaXN0JylcclxuICAgICAgICBpZighbGlrZUxpc3QubGVuZ3RoICYmIGxvY2FsTGlrZUxpc3Qpe1xyXG4gICAgICAgICAgICBzZXRMaWtlTGlzdChKU09OLnBhcnNlKGxvY2FsTGlrZUxpc3QpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgbG9jYWxMaWtlTGlzdD1sb2NhbExpa2VMaXN0P0pTT04ucGFyc2UobG9jYWxMaWtlTGlzdCk6W11cclxuICAgICAgICAgICAgaWYoIWxvY2FsTGlrZUxpc3QuaW5jbHVkZXMoZGF0YSkpe1xyXG4gICAgICAgICAgICAgICAgYXhpb3MoYC9hcGkvc29ydD9kYXRlPSR7ZGF0YX0maz1saWtlQ291bnRgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmxpa2VDb3VudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighc29ydEluZm9bZGF0YV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdPXtsaWtlQ291bnQ6MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdLmxpa2VDb3VudD1yZXMuZGF0YS5saWtlQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRJbmZvKHNvcnRJbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxMaWtlTGlzdC5wdXNoKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaWtlTGlzdChsb2NhbExpa2VMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbExpa2VMaXN0JyxKU09OLnN0cmluZ2lmeShsb2NhbExpa2VMaXN0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aHJvdHRsZUxpa2VGdW49dGhyb3R0bGUoKGRhdGEpPT5saWtlRnVuKGRhdGEpLDE1MDApXHJcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpe1xyXG4gICAgICAgIGxpa2VGdW4oKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZG93bmxvYWRGdW4gPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICBheGlvcyhgL2FwaS9zb3J0P2RhdGU9JHtkYXRhfSZrPWRvd25sb2FkQ291bnRgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5saWtlQ291bnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighc29ydEluZm9bZGF0YV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV09e2Rvd25sb2FkQ291bnQ6MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXS5kb3dubG9hZENvdW50PXJlcy5kYXRhLmRvd25sb2FkQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEluZm8oc29ydEluZm8pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWVyeUxpc3QgPSAobmV4dERhdGUsIGlzTW9iaWxlKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBheGlvcyhgL2FwaS9saXN0P2RhdGU9JHtuZXh0RGF0ZX0mY291bnQ9MTBgKVxyXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4Q291bnQgPSBpc01vYmlsZSA/IDAgOiAyO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8wIDEgMlxyXG4gICAgICAgICAgICAgICAgICAgIChjb3VudCA8IG1heENvdW50KSAmJiBtYXhDb3VudCAmJiAoc3BhbiA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIDIs56ysOeW8oOaNonNwYW4gIDsgIDEg5pyA5ZCO5LiA5bygc3BhbiA7XHJcbiAgICAgICAgICAgICAgICAgICAgKChtYXhDb3VudC1jb3VudCkgPT09ICgxMCAtIGkpKSAmJiBtYXhDb3VudCAmJiAoc3BhbiA9IDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvdW50PTEgOyBjb3VudD0yIDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuID09PSAyICYmIChjb3VudCArPSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkQ29sdW1uU3RhcnQ6IGBzcGFuICR7c3Bhbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkUm93U3RhcnQ6IGBzcGFuICR7c3Bhbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRhdGVTdHIgPSBtb21lbnQoaXRlbS5kYXRlLCAnWVlZWU1NREQnKS5mb3JtYXQoJ1lZLk1NLkREJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zcGFuID0gc3BhbjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gZGF0YS5kYXRhLmxhc3QoKVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdChbLi4ubGlzdCwgLi4uZGF0YS5kYXRhXSk7XHJcbiAgICAgICAgICAgICAgICAhbGFzdC5wcmV2ICYmIHNldEVtcHR5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dERhdGUobGFzdC5wcmV2KTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0ICRwYWdlID0gdXNlUmVmKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KChlKSA9PiB7XHJcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gdGhyb3R0bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobG9hZGluZyB8fCBpc0VtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U2hvd1RvcChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNzAwKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50SGVpZ2h0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIOinpuWPkea7muWKqOmrmOW6plxyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlckhlaWdodD1NYXRoLmNlaWwoY2xpZW50SGVpZ2h0ICogMC4yNSkgKyA0MDtcclxuICAgICAgICAgICAgbGV0IHBhZ2VIZWlnaHQ9JHBhZ2UuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRyaWdnZXJIZWlnaHQsJ3RyaWdnZXJIZWlnaHQnKVxyXG4gICAgICAgICAgICAvLyDmu5rliqjmnaEyMHB4XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgJiYgKGNsaWVudEhlaWdodCArIHNjcm9sbFRvcCArIHRyaWdnZXJIZWlnaHQgPnBhZ2VIZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeUxpc3QobmV4dERhdGUsIGlzTW9iaWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjbGllbnRIZWlnaHQgKyBzY3JvbGxUb3AscGFnZUhlaWdodClcclxuICAgICAgICB9LDEwMClcclxuICAgICAgICB3aW5kb3cub25zY3JvbGwoKTtcclxuICAgIH0sIFtuZXh0RGF0ZSwgbG9hZGluZ10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSBjaGVja01vZGUoKTtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXhpb3MoYC9hcGkvc29ydGApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTb3J0SW5mbyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBxdWVyeUxpc3QobmV4dERhdGUsIGlzTW9iaWxlKVxyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgY29uc3QgVkNvbnNvbGUgPSByZXF1aXJlKCd2Y29uc29sZScpO1xyXG4gICAgICAgICAgICBuZXcgVkNvbnNvbGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW5kZXgtcGFnZSAke2lzTW9iaWxlICYmICdtb2JpbGUtcGFnZSd9YH0gcmVmPXskcGFnZX0+XHJcbiAgICAgICAgICAgIDxIZWFkPjwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogaXNNb2JpbGUgPyBgcmVwZWF0KCR7bGlzdC5sZW5ndGh9LCA3NXZ3KWAgOiBgcmVwZWF0KCR7cGFyc2VJbnQobGlzdC5sZW5ndGggLyAxMCkgKiA0fSwgMTl2dylgXHJcbiAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5tYXAoKGltZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aW1nLnN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWcuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tZmFuZ2RhIGFjdGlvbkJ0blwiIGhyZWY9e2AvJHtpbWcuZGF0ZX1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPntpbWcuY3B9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRhdGUtc3RyIHNpemUtJHtpbWcuc3Bhbn1gfT57aW1nLmRhdGVTdHJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCcvL2NuLmJpbmcuY29tJHtpbWcudXJsYmFzZX1fJHtmYWxzZSA/ICc3Njh4MTI4MCcgOiAnMTAyNHg3NjgnfS5qcGcnKWB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW5kbGVCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsobGlrZUxpc3QuaW5jbHVkZXMoaW1nLmRhdGUpPydpY29uLWxpa2UtZmlsbCc6J2ljb24teGlodWFuJykrJyBpY29uZm9udCd9IG9uQ2xpY2s9eygpID0+IHt0aHJvdHRsZUxpa2VGdW4oaW1nLmRhdGUpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPntzb3J0SW5mb1tpbWcuZGF0ZV0gJiYgc29ydEluZm9baW1nLmRhdGVdLmxpa2VDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgb25DbGljaz17KCkgPT4ge3NldERvd25EaWFsb2dWaXNpYmxlKHRydWUpO3VwZGF0ZUltZyhpbWcpO319IGNsYXNzTmFtZT1cImljb25mb250IGljb24tZG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj57c29ydEluZm9baW1nLmRhdGVdICYmIHNvcnRJbmZvW2ltZy5kYXRlXS5kb3dubG9hZENvdW50IHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aXNFbXB0eSAmJiA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LXRleHRcIj7igJTigJQg5Yiw5bqV5ZWmIOKAlOKAlDwvZGl2Pn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG8tdG9wIGljb25mb250IGljb24tYXJyb3ctbGVmdCAkeyFzaG93VG9wICYmICdoaWRlJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCl9Lz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tdG91emlcIiBocmVmPScvcmFuZG9tJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RG93bkRpYWxvZyBkb3dubG9hZEZ1bj17ZG93bmxvYWRGdW59IGlzTW9iaWxlPXtpc01vYmlsZX0gdmlzaWJsZT17ZG93bkRpYWxvZ1Zpc2libGV9IG9uSGlkZT17KCkgPT4ge3NldERvd25EaWFsb2dWaXNpYmxlKGZhbHNlKTt1cGRhdGVJbWcoe30pO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0luZm89e2ltZ30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=