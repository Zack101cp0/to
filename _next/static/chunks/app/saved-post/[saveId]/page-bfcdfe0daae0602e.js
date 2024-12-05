(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7587],
  {
    70067: function (l, s, e) {
      Promise.resolve().then(e.bind(e, 32750));
    },
    32750: function (l, s, e) {
      "use strict";
      e.r(s);
      var c = e(9268),
        n = e(11479),
        a = e(86006),
        i = e(63505),
        m = e(63754),
        o = e(94230),
        t = e(86689),
        x = e(71304),
        d = e(78236),
        r = e(64);
      let u = () => {
        let [l, s] = (0, a.useState)(!1),
          e = n.Z[2];
        return (0, c.jsx)("main", {
          className: "main-content",
          children: (0, c.jsx)("div", {
            className: "container sidebar-toggler",
            children: (0, c.jsxs)("div", {
              className: "row",
              children: [
                (0, c.jsx)("div", {
                  className: "col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2",
                  children: (0, c.jsx)(m.default, { clss: "d-lg-none" }),
                }),
                (0, c.jsx)("div", {
                  className:
                    "col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z",
                  children: (0, c.jsx)("div", {
                    className: "post-item d-flex flex-column gap-5 gap-md-7",
                    children: (0, c.jsxs)("div", {
                      className: "post-single-box p-3 p-sm-5",
                      children: [
                        (0, c.jsx)(t.Z, { post: e }),
                        (0, c.jsx)(x.Z, {}),
                        (0, c.jsx)(r.Z, {}),
                        e.comments
                          ? null == e
                            ? void 0
                            : e.comments.map((l) =>
                                (0, c.jsx)(
                                  "div",
                                  {
                                    className: "comments-area mt-5",
                                    children: (0, c.jsxs)("div", {
                                      className:
                                        "single-comment-area ms-1 ms-xxl-15",
                                      children: [
                                        (0, c.jsx)(o.Z, { comment: l }),
                                        null == l
                                          ? void 0
                                          : l.replies.map((l, s, e) =>
                                              (0, c.jsx)(
                                                d.Z,
                                                {
                                                  clss:
                                                    e.length - 1 === s
                                                      ? "single-comment-area"
                                                      : "sibling-comment",
                                                  reply: l,
                                                },
                                                l.id
                                              )
                                            ),
                                      ],
                                    }),
                                  },
                                  l.id
                                )
                              )
                          : "",
                      ],
                    }),
                  }),
                }),
                (0, c.jsx)("div", {
                  className: "col-xxl-3 col-xl-4 col-lg-4 col-6 mt-5 mt-xl-0",
                  children: (0, c.jsx)("div", {
                    className:
                      "cus-overflow cus-scrollbar sidebar-head ".concat(
                        l ? "active" : ""
                      ),
                    children: (0, c.jsx)(i.default, {}),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      s.default = u;
    },
    56008: function (l, s, e) {
      l.exports = e(60167);
    },
  },
  function (l) {
    l.O(0, [2011, 414, 9906, 5141, 4574, 2667, 8139, 1744], function () {
      return l((l.s = 70067));
    }),
      (_N_E = l.O());
  },
]);
