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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("S6MW");


/***/ }),

/***/ "2pyn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getServerSideProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
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
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_2614575_0k9272p6cclf.css"
    })
  });
});

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5tDZ":
/***/ (function(module, exports) {



/***/ }),

/***/ "9+Bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./styles/downDialog.scss
var downDialog = __webpack_require__("5tDZ");

// CONCATENATED MODULE: ./util/download.js
// download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download
function download(data, strFileName, strMimeType) {
  let self = window,
      // this script is only for browsers anyway...
  defaultMime = 'application/octet-stream',
      // this default mime also triggers iframe downloads
  mimeType = strMimeType || defaultMime,
      payload = data,
      url = data,
      anchor = document.createElement('a'),
      toString = function (a) {
    return String(a);
  },
      myBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString,
      fileName = strFileName || 'download',
      blob,
      reader;

  myBlob = myBlob.call ? myBlob.bind(self) : Blob;

  if (String(this) === 'true') {
    // reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
    payload = [payload, mimeType];
    mimeType = payload[0];
    payload = payload[1];
  }

  if (url && url.length < 2048) {
    // if no filename and no mime, assume a url was passed as the only argument
    anchor.href = url; // assign href prop to temp anchor

    if (anchor.href.indexOf(url) !== -1) {
      // if the browser determines that it's a potentially valid url path:
      const ajax = new XMLHttpRequest();
      ajax.open('GET', url, true);
      ajax.responseType = 'blob';

      ajax.onload = function (e) {
        download(e.target.response, fileName, defaultMime);
      };

      setTimeout(() => {
        ajax.send();
      }, 0); // allows setting custom ajax headers using the return:

      return ajax;
    } // end if valid url?

  } // end if url?
  // go ahead and download dataURLs right away


  if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
    if (payload.length > 1024 * 1024 * 1.999 && myBlob !== toString) {
      payload = dataUrlToBlob(payload);
      mimeType = payload.type || defaultMime;
    } else {
      return navigator.msSaveBlob ? // IE10 can't do a[download], only Blobs:
      navigator.msSaveBlob(dataUrlToBlob(payload), fileName) : saver(payload); // everyone else can save dataURLs un-processed
    }
  } else {
    // not data url, is it a string with special needs?
    if (/([\x80-\xff])/.test(payload)) {
      let i = 0,
          tempUiArr = new Uint8Array(payload.length),
          mx = tempUiArr.length;

      for (i; i < mx; ++i) tempUiArr[i] = payload.charCodeAt(i);

      payload = new myBlob([tempUiArr], {
        type: mimeType
      });
    }
  }

  blob = payload instanceof myBlob ? payload : new myBlob([payload], {
    type: mimeType
  });

  function dataUrlToBlob(strUrl) {
    let parts = strUrl.split(/[:;,]/),
        type = parts[1],
        decoder = parts[2] == 'base64' ? atob : decodeURIComponent,
        binData = decoder(parts.pop()),
        mx = binData.length,
        i = 0,
        uiArr = new Uint8Array(mx);

    for (i; i < mx; ++i) uiArr[i] = binData.charCodeAt(i);

    return new myBlob([uiArr], {
      type
    });
  }

  function saver(url, winMode) {
    if ('download' in anchor) {
      // html5 A[download]
      anchor.href = url;
      anchor.setAttribute('download', fileName);
      anchor.className = 'download-js-link';
      anchor.innerHTML = 'downloading...';
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      setTimeout(() => {
        anchor.click();
        document.body.removeChild(anchor);

        if (winMode === true) {
          setTimeout(() => {
            self.URL.revokeObjectURL(anchor.href);
          }, 250);
        }
      }, 66);
      return true;
    } // handle non-a[download] safari as best we can:


    if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
      if (/^data:/.test(url)) url = `data:${url.replace(/^data:([\w\/\-\+]+)/, defaultMime)}`;

      if (!window.open(url)) {
        // popup blocked, offer direct download:
        if (window.confirm('Displaying New Document\n\nUse Save As... to download, then click back to return to this page.')) {
          window.location.href = url;
        }
      }

      return true;
    } // do iframe dataURL download (old ch+FF):


    const f = document.createElement('iframe');
    document.body.appendChild(f);

    if (!winMode && /^data:/.test(url)) {
      // force a mime that will download:
      url = `data:${url.replace(/^data:([\w\/\-\+]+)/, defaultMime)}`;
    }

    f.src = url;
    setTimeout(() => {
      document.body.removeChild(f);
    }, 333);
  } // end saver


  if (navigator.msSaveBlob) {
    // IE10+ : (has Blob, but not a[download] or URL)
    return navigator.msSaveBlob(blob, fileName);
  }

  if (self.URL) {
    // simple fast and modern way using Blob and URL:
    saver(self.URL.createObjectURL(blob), true);
  } else {
    // handle non-Blob()+non-URL browsers:
    if (typeof blob === 'string' || blob.constructor === toString) {
      try {
        return saver(`data:${mimeType};base64,${self.btoa(blob)}`);
      } catch (y) {
        return saver(`data:${mimeType},${encodeURIComponent(blob)}`);
      }
    } // Blob but not URL support:


    reader = new FileReader();

    reader.onload = function (e) {
      saver(this.result);
    };

    reader.readAsDataURL(blob);
  }

  return true;
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");

// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__("p7dQ");
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// CONCATENATED MODULE: ./components/downDialog.js








const {
  Option
} = external_antd_["Select"];

const DownDialog = ({
  isMobile,
  visible,
  imgInfo,
  onHide,
  downloadFun
}) => {
  const {
    0: size,
    1: setSize
  } = Object(external_react_["useState"])('1920x1080');
  const {
    0: imgLoading,
    1: setImgLoading
  } = Object(external_react_["useState"])(true);
  const downLink = Object(external_react_["useRef"])();
  const sizeMap = [['1920x1200', '1920x1080', '1366x768', '1280x768', '1024x768'], ['800x600', '800x480', '768x1280', '720x1280', '640x480', '480x800', '400x240', '320x240', '240x320']];

  const updateSize = val => {
    window.localStorage.setItem('bing_down_size', val);
    setImgLoading(true);
    setSize(val);
  };

  const onClickDown = () => {
    const {
      urlbase,
      date
    } = imgInfo;
    download(`//cn.bing.com${urlbase}_${size}.jpg`, `bing_${date}_${size}.jpg`);
    downloadFun(date);
    external_antd_["message"].info('加入下载！');
  };

  const throttleOnClickDown = throttle_default()(() => onClickDown(), 3000);
  Object(external_react_["useEffect"])(() => {
    let size = window.localStorage.getItem('bing_down_size') || '1920x1080';

    if (isMobile) {
      size = '768x1280';
    }

    setSize(size);
  }, [isMobile]);
  const downImg = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (downImg && downImg.current && downImg.current.complete) {
      setImgLoading(false);
    }
  }, [imgInfo]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Modal"], {
    visible: visible,
    onClose: onHide,
    onCancel: onHide,
    footer: null,
    wrapClassName: `down-dialog mode-${isMobile && 'mobile'}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "down-dialog-content",
      children: [imgInfo && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Spin"], {
          spinning: imgLoading,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            ref: downImg,
            onLoad: () => setImgLoading(false),
            className: "down-img",
            src: `//cn.bing.com${imgInfo.urlbase}_${size}.jpg`
          })
        }), isMobile ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "select-size-container",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Select"], {
            value: size,
            onChange: v => updateSize(v),
            children: sizeMap.map((arr, i) => arr.map(size => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Option, {
              value: size,
              children: size
            }, `size-${size}`)))
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "select-size-container",
          children: sizeMap.map((arr, i) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "size-row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              className: `iconfont type-icon icon-${['pc', 'mobile'][i]} ${arr.indexOf(size) > -1 && 'actived'}`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Radio"].Group, {
              value: size,
              onChange: e => updateSize(e.target.value),
              children: arr.map(size => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Radio"].Button, {
                value: size,
                children: size
              }, `${i}-${size}`))
            })]
          }, `size-type-${i}`))
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Button"], {
          type: "primary",
          className: "down-icon",
          onClick: () => throttleOnClickDown(),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "iconfont icon-download"
          }), isMobile ? '' : '下载']
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        ref: downLink,
        href: `//cn.bing.com${imgInfo.urlbase}_${size}.jpg`,
        download: `bing_${imgInfo.date}_${size}.jpg`
      })]
    })
  });
};

/* harmony default export */ var components_downDialog = __webpack_exports__["a"] = (DownDialog);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FLka":
/***/ (function(module, exports) {



/***/ }),

/***/ "OqZY":
/***/ (function(module, exports) {

module.exports = require("lodash/minBy");

/***/ }),

/***/ "S6MW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return date; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_date_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FLka");
/* harmony import */ var _styles_date_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_date_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_downDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9+Bb");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("eomm");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_maxBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("SMJ/");
/* harmony import */ var lodash_maxBy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_maxBy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_minBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("OqZY");
/* harmony import */ var lodash_minBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_minBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("p7dQ");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("2pyn");
/* harmony import */ var next_dist_next_server_lib_post_process__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("aS6J");
/* harmony import */ var next_dist_next_server_lib_post_process__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_post_process__WEBPACK_IMPORTED_MODULE_13__);














 // import axios from "axios";
// import throttle from "lodash/throttle";

