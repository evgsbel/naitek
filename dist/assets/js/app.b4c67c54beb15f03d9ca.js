/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/sass/app.sass":
/*!**********************************!*\
  !*** ./src/assets/sass/app.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/assets/sass/media.sass":
/*!************************************!*\
  !*** ./src/assets/sass/media.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! select2/dist/js/select2.min */ "./node_modules/select2/dist/js/select2.min.js");
/* harmony import */ var select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min */ "./node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js");
/* harmony import */ var malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sass/app.sass */ "./src/assets/sass/app.sass");
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sass/media.sass */ "./src/assets/sass/media.sass");
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8__);
// JS






 // SCSS




/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {// // $(() => {
// //     $(window).on('load', function () {
// //         $('.preloader__wrp').fadeOut();
// //     });
// // });
$(document).ready(function () {
  $('.js-hover-hide-phone').hover(function visibleHidePhone() {
    $(this).find('.top-contacts__hide').toggleClass('is-visible');
  });
  var arrow_prev = "<svg width='24' height='43' viewBox='0 0 24 43' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M22.5 2L3 21.5L22.5 41' ' stroke-width='3'/></svg>",
      arrow_next = "<svg width='24' height='43' viewBox='0 0 24 43' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L21.5 21.5L2 41'  stroke-width='3'/></svg>"; // js-banner-slider

  $('.js-slider-banner').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    navText: [arrow_prev, arrow_next],
    navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
    navContainerClass: 'slider-arrow__wrp',
    dotsClass: 'dots',
    dotClass: 'dots__item'
  }); // main product slider

  $('.js-slider-product').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [arrow_prev, arrow_next],
    navClass: ["slider-arrow slider-arrow_prev slider-arrow_blue", "slider-arrow slider-arrow_next slider-arrow_blue"],
    navContainerClass: 'slider-arrow__wrp',
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  }); // js-banner-slider

  $('.js-mobile-news-slider').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: [arrow_prev, arrow_next],
    navClass: ["slider-arrow slider-arrow_prev slider-arrow_blue", "slider-arrow slider-arrow_next slider-arrow_blue"],
    navContainerClass: 'mobile-news__arrow-wrp slider-arrow__wrp'
  });
});
$(function () {
  $('.hamburger').on('click', function headerHambClick() {
    $(this).toggleClass('is-active');
    $('.mobile-hide').toggleClass('is-open').slideToggle(); //     .removeClass('feed-open');
  });
});
$(function () {
  $(".js-select").select2({
    language: "ru",
    minimumResultsForSearch: -1
  });
});

function formatState(state) {
  if (!state.id) {
    return state.text;
  }

  var baseUrl = "./assets/img/";
  var $state = $('<span class="d-flex align-items-center"><div class="header__currency-img"><img class="" /></div> <span class="header__currency-title"></span></span>'); // Use .text() instead of HTML string concatenation to avoid script injection issues

  $state.find("span").text(state.text);
  $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");
  return $state;
}

;
$(".js-select-state").select2({
  templateSelection: formatState,
  templateResult: formatState,
  language: "ru",
  minimumResultsForSearch: -1,
  id: "id"
}); // fix header

$(function () {
  $fixBlock = $('.fixed');
  $fixBlock.css('width', $fixBlock.outerWidth());
  $window = $(window); // $h = $fixBlock.offset().top;

  $window.scroll(function () {
    if ($window.scrollTop() > 180) {
      $fixBlock.addClass('is-active');
      $fixBlock.fadeIn();
    } else {
      $fixBlock.removeClass('is-active');
      $fixBlock.fadeOut();
    }
  });
});
$('.js-open-fix-header').click(function openFixHeader() {
  $(this).toggleClass('is-active');
  $(this).closest('.fixed').find('.header').slideToggle();
});
$('[data-fancybox]').fancybox({
  btnTpl: {
    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small modal-form__close" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' + "</button>"
  }
}); // input count

$(function () {
  (function quantityProducts() {
    var $quantityArrowMinus = $(".input-count__btn_minus");
    var $quantityArrowPlus = $(".input-count__btn_plus");
    var $quantityNum = $(".input-count__input");
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
}); //scroll bar

(function ($) {
  $(window).on('load', function () {
    $('el').mCustomScrollbar({
      axis: 'y',
      // вертикальный скролл
      theme: 'rounded-dark',
      // тема
      scrollInertia: '330',
      // продолжительность прокрутки, значение в миллисекундах
      setHeight: 800,
      // высота блока (переписывает CSS)
      mouseWheel: {
        deltaFactor: 300 // кол-во пикселей на одну прокрутку колёсика мыши

      }
    });
  });
})(jQuery); // tabs


var tabs = document.querySelector(".tabs"); //const activeBtns = document.querySelectorAll(".is-active");

var tabsBtns = tabs.querySelectorAll(".tabs__btn");
var tabsContents = tabs.querySelectorAll(".tabs__content");

function displayCurrentTab(current) {
  for (var i = 0; i < tabsContents.length; i++) {
    tabsContents[i].style.display = current === i ? "block" : "none";
  }
}

displayCurrentTab(0);
tabs.addEventListener("click", function (event) {
  for (var i = 0; i < tabsBtns.length; i++) {
    tabsBtns[i].classList.remove("is-active");
  }

  if (event.target.className === "tabs__btn") {
    for (var _i = 0; _i < tabsBtns.length; _i++) {
      if (event.target === tabsBtns[_i]) {
        displayCurrentTab(_i);
        event.target.classList.add('is-active');
        break;
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=app.b4c67c54beb15f03d9ca.js.map