webpackHotUpdate_N_E("pages/[date]",{

/***/ "./pages/[date].js":
/*!*************************!*\
  !*** ./pages/[date].js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return date; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_date_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/[date].scss */ "./styles/[date].scss");
/* harmony import */ var _styles_date_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_date_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_downDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/downDialog */ "./components/downDialog.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");
/* harmony import */ var next_dist_next_server_lib_post_process__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/next-server/lib/post-process */ "./node_modules/next/dist/next-server/lib/post-process.js");
/* harmony import */ var next_dist_next_server_lib_post_process__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_post_process__WEBPACK_IMPORTED_MODULE_11__);



var _s = $RefreshSig$();











 // import axios from "axios";
// import throttle from "lodash/throttle";

var __N_SSP = true;
function date(_ref) {
  _s();

  var minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      _ref$img = _ref.img,
      img = _ref$img === void 0 ? {} : _ref$img,
      timeout = _ref.timeout,
      nextKey = _ref.nextKey;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      updateLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      showBottom = _useState2[0],
      updateShowBottom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date().valueOf()),
      now = _useState3[0],
      updateNow = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      downDialogVisible = _useState4[0],
      setDownDialogVisible = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isMobile = _useState5[0],
      setIsMobile = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      likeList = _useState6[0],
      setLikeList = _useState6[1];

  var checkMode = function checkMode() {
    if (window.innerWidth < 1024 || window.innerWidth < window.innerHeight) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }; // likeFun


  var likeFun = function likeFun(data) {
    var localLikeList = window.localStorage.getItem('localLikeList');

    if (!likeList.length && localLikeList) {
      setLikeList(JSON.parse(localLikeList));
    }

    if (data) {
      localLikeList = localLikeList ? JSON.parse(localLikeList) : [];

      if (!localLikeList.includes(data)) {
        axios__WEBPACK_IMPORTED_MODULE_8___default()("/api/sort?date=".concat(data, "&k=likeCount")).then(function (res) {
          if (res.data.likeCount) {
            localLikeList.push(data);
            setLikeList(localLikeList);
            window.localStorage.setItem('localLikeList', JSON.stringify(localLikeList));
          }
        });
      }
    }
  };

  var throttleLikeFun = lodash_throttle__WEBPACK_IMPORTED_MODULE_9___default()(function (data) {
    return likeFun(data);
  }, 1500);

  var downloadFun = function downloadFun(data) {
    if (data) {
      axios__WEBPACK_IMPORTED_MODULE_8___default()("/api/sort?date=".concat(data, "&k=downloadCount"));
    }
  }; // did mount


  var loadingImg = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    likeFun(); // 图片加载完成就取消 loading

    if (loadingImg.current && loadingImg.current.complete) {
      updateLoading(false);
    }

    checkMode();

    window.onkeyup = function (_ref2) {
      var keyCode = _ref2.keyCode;

      switch (keyCode) {
        case 32:
          return window.location = "/random";

        /*const date = Math.floor(Math.random() * (maxDate-minDate))+minDate;
        changePosition(date);*/

        case 37:
        case 39:
          changePosition({
            37: 'prev',
            39: 'next'
          }[keyCode]);
          break;

        default:
          break;
      }
    };

    window.onresize = checkMode;
    setTimeout(function () {
      !img.next && (img.next = nextKey);
    }, timeout);
  }, []); // 前后切换

  var changePosition = function changePosition(key) {
    if (!img[key]) {
      return antd__WEBPACK_IMPORTED_MODULE_3__["message"].warning({
        prev: '没有更早的辣！',
        next: '已经是最新的辣！'
      }[key]);
    }

    updateLoading(true);
    window.location = "/".concat(img[key]);
  }; // 移动鼠标，显示底下区域


  var onMouseMove = function onMouseMove() {
    updateShowBottom(true);
    updateNow(new Date().valueOf());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var tick = setTimeout(function () {
      return updateShowBottom(false);
    }, 3500);
    return function () {
      clearTimeout(tick);
    };
  }, [now]);
  var imgDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(String(img.date), 'YYYYMMDD');
  return img.date ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_3__["Spin"], {
    spinning: loading,
    size: "large",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "detail-page ".concat(isMobile && 'mobile-mode'),
      onMouseMove: onMouseMove,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        className: "loading-img",
        ref: loadingImg,
        src: "//cn.bing.com".concat(img.urlbase, "_").concat(isMobile ? '768x1280' : '1920x1080', ".jpg"),
        onLoad: function onLoad() {
          return updateLoading(false);
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "img-content-box",
        style: {
          backgroundImage: "url(//cn.bing.com".concat(img.urlbase, "_").concat(isMobile ? '768x1280' : '1920x1080', ".jpg)")
        },
        children: [[{
          key: 'prev',
          arrow: 'left'
        }, {
          key: 'next',
          arrow: 'right'
        }].map(function (_ref3) {
          var key = _ref3.key,
              arrow = _ref3.arrow;
          return img[key] ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "page-icon icon-".concat(arrow, " ").concat((showBottom || isMobile) && 'actived'),
            onClick: function onClick() {
              return changePosition(key);
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "iconfont icon-arrow-".concat(arrow)
            })
          }, "page-".concat(arrow)) : '';
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "img-info",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "img-date",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "img-date-year",
              children: imgDate.format('YY')
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "img-date-md",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                children: imgDate.format('MM')
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                children: imgDate.format('DD')
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "img-cp",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "img-cp-txt",
              children: img.cp
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "bottom-info ".concat(showBottom && 'actived'),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "icon-list",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "/",
              className: "iconfont icon-bing"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: (likeList.includes(img.date) ? 'icon-like-fill' : 'icon-xihuan') + ' iconfont',
              onClick: function onClick() {
                return throttleLikeFun(img.date);
              }
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "iconfont icon-download",
              onClick: function onClick() {
                return setDownDialogVisible(true);
              }
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "/random",
              className: "iconfont icon-touzi"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "/about",
              className: "iconfont icon-about"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "https://github.com/renserve/bing",
              rel: "external nofollow noopener noreferrer",
              target: "_blank",
              className: "iconfont icon-github"
            })]
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_downDialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
      downloadFun: downloadFun,
      isMobile: isMobile,
      visible: downDialogVisible,
      onHide: function onHide() {
        return setDownDialogVisible(false);
      },
      imgInfo: img
    })]
  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {
    statusCode: 404
  });
}

_s(date, "8b/OswjejDOG9+7nFDdzkuHla74=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2RhdGVdLmpzIl0sIm5hbWVzIjpbImRhdGUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsImltZyIsInRpbWVvdXQiLCJuZXh0S2V5Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwidXBkYXRlTG9hZGluZyIsInNob3dCb3R0b20iLCJ1cGRhdGVTaG93Qm90dG9tIiwiRGF0ZSIsInZhbHVlT2YiLCJub3ciLCJ1cGRhdGVOb3ciLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsImxpa2VMaXN0Iiwic2V0TGlrZUxpc3QiLCJjaGVja01vZGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJsaWtlRnVuIiwiZGF0YSIsImxvY2FsTGlrZUxpc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGVuZ3RoIiwiSlNPTiIsInBhcnNlIiwiaW5jbHVkZXMiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJsaWtlQ291bnQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRocm90dGxlTGlrZUZ1biIsInRocm90dGxlIiwiZG93bmxvYWRGdW4iLCJsb2FkaW5nSW1nIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNvbXBsZXRlIiwib25rZXl1cCIsImtleUNvZGUiLCJsb2NhdGlvbiIsImNoYW5nZVBvc2l0aW9uIiwib25yZXNpemUiLCJzZXRUaW1lb3V0IiwibmV4dCIsImtleSIsIm1lc3NhZ2UiLCJ3YXJuaW5nIiwicHJldiIsIm9uTW91c2VNb3ZlIiwidGljayIsImNsZWFyVGltZW91dCIsImltZ0RhdGUiLCJtb21lbnQiLCJTdHJpbmciLCJ1cmxiYXNlIiwiYmFja2dyb3VuZEltYWdlIiwiYXJyb3ciLCJtYXAiLCJmb3JtYXQiLCJjcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOzs7QUF3QmUsU0FBU0EsSUFBVCxPQUE0RDtBQUFBOztBQUFBLE1BQTdDQyxPQUE2QyxRQUE3Q0EsT0FBNkM7QUFBQSxNQUFyQ0MsT0FBcUMsUUFBckNBLE9BQXFDO0FBQUEsc0JBQTdCQyxHQUE2QjtBQUFBLE1BQTdCQSxHQUE2Qix5QkFBdkIsRUFBdUI7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBQ3ZFLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHVFLGtCQUd0Q0Msc0RBQVEsQ0FBQyxJQUFELENBSDhCO0FBQUEsTUFHaEVDLE9BSGdFO0FBQUEsTUFHdkRDLGFBSHVEOztBQUFBLG1CQUloQ0Ysc0RBQVEsQ0FBQyxJQUFELENBSndCO0FBQUEsTUFJaEVHLFVBSmdFO0FBQUEsTUFJcERDLGdCQUpvRDs7QUFBQSxtQkFLOUNKLHNEQUFRLENBQUMsSUFBSUssSUFBSixHQUFXQyxPQUFYLEVBQUQsQ0FMc0M7QUFBQSxNQUtoRUMsR0FMZ0U7QUFBQSxNQUszREMsU0FMMkQ7O0FBQUEsbUJBTXJCUixzREFBUSxDQUFDLEtBQUQsQ0FOYTtBQUFBLE1BTWhFUyxpQkFOZ0U7QUFBQSxNQU03Q0Msb0JBTjZDOztBQUFBLG1CQU92Q1Ysc0RBQVEsQ0FBQyxLQUFELENBUCtCO0FBQUEsTUFPaEVXLFFBUGdFO0FBQUEsTUFPdERDLFdBUHNEOztBQUFBLG1CQVF2Q1osc0RBQVEsQ0FBQyxFQUFELENBUitCO0FBQUEsTUFRaEVhLFFBUmdFO0FBQUEsTUFRdERDLFdBUnNEOztBQVV2RSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUlDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUFwQixJQUE0QkQsTUFBTSxDQUFDQyxVQUFQLEdBQW9CRCxNQUFNLENBQUNFLFdBQTNELEVBQXdFO0FBQ3BFTixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEtBRkQsTUFFTztBQUNIQSxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNIO0FBQ0osR0FORCxDQVZ1RSxDQWlCdkU7OztBQUNBLE1BQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBVTtBQUN0QixRQUFJQyxhQUFhLEdBQUNMLE1BQU0sQ0FBQ00sWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZUFBNUIsQ0FBbEI7O0FBQ0EsUUFBRyxDQUFDVixRQUFRLENBQUNXLE1BQVYsSUFBb0JILGFBQXZCLEVBQXFDO0FBQ2pDUCxpQkFBVyxDQUFDVyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsYUFBWCxDQUFELENBQVg7QUFDSDs7QUFDRCxRQUFHRCxJQUFILEVBQVE7QUFDSkMsbUJBQWEsR0FBQ0EsYUFBYSxHQUFDSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsYUFBWCxDQUFELEdBQTJCLEVBQXREOztBQUNBLFVBQUcsQ0FBQ0EsYUFBYSxDQUFDTSxRQUFkLENBQXVCUCxJQUF2QixDQUFKLEVBQWlDO0FBQzdCUSxvREFBSywwQkFBbUJSLElBQW5CLGtCQUFMLENBQ0tTLElBREwsQ0FDVSxVQUFBQyxHQUFHLEVBQUk7QUFDVCxjQUFHQSxHQUFHLENBQUNWLElBQUosQ0FBU1csU0FBWixFQUFzQjtBQUNsQlYseUJBQWEsQ0FBQ1csSUFBZCxDQUFtQlosSUFBbkI7QUFDQU4sdUJBQVcsQ0FBQ08sYUFBRCxDQUFYO0FBQ0FMLGtCQUFNLENBQUNNLFlBQVAsQ0FBb0JXLE9BQXBCLENBQTRCLGVBQTVCLEVBQTRDUixJQUFJLENBQUNTLFNBQUwsQ0FBZWIsYUFBZixDQUE1QztBQUNIO0FBQ0osU0FQTDtBQVFIO0FBQ0o7QUFDSixHQWxCRDs7QUFtQkEsTUFBTWMsZUFBZSxHQUFDQyxzREFBUSxDQUFDLFVBQUNoQixJQUFEO0FBQUEsV0FBUUQsT0FBTyxDQUFDQyxJQUFELENBQWY7QUFBQSxHQUFELEVBQXVCLElBQXZCLENBQTlCOztBQUNBLE1BQU1pQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDakIsSUFBRCxFQUFVO0FBQzFCLFFBQUdBLElBQUgsRUFBUTtBQUNKUSxrREFBSywwQkFBbUJSLElBQW5CLHNCQUFMO0FBQ0g7QUFDSixHQUpELENBdEN1RSxDQTJDdkU7OztBQUNBLE1BQU1rQixVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNackIsV0FBTyxHQURLLENBRVo7O0FBQ0EsUUFBSW1CLFVBQVUsQ0FBQ0csT0FBWCxJQUFzQkgsVUFBVSxDQUFDRyxPQUFYLENBQW1CQyxRQUE3QyxFQUF1RDtBQUNuRHhDLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0g7O0FBQ0RhLGFBQVM7O0FBQ1RDLFVBQU0sQ0FBQzJCLE9BQVAsR0FBaUIsaUJBQWU7QUFBQSxVQUFiQyxPQUFhLFNBQWJBLE9BQWE7O0FBQzVCLGNBQVFBLE9BQVI7QUFDSSxhQUFLLEVBQUw7QUFDSSxpQkFBTzVCLE1BQU0sQ0FBQzZCLFFBQVAsWUFBUDs7QUFDQTtBQUNwQjs7QUFDZ0IsYUFBSyxFQUFMO0FBQ0EsYUFBSyxFQUFMO0FBQ0lDLHdCQUFjLENBQUM7QUFBQyxnQkFBSSxNQUFMO0FBQWEsZ0JBQUk7QUFBakIsWUFBeUJGLE9BQXpCLENBQUQsQ0FBZDtBQUNBOztBQUNKO0FBQ0k7QUFWUjtBQVlILEtBYkQ7O0FBY0E1QixVQUFNLENBQUMrQixRQUFQLEdBQWtCaEMsU0FBbEI7QUFFQWlDLGNBQVUsQ0FBQyxZQUFNO0FBQ2IsT0FBQ3JELEdBQUcsQ0FBQ3NELElBQUwsS0FBY3RELEdBQUcsQ0FBQ3NELElBQUosR0FBV3BELE9BQXpCO0FBQ0gsS0FGUyxFQUVQRCxPQUZPLENBQVY7QUFHSCxHQTFCUSxFQTBCTixFQTFCTSxDQUFULENBN0N1RSxDQXdFdkU7O0FBQ0EsTUFBTWtELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0ksR0FBRCxFQUFTO0FBQzVCLFFBQUksQ0FBQ3ZELEdBQUcsQ0FBQ3VELEdBQUQsQ0FBUixFQUFlO0FBQ1gsYUFBT0MsNENBQU8sQ0FBQ0MsT0FBUixDQUFnQjtBQUNuQkMsWUFBSSxFQUFFLFNBRGE7QUFFbkJKLFlBQUksRUFBRTtBQUZhLFFBR3JCQyxHQUhxQixDQUFoQixDQUFQO0FBSUg7O0FBQ0RoRCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBYyxVQUFNLENBQUM2QixRQUFQLGNBQXNCbEQsR0FBRyxDQUFDdUQsR0FBRCxDQUF6QjtBQUNILEdBVEQsQ0F6RXVFLENBb0Z2RTs7O0FBQ0EsTUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QmxELG9CQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQUksYUFBUyxDQUFDLElBQUlILElBQUosR0FBV0MsT0FBWCxFQUFELENBQVQ7QUFDSCxHQUhEOztBQUlBa0MseURBQVMsQ0FDTCxZQUFNO0FBQ0YsUUFBTWUsSUFBSSxHQUFHUCxVQUFVLENBQUM7QUFBQSxhQUFNNUMsZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtBQUFBLEtBQUQsRUFBZ0MsSUFBaEMsQ0FBdkI7QUFDQSxXQUFPLFlBQU07QUFDVG9ELGtCQUFZLENBQUNELElBQUQsQ0FBWjtBQUNILEtBRkQ7QUFHSCxHQU5JLEVBT0wsQ0FBQ2hELEdBQUQsQ0FQSyxDQUFUO0FBVUEsTUFBTWtELE9BQU8sR0FBR0MsNkNBQU0sQ0FBQ0MsTUFBTSxDQUFDaEUsR0FBRyxDQUFDSCxJQUFMLENBQVAsRUFBbUIsVUFBbkIsQ0FBdEI7QUFFQSxTQUFPRyxHQUFHLENBQUNILElBQUosZ0JBQ0gsK0RBQUMseUNBQUQ7QUFBTSxZQUFRLEVBQUVTLE9BQWhCO0FBQXlCLFFBQUksRUFBQyxPQUE5QjtBQUFBLDRCQUNJO0FBQUssZUFBUyx3QkFBaUJVLFFBQVEsSUFBSSxhQUE3QixDQUFkO0FBQTRELGlCQUFXLEVBQUUyQyxXQUF6RTtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLFdBQUcsRUFBRWhCLFVBQWxDO0FBQ0ssV0FBRyx5QkFBa0IzQyxHQUFHLENBQUNpRSxPQUF0QixjQUFpQ2pELFFBQVEsR0FBRyxVQUFILEdBQWdCLFdBQXpELFNBRFI7QUFFSyxjQUFNLEVBQUU7QUFBQSxpQkFBTVQsYUFBYSxDQUFDLEtBQUQsQ0FBbkI7QUFBQTtBQUZiLFFBREosZUFJSTtBQUNJLGlCQUFTLEVBQUMsaUJBRGQ7QUFFSSxhQUFLLEVBQUU7QUFBQzJELHlCQUFlLDZCQUFzQmxFLEdBQUcsQ0FBQ2lFLE9BQTFCLGNBQXFDakQsUUFBUSxHQUFHLFVBQUgsR0FBZ0IsV0FBN0Q7QUFBaEIsU0FGWDtBQUFBLG1CQUtRLENBQUM7QUFBQ3VDLGFBQUcsRUFBRSxNQUFOO0FBQWNZLGVBQUssRUFBRTtBQUFyQixTQUFELEVBQStCO0FBQUNaLGFBQUcsRUFBRSxNQUFOO0FBQWNZLGVBQUssRUFBRTtBQUFyQixTQUEvQixFQUNLQyxHQURMLENBQ1M7QUFBQSxjQUFFYixHQUFGLFNBQUVBLEdBQUY7QUFBQSxjQUFPWSxLQUFQLFNBQU9BLEtBQVA7QUFBQSxpQkFDRG5FLEdBQUcsQ0FBQ3VELEdBQUQsQ0FBSCxnQkFDSTtBQUNLLHFCQUFTLDJCQUFvQlksS0FBcEIsY0FBNkIsQ0FBQzNELFVBQVUsSUFBSVEsUUFBZixLQUE0QixTQUF6RCxDQURkO0FBRUssbUJBQU8sRUFBRTtBQUFBLHFCQUFNbUMsY0FBYyxDQUFDSSxHQUFELENBQXBCO0FBQUEsYUFGZDtBQUFBLG1DQUdJO0FBQUcsdUJBQVMsZ0NBQXlCWSxLQUF6QjtBQUFaO0FBSEosNEJBQWtCQSxLQUFsQixFQURKLEdBTUksRUFQSDtBQUFBLFNBRFQsQ0FMUixlQWlCSTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSx3QkFBZ0NMLE9BQU8sQ0FBQ08sTUFBUixDQUFlLElBQWY7QUFBaEMsY0FESixlQUVJO0FBQUssdUJBQVMsRUFBQyxhQUFmO0FBQUEsc0NBQ0k7QUFBQSwwQkFBTVAsT0FBTyxDQUFDTyxNQUFSLENBQWUsSUFBZjtBQUFOLGdCQURKLGVBRUk7QUFBQSwwQkFBTVAsT0FBTyxDQUFDTyxNQUFSLENBQWUsSUFBZjtBQUFOLGdCQUZKO0FBQUEsY0FGSjtBQUFBLFlBREosZUFRSTtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsd0JBQTZCckUsR0FBRyxDQUFDc0U7QUFBakM7QUFESixZQVJKO0FBQUEsVUFqQkosZUE4Qkk7QUFBSyxtQkFBUyx3QkFBaUI5RCxVQUFVLElBQUksU0FBL0IsQ0FBZDtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsb0NBQ0k7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBWSx1QkFBUyxFQUFDO0FBQXRCLGNBREosZUFFSTtBQUFLLHVCQUFTLEVBQUUsQ0FBQ1UsUUFBUSxDQUFDYyxRQUFULENBQWtCaEMsR0FBRyxDQUFDSCxJQUF0QixJQUE0QixnQkFBNUIsR0FBNkMsYUFBOUMsSUFBNkQsV0FBN0U7QUFBMEYscUJBQU8sRUFBRTtBQUFBLHVCQUFNMkMsZUFBZSxDQUFDeEMsR0FBRyxDQUFDSCxJQUFMLENBQXJCO0FBQUE7QUFBbkcsY0FGSixlQUdJO0FBQUssdUJBQVMsRUFBQyx3QkFBZjtBQUF3QyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1rQixvQkFBb0IsQ0FBQyxJQUFELENBQTFCO0FBQUE7QUFBakQsY0FISixlQUlJO0FBQUcsa0JBQUksRUFBQyxTQUFSO0FBQWtCLHVCQUFTLEVBQUM7QUFBNUIsY0FKSixlQUtJO0FBQUcsa0JBQUksRUFBQyxRQUFSO0FBQWlCLHVCQUFTLEVBQUM7QUFBM0IsY0FMSixlQU1JO0FBQUcsa0JBQUksRUFBQyxrQ0FBUjtBQUEyQyxpQkFBRyxFQUFDLHVDQUEvQztBQUNHLG9CQUFNLEVBQUMsUUFEVjtBQUNtQix1QkFBUyxFQUFDO0FBRDdCLGNBTko7QUFBQTtBQURKLFVBOUJKO0FBQUEsUUFKSjtBQUFBLE1BREosZUFpREksOERBQUMsOERBQUQ7QUFBWSxpQkFBVyxFQUFFMkIsV0FBekI7QUFBc0MsY0FBUSxFQUFFMUIsUUFBaEQ7QUFBMEQsYUFBTyxFQUFFRixpQkFBbkU7QUFBc0YsWUFBTSxFQUFFO0FBQUEsZUFBTUMsb0JBQW9CLENBQUMsS0FBRCxDQUExQjtBQUFBLE9BQTlGO0FBQ1ksYUFBTyxFQUFFZjtBQURyQixNQWpESjtBQUFBLElBREcsZ0JBcURILDhEQUFDLGlEQUFEO0FBQU8sY0FBVSxFQUFFO0FBQW5CLElBckRKO0FBc0RIOztHQTNKdUJILEk7VUFDTE8scUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2RhdGVdLmYxMDAzODM2ODA5NDMxZTMwNWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7bWVzc2FnZSwgU3Bpbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCAnLi4vc3R5bGVzL1tkYXRlXS5zY3NzJztcclxuaW1wb3J0IERvd25EaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG93bkRpYWxvZ1wiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XHJcbmltcG9ydCBtYXhCeSBmcm9tICdsb2Rhc2gvbWF4QnknXHJcbmltcG9ydCBtaW5CeSBmcm9tICdsb2Rhc2gvbWluQnknXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHRocm90dGxlIGZyb20gXCJsb2Rhc2gvdGhyb3R0bGVcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZFwiO1xyXG5pbXBvcnQgcHJvY2Vzc0hUTUwgZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcG9zdC1wcm9jZXNzXCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IHRocm90dGxlIGZyb20gXCJsb2Rhc2gvdGhyb3R0bGVcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICAvLyDnu7TmiqTkuIDku73mlofku7bntKLlvJVsZW5ndGjooahcclxuICAgIGNvbnN0IHtpbWdBcnIsIHRvbW9ycm93fSA9IGdsb2JhbDtcclxuICAgIGNvbnN0IHtkYXRlfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgICAvLyDmir3lj5bpmo/mnLrmlbDov5vooYzpmo/mnLrvvIzmjqXlj6Pov5Tlm57mnIDlpKfmlbDph4/nmoTpmo/mnLrmlbBcclxuICAgIGxldCBrZXkgPSBkYXRlO1xyXG4gICAgY29uc3QgbWluRGF0ZT1taW5CeShpbWdBcnIsJ2RhdGUnKVxyXG4gICAgY29uc3QgbWF4RGF0ZT1tYXhCeShpbWdBcnIsJ2RhdGUnKVxyXG4gICAgaWYgKGRhdGUgPT09ICdyYW5kb20nKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbWdBcnIubGVuZ3RoKTtcclxuICAgICAgICBrZXkgPSBpbWdBcnJbaW5kZXhdLmRhdGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1pbkRhdGUsXHJcbiAgICAgICAgICAgIG1heERhdGUsXHJcbiAgICAgICAgICAgIGltZzogaW1nQXJyW2tleV0gfHwge30sXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRvbW9ycm93IC0gbW9tZW50KCkgKyA1MDAwLFxyXG4gICAgICAgICAgICBuZXh0S2V5OiB0b21vcnJvdy5mb3JtYXQoJ1lZWVlNTUREJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGUoe21pbkRhdGUsbWF4RGF0ZSxpbWcgPSB7fSwgdGltZW91dCwgbmV4dEtleX0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCB1cGRhdGVMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3Nob3dCb3R0b20sIHVwZGF0ZVNob3dCb3R0b21dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbm93LCB1cGRhdGVOb3ddID0gdXNlU3RhdGUobmV3IERhdGUoKS52YWx1ZU9mKCkpO1xyXG4gICAgY29uc3QgW2Rvd25EaWFsb2dWaXNpYmxlLCBzZXREb3duRGlhbG9nVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsaWtlTGlzdCwgc2V0TGlrZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrTW9kZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDI0IHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHNldElzTW9iaWxlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzTW9iaWxlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBsaWtlRnVuXHJcbiAgICBjb25zdCBsaWtlRnVuID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgbG9jYWxMaWtlTGlzdD13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsTGlrZUxpc3QnKVxyXG4gICAgICAgIGlmKCFsaWtlTGlzdC5sZW5ndGggJiYgbG9jYWxMaWtlTGlzdCl7XHJcbiAgICAgICAgICAgIHNldExpa2VMaXN0KEpTT04ucGFyc2UobG9jYWxMaWtlTGlzdCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICBsb2NhbExpa2VMaXN0PWxvY2FsTGlrZUxpc3Q/SlNPTi5wYXJzZShsb2NhbExpa2VMaXN0KTpbXVxyXG4gICAgICAgICAgICBpZighbG9jYWxMaWtlTGlzdC5pbmNsdWRlcyhkYXRhKSl7XHJcbiAgICAgICAgICAgICAgICBheGlvcyhgL2FwaS9zb3J0P2RhdGU9JHtkYXRhfSZrPWxpa2VDb3VudGApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubGlrZUNvdW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsTGlrZUxpc3QucHVzaChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlrZUxpc3QobG9jYWxMaWtlTGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxMaWtlTGlzdCcsSlNPTi5zdHJpbmdpZnkobG9jYWxMaWtlTGlzdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdGhyb3R0bGVMaWtlRnVuPXRocm90dGxlKChkYXRhKT0+bGlrZUZ1bihkYXRhKSwxNTAwKVxyXG4gICAgY29uc3QgZG93bmxvYWRGdW4gPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICBheGlvcyhgL2FwaS9zb3J0P2RhdGU9JHtkYXRhfSZrPWRvd25sb2FkQ291bnRgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGRpZCBtb3VudFxyXG4gICAgY29uc3QgbG9hZGluZ0ltZyA9IHVzZVJlZigpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsaWtlRnVuKClcclxuICAgICAgICAvLyDlm77niYfliqDovb3lrozmiJDlsLHlj5bmtoggbG9hZGluZ1xyXG4gICAgICAgIGlmIChsb2FkaW5nSW1nLmN1cnJlbnQgJiYgbG9hZGluZ0ltZy5jdXJyZW50LmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja01vZGUoKTtcclxuICAgICAgICB3aW5kb3cub25rZXl1cCA9ICh7a2V5Q29kZX0pID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24gPSBgL3JhbmRvbWA7XHJcbiAgICAgICAgICAgICAgICAgICAgLypjb25zdCBkYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heERhdGUtbWluRGF0ZSkpK21pbkRhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUG9zaXRpb24oZGF0ZSk7Ki9cclxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVBvc2l0aW9uKHszNzogJ3ByZXYnLCAzOTogJ25leHQnfVtrZXlDb2RlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGNoZWNrTW9kZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICFpbWcubmV4dCAmJiAoaW1nLm5leHQgPSBuZXh0S2V5KTtcclxuICAgICAgICB9LCB0aW1lb3V0KVxyXG4gICAgfSwgW10pO1xyXG4gICAgLy8g5YmN5ZCO5YiH5o2iXHJcbiAgICBjb25zdCBjaGFuZ2VQb3NpdGlvbiA9IChrZXkpID0+IHtcclxuICAgICAgICBpZiAoIWltZ1trZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLndhcm5pbmcoe1xyXG4gICAgICAgICAgICAgICAgcHJldjogJ+ayoeacieabtOaXqeeahOi+o++8gScsXHJcbiAgICAgICAgICAgICAgICBuZXh0OiAn5bey57uP5piv5pyA5paw55qE6L6j77yBJyxcclxuICAgICAgICAgICAgfVtrZXldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGAvJHtpbWdba2V5XX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOenu+WKqOm8oOagh++8jOaYvuekuuW6leS4i+WMuuWfn1xyXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlU2hvd0JvdHRvbSh0cnVlKTtcclxuICAgICAgICB1cGRhdGVOb3cobmV3IERhdGUoKS52YWx1ZU9mKCkpXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aWNrID0gc2V0VGltZW91dCgoKSA9PiB1cGRhdGVTaG93Qm90dG9tKGZhbHNlKSwgMzUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGljayk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbbm93XVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbWdEYXRlID0gbW9tZW50KFN0cmluZyhpbWcuZGF0ZSksICdZWVlZTU1ERCcpO1xyXG5cclxuICAgIHJldHVybiBpbWcuZGF0ZSA/IChcclxuICAgICAgICA8U3BpbiBzcGlubmluZz17bG9hZGluZ30gc2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZGV0YWlsLXBhZ2UgJHtpc01vYmlsZSAmJiAnbW9iaWxlLW1vZGUnfWB9IG9uTW91c2VNb3ZlPXtvbk1vdXNlTW92ZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvYWRpbmctaW1nXCIgcmVmPXtsb2FkaW5nSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e2AvL2NuLmJpbmcuY29tJHtpbWcudXJsYmFzZX1fJHtpc01vYmlsZSA/ICc3Njh4MTI4MCcgOiAnMTkyMHgxMDgwJ30uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXsoKSA9PiB1cGRhdGVMb2FkaW5nKGZhbHNlKX0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1jb250ZW50LWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoLy9jbi5iaW5nLmNvbSR7aW1nLnVybGJhc2V9XyR7aXNNb2JpbGUgPyAnNzY4eDEyODAnIDogJzE5MjB4MTA4MCd9LmpwZylgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7a2V5OiAncHJldicsIGFycm93OiAnbGVmdCd9LCB7a2V5OiAnbmV4dCcsIGFycm93OiAncmlnaHQnfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHtrZXksIGFycm93fSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1trZXldID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHBhZ2UtJHthcnJvd31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBhZ2UtaWNvbiBpY29uLSR7YXJyb3d9ICR7KHNob3dCb3R0b20gfHwgaXNNb2JpbGUpICYmICdhY3RpdmVkJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBvc2l0aW9uKGtleSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgaWNvbmZvbnQgaWNvbi1hcnJvdy0ke2Fycm93fWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1kYXRlLXllYXJcIj57aW1nRGF0ZS5mb3JtYXQoJ1lZJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1kYXRlLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aW1nRGF0ZS5mb3JtYXQoJ01NJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aW1nRGF0ZS5mb3JtYXQoJ0REJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jcC10eHRcIj57aW1nLmNwfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bib3R0b20taW5mbyAke3Nob3dCb3R0b20gJiYgJ2FjdGl2ZWQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWJpbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KGxpa2VMaXN0LmluY2x1ZGVzKGltZy5kYXRlKT8naWNvbi1saWtlLWZpbGwnOidpY29uLXhpaHVhbicpKycgaWNvbmZvbnQnfSBvbkNsaWNrPXsoKSA9PiB0aHJvdHRsZUxpa2VGdW4oaW1nLmRhdGUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25mb250IGljb24tZG93bmxvYWRcIiBvbkNsaWNrPXsoKSA9PiBzZXREb3duRGlhbG9nVmlzaWJsZSh0cnVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yYW5kb21cIiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLXRvdXppXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImljb25mb250IGljb24tYWJvdXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JlbnNlcnZlL2JpbmdcIiByZWw9XCJleHRlcm5hbCBub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImljb25mb250IGljb24tZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxEb3duRGlhbG9nIGRvd25sb2FkRnVuPXtkb3dubG9hZEZ1bn0gaXNNb2JpbGU9e2lzTW9iaWxlfSB2aXNpYmxlPXtkb3duRGlhbG9nVmlzaWJsZX0gb25IaWRlPXsoKSA9PiBzZXREb3duRGlhbG9nVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0luZm89e2ltZ30vPlxyXG4gICAgICAgIDwvU3Bpbj5cclxuICAgICkgOiA8RXJyb3Igc3RhdHVzQ29kZT17NDA0fS8+XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==