(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8851],
  {
    57708: function (A, a, e) {
      "use strict";
      e.r(a),
        e.d(a, {
          default: function () {
            return h;
          },
        });
      var t = e(9268),
        s = e(27393),
        i = e(76394),
        r = e.n(i),
        l = e(35846),
        n = e.n(l),
        d = e(56008),
        c = e(69670);
      let m = (A) => {
        let { data: a } = A,
          { avt: e, id: s, name: i } = a;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: "avatar-item d-flex gap-3 align-items-center",
              children: [
                (0, t.jsx)("div", {
                  className: "avatar-item",
                  children: (0, t.jsx)(r(), {
                    className: "avatar-img max-un",
                    src: e,
                    alt: "avatar",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "info-area",
                  children: (0, t.jsx)("h6", {
                    className: "m-0",
                    children: (0, t.jsx)(n(), {
                      href: "/public-profile/post",
                      className: "mdtxt",
                      children: i,
                    }),
                  }),
                }),
              ],
            }),
            (0, t.jsx)(c.Z, {
              actionList: [
                ["Unfollow", "person_remove"],
                ["Hide Contact", "hide_source"],
              ],
            }),
          ],
        });
      };
      var g = e(44062);
      let u = (A) => {
        let { children: a } = A,
          e = (0, d.usePathname)();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            a,
            (0, t.jsxs)("div", {
              className: "d-flex flex-column gap-6",
              children: [
                "/" === e &&
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
                              src: g.default,
                              alt: "avatar",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "info-area",
                            children: (0, t.jsx)("h6", {
                              className: "m-0",
                              children: (0, t.jsx)(n(), {
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
                  : s.Z.map((A) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className:
                            "profile-area d-center justify-content-between",
                          children: (0, t.jsx)(m, { data: A }),
                        },
                        A.id
                      )
                    ),
              ],
            }),
          ],
        });
      };
      var h = u;
    },
    26671: function (A, a, e) {
      "use strict";
      e.r(a);
      var t = e(9268),
        s = e(76394),
        i = e.n(s),
        r = e(35846),
        l = e.n(r),
        n = e(56008),
        d = e(69670),
        c = e(92933),
        m = e(28546),
        g = e(51081),
        u = e(21524),
        h = e(68980);
      let o = (A) => {
        let { tabData: a } = A,
          e = (0, n.usePathname)(),
          s = e.split("/"),
          r = s[s.length - 1];
        return (0, t.jsxs)("div", {
          className: "single-box p-5",
          children: [
            (0, t.jsx)("div", {
              className: "avatar-area",
              children: (0, t.jsx)(i(), {
                className: "avatar-img w-100",
                src: h.Z,
                alt: "image",
              }),
            }),
            (0, t.jsxs)("div", {
              className:
                "top-area py-4 d-center flex-wrap gap-3 justify-content-between align-items-start",
              children: [
                (0, t.jsxs)("div", {
                  className: "d-flex gap-3 align-items-center",
                  children: [
                    (0, t.jsx)("div", {
                      className: "avatar-item p",
                      children: (0, t.jsx)(i(), {
                        className: "avatar-img max-un",
                        src: c.Z,
                        alt: "avatar",
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-area text-start",
                      children: [
                        (0, t.jsx)("h4", {
                          className: "m-0 mb-2",
                          children: "Lerio Mao",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "friends-list d-flex flex-wrap gap-2 align-items-center text-center",
                          children: [
                            (0, t.jsxs)("ul", {
                              className:
                                "d-flex align-items-center justify-content-center",
                              children: [
                                (0, t.jsx)("li", {
                                  children: (0, t.jsx)(i(), {
                                    src: g.default,
                                    alt: "image",
                                  }),
                                }),
                                (0, t.jsx)("li", {
                                  children: (0, t.jsx)(i(), {
                                    src: m.default,
                                    alt: "image",
                                  }),
                                }),
                                (0, t.jsx)("li", {
                                  children: (0, t.jsx)(i(), {
                                    src: u.default,
                                    alt: "image",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className: "mdtxt d-center",
                              children: "10k Followers",
                            }),
                            (0, t.jsx)("span", {
                              className: "mdtxt d-center following",
                              children: "200 Following",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "btn-item d-center gap-3",
                  children: [
                    (0, t.jsxs)(l(), {
                      href: "URL:void()",
                      className: "cmn-btn d-center gap-1",
                      children: [
                        (0, t.jsx)("i", {
                          className: "material-symbols-outlined mat-icon fs-4",
                          children: "person_add",
                        }),
                        "Follow",
                      ],
                    }),
                    (0, t.jsxs)(l(), {
                      href: "URL:void()",
                      className: "cmn-btn d-center gap-1",
                      children: [
                        (0, t.jsx)("i", {
                          className: "material-symbols-outlined mat-icon fs-4",
                          children: "send",
                        }),
                        "Message",
                      ],
                    }),
                    (0, t.jsx)(d.Z, {
                      actionList: [
                        ["Block", "lock"],
                        ["Report", "flag"],
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "page-details",
              children: (0, t.jsx)("ul", {
                className: "nav mt-5 pt-4 flex-wrap gap-2 tab-area",
                children: a.map((A, a) => {
                  let [e, s, i] = A;
                  return (0, t.jsx)(
                    "li",
                    {
                      className: "nav-item",
                      role: "presentation",
                      children: (0, t.jsx)(l(), {
                        href: i,
                        className: "nav-link d-center ".concat(
                          r === s ? "active" : "",
                          " "
                        ),
                        children: e,
                      }),
                    },
                    a
                  );
                }),
              }),
            }),
          ],
        });
      };
      a.default = o;
    },
    69670: function (A, a, e) {
      "use strict";
      var t = e(9268);
      let s = (A) => {
        let { actionList: a } = A;
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
                null == a
                  ? void 0
                  : a.map((A, a) => {
                      let [e, s] = A;
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
                              (0, t.jsx)("span", { children: e }),
                            ],
                          }),
                        },
                        a
                      );
                    }),
            }),
          ],
        });
      };
      a.Z = s;
    },
    27393: function (A, a, e) {
      "use strict";
      var t = e(6733),
        s = e(28546),
        i = e(51081),
        r = e(21524),
        l = e(82506),
        n = e(44062),
        d = e(43806),
        c = e(41679),
        m = e(35077);
      let g = [
        { id: 1, name: "Piter Maio", avt: s.default },
        { id: 2, name: "Floyd Miles", avt: t.default },
        { id: 3, name: "Darrell Steward", avt: i.default },
        { id: 4, name: "Kristin Watson", avt: r.default },
        { id: 5, name: "Jane Cooper", avt: l.default },
        { id: 6, name: "Devon Lane", avt: n.default },
        { id: 7, name: "Annette Black", avt: d.default },
        { id: 8, name: "Jerome Bell", avt: c.default },
        { id: 9, name: "Guy Hawkins", avt: m.default },
      ];
      a.Z = g;
    },
    6733: function (A, a, e) {
      "use strict";
      e.r(a),
        (a.default = {
          src: "/_next/static/media/avatar-1.892b29c8.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEXvrEfyw8T+z9DeXxr0ehbxpkD4qzr7xsP/ZAX3oTr9XgPwsrQJAQDwrUbwr0b5fkTzXAYuDQBSS1X/XgH+VQD2lmH/sULsrm/8di3fqap/LQH7aAz8Zgvukkilg4WyRQmKbW10YWbTTgKUy2iKAAAAE3RSTlP+/v79/e/+/u/vU/7+U1P+7v79R5+RtwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUCJkFwYUBgDAQBLCrUUW/jrP/kCRw5l5DXxzMF95r6wYkHs2bIFDV3rdKoDhrliLhkImzU+6wQCmAxaTyMGQ1/pK6A7FspWlUAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    92933: function (A, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/avatar-14.daad9d8b.png",
        height: 120,
        width: 120,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEWr0/200vCn0/2+zvEAqumo0/2y1PSk0//P1NMxxfPYq63rs6wbquDs1dDjnGLbpoHWnX6q0vyo0//SyNrmxLr9wHKv1PtYm7/ltqDZtKdmwvVCy/dn0v/MzdX2z5rpq3NmU3MMAAAAEnRSTlP+/rr+/qr+/v7+/v7+/v7+/pn5+F2+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVQImQXBiQJAIBQEwI3qldt2I/7/L83gpHLO0oAqpfRaQvq3H1sXSIit1SBgXmONmQDDPI0EIFcpDwDjtV78PfyJogOfzjXCHAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    28546: function (A, a, e) {
      "use strict";
      e.r(a),
        (a.default = {
          src: "/_next/static/media/avatar-2.2afbed29.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEX5wsD9ycP10dfjq9z5/v378fPvzuO0d/7WnuDxt7a0evnXpNLpq7rrucu2ef306+yydf+3evz////Jjun+zsPruLzv5ubAhfPq2Nj/4dnm1Nb95uHirKUv1AfRAAAAFHRSTlP+71P+/e/97/7+U/7+/VP3/////mYZ6rUAAAAJcEhZcwAACxMAAAsTAQCanBgAAABDSURBVAiZBcGFEcAwDASwD9VJ6d4OlfafsxJW0RCmnBDm1g4VUHvpXyVUN5R9EmRtyCTqcgHPkuHuOEZ8HXwyM0v+B3irA0VZyEE5AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    51081: function (A, a, e) {
      "use strict";
      e.r(a),
        (a.default = {
          src: "/_next/static/media/avatar-3.3c4eae60.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVDN3otLHJSRIHKt8L95txiSIVlWIz+xMNnUoj/y8eigZ7t2db139jowcT/7+EuJ3Hqtr2OcJj/9+ZlWY1tWYv+6N7zwMHKn7DizM+qmbEsJnHcqrb1qbqwiqXlsro1LnX13th8ZJGp2CJcAAAAFXRSTlP+U/337+/v/v7+/v5T/e7+/v5T/v3wUOTgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVQImQXBBQLAIAwEsMNhxqxFZ///5BLsCvHIesJS5Af5atDc3PZkAnFaeciEMbnAvhAKrpYqFGz1N5/VQpgeXDfiB4+DA/d3NgjEAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    21524: function (A, a, e) {
      "use strict";
      e.r(a),
        (a.default = {
          src: "/_next/static/media/avatar-4.a9bab38f.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVWu0P9skX8dA/+WgX7yczsuLdSs0H9tUfzrj31wsKhtEP8lS3irbH/vJ//vpg7t0M8uEP/sET8hCD8jyj3tmVfs0P9dzTxnH76gEL9biPMsleFsWhzq1rXtmSSjpi8AAAAEXRSTlP+U/79/v707/n+7/3+/v5TU7WqCPsAAAAJcEhZcwAACxMAAAsTAQCanBgAAABCSURBVAiZBcGHAYAgEASwoz5gwXvA7v5rmsCIWqtiIM1du2sCTmf2hxLsOYS5E+Sa/UKC6fPhTkQZeF6Mgi0CEbH+bb4DCsiF7y0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    82506: function (A, a, e) {
      "use strict";
      e.r(a),
        (a.default = {
          src: "/_next/static/media/avatar-5.b9c0cae5.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEWz0/+5x+rcdmHrkXvMnJ7+VAD/jEj6mny00fu1n725iJvQt8X/sZvGqKrmTAD0qJPxeDaPmJ7lUgDkhVay1P/ninW0zfeu2//Fw8/eq6OzsLDxSQD+omnBxeDZY1XhbFvUenPpuKcvDVReAAAAHXRSTlPv/f7+/VP+/lP+/f7+/e/+7v7v7////////////tUeK8oAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFSURBVAiZBcEHAoAgEAOwqsCBe5Qh4Pr/J01gQecCLMD+fhQBhteLbwhe4rs2EYyDyBkJqm9czingKDVlU1bo3eStzvoHh1oECm1nLEIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    44062: function (A, a, e) {
      "use strict";
      e.r(a),
        (a.default = {
          src: "/_next/static/media/avatar-6.5d5858dd.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX6m3+4t9e7hphhUWAAAAD2j3W13/+y1v8LCAwTFRd6aXw5PkzcXlPogGrOc3Cy0Pq7WWG7nLSzz/kBAAKx2P/jhXCzx/CVTUXxfWbGsMbCjZ3OVUxqSUNrS0SZud97aBemAAAAE3RSTlP+/v79U/7+7+/9/e/+/v1T/f1TbjUgagAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUCJkVxkkSgCAMBMABwQQ31IRN1P8/07JPjZOytYYiKO+9bpmgR09IRqGX92ltfxagthE6FaAML2YJzx2E4VhEhN0HgiADomvCyCsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    43806: function (A, a, e) {
      "use strict";
      e.r(a),
        (a.default = {
          src: "/_next/static/media/avatar-7.01ecf59c.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX34Nr808XFv+D/59qrTFjDU6npXEf449/QVEz649pPV6z/7OD//uqvYHunlq3BYm3VbGfMZm1SS4z649o2LXP+6t6wmrDic6+9VVjrz9m5donboKloUZXrgnKkU2SkgJvb0N/xEQOHAAAAE3RSTlPv/f7v/v7+/f5T/u5T/u/+/v7+1GQKhAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUCJkdxlcSgCAMBcBHkQB2kyB2739KZ9yvRTfIkq1LaIuI5NeBaff+tAre+jg2K4N5ivMfukI4iAE1dzUKJJQaH6QPggQDkEgVo14AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    41679: function (A, a, e) {
      "use strict";
      e.r(a),
        (a.default = {
          src: "/_next/static/media/avatar-8.3218efd9.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX65NvdmpHmsK75vMW2XFuiVV2Wbp345N37ssLrmbDyp7nPg5iOUm/xnrXqyMP/6t+Kj9rCg4j649z86OD539bCXlb62tbGbGXhjqPymrPzpbnRe3e5Y2Sla4TNq7mRn+qta3T7y6owAAAAEnRSTlPv/v7u/v7+U/b9U/7+7/3v/f1dz5ioAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVQImQXBhQGAMAADsAJTnM4F+f9KEujjUeqFBniFfhKg/2S/dwf6JELzBN0QxOgIsq4ymwhEm5otE7QpS67b/AOOkQP2U3BdPQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    35077: function (A, a, e) {
      "use strict";
      e.r(a),
        (a.default = {
          src: "/_next/static/media/avatar-9.976a04e2.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX859343tn14duJeZ7tkoZdS4KrmbHdhYD9loH54tq2bnnFtcL239noc6TDdqtQRH+IiqX/no765Nz/6+D84NUhHm+8eIbx29aYY3zri344MXjs19X8vrDuuMzqxcHkuLyri6GEdJnmZqBHIwtoAAAAF3RSTlPvU1P9/v7+/v7v/v1T/u/uU/7//////nugjAAAAAAJcEhZcwAACxMAAAsTAQCanBgAAABHSURBVAiZFcZHEoAgEATAUQmL2SWD+f+PtOxTo0VUqmKEsZ33MgLsQpJlsGCnde7PP0KTuCuYd6LkHxi2Vw5lQYNj2t55/QCDUwQCAt4SZQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    68980: function (A, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/profile-cover-img.d90bf0c2.png",
        height: 300,
        width: 1236,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAJ1BMVEUAGUALcL9ZkdAPN2YResoAI28BTJsxjdgDHkYAM4BQltoKTIo5cbVBsVvmAAAAAnRSTlP+/qap3hAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVAiZY2BkYWHnYmLiYWDgYGbmZuNkBQAC1wBY70VgxgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    56008: function (A, a, e) {
      A.exports = e(60167);
    },
  },
]);
