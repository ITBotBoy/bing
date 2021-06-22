module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


async function getServerSideProps(context) {
  const {
    time,
    title,
    description
  } = context.query;
  return {
    props: {
      time,
      title,
      description
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_2614575_wehxbvylcb.css"
    })
  });
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");







/* harmony default export */ __webpack_exports__["default"] = (function () {
  const {
    0: list,
    1: updateList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: nextDate,
    1: updateNextDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: loading,
    1: updateLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: isMobile,
    1: setIsMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: showTop,
    1: setShowTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: isEmpty,
    1: setEmpty
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const checkMode = () => {
    if (window.innerWidth < 1024 || window.innerWidth < window.innerHeight) {
      setIsMobile(true);
      return true;
    }

    setIsMobile(false);
    return false;
  };

  const queryList = (nextDate, isMobile) => {
    updateLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default()(`/api/list?date=${nextDate}&count=10`).then(({
      data
    }) => {
      let count = 0;
      const maxCount = isMobile ? 0 : 2;
      data.data.forEach((item, i) => {
        let span = 1; //0 1 2

        count < maxCount && maxCount && (span = Math.ceil(Math.random() * 2));
        maxCount - count === 10 - i && maxCount && (span = 2);
        console.log(maxCount, span, isMobile);
        span === 2 && (count += 1);
        item.style = {
          gridColumnStart: `span ${span}`,
          gridRowStart: `span ${span}`
        };
        item.dateStr = moment__WEBPACK_IMPORTED_MODULE_4___default()(item.date, 'YYYYMMDD').format('YY.MM.DD');
        item.span = span;
      });
      const last = data.data.last();
      updateList([...list, ...data.data]);
      !last.prev && setEmpty(true);
      updateNextDate(last.prev);
      updateLoading(false);
    });
  };

  const $page = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(e => {
    window.onscroll = () => {
      if (loading || isEmpty) {
        return;
      }

      setShowTop(document.documentElement.scrollTop > 700);

      if (document.documentElement.clientHeight + document.documentElement.scrollTop + 50 > $page.current.clientHeight) {
        queryList(nextDate, isMobile);
      }
    };

    setTimeout(() => {
      window.onscroll();
    });
  }, [nextDate, loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const isMobile = checkMode();

    Array.prototype.last = function () {
      return this[this.length - 1];
    };

    queryList(nextDate, isMobile);
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: `index-page ${isMobile && 'mobile-page'}`,
    ref: $page,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "img-list",
      style: {
        gridTemplateRows: isMobile ? `repeat(${list.length}, 75vw)` : `repeat(${Math.ceil(list.length / 10) * 4}, 19vw)`
      },
      children: list.map(img => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "img-item",
        style: img.style,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "cover",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: "iconfont icon-fangda actionBtn",
            href: `/${img.date}`
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "text",
            children: img.cp
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: `date-str size-${img.span}`,
          children: img.dateStr
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "img-bg",
          style: {
            backgroundImage: `url('//cn.bing.com${img.urlbase}_${false ? undefined : '1024x768'}.jpg')`
          }
        })]
      }, img.date))
    }), isEmpty && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "empty-text",
      children: "\u2014\u2014 \u5230\u5E95\u5566 \u2014\u2014"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "right-btn",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: `to-top iconfont icon-arrow-left ${!showTop && 'hide'}`,
        onClick: () => window.scrollTo(0, 0)
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        className: "iconfont icon-touzi",
        href: "/random"
      })]
    })]
  });
});

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJ0aW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInF1ZXJ5IiwicHJvcHMiLCJsaXN0IiwidXBkYXRlTGlzdCIsInVzZVN0YXRlIiwibmV4dERhdGUiLCJ1cGRhdGVOZXh0RGF0ZSIsImxvYWRpbmciLCJ1cGRhdGVMb2FkaW5nIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsInNob3dUb3AiLCJzZXRTaG93VG9wIiwiaXNFbXB0eSIsInNldEVtcHR5IiwiY2hlY2tNb2RlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicXVlcnlMaXN0IiwiYXhpb3MiLCJ0aGVuIiwiZGF0YSIsImNvdW50IiwibWF4Q291bnQiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJzcGFuIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93U3RhcnQiLCJkYXRlU3RyIiwibW9tZW50IiwiZGF0ZSIsImZvcm1hdCIsImxhc3QiLCJwcmV2IiwiJHBhZ2UiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJlIiwib25zY3JvbGwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJsZW5ndGgiLCJncmlkVGVtcGxhdGVSb3dzIiwibWFwIiwiaW1nIiwiY3AiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1cmxiYXNlIiwic2Nyb2xsVG8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ08sZUFBZUEsa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQzlDLFFBQU07QUFBQ0MsUUFBRDtBQUFNQyxTQUFOO0FBQVlDO0FBQVosTUFBMkJILE9BQU8sQ0FBQ0ksS0FBekM7QUFDQSxTQUFPO0FBQ0hDLFNBQUssRUFBRTtBQUNISixVQURHO0FBRUhDLFdBRkc7QUFHSEM7QUFIRztBQURKLEdBQVA7QUFPSDtBQUNjLDJFQUFZO0FBQ3ZCLHNCQUNJLDhEQUFDLGdEQUFEO0FBQUEsMkJBQ0k7QUFB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QyxDQUFDRixPQUFELElBQVksTUFBTyxFQUF0RTtBQUNLLGVBQU8sRUFBRSxNQUFNSyxNQUFNLENBQUMrQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBRHBCLFFBREosZUFHSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBbUMsWUFBSSxFQUFDO0FBQXhDLFFBSEo7QUFBQSxNQXpCSjtBQUFBLElBRko7QUFrQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qge3RpbWUsdGl0bGUsZGVzY3JpcHRpb259ID0gY29udGV4dC5xdWVyeTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdGltZSxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9hdC5hbGljZG4uY29tL3QvZm9udF8yNjE0NTc1X3dlaHhidnlsY2IuY3NzXCIvPlxyXG4gICAgICAgICAgICB7Lyo8bWV0YSBjaGFyU2V0PVwiVVRGLThcIi8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0vPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpbWU/KHRpbWUrJyB8ICcpOicnfXt0aXRsZX08L3RpdGxlPiovfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IFtsaXN0LCB1cGRhdGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbmV4dERhdGUsIHVwZGF0ZU5leHREYXRlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtsb2FkaW5nLCB1cGRhdGVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd1RvcCwgc2V0U2hvd1RvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzRW1wdHksIHNldEVtcHR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjaGVja01vZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQgfHwgd2luZG93LmlubmVyV2lkdGggPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHNldElzTW9iaWxlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SXNNb2JpbGUoZmFsc2UpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUxpc3QgPSAobmV4dERhdGUsIGlzTW9iaWxlKSA9PiB7XG4gICAgICAgIHVwZGF0ZUxvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGF4aW9zKGAvYXBpL2xpc3Q/ZGF0ZT0ke25leHREYXRlfSZjb3VudD0xMGApXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IGlzTW9iaWxlID8gMCA6IDI7XG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW4gPSAxO1xuICAgICAgICAgICAgICAgICAgICAvLzAgMSAyXG4gICAgICAgICAgICAgICAgICAgIChjb3VudCA8IG1heENvdW50KSAmJiBtYXhDb3VudCAmJiAoc3BhbiA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMikpO1xuICAgICAgICAgICAgICAgICAgICAoKG1heENvdW50IC0gY291bnQpID09PSAoMTAgLSBpKSkgJiYgbWF4Q291bnQgJiYgKHNwYW4gPSAyKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXhDb3VudCwgc3BhbiwgaXNNb2JpbGUpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuID09PSAyICYmIChjb3VudCArPSAxKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRDb2x1bW5TdGFydDogYHNwYW4gJHtzcGFufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkUm93U3RhcnQ6IGBzcGFuICR7c3Bhbn1gLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0ZVN0ciA9IG1vbWVudChpdGVtLmRhdGUsICdZWVlZTU1ERCcpLmZvcm1hdCgnWVkuTU0uREQnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zcGFuID0gc3BhbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBkYXRhLmRhdGEubGFzdCgpXG4gICAgICAgICAgICAgICAgdXBkYXRlTGlzdChbLi4ubGlzdCwgLi4uZGF0YS5kYXRhXSk7XG4gICAgICAgICAgICAgICAgIWxhc3QucHJldiAmJiBzZXRFbXB0eSh0cnVlKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVOZXh0RGF0ZShsYXN0LnByZXYpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0ICRwYWdlID0gdXNlUmVmKCk7XG5cbiAgICB1c2VFZmZlY3QoKGUpID0+IHtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvYWRpbmcgfHwgaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFNob3dUb3AoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDcwMCk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyA1MCA+ICRwYWdlLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcXVlcnlMaXN0KG5leHREYXRlLCBpc01vYmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cub25zY3JvbGwoKTtcbiAgICAgICAgfSlcbiAgICB9LCBbbmV4dERhdGUsIGxvYWRpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gY2hlY2tNb2RlKCk7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXJ5TGlzdChuZXh0RGF0ZSwgaXNNb2JpbGUpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW5kZXgtcGFnZSAke2lzTW9iaWxlICYmICdtb2JpbGUtcGFnZSd9YH0gcmVmPXskcGFnZX0+XG4gICAgICAgICAgICA8SGVhZD48L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0XCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IGlzTW9iaWxlID8gYHJlcGVhdCgke2xpc3QubGVuZ3RofSwgNzV2dylgIDogYHJlcGVhdCgke01hdGguY2VpbChsaXN0Lmxlbmd0aCAvIDEwKSAqIDR9LCAxOXZ3KWBcbiAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaXN0Lm1hcCgoaW1nKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpbWcuc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWcuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tZmFuZ2RhIGFjdGlvbkJ0blwiIGhyZWY9e2AvJHtpbWcuZGF0ZX1gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57aW1nLmNwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRhdGUtc3RyIHNpemUtJHtpbWcuc3Bhbn1gfT57aW1nLmRhdGVTdHJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctYmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy8vY24uYmluZy5jb20ke2ltZy51cmxiYXNlfV8ke2ZhbHNlID8gJzc2OHgxMjgwJyA6ICcxMDI0eDc2OCd9LmpwZycpYH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzRW1wdHkgJiYgPGRpdiBjbGFzc05hbWU9XCJlbXB0eS10ZXh0XCI+4oCU4oCUIOWIsOW6leWVpiDigJTigJQ8L2Rpdj59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWJ0blwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG8tdG9wIGljb25mb250IGljb24tYXJyb3ctbGVmdCAkeyFzaG93VG9wICYmICdoaWRlJ31gfVxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfS8+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi10b3V6aVwiIGhyZWY9Jy9yYW5kb20nLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=