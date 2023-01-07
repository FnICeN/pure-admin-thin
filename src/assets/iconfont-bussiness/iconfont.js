(window._iconfont_svg_string_3855228 =
  '<svg><symbol id="icon-shuju" viewBox="0 0 1024 1024"><path d="M757.4528 869.7344H272.4096a30.3104 30.3104 0 1 1 0-60.6208h485.0432a30.3104 30.3104 0 1 1 0 60.6208z"  ></path><path d="M746.6752 657.5104H283.1872a51.2 51.2 0 0 1-51.2-51.2v-261.376a51.2 51.2 0 0 1 51.2-51.2h463.488a51.2 51.2 0 0 1 51.2 51.2v261.4016a51.2 51.2 0 0 1-51.2 51.1744z" fill="#00FFAA" opacity=".1" ></path><path d="M777.6768 253.312a60.672 60.672 0 0 1 60.6208 60.6208v323.3792a60.672 60.672 0 0 1-60.6208 60.6208H252.1856a60.672 60.672 0 0 1-60.6208-60.6208V313.9328a60.672 60.672 0 0 1 60.6208-60.6208h525.4912m0-60.6464H252.1856a121.2672 121.2672 0 0 0-121.2672 121.2672v323.3792a121.2672 121.2672 0 0 0 121.2672 121.2672h525.4656a121.2672 121.2672 0 0 0 121.2672-121.2672V313.9328a121.2416 121.2416 0 0 0-121.2416-121.2672z"  ></path><path d="M413.7984 535.6544c-68.2496 0-115.6864-33.1008-118.6304-35.2a30.3104 30.3104 0 0 1 35.1488-49.408c3.5328 2.4576 78.5408 53.12 168.9856-1.2288 126.976-76.416 231.296-1.6896 235.6736 1.536a30.336 30.336 0 0 1-35.9168 48.8704c-2.9184-2.0992-76.8768-53.504-168.5248 1.536-42.1888 25.3952-82.1504 33.8944-116.736 33.8944z" fill="#17E5A1" ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName("script"))[t.length - 1],
      e = t.getAttribute("data-injectcss"),
      t = t.getAttribute("data-disable-injectsvg");
    if (!t) {
      var a,
        i,
        o,
        c,
        d,
        s = function (t, e) {
          e.parentNode.insertBefore(t, e);
        };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
          );
        } catch (t) {
          console && console.log(t);
        }
      }
      (a = function () {
        var t,
          e = document.createElement("div");
        (e.innerHTML = n._iconfont_svg_string_3855228),
          (e = e.getElementsByTagName("svg")[0]) &&
            (e.setAttribute("aria-hidden", "true"),
            (e.style.position = "absolute"),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = "hidden"),
            (e = e),
            (t = document.body).firstChild
              ? s(e, t.firstChild)
              : t.appendChild(e));
      }),
        document.addEventListener
          ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
            ? setTimeout(a, 0)
            : ((i = function () {
                document.removeEventListener("DOMContentLoaded", i, !1), a();
              }),
              document.addEventListener("DOMContentLoaded", i, !1))
          : document.attachEvent &&
            ((o = a),
            (c = n.document),
            (d = !1),
            r(),
            (c.onreadystatechange = function () {
              "complete" == c.readyState &&
                ((c.onreadystatechange = null), l());
            }));
    }
    function l() {
      d || ((d = !0), o());
    }
    function r() {
      try {
        c.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
