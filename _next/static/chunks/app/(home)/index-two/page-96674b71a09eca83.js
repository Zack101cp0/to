(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6193],
  {
    37410: function (A, e, t) {
      Promise.resolve().then(t.t.bind(t, 72011, 23)),
        Promise.resolve().then(t.t.bind(t, 90414, 23)),
        Promise.resolve().then(t.bind(t, 52923)),
        Promise.resolve().then(t.bind(t, 68354)),
        Promise.resolve().then(t.bind(t, 7833)),
        Promise.resolve().then(t.bind(t, 70874)),
        Promise.resolve().then(t.bind(t, 6733)),
        Promise.resolve().then(t.bind(t, 51081)),
        Promise.resolve().then(t.bind(t, 21524)),
        Promise.resolve().then(t.bind(t, 82506)),
        Promise.resolve().then(t.bind(t, 43806)),
        Promise.resolve().then(t.bind(t, 54527)),
        Promise.resolve().then(t.bind(t, 93999)),
        Promise.resolve().then(t.bind(t, 16418)),
        Promise.resolve().then(t.bind(t, 4806)),
        Promise.resolve().then(t.bind(t, 87915)),
        Promise.resolve().then(t.bind(t, 28546)),
        Promise.resolve().then(t.bind(t, 63754)),
        Promise.resolve().then(t.bind(t, 73464)),
        Promise.resolve().then(t.bind(t, 46366));
    },
    57708: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return u;
          },
        });
      var a = t(9268),
        s = t(27393),
        i = t(76394),
        l = t.n(i),
        r = t(35846),
        n = t.n(r),
        c = t(56008),
        d = t(69670);
      let o = (A) => {
        let { data: e } = A,
          { avt: t, id: s, name: i } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "avatar-item d-flex gap-3 align-items-center",
              children: [
                (0, a.jsx)("div", {
                  className: "avatar-item",
                  children: (0, a.jsx)(l(), {
                    className: "avatar-img max-un",
                    src: t,
                    alt: "avatar",
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "info-area",
                  children: (0, a.jsx)("h6", {
                    className: "m-0",
                    children: (0, a.jsx)(n(), {
                      href: "/public-profile/post",
                      className: "mdtxt",
                      children: i,
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(d.Z, {
              actionList: [
                ["Unfollow", "person_remove"],
                ["Hide Contact", "hide_source"],
              ],
            }),
          ],
        });
      };
      var m = t(44062);
      let g = (A) => {
        let { children: e } = A,
          t = (0, c.usePathname)();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            e,
            (0, a.jsxs)("div", {
              className: "d-flex flex-column gap-6",
              children: [
                "/" === t &&
                  (0, a.jsxs)("div", {
                    className:
                      "profile-area d-center position-relative align-items-center justify-content-between",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "avatar-item d-flex gap-3 align-items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className: "avatar-item",
                            children: (0, a.jsx)(l(), {
                              className: "avatar-img max-un",
                              src: m.default,
                              alt: "avatar",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "info-area",
                            children: (0, a.jsx)("h6", {
                              className: "m-0",
                              children: (0, a.jsx)(n(), {
                                href: "/public-profile/post",
                                className: "mdtxt",
                                children: "Piter Maio",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "mdtxt abs-area d-center position-absolute end-0",
                        children: "5",
                      }),
                    ],
                  }),
                null === s.Z || void 0 === s.Z
                  ? void 0
                  : s.Z.map((A) =>
                      (0, a.jsx)(
                        "div",
                        {
                          className:
                            "profile-area d-center justify-content-between",
                          children: (0, a.jsx)(o, { data: A }),
                        },
                        A.id
                      )
                    ),
              ],
            }),
          ],
        });
      };
      var u = g;
    },
    46366: function (A, e, t) {
      "use strict";
      t.r(e);
      var a = t(9268),
        s = t(86006),
        i = t(57708);
      let l = () => {
        let [A, e] = (0, s.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: "d-flex justify-content-end mb-4",
              children: (0, a.jsxs)("button", {
                className:
                  "button contact-active mb-4 mb-lg-0 d-flex align-items-center gap-2",
                onClick: () => e(!A),
                children: [
                  (0, a.jsx)("span", { children: "My contact" }),
                  (0, a.jsx)("i", {
                    className: "material-symbols-outlined mat-icon",
                    children: " tune ",
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "cus-scrollbar contact-sidebar ".concat(
                A ? "active" : ""
              ),
              children: (0, a.jsxs)("div", {
                className:
                  "sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "d-block d-lg-none position-absolute end-0 top-0",
                    children: (0, a.jsx)("button", {
                      className: "button contact-close",
                      children: (0, a.jsx)("i", {
                        className: "material-symbols-outlined mat-icon fs-xl",
                        children: "close",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "sidebar-area p-5",
                    children: (0, a.jsx)(i.default, {
                      children: (0, a.jsx)("div", {
                        className: "title-bar",
                        children: (0, a.jsx)("h6", {
                          className: "mb-4",
                          children: "Contact",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      e.default = l;
    },
    63754: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return h;
          },
        });
      var a = t(9268),
        s = t(64753),
        i = t(76394),
        l = t.n(i),
        r = t(35846),
        n = t.n(r),
        c = t(56008),
        d = t(86006);
      let o = [
          {
            id: 1,
            img: {
              src: "/_next/static/media/shortcuts-1.7e0670fb.png",
              height: 50,
              width: 50,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAh1BMVEUDLmRWKFXDMGjVVHb85iGcfBc3cD8cFDYDO08YMms3ZUuZU0gRJly1R1Q8F0OWQqyBKGmWJ7MMFFi+QDRGLDqHKTM9LTC0jhChDh8/HET/cBd4di8GKVn/bEUpJGQoInY9VFwPFThRY1HzxAFVGzUGQ0EOLDVdMnDRSd7USSwjD0x7cTL/iwddoGgAAAAAHHRSTlP+/v7+/v58/f7+/v7+/v2a/v3+/v57/v5d/fb9Bt3/hwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEpJREFUCJkFwQkCQCAUBcCHkuz7+lHJ7v7nM4NMp0kkDh/Xks+zsysU8em5SxBiJawSFKAmaRTIoipfxszw4X74tk12RKPbjgvR/7ogBV97QerGAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            title: "Game Community",
          },
          {
            id: 2,
            img: {
              src: "/_next/static/media/shortcuts-2.7012133f.png",
              height: 50,
              width: 50,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEXz58C2spXTwZ6um3+tlGr17sj17sf588+8q4PkyJPp1a3w2ay3lnytg07278j17sbu3brn0qPCsY2KYEv59t716cfIvJm7lF3///n/+9Pq17EvnPzVAAAADnRSTlP9/v7+/Zp8/v7+e13+/kc0czkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVAiZBcEHAoAwCAPAqCjUEUqn/v+j3mEntdEPOL296gTp7FAArt8yekYK2+pdVqQoUqsN5AwTK8AZaT5Trh9xzgMc0PhWdwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
            title: "Pixel Think (Member)",
          },
          {
            id: 3,
            img: {
              src: "/_next/static/media/shortcuts-3.03bc4509.png",
              height: 50,
              width: 50,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAkFBMVEUg3AIHuS8AzwAx4tD31o4BgwEO0gZLw1Y6yj0EsgT1yPYAwQB742MDtwPTxCn3rxgRYUrSsS+OwCZVUXCiuGBBLHPziVizrz5nbV4E0QIJygcCpwUBkQEpvAAa2QUo1RFCuIgbyiw+zyYlt78/jHtihhvP2o7/5E5esiajO7Mbjhqfsm+Hcy4AIwD/zrcbxgm4uXgGAAAAHHRSTlP+/pr+/vp7/v78/v7+Xf7+/v7+/v7+/nz+///+9AZclQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEtJREFUCJkFwQUCgCAQBMBVQcVuPcDu/P/znIE5OkQka/SDN8nsPuFai3a+qoQxJ4dbPA18FbG0vXIQdha36gVRsK1cc9gdpBIi/AHOQQV76TuJ8gAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
            title: "8 Ball Pool",
          },
          {
            id: 4,
            img: {
              src: "/_next/static/media/shortcuts-4.9ff06432.png",
              height: 50,
              width: 50,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEWIh4Tt7d3///+9rZ/KlDP/46f/4KH//vvBwMD////y7eJeX1V3bWne3NnMnj7///+/gSX81Y3/////+euUkI7j5eX90HX99eSlkX+RiHHOx8OvpHrCkEmdnHV2a1+sjnW/p4qehmNy9mbgAAAAEnRSTlP+/l3+/v7++v57/f7+/v6a/v4mEj45AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVQImQXBBwKAIAwEsFOZLrRlg+v/nzSBYxVPyRYp7r2LmCBFY34PBf3UupkvgfLksTYCDaX4ayZQWPIN0rABwXg9/prFBCF+VsjeAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            title: "Gembio",
          },
        ],
        m = () =>
          (0, a.jsx)("ul", {
            children: o.map((A) =>
              (0, a.jsx)(
                "li",
                {
                  children: (0, a.jsxs)(n(), {
                    href: "/public-profile/post",
                    className: "d-flex align-items-center gap-3",
                    children: [
                      (0, a.jsx)(l(), {
                        src: A.img,
                        alt: "icon",
                        className: "img-fluid",
                      }),
                      (0, a.jsx)("span", { children: A.title }),
                    ],
                  }),
                },
                A.id
              )
            ),
          });
      var g = t(6733);
      let u = (A) => {
        let { clss: e } = A,
          [t, i] = (0, d.useState)(!1),
          r = (0, c.usePathname)();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: "d-inline-block ".concat(e),
              children: (0, a.jsxs)("button", {
                className:
                  "button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2",
                onClick: () => i(!t),
                children: [
                  (0, a.jsx)("i", {
                    className: "material-symbols-outlined mat-icon",
                    children: " tune ",
                  }),
                  (0, a.jsx)("span", { children: "My profile" }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "profile-sidebar cus-scrollbar p-5 ".concat(
                t && "active"
              ),
              children: [
                (0, a.jsx)("div", {
                  className: "d-block d-lg-none position-absolute end-0 top-0",
                  children: (0, a.jsx)("button", {
                    className: "button profile-close mt-3 me-2",
                    onClick: () => i(!1),
                    children: (0, a.jsx)("i", {
                      className: "material-symbols-outlined mat-icon fs-xl",
                      children: " close ",
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "profile-pic d-flex gap-2 align-items-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "avatar position-relative",
                      children: (0, a.jsx)(l(), {
                        className: "avatar-img max-un",
                        src: g.default,
                        alt: "avatar",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "text-area",
                      children: [
                        (0, a.jsx)("h6", {
                          className: "m-0 mb-1",
                          children: (0, a.jsx)(n(), {
                            href: "profile/post",
                            children: "Lerio Mao",
                          }),
                        }),
                        (0, a.jsx)("p", {
                          className: "mdtxt",
                          children: "@maolio",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("ul", {
                  className: "profile-link mt-7 mb-7 pb-7",
                  children: s.Sk.map((A, e) => {
                    let [t, s, i] = A;
                    return (0, a.jsx)(
                      "li",
                      {
                        children: (0, a.jsxs)(n(), {
                          href: i,
                          className: "d-flex gap-4 ".concat(
                            r === i ? "active" : ""
                          ),
                          children: [
                            (0, a.jsxs)("i", {
                              className: "material-symbols-outlined mat-icon",
                              children: [" ", t, " "],
                            }),
                            (0, a.jsx)("span", { children: s }),
                          ],
                        }),
                      },
                      e
                    );
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "your-shortcuts",
                  children: [
                    (0, a.jsx)("h6", {
                      className: "mb-7",
                      children: "Your shortcuts",
                    }),
                    (0, a.jsx)(m, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var h = u;
    },
    73464: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return U;
          },
        });
      var a = t(9268),
        s = t(76394),
        i = t.n(s),
        l = t(35846),
        r = t.n(l),
        n = t(98563),
        c = t(6733),
        d = t(28546),
        o = t(51081),
        m = t(21524),
        g = t(82506),
        u = {
          src: "/_next/static/media/story-slider-4.5006ddb8.png",
          height: 217,
          width: 138,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAQlBMVEU7SktOV1iZvtYbMDgZJBJVV1jx+v7Bw8cVMD7Z5vEoOEDE3/Gmc18iLihAVmDW6PRsXVedem6JZlrRv7e4ydjK0ttIqSw/AAAACnRSTlP+/vr/9P7+/unz1GCfhgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUCJkVxFsWgCAIQMFbVCoIPtv/VjvNx3CaWWGntzXqHOv5r4nj7j0gUMVRFy4VyR8r4QGe/AaSEgAAAABJRU5ErkJggg==",
          blurWidth: 5,
          blurHeight: 8,
        };
      let h = [
        {
          id: 1,
          user_name: "Alen Lio",
          user_avt: c.default,
          story: {
            src: "/_next/static/media/story-slider-1.8dfc9736.png",
            height: 217,
            width: 138,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAQlBMVEVqnsE5e5wGUmkCYH5RjrIddZQPaooxPUJPSkg7PD8AV3RJgp1VbnYYS14kXWw8SFBclblTYGYmLjZaXF4AP1ZZTEXLsLguAAAACnRSTlP9////8/7//u/+7Z6yRAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUCJkFwYUBACAMwLAOGe7w/6skANMhRURR9WrJtmSD6bVdwqq9McIeh/hSih8ZngFkySvt6gAAAABJRU5ErkJggg==",
            blurWidth: 5,
            blurHeight: 8,
          },
        },
        {
          id: 2,
          user_name: "Josep",
          user_avt: d.default,
          story: {
            src: "/_next/static/media/story-slider-2.a0c3fa52.png",
            height: 217,
            width: 138,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAANlBMVEWavMmqlo59kJOlmpWzx9Dw5OLE0dnp3duWusbg08+Wj4mWqa1hcXSHgXzIx8mruLu6r6mor7Ky7/obAAAACnRSTlP+/////////PPpKivseAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUCJkVwQkWABAIQMEfEdnvf1mvGQAaGlCtVUljv8NMeTki+TolYGbWPxQAAPV5YCRSAAAAAElFTkSuQmCC",
            blurWidth: 5,
            blurHeight: 8,
          },
        },
        {
          id: 3,
          user_name: "Jessica",
          user_avt: o.default,
          story: {
            src: "/_next/static/media/story-slider-3.acdbcd6d.png",
            height: 217,
            width: 138,
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAATlBMVEVgQDB9ts11VEGJZlGpdVbm7vXc6/OlbE7H1d/4+vuKXEaWfnGIgILz9/pwXVL+/v7Gy9GAUTuScF2oh3Shmp7f6PCs0OFZSDuk0OJ7aWOKKzXvAAAACnRSTlP+8///6f7++v76qdHzHgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUCJkFwQcCgCAMALGjRUE2KsP/f9SEq57bkGs+Jn741khv+grx0bKIKiLcSnC4QLc/LogBuon3k0UAAAAASUVORK5CYII=",
            blurWidth: 5,
            blurHeight: 8,
          },
        },
        { id: 4, user_name: "Alen", user_avt: m.default, story: u },
        { id: 5, user_name: "Jacob Jones", user_avt: g.default, story: u },
      ];
      var b = {
        src: "/_next/static/media/story-slider-owner.16eba020.png",
        height: 217,
        width: 138,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAUVBMVEWu1P1MlLe50PDTyNDDxuHnv8V+zPwEm+4AlfOa0v38r1qo0//ix7/k1LYBjfEbsfQBp/LfsaXTzcDE1eDsx7r1sm7XrZ1XyvlCruPJ0+nepIDVPpKgAAAADnRSTlP9/v7+/v7++un+/vP+/l9vumYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVAiZBcELAoAQFADBlYTK86fc/6BmoIT6UO7eK+8YS/O33A4w+YTrU9OTko0RKyJuAzVJAhfJ4BF5AAAAAElFTkSuQmCC",
        blurWidth: 5,
        blurHeight: 8,
      };
      let x = (A) => {
          let { onClick: e } = A;
          return (0, a.jsx)("button", {
            onClick: e,
            type: "button",
            className: "arafat-prev cmn-btn pull-left slick-arrow",
            children: (0, a.jsx)("i", {
              className: "material-symbols-outlined mat-icon",
              "aria-hidden": "true",
              children: "chevron_left",
            }),
          });
        },
        v = (A) => {
          let { onClick: e } = A;
          return (0, a.jsx)("button", {
            onClick: e,
            type: "button",
            className: "arafat-next cmn-btn pull-right slick-arrow",
            children: (0, a.jsx)("i", {
              className: "material-symbols-outlined mat-icon",
              "aria-hidden": "true",
              children: "chevron_left",
            }),
          });
        },
        p = () => {
          let A = {
            infinite: !1,
            autoplay: !1,
            centerMode: !1,
            centerPadding: "0px 50px",
            focusOnSelect: !1,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: !0,
            prevArrow: (0, a.jsx)(x, {}),
            nextArrow: (0, a.jsx)(v, {}),
            dots: !1,
            dotsClass: "section-dots",
            responsive: [
              { breakpoint: 1400, settings: { slidesToShow: 4 } },
              { breakpoint: 992, settings: { slidesToShow: 5 } },
              { breakpoint: 768, settings: { slidesToShow: 4, arrows: !1 } },
              { breakpoint: 576, settings: { slidesToShow: 3, arrows: !1 } },
              { breakpoint: 480, settings: { slidesToShow: 2, arrows: !1 } },
            ],
          };
          return (0, a.jsxs)(n.Z, {
            ...A,
            className: "story-carousel",
            children: [
              (0, a.jsx)("div", {
                className: "single-item",
                children: (0, a.jsx)("div", {
                  className: "single-slide",
                  children: (0, a.jsxs)(r(), {
                    href: "URL:void()",
                    className: "position-relative d-center",
                    children: [
                      (0, a.jsx)(i(), {
                        className: "bg-img",
                        src: b,
                        alt: "icon",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "abs-area d-grid p-3 position-absolute bottom-0",
                        children: [
                          (0, a.jsx)("div", {
                            className: "icon-box m-auto d-center mb-3",
                            children: (0, a.jsx)("i", {
                              className:
                                "material-symbols-outlined text-center mat-icon",
                              children: "add",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className: "mdtxt",
                            children: "Add Story",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              h.map((A) =>
                (0, a.jsx)(
                  "div",
                  {
                    className: "single-item",
                    children: (0, a.jsx)("div", {
                      className: "single-slide",
                      children: (0, a.jsxs)("div", {
                        className: "position-relative d-flex",
                        children: [
                          (0, a.jsx)(i(), {
                            className: "bg-img",
                            src: A.story,
                            alt: "image",
                          }),
                          (0, a.jsxs)(r(), {
                            href: "/public-profile/post",
                            className:
                              "abs-area p-3 position-absolute bottom-0",
                            children: [
                              (0, a.jsx)(i(), {
                                src: A.user_avt,
                                alt: "image",
                              }),
                              (0, a.jsx)("span", {
                                className: "mdtxt",
                                children: A.user_name,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  },
                  A.id
                )
              ),
            ],
          });
        };
      var U = p;
    },
    69670: function (A, e, t) {
      "use strict";
      var a = t(9268);
      let s = (A) => {
        let { actionList: e } = A;
        return (0, a.jsxs)("div", {
          className: "btn-group cus-dropdown dropend",
          children: [
            (0, a.jsx)("button", {
              type: "button",
              className: "d-flex dropdown-btn px-2",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              children: (0, a.jsx)("i", {
                className: "material-symbols-outlined fs-xxl m-0",
                children: "more_horiz",
              }),
            }),
            (0, a.jsx)("ul", {
              className: "dropdown-menu p-4 pt-2",
              children:
                null == e
                  ? void 0
                  : e.map((A, e) => {
                      let [t, s] = A;
                      return (0, a.jsx)(
                        "li",
                        {
                          children: (0, a.jsxs)("button", {
                            className:
                              "droplist d-flex align-items-center gap-2",
                            children: [
                              (0, a.jsx)("i", {
                                className: "material-symbols-outlined mat-icon",
                                children: s,
                              }),
                              (0, a.jsx)("span", { children: t }),
                            ],
                          }),
                        },
                        e
                      );
                    }),
            }),
          ],
        });
      };
      e.Z = s;
    },
    87915: function (A, e, t) {
      "use strict";
      t.r(e);
      var a = t(9268),
        s = t(47743),
        i = t(20943),
        l = t(86006),
        r = t(19247);
      let n = () => {
        let [A, e] = (0, l.useState)(!1),
          t = (0, r.useMediaQuery)({ query: "(max-width: 575px)" });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("ul", {
              className: "like-share d-flex gap-6 mt-2",
              children: [
                (0, a.jsx)("li", {
                  className: "d-center",
                  children: (0, a.jsx)("button", {
                    className: "mdtxt",
                    children: "Like",
                  }),
                }),
                (0, a.jsx)("li", {
                  className: "d-center flex-column",
                  children: (0, a.jsx)("button", {
                    className: "mdtxt reply-btn",
                    onClick: () => e(!A),
                    children: "Reply",
                  }),
                }),
                (0, a.jsx)("li", {
                  className: "d-center",
                  children: (0, a.jsx)("button", {
                    className: "mdtxt",
                    children: "Share",
                  }),
                }),
              ],
            }),
            (0, a.jsx)("form", {
              action: "#",
              children: (0, a.jsx)(s.M, {
                initial: !1,
                children:
                  A &&
                  (0, a.jsxs)(
                    i.E.div,
                    {
                      className: "d-flex gap-3",
                      initial: "collapsed",
                      animate: "open",
                      exit: "collapsed",
                      variants: {
                        open: {
                          opacity: 1,
                          height: "auto",
                          marginTop: t ? 10 : 24,
                        },
                        collapsed: { opacity: 0, height: 0, marginTop: 0 },
                      },
                      transition: {
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      },
                      children: [
                        (0, a.jsx)("input", {
                          placeholder: "Write a comment..",
                          className: "py-3",
                          required: !0,
                        }),
                        (0, a.jsx)("button", {
                          className: "cmn-btn px-2 px-sm-5 px-lg-6",
                          children: (0, a.jsx)("i", {
                            className:
                              "material-symbols-outlined mat-icon m-0 fs-xxl",
                            children: "near_me",
                          }),
                        }),
                      ],
                    },
                    "content"
                  ),
              }),
            }),
          ],
        });
      };
      e.default = n;
    },
    27393: function (A, e, t) {
      "use strict";
      var a = t(6733),
        s = t(28546),
        i = t(51081),
        l = t(21524),
        r = t(82506),
        n = t(44062),
        c = t(43806),
        d = t(41679),
        o = t(35077);
      let m = [
        { id: 1, name: "Piter Maio", avt: s.default },
        { id: 2, name: "Floyd Miles", avt: a.default },
        { id: 3, name: "Darrell Steward", avt: i.default },
        { id: 4, name: "Kristin Watson", avt: l.default },
        { id: 5, name: "Jane Cooper", avt: r.default },
        { id: 6, name: "Devon Lane", avt: n.default },
        { id: 7, name: "Annette Black", avt: c.default },
        { id: 8, name: "Jerome Bell", avt: d.default },
        { id: 9, name: "Guy Hawkins", avt: o.default },
      ];
      e.Z = m;
    },
    64753: function (A, e, t) {
      "use strict";
      t.d(e, {
        Sk: function () {
          return i;
        },
        Tc: function () {
          return a;
        },
        qJ: function () {
          return s;
        },
      });
      let a = [
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
    52923: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/add-post-avatar.ac465b56.png",
          height: 50,
          width: 50,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEWm1P+q0//Kzt2n0/+s0//itabCy+YHqunb3/ap0v3+tmW61ewWvvMamtPxv7IhodIiu+0QxPSk0//msouu0vb3xIjenGr2vHat0/6z0fTVy9nowbDb1cPUpI7Bpa4gu/V8zfqtp7WC0fo7zPns0Mn062CrAAAAGHRSTlP+if66o/7+/Abz/vqW/v7+7Xz1/hv+/f0B7p6gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVQImQXBhQGAMBAEsKsbrl/D95+RBIsIpQRpIeLu/RoZwOdaNz4B+ssqa4CQOpVAcBSPG+Qgr7Pt34fBNsaYYbQ/h8MD1PU3pzkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    6733: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/avatar-1.892b29c8.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEXvrEfyw8T+z9DeXxr0ehbxpkD4qzr7xsP/ZAX3oTr9XgPwsrQJAQDwrUbwr0b5fkTzXAYuDQBSS1X/XgH+VQD2lmH/sULsrm/8di3fqap/LQH7aAz8Zgvukkilg4WyRQmKbW10YWbTTgKUy2iKAAAAE3RSTlP+/v79/e/+/u/vU/7+U1P+7v79R5+RtwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUCJkFwYUBgDAQBLCrUUW/jrP/kCRw5l5DXxzMF95r6wYkHs2bIFDV3rdKoDhrliLhkImzU+6wQCmAxaTyMGQ1/pK6A7FspWlUAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    28546: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/avatar-2.2afbed29.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEX5wsD9ycP10dfjq9z5/v378fPvzuO0d/7WnuDxt7a0evnXpNLpq7rrucu2ef306+yydf+3evz////Jjun+zsPruLzv5ubAhfPq2Nj/4dnm1Nb95uHirKUv1AfRAAAAFHRSTlP+71P+/e/97/7+U/7+/VP3/////mYZ6rUAAAAJcEhZcwAACxMAAAsTAQCanBgAAABDSURBVAiZBcGFEcAwDASwD9VJ6d4OlfafsxJW0RCmnBDm1g4VUHvpXyVUN5R9EmRtyCTqcgHPkuHuOEZ8HXwyM0v+B3irA0VZyEE5AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    51081: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/avatar-3.3c4eae60.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVDN3otLHJSRIHKt8L95txiSIVlWIz+xMNnUoj/y8eigZ7t2db139jowcT/7+EuJ3Hqtr2OcJj/9+ZlWY1tWYv+6N7zwMHKn7DizM+qmbEsJnHcqrb1qbqwiqXlsro1LnX13th8ZJGp2CJcAAAAFXRSTlP+U/337+/v/v7+/v5T/e7+/v5T/v3wUOTgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVQImQXBBQLAIAwEsMNhxqxFZ///5BLsCvHIesJS5Af5atDc3PZkAnFaeciEMbnAvhAKrpYqFGz1N5/VQpgeXDfiB4+DA/d3NgjEAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    21524: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/avatar-4.a9bab38f.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVWu0P9skX8dA/+WgX7yczsuLdSs0H9tUfzrj31wsKhtEP8lS3irbH/vJ//vpg7t0M8uEP/sET8hCD8jyj3tmVfs0P9dzTxnH76gEL9biPMsleFsWhzq1rXtmSSjpi8AAAAEXRSTlP+U/79/v707/n+7/3+/v5TU7WqCPsAAAAJcEhZcwAACxMAAAsTAQCanBgAAABCSURBVAiZBcGHAYAgEASwoz5gwXvA7v5rmsCIWqtiIM1du2sCTmf2hxLsOYS5E+Sa/UKC6fPhTkQZeF6Mgi0CEbH+bb4DCsiF7y0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    82506: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/avatar-5.b9c0cae5.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEWz0/+5x+rcdmHrkXvMnJ7+VAD/jEj6mny00fu1n725iJvQt8X/sZvGqKrmTAD0qJPxeDaPmJ7lUgDkhVay1P/ninW0zfeu2//Fw8/eq6OzsLDxSQD+omnBxeDZY1XhbFvUenPpuKcvDVReAAAAHXRSTlPv/f7+/VP+/lP+/f7+/e/+7v7v7////////////tUeK8oAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFSURBVAiZBcEHAoAgEAOwqsCBe5Qh4Pr/J01gQecCLMD+fhQBhteLbwhe4rs2EYyDyBkJqm9czingKDVlU1bo3eStzvoHh1oECm1nLEIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    44062: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/avatar-6.5d5858dd.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX6m3+4t9e7hphhUWAAAAD2j3W13/+y1v8LCAwTFRd6aXw5PkzcXlPogGrOc3Cy0Pq7WWG7nLSzz/kBAAKx2P/jhXCzx/CVTUXxfWbGsMbCjZ3OVUxqSUNrS0SZud97aBemAAAAE3RSTlP+/v79U/7+7+/9/e/+/v1T/f1TbjUgagAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUCJkVxkkSgCAMBMABwQQ31IRN1P8/07JPjZOytYYiKO+9bpmgR09IRqGX92ltfxagthE6FaAML2YJzx2E4VhEhN0HgiADomvCyCsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    43806: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/avatar-7.01ecf59c.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX34Nr808XFv+D/59qrTFjDU6npXEf449/QVEz649pPV6z/7OD//uqvYHunlq3BYm3VbGfMZm1SS4z649o2LXP+6t6wmrDic6+9VVjrz9m5donboKloUZXrgnKkU2SkgJvb0N/xEQOHAAAAE3RSTlPv/f7v/v7+/f5T/u5T/u/+/v7+1GQKhAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUCJkdxlcSgCAMBcBHkQB2kyB2739KZ9yvRTfIkq1LaIuI5NeBaff+tAre+jg2K4N5ivMfukI4iAE1dzUKJJQaH6QPggQDkEgVo14AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    41679: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/avatar-8.3218efd9.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX65NvdmpHmsK75vMW2XFuiVV2Wbp345N37ssLrmbDyp7nPg5iOUm/xnrXqyMP/6t+Kj9rCg4j649z86OD539bCXlb62tbGbGXhjqPymrPzpbnRe3e5Y2Sla4TNq7mRn+qta3T7y6owAAAAEnRSTlPv/v7u/v7+U/b9U/7+7/3v/f1dz5ioAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVQImQXBhQGAMAADsAJTnM4F+f9KEujjUeqFBniFfhKg/2S/dwf6JELzBN0QxOgIsq4ymwhEm5otE7QpS67b/AOOkQP2U3BdPQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    35077: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/avatar-9.976a04e2.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX859343tn14duJeZ7tkoZdS4KrmbHdhYD9loH54tq2bnnFtcL239noc6TDdqtQRH+IiqX/no765Nz/6+D84NUhHm+8eIbx29aYY3zri344MXjs19X8vrDuuMzqxcHkuLyri6GEdJnmZqBHIwtoAAAAF3RSTlPvU1P9/v7+/v7v/v1T/u/uU/7//////nugjAAAAAAJcEhZcwAACxMAAAsTAQCanBgAAABHSURBVAiZFcZHEoAgEATAUQmL2SWD+f+PtOxTo0VUqmKEsZ33MgLsQpJlsGCnde7PP0KTuCuYd6LkHxi2Vw5lQYNj2t55/QCDUwQCAt4SZQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    7833: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/emoji-laughing.00032a8a.png",
          height: 30,
          width: 30,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX+twD+twD9twBMaXH9twD+twD9twD9twD9tgD9tgAasrO1AAAACXRSTlN/NokATCMFbuh+sjluAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVQImRXGxxHAMAwEsb1ASuq/YY/xApHBCnKStfDOaNaQjhRg2/aP3nt3QNQMIuIclA8Y4gC4tohGIgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    68354: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/live-video.23da85e8.png",
          height: 30,
          width: 30,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXH/QkL/PT3/aWn/YWH/7u7/MzP/R0f/+/v/ZWX/cnL/Ojr/YWH/4+P/ycn+7u7/i4v+oKD/xcX+ysr/dHT/tbX/wMD/+/v/xcX/q6v/Pz//3t7/r6//nZ3/v7//q6v/l5fLeemsAAAAG3RSTlMAcUFMB/sTK/qWw4KFm8voz2CO567ps1J4fQxWHhRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVQImR3LSRKAIAwEwAGCCW64LxUQ//9KLW59aZzLsc4AsOeSJkOETUWHzjGC+mc0TYWPoUJEWsuwbyq5BwHX7fjvH3vIAyjb1yAxAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    70874: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/vgallery.688a819b.png",
          height: 30,
          width: 30,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVAnCvD+7id8Ipo4Et/52glywAoywBL1yglywIrzQMoywASxQAiygDQ/8jF/Lq3+KrY/9Ks9Z1z41l/52dq4E6U7YFf3EBx4le9+rGp9JnG/bxu4VOM63Y4NN23AAAAGHRSTlMBVPz6/HKGkkx5YWkPJqaQyPOO4rTprndxMdFaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVQImQXBBwKAIAwAsUMKLe5tQf//ThPCfh6aDK6v1oVi3B7fGRLqXbeOfUKb+5ZLRkVEJgoWm3sYDB5VLcYPbIACyXFa6rkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    54527: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/post-img-1.06e643a2.png",
          height: 350,
          width: 596,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEWugmjDtqyVztrGk3Wxl4dowNONt7+4oI+hdl5SssdfuMuDxdO209mu1t+90dJpvM6pnZTFs6ZgXFe8WRw7AAAACnRSTlP+/v///v7+/v793yAbFQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUCJkFwQECwBAMBMF1oUhCy/8f2xk84m3uE0l6pCAzt+21qN/t1svBbMCAHxz8ASuiZ+CVAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    93999: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/post-img-2.7cb6139c.png",
          height: 350,
          width: 290,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAV1BMVEU1QTnGsqlSd4lqlKqOtMrEyMza1dPXtKM8U16CrsdbgZW7r62ak42DioyRgXI9Skno5eTh4uSiu8rt08Z7nbBMZ3RrgYipmI3G09w8a4KAhYaRhn+JkJAAePu/AAAAD3RSTlP6/v7+/v7+/v7+/v7+2P6gD2MYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVQImRXFRxLAIAwAsU2FVGPT0v7/zgy6iEtVQwgs1p6xcYoxGkOyzm2J2+d+zYKXBkr5at0fEE73Hj9n8QM2wZvakQAAAABJRU5ErkJggg==",
          blurWidth: 7,
          blurHeight: 8,
        });
    },
    4806: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/post-img-3.3dd3ce2a.png",
          height: 167,
          width: 290,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEVYnLwdS2O009/I3uc6eps0aoQ7SV8vVW5inbkfMUJppsMnXnd2scsRP1WVwNIKKTiEutMbWnU+hqdsBjyBAAAACnRSTlP+/v///v7+/v7+RilKrwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUCJkFwQECABAIBLBTKKXC/x9rAycx0wbOIcptAFTN9HXUWk1qClzcx434GkcBT87I7bIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    16418: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/post-img-4.0b5bcbf7.png",
          height: 167,
          width: 290,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAIVBMVEUAk6ZVtL4KnKovo6yHusKPvcMAnrAWqbklkqFeqrVnoazcCpxsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVQImTXBxxEAIAwDMOOSBPYfmOOBBHxkEcWC1DNSY5+9HiRObF8JoACKdP0dVgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
  },
  function (A) {
    A.O(0, [2011, 414, 9906, 1975, 2667, 8139, 1744], function () {
      return A((A.s = 37410));
    }),
      (_N_E = A.O());
  },
]);
