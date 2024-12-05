(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9906],
  {
    83177: function (t, e, r) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(86006),
        i = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(t, e, r) {
        var n,
          s = {},
          u = null,
          c = null;
        for (n in (void 0 !== r && (u = "" + r),
        void 0 !== e.key && (u = "" + e.key),
        void 0 !== e.ref && (c = e.ref),
        e))
          o.call(e, n) && !l.hasOwnProperty(n) && (s[n] = e[n]);
        if (t && t.defaultProps)
          for (n in (e = t.defaultProps)) void 0 === s[n] && (s[n] = e[n]);
        return {
          $$typeof: i,
          type: t,
          key: u,
          ref: c,
          props: s,
          _owner: a.current,
        };
      }
      (e.Fragment = s), (e.jsx = u), (e.jsxs = u);
    },
    9268: function (t, e, r) {
      "use strict";
      t.exports = r(83177);
    },
    76394: function (t, e, r) {
      t.exports = r(72011);
    },
    35846: function (t, e, r) {
      t.exports = r(90414);
    },
    19247: function (t, e, r) {
      var n;
      t.exports =
        ((n = r(86006)),
        (() => {
          var t = {
              "./node_modules/css-mediaquery/index.js": (t, e) => {
                "use strict";
                (e.match = function (t, e) {
                  return a(t).some(function (t) {
                    var r = t.inverse,
                      n = "all" === t.type || e.type === t.type;
                    if ((n && r) || !(n || r)) return !1;
                    var i = t.expressions.every(function (t) {
                      var r = t.feature,
                        n = t.modifier,
                        i = t.value,
                        s = e[r];
                      if (!s) return !1;
                      switch (r) {
                        case "orientation":
                        case "scan":
                          return s.toLowerCase() === i.toLowerCase();
                        case "width":
                        case "height":
                        case "device-width":
                        case "device-height":
                          (i = c(i)), (s = c(s));
                          break;
                        case "resolution":
                          (i = u(i)), (s = u(s));
                          break;
                        case "aspect-ratio":
                        case "device-aspect-ratio":
                        case "device-pixel-ratio":
                          (i = l(i)), (s = l(s));
                          break;
                        case "grid":
                        case "color":
                        case "color-index":
                        case "monochrome":
                          (i = parseInt(i, 10) || 1),
                            (s = parseInt(s, 10) || 0);
                      }
                      switch (n) {
                        case "min":
                          return s >= i;
                        case "max":
                          return s <= i;
                        default:
                          return s === i;
                      }
                    });
                    return (i && !r) || (!i && r);
                  });
                }),
                  (e.parse = a);
                var r = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                  n = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                  i = /^(?:(min|max)-)?(.+)/,
                  s = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                  o = /(dpi|dpcm|dppx)?$/;
                function a(t) {
                  return t.split(",").map(function (t) {
                    var e = (t = t.trim()).match(r),
                      s = e[1],
                      o = e[2],
                      a = e[3] || "",
                      l = {};
                    return (
                      (l.inverse = !!s && "not" === s.toLowerCase()),
                      (l.type = o ? o.toLowerCase() : "all"),
                      (a = a.match(/\([^\)]+\)/g) || []),
                      (l.expressions = a.map(function (t) {
                        var e = t.match(n),
                          r = e[1].toLowerCase().match(i);
                        return { modifier: r[1], feature: r[2], value: e[2] };
                      })),
                      l
                    );
                  });
                }
                function l(t) {
                  var e,
                    r = Number(t);
                  return (
                    r || (r = (e = t.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / e[2]),
                    r
                  );
                }
                function u(t) {
                  var e = parseFloat(t);
                  switch (String(t).match(o)[1]) {
                    case "dpcm":
                      return e / 2.54;
                    case "dppx":
                      return 96 * e;
                    default:
                      return e;
                  }
                }
                function c(t) {
                  var e = parseFloat(t);
                  switch (String(t).match(s)[1]) {
                    case "em":
                    case "rem":
                      return 16 * e;
                    case "cm":
                      return (96 * e) / 2.54;
                    case "mm":
                      return (96 * e) / 2.54 / 10;
                    case "in":
                      return 96 * e;
                    case "pt":
                      return 72 * e;
                    case "pc":
                      return (72 * e) / 12;
                    default:
                      return e;
                  }
                }
              },
              "./node_modules/hyphenate-style-name/index.js": (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, { default: () => a });
                var n = /[A-Z]/g,
                  i = /^ms-/,
                  s = {};
                function o(t) {
                  return "-" + t.toLowerCase();
                }
                let a = function (t) {
                  if (s.hasOwnProperty(t)) return s[t];
                  var e = t.replace(n, o);
                  return (s[t] = i.test(e) ? "-" + e : e);
                };
              },
              "./node_modules/matchmediaquery/index.js": (t, e, r) => {
                "use strict";
                var n = r(
                    /*! css-mediaquery */ "./node_modules/css-mediaquery/index.js"
                  ).match,
                  i = "undefined" != typeof window ? window.matchMedia : null;
                function s(t, e, r) {
                  var s = this;
                  if (i && !r) {
                    var o = i.call(window, t);
                    (this.matches = o.matches),
                      (this.media = o.media),
                      o.addListener(a);
                  } else (this.matches = n(t, e)), (this.media = t);
                  function a(t) {
                    (s.matches = t.matches), (s.media = t.media);
                  }
                  (this.addListener = function (t) {
                    o && o.addListener(t);
                  }),
                    (this.removeListener = function (t) {
                      o && o.removeListener(t);
                    }),
                    (this.dispose = function () {
                      o && o.removeListener(a);
                    });
                }
                t.exports = function (t, e, r) {
                  return new s(t, e, r);
                };
              },
              "./node_modules/object-assign/index.js": (t) => {
                "use strict";
                /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var e = Object.getOwnPropertySymbols,
                  r = Object.prototype.hasOwnProperty,
                  n = Object.prototype.propertyIsEnumerable;
                t.exports = !(function () {
                  try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (
                      ((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])
                    )
                      return !1;
                    for (var e = {}, r = 0; r < 10; r++)
                      e["_" + String.fromCharCode(r)] = r;
                    var n = Object.getOwnPropertyNames(e).map(function (t) {
                      return e[t];
                    });
                    if ("0123456789" !== n.join("")) return !1;
                    var i = {};
                    if (
                      ("abcdefghijklmnopqrst".split("").forEach(function (t) {
                        i[t] = t;
                      }),
                      "abcdefghijklmnopqrst" !==
                        Object.keys(Object.assign({}, i)).join(""))
                    )
                      return !1;
                    return !0;
                  } catch (t) {
                    return !1;
                  }
                })()
                  ? function (t, i) {
                      for (
                        var s,
                          o,
                          a = (function (t) {
                            if (null == t)
                              throw TypeError(
                                "Object.assign cannot be called with null or undefined"
                              );
                            return Object(t);
                          })(t),
                          l = 1;
                        l < arguments.length;
                        l++
                      ) {
                        for (var u in (s = Object(arguments[l])))
                          r.call(s, u) && (a[u] = s[u]);
                        if (e) {
                          o = e(s);
                          for (var c = 0; c < o.length; c++)
                            n.call(s, o[c]) && (a[o[c]] = s[o[c]]);
                        }
                      }
                      return a;
                    }
                  : Object.assign;
              },
              "./node_modules/prop-types/checkPropTypes.js": (t, e, r) => {
                "use strict";
                var n = function () {},
                  i = r(
                    /*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
                  ),
                  s = {},
                  o = r(
                    /*! ./lib/has */ "./node_modules/prop-types/lib/has.js"
                  );
                function a(t, e, r, a, l) {
                  for (var u in t)
                    if (o(t, u)) {
                      var c;
                      try {
                        if ("function" != typeof t[u]) {
                          var h = Error(
                            (a || "React class") +
                              ": " +
                              r +
                              " type `" +
                              u +
                              "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                              typeof t[u] +
                              "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                          );
                          throw ((h.name = "Invariant Violation"), h);
                        }
                        c = t[u](e, u, a, r, null, i);
                      } catch (t) {
                        c = t;
                      }
                      if (
                        (!c ||
                          c instanceof Error ||
                          n(
                            (a || "React class") +
                              ": type specification of " +
                              r +
                              " `" +
                              u +
                              "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                              typeof c +
                              ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                          ),
                        c instanceof Error && !(c.message in s))
                      ) {
                        s[c.message] = !0;
                        var d = l ? l() : "";
                        n(
                          "Failed " +
                            r +
                            " type: " +
                            c.message +
                            (null != d ? d : "")
                        );
                      }
                    }
                }
                (n = function (t) {
                  var e = "Warning: " + t;
                  "undefined" != typeof console && console.error(e);
                  try {
                    throw Error(e);
                  } catch (t) {}
                }),
                  (a.resetWarningCache = function () {
                    s = {};
                  }),
                  (t.exports = a);
              },
              "./node_modules/prop-types/factoryWithTypeCheckers.js": (
                t,
                e,
                r
              ) => {
                "use strict";
                var n = r(/*! react-is */ "./node_modules/react-is/index.js"),
                  i = r(
                    /*! object-assign */ "./node_modules/object-assign/index.js"
                  ),
                  s = r(
                    /*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
                  ),
                  o = r(
                    /*! ./lib/has */ "./node_modules/prop-types/lib/has.js"
                  ),
                  a = r(
                    /*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js"
                  ),
                  l = function () {};
                function u() {
                  return null;
                }
                (l = function (t) {
                  var e = "Warning: " + t;
                  "undefined" != typeof console && console.error(e);
                  try {
                    throw Error(e);
                  } catch (t) {}
                }),
                  (t.exports = function (t, e) {
                    var r = "function" == typeof Symbol && Symbol.iterator,
                      c = "<<anonymous>>",
                      h = {
                        array: f("array"),
                        bigint: f("bigint"),
                        bool: f("boolean"),
                        func: f("function"),
                        number: f("number"),
                        object: f("object"),
                        string: f("string"),
                        symbol: f("symbol"),
                        any: p(u),
                        arrayOf: function (t) {
                          return p(function (e, r, n, i, o) {
                            if ("function" != typeof t)
                              return new d(
                                "Property `" +
                                  o +
                                  "` of component `" +
                                  n +
                                  "` has invalid PropType notation inside arrayOf."
                              );
                            var a = e[r];
                            if (!Array.isArray(a)) {
                              var l = y(a);
                              return new d(
                                "Invalid " +
                                  i +
                                  " `" +
                                  o +
                                  "` of type `" +
                                  l +
                                  "` supplied to `" +
                                  n +
                                  "`, expected an array."
                              );
                            }
                            for (var u = 0; u < a.length; u++) {
                              var c = t(a, u, n, i, o + "[" + u + "]", s);
                              if (c instanceof Error) return c;
                            }
                            return null;
                          });
                        },
                        element: p(function (e, r, n, i, s) {
                          var o = e[r];
                          if (!t(o)) {
                            var a = y(o);
                            return new d(
                              "Invalid " +
                                i +
                                " `" +
                                s +
                                "` of type `" +
                                a +
                                "` supplied to `" +
                                n +
                                "`, expected a single ReactElement."
                            );
                          }
                          return null;
                        }),
                        elementType: p(function (t, e, r, i, s) {
                          var o = t[e];
                          if (!n.isValidElementType(o)) {
                            var a = y(o);
                            return new d(
                              "Invalid " +
                                i +
                                " `" +
                                s +
                                "` of type `" +
                                a +
                                "` supplied to `" +
                                r +
                                "`, expected a single ReactElement type."
                            );
                          }
                          return null;
                        }),
                        instanceOf: function (t) {
                          return p(function (e, r, n, i, s) {
                            if (!(e[r] instanceof t)) {
                              var o,
                                a = t.name || c,
                                l =
                                  (o = e[r]).constructor && o.constructor.name
                                    ? o.constructor.name
                                    : c;
                              return new d(
                                "Invalid " +
                                  i +
                                  " `" +
                                  s +
                                  "` of type `" +
                                  l +
                                  "` supplied to `" +
                                  n +
                                  "`, expected instance of `" +
                                  a +
                                  "`."
                              );
                            }
                            return null;
                          });
                        },
                        node: p(function (e, n, i, s, o) {
                          return !(function e(n) {
                            switch (typeof n) {
                              case "number":
                              case "string":
                              case "undefined":
                                return !0;
                              case "boolean":
                                return !n;
                              case "object":
                                if (Array.isArray(n)) return n.every(e);
                                if (null === n || t(n)) return !0;
                                var i = (function (t) {
                                  var e = t && ((r && t[r]) || t["@@iterator"]);
                                  if ("function" == typeof e) return e;
                                })(n);
                                if (!i) return !1;
                                var s,
                                  o = i.call(n);
                                if (i !== n.entries) {
                                  for (; !(s = o.next()).done; )
                                    if (!e(s.value)) return !1;
                                } else
                                  for (; !(s = o.next()).done; ) {
                                    var a = s.value;
                                    if (a && !e(a[1])) return !1;
                                  }
                                return !0;
                              default:
                                return !1;
                            }
                          })(e[n])
                            ? new d(
                                "Invalid " +
                                  s +
                                  " `" +
                                  o +
                                  "` supplied to `" +
                                  i +
                                  "`, expected a ReactNode."
                              )
                            : null;
                        }),
                        objectOf: function (t) {
                          return p(function (e, r, n, i, a) {
                            if ("function" != typeof t)
                              return new d(
                                "Property `" +
                                  a +
                                  "` of component `" +
                                  n +
                                  "` has invalid PropType notation inside objectOf."
                              );
                            var l = e[r],
                              u = y(l);
                            if ("object" !== u)
                              return new d(
                                "Invalid " +
                                  i +
                                  " `" +
                                  a +
                                  "` of type `" +
                                  u +
                                  "` supplied to `" +
                                  n +
                                  "`, expected an object."
                              );
                            for (var c in l)
                              if (o(l, c)) {
                                var h = t(l, c, n, i, a + "." + c, s);
                                if (h instanceof Error) return h;
                              }
                            return null;
                          });
                        },
                        oneOf: function (t) {
                          return Array.isArray(t)
                            ? p(function (e, r, n, i, s) {
                                for (var o, a = e[r], l = 0; l < t.length; l++)
                                  if (
                                    a === (o = t[l])
                                      ? 0 !== a || 1 / a == 1 / o
                                      : a != a && o != o
                                  )
                                    return null;
                                var u = JSON.stringify(t, function (t, e) {
                                  return "symbol" === v(e) ? String(e) : e;
                                });
                                return new d(
                                  "Invalid " +
                                    i +
                                    " `" +
                                    s +
                                    "` of value `" +
                                    String(a) +
                                    "` supplied to `" +
                                    n +
                                    "`, expected one of " +
                                    u +
                                    "."
                                );
                              })
                            : (arguments.length > 1
                                ? l(
                                    "Invalid arguments supplied to oneOf, expected an array, got " +
                                      arguments.length +
                                      " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                                  )
                                : l(
                                    "Invalid argument supplied to oneOf, expected an array."
                                  ),
                              u);
                        },
                        oneOfType: function (t) {
                          if (!Array.isArray(t))
                            return (
                              l(
                                "Invalid argument supplied to oneOfType, expected an instance of array."
                              ),
                              u
                            );
                          for (var e = 0; e < t.length; e++) {
                            var r = t[e];
                            if ("function" != typeof r)
                              return (
                                l(
                                  "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                                    (function (t) {
                                      var e = v(t);
                                      switch (e) {
                                        case "array":
                                        case "object":
                                          return "an " + e;
                                        case "boolean":
                                        case "date":
                                        case "regexp":
                                          return "a " + e;
                                        default:
                                          return e;
                                      }
                                    })(r) +
                                    " at index " +
                                    e +
                                    "."
                                ),
                                u
                              );
                          }
                          return p(function (e, r, n, i, a) {
                            for (var l = [], u = 0; u < t.length; u++) {
                              var c = (0, t[u])(e, r, n, i, a, s);
                              if (null == c) return null;
                              c.data &&
                                o(c.data, "expectedType") &&
                                l.push(c.data.expectedType);
                            }
                            var h =
                              l.length > 0
                                ? ", expected one of type [" +
                                  l.join(", ") +
                                  "]"
                                : "";
                            return new d(
                              "Invalid " +
                                i +
                                " `" +
                                a +
                                "` supplied to `" +
                                n +
                                "`" +
                                h +
                                "."
                            );
                          });
                        },
                        shape: function (t) {
                          return p(function (e, r, n, i, o) {
                            var a = e[r],
                              l = y(a);
                            if ("object" !== l)
                              return new d(
                                "Invalid " +
                                  i +
                                  " `" +
                                  o +
                                  "` of type `" +
                                  l +
                                  "` supplied to `" +
                                  n +
                                  "`, expected `object`."
                              );
                            for (var u in t) {
                              var c = t[u];
                              if ("function" != typeof c)
                                return m(n, i, o, u, v(c));
                              var h = c(a, u, n, i, o + "." + u, s);
                              if (h) return h;
                            }
                            return null;
                          });
                        },
                        exact: function (t) {
                          return p(function (e, r, n, a, l) {
                            var u = e[r],
                              c = y(u);
                            if ("object" !== c)
                              return new d(
                                "Invalid " +
                                  a +
                                  " `" +
                                  l +
                                  "` of type `" +
                                  c +
                                  "` supplied to `" +
                                  n +
                                  "`, expected `object`."
                              );
                            var h = i({}, e[r], t);
                            for (var p in h) {
                              var f = t[p];
                              if (o(t, p) && "function" != typeof f)
                                return m(n, a, l, p, v(f));
                              if (!f)
                                return new d(
                                  "Invalid " +
                                    a +
                                    " `" +
                                    l +
                                    "` key `" +
                                    p +
                                    "` supplied to `" +
                                    n +
                                    "`.\nBad object: " +
                                    JSON.stringify(e[r], null, "  ") +
                                    "\nValid keys: " +
                                    JSON.stringify(Object.keys(t), null, "  ")
                                );
                              var g = f(u, p, n, a, l + "." + p, s);
                              if (g) return g;
                            }
                            return null;
                          });
                        },
                      };
                    function d(t, e) {
                      (this.message = t),
                        (this.data = e && "object" == typeof e ? e : {}),
                        (this.stack = "");
                    }
                    function p(t) {
                      var r = {},
                        n = 0;
                      function i(i, o, a, u, h, p, f) {
                        if (((u = u || c), (p = p || a), f !== s)) {
                          if (e) {
                            var m = Error(
                              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                            );
                            throw ((m.name = "Invariant Violation"), m);
                          }
                          if ("undefined" != typeof console) {
                            var y = u + ":" + a;
                            !r[y] &&
                              n < 3 &&
                              (l(
                                "You are manually calling a React.PropTypes validation function for the `" +
                                  p +
                                  "` prop on `" +
                                  u +
                                  "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                              ),
                              (r[y] = !0),
                              n++);
                          }
                        }
                        return null != o[a]
                          ? t(o, a, u, h, p)
                          : i
                          ? new d(
                              null === o[a]
                                ? "The " +
                                  h +
                                  " `" +
                                  p +
                                  "` is marked as required in `" +
                                  u +
                                  "`, but its value is `null`."
                                : "The " +
                                  h +
                                  " `" +
                                  p +
                                  "` is marked as required in `" +
                                  u +
                                  "`, but its value is `undefined`."
                            )
                          : null;
                      }
                      var o = i.bind(null, !1);
                      return (o.isRequired = i.bind(null, !0)), o;
                    }
                    function f(t) {
                      return p(function (e, r, n, i, s, o) {
                        var a = e[r];
                        if (y(a) !== t) {
                          var l = v(a);
                          return new d(
                            "Invalid " +
                              i +
                              " `" +
                              s +
                              "` of type `" +
                              l +
                              "` supplied to `" +
                              n +
                              "`, expected `" +
                              t +
                              "`.",
                            { expectedType: t }
                          );
                        }
                        return null;
                      });
                    }
                    function m(t, e, r, n, i) {
                      return new d(
                        (t || "React class") +
                          ": " +
                          e +
                          " type `" +
                          r +
                          "." +
                          n +
                          "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                          i +
                          "`."
                      );
                    }
                    function y(t) {
                      var e = typeof t;
                      return Array.isArray(t)
                        ? "array"
                        : t instanceof RegExp
                        ? "object"
                        : "symbol" === e ||
                          (t &&
                            ("Symbol" === t["@@toStringTag"] ||
                              ("function" == typeof Symbol &&
                                t instanceof Symbol)))
                        ? "symbol"
                        : e;
                    }
                    function v(t) {
                      if (null == t) return "" + t;
                      var e = y(t);
                      if ("object" === e) {
                        if (t instanceof Date) return "date";
                        if (t instanceof RegExp) return "regexp";
                      }
                      return e;
                    }
                    return (
                      (d.prototype = Error.prototype),
                      (h.checkPropTypes = a),
                      (h.resetWarningCache = a.resetWarningCache),
                      (h.PropTypes = h),
                      h
                    );
                  });
              },
              "./node_modules/prop-types/index.js": (t, e, r) => {
                var n = r(/*! react-is */ "./node_modules/react-is/index.js");
                t.exports = r(
                  /*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js"
                )(n.isElement, !0);
              },
              "./node_modules/prop-types/lib/ReactPropTypesSecret.js": (t) => {
                "use strict";
                t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
              },
              "./node_modules/prop-types/lib/has.js": (t) => {
                t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
              },
              "./node_modules/react-is/cjs/react-is.development.js": (t, e) => {
                "use strict";
                !(function () {
                  var t = "function" == typeof Symbol && Symbol.for,
                    r = t ? Symbol.for("react.element") : 60103,
                    n = t ? Symbol.for("react.portal") : 60106,
                    i = t ? Symbol.for("react.fragment") : 60107,
                    s = t ? Symbol.for("react.strict_mode") : 60108,
                    o = t ? Symbol.for("react.profiler") : 60114,
                    a = t ? Symbol.for("react.provider") : 60109,
                    l = t ? Symbol.for("react.context") : 60110,
                    u = t ? Symbol.for("react.async_mode") : 60111,
                    c = t ? Symbol.for("react.concurrent_mode") : 60111,
                    h = t ? Symbol.for("react.forward_ref") : 60112,
                    d = t ? Symbol.for("react.suspense") : 60113,
                    p = t ? Symbol.for("react.suspense_list") : 60120,
                    f = t ? Symbol.for("react.memo") : 60115,
                    m = t ? Symbol.for("react.lazy") : 60116,
                    y = t ? Symbol.for("react.block") : 60121,
                    v = t ? Symbol.for("react.fundamental") : 60117,
                    g = t ? Symbol.for("react.responder") : 60118,
                    x = t ? Symbol.for("react.scope") : 60119;
                  function b(t) {
                    if ("object" == typeof t && null !== t) {
                      var e = t.$$typeof;
                      switch (e) {
                        case r:
                          var p = t.type;
                          switch (p) {
                            case u:
                            case c:
                            case i:
                            case o:
                            case s:
                            case d:
                              return p;
                            default:
                              var y = p && p.$$typeof;
                              switch (y) {
                                case l:
                                case h:
                                case m:
                                case f:
                                case a:
                                  return y;
                                default:
                                  return e;
                              }
                          }
                        case n:
                          return e;
                      }
                    }
                  }
                  var P = !1;
                  function w(t) {
                    return b(t) === c;
                  }
                  (e.AsyncMode = u),
                    (e.ConcurrentMode = c),
                    (e.ContextConsumer = l),
                    (e.ContextProvider = a),
                    (e.Element = r),
                    (e.ForwardRef = h),
                    (e.Fragment = i),
                    (e.Lazy = m),
                    (e.Memo = f),
                    (e.Portal = n),
                    (e.Profiler = o),
                    (e.StrictMode = s),
                    (e.Suspense = d),
                    (e.isAsyncMode = function (t) {
                      return (
                        P ||
                          ((P = !0),
                          console.warn(
                            "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                          )),
                        w(t) || b(t) === u
                      );
                    }),
                    (e.isConcurrentMode = w),
                    (e.isContextConsumer = function (t) {
                      return b(t) === l;
                    }),
                    (e.isContextProvider = function (t) {
                      return b(t) === a;
                    }),
                    (e.isElement = function (t) {
                      return (
                        "object" == typeof t && null !== t && t.$$typeof === r
                      );
                    }),
                    (e.isForwardRef = function (t) {
                      return b(t) === h;
                    }),
                    (e.isFragment = function (t) {
                      return b(t) === i;
                    }),
                    (e.isLazy = function (t) {
                      return b(t) === m;
                    }),
                    (e.isMemo = function (t) {
                      return b(t) === f;
                    }),
                    (e.isPortal = function (t) {
                      return b(t) === n;
                    }),
                    (e.isProfiler = function (t) {
                      return b(t) === o;
                    }),
                    (e.isStrictMode = function (t) {
                      return b(t) === s;
                    }),
                    (e.isSuspense = function (t) {
                      return b(t) === d;
                    }),
                    (e.isValidElementType = function (t) {
                      return (
                        "string" == typeof t ||
                        "function" == typeof t ||
                        t === i ||
                        t === c ||
                        t === o ||
                        t === s ||
                        t === d ||
                        t === p ||
                        ("object" == typeof t &&
                          null !== t &&
                          (t.$$typeof === m ||
                            t.$$typeof === f ||
                            t.$$typeof === a ||
                            t.$$typeof === l ||
                            t.$$typeof === h ||
                            t.$$typeof === v ||
                            t.$$typeof === g ||
                            t.$$typeof === x ||
                            t.$$typeof === y))
                      );
                    }),
                    (e.typeOf = b);
                })();
              },
              "./node_modules/react-is/index.js": (t, e, r) => {
                "use strict";
                t.exports = r(
                  /*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js"
                );
              },
              "./node_modules/shallow-equal/dist/index.esm.js": (t, e, r) => {
                "use strict";
                function n(t, e) {
                  if (t === e) return !0;
                  if (!t || !e) return !1;
                  var r = Object.keys(t),
                    n = Object.keys(e),
                    i = r.length;
                  if (n.length !== i) return !1;
                  for (var s = 0; s < i; s++) {
                    var o = r[s];
                    if (
                      t[o] !== e[o] ||
                      !Object.prototype.hasOwnProperty.call(e, o)
                    )
                      return !1;
                  }
                  return !0;
                }
                function i(t, e) {
                  if (t === e) return !0;
                  if (!t || !e) return !1;
                  var r = t.length;
                  if (e.length !== r) return !1;
                  for (var n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
                  return !0;
                }
                r.r(e),
                  r.d(e, {
                    shallowEqualArrays: () => i,
                    shallowEqualObjects: () => n,
                  });
              },
              "./src/Component.ts": function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__rest) ||
                    function (t, e) {
                      var r = {};
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          0 > e.indexOf(n) &&
                          (r[n] = t[n]);
                      if (
                        null != t &&
                        "function" == typeof Object.getOwnPropertySymbols
                      )
                        for (
                          var i = 0, n = Object.getOwnPropertySymbols(t);
                          i < n.length;
                          i++
                        )
                          0 > e.indexOf(n[i]) &&
                            Object.prototype.propertyIsEnumerable.call(
                              t,
                              n[i]
                            ) &&
                            (r[n[i]] = t[n[i]]);
                      return r;
                    },
                  i =
                    (this && this.__importDefault) ||
                    function (t) {
                      return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var s = i(r(/*! ./useMediaQuery */ "./src/useMediaQuery.ts"));
                e.default = function (t) {
                  var e = t.children,
                    r = t.device,
                    i = t.onChange,
                    o = n(t, ["children", "device", "onChange"]),
                    a = (0, s.default)(o, r, i);
                  return "function" == typeof e ? e(a) : a ? e : null;
                };
              },
              "./src/Context.ts": (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var n = (0, r(/*! react */ "react").createContext)(void 0);
                e.default = n;
              },
              "./src/index.ts": function (t, e, r) {
                "use strict";
                var n =
                  (this && this.__importDefault) ||
                  function (t) {
                    return t && t.__esModule ? t : { default: t };
                  };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.Context =
                    e.toQuery =
                    e.useMediaQuery =
                    e.default =
                      void 0);
                var i = n(r(/*! ./useMediaQuery */ "./src/useMediaQuery.ts"));
                e.useMediaQuery = i.default;
                var s = n(r(/*! ./Component */ "./src/Component.ts"));
                e.default = s.default;
                var o = n(r(/*! ./toQuery */ "./src/toQuery.ts"));
                e.toQuery = o.default;
                var a = n(r(/*! ./Context */ "./src/Context.ts"));
                e.Context = a.default;
              },
              "./src/mediaQuery.ts": function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__assign) ||
                    function () {
                      return (n =
                        Object.assign ||
                        function (t) {
                          for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in (e = arguments[r]))
                              Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i]);
                          return t;
                        }).apply(this, arguments);
                    },
                  i =
                    (this && this.__rest) ||
                    function (t, e) {
                      var r = {};
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          0 > e.indexOf(n) &&
                          (r[n] = t[n]);
                      if (
                        null != t &&
                        "function" == typeof Object.getOwnPropertySymbols
                      )
                        for (
                          var i = 0, n = Object.getOwnPropertySymbols(t);
                          i < n.length;
                          i++
                        )
                          0 > e.indexOf(n[i]) &&
                            Object.prototype.propertyIsEnumerable.call(
                              t,
                              n[i]
                            ) &&
                            (r[n[i]] = t[n[i]]);
                      return r;
                    },
                  s =
                    (this && this.__importDefault) ||
                    function (t) {
                      return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = s(
                    r(/*! prop-types */ "./node_modules/prop-types/index.js")
                  ),
                  a = o.default.oneOfType([o.default.string, o.default.number]),
                  l = {
                    all: o.default.bool,
                    grid: o.default.bool,
                    aural: o.default.bool,
                    braille: o.default.bool,
                    handheld: o.default.bool,
                    print: o.default.bool,
                    projection: o.default.bool,
                    screen: o.default.bool,
                    tty: o.default.bool,
                    tv: o.default.bool,
                    embossed: o.default.bool,
                  },
                  u = {
                    orientation: o.default.oneOf(["portrait", "landscape"]),
                    scan: o.default.oneOf(["progressive", "interlace"]),
                    aspectRatio: o.default.string,
                    deviceAspectRatio: o.default.string,
                    height: a,
                    deviceHeight: a,
                    width: a,
                    deviceWidth: a,
                    color: o.default.bool,
                    colorIndex: o.default.bool,
                    monochrome: o.default.bool,
                    resolution: a,
                    type: Object.keys(l),
                  };
                u.type;
                var c = i(u, ["type"]),
                  h = n(
                    {
                      minAspectRatio: o.default.string,
                      maxAspectRatio: o.default.string,
                      minDeviceAspectRatio: o.default.string,
                      maxDeviceAspectRatio: o.default.string,
                      minHeight: a,
                      maxHeight: a,
                      minDeviceHeight: a,
                      maxDeviceHeight: a,
                      minWidth: a,
                      maxWidth: a,
                      minDeviceWidth: a,
                      maxDeviceWidth: a,
                      minColor: o.default.number,
                      maxColor: o.default.number,
                      minColorIndex: o.default.number,
                      maxColorIndex: o.default.number,
                      minMonochrome: o.default.number,
                      maxMonochrome: o.default.number,
                      minResolution: a,
                      maxResolution: a,
                    },
                    c
                  ),
                  d = n(n({}, l), h);
                e.default = { all: d, types: l, matchers: u, features: h };
              },
              "./src/toQuery.ts": function (t, e, r) {
                "use strict";
                var n =
                  (this && this.__importDefault) ||
                  function (t) {
                    return t && t.__esModule ? t : { default: t };
                  };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = n(
                    r(
                      /*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js"
                    )
                  ),
                  s = n(r(/*! ./mediaQuery */ "./src/mediaQuery.ts")),
                  o = function (t, e) {
                    var r = (0, i.default)(t);
                    return ("number" == typeof e && (e = "".concat(e, "px")),
                    !0 === e)
                      ? r
                      : !1 === e
                      ? "not ".concat(r)
                      : "(".concat(r, ": ").concat(e, ")");
                  };
                e.default = function (t) {
                  var e = [];
                  return (
                    Object.keys(s.default.all).forEach(function (r) {
                      var n = t[r];
                      null != n && e.push(o(r, n));
                    }),
                    e.join(" and ")
                  );
                };
              },
              "./src/useMediaQuery.ts": function (t, e, r) {
                "use strict";
                var n =
                  (this && this.__importDefault) ||
                  function (t) {
                    return t && t.__esModule ? t : { default: t };
                  };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = r(/*! react */ "react"),
                  s = n(
                    r(
                      /*! matchmediaquery */ "./node_modules/matchmediaquery/index.js"
                    )
                  ),
                  o = n(
                    r(
                      /*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js"
                    )
                  ),
                  a = r(
                    /*! shallow-equal */ "./node_modules/shallow-equal/dist/index.esm.js"
                  ),
                  l = n(r(/*! ./toQuery */ "./src/toQuery.ts")),
                  u = n(r(/*! ./Context */ "./src/Context.ts")),
                  c = function (t) {
                    if (t)
                      return Object.keys(t).reduce(function (e, r) {
                        return (e[(0, o.default)(r)] = t[r]), e;
                      }, {});
                  },
                  h = function () {
                    var t = (0, i.useRef)(!1);
                    return (
                      (0, i.useEffect)(function () {
                        t.current = !0;
                      }, []),
                      t.current
                    );
                  },
                  d = function (t) {
                    var e = (0, i.useContext)(u.default),
                      r = function () {
                        return c(t) || c(e);
                      },
                      n = (0, i.useState)(r),
                      s = n[0],
                      o = n[1];
                    return (
                      (0, i.useEffect)(
                        function () {
                          var t = r();
                          (0, a.shallowEqualObjects)(s, t) || o(t);
                        },
                        [t, e]
                      ),
                      s
                    );
                  },
                  p = function (t) {
                    var e = function () {
                        return t.query || (0, l.default)(t);
                      },
                      r = (0, i.useState)(e),
                      n = r[0],
                      s = r[1];
                    return (
                      (0, i.useEffect)(
                        function () {
                          var t = e();
                          n !== t && s(t);
                        },
                        [t]
                      ),
                      n
                    );
                  },
                  f = function (t, e) {
                    var r = function () {
                        return (0, s.default)(t, e || {}, !!e);
                      },
                      n = (0, i.useState)(r),
                      o = n[0],
                      a = n[1],
                      l = h();
                    return (
                      (0, i.useEffect)(
                        function () {
                          if (l) {
                            var t = r();
                            return (
                              a(t),
                              function () {
                                t && t.dispose();
                              }
                            );
                          }
                        },
                        [t, e]
                      ),
                      o
                    );
                  },
                  m = function (t) {
                    var e = (0, i.useState)(t.matches),
                      r = e[0],
                      n = e[1];
                    return (
                      (0, i.useEffect)(
                        function () {
                          var e = function (t) {
                            n(t.matches);
                          };
                          return (
                            t.addListener(e),
                            n(t.matches),
                            function () {
                              t.removeListener(e);
                            }
                          );
                        },
                        [t]
                      ),
                      r
                    );
                  };
                e.default = function (t, e, r) {
                  var n = d(e),
                    s = p(t);
                  if (!s) throw Error("Invalid or missing MediaQuery!");
                  var o = f(s, n),
                    a = m(o),
                    l = h();
                  return (
                    (0, i.useEffect)(
                      function () {
                        l && r && r(a);
                      },
                      [a]
                    ),
                    (0, i.useEffect)(function () {
                      return function () {
                        o && o.dispose();
                      };
                    }, []),
                    a
                  );
                };
              },
              react: (t) => {
                "use strict";
                t.exports = n;
              },
            },
            e = {};
          function r(n) {
            var i = e[n];
            if (void 0 !== i) return i.exports;
            var s = (e[n] = { exports: {} });
            return t[n].call(s.exports, s, s.exports, r), s.exports;
          }
          return (
            (r.d = (t, e) => {
              for (var n in e)
                r.o(e, n) &&
                  !r.o(t, n) &&
                  Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
            }),
            (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
            (r.r = (t) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            r("./src/index.ts")
          );
        })());
    },
    47743: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return y;
        },
      });
      var n = r(86006),
        i = r(44208),
        s = r(23398);
      function o() {
        let t = (0, n.useRef)(!1);
        return (
          (0, s.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      var a = r(83043),
        l = r(10789);
      class u extends n.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c({ children: t, isPresent: e }) {
        let r = (0, n.useId)(),
          i = (0, n.useRef)(null),
          s = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: t, height: n, top: o, left: a } = s.current;
            if (e || !i.current || !t || !n) return;
            i.current.dataset.motionPopId = r;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [e]),
          n.createElement(
            u,
            { isPresent: e, childRef: i, sizeRef: s },
            n.cloneElement(t, { ref: i })
          )
        );
      }
      let h = ({
        children: t,
        initial: e,
        isPresent: r,
        onExitComplete: i,
        custom: s,
        presenceAffectsLayout: o,
        mode: u,
      }) => {
        let h = (0, l.h)(d),
          p = (0, n.useId)(),
          f = (0, n.useMemo)(
            () => ({
              id: p,
              initial: e,
              isPresent: r,
              custom: s,
              onExitComplete: (t) => {
                for (let e of (h.set(t, !0), h.values())) if (!e) return;
                i && i();
              },
              register: (t) => (h.set(t, !1), () => h.delete(t)),
            }),
            o ? void 0 : [r]
          );
        return (
          (0, n.useMemo)(() => {
            h.forEach((t, e) => h.set(e, !1));
          }, [r]),
          n.useEffect(() => {
            r || h.size || !i || i();
          }, [r]),
          "popLayout" === u && (t = n.createElement(c, { isPresent: r }, t)),
          n.createElement(a.O.Provider, { value: f }, t)
        );
      };
      function d() {
        return new Map();
      }
      var p = r(72115),
        f = r(52864);
      let m = (t) => t.key || "",
        y = ({
          children: t,
          custom: e,
          initial: r = !0,
          onExitComplete: a,
          exitBeforeEnter: l,
          presenceAffectsLayout: u = !0,
          mode: c = "sync",
        }) => {
          var d;
          (0, f.k)(!l, "Replace exitBeforeEnter with mode='wait'");
          let y =
              (0, n.useContext)(p.p).forceRender ||
              (function () {
                let t = o(),
                  [e, r] = (0, n.useState)(0),
                  s = (0, n.useCallback)(() => {
                    t.current && r(e + 1);
                  }, [e]),
                  a = (0, n.useCallback)(() => i.Wi.postRender(s), [s]);
                return [a, e];
              })()[0],
            v = o(),
            g = (function (t) {
              let e = [];
              return (
                n.Children.forEach(t, (t) => {
                  (0, n.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(t),
            x = g,
            b = (0, n.useRef)(new Map()).current,
            P = (0, n.useRef)(x),
            w = (0, n.useRef)(new Map()).current,
            S = (0, n.useRef)(!0);
          if (
            ((0, s.L)(() => {
              (S.current = !1),
                (function (t, e) {
                  t.forEach((t) => {
                    let r = m(t);
                    e.set(r, t);
                  });
                })(g, w),
                (P.current = x);
            }),
            (d = () => {
              (S.current = !0), w.clear(), b.clear();
            }),
            (0, n.useEffect)(() => () => d(), []),
            S.current)
          )
            return n.createElement(
              n.Fragment,
              null,
              x.map((t) =>
                n.createElement(
                  h,
                  {
                    key: m(t),
                    isPresent: !0,
                    initial: !!r && void 0,
                    presenceAffectsLayout: u,
                    mode: c,
                  },
                  t
                )
              )
            );
          x = [...x];
          let T = P.current.map(m),
            E = g.map(m),
            A = T.length;
          for (let t = 0; t < A; t++) {
            let e = T[t];
            -1 !== E.indexOf(e) || b.has(e) || b.set(e, void 0);
          }
          return (
            "wait" === c && b.size && (x = []),
            b.forEach((t, r) => {
              if (-1 !== E.indexOf(r)) return;
              let i = w.get(r);
              if (!i) return;
              let s = T.indexOf(r),
                o = t;
              if (!o) {
                let t = () => {
                  w.delete(r), b.delete(r);
                  let t = P.current.findIndex((t) => t.key === r);
                  if ((P.current.splice(t, 1), !b.size)) {
                    if (((P.current = g), !1 === v.current)) return;
                    y(), a && a();
                  }
                };
                (o = n.createElement(
                  h,
                  {
                    key: m(i),
                    isPresent: !1,
                    onExitComplete: t,
                    custom: e,
                    presenceAffectsLayout: u,
                    mode: c,
                  },
                  i
                )),
                  b.set(r, o);
              }
              x.splice(s, 0, o);
            }),
            (x = x.map((t) => {
              let e = t.key;
              return b.has(e)
                ? t
                : n.createElement(
                    h,
                    {
                      key: m(t),
                      isPresent: !0,
                      presenceAffectsLayout: u,
                      mode: c,
                    },
                    t
                  );
            })),
            n.createElement(
              n.Fragment,
              null,
              b.size ? x : x.map((t) => (0, n.cloneElement)(t))
            )
          );
        };
    },
    72115: function (t, e, r) {
      "use strict";
      r.d(e, {
        p: function () {
          return i;
        },
      });
      var n = r(86006);
      let i = (0, n.createContext)({});
    },
    83043: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return i;
        },
      });
      var n = r(86006);
      let i = (0, n.createContext)(null);
    },
    10651: function (t, e, r) {
      "use strict";
      r.d(e, {
        w: function () {
          return n;
        },
      });
      let n = { delta: 0, timestamp: 0, isProcessing: !1 };
    },
    44208: function (t, e, r) {
      "use strict";
      r.d(e, {
        Pn: function () {
          return d;
        },
        Wi: function () {
          return h;
        },
        S6: function () {
          return a;
        },
      });
      var n = r(10651);
      let i = !0,
        s = !1,
        o = ["read", "update", "preRender", "render", "postRender"],
        a = o.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                r = [],
                n = 0,
                i = !1,
                s = !1,
                o = new WeakSet(),
                a = {
                  schedule: (t, s = !1, a = !1) => {
                    let l = a && i,
                      u = l ? e : r;
                    return (
                      s && o.add(t),
                      -1 === u.indexOf(t) &&
                        (u.push(t), l && i && (n = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    let e = r.indexOf(t);
                    -1 !== e && r.splice(e, 1), o.delete(t);
                  },
                  process: (l) => {
                    if (i) {
                      s = !0;
                      return;
                    }
                    if (
                      ((i = !0),
                      ([e, r] = [r, e]),
                      (r.length = 0),
                      (n = e.length))
                    )
                      for (let r = 0; r < n; r++) {
                        let n = e[r];
                        n(l), o.has(n) && (a.schedule(n), t());
                      }
                    (i = !1), s && ((s = !1), a.process(l));
                  },
                };
              return a;
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        l = (t) => a[t].process(n.w),
        u = (t) => {
          (s = !1),
            (n.w.delta = i
              ? 1e3 / 60
              : Math.max(Math.min(t - n.w.timestamp, 40), 1)),
            (n.w.timestamp = t),
            (n.w.isProcessing = !0),
            o.forEach(l),
            (n.w.isProcessing = !1),
            s && ((i = !1), requestAnimationFrame(u));
        },
        c = () => {
          (s = !0), (i = !0), n.w.isProcessing || requestAnimationFrame(u);
        },
        h = o.reduce((t, e) => {
          let r = a[e];
          return (
            (t[e] = (t, e = !1, n = !1) => (s || c(), r.schedule(t, e, n))), t
          );
        }, {});
      function d(t) {
        o.forEach((e) => a[e].cancel(t));
      }
    },
    20943: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return iD;
        },
      });
      var n,
        i = r(86006);
      let s = (0, i.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        o = (0, i.createContext)({});
      var a = r(83043),
        l = r(23398);
      let u = (0, i.createContext)({ strict: !1 });
      function c(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function h(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function d(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let p = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        f = ["initial", ...p];
      function m(t) {
        return d(t.animate) || f.some((e) => h(t[e]));
      }
      function y(t) {
        return !!(m(t) || t.variants);
      }
      function v(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let g = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        x = {};
      for (let t in g) x[t] = { isEnabled: (e) => g[t].some((t) => !!e[t]) };
      var b = r(85532),
        P = r(72115);
      let w = (0, i.createContext)({}),
        S = Symbol.for("motionComponentSymbol"),
        T = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function E(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (T.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let A = {},
        C = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        j = new Set(C);
      function V(t, { layout: e, layoutId: r }) {
        return (
          j.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== r) && (!!A[t] || "opacity" === t))
        );
      }
      let k = (t) => !!(t && t.getVelocity),
        M = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        R = C.length,
        O = (t) => (e) => "string" == typeof e && e.startsWith(t),
        D = O("--"),
        L = O("var(--"),
        F = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        I = (t, e, r) => Math.min(Math.max(r, t), e),
        B = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        _ = { ...B, transform: (t) => I(0, 1, t) },
        $ = { ...B, default: 1 },
        W = (t) => Math.round(1e5 * t) / 1e5,
        U = /(-)?([\d]*\.?[\d])+/g,
        N =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        z =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function H(t) {
        return "string" == typeof t;
      }
      let q = (t) => ({
          test: (e) => H(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        Z = q("deg"),
        Y = q("%"),
        G = q("px"),
        X = q("vh"),
        K = q("vw"),
        Q = {
          ...Y,
          parse: (t) => Y.parse(t) / 100,
          transform: (t) => Y.transform(100 * t),
        },
        J = { ...B, transform: Math.round },
        tt = {
          borderWidth: G,
          borderTopWidth: G,
          borderRightWidth: G,
          borderBottomWidth: G,
          borderLeftWidth: G,
          borderRadius: G,
          radius: G,
          borderTopLeftRadius: G,
          borderTopRightRadius: G,
          borderBottomRightRadius: G,
          borderBottomLeftRadius: G,
          width: G,
          maxWidth: G,
          height: G,
          maxHeight: G,
          size: G,
          top: G,
          right: G,
          bottom: G,
          left: G,
          padding: G,
          paddingTop: G,
          paddingRight: G,
          paddingBottom: G,
          paddingLeft: G,
          margin: G,
          marginTop: G,
          marginRight: G,
          marginBottom: G,
          marginLeft: G,
          rotate: Z,
          rotateX: Z,
          rotateY: Z,
          rotateZ: Z,
          scale: $,
          scaleX: $,
          scaleY: $,
          scaleZ: $,
          skew: Z,
          skewX: Z,
          skewY: Z,
          distance: G,
          translateX: G,
          translateY: G,
          translateZ: G,
          x: G,
          y: G,
          z: G,
          perspective: G,
          transformPerspective: G,
          opacity: _,
          originX: Q,
          originY: Q,
          originZ: G,
          zIndex: J,
          fillOpacity: _,
          strokeOpacity: _,
          numOctaves: J,
        };
      function te(t, e, r, n) {
        let { style: i, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          c = !0;
        for (let t in e) {
          let r = e[t];
          if (D(t)) {
            s[t] = r;
            continue;
          }
          let n = tt[t],
            h = F(r, n);
          if (j.has(t)) {
            if (((l = !0), (o[t] = h), !c)) continue;
            r !== (n.default || 0) && (c = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = h)) : (i[t] = h);
        }
        if (
          (!e.transform &&
            (l || n
              ? (i.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: r = !0,
                  },
                  n,
                  i
                ) {
                  let s = "";
                  for (let e = 0; e < R; e++) {
                    let r = C[e];
                    if (void 0 !== t[r]) {
                      let e = M[r] || r;
                      s += `${e}(${t[r]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    i ? (s = i(t, n ? "" : s)) : r && n && (s = "none"),
                    s
                  );
                })(t.transform, r, c, n))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: r = 0 } = a;
          i.transformOrigin = `${t} ${e} ${r}`;
        }
      }
      let tr = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tn(t, e, r) {
        for (let n in e) k(e[n]) || V(n, r) || (t[n] = e[n]);
      }
      function ti(t, e, r) {
        let n = {},
          s = (function (t, e, r) {
            let n = t.style || {},
              s = {};
            return (
              tn(s, n, t),
              Object.assign(
                s,
                (function ({ transformTemplate: t }, e, r) {
                  return (0, i.useMemo)(() => {
                    let n = tr();
                    return (
                      te(n, e, { enableHardwareAcceleration: !r }, t),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [e]);
                })(t, e, r)
              ),
              t.transformValues ? t.transformValues(s) : s
            );
          })(t, e, r);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((n.draggable = !1),
            (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
            (s.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (n.tabIndex = 0),
          (n.style = s),
          n
        );
      }
      let ts = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function to(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          ts.has(t)
        );
      }
      let ta = (t) => !to(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (ta = (t) => (t.startsWith("on") ? !to(t) : n(t)));
      } catch (t) {}
      function tl(t, e, r) {
        return "string" == typeof t ? t : G.transform(e + r * t);
      }
      let tu = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tc = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function th(
        t,
        {
          attrX: e,
          attrY: r,
          attrScale: n,
          originX: i,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        h,
        d
      ) {
        if ((te(t, u, c, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: f, dimensions: m } = t;
        p.transform && (m && (f.transform = p.transform), delete p.transform),
          m &&
            (void 0 !== i || void 0 !== s || f.transform) &&
            (f.transformOrigin = (function (t, e, r) {
              let n = tl(e, t.x, t.width),
                i = tl(r, t.y, t.height);
              return `${n} ${i}`;
            })(m, void 0 !== i ? i : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== r && (p.y = r),
          void 0 !== n && (p.scale = n),
          void 0 !== o &&
            (function (t, e, r = 1, n = 0, i = !0) {
              t.pathLength = 1;
              let s = i ? tu : tc;
              t[s.offset] = G.transform(-n);
              let o = G.transform(e),
                a = G.transform(r);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let td = () => ({ ...tr(), attrs: {} }),
        tp = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tf(t, e, r, n) {
        let s = (0, i.useMemo)(() => {
          let r = td();
          return (
            th(
              r,
              e,
              { enableHardwareAcceleration: !1 },
              tp(n),
              t.transformTemplate
            ),
            { ...r.attrs, style: { ...r.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          tn(e, t.style, t), (s.style = { ...e, ...s.style });
        }
        return s;
      }
      let tm = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function ty(t, { style: e, vars: r }, n, i) {
        for (let s in (Object.assign(t.style, e, i && i.getProjectionStyles(n)),
        r))
          t.style.setProperty(s, r[s]);
      }
      let tv = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tg(t, e, r, n) {
        for (let r in (ty(t, e, void 0, n), e.attrs))
          t.setAttribute(tv.has(r) ? r : tm(r), e.attrs[r]);
      }
      function tx(t, e) {
        let { style: r } = t,
          n = {};
        for (let i in r)
          (k(r[i]) || (e.style && k(e.style[i])) || V(i, t)) && (n[i] = r[i]);
        return n;
      }
      function tb(t, e) {
        let r = tx(t, e);
        for (let n in t)
          if (k(t[n]) || k(e[n])) {
            let e =
              -1 !== C.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n;
            r[e] = t[n];
          }
        return r;
      }
      function tP(t, e, r, n = {}, i = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
          e
        );
      }
      var tw = r(10789);
      let tS = (t) => Array.isArray(t),
        tT = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tE = (t) => (tS(t) ? t[t.length - 1] || 0 : t);
      function tA(t) {
        let e = k(t) ? t.get() : t;
        return tT(e) ? e.toValue() : e;
      }
      let tC = (t) => (e, r) => {
          let n = (0, i.useContext)(o),
            s = (0, i.useContext)(a.O),
            l = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: r,
                },
                n,
                i,
                s
              ) {
                let o = {
                  latestValues: (function (t, e, r, n) {
                    let i = {},
                      s = n(t, {});
                    for (let t in s) i[t] = tA(s[t]);
                    let { initial: o, animate: a } = t,
                      l = m(t),
                      u = y(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let c = !!r && !1 === r.initial;
                    c = c || !1 === o;
                    let h = c ? a : o;
                    if (h && "boolean" != typeof h && !d(h)) {
                      let e = Array.isArray(h) ? h : [h];
                      e.forEach((e) => {
                        let r = tP(t, e);
                        if (!r) return;
                        let { transitionEnd: n, transition: s, ...o } = r;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = c ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (i[t] = e);
                        }
                        for (let t in n) i[t] = n[t];
                      });
                    }
                    return i;
                  })(n, i, s, t),
                  renderState: e(),
                };
                return r && (o.mount = (t) => r(n, t, o)), o;
              })(t, e, n, s);
          return r ? l() : (0, tw.h)(l);
        },
        tj = {
          useVisualState: tC({
            scrapeMotionValuesFromProps: tb,
            createRenderState: td,
            onMount: (t, e, { renderState: r, latestValues: n }) => {
              try {
                r.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              th(
                r,
                n,
                { enableHardwareAcceleration: !1 },
                tp(e.tagName),
                t.transformTemplate
              ),
                tg(e, r);
            },
          }),
        },
        tV = {
          useVisualState: tC({
            scrapeMotionValuesFromProps: tx,
            createRenderState: tr,
          }),
        };
      function tk(t, e, r, n = { passive: !0 }) {
        return t.addEventListener(e, r, n), () => t.removeEventListener(e, r);
      }
      let tM = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tR(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tO = (t) => (e) => tM(e) && t(e, tR(e));
      function tD(t, e, r, n) {
        return tk(t, e, tO(r), n);
      }
      let tL = (t, e) => (r) => e(t(r)),
        tF = (...t) => t.reduce(tL);
      function tI(t) {
        let e = null;
        return () => {
          let r = () => {
            e = null;
          };
          return null === e && ((e = t), r);
        };
      }
      let tB = tI("dragHorizontal"),
        t_ = tI("dragVertical");
      function t$(t) {
        let e = !1;
        if ("y" === t) e = t_();
        else if ("x" === t) e = tB();
        else {
          let t = tB(),
            r = t_();
          t && r
            ? (e = () => {
                t(), r();
              })
            : (t && t(), r && r());
        }
        return e;
      }
      function tW() {
        let t = t$(!0);
        return !t || (t(), !1);
      }
      class tU {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      var tN = r(44208);
      function tz(t, e) {
        let r = "onHover" + (e ? "Start" : "End"),
          n = (n, i) => {
            if ("touch" === n.type || tW()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[r] && tN.Wi.update(() => s[r](n, i));
          };
        return tD(t.current, "pointer" + (e ? "enter" : "leave"), n, {
          passive: !t.getProps()[r],
        });
      }
      let tH = (t, e) => !!e && (t === e || tH(t, e.parentElement));
      var tq = r(19153);
      function tZ(t, e) {
        if (!e) return;
        let r = new PointerEvent("pointer" + t);
        e(r, tR(r));
      }
      let tY = new WeakMap(),
        tG = new WeakMap(),
        tX = (t) => {
          let e = tY.get(t.target);
          e && e(t);
        },
        tK = (t) => {
          t.forEach(tX);
        },
        tQ = { some: 0, all: 1 };
      function tJ(t, e) {
        if (!Array.isArray(e)) return !1;
        let r = e.length;
        if (r !== t.length) return !1;
        for (let n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function t0(t, e, r) {
        let n = t.getProps();
        return tP(
          n,
          e,
          void 0 !== r ? r : n.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, r) => (e[r] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, r) => (e[r] = t.getVelocity())), e;
          })(t)
        );
      }
      let t1 = "data-" + tm("framerAppearId");
      var t5 = r(52864);
      let t2 = (t) => 1e3 * t,
        t3 = (t) => t / 1e3,
        t6 = { current: !1 },
        t9 = (t) => Array.isArray(t) && "number" == typeof t[0],
        t4 = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
        t8 = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: t4([0, 0.65, 0.55, 1]),
          circOut: t4([0.55, 0, 1, 0.45]),
          backIn: t4([0.31, 0.01, 0.66, -0.59]),
          backOut: t4([0.33, 1.53, 0.69, 0.99]),
        },
        t7 = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        et = {},
        ee = {};
      for (let t in t7)
        ee[t] = () => (void 0 === et[t] && (et[t] = t7[t]()), et[t]);
      let er = (t, e, r) =>
        (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function en(t, e, r, n) {
        if (t === e && r === n) return tq.Z;
        let i = (e) =>
          (function (t, e, r, n, i) {
            let s, o;
            let a = 0;
            do
              (s = er((o = e + (r - e) / 2), n, i) - t) > 0 ? (r = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, r);
        return (t) => (0 === t || 1 === t ? t : er(i(t), e, n));
      }
      let ei = en(0.42, 0, 1, 1),
        es = en(0, 0, 0.58, 1),
        eo = en(0.42, 0, 0.58, 1),
        ea = (t) => Array.isArray(t) && "number" != typeof t[0],
        el = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        eu = (t) => (e) => 1 - t(1 - e),
        ec = (t) => 1 - Math.sin(Math.acos(t)),
        eh = eu(ec),
        ed = el(eh),
        ep = en(0.33, 1.53, 0.69, 0.99),
        ef = eu(ep),
        em = el(ef),
        ey = (t) =>
          (t *= 2) < 1 ? 0.5 * ef(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        ev = {
          linear: tq.Z,
          easeIn: ei,
          easeInOut: eo,
          easeOut: es,
          circIn: ec,
          circInOut: ed,
          circOut: eh,
          backIn: ef,
          backInOut: em,
          backOut: ep,
          anticipate: ey,
        },
        eg = (t) => {
          if (Array.isArray(t)) {
            (0, t5.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, r, n, i] = t;
            return en(e, r, n, i);
          }
          return "string" == typeof t
            ? ((0, t5.k)(void 0 !== ev[t], `Invalid easing type '${t}'`), ev[t])
            : t;
        },
        ex = (t, e) => (r) =>
          !!(
            (H(r) && z.test(r) && r.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(r, e))
          ),
        eb = (t, e, r) => (n) => {
          if (!H(n)) return n;
          let [i, s, o, a] = n.match(U);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(s),
            [r]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eP = (t) => I(0, 255, t),
        ew = { ...B, transform: (t) => Math.round(eP(t)) },
        eS = {
          test: ex("rgb", "red"),
          parse: eb("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            ew.transform(t) +
            ", " +
            ew.transform(e) +
            ", " +
            ew.transform(r) +
            ", " +
            W(_.transform(n)) +
            ")",
        },
        eT = {
          test: ex("#"),
          parse: function (t) {
            let e = "",
              r = "",
              n = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (r = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (i = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (r = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (i = t.substring(4, 5)),
                  (e += e),
                  (r += r),
                  (n += n),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: eS.transform,
        },
        eE = {
          test: ex("hsl", "hue"),
          parse: eb("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: r, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            Y.transform(W(e)) +
            ", " +
            Y.transform(W(r)) +
            ", " +
            W(_.transform(n)) +
            ")",
        },
        eA = {
          test: (t) => eS.test(t) || eT.test(t) || eE.test(t),
          parse: (t) =>
            eS.test(t) ? eS.parse(t) : eE.test(t) ? eE.parse(t) : eT.parse(t),
          transform: (t) =>
            H(t)
              ? t
              : t.hasOwnProperty("red")
              ? eS.transform(t)
              : eE.transform(t),
        },
        eC = (t, e, r) => -r * t + r * e + t;
      function ej(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? t + (e - t) * 6 * r
          : r < 0.5
          ? e
          : r < 2 / 3
          ? t + (e - t) * (2 / 3 - r) * 6
          : t;
      }
      let eV = (t, e, r) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, r * (e * e - n) + n));
        },
        ek = [eT, eS, eE],
        eM = (t) => ek.find((e) => e.test(t));
      function eR(t) {
        let e = eM(t);
        (0, t5.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = e.parse(t);
        return (
          e === eE &&
            (r = (function ({ hue: t, saturation: e, lightness: r, alpha: n }) {
              (t /= 360), (r /= 100);
              let i = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = r < 0.5 ? r * (1 + e) : r + e - r * e,
                  a = 2 * r - n;
                (i = ej(a, n, t + 1 / 3)),
                  (s = ej(a, n, t)),
                  (o = ej(a, n, t - 1 / 3));
              } else i = s = o = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let eO = (t, e) => {
          let r = eR(t),
            n = eR(e),
            i = { ...r };
          return (t) => (
            (i.red = eV(r.red, n.red, t)),
            (i.green = eV(r.green, n.green, t)),
            (i.blue = eV(r.blue, n.blue, t)),
            (i.alpha = eC(r.alpha, n.alpha, t)),
            eS.transform(i)
          );
        },
        eD = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: tq.Z,
        },
        eL = { regex: N, countKey: "Colors", token: "${c}", parse: eA.parse },
        eF = { regex: U, countKey: "Numbers", token: "${n}", parse: B.parse };
      function eI(t, { regex: e, countKey: r, token: n, parse: i }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + r] = s.length),
          (t.tokenised = t.tokenised.replace(e, n)),
          t.values.push(...s.map(i)));
      }
      function eB(t) {
        let e = t.toString(),
          r = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return r.value.includes("var(--") && eI(r, eD), eI(r, eL), eI(r, eF), r;
      }
      function e_(t) {
        return eB(t).values;
      }
      function e$(t) {
        let { values: e, numColors: r, numVars: n, tokenised: i } = eB(t),
          s = e.length;
        return (t) => {
          let e = i;
          for (let i = 0; i < s; i++)
            e =
              i < n
                ? e.replace(eD.token, t[i])
                : i < n + r
                ? e.replace(eL.token, eA.transform(t[i]))
                : e.replace(eF.token, W(t[i]));
          return e;
        };
      }
      let eW = (t) => ("number" == typeof t ? 0 : t),
        eU = {
          test: function (t) {
            var e, r;
            return (
              isNaN(t) &&
              H(t) &&
              ((null === (e = t.match(U)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (r = t.match(N)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: e_,
          createTransformer: e$,
          getAnimatableNone: function (t) {
            let e = e_(t),
              r = e$(t);
            return r(e.map(eW));
          },
        },
        eN = (t, e) => (r) => `${r > 0 ? e : t}`;
      function ez(t, e) {
        return "number" == typeof t
          ? (r) => eC(t, e, r)
          : eA.test(t)
          ? eO(t, e)
          : t.startsWith("var(")
          ? eN(t, e)
          : eZ(t, e);
      }
      let eH = (t, e) => {
          let r = [...t],
            n = r.length,
            i = t.map((t, r) => ez(t, e[r]));
          return (t) => {
            for (let e = 0; e < n; e++) r[e] = i[e](t);
            return r;
          };
        },
        eq = (t, e) => {
          let r = { ...t, ...e },
            n = {};
          for (let i in r)
            void 0 !== t[i] && void 0 !== e[i] && (n[i] = ez(t[i], e[i]));
          return (t) => {
            for (let e in n) r[e] = n[e](t);
            return r;
          };
        },
        eZ = (t, e) => {
          let r = eU.createTransformer(e),
            n = eB(t),
            i = eB(e),
            s =
              n.numVars === i.numVars &&
              n.numColors === i.numColors &&
              n.numNumbers >= i.numNumbers;
          return s
            ? tF(eH(n.values, i.values), r)
            : ((0, t5.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              eN(t, e));
        },
        eY = (t, e, r) => {
          let n = e - t;
          return 0 === n ? 1 : (r - t) / n;
        },
        eG = (t, e) => (r) => eC(t, e, r);
      function eX(t, e, { clamp: r = !0, ease: n, mixer: i } = {}) {
        let s = t.length;
        if (
          ((0, t5.k)(
            s === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === s)
        )
          return () => e[0];
        t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let o = (function (t, e, r) {
            let n = [],
              i =
                r ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return eA.test(t) ? eO : eZ;
                  else if (Array.isArray(t)) return eH;
                  else if ("object" == typeof t) return eq;
                  return eG;
                })(t[0]),
              s = t.length - 1;
            for (let r = 0; r < s; r++) {
              let s = i(t[r], t[r + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[r] || tq.Z : e;
                s = tF(t, s);
              }
              n.push(s);
            }
            return n;
          })(e, n, i),
          a = o.length,
          l = (e) => {
            let r = 0;
            if (a > 1) for (; r < t.length - 2 && !(e < t[r + 1]); r++);
            let n = eY(t[r], t[r + 1], e);
            return o[r](n);
          };
        return r ? (e) => l(I(t[0], t[s - 1], e)) : l;
      }
      function eK({
        duration: t = 300,
        keyframes: e,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = ea(n) ? n.map(eg) : eg(n),
          s = { done: !1, value: e[0] },
          o = (
            r && r.length === e.length
              ? r
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let r = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let i = eY(0, e, n);
                        t.push(eC(r, 1, i));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          a = eX(o, e, {
            ease: Array.isArray(i)
              ? i
              : e.map(() => i || eo).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      function eQ(t, e, r) {
        var n, i;
        let s = Math.max(e - 5, 0);
        return (n = r - t(s)), (i = e - s) ? n * (1e3 / i) : 0;
      }
      function eJ(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let e0 = ["duration", "bounce"],
        e1 = ["stiffness", "damping", "mass"];
      function e5(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function e2({ keyframes: t, restDelta: e, restSpeed: r, ...n }) {
        let i;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: c,
            velocity: h,
            duration: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!e5(t, e1) && e5(t, e0)) {
              let r = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: r = 0,
                mass: n = 1,
              }) {
                let i, s;
                (0, t5.K)(
                  t <= t2(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = I(0.05, 1, o)),
                  (t = I(0.01, 10, t3(t))),
                  o < 1
                    ? ((i = (e) => {
                        let n = e * o,
                          i = n * t,
                          s = eJ(e, o);
                        return 0.001 - ((n - r) / s) * Math.exp(-i);
                      }),
                      (s = (e) => {
                        let n = e * o,
                          s = n * t,
                          a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          l = eJ(Math.pow(e, 2), o),
                          u = -i(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((s * r + r - a) * Math.exp(-s))) / l;
                      }))
                    : ((i = (e) => {
                        let n = Math.exp(-e * t),
                          i = (e - r) * t + 1;
                        return -0.001 + n * i;
                      }),
                      (s = (e) => {
                        let n = Math.exp(-e * t),
                          i = (r - e) * (t * t);
                        return n * i;
                      }));
                let a = 5 / t,
                  l = (function (t, e, r) {
                    let n = r;
                    for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                    return n;
                  })(i, s, a);
                if (((t = t2(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...r,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(n),
          f = h ? -t3(h) : 0,
          m = u / (2 * Math.sqrt(l * c)),
          y = o - s,
          v = t3(Math.sqrt(l / c)),
          g = 5 > Math.abs(y);
        if ((r || (r = g ? 0.01 : 2), e || (e = g ? 0.005 : 0.5), m < 1)) {
          let t = eJ(v, m);
          i = (e) =>
            o -
            Math.exp(-m * v * e) *
              (((f + m * v * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === m)
          i = (t) => o - Math.exp(-v * t) * (y + (f + v * y) * t);
        else {
          let t = v * Math.sqrt(m * m - 1);
          i = (e) => {
            let r = Math.min(t * e, 300);
            return (
              o -
              (Math.exp(-m * v * e) *
                ((f + m * v * y) * Math.sinh(r) + t * y * Math.cosh(r))) /
                t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let n = i(t);
            if (p) a.done = t >= d;
            else {
              let s = f;
              0 !== t && (s = m < 1 ? eQ(i, t, n) : 0);
              let l = Math.abs(s) <= r,
                u = Math.abs(o - n) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : n), a;
          },
        };
      }
      function e3({
        keyframes: t,
        velocity: e = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let h, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          y = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = r * e,
          g = p + v,
          x = void 0 === o ? g : o(g);
        x !== g && (v = x - p);
        let b = (t) => -v * Math.exp(-t / n),
          P = (t) => x + b(t),
          w = (t) => {
            let e = b(t),
              r = P(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : r);
          },
          S = (t) => {
            m(f.value) &&
              ((h = t),
              (d = e2({
                keyframes: [f.value, y(f.value)],
                velocity: eQ(P, t, f.value),
                damping: i,
                stiffness: s,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== h || ((e = !0), w(t), S(t)),
              void 0 !== h && t > h)
                ? d.next(t - h)
                : (e || w(t), f);
            },
          }
        );
      }
      var e6 = r(10651);
      let e9 = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => tN.Wi.update(e, !0),
          stop: () => (0, tN.Pn)(e),
          now: () => (e6.w.isProcessing ? e6.w.timestamp : performance.now()),
        };
      };
      function e4(t) {
        let e = 0,
          r = t.next(e);
        for (; !r.done && e < 2e4; ) (e += 50), (r = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let e8 = { decay: e3, inertia: e3, tween: eK, keyframes: eK, spring: e2 };
      function e7({
        autoplay: t = !0,
        delay: e = 0,
        driver: r = e9,
        keyframes: n,
        type: i = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: h,
        ...d
      }) {
        let p,
          f,
          m,
          y,
          v,
          g = 1,
          x = !1,
          b = () => {
            p && p(),
              (f = new Promise((t) => {
                p = t;
              }));
          };
        b();
        let P = e8[i] || eK;
        P !== eK &&
          "number" != typeof n[0] &&
          ((y = eX([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let w = P({ ...d, keyframes: n });
        "mirror" === a &&
          (v = P({
            ...d,
            keyframes: [...n].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let S = "idle",
          T = null,
          E = null,
          A = null;
        null === w.calculatedDuration && s && (w.calculatedDuration = e4(w));
        let { calculatedDuration: C } = w,
          j = 1 / 0,
          V = 1 / 0;
        null !== C && (V = (j = C + o) * (s + 1) - o);
        let k = 0,
          M = (t) => {
            if (null === E) return;
            g > 0 && (E = Math.min(E, t)), (k = null !== T ? T : (t - E) * g);
            let r = k - e,
              i = r < 0;
            (k = Math.max(r, 0)), "finished" === S && null === T && (k = V);
            let l = k,
              u = w;
            if (s) {
              let t = k / j,
                e = Math.floor(t),
                r = t % 1;
              !r && t >= 1 && (r = 1), 1 === r && e--, (e = Math.min(e, s + 1));
              let n = !!(e % 2);
              n &&
                ("reverse" === a
                  ? ((r = 1 - r), o && (r -= o / j))
                  : "mirror" === a && (u = v));
              let i = I(0, 1, r);
              k > V && (i = "reverse" === a && n ? 1 : 0), (l = i * j);
            }
            let c = i ? { done: !1, value: n[0] } : u.next(l);
            y && (c.value = y(c.value));
            let { done: d } = c;
            i || null === C || (d = k >= V);
            let p =
              null === T &&
              ("finished" === S || ("running" === S && d) || (g < 0 && k <= 0));
            return h && h(c.value), p && D(), c;
          },
          R = () => {
            m && m.stop(), (m = void 0);
          },
          O = () => {
            (S = "idle"), R(), b(), (E = A = null);
          },
          D = () => {
            (S = "finished"), c && c(), R(), b();
          },
          L = () => {
            if (x) return;
            m || (m = r(M));
            let t = m.now();
            l && l(),
              null !== T ? (E = t - T) : (E && "finished" !== S) || (E = t),
              (A = E),
              (T = null),
              (S = "running"),
              m.start();
          };
        t && L();
        let F = {
          then: (t, e) => f.then(t, e),
          get time() {
            return t3(k);
          },
          set time(newTime) {
            (k = newTime = t2(newTime)),
              null === T && m && 0 !== g
                ? (E = m.now() - newTime / g)
                : (T = newTime);
          },
          get duration() {
            let t =
              null === w.calculatedDuration ? e4(w) : w.calculatedDuration;
            return t3(t);
          },
          get speed() {
            return g;
          },
          set speed(newSpeed) {
            if (newSpeed === g || !m) return;
            (g = newSpeed), (F.time = t3(k));
          },
          get state() {
            return S;
          },
          play: L,
          pause: () => {
            (S = "paused"), (T = k);
          },
          stop: () => {
            (x = !0), "idle" !== S && ((S = "idle"), u && u(), O());
          },
          cancel: () => {
            null !== A && M(A), O();
          },
          complete: () => {
            S = "finished";
          },
          sample: (t) => ((E = 0), M(t)),
        };
        return F;
      }
      let rt = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        re = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && t8[e]) ||
              t9(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        rr = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        rn = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ri = { type: "keyframes", duration: 0.8 },
        rs = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ro = (t, { keyframes: e }) =>
          e.length > 2
            ? ri
            : j.has(t)
            ? t.startsWith("scale")
              ? rn(e[1])
              : rr
            : rs,
        ra = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (eU.test(e) || "0" === e) &&
              !e.startsWith("url("))
          ),
        rl = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ru(t) {
        let [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = r.match(U) || [];
        if (!n) return t;
        let i = r.replace(n, ""),
          s = rl.has(e) ? 1 : 0;
        return n !== r && (s *= 100), e + "(" + s + i + ")";
      }
      let rc = /([a-z-]*)\(.*?\)/g,
        rh = {
          ...eU,
          getAnimatableNone: (t) => {
            let e = t.match(rc);
            return e ? e.map(ru).join(" ") : t;
          },
        },
        rd = {
          ...tt,
          color: eA,
          backgroundColor: eA,
          outlineColor: eA,
          fill: eA,
          stroke: eA,
          borderColor: eA,
          borderTopColor: eA,
          borderRightColor: eA,
          borderBottomColor: eA,
          borderLeftColor: eA,
          filter: rh,
          WebkitFilter: rh,
        },
        rp = (t) => rd[t];
      function rf(t, e) {
        let r = rp(t);
        return (
          r !== rh && (r = eU),
          r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        );
      }
      let rm = (t) => /^0[^.\s]+$/.test(t);
      function ry(t, e) {
        return t[e] || t.default || t;
      }
      let rv =
        (t, e, r, n = {}) =>
        (i) => {
          let s = ry(n, t) || {},
            o = s.delay || n.delay || 0,
            { elapsed: a = 0 } = n;
          a -= t2(o);
          let l = (function (t, e, r, n) {
              let i, s;
              let o = ra(e, r);
              i = Array.isArray(r) ? [...r] : [null, r];
              let a = void 0 !== n.from ? n.from : t.get(),
                l = [];
              for (let t = 0; t < i.length; t++) {
                var u;
                (null === i[t] && (i[t] = 0 === t ? a : i[t - 1]),
                "number" == typeof (u = i[t])
                  ? 0 === u
                  : null !== u
                  ? "none" === u || "0" === u || rm(u)
                  : void 0)
                  ? l.push(t)
                  : "string" == typeof i[t] && (s = i[t]);
              }
              if (o && l.length && s)
                for (let t = 0; t < l.length; t++) {
                  let r = l[t];
                  i[r] = rf(e, s);
                }
              return i;
            })(e, t, r, s),
            u = l[0],
            c = l[l.length - 1],
            h = ra(t, u),
            d = ra(t, c);
          (0, t5.K)(
            h === d,
            `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`
          );
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -a,
            onUpdate: (t) => {
              e.set(t), s.onUpdate && s.onUpdate(t);
            },
            onComplete: () => {
              i(), s.onComplete && s.onComplete();
            },
          };
          if (
            (!(function ({
              when: t,
              delay: e,
              delayChildren: r,
              staggerChildren: n,
              staggerDirection: i,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(s) && (p = { ...p, ...ro(t, p) }),
            p.duration && (p.duration = t2(p.duration)),
            p.repeatDelay && (p.repeatDelay = t2(p.repeatDelay)),
            !h || !d || t6.current || !1 === s.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: r,
              onComplete: n,
            }) {
              let i = () => (
                r && r(t[t.length - 1]),
                n && n(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: tq.Z,
                  pause: tq.Z,
                  stop: tq.Z,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: tq.Z,
                  complete: tq.Z,
                }
              );
              return e
                ? e7({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: i,
                  })
                : i();
            })(p);
          if (
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let r = (function (t, e, { onUpdate: r, onComplete: n, ...i }) {
              let s, o;
              let a =
                ee.waapi() &&
                rt.has(e) &&
                !i.repeatDelay &&
                "mirror" !== i.repeatType &&
                0 !== i.damping &&
                "inertia" !== i.type;
              if (!a) return !1;
              let l = !1,
                u = () => {
                  o = new Promise((t) => {
                    s = t;
                  });
                };
              u();
              let { keyframes: c, duration: h = 300, ease: d, times: p } = i;
              if (re(e, i)) {
                let t = e7({ ...i, repeat: 0, delay: 0 }),
                  e = { done: !1, value: c[0] },
                  r = [],
                  n = 0;
                for (; !e.done && n < 2e4; )
                  r.push((e = t.sample(n)).value), (n += 10);
                (p = void 0), (c = r), (h = n - 10), (d = "linear");
              }
              let f = (function (
                  t,
                  e,
                  r,
                  {
                    delay: n = 0,
                    duration: i,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  let u = { [e]: r };
                  l && (u.offset = l);
                  let c = (function t(e) {
                    if (e)
                      return t9(e)
                        ? t4(e)
                        : Array.isArray(e)
                        ? e.map(t)
                        : t8[e];
                  })(a);
                  return (
                    Array.isArray(c) && (u.easing = c),
                    t.animate(u, {
                      delay: n,
                      duration: i,
                      easing: Array.isArray(c) ? "linear" : c,
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === o ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, c, {
                  ...i,
                  duration: h,
                  ease: d,
                  times: p,
                }),
                m = () => f.cancel(),
                y = () => {
                  tN.Wi.update(m), s(), u();
                };
              return (
                (f.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: r = "loop" }) {
                      let n =
                        e && "loop" !== r && e % 2 == 1 ? 0 : t.length - 1;
                      return t[n];
                    })(c, i)
                  ),
                    n && n(),
                    y();
                }),
                {
                  then: (t, e) => o.then(t, e),
                  get time() {
                    return t3(f.currentTime || 0);
                  },
                  set time(newTime) {
                    f.currentTime = t2(newTime);
                  },
                  get speed() {
                    return f.playbackRate;
                  },
                  set speed(newSpeed) {
                    f.playbackRate = newSpeed;
                  },
                  get duration() {
                    return t3(h);
                  },
                  play: () => {
                    l || (f.play(), (0, tN.Pn)(m));
                  },
                  pause: () => f.pause(),
                  stop: () => {
                    if (((l = !0), "idle" === f.playState)) return;
                    let { currentTime: e } = f;
                    if (e) {
                      let r = e7({ ...i, autoplay: !1 });
                      t.setWithVelocity(
                        r.sample(e - 10).value,
                        r.sample(e).value,
                        10
                      );
                    }
                    y();
                  },
                  complete: () => f.finish(),
                  cancel: y,
                }
              );
            })(e, t, p);
            if (r) return r;
          }
          return e7(p);
        };
      function rg(t) {
        return !!(k(t) && t.add);
      }
      let rx = (t) => /^\-?\d*\.?\d+$/.test(t);
      function rb(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function rP(t, e) {
        let r = t.indexOf(e);
        r > -1 && t.splice(r, 1);
      }
      class rw {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return rb(this.subscriptions, t), () => rP(this.subscriptions, t);
        }
        notify(t, e, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(t, e, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let rS = (t) => !isNaN(parseFloat(t));
      class rT {
        constructor(t, e = {}) {
          (this.version = "10.12.10"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: r, timestamp: n } = e6.w;
              this.lastUpdated !== n &&
                ((this.timeDelta = r),
                (this.lastUpdated = n),
                tN.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              tN.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = rS(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new rw());
          let r = this.events[t].add(e);
          return "change" === t
            ? () => {
                r(),
                  tN.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, r) {
          this.set(e), (this.prev = t), (this.timeDelta = r);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t, e;
          return this.canTrackVelocity
            ? ((t = parseFloat(this.current) - parseFloat(this.prev)),
              (e = this.timeDelta) ? t * (1e3 / e) : 0)
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function rE(t, e) {
        return new rT(t, e);
      }
      let rA = (t) => (e) => e.test(t),
        rC = [B, G, Y, Z, K, X, { test: (t) => "auto" === t, parse: (t) => t }],
        rj = (t) => rC.find(rA(t)),
        rV = [...rC, eA, eU],
        rk = (t) => rV.find(rA(t));
      function rM(t, e, { delay: r = 0, transitionOverride: n, type: i } = {}) {
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        n && (s = n);
        let u = [],
          c = i && t.animationState && t.animationState.getState()[i];
        for (let e in a) {
          let n = t.getValue(e),
            i = a[e];
          if (
            !n ||
            void 0 === i ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, r) {
                let n = t.hasOwnProperty(r) && !0 !== e[r];
                return (e[r] = !1), n;
              })(c, e))
          )
            continue;
          let o = { delay: r, elapsed: 0, ...s };
          if (window.HandoffAppearAnimations && !n.hasAnimated) {
            let r = t.getProps()[t1];
            r && (o.elapsed = window.HandoffAppearAnimations(r, e, n, tN.Wi));
          }
          n.start(
            rv(e, n, i, t.shouldReduceMotion && j.has(e) ? { type: !1 } : o)
          );
          let h = n.animation;
          rg(l) && (l.add(e), h.then(() => l.remove(e))), u.push(h);
        }
        return (
          o &&
            Promise.all(u).then(() => {
              o &&
                (function (t, e) {
                  let r = t0(t, e),
                    {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...s
                    } = r ? t.makeTargetAnimatable(r, !1) : {};
                  for (let e in (s = { ...s, ...n })) {
                    var o;
                    let r = tE(s[e]);
                    (o = e),
                      t.hasValue(o)
                        ? t.getValue(o).set(r)
                        : t.addValue(o, rE(r));
                  }
                })(t, o);
            }),
          u
        );
      }
      function rR(t, e, r = {}) {
        let n = t0(t, e, r.custom),
          { transition: i = t.getDefaultTransition() || {} } = n || {};
        r.transitionOverride && (i = r.transitionOverride);
        let s = n ? () => Promise.all(rM(t, n, r)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = i;
                  return (function (t, e, r = 0, n = 0, i = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === i ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(rO)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              rR(t, e, { ...s, delay: r + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + n, o, a, r);
                }
              : () => Promise.resolve(),
          { when: a } = i;
        if (!a) return Promise.all([s(), o(r.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function rO(t, e) {
        return t.sortNodePosition(e);
      }
      let rD = [...p].reverse(),
        rL = p.length;
      function rF(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let rI = 0,
        rB = (t, e) => Math.abs(t - e);
      class r_ {
        constructor(t, e, { transformPagePoint: r } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = rU(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                r =
                  (function (t, e) {
                    let r = rB(t.x, e.x),
                      n = rB(t.y, e.y);
                    return Math.sqrt(r ** 2 + n ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !r) return;
              let { point: n } = t,
                { timestamp: i } = e6.w;
              this.history.push({ ...n, timestamp: i });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = r$(e, this.transformPagePoint)),
                tN.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: r, onSessionEnd: n } = this.handlers,
                i = rU(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : r$(e, this.transformPagePoint),
                  this.history
                );
              this.startEvent && r && r(t, i), n && n(t, i);
            }),
            !tM(t))
          )
            return;
          (this.handlers = e), (this.transformPagePoint = r);
          let n = tR(t),
            i = r$(n, this.transformPagePoint),
            { point: s } = i,
            { timestamp: o } = e6.w;
          this.history = [{ ...s, timestamp: o }];
          let { onSessionStart: a } = e;
          a && a(t, rU(i, this.history)),
            (this.removeListeners = tF(
              tD(window, "pointermove", this.handlePointerMove),
              tD(window, "pointerup", this.handlePointerUp),
              tD(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tN.Pn)(this.updatePoint);
        }
      }
      function r$(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function rW(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function rU({ point: t }, e) {
        return {
          point: t,
          delta: rW(t, rN(e)),
          offset: rW(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let r = t.length - 1,
              n = null,
              i = rN(t);
            for (
              ;
              r >= 0 && ((n = t[r]), !(i.timestamp - n.timestamp > t2(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let s = t3(i.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (i.x - n.x) / s, y: (i.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function rN(t) {
        return t[t.length - 1];
      }
      function rz(t) {
        return t.max - t.min;
      }
      function rH(t, e = 0, r = 0.01) {
        return Math.abs(t - e) <= r;
      }
      function rq(t, e, r, n = 0.5) {
        (t.origin = n),
          (t.originPoint = eC(e.min, e.max, t.origin)),
          (t.scale = rz(r) / rz(e)),
          (rH(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = eC(r.min, r.max, t.origin) - t.originPoint),
          (rH(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function rZ(t, e, r, n) {
        rq(t.x, e.x, r.x, n ? n.originX : void 0),
          rq(t.y, e.y, r.y, n ? n.originY : void 0);
      }
      function rY(t, e, r) {
        (t.min = r.min + e.min), (t.max = t.min + rz(e));
      }
      function rG(t, e, r) {
        (t.min = e.min - r.min), (t.max = t.min + rz(e));
      }
      function rX(t, e, r) {
        rG(t.x, e.x, r.x), rG(t.y, e.y, r.y);
      }
      function rK(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0,
        };
      }
      function rQ(t, e) {
        let r = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([r, n] = [n, r]), { min: r, max: n }
        );
      }
      function rJ(t, e, r) {
        return { min: r0(t, e), max: r0(t, r) };
      }
      function r0(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let r1 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r5 = () => ({ x: r1(), y: r1() }),
        r2 = () => ({ min: 0, max: 0 }),
        r3 = () => ({ x: r2(), y: r2() });
      function r6(t) {
        return [t("x"), t("y")];
      }
      function r9({ top: t, left: e, right: r, bottom: n }) {
        return { x: { min: e, max: r }, y: { min: t, max: n } };
      }
      function r4(t) {
        return void 0 === t || 1 === t;
      }
      function r8({ scale: t, scaleX: e, scaleY: r }) {
        return !r4(t) || !r4(e) || !r4(r);
      }
      function r7(t) {
        return r8(t) || nt(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function nt(t) {
        var e, r;
        return ((e = t.x) && "0%" !== e) || ((r = t.y) && "0%" !== r);
      }
      function ne(t, e, r, n, i) {
        return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e;
      }
      function nr(t, e = 0, r = 1, n, i) {
        (t.min = ne(t.min, e, r, n, i)), (t.max = ne(t.max, e, r, n, i));
      }
      function nn(t, { x: e, y: r }) {
        nr(t.x, e.translate, e.scale, e.originPoint),
          nr(t.y, r.translate, r.scale, r.originPoint);
      }
      function ni(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function ns(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function no(t, e, [r, n, i]) {
        let s = void 0 !== e[i] ? e[i] : 0.5,
          o = eC(t.min, t.max, s);
        nr(t, e[r], e[n], o, e.scale);
      }
      let na = ["x", "scaleX", "originX"],
        nl = ["y", "scaleY", "originY"];
      function nu(t, e) {
        no(t.x, e, na), no(t.y, e, nl);
      }
      function nc(t, e) {
        return r9(
          (function (t, e) {
            if (!e) return t;
            let r = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let nh = new WeakMap();
      class nd {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = r3()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let n = (t) => {
              this.stopAnimation(), e && this.snapToCursor(tR(t, "page").point);
            },
            i = (t, e) => {
              let {
                drag: r,
                dragPropagation: n,
                onDragStart: i,
              } = this.getProps();
              if (
                r &&
                !n &&
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = t$(r)),
                !this.openGlobalLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                r6((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (Y.test(e)) {
                    let { projection: r } = this.visualElement;
                    if (r && r.layout) {
                      let n = r.layout.layoutBox[t];
                      if (n) {
                        let t = rz(n);
                        e = t * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                }),
                i && tN.Wi.update(() => i(t, e), !1, !0);
              let { animationState: s } = this.visualElement;
              s && s.setActive("whileDrag", !0);
            },
            s = (t, e) => {
              let {
                dragPropagation: r,
                dragDirectionLock: n,
                onDirectionLock: i,
                onDrag: s,
              } = this.getProps();
              if (!r && !this.openGlobalLock) return;
              let { offset: o } = e;
              if (n && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let r = null;
                  return (
                    Math.abs(t.y) > e
                      ? (r = "y")
                      : Math.abs(t.x) > e && (r = "x"),
                    r
                  );
                })(o)),
                  null !== this.currentDirection &&
                    i &&
                    i(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                s && s(t, e);
            },
            o = (t, e) => this.stop(t, e);
          this.panSession = new r_(
            t,
            { onSessionStart: n, onStart: i, onMove: s, onSessionEnd: o },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
        stop(t, e) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: i } = this.getProps();
          i && tN.Wi.update(() => i(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, r) {
          let { drag: n } = this.getProps();
          if (!r || !np(t, n, this.currentDirection)) return;
          let i = this.getAxisMotionValue(t),
            s = this.originPoint[t] + r[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: r }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? eC(e, t, n.min) : Math.max(t, e))
                  : void 0 !== r &&
                    t > r &&
                    (t = n ? eC(r, t, n.max) : Math.min(t, r)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            i.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: r } = this.visualElement.projection || {},
            n = this.constraints;
          t && c(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && r
            ? (this.constraints = (function (
                t,
                { top: e, left: r, bottom: n, right: i }
              ) {
                return { x: rK(t.x, r, i), y: rK(t.y, e, n) };
              })(r.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: rJ(t, "left", "right"), y: rJ(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              r6((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let r = {};
                    return (
                      void 0 !== e.min && (r.min = e.min - t.min),
                      void 0 !== e.max && (r.max = e.max - t.min),
                      r
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: r } =
            this.getProps();
          if (!e || !c(e)) return !1;
          let n = e.current;
          (0, t5.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let s = (function (t, e, r) {
              let n = nc(t, r),
                { scroll: i } = e;
              return i && (ns(n.x, i.offset.x), ns(n.y, i.offset.y)), n;
            })(n, i.root, this.visualElement.getTransformPagePoint()),
            o = { x: rQ((t = i.layout.layoutBox).x, s.x), y: rQ(t.y, s.y) };
          if (r) {
            let t = r(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = r9(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: r,
              dragElastic: n,
              dragTransition: i,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = r6((o) => {
              if (!np(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let r = this.getAxisMotionValue(t);
          return r.start(rv(t, r, 0, e));
        }
        stopAnimation() {
          r6((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            n = r[e];
          return (
            n ||
            this.visualElement.getValue(
              t,
              (r.initial ? r.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          r6((e) => {
            let { drag: r } = this.getProps();
            if (!np(e, r, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              i = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: r, max: s } = n.layout.layoutBox[e];
              i.set(t[e] - eC(r, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!c(e) || !r || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          r6((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let r = e.get();
              n[t] = (function (t, e) {
                let r = 0.5,
                  n = rz(t),
                  i = rz(e);
                return (
                  i > n
                    ? (r = eY(e.min, e.max - n, t.min))
                    : n > i && (r = eY(t.min, t.max - i, e.min)),
                  I(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[t]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            r6((e) => {
              if (!np(e, t, null)) return;
              let r = this.getAxisMotionValue(e),
                { min: i, max: s } = this.constraints[e];
              r.set(eC(i, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          nh.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = tD(t, "pointerdown", (t) => {
              let { drag: e, dragListener: r = !0 } = this.getProps();
              e && r && this.start(t);
            }),
            r = () => {
              let { dragConstraints: t } = this.getProps();
              c(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener("measure", r);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            r();
          let s = tk(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (r6((e) => {
                    let r = this.getAxisMotionValue(e);
                    r &&
                      ((this.originPoint[e] += t[e].translate),
                      r.set(r.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), i(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: r = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function np(t, e, r) {
        return (!0 === e || e === t) && (null === r || r === t);
      }
      let nf = (t) => (e, r) => {
          t && tN.Wi.update(() => t(e, r));
        },
        nm = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ny(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nv = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!G.test(t)) return t;
            t = parseFloat(t);
          }
          let r = ny(t, e.target.x),
            n = ny(t, e.target.y);
          return `${r}% ${n}%`;
        },
      };
      class ng extends i.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
              layoutId: n,
            } = this.props,
            { projection: i } = t;
          Object.assign(A, nb),
            i &&
              (e.group && e.group.add(i),
              r && r.register && n && r.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nm.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: r,
              drag: n,
              isPresent: i,
            } = this.props,
            s = r.projection;
          return (
            s &&
              ((s.isPresent = i),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === i ||
                (i
                  ? s.promote()
                  : s.relegate() ||
                    tN.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            r && r.deregister && r.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nx(t) {
        let [e, r] = (function () {
            let t = (0, i.useContext)(a.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: r, register: n } = t,
              s = (0, i.useId)();
            (0, i.useEffect)(() => n(s), []);
            let o = () => r && r(s);
            return !e && r ? [!1, o] : [!0];
          })(),
          n = (0, i.useContext)(P.p);
        return i.createElement(ng, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, i.useContext)(w),
          isPresent: e,
          safeToRemove: r,
        });
      }
      let nb = {
          borderRadius: {
            ...nv,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: nv,
          borderTopRightRadius: nv,
          borderBottomLeftRadius: nv,
          borderBottomRightRadius: nv,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: r }) => {
              let n = eU.parse(t);
              if (n.length > 5) return t;
              let i = eU.createTransformer(t),
                s = "number" != typeof n[0] ? 1 : 0,
                o = r.x.scale * e.x,
                a = r.y.scale * e.y;
              (n[0 + s] /= o), (n[1 + s] /= a);
              let l = eC(o, a, 0.5);
              return (
                "number" == typeof n[2 + s] && (n[2 + s] /= l),
                "number" == typeof n[3 + s] && (n[3 + s] /= l),
                i(n)
              );
            },
          },
        },
        nP = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nw = nP.length,
        nS = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nT = (t) => "number" == typeof t || G.test(t);
      function nE(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nA = nj(0, 0.5, eh),
        nC = nj(0.5, 0.95, tq.Z);
      function nj(t, e, r) {
        return (n) => (n < t ? 0 : n > e ? 1 : r(eY(t, e, n)));
      }
      function nV(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nk(t, e) {
        nV(t.x, e.x), nV(t.y, e.y);
      }
      function nM(t, e, r, n, i) {
        return (
          (t -= e),
          (t = n + (1 / r) * (t - n)),
          void 0 !== i && (t = n + (1 / i) * (t - n)),
          t
        );
      }
      function nR(t, e, [r, n, i], s, o) {
        !(function (t, e = 0, r = 1, n = 0.5, i, s = t, o = t) {
          if (Y.test(e)) {
            e = parseFloat(e);
            let t = eC(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = eC(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = nM(t.min, e, r, a, i)),
            (t.max = nM(t.max, e, r, a, i));
        })(t, e[r], e[n], e[i], e.scale, s, o);
      }
      let nO = ["x", "scaleX", "originX"],
        nD = ["y", "scaleY", "originY"];
      function nL(t, e, r, n) {
        nR(t.x, e, nO, r ? r.x : void 0, n ? n.x : void 0),
          nR(t.y, e, nD, r ? r.y : void 0, n ? n.y : void 0);
      }
      function nF(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nI(t) {
        return nF(t.x) && nF(t.y);
      }
      function nB(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function n_(t) {
        return rz(t.x) / rz(t.y);
      }
      class n$ {
        constructor() {
          this.members = [];
        }
        add(t) {
          rb(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (rP(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let r = this.members.findIndex((e) => t === e);
          if (0 === r) return !1;
          for (let t = r; t >= 0; t--) {
            let r = this.members[t];
            if (!1 !== r.isPresent) {
              e = r;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let r = this.lead;
          if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = r),
              e && (t.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: r } = t;
            e.onExitComplete && e.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nW(t, e, r) {
        let n = "",
          i = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((i || s) && (n = `translate3d(${i}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          r)
        ) {
          let { rotate: t, rotateX: e, rotateY: i } = r;
          t && (n += `rotate(${t}deg) `),
            e && (n += `rotateX(${e}deg) `),
            i && (n += `rotateY(${i}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none";
      }
      let nU = (t, e) => t.depth - e.depth;
      class nN {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          rb(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          rP(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nU),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let nz = ["", "X", "Y", "Z"],
        nH = 0,
        nq = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nZ({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(t = {}, r = null == e ? void 0 : e()) {
            (this.id = nH++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (nq.totalNodes =
                  nq.resolvedTargetDeltas =
                  nq.recalculatedProjection =
                    0),
                  this.nodes.forEach(nX),
                  this.nodes.forEach(n5),
                  this.nodes.forEach(n2),
                  this.nodes.forEach(nK),
                  window.MotionDebug && window.MotionDebug.record(nq);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nN());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new rw()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let r = this.eventHandlers.get(t);
            r && r.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: i, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let r;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (t, e) {
                    let r = performance.now(),
                      n = ({ timestamp: i }) => {
                        let s = i - r;
                        s >= e && ((0, tN.Pn)(n), t(s - e));
                      };
                    return tN.Wi.read(n, !0), () => (0, tN.Pn)(n);
                  })(n, 250)),
                  nm.hasAnimatedSinceResize &&
                    ((nm.hasAnimatedSinceResize = !1), this.nodes.forEach(n1));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        n7,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nB(this.targetLayout, n) || r,
                      u = !e && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...ry(i, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || n1(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tN.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(n3),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: r } = this.options;
            if (void 0 === e && !r) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nJ);
              return;
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.nodes.forEach(n0),
              this.nodes.forEach(nY),
              this.nodes.forEach(nG),
              this.clearAllSnapshots(),
              tN.S6.update.process(e6.w),
              tN.S6.preRender.process(e6.w),
              tN.S6.render.process(e6.w));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nQ), this.sharedNodes.forEach(n6);
          }
          scheduleUpdateProjection() {
            tN.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            tN.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = r3()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: r(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !nI(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || r7(this.latestValues) || s) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              t && (n = this.removeTransform(n)),
              it((e = n).x),
              it(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return r3();
            let e = t.measureViewportBox(),
              { scroll: r } = this.root;
            return r && (ns(e.x, r.offset.x), ns(e.y, r.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = r3();
            nk(e, t);
            for (let r = 0; r < this.path.length; r++) {
              let n = this.path[r],
                { scroll: i, options: s } = n;
              if (n !== this.root && i && s.layoutScroll) {
                if (i.isRoot) {
                  nk(e, t);
                  let { scroll: r } = this.root;
                  r && (ns(e.x, -r.offset.x), ns(e.y, -r.offset.y));
                }
                ns(e.x, i.offset.x), ns(e.y, i.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let r = r3();
            nk(r, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                nu(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                r7(n.latestValues) && nu(r, n.latestValues);
            }
            return r7(this.latestValues) && nu(r, this.latestValues), r;
          }
          removeTransform(t) {
            let e = r3();
            nk(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              if (!r.instance || !r7(r.latestValues)) continue;
              r8(r.latestValues) && r.updateSnapshot();
              let n = r3(),
                i = r.measurePageBox();
              nk(n, i),
                nL(
                  e,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n
                );
            }
            return r7(this.latestValues) && nL(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== e6.w.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, r, n, i;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = e6.w.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = r3()),
                    (this.relativeTargetOrigin = r3()),
                    rX(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nk(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = r3()), (this.targetWithTransforms = r3())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      rY(r.x, n.x, i.x),
                      rY(r.y, n.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nk(this.target, this.layout.layoutBox),
                      nn(this.target, this.targetDelta))
                    : nk(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = r3()),
                      (this.relativeTargetOrigin = r3()),
                      rX(this.relativeTargetOrigin, this.target, t.target),
                      nk(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nq.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              r8(this.parent.latestValues) ||
              nt(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              r = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === e6.w.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || s))
            )
              return;
            nk(this.layoutCorrected, this.layout.layoutBox),
              (function (t, e, r, n = !1) {
                let i, s;
                let o = r.length;
                if (o) {
                  e.x = e.y = 1;
                  for (let a = 0; a < o; a++) {
                    s = (i = r[a]).projectionDelta;
                    let o = i.instance;
                    (!o || !o.style || "contents" !== o.style.display) &&
                      (n &&
                        i.options.layoutScroll &&
                        i.scroll &&
                        i !== i.root &&
                        nu(t, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                      s && ((e.x *= s.x.scale), (e.y *= s.y.scale), nn(t, s)),
                      n && r7(i.latestValues) && nu(t, i.latestValues));
                  }
                  (e.x = ni(e.x)), (e.y = ni(e.y));
                }
              })(this.layoutCorrected, this.treeScale, this.path, r);
            let { target: o } = e;
            if (!o) return;
            this.projectionDelta ||
              ((this.projectionDelta = r5()),
              (this.projectionDeltaWithTransform = r5()));
            let a = this.treeScale.x,
              l = this.treeScale.y,
              u = this.projectionTransform;
            rZ(
              this.projectionDelta,
              this.layoutCorrected,
              o,
              this.latestValues
            ),
              (this.projectionTransform = nW(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== a ||
                this.treeScale.y !== l) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", o)),
              nq.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let r;
            let n = this.snapshot,
              i = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = r5();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = r3(),
              l = n ? n.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              c = l !== u,
              h = this.getStack(),
              d = !h || h.members.length <= 1,
              p = !!(
                c &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(n8)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var n, l;
                let u = e / 1e3;
                n9(o.x, t.x, u),
                  n9(o.y, t.y, u),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (rX(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (n = this.relativeTarget),
                    (l = this.relativeTargetOrigin),
                    n4(n.x, l.x, a.x, u),
                    n4(n.y, l.y, a.y, u),
                    r &&
                      nB(this.relativeTarget, r) &&
                      (this.isProjectionDirty = !1),
                    r || (r = r3()),
                    nk(r, this.relativeTarget)),
                  c &&
                    ((this.animationValues = s),
                    (function (t, e, r, n, i, s) {
                      i
                        ? ((t.opacity = eC(
                            0,
                            void 0 !== r.opacity ? r.opacity : 1,
                            nA(n)
                          )),
                          (t.opacityExit = eC(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            nC(n)
                          )))
                        : s &&
                          (t.opacity = eC(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== r.opacity ? r.opacity : 1,
                            n
                          ));
                      for (let i = 0; i < nw; i++) {
                        let s = `border${nP[i]}Radius`,
                          o = nE(e, s),
                          a = nE(r, s);
                        if (void 0 === o && void 0 === a) continue;
                        o || (o = 0), a || (a = 0);
                        let l = 0 === o || 0 === a || nT(o) === nT(a);
                        l
                          ? ((t[s] = Math.max(eC(nS(o), nS(a), n), 0)),
                            (Y.test(a) || Y.test(o)) && (t[s] += "%"))
                          : (t[s] = a);
                      }
                      (e.rotate || r.rotate) &&
                        (t.rotate = eC(e.rotate || 0, r.rotate || 0, n));
                    })(s, i, this.latestValues, u, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = u);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tN.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tN.Wi.update(() => {
                (nm.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, r) {
                    let n = k(t) ? t : rE(t);
                    return n.start(rv("", n, 1e3, r)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: r,
                layout: n,
                latestValues: i,
              } = t;
            if (e && r && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                ie(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                r = this.target || r3();
                let e = rz(this.layout.layoutBox.x);
                (r.x.min = t.target.x.min), (r.x.max = r.x.min + e);
                let n = rz(this.layout.layoutBox.y);
                (r.y.min = t.target.y.min), (r.y.max = r.y.min + n);
              }
              nk(e, r),
                nu(e, i),
                rZ(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new n$());
            let r = this.sharedNodes.get(t);
            r.add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, r),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: r } = t;
            if (
              ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let e = 0; e < nz.length; e++) {
              let i = "rotate" + nz[e];
              r[i] && ((n[i] = r[i]), t.setStaticValue(i, 0));
            }
            for (let e in (t.render(), n)) t.setStaticValue(e, n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, r;
            let n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return { visibility: "hidden" };
            n.visibility = "";
            let i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents = tA(t.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = tA(t.pointerEvents) || "")),
                this.hasProjected &&
                  !r7(this.latestValues) &&
                  ((e.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = nW(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              i && (n.transform = i(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (r =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            A)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: r } = A[t],
                i = "none" === n.transform ? o[t] : e(o[t], s);
              if (r) {
                let t = r.length;
                for (let e = 0; e < t; e++) n[r[e]] = i;
              } else n[t] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this ? tA(t.pointerEvents) || "" : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nJ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nY(t) {
        t.updateLayout();
      }
      function nG(t) {
        var e;
        let r =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: i } = t.options,
            s = r.source !== t.layout.source;
          "size" === i
            ? r6((t) => {
                let n = s ? r.measuredBox[t] : r.layoutBox[t],
                  i = rz(n);
                (n.min = e[t].min), (n.max = n.min + i);
              })
            : ie(i, r.layoutBox, e) &&
              r6((n) => {
                let i = s ? r.measuredBox[n] : r.layoutBox[n],
                  o = rz(e[n]);
                (i.max = i.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = r5();
          rZ(o, e, r.layoutBox);
          let a = r5();
          s
            ? rZ(a, t.applyTransform(n, !0), r.measuredBox)
            : rZ(a, e, r.layoutBox);
          let l = !nI(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: s } = n;
              if (i && s) {
                let o = r3();
                rX(o, r.layoutBox, i.layoutBox);
                let a = r3();
                rX(a, e, s.layoutBox),
                  nB(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: r,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nX(t) {
        nq.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nK(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nQ(t) {
        t.clearSnapshot();
      }
      function nJ(t) {
        t.clearMeasurements();
      }
      function n0(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function n1(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function n5(t) {
        t.resolveTargetDelta();
      }
      function n2(t) {
        t.calcProjection();
      }
      function n3(t) {
        t.resetRotation();
      }
      function n6(t) {
        t.removeLeadSnapshot();
      }
      function n9(t, e, r) {
        (t.translate = eC(e.translate, 0, r)),
          (t.scale = eC(e.scale, 1, r)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function n4(t, e, r, n) {
        (t.min = eC(e.min, r.min, n)), (t.max = eC(e.max, r.max, n));
      }
      function n8(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let n7 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function it(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function ie(t, e, r) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !rH(n_(e), n_(r), 0.2))
        );
      }
      let ir = nZ({
          attachResizeListener: (t, e) => tk(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ii = { current: void 0 },
        is = nZ({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ii.current) {
              let t = new ir({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ii.current = t);
            }
            return ii.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        io = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ia(t, e, r = 1) {
        (0, t5.k)(
          r <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, i] = (function (t) {
          let e = io.exec(t);
          if (!e) return [,];
          let [, r, n] = e;
          return [r, n];
        })(t);
        if (!n) return;
        let s = window.getComputedStyle(e).getPropertyValue(n);
        return s ? s.trim() : L(i) ? ia(i, e, r + 1) : i;
      }
      let il = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        iu = (t) => il.has(t),
        ic = (t) => Object.keys(t).some(iu),
        ih = (t) => t === B || t === G,
        id = (t, e) => parseFloat(t.split(", ")[e]),
        ip =
          (t, e) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/);
            if (i) return id(i[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/);
              return e ? id(e[1], t) : 0;
            }
          },
        im = new Set(["x", "y", "z"]),
        iy = C.filter((t) => !im.has(t)),
        iv = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: ip(4, 13),
          y: ip(5, 14),
        },
        ig = (t, e, r) => {
          let n = e.measureViewportBox(),
            i = e.current,
            s = getComputedStyle(i),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            r.forEach((t) => {
              a[t] = iv[t](n, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            r.forEach((r) => {
              let n = e.getValue(r);
              n && n.jump(a[r]), (t[r] = iv[r](l, s));
            }),
            t
          );
        },
        ix = (t, e, r = {}, n = {}) => {
          (e = { ...e }), (n = { ...n });
          let i = Object.keys(e).filter(iu),
            s = [],
            o = !1,
            a = [];
          if (
            (i.forEach((i) => {
              let l;
              let u = t.getValue(i);
              if (!t.hasValue(i)) return;
              let c = r[i],
                h = rj(c),
                d = e[i];
              if (tS(d)) {
                let t = d.length,
                  e = null === d[0] ? 1 : 0;
                h = rj((c = d[e]));
                for (let r = e; r < t && null !== d[r]; r++)
                  l
                    ? (0, t5.k)(
                        rj(d[r]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = rj(d[r])),
                      (0, t5.k)(
                        l === h || (ih(h) && ih(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = rj(d);
              if (h !== l) {
                if (ih(h) && ih(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof d
                      ? (e[i] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === G &&
                        (e[i] = d.map(parseFloat));
                } else
                  (null == h ? void 0 : h.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === c || 0 === d)
                    ? 0 === c
                      ? u.set(l.transform(c))
                      : (e[i] = h.transform(d))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            iy.forEach((r) => {
                              let n = t.getValue(r);
                              void 0 !== n &&
                                (e.push([r, n.get()]),
                                n.set(r.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(i),
                      (n[i] = void 0 !== n[i] ? n[i] : e[i]),
                      u.jump(d));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: n };
          {
            let r = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ig(e, t, a);
            return (
              s.length &&
                s.forEach(([e, r]) => {
                  t.getValue(e).set(r);
                }),
              t.render(),
              b.j && null !== r && window.scrollTo({ top: r }),
              { target: i, transitionEnd: n }
            );
          }
        },
        ib = (t, e, r, n) => {
          var i, s;
          let o = (function (t, { ...e }, r) {
            let n = t.current;
            if (!(n instanceof Element)) return { target: e, transitionEnd: r };
            for (let i in (r && (r = { ...r }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!L(e)) return;
              let r = ia(e, n);
              r && t.set(r);
            }),
            e)) {
              let t = e[i];
              if (!L(t)) continue;
              let s = ia(t, n);
              s && ((e[i] = s), r || (r = {}), void 0 === r[i] && (r[i] = t));
            }
            return { target: e, transitionEnd: r };
          })(t, e, n);
          return (
            (e = o.target),
            (n = o.transitionEnd),
            (i = e),
            (s = n),
            ic(i) ? ix(t, i, r, s) : { target: i, transitionEnd: s }
          );
        },
        iP = { current: null },
        iw = { current: !1 },
        iS = new WeakMap(),
        iT = Object.keys(x),
        iE = iT.length,
        iA = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        iC = f.length;
      class ij {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: r,
            reducedMotionConfig: n,
            visualState: i,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tN.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = i;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.isControllingVariants = m(e)),
            (this.isVariantNode = y(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] && k(e) && (e.set(o[t], !1), rg(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            iS.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            iw.current ||
              (function () {
                if (((iw.current = !0), b.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iP.current = t.matches);
                    t.addListener(e), e();
                  } else iP.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iP.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (iS.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tN.Pn)(this.notifyUpdate),
          (0, tN.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let r = j.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tN.Wi.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), i();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, r, n, i) {
          let s, o;
          for (let t = 0; t < iE; t++) {
            let r = iT[t],
              {
                isEnabled: n,
                Feature: i,
                ProjectionNode: a,
                MeasureLayout: l,
              } = x[r];
            a && (s = a),
              n(e) &&
                (!this.features[r] && i && (this.features[r] = new i(this)),
                l && (o = l));
          }
          if (!this.projection && s) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: r,
              drag: n,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: r,
              alwaysMeasureLayout: !!n || (o && c(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: i,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted
              ? e.update(this.props, this.prevProps)
              : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : r3();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < iA.length; e++) {
            let r = iA[e];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = t["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (t, e, r) {
            let { willChange: n } = e;
            for (let i in e) {
              let s = e[i],
                o = r[i];
              if (k(s)) t.addValue(i, s), rg(n) && n.add(i);
              else if (k(o))
                t.addValue(i, rE(s, { owner: t })), rg(n) && n.remove(i);
              else if (o !== s) {
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, rE(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in r) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < iC; t++) {
            let r = f[t],
              n = this.props[r];
            (h(n) || !1 === n) && (e[r] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let r = this.values.get(t);
          return (
            void 0 === r &&
              void 0 !== e &&
              ((r = rE(e, { owner: this })), this.addValue(t, r)),
            r
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: r } = this.props,
            n =
              "string" == typeof r || "object" == typeof r
                ? null === (e = tP(this.props, r)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || k(i)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new rw()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class iV extends ij {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: r }) {
          delete e[t], delete r[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...r },
          { transformValues: n },
          i
        ) {
          let s = (function (t, e, r) {
            let n = {};
            for (let i in t) {
              let t = (function (t, e) {
                if (!e) return;
                let r = e[t] || e.default || e;
                return r.from;
              })(i, e);
              if (void 0 !== t) n[i] = t;
              else {
                let t = r.getValue(i);
                t && (n[i] = t.get());
              }
            }
            return n;
          })(r, t || {}, this);
          if ((n && (e && (e = n(e)), r && (r = n(r)), s && (s = n(s))), i)) {
            !(function (t, e, r) {
              var n, i;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let o = s[a],
                    l = e[o],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (i =
                            null !== (n = r[o]) && void 0 !== n
                              ? n
                              : t.readValue(o)) && void 0 !== i
                          ? i
                          : e[o]),
                    null != u &&
                      ("string" == typeof u && (rx(u) || rm(u))
                        ? (u = parseFloat(u))
                        : !rk(u) && eU.test(l) && (u = rf(o, l)),
                      t.addValue(o, rE(u, { owner: t })),
                      void 0 === r[o] && (r[o] = u),
                      null !== u && t.setBaseTarget(o, u));
                }
            })(this, r, s);
            let t = ib(this, r, s, e);
            (e = t.transitionEnd), (r = t.target);
          }
          return { transition: t, transitionEnd: e, ...r };
        }
      }
      class ik extends iV {
        readValueFromInstance(t, e) {
          if (j.has(e)) {
            let t = rp(e);
            return (t && t.default) || 0;
          }
          {
            let r = window.getComputedStyle(t),
              n = (D(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return nc(t, e);
        }
        build(t, e, r, n) {
          te(t, e, r, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tx(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          k(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, r, n) {
          ty(t, e, r, n);
        }
      }
      class iM extends iV {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (j.has(e)) {
            let t = rp(e);
            return (t && t.default) || 0;
          }
          return (e = tv.has(e) ? e : tm(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return r3();
        }
        scrapeMotionValuesFromProps(t, e) {
          return tb(t, e);
        }
        build(t, e, r, n) {
          th(t, e, r, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, r, n) {
          tg(t, e, r, n);
        }
        mount(t) {
          (this.isSVGTag = tp(t.tagName)), super.mount(t);
        }
      }
      let iR = (t, e) =>
          E(t)
            ? new iM(e, { enableHardwareAcceleration: !1 })
            : new ik(e, { enableHardwareAcceleration: !0 }),
        iO = {
          animation: {
            Feature: class extends tU {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: r }) =>
                              (function (t, e, r = {}) {
                                let n;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                ) {
                                  let i = e.map((e) => rR(t, e, r));
                                  n = Promise.all(i);
                                } else if ("string" == typeof e)
                                  n = rR(t, e, r);
                                else {
                                  let i =
                                    "function" == typeof e
                                      ? t0(t, e, r.custom)
                                      : e;
                                  n = Promise.all(rM(t, i, r));
                                }
                                return n.then(() =>
                                  t.notify("AnimationComplete", e)
                                );
                              })(t, e, r)
                            )
                          ),
                        r = {
                          animate: rF(!0),
                          whileInView: rF(),
                          whileHover: rF(),
                          whileTap: rF(),
                          whileDrag: rF(),
                          whileFocus: rF(),
                          exit: rF(),
                        },
                        n = !0,
                        i = (e, r) => {
                          let n = t0(t, r);
                          if (n) {
                            let { transition: t, transitionEnd: r, ...i } = n;
                            e = { ...e, ...i, ...r };
                          }
                          return e;
                        };
                      function s(s, o) {
                        let a = t.getProps(),
                          l = t.getVariantContext(!0) || {},
                          u = [],
                          c = new Set(),
                          p = {},
                          f = 1 / 0;
                        for (let e = 0; e < rL; e++) {
                          var m;
                          let y = rD[e],
                            v = r[y],
                            g = void 0 !== a[y] ? a[y] : l[y],
                            x = h(g),
                            b = y === o ? v.isActive : null;
                          !1 === b && (f = e);
                          let P = g === l[y] && g !== a[y] && x;
                          if (
                            (P && n && t.manuallyAnimateOnMount && (P = !1),
                            (v.protectedKeys = { ...p }),
                            (!v.isActive && null === b) ||
                              (!g && !v.prevProp) ||
                              d(g) ||
                              "boolean" == typeof g)
                          )
                            continue;
                          let w =
                              ((m = v.prevProp),
                              "string" == typeof g
                                ? g !== m
                                : !!Array.isArray(g) && !tJ(g, m)),
                            S =
                              w ||
                              (y === o && v.isActive && !P && x) ||
                              (e > f && x),
                            T = Array.isArray(g) ? g : [g],
                            E = T.reduce(i, {});
                          !1 === b && (E = {});
                          let { prevResolvedValues: A = {} } = v,
                            C = { ...A, ...E },
                            j = (t) => {
                              (S = !0), c.delete(t), (v.needsAnimating[t] = !0);
                            };
                          for (let t in C) {
                            let e = E[t],
                              r = A[t];
                            p.hasOwnProperty(t) ||
                              (e !== r
                                ? tS(e) && tS(r)
                                  ? !tJ(e, r) || w
                                    ? j(t)
                                    : (v.protectedKeys[t] = !0)
                                  : void 0 !== e
                                  ? j(t)
                                  : c.add(t)
                                : void 0 !== e && c.has(t)
                                ? j(t)
                                : (v.protectedKeys[t] = !0));
                          }
                          (v.prevProp = g),
                            (v.prevResolvedValues = E),
                            v.isActive && (p = { ...p, ...E }),
                            n && t.blockInitialAnimation && (S = !1),
                            S &&
                              !P &&
                              u.push(
                                ...T.map((t) => ({
                                  animation: t,
                                  options: { type: y, ...s },
                                }))
                              );
                        }
                        if (c.size) {
                          let e = {};
                          c.forEach((r) => {
                            let n = t.getBaseTarget(r);
                            void 0 !== n && (e[r] = n);
                          }),
                            u.push({ animation: e });
                        }
                        let y = !!u.length;
                        return (
                          n &&
                            !1 === a.initial &&
                            !t.manuallyAnimateOnMount &&
                            (y = !1),
                          (n = !1),
                          y ? e(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (e, n, i) {
                          var o;
                          if (r[e].isActive === n) return Promise.resolve();
                          null === (o = t.variantChildren) ||
                            void 0 === o ||
                            o.forEach((t) => {
                              var r;
                              return null === (r = t.animationState) ||
                                void 0 === r
                                ? void 0
                                : r.setActive(e, n);
                            }),
                            (r[e].isActive = n);
                          let a = s(i, e);
                          for (let t in r) r[t].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (r) {
                          e = r(t);
                        },
                        getState: () => r,
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                this.unmount(), d(t) && (this.unmount = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends tU {
              constructor() {
                super(...arguments), (this.id = rI++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: t,
                    onExitComplete: e,
                    custom: r,
                  } = this.node.presenceContext,
                  { isPresent: n } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n) return;
                let i = this.node.animationState.setActive("exit", !t, {
                  custom: null != r ? r : this.node.getProps().custom,
                });
                e && !t && i.then(() => e(this.id));
              }
              mount() {
                let { register: t } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends tU {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: t = {} } = this.node.getProps(),
                  { root: e, margin: r, amount: n = "some", once: i } = t,
                  s = {
                    root: e ? e.current : void 0,
                    rootMargin: r,
                    threshold: "number" == typeof n ? n : tQ[n],
                  },
                  o = (t) => {
                    let { isIntersecting: e } = t;
                    if (
                      this.isInView === e ||
                      ((this.isInView = e), i && !e && this.hasEnteredView)
                    )
                      return;
                    e && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", e);
                    let { onViewportEnter: r, onViewportLeave: n } =
                        this.node.getProps(),
                      s = e ? r : n;
                    s && s(t);
                  };
                return (function (t, e, r) {
                  let n = (function ({ root: t, ...e }) {
                    let r = t || document;
                    tG.has(r) || tG.set(r, {});
                    let n = tG.get(r),
                      i = JSON.stringify(e);
                    return (
                      n[i] ||
                        (n[i] = new IntersectionObserver(tK, {
                          root: t,
                          ...e,
                        })),
                      n[i]
                    );
                  })(e);
                  return (
                    tY.set(t, r),
                    n.observe(t),
                    () => {
                      tY.delete(t), n.unobserve(t);
                    }
                  );
                })(this.node.current, s, o);
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  r = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (r) => t[r] !== e[r];
                    })(t, e)
                  );
                r && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends tU {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = tq.Z),
                  (this.removeEndListeners = tq.Z),
                  (this.removeAccessibleListeners = tq.Z),
                  (this.startPointerPress = (t, e) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let r = this.node.getProps(),
                      n = (t, e) => {
                        if (!this.checkPressEnd()) return;
                        let { onTap: r, onTapCancel: n } = this.node.getProps();
                        tN.Wi.update(() => {
                          tH(this.node.current, t.target)
                            ? r && r(t, e)
                            : n && n(t, e);
                        });
                      },
                      i = tD(window, "pointerup", n, {
                        passive: !(r.onTap || r.onPointerUp),
                      }),
                      s = tD(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(r.onTapCancel || r.onPointerCancel) }
                      );
                    (this.removeEndListeners = tF(i, s)), this.startPress(t, e);
                  }),
                  (this.startAccessiblePress = () => {
                    let t = (t) => {
                        if ("Enter" !== t.key || this.isPressing) return;
                        let e = (t) => {
                          "Enter" === t.key &&
                            this.checkPressEnd() &&
                            tZ("up", (t, e) => {
                              let { onTap: r } = this.node.getProps();
                              r && tN.Wi.update(() => r(t, e));
                            });
                        };
                        this.removeEndListeners(),
                          (this.removeEndListeners = tk(
                            this.node.current,
                            "keyup",
                            e
                          )),
                          tZ("down", (t, e) => {
                            this.startPress(t, e);
                          });
                      },
                      e = tk(this.node.current, "keydown", t),
                      r = () => {
                        this.isPressing &&
                          tZ("cancel", (t, e) => this.cancelPress(t, e));
                      },
                      n = tk(this.node.current, "blur", r);
                    this.removeAccessibleListeners = tF(e, n);
                  });
              }
              startPress(t, e) {
                this.isPressing = !0;
                let { onTapStart: r, whileTap: n } = this.node.getProps();
                n &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  r && tN.Wi.update(() => r(t, e));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !tW()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: r } = this.node.getProps();
                r && tN.Wi.update(() => r(t, e));
              }
              mount() {
                let t = this.node.getProps(),
                  e = tD(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  r = tk(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tF(e, r);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends tU {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = tF(
                  tk(this.node.current, "focus", () => this.onFocus()),
                  tk(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends tU {
              mount() {
                this.unmount = tF(tz(this.node, !0), tz(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends tU {
              constructor() {
                super(...arguments), (this.removePointerDownListener = tq.Z);
              }
              onPointerDown(t) {
                this.session = new r_(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: r,
                  onPanEnd: n,
                } = this.node.getProps();
                return {
                  onSessionStart: nf(t),
                  onStart: nf(e),
                  onMove: r,
                  onEnd: (t, e) => {
                    delete this.session, n && tN.Wi.update(() => n(t, e));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = tD(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends tU {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = tq.Z),
                  (this.removeListeners = tq.Z),
                  (this.controls = new nd(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || tq.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: is,
            MeasureLayout: nx,
          },
          layout: { ProjectionNode: is, MeasureLayout: nx },
        },
        iD = (function (t) {
          function e(e, r = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: r,
              useVisualState: n,
              Component: d,
            }) {
              t &&
                (function (t) {
                  for (let e in t) x[e] = { ...x[e], ...t[e] };
                })(t);
              let p = (0, i.forwardRef)(function (p, f) {
                var y, g;
                let x;
                let S = {
                    ...(0, i.useContext)(s),
                    ...p,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, i.useContext)(P.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(p),
                  },
                  { isStatic: T } = S,
                  E = (function (t) {
                    let { initial: e, animate: r } = (function (t, e) {
                      if (m(t)) {
                        let { initial: e, animate: r } = t;
                        return {
                          initial: !1 === e || h(e) ? e : void 0,
                          animate: h(r) ? r : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, i.useContext)(o));
                    return (0, i.useMemo)(
                      () => ({ initial: e, animate: r }),
                      [v(e), v(r)]
                    );
                  })(p),
                  A = n(p, T);
                if (!T && b.j) {
                  E.visualElement = (function (t, e, r, n) {
                    let { visualElement: c } = (0, i.useContext)(o),
                      h = (0, i.useContext)(u),
                      d = (0, i.useContext)(a.O),
                      p = (0, i.useContext)(s).reducedMotion,
                      f = (0, i.useRef)();
                    (n = n || h.renderer),
                      !f.current &&
                        n &&
                        (f.current = n(t, {
                          visualState: e,
                          parent: c,
                          props: r,
                          presenceContext: d,
                          blockInitialAnimation: !!d && !1 === d.initial,
                          reducedMotionConfig: p,
                        }));
                    let m = f.current;
                    (0, i.useInsertionEffect)(() => {
                      m && m.update(r, d);
                    }),
                      (0, l.L)(() => {
                        m && m.render();
                      }),
                      (0, i.useEffect)(() => {
                        m && m.updateFeatures();
                      });
                    let y = window.HandoffAppearAnimations ? l.L : i.useEffect;
                    return (
                      y(() => {
                        m &&
                          m.animationState &&
                          m.animationState.animateChanges();
                      }),
                      m
                    );
                  })(d, A, S, e);
                  let r = (0, i.useContext)(w),
                    n = (0, i.useContext)(u).strict;
                  E.visualElement &&
                    (x = E.visualElement.loadFeatures(S, n, t, r));
                }
                return i.createElement(
                  o.Provider,
                  { value: E },
                  x && E.visualElement
                    ? i.createElement(x, {
                        visualElement: E.visualElement,
                        ...S,
                      })
                    : null,
                  r(
                    d,
                    p,
                    ((y = E.visualElement),
                    (g = f),
                    (0, i.useCallback)(
                      (t) => {
                        t && A.mount && A.mount(t),
                          y && (t ? y.mount(t) : y.unmount()),
                          g &&
                            ("function" == typeof g
                              ? g(t)
                              : c(g) && (g.current = t));
                      },
                      [y]
                    )),
                    A,
                    T,
                    E.visualElement
                  )
                );
              });
              return (p[S] = d), p;
            })(t(e, r));
          }
          if ("undefined" == typeof Proxy) return e;
          let r = new Map();
          return new Proxy(e, {
            get: (t, n) => (r.has(n) || r.set(n, e(n)), r.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, r, n) {
            let s = E(t) ? tj : tV;
            return {
              ...s,
              preloadedFeatures: r,
              useRender: (function (t = !1) {
                let e = (e, r, n, { latestValues: s }, o) => {
                  let a = E(e) ? tf : ti,
                    l = a(r, s, o, e),
                    u = (function (t, e, r) {
                      let n = {};
                      for (let i in t)
                        ("values" !== i || "object" != typeof t.values) &&
                          (ta(i) ||
                            (!0 === r && to(i)) ||
                            (!e && !to(i)) ||
                            (t.draggable && i.startsWith("onDrag"))) &&
                          (n[i] = t[i]);
                      return n;
                    })(r, "string" == typeof e, t),
                    c = { ...u, ...l, ref: n },
                    { children: h } = r,
                    d = (0, i.useMemo)(() => (k(h) ? h.get() : h), [h]);
                  return (0, i.createElement)(e, { ...c, children: d });
                };
                return e;
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, iO, iR)
        );
    },
    52864: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return i;
        },
        k: function () {
          return s;
        },
      });
      var n = r(19153);
      let i = n.Z,
        s = n.Z;
    },
    85532: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    19153: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    10789: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return i;
        },
      });
      var n = r(86006);
      function i(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    23398: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return s;
        },
      });
      var n = r(86006),
        i = r(85532);
      let s = i.j ? n.useLayoutEffect : n.useEffect;
    },
  },
]);
