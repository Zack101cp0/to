"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4574],
  {
    45143: function (e, s, a) {
      var l = a(9268);
      let t = () =>
        (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("button", {
              type: "button",
              className: "dropdown-btn",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              children: (0, l.jsx)("i", {
                className: "material-symbols-outlined fs-xxl m-0",
                children: "more_horiz",
              }),
            }),
            (0, l.jsxs)("ul", {
              className: "dropdown-menu p-4 pt-2",
              children: [
                (0, l.jsx)("li", {
                  children: (0, l.jsxs)("button", {
                    className: "droplist d-flex align-items-center gap-2",
                    children: [
                      (0, l.jsx)("i", {
                        className: "material-symbols-outlined mat-icon",
                        children: "hide_source",
                      }),
                      (0, l.jsx)("span", { children: "Hide Comments" }),
                    ],
                  }),
                }),
                (0, l.jsx)("li", {
                  children: (0, l.jsxs)("button", {
                    className: "droplist d-flex align-items-center gap-2",
                    children: [
                      (0, l.jsx)("i", {
                        className: "material-symbols-outlined mat-icon",
                        children: "flag",
                      }),
                      (0, l.jsx)("span", { children: "Report Comments" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      s.Z = t;
    },
    94230: function (e, s, a) {
      var l = a(9268),
        t = a(76394),
        i = a.n(t),
        n = a(35846),
        r = a.n(n),
        c = a(45143),
        d = a(87915);
      let m = (e) => {
        let { comment: s } = e,
          { authorAvt: a, authorName: t, commentText: n, replies: m } = s;
        return (0, l.jsxs)("div", {
          className: "".concat(
            m.length > 0 ? "parent-comment" : "",
            " d-flex gap-2 gap-sm-4"
          ),
          children: [
            (0, l.jsx)("div", {
              className: "avatar-item d-center align-items-baseline",
              children: (0, l.jsx)(i(), {
                className: "avatar-img max-un",
                src: a,
                alt: "avatar",
              }),
            }),
            (0, l.jsxs)("div", {
              className: "info-item active",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "title-area",
                      children: [
                        (0, l.jsx)("h6", {
                          className: "m-0 mb-3",
                          children: (0, l.jsx)(r(), {
                            href: "/public-profile/post",
                            children: t,
                          }),
                        }),
                        (0, l.jsx)("p", { className: "mdtxt", children: n }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "btn-group dropend cus-dropdown",
                      children: (0, l.jsx)(c.Z, {}),
                    }),
                  ],
                }),
                (0, l.jsx)(d.default, {}),
              ],
            }),
          ],
        });
      };
      s.Z = m;
    },
    86689: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return m;
        },
      });
      var l = a(9268),
        t = a(76394),
        i = a.n(t),
        n = a(35846),
        r = a.n(n);
      let c = () =>
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("button", {
                type: "button",
                className: "dropdown-btn",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: (0, l.jsx)("i", {
                  className: "material-symbols-outlined fs-xxl m-0",
                  children: "more_horiz",
                }),
              }),
              (0, l.jsxs)("ul", {
                className: "dropdown-menu p-4 pt-2",
                children: [
                  (0, l.jsx)("li", {
                    children: (0, l.jsxs)("button", {
                      className: "droplist d-flex align-items-center gap-2",
                      children: [
                        (0, l.jsx)("i", {
                          className: "material-symbols-outlined mat-icon",
                          children: "bookmark_add",
                        }),
                        (0, l.jsx)("span", { children: "Saved Post" }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsxs)("button", {
                      className: "droplist d-flex align-items-center gap-2",
                      children: [
                        (0, l.jsx)("i", {
                          className: "material-symbols-outlined mat-icon",
                          children: "person_remove",
                        }),
                        (0, l.jsx)("span", { children: "Unfollow" }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsxs)("button", {
                      className: "droplist d-flex align-items-center gap-2",
                      children: [
                        (0, l.jsx)("i", {
                          className: "material-symbols-outlined mat-icon",
                          children: "hide_source",
                        }),
                        (0, l.jsx)("span", { children: "Hide Post" }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsxs)("button", {
                      className: "droplist d-flex align-items-center gap-2",
                      children: [
                        (0, l.jsx)("i", {
                          className: "material-symbols-outlined mat-icon",
                          children: " lock ",
                        }),
                        (0, l.jsx)("span", { children: "Block" }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsxs)("button", {
                      className: "droplist d-flex align-items-center gap-2",
                      children: [
                        (0, l.jsx)("i", {
                          className: "material-symbols-outlined mat-icon",
                          children: " flag ",
                        }),
                        (0, l.jsx)("span", { children: "Report Post" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        d = (e) => {
          let { post: s } = e,
            {
              postText: a,
              authorAvt: t,
              authorName: n,
              hashTags: d,
              imgs: m,
            } = s;
          return (0, l.jsxs)("div", {
            className: "top-area pb-5",
            children: [
              (0, l.jsxs)("div", {
                className: "profile-area d-center justify-content-between",
                children: [
                  (0, l.jsxs)("div", {
                    className: "avatar-item d-flex gap-3 align-items-center",
                    children: [
                      (0, l.jsx)("div", {
                        className: "avatar position-relative",
                        children: (0, l.jsx)(i(), {
                          className: "avatar-img max-un",
                          src: t,
                          alt: n,
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "info-area",
                        children: [
                          (0, l.jsx)("h6", {
                            className: "m-0",
                            children: (0, l.jsx)(r(), {
                              href: "/public-profile/post",
                              children: n,
                            }),
                          }),
                          (0, l.jsx)("span", {
                            className: "mdtxt status",
                            children: "Active",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "btn-group cus-dropdown",
                    children: (0, l.jsx)(c, {}),
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "py-4",
                children: [
                  (0, l.jsx)("p", {
                    className: "description",
                    children: a || "",
                  }),
                  (0, l.jsx)("p", {
                    className: "hastag d-flex gap-2",
                    children:
                      null == d
                        ? void 0
                        : d.map((e) =>
                            (0, l.jsxs)(
                              r(),
                              { href: "#", children: ["#", e] },
                              e
                            )
                          ),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "post-img ".concat(
                  (null == m ? void 0 : m.length) > 1
                    ? "d-flex justify-content-between flex-wrap gap-2 gap-lg-3"
                    : "",
                  " "
                ),
                children:
                  m.length > 0
                    ? (null == m ? void 0 : m.length) > 1
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)("div", {
                              className: "single",
                              children: (0, l.jsx)(i(), {
                                src: m[0],
                                alt: "image",
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "single d-grid gap-3",
                              children: [
                                (0, l.jsx)(i(), { src: m[1], alt: "image" }),
                                (0, l.jsx)(i(), { src: m[2], alt: "image" }),
                              ],
                            }),
                          ],
                        })
                      : (0, l.jsx)(i(), {
                          src: m[0],
                          alt: "image",
                          className: "w-100",
                        })
                    : "",
              }),
            ],
          });
        };
      var m = d;
    },
    71304: function (e, s, a) {
      var l = a(9268),
        t = a(76394),
        i = a.n(t),
        n = a(28546),
        r = a(51081),
        c = a(21524);
      let d = (e) => {
        let { reaction: s = "" } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: "total-react-share ".concat(
                s,
                " pb-4 d-center gap-2 flex-wrap justify-content-between"
              ),
              children: [
                (0, l.jsx)("div", {
                  className:
                    "friends-list d-flex gap-3 align-items-center text-center",
                  children: (0, l.jsxs)("ul", {
                    className:
                      "d-flex align-items-center justify-content-center",
                    children: [
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)(i(), {
                          src: n.default,
                          alt: "image",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)(i(), {
                          src: r.default,
                          alt: "image",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)(i(), {
                          src: c.default,
                          alt: "image",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)("span", {
                          className: "mdtxt d-center",
                          children: "8+",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)("div", {
                  className:
                    "react-list d-flex flex-wrap gap-6 align-items-center text-center",
                  children: [
                    (0, l.jsx)("button", {
                      className: "mdtxt",
                      children: "4 Comments",
                    }),
                    (0, l.jsx)("button", {
                      className: "mdtxt",
                      children: "1 Shares",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between",
              children: [
                (0, l.jsxs)("button", {
                  className: "d-center gap-1 gap-sm-2 mdtxt",
                  children: [
                    (0, l.jsx)("i", {
                      className: "material-symbols-outlined mat-icon",
                      children: " favorite ",
                    }),
                    "Like",
                  ],
                }),
                (0, l.jsxs)("button", {
                  className: "d-center gap-1 gap-sm-2 mdtxt",
                  children: [
                    (0, l.jsx)("i", {
                      className: "material-symbols-outlined mat-icon",
                      children: " chat ",
                    }),
                    "Comment",
                  ],
                }),
                (0, l.jsxs)("button", {
                  className: "d-center gap-1 gap-sm-2 mdtxt",
                  children: [
                    (0, l.jsx)("i", {
                      className: "material-symbols-outlined mat-icon",
                      children: " share ",
                    }),
                    "Share",
                  ],
                }),
              ],
            }),
          ],
        });
      };
      s.Z = d;
    },
    78236: function (e, s, a) {
      var l = a(9268),
        t = a(76394),
        i = a.n(t),
        n = a(35846),
        r = a.n(n),
        c = a(45143),
        d = a(87915);
      let m = (e) => {
        let { reply: s, clss: a = "sibling-comment" } = e,
          { authorAvt: t, authorName: n, replyText: m } = s;
        return (0, l.jsx)("div", {
          className: "".concat(
            a,
            " comment-item-nested single-comment-area mt-4 mt-sm-7 ms-13 ms-sm-15"
          ),
          children: (0, l.jsxs)("div", {
            className: "d-flex gap-2 gap-sm-4 align-items-baseline",
            children: [
              (0, l.jsx)("div", {
                className: "avatar-item",
                children: (0, l.jsx)(i(), {
                  className: "avatar-img max-un",
                  src: t,
                  alt: "avatar",
                }),
              }),
              (0, l.jsxs)("div", {
                className: "info-item",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "title-area",
                        children: [
                          (0, l.jsx)("h6", {
                            className: "m-0 mb-3",
                            children: (0, l.jsx)(r(), {
                              href: "/public-profile/post",
                              children: n,
                            }),
                          }),
                          (0, l.jsx)("p", { className: "mdtxt", children: m }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "btn-group dropend cus-dropdown",
                        children: (0, l.jsx)(c.Z, {}),
                      }),
                    ],
                  }),
                  (0, l.jsx)(d.default, {}),
                ],
              }),
            ],
          }),
        });
      };
      s.Z = m;
    },
    64: function (e, s, a) {
      var l = a(9268),
        t = a(76394),
        i = a.n(t),
        n = a(35846),
        r = a.n(n),
        c = a(52923);
      let d = () =>
        (0, l.jsx)("form", {
          action: "#",
          children: (0, l.jsxs)("div", {
            className: "d-flex mt-5 gap-3",
            children: [
              (0, l.jsx)("div", {
                className: "profile-box d-none d-xxl-block",
                children: (0, l.jsx)(r(), {
                  href: "#",
                  children: (0, l.jsx)(i(), {
                    src: c.default,
                    className: "max-un",
                    alt: "icon",
                  }),
                }),
              }),
              (0, l.jsxs)("div", {
                className:
                  "form-content input-area py-1 d-flex gap-2 align-items-center w-100",
                children: [
                  (0, l.jsx)("input", {
                    placeholder: "Write a comment..",
                    required: !0,
                  }),
                  (0, l.jsxs)("div", {
                    className: "file-input d-flex gap-1 gap-md-2",
                    children: [
                      (0, l.jsx)("div", {
                        className: "file-upload",
                        children: (0, l.jsxs)("label", {
                          className: "file",
                          children: [
                            (0, l.jsx)("input", { type: "file", required: !0 }),
                            (0, l.jsx)("span", {
                              className:
                                "file-custom border-0 d-grid text-center",
                              children: (0, l.jsx)("span", {
                                className:
                                  "material-symbols-outlined mat-icon m-0 xxltxt",
                                children: "gif_box",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "file-upload",
                        children: (0, l.jsxs)("label", {
                          className: "file",
                          children: [
                            (0, l.jsx)("input", { type: "file", required: !0 }),
                            (0, l.jsx)("span", {
                              className:
                                "file-custom border-0 d-grid text-center",
                              children: (0, l.jsx)("span", {
                                className:
                                  "material-symbols-outlined mat-icon m-0 xxltxt",
                                children: "perm_media",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("span", {
                        className: "mood-area",
                        children: (0, l.jsx)("span", {
                          className:
                            "material-symbols-outlined mat-icon m-0 xxltxt",
                          children: "mood",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "btn-area d-flex",
                children: (0, l.jsx)("button", {
                  type: "submit",
                  className: "cmn-btn px-2 px-sm-5 px-lg-6",
                  children: (0, l.jsx)("i", {
                    className: "material-symbols-outlined mat-icon m-0 fs-xxl",
                    children: "near_me",
                  }),
                }),
              }),
            ],
          }),
        });
      s.Z = d;
    },
    11479: function (e, s, a) {
      var l = a(6733),
        t = a(51081),
        i = a(21524),
        n = a(82506),
        r = a(43806),
        c = a(54527),
        d = a(93999),
        m = a(4806),
        o = a(16418);
      let x = [
        {
          id: 1,
          postText:
            "I created Roughly plugin to sketch crafted hand-drawn elements\n      which can be used to any usage (diagrams/flows/decoration/etc)",
          hashTags: [],
          imgs: [c.default],
          authorName: "Lori Cortez",
          authorAvt: l.default,
          comments: [],
        },
        {
          id: 2,
          postText:
            "I created Roughly plugin to sketch crafted hand-drawn elements\n      which can be used to any usage (diagrams/flows/decoration/etc)",
          hashTags: [],
          imgs: [d.default, m.default, o.default],
          authorName: "Lori Cortez",
          authorAvt: l.default,
          comments: [
            {
              id: 1,
              commentText:
                "The only way to solve the problem is to code for the hardware directly",
              authorName: "Lori Cortez",
              authorAvt: t.default,
              replies: [
                {
                  id: 1,
                  replyText: "The only way to solve the",
                  authorName: "Alexa",
                  authorAvt: i.default,
                },
              ],
            },
          ],
        },
        {
          id: 3,
          postText:
            "Nam ornare a nibh id sagittis. Vestibulum nec molestie urna, eget convallis mi. Vestibulum rhoncus ligula eget sem sollicitudin interdum. Aliquam massa lectus, fringilla non diam ut, laoreet convallis risus. Curabitur at metus imperdiet, pellentesque ligula vel,",
          hashTags: [],
          imgs: [],
          authorName: "Loprayos",
          authorAvt: n.default,
          comments: [
            {
              id: 1,
              commentText:
                "The only way to solve the problem is to code for the hardware directly",
              authorName: "Lori Cortez",
              authorAvt: t.default,
              replies: [
                {
                  id: 1,
                  replyText: "The only way to solve the",
                  authorName: "Alexa",
                  authorAvt: i.default,
                },
                {
                  id: 2,
                  replyText: "The only way to solve the",
                  authorName: "Haplika",
                  authorAvt: r.default,
                },
              ],
            },
            {
              id: 2,
              commentText:
                "The only way to solve the problem is to code for the hardware directly",
              authorName: "Marlio",
              authorAvt: t.default,
              replies: [],
            },
          ],
        },
      ];
      s.Z = x;
    },
  },
]);
