(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1962],
  {
    22837: function (e, s, a) {
      Promise.resolve().then(a.bind(a, 64296));
    },
    64296: function (e, s, a) {
      "use strict";
      a.r(s);
      var n = a(9268),
        t = a(90615),
        l = a(64753),
        i = a(56008),
        r = a(23879);
      let c = (e) => {
        let { params: s, children: a } = e,
          { getLayout: c } = s,
          { pageId: o } = (0, i.useParams)();
        return c || o
          ? a
          : (0, n.jsx)("main", {
              className: "main-content",
              children: (0, n.jsx)("div", {
                className: "container",
                children: (0, n.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, n.jsx)("div", {
                      className: "col-xl-3 col-lg-4",
                      children: (0, n.jsx)(t.default, {
                        adminTools: l.Tc,
                        img: r.default,
                        name: "Java World",
                        type: "Public",
                      }),
                    }),
                    a,
                  ],
                }),
              }),
            });
      };
      s.default = c;
    },
    90615: function (e, s, a) {
      "use strict";
      a.r(s);
      var n = a(9268),
        t = a(76394),
        l = a.n(t),
        i = a(35846),
        r = a.n(i),
        c = a(56008),
        o = a(86006),
        d = a(69670);
      let m = (e) => {
        let { name: s, type: a, img: t, adminTools: i } = e,
          [m, u] = (0, o.useState)(!1),
          p = (0, c.usePathname)();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: "d-block d-lg-none",
              children: (0, n.jsxs)("button", {
                className:
                  "button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2",
                onClick: () => u(!m),
                children: [
                  (0, n.jsx)("i", {
                    className: "material-symbols-outlined mat-icon",
                    children: " tune ",
                  }),
                  (0, n.jsx)("span", { children: "My profile" }),
                ],
              }),
            }),
            (0, n.jsxs)("div", {
              className: "profile-sidebar cus-scrollbar p-5 ".concat(
                m && "active"
              ),
              children: [
                (0, n.jsx)("div", {
                  className: "d-block d-lg-none position-absolute end-0 top-0",
                  children: (0, n.jsx)("button", {
                    className:
                      "button profile-close d-flex align-items-center justify-content-center mt-2",
                    onClick: () => u(!1),
                    children: (0, n.jsx)("i", {
                      className: "material-symbols-outlined mat-icon fs-xl",
                      children: "close",
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "profile-item",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "profile-item d-flex gap-3 align-items-center",
                      children: [
                        (0, n.jsx)("div", {
                          className: "avatar position-relative",
                          children: (0, n.jsx)(l(), {
                            className: "avatar-img max-un",
                            src: t,
                            alt: "avatar",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-area",
                          children: [
                            (0, n.jsx)("h6", {
                              className: "m-0 mb-1",
                              children: s,
                            }),
                            (0, n.jsx)("p", {
                              className: "mdtxt",
                              children: a,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "btn-item mt-5 d-center gap-3",
                      children: [
                        (0, n.jsxs)(r(), {
                          href: "/#",
                          className:
                            "cmn-btn w-100 justify-content-center gap-1",
                          children: [
                            (0, n.jsx)("i", {
                              className: "material-symbols-outlined mat-icon",
                              children: " add ",
                            }),
                            "Invite",
                          ],
                        }),
                        (0, n.jsx)(d.Z, {
                          actionList: [
                            ["Unfollow", "person_remove"],
                            ["Hide", "hide_source"],
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("ul", {
                  className: "profile-link my-5 pb-5",
                  children: (0, n.jsx)("li", {
                    children: (0, n.jsxs)(r(), {
                      href: "/",
                      className: "d-flex gap-4",
                      children: [
                        (0, n.jsx)("i", {
                          className: "material-symbols-outlined mat-icon",
                          children: " home ",
                        }),
                        (0, n.jsx)("span", { children: "Home" }),
                      ],
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "admin-tool",
                  children: [
                    (0, n.jsx)("p", {
                      className: "mdtxt",
                      children: "Admin tool",
                    }),
                    (0, n.jsx)("ul", {
                      className: "profile-link border-0 mt-4",
                      children: i.map((e, s) => {
                        let [a, t, l] = e;
                        return (0, n.jsx)(
                          "li",
                          {
                            children: (0, n.jsxs)(r(), {
                              href: l,
                              className: "d-flex gap-4 ".concat(
                                p === l ? "active" : ""
                              ),
                              children: [
                                (0, n.jsx)("i", {
                                  className:
                                    "material-symbols-outlined mat-icon",
                                  children: a,
                                }),
                                (0, n.jsx)("span", { children: t }),
                              ],
                            }),
                          },
                          s
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      s.default = m;
    },
    69670: function (e, s, a) {
      "use strict";
      var n = a(9268);
      let t = (e) => {
        let { actionList: s } = e;
        return (0, n.jsxs)("div", {
          className: "btn-group cus-dropdown dropend",
          children: [
            (0, n.jsx)("button", {
              type: "button",
              className: "d-flex dropdown-btn px-2",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              children: (0, n.jsx)("i", {
                className: "material-symbols-outlined fs-xxl m-0",
                children: "more_horiz",
              }),
            }),
            (0, n.jsx)("ul", {
              className: "dropdown-menu p-4 pt-2",
              children:
                null == s
                  ? void 0
                  : s.map((e, s) => {
                      let [a, t] = e;
                      return (0, n.jsx)(
                        "li",
                        {
                          children: (0, n.jsxs)("button", {
                            className:
                              "droplist d-flex align-items-center gap-2",
                            children: [
                              (0, n.jsx)("i", {
                                className: "material-symbols-outlined mat-icon",
                                children: t,
                              }),
                              (0, n.jsx)("span", { children: a }),
                            ],
                          }),
                        },
                        s
                      );
                    }),
            }),
          ],
        });
      };
      s.Z = t;
    },
    64753: function (e, s, a) {
      "use strict";
      a.d(s, {
        Sk: function () {
          return l;
        },
        Tc: function () {
          return n;
        },
        qJ: function () {
          return t;
        },
      });
      let n = [
          ["account_circle", "Dashboard", "/pages-dashboard"],
          ["group", "Your Pages", "/pages-your"],
          ["bookmark_add", "Privacy", "/pages-privacy"],
          ["settings", "Settings", "/pages-setting"],
        ],
        t = [
          ["person", "Friend Request", "/friend-request"],
          ["person_add", "Suggestions", "/suggestions"],
          ["person", "All Friend", "/all-friend"],
          ["lock", "Block List", "/block-list"],
        ],
        l = [
          ["home", "Home", "/"],
          ["person", "People", "/friend-request"],
          ["workspace_premium", "Event", "/event"],
          ["perm_media", "Pages", "/pages"],
          ["workspaces", "Group", "/groups"],
          ["store", "Marketplace", "/marketplace"],
          ["sync_saved_locally", "Saved", "/saved-post"],
          ["bookmark_add", "Favorites", "/favorites"],
          ["settings", "Settings", "/setting"],
        ];
    },
    23879: function (e, s, a) {
      "use strict";
      a.r(s),
        (s.default = {
          src: "/_next/static/media/avatar-13.9a44375f.png",
          height: 50,
          width: 50,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEU+LUVDUkq5yNw9LkY2TU8+Ulg9M01DVkQcADxEUmVDUUU6GkZEV0RCTlScLk+xOFCUhJSxfIGpa3ecrck3MlGnmaExPVuRiZxpX4eGmb5CTEJBQkVEYUNxQmlgMmhHYYvlvJytvdl4V3GDVXZWbZQwRVxAWHwsrkM5AAAAHXRSTlP98/G5/v6j+gb+uxuU/f7+/f7+ln3+/v78fP///iDYUHsAAAAJcEhZcwAACxMAAAsTAQCanBgAAABHSURBVAiZBcEFAoAgEATABUm745Cy/v9EZ1AVAKAMSqelIFdDn/byzalB0rddEASy9zCGlcBsn9L+Mqj4LFv8ZpiJ58wP8wOIWQRiboYqzQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    83177: function (e, s, a) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = a(86006),
        t = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        r =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = { key: !0, ref: !0, __self: !0, __source: !0 };
      function o(e, s, a) {
        var n,
          l = {},
          o = null,
          d = null;
        for (n in (void 0 !== a && (o = "" + a),
        void 0 !== s.key && (o = "" + s.key),
        void 0 !== s.ref && (d = s.ref),
        s))
          i.call(s, n) && !c.hasOwnProperty(n) && (l[n] = s[n]);
        if (e && e.defaultProps)
          for (n in (s = e.defaultProps)) void 0 === l[n] && (l[n] = s[n]);
        return {
          $$typeof: t,
          type: e,
          key: o,
          ref: d,
          props: l,
          _owner: r.current,
        };
      }
      (s.Fragment = l), (s.jsx = o), (s.jsxs = o);
    },
    9268: function (e, s, a) {
      "use strict";
      e.exports = a(83177);
    },
    76394: function (e, s, a) {
      e.exports = a(72011);
    },
    35846: function (e, s, a) {
      e.exports = a(90414);
    },
    56008: function (e, s, a) {
      e.exports = a(60167);
    },
  },
  function (e) {
    e.O(0, [2011, 414, 2667, 8139, 1744], function () {
      return e((e.s = 22837));
    }),
      (_N_E = e.O());
  },
]);
