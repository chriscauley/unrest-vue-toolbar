import { resolveComponent as Ar, openBlock as O, createElementBlock as g, createElementVNode as I, Fragment as ee, renderList as ye, createBlock as _r, normalizeClass as C, withCtx as Cr, renderSlot as re, createCommentVNode as Tr, reactive as Nr } from "vue";
const Ur = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [o, n] of e)
    t[o] = n;
  return t;
}, Pr = {
  props: {
    storage: Object
  },
  computed: {
    tools() {
      return this.storage.listTools();
    },
    selected_tool() {
      const { tool: r, variant: e } = this.storage.state.selected;
      return e ? this.tools.find((t) => t.slug === r && t.variants.includes(e)) : this.tools.find((t) => t.slug === r);
    }
  }
}, $r = { class: "ur-toolbar" }, Lr = { class: "ur-toolbar__row" }, Dr = { class: "btn-group" }, jr = {
  key: 0,
  class: "ur-toolbar__separator btn -secondary"
}, Br = ["title", "onClick"], Ir = {
  key: 0,
  class: "ur-toolbar__row btn-group"
}, kr = ["onClick", "title"];
function Fr(r, e, t, o, n, a) {
  var f;
  const s = Ar("unrest-dropdown");
  return O(), g("div", $r, [
    I("div", Lr, [
      I("div", Dr, [
        (O(!0), g(ee, null, ye(a.tools, (u) => (O(), g(ee, {
          key: u.name
        }, [
          u === "separator" ? (O(), g("div", jr)) : u.items ? (O(), _r(s, {
            key: 1,
            items: u.items,
            class: C(u.class)
          }, {
            default: Cr(() => [
              I("i", {
                class: C(u.icon)
              }, null, 2)
            ]),
            _: 2
          }, 1032, ["items", "class"])) : (O(), g("div", {
            key: 2,
            title: u.name,
            onClick: u.click,
            class: C(u.class)
          }, [
            I("i", {
              class: C(u.icon)
            }, null, 2)
          ], 10, Br))
        ], 64))), 128)),
        re(r.$slots, "buttons")
      ]),
      re(r.$slots, "right")
    ]),
    (f = a.selected_tool) != null && f.children ? (O(), g("div", Ir, [
      (O(!0), g(ee, null, ye(a.selected_tool.children, (u) => (O(), g("div", {
        key: u.slug,
        onClick: u.click,
        class: C(u.class),
        title: u.slug
      }, [
        I("i", {
          class: C(u.icon)
        }, null, 2)
      ], 10, kr))), 128))
    ])) : Tr("", !0),
    re(r.$slots, "default")
  ]);
}
const Re = /* @__PURE__ */ Ur(Pr, [["render", Fr]]);
var M = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mr = Object.defineProperty, Oe = Object.getOwnPropertySymbols, qr = Object.prototype.hasOwnProperty, Hr = Object.prototype.propertyIsEnumerable, we = (r, e, t) => e in r ? Mr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ge = (r, e) => {
  for (var t in e || (e = {}))
    qr.call(e, t) && we(r, t, e[t]);
  if (Oe)
    for (var t of Oe(e))
      Hr.call(e, t) && we(r, t, e[t]);
  return r;
}, q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, F = {};
F.get = function(r) {
  if (localStorage)
    try {
      return JSON.parse(localStorage.getItem(r));
    } catch {
      return null;
    }
  else
    return null;
};
F.set = function(r, e) {
  if (localStorage)
    try {
      var t = JSON.stringify(e);
      return localStorage.setItem(r, t), t;
    } catch {
      return null;
    }
  else
    return null;
};
F.remove = function(r) {
  if (localStorage)
    try {
      return localStorage.removeItem(r), !0;
    } catch {
      return null;
    }
  else
    return null;
};
F.clear = function() {
  if (localStorage)
    try {
      return localStorage.clear(), !0;
    } catch {
      return null;
    }
  else
    return null;
};
const Jr = (r = {}) => {
  typeof r == "string" && (r = { LS_KEY: r });
  const { LS_KEY: e, initial: t = {}, ls: o = F } = r, n = Nr(ge(ge({}, t), o.get(e)));
  return { state: n, save: (s) => {
    Object.assign(n, s), o.set(e, n);
  } };
};
var zr = typeof q == "object" && q && q.Object === Object && q, Wr = typeof self == "object" && self && self.Object === Object && self;
zr || Wr || Function("return this")();
var Je = { exports: {} }, ze = function(e, t) {
  return function() {
    for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
      n[a] = arguments[a];
    return e.apply(t, n);
  };
}, Vr = ze, fe = Object.prototype.toString, le = function(r) {
  return function(e) {
    var t = fe.call(e);
    return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function A(r) {
  return r = r.toLowerCase(), function(t) {
    return le(t) === r;
  };
}
function ce(r) {
  return Array.isArray(r);
}
function W(r) {
  return typeof r > "u";
}
function Gr(r) {
  return r !== null && !W(r) && r.constructor !== null && !W(r.constructor) && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}
var We = A("ArrayBuffer");
function Zr(r) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && We(r.buffer), e;
}
function Yr(r) {
  return typeof r == "string";
}
function Kr(r) {
  return typeof r == "number";
}
function Ve(r) {
  return r !== null && typeof r == "object";
}
function J(r) {
  if (le(r) !== "object")
    return !1;
  var e = Object.getPrototypeOf(r);
  return e === null || e === Object.prototype;
}
var Xr = A("Date"), Qr = A("File"), et = A("Blob"), rt = A("FileList");
function de(r) {
  return fe.call(r) === "[object Function]";
}
function tt(r) {
  return Ve(r) && de(r.pipe);
}
function nt(r) {
  var e = "[object FormData]";
  return r && (typeof FormData == "function" && r instanceof FormData || fe.call(r) === e || de(r.toString) && r.toString() === e);
}
var ot = A("URLSearchParams");
function at(r) {
  return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
}
function st() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function pe(r, e) {
  if (!(r === null || typeof r > "u"))
    if (typeof r != "object" && (r = [r]), ce(r))
      for (var t = 0, o = r.length; t < o; t++)
        e.call(null, r[t], t, r);
    else
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && e.call(null, r[n], n, r);
}
function se() {
  var r = {};
  function e(n, a) {
    J(r[a]) && J(n) ? r[a] = se(r[a], n) : J(n) ? r[a] = se({}, n) : ce(n) ? r[a] = n.slice() : r[a] = n;
  }
  for (var t = 0, o = arguments.length; t < o; t++)
    pe(arguments[t], e);
  return r;
}
function it(r, e, t) {
  return pe(e, function(n, a) {
    t && typeof n == "function" ? r[a] = Vr(n, t) : r[a] = n;
  }), r;
}
function ut(r) {
  return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
}
function ft(r, e, t, o) {
  r.prototype = Object.create(e.prototype, o), r.prototype.constructor = r, t && Object.assign(r.prototype, t);
}
function lt(r, e, t) {
  var o, n, a, s = {};
  e = e || {};
  do {
    for (o = Object.getOwnPropertyNames(r), n = o.length; n-- > 0; )
      a = o[n], s[a] || (e[a] = r[a], s[a] = !0);
    r = Object.getPrototypeOf(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}
function ct(r, e, t) {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  var o = r.indexOf(e, t);
  return o !== -1 && o === t;
}
function dt(r) {
  if (!r)
    return null;
  var e = r.length;
  if (W(e))
    return null;
  for (var t = new Array(e); e-- > 0; )
    t[e] = r[e];
  return t;
}
var pt = function(r) {
  return function(e) {
    return r && e instanceof r;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), v = {
  isArray: ce,
  isArrayBuffer: We,
  isBuffer: Gr,
  isFormData: nt,
  isArrayBufferView: Zr,
  isString: Yr,
  isNumber: Kr,
  isObject: Ve,
  isPlainObject: J,
  isUndefined: W,
  isDate: Xr,
  isFile: Qr,
  isBlob: et,
  isFunction: de,
  isStream: tt,
  isURLSearchParams: ot,
  isStandardBrowserEnv: st,
  forEach: pe,
  merge: se,
  extend: it,
  trim: at,
  stripBOM: ut,
  inherits: ft,
  toFlatObject: lt,
  kindOf: le,
  kindOfTest: A,
  endsWith: ct,
  toArray: dt,
  isTypedArray: pt,
  isFileList: rt
}, T = v;
function Se(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Ge = function(e, t, o) {
  if (!t)
    return e;
  var n;
  if (o)
    n = o(t);
  else if (T.isURLSearchParams(t))
    n = t.toString();
  else {
    var a = [];
    T.forEach(t, function(u, c) {
      u === null || typeof u > "u" || (T.isArray(u) ? c = c + "[]" : u = [u], T.forEach(u, function(l) {
        T.isDate(l) ? l = l.toISOString() : T.isObject(l) && (l = JSON.stringify(l)), a.push(Se(c) + "=" + Se(l));
      }));
    }), n = a.join("&");
  }
  if (n) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return e;
}, ht = v;
function G() {
  this.handlers = [];
}
G.prototype.use = function(e, t, o) {
  return this.handlers.push({
    fulfilled: e,
    rejected: t,
    synchronous: o ? o.synchronous : !1,
    runWhen: o ? o.runWhen : null
  }), this.handlers.length - 1;
};
G.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
G.prototype.forEach = function(e) {
  ht.forEach(this.handlers, function(o) {
    o !== null && e(o);
  });
};
var vt = G, mt = v, bt = function(e, t) {
  mt.forEach(e, function(n, a) {
    a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a]);
  });
}, Ze = v;
function P(r, e, t, o, n) {
  Error.call(this), this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), o && (this.request = o), n && (this.response = n);
}
Ze.inherits(P, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Ye = P.prototype, Ke = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(r) {
  Ke[r] = { value: r };
});
Object.defineProperties(P, Ke);
Object.defineProperty(Ye, "isAxiosError", { value: !0 });
P.from = function(r, e, t, o, n, a) {
  var s = Object.create(Ye);
  return Ze.toFlatObject(r, s, function(u) {
    return u !== Error.prototype;
  }), P.call(s, r.message, e, t, o, n), s.name = r.name, a && Object.assign(s, a), s;
};
var D = P, Xe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, R = v;
function xt(r, e) {
  e = e || new FormData();
  var t = [];
  function o(a) {
    return a === null ? "" : R.isDate(a) ? a.toISOString() : R.isArrayBuffer(a) || R.isTypedArray(a) ? typeof Blob == "function" ? new Blob([a]) : Buffer.from(a) : a;
  }
  function n(a, s) {
    if (R.isPlainObject(a) || R.isArray(a)) {
      if (t.indexOf(a) !== -1)
        throw Error("Circular reference detected in " + s);
      t.push(a), R.forEach(a, function(u, c) {
        if (!R.isUndefined(u)) {
          var i = s ? s + "." + c : c, l;
          if (u && !s && typeof u == "object") {
            if (R.endsWith(c, "{}"))
              u = JSON.stringify(u);
            else if (R.endsWith(c, "[]") && (l = R.toArray(u))) {
              l.forEach(function(m) {
                !R.isUndefined(m) && e.append(i, o(m));
              });
              return;
            }
          }
          n(u, i);
        }
      }), t.pop();
    } else
      e.append(s, o(a));
  }
  return n(r), e;
}
var Qe = xt, te = D, Et = function(e, t, o) {
  var n = o.config.validateStatus;
  !o.status || !n || n(o.status) ? e(o) : t(new te("Request failed with status code " + o.status, [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4], o.config, o.request, o));
}, H = v, yt = H.isStandardBrowserEnv() ? function() {
  return {
    write: function(t, o, n, a, s, f) {
      var u = [];
      u.push(t + "=" + encodeURIComponent(o)), H.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), H.isString(a) && u.push("path=" + a), H.isString(s) && u.push("domain=" + s), f === !0 && u.push("secure"), document.cookie = u.join("; ");
    },
    read: function(t) {
      var o = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return o ? decodeURIComponent(o[3]) : null;
    },
    remove: function(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}(), Rt = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, Ot = function(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}, wt = Rt, gt = Ot, er = function(e, t) {
  return e && !wt(t) ? gt(e, t) : t;
}, ne = v, St = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
], At = function(e) {
  var t = {}, o, n, a;
  return e && ne.forEach(e.split(`
`), function(f) {
    if (a = f.indexOf(":"), o = ne.trim(f.substr(0, a)).toLowerCase(), n = ne.trim(f.substr(a + 1)), o) {
      if (t[o] && St.indexOf(o) >= 0)
        return;
      o === "set-cookie" ? t[o] = (t[o] ? t[o] : []).concat([n]) : t[o] = t[o] ? t[o] + ", " + n : n;
    }
  }), t;
}, Ae = v, _t = Ae.isStandardBrowserEnv() ? function() {
  var e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a"), o;
  function n(a) {
    var s = a;
    return e && (t.setAttribute("href", s), s = t.href), t.setAttribute("href", s), {
      href: t.href,
      protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
      host: t.host,
      search: t.search ? t.search.replace(/^\?/, "") : "",
      hash: t.hash ? t.hash.replace(/^#/, "") : "",
      hostname: t.hostname,
      port: t.port,
      pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
    };
  }
  return o = n(window.location.href), function(s) {
    var f = Ae.isString(s) ? n(s) : s;
    return f.protocol === o.protocol && f.host === o.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}(), ie = D, Ct = v;
function rr(r) {
  ie.call(this, r == null ? "canceled" : r, ie.ERR_CANCELED), this.name = "CanceledError";
}
Ct.inherits(rr, ie, {
  __CANCEL__: !0
});
var Z = rr, Tt = function(e) {
  var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}, k = v, Nt = Et, Ut = yt, Pt = Ge, $t = er, Lt = At, Dt = _t, jt = Xe, w = D, Bt = Z, It = Tt, _e = function(e) {
  return new Promise(function(o, n) {
    var a = e.data, s = e.headers, f = e.responseType, u;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    k.isFormData(a) && k.isStandardBrowserEnv() && delete s["Content-Type"];
    var i = new XMLHttpRequest();
    if (e.auth) {
      var l = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.Authorization = "Basic " + btoa(l + ":" + m);
    }
    var d = $t(e.baseURL, e.url);
    i.open(e.method.toUpperCase(), Pt(d, e.params, e.paramsSerializer), !0), i.timeout = e.timeout;
    function _() {
      if (!!i) {
        var x = "getAllResponseHeaders" in i ? Lt(i.getAllResponseHeaders()) : null, p = !f || f === "text" || f === "json" ? i.responseText : i.response, y = {
          data: p,
          status: i.status,
          statusText: i.statusText,
          headers: x,
          config: e,
          request: i
        };
        Nt(function(Q) {
          o(Q), c();
        }, function(Q) {
          n(Q), c();
        }, y), i = null;
      }
    }
    if ("onloadend" in i ? i.onloadend = _ : i.onreadystatechange = function() {
      !i || i.readyState !== 4 || i.status === 0 && !(i.responseURL && i.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, i.onabort = function() {
      !i || (n(new w("Request aborted", w.ECONNABORTED, e, i)), i = null);
    }, i.onerror = function() {
      n(new w("Network Error", w.ERR_NETWORK, e, i, i)), i = null;
    }, i.ontimeout = function() {
      var p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded", y = e.transitional || jt;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), n(new w(p, y.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED, e, i)), i = null;
    }, k.isStandardBrowserEnv()) {
      var j = (e.withCredentials || Dt(d)) && e.xsrfCookieName ? Ut.read(e.xsrfCookieName) : void 0;
      j && (s[e.xsrfHeaderName] = j);
    }
    "setRequestHeader" in i && k.forEach(s, function(p, y) {
      typeof a > "u" && y.toLowerCase() === "content-type" ? delete s[y] : i.setRequestHeader(y, p);
    }), k.isUndefined(e.withCredentials) || (i.withCredentials = !!e.withCredentials), f && f !== "json" && (i.responseType = e.responseType), typeof e.onDownloadProgress == "function" && i.addEventListener("progress", e.onDownloadProgress), typeof e.onUploadProgress == "function" && i.upload && i.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (u = function(x) {
      !i || (n(!x || x && x.type ? new Bt() : x), i.abort(), i = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u))), a || (a = null);
    var B = It(d);
    if (B && ["http", "https", "file"].indexOf(B) === -1) {
      n(new w("Unsupported protocol " + B + ":", w.ERR_BAD_REQUEST, e));
      return;
    }
    i.send(a);
  });
}, kt = null, h = v, Ce = bt, Te = D, Ft = Xe, Mt = Qe, qt = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ne(r, e) {
  !h.isUndefined(r) && h.isUndefined(r["Content-Type"]) && (r["Content-Type"] = e);
}
function Ht() {
  var r;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (r = _e), r;
}
function Jt(r, e, t) {
  if (h.isString(r))
    try {
      return (e || JSON.parse)(r), h.trim(r);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (t || JSON.stringify)(r);
}
var Y = {
  transitional: Ft,
  adapter: Ht(),
  transformRequest: [function(e, t) {
    if (Ce(t, "Accept"), Ce(t, "Content-Type"), h.isFormData(e) || h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return Ne(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var o = h.isObject(e), n = t && t["Content-Type"], a;
    if ((a = h.isFileList(e)) || o && n === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return Mt(a ? { "files[]": e } : e, s && new s());
    } else if (o || n === "application/json")
      return Ne(t, "application/json"), Jt(e);
    return e;
  }],
  transformResponse: [function(e) {
    var t = this.transitional || Y.transitional, o = t && t.silentJSONParsing, n = t && t.forcedJSONParsing, a = !o && this.responseType === "json";
    if (a || n && h.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? Te.from(s, Te.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: kt
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
h.forEach(["delete", "get", "head"], function(e) {
  Y.headers[e] = {};
});
h.forEach(["post", "put", "patch"], function(e) {
  Y.headers[e] = h.merge(qt);
});
var he = Y, zt = v, Wt = he, Vt = function(e, t, o) {
  var n = this || Wt;
  return zt.forEach(o, function(s) {
    e = s.call(n, e, t);
  }), e;
}, tr = function(e) {
  return !!(e && e.__CANCEL__);
}, Ue = v, oe = Vt, Gt = tr, Zt = he, Yt = Z;
function ae(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new Yt();
}
var Kt = function(e) {
  ae(e), e.headers = e.headers || {}, e.data = oe.call(e, e.data, e.headers, e.transformRequest), e.headers = Ue.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), Ue.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(n) {
    delete e.headers[n];
  });
  var t = e.adapter || Zt.adapter;
  return t(e).then(function(n) {
    return ae(e), n.data = oe.call(e, n.data, n.headers, e.transformResponse), n;
  }, function(n) {
    return Gt(n) || (ae(e), n && n.response && (n.response.data = oe.call(e, n.response.data, n.response.headers, e.transformResponse))), Promise.reject(n);
  });
}, E = v, nr = function(e, t) {
  t = t || {};
  var o = {};
  function n(i, l) {
    return E.isPlainObject(i) && E.isPlainObject(l) ? E.merge(i, l) : E.isPlainObject(l) ? E.merge({}, l) : E.isArray(l) ? l.slice() : l;
  }
  function a(i) {
    if (E.isUndefined(t[i])) {
      if (!E.isUndefined(e[i]))
        return n(void 0, e[i]);
    } else
      return n(e[i], t[i]);
  }
  function s(i) {
    if (!E.isUndefined(t[i]))
      return n(void 0, t[i]);
  }
  function f(i) {
    if (E.isUndefined(t[i])) {
      if (!E.isUndefined(e[i]))
        return n(void 0, e[i]);
    } else
      return n(void 0, t[i]);
  }
  function u(i) {
    if (i in t)
      return n(e[i], t[i]);
    if (i in e)
      return n(void 0, e[i]);
  }
  var c = {
    url: s,
    method: s,
    data: s,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: u
  };
  return E.forEach(Object.keys(e).concat(Object.keys(t)), function(l) {
    var m = c[l] || a, d = m(l);
    E.isUndefined(d) && m !== u || (o[l] = d);
  }), o;
}, or = {
  version: "0.27.2"
}, Xt = or.version, S = D, ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(r, e) {
  ve[r] = function(o) {
    return typeof o === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
var Pe = {};
ve.transitional = function(e, t, o) {
  function n(a, s) {
    return "[Axios v" + Xt + "] Transitional option '" + a + "'" + s + (o ? ". " + o : "");
  }
  return function(a, s, f) {
    if (e === !1)
      throw new S(n(s, " has been removed" + (t ? " in " + t : "")), S.ERR_DEPRECATED);
    return t && !Pe[s] && (Pe[s] = !0, console.warn(n(s, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(a, s, f) : !0;
  };
};
function Qt(r, e, t) {
  if (typeof r != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  for (var o = Object.keys(r), n = o.length; n-- > 0; ) {
    var a = o[n], s = e[a];
    if (s) {
      var f = r[a], u = f === void 0 || s(f, a, r);
      if (u !== !0)
        throw new S("option " + a + " must be " + u, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new S("Unknown option " + a, S.ERR_BAD_OPTION);
  }
}
var en = {
  assertOptions: Qt,
  validators: ve
}, ar = v, rn = Ge, $e = vt, Le = Kt, K = nr, tn = er, sr = en, N = sr.validators;
function $(r) {
  this.defaults = r, this.interceptors = {
    request: new $e(),
    response: new $e()
  };
}
$.prototype.request = function(e, t) {
  typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = K(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var o = t.transitional;
  o !== void 0 && sr.assertOptions(o, {
    silentJSONParsing: N.transitional(N.boolean),
    forcedJSONParsing: N.transitional(N.boolean),
    clarifyTimeoutError: N.transitional(N.boolean)
  }, !1);
  var n = [], a = !0;
  this.interceptors.request.forEach(function(d) {
    typeof d.runWhen == "function" && d.runWhen(t) === !1 || (a = a && d.synchronous, n.unshift(d.fulfilled, d.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(d) {
    s.push(d.fulfilled, d.rejected);
  });
  var f;
  if (!a) {
    var u = [Le, void 0];
    for (Array.prototype.unshift.apply(u, n), u = u.concat(s), f = Promise.resolve(t); u.length; )
      f = f.then(u.shift(), u.shift());
    return f;
  }
  for (var c = t; n.length; ) {
    var i = n.shift(), l = n.shift();
    try {
      c = i(c);
    } catch (m) {
      l(m);
      break;
    }
  }
  try {
    f = Le(c);
  } catch (m) {
    return Promise.reject(m);
  }
  for (; s.length; )
    f = f.then(s.shift(), s.shift());
  return f;
};
$.prototype.getUri = function(e) {
  e = K(this.defaults, e);
  var t = tn(e.baseURL, e.url);
  return rn(t, e.params, e.paramsSerializer);
};
ar.forEach(["delete", "get", "head", "options"], function(e) {
  $.prototype[e] = function(t, o) {
    return this.request(K(o || {}, {
      method: e,
      url: t,
      data: (o || {}).data
    }));
  };
});
ar.forEach(["post", "put", "patch"], function(e) {
  function t(o) {
    return function(a, s, f) {
      return this.request(K(f || {}, {
        method: e,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  $.prototype[e] = t(), $.prototype[e + "Form"] = t(!0);
});
var nn = $, on = Z;
function L(r) {
  if (typeof r != "function")
    throw new TypeError("executor must be a function.");
  var e;
  this.promise = new Promise(function(n) {
    e = n;
  });
  var t = this;
  this.promise.then(function(o) {
    if (!!t._listeners) {
      var n, a = t._listeners.length;
      for (n = 0; n < a; n++)
        t._listeners[n](o);
      t._listeners = null;
    }
  }), this.promise.then = function(o) {
    var n, a = new Promise(function(s) {
      t.subscribe(s), n = s;
    }).then(o);
    return a.cancel = function() {
      t.unsubscribe(n);
    }, a;
  }, r(function(n) {
    t.reason || (t.reason = new on(n), e(t.reason));
  });
}
L.prototype.throwIfRequested = function() {
  if (this.reason)
    throw this.reason;
};
L.prototype.subscribe = function(e) {
  if (this.reason) {
    e(this.reason);
    return;
  }
  this._listeners ? this._listeners.push(e) : this._listeners = [e];
};
L.prototype.unsubscribe = function(e) {
  if (!!this._listeners) {
    var t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
};
L.source = function() {
  var e, t = new L(function(n) {
    e = n;
  });
  return {
    token: t,
    cancel: e
  };
};
var an = L, sn = function(e) {
  return function(o) {
    return e.apply(null, o);
  };
}, un = v, fn = function(e) {
  return un.isObject(e) && e.isAxiosError === !0;
}, De = v, ln = ze, z = nn, cn = nr, dn = he;
function ir(r) {
  var e = new z(r), t = ln(z.prototype.request, e);
  return De.extend(t, z.prototype, e), De.extend(t, e), t.create = function(n) {
    return ir(cn(r, n));
  }, t;
}
var b = ir(dn);
b.Axios = z;
b.CanceledError = Z;
b.CancelToken = an;
b.isCancel = tr;
b.VERSION = or.version;
b.toFormData = Qe;
b.AxiosError = D;
b.Cancel = b.CanceledError;
b.all = function(e) {
  return Promise.all(e);
};
b.spread = sn;
b.isAxiosError = fn;
Je.exports = b;
Je.exports.default = b;
var pn = 1 / 0, hn = "[object Symbol]", vn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, mn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, X = "\\ud800-\\udfff", ur = "\\u0300-\\u036f\\ufe20-\\ufe23", fr = "\\u20d0-\\u20f0", lr = "\\u2700-\\u27bf", cr = "a-z\\xdf-\\xf6\\xf8-\\xff", bn = "\\xac\\xb1\\xd7\\xf7", xn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", En = "\\u2000-\\u206f", yn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", dr = "A-Z\\xc0-\\xd6\\xd8-\\xde", pr = "\\ufe0e\\ufe0f", hr = bn + xn + En + yn, me = "['\u2019]", Rn = "[" + X + "]", je = "[" + hr + "]", V = "[" + ur + fr + "]", vr = "\\d+", On = "[" + lr + "]", mr = "[" + cr + "]", br = "[^" + X + hr + vr + lr + cr + dr + "]", ue = "\\ud83c[\\udffb-\\udfff]", wn = "(?:" + V + "|" + ue + ")", xr = "[^" + X + "]", be = "(?:\\ud83c[\\udde6-\\uddff]){2}", xe = "[\\ud800-\\udbff][\\udc00-\\udfff]", U = "[" + dr + "]", Er = "\\u200d", Be = "(?:" + mr + "|" + br + ")", gn = "(?:" + U + "|" + br + ")", Ie = "(?:" + me + "(?:d|ll|m|re|s|t|ve))?", ke = "(?:" + me + "(?:D|LL|M|RE|S|T|VE))?", yr = wn + "?", Rr = "[" + pr + "]?", Sn = "(?:" + Er + "(?:" + [xr, be, xe].join("|") + ")" + Rr + yr + ")*", Or = Rr + yr + Sn, An = "(?:" + [On, be, xe].join("|") + ")" + Or, _n = "(?:" + [xr + V + "?", V, be, xe, Rn].join("|") + ")", Cn = RegExp(me, "g"), Tn = RegExp(V, "g"), Nn = RegExp(ue + "(?=" + ue + ")|" + _n + Or, "g"), Un = RegExp([
  U + "?" + mr + "+" + Ie + "(?=" + [je, U, "$"].join("|") + ")",
  gn + "+" + ke + "(?=" + [je, U + Be, "$"].join("|") + ")",
  U + "?" + Be + "+" + Ie,
  U + "+" + ke,
  vr,
  An
].join("|"), "g"), Pn = RegExp("[" + Er + X + ur + fr + pr + "]"), $n = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ln = {
  \u00C0: "A",
  \u00C1: "A",
  \u00C2: "A",
  \u00C3: "A",
  \u00C4: "A",
  \u00C5: "A",
  \u00E0: "a",
  \u00E1: "a",
  \u00E2: "a",
  \u00E3: "a",
  \u00E4: "a",
  \u00E5: "a",
  \u00C7: "C",
  \u00E7: "c",
  \u00D0: "D",
  \u00F0: "d",
  \u00C8: "E",
  \u00C9: "E",
  \u00CA: "E",
  \u00CB: "E",
  \u00E8: "e",
  \u00E9: "e",
  \u00EA: "e",
  \u00EB: "e",
  \u00CC: "I",
  \u00CD: "I",
  \u00CE: "I",
  \u00CF: "I",
  \u00EC: "i",
  \u00ED: "i",
  \u00EE: "i",
  \u00EF: "i",
  \u00D1: "N",
  \u00F1: "n",
  \u00D2: "O",
  \u00D3: "O",
  \u00D4: "O",
  \u00D5: "O",
  \u00D6: "O",
  \u00D8: "O",
  \u00F2: "o",
  \u00F3: "o",
  \u00F4: "o",
  \u00F5: "o",
  \u00F6: "o",
  \u00F8: "o",
  \u00D9: "U",
  \u00DA: "U",
  \u00DB: "U",
  \u00DC: "U",
  \u00F9: "u",
  \u00FA: "u",
  \u00FB: "u",
  \u00FC: "u",
  \u00DD: "Y",
  \u00FD: "y",
  \u00FF: "y",
  \u00C6: "Ae",
  \u00E6: "ae",
  \u00DE: "Th",
  \u00FE: "th",
  \u00DF: "ss",
  \u0100: "A",
  \u0102: "A",
  \u0104: "A",
  \u0101: "a",
  \u0103: "a",
  \u0105: "a",
  \u0106: "C",
  \u0108: "C",
  \u010A: "C",
  \u010C: "C",
  \u0107: "c",
  \u0109: "c",
  \u010B: "c",
  \u010D: "c",
  \u010E: "D",
  \u0110: "D",
  \u010F: "d",
  \u0111: "d",
  \u0112: "E",
  \u0114: "E",
  \u0116: "E",
  \u0118: "E",
  \u011A: "E",
  \u0113: "e",
  \u0115: "e",
  \u0117: "e",
  \u0119: "e",
  \u011B: "e",
  \u011C: "G",
  \u011E: "G",
  \u0120: "G",
  \u0122: "G",
  \u011D: "g",
  \u011F: "g",
  \u0121: "g",
  \u0123: "g",
  \u0124: "H",
  \u0126: "H",
  \u0125: "h",
  \u0127: "h",
  \u0128: "I",
  \u012A: "I",
  \u012C: "I",
  \u012E: "I",
  \u0130: "I",
  \u0129: "i",
  \u012B: "i",
  \u012D: "i",
  \u012F: "i",
  \u0131: "i",
  \u0134: "J",
  \u0135: "j",
  \u0136: "K",
  \u0137: "k",
  \u0138: "k",
  \u0139: "L",
  \u013B: "L",
  \u013D: "L",
  \u013F: "L",
  \u0141: "L",
  \u013A: "l",
  \u013C: "l",
  \u013E: "l",
  \u0140: "l",
  \u0142: "l",
  \u0143: "N",
  \u0145: "N",
  \u0147: "N",
  \u014A: "N",
  \u0144: "n",
  \u0146: "n",
  \u0148: "n",
  \u014B: "n",
  \u014C: "O",
  \u014E: "O",
  \u0150: "O",
  \u014D: "o",
  \u014F: "o",
  \u0151: "o",
  \u0154: "R",
  \u0156: "R",
  \u0158: "R",
  \u0155: "r",
  \u0157: "r",
  \u0159: "r",
  \u015A: "S",
  \u015C: "S",
  \u015E: "S",
  \u0160: "S",
  \u015B: "s",
  \u015D: "s",
  \u015F: "s",
  \u0161: "s",
  \u0162: "T",
  \u0164: "T",
  \u0166: "T",
  \u0163: "t",
  \u0165: "t",
  \u0167: "t",
  \u0168: "U",
  \u016A: "U",
  \u016C: "U",
  \u016E: "U",
  \u0170: "U",
  \u0172: "U",
  \u0169: "u",
  \u016B: "u",
  \u016D: "u",
  \u016F: "u",
  \u0171: "u",
  \u0173: "u",
  \u0174: "W",
  \u0175: "w",
  \u0176: "Y",
  \u0177: "y",
  \u0178: "Y",
  \u0179: "Z",
  \u017B: "Z",
  \u017D: "Z",
  \u017A: "z",
  \u017C: "z",
  \u017E: "z",
  \u0132: "IJ",
  \u0133: "ij",
  \u0152: "Oe",
  \u0153: "oe",
  \u0149: "'n",
  \u017F: "ss"
}, Dn = typeof M == "object" && M && M.Object === Object && M, jn = typeof self == "object" && self && self.Object === Object && self, Bn = Dn || jn || Function("return this")();
function In(r, e, t, o) {
  var n = -1, a = r ? r.length : 0;
  for (o && a && (t = r[++n]); ++n < a; )
    t = e(t, r[n], n, r);
  return t;
}
function kn(r) {
  return r.split("");
}
function Fn(r) {
  return r.match(vn) || [];
}
function Mn(r) {
  return function(e) {
    return r == null ? void 0 : r[e];
  };
}
var qn = Mn(Ln);
function wr(r) {
  return Pn.test(r);
}
function Hn(r) {
  return $n.test(r);
}
function Jn(r) {
  return wr(r) ? zn(r) : kn(r);
}
function zn(r) {
  return r.match(Nn) || [];
}
function Wn(r) {
  return r.match(Un) || [];
}
var Vn = Object.prototype, Gn = Vn.toString, Fe = Bn.Symbol, Me = Fe ? Fe.prototype : void 0, qe = Me ? Me.toString : void 0;
function Zn(r, e, t) {
  var o = -1, n = r.length;
  e < 0 && (e = -e > n ? 0 : n + e), t = t > n ? n : t, t < 0 && (t += n), n = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var a = Array(n); ++o < n; )
    a[o] = r[o + e];
  return a;
}
function Yn(r) {
  if (typeof r == "string")
    return r;
  if (ro(r))
    return qe ? qe.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -pn ? "-0" : e;
}
function Kn(r, e, t) {
  var o = r.length;
  return t = t === void 0 ? o : t, !e && t >= o ? r : Zn(r, e, t);
}
function Xn(r) {
  return function(e) {
    e = Ee(e);
    var t = wr(e) ? Jn(e) : void 0, o = t ? t[0] : e.charAt(0), n = t ? Kn(t, 1).join("") : e.slice(1);
    return o[r]() + n;
  };
}
function Qn(r) {
  return function(e) {
    return In(ao(to(e).replace(Cn, "")), r, "");
  };
}
function eo(r) {
  return !!r && typeof r == "object";
}
function ro(r) {
  return typeof r == "symbol" || eo(r) && Gn.call(r) == hn;
}
function Ee(r) {
  return r == null ? "" : Yn(r);
}
function to(r) {
  return r = Ee(r), r && r.replace(mn, qn).replace(Tn, "");
}
var no = Qn(function(r, e, t) {
  return r + (t ? " " : "") + oo(e);
}), oo = Xn("toUpperCase");
function ao(r, e, t) {
  return r = Ee(r), e = t ? void 0 : e, e === void 0 ? Hn(r) ? Wn(r) : Fn(r) : r.match(e) || [];
}
var so = no;
const io = (r, e) => `-tool_${r} -variant_${e}`, gr = (r, { tools: e, initial: t = {} }) => {
  t = { selected: {}, ...t };
  const o = Jr({ LS_KEY: r, initial: t }), n = (a) => {
    if (a === "separator")
      return a;
    if (a.getIcon)
      throw "DEPRECATED: Use icon instead of getIcon";
    const { slug: s, name: f, variants: u = [], icon: c = io, items: i } = a, l = (p, y) => {
      typeof a.select == "function" ? a.select(p, y) : a.select === He ? o.save({ [p]: !o.state[p] }) : o.save({ selected: { tool: p, variant: y } });
    }, m = (p, y) => typeof c == "function" ? c(p, y) : c, { tool: d, variant: _ } = o.state.selected, j = !u.length || u.includes(_), B = s === d && j, x = a.select === He && o.state[s];
    return {
      slug: s,
      icon: m(d, j ? _ : u[0]),
      name: f || so(s),
      class: `btn ${B || x ? "-primary" : "-secondary"}`,
      click: () => l(s, u[0]),
      variants: u,
      items: i,
      children: u == null ? void 0 : u.map((p) => ({
        slug: p,
        icon: m(d, p),
        class: ["btn", _ === p ? "-primary" : "-secondary"],
        click: () => l(s, p)
      }))
    };
  };
  return o.listTools = () => (typeof e == "function" ? e(o) : e).map(n), o;
}, He = gr.TOGGLE = "TOGGLE", fo = {
  UnrestToolbar: Re,
  ToolStorage: gr,
  install(r) {
    r.component("UnrestToolbar", Re);
  }
};
export {
  fo as default
};
