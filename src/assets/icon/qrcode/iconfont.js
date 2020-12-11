!(function(e) {
  var t,
    n,
    o,
    i,
    d,
    c,
    h =
      '<svg><symbol id="el-icon-third-erweima" viewBox="0 0 1024 1024"><path d="M465.454545 558.545455v465.454545H0V558.545455h465.454545z m232.727273 325.818181v139.636364h-139.636363v-139.636364h139.636363z m93.090909 139.636364v-93.090909h93.090909v-139.636364h139.636364v232.727273h-232.727273z m-418.909091-372.363636H93.090909v279.272727h279.272727v-279.272727z m418.909091 46.545454v186.181818h-93.090909v-186.181818h93.090909zM279.272727 744.727273v93.090909H186.181818v-93.090909h93.090909z m418.909091-186.181818v139.636363h-139.636363v-139.636363h139.636363z m325.818182 0v139.636363h-139.636364v-139.636363h139.636364zM465.454545 0v465.454545H0V0h465.454545z m558.545455 0v465.454545H558.545455V0h465.454545zM372.363636 93.090909H93.090909v279.272727h279.272727V93.090909z m558.545455 0h-279.272727v279.272727h279.272727V93.090909zM279.272727 186.181818v93.090909H186.181818V186.181818h93.090909z m558.545455 0v93.090909h-93.090909V186.181818h93.090909z" fill="#008df0" ></path></symbol></svg>',
    l = (l = document.getElementsByTagName("script"))[
      l.length - 1
    ].getAttribute("data-injectcss");
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function v() {
    d || ((d = !0), o());
  }
  (t = function() {
    var e, t, n, o;
    ((o = document.createElement("div")).innerHTML = h),
      (h = null),
      (n = o.getElementsByTagName("svg")[0]) &&
        (n.setAttribute("aria-hidden", "true"),
        (n.style.position = "absolute"),
        (n.style.width = 0),
        (n.style.height = 0),
        (n.style.overflow = "hidden"),
        (e = n),
        (t = document.body).firstChild
          ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n))
          : t.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function() {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (d = !1),
        (c = function() {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(c, 50);
          }
          v();
        })(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), v());
        }));
})(window);
