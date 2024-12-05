(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    3486: function (e, a, s) {
      Promise.resolve().then(s.bind(s, 97445));
    },
    97445: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return M;
          },
        });
      var l = s(9268),
        i = s(86006),
        t = s(21082),
        n = s(76394),
        c = s.n(n),
        r = s(35846),
        d = s.n(r);
      let m = (e) => {
        let { activeHandler: a } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: "messages-btn cmn-head",
              children: (0, l.jsxs)("div", {
                className: "icon-area d-center position-relative",
                onClick: () => a("message"),
                children: [
                  (0, l.jsx)("i", {
                    className: "material-symbols-outlined mat-icon",
                    children: "mail",
                  }),
                  (0, l.jsx)("span", {
                    className: "abs-area position-absolute d-center mdtxt",
                    children: "4",
                  }),
                ],
              }),
            }),
            (0, l.jsxs)("div", {
              className: "main-area p-5 messages-content",
              children: [
                (0, l.jsx)("h5", { className: "mb-8", children: "Messages" }),
                t.Z.map((e) => {
                  let {
                    clss: a,
                    id: s,
                    last_message: i,
                    number_of_message: t,
                    user_avt: n,
                    user_name: r,
                  } = e;
                  return (0, l.jsx)(
                    "div",
                    {
                      className: "single-box p-0 mb-7",
                      children: (0, l.jsxs)(d(), {
                        href: "/profile/chat",
                        className: "d-flex gap-2 align-items-center",
                        children: [
                          (0, l.jsx)("div", {
                            className: "avatar",
                            children: (0, l.jsx)(c(), {
                              className: "avatar-img max-un",
                              src: n,
                              alt: "avatar",
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "text-area",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "title-area position-relative d-inline-flex align-items-center",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "m-0 d-inline-flex",
                                    children: r,
                                  }),
                                  t &&
                                    (0, l.jsx)("span", {
                                      className:
                                        "abs-area position-absolute d-center mdtxt",
                                      children: t,
                                    }),
                                ],
                              }),
                              (0, l.jsx)("p", {
                                className: "mdtxt ".concat(a),
                                children: i,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    s
                  );
                }),
                (0, l.jsx)("div", {
                  className: "btn-area",
                  children: (0, l.jsx)(d(), {
                    href: "/profile/chat",
                    children: "See all inbox",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var o = s(6733),
        A = s(28546),
        x = s(51081),
        h = s(21524),
        u = {
          src: "/_next/static/media/emoji-love.99cd9f34.png",
          height: 20,
          width: 20,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXxymLloFTHHid9Tk7ORzTxzW3twVrwyFz01HFMaXHRmVO1nlfyz2fruFjuwlvuw1v003TNuV3NuF310mbxsl/xwlzVYj7XaEd9Ag2CAAAAE3RSTlMn/v7+/LS08/QA/vfvse6utv7+v7nBtAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUCJkFwYkBwCAIALFTUUD7o+3+mzbBucwqDhYRsUH9JCV5d0zynFkUW/25+1JqjFJGNNCYcx3gNNUT/wFYDQJ7ileVbgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        j = {
          src: "/_next/static/media/speech-bubble.7c25cab7.png",
          height: 20,
          width: 20,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX/yjH5uir3tyf71nL/1lH5tiD+1FD9xjRMaXH+11/t1qv/zjv2tCX0rBn+3GP5uif90U//xyr52H/w1JTxznjZ/lzAAAAAEXRSTlP9/qH+8f79/gD+/v1Vadbfl3dk1yoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVAiZHcEJFoAgCEDBr4KCSwt2/7P2aobD3WsdJ3J/SIhHKeGKRN+7P4oAtJGo7afMlZPmNTGzK5vZC1OFAiJJyXYtAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        };
      let g = (e) => {
        let { activeHandler: a } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: "notification-btn cmn-head position-relative",
              children: (0, l.jsxs)("div", {
                className: "icon-area d-center position-relative",
                onClick: () => a("notification"),
                children: [
                  (0, l.jsx)("i", {
                    className: "material-symbols-outlined mat-icon",
                    children: "notifications",
                  }),
                  (0, l.jsx)("span", {
                    className: "abs-area position-absolute d-center mdtxt",
                    children: "3",
                  }),
                ],
              }),
            }),
            (0, l.jsxs)("div", {
              className: "main-area p-5 notification-content",
              children: [
                (0, l.jsx)("h5", {
                  className: "mb-8",
                  children: "Notification",
                }),
                (0, l.jsx)("div", {
                  className: "single-box p-0 mb-7",
                  children: (0, l.jsxs)(d(), {
                    href: "/profile/notification",
                    className:
                      "d-flex justify-content-between align-items-center",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "left-item position-relative d-inline-flex gap-3",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "avatar position-relative d-inline-flex",
                            children: [
                              (0, l.jsx)(c(), {
                                className: "avatar-img max-un",
                                src: o.default,
                                alt: "avatar",
                              }),
                              (0, l.jsx)(c(), {
                                className: "abs-item position-absolute max-un",
                                src: j,
                                alt: "icon",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "text-area",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "m-0 mb-1",
                                children: "Piter Maio",
                              }),
                              (0, l.jsx)("p", {
                                className: "mdtxt",
                                children: "Comment on your post",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "time-remaining",
                        children: (0, l.jsx)("p", {
                          className: "mdtxt",
                          children: "Just now",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "single-box p-0 mb-7",
                  children: (0, l.jsxs)(d(), {
                    href: "/profile/notification",
                    className:
                      "d-flex justify-content-between align-items-center",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "left-item position-relative d-inline-flex gap-3",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "avatar position-relative d-inline-flex",
                            children: [
                              (0, l.jsx)(c(), {
                                className: "avatar-img max-un",
                                src: A.default,
                                alt: "avatar",
                              }),
                              (0, l.jsx)(c(), {
                                className: "abs-item position-absolute max-un",
                                src: u,
                                alt: "icon",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "text-area",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "m-0 mb-1",
                                children: "Kathryn Murphy",
                              }),
                              (0, l.jsx)("p", {
                                className: "mdtxt",
                                children: "Like your photo",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "time-remaining",
                        children: (0, l.jsx)("p", {
                          className: "mdtxt",
                          children: "2min",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "single-box p-0 mb-7",
                  children: [
                    (0, l.jsxs)(d(), {
                      href: "/profile/notification",
                      className:
                        "d-flex justify-content-between align-items-center",
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "left-item position-relative d-inline-flex gap-3",
                          children: [
                            (0, l.jsxs)("div", {
                              className:
                                "avatar position-relative d-inline-flex",
                              children: [
                                (0, l.jsx)(c(), {
                                  className: "avatar-img max-un",
                                  src: x.default,
                                  alt: "avatar",
                                }),
                                (0, l.jsx)(c(), {
                                  className:
                                    "abs-item position-absolute max-un",
                                  src: u,
                                  alt: "icon",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "text-area",
                              children: [
                                (0, l.jsx)("h6", {
                                  className: "m-0 mb-1",
                                  children: "Jacob Jones",
                                }),
                                (0, l.jsx)("p", {
                                  className: "mdtxt",
                                  children: "Sent you a request",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className: "time-remaining",
                          children: (0, l.jsx)("p", {
                            className: "mdtxt",
                            children: "1hr",
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "d-flex gap-3 mt-4",
                      children: [
                        (0, l.jsx)("button", {
                          className: "cmn-btn",
                          children: "Accept",
                        }),
                        (0, l.jsx)("button", {
                          className: "cmn-btn alt",
                          children: "Delete",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "single-box p-0 mb-7",
                  children: (0, l.jsxs)(d(), {
                    href: "/profile/notification",
                    className:
                      "d-flex justify-content-between align-items-center",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "left-item position-relative d-inline-flex gap-3",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "avatar position-relative d-inline-flex",
                            children: [
                              (0, l.jsx)(c(), {
                                className: "avatar-img max-un",
                                src: h.default,
                                alt: "avatar",
                              }),
                              (0, l.jsx)(c(), {
                                className: "abs-item position-absolute max-un",
                                src: u,
                                alt: "icon",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "text-area",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "m-0 mb-1",
                                children: "Kathryn Murphy",
                              }),
                              (0, l.jsx)("p", {
                                className: "mdtxt",
                                children: "officia consequat duis enim...",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "time-remaining",
                        children: (0, l.jsx)("p", {
                          className: "mdtxt",
                          children: "2hr",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "btn-area",
                  children: (0, l.jsx)(d(), {
                    href: "/profile/notification",
                    children: "See all notification",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var v = s(68709);
      let b = (e) => {
          let { activeHandler: a } = e,
            [s, t] = (0, i.useState)(!1),
            { theme: n, setTheme: r } = (0, v.F)(),
            m = () => {
              r("dark" === n || "system" === n ? "light" : "dark");
            };
          return ((0, i.useEffect)(() => t(!0), []), s)
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("div", {
                    className: "profile-pic d-flex align-items-center",
                    children: (0, l.jsx)("span", {
                      className: "avatar cmn-head active-status",
                      onClick: () => a("settings"),
                      children: (0, l.jsx)(c(), {
                        className: "avatar-img max-un",
                        src: o.default,
                        alt: "avatar",
                      }),
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: "main-area p-5 profile-content",
                    children: [
                      (0, l.jsx)("div", {
                        className: "head-area",
                        children: (0, l.jsxs)("div", {
                          className: "d-flex gap-3 align-items-center",
                          children: [
                            (0, l.jsx)("div", {
                              className: "avatar-item",
                              children: (0, l.jsx)(c(), {
                                className: "avatar-img max-un",
                                src: o.default,
                                alt: "avatar",
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "text-area",
                              children: [
                                (0, l.jsx)("h6", {
                                  className: "m-0 mb-1",
                                  children: "Lori Ferguson",
                                }),
                                (0, l.jsx)("p", {
                                  className: "mdtxt",
                                  children: "Web Developer",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "view-profile my-2",
                        children: (0, l.jsx)(d(), {
                          href: "/profile/post",
                          className: "mdtxt w-100 text-center py-2",
                          children: "View profile",
                        }),
                      }),
                      (0, l.jsxs)("ul", {
                        children: [
                          (0, l.jsx)("li", {
                            children: (0, l.jsxs)(d(), {
                              href: "/profile/edit",
                              className: "mdtxt",
                              children: [
                                (0, l.jsx)("i", {
                                  className:
                                    "material-symbols-outlined mat-icon",
                                  children: " settings ",
                                }),
                                "Settings & Privacy",
                              ],
                            }),
                          }),
                          (0, l.jsx)("li", {
                            children: (0, l.jsxs)(d(), {
                              href: "/#",
                              className: "mdtxt",
                              children: [
                                (0, l.jsx)("i", {
                                  className:
                                    "material-symbols-outlined mat-icon",
                                  children: "power_settings_new",
                                }),
                                "Sign Out",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "switch-wrapper mt-4 d-flex gap-1 align-items-center",
                        children: [
                          (0, l.jsx)("i", {
                            className:
                              "mat-icon material-symbols-outlined sun icon ".concat(
                                "light" === n && "active"
                              ),
                            children: "light_mode",
                          }),
                          (0, l.jsxs)("label", {
                            className: "switch",
                            children: [
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                className: "checkbox",
                                onClick: m,
                              }),
                              (0, l.jsx)("span", {
                                className: "slider ".concat(
                                  "dark" === n ? " slider-active" : ""
                                ),
                              }),
                            ],
                          }),
                          (0, l.jsx)("i", {
                            className:
                              "mat-icon material-symbols-outlined moon icon ".concat(
                                "dark" === n && "active"
                              ),
                            children: "dark_mode",
                          }),
                          (0, l.jsx)("span", {
                            className: "mdtxt ms-2",
                            children: "Dark mode",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : null;
        },
        p = () => {
          let [e, a] = (0, i.useState)(""),
            s = (s) => {
              s === e ? a("") : a(s);
            };
          return (0, l.jsx)("div", {
            className:
              "header-menu py-3 header-menu d-block d-lg-none position-fixed bottom-0 w-100 cus-z",
            children: (0, l.jsxs)("div", {
              className:
                "right-area position-relative d-flex justify-content-around gap-3 gap-xxl-6 align-items-center",
              children: [
                (0, l.jsx)("div", {
                  className: "single-item messages-area ".concat(
                    "message" === e ? "active" : ""
                  ),
                  children: (0, l.jsx)(m, { activeHandler: s }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "single-item messages-area notification-area ".concat(
                      "notification" === e ? "active" : ""
                    ),
                  children: (0, l.jsx)(g, { activeHandler: s }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "single-item profile-area position-relative ".concat(
                      "settings" === e ? "active" : ""
                    ),
                  children: (0, l.jsx)(b, { activeHandler: s }),
                }),
              ],
            }),
          });
        };
      var f = s(12480),
        N = s(52923);
      let w = [
          { id: 1, name: "Public" },
          { id: 2, name: "Only Me" },
          { id: 3, name: "Friends" },
          { id: 4, name: "Custom" },
        ],
        y = () =>
          (0, l.jsx)("div", {
            className: "go-live-popup",
            children: (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsx)("div", {
                className: "row",
                children: (0, l.jsx)("div", {
                  className: "col-lg-8",
                  children: (0, l.jsx)("div", {
                    className: "modal cmn-modal fade",
                    id: "activityMod",
                    children: (0, l.jsx)("div", {
                      className: "modal-dialog modal-dialog-centered",
                      children: (0, l.jsxs)("div", {
                        className: "modal-content p-5",
                        children: [
                          (0, l.jsx)("div", {
                            className: "modal-header justify-content-center",
                            children: (0, l.jsx)("button", {
                              type: "button",
                              className: "btn-close",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close",
                              children: (0, l.jsx)("i", {
                                className:
                                  "material-symbols-outlined mat-icon xxltxt",
                                children: "close",
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "top-content pb-5",
                            children: (0, l.jsx)("h5", {
                              children: "Create post",
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "mid-area",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "d-flex mb-5 gap-3",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "profile-box",
                                    children: (0, l.jsx)(d(), {
                                      href: "#",
                                      children: (0, l.jsx)(c(), {
                                        src: N.default,
                                        className: "max-un",
                                        alt: "icon",
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)("textarea", {
                                    cols: 10,
                                    rows: 2,
                                    placeholder: "Write something to Lerio..",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "file-upload",
                                children: [
                                  (0, l.jsx)("label", {
                                    children: "Upload attachment",
                                  }),
                                  (0, l.jsxs)("label", {
                                    className: "file mt-1",
                                    children: [
                                      (0, l.jsx)("input", { type: "file" }),
                                      (0, l.jsxs)("span", {
                                        className:
                                          "file-custom pt-8 pb-8 d-grid text-center",
                                        children: [
                                          (0, l.jsx)("i", {
                                            className:
                                              "material-symbols-outlined mat-icon",
                                            children: "perm_media",
                                          }),
                                          (0, l.jsx)("span", {
                                            children:
                                              "Drag here or click to upload photo.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "tooltips-area d-flex mt-3 gap-2",
                                children: [
                                  (0, l.jsx)("button", {
                                    type: "button",
                                    className: "btn d-center",
                                    "data-bs-toggle": "tooltip",
                                    "data-bs-placement": "top",
                                    title: "Fallings/Activity",
                                    children: (0, l.jsx)("i", {
                                      className:
                                        "material-symbols-outlined mat-icon",
                                      children: "mood",
                                    }),
                                  }),
                                  (0, l.jsx)("button", {
                                    type: "button",
                                    className: "btn d-center",
                                    "data-bs-toggle": "tooltip",
                                    "data-bs-placement": "top",
                                    title: "Video",
                                    children: (0, l.jsx)("i", {
                                      className:
                                        "material-symbols-outlined mat-icon",
                                      children: "movie",
                                    }),
                                  }),
                                  (0, l.jsx)("button", {
                                    type: "button",
                                    className: "btn d-center",
                                    "data-bs-toggle": "tooltip",
                                    "data-bs-placement": "top",
                                    title: "Maps",
                                    children: (0, l.jsx)("i", {
                                      className:
                                        "material-symbols-outlined mat-icon",
                                      children: "location_on",
                                    }),
                                  }),
                                  (0, l.jsx)("button", {
                                    type: "button",
                                    className: "btn d-center",
                                    "data-bs-toggle": "tooltip",
                                    "data-bs-placement": "top",
                                    title: "Tag",
                                    children: (0, l.jsx)("i", {
                                      className:
                                        "material-symbols-outlined mat-icon",
                                      children: "sell",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "footer-area d-flex justify-content-between pt-5",
                            children: [
                              (0, l.jsx)("div", {
                                className: "left-area",
                                children: (0, l.jsx)(f.default, { data: w }),
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "btn-area d-flex justify-content-end gap-2",
                                children: [
                                  (0, l.jsx)("button", {
                                    type: "button",
                                    className: "cmn-btn alt",
                                    "data-bs-dismiss": "modal",
                                    "aria-label": "Close",
                                    children: "Cancel",
                                  }),
                                  (0, l.jsx)("button", {
                                    className: "cmn-btn",
                                    children: "Post",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        E = () =>
          (0, l.jsx)("div", {
            className: "go-live-popup",
            children: (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsx)("div", {
                className: "row",
                children: (0, l.jsx)("div", {
                  className: "col-lg-8",
                  children: (0, l.jsx)("div", {
                    className: "modal cmn-modal fade",
                    id: "goLiveMod",
                    children: (0, l.jsx)("div", {
                      className: "modal-dialog modal-dialog-centered",
                      children: (0, l.jsxs)("div", {
                        className: "modal-content p-5",
                        children: [
                          (0, l.jsx)("div", {
                            className: "modal-header justify-content-center",
                            children: (0, l.jsx)("button", {
                              type: "button",
                              className: "btn-close",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close",
                              children: (0, l.jsx)("i", {
                                className:
                                  "material-symbols-outlined mat-icon xxltxt",
                                children: "close",
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "top-content pb-5",
                            children: (0, l.jsx)("h5", { children: "Go Live" }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "mid-area",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "d-flex mb-5 gap-3",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "profile-box",
                                    children: (0, l.jsx)(d(), {
                                      href: "#",
                                      children: (0, l.jsx)(c(), {
                                        src: N.default,
                                        className: "max-un",
                                        alt: "icon",
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)("textarea", {
                                    cols: 10,
                                    rows: 2,
                                    placeholder: "Write something to Lerio..",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "file-upload",
                                children: [
                                  (0, l.jsx)("label", {
                                    children: "Upload attachment",
                                  }),
                                  (0, l.jsxs)("label", {
                                    className: "file mt-1",
                                    children: [
                                      (0, l.jsx)("input", { type: "file" }),
                                      (0, l.jsxs)("span", {
                                        className:
                                          "file-custom pt-8 pb-8 d-grid text-center",
                                        children: [
                                          (0, l.jsx)("i", {
                                            className:
                                              "material-symbols-outlined mat-icon",
                                            children: "perm_media",
                                          }),
                                          (0, l.jsx)("span", {
                                            children:
                                              "Drag here or click to upload photo.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "footer-area pt-5",
                            children: (0, l.jsxs)("div", {
                              className:
                                "btn-area d-flex justify-content-end gap-2",
                              children: [
                                (0, l.jsx)("button", {
                                  type: "button",
                                  className: "cmn-btn alt",
                                  "data-bs-dismiss": "modal",
                                  "aria-label": "Close",
                                  children: "Cancel",
                                }),
                                (0, l.jsx)("button", {
                                  className: "cmn-btn",
                                  children: "Go Live",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        U = () =>
          (0, l.jsx)("div", {
            className: "go-live-popup video-popup",
            children: (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsx)("div", {
                className: "row",
                children: (0, l.jsx)("div", {
                  className: "col-lg-8",
                  children: (0, l.jsx)("div", {
                    className: "modal cmn-modal fade",
                    id: "photoVideoMod",
                    children: (0, l.jsx)("div", {
                      className: "modal-dialog modal-dialog-centered",
                      children: (0, l.jsxs)("div", {
                        className: "modal-content p-5",
                        children: [
                          (0, l.jsx)("div", {
                            className: "modal-header justify-content-center",
                            children: (0, l.jsx)("button", {
                              type: "button",
                              className: "btn-close",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close",
                              children: (0, l.jsx)("i", {
                                className:
                                  "material-symbols-outlined mat-icon xxltxt",
                                children: "close",
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "top-content pb-5",
                            children: (0, l.jsx)("h5", {
                              children: "Add post photo/video",
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "mid-area",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "d-flex mb-5 gap-3",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "profile-box",
                                    children: (0, l.jsx)(d(), {
                                      href: "#",
                                      children: (0, l.jsx)(c(), {
                                        src: N.default,
                                        className: "max-un",
                                        alt: "icon",
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)("textarea", {
                                    cols: 10,
                                    rows: 2,
                                    placeholder: "Write something to Lerio..",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "file-upload",
                                children: [
                                  (0, l.jsx)("label", {
                                    children: "Upload attachment",
                                  }),
                                  (0, l.jsxs)("label", {
                                    className: "file mt-1",
                                    children: [
                                      (0, l.jsx)("input", { type: "file" }),
                                      (0, l.jsxs)("span", {
                                        className:
                                          "file-custom pt-8 pb-8 d-grid text-center",
                                        children: [
                                          (0, l.jsx)("i", {
                                            className:
                                              "material-symbols-outlined mat-icon",
                                            children: "perm_media",
                                          }),
                                          (0, l.jsx)("span", {
                                            children:
                                              "Drag here or click to upload photo.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "footer-area pt-5",
                            children: (0, l.jsxs)("div", {
                              className:
                                "btn-area d-flex justify-content-end gap-2",
                              children: [
                                (0, l.jsx)("button", {
                                  type: "button",
                                  className: "cmn-btn alt",
                                  "data-bs-dismiss": "modal",
                                  "aria-label": "Close",
                                  children: "Cancel",
                                }),
                                (0, l.jsx)("button", {
                                  className: "cmn-btn",
                                  children: "Post",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        C = () =>
          (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(E, {}), (0, l.jsx)(U, {}), (0, l.jsx)(y, {})],
          });
      var S = {
        src: "/_next/static/media/logo.d10e809f.png",
        height: 60,
        width: 60,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUAhf8Agf/o9P8AhP8Ahf////9dsf6w2f9Wrv4Bhv8Aff9RrP+Awv9Nqv+n1f+d0P+PH6GWAAAACXRSTlPw/v5RUP79/v7PbJlhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVQImRXGQRKAIAwEwUkAdTdB//9biz41E9lmgmJ/FSDXyg4h39nbJ0/nexKdqyyI660QDGyL8QNAGQHBRLC3QwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
      let B = (e) => {
          let { clss: a = "container" } = e,
            [s, t] = (0, i.useState)(0),
            [n, r] = (0, i.useState)(""),
            [o, A] = (0, i.useState)(!1),
            x = () => {
              void 0 !== window && t(window.scrollY);
            },
            h = (e) => {
              e === n ? r("") : r(e);
            };
          return (
            (0, i.useEffect)(
              () => (
                window.addEventListener("scroll", x),
                () => {
                  window.removeEventListener("scroll", x);
                }
              ),
              []
            ),
            (0, l.jsx)("header", {
              className: "header-section header-menu ".concat(
                s > 50 && "animated fadeInDown header-fixed"
              ),
              children: (0, l.jsx)("nav", {
                className: "navbar navbar-expand-lg p-0",
                children: (0, l.jsx)("div", {
                  className: a,
                  children: (0, l.jsxs)("nav", {
                    className:
                      "navbar w-100 navbar-expand-lg justify-content-betweenm",
                    children: [
                      (0, l.jsx)(d(), {
                        href: "/",
                        className: "navbar-brand",
                        children: (0, l.jsx)(c(), {
                          src: S,
                          className: "logo",
                          alt: "logo",
                        }),
                      }),
                      (0, l.jsx)("button", {
                        className: "button search-active d-block d-md-none",
                        onClick: () => A(!o),
                        children: (0, l.jsx)("i", {
                          className:
                            "d-center material-symbols-outlined fs-xxl mat-icon",
                          children: "search",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "search-form ".concat(o && "active"),
                        children: (0, l.jsxs)("form", {
                          action: "#",
                          className: "input-area d-flex align-items-center",
                          children: [
                            (0, l.jsx)("i", {
                              className: "material-symbols-outlined mat-icon",
                              children: "search",
                            }),
                            (0, l.jsx)("input", {
                              type: "text",
                              placeholder: "Search Circlehubtio",
                              autoComplete: "off",
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsxs)("ul", {
                        className:
                          "navbar-nav feed flex-row gap-xl-20 gap-lg-10 gap-sm-7 gap-3 py-4 py-lg-0 m-lg-auto ms-auto ms-aut align-self-center",
                        children: [
                          (0, l.jsx)("li", {
                            children: (0, l.jsx)(d(), {
                              href: "/index-two",
                              className: "nav-icon home active",
                              children: (0, l.jsx)("i", {
                                className:
                                  "mat-icon fs-xxl material-symbols-outlined mat-icon",
                                children: "home",
                              }),
                            }),
                          }),
                          (0, l.jsx)("li", {
                            children: (0, l.jsx)(d(), {
                              href: "/#news-feed",
                              className: "nav-icon feed",
                              children: (0, l.jsx)("i", {
                                className:
                                  "mat-icon fs-xxl material-symbols-outlined mat-icon",
                                children: "feed",
                              }),
                            }),
                          }),
                          (0, l.jsx)("li", {
                            children: (0, l.jsx)(d(), {
                              href: "/groups",
                              className: "nav-icon",
                              children: (0, l.jsx)("i", {
                                className:
                                  "mat-icon fs-xxl material-symbols-outlined mat-icon",
                                children: "group",
                              }),
                            }),
                          }),
                          (0, l.jsx)("li", {
                            children: (0, l.jsx)(d(), {
                              href: "#",
                              className: "nav-icon",
                              children: (0, l.jsx)("i", {
                                className:
                                  "mat-icon fs-xxl material-symbols-outlined mat-icon",
                                children: "smart_display",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "right-area position-relative d-flex gap-3 gap-xxl-6 align-items-center",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "single-item d-none d-lg-block messages-area ".concat(
                                "message" === n ? "active" : ""
                              ),
                            children: (0, l.jsx)(m, { activeHandler: h }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "single-item d-none d-lg-block messages-area notification-area ".concat(
                                "notification" === n ? "active" : ""
                              ),
                            children: (0, l.jsx)(g, { activeHandler: h }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "single-item d-none d-lg-block profile-area position-relative ".concat(
                                "settings" === n ? "active" : ""
                              ),
                            children: (0, l.jsx)(b, { activeHandler: h }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        },
        R = () => {
          let [e, a] = (0, i.useState)(!0),
            [s, t] = (0, i.useState)(null);
          return (
            (0, i.useEffect)(() => {
              window.addEventListener("load", () => {
                t("loaded");
              });
              let e = setTimeout(() => {
                a(!1);
              }, 1e3);
              return () => clearTimeout(e);
            }, []),
            e
              ? (0, l.jsx)("div", {
                  className:
                    "preloader align-items-center justify-content-center ".concat(
                      s
                    ),
                  children: (0, l.jsx)("span", { className: "loader" }),
                })
              : (0, l.jsx)(l.Fragment, {})
          );
        };
      var D = s(56008);
      s(85349), s(51973);
      let V = () => {
        let [e, a] = (0, i.useState)(0),
          s = () => {
            void 0 !== window && a(window.scrollY);
          };
        return (
          (0, i.useEffect)(
            () => (
              window.addEventListener("scroll", s),
              () => {
                window.removeEventListener("scroll", s);
              }
            ),
            []
          ),
          (0, l.jsx)("button", {
            className: "scrollToTop d-none d-lg-block ".concat(
              e > 200 && "active"
            ),
            children: (0, l.jsx)("i", {
              className: "mat-icon fas fa-angle-double-up",
            }),
          })
        );
      };
      function M(e) {
        let { children: a } = e,
          t = (0, D.usePathname)(),
          n = "";
        return (
          (n = "/index-two" !== t ? "container" : "container-fluid"),
          (0, i.useEffect)(() => {
            s(86736);
          }, []),
          (0, l.jsxs)("html", {
            lang: "en",
            children: [
              (0, l.jsxs)("head", {
                children: [
                  (0, l.jsx)("meta", {
                    name: "description",
                    content: "Circlehub React Nextjs Template",
                  }),
                  (0, l.jsx)("title", {
                    children: "Circlehub - React Nextjs Template",
                  }),
                ],
              }),
              (0, l.jsx)("body", {
                children: (0, l.jsxs)(v.f, {
                  attribute: "class",
                  enableSystem: !1,
                  children: [
                    (0, l.jsx)(R, {}),
                    (0, l.jsx)(V, {}),
                    (0, l.jsx)(B, { clss: n }),
                    (0, l.jsx)(p, {}),
                    a,
                    (0, l.jsx)(C, {}),
                  ],
                }),
              }),
            ],
          })
        );
      }
      s(22803);
    },
    12480: function (e, a, s) {
      "use strict";
      s.r(a);
      var l = s(9268),
        i = s(95083),
        t = s(44450),
        n = s(86006);
      let c = (e) => {
        let { data: a } = e,
          [s, c] = (0, n.useState)(a[0]);
        return (0, l.jsx)(i.R, {
          value: s,
          onChange: c,
          children: (0, l.jsxs)("div", {
            className: "selector",
            children: [
              (0, l.jsx)(i.R.Button, {
                children: (0, l.jsx)("span", {
                  className: "",
                  children: null == s ? void 0 : s.name,
                }),
              }),
              (0, l.jsx)(t.u, {
                as: n.Fragment,
                children: (0, l.jsx)(i.R.Options, {
                  children: a.map((e) =>
                    (0, l.jsx)(
                      i.R.Option,
                      {
                        value: e,
                        children: (a) => {
                          let { selected: s } = a;
                          return (0, l.jsxs)("span", {
                            className: s ? "selected fw-bold" : "",
                            children: [e.name, s],
                          });
                        },
                      },
                      e.id
                    )
                  ),
                }),
              }),
            ],
          }),
        });
      };
      a.default = c;
    },
    21082: function (e, a, s) {
      "use strict";
      var l = s(6733),
        i = s(28546),
        t = s(51081),
        n = s(21524),
        c = s(82506),
        r = s(44062),
        d = s(43806);
      let m = [
        {
          id: 1,
          user_name: "Piter Maio",
          user_avt: d.default,
          number_of_message: 3,
          last_message: "Amet minim mollit non....",
          clss: "sms",
        },
        {
          id: 2,
          user_name: "Annette Black",
          user_avt: l.default,
          number_of_message: null,
          last_message: "You: consequat sunt",
          clss: "",
        },
        {
          id: 3,
          user_name: "Ralph Edwards",
          user_avt: i.default,
          number_of_message: null,
          last_message: "You: consequat sunt",
          clss: "sms",
        },
        {
          id: 4,
          user_name: "Darrell Steward",
          user_avt: t.default,
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
          user_avt: c.default,
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
      a.Z = m;
    },
    22803: function () {},
    52923: function (e, a, s) {
      "use strict";
      s.r(a),
        (a.default = {
          src: "/_next/static/media/add-post-avatar.ac465b56.png",
          height: 50,
          width: 50,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEWm1P+q0//Kzt2n0/+s0//itabCy+YHqunb3/ap0v3+tmW61ewWvvMamtPxv7IhodIiu+0QxPSk0//msouu0vb3xIjenGr2vHat0/6z0fTVy9nowbDb1cPUpI7Bpa4gu/V8zfqtp7WC0fo7zPns0Mn062CrAAAAGHRSTlP+if66o/7+/Abz/vqW/v7+7Xz1/hv+/f0B7p6gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVQImQXBhQGAMBAEsKsbrl/D95+RBIsIpQRpIeLu/RoZwOdaNz4B+ssqa4CQOpVAcBSPG+Qgr7Pt34fBNsaYYbQ/h8MD1PU3pzkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    6733: function (e, a, s) {
      "use strict";
      s.r(a),
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
    28546: function (e, a, s) {
      "use strict";
      s.r(a),
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
    51081: function (e, a, s) {
      "use strict";
      s.r(a),
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
    21524: function (e, a, s) {
      "use strict";
      s.r(a),
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
    82506: function (e, a, s) {
      "use strict";
      s.r(a),
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
    44062: function (e, a, s) {
      "use strict";
      s.r(a),
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
    43806: function (e, a, s) {
      "use strict";
      s.r(a),
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
  },
  function (e) {
    e.O(0, [2011, 414, 4976, 3189, 2667, 8139, 1744], function () {
      return e((e.s = 3486));
    }),
      (_N_E = e.O());
  },
]);
