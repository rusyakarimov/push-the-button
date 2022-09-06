/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.bundle.min.js */ "./resources/js/bootstrap.bundle.min.js");
/* harmony import */ var _bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jquery_mCustomScrollbar_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.mCustomScrollbar.min.js */ "./resources/js/jquery.mCustomScrollbar.min.js");
/* harmony import */ var _jquery_mCustomScrollbar_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jquery_mCustomScrollbar_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jquery_morelines_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jquery.morelines.min.js */ "./resources/js/jquery.morelines.min.js");
/* harmony import */ var _jquery_morelines_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jquery_morelines_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jquery_mousewheel_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jquery.mousewheel.min.js */ "./resources/js/jquery.mousewheel.min.js");
/* harmony import */ var _jquery_mousewheel_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jquery_mousewheel_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _owl_carousel_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owl.carousel.min.js */ "./resources/js/owl.carousel.min.js");
/* harmony import */ var _owl_carousel_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_owl_carousel_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wNumb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wNumb.js */ "./resources/js/wNumb.js");
/* harmony import */ var _wNumb_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wNumb_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nouislider_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nouislider.min.js */ "./resources/js/nouislider.min.js");
/* harmony import */ var _nouislider_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nouislider_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plyr_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plyr.min.js */ "./resources/js/plyr.min.js");
/* harmony import */ var _plyr_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plyr_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _photoswipe_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photoswipe.min.js */ "./resources/js/photoswipe.min.js");
/* harmony import */ var _photoswipe_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_photoswipe_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _photoswipe_ui_default_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photoswipe-ui-default.min.js */ "./resources/js/photoswipe-ui-default.min.js");
/* harmony import */ var _photoswipe_ui_default_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_photoswipe_ui_default_min_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main.js */ "./resources/js/main.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_10__);
// import "./jquery-3.3.1.min.js";












/***/ }),

