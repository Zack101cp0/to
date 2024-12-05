"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4976],
  {
    83177: function (e, t, n) {
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(86006),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
      function s(e, t, n) {
        var r,
          i = {},
          s = null,
          c = null;
        for (r in (void 0 !== n && (s = "" + n),
        void 0 !== t.key && (s = "" + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          l.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: c,
          props: i,
          _owner: a.current,
        };
      }
      (t.Fragment = i), (t.jsx = s), (t.jsxs = s);
    },
    9268: function (e, t, n) {
      e.exports = n(83177);
    },
    95083: function (e, t, n) {
      n.d(t, {
        R: function () {
          return ei;
        },
      });
      var r,
        o,
        i,
        l,
        a,
        u,
        s,
        c,
        d,
        f,
        p,
        v,
        m,
        b = n(86006),
        h = n(48807),
        g = n(60961),
        x = n(11405),
        E = n(30028);
      let y =
        null != (m = b.useId)
          ? m
          : function () {
              let e = (0, x.H)(),
                [t, n] = b.useState(e ? () => E.O.nextId() : null);
              return (
                (0, g.e)(() => {
                  null === t && n(E.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
      var O = n(1485);
      function S(e, t) {
        let [n, r] = (0, b.useState)(e),
          o = (0, O.E)(e);
        return (0, g.e)(() => r(o.current), [o, r, ...t]), n;
      }
      var R = n(68496),
        w = n(42810),
        T = n(59325),
        L = n(42145),
        P =
          (((r = P || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r),
        I =
          (((o = I || {})[(o.First = 0)] = "First"),
          (o[(o.Previous = 1)] = "Previous"),
          (o[(o.Next = 2)] = "Next"),
          (o[(o.Last = 3)] = "Last"),
          (o[(o.Specific = 4)] = "Specific"),
          (o[(o.Nothing = 5)] = "Nothing"),
          o);
      function C(e) {
        return E.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
      let F = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var N =
          (((i = N || {})[(i.First = 1)] = "First"),
          (i[(i.Previous = 2)] = "Previous"),
          (i[(i.Next = 4)] = "Next"),
          (i[(i.Last = 8)] = "Last"),
          (i[(i.WrapAround = 16)] = "WrapAround"),
          (i[(i.NoScroll = 32)] = "NoScroll"),
          i),
        k =
          (((l = k || {})[(l.Error = 0)] = "Error"),
          (l[(l.Overflow = 1)] = "Overflow"),
          (l[(l.Success = 2)] = "Success"),
          (l[(l.Underflow = 3)] = "Underflow"),
          l),
        A =
          (((a = A || {})[(a.Previous = -1)] = "Previous"),
          (a[(a.Next = 1)] = "Next"),
          a),
        D =
          (((u = D || {})[(u.Strict = 0)] = "Strict"),
          (u[(u.Loose = 1)] = "Loose"),
          u);
      function M(e, t = 0) {
        var n;
        return (
          e !== (null == (n = C(e)) ? void 0 : n.body) &&
          (0, T.E)(t, {
            0: () => e.matches(F),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(F)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      var z =
        (((s = z || {})[(s.Keyboard = 0)] = "Keyboard"),
        (s[(s.Mouse = 1)] = "Mouse"),
        s);
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
      var j = n(10546);
      function H(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      function _(e, t, n) {
        let r = (0, O.E)(t);
        (0, b.useEffect)(() => {
          function t(e) {
            r.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      var U =
        (((c = U || {})[(c.None = 1)] = "None"),
        (c[(c.Focusable = 2)] = "Focusable"),
        (c[(c.Hidden = 4)] = "Hidden"),
        c);
      let V = (0, w.yV)(function (e, t) {
        let { features: n = 1, ...r } = e,
          o = {
            ref: t,
            "aria-hidden": (2 & n) == 2 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & n) == 4 && (2 & n) != 2 && { display: "none" }),
            },
          };
        return (0,
        w.sY)({ ourProps: o, theirProps: r, slot: {}, defaultTag: "div", name: "Hidden" });
      });
      function $(e, t) {
        return e ? e + "[" + t + "]" : t;
      }
      var Z = n(3562);
      function Y(e) {
        return [e.screenX, e.screenY];
      }
      var B =
          (((d = B || {})[(d.Open = 0)] = "Open"),
          (d[(d.Closed = 1)] = "Closed"),
          d),
        G =
          (((f = G || {})[(f.Single = 0)] = "Single"),
          (f[(f.Multi = 1)] = "Multi"),
          f),
        Q =
          (((p = Q || {})[(p.Pointer = 0)] = "Pointer"),
          (p[(p.Other = 1)] = "Other"),
          p),
        q =
          (((v = q || {})[(v.OpenListbox = 0)] = "OpenListbox"),
          (v[(v.CloseListbox = 1)] = "CloseListbox"),
          (v[(v.GoToOption = 2)] = "GoToOption"),
          (v[(v.Search = 3)] = "Search"),
          (v[(v.ClearSearch = 4)] = "ClearSearch"),
          (v[(v.RegisterOption = 5)] = "RegisterOption"),
          (v[(v.UnregisterOption = 6)] = "UnregisterOption"),
          (v[(v.RegisterLabel = 7)] = "RegisterLabel"),
          v);
      function K(e, t = (e) => e) {
        let n =
            null !== e.activeOptionIndex
              ? e.options[e.activeOptionIndex]
              : null,
          r = (function (e, t = (e) => e) {
            return e.slice().sort((e, n) => {
              let r = t(e),
                o = t(n);
              if (null === r || null === o) return 0;
              let i = r.compareDocumentPosition(o);
              return i & Node.DOCUMENT_POSITION_FOLLOWING
                ? -1
                : i & Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : 0;
            });
          })(t(e.options.slice()), (e) => e.dataRef.current.domRef.current),
          o = n ? r.indexOf(n) : null;
        return -1 === o && (o = null), { options: r, activeOptionIndex: o };
      }
      let W = {
          1: (e) =>
            e.dataRef.current.disabled || 1 === e.listboxState
              ? e
              : { ...e, activeOptionIndex: null, listboxState: 1 },
          0(e) {
            if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
            let t = e.activeOptionIndex,
              { isSelected: n } = e.dataRef.current,
              r = e.options.findIndex((e) => n(e.dataRef.current.value));
            return (
              -1 !== r && (t = r),
              { ...e, listboxState: 0, activeOptionIndex: t }
            );
          },
          2(e, t) {
            var n;
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let r = K(e),
              o = (function (e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let r = t.resolveActiveIndex(),
                  o = null != r ? r : -1,
                  i = (() => {
                    switch (e.focus) {
                      case 0:
                        return n.findIndex((e) => !t.resolveDisabled(e));
                      case 1: {
                        let e = n
                          .slice()
                          .reverse()
                          .findIndex(
                            (e, n, r) =>
                              (-1 === o || !(r.length - n - 1 >= o)) &&
                              !t.resolveDisabled(e)
                          );
                        return -1 === e ? e : n.length - 1 - e;
                      }
                      case 2:
                        return n.findIndex(
                          (e, n) => !(n <= o) && !t.resolveDisabled(e)
                        );
                      case 3: {
                        let e = n
                          .slice()
                          .reverse()
                          .findIndex((e) => !t.resolveDisabled(e));
                        return -1 === e ? e : n.length - 1 - e;
                      }
                      case 4:
                        return n.findIndex((n) => t.resolveId(n) === e.id);
                      case 5:
                        return null;
                      default:
                        !(function (e) {
                          throw Error("Unexpected object: " + e);
                        })(e);
                    }
                  })();
                return -1 === i ? r : i;
              })(t, {
                resolveItems: () => r.options,
                resolveActiveIndex: () => r.activeOptionIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...r,
              searchQuery: "",
              activeOptionIndex: o,
              activationTrigger: null != (n = t.trigger) ? n : 1,
            };
          },
          3: (e, t) => {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let n = "" !== e.searchQuery ? 0 : 1,
              r = e.searchQuery + t.value.toLowerCase(),
              o = (
                null !== e.activeOptionIndex
                  ? e.options
                      .slice(e.activeOptionIndex + n)
                      .concat(e.options.slice(0, e.activeOptionIndex + n))
                  : e.options
              ).find((e) => {
                var t;
                return (
                  !e.dataRef.current.disabled &&
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r))
                );
              }),
              i = o ? e.options.indexOf(o) : -1;
            return -1 === i || i === e.activeOptionIndex
              ? { ...e, searchQuery: r }
              : {
                  ...e,
                  searchQuery: r,
                  activeOptionIndex: i,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            e.dataRef.current.disabled ||
            1 === e.listboxState ||
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "" },
          5: (e, t) => {
            let n = { id: t.id, dataRef: t.dataRef },
              r = K(e, (e) => [...e, n]);
            return (
              null === e.activeOptionIndex &&
                e.dataRef.current.isSelected(t.dataRef.current.value) &&
                (r.activeOptionIndex = r.options.indexOf(n)),
              { ...e, ...r }
            );
          },
          6: (e, t) => {
            let n = K(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return -1 !== n && e.splice(n, 1), e;
            });
            return { ...e, ...n, activationTrigger: 1 };
          },
          7: (e, t) => ({ ...e, labelId: t.id }),
        },
        J = (0, b.createContext)(null);
      function X(e) {
        let t = (0, b.useContext)(J);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, X), t);
        }
        return t;
      }
      J.displayName = "ListboxActionsContext";
      let ee = (0, b.createContext)(null);
      function et(e) {
        let t = (0, b.useContext)(ee);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, et), t);
        }
        return t;
      }
      function en(e, t) {
        return (0, T.E)(t.type, W, e, t);
      }
      ee.displayName = "ListboxDataContext";
      let er = b.Fragment,
        eo = w.AN.RenderStrategy | w.AN.Static,
        ei = Object.assign(
          (0, w.yV)(function (e, t) {
            let {
                value: n,
                defaultValue: r,
                form: o,
                name: i,
                onChange: l,
                by: a = (e, t) => e === t,
                disabled: u = !1,
                horizontal: s = !1,
                multiple: c = !1,
                ...d
              } = e,
              f = s ? "horizontal" : "vertical",
              p = (0, R.T)(t),
              [v = c ? [] : void 0, m] = (function (e, t, n) {
                let [r, o] = (0, b.useState)(n),
                  i = void 0 !== e,
                  l = (0, b.useRef)(i),
                  a = (0, b.useRef)(!1),
                  u = (0, b.useRef)(!1);
                return (
                  !i || l.current || a.current
                    ? i ||
                      !l.current ||
                      u.current ||
                      ((u.current = !0),
                      (l.current = i),
                      console.error(
                        "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
                      ))
                    : ((a.current = !0),
                      (l.current = i),
                      console.error(
                        "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
                      )),
                  [
                    i ? e : r,
                    (0, Z.z)((e) => (i || o(e), null == t ? void 0 : t(e))),
                  ]
                );
              })(n, l, r),
              [x, E] = (0, b.useReducer)(en, {
                dataRef: (0, b.createRef)(),
                listboxState: 1,
                options: [],
                searchQuery: "",
                labelId: null,
                activeOptionIndex: null,
                activationTrigger: 1,
              }),
              y = (0, b.useRef)({ static: !1, hold: !1 }),
              O = (0, b.useRef)(null),
              S = (0, b.useRef)(null),
              L = (0, b.useRef)(null),
              P = (0, Z.z)(
                "string" == typeof a
                  ? (e, t) =>
                      (null == e ? void 0 : e[a]) ===
                      (null == t ? void 0 : t[a])
                  : a
              ),
              C = (0, b.useCallback)(
                (e) =>
                  (0, T.E)(F.mode, {
                    1: () => v.some((t) => P(t, e)),
                    0: () => P(v, e),
                  }),
                [v]
              ),
              F = (0, b.useMemo)(
                () => ({
                  ...x,
                  value: v,
                  disabled: u,
                  mode: c ? 1 : 0,
                  orientation: f,
                  compare: P,
                  isSelected: C,
                  optionsPropsRef: y,
                  labelRef: O,
                  buttonRef: S,
                  optionsRef: L,
                }),
                [v, u, c, x]
              );
            (0, g.e)(() => {
              x.dataRef.current = F;
            }, [F]),
              (function (e, t, n = !0) {
                let r = (0, b.useRef)(!1);
                function o(n, o) {
                  if (!r.current || n.defaultPrevented) return;
                  let i = (function e(t) {
                      return "function" == typeof t
                        ? e(t())
                        : Array.isArray(t) || t instanceof Set
                        ? t
                        : [t];
                    })(e),
                    l = o(n);
                  if (null !== l && l.getRootNode().contains(l)) {
                    for (let e of i) {
                      if (null === e) continue;
                      let t = e instanceof HTMLElement ? e : e.current;
                      if (
                        (null != t && t.contains(l)) ||
                        (n.composed && n.composedPath().includes(t))
                      )
                        return;
                    }
                    return (
                      M(l, D.Loose) || -1 === l.tabIndex || n.preventDefault(),
                      t(n, l)
                    );
                  }
                }
                (0, b.useEffect)(() => {
                  requestAnimationFrame(() => {
                    r.current = n;
                  });
                }, [n]);
                let i = (0, b.useRef)(null);
                _(
                  "mousedown",
                  (e) => {
                    var t, n;
                    r.current &&
                      (i.current =
                        (null ==
                        (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                          ? void 0
                          : n[0]) || e.target);
                  },
                  !0
                ),
                  _(
                    "click",
                    (e) => {
                      i.current && (o(e, () => i.current), (i.current = null));
                    },
                    !0
                  ),
                  _(
                    "blur",
                    (e) =>
                      o(e, () =>
                        window.document.activeElement instanceof
                        HTMLIFrameElement
                          ? window.document.activeElement
                          : null
                      ),
                    !0
                  );
              })(
                [F.buttonRef, F.optionsRef],
                (e, t) => {
                  var n;
                  E({ type: 1 }),
                    M(t, D.Loose) ||
                      (e.preventDefault(),
                      null == (n = F.buttonRef.current) || n.focus());
                },
                0 === F.listboxState
              );
            let N = (0, b.useMemo)(
                () => ({ open: 0 === F.listboxState, disabled: u, value: v }),
                [F, u, v]
              ),
              k = (0, Z.z)((e) => {
                let t = F.options.find((t) => t.id === e);
                t && Q(t.dataRef.current.value);
              }),
              A = (0, Z.z)(() => {
                if (null !== F.activeOptionIndex) {
                  let { dataRef: e, id: t } = F.options[F.activeOptionIndex];
                  Q(e.current.value), E({ type: 2, focus: I.Specific, id: t });
                }
              }),
              z = (0, Z.z)(() => E({ type: 0 })),
              H = (0, Z.z)(() => E({ type: 1 })),
              Y = (0, Z.z)((e, t, n) =>
                e === I.Specific
                  ? E({ type: 2, focus: I.Specific, id: t, trigger: n })
                  : E({ type: 2, focus: e, trigger: n })
              ),
              B = (0, Z.z)(
                (e, t) => (
                  E({ type: 5, id: e, dataRef: t }), () => E({ type: 6, id: e })
                )
              ),
              G = (0, Z.z)(
                (e) => (E({ type: 7, id: e }), () => E({ type: 7, id: null }))
              ),
              Q = (0, Z.z)((e) =>
                (0, T.E)(F.mode, {
                  0: () => (null == m ? void 0 : m(e)),
                  1() {
                    let t = F.value.slice(),
                      n = t.findIndex((t) => P(t, e));
                    return (
                      -1 === n ? t.push(e) : t.splice(n, 1),
                      null == m ? void 0 : m(t)
                    );
                  },
                })
              ),
              q = (0, Z.z)((e) => E({ type: 3, value: e })),
              K = (0, Z.z)(() => E({ type: 4 })),
              W = (0, b.useMemo)(
                () => ({
                  onChange: Q,
                  registerOption: B,
                  registerLabel: G,
                  goToOption: Y,
                  closeListbox: H,
                  openListbox: z,
                  selectActiveOption: A,
                  selectOption: k,
                  search: q,
                  clearSearch: K,
                }),
                []
              ),
              X = (0, b.useRef)(null),
              et = (0, h.G)();
            return (
              (0, b.useEffect)(() => {
                X.current &&
                  void 0 !== r &&
                  et.addEventListener(X.current, "reset", () => {
                    Q(r);
                  });
              }, [X, Q]),
              b.createElement(
                J.Provider,
                { value: W },
                b.createElement(
                  ee.Provider,
                  { value: F },
                  b.createElement(
                    j.up,
                    {
                      value: (0, T.E)(F.listboxState, {
                        0: j.ZM.Open,
                        1: j.ZM.Closed,
                      }),
                    },
                    null != i &&
                      null != v &&
                      (function e(t = {}, n = null, r = []) {
                        for (let [o, i] of Object.entries(t))
                          !(function t(n, r, o) {
                            if (Array.isArray(o))
                              for (let [e, i] of o.entries())
                                t(n, $(r, e.toString()), i);
                            else
                              o instanceof Date
                                ? n.push([r, o.toISOString()])
                                : "boolean" == typeof o
                                ? n.push([r, o ? "1" : "0"])
                                : "string" == typeof o
                                ? n.push([r, o])
                                : "number" == typeof o
                                ? n.push([r, `${o}`])
                                : null == o
                                ? n.push([r, ""])
                                : e(o, r, n);
                          })(r, $(n, o), i);
                        return r;
                      })({ [i]: v }).map(([e, t], n) =>
                        b.createElement(V, {
                          features: U.Hidden,
                          ref:
                            0 === n
                              ? (e) => {
                                  var t;
                                  X.current =
                                    null !=
                                    (t = null == e ? void 0 : e.closest("form"))
                                      ? t
                                      : null;
                                }
                              : void 0,
                          ...(0, w.oA)({
                            key: e,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            form: o,
                            name: e,
                            value: t,
                          }),
                        })
                      ),
                    (0, w.sY)({
                      ourProps: { ref: p },
                      theirProps: d,
                      slot: N,
                      defaultTag: er,
                      name: "Listbox",
                    })
                  )
                )
              )
            );
          }),
          {
            Button: (0, w.yV)(function (e, t) {
              var n;
              let r = y(),
                { id: o = `headlessui-listbox-button-${r}`, ...i } = e,
                l = et("Listbox.Button"),
                a = X("Listbox.Button"),
                u = (0, R.T)(l.buttonRef, t),
                s = (0, h.G)(),
                c = (0, Z.z)((e) => {
                  switch (e.key) {
                    case P.Space:
                    case P.Enter:
                    case P.ArrowDown:
                      e.preventDefault(),
                        a.openListbox(),
                        s.nextFrame(() => {
                          l.value || a.goToOption(I.First);
                        });
                      break;
                    case P.ArrowUp:
                      e.preventDefault(),
                        a.openListbox(),
                        s.nextFrame(() => {
                          l.value || a.goToOption(I.Last);
                        });
                  }
                }),
                d = (0, Z.z)((e) => {
                  e.key === P.Space && e.preventDefault();
                }),
                f = (0, Z.z)((e) => {
                  if (
                    (function (e) {
                      let t = e.parentElement,
                        n = null;
                      for (; t && !(t instanceof HTMLFieldSetElement); )
                        t instanceof HTMLLegendElement && (n = t),
                          (t = t.parentElement);
                      let r =
                        (null == t ? void 0 : t.getAttribute("disabled")) ===
                        "";
                      return (
                        !(
                          r &&
                          (function (e) {
                            if (!e) return !1;
                            let t = e.previousElementSibling;
                            for (; null !== t; ) {
                              if (t instanceof HTMLLegendElement) return !1;
                              t = t.previousElementSibling;
                            }
                            return !0;
                          })(n)
                        ) && r
                      );
                    })(e.currentTarget)
                  )
                    return e.preventDefault();
                  0 === l.listboxState
                    ? (a.closeListbox(),
                      s.nextFrame(() => {
                        var e;
                        return null == (e = l.buttonRef.current)
                          ? void 0
                          : e.focus({ preventScroll: !0 });
                      }))
                    : (e.preventDefault(), a.openListbox());
                }),
                p = S(() => {
                  if (l.labelId) return [l.labelId, o].join(" ");
                }, [l.labelId, o]),
                v = (0, b.useMemo)(
                  () => ({
                    open: 0 === l.listboxState,
                    disabled: l.disabled,
                    value: l.value,
                  }),
                  [l]
                ),
                m = {
                  ref: u,
                  id: o,
                  type: (function (e, t) {
                    let [n, r] = (0, b.useState)(() => H(e));
                    return (
                      (0, g.e)(() => {
                        r(H(e));
                      }, [e.type, e.as]),
                      (0, g.e)(() => {
                        n ||
                          (t.current &&
                            t.current instanceof HTMLButtonElement &&
                            !t.current.hasAttribute("type") &&
                            r("button"));
                      }, [n, t]),
                      n
                    );
                  })(e, l.buttonRef),
                  "aria-haspopup": "listbox",
                  "aria-controls":
                    null == (n = l.optionsRef.current) ? void 0 : n.id,
                  "aria-expanded": l.disabled ? void 0 : 0 === l.listboxState,
                  "aria-labelledby": p,
                  disabled: l.disabled,
                  onKeyDown: c,
                  onKeyUp: d,
                  onClick: f,
                };
              return (0,
              w.sY)({ ourProps: m, theirProps: i, slot: v, defaultTag: "button", name: "Listbox.Button" });
            }),
            Label: (0, w.yV)(function (e, t) {
              let n = y(),
                { id: r = `headlessui-listbox-label-${n}`, ...o } = e,
                i = et("Listbox.Label"),
                l = X("Listbox.Label"),
                a = (0, R.T)(i.labelRef, t);
              (0, g.e)(() => l.registerLabel(r), [r]);
              let u = (0, Z.z)(() => {
                  var e;
                  return null == (e = i.buttonRef.current)
                    ? void 0
                    : e.focus({ preventScroll: !0 });
                }),
                s = (0, b.useMemo)(
                  () => ({ open: 0 === i.listboxState, disabled: i.disabled }),
                  [i]
                );
              return (0,
              w.sY)({ ourProps: { ref: a, id: r, onClick: u }, theirProps: o, slot: s, defaultTag: "label", name: "Listbox.Label" });
            }),
            Options: (0, w.yV)(function (e, t) {
              var n;
              let r = y(),
                { id: o = `headlessui-listbox-options-${r}`, ...i } = e,
                l = et("Listbox.Options"),
                a = X("Listbox.Options"),
                u = (0, R.T)(l.optionsRef, t),
                s = (0, h.G)(),
                c = (0, h.G)(),
                d = (0, j.oJ)(),
                f =
                  null !== d
                    ? (d & j.ZM.Open) === j.ZM.Open
                    : 0 === l.listboxState;
              (0, b.useEffect)(() => {
                var e;
                let t = l.optionsRef.current;
                t &&
                  0 === l.listboxState &&
                  t !== (null == (e = C(t)) ? void 0 : e.activeElement) &&
                  t.focus({ preventScroll: !0 });
              }, [l.listboxState, l.optionsRef]);
              let p = (0, Z.z)((e) => {
                  switch ((c.dispose(), e.key)) {
                    case P.Space:
                      if ("" !== l.searchQuery)
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          a.search(e.key)
                        );
                    case P.Enter:
                      if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        null !== l.activeOptionIndex)
                      ) {
                        let { dataRef: e } = l.options[l.activeOptionIndex];
                        a.onChange(e.current.value);
                      }
                      0 === l.mode &&
                        (a.closeListbox(),
                        (0, L.k)().nextFrame(() => {
                          var e;
                          return null == (e = l.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }));
                      break;
                    case (0, T.E)(l.orientation, {
                      vertical: P.ArrowDown,
                      horizontal: P.ArrowRight,
                    }):
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        a.goToOption(I.Next)
                      );
                    case (0, T.E)(l.orientation, {
                      vertical: P.ArrowUp,
                      horizontal: P.ArrowLeft,
                    }):
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        a.goToOption(I.Previous)
                      );
                    case P.Home:
                    case P.PageUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        a.goToOption(I.First)
                      );
                    case P.End:
                    case P.PageDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        a.goToOption(I.Last)
                      );
                    case P.Escape:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        a.closeListbox(),
                        s.nextFrame(() => {
                          var e;
                          return null == (e = l.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        })
                      );
                    case P.Tab:
                      e.preventDefault(), e.stopPropagation();
                      break;
                    default:
                      1 === e.key.length &&
                        (a.search(e.key),
                        c.setTimeout(() => a.clearSearch(), 350));
                  }
                }),
                v = S(() => {
                  var e, t, n;
                  return null !=
                    (n = null == (e = l.labelRef.current) ? void 0 : e.id)
                    ? n
                    : null == (t = l.buttonRef.current)
                    ? void 0
                    : t.id;
                }, [l.labelRef.current, l.buttonRef.current]),
                m = (0, b.useMemo)(() => ({ open: 0 === l.listboxState }), [l]),
                g = {
                  "aria-activedescendant":
                    null === l.activeOptionIndex ||
                    null == (n = l.options[l.activeOptionIndex])
                      ? void 0
                      : n.id,
                  "aria-multiselectable": 1 === l.mode || void 0,
                  "aria-labelledby": v,
                  "aria-orientation": l.orientation,
                  id: o,
                  onKeyDown: p,
                  role: "listbox",
                  tabIndex: 0,
                  ref: u,
                };
              return (0,
              w.sY)({ ourProps: g, theirProps: i, slot: m, defaultTag: "ul", features: eo, visible: f, name: "Listbox.Options" });
            }),
            Option: (0, w.yV)(function (e, t) {
              let n,
                r = y(),
                {
                  id: o = `headlessui-listbox-option-${r}`,
                  disabled: i = !1,
                  value: l,
                  ...a
                } = e,
                u = et("Listbox.Option"),
                s = X("Listbox.Option"),
                c =
                  null !== u.activeOptionIndex &&
                  u.options[u.activeOptionIndex].id === o,
                d = u.isSelected(l),
                f = (0, b.useRef)(null),
                p = (0, O.E)({
                  disabled: i,
                  value: l,
                  domRef: f,
                  get textValue() {
                    var v, m;
                    return null ==
                      (m = null == (v = f.current) ? void 0 : v.textContent)
                      ? void 0
                      : m.toLowerCase();
                  },
                }),
                h = (0, R.T)(t, f);
              (0, g.e)(() => {
                if (0 !== u.listboxState || !c || 0 === u.activationTrigger)
                  return;
                let e = (0, L.k)();
                return (
                  e.requestAnimationFrame(() => {
                    var e, t;
                    null ==
                      (t =
                        null == (e = f.current) ? void 0 : e.scrollIntoView) ||
                      t.call(e, { block: "nearest" });
                  }),
                  e.dispose
                );
              }, [
                f,
                c,
                u.listboxState,
                u.activationTrigger,
                u.activeOptionIndex,
              ]),
                (0, g.e)(() => s.registerOption(o, p), [p, o]);
              let x = (0, Z.z)((e) => {
                  if (i) return e.preventDefault();
                  s.onChange(l),
                    0 === u.mode &&
                      (s.closeListbox(),
                      (0, L.k)().nextFrame(() => {
                        var e;
                        return null == (e = u.buttonRef.current)
                          ? void 0
                          : e.focus({ preventScroll: !0 });
                      }));
                }),
                E = (0, Z.z)(() => {
                  if (i) return s.goToOption(I.Nothing);
                  s.goToOption(I.Specific, o);
                }),
                S =
                  ((n = (0, b.useRef)([-1, -1])),
                  {
                    wasMoved(e) {
                      let t = Y(e);
                      return (
                        (n.current[0] !== t[0] || n.current[1] !== t[1]) &&
                        ((n.current = t), !0)
                      );
                    },
                    update(e) {
                      n.current = Y(e);
                    },
                  }),
                T = (0, Z.z)((e) => S.update(e)),
                P = (0, Z.z)((e) => {
                  S.wasMoved(e) && (i || c || s.goToOption(I.Specific, o, 0));
                }),
                C = (0, Z.z)((e) => {
                  S.wasMoved(e) && (i || (c && s.goToOption(I.Nothing)));
                }),
                F = (0, b.useMemo)(
                  () => ({ active: c, selected: d, disabled: i }),
                  [c, d, i]
                );
              return (0,
              w.sY)({ ourProps: { id: o, ref: h, role: "option", tabIndex: !0 === i ? void 0 : -1, "aria-disabled": !0 === i || void 0, "aria-selected": d, disabled: void 0, onClick: x, onFocus: E, onPointerEnter: T, onMouseEnter: T, onPointerMove: P, onMouseMove: P, onPointerLeave: C, onMouseLeave: C }, theirProps: a, slot: F, defaultTag: "li", name: "Listbox.Option" });
            }),
          }
        );
    },
    44450: function (e, t, n) {
      n.d(t, {
        u: function () {
          return N;
        },
      });
      var r,
        o = n(86006),
        i = n(42810),
        l = n(10546),
        a = n(59325),
        u = n(60961);
      function s() {
        let e = (0, o.useRef)(!1);
        return (
          (0, u.e)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var c = n(1485),
        d = n(11405),
        f = n(68496),
        p = n(42145);
      function v(e, ...t) {
        e && t.length > 0 && e.classList.add(...t);
      }
      function m(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t);
      }
      var b = n(48807),
        h = n(3562),
        g = n(34339);
      function x(e = "") {
        return e.split(" ").filter((e) => e.trim().length > 1);
      }
      let E = (0, o.createContext)(null);
      E.displayName = "TransitionContext";
      var y = (((r = y || {}).Visible = "visible"), (r.Hidden = "hidden"), r);
      let O = (0, o.createContext)(null);
      function S(e) {
        return "children" in e
          ? S(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function R(e, t) {
        let n = (0, c.E)(e),
          r = (0, o.useRef)([]),
          l = s(),
          u = (0, b.G)(),
          d = (0, h.z)((e, t = i.l4.Hidden) => {
            let o = r.current.findIndex(({ el: t }) => t === e);
            -1 !== o &&
              ((0, a.E)(t, {
                [i.l4.Unmount]() {
                  r.current.splice(o, 1);
                },
                [i.l4.Hidden]() {
                  r.current[o].state = "hidden";
                },
              }),
              u.microTask(() => {
                var e;
                !S(r) && l.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          f = (0, h.z)((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => d(e, i.l4.Unmount)
            );
          }),
          p = (0, o.useRef)([]),
          v = (0, o.useRef)(Promise.resolve()),
          m = (0, o.useRef)({ enter: [], leave: [], idle: [] }),
          g = (0, h.z)((e, n, r) => {
            p.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(
                  ([t]) => t !== e
                )),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    p.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(m.current[n].map(([e, t]) => t)).then(() =>
                      e()
                    );
                  }),
                ]),
              "enter" === n
                ? (v.current = v.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n);
          }),
          x = (0, h.z)((e, t, n) => {
            Promise.all(m.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = p.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, o.useMemo)(
          () => ({
            children: r,
            register: f,
            unregister: d,
            onStart: g,
            onStop: x,
            wait: v,
            chains: m,
          }),
          [f, d, r, g, x, m, v]
        );
      }
      function w() {}
      O.displayName = "NestingContext";
      let T = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function L(e) {
        var t;
        let n = {};
        for (let r of T) n[r] = null != (t = e[r]) ? t : w;
        return n;
      }
      let P = i.AN.RenderStrategy,
        I = (0, i.yV)(function (e, t) {
          let { show: n, appear: r = !1, unmount: a, ...s } = e,
            c = (0, o.useRef)(null),
            p = (0, f.T)(c, t);
          (0, d.H)();
          let v = (0, l.oJ)();
          if (
            (void 0 === n && null !== v && (n = (v & l.ZM.Open) === l.ZM.Open),
            ![!0, !1].includes(n))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [m, b] = (0, o.useState)(n ? "visible" : "hidden"),
            h = R(() => {
              b("hidden");
            }),
            [g, x] = (0, o.useState)(!0),
            y = (0, o.useRef)([n]);
          (0, u.e)(() => {
            !1 !== g &&
              y.current[y.current.length - 1] !== n &&
              (y.current.push(n), x(!1));
          }, [y, n]);
          let w = (0, o.useMemo)(
            () => ({ show: n, appear: r, initial: g }),
            [n, r, g]
          );
          (0, o.useEffect)(() => {
            if (n) b("visible");
            else if (S(h)) {
              let e = c.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                b("hidden");
            } else b("hidden");
          }, [n, h]);
          let T = { unmount: a };
          return o.createElement(
            O.Provider,
            { value: h },
            o.createElement(
              E.Provider,
              { value: w },
              (0, i.sY)({
                ourProps: {
                  ...T,
                  as: o.Fragment,
                  children: o.createElement(C, { ref: p, ...T, ...s }),
                },
                theirProps: {},
                defaultTag: o.Fragment,
                features: P,
                visible: "visible" === m,
                name: "Transition",
              })
            )
          );
        }),
        C = (0, i.yV)(function (e, t) {
          var n;
          let r,
            {
              beforeEnter: y,
              afterEnter: w,
              beforeLeave: T,
              afterLeave: I,
              enter: C,
              enterFrom: F,
              enterTo: N,
              entered: k,
              leave: A,
              leaveFrom: D,
              leaveTo: M,
              ...z
            } = e,
            j = (0, o.useRef)(null),
            H = (0, f.T)(j, t),
            _ = z.unmount ? i.l4.Unmount : i.l4.Hidden,
            {
              show: U,
              appear: V,
              initial: $,
            } = (function () {
              let e = (0, o.useContext)(E);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [Z, Y] = (0, o.useState)(U ? "visible" : "hidden"),
            B = (function () {
              let e = (0, o.useContext)(O);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: G, unregister: Q } = B,
            q = (0, o.useRef)(null);
          (0, o.useEffect)(() => G(j), [G, j]),
            (0, o.useEffect)(() => {
              if (_ === i.l4.Hidden && j.current) {
                if (U && "visible" !== Z) {
                  Y("visible");
                  return;
                }
                return (0, a.E)(Z, { hidden: () => Q(j), visible: () => G(j) });
              }
            }, [Z, j, G, Q, U, _]);
          let K = (0, c.E)({
              enter: x(C),
              enterFrom: x(F),
              enterTo: x(N),
              entered: x(k),
              leave: x(A),
              leaveFrom: x(D),
              leaveTo: x(M),
            }),
            W =
              ((n = {
                beforeEnter: y,
                afterEnter: w,
                beforeLeave: T,
                afterLeave: I,
              }),
              (r = (0, o.useRef)(L(n))),
              (0, o.useEffect)(() => {
                r.current = L(n);
              }, [n]),
              r),
            J = (0, d.H)();
          (0, o.useEffect)(() => {
            if (J && "visible" === Z && null === j.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [j, Z, J]);
          let X = $ && !V,
            ee = !J || X || q.current === U ? "idle" : U ? "enter" : "leave",
            et = (function (e = 0) {
              let [t, n] = (0, o.useState)(e),
                r = s(),
                i = (0, o.useCallback)(
                  (e) => {
                    r.current && n((t) => t | e);
                  },
                  [t, r]
                ),
                l = (0, o.useCallback)((e) => !!(t & e), [t]);
              return {
                flags: t,
                addFlag: i,
                hasFlag: l,
                removeFlag: (0, o.useCallback)(
                  (e) => {
                    r.current && n((t) => t & ~e);
                  },
                  [n, r]
                ),
                toggleFlag: (0, o.useCallback)(
                  (e) => {
                    r.current && n((t) => t ^ e);
                  },
                  [n]
                ),
              };
            })(0),
            en = (0, h.z)((e) =>
              (0, a.E)(e, {
                enter: () => {
                  et.addFlag(l.ZM.Opening), W.current.beforeEnter();
                },
                leave: () => {
                  et.addFlag(l.ZM.Closing), W.current.beforeLeave();
                },
                idle: () => {},
              })
            ),
            er = (0, h.z)((e) =>
              (0, a.E)(e, {
                enter: () => {
                  et.removeFlag(l.ZM.Opening), W.current.afterEnter();
                },
                leave: () => {
                  et.removeFlag(l.ZM.Closing), W.current.afterLeave();
                },
                idle: () => {},
              })
            ),
            eo = R(() => {
              Y("hidden"), Q(j);
            }, B);
          (function ({
            container: e,
            direction: t,
            classes: n,
            onStart: r,
            onStop: o,
          }) {
            let i = s(),
              l = (0, b.G)(),
              d = (0, c.E)(t);
            (0, u.e)(() => {
              let t = (0, p.k)();
              l.add(t.dispose);
              let u = e.current;
              if (u && "idle" !== d.current && i.current) {
                var s, c, f, b;
                let e, i, l, h, g, x, E;
                return (
                  t.dispose(),
                  r.current(d.current),
                  t.add(
                    ((s = u),
                    (c = n.current),
                    (f = "enter" === d.current),
                    (b = () => {
                      t.dispose(), o.current(d.current);
                    }),
                    (i = f ? "enter" : "leave"),
                    (l = (0, p.k)()),
                    (h =
                      void 0 !== b
                        ? ((e = { called: !1 }),
                          (...t) => {
                            if (!e.called) return (e.called = !0), b(...t);
                          })
                        : () => {}),
                    "enter" === i &&
                      (s.removeAttribute("hidden"), (s.style.display = "")),
                    (g = (0, a.E)(i, {
                      enter: () => c.enter,
                      leave: () => c.leave,
                    })),
                    (x = (0, a.E)(i, {
                      enter: () => c.enterTo,
                      leave: () => c.leaveTo,
                    })),
                    (E = (0, a.E)(i, {
                      enter: () => c.enterFrom,
                      leave: () => c.leaveFrom,
                    })),
                    m(
                      s,
                      ...c.enter,
                      ...c.enterTo,
                      ...c.enterFrom,
                      ...c.leave,
                      ...c.leaveFrom,
                      ...c.leaveTo,
                      ...c.entered
                    ),
                    v(s, ...g, ...E),
                    l.nextFrame(() => {
                      m(s, ...E),
                        v(s, ...x),
                        (function (e, t) {
                          let n = (0, p.k)();
                          if (!e) return n.dispose;
                          let { transitionDuration: r, transitionDelay: o } =
                              getComputedStyle(e),
                            [i, l] = [r, o].map((e) => {
                              let [t = 0] = e
                                .split(",")
                                .filter(Boolean)
                                .map((e) =>
                                  e.includes("ms")
                                    ? parseFloat(e)
                                    : 1e3 * parseFloat(e)
                                )
                                .sort((e, t) => t - e);
                              return t;
                            }),
                            a = i + l;
                          if (0 !== a) {
                            n.group((n) => {
                              n.setTimeout(() => {
                                t(), n.dispose();
                              }, a),
                                n.addEventListener(e, "transitionrun", (e) => {
                                  e.target === e.currentTarget && n.dispose();
                                });
                            });
                            let r = n.addEventListener(
                              e,
                              "transitionend",
                              (e) => {
                                e.target === e.currentTarget && (t(), r());
                              }
                            );
                          } else t();
                          n.add(() => t()), n.dispose;
                        })(s, () => (m(s, ...g), v(s, ...c.entered), h()));
                    }),
                    l.dispose)
                  ),
                  t.dispose
                );
              }
            }, [t]);
          })({
            container: j,
            classes: K,
            direction: ee,
            onStart: (0, c.E)((e) => {
              eo.onStart(j, e, en);
            }),
            onStop: (0, c.E)((e) => {
              eo.onStop(j, e, er),
                "leave" !== e || S(eo) || (Y("hidden"), Q(j));
            }),
          }),
            (0, o.useEffect)(() => {
              X && (_ === i.l4.Hidden ? (q.current = null) : (q.current = U));
            }, [U, X, Z]);
          let ei = z;
          return (
            V &&
              U &&
              (ei = {
                ...ei,
                className: (0, g.A)(
                  z.className,
                  ...K.current.enter,
                  ...K.current.enterFrom
                ),
              }),
            o.createElement(
              O.Provider,
              { value: eo },
              o.createElement(
                l.up,
                {
                  value:
                    (0, a.E)(Z, { visible: l.ZM.Open, hidden: l.ZM.Closed }) |
                    et.flags,
                },
                (0, i.sY)({
                  ourProps: { ref: H },
                  theirProps: ei,
                  defaultTag: "div",
                  features: P,
                  visible: "visible" === Z,
                  name: "Transition.Child",
                })
              )
            )
          );
        }),
        F = (0, i.yV)(function (e, t) {
          let n = null !== (0, o.useContext)(E),
            r = null !== (0, l.oJ)();
          return o.createElement(
            o.Fragment,
            null,
            !n && r
              ? o.createElement(I, { ref: t, ...e })
              : o.createElement(C, { ref: t, ...e })
          );
        }),
        N = Object.assign(I, { Child: F, Root: I });
    },
    48807: function (e, t, n) {
      n.d(t, {
        G: function () {
          return i;
        },
      });
      var r = n(86006),
        o = n(42145);
      function i() {
        let [e] = (0, r.useState)(o.k);
        return (0, r.useEffect)(() => () => e.dispose(), [e]), e;
      }
    },
    3562: function (e, t, n) {
      n.d(t, {
        z: function () {
          return i;
        },
      });
      var r = n(86006),
        o = n(1485);
      let i = function (e) {
        let t = (0, o.E)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    60961: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i;
        },
      });
      var r = n(86006),
        o = n(30028);
      let i = (e, t) => {
        o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    1485: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
      });
      var r = n(86006),
        o = n(60961);
      function i(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, o.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    11405: function (e, t, n) {
      n.d(t, {
        H: function () {
          return i;
        },
      });
      var r = n(86006),
        o = n(30028);
      function i() {
        let [e, t] = (0, r.useState)(o.O.isHandoffComplete);
        return (
          e && !1 === o.O.isHandoffComplete && t(!1),
          (0, r.useEffect)(() => {
            !0 !== e && t(!0);
          }, [e]),
          (0, r.useEffect)(() => o.O.handoff(), []),
          e
        );
      }
    },
    68496: function (e, t, n) {
      n.d(t, {
        T: function () {
          return l;
        },
      });
      var r = n(86006),
        o = n(3562);
      let i = Symbol();
      function l(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, o.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[i]))
          ? void 0
          : n;
      }
    },
    10546: function (e, t, n) {
      n.d(t, {
        ZM: function () {
          return l;
        },
        oJ: function () {
          return a;
        },
        up: function () {
          return u;
        },
      });
      var r,
        o = n(86006);
      let i = (0, o.createContext)(null);
      i.displayName = "OpenClosedContext";
      var l =
        (((r = l || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function a() {
        return (0, o.useContext)(i);
      }
      function u({ value: e, children: t }) {
        return o.createElement(i.Provider, { value: e }, t);
      }
    },
    34339: function (e, t, n) {
      n.d(t, {
        A: function () {
          return r;
        },
      });
      function r(...e) {
        return e.filter(Boolean).join(" ");
      }
    },
    42145: function (e, t, n) {
      n.d(t, {
        k: function () {
          return function e() {
            let t = [],
              n = {
                addEventListener: (e, t, r, o) => (
                  e.addEventListener(t, r, o),
                  n.add(() => e.removeEventListener(t, r, o))
                ),
                requestAnimationFrame(...e) {
                  let t = requestAnimationFrame(...e);
                  return n.add(() => cancelAnimationFrame(t));
                },
                nextFrame: (...e) =>
                  n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
                setTimeout(...e) {
                  let t = setTimeout(...e);
                  return n.add(() => clearTimeout(t));
                },
                microTask(...e) {
                  var t;
                  let r = { current: !0 };
                  return (
                    (t = () => {
                      r.current && e[0]();
                    }),
                    "function" == typeof queueMicrotask
                      ? queueMicrotask(t)
                      : Promise.resolve()
                          .then(t)
                          .catch((e) =>
                            setTimeout(() => {
                              throw e;
                            })
                          ),
                    n.add(() => {
                      r.current = !1;
                    })
                  );
                },
                style(e, t, n) {
                  let r = e.style.getPropertyValue(t);
                  return (
                    Object.assign(e.style, { [t]: n }),
                    this.add(() => {
                      Object.assign(e.style, { [t]: r });
                    })
                  );
                },
                group(t) {
                  let n = e();
                  return t(n), this.add(() => n.dispose());
                },
                add: (e) => (
                  t.push(e),
                  () => {
                    let n = t.indexOf(e);
                    if (n >= 0) for (let e of t.splice(n, 1)) e();
                  }
                ),
                dispose() {
                  for (let e of t.splice(0)) e();
                },
              };
            return n;
          };
        },
      });
    },
    30028: function (e, t, n) {
      n.d(t, {
        O: function () {
          return l;
        },
      });
      var r = Object.defineProperty,
        o = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        i = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      let l = new (class {
        constructor() {
          i(this, "current", this.detect()),
            i(this, "handoffState", "pending"),
            i(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      })();
    },
    59325: function (e, t, n) {
      n.d(t, {
        E: function () {
          return r;
        },
      });
      function r(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let o = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, r), o);
      }
    },
    42810: function (e, t, n) {
      n.d(t, {
        AN: function () {
          return u;
        },
        l4: function () {
          return s;
        },
        oA: function () {
          return v;
        },
        sY: function () {
          return c;
        },
        yV: function () {
          return p;
        },
      });
      var r,
        o,
        i = n(86006),
        l = n(34339),
        a = n(59325),
        u =
          (((r = u || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        s =
          (((o = s || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function c({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: o,
        visible: i = !0,
        name: l,
      }) {
        let u = f(t, e);
        if (i) return d(u, n, r, l);
        let s = null != o ? o : 0;
        if (2 & s) {
          let { static: e = !1, ...t } = u;
          if (e) return d(t, n, r, l);
        }
        if (1 & s) {
          let { unmount: e = !0, ...t } = u;
          return (0, a.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              d({ ...t, hidden: !0, style: { display: "none" } }, n, r, l),
          });
        }
        return d(u, n, r, l);
      }
      function d(e, t = {}, n, r) {
        let {
            as: o = n,
            children: a,
            refName: u = "ref",
            ...s
          } = m(e, ["unmount", "static"]),
          c = void 0 !== e.ref ? { [u]: e.ref } : {},
          d = "function" == typeof a ? a(t) : a;
        "className" in s &&
          s.className &&
          "function" == typeof s.className &&
          (s.className = s.className(t));
        let p = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
          e && (p["data-headlessui-state"] = n.join(" "));
        }
        if (o === i.Fragment && Object.keys(v(s)).length > 0) {
          if (!(0, i.isValidElement)(d) || (Array.isArray(d) && d.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(s).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = d.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? (...t) =>
                    (0, l.A)(
                      null == e ? void 0 : e.className(...t),
                      s.className
                    )
                : (0, l.A)(null == e ? void 0 : e.className, s.className);
          return (0, i.cloneElement)(
            d,
            Object.assign(
              {},
              f(d.props, v(m(s, ["ref"]))),
              p,
              c,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let n of e)
                          null != n &&
                            ("function" == typeof n ? n(t) : (n.current = t));
                      },
                };
              })(d.ref, c.ref),
              t ? { className: t } : {}
            )
          );
        }
        return (0, i.createElement)(
          o,
          Object.assign(
            {},
            m(s, ["ref"]),
            o !== i.Fragment && c,
            o !== i.Fragment && p
          ),
          d
        );
      }
      function f(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function p(e) {
        var t;
        return Object.assign((0, i.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function v(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function m(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
  },
]);
