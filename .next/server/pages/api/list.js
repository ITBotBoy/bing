module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bjc6");


/***/ }),

/***/ "7uyq":
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),

/***/ "B2aQ":
/***/ (function(module, exports) {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ "bjc6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const moment = __webpack_require__("wy2R");

const jsonfile = __webpack_require__("7uyq");

const sortBy = __webpack_require__("B2aQ");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  let {
    date = 0,
    count = 0,
    type = 1
  } = req.query,
      monthData; //默认列表 type1为列表

  if (!date) return res.json({
    data: []
  });
  const {
    cacheMaxList
  } = global; //最多存储最近一年的
  //  28

  /*if(Number(date)){
      console.log(date)
      date=String(date).slice(0,6)
      monthData=imgArr.filter(i=>String(i.date).includes(date))
      //今天距离月初的天数
      // count=new Date(date.slice(4), date.slice(2), 0).getDate()
  }else {
      const now = moment().format('YYYYMM');
      monthData=imgArr.filter(i=>String(i.date).includes(now))
      if(monthData.length<28){
          const last=moment().subtract(1, 'month').format('YYYYMM')
          const lastMonthData=imgArr.filter(i=>String(i.date).includes(last))
          console.log(imgArr.length,'lastMonthData')
          monthData=monthData.concat(lastMonthData)
      }
  }*/
  //读取后一个月的数据保证始终超过10条

  let currentMonthData = [],
      lastMonthData = [];
  const currentFileName = moment(/\d{6,}/.test(date) ? date : new Date().getTime()).format('YYYYMM');
  const lastFileName = moment(/\d{6,}/.test(date) ? date : new Date().getTime()).subtract(1, 'months').format('YYYYMM');

  try {
    const {
      imgs: currentMonthImgs
    } = await jsonfile.readFileSync(`bing_data/${currentFileName}.json`);
    const {
      imgs: lastMonthImgs
    } = await jsonfile.readFileSync(`bing_data/${lastFileName}.json`);
    currentMonthData = currentMonthImgs;
    lastMonthData = lastMonthImgs;
  } catch (e) {}

  const data = [...currentMonthData, ...lastMonthData];
  let startIndex = data.findIndex(({
    date: d
  }) => date === `${d}`);
  startIndex < 0 && (startIndex = data.length - 1);
  res.json({
    data: sortBy(data, 'date').slice(Math.max(0, startIndex - (count - 1)), startIndex + 1).reverse()
  });
});

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });