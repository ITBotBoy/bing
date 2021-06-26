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
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Head__WEBPACK_IMPORTED_MODULE_10__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
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
            }), ")", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2RhdGVdLmpzIl0sIm5hbWVzIjpbImRhdGUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsImltZyIsInRpbWVvdXQiLCJuZXh0S2V5Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwidXBkYXRlTG9hZGluZyIsInNob3dCb3R0b20iLCJ1cGRhdGVTaG93Qm90dG9tIiwiRGF0ZSIsInZhbHVlT2YiLCJub3ciLCJ1cGRhdGVOb3ciLCJkb3duRGlhbG9nVmlzaWJsZSIsInNldERvd25EaWFsb2dWaXNpYmxlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsImxpa2VMaXN0Iiwic2V0TGlrZUxpc3QiLCJjaGVja01vZGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJsaWtlRnVuIiwiZGF0YSIsImxvY2FsTGlrZUxpc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGVuZ3RoIiwiSlNPTiIsInBhcnNlIiwiaW5jbHVkZXMiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJsaWtlQ291bnQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRocm90dGxlTGlrZUZ1biIsInRocm90dGxlIiwiZG93bmxvYWRGdW4iLCJsb2FkaW5nSW1nIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNvbXBsZXRlIiwib25rZXl1cCIsImtleUNvZGUiLCJsb2NhdGlvbiIsImNoYW5nZVBvc2l0aW9uIiwib25yZXNpemUiLCJzZXRUaW1lb3V0IiwibmV4dCIsImtleSIsIm1lc3NhZ2UiLCJ3YXJuaW5nIiwicHJldiIsIm9uTW91c2VNb3ZlIiwidGljayIsImNsZWFyVGltZW91dCIsImltZ0RhdGUiLCJtb21lbnQiLCJTdHJpbmciLCJ1cmxiYXNlIiwiYmFja2dyb3VuZEltYWdlIiwiYXJyb3ciLCJtYXAiLCJmb3JtYXQiLCJjcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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LGlCQUFXLEVBQUUyQixXQUF6QjtBQUFzQyxjQUFRLEVBQUUxQixRQUFoRDtBQUEwRCxhQUFPLEVBQUVGLGlCQUFuRTtBQUFzRixZQUFNLEVBQUU7QUFBQSxlQUFNQyxvQkFBb0IsQ0FBQyxLQUFELENBQTFCO0FBQUEsT0FBOUY7QUFDWSxhQUFPLEVBQUVmO0FBRHJCLE1BbERKO0FBQUEsSUFERyxnQkFzREgsOERBQUMsaURBQUQ7QUFBTyxjQUFVLEVBQUU7QUFBbkIsSUF0REo7QUF1REg7O0dBNUp1QkgsSTtVQUNMTyxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZGF0ZV0uMDgwMDIxMWQ0NTc0M2I5ZGJiMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge21lc3NhZ2UsIFNwaW59IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCAnLi4vc3R5bGVzL1tkYXRlXS5zY3NzJztcbmltcG9ydCBEb3duRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2Rvd25EaWFsb2dcIjtcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcbmltcG9ydCBtYXhCeSBmcm9tICdsb2Rhc2gvbWF4QnknXG5pbXBvcnQgbWluQnkgZnJvbSAnbG9kYXNoL21pbkJ5J1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHRocm90dGxlIGZyb20gXCJsb2Rhc2gvdGhyb3R0bGVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRcIjtcbmltcG9ydCBwcm9jZXNzSFRNTCBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9wb3N0LXByb2Nlc3NcIjtcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB0aHJvdHRsZSBmcm9tIFwibG9kYXNoL3Rocm90dGxlXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7aW1nQXJyLCB0b21vcnJvd30gPSBnbG9iYWw7XG4gICAgY29uc3Qge2RhdGV9ID0gY29udGV4dC5xdWVyeTtcbiAgICBsZXQga2V5ID0gZGF0ZTtcbiAgICBjb25zdCBtaW5EYXRlPW1pbkJ5KGltZ0FyciwnZGF0ZScpXG4gICAgY29uc3QgbWF4RGF0ZT1tYXhCeShpbWdBcnIsJ2RhdGUnKVxuICAgIGlmIChkYXRlID09PSAncmFuZG9tJykge1xuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltZ0Fyci5sZW5ndGgpO1xuICAgICAgICBrZXkgPSBpbWdBcnJbaW5kZXhdLmRhdGU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBtaW5EYXRlLFxuICAgICAgICAgICAgbWF4RGF0ZSxcbiAgICAgICAgICAgIGltZzogaW1nQXJyW2tleV0gfHwge30sXG4gICAgICAgICAgICB0aW1lb3V0OiB0b21vcnJvdyAtIG1vbWVudCgpICsgNTAwMCxcbiAgICAgICAgICAgIG5leHRLZXk6IHRvbW9ycm93LmZvcm1hdCgnWVlZWU1NREQnKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlKHttaW5EYXRlLG1heERhdGUsaW1nID0ge30sIHRpbWVvdXQsIG5leHRLZXl9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBbbG9hZGluZywgdXBkYXRlTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbc2hvd0JvdHRvbSwgdXBkYXRlU2hvd0JvdHRvbV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbbm93LCB1cGRhdGVOb3ddID0gdXNlU3RhdGUobmV3IERhdGUoKS52YWx1ZU9mKCkpO1xuICAgIGNvbnN0IFtkb3duRGlhbG9nVmlzaWJsZSwgc2V0RG93bkRpYWxvZ1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsaWtlTGlzdCwgc2V0TGlrZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgY2hlY2tNb2RlID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDI0IHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBzZXRJc01vYmlsZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldElzTW9iaWxlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBsaWtlRnVuXG4gICAgY29uc3QgbGlrZUZ1biA9IChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBsb2NhbExpa2VMaXN0PXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxMaWtlTGlzdCcpXG4gICAgICAgIGlmKCFsaWtlTGlzdC5sZW5ndGggJiYgbG9jYWxMaWtlTGlzdCl7XG4gICAgICAgICAgICBzZXRMaWtlTGlzdChKU09OLnBhcnNlKGxvY2FsTGlrZUxpc3QpKVxuICAgICAgICB9XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgbG9jYWxMaWtlTGlzdD1sb2NhbExpa2VMaXN0P0pTT04ucGFyc2UobG9jYWxMaWtlTGlzdCk6W11cbiAgICAgICAgICAgIGlmKCFsb2NhbExpa2VMaXN0LmluY2x1ZGVzKGRhdGEpKXtcbiAgICAgICAgICAgICAgICBheGlvcyhgL2FwaS9zb3J0P2RhdGU9JHtkYXRhfSZrPWxpa2VDb3VudGApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5saWtlQ291bnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsTGlrZUxpc3QucHVzaChkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExpa2VMaXN0KGxvY2FsTGlrZUxpc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbExpa2VMaXN0JyxKU09OLnN0cmluZ2lmeShsb2NhbExpa2VMaXN0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0aHJvdHRsZUxpa2VGdW49dGhyb3R0bGUoKGRhdGEpPT5saWtlRnVuKGRhdGEpLDE1MDApXG4gICAgY29uc3QgZG93bmxvYWRGdW4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGF4aW9zKGAvYXBpL3NvcnQ/ZGF0ZT0ke2RhdGF9Jms9ZG93bmxvYWRDb3VudGApXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGlkIG1vdW50XG4gICAgY29uc3QgbG9hZGluZ0ltZyA9IHVzZVJlZigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxpa2VGdW4oKVxuICAgICAgICAvLyDlm77niYfliqDovb3lrozmiJDlsLHlj5bmtoggbG9hZGluZ1xuICAgICAgICBpZiAobG9hZGluZ0ltZy5jdXJyZW50ICYmIGxvYWRpbmdJbWcuY3VycmVudC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdXBkYXRlTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tNb2RlKCk7XG4gICAgICAgIHdpbmRvdy5vbmtleXVwID0gKHtrZXlDb2RlfSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbiA9IGAvcmFuZG9tYDtcbiAgICAgICAgICAgICAgICAgICAgLypjb25zdCBkYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heERhdGUtbWluRGF0ZSkpK21pbkRhdGU7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVBvc2l0aW9uKGRhdGUpOyovXG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQb3NpdGlvbih7Mzc6ICdwcmV2JywgMzk6ICduZXh0J31ba2V5Q29kZV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSBjaGVja01vZGU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAhaW1nLm5leHQgJiYgKGltZy5uZXh0ID0gbmV4dEtleSk7XG4gICAgICAgIH0sIHRpbWVvdXQpXG4gICAgfSwgW10pO1xuICAgIC8vIOWJjeWQjuWIh+aNolxuICAgIGNvbnN0IGNoYW5nZVBvc2l0aW9uID0gKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWltZ1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS53YXJuaW5nKHtcbiAgICAgICAgICAgICAgICBwcmV2OiAn5rKh5pyJ5pu05pep55qE6L6j77yBJyxcbiAgICAgICAgICAgICAgICBuZXh0OiAn5bey57uP5piv5pyA5paw55qE6L6j77yBJyxcbiAgICAgICAgICAgIH1ba2V5XSlcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVMb2FkaW5nKHRydWUpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBgLyR7aW1nW2tleV19YDtcbiAgICB9XG5cbiAgICAvLyDnp7vliqjpvKDmoIfvvIzmmL7npLrlupXkuIvljLrln59cbiAgICBjb25zdCBvbk1vdXNlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgdXBkYXRlU2hvd0JvdHRvbSh0cnVlKTtcbiAgICAgICAgdXBkYXRlTm93KG5ldyBEYXRlKCkudmFsdWVPZigpKVxuICAgIH1cbiAgICB1c2VFZmZlY3QoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpY2sgPSBzZXRUaW1lb3V0KCgpID0+IHVwZGF0ZVNob3dCb3R0b20oZmFsc2UpLCAzNTAwKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpY2spO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgW25vd11cbiAgICApO1xuXG4gICAgY29uc3QgaW1nRGF0ZSA9IG1vbWVudChTdHJpbmcoaW1nLmRhdGUpLCAnWVlZWU1NREQnKTtcblxuICAgIHJldHVybiBpbWcuZGF0ZSA/IChcbiAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e2xvYWRpbmd9IHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgPEhlYWQ+PC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkZXRhaWwtcGFnZSAke2lzTW9iaWxlICYmICdtb2JpbGUtbW9kZSd9YH0gb25Nb3VzZU1vdmU9e29uTW91c2VNb3ZlfT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvYWRpbmctaW1nXCIgcmVmPXtsb2FkaW5nSW1nfVxuICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLy9jbi5iaW5nLmNvbSR7aW1nLnVybGJhc2V9XyR7aXNNb2JpbGUgPyAnNzY4eDEyODAnIDogJzE5MjB4MTA4MCd9LmpwZ2B9XG4gICAgICAgICAgICAgICAgICAgICBvbkxvYWQ9eygpID0+IHVwZGF0ZUxvYWRpbmcoZmFsc2UpfS8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctY29udGVudC1ib3hcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgvL2NuLmJpbmcuY29tJHtpbWcudXJsYmFzZX1fJHtpc01vYmlsZSA/ICc3Njh4MTI4MCcgOiAnMTkyMHgxMDgwJ30uanBnKWB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgW3trZXk6ICdwcmV2JywgYXJyb3c6ICdsZWZ0J30sIHtrZXk6ICduZXh0JywgYXJyb3c6ICdyaWdodCd9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHtrZXksIGFycm93fSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdba2V5XSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgcGFnZS0ke2Fycm93fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBhZ2UtaWNvbiBpY29uLSR7YXJyb3d9ICR7KHNob3dCb3R0b20gfHwgaXNNb2JpbGUpICYmICdhY3RpdmVkJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQb3NpdGlvbihrZXkpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BpY29uZm9udCBpY29uLWFycm93LSR7YXJyb3d9YH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1kYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctZGF0ZS15ZWFyXCI+e2ltZ0RhdGUuZm9ybWF0KCdZWScpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWRhdGUtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aW1nRGF0ZS5mb3JtYXQoJ01NJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2ltZ0RhdGUuZm9ybWF0KCdERCcpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNwLXR4dFwiPntpbWcuY3B9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bib3R0b20taW5mbyAke3Nob3dCb3R0b20gJiYgJ2FjdGl2ZWQnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImljb25mb250IGljb24tYmluZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KGxpa2VMaXN0LmluY2x1ZGVzKGltZy5kYXRlKT8naWNvbi1saWtlLWZpbGwnOidpY29uLXhpaHVhbicpKycgaWNvbmZvbnQnfSBvbkNsaWNrPXsoKSA9PiB0aHJvdHRsZUxpa2VGdW4oaW1nLmRhdGUpfS8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1kb3dubG9hZFwiIG9uQ2xpY2s9eygpID0+IHNldERvd25EaWFsb2dWaXNpYmxlKHRydWUpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yYW5kb21cIiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLXRvdXppXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWFib3V0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVuc2VydmUvYmluZ1wiIHJlbD1cImV4dGVybmFsIG5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImljb25mb250IGljb24tZ2l0aHViXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxEb3duRGlhbG9nIGRvd25sb2FkRnVuPXtkb3dubG9hZEZ1bn0gaXNNb2JpbGU9e2lzTW9iaWxlfSB2aXNpYmxlPXtkb3duRGlhbG9nVmlzaWJsZX0gb25IaWRlPXsoKSA9PiBzZXREb3duRGlhbG9nVmlzaWJsZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdJbmZvPXtpbWd9Lz5cbiAgICAgICAgPC9TcGluPlxuICAgICkgOiA8RXJyb3Igc3RhdHVzQ29kZT17NDA0fS8+XG59XG4iXSwic291cmNlUm9vdCI6IiJ9