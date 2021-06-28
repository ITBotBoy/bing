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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwibGlzdCIsInVwZGF0ZUxpc3QiLCJpbWciLCJ1cGRhdGVJbWciLCJuZXh0RGF0ZSIsInVwZGF0ZU5leHREYXRlIiwibG9hZGluZyIsInVwZGF0ZUxvYWRpbmciLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwic2hvd1RvcCIsInNldFNob3dUb3AiLCJpc0VtcHR5Iiwic2V0RW1wdHkiLCJzb3J0SW5mbyIsInNldFNvcnRJbmZvIiwibGlrZUxpc3QiLCJzZXRMaWtlTGlzdCIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpa2VGdW4iLCJkYXRhIiwibG9jYWxMaWtlTGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJKU09OIiwicGFyc2UiLCJpbmNsdWRlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImxpa2VDb3VudCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGhyb3R0bGVMaWtlRnVuIiwidGhyb3R0bGUiLCJkb3dubG9hZEZ1biIsImRvd25sb2FkQ291bnQiLCJxdWVyeUxpc3QiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwic3R5bGUiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJkYXRlU3RyIiwibW9tZW50IiwiZGF0ZSIsImZvcm1hdCIsImxhc3QiLCJwcmV2IiwiJHBhZ2UiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJlIiwib25zY3JvbGwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJncmlkVGVtcGxhdGVSb3dzIiwibWFwIiwiY3AiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1cmxiYXNlIiwic2Nyb2xsVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLDJFQUFXO0FBQUEsa0JBQzRCQSxzREFBUSxDQUFDLEtBQUQsQ0FEcEM7QUFBQSxNQUNmQyxpQkFEZTtBQUFBLE1BQ0lDLG9CQURKOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRWZHLElBRmU7QUFBQSxNQUVUQyxVQUZTOztBQUFBLG1CQUdHSixzREFBUSxDQUFDLEVBQUQsQ0FIWDtBQUFBLE1BR2ZLLEdBSGU7QUFBQSxNQUdWQyxTQUhVOztBQUFBLG1CQUlhTixzREFBUSxDQUFDLENBQUQsQ0FKckI7QUFBQSxNQUlmTyxRQUplO0FBQUEsTUFJTEMsY0FKSzs7QUFBQSxtQkFLV1Isc0RBQVEsQ0FBQyxLQUFELENBTG5CO0FBQUEsTUFLZlMsT0FMZTtBQUFBLE1BS05DLGFBTE07O0FBQUEsbUJBTVVWLHNEQUFRLENBQUMsS0FBRCxDQU5sQjtBQUFBLE1BTWZXLFFBTmU7QUFBQSxNQU1MQyxXQU5LOztBQUFBLG1CQU9RWixzREFBUSxDQUFDLEtBQUQsQ0FQaEI7QUFBQSxNQU9mYSxPQVBlO0FBQUEsTUFPTkMsVUFQTTs7QUFBQSxtQkFRTWQsc0RBQVEsQ0FBQyxLQUFELENBUmQ7QUFBQSxNQVFmZSxPQVJlO0FBQUEsTUFRTkMsUUFSTTs7QUFBQSxtQkFTVWhCLHNEQUFRLENBQUMsRUFBRCxDQVRsQjtBQUFBLE1BU2ZpQixRQVRlO0FBQUEsTUFTTEMsV0FUSzs7QUFBQSxvQkFVVWxCLHNEQUFRLENBQUMsRUFBRCxDQVZsQjtBQUFBLE1BVWZtQixRQVZlO0FBQUEsTUFVTEMsV0FWSzs7QUFXdEIsTUFBTUMs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QUhKO0FBQUEsTUFqQ0osZUFzQ0ksOERBQUMsOERBQUQ7QUFBWSxpQkFBVyxFQUFFdkMsV0FBekI7QUFBc0MsY0FBUSxFQUFFaEMsUUFBaEQ7QUFBMEQsYUFBTyxFQUFFVixpQkFBbkU7QUFBc0YsWUFBTSxFQUFFLGtCQUFNO0FBQUNDLDRCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFBNEJJLGlCQUFTLENBQUMsRUFBRCxDQUFUO0FBQWUsT0FBaEo7QUFDWSxhQUFPLEVBQUVEO0FBRHJCLE1BdENKO0FBQUEsSUFESjtBQTJDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMmI2NjEzNDBlYTI0Mjc0YzQ2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRcIjtcbmltcG9ydCBEb3duRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2Rvd25EaWFsb2dcIjtcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuXG5pbXBvcnQge1NwaW59IGZyb20gXCJhbnRkXCI7XG4vKmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgbGlrZUZ1bigpXG4gICAgfVxuICAgIHJlbmRlciAoKXtcbiAgICAgICAgcmV0dXJuIFBhZ2VGdW4oKVxuICAgIH1cbn0qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW2Rvd25EaWFsb2dWaXNpYmxlLCBzZXREb3duRGlhbG9nVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xpc3QsIHVwZGF0ZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtpbWcsIHVwZGF0ZUltZ10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW25leHREYXRlLCB1cGRhdGVOZXh0RGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbG9hZGluZywgdXBkYXRlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dUb3AsIHNldFNob3dUb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0VtcHR5LCBzZXRFbXB0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NvcnRJbmZvLCBzZXRTb3J0SW5mb10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW2xpa2VMaXN0LCBzZXRMaWtlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgY2hlY2tNb2RlID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDI0IHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBzZXRJc01vYmlsZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHNldElzTW9iaWxlKGZhbHNlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGxpa2VGdW4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgbG9jYWxMaWtlTGlzdD13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsTGlrZUxpc3QnKVxuICAgICAgICBpZighbGlrZUxpc3QubGVuZ3RoICYmIGxvY2FsTGlrZUxpc3Qpe1xuICAgICAgICAgICAgc2V0TGlrZUxpc3QoSlNPTi5wYXJzZShsb2NhbExpa2VMaXN0KSlcbiAgICAgICAgfVxuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGxvY2FsTGlrZUxpc3Q9bG9jYWxMaWtlTGlzdD9KU09OLnBhcnNlKGxvY2FsTGlrZUxpc3QpOltdXG4gICAgICAgICAgICBpZighbG9jYWxMaWtlTGlzdC5pbmNsdWRlcyhkYXRhKSl7XG4gICAgICAgICAgICAgICAgYXhpb3MoYC9hcGkvc29ydD9kYXRlPSR7ZGF0YX0maz1saWtlQ291bnRgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubGlrZUNvdW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighc29ydEluZm9bZGF0YV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXT17bGlrZUNvdW50OjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdLmxpa2VDb3VudD1yZXMuZGF0YS5saWtlQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0SW5mbyhzb3J0SW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbExpa2VMaXN0LnB1c2goZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaWtlTGlzdChsb2NhbExpa2VMaXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxMaWtlTGlzdCcsSlNPTi5zdHJpbmdpZnkobG9jYWxMaWtlTGlzdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGhyb3R0bGVMaWtlRnVuPXRocm90dGxlKChkYXRhKT0+bGlrZUZ1bihkYXRhKSwxNTAwKVxuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyl7XG4gICAgICAgIGxpa2VGdW4oKVxuICAgIH1cbiAgICBjb25zdCBkb3dubG9hZEZ1biA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgYXhpb3MoYC9hcGkvc29ydD9kYXRlPSR7ZGF0YX0maz1kb3dubG9hZENvdW50YClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5saWtlQ291bnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXNvcnRJbmZvW2RhdGFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXT17ZG93bmxvYWRDb3VudDowfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV0uZG93bmxvYWRDb3VudD1yZXMuZGF0YS5kb3dubG9hZENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0SW5mbyhzb3J0SW5mbylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcXVlcnlMaXN0ID0gKG5leHREYXRlLCBpc01vYmlsZSkgPT4ge1xuICAgICAgICB1cGRhdGVMb2FkaW5nKHRydWUpO1xuICAgICAgICBheGlvcyhgL2FwaS9saXN0P2RhdGU9JHtuZXh0RGF0ZX0mY291bnQ9MjhgKVxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4Q291bnQgPSBpc01vYmlsZSA/IDAgOiAyO1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGFuID0gMTtcbiAgICAgICAgICAgICAgICAgICAgLy8wIDEgMlxuICAgICAgICAgICAgICAgICAgICAoY291bnQgPCBtYXhDb3VudCkgJiYgbWF4Q291bnQgJiYgKHNwYW4gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gMTAtaSznrKw45byg5o2ic3BhbiAgOCAxNiAyNFxuICAgICAgICAgICAgICAgICAgICAhKGklOCkgJiYgbWF4Q291bnQgJiYgKHNwYW4gPSAyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF4Q291bnQsIHNwYW4sIGlzTW9iaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiA9PT0gMiAmJiAoY291bnQgKz0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkQ29sdW1uU3RhcnQ6IGBzcGFuICR7c3Bhbn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFJvd1N0YXJ0OiBgc3BhbiAke3NwYW59YCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRhdGVTdHIgPSBtb21lbnQoaXRlbS5kYXRlLCAnWVlZWU1NREQnKS5mb3JtYXQoJ1lZLk1NLkREJyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3BhbiA9IHNwYW47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gZGF0YS5kYXRhLmxhc3QoKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3QoWy4uLmxpc3QsIC4uLmRhdGEuZGF0YV0pO1xuICAgICAgICAgICAgICAgICFsYXN0LnByZXYgJiYgc2V0RW1wdHkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dERhdGUobGFzdC5wcmV2KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgJHBhZ2UgPSB1c2VSZWYoKTtcblxuICAgIHVzZUVmZmVjdCgoZSkgPT4ge1xuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9hZGluZyB8fCBpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2hvd1RvcChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNzAwKTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCArIDUwID4gJHBhZ2UuY3VycmVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBxdWVyeUxpc3QobmV4dERhdGUsIGlzTW9iaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5vbnNjcm9sbCgpO1xuICAgICAgICB9KVxuICAgIH0sIFtuZXh0RGF0ZSwgbG9hZGluZ10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSBjaGVja01vZGUoKTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGF4aW9zKGAvYXBpL3NvcnRgKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTb3J0SW5mbyhyZXMuZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHF1ZXJ5TGlzdChuZXh0RGF0ZSwgaXNNb2JpbGUpXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbmRleC1wYWdlICR7aXNNb2JpbGUgJiYgJ21vYmlsZS1wYWdlJ31gfSByZWY9eyRwYWdlfT5cbiAgICAgICAgICAgIDxIZWFkPjwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWxpc3RcIlxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogaXNNb2JpbGUgPyBgcmVwZWF0KCR7bGlzdC5sZW5ndGh9LCA3NXZ3KWAgOiBgcmVwZWF0KCR7TWF0aC5jZWlsKGxpc3QubGVuZ3RoLyAxMCkgKiA0fSwgMTl2dylgXG4gICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5tYXAoKGltZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aW1nLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW1nLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWZhbmdkYSBhY3Rpb25CdG5cIiBocmVmPXtgLyR7aW1nLmRhdGV9YH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2ltZy5jcH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkYXRlLXN0ciBzaXplLSR7aW1nLnNwYW59YH0+e2ltZy5kYXRlU3RyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWJnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCcvL2NuLmJpbmcuY29tJHtpbWcudXJsYmFzZX1fJHtmYWxzZSA/ICc3Njh4MTI4MCcgOiAnMTAyNHg3NjgnfS5qcGcnKWB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFuZGxlQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyhsaWtlTGlzdC5pbmNsdWRlcyhpbWcuZGF0ZSk/J2ljb24tbGlrZS1maWxsJzonaWNvbi14aWh1YW4nKSsnIGljb25mb250J30gb25DbGljaz17KCkgPT4ge3Rocm90dGxlTGlrZUZ1bihpbWcuZGF0ZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPntzb3J0SW5mb1tpbWcuZGF0ZV0gJiYgc29ydEluZm9baW1nLmRhdGVdLmxpa2VDb3VudCB8fCAwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBvbkNsaWNrPXsoKSA9PiB7c2V0RG93bkRpYWxvZ1Zpc2libGUodHJ1ZSk7dXBkYXRlSW1nKGltZyk7fX0gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1kb3dubG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj57c29ydEluZm9baW1nLmRhdGVdICYmIHNvcnRJbmZvW2ltZy5kYXRlXS5kb3dubG9hZENvdW50IHx8IDB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzRW1wdHkgJiYgPGRpdiBjbGFzc05hbWU9XCJlbXB0eS10ZXh0XCI+4oCU4oCUIOWIsOW6leWVpiDigJTigJQ8L2Rpdj59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWJ0blwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG8tdG9wIGljb25mb250IGljb24tYXJyb3ctbGVmdCAkeyFzaG93VG9wICYmICdoaWRlJ31gfVxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfS8+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi10b3V6aVwiIGhyZWY9Jy9yYW5kb20nLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPERvd25EaWFsb2cgZG93bmxvYWRGdW49e2Rvd25sb2FkRnVufSBpc01vYmlsZT17aXNNb2JpbGV9IHZpc2libGU9e2Rvd25EaWFsb2dWaXNpYmxlfSBvbkhpZGU9eygpID0+IHtzZXREb3duRGlhbG9nVmlzaWJsZShmYWxzZSk7dXBkYXRlSW1nKHt9KTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nSW5mbz17aW1nfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=