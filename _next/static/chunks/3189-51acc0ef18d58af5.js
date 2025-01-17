(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3189],
  {
    86736: function (e) {
      e.exports = (function () {
        "use strict";
        let e = new Map(),
          t = {
            set(t, i, n) {
              e.has(t) || e.set(t, new Map());
              let s = e.get(t);
              s.has(i) || 0 === s.size
                ? s.set(i, n)
                : console.error(
                    `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                      Array.from(s.keys())[0]
                    }.`
                  );
            },
            get: (t, i) => (e.has(t) && e.get(t).get(i)) || null,
            remove(t, i) {
              if (!e.has(t)) return;
              let n = e.get(t);
              n.delete(i), 0 === n.size && e.delete(t);
            },
          },
          i = "transitionend",
          n = (e) => (
            e &&
              window.CSS &&
              window.CSS.escape &&
              (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)),
            e
          ),
          s = (e) => {
            e.dispatchEvent(new Event(i));
          },
          r = (e) =>
            !(!e || "object" != typeof e) &&
            (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
          o = (e) =>
            r(e)
              ? e.jquery
                ? e[0]
                : e
              : "string" == typeof e && e.length > 0
              ? document.querySelector(n(e))
              : null,
          a = (e) => {
            if (!r(e) || 0 === e.getClientRects().length) return !1;
            let t =
                "visible" ===
                getComputedStyle(e).getPropertyValue("visibility"),
              i = e.closest("details:not([open])");
            if (!i) return t;
            if (i !== e) {
              let t = e.closest("summary");
              if ((t && t.parentNode !== i) || null === t) return !1;
            }
            return t;
          },
          l = (e) =>
            !e ||
            e.nodeType !== Node.ELEMENT_NODE ||
            !!e.classList.contains("disabled") ||
            (void 0 !== e.disabled
              ? e.disabled
              : e.hasAttribute("disabled") &&
                "false" !== e.getAttribute("disabled")),
          c = (e) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
              let t = e.getRootNode();
              return t instanceof ShadowRoot ? t : null;
            }
            return e instanceof ShadowRoot
              ? e
              : e.parentNode
              ? c(e.parentNode)
              : null;
          },
          h = () => {},
          d = (e) => {
            e.offsetHeight;
          },
          u = () =>
            window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
              ? window.jQuery
              : null,
          f = [],
          p = () => "rtl" === document.documentElement.dir,
          m = (e) => {
            var t;
            (t = () => {
              let t = u();
              if (t) {
                let i = e.NAME,
                  n = t.fn[i];
                (t.fn[i] = e.jQueryInterface),
                  (t.fn[i].Constructor = e),
                  (t.fn[i].noConflict = () => (
                    (t.fn[i] = n), e.jQueryInterface
                  ));
              }
            }),
              "loading" === document.readyState
                ? (f.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                      for (let e of f) e();
                    }),
                  f.push(t))
                : t();
          },
          g = (e, t = [], i = e) => ("function" == typeof e ? e(...t) : i),
          _ = (e, t, n = !0) => {
            if (!n) return void g(e);
            let r =
                ((e) => {
                  if (!e) return 0;
                  let { transitionDuration: t, transitionDelay: i } =
                      window.getComputedStyle(e),
                    n = Number.parseFloat(t),
                    s = Number.parseFloat(i);
                  return n || s
                    ? ((t = t.split(",")[0]),
                      (i = i.split(",")[0]),
                      1e3 * (Number.parseFloat(t) + Number.parseFloat(i)))
                    : 0;
                })(t) + 5,
              o = !1,
              a = ({ target: n }) => {
                n === t && ((o = !0), t.removeEventListener(i, a), g(e));
              };
            t.addEventListener(i, a),
              setTimeout(() => {
                o || s(t);
              }, r);
          },
          b = (e, t, i, n) => {
            let s = e.length,
              r = e.indexOf(t);
            return -1 === r
              ? !i && n
                ? e[s - 1]
                : e[0]
              : ((r += i ? 1 : -1),
                n && (r = (r + s) % s),
                e[Math.max(0, Math.min(r, s - 1))]);
          },
          v = /[^.]*(?=\..*)\.|.*/,
          y = /\..*/,
          w = /::\d+$/,
          E = {},
          A = 1,
          T = { mouseenter: "mouseover", mouseleave: "mouseout" },
          C = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
          ]);
        function O(e, t) {
          return (t && `${t}::${A++}`) || e.uidEvent || A++;
        }
        function x(e) {
          let t = O(e);
          return (e.uidEvent = t), (E[t] = E[t] || {}), E[t];
        }
        function k(e, t, i = null) {
          return Object.values(e).find(
            (e) => e.callable === t && e.delegationSelector === i
          );
        }
        function S(e, t, i) {
          let n = "string" == typeof t,
            s = I(e);
          return C.has(s) || (s = e), [n, n ? i : t || i, s];
        }
        function L(e, t, i, n, s) {
          var r, o, a;
          if ("string" != typeof t || !e) return;
          let [l, c, h] = S(t, i, n);
          t in T &&
            ((r = c),
            (c = function (e) {
              if (
                !e.relatedTarget ||
                (e.relatedTarget !== e.delegateTarget &&
                  !e.delegateTarget.contains(e.relatedTarget))
              )
                return r.call(this, e);
            }));
          let d = x(e),
            u = d[h] || (d[h] = {}),
            f = k(u, c, l ? i : null);
          if (f) return void (f.oneOff = f.oneOff && s);
          let p = O(c, t.replace(v, "")),
            m = l
              ? ((o = c),
                function t(n) {
                  let s = e.querySelectorAll(i);
                  for (let { target: r } = n; r && r !== this; r = r.parentNode)
                    for (let a of s)
                      if (a === r)
                        return (
                          P(n, { delegateTarget: r }),
                          t.oneOff && N.off(e, n.type, i, o),
                          o.apply(r, [n])
                        );
                })
              : ((a = c),
                function t(i) {
                  return (
                    P(i, { delegateTarget: e }),
                    t.oneOff && N.off(e, i.type, a),
                    a.apply(e, [i])
                  );
                });
          (m.delegationSelector = l ? i : null),
            (m.callable = c),
            (m.oneOff = s),
            (m.uidEvent = p),
            (u[p] = m),
            e.addEventListener(h, m, l);
        }
        function D(e, t, i, n, s) {
          let r = k(t[i], n, s);
          r && (e.removeEventListener(i, r, !!s), delete t[i][r.uidEvent]);
        }
        function I(e) {
          return T[(e = e.replace(y, ""))] || e;
        }
        let N = {
          on(e, t, i, n) {
            L(e, t, i, n, !1);
          },
          one(e, t, i, n) {
            L(e, t, i, n, !0);
          },
          off(e, t, i, n) {
            if ("string" != typeof t || !e) return;
            let [s, r, o] = S(t, i, n),
              a = o !== t,
              l = x(e),
              c = l[o] || {},
              h = t.startsWith(".");
            if (void 0 === r) {
              if (h)
                for (let i of Object.keys(l))
                  !(function (e, t, i, n) {
                    let s = t[i] || {};
                    for (let [r, o] of Object.entries(s))
                      r.includes(n) &&
                        D(e, t, i, o.callable, o.delegationSelector);
                  })(e, l, i, t.slice(1));
              for (let [i, n] of Object.entries(c)) {
                let s = i.replace(w, "");
                (a && !t.includes(s)) ||
                  D(e, l, o, n.callable, n.delegationSelector);
              }
            } else {
              if (!Object.keys(c).length) return;
              D(e, l, o, r, s ? i : null);
            }
          },
          trigger(e, t, i) {
            if ("string" != typeof t || !e) return null;
            let n = u(),
              s = null,
              r = !0,
              o = !0,
              a = !1;
            t !== I(t) &&
              n &&
              ((s = n.Event(t, i)),
              n(e).trigger(s),
              (r = !s.isPropagationStopped()),
              (o = !s.isImmediatePropagationStopped()),
              (a = s.isDefaultPrevented()));
            let l = P(new Event(t, { bubbles: r, cancelable: !0 }), i);
            return (
              a && l.preventDefault(),
              o && e.dispatchEvent(l),
              l.defaultPrevented && s && s.preventDefault(),
              l
            );
          },
        };
        function P(e, t = {}) {
          for (let [i, n] of Object.entries(t))
            try {
              e[i] = n;
            } catch (t) {
              Object.defineProperty(e, i, { configurable: !0, get: () => n });
            }
          return e;
        }
        function M(e) {
          if ("true" === e) return !0;
          if ("false" === e) return !1;
          if (e === Number(e).toString()) return Number(e);
          if ("" === e || "null" === e) return null;
          if ("string" != typeof e) return e;
          try {
            return JSON.parse(decodeURIComponent(e));
          } catch (t) {
            return e;
          }
        }
        function j(e) {
          return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
        }
        let $ = {
          setDataAttribute(e, t, i) {
            e.setAttribute(`data-bs-${j(t)}`, i);
          },
          removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${j(t)}`);
          },
          getDataAttributes(e) {
            if (!e) return {};
            let t = {},
              i = Object.keys(e.dataset).filter(
                (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
              );
            for (let n of i) {
              let i = n.replace(/^bs/, "");
              t[(i = i.charAt(0).toLowerCase() + i.slice(1, i.length))] = M(
                e.dataset[n]
              );
            }
            return t;
          },
          getDataAttribute: (e, t) => M(e.getAttribute(`data-bs-${j(t)}`)),
        };
        class F {
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw Error(
              'You have to implement the static method "NAME", for each component!'
            );
          }
          _getConfig(e) {
            return (
              (e = this._mergeConfigObj(e)),
              (e = this._configAfterMerge(e)),
              this._typeCheckConfig(e),
              e
            );
          }
          _configAfterMerge(e) {
            return e;
          }
          _mergeConfigObj(e, t) {
            let i = r(t) ? $.getDataAttribute(t, "config") : {};
            return {
              ...this.constructor.Default,
              ...("object" == typeof i ? i : {}),
              ...(r(t) ? $.getDataAttributes(t) : {}),
              ...("object" == typeof e ? e : {}),
            };
          }
          _typeCheckConfig(e, t = this.constructor.DefaultType) {
            for (let [i, n] of Object.entries(t)) {
              let t = e[i],
                s = r(t)
                  ? "element"
                  : null == t
                  ? `${t}`
                  : Object.prototype.toString
                      .call(t)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
              if (!new RegExp(n).test(s))
                throw TypeError(
                  `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${n}".`
                );
            }
          }
        }
        class H extends F {
          constructor(e, i) {
            super(),
              (e = o(e)) &&
                ((this._element = e),
                (this._config = this._getConfig(i)),
                t.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            for (let e of (t.remove(this._element, this.constructor.DATA_KEY),
            N.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this)))
              this[e] = null;
          }
          _queueCallback(e, t, i = !0) {
            _(e, t, i);
          }
          _getConfig(e) {
            return (
              (e = this._mergeConfigObj(e, this._element)),
              (e = this._configAfterMerge(e)),
              this._typeCheckConfig(e),
              e
            );
          }
          static getInstance(e) {
            return t.get(o(e), this.DATA_KEY);
          }
          static getOrCreateInstance(e, t = {}) {
            return (
              this.getInstance(e) ||
              new this(e, "object" == typeof t ? t : null)
            );
          }
          static get VERSION() {
            return "5.3.0-alpha2";
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(e) {
            return `${e}${this.EVENT_KEY}`;
          }
        }
        let W = (e) => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
              let i = e.getAttribute("href");
              if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
              i.includes("#") &&
                !i.startsWith("#") &&
                (i = `#${i.split("#")[1]}`),
                (t = i && "#" !== i ? i.trim() : null);
            }
            return n(t);
          },
          z = {
            find: (e, t = document.documentElement) =>
              [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) =>
              Element.prototype.querySelector.call(t, e),
            children: (e, t) =>
              [].concat(...e.children).filter((e) => e.matches(t)),
            parents(e, t) {
              let i = [],
                n = e.parentNode.closest(t);
              for (; n; ) i.push(n), (n = n.parentNode.closest(t));
              return i;
            },
            prev(e, t) {
              let i = e.previousElementSibling;
              for (; i; ) {
                if (i.matches(t)) return [i];
                i = i.previousElementSibling;
              }
              return [];
            },
            next(e, t) {
              let i = e.nextElementSibling;
              for (; i; ) {
                if (i.matches(t)) return [i];
                i = i.nextElementSibling;
              }
              return [];
            },
            focusableChildren(e) {
              let t = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]',
              ]
                .map((e) => `${e}:not([tabindex^="-"])`)
                .join(",");
              return this.find(t, e).filter((e) => !l(e) && a(e));
            },
            getSelectorFromElement(e) {
              let t = W(e);
              return t && z.findOne(t) ? t : null;
            },
            getElementFromSelector(e) {
              let t = W(e);
              return t ? z.findOne(t) : null;
            },
            getMultipleElementsFromSelector(e) {
              let t = W(e);
              return t ? z.find(t) : [];
            },
          },
          B = (e, t = "hide") => {
            let i = `click.dismiss${e.EVENT_KEY}`,
              n = e.NAME;
            N.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
              if (
                (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
                l(this))
              )
                return;
              let s = z.getElementFromSelector(this) || this.closest(`.${n}`);
              e.getOrCreateInstance(s)[t]();
            });
          };
        class R extends H {
          static get NAME() {
            return "alert";
          }
          close() {
            if (N.trigger(this._element, "close.bs.alert").defaultPrevented)
              return;
            this._element.classList.remove("show");
            let e = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, e);
          }
          _destroyElement() {
            this._element.remove(),
              N.trigger(this._element, "closed.bs.alert"),
              this.dispose();
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = R.getOrCreateInstance(this);
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                  throw TypeError(`No method named "${e}"`);
                t[e](this);
              }
            });
          }
        }
        B(R, "close"), m(R);
        let q = '[data-bs-toggle="button"]';
        class V extends H {
          static get NAME() {
            return "button";
          }
          toggle() {
            this._element.setAttribute(
              "aria-pressed",
              this._element.classList.toggle("active")
            );
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = V.getOrCreateInstance(this);
              "toggle" === e && t[e]();
            });
          }
        }
        N.on(document, "click.bs.button.data-api", q, (e) => {
          e.preventDefault();
          let t = e.target.closest(q);
          V.getOrCreateInstance(t).toggle();
        }),
          m(V);
        let K = { endCallback: null, leftCallback: null, rightCallback: null },
          Q = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)",
          };
        class X extends F {
          constructor(e, t) {
            super(),
              (this._element = e),
              e &&
                X.isSupported() &&
                ((this._config = this._getConfig(t)),
                (this._deltaX = 0),
                (this._supportPointerEvents = !!window.PointerEvent),
                this._initEvents());
          }
          static get Default() {
            return K;
          }
          static get DefaultType() {
            return Q;
          }
          static get NAME() {
            return "swipe";
          }
          dispose() {
            N.off(this._element, ".bs.swipe");
          }
          _start(e) {
            this._supportPointerEvents
              ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
              : (this._deltaX = e.touches[0].clientX);
          }
          _end(e) {
            this._eventIsPointerPenTouch(e) &&
              (this._deltaX = e.clientX - this._deltaX),
              this._handleSwipe(),
              g(this._config.endCallback);
          }
          _move(e) {
            this._deltaX =
              e.touches && e.touches.length > 1
                ? 0
                : e.touches[0].clientX - this._deltaX;
          }
          _handleSwipe() {
            let e = Math.abs(this._deltaX);
            if (e <= 40) return;
            let t = e / this._deltaX;
            (this._deltaX = 0),
              t &&
                g(
                  t > 0 ? this._config.rightCallback : this._config.leftCallback
                );
          }
          _initEvents() {
            this._supportPointerEvents
              ? (N.on(this._element, "pointerdown.bs.swipe", (e) =>
                  this._start(e)
                ),
                N.on(this._element, "pointerup.bs.swipe", (e) => this._end(e)),
                this._element.classList.add("pointer-event"))
              : (N.on(this._element, "touchstart.bs.swipe", (e) =>
                  this._start(e)
                ),
                N.on(this._element, "touchmove.bs.swipe", (e) => this._move(e)),
                N.on(this._element, "touchend.bs.swipe", (e) => this._end(e)));
          }
          _eventIsPointerPenTouch(e) {
            return (
              this._supportPointerEvents &&
              ("pen" === e.pointerType || "touch" === e.pointerType)
            );
          }
          static isSupported() {
            return (
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0
            );
          }
        }
        let Y = "next",
          U = "prev",
          J = "left",
          G = "right",
          Z = "slid.bs.carousel",
          ee = "carousel",
          et = "active",
          ei = { ArrowLeft: G, ArrowRight: J },
          en = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0,
          },
          es = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean",
          };
        class er extends H {
          constructor(e, t) {
            super(e, t),
              (this._interval = null),
              (this._activeElement = null),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this._swipeHelper = null),
              (this._indicatorsElement = z.findOne(
                ".carousel-indicators",
                this._element
              )),
              this._addEventListeners(),
              this._config.ride === ee && this.cycle();
          }
          static get Default() {
            return en;
          }
          static get DefaultType() {
            return es;
          }
          static get NAME() {
            return "carousel";
          }
          next() {
            this._slide(Y);
          }
          nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
          }
          prev() {
            this._slide(U);
          }
          pause() {
            this._isSliding && s(this._element), this._clearInterval();
          }
          cycle() {
            this._clearInterval(),
              this._updateInterval(),
              (this._interval = setInterval(
                () => this.nextWhenVisible(),
                this._config.interval
              ));
          }
          _maybeEnableCycle() {
            this._config.ride &&
              (this._isSliding
                ? N.one(this._element, Z, () => this.cycle())
                : this.cycle());
          }
          to(e) {
            let t = this._getItems();
            if (e > t.length - 1 || e < 0) return;
            if (this._isSliding)
              return void N.one(this._element, Z, () => this.to(e));
            let i = this._getItemIndex(this._getActive());
            i !== e && this._slide(e > i ? Y : U, t[e]);
          }
          dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
          }
          _configAfterMerge(e) {
            return (e.defaultInterval = e.interval), e;
          }
          _addEventListeners() {
            this._config.keyboard &&
              N.on(this._element, "keydown.bs.carousel", (e) =>
                this._keydown(e)
              ),
              "hover" === this._config.pause &&
                (N.on(this._element, "mouseenter.bs.carousel", () =>
                  this.pause()
                ),
                N.on(this._element, "mouseleave.bs.carousel", () =>
                  this._maybeEnableCycle()
                )),
              this._config.touch &&
                X.isSupported() &&
                this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            for (let e of z.find(".carousel-item img", this._element))
              N.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
            this._swipeHelper = new X(this._element, {
              leftCallback: () => this._slide(this._directionToOrder(J)),
              rightCallback: () => this._slide(this._directionToOrder(G)),
              endCallback: () => {
                "hover" === this._config.pause &&
                  (this.pause(),
                  this.touchTimeout && clearTimeout(this.touchTimeout),
                  (this.touchTimeout = setTimeout(
                    () => this._maybeEnableCycle(),
                    500 + this._config.interval
                  )));
              },
            });
          }
          _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            let t = ei[e.key];
            t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
          }
          _getItemIndex(e) {
            return this._getItems().indexOf(e);
          }
          _setActiveIndicatorElement(e) {
            if (!this._indicatorsElement) return;
            let t = z.findOne(".active", this._indicatorsElement);
            t.classList.remove(et), t.removeAttribute("aria-current");
            let i = z.findOne(
              `[data-bs-slide-to="${e}"]`,
              this._indicatorsElement
            );
            i && (i.classList.add(et), i.setAttribute("aria-current", "true"));
          }
          _updateInterval() {
            let e = this._activeElement || this._getActive();
            if (!e) return;
            let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            this._config.interval = t || this._config.defaultInterval;
          }
          _slide(e, t = null) {
            if (this._isSliding) return;
            let i = this._getActive(),
              n = e === Y,
              s = t || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            let r = this._getItemIndex(s),
              o = (t) =>
                N.trigger(this._element, t, {
                  relatedTarget: s,
                  direction: this._orderToDirection(e),
                  from: this._getItemIndex(i),
                  to: r,
                });
            if (o("slide.bs.carousel").defaultPrevented || !i || !s) return;
            let a = !!this._interval;
            this.pause(),
              (this._isSliding = !0),
              this._setActiveIndicatorElement(r),
              (this._activeElement = s);
            let l = n ? "carousel-item-start" : "carousel-item-end",
              c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c),
              d(s),
              i.classList.add(l),
              s.classList.add(l),
              this._queueCallback(
                () => {
                  s.classList.remove(l, c),
                    s.classList.add(et),
                    i.classList.remove(et, c, l),
                    (this._isSliding = !1),
                    o(Z);
                },
                i,
                this._isAnimated()
              ),
              a && this.cycle();
          }
          _isAnimated() {
            return this._element.classList.contains("slide");
          }
          _getActive() {
            return z.findOne(".active.carousel-item", this._element);
          }
          _getItems() {
            return z.find(".carousel-item", this._element);
          }
          _clearInterval() {
            this._interval &&
              (clearInterval(this._interval), (this._interval = null));
          }
          _directionToOrder(e) {
            return p() ? (e === J ? U : Y) : e === J ? Y : U;
          }
          _orderToDirection(e) {
            return p() ? (e === U ? J : G) : e === U ? G : J;
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = er.getOrCreateInstance(this, e);
              if ("number" != typeof e) {
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw TypeError(`No method named "${e}"`);
                  t[e]();
                }
              } else t.to(e);
            });
          }
        }
        N.on(
          document,
          "click.bs.carousel.data-api",
          "[data-bs-slide], [data-bs-slide-to]",
          function (e) {
            let t = z.getElementFromSelector(this);
            if (!t || !t.classList.contains(ee)) return;
            e.preventDefault();
            let i = er.getOrCreateInstance(t),
              n = this.getAttribute("data-bs-slide-to");
            return n
              ? (i.to(n), void i._maybeEnableCycle())
              : "next" === $.getDataAttribute(this, "slide")
              ? (i.next(), void i._maybeEnableCycle())
              : (i.prev(), void i._maybeEnableCycle());
          }
        ),
          N.on(window, "load.bs.carousel.data-api", () => {
            let e = z.find('[data-bs-ride="carousel"]');
            for (let t of e) er.getOrCreateInstance(t);
          }),
          m(er);
        let eo = "show",
          ea = "collapse",
          el = "collapsing",
          ec = '[data-bs-toggle="collapse"]',
          eh = { parent: null, toggle: !0 },
          ed = { parent: "(null|element)", toggle: "boolean" };
        class eu extends H {
          constructor(e, t) {
            super(e, t),
              (this._isTransitioning = !1),
              (this._triggerArray = []);
            let i = z.find(ec);
            for (let e of i) {
              let t = z.getSelectorFromElement(e),
                i = z.find(t).filter((e) => e === this._element);
              null !== t && i.length && this._triggerArray.push(e);
            }
            this._initializeChildren(),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._triggerArray,
                  this._isShown()
                ),
              this._config.toggle && this.toggle();
          }
          static get Default() {
            return eh;
          }
          static get DefaultType() {
            return ed;
          }
          static get NAME() {
            return "collapse";
          }
          toggle() {
            this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._isShown()) return;
            let e = [];
            if (
              (this._config.parent &&
                (e = this._getFirstLevelChildren(
                  ".collapse.show, .collapse.collapsing"
                )
                  .filter((e) => e !== this._element)
                  .map((e) => eu.getOrCreateInstance(e, { toggle: !1 }))),
              (e.length && e[0]._isTransitioning) ||
                N.trigger(this._element, "show.bs.collapse").defaultPrevented)
            )
              return;
            for (let t of e) t.hide();
            let t = this._getDimension();
            this._element.classList.remove(ea),
              this._element.classList.add(el),
              (this._element.style[t] = 0),
              this._addAriaAndCollapsedClass(this._triggerArray, !0),
              (this._isTransitioning = !0);
            let i = `scroll${t[0].toUpperCase() + t.slice(1)}`;
            this._queueCallback(
              () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(el),
                  this._element.classList.add(ea, eo),
                  (this._element.style[t] = ""),
                  N.trigger(this._element, "shown.bs.collapse");
              },
              this._element,
              !0
            ),
              (this._element.style[t] = `${this._element[i]}px`);
          }
          hide() {
            if (
              this._isTransitioning ||
              !this._isShown() ||
              N.trigger(this._element, "hide.bs.collapse").defaultPrevented
            )
              return;
            let e = this._getDimension();
            for (let t of ((this._element.style[e] = `${
              this._element.getBoundingClientRect()[e]
            }px`),
            d(this._element),
            this._element.classList.add(el),
            this._element.classList.remove(ea, eo),
            this._triggerArray)) {
              let e = z.getElementFromSelector(t);
              e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
            }
            (this._isTransitioning = !0),
              (this._element.style[e] = ""),
              this._queueCallback(
                () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(el),
                    this._element.classList.add(ea),
                    N.trigger(this._element, "hidden.bs.collapse");
                },
                this._element,
                !0
              );
          }
          _isShown(e = this._element) {
            return e.classList.contains(eo);
          }
          _configAfterMerge(e) {
            return (e.toggle = !!e.toggle), (e.parent = o(e.parent)), e;
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal")
              ? "width"
              : "height";
          }
          _initializeChildren() {
            if (!this._config.parent) return;
            let e = this._getFirstLevelChildren(ec);
            for (let t of e) {
              let e = z.getElementFromSelector(t);
              e && this._addAriaAndCollapsedClass([t], this._isShown(e));
            }
          }
          _getFirstLevelChildren(e) {
            let t = z.find(":scope .collapse .collapse", this._config.parent);
            return z.find(e, this._config.parent).filter((e) => !t.includes(e));
          }
          _addAriaAndCollapsedClass(e, t) {
            if (e.length)
              for (let i of e)
                i.classList.toggle("collapsed", !t),
                  i.setAttribute("aria-expanded", t);
          }
          static jQueryInterface(e) {
            let t = {};
            return (
              "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
              this.each(function () {
                let i = eu.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                  if (void 0 === i[e])
                    throw TypeError(`No method named "${e}"`);
                  i[e]();
                }
              })
            );
          }
        }
        N.on(document, "click.bs.collapse.data-api", ec, function (e) {
          for (let t of (("A" === e.target.tagName ||
            (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
            e.preventDefault(),
          z.getMultipleElementsFromSelector(this)))
            eu.getOrCreateInstance(t, { toggle: !1 }).toggle();
        }),
          m(eu);
        var ef = "bottom",
          ep = "right",
          em = "left",
          eg = "auto",
          e_ = ["top", ef, ep, em],
          eb = "start",
          ev = "clippingParents",
          ey = "viewport",
          ew = "popper",
          eE = "reference",
          eA = e_.reduce(function (e, t) {
            return e.concat([t + "-" + eb, t + "-end"]);
          }, []),
          eT = [].concat(e_, [eg]).reduce(function (e, t) {
            return e.concat([t, t + "-" + eb, t + "-end"]);
          }, []),
          eC = "beforeRead",
          eO = "read",
          ex = "afterRead",
          ek = "beforeMain",
          eS = "main",
          eL = "afterMain",
          eD = "beforeWrite",
          eI = "write",
          eN = "afterWrite",
          eP = [eC, eO, ex, ek, eS, eL, eD, eI, eN];
        function eM(e) {
          return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function ej(e) {
          if (null == e) return window;
          if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return (t && t.defaultView) || window;
          }
          return e;
        }
        function e$(e) {
          return e instanceof ej(e).Element || e instanceof Element;
        }
        function eF(e) {
          return e instanceof ej(e).HTMLElement || e instanceof HTMLElement;
        }
        function eH(e) {
          return (
            "undefined" != typeof ShadowRoot &&
            (e instanceof ej(e).ShadowRoot || e instanceof ShadowRoot)
          );
        }
        let eW = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function (e) {
              var i = t.styles[e] || {},
                n = t.attributes[e] || {},
                s = t.elements[e];
              eF(s) &&
                eM(s) &&
                (Object.assign(s.style, i),
                Object.keys(n).forEach(function (e) {
                  var t = n[e];
                  !1 === t
                    ? s.removeAttribute(e)
                    : s.setAttribute(e, !0 === t ? "" : t);
                }));
            });
          },
          effect: function (e) {
            var t = e.state,
              i = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            return (
              Object.assign(t.elements.popper.style, i.popper),
              (t.styles = i),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, i.arrow),
              function () {
                Object.keys(t.elements).forEach(function (e) {
                  var n = t.elements[e],
                    s = t.attributes[e] || {},
                    r = Object.keys(
                      t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]
                    ).reduce(function (e, t) {
                      return (e[t] = ""), e;
                    }, {});
                  eF(n) &&
                    eM(n) &&
                    (Object.assign(n.style, r),
                    Object.keys(s).forEach(function (e) {
                      n.removeAttribute(e);
                    }));
                });
              }
            );
          },
          requires: ["computeStyles"],
        };
        function ez(e) {
          return e.split("-")[0];
        }
        var eB = Math.max,
          eR = Math.min,
          eq = Math.round;
        function eV() {
          var e = navigator.userAgentData;
          return null != e && e.brands && Array.isArray(e.brands)
            ? e.brands
                .map(function (e) {
                  return e.brand + "/" + e.version;
                })
                .join(" ")
            : navigator.userAgent;
        }
        function eK() {
          return !/^((?!chrome|android).)*safari/i.test(eV());
        }
        function eQ(e, t, i) {
          void 0 === t && (t = !1), void 0 === i && (i = !1);
          var n = e.getBoundingClientRect(),
            s = 1,
            r = 1;
          t &&
            eF(e) &&
            ((s = (e.offsetWidth > 0 && eq(n.width) / e.offsetWidth) || 1),
            (r = (e.offsetHeight > 0 && eq(n.height) / e.offsetHeight) || 1));
          var o = (e$(e) ? ej(e) : window).visualViewport,
            a = !eK() && i,
            l = (n.left + (a && o ? o.offsetLeft : 0)) / s,
            c = (n.top + (a && o ? o.offsetTop : 0)) / r,
            h = n.width / s,
            d = n.height / r;
          return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c,
          };
        }
        function eX(e) {
          var t = eQ(e),
            i = e.offsetWidth,
            n = e.offsetHeight;
          return (
            1 >= Math.abs(t.width - i) && (i = t.width),
            1 >= Math.abs(t.height - n) && (n = t.height),
            { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
          );
        }
        function eY(e, t) {
          var i = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;
          if (i && eH(i)) {
            var n = t;
            do {
              if (n && e.isSameNode(n)) return !0;
              n = n.parentNode || n.host;
            } while (n);
          }
          return !1;
        }
        function eU(e) {
          return ej(e).getComputedStyle(e);
        }
        function eJ(e) {
          return ((e$(e) ? e.ownerDocument : e.document) || window.document)
            .documentElement;
        }
        function eG(e) {
          return "html" === eM(e)
            ? e
            : e.assignedSlot ||
                e.parentNode ||
                (eH(e) ? e.host : null) ||
                eJ(e);
        }
        function eZ(e) {
          return eF(e) && "fixed" !== eU(e).position ? e.offsetParent : null;
        }
        function e0(e) {
          for (
            var t = ej(e), i = eZ(e);
            i &&
            ["table", "td", "th"].indexOf(eM(i)) >= 0 &&
            "static" === eU(i).position;

          )
            i = eZ(i);
          return i &&
            ("html" === eM(i) ||
              ("body" === eM(i) && "static" === eU(i).position))
            ? t
            : i ||
                (function (e) {
                  var t = /firefox/i.test(eV());
                  if (
                    /Trident/i.test(eV()) &&
                    eF(e) &&
                    "fixed" === eU(e).position
                  )
                    return null;
                  var i = eG(e);
                  for (
                    eH(i) && (i = i.host);
                    eF(i) && 0 > ["html", "body"].indexOf(eM(i));

                  ) {
                    var n = eU(i);
                    if (
                      "none" !== n.transform ||
                      "none" !== n.perspective ||
                      "paint" === n.contain ||
                      -1 !==
                        ["transform", "perspective"].indexOf(n.willChange) ||
                      (t && "filter" === n.willChange) ||
                      (t && n.filter && "none" !== n.filter)
                    )
                      return i;
                    i = i.parentNode;
                  }
                  return null;
                })(e) ||
                t;
        }
        function e1(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }
        function e2(e, t, i) {
          return eB(e, eR(t, i));
        }
        function e3(e) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
        }
        function e6(e, t) {
          return t.reduce(function (t, i) {
            return (t[i] = e), t;
          }, {});
        }
        let e5 = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t,
              i = e.state,
              n = e.name,
              s = e.options,
              r = i.elements.arrow,
              o = i.modifiersData.popperOffsets,
              a = ez(i.placement),
              l = e1(a),
              c = [em, ep].indexOf(a) >= 0 ? "height" : "width";
            if (r && o) {
              var h,
                d = e3(
                  "number" !=
                    typeof (h =
                      "function" == typeof (h = s.padding)
                        ? h(
                            Object.assign({}, i.rects, {
                              placement: i.placement,
                            })
                          )
                        : h)
                    ? h
                    : e6(h, e_)
                ),
                u = eX(r),
                f =
                  i.rects.reference[c] +
                  i.rects.reference[l] -
                  o[l] -
                  i.rects.popper[c],
                p = o[l] - i.rects.reference[l],
                m = e0(r),
                g = m
                  ? "y" === l
                    ? m.clientHeight || 0
                    : m.clientWidth || 0
                  : 0,
                _ = d["y" === l ? "top" : em],
                b = g - u[c] - d["y" === l ? ef : ep],
                v = g / 2 - u[c] / 2 + (f / 2 - p / 2),
                y = e2(_, v, b);
              i.modifiersData[n] =
                (((t = {})[l] = y), (t.centerOffset = y - v), t);
            }
          },
          effect: function (e) {
            var t = e.state,
              i = e.options.element,
              n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n &&
              ("string" != typeof n ||
                (n = t.elements.popper.querySelector(n))) &&
              eY(t.elements.popper, n) &&
              (t.elements.arrow = n);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        };
        function e4(e) {
          return e.split("-")[1];
        }
        var e8 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function e7(e) {
          var t,
            i = e.popper,
            n = e.popperRect,
            s = e.placement,
            r = e.variation,
            o = e.offsets,
            a = e.position,
            l = e.gpuAcceleration,
            c = e.adaptive,
            h = e.roundOffsets,
            d = e.isFixed,
            u = o.x,
            f = void 0 === u ? 0 : u,
            p = o.y,
            m = void 0 === p ? 0 : p,
            g = "function" == typeof h ? h({ x: f, y: m }) : { x: f, y: m };
          (f = g.x), (m = g.y);
          var _ = o.hasOwnProperty("x"),
            b = o.hasOwnProperty("y"),
            v = em,
            y = "top",
            w = window;
          if (c) {
            var E = e0(i),
              A = "clientHeight",
              T = "clientWidth";
            E === ej(i) &&
              "static" !== eU((E = eJ(i))).position &&
              "absolute" === a &&
              ((A = "scrollHeight"), (T = "scrollWidth")),
              ("top" === s || ((s === em || s === ep) && "end" === r)) &&
                ((y = ef),
                (m -=
                  (d && E === w && w.visualViewport
                    ? w.visualViewport.height
                    : E[A]) - n.height),
                (m *= l ? 1 : -1)),
              (s !== em && (("top" !== s && s !== ef) || "end" !== r)) ||
                ((v = ep),
                (f -=
                  (d && E === w && w.visualViewport
                    ? w.visualViewport.width
                    : E[T]) - n.width),
                (f *= l ? 1 : -1));
          }
          var C,
            O,
            x,
            k,
            S,
            L,
            D = Object.assign({ position: a }, c && e8),
            I =
              !0 === h
                ? ((C = { x: f, y: m }),
                  (O = ej(i)),
                  (x = C.x),
                  (k = C.y),
                  {
                    x: eq(x * (S = O.devicePixelRatio || 1)) / S || 0,
                    y: eq(k * S) / S || 0,
                  })
                : { x: f, y: m };
          return (
            (f = I.x),
            (m = I.y),
            l
              ? Object.assign(
                  {},
                  D,
                  (((L = {})[y] = b ? "0" : ""),
                  (L[v] = _ ? "0" : ""),
                  (L.transform =
                    1 >= (w.devicePixelRatio || 1)
                      ? "translate(" + f + "px, " + m + "px)"
                      : "translate3d(" + f + "px, " + m + "px, 0)"),
                  L)
                )
              : Object.assign(
                  {},
                  D,
                  (((t = {})[y] = b ? m + "px" : ""),
                  (t[v] = _ ? f + "px" : ""),
                  (t.transform = ""),
                  t)
                )
          );
        }
        let e9 = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              i = e.options,
              n = i.gpuAcceleration,
              s = i.adaptive,
              r = i.roundOffsets,
              o = void 0 === r || r,
              a = {
                placement: ez(t.placement),
                variation: e4(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: void 0 === n || n,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                e7(
                  Object.assign({}, a, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: void 0 === s || s,
                    roundOffsets: o,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  e7(
                    Object.assign({}, a, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: o,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        };
        var te = { passive: !0 };
        let tt = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              i = e.instance,
              n = e.options,
              s = n.scroll,
              r = void 0 === s || s,
              o = n.resize,
              a = void 0 === o || o,
              l = ej(t.elements.popper),
              c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              r &&
                c.forEach(function (e) {
                  e.addEventListener("scroll", i.update, te);
                }),
              a && l.addEventListener("resize", i.update, te),
              function () {
                r &&
                  c.forEach(function (e) {
                    e.removeEventListener("scroll", i.update, te);
                  }),
                  a && l.removeEventListener("resize", i.update, te);
              }
            );
          },
          data: {},
        };
        var ti = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function tn(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return ti[e];
          });
        }
        var ts = { start: "end", end: "start" };
        function tr(e) {
          return e.replace(/start|end/g, function (e) {
            return ts[e];
          });
        }
        function to(e) {
          var t = ej(e);
          return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
        }
        function ta(e) {
          return eQ(eJ(e)).left + to(e).scrollLeft;
        }
        function tl(e) {
          var t = eU(e),
            i = t.overflow,
            n = t.overflowX,
            s = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(i + s + n);
        }
        function tc(e, t) {
          void 0 === t && (t = []);
          var i,
            n = (function e(t) {
              return ["html", "body", "#document"].indexOf(eM(t)) >= 0
                ? t.ownerDocument.body
                : eF(t) && tl(t)
                ? t
                : e(eG(t));
            })(e),
            s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
            r = ej(n),
            o = s ? [r].concat(r.visualViewport || [], tl(n) ? n : []) : n,
            a = t.concat(o);
          return s ? a : a.concat(tc(eG(o)));
        }
        function th(e) {
          return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
          });
        }
        function td(e, t, i) {
          var n, s, r, o, a, l, c, h, d, u;
          return t === ey
            ? th(
                (function (e, t) {
                  var i = ej(e),
                    n = eJ(e),
                    s = i.visualViewport,
                    r = n.clientWidth,
                    o = n.clientHeight,
                    a = 0,
                    l = 0;
                  if (s) {
                    (r = s.width), (o = s.height);
                    var c = eK();
                    (c || (!c && "fixed" === t)) &&
                      ((a = s.offsetLeft), (l = s.offsetTop));
                  }
                  return { width: r, height: o, x: a + ta(e), y: l };
                })(e, i)
              )
            : e$(t)
            ? (((n = eQ(t, !1, "fixed" === i)).top = n.top + t.clientTop),
              (n.left = n.left + t.clientLeft),
              (n.bottom = n.top + t.clientHeight),
              (n.right = n.left + t.clientWidth),
              (n.width = t.clientWidth),
              (n.height = t.clientHeight),
              (n.x = n.left),
              (n.y = n.top),
              n)
            : th(
                ((s = eJ(e)),
                (o = eJ(s)),
                (a = to(s)),
                (l = null == (r = s.ownerDocument) ? void 0 : r.body),
                (c = eB(
                  o.scrollWidth,
                  o.clientWidth,
                  l ? l.scrollWidth : 0,
                  l ? l.clientWidth : 0
                )),
                (h = eB(
                  o.scrollHeight,
                  o.clientHeight,
                  l ? l.scrollHeight : 0,
                  l ? l.clientHeight : 0
                )),
                (d = -a.scrollLeft + ta(s)),
                (u = -a.scrollTop),
                "rtl" === eU(l || o).direction &&
                  (d += eB(o.clientWidth, l ? l.clientWidth : 0) - c),
                { width: c, height: h, x: d, y: u })
              );
        }
        function tu(e) {
          var t,
            i = e.reference,
            n = e.element,
            s = e.placement,
            r = s ? ez(s) : null,
            o = s ? e4(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
          switch (r) {
            case "top":
              t = { x: a, y: i.y - n.height };
              break;
            case ef:
              t = { x: a, y: i.y + i.height };
              break;
            case ep:
              t = { x: i.x + i.width, y: l };
              break;
            case em:
              t = { x: i.x - n.width, y: l };
              break;
            default:
              t = { x: i.x, y: i.y };
          }
          var c = r ? e1(r) : null;
          if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (o) {
              case eb:
                t[c] = t[c] - (i[h] / 2 - n[h] / 2);
                break;
              case "end":
                t[c] = t[c] + (i[h] / 2 - n[h] / 2);
            }
          }
          return t;
        }
        function tf(e, t) {
          void 0 === t && (t = {});
          var i,
            n,
            s,
            r,
            o,
            a,
            l,
            c = t,
            h = c.placement,
            d = void 0 === h ? e.placement : h,
            u = c.strategy,
            f = void 0 === u ? e.strategy : u,
            p = c.boundary,
            m = c.rootBoundary,
            g = c.elementContext,
            _ = void 0 === g ? ew : g,
            b = c.altBoundary,
            v = c.padding,
            y = void 0 === v ? 0 : v,
            w = e3("number" != typeof y ? y : e6(y, e_)),
            E = e.rects.popper,
            A = e.elements[void 0 !== b && b ? (_ === ew ? eE : ew) : _],
            T =
              ((i = e$(A) ? A : A.contextElement || eJ(e.elements.popper)),
              (a = (o = [].concat(
                "clippingParents" === (n = void 0 === p ? ev : p)
                  ? ((s = tc(eG(i))),
                    e$(
                      (r =
                        ["absolute", "fixed"].indexOf(eU(i).position) >= 0 &&
                        eF(i)
                          ? e0(i)
                          : i)
                    )
                      ? s.filter(function (e) {
                          return e$(e) && eY(e, r) && "body" !== eM(e);
                        })
                      : [])
                  : [].concat(n),
                [void 0 === m ? ey : m]
              ))[0]),
              ((l = o.reduce(function (e, t) {
                var n = td(i, t, f);
                return (
                  (e.top = eB(n.top, e.top)),
                  (e.right = eR(n.right, e.right)),
                  (e.bottom = eR(n.bottom, e.bottom)),
                  (e.left = eB(n.left, e.left)),
                  e
                );
              }, td(i, a, f))).width = l.right - l.left),
              (l.height = l.bottom - l.top),
              (l.x = l.left),
              (l.y = l.top),
              l),
            C = eQ(e.elements.reference),
            O = tu({
              reference: C,
              element: E,
              strategy: "absolute",
              placement: d,
            }),
            x = th(Object.assign({}, E, O)),
            k = _ === ew ? x : C,
            S = {
              top: T.top - k.top + w.top,
              bottom: k.bottom - T.bottom + w.bottom,
              left: T.left - k.left + w.left,
              right: k.right - T.right + w.right,
            },
            L = e.modifiersData.offset;
          if (_ === ew && L) {
            var D = L[d];
            Object.keys(S).forEach(function (e) {
              var t = [ep, ef].indexOf(e) >= 0 ? 1 : -1,
                i = ["top", ef].indexOf(e) >= 0 ? "y" : "x";
              S[e] += D[i] * t;
            });
          }
          return S;
        }
        let tp = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              i = e.options,
              n = e.name;
            if (!t.modifiersData[n]._skip) {
              for (
                var s = i.mainAxis,
                  r = void 0 === s || s,
                  o = i.altAxis,
                  a = void 0 === o || o,
                  l = i.fallbackPlacements,
                  c = i.padding,
                  h = i.boundary,
                  d = i.rootBoundary,
                  u = i.altBoundary,
                  f = i.flipVariations,
                  p = void 0 === f || f,
                  m = i.allowedAutoPlacements,
                  g = t.options.placement,
                  _ = ez(g),
                  b =
                    l ||
                    (_ !== g && p
                      ? (function (e) {
                          if (ez(e) === eg) return [];
                          var t = tn(e);
                          return [tr(e), t, tr(t)];
                        })(g)
                      : [tn(g)]),
                  v = [g].concat(b).reduce(function (e, i) {
                    var n, s, r, o, a, l, u, f, g, _, b, v;
                    return e.concat(
                      ez(i) === eg
                        ? ((s = (n = {
                            placement: i,
                            boundary: h,
                            rootBoundary: d,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: m,
                          }).placement),
                          (r = n.boundary),
                          (o = n.rootBoundary),
                          (a = n.padding),
                          (l = n.flipVariations),
                          (f =
                            void 0 === (u = n.allowedAutoPlacements) ? eT : u),
                          0 ===
                            (b = (_ = (g = e4(s))
                              ? l
                                ? eA
                                : eA.filter(function (e) {
                                    return e4(e) === g;
                                  })
                              : e_).filter(function (e) {
                              return f.indexOf(e) >= 0;
                            })).length && (b = _),
                          Object.keys(
                            (v = b.reduce(function (e, i) {
                              return (
                                (e[i] = tf(t, {
                                  placement: i,
                                  boundary: r,
                                  rootBoundary: o,
                                  padding: a,
                                })[ez(i)]),
                                e
                              );
                            }, {}))
                          ).sort(function (e, t) {
                            return v[e] - v[t];
                          }))
                        : i
                    );
                  }, []),
                  y = t.rects.reference,
                  w = t.rects.popper,
                  E = new Map(),
                  A = !0,
                  T = v[0],
                  C = 0;
                C < v.length;
                C++
              ) {
                var O = v[C],
                  x = ez(O),
                  k = e4(O) === eb,
                  S = ["top", ef].indexOf(x) >= 0,
                  L = S ? "width" : "height",
                  D = tf(t, {
                    placement: O,
                    boundary: h,
                    rootBoundary: d,
                    altBoundary: u,
                    padding: c,
                  }),
                  I = S ? (k ? ep : em) : k ? ef : "top";
                y[L] > w[L] && (I = tn(I));
                var N = tn(I),
                  P = [];
                if (
                  (r && P.push(D[x] <= 0),
                  a && P.push(D[I] <= 0, D[N] <= 0),
                  P.every(function (e) {
                    return e;
                  }))
                ) {
                  (T = O), (A = !1);
                  break;
                }
                E.set(O, P);
              }
              if (A)
                for (
                  var M = function (e) {
                      var t = v.find(function (t) {
                        var i = E.get(t);
                        if (i)
                          return i.slice(0, e).every(function (e) {
                            return e;
                          });
                      });
                      if (t) return (T = t), "break";
                    },
                    j = p ? 3 : 1;
                  j > 0 && "break" !== M(j);
                  j--
                );
              t.placement !== T &&
                ((t.modifiersData[n]._skip = !0),
                (t.placement = T),
                (t.reset = !0));
            }
          },
          requiresIfExists: ["offset"],
          data: { _skip: !1 },
        };
        function tm(e, t, i) {
          return (
            void 0 === i && (i = { x: 0, y: 0 }),
            {
              top: e.top - t.height - i.y,
              right: e.right - t.width + i.x,
              bottom: e.bottom - t.height + i.y,
              left: e.left - t.width - i.x,
            }
          );
        }
        function tg(e) {
          return ["top", ep, ef, em].some(function (t) {
            return e[t] >= 0;
          });
        }
        let t_ = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                i = e.name,
                n = t.rects.reference,
                s = t.rects.popper,
                r = t.modifiersData.preventOverflow,
                o = tf(t, { elementContext: "reference" }),
                a = tf(t, { altBoundary: !0 }),
                l = tm(o, n),
                c = tm(a, s, r),
                h = tg(l),
                d = tg(c);
              (t.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": h,
                  "data-popper-escaped": d,
                }));
            },
          },
          tb = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
              var t = e.state,
                i = e.options,
                n = e.name,
                s = i.offset,
                r = void 0 === s ? [0, 0] : s,
                o = eT.reduce(function (e, i) {
                  var n, s, o, a, l, c;
                  return (
                    (e[i] =
                      ((n = t.rects),
                      (o = [em, "top"].indexOf((s = ez(i))) >= 0 ? -1 : 1),
                      (l = (a =
                        "function" == typeof r
                          ? r(Object.assign({}, n, { placement: i }))
                          : r)[0]),
                      (c = a[1]),
                      (l = l || 0),
                      (c = (c || 0) * o),
                      [em, ep].indexOf(s) >= 0
                        ? { x: c, y: l }
                        : { x: l, y: c })),
                    e
                  );
                }, {}),
                a = o[t.placement],
                l = a.x,
                c = a.y;
              null != t.modifiersData.popperOffsets &&
                ((t.modifiersData.popperOffsets.x += l),
                (t.modifiersData.popperOffsets.y += c)),
                (t.modifiersData[n] = o);
            },
          },
          tv = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                i = e.name;
              t.modifiersData[i] = tu({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          ty = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                i = e.options,
                n = e.name,
                s = i.mainAxis,
                r = i.altAxis,
                o = i.boundary,
                a = i.rootBoundary,
                l = i.altBoundary,
                c = i.padding,
                h = i.tether,
                d = void 0 === h || h,
                u = i.tetherOffset,
                f = void 0 === u ? 0 : u,
                p = tf(t, {
                  boundary: o,
                  rootBoundary: a,
                  padding: c,
                  altBoundary: l,
                }),
                m = ez(t.placement),
                g = e4(t.placement),
                _ = !g,
                b = e1(m),
                v = "x" === b ? "y" : "x",
                y = t.modifiersData.popperOffsets,
                w = t.rects.reference,
                E = t.rects.popper,
                A =
                  "function" == typeof f
                    ? f(Object.assign({}, t.rects, { placement: t.placement }))
                    : f,
                T =
                  "number" == typeof A
                    ? { mainAxis: A, altAxis: A }
                    : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
                C = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement]
                  : null,
                O = { x: 0, y: 0 };
              if (y) {
                if (void 0 === s || s) {
                  var x,
                    k = "y" === b ? "top" : em,
                    S = "y" === b ? ef : ep,
                    L = "y" === b ? "height" : "width",
                    D = y[b],
                    I = D + p[k],
                    N = D - p[S],
                    P = d ? -E[L] / 2 : 0,
                    M = g === eb ? w[L] : E[L],
                    j = g === eb ? -E[L] : -w[L],
                    $ = t.elements.arrow,
                    F = d && $ ? eX($) : { width: 0, height: 0 },
                    H = t.modifiersData["arrow#persistent"]
                      ? t.modifiersData["arrow#persistent"].padding
                      : { top: 0, right: 0, bottom: 0, left: 0 },
                    W = H[k],
                    z = H[S],
                    B = e2(0, w[L], F[L]),
                    R = _
                      ? w[L] / 2 - P - B - W - T.mainAxis
                      : M - B - W - T.mainAxis,
                    q = _
                      ? -w[L] / 2 + P + B + z + T.mainAxis
                      : j + B + z + T.mainAxis,
                    V = t.elements.arrow && e0(t.elements.arrow),
                    K = V
                      ? "y" === b
                        ? V.clientTop || 0
                        : V.clientLeft || 0
                      : 0,
                    Q = null != (x = null == C ? void 0 : C[b]) ? x : 0,
                    X = e2(
                      d ? eR(I, D + R - Q - K) : I,
                      D,
                      d ? eB(N, D + q - Q) : N
                    );
                  (y[b] = X), (O[b] = X - D);
                }
                if (void 0 !== r && r) {
                  var Y,
                    U,
                    J = y[v],
                    G = "y" === v ? "height" : "width",
                    Z = J + p["x" === b ? "top" : em],
                    ee = J - p["x" === b ? ef : ep],
                    et = -1 !== ["top", em].indexOf(m),
                    ei = null != (U = null == C ? void 0 : C[v]) ? U : 0,
                    en = et ? Z : J - w[G] - E[G] - ei + T.altAxis,
                    es = et ? J + w[G] + E[G] - ei - T.altAxis : ee,
                    er =
                      d && et
                        ? (Y = e2(en, J, es)) > es
                          ? es
                          : Y
                        : e2(d ? en : Z, J, d ? es : ee);
                  (y[v] = er), (O[v] = er - J);
                }
                t.modifiersData[n] = O;
              }
            },
            requiresIfExists: ["offset"],
          };
        var tw = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function tE() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
          });
        }
        function tA(e) {
          void 0 === e && (e = {});
          var t = e,
            i = t.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = t.defaultOptions,
            r = void 0 === s ? tw : s;
          return function (e, t, i) {
            void 0 === i && (i = r);
            var s,
              o = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, tw, r),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              a = [],
              l = !1,
              c = {
                state: o,
                setOptions: function (i) {
                  var s = "function" == typeof i ? i(o.options) : i;
                  h(),
                    (o.options = Object.assign({}, r, o.options, s)),
                    (o.scrollParents = {
                      reference: e$(e)
                        ? tc(e)
                        : e.contextElement
                        ? tc(e.contextElement)
                        : [],
                      popper: tc(t),
                    });
                  var l,
                    d,
                    u,
                    f,
                    p,
                    m =
                      ((l = Object.keys(
                        (p = []
                          .concat(n, o.options.modifiers)
                          .reduce(function (e, t) {
                            var i = e[t.name];
                            return (
                              (e[t.name] = i
                                ? Object.assign({}, i, t, {
                                    options: Object.assign(
                                      {},
                                      i.options,
                                      t.options
                                    ),
                                    data: Object.assign({}, i.data, t.data),
                                  })
                                : t),
                              e
                            );
                          }, {}))
                      ).map(function (e) {
                        return p[e];
                      })),
                      (d = new Map()),
                      (u = new Set()),
                      (f = []),
                      l.forEach(function (e) {
                        d.set(e.name, e);
                      }),
                      l.forEach(function (e) {
                        u.has(e.name) ||
                          (function e(t) {
                            u.add(t.name),
                              []
                                .concat(
                                  t.requires || [],
                                  t.requiresIfExists || []
                                )
                                .forEach(function (t) {
                                  if (!u.has(t)) {
                                    var i = d.get(t);
                                    i && e(i);
                                  }
                                }),
                              f.push(t);
                          })(e);
                      }),
                      eP.reduce(function (e, t) {
                        return e.concat(
                          f.filter(function (e) {
                            return e.phase === t;
                          })
                        );
                      }, []));
                  return (
                    (o.orderedModifiers = m.filter(function (e) {
                      return e.enabled;
                    })),
                    o.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        i = e.options,
                        n = e.effect;
                      if ("function" == typeof n) {
                        var s = n({
                          state: o,
                          name: t,
                          instance: c,
                          options: void 0 === i ? {} : i,
                        });
                        a.push(s || function () {});
                      }
                    }),
                    c.update()
                  );
                },
                forceUpdate: function () {
                  if (!l) {
                    var e = o.elements,
                      t = e.reference,
                      i = e.popper;
                    if (tE(t, i)) {
                      (o.rects = {
                        reference:
                          ((n = e0(i)),
                          (s = "fixed" === o.options.strategy),
                          (d = eF(n)),
                          (u =
                            eF(n) &&
                            ((a =
                              eq((r = n.getBoundingClientRect()).width) /
                                n.offsetWidth || 1),
                            (h = eq(r.height) / n.offsetHeight || 1),
                            1 !== a || 1 !== h)),
                          (f = eJ(n)),
                          (p = eQ(t, u, s)),
                          (m = { scrollLeft: 0, scrollTop: 0 }),
                          (g = { x: 0, y: 0 }),
                          (d || (!d && !s)) &&
                            (("body" !== eM(n) || tl(f)) &&
                              (m =
                                n !== ej(n) && eF(n)
                                  ? {
                                      scrollLeft: n.scrollLeft,
                                      scrollTop: n.scrollTop,
                                    }
                                  : to(n)),
                            eF(n)
                              ? (((g = eQ(n, !0)).x += n.clientLeft),
                                (g.y += n.clientTop))
                              : f && (g.x = ta(f))),
                          {
                            x: p.left + m.scrollLeft - g.x,
                            y: p.top + m.scrollTop - g.y,
                            width: p.width,
                            height: p.height,
                          }),
                        popper: eX(i),
                      }),
                        (o.reset = !1),
                        (o.placement = o.options.placement),
                        o.orderedModifiers.forEach(function (e) {
                          return (o.modifiersData[e.name] = Object.assign(
                            {},
                            e.data
                          ));
                        });
                      for (
                        var n, s, r, a, h, d, u, f, p, m, g, _ = 0;
                        _ < o.orderedModifiers.length;
                        _++
                      )
                        if (!0 !== o.reset) {
                          var b = o.orderedModifiers[_],
                            v = b.fn,
                            y = b.options,
                            w = void 0 === y ? {} : y,
                            E = b.name;
                          "function" == typeof v &&
                            (o =
                              v({
                                state: o,
                                options: w,
                                name: E,
                                instance: c,
                              }) || o);
                        } else (o.reset = !1), (_ = -1);
                    }
                  }
                },
                update: function () {
                  return (
                    s ||
                      (s = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (s = void 0),
                            e(
                              new Promise(function (e) {
                                c.forceUpdate(), e(o);
                              })
                            );
                        });
                      })),
                    s
                  );
                },
                destroy: function () {
                  h(), (l = !0);
                },
              };
            if (!tE(e, t)) return c;
            function h() {
              a.forEach(function (e) {
                return e();
              }),
                (a = []);
            }
            return (
              c.setOptions(i).then(function (e) {
                !l && i.onFirstUpdate && i.onFirstUpdate(e);
              }),
              c
            );
          };
        }
        var tT = tA(),
          tC = tA({ defaultModifiers: [tt, tv, e9, eW] }),
          tO = tA({ defaultModifiers: [tt, tv, e9, eW, tb, tp, ty, e5, t_] });
        let tx = Object.freeze(
            Object.defineProperty(
              {
                __proto__: null,
                afterMain: eL,
                afterRead: ex,
                afterWrite: eN,
                applyStyles: eW,
                arrow: e5,
                auto: eg,
                basePlacements: e_,
                beforeMain: ek,
                beforeRead: eC,
                beforeWrite: eD,
                bottom: ef,
                clippingParents: ev,
                computeStyles: e9,
                createPopper: tO,
                createPopperBase: tT,
                createPopperLite: tC,
                detectOverflow: tf,
                end: "end",
                eventListeners: tt,
                flip: tp,
                hide: t_,
                left: em,
                main: eS,
                modifierPhases: eP,
                offset: tb,
                placements: eT,
                popper: ew,
                popperGenerator: tA,
                popperOffsets: tv,
                preventOverflow: ty,
                read: eO,
                reference: eE,
                right: ep,
                start: eb,
                top: "top",
                variationPlacements: eA,
                viewport: ey,
                write: eI,
              },
              Symbol.toStringTag,
              { value: "Module" }
            )
          ),
          tk = "dropdown",
          tS = "ArrowDown",
          tL = "click.bs.dropdown.data-api",
          tD = "keydown.bs.dropdown.data-api",
          tI = "show",
          tN = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
          tP = `${tN}.show`,
          tM = ".dropdown-menu",
          tj = p() ? "top-end" : "top-start",
          t$ = p() ? "top-start" : "top-end",
          tF = p() ? "bottom-end" : "bottom-start",
          tH = p() ? "bottom-start" : "bottom-end",
          tW = p() ? "left-start" : "right-start",
          tz = p() ? "right-start" : "left-start",
          tB = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle",
          },
          tR = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)",
          };
        class tq extends H {
          constructor(e, t) {
            super(e, t),
              (this._popper = null),
              (this._parent = this._element.parentNode),
              (this._menu =
                z.next(this._element, tM)[0] ||
                z.prev(this._element, tM)[0] ||
                z.findOne(tM, this._parent)),
              (this._inNavbar = this._detectNavbar());
          }
          static get Default() {
            return tB;
          }
          static get DefaultType() {
            return tR;
          }
          static get NAME() {
            return tk;
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (l(this._element) || this._isShown()) return;
            let e = { relatedTarget: this._element };
            if (
              !N.trigger(this._element, "show.bs.dropdown", e).defaultPrevented
            ) {
              if (
                (this._createPopper(),
                "ontouchstart" in document.documentElement &&
                  !this._parent.closest(".navbar-nav"))
              )
                for (let e of [].concat(...document.body.children))
                  N.on(e, "mouseover", h);
              this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(tI),
                this._element.classList.add(tI),
                N.trigger(this._element, "shown.bs.dropdown", e);
            }
          }
          hide() {
            if (l(this._element) || !this._isShown()) return;
            let e = { relatedTarget: this._element };
            this._completeHide(e);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            (this._inNavbar = this._detectNavbar()),
              this._popper && this._popper.update();
          }
          _completeHide(e) {
            if (
              !N.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented
            ) {
              if ("ontouchstart" in document.documentElement)
                for (let e of [].concat(...document.body.children))
                  N.off(e, "mouseover", h);
              this._popper && this._popper.destroy(),
                this._menu.classList.remove(tI),
                this._element.classList.remove(tI),
                this._element.setAttribute("aria-expanded", "false"),
                $.removeDataAttribute(this._menu, "popper"),
                N.trigger(this._element, "hidden.bs.dropdown", e);
            }
          }
          _getConfig(e) {
            if (
              "object" == typeof (e = super._getConfig(e)).reference &&
              !r(e.reference) &&
              "function" != typeof e.reference.getBoundingClientRect
            )
              throw TypeError(
                `${tk.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
              );
            return e;
          }
          _createPopper() {
            if (void 0 === tx)
              throw TypeError(
                "Bootstrap's dropdowns require Popper (https://popper.js.org)"
              );
            let e = this._element;
            "parent" === this._config.reference
              ? (e = this._parent)
              : r(this._config.reference)
              ? (e = o(this._config.reference))
              : "object" == typeof this._config.reference &&
                (e = this._config.reference);
            let t = this._getPopperConfig();
            this._popper = tO(e, this._menu, t);
          }
          _isShown() {
            return this._menu.classList.contains(tI);
          }
          _getPlacement() {
            let e = this._parent;
            if (e.classList.contains("dropend")) return tW;
            if (e.classList.contains("dropstart")) return tz;
            if (e.classList.contains("dropup-center")) return "top";
            if (e.classList.contains("dropdown-center")) return "bottom";
            let t =
              "end" ===
              getComputedStyle(this._menu)
                .getPropertyValue("--bs-position")
                .trim();
            return e.classList.contains("dropup") ? (t ? t$ : tj) : t ? tH : tF;
          }
          _detectNavbar() {
            return null !== this._element.closest(".navbar");
          }
          _getOffset() {
            let { offset: e } = this._config;
            return "string" == typeof e
              ? e.split(",").map((e) => Number.parseInt(e, 10))
              : "function" == typeof e
              ? (t) => e(t, this._element)
              : e;
          }
          _getPopperConfig() {
            let e = {
              placement: this._getPlacement(),
              modifiers: [
                {
                  name: "preventOverflow",
                  options: { boundary: this._config.boundary },
                },
                { name: "offset", options: { offset: this._getOffset() } },
              ],
            };
            return (
              (this._inNavbar || "static" === this._config.display) &&
                ($.setDataAttribute(this._menu, "popper", "static"),
                (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
              { ...e, ...g(this._config.popperConfig, [e]) }
            );
          }
          _selectMenuItem({ key: e, target: t }) {
            let i = z
              .find(
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                this._menu
              )
              .filter((e) => a(e));
            i.length && b(i, t, e === tS, !i.includes(t)).focus();
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = tq.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                t[e]();
              }
            });
          }
          static clearMenus(e) {
            if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))
              return;
            let t = z.find(tP);
            for (let i of t) {
              let t = tq.getInstance(i);
              if (!t || !1 === t._config.autoClose) continue;
              let n = e.composedPath(),
                s = n.includes(t._menu);
              if (
                n.includes(t._element) ||
                ("inside" === t._config.autoClose && !s) ||
                ("outside" === t._config.autoClose && s) ||
                (t._menu.contains(e.target) &&
                  (("keyup" === e.type && "Tab" === e.key) ||
                    /input|select|option|textarea|form/i.test(
                      e.target.tagName
                    )))
              )
                continue;
              let r = { relatedTarget: t._element };
              "click" === e.type && (r.clickEvent = e), t._completeHide(r);
            }
          }
          static dataApiKeydownHandler(e) {
            let t = /input|textarea/i.test(e.target.tagName),
              i = "Escape" === e.key,
              n = ["ArrowUp", tS].includes(e.key);
            if ((!n && !i) || (t && !i)) return;
            e.preventDefault();
            let s = this.matches(tN)
                ? this
                : z.prev(this, tN)[0] ||
                  z.next(this, tN)[0] ||
                  z.findOne(tN, e.delegateTarget.parentNode),
              r = tq.getOrCreateInstance(s);
            if (n)
              return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
            r._isShown() && (e.stopPropagation(), r.hide(), s.focus());
          }
        }
        N.on(document, tD, tN, tq.dataApiKeydownHandler),
          N.on(document, tD, tM, tq.dataApiKeydownHandler),
          N.on(document, tL, tq.clearMenus),
          N.on(document, "keyup.bs.dropdown.data-api", tq.clearMenus),
          N.on(document, tL, tN, function (e) {
            e.preventDefault(), tq.getOrCreateInstance(this).toggle();
          }),
          m(tq);
        let tV = "show",
          tK = "mousedown.bs.backdrop",
          tQ = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body",
          },
          tX = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)",
          };
        class tY extends F {
          constructor(e) {
            super(),
              (this._config = this._getConfig(e)),
              (this._isAppended = !1),
              (this._element = null);
          }
          static get Default() {
            return tQ;
          }
          static get DefaultType() {
            return tX;
          }
          static get NAME() {
            return "backdrop";
          }
          show(e) {
            if (!this._config.isVisible) return void g(e);
            this._append();
            let t = this._getElement();
            this._config.isAnimated && d(t),
              t.classList.add(tV),
              this._emulateAnimation(() => {
                g(e);
              });
          }
          hide(e) {
            this._config.isVisible
              ? (this._getElement().classList.remove(tV),
                this._emulateAnimation(() => {
                  this.dispose(), g(e);
                }))
              : g(e);
          }
          dispose() {
            this._isAppended &&
              (N.off(this._element, tK),
              this._element.remove(),
              (this._isAppended = !1));
          }
          _getElement() {
            if (!this._element) {
              let e = document.createElement("div");
              (e.className = this._config.className),
                this._config.isAnimated && e.classList.add("fade"),
                (this._element = e);
            }
            return this._element;
          }
          _configAfterMerge(e) {
            return (e.rootElement = o(e.rootElement)), e;
          }
          _append() {
            if (this._isAppended) return;
            let e = this._getElement();
            this._config.rootElement.append(e),
              N.on(e, tK, () => {
                g(this._config.clickCallback);
              }),
              (this._isAppended = !0);
          }
          _emulateAnimation(e) {
            _(e, this._getElement(), this._config.isAnimated);
          }
        }
        let tU = ".bs.focustrap",
          tJ = "backward",
          tG = { autofocus: !0, trapElement: null },
          tZ = { autofocus: "boolean", trapElement: "element" };
        class t0 extends F {
          constructor(e) {
            super(),
              (this._config = this._getConfig(e)),
              (this._isActive = !1),
              (this._lastTabNavDirection = null);
          }
          static get Default() {
            return tG;
          }
          static get DefaultType() {
            return tZ;
          }
          static get NAME() {
            return "focustrap";
          }
          activate() {
            this._isActive ||
              (this._config.autofocus && this._config.trapElement.focus(),
              N.off(document, tU),
              N.on(document, "focusin.bs.focustrap", (e) =>
                this._handleFocusin(e)
              ),
              N.on(document, "keydown.tab.bs.focustrap", (e) =>
                this._handleKeydown(e)
              ),
              (this._isActive = !0));
          }
          deactivate() {
            this._isActive && ((this._isActive = !1), N.off(document, tU));
          }
          _handleFocusin(e) {
            let { trapElement: t } = this._config;
            if (e.target === document || e.target === t || t.contains(e.target))
              return;
            let i = z.focusableChildren(t);
            0 === i.length
              ? t.focus()
              : this._lastTabNavDirection === tJ
              ? i[i.length - 1].focus()
              : i[0].focus();
          }
          _handleKeydown(e) {
            "Tab" === e.key &&
              (this._lastTabNavDirection = e.shiftKey ? tJ : "forward");
          }
        }
        let t1 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          t2 = ".sticky-top",
          t3 = "padding-right",
          t6 = "margin-right";
        class t5 {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            let e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e);
          }
          hide() {
            let e = this.getWidth();
            this._disableOverFlow(),
              this._setElementAttributes(this._element, t3, (t) => t + e),
              this._setElementAttributes(t1, t3, (t) => t + e),
              this._setElementAttributes(t2, t6, (t) => t - e);
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"),
              this._resetElementAttributes(this._element, t3),
              this._resetElementAttributes(t1, t3),
              this._resetElementAttributes(t2, t6);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
              (this._element.style.overflow = "hidden");
          }
          _setElementAttributes(e, t, i) {
            let n = this.getWidth();
            this._applyManipulationCallback(e, (e) => {
              if (e !== this._element && window.innerWidth > e.clientWidth + n)
                return;
              this._saveInitialAttribute(e, t);
              let s = window.getComputedStyle(e).getPropertyValue(t);
              e.style.setProperty(t, `${i(Number.parseFloat(s))}px`);
            });
          }
          _saveInitialAttribute(e, t) {
            let i = e.style.getPropertyValue(t);
            i && $.setDataAttribute(e, t, i);
          }
          _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, (e) => {
              let i = $.getDataAttribute(e, t);
              null !== i
                ? ($.removeDataAttribute(e, t), e.style.setProperty(t, i))
                : e.style.removeProperty(t);
            });
          }
          _applyManipulationCallback(e, t) {
            if (r(e)) t(e);
            else for (let i of z.find(e, this._element)) t(i);
          }
        }
        let t4 = ".bs.modal",
          t8 = "hidden.bs.modal",
          t7 = "show.bs.modal",
          t9 = "modal-open",
          ie = "show",
          it = "modal-static",
          ii = { backdrop: !0, focus: !0, keyboard: !0 },
          is = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean",
          };
        class ir extends H {
          constructor(e, t) {
            super(e, t),
              (this._dialog = z.findOne(".modal-dialog", this._element)),
              (this._backdrop = this._initializeBackDrop()),
              (this._focustrap = this._initializeFocusTrap()),
              (this._isShown = !1),
              (this._isTransitioning = !1),
              (this._scrollBar = new t5()),
              this._addEventListeners();
          }
          static get Default() {
            return ii;
          }
          static get DefaultType() {
            return is;
          }
          static get NAME() {
            return "modal";
          }
          toggle(e) {
            return this._isShown ? this.hide() : this.show(e);
          }
          show(e) {
            this._isShown ||
              this._isTransitioning ||
              N.trigger(this._element, t7, { relatedTarget: e })
                .defaultPrevented ||
              ((this._isShown = !0),
              (this._isTransitioning = !0),
              this._scrollBar.hide(),
              document.body.classList.add(t9),
              this._adjustDialog(),
              this._backdrop.show(() => this._showElement(e)));
          }
          hide() {
            this._isShown &&
              !this._isTransitioning &&
              (N.trigger(this._element, "hide.bs.modal").defaultPrevented ||
                ((this._isShown = !1),
                (this._isTransitioning = !0),
                this._focustrap.deactivate(),
                this._element.classList.remove(ie),
                this._queueCallback(
                  () => this._hideModal(),
                  this._element,
                  this._isAnimated()
                )));
          }
          dispose() {
            N.off(window, t4),
              N.off(this._dialog, t4),
              this._backdrop.dispose(),
              this._focustrap.deactivate(),
              super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new tY({
              isVisible: !!this._config.backdrop,
              isAnimated: this._isAnimated(),
            });
          }
          _initializeFocusTrap() {
            return new t0({ trapElement: this._element });
          }
          _showElement(e) {
            document.body.contains(this._element) ||
              document.body.append(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              (this._element.scrollTop = 0);
            let t = z.findOne(".modal-body", this._dialog);
            t && (t.scrollTop = 0),
              d(this._element),
              this._element.classList.add(ie),
              this._queueCallback(
                () => {
                  this._config.focus && this._focustrap.activate(),
                    (this._isTransitioning = !1),
                    N.trigger(this._element, "shown.bs.modal", {
                      relatedTarget: e,
                    });
                },
                this._dialog,
                this._isAnimated()
              );
          }
          _addEventListeners() {
            N.on(this._element, "keydown.dismiss.bs.modal", (e) => {
              "Escape" === e.key &&
                (this._config.keyboard
                  ? this.hide()
                  : this._triggerBackdropTransition());
            }),
              N.on(window, "resize.bs.modal", () => {
                this._isShown && !this._isTransitioning && this._adjustDialog();
              }),
              N.on(this._element, "mousedown.dismiss.bs.modal", (e) => {
                N.one(this._element, "click.dismiss.bs.modal", (t) => {
                  this._element === e.target &&
                    this._element === t.target &&
                    ("static" !== this._config.backdrop
                      ? this._config.backdrop && this.hide()
                      : this._triggerBackdropTransition());
                });
              });
          }
          _hideModal() {
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._backdrop.hide(() => {
                document.body.classList.remove(t9),
                  this._resetAdjustments(),
                  this._scrollBar.reset(),
                  N.trigger(this._element, t8);
              });
          }
          _isAnimated() {
            return this._element.classList.contains("fade");
          }
          _triggerBackdropTransition() {
            if (
              N.trigger(this._element, "hidePrevented.bs.modal")
                .defaultPrevented
            )
              return;
            let e =
                this._element.scrollHeight >
                document.documentElement.clientHeight,
              t = this._element.style.overflowY;
            "hidden" === t ||
              this._element.classList.contains(it) ||
              (e || (this._element.style.overflowY = "hidden"),
              this._element.classList.add(it),
              this._queueCallback(() => {
                this._element.classList.remove(it),
                  this._queueCallback(() => {
                    this._element.style.overflowY = t;
                  }, this._dialog);
              }, this._dialog),
              this._element.focus());
          }
          _adjustDialog() {
            let e =
                this._element.scrollHeight >
                document.documentElement.clientHeight,
              t = this._scrollBar.getWidth(),
              i = t > 0;
            if (i && !e) {
              let e = p() ? "paddingLeft" : "paddingRight";
              this._element.style[e] = `${t}px`;
            }
            if (!i && e) {
              let e = p() ? "paddingRight" : "paddingLeft";
              this._element.style[e] = `${t}px`;
            }
          }
          _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }
          static jQueryInterface(e, t) {
            return this.each(function () {
              let i = ir.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                i[e](t);
              }
            });
          }
        }
        N.on(
          document,
          "click.bs.modal.data-api",
          '[data-bs-toggle="modal"]',
          function (e) {
            let t = z.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              N.one(t, t7, (e) => {
                e.defaultPrevented ||
                  N.one(t, t8, () => {
                    a(this) && this.focus();
                  });
              });
            let i = z.findOne(".modal.show");
            i && ir.getInstance(i).hide(),
              ir.getOrCreateInstance(t).toggle(this);
          }
        ),
          B(ir),
          m(ir);
        let io = "show",
          ia = "showing",
          il = "hiding",
          ic = ".offcanvas.show",
          ih = "hidePrevented.bs.offcanvas",
          id = "hidden.bs.offcanvas",
          iu = { backdrop: !0, keyboard: !0, scroll: !1 },
          ip = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean",
          };
        class im extends H {
          constructor(e, t) {
            super(e, t),
              (this._isShown = !1),
              (this._backdrop = this._initializeBackDrop()),
              (this._focustrap = this._initializeFocusTrap()),
              this._addEventListeners();
          }
          static get Default() {
            return iu;
          }
          static get DefaultType() {
            return ip;
          }
          static get NAME() {
            return "offcanvas";
          }
          toggle(e) {
            return this._isShown ? this.hide() : this.show(e);
          }
          show(e) {
            this._isShown ||
              N.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: e,
              }).defaultPrevented ||
              ((this._isShown = !0),
              this._backdrop.show(),
              this._config.scroll || new t5().hide(),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              this._element.classList.add(ia),
              this._queueCallback(
                () => {
                  (this._config.scroll && !this._config.backdrop) ||
                    this._focustrap.activate(),
                    this._element.classList.add(io),
                    this._element.classList.remove(ia),
                    N.trigger(this._element, "shown.bs.offcanvas", {
                      relatedTarget: e,
                    });
                },
                this._element,
                !0
              ));
          }
          hide() {
            this._isShown &&
              (N.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
                (this._focustrap.deactivate(),
                this._element.blur(),
                (this._isShown = !1),
                this._element.classList.add(il),
                this._backdrop.hide(),
                this._queueCallback(
                  () => {
                    this._element.classList.remove(io, il),
                      this._element.removeAttribute("aria-modal"),
                      this._element.removeAttribute("role"),
                      this._config.scroll || new t5().reset(),
                      N.trigger(this._element, id);
                  },
                  this._element,
                  !0
                )));
          }
          dispose() {
            this._backdrop.dispose(),
              this._focustrap.deactivate(),
              super.dispose();
          }
          _initializeBackDrop() {
            let e = !!this._config.backdrop;
            return new tY({
              className: "offcanvas-backdrop",
              isVisible: e,
              isAnimated: !0,
              rootElement: this._element.parentNode,
              clickCallback: e
                ? () => {
                    "static" !== this._config.backdrop
                      ? this.hide()
                      : N.trigger(this._element, ih);
                  }
                : null,
            });
          }
          _initializeFocusTrap() {
            return new t0({ trapElement: this._element });
          }
          _addEventListeners() {
            N.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
              "Escape" === e.key &&
                (this._config.keyboard
                  ? this.hide()
                  : N.trigger(this._element, ih));
            });
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = im.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                  throw TypeError(`No method named "${e}"`);
                t[e](this);
              }
            });
          }
        }
        N.on(
          document,
          "click.bs.offcanvas.data-api",
          '[data-bs-toggle="offcanvas"]',
          function (e) {
            let t = z.getElementFromSelector(this);
            if (
              (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              l(this))
            )
              return;
            N.one(t, id, () => {
              a(this) && this.focus();
            });
            let i = z.findOne(ic);
            i && i !== t && im.getInstance(i).hide(),
              im.getOrCreateInstance(t).toggle(this);
          }
        ),
          N.on(window, "load.bs.offcanvas.data-api", () => {
            for (let e of z.find(ic)) im.getOrCreateInstance(e).show();
          }),
          N.on(window, "resize.bs.offcanvas", () => {
            for (let e of z.find(
              "[aria-modal][class*=show][class*=offcanvas-]"
            ))
              "fixed" !== getComputedStyle(e).position &&
                im.getOrCreateInstance(e).hide();
          }),
          B(im),
          m(im);
        let ig = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
          ]),
          i_ = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
          ib =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
          iv = (e, t) => {
            let i = e.nodeName.toLowerCase();
            return t.includes(i)
              ? !ig.has(i) || !!(i_.test(e.nodeValue) || ib.test(e.nodeValue))
              : t.filter((e) => e instanceof RegExp).some((e) => e.test(i));
          },
          iy = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
          },
          iw = {
            allowList: iy,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>",
          },
          iE = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string",
          },
          iA = {
            entry: "(string|element|function|null)",
            selector: "(string|element)",
          };
        class iT extends F {
          constructor(e) {
            super(), (this._config = this._getConfig(e));
          }
          static get Default() {
            return iw;
          }
          static get DefaultType() {
            return iE;
          }
          static get NAME() {
            return "TemplateFactory";
          }
          getContent() {
            return Object.values(this._config.content)
              .map((e) => this._resolvePossibleFunction(e))
              .filter(Boolean);
          }
          hasContent() {
            return this.getContent().length > 0;
          }
          changeContent(e) {
            return (
              this._checkContent(e),
              (this._config.content = { ...this._config.content, ...e }),
              this
            );
          }
          toHtml() {
            let e = document.createElement("div");
            for (let [t, i] of ((e.innerHTML = this._maybeSanitize(
              this._config.template
            )),
            Object.entries(this._config.content)))
              this._setContent(e, i, t);
            let t = e.children[0],
              i = this._resolvePossibleFunction(this._config.extraClass);
            return i && t.classList.add(...i.split(" ")), t;
          }
          _typeCheckConfig(e) {
            super._typeCheckConfig(e), this._checkContent(e.content);
          }
          _checkContent(e) {
            for (let [t, i] of Object.entries(e))
              super._typeCheckConfig({ selector: t, entry: i }, iA);
          }
          _setContent(e, t, i) {
            let n = z.findOne(i, e);
            n &&
              ((t = this._resolvePossibleFunction(t))
                ? r(t)
                  ? this._putElementInTemplate(o(t), n)
                  : this._config.html
                  ? (n.innerHTML = this._maybeSanitize(t))
                  : (n.textContent = t)
                : n.remove());
          }
          _maybeSanitize(e) {
            return this._config.sanitize
              ? (function (e, t, i) {
                  if (!e.length) return e;
                  if (i && "function" == typeof i) return i(e);
                  let n = new window.DOMParser().parseFromString(
                      e,
                      "text/html"
                    ),
                    s = [].concat(...n.body.querySelectorAll("*"));
                  for (let e of s) {
                    let i = e.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(i)) {
                      e.remove();
                      continue;
                    }
                    let n = [].concat(...e.attributes),
                      s = [].concat(t["*"] || [], t[i] || []);
                    for (let t of n) iv(t, s) || e.removeAttribute(t.nodeName);
                  }
                  return n.body.innerHTML;
                })(e, this._config.allowList, this._config.sanitizeFn)
              : e;
          }
          _resolvePossibleFunction(e) {
            return g(e, [this]);
          }
          _putElementInTemplate(e, t) {
            if (this._config.html) return (t.innerHTML = ""), void t.append(e);
            t.textContent = e.textContent;
          }
        }
        let iC = new Set(["sanitize", "allowList", "sanitizeFn"]),
          iO = "fade",
          ix = "show",
          ik = ".modal",
          iS = "hide.bs.modal",
          iL = "hover",
          iD = "focus",
          iI = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: p() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: p() ? "right" : "left",
          },
          iN = {
            allowList: iy,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template:
              '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus",
          },
          iP = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
          };
        class iM extends H {
          constructor(e, t) {
            if (void 0 === tx)
              throw TypeError(
                "Bootstrap's tooltips require Popper (https://popper.js.org)"
              );
            super(e, t),
              (this._isEnabled = !0),
              (this._timeout = 0),
              (this._isHovered = null),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this._templateFactory = null),
              (this._newContent = null),
              (this.tip = null),
              this._setListeners(),
              this._config.selector || this._fixTitle();
          }
          static get Default() {
            return iN;
          }
          static get DefaultType() {
            return iP;
          }
          static get NAME() {
            return "tooltip";
          }
          enable() {
            this._isEnabled = !0;
          }
          disable() {
            this._isEnabled = !1;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle() {
            this._isEnabled &&
              ((this._activeTrigger.click = !this._activeTrigger.click),
              this._isShown() ? this._leave() : this._enter());
          }
          dispose() {
            clearTimeout(this._timeout),
              N.off(this._element.closest(ik), iS, this._hideModalHandler),
              this._element.getAttribute("data-bs-original-title") &&
                this._element.setAttribute(
                  "title",
                  this._element.getAttribute("data-bs-original-title")
                ),
              this._disposePopper(),
              super.dispose();
          }
          show() {
            if ("none" === this._element.style.display)
              throw Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            let e = N.trigger(
                this._element,
                this.constructor.eventName("show")
              ),
              t = (
                c(this._element) || this._element.ownerDocument.documentElement
              ).contains(this._element);
            if (e.defaultPrevented || !t) return;
            this._disposePopper();
            let i = this._getTipElement();
            this._element.setAttribute(
              "aria-describedby",
              i.getAttribute("id")
            );
            let { container: n } = this._config;
            if (
              (this._element.ownerDocument.documentElement.contains(this.tip) ||
                (n.append(i),
                N.trigger(
                  this._element,
                  this.constructor.eventName("inserted")
                )),
              (this._popper = this._createPopper(i)),
              i.classList.add(ix),
              "ontouchstart" in document.documentElement)
            )
              for (let e of [].concat(...document.body.children))
                N.on(e, "mouseover", h);
            this._queueCallback(
              () => {
                N.trigger(this._element, this.constructor.eventName("shown")),
                  !1 === this._isHovered && this._leave(),
                  (this._isHovered = !1);
              },
              this.tip,
              this._isAnimated()
            );
          }
          hide() {
            if (
              this._isShown() &&
              !N.trigger(this._element, this.constructor.eventName("hide"))
                .defaultPrevented
            ) {
              if (
                (this._getTipElement().classList.remove(ix),
                "ontouchstart" in document.documentElement)
              )
                for (let e of [].concat(...document.body.children))
                  N.off(e, "mouseover", h);
              (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1),
                (this._isHovered = null),
                this._queueCallback(
                  () => {
                    this._isWithActiveTrigger() ||
                      (this._isHovered || this._disposePopper(),
                      this._element.removeAttribute("aria-describedby"),
                      N.trigger(
                        this._element,
                        this.constructor.eventName("hidden")
                      ));
                  },
                  this.tip,
                  this._isAnimated()
                );
            }
          }
          update() {
            this._popper && this._popper.update();
          }
          _isWithContent() {
            return !!this._getTitle();
          }
          _getTipElement() {
            return (
              this.tip ||
                (this.tip = this._createTipElement(
                  this._newContent || this._getContentForTemplate()
                )),
              this.tip
            );
          }
          _createTipElement(e) {
            let t = this._getTemplateFactory(e).toHtml();
            if (!t) return null;
            t.classList.remove(iO, ix),
              t.classList.add(`bs-${this.constructor.NAME}-auto`);
            let i = ((e) => {
              do e += Math.floor(1e6 * Math.random());
              while (document.getElementById(e));
              return e;
            })(this.constructor.NAME).toString();
            return (
              t.setAttribute("id", i),
              this._isAnimated() && t.classList.add(iO),
              t
            );
          }
          setContent(e) {
            (this._newContent = e),
              this._isShown() && (this._disposePopper(), this.show());
          }
          _getTemplateFactory(e) {
            return (
              this._templateFactory
                ? this._templateFactory.changeContent(e)
                : (this._templateFactory = new iT({
                    ...this._config,
                    content: e,
                    extraClass: this._resolvePossibleFunction(
                      this._config.customClass
                    ),
                  })),
              this._templateFactory
            );
          }
          _getContentForTemplate() {
            return { ".tooltip-inner": this._getTitle() };
          }
          _getTitle() {
            return (
              this._resolvePossibleFunction(this._config.title) ||
              this._element.getAttribute("data-bs-original-title")
            );
          }
          _initializeOnDelegatedTarget(e) {
            return this.constructor.getOrCreateInstance(
              e.delegateTarget,
              this._getDelegateConfig()
            );
          }
          _isAnimated() {
            return (
              this._config.animation ||
              (this.tip && this.tip.classList.contains(iO))
            );
          }
          _isShown() {
            return this.tip && this.tip.classList.contains(ix);
          }
          _createPopper(e) {
            let t = g(this._config.placement, [this, e, this._element]),
              i = iI[t.toUpperCase()];
            return tO(this._element, e, this._getPopperConfig(i));
          }
          _getOffset() {
            let { offset: e } = this._config;
            return "string" == typeof e
              ? e.split(",").map((e) => Number.parseInt(e, 10))
              : "function" == typeof e
              ? (t) => e(t, this._element)
              : e;
          }
          _resolvePossibleFunction(e) {
            return g(e, [this._element]);
          }
          _getPopperConfig(e) {
            let t = {
              placement: e,
              modifiers: [
                {
                  name: "flip",
                  options: {
                    fallbackPlacements: this._config.fallbackPlacements,
                  },
                },
                { name: "offset", options: { offset: this._getOffset() } },
                {
                  name: "preventOverflow",
                  options: { boundary: this._config.boundary },
                },
                {
                  name: "arrow",
                  options: { element: `.${this.constructor.NAME}-arrow` },
                },
                {
                  name: "preSetPlacement",
                  enabled: !0,
                  phase: "beforeMain",
                  fn: (e) => {
                    this._getTipElement().setAttribute(
                      "data-popper-placement",
                      e.state.placement
                    );
                  },
                },
              ],
            };
            return { ...t, ...g(this._config.popperConfig, [t]) };
          }
          _setListeners() {
            let e = this._config.trigger.split(" ");
            for (let t of e)
              if ("click" === t)
                N.on(
                  this._element,
                  this.constructor.eventName("click"),
                  this._config.selector,
                  (e) => {
                    this._initializeOnDelegatedTarget(e).toggle();
                  }
                );
              else if ("manual" !== t) {
                let e =
                    t === iL
                      ? this.constructor.eventName("mouseenter")
                      : this.constructor.eventName("focusin"),
                  i =
                    t === iL
                      ? this.constructor.eventName("mouseleave")
                      : this.constructor.eventName("focusout");
                N.on(this._element, e, this._config.selector, (e) => {
                  let t = this._initializeOnDelegatedTarget(e);
                  (t._activeTrigger["focusin" === e.type ? iD : iL] = !0),
                    t._enter();
                }),
                  N.on(this._element, i, this._config.selector, (e) => {
                    let t = this._initializeOnDelegatedTarget(e);
                    (t._activeTrigger["focusout" === e.type ? iD : iL] =
                      t._element.contains(e.relatedTarget)),
                      t._leave();
                  });
              }
            (this._hideModalHandler = () => {
              this._element && this.hide();
            }),
              N.on(this._element.closest(ik), iS, this._hideModalHandler);
          }
          _fixTitle() {
            let e = this._element.getAttribute("title");
            e &&
              (this._element.getAttribute("aria-label") ||
                this._element.textContent.trim() ||
                this._element.setAttribute("aria-label", e),
              this._element.setAttribute("data-bs-original-title", e),
              this._element.removeAttribute("title"));
          }
          _enter() {
            this._isShown() || this._isHovered
              ? (this._isHovered = !0)
              : ((this._isHovered = !0),
                this._setTimeout(() => {
                  this._isHovered && this.show();
                }, this._config.delay.show));
          }
          _leave() {
            this._isWithActiveTrigger() ||
              ((this._isHovered = !1),
              this._setTimeout(() => {
                this._isHovered || this.hide();
              }, this._config.delay.hide));
          }
          _setTimeout(e, t) {
            clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
          }
          _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
          }
          _getConfig(e) {
            let t = $.getDataAttributes(this._element);
            for (let e of Object.keys(t)) iC.has(e) && delete t[e];
            return (
              (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
              (e = this._mergeConfigObj(e)),
              (e = this._configAfterMerge(e)),
              this._typeCheckConfig(e),
              e
            );
          }
          _configAfterMerge(e) {
            return (
              (e.container =
                !1 === e.container ? document.body : o(e.container)),
              "number" == typeof e.delay &&
                (e.delay = { show: e.delay, hide: e.delay }),
              "number" == typeof e.title && (e.title = e.title.toString()),
              "number" == typeof e.content &&
                (e.content = e.content.toString()),
              e
            );
          }
          _getDelegateConfig() {
            let e = {};
            for (let [t, i] of Object.entries(this._config))
              this.constructor.Default[t] !== i && (e[t] = i);
            return (e.selector = !1), (e.trigger = "manual"), e;
          }
          _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null)),
              this.tip && (this.tip.remove(), (this.tip = null));
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = iM.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                t[e]();
              }
            });
          }
        }
        m(iM);
        let ij = {
            ...iM.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template:
              '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click",
          },
          i$ = { ...iM.DefaultType, content: "(null|string|element|function)" };
        class iF extends iM {
          static get Default() {
            return ij;
          }
          static get DefaultType() {
            return i$;
          }
          static get NAME() {
            return "popover";
          }
          _isWithContent() {
            return this._getTitle() || this._getContent();
          }
          _getContentForTemplate() {
            return {
              ".popover-header": this._getTitle(),
              ".popover-body": this._getContent(),
            };
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content);
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = iF.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                t[e]();
              }
            });
          }
        }
        m(iF);
        let iH = "click.bs.scrollspy",
          iW = "active",
          iz = "[href]",
          iB = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [0.1, 0.5, 1],
          },
          iR = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array",
          };
        class iq extends H {
          constructor(e, t) {
            super(e, t),
              (this._targetLinks = new Map()),
              (this._observableSections = new Map()),
              (this._rootElement =
                "visible" === getComputedStyle(this._element).overflowY
                  ? null
                  : this._element),
              (this._activeTarget = null),
              (this._observer = null),
              (this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0,
              }),
              this.refresh();
          }
          static get Default() {
            return iB;
          }
          static get DefaultType() {
            return iR;
          }
          static get NAME() {
            return "scrollspy";
          }
          refresh() {
            for (let e of (this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
              ? this._observer.disconnect()
              : (this._observer = this._getNewObserver()),
            this._observableSections.values()))
              this._observer.observe(e);
          }
          dispose() {
            this._observer.disconnect(), super.dispose();
          }
          _configAfterMerge(e) {
            return (
              (e.target = o(e.target) || document.body),
              (e.rootMargin = e.offset
                ? `${e.offset}px 0px -30%`
                : e.rootMargin),
              "string" == typeof e.threshold &&
                (e.threshold = e.threshold
                  .split(",")
                  .map((e) => Number.parseFloat(e))),
              e
            );
          }
          _maybeEnableSmoothScroll() {
            this._config.smoothScroll &&
              (N.off(this._config.target, iH),
              N.on(this._config.target, iH, iz, (e) => {
                let t = this._observableSections.get(e.target.hash);
                if (t) {
                  e.preventDefault();
                  let i = this._rootElement || window,
                    n = t.offsetTop - this._element.offsetTop;
                  if (i.scrollTo)
                    return void i.scrollTo({ top: n, behavior: "smooth" });
                  i.scrollTop = n;
                }
              }));
          }
          _getNewObserver() {
            let e = {
              root: this._rootElement,
              threshold: this._config.threshold,
              rootMargin: this._config.rootMargin,
            };
            return new IntersectionObserver(
              (e) => this._observerCallback(e),
              e
            );
          }
          _observerCallback(e) {
            let t = (e) => this._targetLinks.get(`#${e.target.id}`),
              i = (e) => {
                (this._previousScrollData.visibleEntryTop = e.target.offsetTop),
                  this._process(t(e));
              },
              n = (this._rootElement || document.documentElement).scrollTop,
              s = n >= this._previousScrollData.parentScrollTop;
            for (let r of ((this._previousScrollData.parentScrollTop = n), e)) {
              if (!r.isIntersecting) {
                (this._activeTarget = null), this._clearActiveClass(t(r));
                continue;
              }
              let e =
                r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
              if (s && e) {
                if ((i(r), !n)) return;
              } else s || e || i(r);
            }
          }
          _initializeTargetsAndObservables() {
            (this._targetLinks = new Map()),
              (this._observableSections = new Map());
            let e = z.find(iz, this._config.target);
            for (let t of e) {
              if (!t.hash || l(t)) continue;
              let e = z.findOne(t.hash, this._element);
              a(e) &&
                (this._targetLinks.set(t.hash, t),
                this._observableSections.set(t.hash, e));
            }
          }
          _process(e) {
            this._activeTarget !== e &&
              (this._clearActiveClass(this._config.target),
              (this._activeTarget = e),
              e.classList.add(iW),
              this._activateParents(e),
              N.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: e,
              }));
          }
          _activateParents(e) {
            if (e.classList.contains("dropdown-item"))
              z.findOne(
                ".dropdown-toggle",
                e.closest(".dropdown")
              ).classList.add(iW);
            else
              for (let t of z.parents(e, ".nav, .list-group"))
                for (let e of z.prev(
                  t,
                  ".nav-link, .nav-item > .nav-link, .list-group-item"
                ))
                  e.classList.add(iW);
          }
          _clearActiveClass(e) {
            e.classList.remove(iW);
            let t = z.find("[href].active", e);
            for (let e of t) e.classList.remove(iW);
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = iq.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                  throw TypeError(`No method named "${e}"`);
                t[e]();
              }
            });
          }
        }
        N.on(window, "load.bs.scrollspy.data-api", () => {
          for (let e of z.find('[data-bs-spy="scroll"]'))
            iq.getOrCreateInstance(e);
        }),
          m(iq);
        let iV = "ArrowRight",
          iK = "ArrowDown",
          iQ = "active",
          iX = "fade",
          iY = "show",
          iU =
            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
          iJ = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${iU}`;
        class iG extends H {
          constructor(e) {
            super(e),
              (this._parent = this._element.closest(
                '.list-group, .nav, [role="tablist"]'
              )),
              this._parent &&
                (this._setInitialAttributes(this._parent, this._getChildren()),
                N.on(this._element, "keydown.bs.tab", (e) => this._keydown(e)));
          }
          static get NAME() {
            return "tab";
          }
          show() {
            let e = this._element;
            if (this._elemIsActive(e)) return;
            let t = this._getActiveElem(),
              i = t ? N.trigger(t, "hide.bs.tab", { relatedTarget: e }) : null;
            N.trigger(e, "show.bs.tab", { relatedTarget: t })
              .defaultPrevented ||
              (i && i.defaultPrevented) ||
              (this._deactivate(t, e), this._activate(e, t));
          }
          _activate(e, t) {
            e &&
              (e.classList.add(iQ),
              this._activate(z.getElementFromSelector(e)),
              this._queueCallback(
                () => {
                  "tab" === e.getAttribute("role")
                    ? (e.removeAttribute("tabindex"),
                      e.setAttribute("aria-selected", !0),
                      this._toggleDropDown(e, !0),
                      N.trigger(e, "shown.bs.tab", { relatedTarget: t }))
                    : e.classList.add(iY);
                },
                e,
                e.classList.contains(iX)
              ));
          }
          _deactivate(e, t) {
            e &&
              (e.classList.remove(iQ),
              e.blur(),
              this._deactivate(z.getElementFromSelector(e)),
              this._queueCallback(
                () => {
                  "tab" === e.getAttribute("role")
                    ? (e.setAttribute("aria-selected", !1),
                      e.setAttribute("tabindex", "-1"),
                      this._toggleDropDown(e, !1),
                      N.trigger(e, "hidden.bs.tab", { relatedTarget: t }))
                    : e.classList.remove(iY);
                },
                e,
                e.classList.contains(iX)
              ));
          }
          _keydown(e) {
            if (!["ArrowLeft", iV, "ArrowUp", iK].includes(e.key)) return;
            e.stopPropagation(), e.preventDefault();
            let t = [iV, iK].includes(e.key),
              i = b(
                this._getChildren().filter((e) => !l(e)),
                e.target,
                t,
                !0
              );
            i &&
              (i.focus({ preventScroll: !0 }),
              iG.getOrCreateInstance(i).show());
          }
          _getChildren() {
            return z.find(iJ, this._parent);
          }
          _getActiveElem() {
            return (
              this._getChildren().find((e) => this._elemIsActive(e)) || null
            );
          }
          _setInitialAttributes(e, t) {
            for (let i of (this._setAttributeIfNotExists(e, "role", "tablist"),
            t))
              this._setInitialAttributesOnChild(i);
          }
          _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            let t = this._elemIsActive(e),
              i = this._getOuterElement(e);
            e.setAttribute("aria-selected", t),
              i !== e &&
                this._setAttributeIfNotExists(i, "role", "presentation"),
              t || e.setAttribute("tabindex", "-1"),
              this._setAttributeIfNotExists(e, "role", "tab"),
              this._setInitialAttributesOnTargetPanel(e);
          }
          _setInitialAttributesOnTargetPanel(e) {
            let t = z.getElementFromSelector(e);
            t &&
              (this._setAttributeIfNotExists(t, "role", "tabpanel"),
              e.id &&
                this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
          }
          _toggleDropDown(e, t) {
            let i = this._getOuterElement(e);
            if (!i.classList.contains("dropdown")) return;
            let n = (e, n) => {
              let s = z.findOne(e, i);
              s && s.classList.toggle(n, t);
            };
            n(".dropdown-toggle", iQ),
              n(".dropdown-menu", iY),
              i.setAttribute("aria-expanded", t);
          }
          _setAttributeIfNotExists(e, t, i) {
            e.hasAttribute(t) || e.setAttribute(t, i);
          }
          _elemIsActive(e) {
            return e.classList.contains(iQ);
          }
          _getInnerElement(e) {
            return e.matches(iJ) ? e : z.findOne(iJ, e);
          }
          _getOuterElement(e) {
            return e.closest(".nav-item, .list-group-item") || e;
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = iG.getOrCreateInstance(this);
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                  throw TypeError(`No method named "${e}"`);
                t[e]();
              }
            });
          }
        }
        N.on(document, "click.bs.tab", iU, function (e) {
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            l(this) || iG.getOrCreateInstance(this).show();
        }),
          N.on(window, "load.bs.tab", () => {
            for (let e of z.find(
              '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
            ))
              iG.getOrCreateInstance(e);
          }),
          m(iG);
        let iZ = "hide",
          i0 = "show",
          i1 = "showing",
          i2 = { animation: "boolean", autohide: "boolean", delay: "number" },
          i3 = { animation: !0, autohide: !0, delay: 5e3 };
        class i6 extends H {
          constructor(e, t) {
            super(e, t),
              (this._timeout = null),
              (this._hasMouseInteraction = !1),
              (this._hasKeyboardInteraction = !1),
              this._setListeners();
          }
          static get Default() {
            return i3;
          }
          static get DefaultType() {
            return i2;
          }
          static get NAME() {
            return "toast";
          }
          show() {
            N.trigger(this._element, "show.bs.toast").defaultPrevented ||
              (this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade"),
              this._element.classList.remove(iZ),
              d(this._element),
              this._element.classList.add(i0, i1),
              this._queueCallback(
                () => {
                  this._element.classList.remove(i1),
                    N.trigger(this._element, "shown.bs.toast"),
                    this._maybeScheduleHide();
                },
                this._element,
                this._config.animation
              ));
          }
          hide() {
            this.isShown() &&
              (N.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                (this._element.classList.add(i1),
                this._queueCallback(
                  () => {
                    this._element.classList.add(iZ),
                      this._element.classList.remove(i1, i0),
                      N.trigger(this._element, "hidden.bs.toast");
                  },
                  this._element,
                  this._config.animation
                )));
          }
          dispose() {
            this._clearTimeout(),
              this.isShown() && this._element.classList.remove(i0),
              super.dispose();
          }
          isShown() {
            return this._element.classList.contains(i0);
          }
          _maybeScheduleHide() {
            this._config.autohide &&
              (this._hasMouseInteraction ||
                this._hasKeyboardInteraction ||
                (this._timeout = setTimeout(() => {
                  this.hide();
                }, this._config.delay)));
          }
          _onInteraction(e, t) {
            switch (e.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = t;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = t;
            }
            if (t) return void this._clearTimeout();
            let i = e.relatedTarget;
            this._element === i ||
              this._element.contains(i) ||
              this._maybeScheduleHide();
          }
          _setListeners() {
            N.on(this._element, "mouseover.bs.toast", (e) =>
              this._onInteraction(e, !0)
            ),
              N.on(this._element, "mouseout.bs.toast", (e) =>
                this._onInteraction(e, !1)
              ),
              N.on(this._element, "focusin.bs.toast", (e) =>
                this._onInteraction(e, !0)
              ),
              N.on(this._element, "focusout.bs.toast", (e) =>
                this._onInteraction(e, !1)
              );
          }
          _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
          }
          static jQueryInterface(e) {
            return this.each(function () {
              let t = i6.getOrCreateInstance(this, e);
              if ("string" == typeof e) {
                if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                t[e](this);
              }
            });
          }
        }
        return (
          B(i6),
          m(i6),
          {
            Alert: R,
            Button: V,
            Carousel: er,
            Collapse: eu,
            Dropdown: tq,
            Modal: ir,
            Offcanvas: im,
            Popover: iF,
            ScrollSpy: iq,
            Tab: iG,
            Toast: i6,
            Tooltip: iM,
          }
        );
      })();
    },
    68709: function (e, t, i) {
      "use strict";
      i.d(t, {
        F: function () {
          return c;
        },
        f: function () {
          return h;
        },
      });
      var n = i(86006);
      let s = ["light", "dark"],
        r = "(prefers-color-scheme: dark)",
        o = "undefined" == typeof window,
        a = (0, n.createContext)(void 0),
        l = { setTheme: (e) => {}, themes: [] },
        c = () => {
          var e;
          return null !== (e = (0, n.useContext)(a)) && void 0 !== e ? e : l;
        },
        h = (e) =>
          (0, n.useContext)(a)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(u, e),
        d = ["light", "dark"],
        u = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: i = !0,
          enableColorScheme: o = !0,
          storageKey: l = "theme",
          themes: c = d,
          defaultTheme: h = i ? "system" : "light",
          attribute: u = "data-theme",
          value: _,
          children: b,
          nonce: v,
        }) => {
          let [y, w] = (0, n.useState)(() => p(l, h)),
            [E, A] = (0, n.useState)(() => p(l)),
            T = _ ? Object.values(_) : c,
            C = (0, n.useCallback)((e) => {
              let n = e;
              if (!n) return;
              "system" === e && i && (n = g());
              let r = _ ? _[n] : n,
                a = t ? m() : null,
                l = document.documentElement;
              if (
                ("class" === u
                  ? (l.classList.remove(...T), r && l.classList.add(r))
                  : r
                  ? l.setAttribute(u, r)
                  : l.removeAttribute(u),
                o)
              ) {
                let e = s.includes(h) ? h : null,
                  t = s.includes(n) ? n : e;
                l.style.colorScheme = t;
              }
              null == a || a();
            }, []),
            O = (0, n.useCallback)(
              (e) => {
                w(e);
                try {
                  localStorage.setItem(l, e);
                } catch (e) {}
              },
              [e]
            ),
            x = (0, n.useCallback)(
              (t) => {
                let n = g(t);
                A(n), "system" === y && i && !e && C("system");
              },
              [y, e]
            );
          (0, n.useEffect)(() => {
            let e = window.matchMedia(r);
            return e.addListener(x), x(e), () => e.removeListener(x);
          }, [x]),
            (0, n.useEffect)(() => {
              let e = (e) => {
                e.key === l && O(e.newValue || h);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [O]),
            (0, n.useEffect)(() => {
              C(null != e ? e : y);
            }, [e, y]);
          let k = (0, n.useMemo)(
            () => ({
              theme: y,
              setTheme: O,
              forcedTheme: e,
              resolvedTheme: "system" === y ? E : y,
              themes: i ? [...c, "system"] : c,
              systemTheme: i ? E : void 0,
            }),
            [y, O, e, E, i, c]
          );
          return n.createElement(
            a.Provider,
            { value: k },
            n.createElement(f, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: i,
              enableColorScheme: o,
              storageKey: l,
              themes: c,
              defaultTheme: h,
              attribute: u,
              value: _,
              children: b,
              attrs: T,
              nonce: v,
            }),
            b
          );
        },
        f = (0, n.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: i,
            enableSystem: o,
            enableColorScheme: a,
            defaultTheme: l,
            value: c,
            attrs: h,
            nonce: d,
          }) => {
            let u = "system" === l,
              f =
                "class" === i
                  ? `var d=document.documentElement,c=d.classList;c.remove(${h
                      .map((e) => `'${e}'`)
                      .join(",")});`
                  : `var d=document.documentElement,n='${i}',s='setAttribute';`,
              p = a
                ? s.includes(l) && l
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              m = (e, t = !1, n = !0) => {
                let r = c ? c[e] : e,
                  o = t ? e + "|| ''" : `'${r}'`,
                  l = "";
                return (
                  a &&
                    n &&
                    !t &&
                    s.includes(e) &&
                    (l += `d.style.colorScheme = '${e}';`),
                  "class" === i
                    ? (l += t || r ? `c.add(${o})` : "null")
                    : r && (l += `d[s](n,${o})`),
                  l
                );
              },
              g = e
                ? `!function(){${f}${m(e)}}()`
                : o
                ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${r}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m(
                    "dark"
                  )}}else{${m("light")}}}else if(e){${
                    c ? `var x=${JSON.stringify(c)};` : ""
                  }${m(c ? "x[e]" : "e", !0)}}${
                    u ? "" : "else{" + m(l, !1, !1) + "}"
                  }${p}}catch(e){}}()`
                : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${
                    c ? `var x=${JSON.stringify(c)};` : ""
                  }${m(c ? "x[e]" : "e", !0)}}else{${m(
                    l,
                    !1,
                    !1
                  )};}${p}}catch(t){}}();`;
            return n.createElement("script", {
              nonce: d,
              dangerouslySetInnerHTML: { __html: g },
            });
          },
          () => !0
        ),
        p = (e, t) => {
          let i;
          if (!o) {
            try {
              i = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return i || t;
          }
        },
        m = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        g = (e) => (
          e || (e = window.matchMedia(r)), e.matches ? "dark" : "light"
        );
    },
    51973: function () {},
    85349: function () {},
    76394: function (e, t, i) {
      e.exports = i(72011);
    },
    35846: function (e, t, i) {
      e.exports = i(90414);
    },
    56008: function (e, t, i) {
      e.exports = i(60167);
    },
  },
]);