/***/ "./resources/js/bootstrap.bundle.min.js":
/*!**********************************************!*\
  !*** ./resources/js/bootstrap.bundle.min.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? t(exports, __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (e, t) {
  "use strict";

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function s(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }

  function l(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {},
          t = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function (e) {
        return Object.getOwnPropertyDescriptor(o, e).enumerable;
      }))), t.forEach(function (e) {
        var t, n, i;
        t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = i;
      });
    }

    return r;
  }

  for (var r, n, o, a, c, u, f, h, d, p, m, g, _, v, y, E, b, w, C, T, S, D, A, I, O, N, k, x, P, L, j, H, M, F, W, R, U, B, q, K, Q, Y, V, z, G, J, Z, X, $, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, fe, he, de, pe, me, ge, _e, ve, ye, Ee, be, we = function (i) {
    var t = "transitionend";

    function e(e) {
      var t = this,
          n = !1;
      return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(t);
      }, e), this;
    }

    var l = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(e) {
        for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) {
          ;
        }

        return e;
      },
      getSelectorFromElement: function getSelectorFromElement(e) {
        var t = e.getAttribute("data-target");
        t && "#" !== t || (t = e.getAttribute("href") || "");

        try {
          return document.querySelector(t) ? t : null;
        } catch (e) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
        if (!e) return 0;
        var t = i(e).css("transition-duration");
        return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0;
      },
      reflow: function reflow(e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(e) {
        i(e).trigger(t);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(t);
      },
      isElement: function isElement(e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(e, t, n) {
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
                o = t[i],
                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
          }
        }

        var a;
      }
    };
    return i.fn.emulateTransitionEnd = e, i.event.special[l.TRANSITION_END] = {
      bindType: t,
      delegateType: t,
      handle: function handle(e) {
        if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    }, l;
  }(t = t && t.hasOwnProperty("default") ? t["default"] : t), Ce = (n = "alert", a = "." + (o = "bs.alert"), c = (r = t).fn[n], u = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  }, f = "alert", h = "fade", d = "show", p = function () {
    function i(e) {
      this._element = e;
    }

    var e = i.prototype;
    return e.close = function (e) {
      var t = this._element;
      e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, e.dispose = function () {
      r.removeData(this._element, o), this._element = null;
    }, e._getRootElement = function (e) {
      var t = we.getSelectorFromElement(e),
          n = !1;
      return t && (n = document.querySelector(t)), n || (n = r(e).closest("." + f)[0]), n;
    }, e._triggerCloseEvent = function (e) {
      var t = r.Event(u.CLOSE);
      return r(e).trigger(t), t;
    }, e._removeElement = function (t) {
      var n = this;

      if (r(t).removeClass(d), r(t).hasClass(h)) {
        var e = we.getTransitionDurationFromElement(t);
        r(t).one(we.TRANSITION_END, function (e) {
          return n._destroyElement(t, e);
        }).emulateTransitionEnd(e);
      } else this._destroyElement(t);
    }, e._destroyElement = function (e) {
      r(e).detach().trigger(u.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = r(this),
            t = e.data(o);
        t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this);
      });
    }, i._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }]), i;
  }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () {
    return r.fn[n] = c, p._jQueryInterface;
  }, p), Te = (g = "button", v = "." + (_ = "bs.button"), y = ".data-api", E = (m = t).fn[g], b = "active", w = "btn", T = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', D = "input", A = ".active", I = ".btn", O = {
    CLICK_DATA_API: "click" + v + y,
    FOCUS_BLUR_DATA_API: (C = "focus") + v + y + " blur" + v + y
  }, N = function () {
    function n(e) {
      this._element = e;
    }

    var e = n.prototype;
    return e.toggle = function () {
      var e = !0,
          t = !0,
          n = m(this._element).closest(S)[0];

      if (n) {
        var i = this._element.querySelector(D);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(b)) e = !1;else {
            var r = n.querySelector(A);
            r && m(r).removeClass(b);
          }

          if (e) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(b), m(i).trigger("change");
          }

          i.focus(), t = !1;
        }
      }

      t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && m(this._element).toggleClass(b);
    }, e.dispose = function () {
      m.removeData(this._element, _), this._element = null;
    }, n._jQueryInterface = function (t) {
      return this.each(function () {
        var e = m(this).data(_);
        e || (e = new n(this), m(this).data(_, e)), "toggle" === t && e[t]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }]), n;
  }(), m(document).on(O.CLICK_DATA_API, T, function (e) {
    e.preventDefault();
    var t = e.target;
    m(t).hasClass(w) || (t = m(t).closest(I)), N._jQueryInterface.call(m(t), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, T, function (e) {
    var t = m(e.target).closest(I)[0];
    m(t).toggleClass(C, /^focus(in)?$/.test(e.type));
  }), m.fn[g] = N._jQueryInterface, m.fn[g].Constructor = N, m.fn[g].noConflict = function () {
    return m.fn[g] = E, N._jQueryInterface;
  }, N), Se = (x = "carousel", L = "." + (P = "bs.carousel"), j = ".data-api", H = (k = t).fn[x], M = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0
  }, F = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean"
  }, W = "next", R = "prev", U = "left", B = "right", q = {
    SLIDE: "slide" + L,
    SLID: "slid" + L,
    KEYDOWN: "keydown" + L,
    MOUSEENTER: "mouseenter" + L,
    MOUSELEAVE: "mouseleave" + L,
    TOUCHEND: "touchend" + L,
    LOAD_DATA_API: "load" + L + j,
    CLICK_DATA_API: "click" + L + j
  }, K = "carousel", Q = "active", Y = "slide", V = "carousel-item-right", z = "carousel-item-left", G = "carousel-item-next", J = "carousel-item-prev", Z = ".active", X = ".active.carousel-item", $ = ".carousel-item", ee = ".carousel-item-next, .carousel-item-prev", te = ".carousel-indicators", ne = "[data-slide], [data-slide-to]", ie = '[data-ride="carousel"]', re = function () {
    function o(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = k(e)[0], this._indicatorsElement = this._element.querySelector(te), this._addEventListeners();
    }

    var e = o.prototype;
    return e.next = function () {
      this._isSliding || this._slide(W);
    }, e.nextWhenVisible = function () {
      !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next();
    }, e.prev = function () {
      this._isSliding || this._slide(R);
    }, e.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(ee) && (we.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, e.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, e.to = function (e) {
      var t = this;
      this._activeElement = this._element.querySelector(X);

      var n = this._getItemIndex(this._activeElement);

      if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) k(this._element).one(q.SLID, function () {
        return t.to(e);
      });else {
        if (n === e) return this.pause(), void this.cycle();
        var i = n < e ? W : R;

        this._slide(i, this._items[e]);
      }
    }, e.dispose = function () {
      k(this._element).off(L), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, e._getConfig = function (e) {
      return e = l({}, M, e), we.typeCheckConfig(x, e, F), e;
    }, e._addEventListeners = function () {
      var t = this;
      this._config.keyboard && k(this._element).on(q.KEYDOWN, function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && (k(this._element).on(q.MOUSEENTER, function (e) {
        return t.pause(e);
      }).on(q.MOUSELEAVE, function (e) {
        return t.cycle(e);
      }), ("ontouchstart" in document.documentElement) && k(this._element).on(q.TOUCHEND, function () {
        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
          return t.cycle(e);
        }, 500 + t._config.interval);
      }));
    }, e._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
        case 37:
          e.preventDefault(), this.prev();
          break;

        case 39:
          e.preventDefault(), this.next();
      }
    }, e._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll($)) : [], this._items.indexOf(e);
    }, e._getItemByDirection = function (e, t) {
      var n = e === W,
          i = e === R,
          r = this._getItemIndex(t),
          o = this._items.length - 1;

      if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
      var s = (r + (e === R ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, e._triggerSlideEvent = function (e, t) {
      var n = this._getItemIndex(e),
          i = this._getItemIndex(this._element.querySelector(X)),
          r = k.Event(q.SLIDE, {
        relatedTarget: e,
        direction: t,
        from: i,
        to: n
      });

      return k(this._element).trigger(r), r;
    }, e._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
        k(t).removeClass(Q);

        var n = this._indicatorsElement.children[this._getItemIndex(e)];

        n && k(n).addClass(Q);
      }
    }, e._slide = function (e, t) {
      var n,
          i,
          r,
          o = this,
          s = this._element.querySelector(X),
          a = this._getItemIndex(s),
          l = t || s && this._getItemByDirection(e, s),
          c = this._getItemIndex(l),
          u = Boolean(this._interval);

      if (e === W ? (n = z, i = G, r = U) : (n = V, i = J, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
        this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
        var f = k.Event(q.SLID, {
          relatedTarget: l,
          direction: r,
          from: a,
          to: c
        });

        if (k(this._element).hasClass(Y)) {
          k(l).addClass(i), we.reflow(l), k(s).addClass(n), k(l).addClass(n);
          var h = we.getTransitionDurationFromElement(s);
          k(s).one(we.TRANSITION_END, function () {
            k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
              return k(o._element).trigger(f);
            }, 0);
          }).emulateTransitionEnd(h);
        } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(f);

        u && this.cycle();
      }
    }, o._jQueryInterface = function (i) {
      return this.each(function () {
        var e = k(this).data(P),
            t = l({}, M, k(this).data());
        "object" == _typeof(i) && (t = l({}, t, i));
        var n = "string" == typeof i ? i : t.slide;
        if (e || (e = new o(this, t), k(this).data(P, e)), "number" == typeof i) e.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        } else t.interval && (e.pause(), e.cycle());
      });
    }, o._dataApiClickHandler = function (e) {
      var t = we.getSelectorFromElement(this);

      if (t) {
        var n = k(t)[0];

        if (n && k(n).hasClass(K)) {
          var i = l({}, k(n).data(), k(this).data()),
              r = this.getAttribute("data-slide-to");
          r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), e.preventDefault();
        }
      }
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return M;
      }
    }]), o;
  }(), k(document).on(q.CLICK_DATA_API, ne, re._dataApiClickHandler), k(window).on(q.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(ie)), t = 0, n = e.length; t < n; t++) {
      var i = k(e[t]);

      re._jQueryInterface.call(i, i.data());
    }
  }), k.fn[x] = re._jQueryInterface, k.fn[x].Constructor = re, k.fn[x].noConflict = function () {
    return k.fn[x] = H, re._jQueryInterface;
  }, re), De = (se = "collapse", le = "." + (ae = "bs.collapse"), ce = (oe = t).fn[se], ue = {
    toggle: !0,
    parent: ""
  }, fe = {
    toggle: "boolean",
    parent: "(string|element)"
  }, he = {
    SHOW: "show" + le,
    SHOWN: "shown" + le,
    HIDE: "hide" + le,
    HIDDEN: "hidden" + le,
    CLICK_DATA_API: "click" + le + ".data-api"
  }, de = "show", pe = "collapse", me = "collapsing", ge = "collapsed", _e = "width", ve = "height", ye = ".show, .collapsing", Ee = '[data-toggle="collapse"]', be = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = oe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(Ee)), i = 0, r = n.length; i < r; i++) {
        var o = n[i],
            s = we.getSelectorFromElement(o),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
          return e === t;
        });
        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var e = a.prototype;
    return e.toggle = function () {
      oe(this._element).hasClass(de) ? this.hide() : this.show();
    }, e.show = function () {
      var e,
          t,
          n = this;

      if (!this._isTransitioning && !oe(this._element).hasClass(de) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(ye)).filter(function (e) {
        return e.getAttribute("data-parent") === n._config.parent;
      })).length && (e = null), !(e && (t = oe(e).not(this._selector).data(ae)) && t._isTransitioning))) {
        var i = oe.Event(he.SHOW);

        if (oe(this._element).trigger(i), !i.isDefaultPrevented()) {
          e && (a._jQueryInterface.call(oe(e).not(this._selector), "hide"), t || oe(e).data(ae, null));

          var r = this._getDimension();

          oe(this._element).removeClass(pe).addClass(me), this._element.style[r] = 0, this._triggerArray.length && oe(this._triggerArray).removeClass(ge).attr("aria-expanded", !0), this.setTransitioning(!0);
          var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              s = we.getTransitionDurationFromElement(this._element);
          oe(this._element).one(we.TRANSITION_END, function () {
            oe(n._element).removeClass(me).addClass(pe).addClass(de), n._element.style[r] = "", n.setTransitioning(!1), oe(n._element).trigger(he.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px";
        }
      }
    }, e.hide = function () {
      var e = this;

      if (!this._isTransitioning && oe(this._element).hasClass(de)) {
        var t = oe.Event(he.HIDE);

        if (oe(this._element).trigger(t), !t.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", we.reflow(this._element), oe(this._element).addClass(me).removeClass(pe).removeClass(de);
          var i = this._triggerArray.length;
          if (0 < i) for (var r = 0; r < i; r++) {
            var o = this._triggerArray[r],
                s = we.getSelectorFromElement(o);
            if (null !== s) oe([].slice.call(document.querySelectorAll(s))).hasClass(de) || oe(o).addClass(ge).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var a = we.getTransitionDurationFromElement(this._element);
          oe(this._element).one(we.TRANSITION_END, function () {
            e.setTransitioning(!1), oe(e._element).removeClass(me).addClass(pe).trigger(he.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, e.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, e.dispose = function () {
      oe.removeData(this._element, ae), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, e._getConfig = function (e) {
      return (e = l({}, ue, e)).toggle = Boolean(e.toggle), we.typeCheckConfig(se, e, fe), e;
    }, e._getDimension = function () {
      return oe(this._element).hasClass(_e) ? _e : ve;
    }, e._getParent = function () {
      var n = this,
          e = null;
      we.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
      var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(e.querySelectorAll(t));
      return oe(i).each(function (e, t) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
      }), e;
    }, e._addAriaAndCollapsedClass = function (e, t) {
      if (e) {
        var n = oe(e).hasClass(de);
        t.length && oe(t).toggleClass(ge, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (e) {
      var t = we.getSelectorFromElement(e);
      return t ? document.querySelector(t) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var e = oe(this),
            t = e.data(ae),
            n = l({}, ue, e.data(), "object" == _typeof(i) && i ? i : {});

        if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ae, t)), "string" == typeof i) {
          if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
          t[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return ue;
      }
    }]), a;
  }(), oe(document).on(he.CLICK_DATA_API, Ee, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = oe(this),
        t = we.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(t));
    oe(i).each(function () {
      var e = oe(this),
          t = e.data(ae) ? "toggle" : n.data();

      be._jQueryInterface.call(e, t);
    });
  }), oe.fn[se] = be._jQueryInterface, oe.fn[se].Constructor = be, oe.fn[se].noConflict = function () {
    return oe.fn[se] = ce, be._jQueryInterface;
  }, be), Ae = "undefined" != typeof window && "undefined" != typeof document, Ie = ["Edge", "Trident", "Firefox"], Oe = 0, Ne = 0; Ne < Ie.length; Ne += 1) {
    if (Ae && 0 <= navigator.userAgent.indexOf(Ie[Ne])) {
      Oe = 1;
      break;
    }
  }

  var ke = Ae && window.Promise ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, Oe));
    };
  };

  function xe(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }

  function Pe(e, t) {
    if (1 !== e.nodeType) return [];
    var n = getComputedStyle(e, null);
    return t ? n[t] : n;
  }

  function Le(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }

  function je(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;

      case "#document":
        return e.body;
    }

    var t = Pe(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + r + i) ? e : je(Le(e));
  }

  var He = Ae && !(!window.MSInputMethodContext || !document.documentMode),
      Me = Ae && /MSIE 10/.test(navigator.userAgent);

  function Fe(e) {
    return 11 === e ? He : 10 === e ? Me : He || Me;
  }

  function We(e) {
    if (!e) return document.documentElement;

    for (var t = Fe(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Pe(n, "position") ? We(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function Re(e) {
    return null !== e.parentNode ? Re(e.parentNode) : e;
  }

  function Ue(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        r = n ? t : e,
        o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var s,
        a,
        l = o.commonAncestorContainer;
    if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && We(s.firstElementChild) !== s ? We(l) : l;
    var c = Re(e);
    return c.host ? Ue(c.host, t) : Ue(e, Re(t).host);
  }

  function Be(e) {
    var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = e.nodeName;

    if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement;
      return (e.ownerDocument.scrollingElement || i)[t];
    }

    return e[t];
  }

  function qe(e, t) {
    var n = "x" === t ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";
    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
  }

  function Ke(e, t, n, i) {
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Fe(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
  }

  function Qe() {
    var e = document.body,
        t = document.documentElement,
        n = Fe(10) && getComputedStyle(t);
    return {
      height: Ke("Height", e, t, n),
      width: Ke("Width", e, t, n)
    };
  }

  var Ye = function () {
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    return function (e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    };
  }(),
      Ve = function Ve(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  },
      ze = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }

    return e;
  };

  function Ge(e) {
    return ze({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function Je(e) {
    var t = {};

    try {
      if (Fe(10)) {
        t = e.getBoundingClientRect();
        var n = Be(e, "top"),
            i = Be(e, "left");
        t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}

    var r = {
      left: t.left,
      top: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top
    },
        o = "HTML" === e.nodeName ? Qe() : {},
        s = o.width || e.clientWidth || r.right - r.left,
        a = o.height || e.clientHeight || r.bottom - r.top,
        l = e.offsetWidth - s,
        c = e.offsetHeight - a;

    if (l || c) {
      var u = Pe(e);
      l -= qe(u, "x"), c -= qe(u, "y"), r.width -= l, r.height -= c;
    }

    return Ge(r);
  }

  function Ze(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = Fe(10),
        r = "HTML" === t.nodeName,
        o = Je(e),
        s = Je(t),
        a = je(e),
        l = Pe(t),
        c = parseFloat(l.borderTopWidth, 10),
        u = parseFloat(l.borderLeftWidth, 10);
    n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
    var f = Ge({
      top: o.top - s.top - c,
      left: o.left - s.left - u,
      width: o.width,
      height: o.height
    });

    if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
      var h = parseFloat(l.marginTop, 10),
          d = parseFloat(l.marginLeft, 10);
      f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d;
    }

    return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          i = Be(t, "top"),
          r = Be(t, "left"),
          o = n ? -1 : 1;
      return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e;
    }(f, t)), f;
  }

  function Xe(e) {
    if (!e || !e.parentElement || Fe()) return document.documentElement;

    for (var t = e.parentElement; t && "none" === Pe(t, "transform");) {
      t = t.parentElement;
    }

    return t || document.documentElement;
  }

  function $e(e, t, n, i) {
    var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        o = {
      top: 0,
      left: 0
    },
        s = r ? Xe(e) : Ue(e, t);
    if ("viewport" === i) o = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = Ze(e, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : Be(n),
          a = t ? 0 : Be(n, "left");
      return Ge({
        top: s - i.top + i.marginTop,
        left: a - i.left + i.marginLeft,
        width: r,
        height: o
      });
    }(s, r);else {
      var a = void 0;
      "scrollParent" === i ? "BODY" === (a = je(Le(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
      var l = Ze(a, s, r);
      if ("HTML" !== a.nodeName || function e(t) {
        var n = t.nodeName;
        return "BODY" !== n && "HTML" !== n && ("fixed" === Pe(t, "position") || e(Le(t)));
      }(s)) o = l;else {
        var c = Qe(),
            u = c.height,
            f = c.width;
        o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left;
      }
    }
    return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o;
  }

  function et(e, t, i, n, r) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var s = $e(i, n, o, r),
        a = {
      top: {
        width: s.width,
        height: t.top - s.top
      },
      right: {
        width: s.right - t.right,
        height: s.height
      },
      bottom: {
        width: s.width,
        height: s.bottom - t.bottom
      },
      left: {
        width: t.left - s.left,
        height: s.height
      }
    },
        l = Object.keys(a).map(function (e) {
      return ze({
        key: e
      }, a[e], {
        area: (t = a[e], t.width * t.height)
      });
      var t;
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        c = l.filter(function (e) {
      var t = e.width,
          n = e.height;
      return t >= i.clientWidth && n >= i.clientHeight;
    }),
        u = 0 < c.length ? c[0].key : l[0].key,
        f = e.split("-")[1];
    return u + (f ? "-" + f : "");
  }

  function tt(e, t, n) {
    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return Ze(n, i ? Xe(t) : Ue(t, n), i);
  }

  function nt(e) {
    var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    return {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    };
  }

  function it(e) {
    var t = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function rt(e, t, n) {
    n = n.split("-")[0];
    var i = nt(e),
        r = {
      width: i.width,
      height: i.height
    },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";
    return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[it(a)], r;
  }

  function ot(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function st(e, n, t) {
    return (void 0 === t ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });
      var i = ot(e, function (e) {
        return e[t] === n;
      });
      return e.indexOf(i);
    }(e, "name", t))).forEach(function (e) {
      e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var t = e["function"] || e.fn;
      e.enabled && xe(t) && (n.offsets.popper = Ge(n.offsets.popper), n.offsets.reference = Ge(n.offsets.reference), n = t(n, e));
    }), n;
  }

  function at(e, n) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === n;
    });
  }

  function lt(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var r = t[i],
          o = r ? "" + r + n : e;
      if ("undefined" != typeof document.body.style[o]) return o;
    }

    return null;
  }

  function ct(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function ut(e, t, n, i) {
    n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var r = je(e);
    return function e(t, n, i, r) {
      var o = "BODY" === t.nodeName,
          s = o ? t.ownerDocument.defaultView : t;
      s.addEventListener(n, i, {
        passive: !0
      }), o || e(je(s.parentNode), n, i, r), r.push(s);
    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
  }

  function ft() {
    var e, t;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }

  function ht(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function dt(n, i) {
    Object.keys(i).forEach(function (e) {
      var t = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ht(i[e]) && (t = "px"), n.style[e] = i[e] + t;
    });
  }

  function pt(e, t, n) {
    var i = ot(e, function (e) {
      return e.name === t;
    }),
        r = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });

    if (!r) {
      var o = "`" + t + "`",
          s = "`" + n + "`";
      console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }

    return r;
  }

  var mt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      gt = mt.slice(3);

  function _t(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = gt.indexOf(e),
        i = gt.slice(n + 1).concat(gt.slice(0, n));
    return t ? i.reverse() : i;
  }

  var vt = "flip",
      yt = "clockwise",
      Et = "counterclockwise";

  function bt(e, r, o, t) {
    var s = [0, 0],
        a = -1 !== ["right", "left"].indexOf(t),
        n = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        i = n.indexOf(ot(n, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
    return (c = c.map(function (e, t) {
      var n = (1 === t ? !a : a) ? "height" : "width",
          i = !1;
      return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +r[1],
              s = r[2];
          if (!o) return e;

          if (0 === s.indexOf("%")) {
            var a = void 0;

            switch (s) {
              case "%p":
                a = n;
                break;

              case "%":
              case "%r":
              default:
                a = i;
            }

            return Ge(a)[t] / 100 * o;
          }

          if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
          return o;
        }(e, n, r, o);
      });
    })).forEach(function (n, i) {
      n.forEach(function (e, t) {
        ht(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1));
      });
    }), s;
  }

  var wt = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];

          if (i) {
            var r = e.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = {
              start: Ve({}, l, o[l]),
              end: Ve({}, l, o[l] + o[c] - s[c])
            };
            e.offsets.popper = ze({}, s, u[i]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              r = e.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;
          return l = ht(+n) ? [+n, 0] : bt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, i) {
          var t = i.boundariesElement || We(e.instance.popper);
          e.instance.reference === t && (t = We(t));
          var n = lt("transform"),
              r = e.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[n];
          r.top = "", r.left = "", r[n] = "";
          var l = $e(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
          r.top = o, r.left = s, r[n] = a, i.boundaries = l;
          var c = i.priority,
              u = e.offsets.popper,
              f = {
            primary: function primary(e) {
              var t = u[e];
              return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), Ve({}, e, t);
            },
            secondary: function secondary(e) {
              var t = "right" === e ? "left" : "top",
                  n = u[t];
              return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), Ve({}, t, n);
            }
          };
          return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
            u = ze({}, u, f[t](e));
          }), e.offsets.popper = u, e;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              i = t.reference,
              r = e.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
          return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, t) {
          var n;
          if (!pt(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var i = t.element;

          if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;

          var r = e.placement.split("-")[0],
              o = e.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              u = l ? "Top" : "Left",
              f = u.toLowerCase(),
              h = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = nt(i)[c];
          a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = Ge(e.offsets.popper);

          var m = a[f] + a[c] / 2 - p / 2,
              g = Pe(e.instance.popper),
              _ = parseFloat(g["margin" + u], 10),
              v = parseFloat(g["border" + u + "Width"], 10),
              y = m - e.offsets.popper[f] - _ - v;

          return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ve(n = {}, f, Math.round(y)), Ve(n, h, ""), n), e;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(p, m) {
          if (at(p.instance.modifiers, "inner")) return p;
          if (p.flipped && p.placement === p.originalPlacement) return p;
          var g = $e(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
              _ = p.placement.split("-")[0],
              v = it(_),
              y = p.placement.split("-")[1] || "",
              E = [];

          switch (m.behavior) {
            case vt:
              E = [_, v];
              break;

            case yt:
              E = _t(_);
              break;

            case Et:
              E = _t(_, !0);
              break;

            default:
              E = m.behavior;
          }

          return E.forEach(function (e, t) {
            if (_ !== e || E.length === t + 1) return p;
            _ = p.placement.split("-")[0], v = it(_);
            var n,
                i = p.offsets.popper,
                r = p.offsets.reference,
                o = Math.floor,
                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                a = o(i.left) < o(g.left),
                l = o(i.right) > o(g.right),
                c = o(i.top) < o(g.top),
                u = o(i.bottom) > o(g.bottom),
                f = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && u,
                h = -1 !== ["top", "bottom"].indexOf(_),
                d = !!m.flipVariations && (h && "start" === y && a || h && "end" === y && l || !h && "start" === y && c || !h && "end" === y && u);
            (s || f || d) && (p.flipped = !0, (s || f) && (_ = E[t + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = ze({}, p.offsets.popper, rt(p.instance.popper, p.offsets.reference, p.placement)), p = st(p.instance.modifiers, p, "flip"));
          }), p;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
          return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Ge(r), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!pt(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference,
              n = ot(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;

          if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.x,
              i = t.y,
              r = e.offsets.popper,
              o = ot(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;
          void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var s = void 0 !== o ? o : t.gpuAcceleration,
              a = Je(We(e.instance.popper)),
              l = {
            position: r.position
          },
              c = {
            left: Math.floor(r.left),
            top: Math.round(r.top),
            bottom: Math.round(r.bottom),
            right: Math.floor(r.right)
          },
              u = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              h = lt("transform"),
              d = void 0,
              p = void 0;
          if (p = "bottom" === u ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && h) l[h] = "translate3d(" + d + "px, " + p + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform";else {
            var m = "bottom" === u ? -1 : 1,
                g = "right" === f ? -1 : 1;
            l[u] = p * m, l[f] = d * g, l.willChange = u + ", " + f;
          }
          var _ = {
            "x-placement": e.placement
          };
          return e.attributes = ze({}, _, e.attributes), e.styles = ze({}, l, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          var t, n;
          return dt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, n, i, r) {
          var o = tt(r, t, e, n.positionFixed),
              s = et(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return t.setAttribute("x-placement", s), dt(t, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  },
      Ct = function () {
    function o(e, t) {
      var n = this,
          i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, o), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = ke(this.update.bind(this)), this.options = ze({}, o.Defaults, i), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, o.Defaults.modifiers, i.modifiers)).forEach(function (e) {
        n.options.modifiers[e] = ze({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return ze({
          name: e
        }, n.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (e) {
        e.enabled && xe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
      }), this.update();
      var r = this.options.eventsEnabled;
      r && this.enableEventListeners(), this.state.eventsEnabled = r;
    }

    return Ye(o, [{
      key: "update",
      value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = rt(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      }
    }, {
      key: "destroy",
      value: function value() {
        return function () {
          return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = ut(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function value() {
        return ft.call(this);
      }
    }]), o;
  }();

  Ct.Utils = ("undefined" != typeof window ? window : __webpack_require__.g).PopperUtils, Ct.placements = mt, Ct.Defaults = wt;

  var Tt,
      St,
      Dt,
      At,
      It,
      Ot,
      Nt,
      kt,
      xt,
      Pt,
      Lt,
      jt,
      Ht,
      Mt,
      Ft,
      Wt,
      Rt,
      Ut,
      Bt,
      qt,
      Kt,
      Qt,
      Yt,
      Vt,
      zt,
      Gt,
      Jt,
      Zt,
      Xt,
      $t,
      en,
      tn,
      nn,
      rn,
      on,
      sn,
      an,
      ln,
      cn,
      un,
      fn,
      hn,
      dn,
      pn,
      mn,
      gn,
      _n,
      vn,
      yn,
      En,
      bn,
      wn,
      Cn,
      Tn,
      Sn,
      Dn,
      An,
      In,
      On,
      Nn,
      kn,
      xn,
      Pn,
      Ln,
      jn,
      Hn,
      Mn,
      Fn,
      Wn,
      Rn,
      Un,
      Bn,
      qn,
      Kn,
      Qn,
      Yn,
      Vn,
      zn,
      Gn,
      Jn,
      Zn,
      Xn,
      $n,
      ei,
      ti,
      ni,
      ii,
      ri,
      oi,
      si,
      ai,
      li,
      ci,
      ui,
      fi,
      hi,
      di,
      pi,
      mi,
      gi,
      _i,
      vi,
      yi,
      Ei,
      bi,
      wi,
      Ci,
      Ti,
      Si,
      Di,
      Ai,
      Ii,
      Oi,
      Ni,
      ki,
      xi,
      Pi,
      Li,
      ji,
      Hi,
      Mi,
      Fi,
      Wi,
      Ri,
      Ui,
      Bi = (St = "dropdown", At = "." + (Dt = "bs.dropdown"), It = ".data-api", Ot = (Tt = t).fn[St], Nt = new RegExp("38|40|27"), kt = {
    HIDE: "hide" + At,
    HIDDEN: "hidden" + At,
    SHOW: "show" + At,
    SHOWN: "shown" + At,
    CLICK: "click" + At,
    CLICK_DATA_API: "click" + At + It,
    KEYDOWN_DATA_API: "keydown" + At + It,
    KEYUP_DATA_API: "keyup" + At + It
  }, xt = "disabled", Pt = "show", Lt = "dropup", jt = "dropright", Ht = "dropleft", Mt = "dropdown-menu-right", Ft = "position-static", Wt = '[data-toggle="dropdown"]', Rt = ".dropdown form", Ut = ".dropdown-menu", Bt = ".navbar-nav", qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Kt = "top-start", Qt = "top-end", Yt = "bottom-start", Vt = "bottom-end", zt = "right-start", Gt = "left-start", Jt = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  }, Zt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  }, Xt = function () {
    function c(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var e = c.prototype;
    return e.toggle = function () {
      if (!this._element.disabled && !Tt(this._element).hasClass(xt)) {
        var e = c._getParentFromElement(this._element),
            t = Tt(this._menu).hasClass(Pt);

        if (c._clearMenus(), !t) {
          var n = {
            relatedTarget: this._element
          },
              i = Tt.Event(kt.SHOW, n);

          if (Tt(e).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof Ct) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var r = this._element;
              "parent" === this._config.reference ? r = e : we.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && Tt(e).addClass(Ft), this._popper = new Ct(r, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === Tt(e).closest(Bt).length && Tt(document.body).children().on("mouseover", null, Tt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Tt(this._menu).toggleClass(Pt), Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN, n));
          }
        }
      }
    }, e.dispose = function () {
      Tt.removeData(this._element, Dt), Tt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, e.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, e._addEventListeners = function () {
      var t = this;
      Tt(this._element).on(kt.CLICK, function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, e._getConfig = function (e) {
      return e = l({}, this.constructor.Default, Tt(this._element).data(), e), we.typeCheckConfig(St, e, this.constructor.DefaultType), e;
    }, e._getMenuElement = function () {
      if (!this._menu) {
        var e = c._getParentFromElement(this._element);

        e && (this._menu = e.querySelector(Ut));
      }

      return this._menu;
    }, e._getPlacement = function () {
      var e = Tt(this._element.parentNode),
          t = Yt;
      return e.hasClass(Lt) ? (t = Kt, Tt(this._menu).hasClass(Mt) && (t = Qt)) : e.hasClass(jt) ? t = zt : e.hasClass(Ht) ? t = Gt : Tt(this._menu).hasClass(Mt) && (t = Vt), t;
    }, e._detectNavbar = function () {
      return 0 < Tt(this._element).closest(".navbar").length;
    }, e._getPopperConfig = function () {
      var t = this,
          e = {};
      "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = l({}, e.offsets, t._config.offset(e.offsets) || {}), e;
      } : e.offset = this._config.offset;
      var n = {
        placement: this._getPlacement(),
        modifiers: {
          offset: e,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (n.modifiers.applyStyle = {
        enabled: !1
      }), n;
    }, c._jQueryInterface = function (t) {
      return this.each(function () {
        var e = Tt(this).data(Dt);

        if (e || (e = new c(this, "object" == _typeof(t) ? t : null), Tt(this).data(Dt, e)), "string" == typeof t) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, c._clearMenus = function (e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var t = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = t.length; n < i; n++) {
        var r = c._getParentFromElement(t[n]),
            o = Tt(t[n]).data(Dt),
            s = {
          relatedTarget: t[n]
        };

        if (e && "click" === e.type && (s.clickEvent = e), o) {
          var a = o._menu;

          if (Tt(r).hasClass(Pt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Tt.contains(r, e.target))) {
            var l = Tt.Event(kt.HIDE, s);
            Tt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Tt(document.body).children().off("mouseover", null, Tt.noop), t[n].setAttribute("aria-expanded", "false"), Tt(a).removeClass(Pt), Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (e) {
      var t,
          n = we.getSelectorFromElement(e);
      return n && (t = document.querySelector(n)), t || e.parentNode;
    }, c._dataApiKeydownHandler = function (e) {
      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Tt(e.target).closest(Ut).length)) : Nt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Tt(this).hasClass(xt))) {
        var t = c._getParentFromElement(this),
            n = Tt(t).hasClass(Pt);

        if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
          var i = [].slice.call(t.querySelectorAll(qt));

          if (0 !== i.length) {
            var r = i.indexOf(e.target);
            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === e.which) {
            var o = t.querySelector(Wt);
            Tt(o).trigger("focus");
          }

          Tt(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return Jt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zt;
      }
    }]), c;
  }(), Tt(document).on(kt.KEYDOWN_DATA_API, Wt, Xt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, Ut, Xt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Xt._clearMenus).on(kt.CLICK_DATA_API, Wt, function (e) {
    e.preventDefault(), e.stopPropagation(), Xt._jQueryInterface.call(Tt(this), "toggle");
  }).on(kt.CLICK_DATA_API, Rt, function (e) {
    e.stopPropagation();
  }), Tt.fn[St] = Xt._jQueryInterface, Tt.fn[St].Constructor = Xt, Tt.fn[St].noConflict = function () {
    return Tt.fn[St] = Ot, Xt._jQueryInterface;
  }, Xt),
      qi = (en = "modal", nn = "." + (tn = "bs.modal"), rn = ($t = t).fn[en], on = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  }, sn = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  }, an = {
    HIDE: "hide" + nn,
    HIDDEN: "hidden" + nn,
    SHOW: "show" + nn,
    SHOWN: "shown" + nn,
    FOCUSIN: "focusin" + nn,
    RESIZE: "resize" + nn,
    CLICK_DISMISS: "click.dismiss" + nn,
    KEYDOWN_DISMISS: "keydown.dismiss" + nn,
    MOUSEUP_DISMISS: "mouseup.dismiss" + nn,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + nn,
    CLICK_DATA_API: "click" + nn + ".data-api"
  }, ln = "modal-scrollbar-measure", cn = "modal-backdrop", un = "modal-open", fn = "fade", hn = "show", dn = ".modal-dialog", pn = '[data-toggle="modal"]', mn = '[data-dismiss="modal"]', gn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _n = ".sticky-top", vn = function () {
    function r(e, t) {
      this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(dn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }

    var e = r.prototype;
    return e.toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, e.show = function (e) {
      var t = this;

      if (!this._isTransitioning && !this._isShown) {
        $t(this._element).hasClass(fn) && (this._isTransitioning = !0);
        var n = $t.Event(an.SHOW, {
          relatedTarget: e
        });
        $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(un), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(an.CLICK_DISMISS, mn, function (e) {
          return t.hide(e);
        }), $t(this._dialog).on(an.MOUSEDOWN_DISMISS, function () {
          $t(t._element).one(an.MOUSEUP_DISMISS, function (e) {
            $t(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return t._showElement(e);
        }));
      }
    }, e.hide = function (e) {
      var t = this;

      if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = $t.Event(an.HIDE);

        if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = $t(this._element).hasClass(fn);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(an.FOCUSIN), $t(this._element).removeClass(hn), $t(this._element).off(an.CLICK_DISMISS), $t(this._dialog).off(an.MOUSEDOWN_DISMISS), i) {
            var r = we.getTransitionDurationFromElement(this._element);
            $t(this._element).one(we.TRANSITION_END, function (e) {
              return t._hideModal(e);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, e.dispose = function () {
      $t.removeData(this._element, tn), $t(window, document, this._element, this._backdrop).off(nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, e.handleUpdate = function () {
      this._adjustDialog();
    }, e._getConfig = function (e) {
      return e = l({}, on, e), we.typeCheckConfig(en, e, sn), e;
    }, e._showElement = function (e) {
      var t = this,
          n = $t(this._element).hasClass(fn);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && we.reflow(this._element), $t(this._element).addClass(hn), this._config.focus && this._enforceFocus();

      var i = $t.Event(an.SHOWN, {
        relatedTarget: e
      }),
          r = function r() {
        t._config.focus && t._element.focus(), t._isTransitioning = !1, $t(t._element).trigger(i);
      };

      if (n) {
        var o = we.getTransitionDurationFromElement(this._element);
        $t(this._dialog).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
      } else r();
    }, e._enforceFocus = function () {
      var t = this;
      $t(document).off(an.FOCUSIN).on(an.FOCUSIN, function (e) {
        document !== e.target && t._element !== e.target && 0 === $t(t._element).has(e.target).length && t._element.focus();
      });
    }, e._setEscapeEvent = function () {
      var t = this;
      this._isShown && this._config.keyboard ? $t(this._element).on(an.KEYDOWN_DISMISS, function (e) {
        27 === e.which && (e.preventDefault(), t.hide());
      }) : this._isShown || $t(this._element).off(an.KEYDOWN_DISMISS);
    }, e._setResizeEvent = function () {
      var t = this;
      this._isShown ? $t(window).on(an.RESIZE, function (e) {
        return t.handleUpdate(e);
      }) : $t(window).off(an.RESIZE);
    }, e._hideModal = function () {
      var e = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        $t(document.body).removeClass(un), e._resetAdjustments(), e._resetScrollbar(), $t(e._element).trigger(an.HIDDEN);
      });
    }, e._removeBackdrop = function () {
      this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null);
    }, e._showBackdrop = function (e) {
      var t = this,
          n = $t(this._element).hasClass(fn) ? fn : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = cn, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(an.CLICK_DISMISS, function (e) {
          t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide());
        }), n && we.reflow(this._backdrop), $t(this._backdrop).addClass(hn), !e) return;
        if (!n) return void e();
        var i = we.getTransitionDurationFromElement(this._backdrop);
        $t(this._backdrop).one(we.TRANSITION_END, e).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        $t(this._backdrop).removeClass(hn);

        var r = function r() {
          t._removeBackdrop(), e && e();
        };

        if ($t(this._element).hasClass(fn)) {
          var o = we.getTransitionDurationFromElement(this._backdrop);
          $t(this._backdrop).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();
      } else e && e();
    }, e._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, e._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, e._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();
      this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, e._setScrollbar = function () {
      var r = this;

      if (this._isBodyOverflowing) {
        var e = [].slice.call(document.querySelectorAll(gn)),
            t = [].slice.call(document.querySelectorAll(_n));
        $t(e).each(function (e, t) {
          var n = t.style.paddingRight,
              i = $t(t).css("padding-right");
          $t(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), $t(t).each(function (e, t) {
          var n = t.style.marginRight,
              i = $t(t).css("margin-right");
          $t(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = $t(document.body).css("padding-right");
        $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }
    }, e._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(gn));
      $t(e).each(function (e, t) {
        var n = $t(t).data("padding-right");
        $t(t).removeData("padding-right"), t.style.paddingRight = n || "";
      });
      var t = [].slice.call(document.querySelectorAll("" + _n));
      $t(t).each(function (e, t) {
        var n = $t(t).data("margin-right");
        "undefined" != typeof n && $t(t).css("margin-right", n).removeData("margin-right");
      });
      var n = $t(document.body).data("padding-right");
      $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, e._getScrollbarWidth = function () {
      var e = document.createElement("div");
      e.className = ln, document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var e = $t(this).data(tn),
            t = l({}, on, $t(this).data(), "object" == _typeof(n) && n ? n : {});

        if (e || (e = new r(this, t), $t(this).data(tn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](i);
        } else t.show && e.show(i);
      });
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return on;
      }
    }]), r;
  }(), $t(document).on(an.CLICK_DATA_API, pn, function (e) {
    var t,
        n = this,
        i = we.getSelectorFromElement(this);
    i && (t = document.querySelector(i));
    var r = $t(t).data(tn) ? "toggle" : l({}, $t(t).data(), $t(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var o = $t(t).one(an.SHOW, function (e) {
      e.isDefaultPrevented() || o.one(an.HIDDEN, function () {
        $t(n).is(":visible") && n.focus();
      });
    });

    vn._jQueryInterface.call($t(t), r, this);
  }), $t.fn[en] = vn._jQueryInterface, $t.fn[en].Constructor = vn, $t.fn[en].noConflict = function () {
    return $t.fn[en] = rn, vn._jQueryInterface;
  }, vn),
      Ki = (En = "tooltip", wn = "." + (bn = "bs.tooltip"), Cn = (yn = t).fn[En], Tn = "bs-tooltip", Sn = new RegExp("(^|\\s)" + Tn + "\\S+", "g"), In = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !(An = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    }),
    selector: !(Dn = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    }),
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent"
  }, Nn = "out", kn = {
    HIDE: "hide" + wn,
    HIDDEN: "hidden" + wn,
    SHOW: (On = "show") + wn,
    SHOWN: "shown" + wn,
    INSERTED: "inserted" + wn,
    CLICK: "click" + wn,
    FOCUSIN: "focusin" + wn,
    FOCUSOUT: "focusout" + wn,
    MOUSEENTER: "mouseenter" + wn,
    MOUSELEAVE: "mouseleave" + wn
  }, xn = "fade", Pn = "show", Ln = ".tooltip-inner", jn = ".arrow", Hn = "hover", Mn = "focus", Fn = "click", Wn = "manual", Rn = function () {
    function i(e, t) {
      if ("undefined" == typeof Ct) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }

    var e = i.prototype;
    return e.enable = function () {
      this._isEnabled = !0;
    }, e.disable = function () {
      this._isEnabled = !1;
    }, e.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, e.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var t = this.constructor.DATA_KEY,
            n = yn(e.currentTarget).data(t);
        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (yn(this.getTipElement()).hasClass(Pn)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, e.dispose = function () {
      clearTimeout(this._timeout), yn.removeData(this.element, this.constructor.DATA_KEY), yn(this.element).off(this.constructor.EVENT_KEY), yn(this.element).closest(".modal").off("hide.bs.modal"), this.tip && yn(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, e.show = function () {
      var t = this;
      if ("none" === yn(this.element).css("display")) throw new Error("Please use show on visible elements");
      var e = yn.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        yn(this.element).trigger(e);
        var n = yn.contains(this.element.ownerDocument.documentElement, this.element);
        if (e.isDefaultPrevented() || !n) return;
        var i = this.getTipElement(),
            r = we.getUID(this.constructor.NAME);
        i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && yn(i).addClass(xn);

        var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            s = this._getAttachment(o);

        this.addAttachmentClass(s);
        var a = !1 === this.config.container ? document.body : yn(document).find(this.config.container);
        yn(i).data(this.constructor.DATA_KEY, this), yn.contains(this.element.ownerDocument.documentElement, this.tip) || yn(i).appendTo(a), yn(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ct(this.element, i, {
          placement: s,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: jn
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(e) {
            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
          },
          onUpdate: function onUpdate(e) {
            t._handlePopperPlacementChange(e);
          }
        }), yn(i).addClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().on("mouseover", null, yn.noop);

        var l = function l() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, yn(t.element).trigger(t.constructor.Event.SHOWN), e === Nn && t._leave(null, t);
        };

        if (yn(this.tip).hasClass(xn)) {
          var c = we.getTransitionDurationFromElement(this.tip);
          yn(this.tip).one(we.TRANSITION_END, l).emulateTransitionEnd(c);
        } else l();
      }
    }, e.hide = function (e) {
      var t = this,
          n = this.getTipElement(),
          i = yn.Event(this.constructor.Event.HIDE),
          r = function r() {
        t._hoverState !== On && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), yn(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e();
      };

      if (yn(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (yn(n).removeClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().off("mouseover", null, yn.noop), this._activeTrigger[Fn] = !1, this._activeTrigger[Mn] = !1, this._activeTrigger[Hn] = !1, yn(this.tip).hasClass(xn)) {
          var o = we.getTransitionDurationFromElement(n);
          yn(n).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();

        this._hoverState = "";
      }
    }, e.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, e.isWithContent = function () {
      return Boolean(this.getTitle());
    }, e.addAttachmentClass = function (e) {
      yn(this.getTipElement()).addClass(Tn + "-" + e);
    }, e.getTipElement = function () {
      return this.tip = this.tip || yn(this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var e = this.getTipElement();
      this.setElementContent(yn(e.querySelectorAll(Ln)), this.getTitle()), yn(e).removeClass(xn + " " + Pn);
    }, e.setElementContent = function (e, t) {
      var n = this.config.html;
      "object" == _typeof(t) && (t.nodeType || t.jquery) ? n ? yn(t).parent().is(e) || e.empty().append(t) : e.text(yn(t).text()) : e[n ? "html" : "text"](t);
    }, e.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");
      return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
    }, e._getAttachment = function (e) {
      return An[e.toUpperCase()];
    }, e._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) yn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
          return i.toggle(e);
        });else if (e !== Wn) {
          var t = e === Hn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = e === Hn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          yn(i.element).on(t, i.config.selector, function (e) {
            return i._enter(e);
          }).on(n, i.config.selector, function (e) {
            return i._leave(e);
          });
        }
        yn(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, e._fixTitle = function () {
      var e = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, e._enter = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Mn : Hn] = !0), yn(t.getTipElement()).hasClass(Pn) || t._hoverState === On ? t._hoverState = On : (clearTimeout(t._timeout), t._hoverState = On, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
        t._hoverState === On && t.show();
      }, t.config.delay.show) : t.show());
    }, e._leave = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Mn : Hn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Nn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
        t._hoverState === Nn && t.hide();
      }, t.config.delay.hide) : t.hide());
    }, e._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }

      return !1;
    }, e._getConfig = function (e) {
      return "number" == typeof (e = l({}, this.constructor.Default, yn(this.element).data(), "object" == _typeof(e) && e ? e : {})).delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), we.typeCheckConfig(En, e, this.constructor.DefaultType), e;
    }, e._getDelegateConfig = function () {
      var e = {};
      if (this.config) for (var t in this.config) {
        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      }
      return e;
    }, e._cleanTipClass = function () {
      var e = yn(this.getTipElement()),
          t = e.attr("class").match(Sn);
      null !== t && t.length && e.removeClass(t.join(""));
    }, e._handlePopperPlacementChange = function (e) {
      var t = e.instance;
      this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, e._fixTransition = function () {
      var e = this.getTipElement(),
          t = this.config.animation;
      null === e.getAttribute("x-placement") && (yn(e).removeClass(xn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = yn(this).data(bn),
            t = "object" == _typeof(n) && n;

        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), yn(this).data(bn, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return In;
      }
    }, {
      key: "NAME",
      get: function get() {
        return En;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return bn;
      }
    }, {
      key: "Event",
      get: function get() {
        return kn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return wn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Dn;
      }
    }]), i;
  }(), yn.fn[En] = Rn._jQueryInterface, yn.fn[En].Constructor = Rn, yn.fn[En].noConflict = function () {
    return yn.fn[En] = Cn, Rn._jQueryInterface;
  }, Rn),
      Qi = (Bn = "popover", Kn = "." + (qn = "bs.popover"), Qn = (Un = t).fn[Bn], Yn = "bs-popover", Vn = new RegExp("(^|\\s)" + Yn + "\\S+", "g"), zn = l({}, Ki.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }), Gn = l({}, Ki.DefaultType, {
    content: "(string|element|function)"
  }), Jn = "fade", Xn = ".popover-header", $n = ".popover-body", ei = {
    HIDE: "hide" + Kn,
    HIDDEN: "hidden" + Kn,
    SHOW: (Zn = "show") + Kn,
    SHOWN: "shown" + Kn,
    INSERTED: "inserted" + Kn,
    CLICK: "click" + Kn,
    FOCUSIN: "focusin" + Kn,
    FOCUSOUT: "focusout" + Kn,
    MOUSEENTER: "mouseenter" + Kn,
    MOUSELEAVE: "mouseleave" + Kn
  }, ti = function (e) {
    var t, n;

    function i() {
      return e.apply(this, arguments) || this;
    }

    n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
    var r = i.prototype;
    return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (e) {
      Un(this.getTipElement()).addClass(Yn + "-" + e);
    }, r.getTipElement = function () {
      return this.tip = this.tip || Un(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var e = Un(this.getTipElement());
      this.setElementContent(e.find(Xn), this.getTitle());

      var t = this._getContent();

      "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find($n), t), e.removeClass(Jn + " " + Zn);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var e = Un(this.getTipElement()),
          t = e.attr("class").match(Vn);
      null !== t && 0 < t.length && e.removeClass(t.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = Un(this).data(qn),
            t = "object" == _typeof(n) ? n : null;

        if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Un(this).data(qn, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return zn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Bn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return qn;
      }
    }, {
      key: "Event",
      get: function get() {
        return ei;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Kn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Gn;
      }
    }]), i;
  }(Ki), Un.fn[Bn] = ti._jQueryInterface, Un.fn[Bn].Constructor = ti, Un.fn[Bn].noConflict = function () {
    return Un.fn[Bn] = Qn, ti._jQueryInterface;
  }, ti),
      Yi = (ii = "scrollspy", oi = "." + (ri = "bs.scrollspy"), si = (ni = t).fn[ii], ai = {
    offset: 10,
    method: "auto",
    target: ""
  }, li = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  }, ci = {
    ACTIVATE: "activate" + oi,
    SCROLL: "scroll" + oi,
    LOAD_DATA_API: "load" + oi + ".data-api"
  }, ui = "dropdown-item", fi = "active", hi = '[data-spy="scroll"]', di = ".active", pi = ".nav, .list-group", mi = ".nav-link", gi = ".nav-item", _i = ".list-group-item", vi = ".dropdown", yi = ".dropdown-item", Ei = ".dropdown-toggle", bi = "offset", wi = "position", Ci = function () {
    function n(e, t) {
      var n = this;
      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ni(this._scrollElement).on(ci.SCROLL, function (e) {
        return n._process(e);
      }), this.refresh(), this._process();
    }

    var e = n.prototype;
    return e.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? bi : wi,
          r = "auto" === this._config.method ? e : this._config.method,
          o = r === wi ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var t,
            n = we.getSelectorFromElement(e);

        if (n && (t = document.querySelector(n)), t) {
          var i = t.getBoundingClientRect();
          if (i.width || i.height) return [ni(t)[r]().top + o, n];
        }

        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, e.dispose = function () {
      ni.removeData(this._element, ri), ni(this._scrollElement).off(oi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, e._getConfig = function (e) {
      if ("string" != typeof (e = l({}, ai, "object" == _typeof(e) && e ? e : {})).target) {
        var t = ni(e.target).attr("id");
        t || (t = we.getUID(ii), ni(e.target).attr("id", t)), e.target = "#" + t;
      }

      return we.typeCheckConfig(ii, e, li), e;
    }, e._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, e._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, e._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, e._process = function () {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();

      if (this._scrollHeight !== t && this.refresh(), n <= e) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, e._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",");

      e = e.map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      });
      var n = ni([].slice.call(document.querySelectorAll(e.join(","))));
      n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), ni(this._scrollElement).trigger(ci.ACTIVATE, {
        relatedTarget: t
      });
    }, e._clear = function () {
      var e = [].slice.call(document.querySelectorAll(this._selector));
      ni(e).filter(di).removeClass(fi);
    }, n._jQueryInterface = function (t) {
      return this.each(function () {
        var e = ni(this).data(ri);

        if (e || (e = new n(this, "object" == _typeof(t) && t), ni(this).data(ri, e)), "string" == typeof t) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return ai;
      }
    }]), n;
  }(), ni(window).on(ci.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(hi)), t = e.length; t--;) {
      var n = ni(e[t]);

      Ci._jQueryInterface.call(n, n.data());
    }
  }), ni.fn[ii] = Ci._jQueryInterface, ni.fn[ii].Constructor = Ci, ni.fn[ii].noConflict = function () {
    return ni.fn[ii] = si, Ci._jQueryInterface;
  }, Ci),
      Vi = (Di = "." + (Si = "bs.tab"), Ai = (Ti = t).fn.tab, Ii = {
    HIDE: "hide" + Di,
    HIDDEN: "hidden" + Di,
    SHOW: "show" + Di,
    SHOWN: "shown" + Di,
    CLICK_DATA_API: "click" + Di + ".data-api"
  }, Oi = "dropdown-menu", Ni = "active", ki = "disabled", xi = "fade", Pi = "show", Li = ".dropdown", ji = ".nav, .list-group", Hi = ".active", Mi = "> li > .active", Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wi = ".dropdown-toggle", Ri = "> .dropdown-menu .active", Ui = function () {
    function i(e) {
      this._element = e;
    }

    var e = i.prototype;
    return e.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ti(this._element).hasClass(Ni) || Ti(this._element).hasClass(ki))) {
        var e,
            i,
            t = Ti(this._element).closest(ji)[0],
            r = we.getSelectorFromElement(this._element);

        if (t) {
          var o = "UL" === t.nodeName ? Mi : Hi;
          i = (i = Ti.makeArray(Ti(t).find(o)))[i.length - 1];
        }

        var s = Ti.Event(Ii.HIDE, {
          relatedTarget: this._element
        }),
            a = Ti.Event(Ii.SHOW, {
          relatedTarget: i
        });

        if (i && Ti(i).trigger(s), Ti(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (e = document.querySelector(r)), this._activate(this._element, t);

          var l = function l() {
            var e = Ti.Event(Ii.HIDDEN, {
              relatedTarget: n._element
            }),
                t = Ti.Event(Ii.SHOWN, {
              relatedTarget: i
            });
            Ti(i).trigger(e), Ti(n._element).trigger(t);
          };

          e ? this._activate(e, e.parentNode, l) : l();
        }
      }
    }, e.dispose = function () {
      Ti.removeData(this._element, Si), this._element = null;
    }, e._activate = function (e, t, n) {
      var i = this,
          r = ("UL" === t.nodeName ? Ti(t).find(Mi) : Ti(t).children(Hi))[0],
          o = n && r && Ti(r).hasClass(xi),
          s = function s() {
        return i._transitionComplete(e, r, n);
      };

      if (r && o) {
        var a = we.getTransitionDurationFromElement(r);
        Ti(r).one(we.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, e._transitionComplete = function (e, t, n) {
      if (t) {
        Ti(t).removeClass(Pi + " " + Ni);
        var i = Ti(t.parentNode).find(Ri)[0];
        i && Ti(i).removeClass(Ni), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }

      if (Ti(e).addClass(Ni), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), we.reflow(e), Ti(e).addClass(Pi), e.parentNode && Ti(e.parentNode).hasClass(Oi)) {
        var r = Ti(e).closest(Li)[0];

        if (r) {
          var o = [].slice.call(r.querySelectorAll(Wi));
          Ti(o).addClass(Ni);
        }

        e.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = Ti(this),
            t = e.data(Si);

        if (t || (t = new i(this), e.data(Si, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }]), i;
  }(), Ti(document).on(Ii.CLICK_DATA_API, Fi, function (e) {
    e.preventDefault(), Ui._jQueryInterface.call(Ti(this), "show");
  }), Ti.fn.tab = Ui._jQueryInterface, Ti.fn.tab.Constructor = Ui, Ti.fn.tab.noConflict = function () {
    return Ti.fn.tab = Ai, Ui._jQueryInterface;
  }, Ui);

  !function (e) {
    if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(t), e.Util = we, e.Alert = Ce, e.Button = Te, e.Carousel = Se, e.Collapse = De, e.Dropdown = Bi, e.Modal = qi, e.Popover = Qi, e.Scrollspy = Yi, e.Tab = Vi, e.Tooltip = Ki, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./resources/js/jquery.mCustomScrollbar.min.js":
/*!*****************************************************!*\
  !*** ./resources/js/jquery.mCustomScrollbar.min.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (e) {
  !function (t) {
    var o =  true && __webpack_require__.amdO,
        a =  true && module.exports,
        n = "https:" == document.location.protocol ? "https:" : "http:",
        i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
    o || (a ? __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery-mousewheel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t();
  }(function () {
    var t,
        o = "mCustomScrollbar",
        a = "mCS",
        n = ".mCustomScrollbar",
        i = {
      setTop: 0,
      setLeft: 0,
      axis: "y",
      scrollbarPosition: "inside",
      scrollInertia: 950,
      autoDraggerLength: !0,
      alwaysShowScrollbar: 0,
      snapOffset: 0,
      mouseWheel: {
        enable: !0,
        scrollAmount: "auto",
        axis: "y",
        deltaFactor: "auto",
        disableOver: ["select", "option", "keygen", "datalist", "textarea"]
      },
      scrollButtons: {
        scrollType: "stepless",
        scrollAmount: "auto"
      },
      keyboard: {
        enable: !0,
        scrollType: "stepless",
        scrollAmount: "auto"
      },
      contentTouchScroll: 25,
      documentTouchScroll: !0,
      advanced: {
        autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
        updateOnContentResize: !0,
        updateOnImageLoad: "auto",
        autoUpdateTimeout: 60
      },
      theme: "light",
      callbacks: {
        onTotalScrollOffset: 0,
        onTotalScrollBackOffset: 0,
        alwaysTriggerOffsets: !0
      }
    },
        r = 0,
        l = {},
        s = window.attachEvent && !window.addEventListener ? 1 : 0,
        c = !1,
        d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
        u = {
      init: function init(t) {
        var t = e.extend(!0, {}, i, t),
            o = f.call(this);

        if (t.live) {
          var s = t.liveSelector || this.selector || n,
              c = e(s);
          if ("off" === t.live) return void m(s);
          l[s] = setTimeout(function () {
            c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
          }, 500);
        } else m(s);

        return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != _typeof(t.mouseWheel) && 1 == t.mouseWheel && (t.mouseWheel = {
          enable: !0,
          scrollAmount: "auto",
          axis: "y",
          preventDefault: !1,
          deltaFactor: "auto",
          normalizeDelta: !1,
          invert: !1
        }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
          var o = e(this);

          if (!o.data(a)) {
            o.data(a, {
              idx: ++r,
              opt: t,
              scrollRatio: {
                y: null,
                x: null
              },
              overflowed: null,
              contentReset: {
                y: null,
                x: null
              },
              bindEvents: !1,
              tweenRunning: !1,
              sequential: {},
              langDir: o.css("direction"),
              cbOffsets: null,
              trigger: null,
              poll: {
                size: {
                  o: 0,
                  n: 0
                },
                img: {
                  o: 0,
                  n: 0
                },
                change: {
                  o: 0,
                  n: 0
                }
              }
            });
            var n = o.data(a),
                i = n.opt,
                l = o.data("mcs-axis"),
                s = o.data("mcs-scrollbar-position"),
                c = o.data("mcs-theme");
            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o);
          }
        });
      },
      update: function update(t, o) {
        var n = t || f.call(this);
        return e(n).each(function () {
          var t = e(this);

          if (t.data(a)) {
            var n = t.data(a),
                i = n.opt,
                r = e("#mCSB_" + n.idx + "_container"),
                l = e("#mCSB_" + n.idx),
                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
            if (!r.length) return;
            n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
            var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
            "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
              dir: "y",
              dur: 0,
              overwrite: "none"
            }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
              dir: "x",
              dur: 0,
              overwrite: "none"
            }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
              dir: "x",
              dur: 0,
              overwrite: "none"
            }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
              dir: "y",
              dur: 0,
              overwrite: "none"
            }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this);
          }
        });
      },
      scrollTo: function scrollTo(t, o) {
        if ("undefined" != typeof t && null != t) {
          var n = f.call(this);
          return e(n).each(function () {
            var n = e(this);

            if (n.data(a)) {
              var i = n.data(a),
                  r = i.opt,
                  l = {
                trigger: "external",
                scrollInertia: r.scrollInertia,
                scrollEasing: "mcsEaseInOut",
                moveDragger: !1,
                timeout: 60,
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
              },
                  s = e.extend(!0, {}, l, o),
                  c = Y.call(this, t),
                  d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
              c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function () {
                null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s));
              }, s.timeout);
            }
          });
        }
      },
      stop: function stop() {
        var t = f.call(this);
        return e(t).each(function () {
          var t = e(this);
          t.data(a) && Q(t);
        });
      },
      disable: function disable(t) {
        var o = f.call(this);
        return e(o).each(function () {
          var o = e(this);

          if (o.data(a)) {
            o.data(a);
            N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]);
          }
        });
      },
      destroy: function destroy() {
        var t = f.call(this);
        return e(t).each(function () {
          var n = e(this);

          if (n.data(a)) {
            var i = n.data(a),
                r = i.opt,
                l = e("#mCSB_" + i.idx),
                s = e("#mCSB_" + i.idx + "_container"),
                c = e(".mCSB_" + i.idx + "_scrollbar");
            r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
          }
        });
      }
    },
        f = function f() {
      return "object" != _typeof(e(this)) || e(this).length < 1 ? n : this;
    },
        h = function h(t) {
      var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
          a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
          n = ["minimal", "minimal-dark"],
          i = ["minimal", "minimal-dark"],
          r = ["minimal", "minimal-dark"];
      t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition;
    },
        m = function m(e) {
      l[e] && (clearTimeout(l[e]), $(l, e));
    },
        p = function p(e) {
      return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y";
    },
        g = function g(e) {
      return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless";
    },
        v = function v() {
      var t = e(this),
          n = t.data(a),
          i = n.opt,
          r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
          l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
          s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
          c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
          u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
          f = i.autoHideScrollbar ? " " + d[6] : "",
          h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
      i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
      var m = e("#mCSB_" + n.idx),
          p = e("#mCSB_" + n.idx + "_container");
      "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
      var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
      g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width());
    },
        x = function x(t) {
      var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
        return e(this).outerWidth(!0);
      }).get())],
          a = t.parent().width();
      return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
    },
        _ = function _() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e("#mCSB_" + o.idx + "_container");

      if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
        i.css({
          width: "auto",
          "min-width": 0,
          "overflow-x": "scroll"
        });
        var r = Math.ceil(i[0].scrollWidth);
        3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
          width: r,
          "min-width": "100%",
          "overflow-x": "inherit"
        }) : i.css({
          "overflow-x": "inherit",
          position: "absolute"
        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
          width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
          "min-width": "100%",
          position: "relative"
        }).unwrap();
      }
    },
        w = function w() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e(".mCSB_" + o.idx + "_scrollbar:first"),
          r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
          l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
          s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
      n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]);
    },
        S = function S() {
      var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
          l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
          c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
          d = s && c[1] < c[0] ? c[0] : c[1],
          u = s && c[3] < c[2] ? c[2] : c[3];
      r[0].css({
        height: d,
        "max-height": r[0].parent().height() - 10
      }).find(".mCSB_dragger_bar").css({
        "line-height": c[0] + "px"
      }), r[1].css({
        width: u,
        "max-width": r[1].parent().width() - 10
      });
    },
        b = function b() {
      var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
          l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
          s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
      o.scrollRatio = {
        y: s[0],
        x: s[1]
      };
    },
        C = function C(e, t, o) {
      var a = o ? d[0] + "_expanded" : "",
          n = e.closest(".mCSB_scrollTools");
      "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])));
    },
        y = function y() {
      var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = null == o.overflowed ? i.height() : i.outerHeight(!1),
          l = null == o.overflowed ? i.width() : i.outerWidth(!1),
          s = i[0].scrollHeight,
          c = i[0].scrollWidth;
      return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()];
    },
        B = function B() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e("#mCSB_" + o.idx),
          r = e("#mCSB_" + o.idx + "_container"),
          l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];

      if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
        var s = dx = 0;
        "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX");
      }
    },
        T = function T() {
      function t() {
        r = setTimeout(function () {
          e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
        }, 100);
      }

      var o = e(this),
          n = o.data(a),
          i = n.opt;

      if (!n.bindEvents) {
        if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
          var r;
          t();
        }

        P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0;
      }
    },
        k = function k() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + "_" + o.idx,
          r = ".mCSB_" + o.idx + "_scrollbar",
          l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
          s = e("#mCSB_" + o.idx + "_container");
      n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function () {
        e(this).unbind("." + i);
      }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1);
    },
        M = function M(t) {
      var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = e("#mCSB_" + n.idx + "_container_wrapper"),
          l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
          s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
          c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
      "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]);
    },
        O = function O(t) {
      var o = t.type,
          a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
          n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];

      switch (o) {
        case "pointerdown":
        case "MSPointerDown":
        case "pointermove":
        case "MSPointerMove":
        case "pointerup":
        case "MSPointerUp":
          return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];

        case "touchstart":
        case "touchmove":
        case "touchend":
          var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
              r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
          return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];

        default:
          return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1];
      }
    },
        I = function I() {
      function t(e, t, a, n) {
        if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
            s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;else var i = "y",
            s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
        G(r, s.toString(), {
          dir: i,
          drag: !0
        });
      }

      var o,
          n,
          i,
          r = e(this),
          l = r.data(a),
          d = l.opt,
          u = a + "_" + l.idx,
          f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
          h = e("#mCSB_" + l.idx + "_container"),
          m = e("#" + f[0] + ",#" + f[1]),
          p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
          g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
      m.bind("contextmenu." + u, function (e) {
        e.preventDefault();
      }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
        if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
          c = !0, s && (document.onselectstart = function () {
            return !1;
          }), L.call(h, !1), Q(r), o = e(this);
          var a = o.offset(),
              l = O(t)[0] - a.top,
              u = O(t)[1] - a.left,
              f = o.height() + a.top,
              m = o.width() + a.left;
          f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar);
        }
      }).bind("touchmove." + u, function (e) {
        e.stopImmediatePropagation(), e.preventDefault();
        var a = o.offset(),
            r = O(e)[0] - a.top,
            l = O(e)[1] - a.left;
        t(n, i, r, l);
      }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
        if (o) {
          var a = o.offset(),
              r = O(e)[0] - a.top,
              l = O(e)[1] - a.left;
          if (n === r && i === l) return;
          t(n, i, r, l);
        }
      }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function () {
        o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0);
      });
    },
        D = function D() {
      function o(e) {
        if (!te(e) || c || O(e)[2]) return void (t = 0);
        t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
        var o = I.offset();
        u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]];
      }

      function n(e) {
        if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
          g = K();
          var t = M.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left,
              n = "mcsLinearOut";
          if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
              r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
          if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
              h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
          r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0);
        }
      }

      function i(e) {
        if (!te(e) || c || O(e)[2]) return void (t = 0);
        t = 1, e.stopImmediatePropagation(), Q(y), p = K();
        var o = M.offset();
        h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [];
      }

      function r(e) {
        if (te(e) && !c && !O(e)[2]) {
          d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K();
          var t = M.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left;

          if (!(v - g > 30)) {
            _ = 1e3 / (v - p);
            var n = "mcsEaseOut",
                i = 2.5 > _,
                r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
            x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
            var u = [Math.abs(x[0]), Math.abs(x[1])];
            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
            var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
            w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
            var y = parseInt(T.contentTouchScroll) || 0;
            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
          }
        }
      }

      function l(e, t) {
        var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
        return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3];
      }

      function s(e, t, o, a, n, i) {
        e && G(y, e.toString(), {
          dur: t,
          scrollEasing: o,
          dir: a,
          overwrite: n,
          drag: i
        });
      }

      var d,
          u,
          f,
          h,
          m,
          p,
          g,
          v,
          x,
          _,
          w,
          S,
          b,
          C,
          y = e(this),
          B = y.data(a),
          T = B.opt,
          k = a + "_" + B.idx,
          M = e("#mCSB_" + B.idx),
          I = e("#mCSB_" + B.idx + "_container"),
          D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
          E = [],
          W = [],
          R = 0,
          L = "yx" === T.axis ? "none" : "all",
          z = [],
          P = I.find("iframe"),
          H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
          U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;

      I.bind(H[0], function (e) {
        o(e);
      }).bind(H[1], function (e) {
        n(e);
      }), M.bind(H[0], function (e) {
        i(e);
      }).bind(H[2], function (e) {
        r(e);
      }), P.length && P.each(function () {
        e(this).bind("load", function () {
          A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {
            o(e), i(e);
          }).bind(H[1], function (e) {
            n(e);
          }).bind(H[2], function (e) {
            r(e);
          });
        });
      });
    },
        E = function E() {
      function o() {
        return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
      }

      function n(e, t, o) {
        d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null);
      }

      var i,
          r = e(this),
          l = r.data(a),
          s = l.opt,
          d = l.sequential,
          u = a + "_" + l.idx,
          f = e("#mCSB_" + l.idx + "_container"),
          h = f.parent();
      f.bind("mousedown." + u, function () {
        t || i || (i = 1, c = !0);
      }).add(document).bind("mousemove." + u, function (e) {
        if (!t && i && o()) {
          var a = f.offset(),
              r = O(e)[0] - a.top + f[0].offsetTop,
              c = O(e)[1] - a.left + f[0].offsetLeft;
          r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)));
        }
      }).bind("mouseup." + u + " dragend." + u, function () {
        t || (i && (i = 0, n("off", null)), c = !1);
      });
    },
        W = function W() {
      function t(t, a) {
        if (Q(o), !z(o, t.target)) {
          var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
              d = i.scrollInertia;
          if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
              f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
              h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
              m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
              p = c[1][0].offsetLeft,
              g = c[1].parent().width() - c[1].width(),
              v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;else var u = "y",
              f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
              h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
              m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
              p = c[0][0].offsetTop,
              g = c[0].parent().height() - c[0].height(),
              v = t.deltaY || a;
          "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), {
            dir: u,
            dur: d
          }));
        }
      }

      if (e(this).data(a)) {
        var o = e(this),
            n = o.data(a),
            i = n.opt,
            r = a + "_" + n.idx,
            l = e("#mCSB_" + n.idx),
            c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
            d = e("#mCSB_" + n.idx + "_container").find("iframe");
        d.length && d.each(function () {
          e(this).bind("load", function () {
            A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
              t(e, o);
            });
          });
        }), l.bind("mousewheel." + r, function (e, o) {
          t(e, o);
        });
      }
    },
        R = new Object(),
        A = function A(t) {
      var o = !1,
          a = !1,
          n = null;
      if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a];

      if (t) {
        try {
          var i = t.contentDocument || t.contentWindow.document;
          n = i.body.innerHTML;
        } catch (r) {}

        o = null !== n;
      } else {
        try {
          var i = top.document;
          n = i.body.innerHTML;
        } catch (r) {}

        o = null !== n;
      }

      return a !== !1 && (R[a] = o), o;
    },
        L = function L(e) {
      var t = this.find("iframe");

      if (t.length) {
        var o = e ? "auto" : "none";
        t.css("pointer-events", o);
      }
    },
        z = function z(t, o) {
      var n = o.nodeName.toLowerCase(),
          i = t.data(a).opt.mouseWheel.disableOver,
          r = ["select", "textarea"];
      return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"));
    },
        P = function P() {
      var t,
          o = e(this),
          n = o.data(a),
          i = a + "_" + n.idx,
          r = e("#mCSB_" + n.idx + "_container"),
          l = r.parent(),
          s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
      s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
        c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1);
      }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function () {
        c = !1;
      }).bind("click." + i, function (a) {
        if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
          Q(o);
          var i = e(this),
              s = i.find(".mCSB_dragger");

          if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
            if (!n.overflowed[1]) return;
            var c = "x",
                u = a.pageX > s.offset().left ? -1 : 1,
                f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width());
          } else {
            if (!n.overflowed[0]) return;
            var c = "y",
                u = a.pageY > s.offset().top ? -1 : 1,
                f = Math.abs(r[0].offsetTop) - u * (.9 * l.height());
          }

          G(o, f.toString(), {
            dir: c,
            scrollEasing: "mcsEaseInOut"
          });
        }
      });
    },
        H = function H() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + "_" + o.idx,
          r = e("#mCSB_" + o.idx + "_container"),
          l = r.parent();
      r.bind("focusin." + i, function () {
        var o = e(document.activeElement),
            a = r.find(".mCustomScrollBox").length,
            i = 0;
        o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function () {
          var e = [ae(o)[0], ae(o)[1]],
              a = [r[0].offsetTop, r[0].offsetLeft],
              s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
              c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
          "x" === n.axis || s[0] || G(t, e[0].toString(), {
            dir: "y",
            scrollEasing: "mcsEaseInOut",
            overwrite: c,
            dur: i
          }), "y" === n.axis || s[1] || G(t, e[1].toString(), {
            dir: "x",
            scrollEasing: "mcsEaseInOut",
            overwrite: c,
            dur: i
          });
        }, t[0]._focusTimer));
      });
    },
        U = function U() {
      var t = e(this),
          o = t.data(a),
          n = a + "_" + o.idx,
          i = e("#mCSB_" + o.idx + "_container").parent();
      i.bind("scroll." + n, function () {
        0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
      });
    },
        F = function F() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = o.sequential,
          r = a + "_" + o.idx,
          l = ".mCSB_" + o.idx + "_scrollbar",
          s = e(l + ">a");
      s.bind("contextmenu." + r, function (e) {
        e.preventDefault();
      }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (a) {
        function r(e, o) {
          i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o);
        }

        if (a.preventDefault(), ee(a)) {
          var l = e(this).attr("class");

          switch (i.type = n.scrollButtons.scrollType, a.type) {
            case "mousedown":
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
              if ("stepped" === i.type) return;
              c = !0, o.tweenRunning = !1, r("on", l);
              break;

            case "mouseup":
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseout":
            case "pointerout":
            case "MSPointerOut":
              if ("stepped" === i.type) return;
              c = !1, i.dir && r("off", l);
              break;

            case "click":
              if ("stepped" !== i.type || o.tweenRunning) return;
              r("on", l);
          }
        }
      });
    },
        q = function q() {
      function t(t) {
        function a(e, t) {
          r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t);
        }

        switch (t.type) {
          case "blur":
            n.tweenRunning && r.dir && a("off", null);
            break;

          case "keydown":
          case "keyup":
            var l = t.keyCode ? t.keyCode : t.which,
                s = "on";

            if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
              if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
              "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l));
            } else if (33 === l || 34 === l) {
              if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                Q(o);
                var f = 34 === l ? -1 : 1;
                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                    m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());else var h = "y",
                    m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                G(o, m.toString(), {
                  dir: h,
                  scrollEasing: "mcsEaseInOut"
                });
              }
            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
              if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                  m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;else var h = "y",
                  m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
              G(o, m.toString(), {
                dir: h,
                scrollEasing: "mcsEaseInOut"
              });
            }

        }
      }

      var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = n.sequential,
          l = a + "_" + n.idx,
          s = e("#mCSB_" + n.idx),
          c = e("#mCSB_" + n.idx + "_container"),
          d = c.parent(),
          u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
          f = c.find("iframe"),
          h = ["blur." + l + " keydown." + l + " keyup." + l];
      f.length && f.each(function () {
        e(this).bind("load", function () {
          A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
            t(e);
          });
        });
      }), s.attr("tabindex", "0").bind(h[0], function (e) {
        t(e);
      });
    },
        j = function j(t, o, n, i, r) {
      function l(e) {
        u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);

        var o = "stepped" !== f.type,
            a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
            n = e ? o ? 7.5 : 40 : 2.5,
            s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
            d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
            m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
            v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
            x = "auto" !== f.scrollAmount ? v : m,
            _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
            w = !!e;

        return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), {
          dir: f.dir[0],
          scrollEasing: _,
          dur: a,
          onComplete: w
        }), e ? void (f.dir = !1) : (clearTimeout(f.step), void (f.step = setTimeout(function () {
          l();
        }, a)));
      }

      function s() {
        clearTimeout(f.step), $(f, "step"), Q(t);
      }

      var c = t.data(a),
          u = c.opt,
          f = c.sequential,
          h = e("#mCSB_" + c.idx + "_container"),
          m = "stepped" === f.type,
          p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
          g = u.scrollInertia < 1 ? 17 : u.scrollInertia;

      switch (o) {
        case "on":
          if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;
          l(m);
          break;

        case "off":
          s(), (m || c.tweenRunning && f.dir) && l(!0);
      }
    },
        Y = function Y(t) {
      var o = e(this).data(a).opt,
          n = [];
      return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n;
    },
        X = function X(t, o) {
      if (null != t && "undefined" != typeof t) {
        var n = e(this),
            i = n.data(a),
            r = i.opt,
            l = e("#mCSB_" + i.idx + "_container"),
            s = l.parent(),
            c = _typeof(t);

        o || (o = "x" === r.axis ? "x" : "y");
        var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
            f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
            h = "x" === o ? "left" : "top";

        switch (c) {
          case "function":
            return t();

          case "object":
            var m = t.jquery ? t : e(t);
            if (!m.length) return;
            return "x" === o ? ae(m)[1] : ae(m)[0];

          case "string":
          case "number":
            if (oe(t)) return Math.abs(t);
            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));

            if (-1 !== t.indexOf("+=")) {
              var p = f + parseInt(t.split("+=")[1]);
              return p >= 0 ? 0 : Math.abs(p);
            }

            if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
            if ("top" === t || "left" === t) return 0;
            if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
            if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));

            if ("first" === t || "last" === t) {
              var m = l.find(":" + t);
              return "x" === o ? ae(m)[1] : ae(m)[0];
            }

            return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]));
        }
      }
    },
        N = function N(t) {
      function o() {
        return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function () {
          return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function () {
            n(this);
          }));
        }, c.advanced.autoUpdateTimeout));
      }

      function n(t) {
        function o(e, t) {
          return function () {
            return t.apply(e, arguments);
          };
        }

        function a() {
          this.onload = null, e(t).addClass(d[2]), r(2);
        }

        if (e(t).hasClass(d[2])) return void r();
        var n = new Image();
        n.onload = o(n, a), n.src = t.src;
      }

      function i() {
        c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
        var e = 0,
            t = f.find(c.advanced.updateOnSelectorChange);
        return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
          e += this.offsetHeight + this.offsetWidth;
        }), e;
      }

      function r(e) {
        clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
      }

      var l = e(this),
          s = l.data(a),
          c = s.opt,
          f = e("#mCSB_" + s.idx + "_container");
      return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o();
    },
        V = function V(e, t, o) {
      return Math.round(e / t) * t - o;
    },
        Q = function Q(t) {
      var o = t.data(a),
          n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
      n.each(function () {
        Z.call(this);
      });
    },
        G = function G(t, o, n) {
      function i(e) {
        return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
      }

      function r() {
        return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w];
      }

      function l() {
        var e = [h[0].offsetTop, h[0].offsetLeft],
            o = [x[0].offsetTop, x[0].offsetLeft],
            a = [h.outerHeight(!1), h.outerWidth(!1)],
            i = [f.height(), f.width()];
        t[0].mcs = {
          content: h,
          top: e[0],
          left: e[1],
          draggerTop: o[0],
          draggerLeft: o[1],
          topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
          leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
          direction: n.dir
        };
      }

      var s = t.data(a),
          c = s.opt,
          d = {
        trigger: "internal",
        dir: "y",
        scrollEasing: "mcsEaseOut",
        drag: !1,
        dur: c.scrollInertia,
        overwrite: "all",
        callbacks: !0,
        onStart: !0,
        onUpdate: !0,
        onComplete: !0
      },
          n = e.extend(d, n),
          u = [n.dur, n.drag ? 0 : n.dur],
          f = e("#mCSB_" + s.idx),
          h = e("#mCSB_" + s.idx + "_container"),
          m = h.parent(),
          p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
          g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];

      if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
        if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
          var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
          o = V(o, v, c.snapOffset);
        }

        switch (n.dir) {
          case "x":
            var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                _ = "left",
                w = h[0].offsetLeft,
                S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                y = p[1],
                B = g[1],
                T = y > 0 ? y / s.scrollRatio.x : 0,
                k = B > 0 ? B / s.scrollRatio.x : 0;
            break;

          case "y":
            var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                _ = "top",
                w = h[0].offsetTop,
                S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                y = p[0],
                B = g[0],
                T = y > 0 ? y / s.scrollRatio.y : 0,
                k = B > 0 ? B / s.scrollRatio.y : 0;
        }

        b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
          onStart: function onStart() {
            n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r());
          },
          onUpdate: function onUpdate() {
            n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]));
          },
          onComplete: function onComplete() {
            if (n.callbacks && n.onComplete) {
              "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
              var e = h[0].idleTimer || 0;
              h[0].onCompleteTimeout = setTimeout(function () {
                i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide");
              }, e);
            }
          }
        });
      }
    },
        J = function J(e, t, o, a, n, i, r) {
      function l() {
        S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call());
      }

      function s() {
        a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call();
      }

      function c() {
        f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
          return s(), setTimeout(e, .01);
        }, S.id = h(l);
      }

      function d() {
        null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null);
      }

      function u(e, t, o, a, n) {
        switch (n) {
          case "linear":
          case "mcsLinear":
            return o * e / a + t;

          case "mcsLinearOut":
            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;

          case "easeInOutSmooth":
            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);

          case "easeInOutStrong":
            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);

          case "easeInOut":
          case "mcsEaseInOut":
            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);

          case "easeOutSmooth":
            return e /= a, e--, -o * (e * e * e * e - 1) + t;

          case "easeOutStrong":
            return o * (-Math.pow(2, -10 * e / a) + 1) + t;

          case "easeOut":
          case "mcsEaseOut":
          default:
            var i = (e /= a) * e,
                r = i * e;
            return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e);
        }
      }

      e._mTween || (e._mTween = {
        top: {},
        left: {}
      });

      var f,
          h,
          r = r || {},
          m = r.onStart || function () {},
          p = r.onUpdate || function () {},
          g = r.onComplete || function () {},
          v = K(),
          x = 0,
          _ = e.offsetTop,
          w = e.style,
          S = e._mTween[t];

      "left" === t && (_ = e.offsetLeft);
      var b = o - _;
      S.stop = 0, "none" !== i && d(), c();
    },
        K = function K() {
      return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
    },
        Z = function Z() {
      var e = this;
      e._mTween || (e._mTween = {
        top: {},
        left: {}
      });

      for (var t = ["top", "left"], o = 0; o < t.length; o++) {
        var a = t[o];
        e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1);
      }
    },
        $ = function $(e, t) {
      try {
        delete e[t];
      } catch (o) {
        e[t] = null;
      }
    },
        ee = function ee(e) {
      return !(e.which && 1 !== e.which);
    },
        te = function te(e) {
      var t = e.originalEvent.pointerType;
      return !(t && "touch" !== t && 2 !== t);
    },
        oe = function oe(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
        ae = function ae(e) {
      var t = e.parents(".mCSB_container");
      return [e.offset().top - t.offset().top, e.offset().left - t.offset().left];
    },
        ne = function ne() {
      function e() {
        var e = ["webkit", "moz", "ms", "o"];
        if ("hidden" in document) return "hidden";

        for (var t = 0; t < e.length; t++) {
          if (e[t] + "Hidden" in document) return e[t] + "Hidden";
        }

        return null;
      }

      var t = e();
      return t ? document[t] : !1;
    };

    e.fn[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
    }, e[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
    }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function () {
      e(n)[o](), e.extend(e.expr[":"], {
        mcsInView: e.expr[":"].mcsInView || function (t) {
          var o,
              a,
              n = e(t),
              i = n.parents(".mCSB_container");
          if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1);
        },
        mcsInSight: e.expr[":"].mcsInSight || function (t, o, a) {
          var n,
              i,
              r,
              l,
              s = e(t),
              c = s.parents(".mCSB_container"),
              d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
          if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0;
        },
        mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
          var o = e(t).data(a);
          if (o) return o.overflowed[0] || o.overflowed[1];
        }
      });
    });
  });
});

/***/ }),

/***/ "./resources/js/jquery.morelines.min.js":
/*!**********************************************!*\
  !*** ./resources/js/jquery.morelines.min.js ***!
  \**********************************************/
/***/ (() => {

!function (s) {
  s.fn.moreLines = function (e) {
    "use strict";

    return this.each(function () {
      var t = s(this),
          i = (t.find("p"), parseFloat(t.css("line-height"))),
          a = t.innerHeight(),
          n = s.extend({
        linecount: 1,
        baseclass: "b-morelines_",
        basejsclass: "js-morelines_",
        classspecific: "section",
        buttontxtmore: "more lines",
        buttontxtless: "less lines",
        animationspeed: 1
      }, e),
          c = n.baseclass + n.classspecific + "_ellipsis",
          l = n.baseclass + n.classspecific + "_button",
          o = n.baseclass + n.classspecific + "_wrapper",
          h = n.basejsclass + n.classspecific + "_wrapper",
          r = s("<div>").addClass(o + " " + h).css({
        "max-width": t.css("width")
      }),
          m = i * n.linecount;

      if (t.wrap(r), t.parent().not(h) && a > m) {
        t.addClass(c).css({
          "min-height": m,
          "max-height": m,
          overflow: "hidden"
        });
        var p = s("<div>", {
          "class": l,
          click: function click() {
            t.toggleClass(c), s(this).toggleClass(l + "_active"), "none" !== t.css("max-height") ? t.css({
              height: m,
              "max-height": ""
            }).animate({
              height: a
            }, n.animationspeed, function () {
              p.html(n.buttontxtless);
            }) : t.animate({
              height: m
            }, n.animationspeed, function () {
              p.html(n.buttontxtmore), t.css("max-height", m);
            });
          },
          html: n.buttontxtmore
        });
        t.after(p);
      }
    }), this;
  };
}(jQuery);

/***/ }),

/***/ "./resources/js/jquery.mousewheel.min.js":
/*!***********************************************!*\
  !*** ./resources/js/jquery.mousewheel.min.js ***!
  \***********************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (a) {
  function b(b) {
    var g = b || window.event,
        h = i.call(arguments, 1),
        j = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;

    if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q;
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r;
      }

      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top;
      }

      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
    }
  }

  function c() {
    f = null;
  }

  function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
  }

  var e,
      f,
      g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      i = Array.prototype.slice;
  if (a.event.fixHooks) for (var j = g.length; j;) {
    a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  }
  var k = a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function setup() {
      if (this.addEventListener) for (var c = h.length; c;) {
        this.addEventListener(h[--c], b, !1);
      } else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    },
    teardown: function teardown() {
      if (this.removeEventListener) for (var c = h.length; c;) {
        this.removeEventListener(h[--c], b, !1);
      } else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function getLineHeight(b) {
      var c = a(b),
          d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
    },
    getPageHeight: function getPageHeight(b) {
      return a(b).height();
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  a.fn.extend({
    mousewheel: function mousewheel(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function unmousewheel(a) {
      return this.unbind("mousewheel", a);
    }
  });
});

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ (() => {

$(document).ready(function () {
  "use strict"; // start of use strict

  /*==============================
  Menu
  ==============================*/

  $('.header__btn').on('click', function () {
    $(this).toggleClass('header__btn--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('.body').toggleClass('body--active');

    if ($('.header__search-btn').hasClass('active')) {
      $('.header__search-btn').toggleClass('active');
      $('.header__search').toggleClass('header__search--active');
    }
  });
  /*==============================
  Search
  ==============================*/

  $('.header__search-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header__search').toggleClass('header__search--active');

    if ($('.header__btn').hasClass('header__btn--active')) {
      $('.header__btn').toggleClass('header__btn--active');
      $('.header__nav').toggleClass('header__nav--active');
      $('.body').toggleClass('body--active');
    }
  });
  /*==============================
  Home
  ==============================*/

  $('.home__bg').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: false,
    touchDrag: false,
    items: 1,
    dots: false,
    loop: true,
    autoplay: false,
    smartSpeed: 600,
    margin: 0
  });
  $('.home__bg .item').each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        'background': 'url(' + $(this).data('bg') + ')',
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
      });
    }
  });
  $('.home__carousel').owlCarousel({
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    loop: true,
    autoplay: false,
    smartSpeed: 600,
    margin: 30,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
  $('.home__nav--next').on('click', function () {
    $('.home__carousel, .home__bg').trigger('next.owl.carousel');
  });
  $('.home__nav--prev').on('click', function () {
    $('.home__carousel, .home__bg').trigger('prev.owl.carousel');
  });
  $(window).on('resize', function () {
    var itemHeight = $('.home__bg').height();
    $('.home__bg .item').css("height", itemHeight + "px");
  });
  $(window).trigger('resize');
  /*==============================
  Tabs
  ==============================*/

  $('.content__mobile-tabs-menu li').each(function () {
    $(this).attr('data-value', $(this).text().toLowerCase());
  });
  $('.content__mobile-tabs-menu li').on('click', function () {
    var text = $(this).text();
    var item = $(this);
    var id = item.closest('.content__mobile-tabs').attr('id');
    $('#' + id).find('.content__mobile-tabs-btn input').val(text);
  });
  /*==============================
  Section bg
  ==============================*/

  $('.section--bg, .details__bg').each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        'background': 'url(' + $(this).data('bg') + ')',
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
      });
    }
  });
  /*==============================
  Filter
  ==============================*/

  $('.filter__item-menu li').each(function () {
    $(this).attr('data-value', $(this).text().toLowerCase());
  });
  $('.filter__item-menu li').on('click', function () {
    var text = $(this).text();
    var item = $(this);
    var id = item.closest('.filter__item').attr('id');
    $('#' + id).find('.filter__item-btn input').val(text);
  });
  /*==============================
  Scroll bar
  ==============================*/

  $('.scrollbar-dropdown').mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "outside",
    theme: "custom-bar"
  });
  $('.accordion').mCustomScrollbar({
    axis: "y",
    scrollbarPosition: "outside",
    theme: "custom-bar2"
  });
  /*==============================
  Morelines
  ==============================*/

  $('.card__description--details').moreLines({
    linecount: 6,
    baseclass: 'b-description',
    basejsclass: 'js-description',
    classspecific: '_readmore',
    buttontxtmore: "",
    buttontxtless: "",
    animationspeed: 400
  });
  /*==============================
  Gallery
  ==============================*/

  var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {
    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function parseThumbnailElements(el) {
      var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          size,
          item;

      for (var i = 0; i < numNodes; i++) {
        figureEl = thumbElements[i]; // <figure> element
        // include only element nodes 

        if (figureEl.nodeType !== 1) {
          continue;
        }

        linkEl = figureEl.children[0]; // <a> element

        size = linkEl.getAttribute('data-size').split('x'); // create slide object

        item = {
          src: linkEl.getAttribute('href'),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10)
        };

        if (figureEl.children.length > 1) {
          // <figcaption> content
          item.title = figureEl.children[1].innerHTML;
        }

        if (linkEl.children.length > 0) {
          // <img> thumbnail element, retrieving thumbnail url
          item.msrc = linkEl.children[0].getAttribute('src');
        }

        item.el = figureEl; // save link to element for getThumbBoundsFn

        items.push(item);
      }

      return items;
    }; // find nearest parent element


    var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    }; // triggers when user clicks on thumbnail


    var onThumbnailsClick = function onThumbnailsClick(e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      var eTarget = e.target || e.srcElement; // find root element of slide

      var clickedListItem = closest(eTarget, function (el) {
        return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
      });

      if (!clickedListItem) {
        return;
      } // find index of clicked item by looping through all child nodes
      // alternatively, you may define index via data- attribute


      var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

      for (var i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }

        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }

        nodeIndex++;
      }

      if (index >= 0) {
        // open PhotoSwipe if valid index found
        openPhotoSwipe(index, clickedGallery);
      }

      return false;
    }; // parse picture index and gallery index from URL (#&pid=1&gid=2)


    var photoswipeParseHash = function photoswipeParseHash() {
      var hash = window.location.hash.substring(1),
          params = {};

      if (hash.length < 5) {
        return params;
      }

      var vars = hash.split('&');

      for (var i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }

        var pair = vars[i].split('=');

        if (pair.length < 2) {
          continue;
        }

        params[pair[0]] = pair[1];
      }

      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }

      return params;
    };

    var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          items;
      items = parseThumbnailElements(galleryElement); // define options (if needed)

      options = {
        // define gallery index (for URL)
        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        getThumbBoundsFn: function getThumbBoundsFn(index) {
          // See Options -> getThumbBoundsFn section of documentation for more info
          var thumbnail = items[index].el.getElementsByTagName('img')[0],
              // find thumbnail
          pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          };
        }
      }; // PhotoSwipe opened from URL

      if (fromURL) {
        if (options.galleryPIDs) {
          // parse real index when custom PIDs are used 
          // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
          for (var j = 0; j < items.length; j++) {
            if (items[j].pid == index) {
              options.index = j;
              break;
            }
          }
        } else {
          // in URL indexes start from 1
          options.index = parseInt(index, 10) - 1;
        }
      } else {
        options.index = parseInt(index, 10);
      } // exit if index not found


      if (isNaN(options.index)) {
        return;
      }

      if (disableAnimation) {
        options.showAnimationDuration = 0;
      } // Pass data to PhotoSwipe and initialize it


      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    }; // loop through all gallery elements and bind events


    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute('data-pswp-uid', i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
    } // Parse URL and open gallery if it contains #&pid=3&gid=1


    var hashData = photoswipeParseHash();

    if (hashData.pid && hashData.gid) {
      openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
  }; // execute above function


  initPhotoSwipeFromDOM('.gallery');
  /*==============================
  Player
  ==============================*/

  function initializePlayer() {
    if ($('#player').length) {
      var player = new Plyr('#player');
    } else {
      return false;
    }

    return false;
  }

  $(window).on('load', initializePlayer());
  /*==============================
  Range sliders
  ==============================*/

  /*1*/

  function initializeFirstSlider() {
    if ($('#filter__years').length) {
      var firstSlider = document.getElementById('filter__years');
      noUiSlider.create(firstSlider, {
        range: {
          'min': 2000,
          'max': 2018
        },
        step: 1,
        connect: true,
        start: [2005, 2015],
        format: wNumb({
          decimals: 0
        })
      });
      var firstValues = [document.getElementById('filter__years-start'), document.getElementById('filter__years-end')];
      firstSlider.noUiSlider.on('update', function (values, handle) {
        firstValues[handle].innerHTML = values[handle];
      });
    } else {
      return false;
    }

    return false;
  }

  $(window).on('load', initializeFirstSlider());
  /*2*/

  function initializeSecondSlider() {
    if ($('#filter__imbd').length) {
      var secondSlider = document.getElementById('filter__imbd');
      noUiSlider.create(secondSlider, {
        range: {
          'min': 0,
          'max': 10
        },
        step: 0.1,
        connect: true,
        start: [2.5, 8.6],
        format: wNumb({
          decimals: 1
        })
      });
      var secondValues = [document.getElementById('filter__imbd-start'), document.getElementById('filter__imbd-end')];
      secondSlider.noUiSlider.on('update', function (values, handle) {
        secondValues[handle].innerHTML = values[handle];
      });
      $('.filter__item-menu--range').on('click.bs.dropdown', function (e) {
        e.stopPropagation();
        e.preventDefault();
      });
    } else {
      return false;
    }

    return false;
  }

  $(window).on('load', initializeSecondSlider());
  /*3*/

  function initializeThirdSlider() {
    if ($('#slider__rating').length) {
      var thirdSlider = document.getElementById('slider__rating');
      noUiSlider.create(thirdSlider, {
        range: {
          'min': 0,
          'max': 10
        },
        connect: [true, false],
        step: 0.1,
        start: 8.6,
        format: wNumb({
          decimals: 1
        })
      });
      var thirdValue = document.getElementById('form__slider-value');
      thirdSlider.noUiSlider.on('update', function (values, handle) {
        thirdValue.innerHTML = values[handle];
      });
    } else {
      return false;
    }

    return false;
  }

  $(window).on('load', initializeThirdSlider());
});

/***/ }),

/***/ "./resources/js/nouislider.min.js":
/*!****************************************!*\
  !*** ./resources/js/nouislider.min.js ***!
  \****************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! nouislider - 11.1.0 - 2018-04-02 11:18:13 */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function () {
  "use strict";

  function a(a) {
    return "object" == _typeof(a) && "function" == typeof a.to && "function" == typeof a.from;
  }

  function b(a) {
    a.parentElement.removeChild(a);
  }

  function c(a) {
    return null !== a && void 0 !== a;
  }

  function d(a) {
    a.preventDefault();
  }

  function e(a) {
    return a.filter(function (a) {
      return !this[a] && (this[a] = !0);
    }, {});
  }

  function f(a, b) {
    return Math.round(a / b) * b;
  }

  function g(a, b) {
    var c = a.getBoundingClientRect(),
        d = a.ownerDocument,
        e = d.documentElement,
        f = p(d);
    return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f.x = 0), b ? c.top + f.y - e.clientTop : c.left + f.x - e.clientLeft;
  }

  function h(a) {
    return "number" == typeof a && !isNaN(a) && isFinite(a);
  }

  function i(a, b, c) {
    c > 0 && (m(a, b), setTimeout(function () {
      n(a, b);
    }, c));
  }

  function j(a) {
    return Math.max(Math.min(a, 100), 0);
  }

  function k(a) {
    return Array.isArray(a) ? a : [a];
  }

  function l(a) {
    a = String(a);
    var b = a.split(".");
    return b.length > 1 ? b[1].length : 0;
  }

  function m(a, b) {
    a.classList ? a.classList.add(b) : a.className += " " + b;
  }

  function n(a, b) {
    a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ");
  }

  function o(a, b) {
    return a.classList ? a.classList.contains(b) : new RegExp("\\b" + b + "\\b").test(a.className);
  }

  function p(a) {
    var b = void 0 !== window.pageXOffset,
        c = "CSS1Compat" === (a.compatMode || "");
    return {
      x: b ? window.pageXOffset : c ? a.documentElement.scrollLeft : a.body.scrollLeft,
      y: b ? window.pageYOffset : c ? a.documentElement.scrollTop : a.body.scrollTop
    };
  }

  function q() {
    return window.navigator.pointerEnabled ? {
      start: "pointerdown",
      move: "pointermove",
      end: "pointerup"
    } : window.navigator.msPointerEnabled ? {
      start: "MSPointerDown",
      move: "MSPointerMove",
      end: "MSPointerUp"
    } : {
      start: "mousedown touchstart",
      move: "mousemove touchmove",
      end: "mouseup touchend"
    };
  }

  function r() {
    var a = !1;

    try {
      var b = Object.defineProperty({}, "passive", {
        get: function get() {
          a = !0;
        }
      });
      window.addEventListener("test", null, b);
    } catch (a) {}

    return a;
  }

  function s() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
  }

  function t(a, b) {
    return 100 / (b - a);
  }

  function u(a, b) {
    return 100 * b / (a[1] - a[0]);
  }

  function v(a, b) {
    return u(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]);
  }

  function w(a, b) {
    return b * (a[1] - a[0]) / 100 + a[0];
  }

  function x(a, b) {
    for (var c = 1; a >= b[c];) {
      c += 1;
    }

    return c;
  }

  function y(a, b, c) {
    if (c >= a.slice(-1)[0]) return 100;
    var d = x(c, a),
        e = a[d - 1],
        f = a[d],
        g = b[d - 1],
        h = b[d];
    return g + v([e, f], c) / t(g, h);
  }

  function z(a, b, c) {
    if (c >= 100) return a.slice(-1)[0];
    var d = x(c, b),
        e = a[d - 1],
        f = a[d],
        g = b[d - 1];
    return w([e, f], (c - g) * t(g, b[d]));
  }

  function A(a, b, c, d) {
    if (100 === d) return d;
    var e = x(d, a),
        g = a[e - 1],
        h = a[e];
    return c ? d - g > (h - g) / 2 ? h : g : b[e - 1] ? a[e - 1] + f(d - a[e - 1], b[e - 1]) : d;
  }

  function B(a, b, c) {
    var d;
    if ("number" == typeof b && (b = [b]), !Array.isArray(b)) throw new Error("noUiSlider (" + $ + "): 'range' contains invalid value.");
    if (d = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !h(d) || !h(b[0])) throw new Error("noUiSlider (" + $ + "): 'range' value isn't numeric.");
    c.xPct.push(d), c.xVal.push(b[0]), d ? c.xSteps.push(!isNaN(b[1]) && b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1]), c.xHighestCompleteStep.push(0);
  }

  function C(a, b, c) {
    if (!b) return !0;
    c.xSteps[a] = u([c.xVal[a], c.xVal[a + 1]], b) / t(c.xPct[a], c.xPct[a + 1]);
    var d = (c.xVal[a + 1] - c.xVal[a]) / c.xNumSteps[a],
        e = Math.ceil(Number(d.toFixed(3)) - 1),
        f = c.xVal[a] + c.xNumSteps[a] * e;
    c.xHighestCompleteStep[a] = f;
  }

  function D(a, b, c) {
    this.xPct = [], this.xVal = [], this.xSteps = [c || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = b;
    var d,
        e = [];

    for (d in a) {
      a.hasOwnProperty(d) && e.push([a[d], d]);
    }

    for (e.length && "object" == _typeof(e[0][0]) ? e.sort(function (a, b) {
      return a[0][0] - b[0][0];
    }) : e.sort(function (a, b) {
      return a[0] - b[0];
    }), d = 0; d < e.length; d++) {
      B(e[d][1], e[d][0], this);
    }

    for (this.xNumSteps = this.xSteps.slice(0), d = 0; d < this.xNumSteps.length; d++) {
      C(d, this.xNumSteps[d], this);
    }
  }

  function E(b) {
    if (a(b)) return !0;
    throw new Error("noUiSlider (" + $ + "): 'format' requires 'to' and 'from' methods.");
  }

  function F(a, b) {
    if (!h(b)) throw new Error("noUiSlider (" + $ + "): 'step' is not numeric.");
    a.singleStep = b;
  }

  function G(a, b) {
    if ("object" != _typeof(b) || Array.isArray(b)) throw new Error("noUiSlider (" + $ + "): 'range' is not an object.");
    if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider (" + $ + "): Missing 'min' or 'max' in 'range'.");
    if (b.min === b.max) throw new Error("noUiSlider (" + $ + "): 'range' 'min' and 'max' cannot be equal.");
    a.spectrum = new D(b, a.snap, a.singleStep);
  }

  function H(a, b) {
    if (b = k(b), !Array.isArray(b) || !b.length) throw new Error("noUiSlider (" + $ + "): 'start' option is incorrect.");
    a.handles = b.length, a.start = b;
  }

  function I(a, b) {
    if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider (" + $ + "): 'snap' option must be a boolean.");
  }

  function J(a, b) {
    if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider (" + $ + "): 'animate' option must be a boolean.");
  }

  function K(a, b) {
    if (a.animationDuration = b, "number" != typeof b) throw new Error("noUiSlider (" + $ + "): 'animationDuration' option must be a number.");
  }

  function L(a, b) {
    var c,
        d = [!1];

    if ("lower" === b ? b = [!0, !1] : "upper" === b && (b = [!1, !0]), !0 === b || !1 === b) {
      for (c = 1; c < a.handles; c++) {
        d.push(b);
      }

      d.push(!1);
    } else {
      if (!Array.isArray(b) || !b.length || b.length !== a.handles + 1) throw new Error("noUiSlider (" + $ + "): 'connect' option doesn't match handle count.");
      d = b;
    }

    a.connect = d;
  }

  function M(a, b) {
    switch (b) {
      case "horizontal":
        a.ort = 0;
        break;

      case "vertical":
        a.ort = 1;
        break;

      default:
        throw new Error("noUiSlider (" + $ + "): 'orientation' option is invalid.");
    }
  }

  function N(a, b) {
    if (!h(b)) throw new Error("noUiSlider (" + $ + "): 'margin' option must be numeric.");
    if (0 !== b && (a.margin = a.spectrum.getMargin(b), !a.margin)) throw new Error("noUiSlider (" + $ + "): 'margin' option is only supported on linear sliders.");
  }

  function O(a, b) {
    if (!h(b)) throw new Error("noUiSlider (" + $ + "): 'limit' option must be numeric.");
    if (a.limit = a.spectrum.getMargin(b), !a.limit || a.handles < 2) throw new Error("noUiSlider (" + $ + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
  }

  function P(a, b) {
    if (!h(b) && !Array.isArray(b)) throw new Error("noUiSlider (" + $ + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    if (Array.isArray(b) && 2 !== b.length && !h(b[0]) && !h(b[1])) throw new Error("noUiSlider (" + $ + "): 'padding' option must be numeric or array of exactly 2 numbers.");

    if (0 !== b) {
      if (Array.isArray(b) || (b = [b, b]), a.padding = [a.spectrum.getMargin(b[0]), a.spectrum.getMargin(b[1])], !1 === a.padding[0] || !1 === a.padding[1]) throw new Error("noUiSlider (" + $ + "): 'padding' option is only supported on linear sliders.");
      if (a.padding[0] < 0 || a.padding[1] < 0) throw new Error("noUiSlider (" + $ + "): 'padding' option must be a positive number(s).");
      if (a.padding[0] + a.padding[1] >= 100) throw new Error("noUiSlider (" + $ + "): 'padding' option must not exceed 100% of the range.");
    }
  }

  function Q(a, b) {
    switch (b) {
      case "ltr":
        a.dir = 0;
        break;

      case "rtl":
        a.dir = 1;
        break;

      default:
        throw new Error("noUiSlider (" + $ + "): 'direction' option was not recognized.");
    }
  }

  function R(a, b) {
    if ("string" != typeof b) throw new Error("noUiSlider (" + $ + "): 'behaviour' must be a string containing options.");
    var c = b.indexOf("tap") >= 0,
        d = b.indexOf("drag") >= 0,
        e = b.indexOf("fixed") >= 0,
        f = b.indexOf("snap") >= 0,
        g = b.indexOf("hover") >= 0;

    if (e) {
      if (2 !== a.handles) throw new Error("noUiSlider (" + $ + "): 'fixed' behaviour must be used with 2 handles");
      N(a, a.start[1] - a.start[0]);
    }

    a.events = {
      tap: c || f,
      drag: d,
      fixed: e,
      snap: f,
      hover: g
    };
  }

  function S(a, b) {
    if (!1 !== b) if (!0 === b) {
      a.tooltips = [];

      for (var c = 0; c < a.handles; c++) {
        a.tooltips.push(!0);
      }
    } else {
      if (a.tooltips = k(b), a.tooltips.length !== a.handles) throw new Error("noUiSlider (" + $ + "): must pass a formatter for all handles.");
      a.tooltips.forEach(function (a) {
        if ("boolean" != typeof a && ("object" != _typeof(a) || "function" != typeof a.to)) throw new Error("noUiSlider (" + $ + "): 'tooltips' must be passed a formatter or 'false'.");
      });
    }
  }

  function T(a, b) {
    a.ariaFormat = b, E(b);
  }

  function U(a, b) {
    a.format = b, E(b);
  }

  function V(a, b) {
    if ("string" != typeof b && !1 !== b) throw new Error("noUiSlider (" + $ + "): 'cssPrefix' must be a string or `false`.");
    a.cssPrefix = b;
  }

  function W(a, b) {
    if ("object" != _typeof(b)) throw new Error("noUiSlider (" + $ + "): 'cssClasses' must be an object.");

    if ("string" == typeof a.cssPrefix) {
      a.cssClasses = {};

      for (var c in b) {
        b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c]);
      }
    } else a.cssClasses = b;
  }

  function X(a) {
    var b = {
      margin: 0,
      limit: 0,
      padding: 0,
      animate: !0,
      animationDuration: 300,
      ariaFormat: _,
      format: _
    },
        d = {
      step: {
        r: !1,
        t: F
      },
      start: {
        r: !0,
        t: H
      },
      connect: {
        r: !0,
        t: L
      },
      direction: {
        r: !0,
        t: Q
      },
      snap: {
        r: !1,
        t: I
      },
      animate: {
        r: !1,
        t: J
      },
      animationDuration: {
        r: !1,
        t: K
      },
      range: {
        r: !0,
        t: G
      },
      orientation: {
        r: !1,
        t: M
      },
      margin: {
        r: !1,
        t: N
      },
      limit: {
        r: !1,
        t: O
      },
      padding: {
        r: !1,
        t: P
      },
      behaviour: {
        r: !0,
        t: R
      },
      ariaFormat: {
        r: !1,
        t: T
      },
      format: {
        r: !1,
        t: U
      },
      tooltips: {
        r: !1,
        t: S
      },
      cssPrefix: {
        r: !0,
        t: V
      },
      cssClasses: {
        r: !0,
        t: W
      }
    },
        e = {
      connect: !1,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      cssPrefix: "noUi-",
      cssClasses: {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
      }
    };
    a.format && !a.ariaFormat && (a.ariaFormat = a.format), Object.keys(d).forEach(function (f) {
      if (!c(a[f]) && void 0 === e[f]) {
        if (d[f].r) throw new Error("noUiSlider (" + $ + "): '" + f + "' is required.");
        return !0;
      }

      d[f].t(b, c(a[f]) ? a[f] : e[f]);
    }), b.pips = a.pips;
    var f = document.createElement("div"),
        g = void 0 !== f.style.msTransform,
        h = void 0 !== f.style.transform;
    b.transformRule = h ? "transform" : g ? "msTransform" : "webkitTransform";
    var i = [["left", "top"], ["right", "bottom"]];
    return b.style = i[b.dir][b.ort], b;
  }

  function Y(a, c, f) {
    function h(a, b) {
      var c = ya.createElement("div");
      return b && m(c, b), a.appendChild(c), c;
    }

    function l(a, b) {
      var d = h(a, c.cssClasses.origin),
          e = h(d, c.cssClasses.handle);
      return e.setAttribute("data-handle", b), e.setAttribute("tabindex", "0"), e.setAttribute("role", "slider"), e.setAttribute("aria-orientation", c.ort ? "vertical" : "horizontal"), 0 === b ? m(e, c.cssClasses.handleLower) : b === c.handles - 1 && m(e, c.cssClasses.handleUpper), d;
    }

    function t(a, b) {
      return !!b && h(a, c.cssClasses.connect);
    }

    function u(a, b) {
      var d = h(b, c.cssClasses.connects);
      ka = [], la = [], la.push(t(d, a[0]));

      for (var e = 0; e < c.handles; e++) {
        ka.push(l(b, e)), ta[e] = e, la.push(t(d, a[e + 1]));
      }
    }

    function v(a) {
      m(a, c.cssClasses.target), 0 === c.dir ? m(a, c.cssClasses.ltr) : m(a, c.cssClasses.rtl), 0 === c.ort ? m(a, c.cssClasses.horizontal) : m(a, c.cssClasses.vertical), ja = h(a, c.cssClasses.base);
    }

    function w(a, b) {
      return !!c.tooltips[b] && h(a.firstChild, c.cssClasses.tooltip);
    }

    function x() {
      var a = ka.map(w);
      Q("update", function (b, d, e) {
        if (a[d]) {
          var f = b[d];
          !0 !== c.tooltips[d] && (f = c.tooltips[d].to(e[d])), a[d].innerHTML = f;
        }
      });
    }

    function y() {
      Q("update", function (a, b, d, e, f) {
        ta.forEach(function (a) {
          var b = ka[a],
              e = U(sa, a, 0, !0, !0, !0),
              g = U(sa, a, 100, !0, !0, !0),
              h = f[a],
              i = c.ariaFormat.to(d[a]);
          b.children[0].setAttribute("aria-valuemin", e.toFixed(1)), b.children[0].setAttribute("aria-valuemax", g.toFixed(1)), b.children[0].setAttribute("aria-valuenow", h.toFixed(1)), b.children[0].setAttribute("aria-valuetext", i);
        });
      });
    }

    function z(a, b, c) {
      if ("range" === a || "steps" === a) return va.xVal;

      if ("count" === a) {
        if (b < 2) throw new Error("noUiSlider (" + $ + "): 'values' (>= 2) required for mode 'count'.");
        var d = b - 1,
            e = 100 / d;

        for (b = []; d--;) {
          b[d] = d * e;
        }

        b.push(100), a = "positions";
      }

      return "positions" === a ? b.map(function (a) {
        return va.fromStepping(c ? va.getStep(a) : a);
      }) : "values" === a ? c ? b.map(function (a) {
        return va.fromStepping(va.getStep(va.toStepping(a)));
      }) : b : void 0;
    }

    function A(a, b, c) {
      function d(a, b) {
        return (a + b).toFixed(7) / 1;
      }

      var f = {},
          g = va.xVal[0],
          h = va.xVal[va.xVal.length - 1],
          i = !1,
          j = !1,
          k = 0;
      return c = e(c.slice().sort(function (a, b) {
        return a - b;
      })), c[0] !== g && (c.unshift(g), i = !0), c[c.length - 1] !== h && (c.push(h), j = !0), c.forEach(function (e, g) {
        var h,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = e,
            v = c[g + 1];
        if ("steps" === b && (h = va.xNumSteps[g]), h || (h = v - u), !1 !== u && void 0 !== v) for (h = Math.max(h, 1e-7), l = u; l <= v; l = d(l, h)) {
          for (n = va.toStepping(l), o = n - k, r = o / a, s = Math.round(r), t = o / s, m = 1; m <= s; m += 1) {
            p = k + m * t, f[p.toFixed(5)] = ["x", 0];
          }

          q = c.indexOf(l) > -1 ? 1 : "steps" === b ? 2 : 0, !g && i && (q = 0), l === v && j || (f[n.toFixed(5)] = [l, q]), k = n;
        }
      }), f;
    }

    function B(a, b, d) {
      function e(a, b) {
        var d = b === c.cssClasses.value,
            e = d ? k : l,
            f = d ? i : j;
        return b + " " + e[c.ort] + " " + f[a];
      }

      function f(a, f) {
        f[1] = f[1] && b ? b(f[0], f[1]) : f[1];
        var i = h(g, !1);
        i.className = e(f[1], c.cssClasses.marker), i.style[c.style] = a + "%", f[1] && (i = h(g, !1), i.className = e(f[1], c.cssClasses.value), i.setAttribute("data-value", f[0]), i.style[c.style] = a + "%", i.innerText = d.to(f[0]));
      }

      var g = ya.createElement("div"),
          i = [c.cssClasses.valueNormal, c.cssClasses.valueLarge, c.cssClasses.valueSub],
          j = [c.cssClasses.markerNormal, c.cssClasses.markerLarge, c.cssClasses.markerSub],
          k = [c.cssClasses.valueHorizontal, c.cssClasses.valueVertical],
          l = [c.cssClasses.markerHorizontal, c.cssClasses.markerVertical];
      return m(g, c.cssClasses.pips), m(g, 0 === c.ort ? c.cssClasses.pipsHorizontal : c.cssClasses.pipsVertical), Object.keys(a).forEach(function (b) {
        f(b, a[b]);
      }), g;
    }

    function C() {
      na && (b(na), na = null);
    }

    function D(a) {
      C();
      var b = a.mode,
          c = a.density || 1,
          d = a.filter || !1,
          e = a.values || !1,
          f = a.stepped || !1,
          g = z(b, e, f),
          h = A(c, b, g),
          i = a.format || {
        to: Math.round
      };
      return na = ra.appendChild(B(h, d, i));
    }

    function E() {
      var a = ja.getBoundingClientRect(),
          b = "offset" + ["Width", "Height"][c.ort];
      return 0 === c.ort ? a.width || ja[b] : a.height || ja[b];
    }

    function F(a, b, d, e) {
      var f = function f(_f) {
        return !!(_f = G(_f, e.pageOffset, e.target || b)) && !(ra.hasAttribute("disabled") && !e.doNotReject) && !(o(ra, c.cssClasses.tap) && !e.doNotReject) && !(a === oa.start && void 0 !== _f.buttons && _f.buttons > 1) && (!e.hover || !_f.buttons) && (qa || _f.preventDefault(), _f.calcPoint = _f.points[c.ort], void d(_f, e));
      },
          g = [];

      return a.split(" ").forEach(function (a) {
        b.addEventListener(a, f, !!qa && {
          passive: !0
        }), g.push([a, f]);
      }), g;
    }

    function G(a, b, c) {
      var d,
          e,
          f = 0 === a.type.indexOf("touch"),
          g = 0 === a.type.indexOf("mouse"),
          h = 0 === a.type.indexOf("pointer");

      if (0 === a.type.indexOf("MSPointer") && (h = !0), f) {
        var i = function i(a) {
          return a.target === c || c.contains(a.target);
        };

        if ("touchstart" === a.type) {
          var j = Array.prototype.filter.call(a.touches, i);
          if (j.length > 1) return !1;
          d = j[0].pageX, e = j[0].pageY;
        } else {
          var k = Array.prototype.find.call(a.changedTouches, i);
          if (!k) return !1;
          d = k.pageX, e = k.pageY;
        }
      }

      return b = b || p(ya), (g || h) && (d = a.clientX + b.x, e = a.clientY + b.y), a.pageOffset = b, a.points = [d, e], a.cursor = g || h, a;
    }

    function H(a) {
      var b = a - g(ja, c.ort),
          d = 100 * b / E();
      return d = j(d), c.dir ? 100 - d : d;
    }

    function I(a) {
      var b = 100,
          c = !1;
      return ka.forEach(function (d, e) {
        if (!d.hasAttribute("disabled")) {
          var f = Math.abs(sa[e] - a);
          (f < b || 100 === f && 100 === b) && (c = e, b = f);
        }
      }), c;
    }

    function J(a, b) {
      "mouseout" === a.type && "HTML" === a.target.nodeName && null === a.relatedTarget && L(a, b);
    }

    function K(a, b) {
      if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === a.buttons && 0 !== b.buttonsProperty) return L(a, b);
      var d = (c.dir ? -1 : 1) * (a.calcPoint - b.startCalcPoint);
      W(d > 0, 100 * d / b.baseSize, b.locations, b.handleNumbers);
    }

    function L(a, b) {
      b.handle && (n(b.handle, c.cssClasses.active), ua -= 1), b.listeners.forEach(function (a) {
        za.removeEventListener(a[0], a[1]);
      }), 0 === ua && (n(ra, c.cssClasses.drag), _(), a.cursor && (Aa.style.cursor = "", Aa.removeEventListener("selectstart", d))), b.handleNumbers.forEach(function (a) {
        S("change", a), S("set", a), S("end", a);
      });
    }

    function M(a, b) {
      var e;

      if (1 === b.handleNumbers.length) {
        var f = ka[b.handleNumbers[0]];
        if (f.hasAttribute("disabled")) return !1;
        e = f.children[0], ua += 1, m(e, c.cssClasses.active);
      }

      a.stopPropagation();
      var g = [],
          h = F(oa.move, za, K, {
        target: a.target,
        handle: e,
        listeners: g,
        startCalcPoint: a.calcPoint,
        baseSize: E(),
        pageOffset: a.pageOffset,
        handleNumbers: b.handleNumbers,
        buttonsProperty: a.buttons,
        locations: sa.slice()
      }),
          i = F(oa.end, za, L, {
        target: a.target,
        handle: e,
        listeners: g,
        doNotReject: !0,
        handleNumbers: b.handleNumbers
      }),
          j = F("mouseout", za, J, {
        target: a.target,
        handle: e,
        listeners: g,
        doNotReject: !0,
        handleNumbers: b.handleNumbers
      });
      g.push.apply(g, h.concat(i, j)), a.cursor && (Aa.style.cursor = getComputedStyle(a.target).cursor, ka.length > 1 && m(ra, c.cssClasses.drag), Aa.addEventListener("selectstart", d, !1)), b.handleNumbers.forEach(function (a) {
        S("start", a);
      });
    }

    function N(a) {
      a.stopPropagation();
      var b = H(a.calcPoint),
          d = I(b);
      if (!1 === d) return !1;
      c.events.snap || i(ra, c.cssClasses.tap, c.animationDuration), aa(d, b, !0, !0), _(), S("slide", d, !0), S("update", d, !0), S("change", d, !0), S("set", d, !0), c.events.snap && M(a, {
        handleNumbers: [d]
      });
    }

    function O(a) {
      var b = H(a.calcPoint),
          c = va.getStep(b),
          d = va.fromStepping(c);
      Object.keys(xa).forEach(function (a) {
        "hover" === a.split(".")[0] && xa[a].forEach(function (a) {
          a.call(ma, d);
        });
      });
    }

    function P(a) {
      a.fixed || ka.forEach(function (a, b) {
        F(oa.start, a.children[0], M, {
          handleNumbers: [b]
        });
      }), a.tap && F(oa.start, ja, N, {}), a.hover && F(oa.move, ja, O, {
        hover: !0
      }), a.drag && la.forEach(function (b, d) {
        if (!1 !== b && 0 !== d && d !== la.length - 1) {
          var e = ka[d - 1],
              f = ka[d],
              g = [b];
          m(b, c.cssClasses.draggable), a.fixed && (g.push(e.children[0]), g.push(f.children[0])), g.forEach(function (a) {
            F(oa.start, a, M, {
              handles: [e, f],
              handleNumbers: [d - 1, d]
            });
          });
        }
      });
    }

    function Q(a, b) {
      xa[a] = xa[a] || [], xa[a].push(b), "update" === a.split(".")[0] && ka.forEach(function (a, b) {
        S("update", b);
      });
    }

    function R(a) {
      var b = a && a.split(".")[0],
          c = b && a.substring(b.length);
      Object.keys(xa).forEach(function (a) {
        var d = a.split(".")[0],
            e = a.substring(d.length);
        b && b !== d || c && c !== e || delete xa[a];
      });
    }

    function S(a, b, d) {
      Object.keys(xa).forEach(function (e) {
        var f = e.split(".")[0];
        a === f && xa[e].forEach(function (a) {
          a.call(ma, wa.map(c.format.to), b, wa.slice(), d || !1, sa.slice());
        });
      });
    }

    function T(a) {
      return a + "%";
    }

    function U(a, b, d, e, f, g) {
      return ka.length > 1 && (e && b > 0 && (d = Math.max(d, a[b - 1] + c.margin)), f && b < ka.length - 1 && (d = Math.min(d, a[b + 1] - c.margin))), ka.length > 1 && c.limit && (e && b > 0 && (d = Math.min(d, a[b - 1] + c.limit)), f && b < ka.length - 1 && (d = Math.max(d, a[b + 1] - c.limit))), c.padding && (0 === b && (d = Math.max(d, c.padding[0])), b === ka.length - 1 && (d = Math.min(d, 100 - c.padding[1]))), d = va.getStep(d), !((d = j(d)) === a[b] && !g) && d;
    }

    function V(a, b) {
      var d = c.ort;
      return (d ? b : a) + ", " + (d ? a : b);
    }

    function W(a, b, c, d) {
      var e = c.slice(),
          f = [!a, a],
          g = [a, !a];
      d = d.slice(), a && d.reverse(), d.length > 1 ? d.forEach(function (a, c) {
        var d = U(e, a, e[a] + b, f[c], g[c], !1);
        !1 === d ? b = 0 : (b = d - e[a], e[a] = d);
      }) : f = g = [!0];
      var h = !1;
      d.forEach(function (a, d) {
        h = aa(a, c[a] + b, f[d], g[d]) || h;
      }), h && d.forEach(function (a) {
        S("update", a), S("slide", a);
      });
    }

    function Y(a, b) {
      return c.dir ? 100 - a - b : a;
    }

    function Z(a, b) {
      sa[a] = b, wa[a] = va.fromStepping(b);
      var d = "translate(" + V(T(Y(b, 0) - Ba), "0") + ")";
      ka[a].style[c.transformRule] = d, ba(a), ba(a + 1);
    }

    function _() {
      ta.forEach(function (a) {
        var b = sa[a] > 50 ? -1 : 1,
            c = 3 + (ka.length + b * a);
        ka[a].style.zIndex = c;
      });
    }

    function aa(a, b, c, d) {
      return !1 !== (b = U(sa, a, b, c, d, !1)) && (Z(a, b), !0);
    }

    function ba(a) {
      if (la[a]) {
        var b = 0,
            d = 100;
        0 !== a && (b = sa[a - 1]), a !== la.length - 1 && (d = sa[a]);
        var e = d - b,
            f = "translate(" + V(T(Y(b, e)), "0") + ")",
            g = "scale(" + V(e / 100, "1") + ")";
        la[a].style[c.transformRule] = f + " " + g;
      }
    }

    function ca(a, b) {
      return null === a || !1 === a || void 0 === a ? sa[b] : ("number" == typeof a && (a = String(a)), a = c.format.from(a), a = va.toStepping(a), !1 === a || isNaN(a) ? sa[b] : a);
    }

    function da(a, b) {
      var d = k(a),
          e = void 0 === sa[0];
      b = void 0 === b || !!b, c.animate && !e && i(ra, c.cssClasses.tap, c.animationDuration), ta.forEach(function (a) {
        aa(a, ca(d[a], a), !0, !1);
      }), ta.forEach(function (a) {
        aa(a, sa[a], !0, !0);
      }), _(), ta.forEach(function (a) {
        S("update", a), null !== d[a] && b && S("set", a);
      });
    }

    function ea(a) {
      da(c.start, a);
    }

    function fa() {
      var a = wa.map(c.format.to);
      return 1 === a.length ? a[0] : a;
    }

    function ga() {
      for (var a in c.cssClasses) {
        c.cssClasses.hasOwnProperty(a) && n(ra, c.cssClasses[a]);
      }

      for (; ra.firstChild;) {
        ra.removeChild(ra.firstChild);
      }

      delete ra.noUiSlider;
    }

    function ha() {
      return sa.map(function (a, b) {
        var c = va.getNearbySteps(a),
            d = wa[b],
            e = c.thisStep.step,
            f = null;
        !1 !== e && d + e > c.stepAfter.startValue && (e = c.stepAfter.startValue - d), f = d > c.thisStep.startValue ? c.thisStep.step : !1 !== c.stepBefore.step && d - c.stepBefore.highestStep, 100 === a ? e = null : 0 === a && (f = null);
        var g = va.countStepDecimals();
        return null !== e && !1 !== e && (e = Number(e.toFixed(g))), null !== f && !1 !== f && (f = Number(f.toFixed(g))), [f, e];
      });
    }

    function ia(a, b) {
      var d = fa(),
          e = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
      e.forEach(function (b) {
        void 0 !== a[b] && (f[b] = a[b]);
      });
      var g = X(f);
      e.forEach(function (b) {
        void 0 !== a[b] && (c[b] = g[b]);
      }), va = g.spectrum, c.margin = g.margin, c.limit = g.limit, c.padding = g.padding, c.pips && D(c.pips), sa = [], da(a.start || d, b);
    }

    var ja,
        ka,
        la,
        ma,
        na,
        oa = q(),
        pa = s(),
        qa = pa && r(),
        ra = a,
        sa = [],
        ta = [],
        ua = 0,
        va = c.spectrum,
        wa = [],
        xa = {},
        ya = a.ownerDocument,
        za = ya.documentElement,
        Aa = ya.body,
        Ba = "rtl" === ya.dir || 1 === c.ort ? 0 : 100;
    return v(ra), u(c.connect, ja), P(c.events), da(c.start), ma = {
      destroy: ga,
      steps: ha,
      on: Q,
      off: R,
      get: fa,
      set: da,
      reset: ea,
      __moveHandles: function __moveHandles(a, b, c) {
        W(a, b, sa, c);
      },
      options: f,
      updateOptions: ia,
      target: ra,
      removePips: C,
      pips: D
    }, c.pips && D(c.pips), c.tooltips && x(), y(), ma;
  }

  function Z(a, b) {
    if (!a || !a.nodeName) throw new Error("noUiSlider (" + $ + "): create requires a single element, got: " + a);
    if (a.noUiSlider) throw new Error("noUiSlider (" + $ + "): Slider was already initialized.");
    var c = X(b, a),
        d = Y(a, c, b);
    return a.noUiSlider = d, d;
  }

  var $ = "11.1.0";
  D.prototype.getMargin = function (a) {
    var b = this.xNumSteps[0];
    if (b && a / b % 1 != 0) throw new Error("noUiSlider (" + $ + "): 'limit', 'margin' and 'padding' must be divisible by step.");
    return 2 === this.xPct.length && u(this.xVal, a);
  }, D.prototype.toStepping = function (a) {
    return a = y(this.xVal, this.xPct, a);
  }, D.prototype.fromStepping = function (a) {
    return z(this.xVal, this.xPct, a);
  }, D.prototype.getStep = function (a) {
    return a = A(this.xPct, this.xSteps, this.snap, a);
  }, D.prototype.getNearbySteps = function (a) {
    var b = x(a, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[b - 2],
        step: this.xNumSteps[b - 2],
        highestStep: this.xHighestCompleteStep[b - 2]
      },
      thisStep: {
        startValue: this.xVal[b - 1],
        step: this.xNumSteps[b - 1],
        highestStep: this.xHighestCompleteStep[b - 1]
      },
      stepAfter: {
        startValue: this.xVal[b - 0],
        step: this.xNumSteps[b - 0],
        highestStep: this.xHighestCompleteStep[b - 0]
      }
    };
  }, D.prototype.countStepDecimals = function () {
    var a = this.xNumSteps.map(l);
    return Math.max.apply(null, a);
  }, D.prototype.convert = function (a) {
    return this.getStep(this.toStepping(a));
  };
  var _ = {
    to: function to(a) {
      return void 0 !== a && a.toFixed(2);
    },
    from: Number
  };
  return {
    version: $,
    create: Z
  };
});

/***/ }),

/***/ "./resources/js/owl.carousel.min.js":
/*!******************************************!*\
  !*** ./resources/js/owl.carousel.min.js ***!
  \******************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this);
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function run() {
      this._width = this.$element.width();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      this.$stage.children(".cloned").remove();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this.settings.margin || "",
          c = !this.settings.autoWidth,
          d = this.settings.rtl,
          e = {
        width: "auto",
        "margin-left": d ? b : "",
        "margin-right": d ? "" : b
      };
      !c && this.$stage.children().css(e), a.css = e;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          c = null,
          d = this._items.length,
          e = !this.settings.autoWidth,
          f = [];

      for (a.items = {
        merge: !1,
        width: b
      }; d--;) {
        c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      }

      this._widths = f;
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var b = [],
          c = this._items,
          d = this.settings,
          e = Math.max(2 * d.items, 4),
          f = 2 * Math.ceil(c.length / 2),
          g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
          h = "",
          i = "";

      for (g /= 2; g > 0;) {
        b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
      }

      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
        d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      }

      this._coordinates = f;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var a = this.settings.stagePadding,
          b = this._coordinates,
          c = {
        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
        "padding-left": a || "",
        "padding-right": a || ""
      };
      this.$stage.css(c);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this._coordinates.length,
          c = !this.settings.autoWidth,
          d = this.$stage.children();
      if (c && a.items.merge) for (; b--;) {
        a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      } else c && (a.css.width = a.items.width, d.css(a.css));
    }
  }, {
    filter: ["items"],
    run: function run() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style");
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
    }
  }, {
    filter: ["position"],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function run() {
      var a,
          b,
          c,
          d,
          e = this.settings.rtl ? 1 : -1,
          f = 2 * this.settings.stagePadding,
          g = this.coordinates(this.current()) + f,
          h = g + this.width() * e,
          i = [];

      for (c = 0, d = this._coordinates.length; c < d; c++) {
        a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      }

      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
    }
  }], e.prototype.initializeStage = function () {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
      "class": this.settings.stageClass
    }).wrap(a("<div/>", {
      "class": this.settings.stageOuterClass
    })), this.$element.append(this.$stage.parent()));
  }, e.prototype.initializeItems = function () {
    var b = this.$element.find(".owl-item");
    if (b.length) return this._items = b.get().map(function (b) {
      return a(b);
    }), this._mergers = this._items.map(function () {
      return 1;
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
  }, e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var a, b, c;
      a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a);
    }

    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.isVisible = function () {
    return !this.settings.checkVisibility || this.$element.is(":visible");
  }, e.prototype.setup = function () {
    var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a));
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data;
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a];
    }, this._invalidated), e = {}; b < c;) {
      (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    }

    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function (a) {
    var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function (b, c) {
    var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
    return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
      return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e;
    }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e;
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    });
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0;
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;

    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b;
    });
  }, e.prototype.reset = function (a) {
    (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
        e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0);
  }, e.prototype.maximum = function (a) {
    var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
      if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);) {
        ;
      }
      f = b + 1;
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2;
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function f(a) {
      return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
    };

    return b === d ? a.map(this._clones, function (a, b) {
      return f(b);
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null;
    });
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed;
  }, e.prototype.coordinates = function (b) {
    var c,
        e = 1,
        f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update();
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a);
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a);
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType;
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    });
  }, e.prototype.remove = function (a) {
    (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }));
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

    for (var d in this._plugins) {
      this._plugins[d].destroy();
    }

    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;

    switch (b) {
      case "<":
        return d ? a > c : a < c;

      case ">":
        return d ? a < c : a > c;

      case ">=":
        return d ? a <= c : a >= c;

      case "<=":
        return d ? a >= c : a <= c;
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        i = a.camelCase(a.grep(["on", b, d], function (a) {
      return a;
    }).join("-").toLowerCase()),
        j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
      relatedTarget: this
    }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j);
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
    }, this));
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--;
    }, this));
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
        }, a.event.special[b.name].owl = !0;
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d;
    }, this)));
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0;
    }, this));
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b];
    }, this));
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a));
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
          f = d.data("owl.carousel");
      f || (f = new e(this, "object" == _typeof(b) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
        }, f));
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function () {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
          var c = this._core.settings,
              e = c.center && Math.ceil(c.items / 2) || c.items,
              f = c.center && -1 * e || 0,
              g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
              h = this._core.clones().length,
              i = a.proxy(function (a, b) {
            this.load(b);
          }, this);

          for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) {
            this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
          }
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    lazyLoad: !1,
    lazyLoadEager: 0
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
        e = d && d.find(".owl-lazy");

    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e,
          f = a(d),
          g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
        this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("srcset", g) : (e = new Image(), e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this), e.src = g);
    }, this)), this._loaded.push(d.get(0)));
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this._core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(c) {
    this._core = c, this._previousHeight = null, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var d = this;
    a(b).on("load", function () {
      d._core.settings.autoHeight && d.update();
    }), a(b).resize(function () {
      d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
        d.update();
      }, 250));
    });
  };

  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
        c = b + this._core.settings.items,
        d = this._core.settings.lazyLoad,
        e = this._core.$stage.children().toArray().slice(b, c),
        f = [],
        g = 0;

    a.each(e, function (b, c) {
      f.push(a(c).height());
    }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        });
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a);
    }, this));
  };

  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
      return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(),
        d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
        e = a.attr("data-width") || this._core.settings.videoWidth,
        f = a.attr("data-height") || this._core.settings.videoHeight,
        g = a.attr("href");

    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar";
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail = function (b, c) {
    var d,
        e,
        f,
        g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
        h = b.find("img"),
        i = "src",
        j = "",
        k = this._core.settings,
        l = function l(c) {
      e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
        "class": "owl-video-tn " + j,
        srcType: c
      }) : a("<div/>", {
        "class": "owl-video-tn",
        style: "opacity:1;background-image:url(" + c + ")"
      }), b.after(d), b.after(e);
    };

    if (b.wrap(a("<div/>", {
      "class": "owl-video-wrapper",
      style: g
    })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a[0].thumbnail_large, l(f);
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a.framegrab_url, l(f);
      }
    });
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function (b) {
    var c,
        d = a(b.target),
        e = d.closest("." + this._core.settings.itemClass),
        f = this._videos[e.attr("data-video")],
        g = f.width || "100%",
        h = f.height || this._core.$stage.height();

    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function () {
    var a, b;

    this._core.$element.off("click.owl.video");

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type);
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b,
          c = a.proxy(this.clear, this),
          d = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          f = this.core.settings.animateIn,
          g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this.core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c);
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };

  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype._next = function (d) {
    this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
  }, e.prototype.read = function () {
    return new Date().getTime() - this._time;
  }, e.prototype.play = function (c, d) {
    var e;
    this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e);
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"));
  }, e.prototype.pause = function () {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call));
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  e.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b,
        c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed);
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed);
    }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed);
    }, this));

    for (b in this._overrides) {
      this._core[b] = a.proxy(this[b], this);
    }
  }, e.prototype.destroy = function () {
    var a, b, c, d, e;
    e = this._core.settings;

    for (a in this._handlers) {
      this.$element.off(a, this._handlers[a]);
    }

    for (b in this._controls) {
      "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
    }

    for (d in this.overides) {
      this._core[d] = this._overrides[d];
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, e.prototype.update = function () {
    var a,
        b,
        c,
        d = this._core.clones().length / 2,
        e = d + this._core.items().length,
        f = this._core.maximum(!0),
        g = this._core.settings,
        h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({
          start: Math.min(f, a - d),
          end: a - d + h - 1
        }), Math.min(f, a - d) === f) break;
        b = 0, ++c;
      }

      b += this._core.mergers(this._core.relative(a));
    }
  }, e.prototype.draw = function () {
    var b,
        c = this._core.settings,
        d = this._core.items().length <= c.items,
        e = this._core.relative(this._core.current()),
        f = c.loop || c.rewind;

    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    };
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());

    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b;
    }, this)).pop();
  }, e.prototype.getPosition = function (b) {
    var c,
        d,
        e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content;
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
              e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null;
          }).join();

          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
          e = this._core.$stage.children(),
          f = this._hashes[c] && e.index(this._hashes[c]);

      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
    }, this));
  };

  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");

    for (c in this._handlers) {
      this._core.$element.off(c, this._handlers[c]);
    }

    for (d in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[d] && (this[d] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1;
    }), e;
  }

  function f(a) {
    return e(a, !0);
  }

  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  },
      j = {
    csstransforms: function csstransforms() {
      return !!e("transform");
    },
    csstransforms3d: function csstransforms3d() {
      return !!e("perspective");
    },
    csstransitions: function csstransitions() {
      return !!e("transition");
    },
    cssanimations: function cssanimations() {
      return !!e("animation");
    }
  };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);

/***/ }),

/***/ "./resources/js/photoswipe-ui-default.min.js":
/*!***************************************************!*\
  !*** ./resources/js/photoswipe-ui-default.min.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var a = function a(_a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v = this,
        w = !1,
        x = !0,
        y = !0,
        z = {
      barsSize: {
        top: 44,
        bottom: "auto"
      },
      closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
      timeToIdle: 4e3,
      timeToIdleOutside: 1e3,
      loadingIndicatorDelay: 1e3,
      addCaptionHTMLFn: function addCaptionHTMLFn(a, b) {
        return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1);
      },
      closeEl: !0,
      captionEl: !0,
      fullscreenEl: !0,
      zoomEl: !0,
      shareEl: !0,
      counterEl: !0,
      arrowEl: !0,
      preloaderEl: !0,
      tapToClose: !1,
      tapToToggleControls: !0,
      clickToCloseNonZoomable: !0,
      shareButtons: [{
        id: "facebook",
        label: "Share on Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
      }, {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
      }, {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
      }, {
        id: "download",
        label: "Download image",
        url: "{{raw_image_url}}",
        download: !0
      }],
      getImageURLForShare: function getImageURLForShare() {
        return _a.currItem.src || "";
      },
      getPageURLForShare: function getPageURLForShare() {
        return window.location.href;
      },
      getTextForShare: function getTextForShare() {
        return _a.currItem.title || "";
      },
      indexIndicatorSep: " / ",
      fitControlsWidth: 1200
    },
        A = function A(a) {
      if (r) return !0;
      a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();

      for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) {
        c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
      }

      if (d) {
        a.stopPropagation && a.stopPropagation(), r = !0;
        var h = b.features.isOldAndroid ? 600 : 30;
        s = setTimeout(function () {
          r = !1;
        }, h);
      }
    },
        B = function B() {
      return !_a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth;
    },
        C = function C(a, c, d) {
      b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c);
    },
        D = function D() {
      var a = 1 === q.getNumItemsFn();
      a !== p && (C(d, "ui--one-slide", a), p = a);
    },
        E = function E() {
      C(i, "share-modal--hidden", y);
    },
        F = function F() {
      return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function () {
        y && E();
      }, 300)) : (E(), setTimeout(function () {
        y || b.addClass(i, "pswp__share-modal--fade-in");
      }, 30)), y || H(), !1;
    },
        G = function G(b) {
      b = b || window.event;
      var c = b.target || b.srcElement;
      return _a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1));
    },
        H = function H() {
      for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) {
        a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
      }

      i.children[0].innerHTML = f, i.children[0].onclick = G;
    },
        I = function I(a) {
      for (var c = 0; c < q.closeElClasses.length; c++) {
        if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0;
      }
    },
        J = 0,
        K = function K() {
      clearTimeout(u), J = 0, k && v.setIdle(!1);
    },
        L = function L(a) {
      a = a ? a : window.event;
      var b = a.relatedTarget || a.toElement;
      b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function () {
        v.setIdle(!0);
      }, q.timeToIdleOutside));
    },
        M = function M() {
      q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(_a.template, "pswp--supports-fs")) : b.removeClass(_a.template, "pswp--supports-fs"));
    },
        N = function N() {
      q.preloaderEl && (O(!0), l("beforeChange", function () {
        clearTimeout(o), o = setTimeout(function () {
          _a.currItem && _a.currItem.loading ? (!_a.allowProgressiveImg() || _a.currItem.img && !_a.currItem.img.naturalWidth) && O(!1) : O(!0);
        }, q.loadingIndicatorDelay);
      }), l("imageLoadComplete", function (b, c) {
        _a.currItem === c && O(!0);
      }));
    },
        O = function O(a) {
      n !== a && (C(m, "preloader--active", !a), n = a);
    },
        P = function P(a) {
      var c = a.vGap;

      if (B()) {
        var g = q.barsSize;
        if (q.captionEl && "auto" === g.bottom) {
          if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
            var h = f.clientHeight;
            c.bottom = parseInt(h, 10) || 44;
          } else c.bottom = g.top;
        } else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
        c.top = g.top;
      } else c.top = c.bottom = 0;
    },
        Q = function Q() {
      q.timeToIdle && l("mouseUsed", function () {
        b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function () {
          J++, 2 === J && v.setIdle(!0);
        }, q.timeToIdle / 2);
      });
    },
        R = function R() {
      l("onVerticalDrag", function (a) {
        x && a < .95 ? v.hideControls() : !x && a >= .95 && v.showControls();
      });
      var a;
      l("onPinchClose", function (b) {
        x && b < .9 ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls();
      }), l("zoomGestureEnded", function () {
        a = !1, a && !x && v.showControls();
      });
    },
        S = [{
      name: "caption",
      option: "captionEl",
      onInit: function onInit(a) {
        e = a;
      }
    }, {
      name: "share-modal",
      option: "shareEl",
      onInit: function onInit(a) {
        i = a;
      },
      onTap: function onTap() {
        F();
      }
    }, {
      name: "button--share",
      option: "shareEl",
      onInit: function onInit(a) {
        h = a;
      },
      onTap: function onTap() {
        F();
      }
    }, {
      name: "button--zoom",
      option: "zoomEl",
      onTap: _a.toggleDesktopZoom
    }, {
      name: "counter",
      option: "counterEl",
      onInit: function onInit(a) {
        g = a;
      }
    }, {
      name: "button--close",
      option: "closeEl",
      onTap: _a.close
    }, {
      name: "button--arrow--left",
      option: "arrowEl",
      onTap: _a.prev
    }, {
      name: "button--arrow--right",
      option: "arrowEl",
      onTap: _a.next
    }, {
      name: "button--fs",
      option: "fullscreenEl",
      onTap: function onTap() {
        c.isFullscreen() ? c.exit() : c.enter();
      }
    }, {
      name: "preloader",
      option: "preloaderEl",
      onInit: function onInit(a) {
        m = a;
      }
    }],
        T = function T() {
      var a,
          c,
          e,
          f = function f(d) {
        if (d) for (var f = d.length, g = 0; g < f; g++) {
          a = d[g], c = a.className;

          for (var h = 0; h < S.length; h++) {
            e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"));
          }
        }
      };

      f(d.children);
      var g = b.getChildByClass(d, "pswp__top-bar");
      g && f(g.children);
    };

    v.init = function () {
      b.extend(_a.options, z, !0), q = _a.options, d = b.getChildByClass(_a.scrollWrap, "pswp__ui"), l = _a.listen, R(), l("beforeChange", v.update), l("doubleTap", function (b) {
        var c = _a.currItem.initialZoomLevel;
        _a.getZoomLevel() !== c ? _a.zoomTo(c, b, 333) : _a.zoomTo(q.getDoubleTapZoom(!1, _a.currItem), b, 333);
      }), l("preventDragEvent", function (a, b, c) {
        var d = a.target || a.srcElement;
        d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1);
      }), l("bindEvents", function () {
        b.bind(d, "pswpTap click", A), b.bind(_a.scrollWrap, "pswpTap", v.onGlobalTap), _a.likelyTouchDevice || b.bind(_a.scrollWrap, "mouseover", v.onMouseOver);
      }), l("unbindEvents", function () {
        y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(_a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(_a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null);
      }), l("destroy", function () {
        q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1);
      }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function () {
        q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden");
      }), l("initialZoomOut", function () {
        b.addClass(d, "pswp__ui--hidden");
      }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N();
    }, v.setIdle = function (a) {
      k = a, C(d, "ui--idle", a);
    }, v.update = function () {
      x && _a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(_a.currItem, e), C(e, "caption--empty", !_a.currItem.title)), w = !0) : w = !1, y || F(), D();
    }, v.updateFullscreen = function (d) {
      d && setTimeout(function () {
        _a.setScrollOffset(0, b.getScrollY());
      }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](_a.template, "pswp--fs");
    }, v.updateIndexIndicator = function () {
      q.counterEl && (g.innerHTML = _a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn());
    }, v.onGlobalTap = function (c) {
      c = c || window.event;
      var d = c.target || c.srcElement;
      if (!r) if (c.detail && "mouse" === c.detail.pointerType) {
        if (I(d)) return void _a.close();
        b.hasClass(d, "pswp__img") && (1 === _a.getZoomLevel() && _a.getZoomLevel() <= _a.currItem.fitRatio ? q.clickToCloseNonZoomable && _a.close() : _a.toggleDesktopZoom(c.detail.releasePoint));
      } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void _a.close();
    }, v.onMouseOver = function (a) {
      a = a || window.event;
      var b = a.target || a.srcElement;
      C(d, "ui--over-close", I(b));
    }, v.hideControls = function () {
      b.addClass(d, "pswp__ui--hidden"), x = !1;
    }, v.showControls = function () {
      x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden");
    }, v.supportsFullscreen = function () {
      var a = document;
      return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen);
    }, v.getFullscreenAPI = function () {
      var b,
          c = document.documentElement,
          d = "fullscreenchange";
      return c.requestFullscreen ? b = {
        enterK: "requestFullscreen",
        exitK: "exitFullscreen",
        elementK: "fullscreenElement",
        eventK: d
      } : c.mozRequestFullScreen ? b = {
        enterK: "mozRequestFullScreen",
        exitK: "mozCancelFullScreen",
        elementK: "mozFullScreenElement",
        eventK: "moz" + d
      } : c.webkitRequestFullscreen ? b = {
        enterK: "webkitRequestFullscreen",
        exitK: "webkitExitFullscreen",
        elementK: "webkitFullscreenElement",
        eventK: "webkit" + d
      } : c.msRequestFullscreen && (b = {
        enterK: "msRequestFullscreen",
        exitK: "msExitFullscreen",
        elementK: "msFullscreenElement",
        eventK: "MSFullscreenChange"
      }), b && (b.enter = function () {
        return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? _a.template[this.enterK]() : void _a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
      }, b.exit = function () {
        return q.closeOnScroll = j, document[this.exitK]();
      }, b.isFullscreen = function () {
        return document[this.elementK];
      }), b;
    };
  };

  return a;
});

/***/ }),

/***/ "./resources/js/photoswipe.min.js":
/*!****************************************!*\
  !*** ./resources/js/photoswipe.min.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var a = function a(_a3, b, c, d) {
    var e = {
      features: null,
      bind: function bind(a, b, c, d) {
        var e = (d ? "remove" : "add") + "EventListener";
        b = b.split(" ");

        for (var f = 0; f < b.length; f++) {
          b[f] && a[e](b[f], c, !1);
        }
      },
      isArray: function isArray(a) {
        return a instanceof Array;
      },
      createEl: function createEl(a, b) {
        var c = document.createElement(b || "div");
        return a && (c.className = a), c;
      },
      getScrollY: function getScrollY() {
        var a = window.pageYOffset;
        return void 0 !== a ? a : document.documentElement.scrollTop;
      },
      unbind: function unbind(a, b, c) {
        e.bind(a, b, c, !0);
      },
      removeClass: function removeClass(a, b) {
        var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
        a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      },
      addClass: function addClass(a, b) {
        e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b);
      },
      hasClass: function hasClass(a, b) {
        return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className);
      },
      getChildByClass: function getChildByClass(a, b) {
        for (var c = a.firstChild; c;) {
          if (e.hasClass(c, b)) return c;
          c = c.nextSibling;
        }
      },
      arraySearch: function arraySearch(a, b, c) {
        for (var d = a.length; d--;) {
          if (a[d][c] === b) return d;
        }

        return -1;
      },
      extend: function extend(a, b, c) {
        for (var d in b) {
          if (b.hasOwnProperty(d)) {
            if (c && a.hasOwnProperty(d)) continue;
            a[d] = b[d];
          }
        }
      },
      easing: {
        sine: {
          out: function out(a) {
            return Math.sin(a * (Math.PI / 2));
          },
          inOut: function inOut(a) {
            return -(Math.cos(Math.PI * a) - 1) / 2;
          }
        },
        cubic: {
          out: function out(a) {
            return --a * a * a + 1;
          }
        }
      },
      detectFeatures: function detectFeatures() {
        if (e.features) return e.features;
        var a = e.createEl(),
            b = a.style,
            c = "",
            d = {};

        if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
          var f = navigator.userAgent;

          if (/iP(hone|od)/.test(navigator.platform)) {
            var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && g < 8 && (d.isOldIOSPhone = !0));
          }

          var h = f.match(/Android\s([0-9\.]*)/),
              i = h ? h[1] : 0;
          i = parseFloat(i), i >= 1 && (i < 4.4 && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f);
        }

        for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; n < 4; n++) {
          c = m[n];

          for (var o = 0; o < 3; o++) {
            j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
          }

          c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]));
        }

        if (!d.raf) {
          var p = 0;
          d.raf = function (a) {
            var b = new Date().getTime(),
                c = Math.max(0, 16 - (b - p)),
                d = window.setTimeout(function () {
              a(b + c);
            }, c);
            return p = b + c, d;
          }, d.caf = function (a) {
            clearTimeout(a);
          };
        }

        return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d;
      }
    };
    e.detectFeatures(), e.features.oldIE && (e.bind = function (a, b, c, d) {
      b = b.split(" ");

      for (var e, f = (d ? "detach" : "attach") + "Event", g = function g() {
        c.handleEvent.call(c);
      }, h = 0; h < b.length; h++) {
        if (e = b[h]) if ("object" == _typeof(c) && c.handleEvent) {
          if (d) {
            if (!c["oldIE" + e]) return !1;
          } else c["oldIE" + e] = g;

          a[f]("on" + e, c["oldIE" + e]);
        } else a[f]("on" + e, c);
      }
    });
    var f = this,
        g = 25,
        h = 3,
        i = {
      allowPanToNext: !0,
      spacing: .12,
      bgOpacity: 1,
      mouseUsed: !1,
      loop: !0,
      pinchToClose: !0,
      closeOnScroll: !0,
      closeOnVerticalDrag: !0,
      verticalDragRange: .75,
      hideAnimationDuration: 333,
      showAnimationDuration: 333,
      showHideOpacity: !1,
      focus: !0,
      escKey: !0,
      arrowKeys: !0,
      mainScrollEndFriction: .35,
      panEndFriction: .35,
      isClickableElement: function isClickableElement(a) {
        return "A" === a.tagName;
      },
      getDoubleTapZoom: function getDoubleTapZoom(a, b) {
        return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33;
      },
      maxSpreadZoom: 1.33,
      modal: !0,
      scaleMode: "fit"
    };
    e.extend(i, d);

    var j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        X,
        Y,
        Z,
        $,
        _,
        aa,
        ba,
        ca,
        da,
        ea,
        fa,
        ga,
        ha,
        ia,
        ja,
        ka,
        la,
        ma = function ma() {
      return {
        x: 0,
        y: 0
      };
    },
        na = ma(),
        oa = ma(),
        pa = ma(),
        qa = {},
        ra = 0,
        sa = {},
        ta = ma(),
        ua = 0,
        va = !0,
        wa = [],
        xa = {},
        ya = !1,
        za = function za(a, b) {
      e.extend(f, b.publicMethods), wa.push(a);
    },
        Aa = function Aa(a) {
      var b = ac();
      return a > b - 1 ? a - b : a < 0 ? b + a : a;
    },
        Ba = {},
        Ca = function Ca(a, b) {
      return Ba[a] || (Ba[a] = []), Ba[a].push(b);
    },
        Da = function Da(a) {
      var b = Ba[a];

      if (b) {
        var c = Array.prototype.slice.call(arguments);
        c.shift();

        for (var d = 0; d < b.length; d++) {
          b[d].apply(f, c);
        }
      }
    },
        Ea = function Ea() {
      return new Date().getTime();
    },
        Fa = function Fa(a) {
      ja = a, f.bg.style.opacity = a * i.bgOpacity;
    },
        Ga = function Ga(a, b, c, d, e) {
      (!ya || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")";
    },
        Ha = function Ha(a) {
      ea && (a && (s > f.currItem.fitRatio ? ya || (mc(f.currItem, !1, !0), ya = !0) : ya && (mc(f.currItem), ya = !1)), Ga(ea, pa.x, pa.y, s));
    },
        Ia = function Ia(a) {
      a.container && Ga(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a);
    },
        Ja = function Ja(a, b) {
      b[E] = u + a + "px, 0px" + v;
    },
        Ka = function Ka(a, b) {
      if (!i.loop && b) {
        var c = m + (ta.x * ra - a) / ta.x,
            d = Math.round(a - tb.x);
        (c < 0 && d > 0 || c >= ac() - 1 && d < 0) && (a = tb.x + d * i.mainScrollEndFriction);
      }

      tb.x = a, Ja(a, n);
    },
        La = function La(a, b) {
      var c = ub[a] - sa[a];
      return oa[a] + na[a] + c - c * (b / t);
    },
        Ma = function Ma(a, b) {
      a.x = b.x, a.y = b.y, b.id && (a.id = b.id);
    },
        Na = function Na(a) {
      a.x = Math.round(a.x), a.y = Math.round(a.y);
    },
        Oa = null,
        Pa = function Pa() {
      Oa && (e.unbind(document, "mousemove", Pa), e.addClass(_a3, "pswp--has_mouse"), i.mouseUsed = !0, Da("mouseUsed")), Oa = setTimeout(function () {
        Oa = null;
      }, 100);
    },
        Qa = function Qa() {
      e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Pa), e.bind(window, "resize scroll orientationchange", f), Da("bindEvents");
    },
        Ra = function Ra() {
      e.unbind(window, "resize scroll orientationchange", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Pa), N.transform && e.unbind(f.scrollWrap, "click", f), V && e.unbind(window, p, f), clearTimeout(O), Da("unbindEvents");
    },
        Sa = function Sa(a, b) {
      var c = ic(f.currItem, qa, a);
      return b && (da = c), c;
    },
        Ta = function Ta(a) {
      return a || (a = f.currItem), a.initialZoomLevel;
    },
        Ua = function Ua(a) {
      return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1;
    },
        Va = function Va(a, b, c, d) {
      return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = La(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] && (c[a] = b.max[a], !0));
    },
        Wa = function Wa() {
      if (E) {
        var b = N.perspective && !G;
        return u = "translate" + (b ? "3d(" : "("), void (v = N.perspective ? ", 0px)" : ")");
      }

      E = "left", e.addClass(_a3, "pswp--ie"), Ja = function Ja(a, b) {
        b.left = a + "px";
      }, Ia = function Ia(a) {
        var b = a.fitRatio > 1 ? 1 : a.fitRatio,
            c = a.container.style,
            d = b * a.w,
            e = b * a.h;
        c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px";
      }, Ha = function Ha() {
        if (ea) {
          var a = ea,
              b = f.currItem,
              c = b.fitRatio > 1 ? 1 : b.fitRatio,
              d = c * b.w,
              e = c * b.h;
          a.width = d + "px", a.height = e + "px", a.left = pa.x + "px", a.top = pa.y + "px";
        }
      };
    },
        Xa = function Xa(a) {
      var b = "";
      i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()));
    },
        Ya = function Ya(a) {
      a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation());
    },
        Za = function Za() {
      f.setScrollOffset(0, e.getScrollY());
    },
        $a = {},
        _a = 0,
        ab = function ab(a) {
      $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a]);
    },
        bb = function bb(a) {
      $a[a] && ab(a), $a[a] || (_a++, $a[a] = {});
    },
        cb = function cb() {
      for (var a in $a) {
        $a.hasOwnProperty(a) && ab(a);
      }
    },
        db = function db(a, b, c, d, e, f, g) {
      var h,
          i = Ea();
      bb(a);

      var j = function j() {
        if ($a[a]) {
          if (h = Ea() - i, h >= d) return ab(a), f(c), void (g && g());
          f((c - b) * e(h / d) + b), $a[a].raf = H(j);
        }
      };

      j();
    },
        eb = {
      shout: Da,
      listen: Ca,
      viewportSize: qa,
      options: i,
      isMainScrollAnimating: function isMainScrollAnimating() {
        return fa;
      },
      getZoomLevel: function getZoomLevel() {
        return s;
      },
      getCurrentIndex: function getCurrentIndex() {
        return m;
      },
      isDragging: function isDragging() {
        return V;
      },
      isZooming: function isZooming() {
        return aa;
      },
      setScrollOffset: function setScrollOffset(a, b) {
        sa.x = a, M = sa.y = b, Da("updateScrollOffset", sa);
      },
      applyZoomPan: function applyZoomPan(a, b, c, d) {
        pa.x = b, pa.y = c, s = a, Ha(d);
      },
      init: function init() {
        if (!j && !k) {
          var c;
          f.framework = e, f.template = _a3, f.bg = e.getChildByClass(_a3, "pswp__bg"), J = _a3.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(_a3, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{
            el: f.container.children[0],
            wrap: 0,
            index: -1
          }, {
            el: f.container.children[1],
            wrap: 0,
            index: -1
          }, {
            el: f.container.children[2],
            wrap: 0,
            index: -1
          }], y[0].el.style.display = y[2].el.style.display = "none", Wa(), r = {
            resize: f.updateSize,
            orientationchange: function orientationchange() {
              clearTimeout(O), O = setTimeout(function () {
                qa.x !== f.scrollWrap.clientWidth && f.updateSize();
              }, 500);
            },
            scroll: Za,
            keydown: Xa,
            click: Ya
          };
          var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;

          for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < wa.length; c++) {
            f["init" + wa[c]]();
          }

          if (b) {
            var g = f.ui = new b(f, e);
            g.init();
          }

          Da("firstUpdate"), m = m || i.index || 0, (isNaN(m) || m < 0 || m >= ac()) && (m = 0), f.currItem = _b(m), (N.isOldIOSPhone || N.isOldAndroid) && (va = !1), _a3.setAttribute("aria-hidden", "false"), i.modal && (va ? _a3.style.position = "fixed" : (_a3.style.position = "absolute", _a3.style.top = e.getScrollY() + "px")), void 0 === M && (Da("initialLayout"), M = K = e.getScrollY());
          var l = "pswp--open ";

          for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(_a3, l), f.updateSize(), o = -1, ua = null, c = 0; c < h; c++) {
            Ja((c + o) * ta.x, y[c].el.style);
          }

          L || e.bind(f.scrollWrap, q, f), Ca("initialZoomInEnd", function () {
            f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && _a3.focus(), Qa();
          }), f.setContent(y[1], m), f.updateCurrItem(), Da("afterInit"), va || (w = setInterval(function () {
            _a || V || aa || s !== f.currItem.initialZoomLevel || f.updateSize();
          }, 1e3)), e.addClass(_a3, "pswp--visible");
        }
      },
      close: function close() {
        j && (j = !1, k = !0, Da("close"), Ra(), cc(f.currItem, null, !0, f.destroy));
      },
      destroy: function destroy() {
        Da("destroy"), Xb && clearTimeout(Xb), _a3.setAttribute("aria-hidden", "true"), _a3.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), zb(), cb(), Ba = null;
      },
      panTo: function panTo(a, b, c) {
        c || (a > da.min.x ? a = da.min.x : a < da.max.x && (a = da.max.x), b > da.min.y ? b = da.min.y : b < da.max.y && (b = da.max.y)), pa.x = a, pa.y = b, Ha();
      },
      handleEvent: function handleEvent(a) {
        a = a || window.event, r[a.type] && r[a.type](a);
      },
      goTo: function goTo(a) {
        a = Aa(a);
        var b = a - m;
        ua = b, m = a, f.currItem = _b(m), ra -= b, Ka(ta.x * ra), cb(), fa = !1, f.updateCurrItem();
      },
      next: function next() {
        f.goTo(m + 1);
      },
      prev: function prev() {
        f.goTo(m - 1);
      },
      updateCurrZoomItem: function updateCurrZoomItem(a) {
        if (a && Da("beforeChange", 0), y[1].el.children.length) {
          var b = y[1].el.children[0];
          ea = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null;
        } else ea = null;

        da = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, pa.x = da.center.x, pa.y = da.center.y, a && Da("afterChange");
      },
      invalidateCurrItems: function invalidateCurrItems() {
        x = !0;

        for (var a = 0; a < h; a++) {
          y[a].item && (y[a].item.needsUpdate = !0);
        }
      },
      updateCurrItem: function updateCurrItem(a) {
        if (0 !== ua) {
          var b,
              c = Math.abs(ua);

          if (!(a && c < 2)) {
            f.currItem = _b(m), ya = !1, Da("beforeChange", ua), c >= h && (o += ua + (ua > 0 ? -h : h), c = h);

            for (var d = 0; d < c; d++) {
              ua > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ja((o + 2) * ta.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ja(o * ta.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
            }

            if (ea && 1 === Math.abs(ua)) {
              var e = _b(z);

              e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e));
            }

            ua = 0, f.updateCurrZoomItem(), z = m, Da("afterChange");
          }
        }
      },
      updateSize: function updateSize(b) {
        if (!va && i.modal) {
          var c = e.getScrollY();
          if (M !== c && (_a3.style.top = c + "px", M = c), !b && xa.x === window.innerWidth && xa.y === window.innerHeight) return;
          xa.x = window.innerWidth, xa.y = window.innerHeight, _a3.style.height = xa.y + "px";
        }

        if (qa.x = f.scrollWrap.clientWidth, qa.y = f.scrollWrap.clientHeight, Za(), ta.x = qa.x + Math.round(qa.x * i.spacing), ta.y = qa.y, Ka(ta.x * ra), Da("beforeResize"), void 0 !== o) {
          for (var d, g, j, k = 0; k < h; k++) {
            d = y[k], Ja((k + o) * ta.x, d.el.style), j = m + k - 1, i.loop && ac() > 2 && (j = Aa(j)), g = _b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : d.index === -1 && j >= 0 && f.setContent(d, j), g && g.container && (ic(g, qa), mc(g), Ia(g));
          }

          x = !1;
        }

        t = s = f.currItem.initialZoomLevel, da = f.currItem.bounds, da && (pa.x = da.center.x, pa.y = da.center.y, Ha(!0)), Da("resize");
      },
      zoomTo: function zoomTo(a, b, c, d, f) {
        b && (t = s, ub.x = Math.abs(b.x) - pa.x, ub.y = Math.abs(b.y) - pa.y, Ma(oa, pa));
        var g = Sa(a, !1),
            h = {};
        Va("x", g, h, a), Va("y", g, h, a);
        var i = s,
            j = {
          x: pa.x,
          y: pa.y
        };
        Na(h);

        var k = function k(b) {
          1 === b ? (s = a, pa.x = h.x, pa.y = h.y) : (s = (a - i) * b + i, pa.x = (h.x - j.x) * b + j.x, pa.y = (h.y - j.y) * b + j.y), f && f(b), Ha(1 === b);
        };

        c ? db("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1);
      }
    },
        fb = 30,
        gb = 10,
        hb = {},
        ib = {},
        jb = {},
        kb = {},
        lb = {},
        mb = [],
        nb = {},
        ob = [],
        pb = {},
        qb = 0,
        rb = ma(),
        sb = 0,
        tb = ma(),
        ub = ma(),
        vb = ma(),
        wb = function wb(a, b) {
      return a.x === b.x && a.y === b.y;
    },
        xb = function xb(a, b) {
      return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g;
    },
        yb = function yb(a, b) {
      return pb.x = Math.abs(a.x - b.x), pb.y = Math.abs(a.y - b.y), Math.sqrt(pb.x * pb.x + pb.y * pb.y);
    },
        zb = function zb() {
      Z && (I(Z), Z = null);
    },
        Ab = function Ab() {
      V && (Z = H(Ab), Qb());
    },
        Bb = function Bb() {
      return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel);
    },
        Cb = function Cb(a, b) {
      return !(!a || a === document) && !(a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : Cb(a.parentNode, b));
    },
        Db = {},
        Eb = function Eb(a, b) {
      return Db.prevent = !Cb(a.target, i.isClickableElement), Da("preventDragEvent", a, b, Db), Db.prevent;
    },
        Fb = function Fb(a, b) {
      return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b;
    },
        Gb = function Gb(a, b, c) {
      c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y);
    },
        Hb = function Hb(a, b, c) {
      if (a - Q > 50) {
        var d = ob.length > 2 ? ob.shift() : {};
        d.x = b, d.y = c, ob.push(d), Q = a;
      }
    },
        Ib = function Ib() {
      var a = pa.y - f.currItem.initialPosition.y;
      return 1 - Math.abs(a / (qa.y / 2));
    },
        Jb = {},
        Kb = {},
        Lb = [],
        Mb = function Mb(a) {
      for (; Lb.length > 0;) {
        Lb.pop();
      }

      return F ? (la = 0, mb.forEach(function (a) {
        0 === la ? Lb[0] = a : 1 === la && (Lb[1] = a), la++;
      })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Lb[0] = Fb(a.touches[0], Jb), a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb))) : (Jb.x = a.pageX, Jb.y = a.pageY, Jb.id = "", Lb[0] = Jb), Lb;
    },
        Nb = function Nb(a, b) {
      var c,
          d,
          e,
          g,
          h = 0,
          j = pa[a] + b[a],
          k = b[a] > 0,
          l = tb.x + b.x,
          m = tb.x - nb.x;
      return c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1, j = pa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (ea ? "h" !== ga || "x" !== a || X || (k ? (j > da.min[a] && (c = i.panEndFriction, h = da.min[a] - j, d = da.min[a] - oa[a]), (d <= 0 || m < 0) && ac() > 1 ? (g = l, m < 0 && l > nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j)) : (j < da.max[a] && (c = i.panEndFriction, h = j - da.max[a], d = oa[a] - da.max[a]), (d <= 0 || m > 0) && ac() > 1 ? (g = l, m > 0 && l < nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j))) : g = l, "x" !== a) ? void (fa || $ || s > f.currItem.fitRatio && (pa[a] += b[a] * c)) : (void 0 !== g && (Ka(g, !0), $ = g !== nb.x), da.min.x !== da.max.x && (void 0 !== e ? pa.x = e : $ || (pa.x += b.x * c)), void 0 !== g);
    },
        Ob = function Ob(a) {
      if (!("mousedown" === a.type && a.button > 0)) {
        if ($b) return void a.preventDefault();

        if (!U || "mousedown" !== a.type) {
          if (Eb(a, !0) && a.preventDefault(), Da("pointerDown"), F) {
            var b = e.arraySearch(mb, a.pointerId, "id");
            b < 0 && (b = mb.length), mb[b] = {
              x: a.pageX,
              y: a.pageY,
              id: a.pointerId
            };
          }

          var c = Mb(a),
              d = c.length;
          _ = null, cb(), V && 1 !== d || (V = ha = !0, e.bind(window, p, f), S = ka = ia = T = $ = Y = W = X = !1, ga = null, Da("firstTouchStart", c), Ma(oa, pa), na.x = na.y = 0, Ma(kb, c[0]), Ma(lb, kb), nb.x = ta.x * ra, ob = [{
            x: kb.x,
            y: kb.y
          }], Q = P = Ea(), Sa(s, !0), zb(), Ab()), !aa && d > 1 && !fa && !$ && (t = s, X = !1, aa = W = !0, na.y = na.x = 0, Ma(oa, pa), Ma(hb, c[0]), Ma(ib, c[1]), Gb(hb, ib, vb), ub.x = Math.abs(vb.x) - pa.x, ub.y = Math.abs(vb.y) - pa.y, ba = ca = yb(hb, ib));
        }
      }
    },
        Pb = function Pb(a) {
      if (a.preventDefault(), F) {
        var b = e.arraySearch(mb, a.pointerId, "id");

        if (b > -1) {
          var c = mb[b];
          c.x = a.pageX, c.y = a.pageY;
        }
      }

      if (V) {
        var d = Mb(a);
        if (ga || Y || aa) _ = d;else if (tb.x !== ta.x * ra) ga = "h";else {
          var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
          Math.abs(f) >= gb && (ga = f > 0 ? "h" : "v", _ = d);
        }
      }
    },
        Qb = function Qb() {
      if (_) {
        var a = _.length;
        if (0 !== a) if (Ma(hb, _[0]), jb.x = hb.x - kb.x, jb.y = hb.y - kb.y, aa && a > 1) {
          if (kb.x = hb.x, kb.y = hb.y, !jb.x && !jb.y && wb(_[1], ib)) return;
          Ma(ib, _[1]), X || (X = !0, Da("zoomGestureStarted"));
          var b = yb(hb, ib),
              c = Vb(b);
          c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ka = !0);
          var d = 1,
              e = Ta(),
              g = Ua();
          if (c < e) {
            if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
              var h = e - c,
                  j = 1 - h / (e / 1.2);
              Fa(j), Da("onPinchClose", j), ia = !0;
            } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
          } else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
          d < 0 && (d = 0), ba = b, Gb(hb, ib, rb), na.x += rb.x - vb.x, na.y += rb.y - vb.y, Ma(vb, rb), pa.x = La("x", c), pa.y = La("y", c), S = c > s, s = c, Ha();
        } else {
          if (!ga) return;
          if (ha && (ha = !1, Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x), Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)), kb.x = hb.x, kb.y = hb.y, 0 === jb.x && 0 === jb.y) return;

          if ("v" === ga && i.closeOnVerticalDrag && !Bb()) {
            na.y += jb.y, pa.y += jb.y;
            var k = Ib();
            return T = !0, Da("onVerticalDrag", k), Fa(k), void Ha();
          }

          Hb(Ea(), hb.x, hb.y), Y = !0, da = f.currItem.bounds;
          var l = Nb("x", jb);
          l || (Nb("y", jb), Na(pa), Ha());
        }
      }
    },
        Rb = function Rb(a) {
      if (N.isOldAndroid) {
        if (U && "mouseup" === a.type) return;
        a.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function () {
          U = 0;
        }, 600));
      }

      Da("pointerUp"), Eb(a, !1) && a.preventDefault();
      var b;

      if (F) {
        var c = e.arraySearch(mb, a.pointerId, "id");
        if (c > -1) if (b = mb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse";else {
          var d = {
            4: "mouse",
            2: "touch",
            3: "pen"
          };
          b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse");
        }
      }

      var g,
          h = Mb(a),
          j = h.length;
      if ("mouseup" === a.type && (j = 0), 2 === j) return _ = null, !0;
      1 === j && Ma(lb, h[0]), 0 !== j || ga || fa || (b || ("mouseup" === a.type ? b = {
        x: a.pageX,
        y: a.pageY,
        type: "mouse"
      } : a.changedTouches && a.changedTouches[0] && (b = {
        x: a.changedTouches[0].pageX,
        y: a.changedTouches[0].pageY,
        type: "touch"
      })), Da("touchRelease", a, b));
      var k = -1;
      if (0 === j && (V = !1, e.unbind(window, p, f), zb(), aa ? k = 0 : sb !== -1 && (k = Ea() - sb)), sb = 1 === j ? Ea() : -1, g = k !== -1 && k < 150 ? "zoom" : "swipe", aa && j < 2 && (aa = !1, 1 === j && (g = "zoomPointerUp"), Da("zoomGestureEnded")), _ = null, Y || X || fa || T) if (cb(), R || (R = Sb()), R.calculateSwipeSpeed("x"), T) {
        var l = Ib();
        if (l < i.verticalDragRange) f.close();else {
          var m = pa.y,
              n = ja;
          db("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
            pa.y = (f.currItem.initialPosition.y - m) * a + m, Fa((1 - n) * a + n), Ha();
          }), Da("onVerticalDrag", 1);
        }
      } else {
        if (($ || fa) && 0 === j) {
          var o = Ub(g, R);
          if (o) return;
          g = "zoomPointerUp";
        }

        if (!fa) return "swipe" !== g ? void Wb() : void (!$ && s > f.currItem.fitRatio && Tb(R));
      }
    },
        Sb = function Sb() {
      var a,
          b,
          c = {
        lastFlickOffset: {},
        lastFlickDist: {},
        lastFlickSpeed: {},
        slowDownRatio: {},
        slowDownRatioReverse: {},
        speedDecelerationRatio: {},
        speedDecelerationRatioAbs: {},
        distanceOffset: {},
        backAnimDestination: {},
        backAnimStarted: {},
        calculateSwipeSpeed: function calculateSwipeSpeed(d) {
          ob.length > 1 ? (a = Ea() - Q + 50, b = ob[ob.length - 2][d]) : (a = Ea() - P, b = lb[d]), c.lastFlickOffset[d] = kb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1;
        },
        calculateOverBoundsAnimOffset: function calculateOverBoundsAnimOffset(a, b) {
          c.backAnimStarted[a] || (pa[a] > da.min[a] ? c.backAnimDestination[a] = da.min[a] : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, db("bounceZoomPan" + a, pa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function (b) {
            pa[a] = b, Ha();
          }))));
        },
        calculateAnimOffset: function calculateAnimOffset(a) {
          c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, pa[a] += c.distanceOffset[a]);
        },
        panAnimLoop: function panAnimLoop() {
          if ($a.zoomPan && ($a.zoomPan.raf = H(c.panAnimLoop), c.now = Ea(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ha(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05)) return pa.x = Math.round(pa.x), pa.y = Math.round(pa.y), Ha(), void ab("zoomPan");
        }
      };
      return c;
    },
        Tb = function Tb(a) {
      return a.calculateSwipeSpeed("y"), da = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (bb("zoomPan"), a.lastNow = Ea(), void a.panAnimLoop());
    },
        Ub = function Ub(a, b) {
      var c;
      fa || (qb = m);
      var d;

      if ("swipe" === a) {
        var g = kb.x - lb.x,
            h = b.lastFlickDist.x < 10;
        g > fb && (h || b.lastFlickOffset.x > 20) ? d = -1 : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1);
      }

      var j;
      d && (m += d, m < 0 ? (m = i.loop ? ac() - 1 : 0, j = !0) : m >= ac() && (m = i.loop ? 0 : ac() - 1, j = !0), j && !i.loop || (ua += d, ra -= d, c = !0));
      var k,
          l = ta.x * ra,
          n = Math.abs(l - tb.x);
      return c || l > tb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, qb === m && (c = !1), fa = !0, Da("mainScrollAnimStart"), db("mainScroll", tb.x, l, k, e.easing.cubic.out, Ka, function () {
        cb(), fa = !1, qb = -1, (c || qb !== m) && f.updateCurrItem(), Da("mainScrollAnimComplete");
      }), c && f.updateCurrItem(!0), c;
    },
        Vb = function Vb(a) {
      return 1 / ca * a * t;
    },
        Wb = function Wb() {
      var a = s,
          b = Ta(),
          c = Ua();
      s < b ? a = b : s > c && (a = c);
      var d,
          g = 1,
          h = ja;
      return ia && !S && !ka && s < b ? (f.close(), !0) : (ia && (d = function d(a) {
        Fa((g - h) * a + h);
      }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0);
    };

    za("Gestures", {
      publicMethods: {
        initGestures: function initGestures() {
          var a = function a(_a2, b, c, d, e) {
            A = _a2 + b, B = _a2 + c, C = _a2 + d, D = e ? _a2 + e : "";
          };

          F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Ob, r[B] = Pb, r[C] = Rb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1);
        }
      }
    });

    var Xb,
        Yb,
        Zb,
        $b,
        _b,
        ac,
        bc,
        cc = function cc(b, c, d, g) {
      Xb && clearTimeout(Xb), $b = !0, Zb = !0;
      var h;
      b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);

      var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
          k = function k() {
        ab("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Fa(1), c && (c.style.display = "block"), e.addClass(_a3, "pswp--animated-in"), Da("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), $b = !1;
      };

      if (!j || !h || void 0 === h.x) return Da("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), _a3.style.opacity = d ? 0 : 1, Fa(1), void (j ? setTimeout(function () {
        k();
      }, j) : k());

      var n = function n() {
        var c = l,
            g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
        b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, pa.x = h.x, pa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ha()), bb("initialZoom"), d && !c && e.removeClass(_a3, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](_a3, "pswp--animate_opacity") : setTimeout(function () {
          e.addClass(_a3, "pswp--animate_opacity");
        }, 30)), Xb = setTimeout(function () {
          if (Da("initialZoom" + (d ? "Out" : "In")), d) {
            var f = h.w / b.w,
                i = {
              x: pa.x,
              y: pa.y
            },
                l = s,
                m = ja,
                n = function n(b) {
              1 === b ? (s = f, pa.x = h.x, pa.y = h.y - M) : (s = (f - l) * b + l, pa.x = (h.x - i.x) * b + i.x, pa.y = (h.y - M - i.y) * b + i.y), Ha(), g ? _a3.style.opacity = 1 - b : Fa(m - b * m);
            };

            c ? db("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Xb = setTimeout(k, j + 20));
          } else s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), Fa(1), g ? _a3.style.opacity = 1 : Fa(1), Xb = setTimeout(k, j + 20);
        }, d ? 25 : 90);
      };

      n();
    },
        dc = {},
        ec = [],
        fc = {
      index: 0,
      errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
      forceProgressiveLoading: !1,
      preload: [1, 1],
      getNumItemsFn: function getNumItemsFn() {
        return Yb.length;
      }
    },
        gc = function gc() {
      return {
        center: {
          x: 0,
          y: 0
        },
        max: {
          x: 0,
          y: 0
        },
        min: {
          x: 0,
          y: 0
        }
      };
    },
        hc = function hc(a, b, c) {
      var d = a.bounds;
      d.center.x = Math.round((dc.x - b) / 2), d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top, d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x, d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y, d.min.x = b > dc.x ? 0 : d.center.x, d.min.y = c > dc.y ? a.vGap.top : d.center.y;
    },
        ic = function ic(a, b, c) {
      if (a.src && !a.loadError) {
        var d = !c;

        if (d && (a.vGap || (a.vGap = {
          top: 0,
          bottom: 0
        }), Da("parseVerticalMargin", a)), dc.x = b.x, dc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
          var e = dc.x / a.w,
              f = dc.y / a.h;
          a.fitRatio = e < f ? e : f;
          var g = i.scaleMode;
          "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = gc());
        }

        if (!c) return;
        return hc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds;
      }

      return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = gc(), a.initialPosition = a.bounds.center, a.bounds;
    },
        jc = function jc(a, b, c, d, e, g) {
      b.loadError || d && (b.imageAppended = !0, mc(b, d, b === f.currItem && ya), c.appendChild(d), g && setTimeout(function () {
        b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null);
      }, 500));
    },
        kc = function kc(a) {
      a.loading = !0, a.loaded = !1;

      var b = a.img = e.createEl("pswp__img", "img"),
          c = function c() {
        a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null;
      };

      return b.onload = c, b.onerror = function () {
        a.loadError = !0, c();
      }, b.src = a.src, b;
    },
        lc = function lc(a, b) {
      if (a.src && a.loadError && a.container) return b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0;
    },
        mc = function mc(a, b, c) {
      if (a.src) {
        b || (b = a.container.lastChild);
        var d = c ? a.w : Math.round(a.w * a.fitRatio),
            e = c ? a.h : Math.round(a.h * a.fitRatio);
        a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px";
      }
    },
        nc = function nc() {
      if (ec.length) {
        for (var a, b = 0; b < ec.length; b++) {
          a = ec[b], a.holder.index === a.index && jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
        }

        ec = [];
      }
    };

    za("Controller", {
      publicMethods: {
        lazyLoadItem: function lazyLoadItem(a) {
          a = Aa(a);

          var b = _b(a);

          b && (!b.loaded && !b.loading || x) && (Da("gettingData", a, b), b.src && kc(b));
        },
        initController: function initController() {
          e.extend(i, fc, !0), f.items = Yb = c, _b = f.getItemAt, ac = i.getNumItemsFn, bc = i.loop, ac() < 3 && (i.loop = !1), Ca("beforeChange", function (a) {
            var b,
                c = i.preload,
                d = null === a || a >= 0,
                e = Math.min(c[0], ac()),
                g = Math.min(c[1], ac());

            for (b = 1; b <= (d ? g : e); b++) {
              f.lazyLoadItem(m + b);
            }

            for (b = 1; b <= (d ? e : g); b++) {
              f.lazyLoadItem(m - b);
            }
          }), Ca("initialLayout", function () {
            f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
          }), Ca("mainScrollAnimComplete", nc), Ca("initialZoomInEnd", nc), Ca("destroy", function () {
            for (var a, b = 0; b < Yb.length; b++) {
              a = Yb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
            }

            ec = null;
          });
        },
        getItemAt: function getItemAt(a) {
          return a >= 0 && void 0 !== Yb[a] && Yb[a];
        },
        allowProgressiveImg: function allowProgressiveImg() {
          return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200;
        },
        setContent: function setContent(a, b) {
          i.loop && (b = Aa(b));
          var c = f.getItemAt(a.index);
          c && (c.container = null);
          var d,
              g = f.getItemAt(b);
          if (!g) return void (a.el.innerHTML = "");
          Da("gettingData", b, g), a.index = b, a.item = g;
          var h = g.container = e.createEl("pswp__zoom-wrap");
          if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), lc(g), ic(g, qa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, mc(g, d), jc(b, g, h, d, !0));else {
            if (g.loadComplete = function (c) {
              if (j) {
                if (a && a.index === b) {
                  if (lc(c, !0)) return c.loadComplete = c.img = null, ic(c, qa), Ia(c), void (a.index === m && f.updateCurrZoomItem());
                  c.imageAppended ? !$b && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (fa || $b) ? ec.push({
                    item: c,
                    baseDiv: h,
                    img: c.img,
                    index: b,
                    holder: a,
                    clearPlaceholder: !0
                  }) : jc(b, c, h, c.img, fa || $b, !0);
                }

                c.loadComplete = null, c.img = null, Da("imageLoadComplete", b, c);
              }
            }, e.features.transform) {
              var k = "pswp__img pswp__img--placeholder";
              k += g.msrc ? "" : " pswp__img--placeholder--blank";
              var l = e.createEl(k, g.msrc ? "img" : "");
              g.msrc && (l.src = g.msrc), mc(g, l), h.appendChild(l), g.placeholder = l;
            }

            g.loading || kc(g), f.allowProgressiveImg() && (!Zb && N.transform ? ec.push({
              item: g,
              baseDiv: h,
              img: g.img,
              index: b,
              holder: a
            }) : jc(b, g, h, g.img, !0, !0));
          }
          Zb || b !== m ? Ia(g) : (ea = h.style, cc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h);
        },
        cleanSlide: function cleanSlide(a) {
          a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1;
        }
      }
    });

    var oc,
        pc = {},
        qc = function qc(a, b, c) {
      var d = document.createEvent("CustomEvent"),
          e = {
        origEvent: a,
        target: a.target,
        releasePoint: b,
        pointerType: c || "touch"
      };
      d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d);
    };

    za("Tap", {
      publicMethods: {
        initTap: function initTap() {
          Ca("firstTouchStart", f.onTapStart), Ca("touchRelease", f.onTapRelease), Ca("destroy", function () {
            pc = {}, oc = null;
          });
        },
        onTapStart: function onTapStart(a) {
          a.length > 1 && (clearTimeout(oc), oc = null);
        },
        onTapRelease: function onTapRelease(a, b) {
          if (b && !Y && !W && !_a) {
            var c = b;
            if (oc && (clearTimeout(oc), oc = null, xb(c, pc))) return void Da("doubleTap", c);
            if ("mouse" === b.type) return void qc(a, b, "mouse");
            var d = a.target.tagName.toUpperCase();
            if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void qc(a, b);
            Ma(pc, c), oc = setTimeout(function () {
              qc(a, b), oc = null;
            }, 300);
          }
        }
      }
    });
    var rc;
    za("DesktopZoom", {
      publicMethods: {
        initDesktopZoom: function initDesktopZoom() {
          L || (G ? Ca("mouseUsed", function () {
            f.setupDesktopZoom();
          }) : f.setupDesktopZoom(!0));
        },
        setupDesktopZoom: function setupDesktopZoom(b) {
          rc = {};
          var c = "wheel mousewheel DOMMouseScroll";
          Ca("bindEvents", function () {
            e.bind(_a3, c, f.handleMouseWheel);
          }), Ca("unbindEvents", function () {
            rc && e.unbind(_a3, c, f.handleMouseWheel);
          }), f.mouseZoomedIn = !1;

          var d,
              g = function g() {
            f.mouseZoomedIn && (e.removeClass(_a3, "pswp--zoomed-in"), f.mouseZoomedIn = !1), s < 1 ? e.addClass(_a3, "pswp--zoom-allowed") : e.removeClass(_a3, "pswp--zoom-allowed"), h();
          },
              h = function h() {
            d && (e.removeClass(_a3, "pswp--dragging"), d = !1);
          };

          Ca("resize", g), Ca("afterChange", g), Ca("pointerDown", function () {
            f.mouseZoomedIn && (d = !0, e.addClass(_a3, "pswp--dragging"));
          }), Ca("pointerUp", h), b || g();
        },
        handleMouseWheel: function handleMouseWheel(a) {
          if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || _a || V ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
          if (a.stopPropagation(), rc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (rc.x = 18 * a.deltaX, rc.y = 18 * a.deltaY) : (rc.x = a.deltaX, rc.y = a.deltaY);else if ("wheelDelta" in a) a.wheelDeltaX && (rc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? rc.y = -.16 * a.wheelDeltaY : rc.y = -.16 * a.wheelDelta;else {
            if (!("detail" in a)) return;
            rc.y = a.detail;
          }
          Sa(s, !0);
          var b = pa.x - rc.x,
              c = pa.y - rc.y;
          (i.modal || b <= da.min.x && b >= da.max.x && c <= da.min.y && c >= da.max.y) && a.preventDefault(), f.panTo(b, c);
        },
        toggleDesktopZoom: function toggleDesktopZoom(b) {
          b = b || {
            x: qa.x / 2 + sa.x,
            y: qa.y / 2 + sa.y
          };
          var c = i.getDoubleTapZoom(!0, f.currItem),
              d = s === c;
          f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](_a3, "pswp--zoomed-in");
        }
      }
    });

    var sc,
        tc,
        uc,
        vc,
        wc,
        xc,
        yc,
        zc,
        Ac,
        Bc,
        Cc,
        Dc,
        Ec = {
      history: !0,
      galleryUID: 1
    },
        Fc = function Fc() {
      return Cc.hash.substring(1);
    },
        Gc = function Gc() {
      sc && clearTimeout(sc), uc && clearTimeout(uc);
    },
        Hc = function Hc() {
      var a = Fc(),
          b = {};
      if (a.length < 5) return b;
      var c,
          d = a.split("&");

      for (c = 0; c < d.length; c++) {
        if (d[c]) {
          var e = d[c].split("=");
          e.length < 2 || (b[e[0]] = e[1]);
        }
      }

      if (i.galleryPIDs) {
        var f = b.pid;

        for (b.pid = 0, c = 0; c < Yb.length; c++) {
          if (Yb[c].pid === f) {
            b.pid = c;
            break;
          }
        }
      } else b.pid = parseInt(b.pid, 10) - 1;

      return b.pid < 0 && (b.pid = 0), b;
    },
        Ic = function Ic() {
      if (uc && clearTimeout(uc), _a || V) return void (uc = setTimeout(Ic, 500));
      vc ? clearTimeout(tc) : vc = !0;

      var a = m + 1,
          b = _b(m);

      b.hasOwnProperty("pid") && (a = b.pid);
      var c = yc + "&gid=" + i.galleryUID + "&pid=" + a;
      zc || Cc.hash.indexOf(c) === -1 && (Bc = !0);
      var d = Cc.href.split("#")[0] + "#" + c;
      Dc ? "#" + c !== window.location.hash && history[zc ? "replaceState" : "pushState"]("", document.title, d) : zc ? Cc.replace(d) : Cc.hash = c, zc = !0, tc = setTimeout(function () {
        vc = !1;
      }, 60);
    };

    za("History", {
      publicMethods: {
        initHistory: function initHistory() {
          if (e.extend(i, Ec, !0), i.history) {
            Cc = window.location, Bc = !1, Ac = !1, zc = !1, yc = Fc(), Dc = "pushState" in history, yc.indexOf("gid=") > -1 && (yc = yc.split("&gid=")[0], yc = yc.split("?gid=")[0]), Ca("afterChange", f.updateURL), Ca("unbindEvents", function () {
              e.unbind(window, "hashchange", f.onHashChange);
            });

            var a = function a() {
              xc = !0, Ac || (Bc ? history.back() : yc ? Cc.hash = yc : Dc ? history.pushState("", document.title, Cc.pathname + Cc.search) : Cc.hash = ""), Gc();
            };

            Ca("unbindEvents", function () {
              l && a();
            }), Ca("destroy", function () {
              xc || a();
            }), Ca("firstUpdate", function () {
              m = Hc().pid;
            });
            var b = yc.indexOf("pid=");
            b > -1 && (yc = yc.substring(0, b), "&" === yc.slice(-1) && (yc = yc.slice(0, -1))), setTimeout(function () {
              j && e.bind(window, "hashchange", f.onHashChange);
            }, 40);
          }
        },
        onHashChange: function onHashChange() {
          return Fc() === yc ? (Ac = !0, void f.close()) : void (vc || (wc = !0, f.goTo(Hc().pid), wc = !1));
        },
        updateURL: function updateURL() {
          Gc(), wc || (zc ? sc = setTimeout(Ic, 800) : Ic());
        }
      }
    }), e.extend(f, eb);
  };

  return a;
});

/***/ }),

/***/ "./resources/js/plyr.min.js":
/*!**********************************!*\
  !*** ./resources/js/plyr.min.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

"object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var e = function e(_e2) {
    return null != _e2 ? _e2.constructor : null;
  },
      t = function t(e, _t) {
    return Boolean(e && _t && e instanceof _t);
  },
      i = function i(e) {
    return null == e;
  },
      n = function n(t) {
    return e(t) === Object;
  },
      s = function s(t) {
    return e(t) === String;
  },
      a = function a(e) {
    return Array.isArray(e);
  },
      o = function o(e) {
    return t(e, NodeList);
  },
      r = function r(e) {
    return i(e) || (s(e) || a(e) || o(e)) && !e.length || n(e) && !Object.keys(e).length;
  },
      l = {
    nullOrUndefined: i,
    object: n,
    number: function number(t) {
      return e(t) === Number && !Number.isNaN(t);
    },
    string: s,
    "boolean": function boolean(t) {
      return e(t) === Boolean;
    },
    "function": function _function(t) {
      return e(t) === Function;
    },
    array: a,
    weakMap: function weakMap(e) {
      return t(e, WeakMap);
    },
    nodeList: o,
    element: function element(e) {
      return t(e, Element);
    },
    textNode: function textNode(t) {
      return e(t) === Text;
    },
    event: function event(e) {
      return t(e, Event);
    },
    keyboardEvent: function keyboardEvent(e) {
      return t(e, KeyboardEvent);
    },
    cue: function cue(e) {
      return t(e, window.TextTrackCue) || t(e, window.VTTCue);
    },
    track: function track(e) {
      return t(e, TextTrack) || !i(e) && s(e.kind);
    },
    url: function url(e) {
      if (t(e, window.URL)) return !0;
      var i = e;
      e.startsWith("http://") && e.startsWith("https://") || (i = "http://" + e);

      try {
        return !r(new URL(i).hostname);
      } catch (e) {
        return !1;
      }
    },
    empty: r
  },
      c = function () {
    var e = !1;

    try {
      var t = Object.defineProperty({}, "passive", {
        get: function get() {
          return e = !0, null;
        }
      });
      window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
    } catch (e) {}

    return e;
  }();

  function u(e, t, i) {
    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = this,
        a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];

    if (e && "addEventListener" in e && !l.empty(t) && l["function"](i)) {
      var r = t.split(" "),
          u = o;
      c && (u = {
        passive: a,
        capture: o
      }), r.forEach(function (t) {
        s && s.eventListeners && n && s.eventListeners.push({
          element: e,
          type: t,
          callback: i,
          options: u
        }), e[n ? "addEventListener" : "removeEventListener"](t, i, u);
      });
    }
  }

  function d(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments[2],
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    u.call(this, e, t, i, !0, n, s);
  }

  function h(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments[2],
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    u.call(this, e, t, i, !1, n, s);
  }

  function p(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments[2],
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    u.call(this, e, t, function a() {
      h(e, t, a, n, s);

      for (var o = arguments.length, r = Array(o), l = 0; l < o; l++) {
        r[l] = arguments[l];
      }

      i.apply(this, r);
    }, !0, n, s);
  }

  function f(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};

    if (l.element(e) && !l.empty(t)) {
      var s = new CustomEvent(t, {
        bubbles: i,
        detail: Object.assign({}, n, {
          plyr: this
        })
      });
      e.dispatchEvent(s);
    }
  }

  var m = function m(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      g = function () {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    return function (t, i, n) {
      return i && e(t.prototype, i), n && e(t, n), t;
    };
  }(),
      y = function y(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e;
  },
      v = function () {
    return function (e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return function (e, t) {
        var i = [],
            n = !0,
            s = !1,
            a = void 0;

        try {
          for (var o, r = e[Symbol.iterator](); !(n = (o = r.next()).done) && (i.push(o.value), !t || i.length !== t); n = !0) {
            ;
          }
        } catch (e) {
          s = !0, a = e;
        } finally {
          try {
            !n && r["return"] && r["return"]();
          } finally {
            if (s) throw a;
          }
        }

        return i;
      }(e, t);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();

  function b(e, t) {
    var i = e.length ? e : [e];
    Array.from(i).reverse().forEach(function (e, i) {
      var n = i > 0 ? t.cloneNode(!0) : t,
          s = e.parentNode,
          a = e.nextSibling;
      n.appendChild(e), a ? s.insertBefore(n, a) : s.appendChild(n);
    });
  }

  function k(e, t) {
    l.element(e) && !l.empty(t) && Object.entries(t).filter(function (e) {
      var t = v(e, 2)[1];
      return !l.nullOrUndefined(t);
    }).forEach(function (t) {
      var i = v(t, 2),
          n = i[0],
          s = i[1];
      return e.setAttribute(n, s);
    });
  }

  function w(e, t, i) {
    var n = document.createElement(e);
    return l.object(t) && k(n, t), l.string(i) && (n.innerText = i), n;
  }

  function T(e, t, i, n) {
    l.element(t) && t.appendChild(w(e, i, n));
  }

  function A(e) {
    l.nodeList(e) || l.array(e) ? Array.from(e).forEach(A) : l.element(e) && l.element(e.parentNode) && e.parentNode.removeChild(e);
  }

  function E(e) {
    if (l.element(e)) for (var t = e.childNodes.length; t > 0;) {
      e.removeChild(e.lastChild), t -= 1;
    }
  }

  function C(e, t) {
    return l.element(t) && l.element(t.parentNode) && l.element(e) ? (t.parentNode.replaceChild(e, t), e) : null;
  }

  function P(e, t) {
    if (!l.string(e) || l.empty(e)) return {};
    var i = {},
        n = t;
    return e.split(",").forEach(function (e) {
      var t = e.trim(),
          s = t.replace(".", ""),
          a = t.replace(/[[\]]/g, "").split("="),
          o = a[0],
          r = a.length > 1 ? a[1].replace(/["']/g, "") : "";

      switch (t.charAt(0)) {
        case ".":
          l.object(n) && l.string(n["class"]) && (n["class"] += " " + s), i["class"] = s;
          break;

        case "#":
          i.id = t.replace("#", "");
          break;

        case "[":
          i[o] = r;
      }
    }), i;
  }

  function S(e, t) {
    if (l.element(e)) {
      var i = t;
      l["boolean"](i) || (i = !e.hidden), i ? e.setAttribute("hidden", "") : e.removeAttribute("hidden");
    }
  }

  function M(e, t, i) {
    if (l.nodeList(e)) return Array.from(e).map(function (e) {
      return M(e, t, i);
    });

    if (l.element(e)) {
      var n = "toggle";
      return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t);
    }

    return !1;
  }

  function N(e, t) {
    return l.element(e) && e.classList.contains(t);
  }

  function L(e, t) {
    var i = {
      Element: Element
    };
    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }).call(e, t);
  }

  function x(e) {
    return this.elements.container.querySelectorAll(e);
  }

  function _(e) {
    return this.elements.container.querySelector(e);
  }

  function I() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    l.element(e) && (e.focus(), t && M(e, this.config.classNames.tabFocus));
  }

  var O,
      j,
      q,
      R = (O = document.createElement("span"), j = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
  }, q = Object.keys(j).find(function (e) {
    return void 0 !== O.style[e];
  }), !!l.string(q) && j[q]);

  function B(e) {
    setTimeout(function () {
      try {
        S(e, !0), e.offsetHeight, S(e, !1);
      } catch (e) {}
    }, 0);
  }

  var H,
      V = {
    isIE: !!document.documentMode,
    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  },
      D = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora"
  },
      F = {
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    check: function check(e, t, i) {
      var n = V.isIPhone && i && F.playsinline,
          s = F[e] || "html5" !== t;
      return {
        api: s,
        ui: s && F.rangeInput && ("video" !== e || !V.isIPhone || n)
      };
    },
    pip: !V.isIPhone && l["function"](w("video").webkitSetPresentationMode),
    airplay: l["function"](window.WebKitPlaybackTargetAvailabilityEvent),
    playsinline: "playsInline" in document.createElement("video"),
    mime: function mime(e) {
      var t = e.split("/"),
          i = v(t, 1)[0];
      if (!this.isHTML5 || i !== this.type) return !1;
      var n = void 0;
      e && e.includes("codecs=") ? n = e : "audio/mpeg" === e ? n = "audio/mpeg;" : e in D && (n = e + '; codecs="' + D[e] + '"');

      try {
        return Boolean(n && this.media.canPlayType(n).replace(/no/, ""));
      } catch (e) {
        return !1;
      }
    },
    textTracks: "textTracks" in document.createElement("video"),
    rangeInput: (H = document.createElement("input"), H.type = "range", "range" === H.type),
    touch: "ontouchstart" in document.documentElement,
    transitions: !1 !== R,
    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
  },
      U = {
    getSources: function getSources() {
      var e = this;
      return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
        return F.mime.call(e, t.getAttribute("type"));
      }) : [];
    },
    getQualityOptions: function getQualityOptions() {
      return U.getSources.call(this).map(function (e) {
        return Number(e.getAttribute("size"));
      }).filter(Boolean);
    },
    extend: function extend() {
      if (this.isHTML5) {
        var e = this;
        Object.defineProperty(e.media, "quality", {
          get: function get() {
            var t = U.getSources.call(e).find(function (t) {
              return t.getAttribute("src") === e.source;
            });
            return t && Number(t.getAttribute("size"));
          },
          set: function set(t) {
            var i = U.getSources.call(e).find(function (e) {
              return Number(e.getAttribute("size")) === t;
            });

            if (i) {
              var n = e.media,
                  s = n.currentTime,
                  a = n.paused,
                  o = n.preload,
                  r = n.readyState;
              e.media.src = i.getAttribute("src"), ("none" !== o || r) && (e.once("loadedmetadata", function () {
                e.currentTime = s, a || e.play();
              }), e.media.load()), f.call(e, e.media, "qualitychange", !1, {
                quality: t
              }), e.storage.set({
                quality: t
              });
            }
          }
        });
      }
    },
    cancelRequests: function cancelRequests() {
      this.isHTML5 && (A(U.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
    }
  };

  function z(e) {
    return l.array(e) ? e.filter(function (t, i) {
      return e.indexOf(t) === i;
    }) : e;
  }

  function W(e, t) {
    return t.split(".").reduce(function (e, t) {
      return e && e[t];
    }, e);
  }

  function K() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
      i[n - 1] = arguments[n];
    }

    if (!i.length) return e;
    var s = i.shift();
    return l.object(s) ? (Object.keys(s).forEach(function (t) {
      l.object(s[t]) ? (Object.keys(e).includes(t) || Object.assign(e, y({}, t, {})), K(e[t], s[t])) : Object.assign(e, y({}, t, s[t]));
    }), K.apply(void 0, [e].concat(i))) : e;
  }

  function Y(e) {
    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
      i[n - 1] = arguments[n];
    }

    return l.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
      return i[t].toString();
    });
  }

  function J() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), i.toString());
  }

  function Q() {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function (e) {
      return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
  }

  function $() {
    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
    return (e = function () {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
      return e = J(e, "-", " "), e = J(e, "_", " "), J(e = Q(e), " ", "");
    }(e)).charAt(0).toLowerCase() + e.slice(1);
  }

  function G(e) {
    var t = document.createElement("div");
    return t.appendChild(e), t.innerHTML;
  }

  var X = function X() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (l.empty(e) || l.empty(t)) return "";
    var i = W(t.i18n, e);
    if (l.empty(i)) return "";
    var n = {
      "{seektime}": t.seekTime,
      "{title}": t.title
    };
    return Object.entries(n).forEach(function (e) {
      var t = v(e, 2),
          n = t[0],
          s = t[1];
      i = J(i, n, s);
    }), i;
  },
      Z = function () {
    function e(t) {
      m(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
    }

    return g(e, [{
      key: "get",
      value: function value(t) {
        if (!e.supported || !this.enabled) return null;
        var i = window.localStorage.getItem(this.key);
        if (l.empty(i)) return null;
        var n = JSON.parse(i);
        return l.string(t) && t.length ? n[t] : n;
      }
    }, {
      key: "set",
      value: function value(t) {
        if (e.supported && this.enabled && l.object(t)) {
          var i = this.get();
          l.empty(i) && (i = {}), K(i, t), window.localStorage.setItem(this.key, JSON.stringify(i));
        }
      }
    }], [{
      key: "supported",
      get: function get() {
        try {
          if (!("localStorage" in window)) return !1;
          return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0;
        } catch (e) {
          return !1;
        }
      }
    }]), e;
  }();

  function ee(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
    return new Promise(function (i, n) {
      try {
        var s = new XMLHttpRequest();
        if (!("withCredentials" in s)) return;
        s.addEventListener("load", function () {
          if ("text" === t) try {
            i(JSON.parse(s.responseText));
          } catch (e) {
            i(s.responseText);
          } else i(s.response);
        }), s.addEventListener("error", function () {
          throw new Error(s.status);
        }), s.open("GET", e, !0), s.responseType = t, s.send();
      } catch (e) {
        n(e);
      }
    });
  }

  function te(e, t) {
    if (l.string(e)) {
      var i = l.string(t),
          n = function n() {
        return null !== document.getElementById(t);
      },
          s = function s(e, t) {
        e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e);
      };

      if (!i || !n()) {
        var a = Z.supported,
            o = document.createElement("div");

        if (o.setAttribute("hidden", ""), i && o.setAttribute("id", t), a) {
          var r = window.localStorage.getItem("cache-" + t);

          if (null !== r) {
            var c = JSON.parse(r);
            s(o, c.content);
          }
        }

        ee(e).then(function (e) {
          l.empty(e) || (a && window.localStorage.setItem("cache-" + t, JSON.stringify({
            content: e
          })), s(o, e));
        })["catch"](function () {});
      }
    }
  }

  var ie = function ie(e) {
    return parseInt(e / 60 / 60 % 60, 10);
  },
      ne = function ne(e) {
    return parseInt(e / 60 % 60, 10);
  },
      se = function se(e) {
    return parseInt(e % 60, 10);
  };

  function ae() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!l.number(e)) return ae(null, t, i);

    var n = function n(e) {
      return ("0" + e).slice(-2);
    },
        s = ie(e),
        a = ne(e),
        o = se(e);

    return t || s > 0 ? s += ":" : s = "", (i && e > 0 ? "-" : "") + s + n(a) + ":" + n(o);
  }

  var oe = {
    getIconUrl: function getIconUrl() {
      var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || V.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors: e
      };
    },
    findElements: function findElements() {
      try {
        return this.elements.controls = _.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
          play: x.call(this, this.config.selectors.buttons.play),
          pause: _.call(this, this.config.selectors.buttons.pause),
          restart: _.call(this, this.config.selectors.buttons.restart),
          rewind: _.call(this, this.config.selectors.buttons.rewind),
          fastForward: _.call(this, this.config.selectors.buttons.fastForward),
          mute: _.call(this, this.config.selectors.buttons.mute),
          pip: _.call(this, this.config.selectors.buttons.pip),
          airplay: _.call(this, this.config.selectors.buttons.airplay),
          settings: _.call(this, this.config.selectors.buttons.settings),
          captions: _.call(this, this.config.selectors.buttons.captions),
          fullscreen: _.call(this, this.config.selectors.buttons.fullscreen)
        }, this.elements.progress = _.call(this, this.config.selectors.progress), this.elements.inputs = {
          seek: _.call(this, this.config.selectors.inputs.seek),
          volume: _.call(this, this.config.selectors.inputs.volume)
        }, this.elements.display = {
          buffer: _.call(this, this.config.selectors.display.buffer),
          currentTime: _.call(this, this.config.selectors.display.currentTime),
          duration: _.call(this, this.config.selectors.display.duration)
        }, l.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0;
      } catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
      }
    },
    createIcon: function createIcon(e, t) {
      var i = oe.getIconUrl.call(this),
          n = (i.cors ? "" : i.url) + "#" + this.config.iconPrefix,
          s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      k(s, K(t, {
        role: "presentation",
        focusable: "false"
      }));
      var a = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          o = n + "-" + e;
      return "href" in a ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", o) : a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), s.appendChild(a), s;
    },
    createLabel: function createLabel(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = {
        pip: "PIP",
        airplay: "AirPlay"
      }[e] || X(e, this.config);
      return w("span", Object.assign({}, t, {
        "class": [t["class"], this.config.classNames.hidden].filter(Boolean).join(" ")
      }), i);
    },
    createBadge: function createBadge(e) {
      if (l.empty(e)) return null;
      var t = w("span", {
        "class": this.config.classNames.menu.value
      });
      return t.appendChild(w("span", {
        "class": this.config.classNames.menu.badge
      }, e)), t;
    },
    createButton: function createButton(e, t) {
      var i = w("button"),
          n = Object.assign({}, t),
          s = $(e),
          a = !1,
          o = void 0,
          r = void 0,
          c = void 0,
          u = void 0;

      switch ("type" in n || (n.type = "button"), "class" in n ? n["class"].includes(this.config.classNames.control) || (n["class"] += " " + this.config.classNames.control) : n["class"] = this.config.classNames.control, e) {
        case "play":
          a = !0, o = "play", c = "pause", r = "play", u = "pause";
          break;

        case "mute":
          a = !0, o = "mute", c = "unmute", r = "volume", u = "muted";
          break;

        case "captions":
          a = !0, o = "enableCaptions", c = "disableCaptions", r = "captions-off", u = "captions-on";
          break;

        case "fullscreen":
          a = !0, o = "enterFullscreen", c = "exitFullscreen", r = "enter-fullscreen", u = "exit-fullscreen";
          break;

        case "play-large":
          n["class"] += " " + this.config.classNames.control + "--overlaid", s = "play", o = "play", r = "play";
          break;

        default:
          o = s, r = e;
      }

      return a ? (i.appendChild(oe.createIcon.call(this, u, {
        "class": "icon--pressed"
      })), i.appendChild(oe.createIcon.call(this, r, {
        "class": "icon--not-pressed"
      })), i.appendChild(oe.createLabel.call(this, c, {
        "class": "label--pressed"
      })), i.appendChild(oe.createLabel.call(this, o, {
        "class": "label--not-pressed"
      }))) : (i.appendChild(oe.createIcon.call(this, r)), i.appendChild(oe.createLabel.call(this, o))), K(n, P(this.config.selectors.buttons[s], n)), k(i, n), "play" === s ? (l.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(i)) : this.elements.buttons[s] = i, i;
    },
    createRange: function createRange(e, t) {
      var i = w("input", K(P(this.config.selectors.inputs[e]), {
        type: "range",
        min: 0,
        max: 100,
        step: .01,
        value: 0,
        autocomplete: "off",
        role: "slider",
        "aria-label": X(e, this.config),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": 0
      }, t));
      return this.elements.inputs[e] = i, oe.updateRangeFill.call(this, i), i;
    },
    createProgress: function createProgress(e, t) {
      var i = w("progress", K(P(this.config.selectors.display[e]), {
        min: 0,
        max: 100,
        value: 0,
        role: "presentation",
        "aria-hidden": !0
      }, t));

      if ("volume" !== e) {
        i.appendChild(w("span", null, "0"));
        var n = {
          played: "played",
          buffer: "buffered"
        }[e],
            s = n ? X(n, this.config) : "";
        i.innerText = "% " + s.toLowerCase();
      }

      return this.elements.display[e] = i, i;
    },
    createTime: function createTime(e) {
      var t = P(this.config.selectors.display[e]),
          i = w("div", K(t, {
        "class": (this.config.classNames.display.time + " " + (t["class"] ? t["class"] : "")).trim(),
        "aria-label": X(e, this.config)
      }), "00:00");
      return this.elements.display[e] = i, i;
    },
    bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
      var i = this;
      d(e, "keydown keyup", function (n) {
        if ([32, 38, 39, 40].includes(n.which) && (n.preventDefault(), n.stopPropagation(), "keydown" !== n.type)) {
          var s = L(e, '[role="menuitemradio"]');
          if (!s && [32, 39].includes(n.which)) oe.showMenuPanel.call(i, t, !0);else {
            var a = void 0;
            32 !== n.which && (40 === n.which || s && 39 === n.which ? (a = e.nextElementSibling, l.element(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, l.element(a) || (a = e.parentNode.lastElementChild)), I.call(i, a, !0));
          }
        }
      }, !1), d(e, "keyup", function (e) {
        13 === e.which && oe.focusFirstMenuItem.call(i, null, !0);
      });
    },
    createMenuItem: function createMenuItem(e) {
      var t = this,
          i = e.value,
          n = e.list,
          s = e.type,
          a = e.title,
          o = e.badge,
          r = void 0 === o ? null : o,
          c = e.checked,
          u = void 0 !== c && c,
          d = P(this.config.selectors.inputs[s]),
          h = w("button", K(d, {
        type: "button",
        role: "menuitemradio",
        "class": (this.config.classNames.control + " " + (d["class"] ? d["class"] : "")).trim(),
        "aria-checked": u,
        value: i
      })),
          p = w("span");
      p.innerHTML = a, l.element(r) && p.appendChild(r), h.appendChild(p), Object.defineProperty(h, "checked", {
        enumerable: !0,
        get: function get() {
          return "true" === h.getAttribute("aria-checked");
        },
        set: function set(e) {
          e && Array.from(h.parentNode.children).filter(function (e) {
            return L(e, '[role="menuitemradio"]');
          }).forEach(function (e) {
            return e.setAttribute("aria-checked", "false");
          }), h.setAttribute("aria-checked", e ? "true" : "false");
        }
      }), this.listeners.bind(h, "click keyup", function (e) {
        if (!l.keyboardEvent(e) || 32 === e.which) {
          switch (e.preventDefault(), e.stopPropagation(), h.checked = !0, s) {
            case "language":
              t.currentTrack = Number(i);
              break;

            case "quality":
              t.quality = i;
              break;

            case "speed":
              t.speed = parseFloat(i);
          }

          oe.showMenuPanel.call(t, "home", l.keyboardEvent(e));
        }
      }, s, !1), oe.bindMenuItemShortcuts.call(this, h, s), n.appendChild(h);
    },
    formatTime: function formatTime() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return l.number(e) ? ae(e, ie(this.duration) > 0, t) : e;
    },
    updateTimeDisplay: function updateTimeDisplay() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      l.element(e) && l.number(t) && (e.innerText = oe.formatTime(t, i));
    },
    updateVolume: function updateVolume() {
      this.supported.ui && (l.element(this.elements.inputs.volume) && oe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), l.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
    },
    setRange: function setRange(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      l.element(e) && (e.value = t, oe.updateRangeFill.call(this, e));
    },
    updateProgress: function updateProgress(e) {
      var t = this;

      if (this.supported.ui && l.event(e)) {
        var i,
            n,
            s = 0;
        if (e) switch (e.type) {
          case "timeupdate":
          case "seeking":
          case "seeked":
            i = this.currentTime, n = this.duration, s = 0 === i || 0 === n || Number.isNaN(i) || Number.isNaN(n) ? 0 : (i / n * 100).toFixed(2), "timeupdate" === e.type && oe.setRange.call(this, this.elements.inputs.seek, s);
            break;

          case "playing":
          case "progress":
            !function (e, i) {
              var n = l.number(i) ? i : 0,
                  s = l.element(e) ? e : t.elements.display.buffer;

              if (l.element(s)) {
                s.value = n;
                var a = s.getElementsByTagName("span")[0];
                l.element(a) && (a.childNodes[0].nodeValue = n);
              }
            }(this.elements.display.buffer, 100 * this.buffered);
        }
      }
    },
    updateRangeFill: function updateRangeFill(e) {
      var t = l.event(e) ? e.target : e;

      if (l.element(t) && "range" === t.getAttribute("type")) {
        if (L(t, this.config.selectors.inputs.seek)) {
          t.setAttribute("aria-valuenow", this.currentTime);
          var i = oe.formatTime(this.currentTime),
              n = oe.formatTime(this.duration),
              s = X("seekLabel", this.config);
          t.setAttribute("aria-valuetext", s.replace("{currentTime}", i).replace("{duration}", n));
        } else if (L(t, this.config.selectors.inputs.volume)) {
          var a = 100 * t.value;
          t.setAttribute("aria-valuenow", a), t.setAttribute("aria-valuetext", a.toFixed(1) + "%");
        } else t.setAttribute("aria-valuenow", t.value);

        V.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%");
      }
    },
    updateSeekTooltip: function updateSeekTooltip(e) {
      var t = this;

      if (this.config.tooltips.seek && l.element(this.elements.inputs.seek) && l.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
        var i = 0,
            n = this.elements.progress.getBoundingClientRect(),
            s = this.config.classNames.tooltip + "--visible",
            a = function a(e) {
          M(t.elements.display.seekTooltip, s, e);
        };

        if (this.touch) a(!1);else {
          if (l.event(e)) i = 100 / n.width * (e.pageX - n.left);else {
            if (!N(this.elements.display.seekTooltip, s)) return;
            i = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }
          i < 0 ? i = 0 : i > 100 && (i = 100), oe.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * i), this.elements.display.seekTooltip.style.left = i + "%", l.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && a("mouseenter" === e.type);
        }
      }
    },
    timeUpdate: function timeUpdate(e) {
      var t = !l.element(this.elements.display.duration) && this.config.invertTime;
      oe.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || oe.updateProgress.call(this, e);
    },
    durationUpdate: function durationUpdate() {
      if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
        if (this.duration >= Math.pow(2, 32)) return S(this.elements.display.currentTime, !0), void S(this.elements.progress, !0);
        l.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
        var e = l.element(this.elements.display.duration);
        !e && this.config.displayDuration && this.paused && oe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && oe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), oe.updateSeekTooltip.call(this);
      }
    },
    toggleMenuButton: function toggleMenuButton(e, t) {
      S(this.elements.settings.buttons[e], !t);
    },
    updateSetting: function updateSetting(e, t, i) {
      var n = this.elements.settings.panels[e],
          s = null,
          a = t;
      if ("captions" === e) s = this.currentTrack;else {
        if (s = l.empty(i) ? this[e] : i, l.empty(s) && (s = this.config[e]["default"]), !l.empty(this.options[e]) && !this.options[e].includes(s)) return void this.debug.warn("Unsupported value of '" + s + "' for " + e);
        if (!this.config[e].options.includes(s)) return void this.debug.warn("Disabled value of '" + s + "' for " + e);
      }

      if (l.element(a) || (a = n && n.querySelector('[role="menu"]')), l.element(a)) {
        this.elements.settings.buttons[e].querySelector("." + this.config.classNames.menu.value).innerHTML = oe.getLabel.call(this, e, s);
        var o = a && a.querySelector('[value="' + s + '"]');
        l.element(o) && (o.checked = !0);
      }
    },
    getLabel: function getLabel(e, t) {
      switch (e) {
        case "speed":
          return 1 === t ? X("normal", this.config) : t + "&times;";

        case "quality":
          if (l.number(t)) {
            var i = X("qualityLabel." + t, this.config);
            return i.length ? i : t + "p";
          }

          return Q(t);

        case "captions":
          return ce.getLabel.call(this);

        default:
          return null;
      }
    },
    setQualityMenu: function setQualityMenu(e) {
      var t = this;

      if (l.element(this.elements.settings.panels.quality)) {
        var i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
        l.array(e) && (this.options.quality = z(e).filter(function (e) {
          return t.config.quality.options.includes(e);
        }));
        var n = !l.empty(this.options.quality) && this.options.quality.length > 1;

        if (oe.toggleMenuButton.call(this, "quality", n), E(i), oe.checkMenu.call(this), n) {
          this.options.quality.sort(function (e, i) {
            var n = t.config.quality.options;
            return n.indexOf(e) > n.indexOf(i) ? 1 : -1;
          }).forEach(function (e) {
            oe.createMenuItem.call(t, {
              value: e,
              list: i,
              type: "quality",
              title: oe.getLabel.call(t, "quality", e),
              badge: function (e) {
                var i = X("qualityBadge." + e, t.config);
                return i.length ? oe.createBadge.call(t, i) : null;
              }(e)
            });
          }), oe.updateSetting.call(this, "quality", i);
        }
      }
    },
    setCaptionsMenu: function setCaptionsMenu() {
      var e = this;

      if (l.element(this.elements.settings.panels.captions)) {
        var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
            i = ce.getTracks.call(this),
            n = Boolean(i.length);

        if (oe.toggleMenuButton.call(this, "captions", n), E(t), oe.checkMenu.call(this), n) {
          var s = i.map(function (i, n) {
            return {
              value: n,
              checked: e.captions.toggled && e.currentTrack === n,
              title: ce.getLabel.call(e, i),
              badge: i.language && oe.createBadge.call(e, i.language.toUpperCase()),
              list: t,
              type: "language"
            };
          });
          s.unshift({
            value: -1,
            checked: !this.captions.toggled,
            title: X("disabled", this.config),
            list: t,
            type: "language"
          }), s.forEach(oe.createMenuItem.bind(this)), oe.updateSetting.call(this, "captions", t);
        }
      }
    },
    setSpeedMenu: function setSpeedMenu(e) {
      var t = this;

      if (l.element(this.elements.settings.panels.speed)) {
        var i = this.elements.settings.panels.speed.querySelector('[role="menu"]');
        l.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (e) {
          return t.config.speed.options.includes(e);
        });
        var n = !l.empty(this.options.speed) && this.options.speed.length > 1;
        oe.toggleMenuButton.call(this, "speed", n), E(i), oe.checkMenu.call(this), n && (this.options.speed.forEach(function (e) {
          oe.createMenuItem.call(t, {
            value: e,
            list: i,
            type: "speed",
            title: oe.getLabel.call(t, "speed", e)
          });
        }), oe.updateSetting.call(this, "speed", i));
      }
    },
    checkMenu: function checkMenu() {
      var e = this.elements.settings.buttons,
          t = !l.empty(e) && Object.values(e).some(function (e) {
        return !e.hidden;
      });
      S(this.elements.settings.menu, !t);
    },
    focusFirstMenuItem: function focusFirstMenuItem(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

      if (!this.elements.settings.popup.hidden) {
        var i = e;
        l.element(i) || (i = Object.values(this.elements.settings.panels).find(function (e) {
          return !e.hidden;
        }));
        var n = i.querySelector('[role^="menuitem"]');
        I.call(this, n, t);
      }
    },
    toggleMenu: function toggleMenu(e) {
      var t = this.elements.settings.popup,
          i = this.elements.buttons.settings;

      if (l.element(t) && l.element(i)) {
        var n = t.hidden,
            s = n;
        if (l["boolean"](e)) s = e;else if (l.keyboardEvent(e) && 27 === e.which) s = !1;else if (l.event(e)) {
          var a = t.contains(e.target);
          if (a || !a && e.target !== i && s) return;
        }
        i.setAttribute("aria-expanded", s), S(t, !s), M(this.elements.container, this.config.classNames.menu.open, s), s && l.keyboardEvent(e) ? oe.focusFirstMenuItem.call(this, null, !0) : s || n || I.call(this, i, l.keyboardEvent(e));
      }
    },
    getMenuSize: function getMenuSize(e) {
      var t = e.cloneNode(!0);
      t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
      var i = t.scrollWidth,
          n = t.scrollHeight;
      return A(t), {
        width: i,
        height: n
      };
    },
    showMenuPanel: function showMenuPanel() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = document.getElementById("plyr-settings-" + this.id + "-" + t);

      if (l.element(n)) {
        var s = n.parentNode,
            a = Array.from(s.children).find(function (e) {
          return !e.hidden;
        });

        if (F.transitions && !F.reducedMotion) {
          s.style.width = a.scrollWidth + "px", s.style.height = a.scrollHeight + "px";
          var o = oe.getMenuSize.call(this, n);
          d.call(this, s, R, function t(i) {
            i.target === s && ["width", "height"].includes(i.propertyName) && (s.style.width = "", s.style.height = "", h.call(e, s, R, t));
          }), s.style.width = o.width + "px", s.style.height = o.height + "px";
        }

        S(a, !0), S(n, !1), oe.focusFirstMenuItem.call(this, n, i);
      }
    },
    create: function create(e) {
      var t = this,
          i = w("div", P(this.config.selectors.controls.wrapper));

      if (this.config.controls.includes("restart") && i.appendChild(oe.createButton.call(this, "restart")), this.config.controls.includes("rewind") && i.appendChild(oe.createButton.call(this, "rewind")), this.config.controls.includes("play") && i.appendChild(oe.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && i.appendChild(oe.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
        var n = w("div", P(this.config.selectors.progress));

        if (n.appendChild(oe.createRange.call(this, "seek", {
          id: "plyr-seek-" + e.id
        })), n.appendChild(oe.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
          var s = w("span", {
            "class": this.config.classNames.tooltip
          }, "00:00");
          n.appendChild(s), this.elements.display.seekTooltip = s;
        }

        this.elements.progress = n, i.appendChild(this.elements.progress);
      }

      if (this.config.controls.includes("current-time") && i.appendChild(oe.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && i.appendChild(oe.createTime.call(this, "duration")), this.config.controls.includes("mute") || this.config.controls.includes("volume")) {
        var a = w("div", {
          "class": "plyr__volume"
        });

        if (this.config.controls.includes("mute") && a.appendChild(oe.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
          var o = {
            max: 1,
            step: .05,
            value: this.config.volume
          };
          a.appendChild(oe.createRange.call(this, "volume", K(o, {
            id: "plyr-volume-" + e.id
          }))), this.elements.volume = a;
        }

        i.appendChild(a);
      }

      if (this.config.controls.includes("captions") && i.appendChild(oe.createButton.call(this, "captions")), this.config.controls.includes("settings") && !l.empty(this.config.settings)) {
        var r = w("div", {
          "class": "plyr__menu",
          hidden: ""
        });
        r.appendChild(oe.createButton.call(this, "settings", {
          "aria-haspopup": !0,
          "aria-controls": "plyr-settings-" + e.id,
          "aria-expanded": !1
        }));
        var c = w("div", {
          "class": "plyr__menu__container",
          id: "plyr-settings-" + e.id,
          hidden: ""
        }),
            u = w("div"),
            h = w("div", {
          id: "plyr-settings-" + e.id + "-home"
        }),
            p = w("div", {
          role: "menu"
        });
        h.appendChild(p), u.appendChild(h), this.elements.settings.panels.home = h, this.config.settings.forEach(function (i) {
          var n = w("button", K(P(t.config.selectors.buttons.settings), {
            type: "button",
            "class": t.config.classNames.control + " " + t.config.classNames.control + "--forward",
            role: "menuitem",
            "aria-haspopup": !0,
            hidden: ""
          }));
          oe.bindMenuItemShortcuts.call(t, n, i), d(n, "click", function () {
            oe.showMenuPanel.call(t, i, !1);
          });
          var s = w("span", null, X(i, t.config)),
              a = w("span", {
            "class": t.config.classNames.menu.value
          });
          a.innerHTML = e[i], s.appendChild(a), n.appendChild(s), p.appendChild(n);
          var o = w("div", {
            id: "plyr-settings-" + e.id + "-" + i,
            hidden: ""
          }),
              r = w("button", {
            type: "button",
            "class": t.config.classNames.control + " " + t.config.classNames.control + "--back"
          });
          r.appendChild(w("span", {
            "aria-hidden": !0
          }, X(i, t.config))), r.appendChild(w("span", {
            "class": t.config.classNames.hidden
          }, X("menuBack", t.config))), d(o, "keydown", function (e) {
            37 === e.which && (e.preventDefault(), e.stopPropagation(), oe.showMenuPanel.call(t, "home", !0));
          }, !1), d(r, "click", function () {
            oe.showMenuPanel.call(t, "home", !1);
          }), o.appendChild(r), o.appendChild(w("div", {
            role: "menu"
          })), u.appendChild(o), t.elements.settings.buttons[i] = n, t.elements.settings.panels[i] = o;
        }), c.appendChild(u), r.appendChild(c), i.appendChild(r), this.elements.settings.popup = c, this.elements.settings.menu = r;
      }

      return this.config.controls.includes("pip") && F.pip && i.appendChild(oe.createButton.call(this, "pip")), this.config.controls.includes("airplay") && F.airplay && i.appendChild(oe.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && i.appendChild(oe.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(oe.createButton.call(this, "play-large")), this.elements.controls = i, this.isHTML5 && oe.setQualityMenu.call(this, U.getQualityOptions.call(this)), oe.setSpeedMenu.call(this), i;
    },
    inject: function inject() {
      var e = this;

      if (this.config.loadSprite) {
        var t = oe.getIconUrl.call(this);
        t.cors && te(t.url, "sprite-plyr");
      }

      this.id = Math.floor(1e4 * Math.random());
      var i = null;
      this.elements.controls = null;
      var n = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      },
          s = !0;
      l["function"](this.config.controls) && (this.config.controls = this.config.controls.call(this.props)), this.config.controls || (this.config.controls = []), l.element(this.config.controls) || l.string(this.config.controls) ? i = this.config.controls : (i = oe.create.call(this, {
        id: this.id,
        seektime: this.config.seekTime,
        speed: this.speed,
        quality: this.quality,
        captions: ce.getLabel.call(this)
      }), s = !1);

      var a = function a(e) {
        var t = e;
        return Object.entries(n).forEach(function (e) {
          var i = v(e, 2),
              n = i[0],
              s = i[1];
          t = J(t, "{" + n + "}", s);
        }), t;
      };

      s && (l.string(this.config.controls) ? i = a(i) : l.element(i) && (i.innerHTML = a(i.innerHTML)));
      var o = void 0;

      if (l.string(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)), l.element(o) || (o = this.elements.container), o[l.element(i) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", i), l.element(this.elements.controls) || oe.findElements.call(this), !l.empty(this.elements.buttons)) {
        var r = function r(t) {
          var i = e.config.classNames.controlPressed;
          Object.defineProperty(t, "pressed", {
            enumerable: !0,
            get: function get() {
              return N(t, i);
            },
            set: function set() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              M(t, i, e);
            }
          });
        };

        Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
          l.array(e) || l.nodeList(e) ? Array.from(e).filter(Boolean).forEach(r) : r(e);
        });
      }

      if (window.navigator.userAgent.includes("Edge") && B(o), this.config.tooltips.controls) {
        var c = this.config,
            u = c.classNames,
            d = c.selectors,
            h = d.controls.wrapper + " " + d.labels + " ." + u.hidden,
            p = x.call(this, h);
        Array.from(p).forEach(function (t) {
          M(t, e.config.classNames.hidden, !1), M(t, e.config.classNames.tooltip, !0);
        });
      }
    }
  };

  function re(e) {
    var t = e;

    if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
      var i = document.createElement("a");
      i.href = t, t = i.href;
    }

    try {
      return new URL(t);
    } catch (e) {
      return null;
    }
  }

  function le(e) {
    var t = new URLSearchParams();
    return l.object(e) && Object.entries(e).forEach(function (e) {
      var i = v(e, 2),
          n = i[0],
          s = i[1];
      t.set(n, s);
    }), t;
  }

  var ce = {
    setup: function setup() {
      if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !F.textTracks) l.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && oe.setCaptionsMenu.call(this);else {
        var e, t;

        if (l.element(this.elements.captions) || (this.elements.captions = w("div", P(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, l.element(e) && l.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), V.isIE && window.URL) {
          var i = this.media.querySelectorAll("track");
          Array.from(i).forEach(function (e) {
            var t = e.getAttribute("src"),
                i = re(t);
            null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && ee(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            })["catch"](function () {
              A(e);
            });
          });
        }

        var n = z((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
          return e.split("-")[0];
        })),
            s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
        if ("auto" === s) s = v(n, 1)[0];
        var a = this.storage.get("captions");

        if (l["boolean"](a) || (a = this.config.captions.active), Object.assign(this.captions, {
          toggled: !1,
          active: a,
          language: s,
          languages: n
        }), this.isHTML5) {
          var o = this.config.captions.update ? "addtrack removetrack" : "removetrack";
          d.call(this, this.media.textTracks, o, ce.update.bind(this));
        }

        setTimeout(ce.update.bind(this), 0);
      }
    },
    update: function update() {
      var e = this,
          t = ce.getTracks.call(this, !0),
          i = this.captions,
          n = i.active,
          s = i.language,
          a = i.meta,
          o = i.currentTrackNode,
          r = Boolean(t.find(function (e) {
        return e.language === s;
      }));
      this.isHTML5 && this.isVideo && t.filter(function (e) {
        return !a.get(e);
      }).forEach(function (t) {
        e.debug.log("Track added", t), a.set(t, {
          "default": "showing" === t.mode
        }), t.mode = "hidden", d.call(e, t, "cuechange", function () {
          return ce.updateCues.call(e);
        });
      }), (r && this.language !== s || !t.includes(o)) && (ce.setLanguage.call(this, s), ce.toggle.call(this, n && r)), M(this.elements.container, this.config.classNames.captions.enabled, !l.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && oe.setCaptionsMenu.call(this);
    },
    toggle: function toggle(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (this.supported.ui) {
        var i = this.captions.toggled,
            n = this.config.classNames.captions.active,
            s = l.nullOrUndefined(e) ? !i : e;

        if (s !== i) {
          if (t || (this.captions.active = s, this.storage.set({
            captions: s
          })), !this.language && s && !t) {
            var a = ce.getTracks.call(this),
                o = ce.findTrack.call(this, [this.captions.language].concat(function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, i = Array(e.length); t < e.length; t++) {
                  i[t] = e[t];
                }

                return i;
              }

              return Array.from(e);
            }(this.captions.languages)), !0);
            return this.captions.language = o.language, void ce.set.call(this, a.indexOf(o));
          }

          this.elements.buttons.captions && (this.elements.buttons.captions.pressed = s), M(this.elements.container, n, s), this.captions.toggled = s, oe.updateSetting.call(this, "captions"), f.call(this, this.media, s ? "captionsenabled" : "captionsdisabled");
        }
      }
    },
    set: function set(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = ce.getTracks.call(this);
      if (-1 !== e) {
        if (l.number(e)) {
          if (e in i) {
            if (this.captions.currentTrack !== e) {
              this.captions.currentTrack = e;
              var n = i[e],
                  s = (n || {}).language;
              this.captions.currentTrackNode = n, oe.updateSetting.call(this, "captions"), t || (this.captions.language = s, this.storage.set({
                language: s
              })), this.isVimeo && this.embed.enableTextTrack(s), f.call(this, this.media, "languagechange");
            }

            ce.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && ce.updateCues.call(this);
          } else this.debug.warn("Track not found", e);
        } else this.debug.warn("Invalid caption argument", e);
      } else ce.toggle.call(this, !1, t);
    },
    setLanguage: function setLanguage(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (l.string(e)) {
        var i = e.toLowerCase();
        this.captions.language = i;
        var n = ce.getTracks.call(this),
            s = ce.findTrack.call(this, [i]);
        ce.set.call(this, n.indexOf(s), t);
      } else this.debug.warn("Invalid language argument", e);
    },
    getTracks: function getTracks() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return Array.from((this.media || {}).textTracks || []).filter(function (i) {
        return !e.isHTML5 || t || e.captions.meta.has(i);
      }).filter(function (e) {
        return ["captions", "subtitles"].includes(e.kind);
      });
    },
    findTrack: function findTrack(e) {
      var t = this,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = ce.getTracks.call(this),
          s = function s(e) {
        return Number((t.captions.meta.get(e) || {})["default"]);
      },
          a = Array.from(n).sort(function (e, t) {
        return s(t) - s(e);
      }),
          o = void 0;

      return e.every(function (e) {
        return !(o = a.find(function (t) {
          return t.language === e;
        }));
      }), o || (i ? a[0] : void 0);
    },
    getCurrentTrack: function getCurrentTrack() {
      return ce.getTracks.call(this)[this.currentTrack];
    },
    getLabel: function getLabel(e) {
      var t = e;
      return !l.track(t) && F.textTracks && this.captions.toggled && (t = ce.getCurrentTrack.call(this)), l.track(t) ? l.empty(t.label) ? l.empty(t.language) ? X("enabled", this.config) : e.language.toUpperCase() : t.label : X("disabled", this.config);
    },
    updateCues: function updateCues(e) {
      if (this.supported.ui) if (l.element(this.elements.captions)) {
        if (l.nullOrUndefined(e) || Array.isArray(e)) {
          var t = e;

          if (!t) {
            var i = ce.getCurrentTrack.call(this);
            t = Array.from((i || {}).activeCues || []).map(function (e) {
              return e.getCueAsHTML();
            }).map(G);
          }

          var n = t.map(function (e) {
            return e.trim();
          }).join("\n");

          if (n !== this.elements.captions.innerHTML) {
            E(this.elements.captions);
            var s = w("span", P(this.config.selectors.caption));
            s.innerHTML = n, this.elements.captions.appendChild(s), f.call(this, this.media, "cuechange");
          }
        } else this.debug.warn("updateCues: Invalid input", e);
      } else this.debug.warn("No captions element to render to");
    }
  },
      ue = {
    enabled: !0,
    title: "",
    debug: !1,
    autoplay: !1,
    autopause: !0,
    playsinline: !0,
    seekTime: 10,
    volume: 1,
    muted: !1,
    duration: null,
    displayDuration: !0,
    invertTime: !0,
    toggleInvert: !0,
    ratio: "16:9",
    clickToPlay: !0,
    hideControls: !0,
    resetOnEnd: !1,
    disableContextMenu: !0,
    loadSprite: !0,
    iconPrefix: "plyr",
    iconUrl: "https://cdn.plyr.io/3.3.12/plyr.svg",
    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
    quality: {
      "default": 576,
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
    },
    loop: {
      active: !1
    },
    speed: {
      selected: 1,
      options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
    },
    keyboard: {
      focused: !0,
      global: !1
    },
    tooltips: {
      controls: !1,
      seek: !0
    },
    captions: {
      active: !1,
      language: "auto",
      update: !1
    },
    fullscreen: {
      enabled: !0,
      fallback: !0,
      iosNative: !1
    },
    storage: {
      enabled: !0,
      key: "plyr"
    },
    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
    settings: ["captions", "quality", "speed"],
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD"
      }
    },
    urls: {
      vimeo: {
        sdk: "https://player.vimeo.com/api/player.js",
        iframe: "https://player.vimeo.com/video/{0}?{1}",
        api: "https://vimeo.com/api/v2/video/{0}.json"
      },
      youtube: {
        sdk: "https://www.youtube.com/iframe_api",
        api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet"
      },
      googleIMA: {
        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
      }
    },
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
    selectors: {
      editable: "input, textarea, select, [contenteditable]",
      container: ".plyr",
      controls: {
        container: null,
        wrapper: ".plyr__controls"
      },
      labels: "[data-plyr]",
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: ".plyr__time--current",
        duration: ".plyr__time--duration",
        buffer: ".plyr__progress__buffer",
        loop: ".plyr__progress__loop",
        volume: ".plyr__volume--display"
      },
      progress: ".plyr__progress",
      captions: ".plyr__captions",
      caption: ".plyr__caption",
      menu: {
        quality: ".js-plyr__menu__list--quality"
      }
    },
    classNames: {
      type: "plyr--{0}",
      provider: "plyr--{0}",
      video: "plyr__video-wrapper",
      embed: "plyr__video-embed",
      embedContainer: "plyr__video-embed__container",
      poster: "plyr__poster",
      posterEnabled: "plyr__poster-enabled",
      ads: "plyr__ads",
      control: "plyr__control",
      controlPressed: "plyr__control--pressed",
      playing: "plyr--playing",
      paused: "plyr--paused",
      stopped: "plyr--stopped",
      loading: "plyr--loading",
      hover: "plyr--hover",
      tooltip: "plyr__tooltip",
      cues: "plyr__cues",
      hidden: "plyr__sr-only",
      hideControls: "plyr--hide-controls",
      isIos: "plyr--is-ios",
      isTouch: "plyr--is-touch",
      uiSupported: "plyr--full-ui",
      noTransition: "plyr--no-transition",
      display: {
        time: "plyr__time"
      },
      menu: {
        value: "plyr__menu__value",
        badge: "plyr__badge",
        open: "plyr--menu-open"
      },
      captions: {
        enabled: "plyr--captions-enabled",
        active: "plyr--captions-active"
      },
      fullscreen: {
        enabled: "plyr--fullscreen-enabled",
        fallback: "plyr--fullscreen-fallback"
      },
      pip: {
        supported: "plyr--pip-supported",
        active: "plyr--pip-active"
      },
      airplay: {
        supported: "plyr--airplay-supported",
        active: "plyr--airplay-active"
      },
      tabFocus: "plyr__tab-focus"
    },
    attributes: {
      embed: {
        provider: "data-plyr-provider",
        id: "data-plyr-embed-id"
      }
    },
    keys: {
      google: null
    },
    ads: {
      enabled: !1,
      publisherId: ""
    }
  },
      de = {
    html5: "html5",
    youtube: "youtube",
    vimeo: "vimeo"
  },
      he = {
    audio: "audio",
    video: "video"
  };

  var pe = function pe() {},
      fe = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      m(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled");
    }

    return g(e, [{
      key: "log",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : pe;
      }
    }, {
      key: "warn",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : pe;
      }
    }, {
      key: "error",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : pe;
      }
    }]), e;
  }();

  function me() {
    if (this.enabled) {
      var e = this.player.elements.buttons.fullscreen;
      l.element(e) && (e.pressed = this.active), f.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), V.isIos || function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

        if (l.element(e)) {
          var i = x.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
              n = i[0],
              s = i[i.length - 1];
          u.call(this, this.elements.container, "keydown", function (e) {
            if ("Tab" === e.key && 9 === e.keyCode) {
              var t = document.activeElement;
              t !== s || e.shiftKey ? t === n && e.shiftKey && (s.focus(), e.preventDefault()) : (n.focus(), e.preventDefault());
            }
          }, t, !1);
        }
      }.call(this.player, this.target, this.active);
    }
  }

  function ge() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    e ? this.scrollPosition = {
      x: window.scrollX || 0,
      y: window.scrollY || 0
    } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", M(this.target, this.player.config.classNames.fullscreen.fallback, e), me.call(this);
  }

  var ye = function () {
    function e(t) {
      var i = this;
      m(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
        x: 0,
        y: 0
      }, d.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function () {
        me.call(i);
      }), d.call(this.player, this.player.elements.container, "dblclick", function (e) {
        l.element(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle();
      }), this.update();
    }

    return g(e, [{
      key: "update",
      value: function value() {
        this.enabled ? this.player.debug.log((e["native"] ? "Native" : "Fallback") + " fullscreen enabled") : this.player.debug.log("Fullscreen not supported and fallback disabled"), M(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      }
    }, {
      key: "enter",
      value: function value() {
        this.enabled && (V.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : e["native"] ? this.prefix ? l.empty(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen() : ge.call(this, !0));
      }
    }, {
      key: "exit",
      value: function value() {
        if (this.enabled) if (V.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();else if (e["native"]) {
          if (this.prefix) {
            if (!l.empty(this.prefix)) {
              var t = "moz" === this.prefix ? "Cancel" : "Exit";
              document["" + this.prefix + t + this.property]();
            }
          } else (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else ge.call(this, !1);
      }
    }, {
      key: "toggle",
      value: function value() {
        this.active ? this.exit() : this.enter();
      }
    }, {
      key: "enabled",
      get: function get() {
        return (e["native"] || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      }
    }, {
      key: "active",
      get: function get() {
        return !!this.enabled && (e["native"] ? (this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement) === this.target : N(this.target, this.player.config.classNames.fullscreen.fallback));
      }
    }, {
      key: "target",
      get: function get() {
        return V.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container;
      }
    }], [{
      key: "native",
      get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      }
    }, {
      key: "prefix",
      get: function get() {
        if (l["function"](document.exitFullscreen)) return "";
        var e = "";
        return ["webkit", "moz", "ms"].some(function (t) {
          return !(!l["function"](document[t + "ExitFullscreen"]) && !l["function"](document[t + "CancelFullScreen"])) && (e = t, !0);
        }), e;
      }
    }, {
      key: "property",
      get: function get() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
    }]), e;
  }();

  function ve(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return new Promise(function (i, n) {
      var s = new Image(),
          a = function a() {
        delete s.onload, delete s.onerror, (s.naturalWidth >= t ? i : n)(s);
      };

      Object.assign(s, {
        onload: a,
        onerror: a,
        src: e
      });
    });
  }

  var be = {
    addStyleHook: function addStyleHook() {
      M(this.elements.container, this.config.selectors.container.replace(".", ""), !0), M(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    toggleNativeControls: function toggleNativeControls() {
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
    },
    build: function build() {
      var e = this;
      if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void be.toggleNativeControls.call(this, !0);
      l.element(this.elements.controls) || (oe.inject.call(this), this.listeners.controls()), be.toggleNativeControls.call(this), this.isHTML5 && ce.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, oe.updateVolume.call(this), oe.timeUpdate.call(this), be.checkPlaying.call(this), M(this.elements.container, this.config.classNames.pip.supported, F.pip && this.isHTML5 && this.isVideo), M(this.elements.container, this.config.classNames.airplay.supported, F.airplay && this.isHTML5), M(this.elements.container, this.config.classNames.isIos, V.isIos), M(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
        f.call(e, e.media, "ready");
      }, 0), be.setTitle.call(this), this.poster && be.setPoster.call(this, this.poster, !1)["catch"](function () {}), this.config.duration && oe.durationUpdate.call(this);
    },
    setTitle: function setTitle() {
      var e = X("play", this.config);

      if (l.string(this.config.title) && !l.empty(this.config.title) && (e += ", " + this.config.title), Array.from(this.elements.buttons.play || []).forEach(function (t) {
        t.setAttribute("aria-label", e);
      }), this.isEmbed) {
        var t = _.call(this, "iframe");

        if (!l.element(t)) return;
        var i = l.empty(this.config.title) ? "video" : this.config.title,
            n = X("frameTitle", this.config);
        t.setAttribute("title", n.replace("{title}", i));
      }
    },
    togglePoster: function togglePoster(e) {
      M(this.elements.container, this.config.classNames.posterEnabled, e);
    },
    setPoster: function setPoster(e) {
      var t = this;
      return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", e), function () {
        var e = this;
        return new Promise(function (t) {
          return e.ready ? setTimeout(t, 0) : d.call(e, e.elements.container, "ready", t);
        }).then(function () {});
      }.call(this).then(function () {
        return ve(e);
      })["catch"](function (i) {
        throw e === t.poster && be.togglePoster.call(t, !1), i;
      }).then(function () {
        if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster");
      }).then(function () {
        return Object.assign(t.elements.poster.style, {
          backgroundImage: "url('" + e + "')",
          backgroundSize: ""
        }), be.togglePoster.call(t, !0), e;
      })) : Promise.reject(new Error("Poster already set"));
    },
    checkPlaying: function checkPlaying(e) {
      var t = this;
      M(this.elements.container, this.config.classNames.playing, this.playing), M(this.elements.container, this.config.classNames.paused, this.paused), M(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
        e.pressed = t.playing;
      }), l.event(e) && "timeupdate" === e.type || be.toggleControls.call(this);
    },
    checkLoading: function checkLoading(e) {
      var t = this;
      this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
        M(t.elements.container, t.config.classNames.loading, t.loading), be.toggleControls.call(t);
      }, this.loading ? 250 : 0);
    },
    toggleControls: function toggleControls(e) {
      var t = this.elements.controls;
      t && this.config.hideControls && this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover));
    }
  },
      ke = function () {
    function e(t) {
      m(this, e), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }

    return g(e, [{
      key: "handleKey",
      value: function value(e) {
        var t = this.player,
            i = t.elements,
            n = e.keyCode ? e.keyCode : e.which,
            s = "keydown" === e.type,
            a = s && n === this.lastKey;

        if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && l.number(n)) {
          if (s) {
            var o = document.activeElement;

            if (l.element(o)) {
              var r = t.config.selectors.editable;
              if (o !== i.inputs.seek && L(o, r)) return;
              if (32 === e.which && L(o, 'button, [role^="menuitem"]')) return;
            }

            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                a || (t.currentTime = t.duration / 10 * (n - 48));
                break;

              case 32:
              case 75:
                a || t.togglePlay();
                break;

              case 38:
                t.increaseVolume(.1);
                break;

              case 40:
                t.decreaseVolume(.1);
                break;

              case 77:
                a || (t.muted = !t.muted);
                break;

              case 39:
                t.forward();
                break;

              case 37:
                t.rewind();
                break;

              case 70:
                t.fullscreen.toggle();
                break;

              case 67:
                a || t.toggleCaptions();
                break;

              case 76:
                t.loop = !t.loop;
            }

            !t.fullscreen.enabled && t.fullscreen.active && 27 === n && t.fullscreen.toggle(), this.lastKey = n;
          } else this.lastKey = null;
        }
      }
    }, {
      key: "toggleMenu",
      value: function value(e) {
        oe.toggleMenu.call(this.player, e);
      }
    }, {
      key: "firstTouch",
      value: function value() {
        var e = this.player,
            t = e.elements;
        e.touch = !0, M(t.container, e.config.classNames.isTouch, !0);
      }
    }, {
      key: "setTabFocus",
      value: function value(e) {
        var t = this.player,
            i = t.elements;

        if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
          "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
          var n,
              s = e.timeStamp - this.lastKeyDown <= 20;
          if ("focus" !== e.type || s) n = t.config.classNames.tabFocus, M(x.call(t, "." + n), n, !1), this.focusTimer = setTimeout(function () {
            var e = document.activeElement;
            i.container.contains(e) && M(document.activeElement, t.config.classNames.tabFocus, !0);
          }, 10);
        }
      }
    }, {
      key: "global",
      value: function value() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = this.player;
        t.config.keyboard.global && u.call(t, window, "keydown keyup", this.handleKey, e, !1), u.call(t, document.body, "click", this.toggleMenu, e), p.call(t, document.body, "touchstart", this.firstTouch), u.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0);
      }
    }, {
      key: "container",
      value: function value() {
        var e = this.player,
            t = e.elements;
        !e.config.keyboard.global && e.config.keyboard.focused && d.call(e, t.container, "keydown keyup", this.handleKey, !1), d.call(e, t.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (i) {
          var n = t.controls;
          n && "enterfullscreen" === i.type && (n.pressed = !1, n.hover = !1);
          var s = 0;
          ["touchstart", "touchmove", "mousemove"].includes(i.type) && (be.toggleControls.call(e, !0), s = e.touch ? 3e3 : 2e3), clearTimeout(e.timers.controls), e.timers.controls = setTimeout(function () {
            return be.toggleControls.call(e, !1);
          }, s);
        });
      }
    }, {
      key: "media",
      value: function value() {
        var e = this.player,
            t = e.elements;

        if (d.call(e, e.media, "timeupdate seeking seeked", function (t) {
          return oe.timeUpdate.call(e, t);
        }), d.call(e, e.media, "durationchange loadeddata loadedmetadata", function (t) {
          return oe.durationUpdate.call(e, t);
        }), d.call(e, e.media, "canplay", function () {
          S(t.volume, !e.hasAudio), S(t.buttons.mute, !e.hasAudio);
        }), d.call(e, e.media, "ended", function () {
          e.isHTML5 && e.isVideo && e.config.resetOnEnd && e.restart();
        }), d.call(e, e.media, "progress playing seeking seeked", function (t) {
          return oe.updateProgress.call(e, t);
        }), d.call(e, e.media, "volumechange", function (t) {
          return oe.updateVolume.call(e, t);
        }), d.call(e, e.media, "playing play pause ended emptied timeupdate", function (t) {
          return be.checkPlaying.call(e, t);
        }), d.call(e, e.media, "waiting canplay seeked playing", function (t) {
          return be.checkLoading.call(e, t);
        }), d.call(e, e.media, "playing", function () {
          e.ads && e.ads.enabled && !e.ads.initialized && e.ads.managerPromise.then(function () {
            return e.ads.play();
          })["catch"](function () {
            return e.play();
          });
        }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
          var i = _.call(e, "." + e.config.classNames.video);

          if (!l.element(i)) return;
          d.call(e, t.container, "click touchstart", function (n) {
            ([t.container, i].includes(n.target) || i.contains(n.target)) && (e.config.hideControls && e.touch && N(t.container, e.config.classNames.hideControls) || (e.ended ? (e.restart(), e.play()) : e.togglePlay()));
          });
        }

        e.supported.ui && e.config.disableContextMenu && d.call(e, t.wrapper, "contextmenu", function (e) {
          e.preventDefault();
        }, !1), d.call(e, e.media, "volumechange", function () {
          e.storage.set({
            volume: e.volume,
            muted: e.muted
          });
        }), d.call(e, e.media, "ratechange", function () {
          oe.updateSetting.call(e, "speed"), e.storage.set({
            speed: e.speed
          });
        }), d.call(e, e.media, "qualitychange", function (t) {
          oe.updateSetting.call(e, "quality", null, t.detail.quality);
        });
        var n = e.config.events.concat(["keyup", "keydown"]).join(" ");
        d.call(e, e.media, n, function (i) {
          var n = i.detail,
              s = void 0 === n ? {} : n;
          "error" === i.type && (s = e.media.error), f.call(e, t.container, i.type, !0, s);
        });
      }
    }, {
      key: "proxy",
      value: function value(e, t, i) {
        var n = this.player,
            s = n.config.listeners[i],
            a = !0;
        l["function"](s) && (a = s.call(n, e)), a && l["function"](t) && t.call(n, e);
      }
    }, {
      key: "bind",
      value: function value(e, t, i, n) {
        var s = this,
            a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            o = this.player,
            r = o.config.listeners[n],
            c = l["function"](r);
        d.call(o, e, t, function (e) {
          return s.proxy(e, i, n);
        }, a && !c);
      }
    }, {
      key: "controls",
      value: function value() {
        var e = this,
            t = this.player,
            i = t.elements,
            n = V.isIE ? "change" : "input";

        if (i.buttons.play && Array.from(i.buttons.play).forEach(function (i) {
          e.bind(i, "click", t.togglePlay, "play");
        }), this.bind(i.buttons.restart, "click", t.restart, "restart"), this.bind(i.buttons.rewind, "click", t.rewind, "rewind"), this.bind(i.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(i.buttons.mute, "click", function () {
          t.muted = !t.muted;
        }, "mute"), this.bind(i.buttons.captions, "click", function () {
          return t.toggleCaptions();
        }), this.bind(i.buttons.fullscreen, "click", function () {
          t.fullscreen.toggle();
        }, "fullscreen"), this.bind(i.buttons.pip, "click", function () {
          t.pip = "toggle";
        }, "pip"), this.bind(i.buttons.airplay, "click", t.airplay, "airplay"), this.bind(i.buttons.settings, "click", function (e) {
          e.stopPropagation(), oe.toggleMenu.call(t, e);
        }), this.bind(i.buttons.settings, "keyup", function (e) {
          var i = e.which;
          [13, 32].includes(i) && (13 !== i ? (e.preventDefault(), e.stopPropagation(), oe.toggleMenu.call(t, e)) : oe.focusFirstMenuItem.call(t, null, !0));
        }, null, !1), this.bind(i.settings.menu, "keydown", function (e) {
          27 === e.which && oe.toggleMenu.call(t, e);
        }), this.bind(i.inputs.seek, "mousedown mousemove", function (e) {
          var t = i.progress.getBoundingClientRect(),
              n = 100 / t.width * (e.pageX - t.left);
          e.currentTarget.setAttribute("seek-value", n);
        }), this.bind(i.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (e) {
          var i = e.currentTarget,
              n = e.keyCode ? e.keyCode : e.which;

          if (!l.keyboardEvent(e) || 39 === n || 37 === n) {
            var s = i.hasAttribute("play-on-seeked"),
                a = ["mouseup", "touchend", "keyup"].includes(e.type);
            s && a ? (i.removeAttribute("play-on-seeked"), t.play()) : !a && t.playing && (i.setAttribute("play-on-seeked", ""), t.pause());
          }
        }), V.isIos) {
          var s = x.call(t, 'input[type="range"]');
          Array.from(s).forEach(function (t) {
            return e.bind(t, n, function (e) {
              return B(e.target);
            });
          });
        }

        this.bind(i.inputs.seek, n, function (e) {
          var i = e.currentTarget,
              n = i.getAttribute("seek-value");
          l.empty(n) && (n = i.value), i.removeAttribute("seek-value"), t.currentTime = n / i.max * t.duration;
        }, "seek"), this.bind(i.progress, "mouseenter mouseleave mousemove", function (e) {
          return oe.updateSeekTooltip.call(t, e);
        }), V.isWebkit && Array.from(x.call(t, 'input[type="range"]')).forEach(function (i) {
          e.bind(i, "input", function (e) {
            return oe.updateRangeFill.call(t, e.target);
          });
        }), t.config.toggleInvert && !l.element(i.display.duration) && this.bind(i.display.currentTime, "click", function () {
          0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, oe.timeUpdate.call(t));
        }), this.bind(i.inputs.volume, n, function (e) {
          t.volume = e.target.value;
        }, "volume"), this.bind(i.controls, "mouseenter mouseleave", function (e) {
          i.controls.hover = !t.touch && "mouseenter" === e.type;
        }), this.bind(i.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
          i.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
        }), this.bind(i.controls, "focusin focusout", function (i) {
          var n = t.config,
              s = t.elements,
              a = t.timers,
              o = "focusin" === i.type;

          if (M(s.controls, n.classNames.noTransition, o), be.toggleControls.call(t, o), o) {
            setTimeout(function () {
              M(s.controls, n.classNames.noTransition, !1);
            }, 0);
            var r = e.touch ? 3e3 : 4e3;
            clearTimeout(a.controls), a.controls = setTimeout(function () {
              return be.toggleControls.call(t, !1);
            }, r);
          }
        }), this.bind(i.inputs.volume, "wheel", function (e) {
          var i = e.webkitDirectionInvertedFromDevice,
              n = [e.deltaX, -e.deltaY].map(function (e) {
            return i ? -e : e;
          }),
              s = v(n, 2),
              a = s[0],
              o = s[1],
              r = Math.sign(Math.abs(a) > Math.abs(o) ? a : o);
          t.increaseVolume(r / 50);
          var l = t.media.volume;
          (1 === r && l < 1 || -1 === r && l > 0) && e.preventDefault();
        }, "volume", !1);
      }
    }]), e;
  }();

  "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self && self;
  var we,
      Te = (function (e, t) {
    var i;
    i = function i() {
      var e = function e() {},
          t = {},
          i = {},
          n = {};

      function s(e, t) {
        if (e) {
          var s = n[e];
          if (i[e] = t, s) for (; s.length;) {
            s[0](e, t), s.splice(0, 1);
          }
        }
      }

      function a(t, i) {
        t.call && (t = {
          success: t
        }), i.length ? (t.error || e)(i) : (t.success || e)(t);
      }

      function o(t, i, n, s) {
        var a,
            r,
            l = document,
            c = n.async,
            u = (n.numRetries || 0) + 1,
            d = n.before || e,
            h = t.replace(/^(css|img)!/, "");
        s = s || 0, /(^css!|\.css$)/.test(t) ? (a = !0, (r = l.createElement("link")).rel = "stylesheet", r.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (r = l.createElement("img")).src = h : ((r = l.createElement("script")).src = t, r.async = void 0 === c || c), r.onload = r.onerror = r.onbeforeload = function (e) {
          var l = e.type[0];
          if (a && "hideFocus" in r) try {
            r.sheet.cssText.length || (l = "e");
          } catch (e) {
            l = "e";
          }
          if ("e" == l && (s += 1) < u) return o(t, i, n, s);
          i(t, l, e.defaultPrevented);
        }, !1 !== d(t, r) && l.head.appendChild(r);
      }

      function r(e, i, n) {
        var r, l;

        if (i && i.trim && (r = i), l = (r ? n : i) || {}, r) {
          if (r in t) throw "LoadJS";
          t[r] = !0;
        }

        !function (e, t, i) {
          var n,
              s,
              a = (e = e.push ? e : [e]).length,
              r = a,
              l = [];

          for (n = function n(e, i, _n) {
            if ("e" == i && l.push(e), "b" == i) {
              if (!_n) return;
              l.push(e);
            }

            --a || t(l);
          }, s = 0; s < r; s++) {
            o(e[s], n, i);
          }
        }(e, function (e) {
          a(l, e), s(r, e);
        }, l);
      }

      return r.ready = function (e, t) {
        return function (e, t) {
          e = e.push ? e : [e];
          var s,
              a,
              o,
              r = [],
              l = e.length,
              c = l;

          for (s = function s(e, i) {
            i.length && r.push(e), --c || t(r);
          }; l--;) {
            a = e[l], (o = i[a]) ? s(a, o) : (n[a] = n[a] || []).push(s);
          }
        }(e, function (e) {
          a(t, e);
        }), r;
      }, r.done = function (e) {
        s(e, []);
      }, r.reset = function () {
        t = {}, i = {}, n = {};
      }, r.isDefined = function (e) {
        return e in t;
      }, r;
    }, e.exports = i();
  }(we = {
    exports: {}
  }, we.exports), we.exports);

  function Ae(e) {
    return new Promise(function (t, i) {
      Te(e, {
        success: t,
        error: i
      });
    });
  }

  function Ee(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, f.call(this, this.media, e ? "play" : "pause"));
  }

  var Ce = {
    setup: function setup() {
      var e = this;
      M(this.elements.wrapper, this.config.classNames.embed, !0), Ce.setAspectRatio.call(this), l.object(window.Vimeo) ? Ce.ready.call(this) : Ae(this.config.urls.vimeo.sdk).then(function () {
        Ce.ready.call(e);
      })["catch"](function (t) {
        e.debug.warn("Vimeo API failed to load", t);
      });
    },
    setAspectRatio: function setAspectRatio(e) {
      var t = (l.string(e) ? e : this.config.ratio).split(":"),
          i = v(t, 2),
          n = 100 / i[0] * i[1];

      if (this.elements.wrapper.style.paddingBottom = n + "%", this.supported.ui) {
        var s = (240 - n) / 4.8;
        this.media.style.transform = "translateY(-" + s + "%)";
      }
    },
    ready: function ready() {
      var e = this,
          t = this,
          i = le({
        loop: t.config.loop.active,
        autoplay: t.autoplay,
        byline: !1,
        portrait: !1,
        title: !1,
        speed: !0,
        transparent: 0,
        gesture: "media",
        playsinline: !this.config.fullscreen.iosNative
      }),
          n = t.media.getAttribute("src");
      l.empty(n) && (n = t.media.getAttribute(t.config.attributes.embed.id));
      var s,
          a = (s = n, l.empty(s) ? null : l.number(Number(s)) ? s : s.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : s),
          o = w("iframe"),
          r = Y(t.config.urls.vimeo.iframe, a, i);
      o.setAttribute("src", r), o.setAttribute("allowfullscreen", ""), o.setAttribute("allowtransparency", ""), o.setAttribute("allow", "autoplay");
      var c = w("div", {
        poster: t.poster,
        "class": t.config.classNames.embedContainer
      });
      c.appendChild(o), t.media = C(c, t.media), ee(Y(t.config.urls.vimeo.api, a), "json").then(function (e) {
        if (!l.empty(e)) {
          var i = new URL(e[0].thumbnail_large);
          i.pathname = i.pathname.split("_")[0] + ".jpg", be.setPoster.call(t, i.href)["catch"](function () {});
        }
      }), t.embed = new window.Vimeo.Player(o, {
        autopause: t.config.autopause,
        muted: t.muted
      }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
        return Ee.call(t, !0), t.embed.play();
      }, t.media.pause = function () {
        return Ee.call(t, !1), t.embed.pause();
      }, t.media.stop = function () {
        t.pause(), t.currentTime = 0;
      };
      var u = t.media.currentTime;
      Object.defineProperty(t.media, "currentTime", {
        get: function get() {
          return u;
        },
        set: function set(e) {
          var i = t.embed,
              n = t.media,
              s = t.paused,
              a = t.volume,
              o = s && !i.hasPlayed;
          n.seeking = !0, f.call(t, n, "seeking"), Promise.resolve(o && i.setVolume(0)).then(function () {
            return i.setCurrentTime(e);
          }).then(function () {
            return o && i.pause();
          }).then(function () {
            return o && i.setVolume(a);
          })["catch"](function () {});
        }
      });
      var d = t.config.speed.selected;
      Object.defineProperty(t.media, "playbackRate", {
        get: function get() {
          return d;
        },
        set: function set(e) {
          t.embed.setPlaybackRate(e).then(function () {
            d = e, f.call(t, t.media, "ratechange");
          })["catch"](function (e) {
            "Error" === e.name && oe.setSpeedMenu.call(t, []);
          });
        }
      });
      var h = t.config.volume;
      Object.defineProperty(t.media, "volume", {
        get: function get() {
          return h;
        },
        set: function set(e) {
          t.embed.setVolume(e).then(function () {
            h = e, f.call(t, t.media, "volumechange");
          });
        }
      });
      var p = t.config.muted;
      Object.defineProperty(t.media, "muted", {
        get: function get() {
          return p;
        },
        set: function set(e) {
          var i = !!l["boolean"](e) && e;
          t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
            p = i, f.call(t, t.media, "volumechange");
          });
        }
      });
      var m = t.config.loop;
      Object.defineProperty(t.media, "loop", {
        get: function get() {
          return m;
        },
        set: function set(e) {
          var i = l["boolean"](e) ? e : t.config.loop.active;
          t.embed.setLoop(i).then(function () {
            m = i;
          });
        }
      });
      var g = void 0;
      t.embed.getVideoUrl().then(function (e) {
        g = e;
      })["catch"](function (t) {
        e.debug.warn(t);
      }), Object.defineProperty(t.media, "currentSrc", {
        get: function get() {
          return g;
        }
      }), Object.defineProperty(t.media, "ended", {
        get: function get() {
          return t.currentTime === t.duration;
        }
      }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (t) {
        var i = function (e, t) {
          var i = function e(t, i) {
            return 0 === i ? t : e(i, t % i);
          }(e, t);

          return e / i + ":" + t / i;
        }(t[0], t[1]);

        Ce.setAspectRatio.call(e, i);
      }), t.embed.setAutopause(t.config.autopause).then(function (e) {
        t.config.autopause = e;
      }), t.embed.getVideoTitle().then(function (i) {
        t.config.title = i, be.setTitle.call(e);
      }), t.embed.getCurrentTime().then(function (e) {
        u = e, f.call(t, t.media, "timeupdate");
      }), t.embed.getDuration().then(function (e) {
        t.media.duration = e, f.call(t, t.media, "durationchange");
      }), t.embed.getTextTracks().then(function (e) {
        t.media.textTracks = e, ce.setup.call(t);
      }), t.embed.on("cuechange", function (e) {
        var i = e.cues,
            n = (void 0 === i ? [] : i).map(function (e) {
          return t = e.text, i = document.createDocumentFragment(), n = document.createElement("div"), i.appendChild(n), n.innerHTML = t, i.firstChild.innerText;
          var t, i, n;
        });
        ce.updateCues.call(t, n);
      }), t.embed.on("loaded", function () {
        (t.embed.getPaused().then(function (e) {
          Ee.call(t, !e), e || f.call(t, t.media, "playing");
        }), l.element(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1);
      }), t.embed.on("play", function () {
        Ee.call(t, !0), f.call(t, t.media, "playing");
      }), t.embed.on("pause", function () {
        Ee.call(t, !1);
      }), t.embed.on("timeupdate", function (e) {
        t.media.seeking = !1, u = e.seconds, f.call(t, t.media, "timeupdate");
      }), t.embed.on("progress", function (e) {
        t.media.buffered = e.percent, f.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && f.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
          e !== t.media.duration && (t.media.duration = e, f.call(t, t.media, "durationchange"));
        });
      }), t.embed.on("seeked", function () {
        t.media.seeking = !1, f.call(t, t.media, "seeked");
      }), t.embed.on("ended", function () {
        t.media.paused = !0, f.call(t, t.media, "ended");
      }), t.embed.on("error", function (e) {
        t.media.error = e, f.call(t, t.media, "error");
      }), setTimeout(function () {
        return be.build.call(t);
      }, 0);
    }
  };

  function Pe(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, f.call(this, this.media, e ? "play" : "pause"));
  }

  var Se,
      Me = {
    setup: function setup() {
      var e = this;
      M(this.elements.wrapper, this.config.classNames.embed, !0), Me.setAspectRatio.call(this), l.object(window.YT) && l["function"](window.YT.Player) ? Me.ready.call(this) : (Ae(this.config.urls.youtube.sdk)["catch"](function (t) {
        e.debug.warn("YouTube API failed to load", t);
      }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function () {
        Me.ready.call(e);
      }), window.onYouTubeIframeAPIReady = function () {
        window.onYouTubeReadyCallbacks.forEach(function (e) {
          e();
        });
      });
    },
    getTitle: function getTitle(e) {
      var t = this;

      if (l["function"](this.embed.getVideoData)) {
        var i = this.embed.getVideoData().title;
        if (l.empty(i)) return this.config.title = i, void be.setTitle.call(this);
      }

      var n = this.config.keys.google;
      l.string(n) && !l.empty(n) && ee(Y(this.config.urls.youtube.api, e, n)).then(function (e) {
        l.object(e) && (t.config.title = e.items[0].snippet.title, be.setTitle.call(t));
      })["catch"](function () {});
    },
    setAspectRatio: function setAspectRatio() {
      var e = this.config.ratio.split(":");
      this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%";
    },
    ready: function ready() {
      var e = this,
          t = e.media.getAttribute("id");

      if (l.empty(t) || !t.startsWith("youtube-")) {
        var i = e.media.getAttribute("src");
        l.empty(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
        var n,
            s = (n = i, l.empty(n) ? null : n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : n),
            a = e.provider + "-" + Math.floor(1e4 * Math.random()),
            o = w("div", {
          id: a,
          poster: e.poster
        });
        e.media = C(o, e.media);

        var r = function r(e) {
          return "https://img.youtube.com/vi/" + s + "/" + e + "default.jpg";
        };

        ve(r("maxres"), 121)["catch"](function () {
          return ve(r("sd"), 121);
        })["catch"](function () {
          return ve(r("hq"));
        }).then(function (t) {
          return be.setPoster.call(e, t.src);
        }).then(function (t) {
          t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
        })["catch"](function () {}), e.embed = new window.YT.Player(a, {
          videoId: s,
          playerVars: {
            autoplay: e.config.autoplay ? 1 : 0,
            hl: e.config.hl,
            controls: e.supported.ui ? 0 : 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            disablekb: 1,
            playsinline: 1,
            widget_referrer: window ? window.location.href : null,
            cc_load_policy: e.captions.active ? 1 : 0,
            cc_lang_pref: e.config.captions.language
          },
          events: {
            onError: function onError(t) {
              if (!e.media.error) {
                var i = t.data,
                    n = {
                  2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                  5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                  100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                  101: "The owner of the requested video does not allow it to be played in embedded players.",
                  150: "The owner of the requested video does not allow it to be played in embedded players."
                }[i] || "An unknown error occured";
                e.media.error = {
                  code: i,
                  message: n
                }, f.call(e, e.media, "error");
              }
            },
            onPlaybackRateChange: function onPlaybackRateChange(t) {
              var i = t.target;
              e.media.playbackRate = i.getPlaybackRate(), f.call(e, e.media, "ratechange");
            },
            onReady: function onReady(t) {
              if (!l["function"](e.media.play)) {
                var i = t.target;
                Me.getTitle.call(e, s), e.media.play = function () {
                  Pe.call(e, !0), i.playVideo();
                }, e.media.pause = function () {
                  Pe.call(e, !1), i.pauseVideo();
                }, e.media.stop = function () {
                  i.stopVideo();
                }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                  get: function get() {
                    return Number(i.getCurrentTime());
                  },
                  set: function set(t) {
                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, f.call(e, e.media, "seeking"), i.seekTo(t);
                  }
                }), Object.defineProperty(e.media, "playbackRate", {
                  get: function get() {
                    return i.getPlaybackRate();
                  },
                  set: function set(e) {
                    i.setPlaybackRate(e);
                  }
                });
                var n = e.config.volume;
                Object.defineProperty(e.media, "volume", {
                  get: function get() {
                    return n;
                  },
                  set: function set(t) {
                    n = t, i.setVolume(100 * n), f.call(e, e.media, "volumechange");
                  }
                });
                var a = e.config.muted;
                Object.defineProperty(e.media, "muted", {
                  get: function get() {
                    return a;
                  },
                  set: function set(t) {
                    var n = l["boolean"](t) ? t : a;
                    a = n, i[n ? "mute" : "unMute"](), f.call(e, e.media, "volumechange");
                  }
                }), Object.defineProperty(e.media, "currentSrc", {
                  get: function get() {
                    return i.getVideoUrl();
                  }
                }), Object.defineProperty(e.media, "ended", {
                  get: function get() {
                    return e.currentTime === e.duration;
                  }
                }), e.options.speed = i.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), f.call(e, e.media, "timeupdate"), f.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                  e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && f.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), f.call(e, e.media, "canplaythrough"));
                }, 200), setTimeout(function () {
                  return be.build.call(e);
                }, 50);
              }
            },
            onStateChange: function onStateChange(t) {
              var i = t.target;

              switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, f.call(e, e.media, "seeked")), t.data) {
                case -1:
                  f.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), f.call(e, e.media, "progress");
                  break;

                case 0:
                  Pe.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : f.call(e, e.media, "ended");
                  break;

                case 1:
                  e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (Pe.call(e, !0), f.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    f.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), f.call(e, e.media, "durationchange")));
                  break;

                case 2:
                  e.muted || e.embed.unMute(), Pe.call(e, !1);
              }

              f.call(e, e.elements.container, "statechange", !1, {
                code: t.data
              });
            }
          }
        });
      }
    }
  },
      Ne = {
    setup: function setup() {
      this.media ? (M(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), M(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && M(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = w("div", {
        "class": this.config.classNames.video
      }), b(this.media, this.elements.wrapper), this.elements.poster = w("div", {
        "class": this.config.classNames.poster
      }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? U.extend.call(this) : this.isYouTube ? Me.setup.call(this) : this.isVimeo && Ce.setup.call(this)) : this.debug.warn("No media element found!");
    }
  },
      Le = function () {
    function e(t) {
      var i = this;
      m(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
        container: null,
        displayContainer: null
      }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        i.on("loaded", e), i.on("error", t);
      }), this.load();
    }

    return g(e, [{
      key: "load",
      value: function value() {
        var e = this;
        this.enabled && (l.object(window.google) && l.object(window.google.ima) ? this.ready() : Ae(this.player.config.urls.googleIMA.sdk).then(function () {
          e.ready();
        })["catch"](function () {
          e.trigger("error", new Error("Google IMA SDK failed to load"));
        }));
      }
    }, {
      key: "ready",
      value: function value() {
        var e = this;
        this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
          e.clearSafetyTimer("onAdsManagerLoaded()");
        }), this.listeners(), this.setupIMA();
      }
    }, {
      key: "setupIMA",
      value: function value() {
        this.elements.container = w("div", {
          "class": this.player.config.classNames.ads
        }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds();
      }
    }, {
      key: "requestAds",
      value: function value() {
        var e = this,
            t = this.player.elements.container;

        try {
          this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
            return e.onAdsManagerLoaded(t);
          }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
            return e.onAdError(t);
          }, !1);
          var i = new google.ima.AdsRequest();
          i.adTagUrl = this.tagUrl, i.linearAdSlotWidth = t.offsetWidth, i.linearAdSlotHeight = t.offsetHeight, i.nonLinearAdSlotWidth = t.offsetWidth, i.nonLinearAdSlotHeight = t.offsetHeight, i.forceNonLinearFullSlot = !1, i.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(i);
        } catch (e) {
          this.onAdError(e);
        }
      }
    }, {
      key: "pollCountdown",
      value: function value() {
        var e = this;
        if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
        this.countdownTimer = setInterval(function () {
          var t = ae(Math.max(e.manager.getRemainingTime(), 0)),
              i = X("advertisement", e.player.config) + " - " + t;
          e.elements.container.setAttribute("data-badge-text", i);
        }, 100);
      }
    }, {
      key: "onAdsManagerLoaded",
      value: function value(e) {
        var t = this;

        if (this.enabled) {
          var i = new google.ima.AdsRenderingSettings();
          i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), l.empty(this.cuePoints) || this.cuePoints.forEach(function (e) {
            if (0 !== e && -1 !== e && e < t.player.duration) {
              var i = t.player.elements.progress;

              if (l.element(i)) {
                var n = 100 / t.player.duration * e,
                    s = w("span", {
                  "class": t.player.config.classNames.cues
                });
                s.style.left = n.toString() + "%", i.appendChild(s);
              }
            }
          }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
            return t.onAdError(e);
          }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
            t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
              return t.onAdEvent(e);
            });
          }), this.trigger("loaded");
        }
      }
    }, {
      key: "onAdEvent",
      value: function value(e) {
        var t = this,
            i = this.player.elements.container,
            n = e.getAd(),
            s = function s(e) {
          var i = "ads" + e.replace(/_/g, "").toLowerCase();
          f.call(t.player, t.player.media, i);
        };

        switch (e.type) {
          case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), s(e.type), this.pollCountdown(!0), n.isLinear() || (n.width = i.offsetWidth, n.height = i.offsetHeight);
            break;

          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            s(e.type), this.loadAds();
            break;

          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            s(e.type), this.pauseContent();
            break;

          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            s(e.type), this.pollCountdown(), this.resumeContent();
            break;

          case google.ima.AdEvent.Type.STARTED:
          case google.ima.AdEvent.Type.MIDPOINT:
          case google.ima.AdEvent.Type.COMPLETE:
          case google.ima.AdEvent.Type.IMPRESSION:
          case google.ima.AdEvent.Type.CLICK:
            s(e.type);
        }
      }
    }, {
      key: "onAdError",
      value: function value(e) {
        this.cancel(), this.player.debug.warn("Ads error", e);
      }
    }, {
      key: "listeners",
      value: function value() {
        var e = this,
            t = this.player.elements.container,
            i = void 0;
        this.player.on("ended", function () {
          e.loader.contentComplete();
        }), this.player.on("seeking", function () {
          return i = e.player.currentTime;
        }), this.player.on("seeked", function () {
          var t = e.player.currentTime;
          l.empty(e.cuePoints) || e.cuePoints.forEach(function (n, s) {
            i < n && n < t && (e.manager.discardAdBreak(), e.cuePoints.splice(s, 1));
          });
        }), window.addEventListener("resize", function () {
          e.manager && e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL);
        });
      }
    }, {
      key: "play",
      value: function value() {
        var e = this,
            t = this.player.elements.container;
        this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
          e.elements.displayContainer.initialize();

          try {
            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0;
          } catch (t) {
            e.onAdError(t);
          }
        })["catch"](function () {});
      }
    }, {
      key: "resumeContent",
      value: function value() {
        this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play();
      }
    }, {
      key: "pauseContent",
      value: function value() {
        this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause();
      }
    }, {
      key: "cancel",
      value: function value() {
        this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
      }
    }, {
      key: "loadAds",
      value: function value() {
        var e = this;
        this.managerPromise.then(function () {
          e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
            e.on("loaded", t), e.player.debug.log(e.manager);
          }), e.requestAds();
        })["catch"](function () {});
      }
    }, {
      key: "trigger",
      value: function value(e) {
        for (var t = this, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) {
          n[s - 1] = arguments[s];
        }

        var a = this.events[e];
        l.array(a) && a.forEach(function (e) {
          l["function"](e) && e.apply(t, n);
        });
      }
    }, {
      key: "on",
      value: function value(e, t) {
        return l.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
      }
    }, {
      key: "startSafetyTimer",
      value: function value(e, t) {
        var i = this;
        this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function () {
          i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
        }, e);
      }
    }, {
      key: "clearSafetyTimer",
      value: function value(e) {
        l.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null);
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !l.empty(this.publisherId);
      }
    }, {
      key: "tagUrl",
      get: function get() {
        return "https://go.aniview.com/api/adserver6/vast/?" + le({
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: this.publisherId
        });
      }
    }]), e;
  }(),
      xe = {
    insertElements: function insertElements(e, t) {
      var i = this;
      l.string(t) ? T(e, this.media, {
        src: t
      }) : l.array(t) && t.forEach(function (t) {
        T(e, i.media, t);
      });
    },
    change: function change(e) {
      var t = this;
      W(e, "sources.length") ? (U.cancelRequests.call(this), this.destroy.call(this, function () {
        t.options.quality = [], A(t.media), t.media = null, l.element(t.elements.container) && t.elements.container.removeAttribute("class");
        var i = e.sources,
            n = e.type,
            s = v(i, 1)[0],
            a = s.provider,
            o = void 0 === a ? de.html5 : a,
            r = s.src,
            c = "html5" === o ? n : "div",
            u = "html5" === o ? {} : {
          src: r
        };
        Object.assign(t, {
          provider: o,
          type: n,
          supported: F.check(n, o, t.config.playsinline),
          media: w(c, u)
        }), t.elements.container.appendChild(t.media), l["boolean"](e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), l.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), be.addStyleHook.call(t), t.isHTML5 && xe.insertElements.call(t, "source", i), t.config.title = e.title, Ne.setup.call(t), t.isHTML5 && ("tracks" in e && xe.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && be.build.call(t), t.fullscreen.update();
      }, !0)) : this.debug.warn("Invalid source format");
    }
  },
      _e = function () {
    function e(t, i) {
      var n = this;
      if (m(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = F.touch, this.media = t, l.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || l.nodeList(this.media) || l.array(this.media)) && (this.media = this.media[0]), this.config = K({}, ue, e.defaults, i || {}, function () {
        try {
          return JSON.parse(n.media.getAttribute("data-plyr-config"));
        } catch (e) {
          return {};
        }
      }()), this.elements = {
        container: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      }, this.captions = {
        active: null,
        currentTrack: -1,
        meta: new WeakMap()
      }, this.fullscreen = {
        active: !1
      }, this.options = {
        speed: [],
        quality: []
      }, this.debug = new fe(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", F), !l.nullOrUndefined(this.media) && l.element(this.media)) {
        if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
          if (F.check().api) {
            var s = this.media.cloneNode(!0);
            s.autoplay = !1, this.elements.original = s;
            var a = this.media.tagName.toLowerCase(),
                o = null,
                r = null;

            switch (a) {
              case "div":
                if (o = this.media.querySelector("iframe"), l.element(o)) {
                  if (r = re(o.getAttribute("src")), this.provider = function (e) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? de.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? de.vimeo : null;
                  }(r.toString()), this.elements.container = this.media, this.media = o, this.elements.container.className = "", r.search.length) {
                    var c = ["1", "true"];
                    c.includes(r.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(r.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(r.searchParams.get("playsinline")), this.config.hl = r.searchParams.get("hl")) : this.config.playsinline = !0;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);

                if (l.empty(this.provider) || !Object.keys(de).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = he.video;
                break;

              case "video":
              case "audio":
                this.type = a, this.provider = de.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                break;

              default:
                return void this.debug.error("Setup failed: unsupported type");
            }

            this.supported = F.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new ke(this), this.storage = new Z(this), this.media.plyr = this, l.element(this.elements.container) || (this.elements.container = w("div"), b(this.media, this.elements.container)), be.addStyleHook.call(this), Ne.setup.call(this), this.config.debug && d.call(this, this.elements.container, this.config.events.join(" "), function (e) {
              n.debug.log("event: " + e.type);
            }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && be.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new ye(this), this.config.ads.enabled && (this.ads = new Le(this)), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support");
          } else this.debug.error("Setup failed: no support");
        } else this.debug.error("Setup failed: disabled by config");
      } else this.debug.error("Setup failed: no suitable element passed");
    }

    return g(e, [{
      key: "play",
      value: function value() {
        return l["function"](this.media.play) ? this.media.play() : null;
      }
    }, {
      key: "pause",
      value: function value() {
        this.playing && l["function"](this.media.pause) && this.media.pause();
      }
    }, {
      key: "togglePlay",
      value: function value(e) {
        (l["boolean"](e) ? e : !this.playing) ? this.play() : this.pause();
      }
    }, {
      key: "stop",
      value: function value() {
        this.isHTML5 ? (this.pause(), this.restart()) : l["function"](this.media.stop) && this.media.stop();
      }
    }, {
      key: "restart",
      value: function value() {
        this.currentTime = 0;
      }
    }, {
      key: "rewind",
      value: function value(e) {
        this.currentTime = this.currentTime - (l.number(e) ? e : this.config.seekTime);
      }
    }, {
      key: "forward",
      value: function value(e) {
        this.currentTime = this.currentTime + (l.number(e) ? e : this.config.seekTime);
      }
    }, {
      key: "increaseVolume",
      value: function value(e) {
        var t = this.media.muted ? 0 : this.volume;
        this.volume = t + (l.number(e) ? e : 0);
      }
    }, {
      key: "decreaseVolume",
      value: function value(e) {
        this.increaseVolume(-e);
      }
    }, {
      key: "toggleCaptions",
      value: function value(e) {
        ce.toggle.call(this, e, !1);
      }
    }, {
      key: "airplay",
      value: function value() {
        F.airplay && this.media.webkitShowPlaybackTargetPicker();
      }
    }, {
      key: "toggleControls",
      value: function value(e) {
        if (this.supported.ui && !this.isAudio) {
          var t = N(this.elements.container, this.config.classNames.hideControls),
              i = void 0 === e ? void 0 : !e,
              n = M(this.elements.container, this.config.classNames.hideControls, i);

          if (n && this.config.controls.includes("settings") && !l.empty(this.config.settings) && oe.toggleMenu.call(this, !1), n !== t) {
            var s = n ? "controlshidden" : "controlsshown";
            f.call(this, this.media, s);
          }

          return !n;
        }

        return !1;
      }
    }, {
      key: "on",
      value: function value(e, t) {
        d.call(this, this.elements.container, e, t);
      }
    }, {
      key: "once",
      value: function value(e, t) {
        p.call(this, this.elements.container, e, t);
      }
    }, {
      key: "off",
      value: function value(e, t) {
        h(this.elements.container, e, t);
      }
    }, {
      key: "destroy",
      value: function value(e) {
        var t = this,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

        if (this.ready) {
          var n = function n() {
            document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (A(t.elements.buttons.play), A(t.elements.captions), A(t.elements.controls), A(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), l["function"](e) && e()) : (function () {
              this && this.eventListeners && (this.eventListeners.forEach(function (e) {
                var t = e.element,
                    i = e.type,
                    n = e.callback,
                    s = e.options;
                t.removeEventListener(i, n, s);
              }), this.eventListeners = []);
            }.call(t), C(t.elements.original, t.elements.container), f.call(t, t.elements.original, "destroyed", !0), l["function"](e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
              t.elements = null, t.media = null;
            }, 200));
          };

          this.stop(), this.isHTML5 ? (clearTimeout(this.timers.loading), be.toggleNativeControls.call(this, !0), n()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && l["function"](this.embed.destroy) && this.embed.destroy(), n()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200));
        }
      }
    }, {
      key: "supports",
      value: function value(e) {
        return F.mime.call(this, e);
      }
    }, {
      key: "isHTML5",
      get: function get() {
        return Boolean(this.provider === de.html5);
      }
    }, {
      key: "isEmbed",
      get: function get() {
        return Boolean(this.isYouTube || this.isVimeo);
      }
    }, {
      key: "isYouTube",
      get: function get() {
        return Boolean(this.provider === de.youtube);
      }
    }, {
      key: "isVimeo",
      get: function get() {
        return Boolean(this.provider === de.vimeo);
      }
    }, {
      key: "isVideo",
      get: function get() {
        return Boolean(this.type === he.video);
      }
    }, {
      key: "isAudio",
      get: function get() {
        return Boolean(this.type === he.audio);
      }
    }, {
      key: "playing",
      get: function get() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
    }, {
      key: "paused",
      get: function get() {
        return Boolean(this.media.paused);
      }
    }, {
      key: "stopped",
      get: function get() {
        return Boolean(this.paused && 0 === this.currentTime);
      }
    }, {
      key: "ended",
      get: function get() {
        return Boolean(this.media.ended);
      }
    }, {
      key: "currentTime",
      set: function set(e) {
        if (this.duration) {
          var t = l.number(e) && e > 0;
          this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to " + this.currentTime + " seconds");
        }
      },
      get: function get() {
        return Number(this.media.currentTime);
      }
    }, {
      key: "buffered",
      get: function get() {
        var e = this.media.buffered;
        return l.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
      }
    }, {
      key: "seeking",
      get: function get() {
        return Boolean(this.media.seeking);
      }
    }, {
      key: "duration",
      get: function get() {
        var e = parseFloat(this.config.duration),
            t = (this.media || {}).duration,
            i = l.number(t) && t !== 1 / 0 ? t : 0;
        return e || i;
      }
    }, {
      key: "volume",
      set: function set(e) {
        var t = e;
        l.string(t) && (t = Number(t)), l.number(t) || (t = this.storage.get("volume")), l.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !l.empty(e) && this.muted && t > 0 && (this.muted = !1);
      },
      get: function get() {
        return Number(this.media.volume);
      }
    }, {
      key: "muted",
      set: function set(e) {
        var t = e;
        l["boolean"](t) || (t = this.storage.get("muted")), l["boolean"](t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
      },
      get: function get() {
        return Boolean(this.media.muted);
      }
    }, {
      key: "hasAudio",
      get: function get() {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      }
    }, {
      key: "speed",
      set: function set(e) {
        var t = null;
        l.number(e) && (t = e), l.number(t) || (t = this.storage.get("speed")), l.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")");
      },
      get: function get() {
        return Number(this.media.playbackRate);
      }
    }, {
      key: "quality",
      set: function set(e) {
        var t = this.config.quality,
            i = this.options.quality;

        if (i.length) {
          var n = [!l.empty(e) && Number(e), this.storage.get("quality"), t.selected, t["default"]].find(l.number);

          if (!i.includes(n)) {
            var s = function (e, t) {
              return l.array(e) && e.length ? e.reduce(function (e, i) {
                return Math.abs(i - t) < Math.abs(e - t) ? i : e;
              }) : null;
            }(i, n);

            this.debug.warn("Unsupported quality option: " + n + ", using " + s + " instead"), n = s;
          }

          t.selected = n, this.media.quality = n;
        }
      },
      get: function get() {
        return this.media.quality;
      }
    }, {
      key: "loop",
      set: function set(e) {
        var t = l["boolean"](e) ? e : this.config.loop.active;
        this.config.loop.active = t, this.media.loop = t;
      },
      get: function get() {
        return Boolean(this.media.loop);
      }
    }, {
      key: "source",
      set: function set(e) {
        xe.change.call(this, e);
      },
      get: function get() {
        return this.media.currentSrc;
      }
    }, {
      key: "poster",
      set: function set(e) {
        this.isVideo ? be.setPoster.call(this, e, !1)["catch"](function () {}) : this.debug.warn("Poster can only be set for video");
      },
      get: function get() {
        return this.isVideo ? this.media.getAttribute("poster") : null;
      }
    }, {
      key: "autoplay",
      set: function set(e) {
        var t = l["boolean"](e) ? e : this.config.autoplay;
        this.config.autoplay = t;
      },
      get: function get() {
        return Boolean(this.config.autoplay);
      }
    }, {
      key: "currentTrack",
      set: function set(e) {
        ce.set.call(this, e, !1);
      },
      get: function get() {
        var e = this.captions,
            t = e.toggled,
            i = e.currentTrack;
        return t ? i : -1;
      }
    }, {
      key: "language",
      set: function set(e) {
        ce.setLanguage.call(this, e, !1);
      },
      get: function get() {
        return (ce.getCurrentTrack.call(this) || {}).language;
      }
    }, {
      key: "pip",
      set: function set(e) {
        var t = "picture-in-picture",
            i = "inline";

        if (F.pip) {
          var n = l["boolean"](e) ? e : this.pip === i;
          this.media.webkitSetPresentationMode(n ? t : i);
        }
      },
      get: function get() {
        return F.pip ? this.media.webkitPresentationMode : null;
      }
    }], [{
      key: "supported",
      value: function value(e, t, i) {
        return F.check(e, t, i);
      }
    }, {
      key: "loadSprite",
      value: function value(e, t) {
        return te(e, t);
      }
    }, {
      key: "setup",
      value: function value(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = null;
        return l.string(t) ? n = Array.from(document.querySelectorAll(t)) : l.nodeList(t) ? n = Array.from(t) : l.array(t) && (n = t.filter(l.element)), l.empty(n) ? null : n.map(function (t) {
          return new e(t, i);
        });
      }
    }]), e;
  }();

  return _e.defaults = (Se = ue, JSON.parse(JSON.stringify(Se))), _e;
});

/***/ }),

/***/ "./resources/js/wNumb.js":
/*!*******************************!*\
  !*** ./resources/js/wNumb.js ***!
  \*******************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function () {
  'use strict';

  var FormatOptions = ['decimals', 'thousand', 'mark', 'prefix', 'suffix', 'encoder', 'decoder', 'negativeBefore', 'negative', 'edit', 'undo']; // General
  // Reverse a string

  function strReverse(a) {
    return a.split('').reverse().join('');
  } // Check if a string starts with a specified prefix.


  function strStartsWith(input, match) {
    return input.substring(0, match.length) === match;
  } // Check is a string ends in a specified suffix.


  function strEndsWith(input, match) {
    return input.slice(-1 * match.length) === match;
  } // Throw an error if formatting options are incompatible.


  function throwEqualError(F, a, b) {
    if ((F[a] || F[b]) && F[a] === F[b]) {
      throw new Error(a);
    }
  } // Check if a number is finite and not NaN


  function isValidNumber(input) {
    return typeof input === 'number' && isFinite(input);
  } // Provide rounding-accurate toFixed method.
  // Borrowed: http://stackoverflow.com/a/21323330/775265


  function toFixed(value, exp) {
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] + exp : exp)));
    value = value.toString().split('e');
    return (+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
  } // Formatting
  // Accept a number as input, output formatted string.


  function formatTo(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
    var originalInput = input,
        inputIsNegative,
        inputPieces,
        inputBase,
        inputDecimals = '',
        output = ''; // Apply user encoder to the input.
    // Expected outcome: number.

    if (encoder) {
      input = encoder(input);
    } // Stop if no valid number was provided, the number is infinite or NaN.


    if (!isValidNumber(input)) {
      return false;
    } // Rounding away decimals might cause a value of -0
    // when using very small ranges. Remove those cases.


    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
      input = 0;
    } // Formatting is done on absolute numbers,
    // decorated by an optional negative symbol.


    if (input < 0) {
      inputIsNegative = true;
      input = Math.abs(input);
    } // Reduce the number of decimals to the specified option.


    if (decimals !== false) {
      input = toFixed(input, decimals);
    } // Transform the number into a string, so it can be split.


    input = input.toString(); // Break the number on the decimal separator.

    if (input.indexOf('.') !== -1) {
      inputPieces = input.split('.');
      inputBase = inputPieces[0];

      if (mark) {
        inputDecimals = mark + inputPieces[1];
      }
    } else {
      // If it isn't split, the entire number will do.
      inputBase = input;
    } // Group numbers in sets of three.


    if (thousand) {
      inputBase = strReverse(inputBase).match(/.{1,3}/g);
      inputBase = strReverse(inputBase.join(strReverse(thousand)));
    } // If the number is negative, prefix with negation symbol.


    if (inputIsNegative && negativeBefore) {
      output += negativeBefore;
    } // Prefix the number


    if (prefix) {
      output += prefix;
    } // Normal negative option comes after the prefix. Defaults to '-'.


    if (inputIsNegative && negative) {
      output += negative;
    } // Append the actual number.


    output += inputBase;
    output += inputDecimals; // Apply the suffix.

    if (suffix) {
      output += suffix;
    } // Run the output through a user-specified post-formatter.


    if (edit) {
      output = edit(output, originalInput);
    } // All done.


    return output;
  } // Accept a sting as input, output decoded number.


  function formatFrom(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
    var originalInput = input,
        inputIsNegative,
        output = ''; // User defined pre-decoder. Result must be a non empty string.

    if (undo) {
      input = undo(input);
    } // Test the input. Can't be empty.


    if (!input || typeof input !== 'string') {
      return false;
    } // If the string starts with the negativeBefore value: remove it.
    // Remember is was there, the number is negative.


    if (negativeBefore && strStartsWith(input, negativeBefore)) {
      input = input.replace(negativeBefore, '');
      inputIsNegative = true;
    } // Repeat the same procedure for the prefix.


    if (prefix && strStartsWith(input, prefix)) {
      input = input.replace(prefix, '');
    } // And again for negative.


    if (negative && strStartsWith(input, negative)) {
      input = input.replace(negative, '');
      inputIsNegative = true;
    } // Remove the suffix.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


    if (suffix && strEndsWith(input, suffix)) {
      input = input.slice(0, -1 * suffix.length);
    } // Remove the thousand grouping.


    if (thousand) {
      input = input.split(thousand).join('');
    } // Set the decimal separator back to period.


    if (mark) {
      input = input.replace(mark, '.');
    } // Prepend the negative symbol.


    if (inputIsNegative) {
      output += '-';
    } // Add the number


    output += input; // Trim all non-numeric characters (allow '.' and '-');

    output = output.replace(/[^0-9\.\-.]/g, ''); // The value contains no parse-able number.

    if (output === '') {
      return false;
    } // Covert to number.


    output = Number(output); // Run the user-specified post-decoder.

    if (decoder) {
      output = decoder(output);
    } // Check is the output is valid, otherwise: return false.


    if (!isValidNumber(output)) {
      return false;
    }

    return output;
  } // Framework
  // Validate formatting options


  function validate(inputOptions) {
    var i,
        optionName,
        optionValue,
        filteredOptions = {};

    if (inputOptions['suffix'] === undefined) {
      inputOptions['suffix'] = inputOptions['postfix'];
    }

    for (i = 0; i < FormatOptions.length; i += 1) {
      optionName = FormatOptions[i];
      optionValue = inputOptions[optionName];

      if (optionValue === undefined) {
        // Only default if negativeBefore isn't set.
        if (optionName === 'negative' && !filteredOptions.negativeBefore) {
          filteredOptions[optionName] = '-'; // Don't set a default for mark when 'thousand' is set.
        } else if (optionName === 'mark' && filteredOptions.thousand !== '.') {
          filteredOptions[optionName] = '.';
        } else {
          filteredOptions[optionName] = false;
        } // Floating points in JS are stable up to 7 decimals.

      } else if (optionName === 'decimals') {
        if (optionValue >= 0 && optionValue < 8) {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        } // These options, when provided, must be functions.

      } else if (optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo') {
        if (typeof optionValue === 'function') {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        } // Other options are strings.

      } else {
        if (typeof optionValue === 'string') {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }
      }
    } // Some values can't be extracted from a
    // string if certain combinations are present.


    throwEqualError(filteredOptions, 'mark', 'thousand');
    throwEqualError(filteredOptions, 'prefix', 'negative');
    throwEqualError(filteredOptions, 'prefix', 'negativeBefore');
    return filteredOptions;
  } // Pass all options as function arguments


  function passAll(options, method, input) {
    var i,
        args = []; // Add all options in order of FormatOptions

    for (i = 0; i < FormatOptions.length; i += 1) {
      args.push(options[FormatOptions[i]]);
    } // Append the input, then call the method, presenting all
    // options as arguments.


    args.push(input);
    return method.apply('', args);
  }

  function wNumb(options) {
    if (!(this instanceof wNumb)) {
      return new wNumb(options);
    }

    if (_typeof(options) !== "object") {
      return;
    }

    options = validate(options); // Call 'formatTo' with proper arguments.

    this.to = function (input) {
      return passAll(options, formatTo, input);
    }; // Call 'formatFrom' with proper arguments.


    this.from = function (input) {
      return passAll(options, formatFrom, input);
    };
  }

  return wNumb;
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;