async function getServerSideProps(context) {
  const {
    imgArr,
    tomorrow
  } = global;
  const {
    date
  } = context.query;
  let key = date;
  const minDate = lodash_minBy__WEBPACK_IMPORTED_MODULE_9___default()(imgArr, 'date');
  const maxDate = lodash_maxBy__WEBPACK_IMPORTED_MODULE_8___default()(imgArr, 'date');

  if (date === 'random') {
    const index = Math.floor(Math.random() * imgArr.length);
    key = imgArr[index].date;
  }

  return {
    props: {
      minDate,
      maxDate,
      img: imgArr[key] || {},
      timeout: tomorrow - moment__WEBPACK_IMPORTED_MODULE_4___default()() + 5000,
      nextKey: tomorrow.format('YYYYMMDD')
    }
  };
}
function date({
  minDate,
  maxDate,
  img = {},
  timeout,
  nextKey
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: loading,
    1: updateLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const {
    0: showBottom,
    1: updateShowBottom
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const {
    0: now,
    1: updateNow
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date().valueOf());
  const {
    0: downDialogVisible,
    1: setDownDialogVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: isMobile,
    1: setIsMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: likeList,
    1: setLikeList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);

  const checkMode = () => {
    if (window.innerWidth < 1024 || window.innerWidth < window.innerHeight) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }; // likeFun


  const likeFun = data => {
    let localLikeList = window.localStorage.getItem('localLikeList');

    if (!likeList.length && localLikeList) {
      setLikeList(JSON.parse(localLikeList));
    }

    if (data) {
      localLikeList = localLikeList ? JSON.parse(localLikeList) : [];

      if (!localLikeList.includes(data)) {
        axios__WEBPACK_IMPORTED_MODULE_10___default()(`/api/sort?date=${data}&k=likeCount`).then(res => {
          if (res.data.likeCount) {
            localLikeList.push(data);
            setLikeList(localLikeList);
            window.localStorage.setItem('localLikeList', JSON.stringify(localLikeList));
          }
        });
      }
    }
  };

  const throttleLikeFun = lodash_throttle__WEBPACK_IMPORTED_MODULE_11___default()(data => likeFun(data), 1500);

  const downloadFun = data => {
    if (data) {
      axios__WEBPACK_IMPORTED_MODULE_10___default()(`/api/sort?date=${data}&k=downloadCount`);
    }
  }; // did mount


  const loadingImg = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    likeFun(); // 图片加载完成就取消 loading

    if (loadingImg.current && loadingImg.current.complete) {
      updateLoading(false);
    }

    checkMode();

    window.onkeyup = ({
      keyCode
    }) => {
      switch (keyCode) {
        case 32:
          return window.location = `/random`;

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
    setTimeout(() => {
      !img.next && (img.next = nextKey);
    }, timeout);
  }, []); // 前后切换

  const changePosition = key => {
    if (!img[key]) {
      return antd__WEBPACK_IMPORTED_MODULE_3__["message"].warning({
        prev: '没有更早的辣！',
        next: '已经是最新的辣！'
      }[key]);
    }

    updateLoading(true);
    window.location = `/${img[key]}`;
  }; // 移动鼠标，显示底下区域


  const onMouseMove = () => {
    updateShowBottom(true);
    updateNow(new Date().valueOf());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const tick = setTimeout(() => updateShowBottom(false), 3500);
    return () => {
      clearTimeout(tick);
    };
  }, [now]);
  const imgDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(String(img.date), 'YYYYMMDD');
  return img.date ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_3__["Spin"], {
    spinning: loading,
    size: "large",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Head__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: `detail-page ${isMobile && 'mobile-mode'}`,
      onMouseMove: onMouseMove,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        className: "loading-img",
        ref: loadingImg,
        src: `//cn.bing.com${img.urlbase}_${isMobile ? '768x1280' : '1920x1080'}.jpg`,
        onLoad: () => updateLoading(false)
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "img-content-box",
        style: {
          backgroundImage: `url(//cn.bing.com${img.urlbase}_${isMobile ? '768x1280' : '1920x1080'}.jpg)`
        },
        children: [[{
          key: 'prev',
          arrow: 'left'
        }, {
          key: 'next',
          arrow: 'right'
        }].map(({
          key,
          arrow
        }) => img[key] ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: `page-icon icon-${arrow} ${(showBottom || isMobile) && 'actived'}`,
          onClick: () => changePosition(key),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: `iconfont icon-arrow-${arrow}`
          })
        }, `page-${arrow}`) : ''), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
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
          className: `bottom-info ${showBottom && 'actived'}`,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "icon-list",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "/",
              className: "iconfont icon-bing"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: (likeList.includes(img.date) ? 'icon-like-fill' : 'icon-xihuan') + ' iconfont',
              onClick: () => throttleLikeFun(img.date)
            }), ")", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "iconfont icon-download",
              onClick: () => setDownDialogVisible(true)
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
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_downDialog__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      downloadFun: downloadFun,
      isMobile: isMobile,
      visible: downDialogVisible,
      onHide: () => setDownDialogVisible(false),
      imgInfo: img
    })]
  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {
    statusCode: 404
  });
}

/***/ }),

/***/ "SMJ/":
/***/ (function(module, exports) {

module.exports = require("lodash/maxBy");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "aS6J":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/post-process");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "p7dQ":
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });