(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5448],
  {
    57708: function (e, A, a) {
      "use strict";
      a.r(A),
        a.d(A, {
          default: function () {
            return g;
          },
        });
      var t = a(9268),
        s = a(27393),
        i = a(76394),
        r = a.n(i),
        n = a(35846),
        l = a.n(n),
        c = a(56008),
        d = a(69670);
      let o = (e) => {
        let { data: A } = e,
          { avt: a, id: s, name: i } = A;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: "avatar-item d-flex gap-3 align-items-center",
              children: [
                (0, t.jsx)("div", {
                  className: "avatar-item",
                  children: (0, t.jsx)(r(), {
                    className: "avatar-img max-un",
                    src: a,
                    alt: "avatar",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "info-area",
                  children: (0, t.jsx)("h6", {
                    className: "m-0",
                    children: (0, t.jsx)(l(), {
                      href: "/public-profile/post",
                      className: "mdtxt",
                      children: i,
                    }),
                  }),
                }),
              ],
            }),
            (0, t.jsx)(d.Z, {
              actionList: [
                ["Unfollow", "person_remove"],
                ["Hide Contact", "hide_source"],
              ],
            }),
          ],
        });
      };
      var u = a(44062);
      let m = (e) => {
        let { children: A } = e,
          a = (0, c.usePathname)();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            A,
            (0, t.jsxs)("div", {
              className: "d-flex flex-column gap-6",
              children: [
                "/" === a &&
                  (0, t.jsxs)("div", {
                    className:
                      "profile-area d-center position-relative align-items-center justify-content-between",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "avatar-item d-flex gap-3 align-items-center",
                        children: [
                          (0, t.jsx)("div", {
                            className: "avatar-item",
                            children: (0, t.jsx)(r(), {
                              className: "avatar-img max-un",
                              src: u.default,
                              alt: "avatar",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "info-area",
                            children: (0, t.jsx)("h6", {
                              className: "m-0",
                              children: (0, t.jsx)(l(), {
                                href: "/public-profile/post",
                                className: "mdtxt",
                                children: "Piter Maio",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("span", {
                        className:
                          "mdtxt abs-area d-center position-absolute end-0",
                        children: "5",
                      }),
                    ],
                  }),
                null === s.Z || void 0 === s.Z
                  ? void 0
                  : s.Z.map((e) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className:
                            "profile-area d-center justify-content-between",
                          children: (0, t.jsx)(o, { data: e }),
                        },
                        e.id
                      )
                    ),
              ],
            }),
          ],
        });
      };
      var g = m;
    },
    45448: function (e, A, a) {
      "use strict";
      a.r(A);
      var t = a(9268),
        s = a(64753),
        i = a(76394),
        r = a.n(i),
        n = a(35846),
        l = a.n(n),
        c = a(56008),
        d = a(57708),
        o = a(6733);
      let u = () => {
        let e = (0, c.usePathname)();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: "d-block d-lg-none",
              children: (0, t.jsxs)("button", {
                className:
                  "button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2",
                children: [
                  (0, t.jsx)("i", {
                    className: "material-symbols-outlined mat-icon",
                    children: " tune ",
                  }),
                  (0, t.jsx)("span", { children: "My profile" }),
                ],
              }),
            }),
            (0, t.jsxs)("div", {
              className: "profile-sidebar cus-scrollbar p-5",
              children: [
                (0, t.jsx)("div", {
                  className: "d-block d-lg-none position-absolute end-0 top-0",
                  children: (0, t.jsx)("button", {
                    className: "button profile-close",
                    children: (0, t.jsx)("i", {
                      className: "material-symbols-outlined mat-icon fs-xl",
                      children: "close",
                    }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "profile-pic d-flex gap-2 align-items-center",
                  children: [
                    (0, t.jsx)("div", {
                      className: "avatar position-relative",
                      children: (0, t.jsx)(r(), {
                        className: "avatar-img max-un",
                        src: o.default,
                        alt: "avatar",
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-area",
                      children: [
                        (0, t.jsx)("h6", {
                          className: "m-0 mb-1",
                          children: (0, t.jsx)(l(), {
                            href: "/profile/post",
                            children: "Lerio Mao",
                          }),
                        }),
                        (0, t.jsx)("p", {
                          className: "mdtxt",
                          children: "@maolio",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("ul", {
                  className: "profile-link mt-7 mb-7 pb-7",
                  children: s.qJ.map((A, a) => {
                    let [s, i, r] = A;
                    return (0, t.jsx)(
                      "li",
                      {
                        children: (0, t.jsxs)(l(), {
                          href: r,
                          className: "d-flex gap-4 ".concat(
                            e === r ? "active" : ""
                          ),
                          children: [
                            (0, t.jsx)("i", {
                              className: "material-symbols-outlined mat-icon",
                              children: s,
                            }),
                            (0, t.jsx)("span", { children: i }),
                          ],
                        }),
                      },
                      a
                    );
                  }),
                }),
                (0, t.jsx)(d.default, {
                  children: (0, t.jsx)("div", {
                    className: "mb-4",
                    children: (0, t.jsx)("h6", {
                      className: "d-inline-flex",
                      children: "Contact",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      A.default = u;
    },
    69670: function (e, A, a) {
      "use strict";
      var t = a(9268);
      let s = (e) => {
        let { actionList: A } = e;
        return (0, t.jsxs)("div", {
          className: "btn-group cus-dropdown dropend",
          children: [
            (0, t.jsx)("button", {
              type: "button",
              className: "d-flex dropdown-btn px-2",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              children: (0, t.jsx)("i", {
                className: "material-symbols-outlined fs-xxl m-0",
                children: "more_horiz",
              }),
            }),
            (0, t.jsx)("ul", {
              className: "dropdown-menu p-4 pt-2",
              children:
                null == A
                  ? void 0
                  : A.map((e, A) => {
                      let [a, s] = e;
                      return (0, t.jsx)(
                        "li",
                        {
                          children: (0, t.jsxs)("button", {
                            className:
                              "droplist d-flex align-items-center gap-2",
                            children: [
                              (0, t.jsx)("i", {
                                className: "material-symbols-outlined mat-icon",
                                children: s,
                              }),
                              (0, t.jsx)("span", { children: a }),
                            ],
                          }),
                        },
                        A
                      );
                    }),
            }),
          ],
        });
      };
      A.Z = s;
    },
    27393: function (e, A, a) {
      "use strict";
      var t = a(6733),
        s = a(28546),
        i = a(51081),
        r = a(21524),
        n = a(82506),
        l = a(44062),
        c = a(43806),
        d = a(41679),
        o = a(35077);
      let u = [
        { id: 1, name: "Piter Maio", avt: s.default },
        { id: 2, name: "Floyd Miles", avt: t.default },
        { id: 3, name: "Darrell Steward", avt: i.default },
        { id: 4, name: "Kristin Watson", avt: r.default },
        { id: 5, name: "Jane Cooper", avt: n.default },
        { id: 6, name: "Devon Lane", avt: l.default },
        { id: 7, name: "Annette Black", avt: c.default },
        { id: 8, name: "Jerome Bell", avt: d.default },
        { id: 9, name: "Guy Hawkins", avt: o.default },
      ];
      A.Z = u;
    },
    64753: function (e, A, a) {
      "use strict";
      a.d(A, {
        Sk: function () {
          return i;
        },
        Tc: function () {
          return t;
        },
        qJ: function () {
          return s;
        },
      });
      let t = [
          ["account_circle", "Dashboard", "/pages-dashboard"],
          ["group", "Your Pages", "/pages-your"],
          ["bookmark_add", "Privacy", "/pages-privacy"],
          ["settings", "Settings", "/pages-setting"],
        ],
        s = [
          ["person", "Friend Request", "/friend-request"],
          ["person_add", "Suggestions", "/suggestions"],
          ["person", "All Friend", "/all-friend"],
          ["lock", "Block List", "/block-list"],
        ],
        i = [
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
    6733: function (e, A, a) {
      "use strict";
      a.r(A),
        (A.default = {
          src: "/_next/static/media/avatar-1.892b29c8.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEXvrEfyw8T+z9DeXxr0ehbxpkD4qzr7xsP/ZAX3oTr9XgPwsrQJAQDwrUbwr0b5fkTzXAYuDQBSS1X/XgH+VQD2lmH/sULsrm/8di3fqap/LQH7aAz8Zgvukkilg4WyRQmKbW10YWbTTgKUy2iKAAAAE3RSTlP+/v79/e/+/u/vU/7+U1P+7v79R5+RtwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUCJkFwYUBgDAQBLCrUUW/jrP/kCRw5l5DXxzMF95r6wYkHs2bIFDV3rdKoDhrliLhkImzU+6wQCmAxaTyMGQ1/pK6A7FspWlUAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    28546: function (e, A, a) {
      "use strict";
      a.r(A),
        (A.default = {
          src: "/_next/static/media/avatar-2.2afbed29.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEX5wsD9ycP10dfjq9z5/v378fPvzuO0d/7WnuDxt7a0evnXpNLpq7rrucu2ef306+yydf+3evz////Jjun+zsPruLzv5ubAhfPq2Nj/4dnm1Nb95uHirKUv1AfRAAAAFHRSTlP+71P+/e/97/7+U/7+/VP3/////mYZ6rUAAAAJcEhZcwAACxMAAAsTAQCanBgAAABDSURBVAiZBcGFEcAwDASwD9VJ6d4OlfafsxJW0RCmnBDm1g4VUHvpXyVUN5R9EmRtyCTqcgHPkuHuOEZ8HXwyM0v+B3irA0VZyEE5AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    51081: function (e, A, a) {
      "use strict";
      a.r(A),
        (A.default = {
          src: "/_next/static/media/avatar-3.3c4eae60.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVDN3otLHJSRIHKt8L95txiSIVlWIz+xMNnUoj/y8eigZ7t2db139jowcT/7+EuJ3Hqtr2OcJj/9+ZlWY1tWYv+6N7zwMHKn7DizM+qmbEsJnHcqrb1qbqwiqXlsro1LnX13th8ZJGp2CJcAAAAFXRSTlP+U/337+/v/v7+/v5T/e7+/v5T/v3wUOTgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVQImQXBBQLAIAwEsMNhxqxFZ///5BLsCvHIesJS5Af5atDc3PZkAnFaeciEMbnAvhAKrpYqFGz1N5/VQpgeXDfiB4+DA/d3NgjEAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    21524: function (e, A, a) {
      "use strict";
      a.r(A),
        (A.default = {
          src: "/_next/static/media/avatar-4.a9bab38f.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVWu0P9skX8dA/+WgX7yczsuLdSs0H9tUfzrj31wsKhtEP8lS3irbH/vJ//vpg7t0M8uEP/sET8hCD8jyj3tmVfs0P9dzTxnH76gEL9biPMsleFsWhzq1rXtmSSjpi8AAAAEXRSTlP+U/79/v707/n+7/3+/v5TU7WqCPsAAAAJcEhZcwAACxMAAAsTAQCanBgAAABCSURBVAiZBcGHAYAgEASwoz5gwXvA7v5rmsCIWqtiIM1du2sCTmf2hxLsOYS5E+Sa/UKC6fPhTkQZeF6Mgi0CEbH+bb4DCsiF7y0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    82506: function (e, A, a) {
      "use strict";
      a.r(A),
        (A.default = {
          src: "/_next/static/media/avatar-5.b9c0cae5.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEWz0/+5x+rcdmHrkXvMnJ7+VAD/jEj6mny00fu1n725iJvQt8X/sZvGqKrmTAD0qJPxeDaPmJ7lUgDkhVay1P/ninW0zfeu2//Fw8/eq6OzsLDxSQD+omnBxeDZY1XhbFvUenPpuKcvDVReAAAAHXRSTlPv/f7+/VP+/lP+/f7+/e/+7v7v7////////////tUeK8oAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFSURBVAiZBcEHAoAgEAOwqsCBe5Qh4Pr/J01gQecCLMD+fhQBhteLbwhe4rs2EYyDyBkJqm9czingKDVlU1bo3eStzvoHh1oECm1nLEIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    44062: function (e, A, a) {
      "use strict";
      a.r(A),
        (A.default = {
          src: "/_next/static/media/avatar-6.5d5858dd.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX6m3+4t9e7hphhUWAAAAD2j3W13/+y1v8LCAwTFRd6aXw5PkzcXlPogGrOc3Cy0Pq7WWG7nLSzz/kBAAKx2P/jhXCzx/CVTUXxfWbGsMbCjZ3OVUxqSUNrS0SZud97aBemAAAAE3RSTlP+/v79U/7+7+/9/e/+/v1T/f1TbjUgagAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUCJkVxkkSgCAMBMABwQQ31IRN1P8/07JPjZOytYYiKO+9bpmgR09IRqGX92ltfxagthE6FaAML2YJzx2E4VhEhN0HgiADomvCyCsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    43806: function (e, A, a) {
      "use strict";
      a.r(A),
        (A.default = {
          src: "/_next/static/media/avatar-7.01ecf59c.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX34Nr808XFv+D/59qrTFjDU6npXEf449/QVEz649pPV6z/7OD//uqvYHunlq3BYm3VbGfMZm1SS4z649o2LXP+6t6wmrDic6+9VVjrz9m5donboKloUZXrgnKkU2SkgJvb0N/xEQOHAAAAE3RSTlPv/f7v/v7+/f5T/u5T/u/+/v7+1GQKhAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUCJkdxlcSgCAMBcBHkQB2kyB2739KZ9yvRTfIkq1LaIuI5NeBaff+tAre+jg2K4N5ivMfukI4iAE1dzUKJJQaH6QPggQDkEgVo14AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    41679: function (e, A, a) {
      "use strict";
      a.r(A),
        (A.default = {
          src: "/_next/static/media/avatar-8.3218efd9.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX65NvdmpHmsK75vMW2XFuiVV2Wbp345N37ssLrmbDyp7nPg5iOUm/xnrXqyMP/6t+Kj9rCg4j649z86OD539bCXlb62tbGbGXhjqPymrPzpbnRe3e5Y2Sla4TNq7mRn+qta3T7y6owAAAAEnRSTlPv/v7u/v7+U/b9U/7+7/3v/f1dz5ioAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVQImQXBhQGAMAADsAJTnM4F+f9KEujjUeqFBniFfhKg/2S/dwf6JELzBN0QxOgIsq4ymwhEm5otE7QpS67b/AOOkQP2U3BdPQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    35077: function (e, A, a) {
      "use strict";
      a.r(A),
        (A.default = {
          src: "/_next/static/media/avatar-9.976a04e2.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX859343tn14duJeZ7tkoZdS4KrmbHdhYD9loH54tq2bnnFtcL239noc6TDdqtQRH+IiqX/no765Nz/6+D84NUhHm+8eIbx29aYY3zri344MXjs19X8vrDuuMzqxcHkuLyri6GEdJnmZqBHIwtoAAAAF3RSTlPvU1P9/v7+/v7v/v1T/u/uU/7//////nugjAAAAAAJcEhZcwAACxMAAAsTAQCanBgAAABHSURBVAiZFcZHEoAgEATAUQmL2SWD+f+PtOxTo0VUqmKEsZ33MgLsQpJlsGCnde7PP0KTuCuYd6LkHxi2Vw5lQYNj2t55/QCDUwQCAt4SZQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    83177: function (e, A, a) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var t = a(86006),
        s = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        n =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, A, a) {
        var t,
          i = {},
          c = null,
          d = null;
        for (t in (void 0 !== a && (c = "" + a),
        void 0 !== A.key && (c = "" + A.key),
        void 0 !== A.ref && (d = A.ref),
        A))
          r.call(A, t) && !l.hasOwnProperty(t) && (i[t] = A[t]);
        if (e && e.defaultProps)
          for (t in (A = e.defaultProps)) void 0 === i[t] && (i[t] = A[t]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: d,
          props: i,
          _owner: n.current,
        };
      }
      (A.Fragment = i), (A.jsx = c), (A.jsxs = c);
    },
    9268: function (e, A, a) {
      "use strict";
      e.exports = a(83177);
    },
    76394: function (e, A, a) {
      e.exports = a(72011);
    },
    35846: function (e, A, a) {
      e.exports = a(90414);
    },
    56008: function (e, A, a) {
      e.exports = a(60167);
    },
  },
]);
