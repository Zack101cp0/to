(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3339],
  {
    35114: function (e, s, a) {
      Promise.resolve().then(a.bind(a, 93216)),
        Promise.resolve().then(a.t.bind(a, 72011, 23)),
        Promise.resolve().then(a.t.bind(a, 90414, 23)),
        Promise.resolve().then(a.bind(a, 6733)),
        Promise.resolve().then(a.bind(a, 28546));
    },
    93216: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return u;
          },
        });
      var t = a(9268),
        A = a(21082),
        l = a(76394),
        n = a.n(l),
        i = a(86006),
        r = a(69670);
      let c = (e) => {
        let { data: s } = e,
          {
            clss: a,
            id: A,
            last_message: l,
            number_of_message: i,
            user_avt: r,
            user_name: c,
          } = s;
        return (0, t.jsxs)("div", {
          className:
            "text-start d-flex justify-content-between chat-single p-4 mb-2 ".concat(
              1 === A ? "active" : ""
            ),
          children: [
            (0, t.jsxs)("div", {
              className: "d-flex gap-2 align-items-center",
              children: [
                (0, t.jsx)("div", {
                  className: "avatar",
                  children: (0, t.jsx)(n(), {
                    className: "avatar-img max-un",
                    src: r,
                    alt: "avatar",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "text-area",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "title-area position-relative d-inline-flex align-items-center",
                      children: [
                        (0, t.jsx)("h6", {
                          className: "m-0 d-inline-flex",
                          children: c,
                        }),
                        i &&
                          (0, t.jsx)("span", {
                            className:
                              "abs-area position-absolute d-center mdtxt",
                            children: i,
                          }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: "mdtxt ".concat(a),
                      children: l,
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "btn-group cus-dropdown dropend",
              children: [
                (0, t.jsx)("button", {
                  type: "button",
                  className: "dropdown-btn",
                  "data-bs-toggle": "dropdown",
                  "aria-expanded": "false",
                  children: (0, t.jsx)("i", {
                    className: "material-symbols-outlined fs-xxl m-0",
                    children: "more_horiz",
                  }),
                }),
                (0, t.jsxs)("ul", {
                  className: "dropdown-menu p-4 pt-2",
                  children: [
                    (0, t.jsx)("li", {
                      children: (0, t.jsxs)("button", {
                        className: "droplist d-flex align-items-center gap-2",
                        children: [
                          (0, t.jsx)("i", {
                            className: "material-symbols-outlined mat-icon",
                            children: "person_remove",
                          }),
                          (0, t.jsx)("span", { children: "Unfollow" }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("li", {
                      children: (0, t.jsxs)("button", {
                        className: "droplist d-flex align-items-center gap-2",
                        children: [
                          (0, t.jsx)("i", {
                            className: "material-symbols-outlined mat-icon",
                            children: "hide_source",
                          }),
                          (0, t.jsx)("span", { children: "Hide Contact" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var d = a(6733);
      let o = () => {
        let [e, s] = (0, i.useState)(!1);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: "d-block d-lg-none",
              children: (0, t.jsxs)("button", {
                className:
                  "button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2",
                onClick: () => s(!e),
                children: [
                  (0, t.jsx)("i", {
                    className: "material-symbols-outlined mat-icon",
                    children: " tune ",
                  }),
                  (0, t.jsx)("span", { children: "Chat List" }),
                ],
              }),
            }),
            (0, t.jsxs)("div", {
              className: "profile-sidebar ".concat(e && "active"),
              children: [
                (0, t.jsx)("div", {
                  className: "d-block d-lg-none position-absolute end-0 top-0",
                  children: (0, t.jsx)("button", {
                    className: "button profile-close m-1",
                    onClick: () => s(!1),
                    children: (0, t.jsx)("i", {
                      className: "material-symbols-outlined mat-icon fs-xl",
                      children: "close",
                    }),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "chat-area",
                  children: (0, t.jsxs)("aside", {
                    children: [
                      (0, t.jsxs)("div", {
                        className: "chat-top p-5",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "profile-area d-center justify-content-between",
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "avatar-item d-flex mb-4 gap-3 align-items-center",
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "avatar-item",
                                    children: (0, t.jsx)(n(), {
                                      className: "avatar-img max-un",
                                      src: d.default,
                                      alt: "avatar",
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "info-area",
                                    children: (0, t.jsx)("h6", {
                                      className: "m-0",
                                      children: "Chat",
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsx)(r.Z, {
                                actionList: [
                                  ["Unfollow", "person_remove"],
                                  ["Hide Contact", "hide_source"],
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("form", {
                            action: "#",
                            className:
                              "input-area py-2 d-flex align-items-center",
                            children: [
                              (0, t.jsx)("i", {
                                className: "material-symbols-outlined mat-icon",
                                children: "search",
                              }),
                              (0, t.jsx)("input", {
                                type: "text",
                                placeholder: "Search",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "header-menu cus-scrollbar",
                        children: (0, t.jsx)("div", {
                          className: "single-item messages-area pb-5",
                          children: A.Z.map((e) =>
                            (0, t.jsx)(c, { data: e }, e.id)
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var u = o;
    },
    69670: function (e, s, a) {
      "use strict";
      var t = a(9268);
      let A = (e) => {
        let { actionList: s } = e;
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
                null == s
                  ? void 0
                  : s.map((e, s) => {
                      let [a, A] = e;
                      return (0, t.jsx)(
                        "li",
                        {
                          children: (0, t.jsxs)("button", {
                            className:
                              "droplist d-flex align-items-center gap-2",
                            children: [
                              (0, t.jsx)("i", {
                                className: "material-symbols-outlined mat-icon",
                                children: A,
                              }),
                              (0, t.jsx)("span", { children: a }),
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
      s.Z = A;
    },
    21082: function (e, s, a) {
      "use strict";
      var t = a(6733),
        A = a(28546),
        l = a(51081),
        n = a(21524),
        i = a(82506),
        r = a(44062),
        c = a(43806);
      let d = [
        {
          id: 1,
          user_name: "Piter Maio",
          user_avt: c.default,
          number_of_message: 3,
          last_message: "Amet minim mollit non....",
          clss: "sms",
        },
        {
          id: 2,
          user_name: "Annette Black",
          user_avt: t.default,
          number_of_message: null,
          last_message: "You: consequat sunt",
          clss: "",
        },
        {
          id: 3,
          user_name: "Ralph Edwards",
          user_avt: A.default,
          number_of_message: null,
          last_message: "You: consequat sunt",
          clss: "sms",
        },
        {
          id: 4,
          user_name: "Darrell Steward",
          user_avt: l.default,
          number_of_message: null,
          last_message: "You: consequat sunt",
          clss: "",
        },
        {
          id: 5,
          user_name: "Wade Warren",
          user_avt: n.default,
          number_of_message: null,
          last_message: "You: consequat sunt",
          clss: "",
        },
        {
          id: 6,
          user_name: "Kathryn Murphy",
          user_avt: i.default,
          number_of_message: null,
          last_message: "You: consequat sunt",
          clss: "",
        },
        {
          id: 7,
          user_name: "Jacob Jones",
          user_avt: r.default,
          number_of_message: null,
          last_message: "You: consequat sunt",
          clss: "",
        },
      ];
      s.Z = d;
    },
    6733: function (e, s, a) {
      "use strict";
      a.r(s),
        (s.default = {
          src: "/_next/static/media/avatar-1.892b29c8.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEXvrEfyw8T+z9DeXxr0ehbxpkD4qzr7xsP/ZAX3oTr9XgPwsrQJAQDwrUbwr0b5fkTzXAYuDQBSS1X/XgH+VQD2lmH/sULsrm/8di3fqap/LQH7aAz8Zgvukkilg4WyRQmKbW10YWbTTgKUy2iKAAAAE3RSTlP+/v79/e/+/u/vU/7+U1P+7v79R5+RtwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUCJkFwYUBgDAQBLCrUUW/jrP/kCRw5l5DXxzMF95r6wYkHs2bIFDV3rdKoDhrliLhkImzU+6wQCmAxaTyMGQ1/pK6A7FspWlUAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    28546: function (e, s, a) {
      "use strict";
      a.r(s),
        (s.default = {
          src: "/_next/static/media/avatar-2.2afbed29.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEX5wsD9ycP10dfjq9z5/v378fPvzuO0d/7WnuDxt7a0evnXpNLpq7rrucu2ef306+yydf+3evz////Jjun+zsPruLzv5ubAhfPq2Nj/4dnm1Nb95uHirKUv1AfRAAAAFHRSTlP+71P+/e/97/7+U/7+/VP3/////mYZ6rUAAAAJcEhZcwAACxMAAAsTAQCanBgAAABDSURBVAiZBcGFEcAwDASwD9VJ6d4OlfafsxJW0RCmnBDm1g4VUHvpXyVUN5R9EmRtyCTqcgHPkuHuOEZ8HXwyM0v+B3irA0VZyEE5AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    51081: function (e, s, a) {
      "use strict";
      a.r(s),
        (s.default = {
          src: "/_next/static/media/avatar-3.3c4eae60.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVDN3otLHJSRIHKt8L95txiSIVlWIz+xMNnUoj/y8eigZ7t2db139jowcT/7+EuJ3Hqtr2OcJj/9+ZlWY1tWYv+6N7zwMHKn7DizM+qmbEsJnHcqrb1qbqwiqXlsro1LnX13th8ZJGp2CJcAAAAFXRSTlP+U/337+/v/v7+/v5T/e7+/v5T/v3wUOTgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVQImQXBBQLAIAwEsMNhxqxFZ///5BLsCvHIesJS5Af5atDc3PZkAnFaeciEMbnAvhAKrpYqFGz1N5/VQpgeXDfiB4+DA/d3NgjEAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    21524: function (e, s, a) {
      "use strict";
      a.r(s),
        (s.default = {
          src: "/_next/static/media/avatar-4.a9bab38f.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVWu0P9skX8dA/+WgX7yczsuLdSs0H9tUfzrj31wsKhtEP8lS3irbH/vJ//vpg7t0M8uEP/sET8hCD8jyj3tmVfs0P9dzTxnH76gEL9biPMsleFsWhzq1rXtmSSjpi8AAAAEXRSTlP+U/79/v707/n+7/3+/v5TU7WqCPsAAAAJcEhZcwAACxMAAAsTAQCanBgAAABCSURBVAiZBcGHAYAgEASwoz5gwXvA7v5rmsCIWqtiIM1du2sCTmf2hxLsOYS5E+Sa/UKC6fPhTkQZeF6Mgi0CEbH+bb4DCsiF7y0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    82506: function (e, s, a) {
      "use strict";
      a.r(s),
        (s.default = {
          src: "/_next/static/media/avatar-5.b9c0cae5.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEWz0/+5x+rcdmHrkXvMnJ7+VAD/jEj6mny00fu1n725iJvQt8X/sZvGqKrmTAD0qJPxeDaPmJ7lUgDkhVay1P/ninW0zfeu2//Fw8/eq6OzsLDxSQD+omnBxeDZY1XhbFvUenPpuKcvDVReAAAAHXRSTlPv/f7+/VP+/lP+/f7+/e/+7v7v7////////////tUeK8oAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFSURBVAiZBcEHAoAgEAOwqsCBe5Qh4Pr/J01gQecCLMD+fhQBhteLbwhe4rs2EYyDyBkJqm9czingKDVlU1bo3eStzvoHh1oECm1nLEIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    44062: function (e, s, a) {
      "use strict";
      a.r(s),
        (s.default = {
          src: "/_next/static/media/avatar-6.5d5858dd.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX6m3+4t9e7hphhUWAAAAD2j3W13/+y1v8LCAwTFRd6aXw5PkzcXlPogGrOc3Cy0Pq7WWG7nLSzz/kBAAKx2P/jhXCzx/CVTUXxfWbGsMbCjZ3OVUxqSUNrS0SZud97aBemAAAAE3RSTlP+/v79U/7+7+/9/e/+/v1T/f1TbjUgagAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUCJkVxkkSgCAMBMABwQQ31IRN1P8/07JPjZOytYYiKO+9bpmgR09IRqGX92ltfxagthE6FaAML2YJzx2E4VhEhN0HgiADomvCyCsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    43806: function (e, s, a) {
      "use strict";
      a.r(s),
        (s.default = {
          src: "/_next/static/media/avatar-7.01ecf59c.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX34Nr808XFv+D/59qrTFjDU6npXEf449/QVEz649pPV6z/7OD//uqvYHunlq3BYm3VbGfMZm1SS4z649o2LXP+6t6wmrDic6+9VVjrz9m5donboKloUZXrgnKkU2SkgJvb0N/xEQOHAAAAE3RSTlPv/f7v/v7+/f5T/u5T/u/+/v7+1GQKhAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUCJkdxlcSgCAMBcBHkQB2kyB2739KZ9yvRTfIkq1LaIuI5NeBaff+tAre+jg2K4N5ivMfukI4iAE1dzUKJJQaH6QPggQDkEgVo14AAAAASUVORK5CYII=",
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
       */ var t = a(86006),
        A = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        i =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        r = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, s, a) {
        var t,
          l = {},
          c = null,
          d = null;
        for (t in (void 0 !== a && (c = "" + a),
        void 0 !== s.key && (c = "" + s.key),
        void 0 !== s.ref && (d = s.ref),
        s))
          n.call(s, t) && !r.hasOwnProperty(t) && (l[t] = s[t]);
        if (e && e.defaultProps)
          for (t in (s = e.defaultProps)) void 0 === l[t] && (l[t] = s[t]);
        return {
          $$typeof: A,
          type: e,
          key: c,
          ref: d,
          props: l,
          _owner: i.current,
        };
      }
      (s.Fragment = l), (s.jsx = c), (s.jsxs = c);
    },
    9268: function (e, s, a) {
      "use strict";
      e.exports = a(83177);
    },
    76394: function (e, s, a) {
      e.exports = a(72011);
    },
  },
  function (e) {
    e.O(0, [2011, 414, 2667, 8139, 1744], function () {
      return e((e.s = 35114));
    }),
      (_N_E = e.O());
  },
]);
