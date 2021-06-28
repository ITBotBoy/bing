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
      console.log(document.documentElement.clientHeight + document.documentElement.scrollTop + 100 > $page.current.clientHeight);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwibGlzdCIsInVwZGF0ZUxpc3QiLCJpbWciLCJ1cGRhdGVJbWciLCJuZXh0RGF0ZSIsInVwZGF0ZU5leHREYXRlIiwibG9hZGluZyIsInVwZGF0ZUxvYWRpbmciLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwic2hvd1RvcCIsInNldFNob3dUb3AiLCJpc0VtcHR5Iiwic2V0RW1wdHkiLCJzb3J0SW5mbyIsInNldFNvcnRJbmZvIiwibGlrZUxpc3QiLCJzZXRMaWtlTGlzdCIsImNoZWNrTW9kZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxpa2VGdW4iLCJkYXRhIiwibG9jYWxMaWtlTGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJKU09OIiwicGFyc2UiLCJpbmNsdWRlcyIsImF4aW9zIiwidGhlbiIsInJlcyIsImxpa2VDb3VudCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGhyb3R0bGVMaWtlRnVuIiwidGhyb3R0bGUiLCJkb3dubG9hZEZ1biIsImRvd25sb2FkQ291bnQiLCJxdWVyeUxpc3QiLCJjb3VudCIsIm1heENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwic3R5bGUiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJkYXRlU3RyIiwibW9tZW50IiwiZGF0ZSIsImZvcm1hdCIsImxhc3QiLCJwcmV2IiwiJHBhZ2UiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJlIiwib25zY3JvbGwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRIZWlnaHQiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsIkFycmF5IiwicHJvdG90eXBlIiwiZ3JpZFRlbXBsYXRlUm93cyIsInBhcnNlSW50IiwibWFwIiwiY3AiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1cmxiYXNlIiwic2Nyb2xsVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLDJFQUFXO0FBQUEsa0JBQzRCQSxzREFBUSxDQUFDLEtBQUQsQ0FEcEM7QUFBQSxNQUNmQyxpQkFEZTtBQUFBLE1BQ0lDLG9CQURKOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRWZHLElBRmU7QUFBQSxNQUVUQyxVQUZTOztBQUFBLG1CQUdHSixzREFBUSxDQUFDLEVBQUQsQ0FIWDtBQUFBLE1BR2ZLLEdBSGU7QUFBQSxNQUdWQyxTQUhVOztBQUFBLG1CQUlhTixzREFBUSxDQUFDLENBQUQsQ0FKckI7QUFBQSxNQUlmTyxRQUplO0FBQUEsTUFJTEMsY0FKSzs7QUFBQSxtQkFLV1Isc0RBQVEsQ0FBQyxLQUFELENBTG5CO0FBQUEsTUFLZlMsT0FMZTtBQUFBLE1BS05DLGFBTE07O0FBQUEsbUJBTVVWLHNEQUFRLENBQUMsS0FBRCxDQU5sQjtBQUFBLE1BTWZXLFFBTmU7QUFBQSxNQU1MQyxXQU5LOztBQUFBLG1CQU9RWixzREFBUSxDQUFDLEtBQUQsQ0FQaEI7QUFBQSxNQU9mYSxPQVBlO0FBQUEsTUFPTkMsVUFQTTs7QUFBQSxtQkFRTWQsc0RBQVEsQ0FBQyxLQUFELENBUmQ7QUFBQSxNQVFmZSxPQVJlO0FBQUEsTUFRTkMsUUFSTTs7QUFBQSxtQkFTVWhCLHNEQUFRLENBQUMsRUFBRCxDQVRsQjtBQUFBLE1BU2ZpQixRQVRlO0FBQUEsTUFTTEMsV0FUSzs7QUFBQSxvQkFVVWxCLHNEQUFRLENBQUMsRUFBRCxDQVZsQjtBQUFBLE1BVWZtQixRQVZlO0FB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QUFkO0FBQ0ssZUFBTyxFQUFFO0FBQUEsaUJBQU1TLE1BQU0sQ0FBQytELFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBTjtBQUFBO0FBRGQsUUFESixlQUdJO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFtQyxZQUFJLEVBQUM7QUFBeEMsUUFISjtBQUFBLE1BakNKLGVBc0NJLDhEQUFDLDhEQUFEO0FBQVksaUJBQVcsRUFBRTFDLFdBQXpCO0FBQXNDLGNBQVEsRUFBRWhDLFFBQWhEO0FBQTBELGFBQU8sRUFBRVYsaUJBQW5FO0FBQXNGLFlBQU0sRUFBRSxrQkFBTTtBQUFDQyw0QkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQTRCSSxpQkFBUyxDQUFDLEVBQUQsQ0FBVDtBQUFlLE9BQWhKO0FBQ1ksYUFBTyxFQUFFRDtBQURyQixNQXRDSjtBQUFBLElBREo7QUEyQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTYyMWE5N2YyZWZhYWE2OWRjZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkXCI7XG5pbXBvcnQgRG93bkRpYWxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9kb3duRGlhbG9nXCI7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcblxuaW1wb3J0IHtTcGlufSBmcm9tIFwiYW50ZFwiO1xuLypleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGxpa2VGdW4oKVxuICAgIH1cbiAgICByZW5kZXIgKCl7XG4gICAgICAgIHJldHVybiBQYWdlRnVuKClcbiAgICB9XG59Ki9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IFtkb3duRGlhbG9nVmlzaWJsZSwgc2V0RG93bkRpYWxvZ1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsaXN0LCB1cGRhdGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbaW1nLCB1cGRhdGVJbWddID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtuZXh0RGF0ZSwgdXBkYXRlTmV4dERhdGVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHVwZGF0ZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93VG9wLCBzZXRTaG93VG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNFbXB0eSwgc2V0RW1wdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzb3J0SW5mbywgc2V0U29ydEluZm9dID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtsaWtlTGlzdCwgc2V0TGlrZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGNoZWNrTW9kZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgc2V0SXNNb2JpbGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRJc01vYmlsZShmYWxzZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBsaWtlRnVuID0gKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGxvY2FsTGlrZUxpc3Q9d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbExpa2VMaXN0JylcbiAgICAgICAgaWYoIWxpa2VMaXN0Lmxlbmd0aCAmJiBsb2NhbExpa2VMaXN0KXtcbiAgICAgICAgICAgIHNldExpa2VMaXN0KEpTT04ucGFyc2UobG9jYWxMaWtlTGlzdCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBsb2NhbExpa2VMaXN0PWxvY2FsTGlrZUxpc3Q/SlNPTi5wYXJzZShsb2NhbExpa2VMaXN0KTpbXVxuICAgICAgICAgICAgaWYoIWxvY2FsTGlrZUxpc3QuaW5jbHVkZXMoZGF0YSkpe1xuICAgICAgICAgICAgICAgIGF4aW9zKGAvYXBpL3NvcnQ/ZGF0ZT0ke2RhdGF9Jms9bGlrZUNvdW50YClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmxpa2VDb3VudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXNvcnRJbmZvW2RhdGFdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV09e2xpa2VDb3VudDowfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5mb1tkYXRhXS5saWtlQ291bnQ9cmVzLmRhdGEubGlrZUNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEluZm8oc29ydEluZm8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxMaWtlTGlzdC5wdXNoKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlrZUxpc3QobG9jYWxMaWtlTGlzdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsTGlrZUxpc3QnLEpTT04uc3RyaW5naWZ5KGxvY2FsTGlrZUxpc3QpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRocm90dGxlTGlrZUZ1bj10aHJvdHRsZSgoZGF0YSk9Pmxpa2VGdW4oZGF0YSksMTUwMClcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpe1xuICAgICAgICBsaWtlRnVuKClcbiAgICB9XG4gICAgY29uc3QgZG93bmxvYWRGdW4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGF4aW9zKGAvYXBpL3NvcnQ/ZGF0ZT0ke2RhdGF9Jms9ZG93bmxvYWRDb3VudGApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubGlrZUNvdW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFzb3J0SW5mb1tkYXRhXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZm9bZGF0YV09e2Rvd25sb2FkQ291bnQ6MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmZvW2RhdGFdLmRvd25sb2FkQ291bnQ9cmVzLmRhdGEuZG93bmxvYWRDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEluZm8oc29ydEluZm8pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IChuZXh0RGF0ZSwgaXNNb2JpbGUpID0+IHtcbiAgICAgICAgdXBkYXRlTG9hZGluZyh0cnVlKTtcbiAgICAgICAgYXhpb3MoYC9hcGkvbGlzdD9kYXRlPSR7bmV4dERhdGV9JmNvdW50PTEwYClcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heENvdW50ID0gaXNNb2JpbGUgPyAwIDogMjtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIC8vMCAxIDJcbiAgICAgICAgICAgICAgICAgICAgKGNvdW50IDwgbWF4Q291bnQpICYmIG1heENvdW50ICYmIChzcGFuID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAyKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIDIs56ysOeW8oOaNonNwYW4gIDsgIDEg5pyA5ZCO5LiA5bygc3BhbiA7XG4gICAgICAgICAgICAgICAgICAgICgobWF4Q291bnQtY291bnQpID09PSAoMTAgLSBpKSkgJiYgbWF4Q291bnQgJiYgKHNwYW4gPSAyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY291bnQ9MSA7IGNvdW50PTIgO1xuICAgICAgICAgICAgICAgICAgICBzcGFuID09PSAyICYmIChjb3VudCArPSAxKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRDb2x1bW5TdGFydDogYHNwYW4gJHtzcGFufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkUm93U3RhcnQ6IGBzcGFuICR7c3Bhbn1gLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0ZVN0ciA9IG1vbWVudChpdGVtLmRhdGUsICdZWVlZTU1ERCcpLmZvcm1hdCgnWVkuTU0uREQnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zcGFuID0gc3BhbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBkYXRhLmRhdGEubGFzdCgpXG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdChbLi4ubGlzdCwgLi4uZGF0YS5kYXRhXSk7XG4gICAgICAgICAgICAgICAgIWxhc3QucHJldiAmJiBzZXRFbXB0eSh0cnVlKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVOZXh0RGF0ZShsYXN0LnByZXYpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCAkcGFnZSA9IHVzZVJlZigpO1xuXG4gICAgdXNlRWZmZWN0KChlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nIHx8IGlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTaG93VG9wKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA3MDApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyAxMDAgPiAkcGFnZS5jdXJyZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCArIDEwMCA+ICRwYWdlLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLy8gcXVlcnlMaXN0KG5leHREYXRlLCBpc01vYmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cub25zY3JvbGwoKTtcbiAgICAgICAgfSlcbiAgICB9LCBbbmV4dERhdGUsIGxvYWRpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gY2hlY2tNb2RlKCk7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBheGlvcyhgL2FwaS9zb3J0YClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U29ydEluZm8ocmVzLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICBxdWVyeUxpc3QobmV4dERhdGUsIGlzTW9iaWxlKVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW5kZXgtcGFnZSAke2lzTW9iaWxlICYmICdtb2JpbGUtcGFnZSd9YH0gcmVmPXskcGFnZX0+XG4gICAgICAgICAgICA8SGVhZD48L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0XCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IGlzTW9iaWxlID8gYHJlcGVhdCgke2xpc3QubGVuZ3RofSwgNzV2dylgIDogYHJlcGVhdCgke3BhcnNlSW50KGxpc3QubGVuZ3RoIC8gMTApICogNH0sIDE5dncpYFxuICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QubWFwKChpbWcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2ltZy5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ltZy5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1mYW5nZGEgYWN0aW9uQnRuXCIgaHJlZj17YC8ke2ltZy5kYXRlfWB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPntpbWcuY3B9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZGF0ZS1zdHIgc2l6ZS0ke2ltZy5zcGFufWB9PntpbWcuZGF0ZVN0cn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1iZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgnLy9jbi5iaW5nLmNvbSR7aW1nLnVybGJhc2V9XyR7ZmFsc2UgPyAnNzY4eDEyODAnIDogJzEwMjR4NzY4J30uanBnJylgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbmRsZUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsobGlrZUxpc3QuaW5jbHVkZXMoaW1nLmRhdGUpPydpY29uLWxpa2UtZmlsbCc6J2ljb24teGlodWFuJykrJyBpY29uZm9udCd9IG9uQ2xpY2s9eygpID0+IHt0aHJvdHRsZUxpa2VGdW4oaW1nLmRhdGUpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj57c29ydEluZm9baW1nLmRhdGVdICYmIHNvcnRJbmZvW2ltZy5kYXRlXS5saWtlQ291bnQgfHwgMH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgb25DbGljaz17KCkgPT4ge3NldERvd25EaWFsb2dWaXNpYmxlKHRydWUpO3VwZGF0ZUltZyhpbWcpO319IGNsYXNzTmFtZT1cImljb25mb250IGljb24tZG93bmxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+e3NvcnRJbmZvW2ltZy5kYXRlXSAmJiBzb3J0SW5mb1tpbWcuZGF0ZV0uZG93bmxvYWRDb3VudCB8fCAwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpc0VtcHR5ICYmIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktdGV4dFwiPuKAlOKAlCDliLDlupXllaYg4oCU4oCUPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1idG5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvLXRvcCBpY29uZm9udCBpY29uLWFycm93LWxlZnQgJHshc2hvd1RvcCAmJiAnaGlkZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX0vPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tdG91emlcIiBocmVmPScvcmFuZG9tJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxEb3duRGlhbG9nIGRvd25sb2FkRnVuPXtkb3dubG9hZEZ1bn0gaXNNb2JpbGU9e2lzTW9iaWxlfSB2aXNpYmxlPXtkb3duRGlhbG9nVmlzaWJsZX0gb25IaWRlPXsoKSA9PiB7c2V0RG93bkRpYWxvZ1Zpc2libGUoZmFsc2UpO3VwZGF0ZUltZyh7fSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0luZm89e2ltZ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9