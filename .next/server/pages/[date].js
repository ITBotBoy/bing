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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5tDZ":
/***/ (function(module, exports) {



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

/***/ "S6MW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ _date_date; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./styles/[date].scss
var _date_ = __webpack_require__("FLka");

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
// CONCATENATED MODULE: ./components/downDialog.js






const {
  Option
} = external_antd_["Select"];

const DownDialog = ({
  isMobile,
  visible,
  imgInfo,
  onHide
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
  const sizeMap = [['1920x1200', '1920x1080', '1366x768', '1280x768', '1024x768'], ['768x1280', '720x1280', '480x800']];

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
    external_antd_["message"].info('加入下载！');
  };

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
          onClick: () => onClickDown(),
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

/* harmony default export */ var components_downDialog = (DownDialog);
// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__("eomm");
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// CONCATENATED MODULE: ./pages/[date].js









async function getServerSideProps(context) {
  const {
    imgArr,
    tomorrow
  } = global;
  const {
    date
  } = context.query;
  let key = date;

  if (date === 'random') {
    const index = Math.floor(Math.random() * imgArr.length);
    key = imgArr[index].date;
  }

  return {
    props: {
      img: imgArr[key] || {},
      timeout: tomorrow - external_moment_default()() + 5000,
      nextKey: tomorrow.format('YYYYMMDD')
    }
  };
}
function _date_date({
  img = {},
  timeout,
  nextKey
}) {
  const router = Object(router_["useRouter"])();
  const {
    0: loading,
    1: updateLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: showBottom,
    1: updateShowBottom
  } = Object(external_react_["useState"])(true);
  const {
    0: now,
    1: updateNow
  } = Object(external_react_["useState"])(new Date().valueOf());
  const {
    0: downDialogVisible,
    1: setDownDialogVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: isMobile,
    1: setIsMobile
  } = Object(external_react_["useState"])(false);

  const checkMode = () => {
    if (window.innerWidth < 1024 || window.innerWidth < window.innerHeight) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }; // did mount


  const loadingImg = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    // 图片加载完成就取消 loading
    if (loadingImg.current && loadingImg.current.complete) {
      updateLoading(false);
    }

    checkMode();

    window.onkeyup = ({
      keyCode
    }) => {
      switch (keyCode) {
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
      return external_antd_["message"].warning({
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

  Object(external_react_["useEffect"])(() => {
    const tick = setTimeout(() => updateShowBottom(false), 3500);
    return () => {
      clearTimeout(tick);
    };
  }, [now]);
  const imgDate = external_moment_default()(String(img.date), 'YYYYMMDD');
  return img.date ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Spin"], {
    spinning: loading,
    size: "large",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `detail-page ${isMobile && 'mobile-mode'}`,
      onMouseMove: onMouseMove,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: "loading-img",
        ref: loadingImg,
        src: `//cn.bing.com${img.urlbase}_${isMobile ? '768x1280' : '1920x1080'}.jpg`,
        onLoad: () => updateLoading(false)
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
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
        }) => img[key] ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `page-icon icon-${arrow} ${(showBottom || isMobile) && 'actived'}`,
          onClick: () => changePosition(key),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: `iconfont icon-arrow-${arrow}`
          })
        }, `page-${arrow}`) : ''), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "img-info",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "img-date",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "img-date-year",
              children: imgDate.format('YY')
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "img-date-md",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: imgDate.format('MM')
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: imgDate.format('DD')
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "img-cp",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "img-cp-txt",
              children: img.cp
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `bottom-info ${showBottom && 'actived'}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "icon-list",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/",
              className: "iconfont icon-bing"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/about",
              className: "iconfont icon-about"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "iconfont icon-download",
              onClick: () => setDownDialogVisible(true)
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/random",
              className: "iconfont icon-touzi"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://github.com/renserve/bing",
              rel: "external nofollow noopener noreferrer",
              target: "_blank",
              className: "iconfont icon-github"
            })]
          })
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_downDialog, {
      isMobile: isMobile,
      visible: downDialogVisible,
      onHide: () => setDownDialogVisible(false),
      imgInfo: img
    })]
  }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(error_default.a, {
    statusCode: 404
  });
}

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });